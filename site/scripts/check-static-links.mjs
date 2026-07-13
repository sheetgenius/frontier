#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const SITE_DIR = path.resolve(SCRIPT_DIR, "..");
const DIST_DIR = path.resolve(SITE_DIR, "dist");
const SITE_ORIGIN = "https://frontier.bitter.sh";

function walkHtml(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(file, out);
    else if (entry.isFile() && entry.name.endsWith(".html")) out.push(file);
  }
  return out;
}

function routeForFile(file) {
  const relative = path.relative(DIST_DIR, file).split(path.sep).join("/");
  if (relative === "index.html") return "/";
  return `/${relative.replace(/index\.html$/, "")}`;
}

function targetForPathname(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  const relative = decoded.replace(/^\/+/, "");
  if (decoded.endsWith("/")) return path.join(DIST_DIR, relative, "index.html");
  if (path.extname(relative)) return path.join(DIST_DIR, relative);
  return path.join(DIST_DIR, relative, "index.html");
}

if (!fs.existsSync(DIST_DIR)) {
  console.error(`static link check: missing build output at ${DIST_DIR}`);
  process.exit(1);
}

const missing = new Map();
for (const file of walkHtml(DIST_DIR)) {
  const html = fs.readFileSync(file, "utf8");
  const sourceRoute = routeForFile(file);
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;

    let url;
    try {
      url = new URL(href, new URL(sourceRoute, SITE_ORIGIN));
    } catch {
      continue;
    }
    if (url.origin !== SITE_ORIGIN) continue;

    const target = targetForPathname(url.pathname);
    if (target && !fs.existsSync(target)) {
      const key = url.pathname;
      const sources = missing.get(key) ?? new Set();
      sources.add(sourceRoute);
      missing.set(key, sources);
    }
  }
}

if (missing.size > 0) {
  console.error(`static link check: ${missing.size} missing internal target(s)`);
  for (const [target, sources] of [...missing.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    console.error(`  ${target}`);
    for (const source of [...sources].sort()) console.error(`    from ${source}`);
  }
  process.exit(1);
}

console.log("static link check: clean");
