---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-paperclip-v2026-824-0-new-interactions-default-to-resolver-policy-anyone
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.824.0/packages/db/src/migrations/0218_mushy_jack_murdock.sql
    precision: tagged_commit_file
---
# 2026-09-21-paperclip-v2026-824-0-new-interactions-default-to-resolver-policy-anyone

v2026.824.0: new interactions default to resolver policy `anyone`. One resolver-policy evaluator with recorded provenance replaced per-route rules. The capability half: agents that were wrongly blocked from resolving can now resolve, and every resolution records why it was allowed. The defect-watch half: a new interaction created without an explicit policy can be resolved by anyone, including the agent that created it, unless a company cap narrows it. The migration explicitly does not widen pending rows.

Channel: tagged-release. Half: both. Date: 2026-08-25.

Operator consequence: Re-audit any workflow that relied on the old default excluding the creator. If you need an agent to be unable to answer its own confirmation, set `not_creator` or `human_only` explicitly or cap it at company level. Inspect `resolver_policy_provenance` to see which rule allowed a resolution.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.824.0/packages/db/src/migrations/0218_mushy_jack_murdock.sql
