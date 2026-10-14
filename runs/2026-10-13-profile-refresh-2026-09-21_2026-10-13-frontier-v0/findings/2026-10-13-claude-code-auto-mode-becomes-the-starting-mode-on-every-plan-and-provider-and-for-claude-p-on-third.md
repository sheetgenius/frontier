---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-auto-mode-becomes-the-starting-mode-on-every-plan-and-provider-and-for-claude-p-on-third
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1112
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1002
    precision: tagged_commit_file
  - url: https://code.claude.com/docs/en/permission-modes#which-mode-a-session-starts-in
    precision: official_docs
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CLAUDE.md
    precision: tagged_commit_file
---
# 2026-10-13-claude-code-auto-mode-becomes-the-starting-mode-on-every-plan-and-provider-and-for-claude-p-on-third

Auto mode becomes the starting mode on every plan and provider, and for claude -p on third-party providers. Before 2.1.283 auto mode was the built-in starting mode only on Pro, Max and Team. Now an interactive terminal or VS Code session with no configured mode starts in auto on every plan and provider, Enterprise, API keys, Bedrock, Vertex, Foundry and gateways included, and from 2.1.285 so does a `claude -p` or Python Agent SDK run on a third-party provider or with telemetry off. A first-party `-p` run that fetches feature flags still starts in `default`, and so does an organization under the HIPAA configuration. The docs still say hands-off auto mode needs no isolation. Anthropic's own repository does not run it that way: its CLAUDE.md requires an egress-firewall runner, an enforced allow list and auto mode together for every job that calls Claude. Two classifier behaviors moved on latest only: a custom subagent with `permissionMode: auto` ran in auto mode even where `disableAutoMode` removed it (fixed 2.1.292), and the instruction that a denial covers the outcome, not just the command, was withdrawn (2.1.293).

Channel: tagged-release (2.1.283 to 2.1.285, on stable since 2.1.285's promotion on 2026-09-30); 2.1.292 and 2.1.293 latest only. Half: both. Date: 2026-09-25 (2.1.283), 2026-09-28 (2.1.284), 2026-09-29 (2.1.285); on stable from 2026-09-30.

Operator consequence: A Bedrock, Vertex or Foundry CI job that runs `claude -p` without `--permission-mode` changed authority model when stable reached 2.1.285 on 2026-09-30: what used to go to the SDK host, the prompt tool or a `--permission-prompts none` denial is now a classifier decision. Pass `--permission-mode` on every headless invocation or set `permissions.defaultMode` in managed settings; use `disableAutoMode: "disable"` where a classifier must not decide, and on stable remember that custom subagents with `permissionMode: auto` ignore it until 2.1.292. For untrusted-input jobs copy the vendor's own pattern: auto mode plus an enforced egress allow list, not auto mode alone. The human gate moved from answering prompts to deciding, per job, whether a model may answer them.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1112
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1002
- https://code.claude.com/docs/en/permission-modes#which-mode-a-session-starts-in
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CLAUDE.md
