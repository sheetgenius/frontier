---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-marketplace-and-skill-impersonation-paths-close-on-stable
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1603
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1312
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L878
    precision: tagged_commit_file
---
# 2026-10-13-claude-code-marketplace-and-skill-impersonation-paths-close-on-stable

Marketplace and skill impersonation paths close on stable. A marketplace cannot borrow a reserved name. `Skill(anthropic-skills:*)` and `Skill(claude-ai:*)` cover only synced skills; same-named local skill folders and command files stop loading. A plugin with such a name still loads but loses name ties to synced skills. Npm plugin sources and dependencies must be registry packages rather than git repositories or folders. All changes are on stable.

Channel: tagged-release (all on stable). Half: defect. Date: 2026-09-22 (2.1.280), 2026-09-24 (2.1.282), 2026-09-30 (2.1.286).

Operator consequence: Audit marketplace names, local skill names and npm plugin declarations before upgrading older pins. Remove reserved-name imitations and replace git or folder sources with registry packages. Rename an MCP server under a reserved skill namespace to recover its skill and prompt listings.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1603
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1312
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L878
