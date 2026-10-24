---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-workshop-retirement-requires-manual-migration-of-proposal-integrations-and-old-backups
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md#L245-L260
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/commit/cfee851150c5603a6af8b04f748973b57e482af0
    precision: commit
---
# 2026-10-24-openclaw-workshop-retirement-requires-manual-migration-of-proposal-integrations-and-old-backups

Workshop retirement requires manual migration of proposal integrations and old backups. The old `skills.proposals.*` and `skills.curator.*` Gateway methods stay registered but return errors, and `skill_proposal_evaluate` / `skill_proposal_changed` plugin hooks are removed. Doctor exports pending drafts without loading them. The former `skill-workshop/collection-backups/` files are no longer read or automatically restored. This is the compatibility cost of the same direct/versioned Workshop transition, not a second independent learning feature.

Channel: tagged-release. Half: defect. Date: 2026-10-18.

Operator consequence: Migrate plugins and scripts to the current Workshop methods, inspect exported drafts before asking the agent to save them, and manually copy needed content from old collection backups. Test recoverability of old material separately from new versioned Undo.

## Receipt
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md#L245-L260
- https://github.com/openclaw/openclaw/commit/cfee851150c5603a6af8b04f748973b57e482af0
