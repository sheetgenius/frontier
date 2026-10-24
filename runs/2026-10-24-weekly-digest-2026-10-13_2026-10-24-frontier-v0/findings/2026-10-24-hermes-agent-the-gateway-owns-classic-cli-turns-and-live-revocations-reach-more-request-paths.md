---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-the-gateway-owns-classic-cli-turns-and-live-revocations-reach-more-request-paths
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/gateway-classic-cli.md
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/gateway_chat.py
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/commit/eea7c437ebd66e5ffbf9e525abe915f25e17d911
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/876e37c07746642da12a59bf2088c3fcfdda6f6c
    precision: commit
---
# 2026-10-24-hermes-agent-the-gateway-owns-classic-cli-turns-and-live-revocations-reach-more-request-paths

The gateway owns classic CLI turns, and live revocations reach more request paths. Ordinary classic chat, `chat -q`, and top-level `-z` attach to gateway-owned execution instead of creating a second local agent. An explicit remote failure does not fall back to local execution. Detaching or reaching EOF does not cancel the job. The tagged contract distinguishes completion, failure, unsupported invocation, and pending/lost-admission exit statuses; `-z` does not itself bypass approvals. Separately, removing a permanent approval now invalidates the running gateway's cached allowlist, and disabled-plugin checks cover native tickets, HTTP, websocket upgrades, assets, and both the launch and acting profiles. The launch profile owns the imported plugin copy and isolation decision. The cited plugin-scope GHSA was inaccessible in the public advisory API, so this is a code-backed repair, not a recovered affected-version advisory.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: An embedding wrapper must follow persisted session identity and explicit completion, not equate terminal exit with cancellation. Set `agent.run_budget_seconds` in configuration: the classic gateway path rejects `--run-budget`. Use the documented TUI/Desktop alternatives for worktree and image invocations that this path does not support. Exercise revocation on each served profile and on websocket clients. Shared execution removes duplicate orchestration, while moving attention to the gateway's lifecycle and consent state.

## Receipt
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/gateway-classic-cli.md
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/gateway_chat.py
- https://github.com/NousResearch/hermes-agent/commit/eea7c437ebd66e5ffbf9e525abe915f25e17d911
- https://github.com/NousResearch/hermes-agent/commit/876e37c07746642da12a59bf2088c3fcfdda6f6c
