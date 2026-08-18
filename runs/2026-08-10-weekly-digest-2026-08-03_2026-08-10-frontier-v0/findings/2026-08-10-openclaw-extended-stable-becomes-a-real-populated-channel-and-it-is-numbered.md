---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-openclaw-extended-stable-becomes-a-real-populated-channel-and-it-is-numbered
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.6.33
    precision: github_release
---
# 2026-08-10-openclaw-extended-stable-becomes-a-real-populated-channel-and-it-is-numbered

extended-stable becomes a real, populated channel  --  and it is numbered below stable.

OpenClaw shipped the first two releases of a fourth update channel, `extended-stable`, on 2026-08-08. v2026.6.33 is a 169-PR audited roll-up of the v2026.6.11..db7af38 history; v2026.6.34 is a 25-PR maintenance follow-up whose notes say explicitly it 'carries targeted security and reliability repairs without adding new release-line features.' The documented semantics (pinned source at dcdbd7aa, docs/install/development-channels.md) are: npm dist-tag `extended-stable`, package-only, foreground-only installation, read-only update hints that never apply automatically, and fail-closed resolution with no fallback to latest/beta/dev.

Channel: tagged-release. Ancestry: gh api repos/openclaw/openclaw/releases shows v2026.6.33 (published 2026-08-08T07:16:21Z) and v2026.6.34 (2026-08-08T07:22:14Z), both prerelease=false, draft=false. registry.npmjs.org/openclaw dist-tags: {"latest":"2026.7.1-2","extended-stable":"2026.6.34","beta":"2026.8.1-beta.2","alpha":"2026.5.19-alpha.1"}. compare/v2026.7.1-2...v2026.6.34 -> status=diverged, ahead_by=332, behind_by=3377: a separate maintenance line, neither ancestor nor descendant of stable. compare/v2026.6.34...8506e32748442181671375017d5c9d8fc30435e0 (PR #119942 'release: extended-stable 2026.6.35') -> status=ahead, ahead_by=1, so the line is live and 2026.6.35 is staged but untagged.

Operator consequence: Adapt your version checks before you adopt it. An extended-stable host reports 2026.6.34 while a stable host reports 2026.7.1-2  --  the newer-published build carries the lower number, so any 'are we current?' logic that compares version strings will read your patched fleet as stale. Also note what the channel buys you: it is 3,377 commits behind stable and, per the ancestry above, it does not carry the workspace-boundary fix either. Choose it for change-rate control, not for security currency.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.6.33
