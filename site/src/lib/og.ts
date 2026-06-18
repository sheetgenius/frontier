import { SITE_IMAGE, SITE_URL } from "./site";

// Map a page URL path to its generated OG card path under /og/ (no extension),
// or null when the page has no per-page card and should use the static fallback.
//
// This MUST mirror the `ogPath` values produced by scripts/og-cards.mjs:
//   /                 -> "home"
//   /digests/<slug>/  -> "digests/<slug>"
//   /profiles/<slug>/ -> "profiles/<slug>"
//   /signals/<id>/    -> "signals/<id>"
// Index pages and every other route fall through to the static card.
function ogPathForUrlPath(pathname: string): string | null {
  // Normalize: ensure a single leading slash, drop a trailing slash.
  const p = ("/" + pathname.replace(/^\/+/, "")).replace(/\/+$/, "");

  if (p === "" || p === "/") return "home";

  const m = /^\/(digests|profiles|signals)\/([^/]+)$/.exec(p);
  if (m) {
    const [, kind, slug] = m;
    // Detail pages only — never the section index (handled by the regex above,
    // which requires exactly one path segment after the kind).
    return `${kind}/${slug}`;
  }

  return null;
}

// Absolute OG image URL for a page: its own card if one was generated, else the
// site-wide static fallback (SITE_IMAGE / /og.png).
export function ogImageForPath(pathname: string): string {
  const ogPath = ogPathForUrlPath(pathname);
  if (!ogPath) return SITE_IMAGE;
  return new URL(`/og/${ogPath}.png`, SITE_URL).toString();
}
