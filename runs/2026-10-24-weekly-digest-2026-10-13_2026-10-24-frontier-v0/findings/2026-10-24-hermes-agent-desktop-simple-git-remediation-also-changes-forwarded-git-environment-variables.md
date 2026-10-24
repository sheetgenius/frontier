---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-desktop-simple-git-remediation-also-changes-forwarded-git-environment-variables
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/14f2ca2bf40f012b0a90d7455cddaf692047b010
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/apps/desktop/package.json
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/apps/desktop/electron/git-review-ops.ts
    precision: tagged_commit_file
  - url: https://github.com/advisories/GHSA-x6jw-m9v5-85vh
    precision: official_docs
---
# 2026-10-24-hermes-agent-desktop-simple-git-remediation-also-changes-forwarded-git-environment-variables

Desktop simple-git remediation also changes forwarded Git environment variables. Desktop source moves simple-git 3.36.0 to 4.0.2 and explicitly permits the SSH/askpass environment variables its Review pane needs for push. CVE-2026-102828 was published to the global advisory database on 2026-10-05, so this is remediation. An application accepting attacker-controlled trailer-command configuration and invoking `interpret-trailers` can run that command with Node-process privileges. Affected simple-git is >=3.15.0,<4.0.1. No matching Hermes exploit was established.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Audit custom Git/SSH environment assumptions and inspect the installed Desktop build. A fix in tagged Desktop source does not replace older standalone bundles; v0.22.5 explicitly did not update those installers.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/14f2ca2bf40f012b0a90d7455cddaf692047b010
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/apps/desktop/package.json
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/apps/desktop/electron/git-review-ops.ts
- https://github.com/advisories/GHSA-x6jw-m9v5-85vh
