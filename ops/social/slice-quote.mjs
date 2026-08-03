#!/usr/bin/env node
// slice-quote.mjs -- cut a quotable fragment OUT of a verified post, never type one.
//
// Six hand-typed fragments have failed this repo's build: a swapped colon, a
// curly apostrophe, a dropped line break, a double space, a span crossing three
// paragraphs, and a numbered list split across lines. Every one of them would
// have shipped as a subtly wrong quotation in a real person's mouth. So the
// fragment is never retyped -- it is sliced out of the stored `verbatim` by
// anchors, and the slice is asserted before it is allowed out.
//
// check-integrity.mjs enforces the same invariant at build time: every `quoted`
// and `inline` must be a contiguous whitespace-normalised run of its card's
// `verbatim`. This tool exists so that invariant holds by construction rather
// than by luck.
//
// Usage:
//   node ops/social/slice-quote.mjs <cards.yml> <card-id> --from "<start>" --to "<end>"
//   node ops/social/slice-quote.mjs <cards.yml> <card-id> --show
//
//   --from / --to are anchors, not the quotation. Each must appear exactly once
//   in the verbatim. The slice runs from the start of --from to the end of --to.
//   --show prints the verbatim with character offsets so anchors can be chosen.
//
// Exit codes: 0 ok, 1 refused (ambiguous anchor, not found, or multi-line slice).

import fs from "node:fs";

const [, , file, cardId, ...rest] = process.argv;
if (!file || !cardId) {
  console.error("usage: slice-quote.mjs <cards.yml> <card-id> --from \"<start>\" --to \"<end>\" | --show");
  process.exit(1);
}

const flag = (name) => {
  const i = rest.indexOf(name);
  return i === -1 ? undefined : rest[i + 1];
};

// Deliberately not a YAML parser: this reads the one block it needs and treats
// everything else as opaque, so it cannot reformat a file it does not own.
const text = fs.readFileSync(file, "utf8");
const idRe = new RegExp(`^\\s*-\\s+id:\\s*${cardId}\\s*$`, "m");
const idMatch = text.match(idRe);
if (!idMatch) {
  console.error(`refused: no card with id '${cardId}' in ${file}`);
  process.exit(1);
}

// The card runs to the next top-level list item at the same indent.
const start = idMatch.index;
const after = text.slice(start + idMatch[0].length);
const nextItem = after.search(/\n\s*-\s+id:\s/);
const card = nextItem === -1 ? after : after.slice(0, nextItem);

// verbatim is a block scalar: `verbatim: |` (or |-, |2, >) followed by an
// indented body. Take the indent from the first body line.
const vm = card.match(/\n(\s*)verbatim:\s*\|[-+0-9]*\s*\n/);
if (!vm) {
  console.error(`refused: card '${cardId}' has no block-scalar 'verbatim:' field`);
  process.exit(1);
}
const bodyStart = vm.index + vm[0].length;
const lines = card.slice(bodyStart).split("\n");
const indent = (lines[0].match(/^(\s*)/) || ["", ""])[1].length;
const body = [];
for (const line of lines) {
  if (line.trim() === "") { body.push(""); continue; }
  const lead = (line.match(/^(\s*)/) || ["", ""])[1].length;
  if (lead < indent) break;
  body.push(line.slice(indent));
}
while (body.length && body[body.length - 1] === "") body.pop();
const verbatim = body.join("\n");

if (rest.includes("--show")) {
  console.log(`card: ${cardId}`);
  console.log(`verbatim (${verbatim.length} chars, ${body.length} lines):`);
  console.log("-".repeat(60));
  body.forEach((l, i) => console.log(`${String(i).padStart(3)} | ${l}`));
  console.log("-".repeat(60));
  process.exit(0);
}

const from = flag("--from");
const to = flag("--to");
if (from === undefined || to === undefined) {
  console.error("refused: need --from and --to anchors (or --show)");
  process.exit(1);
}

const occurrences = (hay, needle) => {
  let n = 0, i = 0;
  for (;;) { const j = hay.indexOf(needle, i); if (j === -1) return n; n++; i = j + 1; }
};

for (const [label, anchor] of [["--from", from], ["--to", to]]) {
  const n = occurrences(verbatim, anchor);
  if (n === 0) { console.error(`refused: ${label} anchor not found in verbatim: ${JSON.stringify(anchor)}`); process.exit(1); }
  if (n > 1)  { console.error(`refused: ${label} anchor appears ${n} times; make it unique: ${JSON.stringify(anchor)}`); process.exit(1); }
}

const a = verbatim.indexOf(from);
const b = verbatim.indexOf(to);
if (b < a) { console.error("refused: --to anchor precedes --from anchor"); process.exit(1); }
const fragment = verbatim.slice(a, b + to.length);

// The house rule: a quoted fragment is a single line. A slice spanning a line
// break is the failure that shipped a three-paragraph "quotation" once.
if (fragment.includes("\n")) {
  console.error("refused: slice spans a line break. Quote a single line, or quote the whole post as a featured card.");
  console.error(`  slice was: ${JSON.stringify(fragment.slice(0, 120))}...`);
  process.exit(1);
}
if (!verbatim.includes(fragment)) { console.error("refused: slice is not a contiguous run of verbatim"); process.exit(1); }

process.stdout.write(fragment + "\n");
