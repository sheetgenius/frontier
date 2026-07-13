#!/usr/bin/env node
// External link health checker for Bitter Frontier receipts.
//
// Per the R6 council dossier:
// - Location A: standalone Node CLI (not Astro endpoint, not build-time)
// - Scope: structured evidence URLs (findings) + content/runs/sources markdown links, segmented
// - Failure classes: 4xx broken (except auth/rate), 5xx+timeout retry, 3xx redirect (visible drift),
//   DNS broken. GitHub blob URL rot gets a specific diagnostic.
// - Polite: per-origin throttle, cache, identifying User-Agent
// - Cadence: manual before each digest, weekly cron, never block builds
// - Named failure mode: "Soft-OK Receipt Drift" - providers return 200 for login walls or
//   moved-docs shells. So the report shows final URL + redirects + content-type, not just status.
//
// Usage:
//   node scripts/check-external-links.mjs \
//     [--paths <path> ...] (default: content runs sources) \
//     [--cache .cache/link-health.json] (cache file path) \
//     [--report-json runs/link-health/latest.json] \
//     [--report-md   runs/link-health/latest.md] \
//     [--ttl-hours 24]    (skip URLs successfully checked within this window) \
//     [--concurrency 4]   (max concurrent requests across all origins) \
//     [--per-origin 1]    (max concurrent per origin) \
//     [--timeout-ms 15000] \
//     [--user-agent "..."] \
//     [--limit N]         (only check first N urls; useful for smoke testing) \
//     [--quiet]
//
// Exits 0 always (report-only). To gate on broken links, parse the JSON report downstream.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import matter from "gray-matter";
import YAML from "yaml";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const SITE_DIR = path.resolve(SCRIPT_DIR, "..");
const REPO_ROOT = path.resolve(SITE_DIR, "..");

// --- Arg parsing ---
const args = parseArgs(process.argv.slice(2));
const PATHS = args.paths?.length ? args.paths : ["content", "runs", "sources"];
const CACHE_FILE = args["cache"] ?? path.join(REPO_ROOT, ".cache", "link-health.json");
const REPORT_JSON = args["report-json"] ?? path.join(REPO_ROOT, "runs", "link-health", "latest.json");
const REPORT_MD = args["report-md"] ?? path.join(REPO_ROOT, "runs", "link-health", "latest.md");
const TTL_HOURS = Number(args["ttl-hours"] ?? 24);
const CONCURRENCY = Number(args["concurrency"] ?? 4);
const PER_ORIGIN = Number(args["per-origin"] ?? 1);
const TIMEOUT_MS = Number(args["timeout-ms"] ?? 15000);
const LIMIT = args["limit"] ? Number(args["limit"]) : null;
const QUIET = !!args["quiet"];
const USER_AGENT =
  args["user-agent"] ??
  "Bitter Frontier link health check (https://frontier.bitter.sh)";
const SCAN_EXCLUDES = new Set(
  [CACHE_FILE, REPORT_JSON, REPORT_MD].map((file) => path.resolve(file)),
);

function parseArgs(argv) {
  const out = { paths: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--paths") {
      while (i + 1 < argv.length && !argv[i + 1].startsWith("--")) {
        out.paths.push(argv[++i]);
      }
    } else if (a.startsWith("--")) {
      const k = a.slice(2);
      const v = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : true;
      out[k] = v;
    }
  }
  return out;
}

function logProgress(line) {
  if (QUIET) return;
  process.stderr.write(line + "\n");
}

// --- URL extraction ---
const URL_RE = /(https?:\/\/[^\s)"'`<>\]]+)/g;
const MD_LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^\s)"'`<>]+)\)/g;

const collected = new Map(); // url -> [{ source: "evidence" | "markdown", file, label? }]

function record(url, source, file, label) {
  url = url.replace(/[),.;:]+$/, ""); // strip trailing punct from URL extraction
  if (typeof label === "string") {
    label = label
      .replace(/[\u2010-\u2015]/g, "-")
      .replace(/\u2026/g, "...")
      .replace(/\u2190/g, "<-")
      .replace(/\u2192/g, "->")
      .replace(/\u00b7/g, "/");
  }
  const existing = collected.get(url) ?? [];
  existing.push({ source, file: path.relative(REPO_ROOT, file), label });
  collected.set(url, existing);
}

