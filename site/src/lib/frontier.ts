import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import YAML from "yaml";

export const SOURCE_LABELS: Record<string, string> = {
  "agent-flywheel": "Agent Flywheel",
  "agent-zero": "Agent Zero",
  "antigravity": "Antigravity CLI",
  "claude-code": "Claude Code",
  "codex": "Codex",
  "eve": "Eve",
  "flue": "Flue",
  "gemini-cli": "Gemini CLI",
  "hermes-agent": "Hermes Agent",
  "heypi": "heypi",
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
  ).replace(
    /\[([^\]]+)\]\(\.\/([^/)]+)\.md\)/g,
    (_match, label: string, finding: string) => `[${label}](/findings/${finding}/)`,
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
      const acceptedSignals = signals.filter((signal: any) => signal.status !== "withdrawn");
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
        signalCount: fs.existsSync(signalsFile) ? acceptedSignals.length : digest?.data.signal_count || 0,
        signalIds: acceptedSignals.map((signal: any) => signal.id).filter(Boolean),
        qaPath: fs.existsSync(path.join(runDir, "qa.md")) ? rel(path.join(runDir, "qa.md")) : undefined,
      };
    })
    .sort((a, b) => {
      const at = toTime(a.manifest.window?.end ?? a.manifest.window?.to ?? a.id.slice(0, 10));
      const bt = toTime(b.manifest.window?.end ?? b.manifest.window?.to ?? b.id.slice(0, 10));
      if (at !== bt) return bt - at;
      const av = a.artifactVersion ?? 0;
      const bv = b.artifactVersion ?? 0;
      if (av !== bv) return bv - av;
      return b.id.localeCompare(a.id);
    });
}

export function versionsForDigest(digestId: string): RunVersion[] {
  const directRunIds = new Set(
    listDigests()
      .filter((digest) => digest.id === digestId)
      .flatMap((digest) => [digest.data.run_id, digest.data.published_from_run])
      .filter(Boolean),
  );
  return listRuns().filter(
    (run) => directRunIds.has(run.id) || run.digest?.data.digest_id === digestId,
  );
}

export function canonicalRunForDigest(digest: MarkdownArtifact): RunVersion | undefined {
  const runId = digest.data.run_id ?? digest.data.published_from_run;
  return listRuns().find((run) => run.id === runId) ?? versionsForDigest(digest.id).find((run) => run.status === "published");
}

