---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-disableworkflows-no-longer-stops-cloud-reviews-unless-machine-policy-sets
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L997
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.285
    precision: github_release
  - url: https://code.claude.com/docs/en/settings-reference#disableworkflows
    precision: official_docs
---
# 2026-10-13-claude-code-disableworkflows-no-longer-stops-cloud-reviews-unless-machine-policy-sets

disableWorkflows no longer stops cloud reviews unless machine policy sets it. Code Review PR reviews and `/ultrareview` now run despite `disableWorkflows` set in user settings or the claude.ai admin console. Only MDM or the reviewing machine's managed-settings file retains the stop. Cloud review becomes available in more configurations, while the policy decision moves to the endpoint administrator. Uploads on macOS and Linux also require git 2.31+ and refuse separate-git-dir and symbolic-ref checkouts.

Channel: tagged-release (2.1.285, on stable). Half: both. Date: 2026-09-29 (2.1.285); on stable from 2026-09-30.

Operator consequence: If cloud review or source upload must be off, put `disableWorkflows: true` in MDM or the reviewing machine's managed-settings file and check that source loads. A claude.ai organization toggle alone no longer supplies that stop, even on stable. Check git version and checkout shape before depending on `/ultrareview` uploads.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L997
- https://github.com/anthropics/claude-code/releases/tag/v2.1.285
- https://code.claude.com/docs/en/settings-reference#disableworkflows