function walkDirCollect(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (SCAN_EXCLUDES.has(path.resolve(full))) continue;
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
      walkDirCollect(full);
    } else if (entry.isFile()) {
      if (entry.name.endsWith(".md")) {
        scanMarkdown(full);
      } else if (entry.name.endsWith(".yml") || entry.name.endsWith(".yaml")) {
        scanYaml(full);
      }
    }
  }
}

function scanMarkdown(file) {
  const raw = fs.readFileSync(file, "utf8");
  let body = raw;
  let fm = {};
  try {
    const parsed = matter(raw);
    fm = parsed.data;
    body = parsed.content;
  } catch {}

  // 1. Evidence URLs from finding/signal frontmatter
  if (Array.isArray(fm.evidence)) {
    for (const ev of fm.evidence) {
      if (ev?.url) record(ev.url, "evidence", file, ev.label);
    }
  }
  if (Array.isArray(fm.receipts)) {
    for (const r of fm.receipts) {
      if (typeof r === "string") record(r, "evidence", file, "receipt");
      else if (r?.url) record(r.url, "evidence", file, r.label);
    }
  }

  // 2. Markdown body inline links + bare URLs (treat as "markdown")
  for (const m of body.matchAll(MD_LINK_RE)) {
    record(m[2], "markdown", file, m[1].slice(0, 80));
  }
  // Bare URLs not already captured as markdown links
  for (const m of body.matchAll(URL_RE)) {
    const url = m[1].replace(/[),.;:]+$/, "");
    if (!collected.has(url)) record(url, "markdown", file);
  }
}

function scanYaml(file) {
  const raw = fs.readFileSync(file, "utf8");
  let parsed;
  try {
    parsed = YAML.parse(raw);
  } catch {
    return;
  }
  collectFromYamlObject(parsed, file);
}

