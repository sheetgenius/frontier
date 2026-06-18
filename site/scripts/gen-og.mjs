#!/usr/bin/env node
// Emit per-page Open Graph PNGs into dist/og/.
//
// Runs after `astro build` (npm postbuild hook). Reads the same digest/profile/
// signal data the site renders and writes one 1200x630 branded card per page.
// Output paths mirror page URLs (see scripts/og-cards.mjs).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { cardEntries, renderCard, OG_DIMENSIONS } from "./og-cards.mjs";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const SITE_DIR = path.resolve(SCRIPT_DIR, "..");
const DIST_DIR = path.join(SITE_DIR, "dist");
const OG_DIR = path.join(DIST_DIR, "og");

async function main() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error("[og] dist/ not found — run `astro build` first.");
    process.exit(1);
  }

  const entries = cardEntries();
  const start = Date.now();
  let written = 0;

  for (const entry of entries) {
    const outPath = path.join(OG_DIR, `${entry.ogPath}.png`);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    const png = await renderCard(entry);
    fs.writeFileSync(outPath, png);
    written += 1;
  }

  const secs = ((Date.now() - start) / 1000).toFixed(1);
  console.log(
    `[og] wrote ${written} cards (${OG_DIMENSIONS.width}x${OG_DIMENSIONS.height}) to dist/og/ in ${secs}s`,
  );
}

main().catch((err) => {
  console.error("[og] generation failed:", err);
  process.exit(1);
});
