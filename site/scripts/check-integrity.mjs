#!/usr/bin/env node
// Offline internal-reference integrity checker for Bitter Frontier.
//
// Per council recommendation (research/codex-goal-output/council-02-integrity-checker.md):
// validate that internal references between profiles, findings, signals,
// and digests resolve without network calls.
//
// External link health is a separate (later) tool - this script is offline only.
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
const SOURCE_CONTRACT_SCHEMA = path.join(REPO_ROOT, "schemas", "source-contract.schema.json");

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
          status: signal.status ?? "accepted",
          correction: signal.correction,
          sections: Array.isArray(signal.sections)
            ? signal.sections
            : typeof signal.section === "string"
              ? [signal.section]
              : [],
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

function collectRunSignalSummaries() {
  const byRunId = new Map();
  if (!isDirSafe(RUNS_DIR)) return byRunId;

  for (const runEntry of fs.readdirSync(RUNS_DIR, { withFileTypes: true })) {
    if (!runEntry.isDirectory()) continue;
    const runId = runEntry.name;
    const signalsPath = path.join(RUNS_DIR, runId, "signals", "frontier-signals.yml");
    const hasSignalsFile = fs.existsSync(signalsPath);
    const signalEntries = hasSignalsFile ? readYaml(signalsPath)?.signals ?? [] : [];
    const accepted = signalEntries.filter((signal) => signal.status !== "withdrawn");
    const withdrawn = signalEntries.filter((signal) => signal.status === "withdrawn");
    const findingsDir = path.join(RUNS_DIR, runId, "findings");
    const findingCount = isDirSafe(findingsDir)
      ? fs.readdirSync(findingsDir).filter((file) => file.endsWith(".md")).length
      : 0;
    const manifestPath = path.join(RUNS_DIR, runId, "manifest.yml");
    const manifest = fs.existsSync(manifestPath) ? readYaml(manifestPath) : undefined;
    const enforcesMaterializedFindingCount = typeof manifest?.generated_findings === "string"
      && /^findings\//.test(manifest.generated_findings);
    if (!manifest && signalEntries.length === 0 && findingCount === 0) continue;
    byRunId.set(runId, {
      runId,
      signalsPath,
      manifestPath,
      manifest,
      hasSignalsFile,
      accepted,
      withdrawn,
      findingCount,
      enforcesMaterializedFindingCount,
    });
  }
  return byRunId;
}

const issues = [];

function pushIssue({ kind, file, context, field, ref, expected, fix }) {
  issues.push({ kind, file: rel(file), context, field, ref, expected, fix });
}

function schemaValueType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  if (Number.isInteger(value)) return "integer";
  return typeof value;
}

function matchesSchemaType(value, expectedType) {
  if (expectedType === "array") return Array.isArray(value);
  if (expectedType === "object") return typeof value === "object" && value !== null && !Array.isArray(value);
  if (expectedType === "integer") return Number.isInteger(value);
  if (expectedType === "number") return typeof value === "number" && Number.isFinite(value);
  return typeof value === expectedType;
}

