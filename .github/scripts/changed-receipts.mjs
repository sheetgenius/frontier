#!/usr/bin/env node
// Extract the receipts a PR added or changed, so the adversarial verifier only
// re-fetches what the PR touched (not the whole record).
//
// Strategy: diff the PR's changed record-bearing files against the base ref,
// parse the *new* side of each changed file, and collect every receipt URL with
// its enclosing object id, the claimed precision, the claimed channel (signals),
// and the artifact window. We then subtract any URL that was already present on
// the base side of the same file, so edits to surrounding prose don't re-trigger
// verification of an untouched receipt.
//
// Record-bearing files:
//   runs/<run>/findings/*.md        finding.evidence[].url, finding.window
//   runs/<run>/harvest/*.md         inline receipt links in harvest detail
//   runs/<run>/signals/frontier-signals.yml  signal.receipts[], signal.channel
//   content/profiles/*.md           inline claim links (lower-fidelity; included)
//   content/digests/*.md            inline receipt links in operator_brief + prose
//
// Output: JSON to stdout: { window_hint, receipts: [ { url, object, file,
//   precision, channel, kind } ], stats }. Exit 0 always; emptiness is a valid
// result (a non-record PR has nothing to verify).
//
// Usage:  node .github/scripts/changed-receipts.mjs --base <ref> --head <ref>
// In CI:  --base origin/main --head HEAD  (after a fetch of the base ref)

import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, "..", "..");

// gray-matter and yaml are installed under site/node_modules (the only place the
// repo runs `npm ci`). Resolve them from there so this script needs no install of
// its own. Mirrors how site/scripts/*.mjs depend on the same two packages.
const requireFromSite = createRequire(path.join(REPO_ROOT, "site", "package.json"));
const matter = requireFromSite("gray-matter");
const YAML = requireFromSite("yaml");

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, arr) => {
    if (a.startsWith("--")) acc.push([a.slice(2), arr[i + 1]]);
    return acc;
  }, [])
);
const BASE = args.base ?? "origin/main";
const HEAD = args.head ?? "HEAD";

const URL_RE = /https?:\/\/[^\s)<>"'\]]+/g;

// YAML parses bare `2026-06-04` into a JS Date. Normalize any date-ish value back
// to an ISO `YYYY-MM-DD` string so the emitted window is clean for the verifier.
function isoDay(v) {
  if (v == null) return "";
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v);
}
function windowStr(win) {
  if (!win) return "";
  if (typeof win === "string") return win;
  return `${isoDay(win.start)}..${isoDay(win.end)}`;
}

function git(cmdArgs) {
  // stdio: capture stdout, ignore stderr (git writes "fatal: path ... not in
  // <ref>" to stderr for files that didn't exist on the base side - an expected,
  // handled case for newly-added files; we don't want that noise on our stdout
  // JSON or in the CI log).
  return execFileSync("git", cmdArgs, {
    cwd: REPO_ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  });
}

// Files changed in the PR, restricted to record-bearing paths.
function changedRecordFiles() {
  let raw = "";
  try {
    raw = git(["diff", "--name-only", `${BASE}...${HEAD}`]);
  } catch {
    // Fall back to a two-dot diff if the merge base is unavailable.
    raw = git(["diff", "--name-only", BASE, HEAD]);
  }
  return raw
    .split(/\n+/)
    .map((f) => f.trim())
    .filter(Boolean)
    .filter(
      (f) =>
        /^runs\/[^/]+\/findings\/.+\.md$/.test(f) ||
        /^runs\/[^/]+\/harvest\/.+\.md$/.test(f) ||
        /^runs\/[^/]+\/signals\/frontier-signals\.yml$/.test(f) ||
        /^content\/profiles\/.+\.md$/.test(f) ||
        /^content\/digests\/.+\.md$/.test(f)
    );
}

// Content of a file at a given ref ("" if it did not exist there).
function fileAtRef(ref, file) {
  try {
    return git(["show", `${ref}:${file}`]);
  } catch {
    return "";
  }
}

function urlsIn(text) {
  return new Set((text.match(URL_RE) ?? []).map((u) => u.replace(/[.,;]+$/, "")));
}

