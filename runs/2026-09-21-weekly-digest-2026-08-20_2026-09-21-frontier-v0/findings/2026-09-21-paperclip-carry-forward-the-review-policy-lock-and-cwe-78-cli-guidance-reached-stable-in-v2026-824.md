---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-paperclip-carry-forward-the-review-policy-lock-and-cwe-78-cli-guidance-reached-stable-in-v2026-824
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.824.0
    precision: github_release
---
# 2026-09-21-paperclip-carry-forward-the-review-policy-lock-and-cwe-78-cli-guidance-reached-stable-in-v2026-824

Carry-forward: the review-policy lock and CWE-78 CLI guidance reached stable in v2026.824.0. The release body lists "Review governance": verdicts are serialized and transactional, a verdict can no longer bypass a policy by downgrading, the requester is persisted atomically (#11405, #10938). "Security hardening" lists CLI guidance routed through the safe `npx` form (#11400), plus a cross-tenant ID oracle on tool-access routes, routine webhook HMAC replay, and "the heartbeat-fallback comment can never publish a raw transcript" (#11343 among the listed PRs). The release calls itself the first stable to walk canary, nightly, beta, stable end to end.

Channel: tagged-release. Half: defect (closed). Date: 2026-08-25 (GitHub publish; release body says "Released: 2026-08-24").

Operator consequence: Operators pinned to `@beta` for these fixes can return to `@latest`. Anyone still on v2026.817.0 lacks the review-policy lock; upgrade. The four-lane train is now demonstrated, not only documented: a beta SHA becoming stable unchanged is the evidence.

## Receipt
- https://github.com/paperclipai/paperclip/releases/tag/v2026.824.0
