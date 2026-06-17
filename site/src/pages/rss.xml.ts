import rss from "@astrojs/rss";
import { listDigests } from "../lib/frontier";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "../lib/site";

function firstParagraph(html: string): string {
  const m = /<p>([\s\S]*?)<\/p>/.exec(html);
  if (!m) return "";
  return m[1].replace(/<[^>]+>/g, "").trim();
}

export function GET() {
  const digests = listDigests();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: SITE_URL,
    items: digests.map((digest) => ({
      title: digest.data.title ?? digest.slug,
      pubDate: new Date(digest.data.window?.end ?? digest.data.window?.start ?? "2026-01-01"),
      description: digest.data.description ?? firstParagraph(digest.html),
      content: digest.html,
      link: `/digests/${digest.slug}/`,
    })),
  });
}
