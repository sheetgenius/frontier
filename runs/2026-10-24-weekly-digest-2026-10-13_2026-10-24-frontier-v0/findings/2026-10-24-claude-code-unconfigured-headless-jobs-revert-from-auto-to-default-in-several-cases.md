---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-unconfigured-headless-jobs-revert-from-auto-to-default-in-several-cases
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L293-L328
    precision: tagged_commit_file
  - url: https://web.archive.org/web/20261022024756/https://code.claude.com/docs/en/permission-modes
    precision: official_docs
---
# 2026-10-24-claude-code-unconfigured-headless-jobs-revert-from-auto-to-default-in-several-cases

Unconfigured headless jobs revert from auto to default in several cases. With no permission mode configured, `claude -p` and Agent SDK sessions now start in `default` on third-party providers, with telemetry disabled, or on a fresh install. An explicit `--permission-mode auto` keeps auto. This reverses the profile's 285-era headless default, while terminal and VS Code defaults remain a separate case. Version 302 also exposes `CLAUDE_CODE_AUTO_MODE_MODEL` for the client-side classifier only and compacts overlong server-review context instead of blocking every checked call.

Channel: tagged-release. Half: both. Date: 2026-10-16.

Operator consequence: Set the mode in each CI job and SDK configuration. A pin alone no longer reproduces the old unconfigured behavior, and a job that cannot ask may now stop on actions it previously classified. Record the classifier actually used; selecting a local classifier model does not select the server's model or prove rollout coverage. Human attention moves from repeated prompts to a deliberate job policy and checks for fallback.

## Receipt
- https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L293-L328
- https://web.archive.org/web/20261022024756/https://code.claude.com/docs/en/permission-modes
