---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-dangerously-skip-permissions-stops-auto-approving-plan-plans-in-1-3-2-plan-and-artifact
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.2/CHANGELOG.md?plain=1#L13
    precision: tagged_commit_file
  - url: https://web.archive.org/web/20261003090204id_/https://antigravity.google/docs/cli/headless.md
    precision: official_docs
  - url: https://web.archive.org/web/20261010160504/https://antigravity.google/docs/settings/
    precision: official_docs
---
# 2026-10-13-antigravity-dangerously-skip-permissions-stops-auto-approving-plan-plans-in-1-3-2-plan-and-artifact

--dangerously-skip-permissions stops auto-approving /plan plans in 1.3.2; plan and artifact auto-approval now sit only in Artifact Review. Until 1.3.2 the flag also auto-approved the agent's implementation plan in `/plan` mode. It "now only skips tool permission prompts, so plans wait for your review again", and the note sends users who want plans to proceed to the separate `Artifact Review` setting (`artifactReviewPolicy`: `asks-for-review` by default, `agent-decides`, or `always-proceed`, per the settings docs). The flag still maps to the `always-proceed` permission mode, which since 1.1.21 also auto-approves MCP tool calls and page reads. Headless runs are a separate path: since 1.1.28 they pass plan review automatically, and nothing in the window changes that.

Channel: tagged-release. Half: both. Date: 2026-10-08.

Operator consequence: Interactive scripts or tmux sessions that ran the flag in `/plan` mode now stop at the plan; set `artifactReviewPolicy` explicitly if they should continue, and leave it at `asks-for-review` if the plan is your checkpoint. Before 1.3.2 the flag removed two gates, tool prompts and plan review, while the 2026-10-03 headless docs capture described only auto-approval of tool requests, so read sessions run with it on earlier builds as having had no plan review. In `-p` runs the plan has not been a checkpoint on any build since 1.1.28.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.2/CHANGELOG.md?plain=1#L13
- https://web.archive.org/web/20261003090204id_/https://antigravity.google/docs/cli/headless.md
- https://web.archive.org/web/20261010160504/https://antigravity.google/docs/settings/
