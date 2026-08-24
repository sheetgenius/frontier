#!/usr/bin/env node
// Emit a tiny redirect stub at dist/<route>.html for top-level routes.
//
// The live edge hard-404s slashless URLs (/about -> empty 404) but does map
// extensionless paths onto .html files (/up serves dist/up.html), so a stub
// per route makes shared or hand-typed slashless links land on the page
// instead of a blank 404. The stub is an instant meta refresh -- which search
// engines treat as a redirect -- plus a canonical pointing at the slashed URL,
// so nothing duplicate gets indexed. A platform-side 301 would supersede this.
//
// Top-level routes only: hand-typed URLs are short (/about, /digests), and
// the 2026-08-24 deploy incident showed the publish path has a payload limit
// -- a stub for all 1,424 routes was one of the two features that pushed the
// artifact past it. Deep links circulate with their trailing slash already.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIST = path.join(path.dirname(path.dirname(fileURLToPath(import.meta.url))), "dist");
const ORIGIN = "https://frontier.bitter.sh";

function stubHtml(route) {
  const target = `${route}/`;
  const abs = `${ORIGIN}${target}`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${target}"><meta name="robots" content="noindex"><link rel="canonical" href="${abs}"><title>Redirecting to ${target}</title></head><body><a href="${target}">${target}</a></body></html>\n`;
}

let emitted = 0;
function emitTopLevel(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const child = path.join(dir, entry.name);
    const index = path.join(child, "index.html");
    const stub = `${child}.html`;
    if (fs.existsSync(index) && !fs.existsSync(stub)) {
      fs.writeFileSync(stub, stubHtml(`/${entry.name}`));
      emitted += 1;
    }
  }
}

if (!fs.existsSync(DIST)) {
  console.error("[slashless] dist/ not found - run `astro build` first.");
  process.exit(1);
}
emitTopLevel(DIST);
console.log(`[slashless] emitted ${emitted} slashless redirect stubs`);
