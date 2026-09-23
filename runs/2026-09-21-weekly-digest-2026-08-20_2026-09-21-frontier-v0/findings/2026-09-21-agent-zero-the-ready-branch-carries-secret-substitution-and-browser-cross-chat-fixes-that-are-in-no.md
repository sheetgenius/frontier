---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-agent-zero-the-ready-branch-carries-secret-substitution-and-browser-cross-chat-fixes-that-are-in-no
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/compare/v2.12...ready
    precision: git_compare
---
# 2026-09-21-agent-zero-the-ready-branch-carries-secret-substitution-and-browser-cross-chat-fixes-that-are-in-no

The ready branch carries secret-substitution and browser cross-chat fixes that are in no tag. Nothing an operator installs from a tag. The Docker `ready` image tag exists, but it was pushed 2026-09-09T12:42Z, before these commits.

Channel: branch-only (ready; compare/v2.12...ready ahead 76, behind 0; main is identical to v2.12). Half: defect. Date: 2026-09-12 through 2026-09-21 (in-window commits only).

Operator consequence: On v2.12, do not rely on secret placeholders nested inside parallel tool-call arguments being unmasked correctly. Watch for v2.13 and check for aa8e1c042a in `compare/aa8e1c042a...v2.13`.

## Receipt
- https://github.com/agent0ai/agent-zero/compare/v2.12...ready
