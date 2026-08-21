# Lane B -- writing feeds

Ran: `node ops/wire/harvest-feeds.mjs --since 2026-08-17 --out runs/2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0`

Result: 15/15 feeds with a `feed` URL returned HTTP 200. 58 items stored in `writing.json`.
pillar-security has no feed (`html_watch` only); not a failure.

Window filter: editorial window is 2026-08-17 to 2026-08-20. The harvester's `--since` also picked up 2026-08-21 items because the machine date is 2026-08-21. Those 08-21 items stay in the archive and do not enter the 2026-08-20 wire or the brief.

No failing feed.

## In-window items that shape search (not receipts)

- 2026-08-20 pragmatic-engineer: AI migrations (Asana testing-framework story)
- 2026-08-20 latent-space: Matt Pocock /wayfinder skill
- 2026-08-20 openai-news: Stampli / Codex; AI Futures blog
- 2026-08-19 simonw: smolmachines sandbox; quoting Jeremy Morrell on extensible software cores
- 2026-08-18 openai-news: Asana Codex "5 years in 2 weeks"
- 2026-08-17 embrace-the-red: recovering encrypted LLM reasoning traces
- 2026-08-17 sshh: How I use AI in 2026

None of these is a watchlist product change. They may seed wire items after the underlying piece is fetched.

## Counts by date (from writing.json, computed)

See `writing.json`. Do not treat this file as a quotation source.
