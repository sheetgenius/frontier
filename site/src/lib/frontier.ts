import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import YAML from "yaml";

export const SOURCE_LABELS: Record<string, string> = {
  "agent-zero": "Agent Zero",
  "claude-code": "Claude Code",
  "codex": "Codex",
  "flue": "Flue",
  "gemini-cli": "Gemini CLI",
  "hermes-agent": "Hermes Agent",
  "openclaw": "OpenClaw",
  "openhands": "OpenHands",
  "paperclip": "Paperclip",
  "pi-coding-agent": "Pi Coding Agent",
};

export function sourceLabel(id: string): string {
  return SOURCE_LABELS[id] ?? id;
}

export const repoRoot = process.env.BITTER_FRONTIER_ROOT
  ? path.resolve(process.env.BITTER_FRONTIER_ROOT)
  : path.resolve(process.cwd(), "..");

export type MarkdownArtifact = {
  id: string;
  slug: string;
  path: string;
  relativePath: string;
  data: Record<string, any>;
  body: string;
  html: string;
};

export type RunVersion = {
  id: string;
  status: string;
  artifactVersion?: number;
  title: string;
  windowLabel: string;
  manifest: Record<string, any>;
  digest?: MarkdownArtifact;
  signalCount: number;
  signalIds: string[];
  qaPath?: string;
};

export type FindingEntry = MarkdownArtifact & {
  runId: string;
  finding: string;
  title: string;
};

export type EvidenceLink = {
  label: string;
  url: string;
  precision?: string;
};

export function formatDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string") return value.slice(0, 10);
  return "unknown";
}

function repoPath(...parts: string[]) {
  return path.join(repoRoot, ...parts);
}

function rel(file: string) {
  return path.relative(repoRoot, file);
}

function slugFromFile(file: string) {
  return path.basename(file).replace(/\.md$/, "");
}

function rewriteRunLinks(content: string) {
  return content.replace(
    /\[([^\]]+)\]\(\.\.\/\.\.\/runs\/([^/]+)\/findings\/([^)]+)\.md\)/g,
    (_match, label: string, _runId: string, finding: string) => {
      const href = `/findings/${finding}/`;
      const cleanLabel = label.replace(/\s+finding$/i, "");
      return `[${cleanLabel}](${href})`;
    },
  );
}

export function readMarkdown(file: string): MarkdownArtifact {
  const raw = fs.readFileSync(file, "utf8");
  const parsed = matter(raw);
  const body = rewriteRunLinks(parsed.content.trim());
  return {
    id: parsed.data.digest_id ?? parsed.data.finding_id ?? parsed.data.run_id ?? slugFromFile(file),
    slug: slugFromFile(file),
    path: file,
    relativePath: rel(file),
    data: parsed.data,
    body,
    html: marked.parse(body) as string,
  };
}

export function readYaml(file: string): any {
  return YAML.parse(fs.readFileSync(file, "utf8"));
}

function toTime(value: unknown): number {
  if (!value) return 0;
  if (value instanceof Date) return value.getTime();
  if (typeof value === "string") {
    const t = Date.parse(value);
    return Number.isFinite(t) ? t : 0;
  }
  return 0;
}

function digestSortKey(d: MarkdownArtifact): number {
  return toTime(d.data.window?.end) || toTime(d.data.window?.start);
}

export function listDigests(): MarkdownArtifact[] {
  const dir = repoPath("content", "digests");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") && file !== "index.md")
    .map((file) => readMarkdown(path.join(dir, file)))
    .sort((a, b) => digestSortKey(b) - digestSortKey(a));
}

export function getDigest(slug: string): MarkdownArtifact | undefined {
  return listDigests().find((digest) => digest.slug === slug);
}