export type SignalEntry = {
  id: string;
  title: string;
  date: string;
  status: "accepted" | "withdrawn";
  correction?: {
    date?: string;
    reason?: string;
    canonicalUrl?: string;
  };
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
    "Agent labor becomes operational only when the surface shows who asked for it, what it may touch, what it costs, and how the result will be checked.",
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
    "Platform covers how agent harnesses become usable products and ecosystems for new operators: install paths, distribution, packages, plugins, skills, SDK / CLI / GUI shape, cloud and enterprise packaging, integrations. The adoption and distribution lane - not a catch-all for everything platform-shaped. Evaluation, governance defaults, and sandbox policy belong to Control Plane or Runtime.",
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
    ?? [signal.operator_consequence].filter(Boolean);
  const sections = readSections(signal);
  return {
    id: signal.id,
    title: signal.title ?? signal.id,
    date: dateFromSignalId(signal.id),
    status: signal.status === "withdrawn" ? "withdrawn" : "accepted",
    correction: signal.correction
      ? {
          date: signal.correction.date,
          reason: signal.correction.reason,
          canonicalUrl: signal.correction.canonical_url,
        }
      : undefined,
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
    status: signal.status === "withdrawn" ? "withdrawn" : "accepted",
    correction: signal.correction
      ? {
          date: signal.correction.date,
          reason: signal.correction.reason,
          canonicalUrl: signal.correction.canonical_url,
        }
      : undefined,
    sources: Array.isArray(signal.sources) ? signal.sources : signal.source ? [signal.source] : [],
    sections,
    tracks: sections,
    summary: signal.summary,
    whyActionBearing: [signal.operator_consequence].filter(Boolean),
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

export function listAcceptedSignals(): SignalEntry[] {
  return listSignals().filter((signal) => signal.status !== "withdrawn");
}

export function digestsForSource(sourceId: string): MarkdownArtifact[] {
  return listDigests().filter((d) => (d.data.sources ?? []).includes(sourceId));
}

export function getSignal(id: string): SignalEntry | undefined {
  return listSignals().find((s) => s.id === id);
}

export function signalIdsFromOperatorBrief(brief: any): string[] {
  const sections = ["upgrade_check", "try", "watch", "ignore_or_deprioritize", "uncertain"];
  const items = sections.flatMap((section) => Array.isArray(brief?.[section]) ? brief[section] : []);
  const ids = items.flatMap((item) =>
    [...String(item).matchAll(/href="\/signals\/([^/"]+)\/"/g)].map((match) => match[1]),
  );
  return Array.from(new Set(ids));
}

export function digestsForSignalId(signalId: string): MarkdownArtifact[] {
  return listDigests().filter((digest) => {
    if ((digest.data.top_signal_ids ?? []).includes(signalId)) return true;
    return signalIdsFromOperatorBrief(digest.data.operator_brief).includes(signalId);
  });
}

export function findFindingByFindingId(findingId: string): FindingEntry | undefined {
  return listFindings().find((f) => f.data.finding_id === findingId);
}

export function signalsCitingFinding(finding: FindingEntry): SignalEntry[] {
  const findingId = finding.data.finding_id as string | undefined;
  return listAcceptedSignals().filter((s) => {
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
        citations.push({ profile, context: `claim / ${claim.id}` });
      }
    }
    const basis = profile.data.posture_basis ?? {};
    for (const lens of ["capability", "accessibility", "governance"]) {
      if ((basis[lens] ?? []).includes(findingId)) {
        citations.push({ profile, context: `posture / ${lens}` });
      }
    }
  }
  return citations;
}

export function signalsForSource(sourceSlug: string): SignalEntry[] {
  return listAcceptedSignals().filter((s) => s.sources.includes(sourceSlug));
}

export function listSignalSourceSlugs(): string[] {
  const set = new Set<string>();
  for (const signal of listAcceptedSignals()) {
    for (const src of signal.sources) set.add(src);
  }
  return Array.from(set).sort();
}

export function signalsForSection(sectionSlug: string): SignalEntry[] {
  return listAcceptedSignals().filter((s) => s.sections.includes(sectionSlug));
}

export function listSectionSlugs(): string[] {
  const set = new Set<string>();
  for (const signal of listAcceptedSignals()) {
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
          where: `profiles/${profile.slug} -> claim ${claim.id}`,
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
            where: `profiles/${profile.slug} -> posture_basis.${lens}`,
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
          where: `digests/${digest.slug} -> top_signal_ids`,
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
                where: `digests/${digest.slug} -> operator_brief.${section}`,
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

function findingCanonicalTime(finding: FindingEntry): number {
  return toTime(
    finding.data.corrected_on
    ?? finding.data.last_updated
    ?? finding.data.event_date
    ?? finding.data.window?.end
    ?? finding.runId.slice(0, 10),
  );
}

export function listCanonicalFindings(): FindingEntry[] {
  const bySlug = new Map<string, FindingEntry>();
  for (const finding of listFindings()) {
    const current = bySlug.get(finding.finding);
    if (!current || findingCanonicalTime(finding) > findingCanonicalTime(current)) {
      bySlug.set(finding.finding, finding);
    }
  }
  return Array.from(bySlug.values()).sort((a, b) =>
    findingCanonicalTime(b) - findingCanonicalTime(a)
    || a.finding.localeCompare(b.finding),
  );
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

export type SocialReceiptCard = {
  id: string;
  title: string;
  kind: string;
  status: string;
  date: string;
  datePrecision?: string;
  dateNote?: string;
  sourceIds: string[];
  authors: string[];
  sourceUrls: string[];
  displayText?: string;
  verbatim?: string;
  /** The portion of `verbatim` actually set in the feature, when we excerpt. */
  quoted?: string;
  /** A short exact fragment for running inside a sentence. Also a run of `verbatim`. */
  inline?: string;
  paraphrase?: string;
  excerpt?: string;
  summary: string;
  displayName?: string;
  verdict?: string;
  capturedOn?: string;
  sourceNote?: string;
  handlingNote?: string;
  whyItMatters?: string;
  verificationNeeded?: string;
  confidence?: string;
  caveats?: string;
  tags: string[];
};

export type RunEditorialBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "pullquote"; text: string; attribution?: string }
  | { type: "social_embed"; cardId: string; caption?: string };

export type RunEditorial = {
  title: string;
  dek?: string;
  eyebrow?: string;
  byline?: string;
  publishedAt?: string;
  blocks: RunEditorialBlock[];
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
  const editorialPath = path.join(runDir, "editorial.yml");
  if (fs.existsSync(editorialPath)) {
    artifacts.push({
      kind: "editorial",
      label: "Public editorial",
      repoPath: rel(editorialPath),
    });
  }
  const findingsDir = path.join(runDir, "findings");
  if (fs.existsSync(findingsDir)) {
    for (const file of fs.readdirSync(findingsDir).filter((f) => f.endsWith(".md")).sort()) {
      const slug = file.replace(/\.md$/, "");
      const findingPath = path.join(findingsDir, file);
      const findingArtifact = readMarkdown(findingPath);
      const findingTitle = findingArtifact.body.split("\n")[0]?.replace(/^#\s+/, "") || slug;
      artifacts.push({
        kind: "finding",
        label: `Finding: ${findingTitle}`,
        repoPath: rel(findingPath),
        internalUrl: `/findings/${runId}/${slug}/`,
      });
    }
  }
  const signalsPath = path.join(runDir, "signals", "frontier-signals.yml");
  if (fs.existsSync(signalsPath)) {
    artifacts.push({
      kind: "signals",
      label: "Signals and correction records (YAML)",
      repoPath: rel(signalsPath),
    });
  }
  const weeklyDir = path.join(runDir, "weekly");
  if (fs.existsSync(weeklyDir)) {
    for (const file of fs.readdirSync(weeklyDir).filter((f) => f.endsWith(".md")).sort()) {
      artifacts.push({
        kind: "weekly",
        label: `Weekly digest - ${file.replace(/\.md$/, "")}`,
        repoPath: rel(path.join(weeklyDir, file)),
      });
    }
  }
  const socialCardsDir = path.join(runDir, "social-cards");
  if (fs.existsSync(socialCardsDir)) {
    for (const file of fs.readdirSync(socialCardsDir).filter((f) => f.endsWith(".yml") || f.endsWith(".yaml")).sort()) {
      artifacts.push({
        kind: "social cards",
        label: `Static social cards -- ${file.replace(/\.(ya?ml)$/, "")}`,
        repoPath: rel(path.join(socialCardsDir, file)),
      });
    }
  }
  const verifyDir = path.join(runDir, "verify");
  if (fs.existsSync(verifyDir)) {
    for (const file of fs.readdirSync(verifyDir).filter((f) => f.endsWith(".md")).sort()) {
      artifacts.push({
        kind: "verification",
        label: `Verification notes -- ${file.replace(/\.md$/, "")}`,
        repoPath: rel(path.join(verifyDir, file)),
      });
    }
  }
  const journalPath = path.join(runDir, "research-journal.md");
  if (fs.existsSync(journalPath)) {
    artifacts.push({
      kind: "journal",
      label: "R&D journal",
      repoPath: rel(journalPath),
    });
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

export function runEditorial(runId: string): RunEditorial | undefined {
  const editorialPath = repoPath("runs", runId, "editorial.yml");
  if (!fs.existsSync(editorialPath)) return undefined;
  const yaml = readYaml(editorialPath);
  const blocks = Array.isArray(yaml?.blocks)
    ? yaml.blocks.map((block: any) => {
        const type = String(block?.type ?? "");
        if (type === "social_embed") {
          return {
            type,
            cardId: String(block.card_id ?? block.cardId ?? ""),
            caption: block.caption ? String(block.caption) : undefined,
          };
        }
        if (type === "pullquote") {
          return {
            type,
            text: String(block.text ?? ""),
            attribution: block.attribution ? String(block.attribution) : undefined,
          };
        }
        return {
          type: type === "heading" ? "heading" : "paragraph",
          text: String(block?.text ?? ""),
        };
      }).filter((block: RunEditorialBlock) => {
        if (block.type === "social_embed") return block.cardId.length > 0;
        return block.text.length > 0;
      })
    : [];
  if (!yaml?.title || blocks.length === 0) return undefined;
  return {
    title: String(yaml.title),
    dek: yaml.dek ? String(yaml.dek) : undefined,
    eyebrow: yaml.eyebrow ? String(yaml.eyebrow) : undefined,
    byline: yaml.byline ? String(yaml.byline) : undefined,
    publishedAt: yaml.published_at ? formatDate(yaml.published_at) : undefined,
    blocks,
  };
}

function normalizeStringArray(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((item) => String(item)).filter(Boolean);
  if (typeof value === "string" && value.length > 0) return [value];
  return [];
}

// Avatars are served from our own origin or not at all. A remote URL would
// break both the CSP and the promise on /conversation-layer/ that reading a page
// reports nothing to any platform. Returns undefined when we hold no image, and
// the card falls back to a monogram.
export function localAvatar(handle: string): string | undefined {
  const clean = String(handle ?? "").replace(/^@/, "").toLowerCase();
  if (!clean) return undefined;
  for (const ext of ["jpg", "png", "webp"]) {
    if (fs.existsSync(repoPath("site", "public", "avatars", `${clean}.${ext}`))) {
      return `/avatars/${clean}.${ext}`;
    }
  }
  return undefined;
}

export type SweepCoverage = {
  watched: number;
  swept: number;
  adjudicated: number;
  failed: string[];
  unadjudicated: string[];
  complete: boolean;
};

// What the conversation sweep actually covered, counted from the run rather
// than remembered.
//
// This exists because the sentence "we swept the whole watchlist" was published
// once, corrected in the digest, and left standing in four other places --
// the homepage, the method page the digest cites as its authority, METHOD.md,
// and the run manifest. Correcting prose in one file does not correct a fact.
// So the number is computed here, rendered everywhere it appears, and nobody
// gets to type it again.
//
// A sweep that returned an API error is not a sweep. A project whose claims
// were never cross-checked was not adjudicated.
// The inline citation, and the reason it exists.
//
// A featured post carries 3.4rem of air above and below it. That is right for
// four posts an issue and wrong for twenty: the page turns into a stack of
// islands with prose stranded between them. The inline form puts somebody's
// exact words inside our sentence, marks whose they are, and links to the post,
// without interrupting the paragraph at all.
//
// Written in the markdown as [[q:card-id]]. The text comes from the card's
// `inline` field, which check-integrity.mjs verifies is a contiguous run of
// `verbatim` -- the same rule the featured quotes live under. Nothing here can
// print a word the poster did not write.
export function renderInlineQuotes(html: string, cards: SocialReceiptCard[]): string {
  if (!html.includes("[[q:")) return html;
  const byId = new Map(cards.map((c) => [c.id, c]));

  return html.replace(/\[\[q:([a-z0-9-]+)\]\]/gi, (whole, id: string) => {
    const card = byId.get(id);
    const text = String(card?.inline ?? "").trim();
    // An unresolved token is a content bug; leave it visible rather than
    // silently dropping a citation the prose is relying on.
    if (!card || !text) return whole;

    const handle = (card.authors?.[0] ?? "").replace(/^@/, "").trim();
    const url = card.sourceUrls?.[0] ?? `https://x.com/${handle}`;
    const avatar = localAvatar(handle);
    const esc = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

    const face = avatar
      ? `<img class="xq-avatar" src="${esc(avatar)}" alt="" width="18" height="18" loading="lazy">`
      : "";

    return (
      `<span class="xq">` +
      `<q class="xq-text">${esc(text)}</q>` +
      `<a class="xq-cite" href="${esc(url)}" title="${esc(card.displayName ? `${card.displayName} (@${handle})` : `@${handle}`)} on X">` +
      `${face}<span class="xq-handle">@${esc(handle)}</span>` +
      `</a>` +
      `</span>`
    );
  });
}

export function sweepCoverage(runId: string): SweepCoverage {
  const socialDir = repoPath("runs", runId, "social");
  const verifyDir = repoPath("runs", runId, "verify");
  if (!fs.existsSync(socialDir)) {
    return { watched: 0, swept: 0, adjudicated: 0, failed: [], unadjudicated: [], complete: true };
  }

  const projects = fs
    .readdirSync(socialDir)
    .filter((f) => f.endsWith(".raw.md"))
    .map((f) => f.replace(/\.raw\.md$/, ""));

  const failed: string[] = [];
  const swept: string[] = [];
  for (const name of projects) {
    const body = fs.readFileSync(path.join(socialDir, `${name}.raw.md`), "utf8");
    // A harvest that produced only an error string is a failure, however the
    // runner exited. Length alone is not the test; a genuinely quiet project
    // could be short.
    const errored = body.length < 500 && /api call failed|error|timeout/i.test(body);
    (errored ? failed : swept).push(name);
  }

  const unadjudicated = swept.filter(
    (name) => !fs.existsSync(path.join(verifyDir, `${name}.crosscheck.md`)),
  );

  return {
    watched: projects.length,
    swept: swept.length,
    adjudicated: swept.length - unadjudicated.length,
    failed,
    unadjudicated,
    complete: failed.length === 0 && unadjudicated.length === 0,
  };
}

export type WireItem = {
  title: string;
  url: string;
  source: string;
  date: string;
  tier: "checked" | "relayed";
  take: string;
  receipt?: string;
};

export type WireIssue = {
  id: string;
  date: string;
  lede?: string;
  items: WireItem[];
};

// The wire: the aggregator's light unit. An item is a link, a two-or-three
// sentence take in house voice, and a verification tier. `checked` means we
// adjudicated the claim against the primary record and `receipt` points at it;
// `relayed` means we are accurately reporting that somebody said or published
// this, and are not vouching for the claim inside it. The tier prints. Blurring
// the two is the same class of error as a paraphrase in quotation position.
export function listWireIssues(): WireIssue[] {
  const dir = repoPath("content", "wire");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".yml") || file.endsWith(".yaml"))
    .map((file) => {
      const y = readYaml(path.join(dir, file));
      return {
        id: String(y?.wire_id ?? file.replace(/\.ya?ml$/, "")),
        date: formatDate(y?.date ?? y?.wire_id),
        lede: y?.lede ? String(y.lede).trim() : undefined,
        items: (y?.items ?? []).map((item: any) => ({
          title: String(item.title ?? ""),
          url: String(item.url ?? ""),
          source: String(item.source ?? ""),
          date: formatDate(item.date),
          tier: item.tier === "checked" ? "checked" : "relayed",
          take: String(item.take ?? "").trim(),
          receipt: item.receipt ? String(item.receipt) : undefined,
        })).filter((item: WireItem) => item.title && item.url && item.take),
      };
    })
    .filter((issue) => issue.items.length > 0)
    .sort((a, b) => b.id.localeCompare(a.id));
}

export function getWireIssue(id: string): WireIssue | undefined {
  return listWireIssues().find((issue) => issue.id === id);
}

export function listRunSocialCards(runId: string): SocialReceiptCard[] {
  const dir = repoPath("runs", runId, "social-cards");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".yml") || file.endsWith(".yaml"))
    .sort()
    .flatMap((file) => {
      const yaml = readYaml(path.join(dir, file));
      return (yaml?.cards ?? []).map((card: any) => ({
        id: String(card.id ?? ""),
        title: String(card.title ?? card.id ?? "Untitled social receipt"),
        kind: String(card.kind ?? "social_receipt"),
        status: String(card.status ?? "candidate"),
        date: formatDate(card.date ?? card.event_date ?? card.observed_at),
        datePrecision: card.date_precision ? String(card.date_precision) : undefined,
        dateNote: card.date_note ? String(card.date_note) : undefined,
        sourceIds: normalizeStringArray(card.source_ids ?? card.sources ?? card.source),
        authors: normalizeStringArray(card.authors ?? card.author),
        sourceUrls: normalizeStringArray(card.source_urls ?? card.source_url ?? card.primary_url),
        displayText: card.display_text ? String(card.display_text) : undefined,
        // Only `verbatim` may ever be rendered as a quotation. `paraphrase` is
        // our description of a post and must never sit under someone's handle
        // looking like their sentence.
        verbatim: card.verbatim ? String(card.verbatim) : undefined,
        quoted: card.quoted ? String(card.quoted) : undefined,
        inline: card.inline ? String(card.inline) : undefined,
        paraphrase: card.paraphrase ? String(card.paraphrase) : undefined,
        excerpt: card.excerpt ? String(card.excerpt) : undefined,
        summary: String(card.summary ?? ""),
        // A display name is only ever a verified one. Never derive it from a handle.
        displayName: card.display_name ? String(card.display_name) : undefined,
        // A verdict is a sentence written for this post, not a token from a list.
        verdict: card.verdict ? String(card.verdict) : undefined,
        capturedOn: card.captured_on ? String(card.captured_on) : undefined,
        sourceNote: card.source_note !== undefined ? String(card.source_note) : undefined,
        handlingNote: card.handling_note !== undefined ? String(card.handling_note) : undefined,
        whyItMatters: card.why_it_matters ? String(card.why_it_matters) : undefined,
        verificationNeeded: card.verification_needed ? String(card.verification_needed) : undefined,
        confidence: card.confidence ? String(card.confidence) : undefined,
        caveats: card.caveats ? String(card.caveats) : undefined,
        tags: normalizeStringArray(card.tags),
      })).filter((card: SocialReceiptCard) => card.id && card.sourceUrls.length > 0);
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
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
  return (yaml?.signals ?? [])
    .filter((signal: any) => signal.status !== "withdrawn")
    .map((signal: any) => signal.id)
    .filter(Boolean);
}

export function evidenceLinksForFinding(finding: FindingEntry): EvidenceLink[] {
  if (Array.isArray(finding.data.evidence) && finding.data.evidence.length > 0) {
    return finding.data.evidence.map((link: EvidenceLink) => ({
      ...link,
      label: link.label || finding.title || "Primary source",
    }));
  }
  return (finding.data.receipts ?? []).map((url: string) => ({ label: "Source", url, precision: "source" }));
}

// A weekly-digest run is an assembly step: its evidence sits in the
// partial-cycle runs its manifest names as input_fragments. Follow that link,
// or the issue reports zero receipts while nine runs hold them.
let supersededByIndex: Map<string, string[]> | undefined;

// Older runs record the link as `superseded_by` on the run that holds the
// evidence, pointing forward at the rerun that replaced it. Index it once so a
// rerun can find the gold run behind it.
function runsSupersededBy(runId: string): string[] {
  if (!supersededByIndex) {
    supersededByIndex = new Map();
    for (const run of listRuns()) {
      const target = runManifest(run.id)?.superseded_by;
      if (typeof target !== "string") continue;
      supersededByIndex.set(target, [...(supersededByIndex.get(target) ?? []), run.id]);
    }
  }
  return supersededByIndex.get(runId) ?? [];
}

export function contributingRunIds(runId?: string): string[] {
  if (!runId) return [];
  const ids = new Set<string>();
  const queue = [runId];
  while (queue.length) {
    const current = queue.shift() as string;
    if (ids.has(current)) continue;
    ids.add(current);
    queue.push(...runsSupersededBy(current));
    const manifest = runManifest(current);
    if (!manifest) continue;
    for (const fragment of (manifest.input_fragments ?? []) as string[]) {
      const match = /^runs\/([^/]+)\//.exec(fragment);
      if (match) queue.push(match[1]);
    }
    // An editorial rerun rewrites the prose, not the evidence: it inherits the
    // receipts of the run it supersedes.
    if (typeof manifest.supersedes === "string") queue.push(manifest.supersedes);
  }
  return Array.from(ids);
}

// Runs record evidence two ways: per-claim findings, or per-source verification
// crosschecks. An issue has receipts either way, so count both -- otherwise a
// run that used the second shape publishes no source trail at all.
export function countRunEvidence(runId?: string): number {
  if (!runId) return 0;
  const runIds = new Set(contributingRunIds(runId));
  const findings = listFindings().filter((finding) => runIds.has(finding.runId)).length;
  const crosschecks = Array.from(runIds).reduce(
    (total, id) => total + runArtifacts(id).filter((a) => a.kind === "verification").length,
    0,
  );
  return findings + crosschecks;
}

export function findingsForSources(
  sourceIds: string[],
  runId?: string,
  preferredFindingIds: string[] = [],
): FindingEntry[] {
  const runIds = new Set(contributingRunIds(runId));
  const candidates = listFindings().filter((finding) => !runId || runIds.has(finding.runId));
  const bySource = new Map<string, FindingEntry>();
  for (const findingId of preferredFindingIds) {
    const finding = candidates.find((entry) => entry.data.finding_id === findingId);
    if (finding && !bySource.has(finding.data.source)) bySource.set(finding.data.source, finding);
  }
  for (const finding of candidates) {
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
        return `${owner}/${repo} / ${rest.join("/")}${parsed.hash}`;
      }
      if (owner && repo && parsed.pathname.includes("/releases/tag/")) {
        return `${owner}/${repo} / ${parsed.pathname.split("/releases/tag/")[1]}`;
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
  for (const signal of listAcceptedSignals()) {
    for (const id of signal.composes) set.add(id);
  }
  return Array.from(set).sort();
}

export function signalsComposingWith(id: string): SignalEntry[] {
  return listAcceptedSignals().filter((s) => s.composes.includes(id));
}

// Inbound composition for a profile: signals whose underlying finding declares
// composes including the profile's source id, and whose originating source is
// not the profile itself.
export function inboundCompositionForSource(sourceId: string): SignalEntry[] {
  return listAcceptedSignals().filter(
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

// Profile pages render the label as the page <h1> in the template. The profile
// markdown body opens with a duplicate `# <Label>` heading, which would produce
// a second <h1> on the page. Drop that leading body heading so each profile page
// has exactly one <h1> (matches how runs/[runId].astro strips the digest's h1).
function stripLeadingTitle(markdown: string): string {
  return markdown.replace(/^#\s+.*(?:\r?\n)+/, "");
}

function readProfile(file: string): MarkdownArtifact {
  const artifact = readMarkdown(file);
  const stripped = stripLeadingTitle(stripInternalSections(artifact.body));
  return { ...artifact, body: stripped, html: marked.parse(stripped) as string };
}

// People are tracked the same way providers are: as a dated posture backed by
// receipts. The difference is what a receipt proves. A post proves that a person
// said something on a date; it never proves the software behaves that way. The
// page prose carries that distinction, and nothing here promotes a person's
// statement into a product claim.
export type CitedPerson = {
  handle: string;
  displayName?: string;
  avatar?: string;
  personSlug?: string;
  posts: number;
  citations: { slug: string; href: string; title: string; date: string }[];
};

// The who's-who, derived rather than written.
//
// A person page is a dated posture about a human being and the bar for one is
// deliberately high -- a thin page implies a significance the evidence does not
// carry. But readers reasonably want to know who this publication actually
// listens to, and that question has an answer we can compute: everyone we have
// quoted, and the issues where we quoted them.
//
// No biography, no characterisation, no ranking. Just the receipt trail.
export function listCitedPeople(): CitedPerson[] {
  // Issues and features both quote people through the same card machinery, so
  // both count. `href` keeps the citation list honest about where the quote
  // actually appeared.
  const pieces = [
    ...listDigests().map((d) => ({ artifact: d, href: `/digests/${d.slug}/` })),
    ...listFeatures().map((f) => ({ artifact: f, href: `/features/${f.slug}/` })),
  ];
  const people = new Map<string, CitedPerson>();

  for (const { artifact: digest, href } of pieces) {
    const runId = String(digest.data.run_id ?? "");
    if (!runId) continue;
    for (const card of listRunSocialCards(runId)) {
      const handle = (card.authors?.[0] ?? "").replace(/^@/, "").trim();
      if (!handle) continue;
      const key = handle.toLowerCase();
      const existing = people.get(key) ?? {
        handle,
        posts: 0,
        citations: [],
        avatar: localAvatar(handle),
        personSlug: listPeople().find(
          (person) => String(person.data.handle ?? "").toLowerCase() === key,
        )?.slug,
      };
      // Only a verified name is ever shown. Never derived from the handle.
      if (card.displayName && !existing.displayName) existing.displayName = card.displayName;
      existing.posts += 1;
      if (!existing.citations.some((c) => c.href === href)) {
        existing.citations.push({
          slug: digest.slug,
          href,
          title: String(digest.data.title ?? digest.slug),
          date: formatDate(digest.data.published ?? digest.data.window?.end ?? digest.data.last_updated),
        });
      }
      people.set(key, existing);
    }
  }

  return [...people.values()].sort(
    (a, b) => b.posts - a.posts || a.handle.localeCompare(b.handle),
  );
}

export function listPeople(): MarkdownArtifact[] {
  const dir = repoPath("content", "people");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => readProfile(path.join(dir, file)))
    .sort((a, b) => String(a.data.name ?? a.slug).localeCompare(String(b.data.name ?? b.slug)));
}

export function getPerson(slug: string): MarkdownArtifact | undefined {
  return listPeople().find((person) => person.slug === slug);
}

// Features: standalone reported pieces (EDITORIAL.md, "The feature bar").
//
// A feature lives at content/features/<slug>.md with frontmatter
// `bitter.frontier_feature.v0`. It borrows a run directory for its cards and
// harvest (run_id), exactly as a digest does, so the quotation machinery --
// [[q:id]], <!--card:id-->, SourceNotes, the contiguous-run check -- is the
// same code path. Drafts (status other than "published") never render.
function featureSortKey(f: MarkdownArtifact): number {
  return toTime(f.data.published) || toTime(f.data.last_updated) || toTime(f.data.window?.end);
}

export function listFeatures(): MarkdownArtifact[] {
  const dir = repoPath("content", "features");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") && file !== "index.md")
    .map((file) => readMarkdown(path.join(dir, file)))
    .filter((feature) => String(feature.data.status ?? "published") === "published")
    .sort((a, b) => featureSortKey(b) - featureSortKey(a));
}

export function getFeature(slug: string): MarkdownArtifact | undefined {
  return listFeatures().find((feature) => feature.slug === slug);
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
