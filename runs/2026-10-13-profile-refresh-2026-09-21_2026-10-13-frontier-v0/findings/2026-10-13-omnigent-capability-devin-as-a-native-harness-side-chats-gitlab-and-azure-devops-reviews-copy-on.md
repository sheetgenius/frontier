---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-capability-devin-as-a-native-harness-side-chats-gitlab-and-azure-devops-reviews-copy-on
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.15.0
    precision: github_release
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.16.0
    precision: github_release
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.17.0
    precision: github_release
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.18.0
    precision: github_release
  - url: https://github.com/omnigent-ai/omnigent/pull/7626
    precision: merged_pr
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/docs/AUTOMATIONS.md#L13-L15
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/feature_flags.py#L20-L110
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/README.md
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-capability-devin-as-a-native-harness-side-chats-gitlab-and-azure-devops-reviews-copy-on

Capability: Devin as a native harness, side chats, GitLab and Azure DevOps reviews, copy-on-write sandbox paths, fresh sandboxes for scheduled runs. v0.15.0: `omni devin` mirrors the Devin TUI into the web UI as a native harness; side chats see a session's context without polluting it; curated model catalogs for Pi, custom ACP agents and managed sandboxes; message deep links; serving the UI under a reverse-proxy subpath; automations that run in fresh managed sandboxes. v0.16.0: `copy_on_write: true` write paths for disposable edits in Linux sandboxes; opt-in shallow or blobless clones for managed sandboxes; a unified workspace browser; Pi agents can drop auto-discovered context files or replace the base prompt; MCP tool images reach harnesses as native images. v0.17.0: desktop sign-in to OIDC servers through the system browser with PKCE and silent renewal; period budgets (section 8); `conversation_id` and `turn_final` in policy context. v0.18.0: GitLab merge request and Azure DevOps pull request review in the session panel, with automatic tracking of requests agents create; Settings > Harnesses lists each harness's MCP servers, skills, plugins and startup settings, on by default; an Inbox for unread replies; reusable agents (section 9). Usage, canvas, custom-agent settings, sidebar grouping, import review and harness installation remain flag-off; only harness settings is on among these release flags.

Channel: tagged-release. Half: capability. Date: 2026-09-22 to 2026-10-13.

Operator consequence: Two of these lower risk rather than just adding features. A scheduled task can run in a fresh managed sandbox instead of on your machine, a way to move work off a workstation; and copy-on-write paths let an agent edit inside a Linux sandbox without touching the real files. Upgrade affected Linux bubblewrap hosts to 0.18.0 and restart helpers first (section 13); neither release notes nor static review establish end-to-end isolation or measured savings. Devin-native sessions deny tool calls during a policy-server outage, unlike Claude Code and Codex (section 6).

## Receipt
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.15.0
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.16.0
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.17.0
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.18.0
- https://github.com/omnigent-ai/omnigent/pull/7626
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/docs/AUTOMATIONS.md#L13-L15
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/feature_flags.py#L20-L110
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/README.md
