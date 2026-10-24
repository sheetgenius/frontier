---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-main-adds-gateway-owned-exec-review-for-cloud-workers
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/db38f86b6d086631347af055d2bc87a653b7e8c8
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/db38f86b6d086631347af055d2bc87a653b7e8c8/src/worker/worker-exec-approval.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/db38f86b6d086631347af055d2bc87a653b7e8c8/src/gateway/worker-environments/worker-exec-approval.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/issues/178560
    precision: official_docs
---
# 2026-10-24-openclaw-main-adds-gateway-owned-exec-review-for-cloud-workers

Main adds Gateway-owned exec review for cloud workers. Cloud-worker exec in `auto` mode lost the configured mode in authority projection and lacked the approval transport, falling back to a Gateway RPC on the worker's own loopback. Main preserves the mode and routes approval over the authenticated worker connection, bound to the admitted turn and execution inputs. Gateway code rechecks live authority around review; worker code rejects a mismatched decision and checks the binding before execution. The maintainer reports an AWS live check, but this research did not reproduce it.

Channel: main-unreleased. Half: both. Date: 2026-10-24.

Operator consequence: Keep this workflow on a working supported placement, or test the exact main build in isolation while waiting for a published channel. Do not relax exec policy to make worker dispatch succeed. This removes a placement-specific review bridge once released, letting the same human approval owner govern work away from the Gateway host.

## Receipt
- https://github.com/openclaw/openclaw/commit/db38f86b6d086631347af055d2bc87a653b7e8c8
- https://github.com/openclaw/openclaw/blob/db38f86b6d086631347af055d2bc87a653b7e8c8/src/worker/worker-exec-approval.ts
- https://github.com/openclaw/openclaw/blob/db38f86b6d086631347af055d2bc87a653b7e8c8/src/gateway/worker-environments/worker-exec-approval.ts
- https://github.com/openclaw/openclaw/issues/178560