export function listRuns(): RunVersion[] {
  const dir = repoPath("runs");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .map((runId) => path.join(dir, runId))
    .filter((runDir) => fs.statSync(runDir).isDirectory() && fs.existsSync(path.join(runDir, "manifest.yml")))
    .map((runDir) => {
      const manifest = readYaml(path.join(runDir, "manifest.yml"));
      const weeklyDir = path.join(runDir, "weekly");
      const digestFile = fs.existsSync(weeklyDir)
        ? fs
            .readdirSync(weeklyDir)
            .filter((file) => file.endsWith(".md"))
            .map((file) => path.join(weeklyDir, file))[0]
        : undefined;
      const digest = digestFile ? readMarkdown(digestFile) : undefined;
      const signalsFile = path.join(runDir, "signals", "frontier-signals.yml");
      const signals = fs.existsSync(signalsFile) ? readYaml(signalsFile)?.signals ?? [] : [];
      const window = manifest.window ?? digest?.data.window ?? {};
      const start = window.start ?? window.from ?? "unknown";
      const end = window.end ?? window.to ?? "unknown";
      const runId = manifest.run_id ?? manifest.id ?? path.basename(runDir);
      return {
        id: runId,
        status: manifest.status ?? digest?.data.status ?? "candidate",
        artifactVersion: manifest.artifact_version ?? digest?.data.artifact_version,
        title: manifest.title ?? digest?.data.title ?? runId,
        windowLabel: `${start} to ${end}`,
        manifest,
        digest,
        signalCount: signals.length || digest?.data.signal_count || 0,
        signalIds: signals.map((signal: any) => signal.id).filter(Boolean),
        qaPath: fs.existsSync(path.join(runDir, "qa.md")) ? rel(path.join(runDir, "qa.md")) : undefined,
      };
    })
    .sort((a, b) => {
      const av = a.artifactVersion ?? 0;
      const bv = b.artifactVersion ?? 0;
      if (av !== bv) return bv - av;
      return b.id.localeCompare(a.id);
    });
}

export function versionsForDigest(digestId: string): RunVersion[] {
  return listRuns().filter((run) => run.digest?.data.digest_id === digestId);
}

export function canonicalRunForDigest(digest: MarkdownArtifact): RunVersion | undefined {
  const runId = digest.data.run_id ?? digest.data.published_from_run;
  return listRuns().find((run) => run.id === runId) ?? versionsForDigest(digest.id).find((run) => run.status === "published");
}

export type SignalEntry = {
  id: string;
  title: string;
  date: string;
  sources: string[];
  sections: string[];
  tracks: string[]; // deprecated alias, kept until all readers migrate
  summary?: string;
  whyActionBearing: string[];
  actionability?: string;
  confidence?: string;
  accessibilityImpact?: string;
  runId?: string;
  findingIds: string[];
  findingRefs: Array<{ runId: string; slug: string }>;
  composes: string[];
};

export type AdjacentTool = {
  id: string;
  label: string;
  canonical_url?: string;
  first_seen_finding_id?: string;
  last_seen?: string;
  status?: string;
  notes?: string;
};

export const SECTION_LABELS: Record<string, string> = {
  "control-plane": "Control Plane",
  "runtime": "Runtime",
  "platform": "Platform",
};

export const SECTION_FRAMINGS: Record<string, string> = {
  "control-plane":
    "Agent labor becomes operational only when the surface shows who asked for it, what it may touch, what it costs, and what receipt it owes.",
  "runtime":
    "The frontier gets serious when an agent leaves the prompt and enters a computer that someone has to bound, inspect, and clean up.",
  "platform":
    "A coding agent becomes market infrastructure when its install path, plugins, UI, cloud surface, and defaults decide who can actually use it.",
};

export const SECTION_SCOPES: Record<string, string> = {
  "control-plane":
    "Control Plane covers provider changes that make agent labor governable as operating state: goals, roles, budgets, approvals, permission manifests, capability profiles, credential scopes, cost summaries, blockers, schedulers, triggers, sub-agent routing, kanban orchestration. Where authority over what an agent does and when lives.",
  "runtime":
    "Runtime covers the move from chat or tool calls into bounded execution: terminal, filesystem, browser, code execution, tool creation, sandboxing, persistence, cleanup. Where the agent actually operates.",
  "platform":
    "Platform covers how agent harnesses become usable products and ecosystems for new operators: install paths, distribution, packages, plugins, skills, SDK / CLI / GUI shape, cloud and enterprise packaging, integrations. The adoption and distribution lane — not a catch-all for everything platform-shaped. Evaluation, governance defaults, and sandbox policy belong to Control Plane or Runtime.",
};

