---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-01-openhands-git-proxy-capability
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "Commit 982994c (2026-06-01T13:10:03Z): 'feat: proxy runtime git/changes and git/diff via app-conversations (#14606)' - Implements _proxy_git_runtime_call helper with endpoints GET /{conversation_id}/g"
    url: https://github.com/OpenHands/OpenHands/commit/982994c
    precision: commit
---
# Feature: Proxy runtime git/changes and git/diff via app-conversations

## What Changed

Added two new API endpoints that proxy git operations (git changes and git diff) through app-conversations API. Enables frontend access to runtime git resources by resolving conversation's runtime and forwarding GET requests to runtime server via sandbox session API key.

## Operator Implication

Operators gain new git operation proxying capability through app-conversations API. Frontend can now directly query git changes/diffs from conversations without direct runtime access. Requires understanding of sandbox session API key authentication mechanism.

## Receipt

- [Commit 982994c (2026-06-01T13:10:03Z): 'feat: proxy runtime git/changes and git/diff via app-conversations (#14606)' - Implements _proxy_git_runtime_call helper](https://github.com/OpenHands/OpenHands/commit/982994c)
