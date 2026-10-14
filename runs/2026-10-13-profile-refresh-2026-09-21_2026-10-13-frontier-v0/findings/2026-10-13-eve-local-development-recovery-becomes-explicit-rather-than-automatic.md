---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-local-development-recovery-becomes-explicit-rather-than-automatic
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/0ac01f6bc85d2d18e463aa9c97834ca524ad9df3
    precision: commit
  - url: https://github.com/vercel/eve/releases/tag/eve%400.68.0
    precision: github_release
---
# 2026-10-13-eve-local-development-recovery-becomes-explicit-rather-than-automatic

Local development recovery becomes explicit rather than automatic. Earlier local-development invocations remain dormant by default. eve dev --resume attempts retained-snapshot recovery even after framework or authored source changes, and replay may perform work before failing. Missing snapshots are cancelled; malformed generation metadata remains dormant. Requests to dormant conversations fail explicitly.

Channel: tagged-release. Half: both. Date: 2026-09-28 (eve@0.68.0).

Operator consequence: Choose recovery deliberately after a development restart and review source changes and possible effects before using --resume. A durable architecture is not a promise of automatic local restart recovery or side-effect-free replay.

## Receipt
- https://github.com/vercel/eve/commit/0ac01f6bc85d2d18e463aa9c97834ca524ad9df3
- https://github.com/vercel/eve/releases/tag/eve%400.68.0
