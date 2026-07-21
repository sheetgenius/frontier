import type { APIRoute } from "astro";
import {
  SECTION_FRAMINGS,
  SECTION_LABELS,
  formatDate,
  listAcceptedSignals,
  listDigests,
  listProfiles,
  listSources,
  sourceLabel,
} from "../lib/frontier";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "../lib/site";

export const GET: APIRoute = () => {
  const digests = listDigests();
  const profiles = listProfiles();
  const signals = listAcceptedSignals();
  const sources = listSources();

  const lines: string[] = [];
  lines.push(`# ${SITE_TITLE}`);
  lines.push("");
  lines.push(`> ${SITE_DESCRIPTION}`);
  lines.push("");
  lines.push(
    "Bitter Frontier is a research publication for software operators building with coding agents. " +
      "Every claim traces to a primary source such as a commit, release, versioned document, advisory, paper, or described reproducible observation. The file-backed research method and trail are linked from /about/.",
  );
  lines.push("Edited by Michael Ruescher. Published by Bitter (https://bitter.sh).");
  lines.push("");

  lines.push("## Who it's for");
  lines.push("");
  lines.push("Bitter Frontier is written for founders, engineering leaders, platform owners, security operators, and engineers directing coding agents in real software and company workflows. Primary receipts let a reader recheck factual premises and trace how the editorial judgment was formed; they do not make judgment mechanical.");
  lines.push("");

  lines.push("## How to read this site");
  lines.push("");
  lines.push("- **Digests** advance declared publication windows; one-day or live-window editions are labeled as special briefs. Each has an Operator Brief block summarizing what to try, upgrade, watch, or treat as uncertain.");
  lines.push("- **Signals** are atomic accepted judgments. Each signal has a stable URL at /signals/<id>/ with sources, finding back-links, digest back-links, accessibility_consequence and security_consequence blocks where applicable, and a section tag.");
  lines.push("- **Sections** are the three durable editorial lanes - see below.");
  lines.push("- **Profiles** are dated project reads, not claims of evergreen state. Each has an Operator Stance band: use it for / avoid it for / watch next.");
  lines.push("- **Findings** are source-anchored observations under run artifacts; profile claims reference findings by ID.");
  lines.push("- **Runs** (Evidence trail) are full research-cycle artifacts: sources read, findings produced, signals accepted.");
  lines.push(`- **Corrections** are public at ${SITE_URL}/corrections/; withdrawn signal URLs remain available as correction records.`);
  lines.push("");

  lines.push("## The Frontier lens");
  lines.push("");
  lines.push(`- [Bitter Lesson Maxing](${SITE_URL}/bitter-lesson/) - build where improving general agents compound the advantage, not where their next release erases it.`);
  lines.push(`- [Amdahl Maxing](${SITE_URL}/amdahls-law/) - treat human attention as the scarce serial resource and spend it where judgment changes the outcome.`);
  lines.push(`- [Pinned founder's letter](${SITE_URL}/letter/) - why these two constraints produced Bitter and Bitter Frontier.`);
  lines.push("");

  lines.push("## Sections");
  lines.push("");
  for (const slug of ["control-plane", "runtime", "platform"]) {
    lines.push(`- [${SECTION_LABELS[slug]}](${SITE_URL}/sections/${slug}/) - ${SECTION_FRAMINGS[slug]}`);
  }
  lines.push("");

  lines.push("## Cross-cutting axes");
  lines.push("");
  lines.push("Every signal must answer four axes, none of which are sections:");
  lines.push("- **Authority** - what may the agent do, who granted it, and where is that decision visible?");
  lines.push("- **Evidence** - every signal traces to a primary source.");
  lines.push("- **Accessibility** - what got easier, who can use it now, did authority stay visible? (Structured as accessibility_consequence when accessibility_impact >= low.)");
  lines.push("- **Security** - what exposure changed, what is actually enforced, and what work or capability does the control cost?");
  lines.push("");

  lines.push("## Schemas");
  lines.push("");
  lines.push("- `bitter.frontier_digest.v0` - digest frontmatter (window, run_id, top_signal_ids, operator_brief, sources)");
  lines.push("- `bitter.frontier_signals.v0` - accepted signal (id, title, source, finding_ids, why_action_bearing, section, accessibility_impact, accessibility_consequence, security_impact, security_change, security_consequence)");
  lines.push("- `bitter.frontier_finding.v0` - source-anchored observation (finding_id, source, evidence[], confidence, actionability)");
  lines.push("- `bitter.frontier_profile.v0` - dated project profile (claims[], stance, posture_basis)");
  lines.push("- `bitter.frontier_run.v0` - run artifact manifest");
  lines.push("");

  lines.push("## Feeds");
  lines.push("");
  lines.push(`- [RSS feed](${SITE_URL}/rss.xml) - published digests with full HTML content plus correction notices`);
  lines.push(`- [Sitemap](${SITE_URL}/sitemap.xml) - all canonical URLs`);
  lines.push("");

  lines.push("## Latest digests");
  lines.push("");
  for (const digest of digests.slice(0, 8)) {
    const end = formatDate(digest.data.window?.end);
    lines.push(`- [${digest.data.title ?? digest.slug}](${SITE_URL}/digests/${digest.slug}/) - published ${end}`);
  }
  lines.push("");

  lines.push("## Project profiles");
  lines.push("");
  for (const profile of profiles) {
    const stance = profile.data.stance ?? {};
    const useFor = (stance.use_for ?? "").replace(/<[^>]+>/g, "");
    lines.push(`- [${sourceLabel(profile.slug)}](${SITE_URL}/profiles/${profile.slug}/)${useFor ? ` - ${useFor}` : ""}`);
  }
  lines.push("");

  lines.push("## Recent signals");
  lines.push("");
  for (const signal of signals.slice(0, 20)) {
    lines.push(`- [${signal.title}](${SITE_URL}/signals/${signal.id}/) - ${signal.date} - ${signal.sources.map(sourceLabel).join(", ")}`);
  }
  lines.push("");

  lines.push("## Source contracts");
  lines.push("");
  for (const source of sources) {
    const label = source.contract?.label ?? source.id;
    const homepage = source.contract?.homepage ?? "";
    const surfaceKinds = (source.contract?.primary_surfaces ?? [])
      .map((surface: any) => surface.kind)
      .filter(Boolean)
      .join(", ");
    lines.push(`- ${label}${homepage ? ` - ${homepage}` : ""}${surfaceKinds ? ` (primary surfaces: ${surfaceKinds})` : ""}`);
  }
  lines.push("");

  lines.push("## Citation guidance");
  lines.push("");
  lines.push("Cite signals by their stable URL (`/signals/<id>/`) and date. Digests advance declared publication windows. Profiles are dated operator postures and do not imply freshness beyond their displayed date. Evidence floors and confidence levels are explicit in the frontmatter and on the rendered pages.");

  return new Response(lines.join("\n") + "\n", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
};
