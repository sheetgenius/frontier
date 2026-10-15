import assert from "node:assert/strict";
import fs from "node:fs";

// Only the independent capture blocks supply post text and author metadata.
// Strip the framing newlines, never whitespace inside the captured body.
const files = ["capture-a.raw.md", "capture-b.raw.md"];
const captures = [];
const seen = new Set();
let unavailable = 0;

for (const file of files) {
  const raw = fs.readFileSync(new URL(file, import.meta.url), "utf8");
  const starts = raw.match(/===CAPTURE===/g) ?? [];
  const blocks = [...raw.matchAll(/===CAPTURE===\r?\n([\s\S]*?)\r?\n===END===/g)];
  assert.equal(blocks.length, starts.length, `${file}: incomplete capture block`);
  assert.ok(blocks.length, `${file}: no capture blocks`);
  for (const [, block] of blocks) {
    const body = block.match(/(?:^|\r?\n)VERBATIM_BEGIN\r?\n([\s\S]*?)\r?\nVERBATIM_END(?:\r?\n|$)/);
    const header = body ? block.slice(0, body.index) : block;
    const field = (name) => {
      const matches = [...header.matchAll(new RegExp(`^${name}: ([^\\r\\n]*)$`, "gm"))];
      assert.equal(matches.length, 1, `${file}: expected one ${name}`);
      return matches[0][1];
    };
    const url = field("url");
    assert.match(url, /^https:\/\/x\.com\/[^/]+\/status\/\d+$/);
    assert.ok(!seen.has(url), `duplicate capture: ${url}`);
    seen.add(url);
    // An unavailable capture has no publishable text, even if other metadata exists.
    if (/\bUNAVAILABLE\b/.test(header) || (body && /^UNAVAILABLE(?:\b|$)/.test(body[1]))) {
      unavailable++;
      continue;
    }
    assert.ok(body, `${url}: missing verbatim delimiters`);
    const handle = field("handle");
    const display_name = field("display_name");
    const date = field("posted_at");
    assert.equal(handle.toLowerCase(), `@${new URL(url).pathname.split("/")[1]}`.toLowerCase());
    assert.match(date, /^2026-\d{2}-\d{2}$/);
    assert.ok(date >= "2026-09-21" && date <= "2026-10-13", `${url}: outside window`);
    const snowflakeDate = new Date(Number((BigInt(url.split("/").at(-1)) >> 22n) + 1288834974657n)).toISOString().slice(0, 10);
    assert.equal(date, snowflakeDate, `${url}: date mismatch`);
    assert.ok(display_name.length && body[1].length, `${url}: empty captured data`);
    captures.push({ url, handle, display_name, date, text: body[1], unavailable: false });
  }
}

// JSON escapes preserve the exact decoded text, including non-English posts,
// while keeping the serialized files in the house's ASCII punctuation style.
const json = JSON.stringify(captures, null, 2).replace(/[\u007f-\uffff]/g,
  (character) => `\\u${character.charCodeAt(0).toString(16).padStart(4, "0")}`);
assert.deepEqual(JSON.parse(json), captures);
fs.writeFileSync(new URL("capture.json", import.meta.url), `${json}\n`);
console.log(`Parsed ${captures.length} available captures; dropped ${unavailable} unavailable.`);