export function sectionLabel(slug: string): string {
  return SECTION_LABELS[slug] ?? slug;
}

// Back-compat aliases (deprecated)
export const TRACK_LABELS = SECTION_LABELS;
export function trackLabel(slug: string): string {
  return sectionLabel(slug);
}

function dateFromSignalId(id: string): string {
  const m = /^(\d{4}-\d{2}-\d{2})/.exec(id);
  return m ? m[1] : "unknown";
}

function refsFromSupportingFindings(paths: string[], runId: string): Array<{ runId: string; slug: string }> {
  return paths
    .map((p) => {
      const m = /findings\/([^/]+)\.md$/.exec(p) ?? /^([^/]+)\.md$/.exec(p);
      return m ? { runId, slug: m[1] } : null;
    })
    .filter(Boolean) as Array<{ runId: string; slug: string }>;
}

function readSections(signal: any): string[] {
  if (Array.isArray(signal.sections)) return signal.sections;
  if (typeof signal.section === "string") return [signal.section];
  return [];
}

function normalizeYamlSignal(signal: any, runId: string): SignalEntry {
  const sources = Array.isArray(signal.sources)
    ? signal.sources
    : signal.source
      ? [signal.source]
      : [];
  const findingIds = Array.isArray(signal.finding_ids) ? signal.finding_ids : [];
  const supportingPaths = Array.isArray(signal.supporting_findings) ? signal.supporting_findings : [];
  const findingRefs = supportingPaths.length > 0 ? refsFromSupportingFindings(supportingPaths, runId) : [];
  const whyActionBearing = signal.why_action_bearing
    ?? [signal.operator_consequence, signal.bitter_implication].filter(Boolean);
  const sections = readSections(signal);
  return {
    id: signal.id,
    title: signal.title ?? signal.id,
    date: dateFromSignalId(signal.id),
    sources,
    sections,
    tracks: sections, // deprecated alias kept for back-compat readers
    summary: signal.summary,
    whyActionBearing,
    actionability: signal.actionability,
    confidence: signal.confidence,
    accessibilityImpact: signal.accessibility_impact,
    runId,
    findingIds,
    findingRefs,
    composes: [],
  };
}

function normalizeJsonlSignal(signal: any): SignalEntry {
  const runId = signal.run;
  const supportingPaths = Array.isArray(signal.supporting_findings) ? signal.supporting_findings : [];
  const sections = readSections(signal);
  return {
    id: signal.id,
    title: signal.title ?? signal.id,
    date: dateFromSignalId(signal.id),
    sources: Array.isArray(signal.sources) ? signal.sources : signal.source ? [signal.source] : [],
    sections,
    tracks: sections,
    summary: signal.summary,
    whyActionBearing: [signal.operator_consequence, signal.bitter_implication].filter(Boolean),
    actionability: signal.actionability,
    confidence: signal.confidence,
    accessibilityImpact: signal.accessibility_impact,
    runId,
    findingIds: [],
    findingRefs: runId ? refsFromSupportingFindings(supportingPaths, runId) : [],
    composes: [],
  };
}

