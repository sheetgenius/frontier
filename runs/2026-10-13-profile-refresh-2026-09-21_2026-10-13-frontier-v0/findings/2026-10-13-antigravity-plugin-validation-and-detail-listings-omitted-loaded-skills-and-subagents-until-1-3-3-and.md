---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-plugin-validation-and-detail-listings-omitted-loaded-skills-and-subagents-until-1-3-3-and
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L24
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L19
    precision: tagged_commit_file
---
# 2026-10-13-antigravity-plugin-validation-and-detail-listings-omitted-loaded-skills-and-subagents-until-1-3-3-and

Plugin validation and detail listings omitted loaded skills and subagents until 1.3.3 and 1.3.4. In 1.3.3, `agy plugin validate` and plugin listings began accounting for skills declared in `plugin.json` and exclusions in `skills.json`, matching the skills that load. In 1.3.4, the Agents row in `/plugin` began including subagents declared in root `agents.json` and listing loaded agents by name. Earlier listings could understate what a plugin supplied or misrepresent excluded skills.

Channel: tagged-release. Half: defect. Date: 2026-10-10 (1.3.3); 2026-10-13 (1.3.4).

Operator consequence: Rebuild plugin inventories on 1.3.4, including validation, the Agents detail row and `agy plugin list --json`. An older empty row was not evidence that a plugin had no subagents, and an older validation list was not a faithful skill inventory. This matters before pre-approving a plugin's MCP tools or adopting its agents into unattended jobs.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L24
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L19
