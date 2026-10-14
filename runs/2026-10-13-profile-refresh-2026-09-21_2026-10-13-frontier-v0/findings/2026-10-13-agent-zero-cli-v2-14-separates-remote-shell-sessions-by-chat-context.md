---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-cli-v2-14-separates-remote-shell-sessions-by-chat-context
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/a0-connector/commit/dd5468f0a450973edc73f6fa48638505347012c9
    precision: commit
  - url: https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/remote_exec.py#L836-L856
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/a0-connector/releases/tag/v2.14
    precision: github_release
---
# 2026-10-13-agent-zero-cli-v2-14-separates-remote-shell-sessions-by-chat-context

CLI v2.14 separates remote shell sessions by chat context. The remote manager previously keyed shells by session number alone. Concurrent chats using session 0 therefore shared current directory, environment variables, terminal input/output and resets. CLI v2.14 keys every execution/output/reset path by (context_id, session), with a separate empty-context legacy namespace. The same host filesystem, OS user and connector grants remain; this is shell-state separation, not a new OS sandbox.

Channel: tagged-release. Half: both. Date: 2026-10-13 (first stable; implementation 2026-10-02T18:06:20Z).

Operator consequence: Upgrade the host CLI, not just the Agent Zero image. Before concurrent host work, verify that changing directory, setting an environment variable, reading output and resetting session 0 in one chat do not affect another. Retain narrow host grants and filesystem scope.

## Receipt
- https://github.com/agent0ai/a0-connector/commit/dd5468f0a450973edc73f6fa48638505347012c9
- https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/remote_exec.py#L836-L856
- https://github.com/agent0ai/a0-connector/releases/tag/v2.14