// --- Per-kind extractors that return [{ url, object, precision, channel }] ---

function fromFindingMd(raw, file) {
  const out = [];
  const fm = matter(raw).data ?? {};
  const id = fm.finding_id ?? path.basename(file, ".md");
  const win = windowStr(fm.window);
  for (const ev of fm.evidence ?? []) {
    if (ev?.url) out.push({ url: ev.url, object: `finding ${id}`, precision: ev.precision ?? "unknown", channel: "", window: win });
  }
  for (const r of fm.receipts ?? []) {
    if (typeof r === "string") out.push({ url: r, object: `finding ${id}`, precision: "unknown", channel: "", window: win });
  }
  return out;
}

function fromSignalsYaml(raw, file) {
  const out = [];
  let doc;
  try {
    doc = YAML.parse(raw);
  } catch {
    return out;
  }
  const win = windowStr(doc?.window);
  for (const sig of doc?.signals ?? []) {
    const receipts = Array.isArray(sig.receipts) ? sig.receipts : sig.receipts ? [sig.receipts] : [];
    for (const r of receipts) {
      out.push({
        url: String(r),
        object: `signal ${sig.id}`,
        precision: "unknown",
        channel: sig.channel ?? "",
        window: win,
      });
    }
  }
  return out;
}

// Markdown with inline links (profiles, digests, harvest detail). We can't bind
// each URL to a single object id cheaply, so we tag with the file and, for
// digests, the nearest operator_brief section when the URL sits in frontmatter.
function fromInlineMd(raw, file) {
  const out = [];
  const parsed = matter(raw);
  const id = parsed.data?.digest_id ?? parsed.data?.profile_id ?? path.basename(file, ".md");
  const win = windowStr(parsed.data?.window);
  // Receipts embedded in the operator_brief / not_promoted frontmatter, plus any
  // URL in the body prose. We scan the whole raw file for URLs and attribute to
  // the artifact id; precision/channel are unknown at this layer (the verifier
  // infers them from the source).
  for (const url of urlsIn(raw)) {
    // Skip schema/self/internal-tooling links that are not receipts.
    if (/json-schema\.org|frontier\.bitter\.sh\/schemas/.test(url)) continue;
    out.push({ url, object: `${path.basename(path.dirname(file))}/${id}`, precision: "unknown", channel: "", window: win });
  }
  return out;
}

function extract(file, raw) {
  if (/\/findings\/.+\.md$/.test(file)) return fromFindingMd(raw, file);
  if (/\/signals\/frontier-signals\.yml$/.test(file)) return fromSignalsYaml(raw, file);
  if (/\/harvest\/.+\.md$/.test(file)) return fromInlineMd(raw, file);
  if (/^content\/(profiles|digests)\/.+\.md$/.test(file)) return fromInlineMd(raw, file);
  return [];
}

// --- Main: collect new receipts minus base-side receipts, per file ---

const files = changedRecordFiles();
const collected = new Map(); // url -> record (first wins, dedup across files)
let windowHint = "";

for (const file of files) {
  const abs = path.join(REPO_ROOT, file);
  const headRaw = fs.existsSync(abs) ? fs.readFileSync(abs, "utf8") : fileAtRef(HEAD, file);
  if (!headRaw) continue;
  const baseRaw = fileAtRef(BASE, file);

  const baseUrls = urlsIn(baseRaw);
  const headRecords = extract(file, headRaw);

  for (const rec of headRecords) {
    const cleanUrl = rec.url.replace(/[.,;]+$/, "");
    if (baseUrls.has(cleanUrl)) continue; // unchanged receipt - skip
    if (collected.has(cleanUrl)) continue;
    collected.set(cleanUrl, { ...rec, url: cleanUrl, file });
    if (!windowHint && rec.window) windowHint = rec.window;
  }
}

const receipts = [...collected.values()];
const out = {
  window_hint: windowHint,
  receipts,
  stats: {
    changed_record_files: files.length,
    receipts_to_verify: receipts.length,
  },
};

process.stdout.write(JSON.stringify(out, null, 2) + "\n");
process.exit(0);
