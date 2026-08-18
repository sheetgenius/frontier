---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-hermes-agent-profile-export-import-ships-a-whole-setup-including-unscrubbed-secrets
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/78812
    precision: merged_pr
---
# 2026-08-10-hermes-agent-profile-export-import-ships-a-whole-setup-including-unscrubbed-secrets

Profile export/import ships a whole setup  --  including unscrubbed secrets in skills and SOUL.md.

`/export` and `/import` (CLI, TUI, REST, and desktop) package a profile as a shareable .tar.gz containing config.yaml, SOUL.md, MEMORY.md, USER.md, system_prompt.md, AGENTS.md, CLAUDE.md, .cursorrules, todo.json and the full unfiltered skills tree. The PR states plainly: credentials files (auth.json, .env) are stripped, but there is 'no content-level PII/secret scrub of skills, memories, sessions, or persona files.'

Channel: tagged-release. Ancestry: merge_commit_sha 0a48af25bb22d569d84d35ba4d73f4934a5943ec; GET repos/NousResearch/hermes-agent/compare/0a48af25...v2026.8.13 -> status=ahead, ahead_by=1478, behind_by=0, i.e. the commit is an ancestor of the stable tag v2026.8.13.

Operator consequence: If you shared a profile archive built from a Hermes between 2026-08-04 and 2026-08-10, assume any API key pasted into a skill, memory, or SOUL.md left the machine. Rotate those credentials and re-export on v0.20.1 or later, where the scrub exists (see the companion entry).

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/78812
