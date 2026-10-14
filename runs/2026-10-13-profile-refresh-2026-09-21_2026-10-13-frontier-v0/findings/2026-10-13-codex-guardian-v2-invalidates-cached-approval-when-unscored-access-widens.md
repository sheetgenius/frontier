---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-guardian-v2-invalidates-cached-approval-when-unscored-access-widens
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/663eb5fbdda690ca4471d92b3f9a29db43c5ba22
    precision: commit
---
# 2026-10-13-codex-guardian-v2-invalidates-cached-approval-when-unscored-access-widens

Guardian V2 invalidates cached approval when unscored access widens. An unscored exec_command requesting additional permissions could reuse a V2 approval that did not cover the wider access. For default-namespace exec_command with with_additional_permissions, the AgeScore path now invalidates the cached score as a scoring failure.

Channel: tagged-release (Guardian V2 remains off by default). Half: defect. Date: 2026-09-22 (0.156.0).

Operator consequence: Opt-in Guardian V2 users should run 0.156.0 or later and verify widened unscored actions fail closed. This fix does not enable V2 for default users.

## Receipt
- https://github.com/openai/codex/commit/663eb5fbdda690ca4471d92b3f9a29db43c5ba22
