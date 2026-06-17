#!/usr/bin/env node
// Offline internal-reference integrity checker for Bitter Frontier.
//
// Per council recommendation (research/codex-goal-output/council-02-integrity-checker.md):
// validate that internal references between profiles, findings, signals,
// and digests resolve without network calls.
//
// External link health is a separate (later) tool — this script is offline only.
//
// Exits 0 when clean, 1 when any issues are found.
// Report shape: `kind | file | object context | field path | missing ref | expected | fix hint`.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import matter from "gray-matter";
import YAML from "yaml";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const SITE_DIR = path.resolve(SCRIPT_DIR, "..");
const REPO_ROOT = path.resolve(SITE_DIR, "..");

const RUNS_DIR = path.join(REPO_ROOT, "runs");
const PROFILES_DIR = path.join(REPO_ROOT, "content", "profiles");
const DIGESTS_DIR = path.join(REPO_ROOT, "content", "digests");
const JSONL_FILE = path.join(REPO_ROOT, "data", "frontier_signals.jsonl");
const SOURCES_INDEX = path.join(REPO_ROOT, "sources", "index.yml");
const SOURCES_ADJACENT = path.join(REPO_ROOT, "sources", "adjacent.yml");

function rel(p) {
  return path.relative(REPO_ROOT, p);
}

function readMarkdownFrontmatter(file) {
  const raw = fs.readFileSync(file, "utf8");
  return matter(raw);
}

function readYaml(file) {
  return YAML.parse(fs.readFileSync(file, "utf8"));
}

function isDirSafe(p) {
  return fs.existsSync(p) && fs.statSync(p).isDirectory();
}

// Collect every finding (every run/*/findings/*.md), indexed by finding_id when present.
function collectFindings() {
  const byFindingId = new Map();        // finding_id -> { runId, slug, file }
  const byRunAndSlug = new Map();       // `${runId}/${slug}` -> { runId, slug, file, finding_id? }

  if (!isDirSafe(RUNS_DIR)) return { byFindingId, byRunAndSlug };

  for (const runEntry of fs.readdirSync(RUNS_DIR, { withFileTypes: true })) {
    if (!runEntry.isDirectory()) continue;
    const runId = runEntry.name;
    const findingsDir = path.join(RUNS_DIR, runId, "findings");
    if (!isDirSafe(findingsDir)) continue;

    for (const file of fs.readdirSync(findingsDir)) {
      if (!file.endsWith(".md")) continue;
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(findingsDir, file);
      const fm = readMarkdownFrontmatter(filePath).data;
      const findingId = fm.finding_id;
      const record = { runId, slug, file: filePath, finding_id: findingId };
      byRunAndSlug.set(`${runId}/${slug}`, record);
      if (findingId) byFindingId.set(findingId, record);
    }
  }

  return { byFindingId, byRunAndSlug };
}

// Collect every signal id from run YAMLs + legacy JSONL.
function collectSignalIds() {
  const ids = new Set();

  if (isDirSafe(RUNS_DIR)) {
    for (const runEntry of fs.readdirSync(RUNS_DIR, { withFileTypes: true })) {
      if (!runEntry.isDirectory()) continue;
      const signalsPath = path.join(RUNS_DIR, runEntry.name, "signals", "frontier-signals.yml");
      if (!fs.existsSync(signalsPath)) continue;
      const yaml = readYaml(signalsPath);
      for (const signal of yaml?.signals ?? []) {
        if (signal.id) ids.add(signal.id);
      }
    }
  }

  if (fs.existsSync(JSONL_FILE)) {
    for (const line of fs.readFileSync(JSONL_FILE, "utf8").split(/\n+/)) {
      if (!line.trim()) continue;
      try {
        const sig = JSON.parse(line);
        if (sig.id) ids.add(sig.id);
      } catch {}
    }
  }

  return ids;
}

