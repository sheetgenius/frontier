import type { APIRoute } from "astro";
import {
  SECTION_FRAMINGS,
  SECTION_LABELS,
  formatDate,
  listDigests,
  listProfiles,
  listSignals,
  listSources,
  sourceLabel,
} from "../lib/frontier";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "../lib/site";

export const GET: APIRoute = () => {
  const digests = listDigests();
  const profiles = listProfiles();
  const signals = listSignals();
  const sources = listSources();

  const lines: string[] = [];
  lines.push(`# ${SITE_TITLE}`);
  lines.push("");
  lines.push(`> ${SITE_DESCRIPTION}`);
  lines.push("");
  lines.push(
    "Bitter Frontier is a research publication for software operators building with coding agents. " +
      "Every claim traces to a source commit, release note, or changelog entry. The autonomous research loop is described at /about/.",
  );
  lines.push("");

  lines.push("## Who it's for");
  lines.push("");
  lines.push("Bitter Frontier is written for engineers and operators running coding agents in production, and for anyone tracking where the frontier is heading. Every claim traces to a primary source. The structured fields (signal ids, section tags, accessibility and security consequence blocks) exist so a reader returning months later can re-verify every judgment from the linked sources, not from memory.");
  lines.push("");

  lines.push("## How to read this site");
  lines.push("");
  lines.push("- **Digests** are weekly synthesis; each has an Operator Brief block summarizing what to try, upgrade, watch, or treat as uncertain.");
  lines.push("- **Signals** are atomic accepted judgments. Each signal has a stable URL at /signals/<id>/ with sources, finding back-links, digest back-links, accessibility_consequence and security_consequence blocks where applicable, and a section tag.");
  lines.push("- **Sections** are the three durable editorial lanes - see below.");
  lines.push("- **Profiles** are evergreen per-provider registers. Each has an Operator Stance band (use it for / avoid it for / watch next) above the body.");
  lines.push("- **Findings** are source-anchored observations under run artifacts; profile claims reference findings by ID.");
  lines.push("- **Runs** (Evidence trail) are full research-cycle artifacts: sources read, findings produced, signals accepted.");
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
  lines.push("- **Authority** - is this allowed? (Captured in prose + accessibility_consequence.authority_visibility.)");
  lines.push("- **Evidence** - every signal traces to a primary source.");
  lines.push("- **Accessibility** - what got easier, who can use it now, did authority stay visible? (Structured as accessibility_consequence when accessibility_impact >= low.)");
  lines.push("- **Security** - is this enforceable regardless of policy? (Structured as security_consequence + security_change + cost_to_operator when security_impact >= low.)");
  lines.push("");

  lines.push("## Schemas");
  lines.push("");
  lines.push("- `bitter.frontier_digest.v0` - digest frontmatter (window, run_id, top_signal_ids, operator_brief, sources)");
  lines.push("- `bitter.frontier_signals.v0` - accepted signal (id, title, source, finding_ids, why_action_bearing, section, accessibility_impact, accessibility_consequence, security_impact, security_change, security_consequence)");
  lines.push("- `bitter.frontier_finding.v0` - source-anchored observation (finding_id, source, evidence[], confidence, actionability)");
  lines.push("- `bitter.frontier_profile.v0` - evergreen provider profile (claims[], stance, posture_basis)");
  lines.push("- `bitter.frontier_run.v0` - run artifact manifest");
  lines.push("");

  lines.push("## Feeds");
  lines.push("");
  lines.push(`- [RSS feed](${SITE_URL}/rss.xml) - published digests with full HTML content`);
  lines.push(`- [Sitemap](${SITE_URL}/sitemap.xml) - all canonical URLs`);
  lines.push("");

  lines.push("## Latest digests");
  lines.push("");
  for (const digest of digests.slice(0, 8)) {
    const end = formatDate(digest.data.window?.end);
    lines.push(`- [${digest.data.title ?? digest.slug}](${SITE_URL}/digests/${digest.slug}/) - published ${end}`);
  }
  lines.push("");

  lines.push("## Provider profiles");
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
    const surfaceClass = source.contract?.surface_class ?? "release notes";
    lines.push(`- ${label}${homepage ? ` - ${homepage}` : ""} (watched as ${surfaceClass})`);
  }
  lines.push("");

  lines.push("## Citation guidance");
  lines.push("");
  lines.push("Cite signals by their stable URL (`/signals/<id>/`) and date. Digests are weekly; profiles are evergreen and re-verified each cycle (`last_verified` on each claim). Evidence floors and confidence levels are explicit in the frontmatter and on the rendered pages.");

  return new Response(lines.join("\n") + "\n", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
};
