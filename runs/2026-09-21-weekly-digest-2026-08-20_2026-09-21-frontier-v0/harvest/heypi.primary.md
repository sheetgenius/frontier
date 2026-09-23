---
schema_version: bitter.frontier_harvest.v0
provider: heypi
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/heypi.yml
channels_present: []
window_volume: 0 material changes
lane: primary sources, researcher; identity checked against contract repo; no in-window commits, tags, npm publishes, or PR/issue activity
---

# Harvest -- heypi (primary sources)

Punctuation is ASCII. No material change in this window. Second consecutive
quiet window since the 2026-08-21 demotion to weekly; the repo has not been
pushed since 2026-07-22.

## 1. No material change: 0.3.0-beta.2 (2026-07-22) is still the tip on every channel

- **Date:** 2026-09-23 (observation; last event 2026-07-22)
- **Channel:** none in window
- **Ancestry evidence:** `gh api repos/hunvreus/heypi` -> owner hunvreus, default_branch main, pushed_at 2026-07-22T01:36:02Z, archived=false, 160 stars. `gh api repos/hunvreus/heypi/tags` tip 0.3.0-beta.2 SHA 436da22ceab0bc4e2db133e8626649b4bf76286d. `gh api repos/hunvreus/heypi/compare/0.3.0-beta.2...main` -> status=identical, ahead_by=0, behind_by=0. `gh api "repos/hunvreus/heypi/commits?since=2026-08-20T00:00:00Z&until=2026-09-22T00:00:00Z"` -> 0 commits; since 2026-09-22 -> 0 commits. `gh api repos/hunvreus/heypi/releases` -> empty. `npm view @hunvreus/heypi dist-tags` -> latest=0.3.0-beta.2 only; newest publish time 0.3.0-beta.2 2026-07-22T01:15:13Z. Issues/PRs updated since 2026-08-20: none (newest PR activity #4 and #2, closed 2026-06-11).
- **Receipt:** https://github.com/hunvreus/heypi/commit/436da22ceab0bc4e2db133e8626649b4bf76286d
- **Half:** neither | **Confidence:** high

**What changed.** Nothing on the inspectable surfaces: no commit, tag, npm
publish, release, PR, or issue in the window. The npm latest dist-tag is still a
beta.

**Operator consequence.** Ignore. Anyone running heypi is on 0.3.0-beta.2 from
2026-07-22 and should treat it as unmaintained-for-now beta software: two
months without a commit on a beta that holds chat-channel approval authority
means no fixes are arriving. Watch for the next push; any commit ends the quiet.

## Researcher lane notes

Loaded sources/heypi.yml first. Identity: hunvreus/heypi, description "Chat
agents for your team, with approvals and sandboxed tools. Slack, Discord,
Telegram, webhooks." This is Ronan Berder's heypi, not the unrelated HeyPi
product.

Docs and landing: https://heypi.dev/ (HTTP 200) and https://heypi.dev/docs/
(HTTP 200) are served from Cloudflare with no Last-Modified header and no
version string in the rendered text, so they cannot be pinned or dated. Because
the repo has not been pushed since 2026-07-22, any docs change would have had
to come from outside the repo; nothing on either page shows a version or date
to compare. No pricing surface exists: https://heypi.dev/pricing returns 404,
and the landing page shows no price figures. Marketing vs substance: no change
on either side detectable.

Carry-forward check (flue and heypi: any commits, tags, docs or pricing
changes): negative for heypi, surfaces below.

## Surfaces checked

- gh api repos/hunvreus/heypi (pushed_at 2026-07-22T01:36:02Z, not archived)
- gh api repos/hunvreus/heypi/tags (tip 0.3.0-beta.2 436da22c)
- gh api repos/hunvreus/heypi/releases (empty)
- gh api commits since 2026-08-20 until 2026-09-22 (0) and since 2026-09-22 (0)
- gh compare 0.3.0-beta.2...main (identical)
- gh api pulls state=all sorted by updated, and issues since 2026-08-20 (no in-window activity)
- npm view @hunvreus/heypi dist-tags and time (latest=0.3.0-beta.2, 2026-07-22)
- curl https://heypi.dev/ (200), https://heypi.dev/docs/ (200), https://heypi.dev/pricing (404)

## Not reached

- A dated or versioned copy of heypi.dev docs; the pages carry no version or Last-Modified, so a silent docs edit cannot be ruled out, only a repo-driven one.
