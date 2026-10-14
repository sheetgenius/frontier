---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-durable-session-endings-clean-up-sandbox-resources-and-provider-hooks-are-renamed
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/33a95cffaf7ddd90cc9a6285fe9c0012540e58be
    precision: commit
  - url: https://github.com/vercel/eve/commit/32af96d238132f4ba3ac3d1b37fec378392e52f8
    precision: commit
  - url: https://github.com/vercel/eve/releases/tag/eve%400.75.0
    precision: github_release
---
# 2026-10-13-eve-durable-session-endings-clean-up-sandbox-resources-and-provider-hooks-are-renamed

Durable session endings clean up sandbox resources and provider hooks are renamed. Provider cleanup runs when a durable session completes, expires or fails; onSessionEnd can release resources from persisted state. Custom handle hooks onSessionStop and onSessionDelete become onSandboxStop and onSandboxDelete.

Channel: tagged-release. Half: both. Date: 2026-10-08 (eve@0.75.0).

Operator consequence: Migrate custom provider handles and verify cleanup at each session ending. The 0.64.0 sandbox-definition rewrite is not the last breaking sandbox change in this migration; resource lifetime remains an operating cost.

## Receipt
- https://github.com/vercel/eve/commit/33a95cffaf7ddd90cc9a6285fe9c0012540e58be
- https://github.com/vercel/eve/commit/32af96d238132f4ba3ac3d1b37fec378392e52f8
- https://github.com/vercel/eve/releases/tag/eve%400.75.0
