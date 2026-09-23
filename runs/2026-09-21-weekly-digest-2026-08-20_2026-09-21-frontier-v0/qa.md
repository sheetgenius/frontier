# QA -- 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0

## Coverage (computed from the run tree)

- Harvest files: 21
- Findings: 176
- Signals: 13
- Cards: 22, each placed by a marker in the digest
- Capture: 38/38 blocks, 0 unavailable
- Lane B: 15/15 feeds, 133 items; 22 pieces read, 2 unreachable (OpenAI 403)
- Lane C: 9 raw sweep files, each with verify/<lane>.crosscheck.md

## Outage

The first Lane A launch (2026-09-22) died on a weekly rate limit after about fifteen minutes; only harvest/claude-code.primary.md reached disk. Relaunched 2026-09-23. Researchers that failed mid-read re-did their reads from scratch.

## Receipts re-checked by the coordinator

- Codex #42874 (0083d9e3) ancestor of rust-v0.153.4, diverged from 0.153.3; models.json at 0.153.3 gpt-6-astra priority 1 vis hide, at 0.153.4 vis list.
- Codex rust-v0.154.0 body: "The deprecated codex mcp-server entry point is no longer available. (#42993)".
- OpenClaw ab5611f0 vs v2026.8.1 behind 0; vs v2026.7.35 diverged ahead 14760; npm dist-tags extended-stable 2026.7.35, latest 2026.9.5.
- OpenHands #17462 (3b29fd61) in v1.20.0 not v1.19.0.
- Hermes f6234d00 in v2026.9.7 not v2026.8.31; v2026.9.7 published 2026-09-07T22:17:01Z.
- Homebrew cask commits 7506a05707 (2026-08-28T03:42:47Z, 2.1.236) and 67ec5aa16a (2026-09-15T21:44:20Z, 2.1.267).
- Omnigent #6429 (3f0d9771) in v0.13.0 not v0.12.0; #7457 (4a406d5b) in v0.14.0; three advisories 2026-09-16.
- eve #3172 (3bbf8e5c) and #3203 (cf1510f7) in eve@0.52.5 not 0.52.4; 0.52.5 published 2026-09-10.
- OMP types.ts L508-L520 at v18.2.8 text confirmed; approval-mode.md line 22 yolo default.
- Temporal 0.4.0: cli.py L121, app.py routes, slash_commands.py L256.
- Gemini CLI v0.60.0 github.ts L72 git.checkout('FETCH_HEAD').
- Claude Code CHANGELOG 2.1.179 at 8187baaaafb3: nine lines, no SHA-verification line.

## Dates

Year confirmed 2026 on every in-window event. Events on or after 2026-09-22 (Codex 0.156.0, OpenHands v1.21.0, eve 0.64.0, Omnigent v0.15.0, Temporal #142) are named as out of window where mentioned.
