---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-hermes-agent-multiplex-profiles-leaked-allow-all-allowlists-vault-secrets-and-files-across-profiles-unt
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/cbd03e6e4ca143c1d5c2db881320afb85783c30b
    precision: commit
---
# 2026-09-21-hermes-agent-multiplex-profiles-leaked-allow-all-allowlists-vault-secrets-and-files-across-profiles-unt

Multiplex profiles leaked allow-all, allowlists, vault secrets, and files across profiles until v2026.9.11. Multiplex profiles leaked allow-all, allowlists, vault secrets, and files across profiles until v2026.9.11

Channel: tagged-release. Half: defect. Date: merged 2026-09-11; tagged 2026-09-11.

Operator consequence: If you serve several profiles from one gateway, upgrade to v2026.9.11 or later and review who talked to secondary bots before then. Single-profile installs were not affected.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/cbd03e6e4ca143c1d5c2db881320afb85783c30b
