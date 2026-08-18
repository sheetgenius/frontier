---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-agent-zero-v2-9-bundles-a-migrate-agents-plugin-that-imports-agent-definitions
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/7129e287c3b92013e2d82d53c91a9c07d4a82cf0
    precision: commit
---
# 2026-08-17-agent-zero-v2-9-bundles-a-migrate-agents-plugin-that-imports-agent-definitions

v2.9 bundles a Migrate Agents plugin that imports agent definitions from five rival harnesses.

A built-in plugin under plugins/_migrate_agents/ with a preview-then-import workflow (api/migration_preview.py, api/migration_import.py, helpers/migration.py, tests). The release notes and the vendor's v2.9 article both say 'five-harness migration' without naming the five; the commit's file list does name them, via the bundled WebUI assets: plugins/_migrate_agents/webui/assets/claude.svg, codex.svg, hermes.svg, openclaw.svg, opencode.svg, alongside an ATTRIBUTION.md. A follow-up commit on the same day (baadd0dd0b, the tag commit) removed the sidebar quick-action shortcut, leaving the migration UI reachable only from the Plugins screen.

Channel: tagged-release. Ancestry: gh api repos/agent0ai/agent-zero/compare/7129e287c3...v2.9 -> status=ahead, ahead=25, behind=0, so the commit is an ancestor of the stable tag v2.9 (prerelease=false).

Operator consequence: Worth trying only if you are actually evaluating a move, and worth reading regardless as a statement of where Agent Zero thinks it sits: it is now shipping an on-ramp from Claude Code, Codex, Hermes, OpenClaw, and OpenCode rather than treating agent definitions as proprietary. Do not assume behaviour survives the import. An agent profile is a prompt plus a tool policy plus a model preset, and only the first of those means the same thing in two harnesses; a migrated profile whose source harness enforced tool limits differently will not carry those limits. Preview the import, then re-derive the tool policy in Agent Zero's own scoped model rather than trusting what came across.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/7129e287c3b92013e2d82d53c91a9c07d4a82cf0
