#!/usr/bin/env node
//
// harvest-feeds.mjs -- sweep the writing roster's RSS/Atom feeds and store
// what appeared, as discovery artifacts for the wire.
//
// Same discipline as the X lane: this is discovery, not capture. Nothing here
// is quoted into a page; an item that graduates to the wire gets its underlying
// piece fetched and read first. The artifact this writes is the record of what
// the sweep saw and when, so "we missed it" and "it was not there" stay
// distinguishable -- the Pillar series taught us that difference costs a week.
//
// Zero dependencies on purpose (regex-level XML reading, like fetch-avatars):
// it runs outside the site build and should have no install step. Regex parsing
// of arbitrary XML is crude; the failure mode is a mangled title in a discovery
// file, never a mangled quote on a page, because nothing is quoted from here.
//
// Usage:
//   node ops/wire/harvest-feeds.mjs                    # since 14 days ago
//   node ops/wire/harvest-feeds.mjs --since 2026-07-01 # explicit window start
//   node ops/wire/harvest-feeds.mjs --out runs/wire-2026-07-29
//
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, "..", "..");
const ROSTER = path.join(REPO, "sources", "writing-roster.yml");

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

// Minimal YAML reading for the one shape the roster uses. Deliberately not a
// YAML library: same zero-install rule as the rest of ops/.
function readRoster() {
  const text = readFileSync(ROSTER, "utf8");
  const sources = [];
  let cur = null;
  for (const line of text.split("\n")) {
    const start = line.match(/^  - id: (.+)$/);
    if (start) {
      cur = { id: start[1].trim() };
      sources.push(cur);
      continue;
    }
    if (!cur) continue;
    const kv = line.match(/^    ([a-z_]+): (.+)$/);
    if (kv) cur[kv[1]] = kv[2].trim().replace(/^"|"$/g, "");
  }
  return sources.filter((s) => s.feed);
}

function pick(xml, ...tags) {
  for (const tag of tags) {
    const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
    if (m) return m[1];
  }
  return "";
}

function clean(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function itemLink(xml) {
  // Atom: <link href="..."/> possibly with rel="alternate"; RSS: <link>text</link>
  const atom = xml.match(/<link[^>]*rel="alternate"[^>]*href="([^"]+)"/i)
    ?? xml.match(/<link[^>]*href="([^"]+)"/i);
  if (atom) return atom[1];
  return clean(pick(xml, "link"));
}

function parseFeed(xml) {
  const chunks = xml.match(/<(?:item|entry)[\s\S]*?<\/(?:item|entry)>/gi) ?? [];
  return chunks.map((c) => {
    const dateRaw = clean(pick(c, "pubDate", "published", "updated", "dc:date"));
    const t = Date.parse(dateRaw);
    return {
      title: clean(pick(c, "title")),
      url: itemLink(c),
      date: Number.isFinite(t) ? new Date(t).toISOString().slice(0, 10) : null,
      summary: clean(pick(c, "description", "summary", "content")).slice(0, 400),
    };
  }).filter((i) => i.title && i.url);
}

async function main() {
  const sinceDefault = new Date(Date.now() - 14 * 86400 * 1000).toISOString().slice(0, 10);
  const since = arg("since", sinceDefault);
  const stamp = new Date().toISOString().slice(0, 10);
  const outDir = arg("out", path.join(REPO, "runs", `wire-${stamp}`));
  mkdirSync(path.join(outDir, "feeds"), { recursive: true });

  const roster = readRoster();
  console.log(`sweeping ${roster.length} feeds, items since ${since}\n`);

  const all = [];
  for (const source of roster) {
    try {
      const res = await fetch(source.feed, {
        redirect: "follow",
        headers: { "user-agent": "bitter-frontier-wire/0 (+https://frontier.bitter.sh)" },
      });
      if (!res.ok) {
        console.log(`  FAIL ${source.id} -- HTTP ${res.status} (a failing feed is a finding; note it)`);
        continue;
      }
      const items = parseFeed(await res.text())
        .filter((i) => !i.date || i.date >= since)
        .slice(0, 25);
      writeFileSync(
        path.join(outDir, "feeds", `${source.id}.json`),
        JSON.stringify({ source: source.id, feed: source.feed, swept_on: stamp, since, items }, null, 1),
      );
      for (const item of items) all.push({ ...item, source: source.id, kind: source.kind });
      console.log(`  ok   ${source.id.padEnd(20)} ${String(items.length).padStart(3)} items`);
    } catch (error) {
      console.log(`  FAIL ${source.id} -- ${error.message}`);
    }
  }

  all.sort((a, b) => String(b.date).localeCompare(String(a.date)));
  writeFileSync(path.join(outDir, "writing.json"), JSON.stringify({ swept_on: stamp, since, items: all }, null, 1));
  console.log(`\n${all.length} items -> ${path.relative(REPO, outDir)}/writing.json`);
}

main().catch((error) => {
  console.error(`harvest-feeds failed: ${error.message}`);
  process.exit(1);
});
