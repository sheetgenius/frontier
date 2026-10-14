---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-voice-turns-request-no-reasoning-or-the-route-s-lowest-valid-effort
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/98a6dcf586788dc16f25cac1ce40edc6259dd108
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L788-L790
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-voice-turns-request-no-reasoning-or-the-route-s-lowest-valid-effort

Voice turns request no reasoning or the route's lowest valid effort. auxiliary.voice_chat.reasoning_effort now defaults to none, including when the voice slot follows the session model. Routes that cannot disable reasoning receive their lowest valid behavior, and rejection state stays scoped to the voice route. Typed turns retain their configured reasoning.

Channel: tagged-release (first stable v0.21.6). Half: capability. Date: 2026-10-07.

Operator consequence: Check the voice effort setting when quality matters and test spoken work separately from text. The default changes the latency/reasoning trade; no measured latency or quality improvement is established by this receipt.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/98a6dcf586788dc16f25cac1ce40edc6259dd108
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L788-L790