function validateObjectShape(value, schema, file, context, fieldPath) {
  if (!schema || value == null) return;
  const location = fieldPath || "(root)";
  if (schema.type && !matchesSchemaType(value, schema.type)) {
    pushIssue({
      kind: "source-contract-type-mismatch",
      file,
      context,
      field: location,
      ref: schemaValueType(value),
      expected: schema.type,
      fix: `rewrite ${location} as ${schema.type}`,
    });
    return;
  }
  if (Object.hasOwn(schema, "const") && value !== schema.const) {
    pushIssue({
      kind: "source-contract-const-mismatch",
      file,
      context,
      field: location,
      ref: String(value),
      expected: JSON.stringify(schema.const),
      fix: `set ${location} to the schema's required constant`,
    });
  }
  if (Array.isArray(schema.enum) && !schema.enum.includes(value)) {
    pushIssue({
      kind: "source-contract-enum-mismatch",
      file,
      context,
      field: location,
      ref: String(value),
      expected: schema.enum.map(String).join(", "),
      fix: `set ${location} to one of the declared values`,
    });
  }
  if (typeof value === "string" && schema.pattern && !new RegExp(schema.pattern).test(value)) {
    pushIssue({
      kind: "source-contract-pattern-mismatch",
      file,
      context,
      field: location,
      ref: value,
      expected: `a string matching ${schema.pattern}`,
      fix: `rewrite ${location} to match the schema pattern`,
    });
  }
  if (typeof value === "string" && schema.format === "uri") {
    try {
      new URL(value);
    } catch {
      pushIssue({
        kind: "source-contract-invalid-uri",
        file,
        context,
        field: location,
        ref: value,
        expected: "a valid absolute URI",
        fix: `replace ${location} with a valid absolute URI`,
      });
    }
  }
  if (typeof value === "string" && schema.format === "date") {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    const parsed = match ? new Date(`${value}T00:00:00Z`) : undefined;
    if (!parsed || Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) {
      pushIssue({
        kind: "source-contract-invalid-date",
        file,
        context,
        field: location,
        ref: value,
        expected: "a real calendar date in YYYY-MM-DD format",
        fix: `replace ${location} with a valid ISO date`,
      });
    }
  }
  if (typeof value === "number" && typeof schema.minimum === "number" && value < schema.minimum) {
    pushIssue({
      kind: "source-contract-below-minimum",
      file,
      context,
      field: location,
      ref: String(value),
      expected: `a number greater than or equal to ${schema.minimum}`,
      fix: `raise ${location} to the schema minimum`,
    });
  }
  if (schema.type === "object") {
    for (const required of schema.required ?? []) {
      if (value[required] == null) {
        pushIssue({
          kind: "source-contract-missing-required-field",
          file,
          context,
          field: fieldPath ? `${fieldPath}.${required}` : required,
          ref: "missing",
          expected: "required by schemas/source-contract.schema.json",
          fix: `add ${required} or update the schema intentionally`,
        });
      }
    }
    if (schema.additionalProperties === false) {
      const allowed = new Set(Object.keys(schema.properties ?? {}));
      for (const key of Object.keys(value)) {
        if (!allowed.has(key)) {
          pushIssue({
            kind: "source-contract-unknown-field",
            file,
            context,
            field: fieldPath ? `${fieldPath}.${key}` : key,
            ref: key,
            expected: "a field declared in schemas/source-contract.schema.json",
            fix: "remove the field or add its intended structure to the schema and renderer",
          });
        }
      }
    }
    for (const [key, childSchema] of Object.entries(schema.properties ?? {})) {
      if (value[key] != null) {
        validateObjectShape(value[key], childSchema, file, context, fieldPath ? `${fieldPath}.${key}` : key);
      }
    }
    if (schema.additionalProperties && typeof schema.additionalProperties === "object") {
      const declared = new Set(Object.keys(schema.properties ?? {}));
      for (const [key, childValue] of Object.entries(value)) {
        if (!declared.has(key)) {
          validateObjectShape(childValue, schema.additionalProperties, file, context, fieldPath ? `${fieldPath}.${key}` : key);
        }
      }
    }
    return;
  }
  if (schema.type === "array") {
    if (typeof schema.minItems === "number" && value.length < schema.minItems) {
      pushIssue({
        kind: "source-contract-min-items",
        file,
        context,
        field: location,
        ref: `${value.length} item(s)`,
        expected: `at least ${schema.minItems} item(s)`,
        fix: `add the required entries to ${location}`,
      });
    }
    if (schema.items) {
      value.forEach((item, index) => {
        validateObjectShape(item, schema.items, file, context, `${fieldPath}[${index}]`);
      });
    }
  }
}

// --- 1. Collect references ---
const findings = collectFindings();
const signalIds = collectSignalIds();
const signals = collectSignalsForFindingRefCheck();
const runSignalSummaries = collectRunSignalSummaries();
const signalStatusById = new Map(signals.map((signal) => [signal.id, signal.status]));
const sourceRegistry = collectAllSourceIds();
const findingComposes = collectFindingComposes();

// --- 2. Validate every indexed source contract against its structural schema ---
if (fs.existsSync(SOURCES_INDEX) && fs.existsSync(SOURCE_CONTRACT_SCHEMA)) {
  const sourceIndex = readYaml(SOURCES_INDEX);
  const sourceSchema = JSON.parse(fs.readFileSync(SOURCE_CONTRACT_SCHEMA, "utf8"));
  for (const source of sourceIndex.sources ?? []) {
    const contractPath = path.join(REPO_ROOT, source.contract ?? "");
    if (!source.contract || !fs.existsSync(contractPath)) {
      pushIssue({
        kind: "source-contract-missing-file",
        file: SOURCES_INDEX,
        context: `source ${source.id ?? "unknown"}`,
        field: "sources[].contract",
        ref: source.contract ?? "missing",
        expected: "an existing source contract YAML file",
        fix: "fix the indexed contract path or add the missing contract",
      });
      continue;
    }
    validateObjectShape(
      readYaml(contractPath),
      sourceSchema,
      contractPath,
      `source contract ${source.id}`,
      "",
    );
  }
}

