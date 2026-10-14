---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-browser-profiles-screenshots-and-media-caches-gain-private-filesystem-modes
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/6c3aae398adeb021bd598c61be2f7b0a460f6cf9
    precision: commit
---
# 2026-10-13-hermes-agent-browser-profiles-screenshots-and-media-caches-gain-private-filesystem-modes

Browser profiles, screenshots and media caches gain private filesystem modes. Under a traversable Hermes home, ordinary 0755/0644 creation modes could expose browser logins, screenshots and inbound media to other local users. The fix creates/reconciles private directories and writes owner-only files where supported. Managed group-sharing has an explicit exception, failures can be best-effort, and POSIX modes do not prove Windows ACL enforcement.

Channel: tagged-release (first stable v0.21.6). Half: defect. Date: 2026-10-01.

Operator consequence: On shared hosts, inspect actual ownership/modes and retained browser/media state after upgrading to v0.21.6+. Default home containment and configured group sharing change the exposure; do not infer local confidentiality from version alone.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/6c3aae398adeb021bd598c61be2f7b0a460f6cf9
