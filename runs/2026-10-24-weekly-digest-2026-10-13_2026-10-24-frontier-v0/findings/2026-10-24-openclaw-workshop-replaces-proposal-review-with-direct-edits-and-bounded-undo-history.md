---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-workshop-replaces-proposal-review-with-direct-edits-and-bounded-undo-history
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/cfee851150c5603a6af8b04f748973b57e482af0
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/skills/workshop/skill-versions.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/skills/workshop/library.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/commands/doctor/shared/legacy-config-migrations.runtime.skills.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/self-learning.md
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-workshop-replaces-proposal-review-with-direct-edits-and-bounded-undo-history

Workshop replaces proposal review with direct edits and bounded Undo history. Workshop now maintains learned procedures through `skill_workshop`, applies changes immediately, and saves previous versions. The code stages a version before mutation; restoration also snapshots the current version and checks live authority before replacement. History retains ten versions per skill and the change feed retains 500 entries. `auto` remains the default; `off` disables background reviews and cleanup while manual learning remains available. Migration maps legacy `propose` to `off`, removes `approvalPolicy` and `maxPending`, and deliberately does not turn legacy `auto` plus `pending` into `off`. Background review uses the foreground model route with a restricted tool set; it is an additional model run. Learned Workshop skills bypass the ordinary per-agent skills allowlist. Unused skills can be archived after 30 days, with runtime-specific attribution limits documented.

Channel: tagged-release. Half: both. Date: 2026-10-18.

Operator consequence: Replace the profile's old `propose`/`approvalPolicy: pending` recipe. Use `skills.workshop.autonomous.mode: "off"` when changes must be initiated manually. If keeping `auto`, review the change feed and exercise Undo, while retaining backups beyond the bounded history. The proposal queue disappears, but judgment moves to evaluating reusable procedures and reversing bad learning. Reversibility is a real capability addition; it is not evidence that every learned edit improves future work.

## Receipt
- https://github.com/openclaw/openclaw/commit/cfee851150c5603a6af8b04f748973b57e482af0
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/skills/workshop/skill-versions.ts
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/skills/workshop/library.ts
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/commands/doctor/shared/legacy-config-migrations.runtime.skills.ts
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/self-learning.md
