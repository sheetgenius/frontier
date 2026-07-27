#!/usr/bin/env node
//
// check-served-headers.mjs -- assert what the EDGE actually serves, not what the
// repository declares.
//
// Why this exists. `static-headers.test.mjs` checks that public/_headers and
// public/_headers.json agree with each other. Both files can be perfectly
// consistent and perfectly ignored: on 2026-07-27 this site declared a CSP,
// HSTS, X-Frame-Options, Referrer-Policy, and Permissions-Policy, shipped both
// declaration files into dist/, and served none of them on any path. The
// platform consumes _headers (the file 404s, so it is not being served as
// content) without applying it.
//
// A test that compares a config file to another config file cannot catch that.
// This publication spends its pages arguing that a configured control is not a
// control until something enforces it, so shipping a security posture that lives
// only in the repository would be the exact failure it reports on. This script
// is the check that closes that gap for us.
//
// It is advisory by default and never blocks a build: the deploy pipeline is not
// ours to gate, and a network failure is not a security finding. Pass --strict to
// exit non-zero when a declared header is missing, which is the right mode for a
// scheduled audit.
//
// Usage:
//   node site/scripts/check-served-headers.mjs [--url https://frontier.bitter.sh] [--strict]

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const HEADERS_FILE = path.join(REPO_ROOT, "site", "public", "_headers");

const args = process.argv.slice(2);
const strict = args.includes("--strict");
const urlFlag = args.indexOf("--url");
const BASE = urlFlag !== -1 ? args[urlFlag + 1] : "https://frontier.bitter.sh";

// Paths chosen to cover distinct handling: a prerendered page, a nested route,
// a static asset, and a generated endpoint. A platform can apply rules to one
// and not the others, so checking only "/" would understate the problem.
const PATHS = ["/", "/digests/", "/og.png", "/rss.xml"];

function declaredHeaders() {
  const source = readFileSync(HEADERS_FILE, "utf8");
  const declared = new Map();
  let inRoot = false;
  for (const line of source.split(/\r?\n/)) {
    if (line.trim() === "/*") {
      inRoot = true;
      continue;
    }
    if (!inRoot) continue;
    if (line && !/^\s/.test(line)) break;
    const m = line.trim().match(/^([^:]+):\s*(.+)$/);
    if (m) declared.set(m[1].toLowerCase(), m[2]);
  }
  return declared;
}

async function servedHeaders(url) {
  const res = await fetch(url, { method: "HEAD", redirect: "follow" });
  const served = new Map();
  for (const [k, v] of res.headers.entries()) served.set(k.toLowerCase(), v);
  return { status: res.status, served };
}

async function main() {
  const declared = declaredHeaders();
  if (declared.size === 0) {
    console.error("served-header check: could not parse any headers from site/public/_headers");
    process.exit(2);
  }

  console.log(`served-header check: ${BASE}`);
  console.log(`  declared in site/public/_headers: ${declared.size} header(s)\n`);

  const missingByPath = new Map();
  let checked = 0;

  for (const p of PATHS) {
    const url = new URL(p, BASE).toString();
    let result;
    try {
      result = await servedHeaders(url);
    } catch (error) {
      console.log(`  ${p} -- unreachable (${error.message}); skipped`);
      continue;
    }
    checked += 1;

    const missing = [];
    const mismatched = [];
    for (const [name, value] of declared) {
      if (!result.served.has(name)) missing.push(name);
      else if (result.served.get(name).trim() !== value.trim()) mismatched.push(name);
    }

    if (missing.length === 0 && mismatched.length === 0) {
      console.log(`  ${p} -- all ${declared.size} declared headers served`);
    } else {
      missingByPath.set(p, missing);
      console.log(`  ${p} -- HTTP ${result.status}`);
      if (missing.length) console.log(`      missing:    ${missing.join(", ")}`);
      if (mismatched.length) console.log(`      mismatched: ${mismatched.join(", ")}`);
    }
  }

  if (checked === 0) {
    console.log("\nno paths reachable; nothing asserted");
    return;
  }

  const everyPathMissingEverything = [...missingByPath.values()].filter(
    (m) => m.length === declared.size,
  ).length;

  console.log("");
  if (missingByPath.size === 0) {
    console.log("RESULT: the edge serves what the repository declares.");
    return;
  }

  if (everyPathMissingEverything === checked) {
    console.log(
      "RESULT: the edge serves NONE of the declared headers, on any path checked.\n" +
        "        The platform is not applying site/public/_headers. This is a\n" +
        "        platform configuration gap, not a repository defect: the files are\n" +
        "        correct and ignored. Until it is resolved, treat the declared\n" +
        "        security posture as aspirational and do not cite it as shipped.",
    );
  } else {
    console.log(
      `RESULT: ${missingByPath.size} of ${checked} paths are missing declared headers.\n` +
        "        Partial application usually means a per-route or asset-class rule,\n" +
        "        so check the platform's matching rules rather than the file syntax.",
    );
  }

  if (strict) process.exit(1);
}

main().catch((error) => {
  console.error(`served-header check failed: ${error.message}`);
  process.exit(2);
});