// Collect the union of watchlist + adjacent source ids.
// Watchlist ids come from sources/index.yml's `sources[].id`.
// Adjacent ids come from sources/adjacent.yml's `adjacent_tools[].id`,
// returned with their status so the no-orphan check can filter to active.
// Per ratified amendment 006.
function collectAllSourceIds() {
  const watchlistIds = new Set();
  const adjacentEntries = new Map(); // id -> { status, file }

  if (fs.existsSync(SOURCES_INDEX)) {
    const idx = readYaml(SOURCES_INDEX);
    for (const src of idx?.sources ?? []) {
      if (src.id) watchlistIds.add(src.id);
    }
  }

  if (fs.existsSync(SOURCES_ADJACENT)) {
    const adj = readYaml(SOURCES_ADJACENT);
    for (const tool of adj?.adjacent_tools ?? []) {
      if (tool.id) {
        adjacentEntries.set(tool.id, {
          status: tool.status ?? "active",
          file: SOURCES_ADJACENT,
        });
      }
    }
  }

  const allIds = new Set([...watchlistIds, ...adjacentEntries.keys()]);
  return { allIds, watchlistIds, adjacentEntries };
}

// Returns all findings carrying a `composes:` array, with their source id
// and resolved composes entries.
function collectFindingComposes() {
  const out = [];

  if (!isDirSafe(RUNS_DIR)) return out;

  for (const runEntry of fs.readdirSync(RUNS_DIR, { withFileTypes: true })) {
    if (!runEntry.isDirectory()) continue;
    const runId = runEntry.name;
    const findingsDir = path.join(RUNS_DIR, runId, "findings");
    if (!isDirSafe(findingsDir)) continue;

    for (const file of fs.readdirSync(findingsDir)) {
      if (!file.endsWith(".md")) continue;
      const filePath = path.join(findingsDir, file);
      const fm = readMarkdownFrontmatter(filePath).data;
      if (!Array.isArray(fm.composes) || fm.composes.length === 0) continue;
      out.push({
        finding_id: fm.finding_id,
        source: fm.source,
        composes: fm.composes,
        file: filePath,
        runId,
      });
    }
  }

  return out;
}

// Returns all (signal-id, file, runId) tuples carrying finding_id refs.
function collectSignalsForFindingRefCheck() {
  const out = [];

  if (isDirSafe(RUNS_DIR)) {
    for (const runEntry of fs.readdirSync(RUNS_DIR, { withFileTypes: true })) {
      if (!runEntry.isDirectory()) continue;
      const runId = runEntry.name;
      const signalsPath = path.join(RUNS_DIR, runId, "signals", "frontier-signals.yml");
      if (!fs.existsSync(signalsPath)) continue;
      const yaml = readYaml(signalsPath);
      for (const signal of yaml?.signals ?? []) {
        out.push({
          id: signal.id,
          file: signalsPath,
          runId,
          finding_ids: Array.isArray(signal.finding_ids) ? signal.finding_ids : [],
          supporting_findings: Array.isArray(signal.supporting_findings) ? signal.supporting_findings : [],
        });
      }
    }
  }

  return out;
}

const issues = [];

function pushIssue({ kind, file, context, field, ref, expected, fix }) {
  issues.push({ kind, file: rel(file), context, field, ref, expected, fix });
}

// --- 1. Collect references ---
const findings = collectFindings();
const signalIds = collectSignalIds();
const signals = collectSignalsForFindingRefCheck();
const sourceRegistry = collectAllSourceIds();
const findingComposes = collectFindingComposes();

