---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-subagents-given-a-branch-or-share-workspace-worked-in-the-real-checkout-of-multi-repositor
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L19
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.10/CHANGELOG.md?plain=1#L19
    precision: tagged_commit_file
---
# 2026-10-13-antigravity-subagents-given-a-branch-or-share-workspace-worked-in-the-real-checkout-of-multi-repositor

Subagents given a branch or share workspace worked in the real checkout of multi-repository workspaces until 1.3.3. 1.3.3: "Fixed subagents started with a `branch` or `share` workspace in a multi-repository workspace silently working in your real checkout; each repository now gets its own isolated copy." The isolation a parent agent asked for was not applied when the workspace held more than one repository, and nothing said so. Earlier in the window, 1.2.10 moved subagent worktrees under a `worktrees/` directory in the app data directory after files subagents wrote in their own worktree were treated as artifacts and left `.metadata.json` files behind.

Channel: tagged-release. Half: defect. Date: 2026-10-10 (fix); 2026-09-24 (1.2.10 worktree relocation).

Operator consequence: If you ran parallel subagents with `branch` or `share` workspaces across a multi-repo workspace on a build below 1.3.3, check those real checkouts for edits, branches or stashes you did not make before trusting them. Upgrade before using isolated subagents for anything you would not let the parent write directly. Cleanup scripts that find subagent worktrees by path need the app-data `worktrees/` location from 1.2.10 on.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L19
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.10/CHANGELOG.md?plain=1#L19
