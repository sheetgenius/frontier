import { SITE_URL } from "../lib/site";

export function GET() {
  // /up is the deploy health probe (raw JSON served as HTML); it is not a page.
  return new Response(`User-agent: *\nAllow: /\nDisallow: /up$\nDisallow: /up/\nSitemap: ${SITE_URL}/sitemap.xml\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

