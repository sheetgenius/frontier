import rss from "@astrojs/rss";
import { listDigests, listFeatures, listSignals } from "../lib/frontier";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "../lib/site";

const HTML_ENTITIES: Record<string, string> = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  nbsp: " ",
  quot: '"',
};

function decodeHtmlEntities(value: string): string {
  let decoded = value;
  for (let pass = 0; pass < 3; pass++) {
    const next = decoded.replace(/&(#x[\da-f]+|#\d+|amp|apos|gt|lt|nbsp|quot);/gi, (match, entity: string) => {
      const normalized = entity.toLowerCase();
      if (normalized.startsWith("#x")) {
        const codePoint = Number.parseInt(normalized.slice(2), 16);
        return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : match;
      }
      if (normalized.startsWith("#")) {
        const codePoint = Number.parseInt(normalized.slice(1), 10);
        return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : match;
      }
      return HTML_ENTITIES[normalized] ?? match;
    });
    if (next === decoded) break;
    decoded = next;
  }
  return decoded;
}

function firstParagraph(html: string): string {
  const m = /<p>([\s\S]*?)<\/p>/.exec(html);
  if (!m) return "";
  return decodeHtmlEntities(m[1].replace(/<[^>]+>/g, "").trim());
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const digests = listDigests();
  const digestItems = digests.map((digest) => ({
    title: digest.data.title ?? digest.slug,
    pubDate: new Date(digest.data.window?.end ?? digest.data.window?.start ?? "2026-01-01"),
    description: digest.data.description ?? firstParagraph(digest.html),
    content: digest.html,
    link: `/digests/${digest.slug}/`,
  }));
  const featureItems = listFeatures().map((feature) => ({
    title: feature.data.title ?? feature.slug,
    pubDate: new Date(feature.data.published ?? feature.data.last_updated ?? "2026-01-01"),
    description: feature.data.dek ?? firstParagraph(feature.html),
    content: feature.html,
    link: `/features/${feature.slug}/`,
  }));
  const correctionItems = listSignals()
    .filter((signal) => signal.status === "withdrawn" && signal.correction?.date)
    .map((signal) => {
      const description = signal.correction?.reason
        ?? "This signal was withdrawn from the accepted record.";
      return {
        title: signal.title,
        pubDate: new Date(signal.correction!.date!),
        description,
        content: `<p>${escapeHtml(description)}</p>`,
        link: `/signals/${signal.id}/`,
      };
    });
  // The feed had grown to ~287KB and every poller re-downloaded all of it
  // (the edge serves feeds without validators, so there are no 304s). Cap the
  // item count, and carry full article bodies only for the newest pieces --
  // a reader's feed shows recent items in full, and the description plus link
  // serves the archive tail.
  const FULL_CONTENT_ITEMS = 8;
  const items = [...digestItems, ...featureItems, ...correctionItems]
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())
    .slice(0, 20)
    .map((item, index) => (index < FULL_CONTENT_ITEMS ? item : { ...item, content: undefined }));
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: SITE_URL,
    items,
  });
}
