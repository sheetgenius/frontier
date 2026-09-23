# JOURNAL -- 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0

Catch-up cycle opened 2026-09-22. Window 2026-08-20..2026-09-21 (parent: the
2026-08-17..2026-08-20 brief "The Classifier Is Off"). Twenty-one sources;
first cycle for temporal-agent-harness (added to the watchlist 2026-09-22,
commit b6a69dd). Two features published 2026-08-23 get one line each in the
digest and are not re-reported.

- 2026-09-22 scaffold; RESEARCHER-BRIEF.md written; Lane B and grok doctor run.
- 2026-09-22 Lane A: 12 researchers launched over 21 sources (read-only, one harvest file each). Lane C: banter + 8 source sweeps running in background (social/LANE-C.log).
- 2026-09-22 ~08:00Z weekly rate limit killed all 12 Lane A researchers and the Lane B reader. Only harvest/claude-code.primary.md reached disk. Lane C completed (9 sweeps, exit 0).
- 2026-09-23 resumed on Opus 5 after the limit reset. Live edge confirmed at b6a69dd. Relaunching 11 researchers + Lane B reader.
- 2026-09-23 verified Plugin4Shell: AIR post 2026-09-17; CC fix 2.1.179 changelog silent; Codex rust-v0.146.0 (2026-07-29) lists #34644; gemini-cli v0.60.0 github.ts:72 still git.checkout('FETCH_HEAD'). GHSA-jj69 (Gemini CVE-2026-12537) published 2026-06-24 fixed 0.39.1, cvss 7.8, pre-window. Hermes CVE-2026-82021 published 08-28, fixed v2026.7.20.
- 2026-09-23 coordinator verified temporal 0.4.0: web/cli.py:121 --host default 0.0.0.0; app.py routes GET /api/sessions, POST /api/approve, /api/callback-result, /api/operator-commands with no auth/middleware; slash_commands.py:256 skip -> dangerously_skip_all.
- 2026-09-23 findings generated for 14 sources (fromharvest.mjs + hand specs). Manifold GitSpawn verified (published 2026-09-01; CC ultrareview path unpatched at 2.1.252 retest; Hermes 0.21.0, Grok Build 1.0.13 unpatched). HarnessTax verified at arena.ai (2026-09-16).
- 2026-09-23 gates green in foreground (build 0, integrity 0, links 0; dist 42M / 2163 files). Committing digest, wire, 19 profiles, run artifacts.
