---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openclaw-the-approved-exec-fix-is-now-in-stable-but-not-on-extended-stable
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.8.1
    precision: github_release
  - url: https://github.com/openclaw/openclaw/commit/ab5611f0be610380fe48803fe4311896ca85806e
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.8.1/src/infra/system-run-mutable-file-operand.ts
    precision: tagged_commit_file
---
# 2026-09-21-openclaw-the-approved-exec-fix-is-now-in-stable-but-not-on-extended-stable

The approved-exec fix is now in stable, but not on extended-stable. The parent's residual is settled. The fix binds an approved command to the SHA-256 bytes of its script/executable operands and revalidates them just before spawn. It first appeared in a prerelease on 2026-08-24 and in stable v2026.8.1 on 2026-08-31. The human-facing 8.1 highlights do not mention it; it appears only as "PR #124858" in the contribution record. It is not on the extended-stable line. v2026.7.35 was promoted to the `extended-stable` dist-tag on 2026-09-21 and is described as "OpenClaw from the end of July 2026, plus critical security updates". It lacks the operand snapshot file entirely.

Channel: tagged-release (latest/beta dist-tags); absent from extended-stable. Half: defect. Date: 2026-08-24 (first beta), 2026-08-31 (first stable).

Operator consequence: Upgrade: `openclaw update --channel stable` (npm latest 2026.9.5) now carries the fix. Re-audit if you run extended-stable. The approval prompt on 2026.7.35 is still not bound to the bytes that run. Before 2026.8.1, one-time approvals of scripts that the agent can write should be treated as approvals of a path, not of content. Expect re-prompts after upgrading: the PR downgrades byte-bound durable grants to one-shot.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.8.1
- https://github.com/openclaw/openclaw/commit/ab5611f0be610380fe48803fe4311896ca85806e
- https://github.com/openclaw/openclaw/blob/v2026.8.1/src/infra/system-run-mutable-file-operand.ts