export function listSignals(): SignalEntry[] {
  const seen = new Map<string, SignalEntry>();

  // Aggregate from all run signal YAMLs (newest run dirs first)
  const runsDir = repoPath("runs");
  if (fs.existsSync(runsDir)) {
    const runDirs = fs
      .readdirSync(runsDir)
      .map((name) => path.join(runsDir, name))
      .filter((d) => fs.statSync(d).isDirectory())
      .sort((a, b) => path.basename(b).localeCompare(path.basename(a)));
    for (const runDir of runDirs) {
      const signalsFile = path.join(runDir, "signals", "frontier-signals.yml");
      if (!fs.existsSync(signalsFile)) continue;
      const yaml = readYaml(signalsFile);
      const runId = path.basename(runDir);
      for (const signal of yaml?.signals ?? []) {
        if (!seen.has(signal.id)) seen.set(signal.id, normalizeYamlSignal(signal, runId));
      }
    }
  }

  // Merge legacy JSONL signals (won't overwrite YAML entries)
  const jsonlFile = repoPath("data", "frontier_signals.jsonl");
  if (fs.existsSync(jsonlFile)) {
    const lines = fs.readFileSync(jsonlFile, "utf8").split(/\n+/).filter(Boolean);
    for (const line of lines) {
      const signal = JSON.parse(line);
      if (!seen.has(signal.id)) seen.set(signal.id, normalizeJsonlSignal(signal));
    }
  }

  // Derive composes per signal from underlying findings.
  // Per amendment-006: composes lives on findings only; signal composes is the
  // union of its referenced findings' composes arrays.
  const findings = listFindings();
  const composesByFindingId = new Map<string, string[]>();
  const composesByRunSlug = new Map<string, string[]>();
  for (const finding of findings) {
    const composes = Array.isArray(finding.data.composes) ? finding.data.composes : [];
    if (composes.length === 0) continue;
    const fid = finding.data.finding_id as string | undefined;
    if (fid) composesByFindingId.set(fid, composes);
    composesByRunSlug.set(`${finding.runId}/${finding.finding}`, composes);
  }
  for (const signal of seen.values()) {
    const union = new Set<string>();
    for (const fid of signal.findingIds) {
      for (const id of composesByFindingId.get(fid) ?? []) union.add(id);
    }
    for (const ref of signal.findingRefs) {
      for (const id of composesByRunSlug.get(`${ref.runId}/${ref.slug}`) ?? []) union.add(id);
    }
    signal.composes = Array.from(union).sort();
  }

  return Array.from(seen.values()).sort((a, b) => b.date.localeCompare(a.date));
}

export function digestsForSource(sourceId: string): MarkdownArtifact[] {
  return listDigests().filter((d) => (d.data.sources ?? []).includes(sourceId));
}

export function getSignal(id: string): SignalEntry | undefined {
  return listSignals().find((s) => s.id === id);
}

export function digestsForSignalId(signalId: string): MarkdownArtifact[] {
  return listDigests().filter((d) => (d.data.top_signal_ids ?? []).includes(signalId));
}

export function findFindingByFindingId(findingId: string): FindingEntry | undefined {
  return listFindings().find((f) => f.data.finding_id === findingId);
}

export function signalsCitingFinding(finding: FindingEntry): SignalEntry[] {
  const findingId = finding.data.finding_id as string | undefined;
  return listSignals().filter((s) => {
    if (findingId && s.findingIds.includes(findingId)) return true;
    return s.findingRefs.some((ref) => ref.runId === finding.runId && ref.slug === finding.finding);
  });
}

export type ProfileCitation = {
  profile: MarkdownArtifact;
  context: string; // claim id or "posture: capability"
};

export function profilesCitingFinding(finding: FindingEntry): ProfileCitation[] {
  const findingId = finding.data.finding_id as string | undefined;
  if (!findingId) return [];
  const citations: ProfileCitation[] = [];
  for (const profile of listProfiles()) {
    for (const claim of profile.data.claims ?? []) {
      if (claim.finding_id === findingId) {
        citations.push({ profile, context: `claim · ${claim.id}` });
      }
    }
    const basis = profile.data.posture_basis ?? {};
    for (const lens of ["capability", "accessibility", "governance"]) {
      if ((basis[lens] ?? []).includes(findingId)) {
        citations.push({ profile, context: `posture · ${lens}` });
      }
    }
  }
  return citations;
}

export function signalsForSource(sourceSlug: string): SignalEntry[] {
  return listSignals().filter((s) => s.sources.includes(sourceSlug));
}

