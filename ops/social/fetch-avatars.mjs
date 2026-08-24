#!/usr/bin/env node
//
// fetch-avatars.mjs -- pull the profile images for people we quote, once, and
// store them in the repository.
//
// Why self-host rather than hotlink. Three reasons, in order of weight:
//
//   1. We told readers on /conversation-layer/ that our pages "make no request
//      to any social platform when you load the page." Hotlinking would break
//      that promise, and the CSP (img-src 'self' data:) would block it anyway.
//   2. An archive has to survive its sources. A hotlinked avatar rots the moment
//      someone changes their picture or deletes the account, and a 2026 issue
//      would silently start showing a 2028 face, or nothing.
//   3. No layout shift, no third-party latency, works offline and in print.
//
// The tradeoff is real and worth stating: a profile image is usually a
// photograph someone else owns, and reproducing it is a different act from
// quoting text. We keep the images small, use them only for people the
// publication is actually covering, and honor removal requests per
// CONTRIBUTING.md. If we cannot get an image, the card falls back to a monogram
// rather than showing a gap.
//
// Rate limits: the service throttles hard above roughly thirty requests in a
// burst and keeps returning 429 for a while afterwards. There is backoff and
// pacing below, but a large batch will still leave some handles unfetched. That
// is fine -- the card falls back to a monogram -- so re-run it later rather than
// hammering it.
//
// Usage:
//   node ops/social/fetch-avatars.mjs                 # every handle in every run
//   node ops/social/fetch-avatars.mjs <handle> [...]  # specific handles

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, "..", "..");
const OUT = path.join(REPO, "site", "public", "avatars");

function handlesFromRuns() {
  const runs = path.join(REPO, "runs");
  const found = new Set();
  if (!existsSync(runs)) return found;
  for (const run of readdirSync(runs)) {
    const dir = path.join(runs, run, "social-cards");
    if (!existsSync(dir)) continue;
    for (const file of readdirSync(dir).filter((f) => /\.ya?ml$/.test(f))) {
      const text = readFileSync(path.join(dir, file), "utf8");
      // Deliberately a regex rather than a YAML dependency: this script runs
      // outside the site build and should have no install step of its own.
      for (const m of text.matchAll(/authors:\s*\[?\s*["']?@?([A-Za-z0-9_]{1,15})/g)) {
        found.add(m[1]);
      }
    }
  }
  return found;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchAvatar(handle, attempt = 0) {
  const url = `https://unavatar.io/x/${encodeURIComponent(handle)}?fallback=false`;
  const res = await fetch(url, { redirect: "follow" });
  // The service throttles a burst of thirty. Back off and try again rather than
  // leaving a real person as a monogram because we asked too fast.
  if (res.status === 429 && attempt < 4) {
    await sleep(2000 * 2 ** attempt);
    return fetchAvatar(handle, attempt + 1);
  }
  if (!res.ok) return { ok: false, reason: `HTTP ${res.status}` };
  const type = res.headers.get("content-type") ?? "";
  if (!type.startsWith("image/")) return { ok: false, reason: `not an image (${type})` };
  const buf = Buffer.from(await res.arrayBuffer());
  // A tiny response is usually a generic placeholder rather than a real
  // portrait. Better to fall back to the monogram than to publish a stranger's
  // default egg as if it were them.
  if (buf.length < 2000) return { ok: false, reason: `suspiciously small (${buf.length}B)` };
  // A profile picture is square. The service's own failure mode is X's
  // 1202x634 "see what's happening" promo card, which once shipped as a
  // person's face at 846KB; reject anything that is not square-ish.
  const dims = imageDims(buf);
  if (dims && Math.abs(dims.width - dims.height) > Math.max(dims.width, dims.height) * 0.1) {
    return { ok: false, reason: `not square (${dims.width}x${dims.height}, likely a placeholder card)` };
  }
  return { ok: true, buf, ext: type.includes("png") ? "png" : "jpg", width: dims?.width };
}

// Header-only dimension probe so this script keeps its no-install rule.
function imageDims(buf) {
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  if (buf.length > 4 && buf.readUInt16BE(0) === 0xffd8) {
    let off = 2;
    while (off + 9 < buf.length) {
      if (buf[off] !== 0xff) break;
      const marker = buf[off + 1];
      const size = buf.readUInt16BE(off + 2);
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return { height: buf.readUInt16BE(off + 5), width: buf.readUInt16BE(off + 7) };
      }
      off += 2 + size;
    }
  }
  return undefined;
}

// The largest slot any avatar renders in is 56px; store at 2x that. The
// originals arrive at 400x400 (25x the bytes the page needs).
function shrinkInPlace(file, width) {
  if (!width || width <= 112) return;
  try {
    execFileSync("sips", ["-Z", "112", file], { stdio: "ignore" });
  } catch {
    // sips is macOS-only; elsewhere the full-size original stays and the
    // resize happens on the next macOS run.
  }
}

async function main() {
  const args = process.argv.slice(2).map((h) => h.replace(/^@/, ""));
  const handles = args.length ? new Set(args) : handlesFromRuns();
  if (handles.size === 0) {
    console.log("no handles found in runs/*/social-cards/");
    return;
  }
  mkdirSync(OUT, { recursive: true });
  console.log(`fetching ${handles.size} avatar(s) into site/public/avatars/\n`);

  let saved = 0;
  for (const handle of [...handles].sort()) {
    try {
      const result = await fetchAvatar(handle);
      if (!result.ok) {
        console.log(`  skip  @${handle} -- ${result.reason} (card will use a monogram)`);
        continue;
      }
      const file = path.join(OUT, `${handle.toLowerCase()}.${result.ext}`);
      writeFileSync(file, result.buf);
      shrinkInPlace(file, result.width);
      console.log(`  ok    @${handle} -> avatars/${path.basename(file)} (${result.buf.length}B)`);
      saved += 1;
      await sleep(700);
    } catch (error) {
      console.log(`  skip  @${handle} -- ${error.message} (card will use a monogram)`);
    }
  }
  console.log(`\n${saved} saved. Commit them: the point is that they stop depending on X.`);
}

main().catch((error) => {
  console.error(`fetch-avatars failed: ${error.message}`);
  process.exit(1);
});
