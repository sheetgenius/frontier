export const SITE_URL = "https://frontier.bitter.sh";
export const GH_REPO_URL = "https://github.com/sheetgenius/frontier";
// GA4 stream for frontier.bitter.sh, provisioned under the shared SheetGenius
// admin account (each factory property carries its own ga_property_id / stream).
// The CSP in site/public/_headers and _headers.json must allow the
// googletagmanager and google-analytics origins or this collects nothing.
export const GA_MEASUREMENT_ID = "G-H0F0J0EBHP";
export const GH_BLOB_BASE = `${GH_REPO_URL}/blob/main`;
export const SITE_TITLE = "Bitter Frontier";
export const SITE_DESCRIPTION =
  "Source-backed, cross-project reporting on what coding agents just made possible, where the bottleneck moved, and what deserves human attention.";
export const SITE_IMAGE = `${SITE_URL}/og.png`;
