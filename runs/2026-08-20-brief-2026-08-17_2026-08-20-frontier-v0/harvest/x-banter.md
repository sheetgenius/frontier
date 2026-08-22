---
schema_version: bitter.frontier_harvest.v0
provider: x-banter
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
lane: Lane C native X discovery only
---

# Harvest -- X banter (discovery only)

Nothing here is a quotation. Gists are in the coordinator's own words. Posts that cannot produce a real x.com/status URL were dropped. Capture is a later pass.

Dated queries used `since:2026-08-17 until:2026-08-21`. Until is exclusive on X, so 2026-08-20 is included.

## Posts worth a later capture (priority order)

1. https://x.com/mitsuhiko/status/2090368103972479324 -- 2026-08-20 -- kind: voice -- Pi maintainer says the new harness work is on the `dev` branch, not on main. Cuts against reading default-branch commits as the product.
2. https://x.com/acsmif/status/2090470326824280234 -- 2026-08-20 -- kind: claim -- operator says Codex auto-review vanished from analytics; follow-up https://x.com/acsmif/status/2090477764109533376 guesses Guardian V2 is the sink and was never displayed. Needs primary crosscheck.
3. https://x.com/OpenAIDevs/status/2090230646497251387 -- 2026-08-20 -- kind: claim -- official: apps control interface, context, tools, and approvals; the Codex harness handles the loop. Link to developers.openai.com/blog/codex-as-a-platform.
4. https://x.com/antigravity/status/2090497270370230625 -- 2026-08-20 -- kind: claim -- official: Antigravity IDE extensions for VS Code, Visual Studio, Zed, JetBrains.
5. https://x.com/ClaudeDevs/status/2089471692762673408 -- 2026-08-17 -- kind: claim -- official: /design skill research preview. Overlap day; keep if parent missed it.
6. https://x.com/ClaudeDevs/status/2089798442306711646 -- 2026-08-18 -- kind: claim -- official: 50% weekly Claude Code limit increase extended through August 31.
7. https://x.com/simonw/status/2090299859693695283 -- 2026-08-20 -- kind: voice -- Claude Code for web wrote a GitHub Actions workflow and pushed it without asking, after spotting no /dev/kvm.
8. https://x.com/mitsuhiko/status/2090174553028694232 -- 2026-08-19 -- kind: voice -- Pi with the read tool removed; the model built an OCR app instead.
9. https://x.com/cnzhihao/status/2089718723607445739 -- 2026-08-18 -- kind: voice -- Chinese: only DeepSeek Harness can pass IT audit; Codex and Claude Code are black boxes. Counter-consensus; social only.
10. https://x.com/jungianboi/status/2090584150524756396 -- 2026-08-20 -- kind: voice -- prefers DeepSeek Harness over Codex right now; lists UX and computer-use as Codex still better.
11. https://x.com/KEisuke62350514/status/2090578350628884505 -- 2026-08-20 -- kind: claim -- looking at Pi's develop/dev branch, it is moving toward DeepSeek-style everything-is-a-plugin. Needs primary on the branch.
12. https://x.com/_avichawla/status/2090368200693440841 -- 2026-08-20 -- kind: voice -- OpenClaw vs Hermes vs Grok Bot comparison (hosting, isolation, skills).
13. https://x.com/mlejva/status/2090445513112068423 -- 2026-08-20 -- kind: claim -- OpenClaw Crabbox + E2B sandbox per parallel coding agent.
14. https://x.com/asura25ai/status/2090575269589287290 -- 2026-08-20 -- kind: voice -- Japanese: Claude Code auto mode is now the default everyday path.
15. https://x.com/__su888/status/2090560759172595959 -- 2026-08-20 -- kind: claim -- Adways engineering blog: Claude Code fleet via managed settings / MDM. Primary is the blog, not the post.
16. https://x.com/CodexReleases/status/2090546926156431744 -- 2026-08-20 -- kind: claim -- 0.149.0 highlights. Crosscheck against the GitHub release.
17. https://x.com/rsensui/status/2090580021933125827 -- 2026-08-20 -- kind: claim -- Japanese: 0.149.0 adds `codex agents` and `codex queue`.
18. https://x.com/LiMzba/status/2090359957929820301 -- 2026-08-20 -- kind: voice -- after upgrading to 0.148.0, Codex refuses metal kernel work.

## Dropped / identity traps

- "agent zero" hits were a vtuber, a comics handle, and a sports nickname. None were agent0ai/agent-zero.
- "paperclip" hits were Operation Paperclip history. None were paperclipai/paperclip.
- "flue" matched a COVID-origin reply, not withastro/flue.
- NousResearch hiring thread is marketing with no argument.

## COVERAGE_NOTE

Searched: watchlist OR query Latest and Top; semantic search on approval/plugin/sandbox; per-source Latest for DeepSeek Harness, Claude Code permissions, OpenClaw/OMP/Pi, Antigravity/Gemini/Hermes/paperclip/agent-zero/heypi/flue/flywheel/eve/omnigent; maintainer accounts (mitsuhiko, badlogicgames, steipete, simonw, teknium1 via from:). Thread-fetched mitsuhiko 2090368103972479324, acsmif 2090477764109533376, OpenAIDevs 2090230646497251387.

Could not reach: full pagination of X; heypi, flue, agent-flywheel, omnigent, paperclipai, agent0ai had no in-window product conversation in the queries that returned. omp conversation was thin (stack-share, not design). OpenClaw ClawHavoc supply-chain posts exist as aggregators; no primary Trellix URL captured here.

Thin projects named: heypi, flue, agent-flywheel, paperclip (product), agent-zero (product), omnigent, omp (design talk).

Second pass (2026-08-21, native X, thin sources + counter-consensus):

- heypi, flue, omnigent, paperclipai product, agent0ai product, flywheel: still no in-window product conversation in keyword Latest. Thin, recorded.
- Counter-consensus on Codex stable: quality complaints after 0.148.0 exist (@jkudish 2090014353265504346 "getting worse", @Parental_OnX 2090171123166253451 fighting the tool). Not carded: they do not name a channel or a classifier, and they do not refute "in the tag, off."
- @acsmif 2090533415040983080 (thread, 2026-08-20): "they rolled back a lot of changes in the last 5 days (or routed reviews to guardian-v2, which is invisible)." Complements the already-carded analytics post. Not a second card for the same person (no pile-on).
- @jungianboi 2090584150524756396 still prefers DeepSeek Harness over Codex; already listed. Counter to "the drought broke so upgrade Codex."
- @KEisuke62350514 2090578350628884505 (Japanese): looking at Pi's develop/dev branch, it is leaning toward DeepSeek-style everything-is-a-plugin. Voice. Product fact waits on the `dev` diff; not quoted until captured.
- OpenClaw "next release" talk (@oneclickclawio 2090530625660809628, @shariqriazzz 2090514453683183922) is hosting-vendor / podcast summary of a call, not a tag. Supports zero-releases; not a substitute for ancestry. Dropped as a card because the primary is still "no GitHub release in window."
- Identity traps unchanged.

ops/grok/x-sweep.sh not run; native tools used instead.
