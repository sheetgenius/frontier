#!/usr/bin/env node
// Emit a tiny redirect stub at dist/<route>.html for every dist/<route>/index.html.
//
// The live edge hard-404s slashless URLs (/about -> empty 404) but does map
// extensionless paths onto .html files (/up serves dist/up.html), so a stub
// per route makes shared or hand-typed slashless links land on the page
// instead of a blank 404. The stub is an instant meta refresh -- which search
// engines treat as a redirect -- plus a canonical pointing at the slashed URL,
// so nothing duplicate gets indexed. A platform-side 301 would supersede this.
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
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const child = path.join(dir, entry.name);
    const index = path.join(child, "index.html");
    const stub = `${child}.html`;
    if (fs.existsSync(index) && !fs.existsSync(stub)) {
      const route = `/${path.relative(DIST, child).split(path.sep).join("/")}`;
      fs.writeFileSync(stub, stubHtml(route));
      emitted += 1;
    }
    walk(child);
  }
}

if (!fs.existsSync(DIST)) {
  console.error("[slashless] dist/ not found - run `astro build` first.");
  process.exit(1);
}
walk(DIST);
console.log(`[slashless] emitted ${emitted} slashless redirect stubs`);