// --- 3. Validate profile claims and posture_basis ---
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
          context: `profile ${slug} / claim ${claim.id}`,
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
            context: `profile ${slug} / posture_basis.${lens}`,
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

// --- 4. Validate signal lifecycle, section, and finding_ids ---
const ALLOWED_SIGNAL_STATUSES = new Set(["accepted", "withdrawn"]);
const ALLOWED_SIGNAL_SECTIONS = new Set(["control-plane", "runtime", "platform"]);
for (const signal of signals) {
  if (!ALLOWED_SIGNAL_STATUSES.has(signal.status)) {
    pushIssue({
      kind: "signal-invalid-status",
      file: signal.file,
      context: `signal ${signal.id}`,
      field: "status",
      ref: signal.status,
      expected: "accepted or withdrawn (missing defaults to accepted)",
      fix: "set status to accepted/withdrawn; a withdrawn record also needs correction metadata",
    });
  }
  if (signal.status === "withdrawn") {
    for (const field of ["date", "reason", "canonical_url"]) {
      if (!signal.correction?.[field]) {
        pushIssue({
          kind: "withdrawn-signal-missing-correction-field",
          file: signal.file,
          context: `signal ${signal.id}`,
          field: `correction.${field}`,
          ref: "missing",
          expected: `a non-empty correction.${field}`,
          fix: "preserve the record with a dated reason and canonical corrected URL",
        });
      }
    }
  }
  if (signal.sections.length === 0) {
    pushIssue({
      kind: "signal-missing-section",
      file: signal.file,
      context: `signal ${signal.id}`,
      field: "section",
      ref: "missing",
      expected: "control-plane, runtime, or platform",
      fix: "assign the signal to one of the three canonical editorial sections",
    });
  }
  for (const section of signal.sections) {
    if (!ALLOWED_SIGNAL_SECTIONS.has(section)) {
      pushIssue({
        kind: "signal-invalid-section",
        file: signal.file,
        context: `signal ${signal.id}`,
        field: "section",
        ref: section,
        expected: "control-plane, runtime, or platform",
        fix: "reclassify the signal into one canonical editorial section",
      });
    }
  }
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

for (const summary of runSignalSummaries.values()) {
  if (summary.hasSignalsFile
    && typeof summary.manifest?.signal_count === "number"
    && summary.manifest.signal_count !== summary.accepted.length) {
    pushIssue({
      kind: "run-accepted-signal-count-mismatch",
      file: summary.manifestPath,
      context: `run ${summary.runId}`,
      field: "signal_count",
      ref: String(summary.manifest.signal_count),
      expected: `${summary.accepted.length} accepted signal(s) in signals/frontier-signals.yml`,
      fix: "update signal_count or correct the signal lifecycle statuses",
    });
  }
  if (summary.hasSignalsFile
    && typeof summary.manifest?.withdrawn_signal_count === "number"
    && summary.manifest.withdrawn_signal_count !== summary.withdrawn.length) {
    pushIssue({
      kind: "run-withdrawn-signal-count-mismatch",
      file: summary.manifestPath,
      context: `run ${summary.runId}`,
      field: "withdrawn_signal_count",
      ref: String(summary.manifest.withdrawn_signal_count),
      expected: `${summary.withdrawn.length} withdrawn signal record(s) in signals/frontier-signals.yml`,
      fix: "update withdrawn_signal_count or correct the signal lifecycle statuses",
    });
  }
  if (summary.enforcesMaterializedFindingCount
    && typeof summary.manifest?.finding_count === "number"
    && summary.manifest.finding_count !== summary.findingCount) {
    pushIssue({
      kind: "run-finding-count-mismatch",
      file: summary.manifestPath,
      context: `run ${summary.runId}`,
      field: "finding_count",
      ref: String(summary.manifest.finding_count),
      expected: `${summary.findingCount} finding file(s) in the run's findings directory`,
      fix: "update finding_count or restore/remove the mismatched finding artifact",
    });
  }
}

// --- 4. Validate digest top_signal_ids + Operator Brief inline signal links ---
if (isDirSafe(DIGESTS_DIR)) {
  for (const file of fs.readdirSync(DIGESTS_DIR)) {
    if (!file.endsWith(".md") || file === "index.md") continue;
    const filePath = path.join(DIGESTS_DIR, file);
    const data = readMarkdownFrontmatter(filePath).data;
    const slug = file.replace(/\.md$/, "");

    const runSummary = data.run_id ? runSignalSummaries.get(data.run_id) : undefined;
    if (runSummary?.hasSignalsFile && typeof data.signal_count === "number" && data.signal_count !== runSummary.accepted.length) {
      pushIssue({
        kind: "digest-accepted-signal-count-mismatch",
        file: filePath,
        context: `digest ${slug}`,
        field: "signal_count",
        ref: String(data.signal_count),
        expected: `${runSummary.accepted.length} accepted signal(s) in run ${data.run_id}`,
        fix: "update the digest signal_count or correct the run's signal lifecycle statuses",
      });
    }
    if (runSummary?.enforcesMaterializedFindingCount
      && typeof data.finding_count === "number"
      && data.finding_count !== runSummary.findingCount) {
      pushIssue({
        kind: "digest-finding-count-mismatch",
        file: filePath,
        context: `digest ${slug}`,
        field: "finding_count",
        ref: String(data.finding_count),
        expected: `${runSummary.findingCount} finding file(s) in run ${data.run_id}`,
        fix: "update the digest finding_count or restore/remove the mismatched finding artifact",
      });
    }
    if (runSummary && typeof runSummary.manifest?.finding_count === "number"
      && typeof data.finding_count === "number"
      && data.finding_count !== runSummary.manifest.finding_count) {
      pushIssue({
        kind: "digest-manifest-finding-count-mismatch",
        file: filePath,
        context: `digest ${slug}`,
        field: "finding_count",
        ref: String(data.finding_count),
        expected: `manifest finding_count ${runSummary.manifest.finding_count}`,
        fix: "make digest, manifest, and actual run finding counts agree",
      });
    }

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
      } else if (signalStatusById.get(sid) === "withdrawn") {
        pushIssue({
          kind: "digest-top-signal-withdrawn",
          file: filePath,
          context: `digest ${slug}`,
          field: "top_signal_ids[]",
          ref: sid,
          expected: "an accepted signal id",
          fix: "remove the withdrawn signal from top_signal_ids and link its correction record separately",
        });
      }
    }

    for (const findingId of data.source_trail_finding_ids ?? []) {
      const finding = findings.byFindingId.get(findingId);
      if (!finding) {
        pushIssue({
          kind: "digest-source-trail-finding-missing",
          file: filePath,
          context: `digest ${slug}`,
          field: "source_trail_finding_ids[]",
          ref: findingId,
          expected: "an existing finding_id",
          fix: "fix the finding id or remove it from source_trail_finding_ids",
        });
      } else if (data.run_id && finding.runId !== data.run_id) {
        pushIssue({
          kind: "digest-source-trail-finding-wrong-run",
          file: filePath,
          context: `digest ${slug}`,
          field: "source_trail_finding_ids[]",
          ref: findingId,
          expected: `a finding from digest run ${data.run_id}`,
          fix: "reference a finding from the digest's own research run",
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
                context: `digest ${slug} / operator_brief.${section}`,
                field: `operator_brief.${section}[]`,
                ref: m[1],
                expected: "an existing signal id at /signals/<id>/",
                fix: "fix the signal id in the inline HTML or remove the link",
              });
            } else if (signalStatusById.get(m[1]) === "withdrawn") {
              pushIssue({
                kind: "operator-brief-links-withdrawn-signal",
                file: filePath,
                context: `digest ${slug} / operator_brief.${section}`,
                field: `operator_brief.${section}[]`,
                ref: m[1],
                expected: "an accepted signal id (link corrections outside the action list)",
                fix: "replace the action link with the corrected canonical artifact",
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
          context: `digest ${slug} / not_promoted`,
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
        context: `finding ${fc.finding_id} / composes`,
        field: "composes[]",
        ref: composeId,
        expected: "an id in sources/index.yml or sources/adjacent.yml",
        fix: "fix the id, add it to sources/adjacent.yml with the required fields, or remove from composes",
      });
    } else if (composeId === fc.source) {
      pushIssue({
        kind: "finding-composes-self",
        file: fc.file,
        context: `finding ${fc.finding_id} / composes`,
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
      context: `sources/adjacent.yml / ${id}`,
      field: "adjacent_tools[].id",
      ref: id,
      expected: "referenced by at least one accepted finding's composes array",
      fix: `reference it from a finding, or set status: archived if the tool is no longer composed with`,
    });
  }
}

// --- Report ---
if (issues.length === 0) {
  const acceptedSignalIds = [...signalStatusById.values()].filter((status) => status !== "withdrawn").length;
  const withdrawnSignalIds = [...signalStatusById.values()].filter((status) => status === "withdrawn").length;
  console.log("integrity check: clean");
  console.log(`  ${findings.byFindingId.size} findings indexed, ${signalIds.size} signal records indexed (${acceptedSignalIds} accepted, ${withdrawnSignalIds} withdrawn)`);
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
