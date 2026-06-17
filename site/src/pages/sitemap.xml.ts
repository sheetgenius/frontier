import { listDigests, listFindings, listProfiles, listRuns, listSignalSourceSlugs, listSignals } from "../lib/frontier";
import { SITE_URL } from "../lib/site";

type SitemapEntry = {
  path: string;
  priority: string;
  changefreq: string;
};

const staticEntries: SitemapEntry[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/digests/", priority: "0.8", changefreq: "weekly" },
  { path: "/profiles/", priority: "0.8", changefreq: "weekly" },
  { path: "/signals/", priority: "0.7", changefreq: "weekly" },
  { path: "/findings/", priority: "0.6", changefreq: "weekly" },
  { path: "/sources/", priority: "0.5", changefreq: "monthly" },
  { path: "/runs/", priority: "0.4", changefreq: "monthly" },
  { path: "/about/", priority: "0.5", changefreq: "monthly" },
];

function absolute(path: string) {
  return new URL(path, SITE_URL).toString();
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const entries = new Map<string, SitemapEntry>();
  for (const entry of staticEntries) entries.set(entry.path, entry);

  for (const digest of listDigests()) {
    entries.set(`/digests/${digest.slug}/`, { path: `/digests/${digest.slug}/`, priority: "0.9", changefreq: "weekly" });
    entries.set(`/digests/${digest.slug}/versions/`, {
      path: `/digests/${digest.slug}/versions/`,
      priority: "0.3",
      changefreq: "monthly",
    });
  }

  for (const finding of listFindings()) {
    entries.set(`/findings/${finding.finding}/`, {
      path: `/findings/${finding.finding}/`,
      priority: "0.6",
      changefreq: "weekly",
    });
    entries.set(`/findings/${finding.runId}/${finding.finding}/`, {
      path: `/findings/${finding.runId}/${finding.finding}/`,
      priority: "0.3",
      changefreq: "monthly",
    });
  }

  for (const run of listRuns()) {
    entries.set(`/runs/${run.id}/`, { path: `/runs/${run.id}/`, priority: "0.3", changefreq: "monthly" });
  }

  for (const profile of listProfiles()) {
    entries.set(`/profiles/${profile.slug}/`, {
      path: `/profiles/${profile.slug}/`,
      priority: "0.7",
      changefreq: "weekly",
    });
  }

  for (const signal of listSignals()) {
    entries.set(`/signals/${signal.id}/`, {
      path: `/signals/${signal.id}/`,
      priority: "0.6",
      changefreq: "monthly",
    });
  }

  for (const slug of listSignalSourceSlugs()) {
    entries.set(`/signals/source/${slug}/`, {
      path: `/signals/source/${slug}/`,
      priority: "0.6",
      changefreq: "weekly",
    });
  }

  for (const slug of ["control-plane", "runtime", "platform"]) {
    entries.set(`/sections/${slug}/`, {
      path: `/sections/${slug}/`,
      priority: "0.8",
      changefreq: "weekly",
    });
  }

  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = [...entries.values()]
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(absolute(entry.path))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