export function listSignalSourceSlugs(): string[] {
  const set = new Set<string>();
  for (const signal of listSignals()) {
    for (const src of signal.sources) set.add(src);
  }
  return Array.from(set).sort();
}

export function signalsForSection(sectionSlug: string): SignalEntry[] {
  return listSignals().filter((s) => s.sections.includes(sectionSlug));
}

export function listSectionSlugs(): string[] {
  const set = new Set<string>();
  for (const signal of listSignals()) {
    for (const section of signal.sections) set.add(section);
  }
  return Array.from(set).sort();
}

// Back-compat aliases (deprecated)
export const signalsForTrack = signalsForSection;
export const listTrackSlugs = listSectionSlugs;

export type LinkIssue = { kind: string; where: string; ref: string };

let linkReportLogged = false;

export function linkGraphIssues(): LinkIssue[] {
  const issues: LinkIssue[] = [];
  const signalIds = new Set(listSignals().map((s) => s.id));
  const findingsByFindingId = new Set(listFindings().map((f) => f.data.finding_id).filter(Boolean));
  const profiles = listProfiles();
  const digests = listDigests();

  for (const profile of profiles) {
    for (const claim of profile.data.claims ?? []) {
      if (claim.finding_id == null) continue;
      if (!findingsByFindingId.has(claim.finding_id)) {
        issues.push({
          kind: "profile-claim-missing-finding",
          where: `profiles/${profile.slug} → claim ${claim.id}`,
          ref: claim.finding_id,
        });
      }
    }
    const basis = profile.data.posture_basis ?? {};
    for (const lens of ["capability", "accessibility", "governance"]) {
      for (const fid of basis[lens] ?? []) {
        if (!findingsByFindingId.has(fid)) {
          issues.push({
            kind: "profile-posture-missing-finding",
            where: `profiles/${profile.slug} → posture_basis.${lens}`,
            ref: fid,
          });
        }
      }
    }
  }

  for (const digest of digests) {
    for (const sid of digest.data.top_signal_ids ?? []) {
      if (!signalIds.has(sid)) {
        issues.push({
          kind: "digest-top-signal-missing",
          where: `digests/${digest.slug} → top_signal_ids`,
          ref: sid,
        });
      }
    }
    const brief = digest.data.operator_brief;
    if (brief) {
      const briefSections = ["upgrade_check", "try", "watch", "ignore_or_deprioritize", "uncertain"];
      for (const section of briefSections) {
        for (const item of brief[section] ?? []) {
          const matches = [...String(item).matchAll(/href="\/signals\/([^/"]+)\/"/g)];
          for (const m of matches) {
            if (!signalIds.has(m[1])) {
              issues.push({
                kind: "operator-brief-broken-signal-link",
                where: `digests/${digest.slug} → operator_brief.${section}`,
                ref: m[1],
              });
            }
          }
        }
      }
    }
  }

  return issues;
}