function collectFromYamlObject(obj, file) {
  if (obj == null) return;
  if (typeof obj === "string") {
    if (obj.match(/^https?:\/\//)) record(obj, "yaml", file);
    return;
  }
  if (Array.isArray(obj)) {
    for (const item of obj) collectFromYamlObject(item, file);
    return;
  }
  if (typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (typeof v === "string" && v.match(/^https?:\/\//)) {
        const isEvidence = ["url", "homepage", "docs", "repo", "changelog"].includes(k);
        record(v, isEvidence ? "evidence" : "yaml", file, k);
      } else {
        collectFromYamlObject(v, file);
      }
    }
  }
}

// --- Cache ---
let cache = {};
if (fs.existsSync(CACHE_FILE)) {
  try {
    cache = JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
  } catch {}
}

function cacheFresh(url) {
  const entry = cache[url];
  if (!entry || !entry.checked_at) return false;
  const ageMs = Date.now() - new Date(entry.checked_at).getTime();
  if (ageMs > TTL_HOURS * 3600 * 1000) return false;
  // Only honor cache for ok / redirected results; always re-check broken or retry
  return entry.status_class === "ok" || entry.status_class === "redirected";
}

// --- Origin throttling ---
const inflightByOrigin = new Map(); // origin -> count
function takeOrigin(origin) {
  const n = inflightByOrigin.get(origin) ?? 0;
  if (n >= PER_ORIGIN) return false;
  inflightByOrigin.set(origin, n + 1);
  return true;
}
function releaseOrigin(origin) {
  const n = inflightByOrigin.get(origin) ?? 1;
  inflightByOrigin.set(origin, Math.max(0, n - 1));
}

async function waitForOrigin(origin) {
  while (!takeOrigin(origin)) {
    await new Promise((r) => setTimeout(r, 100));
  }
}

// --- Checker ---
function classifyStatus(res) {
  if (!res) return "dns_or_network";
  if (res.status >= 200 && res.status < 300) return "ok";
  if (res.status >= 300 && res.status < 400) return "redirected";
  if (res.status === 401 || res.status === 403) return "auth_wall";
  if (res.status === 429) return "rate_limited";
  if (res.status >= 400 && res.status < 500) return "broken";
  if (res.status >= 500) return "retry";
  return "unknown";
}

function githubDiagnostic(url, finalUrl, statusClass) {
  // Detect GitHub blob URL rot: 404 likely means branch/tag/path moved
  if (!url.startsWith("https://github.com")) return null;
  if (statusClass === "broken" && url.includes("/blob/")) {
    return "GitHub blob 404 - branch/tag/path likely moved. Check if the ref still exists or if the file was renamed.";
  }
  if (statusClass === "redirected" && finalUrl && finalUrl !== url) {
    if (finalUrl.match(/\/orgs\/[^/]+\/repositories/) || finalUrl.endsWith("/404")) {
      return "GitHub redirect to org page or 404 - repo likely renamed, transferred, or deleted.";
    }
    return "GitHub redirect - repo rename or path move; consider updating the link.";
  }
  return null;
}

async function checkOnce(url) {
  const requestUrl = new URL(url);
  requestUrl.hash = "";
  const normalizedRequestUrl = requestUrl.href;
  const origin = requestUrl.origin;
  await waitForOrigin(origin);
  const start = Date.now();
  let res, err, finalUrl, contentType, timer;
  try {
    const ctl = new AbortController();
    timer = setTimeout(() => ctl.abort(), TIMEOUT_MS);
    res = await fetch(requestUrl, {
      method: "GET",
      redirect: "follow",
      headers: { "User-Agent": USER_AGENT, accept: "*/*" },
      signal: ctl.signal,
    });
    finalUrl = res.url;
    contentType = res.headers.get("content-type") ?? null;
  } catch (e) {
    err = e?.name === "AbortError" ? "timeout" : (e?.message ?? String(e));
  } finally {
    clearTimeout(timer);
    if (res?.body) {
      try {
        await res.body.cancel();
      } catch {}
    }
    releaseOrigin(origin);
  }

  const elapsed_ms = Date.now() - start;
  const status = res?.status ?? null;
  const redirected = !!finalUrl && finalUrl !== normalizedRequestUrl;
  const status_class = err === "timeout"
    ? "retry"
    : redirected && res && res.status >= 200 && res.status < 400
      ? "redirected"
      : classifyStatus(res);
  const note = res ? githubDiagnostic(url, finalUrl, status_class) : null;
  return {
    url,
    status,
    status_class,
    final_url: finalUrl ?? null,
    redirected,
    content_type: contentType,
    elapsed_ms,
    error: err ?? null,
    note,
    checked_at: new Date().toISOString(),
  };
}

// --- Concurrency-limited worker pool ---
async function runPool(items, work, concurrency) {
  let i = 0;
  const results = [];
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await work(items[idx], idx);
      if (!QUIET && (idx + 1) % 10 === 0) {
        logProgress(`  ${idx + 1}/${items.length} checked`);
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return results;
}

// --- Main ---
for (const p of PATHS) {
  const full = path.resolve(REPO_ROOT, p);
  if (!fs.existsSync(full)) continue;
  if (fs.statSync(full).isDirectory()) walkDirCollect(full);
}

const isHttpUrl = (u) => {
  try {
    const parsed = new URL(u);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
};
const allUrls = Array.from(collected.keys()).sort();
const invalidUrls = allUrls.filter((u) => !isHttpUrl(u));
if (invalidUrls.length) {
  logProgress(`Skipped ${invalidUrls.length} unparseable URL(s) (likely illustrative code-span examples, not receipts): ${invalidUrls.slice(0, 3).join(", ")}`);
}
let urls = allUrls.filter(isHttpUrl);
if (LIMIT && LIMIT > 0) urls = urls.slice(0, LIMIT);

logProgress(`Discovered ${urls.length} unique URL(s) across ${PATHS.join(", ")}.`);
logProgress(`Cache: ${CACHE_FILE} (TTL ${TTL_HOURS}h)`);
logProgress(`Concurrency: ${CONCURRENCY} total, ${PER_ORIGIN} per origin`);

const toCheck = [];
const reusedFromCache = [];
for (const url of urls) {
  if (cacheFresh(url)) {
    reusedFromCache.push({ ...cache[url], reused_from_cache: true });
  } else {
    toCheck.push(url);
  }
}

logProgress(`Checking ${toCheck.length} URL(s); ${reusedFromCache.length} cache-fresh.`);

const fresh = await runPool(toCheck, async (url) => {
  const result = await checkOnce(url);
  cache[url] = result;
  return result;
}, CONCURRENCY);

// Persist cache
const cacheDir = path.dirname(CACHE_FILE);
if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });
fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));

// Build report
const all = [...fresh, ...reusedFromCache];
const enriched = all.map((entry) => ({
  ...entry,
  sources: collected.get(entry.url) ?? [],
  classes: Array.from(new Set((collected.get(entry.url) ?? []).map((s) => s.source))),
}));

const counts = enriched.reduce((acc, e) => {
  acc[e.status_class] = (acc[e.status_class] ?? 0) + 1;
  return acc;
}, {});

