---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-buzz-acp-adapter-source-disappears-while-its-last-npm-artifact-remains-available
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/44c8a9bca65d538bc165637246859df7f73f4819
    precision: commit
  - url: https://registry.npmjs.org/@eve%2fbuzz-acp-adapter/0.0.46
    precision: official_docs
---
# 2026-10-13-eve-buzz-acp-adapter-source-disappears-while-its-last-npm-artifact-remains-available

Buzz ACP adapter source disappears while its last npm artifact remains available. The repository deletes packages/eve-buzz-acp-adapter and current catalog references. The separate @eve/buzz-acp-adapter package remains at 0.0.46 with no deprecation field in the metadata checked on 2026-10-14. Source removal is not npm unpublication.

Channel: tagged-release. Half: both. Date: 2026-10-09 (eve@0.76.0 source removal); adapter published 2026-10-08T19:52:08.894Z.

Operator consequence: Do not choose a current ACP integration solely because the package still resolves. Check the source and maintenance path or evaluate the documented MCP publishing route for compatible clients; this is a protocol decision, not proof of universal interoperability.

## Receipt
- https://github.com/vercel/eve/commit/44c8a9bca65d538bc165637246859df7f73f4819
- https://registry.npmjs.org/@eve%2fbuzz-acp-adapter/0.0.46