export function logLinkGraphReportOnce(): void {
  if (linkReportLogged) return;
  linkReportLogged = true;
  const issues = linkGraphIssues();
  if (issues.length === 0) {
    console.log("[link-graph] clean");
    return;
  }
  console.warn(`[link-graph] ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.warn(`  ${issue.kind} | ${issue.where} | ref: ${issue.ref}`);
  }
}

export function listFindings(): FindingEntry[] {
  const runDirs = listRuns()
    .map((run) => ({ runId: run.id, dir: path.join(repoRoot, "runs", run.id, "findings") }))
    .filter((entry) => fs.existsSync(entry.dir));
  const files = runDirs.flatMap((entry) =>
    fs
      .readdirSync(entry.dir)
      .filter((file) => file.endsWith(".md"))
      .map((file) => ({ runId: entry.runId, file: path.join(entry.dir, file) })),
  );
  const seen = new Map<string, FindingEntry>();
  for (const entry of files) {
    const artifact = readMarkdown(entry.file);
    const finding = slugFromFile(entry.file);
    const title = artifact.body.split("\n")[0]?.replace(/^# /, "") ?? finding;
    seen.set(artifact.relativePath, { ...artifact, runId: entry.runId, finding, title });
  }
  return Array.from(seen.values()).sort((a, b) => a.relativePath.localeCompare(b.relativePath));
}

export function getFinding(runId: string, finding: string): FindingEntry | undefined {
  return listFindings().find((entry) => entry.runId === runId && entry.finding === finding);
}

export type RunArtifact = {
  kind: string;
  label: string;
  repoPath: string;
  internalUrl?: string;
};

export function runArtifacts(runId: string): RunArtifact[] {
  const runDir = repoPath("runs", runId);
  if (!fs.existsSync(runDir)) return [];
  const artifacts: RunArtifact[] = [];
  const manifestPath = path.join(runDir, "manifest.yml");
  if (fs.existsSync(manifestPath)) {
    artifacts.push({
      kind: "manifest",
      label: "Run manifest",
      repoPath: rel(manifestPath),
    });
  }
  const findingsDir = path.join(runDir, "findings");
  if (fs.existsSync(findingsDir)) {
    for (const file of fs.readdirSync(findingsDir).filter((f) => f.endsWith(".md")).sort()) {
      const slug = file.replace(/\.md$/, "");
      artifacts.push({
        kind: "finding",
        label: `Finding · ${sourceLabel(slug)}`,
        repoPath: rel(path.join(findingsDir, file)),
        internalUrl: `/findings/${runId}/${slug}/`,
      });
    }
  }
  const signalsPath = path.join(runDir, "signals", "frontier-signals.yml");
  if (fs.existsSync(signalsPath)) {
    artifacts.push({
      kind: "signals",
      label: "Accepted signals (YAML)",
      repoPath: rel(signalsPath),
    });
  }
  const weeklyDir = path.join(runDir, "weekly");
  if (fs.existsSync(weeklyDir)) {
    for (const file of fs.readdirSync(weeklyDir).filter((f) => f.endsWith(".md")).sort()) {
      artifacts.push({
        kind: "weekly",
        label: `Weekly digest — ${file.replace(/\.md$/, "")}`,
        repoPath: rel(path.join(weeklyDir, file)),
      });
    }
  }
  const qaPath = path.join(runDir, "qa.md");
  if (fs.existsSync(qaPath)) {
    artifacts.push({
      kind: "qa",
      label: "QA review",
      repoPath: rel(qaPath),
    });
  }
  const auditPath = path.join(runDir, "audit.md");
  if (fs.existsSync(auditPath)) {
    artifacts.push({
      kind: "audit",
      label: "Audit notes",
      repoPath: rel(auditPath),
    });
  }
  return artifacts;
}

export function runManifest(runId: string): any | undefined {
  const manifestPath = repoPath("runs", runId, "manifest.yml");
  if (!fs.existsSync(manifestPath)) return undefined;
  return readYaml(manifestPath);
}

export function signalIdsInRun(runId: string): string[] {
  const signalsPath = repoPath("runs", runId, "signals", "frontier-signals.yml");
  if (!fs.existsSync(signalsPath)) return [];
  const yaml = readYaml(signalsPath);
  return (yaml?.signals ?? []).map((s: any) => s.id).filter(Boolean);
}

export function evidenceLinksForFinding(finding: FindingEntry): EvidenceLink[] {
  if (Array.isArray(finding.data.evidence) && finding.data.evidence.length > 0) {
    return finding.data.evidence;
  }
  return (finding.data.receipts ?? []).map((url: string) => ({ label: "Source", url, precision: "source" }));
}

export function findingsForSources(sourceIds: string[]): FindingEntry[] {
  const bySource = new Map<string, FindingEntry>();
  for (const finding of listFindings()) {
    if (!bySource.has(finding.data.source)) bySource.set(finding.data.source, finding);
  }
  return sourceIds.map((id) => bySource.get(id)).filter(Boolean) as FindingEntry[];
}

export function sourceLabelForId(sourceId: string): string {
  const source = listSources().find((entry) => entry.id === sourceId);
  return source?.contract?.label ?? sourceId;
}

export function formatEvidenceTarget(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "github.com") {
      const [, owner, repo, mode, ref, ...rest] = parsed.pathname.split("/");
      if (owner && repo && mode === "blob" && ref && rest.length > 0) {
        return `${owner}/${repo} · ${rest.join("/")}${parsed.hash}`;
      }
      if (owner && repo && parsed.pathname.includes("/releases/tag/")) {
        return `${owner}/${repo} · ${parsed.pathname.split("/releases/tag/")[1]}`;
      }
    }
    return `${parsed.hostname}${parsed.pathname}${parsed.hash}`;
  } catch {
    return url;
  }
}

let _adjacentCache: AdjacentTool[] | undefined;

export function listAdjacentTools(): AdjacentTool[] {
  if (_adjacentCache) return _adjacentCache;
  const file = repoPath("sources", "adjacent.yml");
  if (!fs.existsSync(file)) {
    _adjacentCache = [];
    return _adjacentCache;
  }
  const yaml = readYaml(file);
  _adjacentCache = (yaml?.adjacent_tools ?? []) as AdjacentTool[];
  return _adjacentCache;
}

export function adjacentTool(id: string): AdjacentTool | undefined {
  return listAdjacentTools().find((t) => t.id === id);
}

export function composesLabel(id: string): string {
  if (SOURCE_LABELS[id]) return SOURCE_LABELS[id];
  return adjacentTool(id)?.label ?? id;
}

export function composesHref(id: string, watchlistIds: Set<string>): string | undefined {
  if (watchlistIds.has(id)) return `/profiles/${id}/`;
  const adj = adjacentTool(id);
  return adj?.canonical_url;
}

export function listComposesFacets(): string[] {
  const set = new Set<string>();
  for (const signal of listSignals()) {
    for (const id of signal.composes) set.add(id);
  }
  return Array.from(set).sort();
}

export function signalsComposingWith(id: string): SignalEntry[] {
  return listSignals().filter((s) => s.composes.includes(id));
}

// Inbound composition for a profile: signals whose underlying finding declares
// composes including the profile's source id, and whose originating source is
// not the profile itself.
export function inboundCompositionForSource(sourceId: string): SignalEntry[] {
  return listSignals().filter(
    (s) => s.composes.includes(sourceId) && !s.sources.includes(sourceId),
  );
}

export function listSources(): any[] {
  const index = readYaml(repoPath("sources", "index.yml"));
  return (index.sources ?? []).map((source: any) => {
    const contractRelativePath = source.contract as string;
    const contractPath = repoPath(contractRelativePath);
    const contract = fs.existsSync(contractPath) ? readYaml(contractPath) : {};
    return { ...source, contract_path: contractRelativePath, contract };
  });
}

const PROFILE_STRIP_HEADINGS = /^## (Profile Hygiene|Internal Notes?|Editorial Notes?)\s*$/im;

function stripInternalSections(markdown: string): string {
  const match = PROFILE_STRIP_HEADINGS.exec(markdown);
  if (!match) return markdown;
  return markdown.slice(0, match.index).trimEnd();
}

function readProfile(file: string): MarkdownArtifact {
  const artifact = readMarkdown(file);
  const stripped = stripInternalSections(artifact.body);
  return { ...artifact, body: stripped, html: marked.parse(stripped) as string };
}

export function listProfiles(): MarkdownArtifact[] {
  const dir = repoPath("content", "profiles");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => readProfile(path.join(dir, file)))
    .sort((a, b) => String(a.data.label ?? a.slug).localeCompare(String(b.data.label ?? b.slug)));
}

export function getProfile(slug: string): MarkdownArtifact | undefined {
  const dir = repoPath("content", "profiles");
  const file = path.join(dir, `${slug}.md`);
  return fs.existsSync(file) ? readProfile(file) : undefined;
}
