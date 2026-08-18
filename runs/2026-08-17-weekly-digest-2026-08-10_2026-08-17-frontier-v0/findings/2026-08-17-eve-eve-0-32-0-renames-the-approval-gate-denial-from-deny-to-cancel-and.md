---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-eve-eve-0-32-0-renames-the-approval-gate-denial-from-deny-to-cancel-and
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.32.0
    precision: github_release
---
# 2026-08-17-eve-eve-0-32-0-renames-the-approval-gate-denial-from-deny-to-cancel-and

eve 0.32.0 renames the approval-gate denial from deny to cancel and requires custom sandbox backends to implement stop().

Tool approval responses now use `cancel` instead of `deny`, retaining `approve` for the positive response, to align the public protocol with the user-facing flow-control semantics. Separately, authored hooks, tools, and channel callbacks can stop their active sandbox through `ctx.getSandbox().stop()`; every built-in backend preserves the durable session for a later callback, and custom sandbox backend handles must now implement `stop()`.

Channel: tagged-release. Ancestry: `gh api repos/vercel/eve/releases` lists eve@0.32.0 published 2026-08-11T10:13:19Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.31.3...eve%400.32.0'` returned a 29-commit list containing both change commits 1702f91 (approval rename) and cbe7105 (sandbox stop)  --  both in the history of the stable tag eve@0.32.0.

Operator consequence: The rename lands on the exact surface this source is watched for. Anything that reads eve's approval stream  --  audit logs, dashboards, compliance exports  --  needs its matcher updated, and the semantic drift is worth arguing about rather than absorbing: `deny` is an authority verdict and `cancel` is flow control, and a log that records the second when an operator meant the first is a weaker record. If you maintain a custom sandbox backend, 0.32.0 is a compile break until you implement `stop()`; if you use a built-in backend, the durable session survives the stop, so treat `stop()` as suspension, not teardown.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.32.0