// --- 2. Validate profile claims and posture_basis ---
if (isDirSafe(PROFILES_DIR)) {
  for (const file of fs.readdirSync(PROFILES_DIR)) {
    if (!file.endsWith(".md")) continue;
    const filePath = path.join(PROFILES_DIR, file);
    const data = readMarkdownFrontmatter(filePath).data;
    const slug = file.replace(/\.md$/, "");

    for (const claim of data.claims ?? []) {
      if (claim.finding_id == null) continue; // null is allowed for open_question with note
      if (!findings.byFindingId.has(claim.finding_id)) {
        pushIssue({
          kind: "profile-claim-missing-finding",
          file: filePath,
          context: `profile ${slug} · claim ${claim.id}`,
          field: "claims[].finding_id",
          ref: claim.finding_id,
          expected: "an existing finding_id in any run's findings",
          fix: "either fix the finding_id, or remove the claim, or change status to open_question with finding_id omitted and a note: field explaining the absence",
        });
      }
    }

    const basis = data.posture_basis ?? {};
    for (const lens of ["capability", "accessibility", "governance"]) {
      for (const fid of basis[lens] ?? []) {
        if (!findings.byFindingId.has(fid)) {
          pushIssue({
            kind: "profile-posture-missing-finding",
            file: filePath,
            context: `profile ${slug} · posture_basis.${lens}`,
            field: `posture_basis.${lens}[]`,
            ref: fid,
            expected: "an existing finding_id",
            fix: "remove the finding_id or update to the current canonical id",
          });
        }
      }
    }
  }
}

// --- 3. Validate signal finding_ids ---
for (const signal of signals) {
  for (const fid of signal.finding_ids) {
    if (!findings.byFindingId.has(fid)) {
      pushIssue({
        kind: "signal-missing-finding",
        file: signal.file,
        context: `signal ${signal.id}`,
        field: "finding_ids[]",
        ref: fid,
        expected: "an existing finding_id",
        fix: "fix the finding_id or remove from signal",
      });
    }
  }
  // Legacy supporting_findings paths (file paths relative to the run)
  for (const refPath of signal.supporting_findings) {
    const m = /^findings\/([^/]+)\.md$/.exec(refPath) ?? /^([^/]+)\.md$/.exec(refPath);
    if (!m) {
      pushIssue({
        kind: "signal-malformed-supporting-finding",
        file: signal.file,
        context: `signal ${signal.id}`,
        field: "supporting_findings[]",
        ref: refPath,
        expected: "findings/<slug>.md",
        fix: "rewrite as findings/<slug>.md or migrate to finding_ids: [...]",
      });
      continue;
    }
    const slug = m[1];
    if (!findings.byRunAndSlug.has(`${signal.runId}/${slug}`)) {
      pushIssue({
        kind: "signal-missing-supporting-finding-file",
        file: signal.file,
        context: `signal ${signal.id}`,
        field: "supporting_findings[]",
        ref: refPath,
        expected: `runs/${signal.runId}/findings/${slug}.md`,
        fix: "create the missing finding file or fix the path",
      });
    }
  }
}

// --- 4. Validate digest top_signal_ids + Operator Brief inline signal links ---
if (isDirSafe(DIGESTS_DIR)) {
  for (const file of fs.readdirSync(DIGESTS_DIR)) {
    if (!file.endsWith(".md") || file === "index.md") continue;
    const filePath = path.join(DIGESTS_DIR, file);
    const data = readMarkdownFrontmatter(filePath).data;
    const slug = file.replace(/\.md$/, "");

    for (const sid of data.top_signal_ids ?? []) {
      if (!signalIds.has(sid)) {
        pushIssue({
          kind: "digest-top-signal-missing",
          file: filePath,
          context: `digest ${slug}`,
          field: "top_signal_ids[]",
          ref: sid,
          expected: "an existing signal id",
          fix: "fix the signal id or remove from top_signal_ids",
        });
      }
    }

    const brief = data.operator_brief;
    if (brief) {
      for (const section of ["upgrade_check", "try", "watch", "ignore_or_deprioritize", "uncertain"]) {
        for (const item of brief[section] ?? []) {
          const matches = [...String(item).matchAll(/href="\/signals\/([^/"]+)\/"/g)];
          for (const m of matches) {
            if (!signalIds.has(m[1])) {
              pushIssue({
                kind: "operator-brief-broken-signal-link",
                file: filePath,
                context: `digest ${slug} · operator_brief.${section}`,
                field: `operator_brief.${section}[]`,
                ref: m[1],
                expected: "an existing signal id at /signals/<id>/",
                fix: "fix the signal id in the inline HTML or remove the link",
              });
            }
          }
        }
      }
    }

    for (const item of data.not_promoted ?? []) {
      if (item.finding_id && !findings.byFindingId.has(item.finding_id)) {
        pushIssue({
          kind: "digest-not-promoted-missing-finding",
          file: filePath,
          context: `digest ${slug} · not_promoted`,
          field: "not_promoted[].finding_id",
          ref: item.finding_id,
          expected: "an existing finding_id",
          fix: "fix the finding_id or remove the not_promoted entry",
        });
      }
    }
  }
}

