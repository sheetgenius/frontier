---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-hermes-agent-writes-to-agents-md-claude-md-and-soul-md-now-always-stop-for-a
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/81152
    precision: merged_pr
---
# 2026-08-10-hermes-agent-writes-to-agents-md-claude-md-and-soul-md-now-always-stop-for-a

Writes to AGENTS.md, CLAUDE.md and SOUL.md now always stop for a human.

A new `security.protected_instruction_files` gate (default on) makes write_file/patch against AGENTS.md, CLAUDE.md, SOUL.md, .cursorrules and project-local `.hermes` config prompt a human every time: one-operation grants only, no session or permanent scope, no yolo bypass, fail-closed when no human channel exists. Multi-file V4A patches are atomic  --  one protected target gates the whole patch. Matching is on realpath, case-insensitive, any directory. The PR is explicit that this closes only the file-tools vector; the terminal vector (#58631) was still open at merge time.

Channel: tagged-release. Ancestry: merge_commit_sha fe66596df342c660d0cb42172884070ae02ac5a0; compare/fe66596d...v2026.8.13 -> status=ahead, ahead_by=1157, behind_by=0 (ancestor of stable tag v2026.8.13).

Operator consequence: Adopt as-is  --  this is the receipt rail for the one class of file whose contents steer every future session. But do not read it as complete: a prompt-injected `echo >> AGENTS.md` through the terminal tool was still ungated at this tag. Re-audit your terminal allowlist for appends to instruction files.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/81152
