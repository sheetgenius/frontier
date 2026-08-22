---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-paperclip-acpx-thought-text-can-land-in-issue-comments
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/11801
    precision: merged_pr
---
# 2026-08-20-paperclip-acpx-thought-text-can-land-in-issue-comments

PR #11801 merge c2cfd55e (2026-08-20T22:48:35Z) makes ACPX run summaries final-output-only so heartbeat auto-comments no longer join thought-stream text into the issue comment. The PR classes the old default as that join. The fix is on window-end master 733ffbf7 and is not an ancestor of v2026.817.0, beta/v2026.818.0-beta.1 (664052f8), nightly/v2026.820.0-nightly.0 (5a1ce7ae), or last in-window canary/v2026.820.0-canary.6 (54b8bec4). Next canary is 2026-08-21, out of window.

Channel: main-unreleased for the fix; the leak is the standing behavior on every in-window installable channel. Half: defect | security-relevant.

Operator consequence: until a tag contains c2cfd55e, treat automatic issue comments from ACPX adapters as possibly containing internal thought text.

## Receipt
- https://github.com/paperclipai/paperclip/pull/11801
