---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-unpinned-models-agent-aware-sandbox-commands-and-demand-added-catalogs-change-defaults
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/3d96b698e14391437b3886e27cd3a1380837396f
    precision: commit
  - url: https://github.com/vercel/eve/commit/3445e89e736cb91211746b515d82e62deb5dbed3
    precision: commit
  - url: https://github.com/vercel/eve/commit/db71190b2c3abce9f375b06fc890d90b035d1fe7
    precision: commit
  - url: https://github.com/vercel/eve/releases/tag/eve%400.78.0
    precision: github_release
---
# 2026-10-13-eve-unpinned-models-agent-aware-sandbox-commands-and-demand-added-catalogs-change-defaults

Unpinned models, agent-aware sandbox commands, and demand-added catalogs change defaults. The intermediate default model was Grok 4.7 before the GPT-6 switch in section 9. From 0.78.0 sandbox commands receive AI_AGENT=eve unless environment or per-call settings override it, so agent-aware CLIs can become noninteractive. Catalog tools appear when a session reaches an eligible entry and then persist; search output gains searched and remaining counts.

Channel: tagged-release. Half: both. Date: 2026-09-22 (eve@0.64.0), 2026-10-13 (eve@0.78.0).

Operator consequence: Pin the model and check CLIs that infer interaction mode from AI_AGENT. Treat prompt/tool-list stability as conditional on first reaching the catalog, not an unconditional fixed-prefix guarantee. Use the search counts to inspect coverage instead of repeatedly searching blindly.

## Receipt
- https://github.com/vercel/eve/commit/3d96b698e14391437b3886e27cd3a1380837396f
- https://github.com/vercel/eve/commit/3445e89e736cb91211746b515d82e62deb5dbed3
- https://github.com/vercel/eve/commit/db71190b2c3abce9f375b06fc890d90b035d1fe7
- https://github.com/vercel/eve/releases/tag/eve%400.78.0
