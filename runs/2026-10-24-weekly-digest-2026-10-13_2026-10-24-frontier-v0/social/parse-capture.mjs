import assert from "node:assert/strict";
import fs from "node:fs";

const files = ["capture-a.raw.md", "capture-b.raw.md"];
const captures = [];
const seen = new Set();
const unavailable = [];

for (const file of files) {
  const raw = fs.readFileSync(new URL(file, import.meta.url), "utf8");
  const blocks = [...raw.matchAll(/===CAPTURE===([\s\S]*?)===END===/g)];
  assert.equal(blocks.length, raw.split("===CAPTURE===").length - 1,
    `${file}: incomplete capture block`);
  assert.ok(blocks.length, `${file}: no capture blocks`);
  for (const [, block] of blocks) {
    const body = block.match(/(?:^|\n)VERBATIM_BEGIN\r?\n([\s\S]*?)\r?\nVERBATIM_END(?=\r?\n|$)/);
    const header = body ? block.slice(0, body.index) : block;
    const field = (key) => {
      const matches = [...header.matchAll(new RegExp(`^${key}: ([^\\r\\n]*)`, "gm"))];
      assert.equal(matches.length, 1, `${file}: missing or repeated ${key}`);
      return matches[0][1];
    };
    const url = field("url");
    assert.match(url, /^https:\/\/x\.com\/[^/]+\/status\/\d+$/);
    assert.ok(!seen.has(url), `duplicate capture: ${url}`);
    seen.add(url);
    if (/^\s*UNAVAILABLE\b/m.test(header)) {
      unavailable.push(url);
      continue;
    }
    assert.ok(body, `${url}: no complete verbatim block`);
    const handle = field("handle");
    const display_name = field("display_name");
    const date = field("posted_at");
    assert.match(handle, /^@[A-Za-z0-9_]+$/);
    assert.ok(display_name.length, `${url}: empty captured name`);
    assert.match(date, /^2026-10-(?:1[4-9]|2[0-4])$/);
    assert.ok(body[1].length, `${url}: empty capture`);
    captures.push({ url, handle, display_name, date, text: body[1], unavailable: false });
  }
}

// Escape Unicode in the serialization only. Decoding returns every original
// character, including punctuation, trailing spaces, line breaks and t.co URLs.
const json = JSON.stringify(captures, null, 2).replace(/[\u007f-\uffff]/g,
  (character) => `\\u${character.charCodeAt(0).toString(16).padStart(4, "0")}`) + "\n";
assert.deepEqual(JSON.parse(json), captures);
assert.ok(!/[^\x00-\x7f]/.test(json));
fs.writeFileSync(new URL("capture.json", import.meta.url), json);
console.log(`Parsed ${captures.length} available posts from ${files.length} files; dropped ${unavailable.length} UNAVAILABLE posts.`);
for (const url of unavailable) console.log(`Dropped UNAVAILABLE: ${url}`);