const evidenceBroken = enriched.filter((e) => e.classes.includes("evidence") && (e.status_class === "broken" || e.status_class === "dns_or_network"));
const evidenceRedirected = enriched.filter((e) => e.classes.includes("evidence") && e.status_class === "redirected");
const evidenceRetry = enriched.filter((e) => e.classes.includes("evidence") && (e.status_class === "retry" || e.status_class === "rate_limited" || e.status_class === "auth_wall"));

const report = {
  schema_version: "bitter.frontier_link_health.v0",
  checked_at: new Date().toISOString(),
  paths: PATHS,
  total: enriched.length,
  fresh_checks: fresh.length,
  reused_from_cache: reusedFromCache.length,
  counts,
  evidence_class: {
    broken: evidenceBroken.length,
    redirected: evidenceRedirected.length,
    retry_or_auth_or_rate: evidenceRetry.length,
  },
  entries: enriched.sort((a, b) => {
    // Sort: broken first, then auth_wall, then rate, then retry, then redirected, then ok
    const order = { broken: 0, dns_or_network: 0, auth_wall: 1, rate_limited: 2, retry: 3, redirected: 4, ok: 5, unknown: 6 };
    return (order[a.status_class] ?? 9) - (order[b.status_class] ?? 9);
  }),
};

// Write JSON
const jsonDir = path.dirname(REPORT_JSON);
if (!fs.existsSync(jsonDir)) fs.mkdirSync(jsonDir, { recursive: true });
fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2));

// Write Markdown
const md = renderMarkdown(report);
const mdDir = path.dirname(REPORT_MD);
if (!fs.existsSync(mdDir)) fs.mkdirSync(mdDir, { recursive: true });
fs.writeFileSync(REPORT_MD, md);

// Terminal summary
console.log("");
console.log("Link health summary");
console.log("-------------------");
console.log(`  total:       ${report.total}`);
console.log(`  fresh:       ${report.fresh_checks}`);
console.log(`  cached:      ${report.reused_from_cache}`);
console.log("");
console.log("  by status_class:");
for (const [cls, n] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
  console.log(`    ${cls.padEnd(20)} ${n}`);
}
console.log("");
console.log("  evidence class (high trust):");
console.log(`    broken:      ${evidenceBroken.length}`);
console.log(`    redirected:  ${evidenceRedirected.length}`);
console.log(`    auth/retry:  ${evidenceRetry.length}`);
console.log("");
console.log(`Reports: ${path.relative(REPO_ROOT, REPORT_JSON)}`);
console.log(`         ${path.relative(REPO_ROOT, REPORT_MD)}`);
console.log(`Cache:   ${path.relative(REPO_ROOT, CACHE_FILE)}`);

function renderMarkdown(report) {
  const lines = [];
  lines.push(`# Link health - ${report.checked_at}`);
  lines.push("");
  lines.push(`Total URLs: **${report.total}** | Fresh checks: ${report.fresh_checks} | Cached: ${report.reused_from_cache}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push("| status class | count |");
  lines.push("|---|---|");
  for (const [cls, n] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
    lines.push(`| ${cls} | ${n} |`);
  }
  lines.push("");
  lines.push("## Evidence-class issues");
  lines.push("");
  lines.push(`- **broken**: ${evidenceBroken.length}`);
  lines.push(`- **redirected**: ${evidenceRedirected.length}`);
  lines.push(`- **auth_wall / rate / retry**: ${evidenceRetry.length}`);
  lines.push("");

  const sections = [
    { title: "Broken (evidence)", items: evidenceBroken },
    { title: "Redirected (evidence)", items: evidenceRedirected },
    { title: "Auth-wall / rate / retry (evidence)", items: evidenceRetry },
  ];
  for (const sec of sections) {
    if (sec.items.length === 0) continue;
    lines.push(`### ${sec.title}`);
    lines.push("");
    for (const e of sec.items) {
      lines.push(`- \`${e.url}\``);
      if (e.final_url && e.final_url !== e.url) lines.push(`  - final: \`${e.final_url}\``);
      lines.push(`  - status: ${e.status ?? "-"} (${e.status_class})${e.note ? " - " + e.note : ""}`);
      lines.push(`  - cited in:`);
      for (const s of e.sources.slice(0, 5)) {
        lines.push(`    - \`${s.file}\`${s.label ? ` (${s.label})` : ""}`);
      }
      if (e.sources.length > 5) lines.push(`    - ...and ${e.sources.length - 5} more`);
    }
    lines.push("");
  }

  return lines.join("\n");
}