// --- 5. Validate finding `composes:` arrays (amendment 006) ---
// Each composes id must resolve against watchlist ∪ adjacent.
// A finding must not list its own `source` in `composes:`.
const referencedAdjacentIds = new Set();
for (const fc of findingComposes) {
  for (const composeId of fc.composes) {
    if (!sourceRegistry.allIds.has(composeId)) {
      pushIssue({
        kind: "finding-composes-unknown-id",
        file: fc.file,
        context: `finding ${fc.finding_id} · composes`,
        field: "composes[]",
        ref: composeId,
        expected: "an id in sources/index.yml or sources/adjacent.yml",
        fix: "fix the id, add it to sources/adjacent.yml with the required fields, or remove from composes",
      });
    } else if (composeId === fc.source) {
      pushIssue({
        kind: "finding-composes-self",
        file: fc.file,
        context: `finding ${fc.finding_id} · composes`,
        field: "composes[]",
        ref: composeId,
        expected: "an id different from the finding's own source",
        fix: "remove the self-reference from composes",
      });
    } else if (sourceRegistry.adjacentEntries.has(composeId)) {
      // Track which adjacent ids are referenced for the no-orphan check.
      referencedAdjacentIds.add(composeId);
    }
  }
}

// --- 6. Validate sources/adjacent.yml no-orphan rule (amendment 006) ---
// Every adjacent entry with status: active must be referenced by at
// least one finding's composes array. Archived entries are exempt.
for (const [id, entry] of sourceRegistry.adjacentEntries.entries()) {
  if (entry.status !== "active") continue;
  if (!referencedAdjacentIds.has(id)) {
    pushIssue({
      kind: "adjacent-orphan",
      file: entry.file,
      context: `sources/adjacent.yml · ${id}`,
      field: "adjacent_tools[].id",
      ref: id,
      expected: "referenced by at least one accepted finding's composes array",
      fix: `reference it from a finding, or set status: archived if the tool is no longer composed with`,
    });
  }
}

// --- Report ---
if (issues.length === 0) {
  console.log("integrity check: clean");
  console.log(`  ${findings.byFindingId.size} findings indexed, ${signalIds.size} signals indexed`);
  console.log(`  ${sourceRegistry.watchlistIds.size} watchlist sources, ${sourceRegistry.adjacentEntries.size} adjacent (${referencedAdjacentIds.size} referenced)`);
  process.exit(0);
}

console.error(`integrity check: ${issues.length} issue(s)\n`);

const byKind = {};
for (const issue of issues) {
  byKind[issue.kind] = (byKind[issue.kind] ?? 0) + 1;
}
console.error("Summary:");
for (const [kind, count] of Object.entries(byKind).sort()) {
  console.error(`  ${count.toString().padStart(4)}  ${kind}`);
}
console.error("");

for (const issue of issues) {
  console.error(`${issue.kind}`);
  console.error(`  file:    ${issue.file}`);
  console.error(`  context: ${issue.context}`);
  console.error(`  field:   ${issue.field}`);
  console.error(`  ref:     ${issue.ref}`);
  console.error(`  expect:  ${issue.expected}`);
  console.error(`  fix:     ${issue.fix}`);
  console.error("");
}

process.exit(1);
