---
window: 2026-06-23..2026-06-24
run_dir: runs/2026-06-24-weekly-digest-2026-06-23_2026-06-24-frontier-v0
harvested_by: opus-4.8-harvester
harvested_at: 2026-06-24
note: >
  Thin-window harvest across the 10 prior watchlist sources for the days since
  "Protected on Paper" closed (2026-06-23). ~6/10 sources had nothing material.
  Channel resolved by tag ancestry. Everything in-window is dated 2026-06-23; no
  2026-06-24 entries appeared on any surface.
---

# Watchlist -- Harvest 2026-06-23..2026-06-24 (thin window)

## Findings

### 2026-06-24-openhands-dependency-cve-batch-main-unreleased
- source: openhands
- what: a batch of dependency CVE/GHSA fixes landed on `main` on 2026-06-23 --
  CVE-2026-44727 (jupyter-server -> 2.20.0), CVE-2026-49458 (dompurify -> 3.4.6),
  GHSA-6v7p-g79w-8964 (msgpack -> 1.2.1), CVE-2026-45409 (idna -> 3.15),
  GHSA-gj48-438w-jh9v (bleach -> 6.4.0) -- plus a sub-agent visualizer feature. NO
  new tag cut; the only release remains 1.8.0 (2026-06-10). Operators on 1.8.0 have
  none of these; operators on a build from main do.
- evidence (per-CVE merge commits/PRs, all 2026-06-23, authors mamoodi/openhands-agent):
  - CVE-2026-44727 jupyter-server 2.20.0 -- PR #14943 / SHA dcb840b -- https://github.com/OpenHands/OpenHands/pull/14943
  - CVE-2026-49458 dompurify 3.4.6 -- PR #14872 / SHA 0b7d2d4 -- https://github.com/OpenHands/OpenHands/pull/14872
  - GHSA-6v7p-g79w-8964 msgpack 1.2.1 -- PR #14944 / SHA d9cefcc -- https://github.com/OpenHands/OpenHands/pull/14944
  - CVE-2026-45409 idna 3.15 -- PR #14946 / SHA f08e219 -- https://github.com/OpenHands/OpenHands/pull/14946
  - GHSA-gj48-438w-jh9v bleach 6.4.0 -- PR #14945 / SHA 129584f -- https://github.com/OpenHands/OpenHands/pull/14945
- channel: main-unreleased (each PR merged to main 2026-06-23; no tag past 1.8.0). security_impact: medium (security_advisory pattern).

### 2026-06-24-codex-0.143.0-alpha-train
- source: codex
- what: five `0.143.0-alpha.*` tags (alpha.3 -> alpha.7) cut through 2026-06-23;
  the newest stable remains 0.142.0 (2026-06-22). Nothing in the alpha train has
  shipped to the stable channel.
- evidence: https://github.com/openai/codex/releases (release_note).
- channel: preview-or-beta (alpha).

### 2026-06-24-flue-react-beta-and-observability-shipped-correction
- source: flue
- what: `@flue/react 1.0.0-beta.4` (2026-06-23) is a scoped beta fixing
  `useFlueAgent()` durable-history atomicity and live observation. CORRECTION to
  last digest ("Protected on Paper"): the private-by-default run-observability
  rewrite + `flue logs` removal it described as staged "in an Unreleased changelog
  section" actually shipped in `0.11.0` (2026-06-09). The prior framing was correct
  at its window close but is now superseded.
- evidence: https://github.com/withastro/flue/blob/main/CHANGELOG.md (release_note).
- channel: 0.11.0 tagged-release (observability); @flue/react beta = preview-or-beta.
- note: Flue repo resolves under github.com/withastro/flue -- confirm vs source contract.

### 2026-06-24-agent-zero-ready-branch-still-untagged
- source: agent-zero
- what: ~19 commits landed on the non-default `ready` staging branch on 2026-06-23
  (mobile/canvas UI, "Persist loaded skills through compaction", "Add project
  extension data hooks", Gemini-OAuth-as-Google-Cloud). Still NO tag past v1.20
  (2026-06-04). The staging backlog flagged last window keeps growing without a
  release.
- evidence: https://github.com/agent0ai/agent-zero/commits/ready (commit precision).
- channel: main-unreleased (staging branch).

## No material in-window change (verified, last seen)

- claude-code: 2.1.186 (2026-06-22) -- nothing 06-23/24.
- gemini-cli: v0.47.0 (2026-06-18); one 06-23 main commit `fix(ci)` (d3ef6ac), infra only.
- hermes-agent: v2026.6.19 (2026-06-19); 06-23 main = desktop tooltip, CI, a
  computer-use Windows-UIPI doc. No new security wave, no new tag. Last window's
  untagged MCP-persistence security work did NOT tag in-window.
- pi-coding-agent: v0.79.10 (2026-06-22) -- unchanged.
- openclaw: stable v2026.6.9 (2026-06-21), beta v2026.6.10-beta.2 (2026-06-22) -- nothing 06-23/24.
- paperclip: v2026.618.0 (2026-06-18) -- no new tag; the master-only controls still untagged.
