#!/usr/bin/env python3
"""Append cards to a copy of an x-cards.yml, verbatim taken ONLY from capture files.
Usage: add-cards.py <cards.yml copy> <spec.json> <capture.md> [<capture.md>...]
spec.json: [{"id","url","title","kind":"claim|voice","source_ids":[...],
             "from","to" (anchors for the inline slice, or omit for featured-only),
             "summary","verdict"}]
Run from the repo root (uses ops/social/slice-quote.mjs)."""
import sys, re, json, subprocess, textwrap
cards, spec, caps = sys.argv[1], sys.argv[2], sys.argv[3:]
cap = {}
for c in caps:
    for b in re.findall(r"===CAPTURE===(.*?)===END===", open(c).read(), re.S):
        g = lambda k: (re.search(rf"^{k}:\s*(.*)$", b, re.M) or [None, ""])[1].strip()
        v = re.search(r"VERBATIM_BEGIN\n(.*?)\nVERBATIM_END", b, re.S)
        if v and v.group(1).strip() != "UNAVAILABLE":
            cap[g("url")] = dict(handle=g("handle"), name=g("display_name"), date=g("posted_at"), text=v.group(1).rstrip("\n"))
def lit(s, n): return "\n".join((" " * n + l) if l else "" for l in s.split("\n"))
text = open(cards).read().rstrip("\n") + "\n"
S = json.load(open(spec))
for c in S:
    k = cap.get(c["url"])
    if not k: print("NOCAPTURE", c["id"]); continue
    if f"- id: {c['id']}\n" in text: print("EXISTS", c["id"]); continue
    block = [f"  - id: {c['id']}", f"    title: {json.dumps(c['title'])}", f"    kind: {c['kind']}",
             f"    date: {k['date']}", "    date_precision: day", "    captured_on: 2026-09-23",
             f"    source_ids: [{', '.join(c['source_ids'])}]", f"    authors: [\"{k['handle'].lstrip('@')}\"]",
             f"    display_name: {json.dumps(k['name'], ensure_ascii=False)}", "    source_urls:", f"      - {c['url']}",
             "    verbatim: |", lit(k["text"], 6)]
    if c.get("from"): block.append('    inline: "__INLINE__"')
    block += ["    summary: >", lit(textwrap.fill(c["summary"], 90), 6), "    verdict: >", lit(textwrap.fill(c["verdict"], 90), 6)]
    text += "\n" + "\n".join(block) + "\n"
open(cards, "w").write(text)
for c in S:
    if not c.get("from"): continue
    r = subprocess.run(["node", "ops/social/slice-quote.mjs", cards, c["id"], "--from", c["from"], "--to", c["to"]], capture_output=True, text=True)
    if r.returncode: print("SLICEFAIL", c["id"], r.stderr.strip()); continue
    frag = r.stdout.rstrip("\n")
    i = text.index(f"  - id: {c['id']}\n"); j = text.index('inline: "__INLINE__"', i)
    text = text[:j] + "inline: " + json.dumps(frag, ensure_ascii=False) + text[j + len('inline: "__INLINE__"'):]
    print("ok", c["id"], "|", frag[:80])
open(cards, "w").write(text)
