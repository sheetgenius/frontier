---
provider: agent-zero
label: Agent Zero
owner: agent0ai
repo: agent0ai/agent-zero
window: 2026-06-16..2026-06-23
run: 2026-06-23-weekly-digest-2026-06-16_2026-06-23-frontier-v0
harvester: opus-4.8-1m
harvested_at: 2026-06-23
verdict: nothing_material_in_window
total_findings: 0
channel_counts:
  tagged-release: 0
  main-unreleased: 0
  preview-or-beta: 0
candidate_signals: 0
---

# Agent Zero — Harvest 2026-06-16 .. 2026-06-23

## Result

**Nothing material in window.** No new release, no commit merged to `main`,
and no merged PR has a merge/publish timestamp inside 2026-06-16 .. 2026-06-23.
This is an honest empty/low-movement window — a valid and expected outcome for
this provider per its watch posture.

Findings: **0.** Candidate signals: **0.**

## Surface checks (primary only)

- **Releases** — `gh api repos/agent0ai/agent-zero/releases`. Latest tag is
  **v1.20**, ISO `published_at` **2026-06-04T16:32:20Z** — *before* the window
  opens (2026-06-16). No tag past v1.20 exists; `repos/.../tags` head is
  `v1.20, v1.19, v1.18, v1.17, v1.16`. (Year verified via API `published_at`,
  not rendered HTML, per the known Agent Zero year-misrender caveat. 2026 confirmed.)
- **Commits on default branch (`main`)** —
  `gh api "repos/.../commits?since=2026-06-16T00:00:00Z&until=2026-06-23T23:59:59Z"`
  returns **length 0**. The latest `main` commit is `f9d8167a Make file browser
  paths editable` dated **2026-06-04T15:29:53Z** — the v1.20 maintenance day
  already captured in the prior (v1.20) window. No new `main` history since.
- **Merged PRs** — sorted by `mergedAt` desc, the most recent merge is
  **#1676** (Telegram integration UX/streaming) at **2026-06-11T02:11:12Z** —
  *before* the window. No PR has `mergedAt` inside the window.

## Non-accepted, in-window activity (logged for completeness, NOT findings)

Per the source contract, only tagged releases, maintainer commits to default,
merged PRs, and docs are accepted evidence. The repo *did* see open
(unmerged) PR traffic inside the window. These have **not landed on default**,
carry no ancestry to a tag, and are rejected as evidence (channel would be
`preview-or-beta` at best). Recorded only to show the window was inspected, not
to seed claims:

- PR **#1717** `fix: honour vision=false by stripping image_url blocks before
  API call` — open, updated 2026-06-22.
- PR **#1714** `Fix local model tool-call loops` — open, updated 2026-06-21.
- PR **#1709** `fix: set GIT_PAGER=cat to prevent git pager CPU spin (fixes
  #1697)` — open, created 2026-06-21. (Mildly workcell-adjacent: terminal/PTY
  hygiene in code-execution shells — same family as the v1.12 PTY-fd fix — but
  unmerged, so not a finding.)
- PR **#1712** `Fix scheduler task detail modal close flow` — open, 2026-06-19.
- PR **#1710** `feat(editor): add Open file button to canvas tab bar` — open,
  2026-06-17.
- PR **#1707** `Add OpenPaths as a cloud model provider` — open, 2026-06-16.
- PR **#1706** `Sanitize dirty JSON tool responses` — open, 2026-06-16.

If any of these merge in a later window, re-evaluate then on its merge timestamp.

## Carry-forward check

Prior window (v1.20, 2026-06-04) was a single active maintenance day:
Tailscale Remote Control CSRF + WebSocket-origin hardening, OAuth
credential-surface hygiene (hide dummy keys until connected, GitHub device-flow
polling), and an editable file browser — **no capability expansion**.

This window's carry-forward verdict against the requested watch axes:

- **New release past v1.20** — none.
- **Tunnel / isolation hardening** — none merged. (No movement on Tailscale or
  WebSocket-origin posture since v1.20.)
- **Persistence / cleanup changes** — none merged. The open Xpra-desktop
  lifecycle question (no idle cleanup / storage cap / session reset) remains
  open and unaddressed in this window.
- **Subagent or agent-created-tool changes** — none merged. (Prior per-subagent
  model-config fix #1682 was already pre-window.)

Carry-forward verdict: **quiet continuation.** The v1.20 maintenance posture
stands unchanged; no new authority, isolation, persistence, or
subagent/tool-creation surface landed on default.

## Novelty vs profile

Profile `content/profiles/agent-zero.md` (last_updated 2026-06-03) already
covers through v1.18 in prose and posture; v1.19/v1.20 are post-profile but
pre-window and belong to the prior cycle. **This window contributes no novel,
accepted-evidence claim** — nothing to add to the profile's `claims:` block.
The profile's open questions (host-action audit landing under ephemeral
capture; Xpra lifecycle/cleanup; subagent/tool proliferation contract) are
**not advanced** by any merged change in window.

## Receipts

- Latest release, in-window-negative:
  > "tag":"v1.20","published":"2026-06-04T16:32:20Z"
  https://github.com/agent0ai/agent-zero/releases/tag/v1.20

- In-window `main` commit count:
  > `gh api "repos/agent0ai/agent-zero/commits?since=2026-06-16T00:00:00Z&until=2026-06-23T23:59:59Z" -q 'length'` → `0`

- Most recent merged PR (pre-window):
  > "2026-06-11T02:11:12Z  #1676  feat: major improvements to native Telegram integration UX and streaming"
  https://github.com/agent0ai/agent-zero/pull/1676

- Representative in-window open (non-accepted) PR:
  > "Add OpenPaths as a cloud model provider … 2026-06-16T01:53:54Z  state=OPEN"
  https://github.com/agent0ai/agent-zero/pull/1707
