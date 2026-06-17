#!/usr/bin/env node
// Bridge the report-only link checker into PR-visible warnings, scoped to the
// receipts this PR changed. The link checker (site/scripts/check-external-links.mjs)
// always exits 0 by design (auth walls / rate limits cause false positives), so it
// can never block a build. This script reads its JSON report, intersects it with the
// changed-receipts manifest, and emits a GitHub Actions `::warning` for each changed
// receipt that came back broken / redirected. Warnings are visible on the PR but do
// not fail the job.
//
// Usage: node annotate-link-health.mjs <link-health.json> <changed-receipts.json>
// Exit 0 always.

import fs from "node:fs";

const [, , linkReportPath, changedPath] = process.argv;

function readJson(p) {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

const report = readJson(linkReportPath);
const changed = readJson(changedPath);

if (!report || !changed) {
  console.log("annotate-link-health: missing report or changed-receipts manifest; nothing to annotate.");
  process.exit(0);
}

const changedUrls = new Set((changed.receipts ?? []).map((r) => r.url));
if (changedUrls.size === 0) {
  console.log("annotate-link-health: PR changed no receipts.");
  process.exit(0);
}

// The link checker's report shape may evolve; accept a few likely field names and
// classify anything that is not a clean 2xx/known-auth as worth a warning.
const results = report.results ?? report.urls ?? report.checked ?? [];

function statusOf(r) {
  return r.status ?? r.code ?? r.httpStatus ?? null;
}
function classOf(r) {
  return (r.class ?? r.failure_class ?? r.failureClass ?? r.outcome ?? "").toString();
}
function urlOf(r) {
  return (r.url ?? r.final_url ?? r.requested ?? "").toString().replace(/[.,;]+$/, "");
}

let warned = 0;
for (const r of results) {
  const url = urlOf(r);
  if (!changedUrls.has(url)) continue;

  const status = statusOf(r);
  const klass = classOf(r).toLowerCase();
  const redirected = Boolean(r.redirected || (r.redirects && r.redirects.length) || klass.includes("redirect"));
  const broken =
    klass.includes("broken") ||
    klass.includes("dns") ||
    klass.includes("timeout") ||
    (typeof status === "number" && status >= 400 && status !== 401 && status !== 403 && status !== 429);

  if (broken) {
    console.log(`::warning title=Changed receipt may be broken::${url} returned ${status || klass || "an error"}. Confirm the primary source still supports the claim.`);
    warned++;
  } else if (redirected) {
    const finalUrl = r.final_url ?? r.finalUrl ?? "(see report)";
    console.log(`::warning title=Changed receipt redirected::${url} now resolves to ${finalUrl}. Possible "Soft-OK Receipt Drift" — verify the destination is still the cited content, not a moved-docs or login shell.`);
    warned++;
  }
}

console.log(`annotate-link-health: ${warned} changed-receipt warning(s) of ${changedUrls.size} changed receipt(s).`);
process.exit(0);
