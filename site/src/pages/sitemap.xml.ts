import {
  formatDate,
  listDigests,
  listFeatures,
  listPeople,
  listProfiles,
  listSignalSourceSlugs,
  listSignals,
} from "../lib/frontier";
import { gitRevisionDate } from "../lib/revision";
import { SITE_URL } from "../lib/site";

type SitemapEntry = {
  path: string;
  priority: string;
  changefreq: string;
  lastmod: string;
};

const staticEntries: SitemapEntry[] = [
  { path: "/", priority: "1.0", changefreq: "weekly", lastmod: gitRevisionDate("site/src/pages/index.astro", "2026-07-12") },
  { path: "/letter/", priority: "0.9", changefreq: "monthly", lastmod: gitRevisionDate("site/src/pages/letter/index.astro", "2026-07-12") },
  { path: "/bitter-lesson/", priority: "0.9", changefreq: "monthly", lastmod: gitRevisionDate("site/src/pages/bitter-lesson/index.astro", "2026-07-12") },
  { path: "/amdahls-law/", priority: "0.9", changefreq: "monthly", lastmod: gitRevisionDate("site/src/pages/amdahls-law/index.astro", "2026-07-12") },
  { path: "/digests/", priority: "0.8", changefreq: "weekly", lastmod: gitRevisionDate("site/src/pages/digests/index.astro", "2026-07-12") },
  { path: "/features/", priority: "0.8", changefreq: "weekly", lastmod: gitRevisionDate("site/src/pages/features/index.astro", "2026-08-23") },
  { path: "/profiles/", priority: "0.8", changefreq: "weekly", lastmod: gitRevisionDate("site/src/pages/profiles/index.astro", "2026-07-12") },
  { path: "/signals/", priority: "0.7", changefreq: "weekly", lastmod: gitRevisionDate("site/src/pages/signals/index.astro", "2026-07-12") },
  { path: "/people/", priority: "0.7", changefreq: "weekly", lastmod: gitRevisionDate("site/src/pages/people/index.astro", "2026-07-12") },
  { path: "/findings/", priority: "0.6", changefreq: "weekly", lastmod: gitRevisionDate("site/src/pages/findings/index.astro", "2026-07-12") },
  { path: "/sources/", priority: "0.5", changefreq: "monthly", lastmod: gitRevisionDate("sources/index.yml", "2026-07-12") },
  { path: "/corrections/", priority: "0.6", changefreq: "monthly", lastmod: gitRevisionDate("content/corrections.md", "2026-07-12") },
  { path: "/runs/", priority: "0.4", changefreq: "monthly", lastmod: gitRevisionDate("site/src/pages/runs/index.astro", "2026-07-12") },
  { path: "/about/", priority: "0.5", changefreq: "monthly", lastmod: gitRevisionDate("site/src/pages/about/index.astro", "2026-07-12") },
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
    entries.set(`/digests/${digest.slug}/`, {
      path: `/digests/${digest.slug}/`,
      priority: "0.9",
      changefreq: "weekly",
      lastmod: gitRevisionDate(
        digest.relativePath,
        formatDate(digest.data.last_updated ?? digest.data.window?.end),
      ),
    });
  }

  // Individual findings are deliberately absent. They carry noindex,follow --
  // 658 receipts at ~140 machine-written words each were 70% of the site and
  // the first thing a stranger met from search. Listing a noindex page in a
  // sitemap also asks a crawler to do two contradictory things. The /findings/
  // index stays, so the apparatus is still browsable.

  for (const feature of listFeatures()) {
    entries.set(`/features/${feature.slug}/`, {
      path: `/features/${feature.slug}/`,
      priority: "0.9",
      changefreq: "monthly",
      lastmod: gitRevisionDate(
        feature.relativePath,
        formatDate(feature.data.last_updated ?? feature.data.published),
      ),
    });
  }

  for (const person of listPeople()) {
    entries.set(`/people/${person.slug}/`, {
      path: `/people/${person.slug}/`,
      priority: "0.7",
      changefreq: "weekly",
      lastmod: formatDate(person.data.last_updated),
    });
  }

  for (const profile of listProfiles()) {
    entries.set(`/profiles/${profile.slug}/`, {
      path: `/profiles/${profile.slug}/`,
      priority: "0.7",
      changefreq: "weekly",
      lastmod: formatDate(profile.data.last_updated),
    });
  }

  const signals = listSignals();
  const acceptedSignals = signals.filter((signal) => signal.status !== "withdrawn");
  for (const signal of signals) {
    entries.set(`/signals/${signal.id}/`, {
      path: `/signals/${signal.id}/`,
      priority: "0.6",
      changefreq: "monthly",
      lastmod: formatDate(signal.correction?.date ?? signal.date),
    });
  }

  for (const slug of listSignalSourceSlugs()) {
    const latest = acceptedSignals.find((signal) => signal.sources.includes(slug));
    entries.set(`/signals/source/${slug}/`, {
      path: `/signals/source/${slug}/`,
      priority: "0.6",
      changefreq: "weekly",
      lastmod: formatDate(latest?.date),
    });
  }

  for (const slug of ["control-plane", "runtime", "platform"]) {
    const latest = acceptedSignals.find((signal) => signal.sections.includes(slug));
    entries.set(`/sections/${slug}/`, {
      path: `/sections/${slug}/`,
      priority: "0.8",
      changefreq: "weekly",
      lastmod: latest ? formatDate(latest.date) : "2026-07-12",
    });
  }

  const urls = [...entries.values()]
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(absolute(entry.path))}</loc>
    <lastmod>${entry.lastmod}</lastmod>
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
