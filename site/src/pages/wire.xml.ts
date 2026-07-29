import { SITE_URL } from "../lib/site";
import { listWireIssues } from "../lib/frontier";

// The wire's own feed. Item description = our take plus the tier, so a reader
// in an RSS client still sees which claims we vouched for.
function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export function GET() {
  const issues = listWireIssues().slice(0, 12);
  const items = issues.flatMap((issue) =>
    issue.items.map((item) => `  <item>
    <title>${escapeXml(item.title)}</title>
    <link>${escapeXml(item.url)}</link>
    <guid isPermaLink="false">${escapeXml(`${issue.id}:${item.url}`)}</guid>
    <pubDate>${new Date(`${item.date}T12:00:00Z`).toUTCString()}</pubDate>
    <description>${escapeXml(`[${item.tier}] ${item.take} (via ${item.source} -- curated in the Bitter Frontier wire, ${new URL(`/wire/${issue.id}/`, SITE_URL).toString()})`)}</description>
  </item>`),
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Bitter Frontier: The Wire</title>
  <link>${new URL("/wire/", SITE_URL).toString()}</link>
  <description>What was worth your attention this week in agentic coding. Checked means adjudicated against the primary record; relayed means accurately reported, not vouched for.</description>
${items.join("\n")}
</channel>
</rss>
`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
