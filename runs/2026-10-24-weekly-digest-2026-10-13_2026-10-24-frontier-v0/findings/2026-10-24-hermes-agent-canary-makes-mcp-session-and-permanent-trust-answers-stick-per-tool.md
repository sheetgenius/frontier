---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-canary-makes-mcp-session-and-permanent-trust-answers-stick-per-tool
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/ce11b6be1af2b1defe4b461b79a451a02af96a9f
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/1ae21357f411832735da2f2d02de9b1e3622a170
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/a8144c63abb54fcbcc6551b62c17bd7eb6c91132
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/e8abec1e9655d135df39e9440c98dec0e8a34137/tools/mcp_tool_handlers.py
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-canary-makes-mcp-session-and-permanent-trust-answers-stick-per-tool

Canary makes MCP session and permanent trust answers stick per tool. For an untrusted MCP server, previous session/always answers were reduced to one-call consent and the next write-capable call asked again. Canary supplies an `mcp:<server>/<tool>` identity: session approval is remembered for the chat and permanent approval enters the profile's command allowlist. Consent that cannot safely be remembered, including spend-limit and payment-card prompts, offers only one-call approval or denial. The initial trust repair committed at 2026-10-23T23:16:43Z and the YOLO change at 2026-10-23T23:54:27Z; argument redaction followed at 2026-10-24T00:39:48Z. Follow-ups make YOLO/approval-off bypass the untrusted-server trust prompt while retaining the distinct spend gate, and mask secret-shaped arguments in the displayed approval preview.

Channel: preview-or-beta. Half: both. Date: 2026-10-24.

Operator consequence: The preview can reduce repeated prompts, but an Always answer now grants the wider authority its label describes. Re-audit saved rules when testing it. Do not sell repeated prompting on stable as already fixed, and do not treat prompt redaction as evidence that the called server receives no secrets. Cost approval and tool trust are separate decisions.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/ce11b6be1af2b1defe4b461b79a451a02af96a9f
- https://github.com/NousResearch/hermes-agent/commit/1ae21357f411832735da2f2d02de9b1e3622a170
- https://github.com/NousResearch/hermes-agent/commit/a8144c63abb54fcbcc6551b62c17bd7eb6c91132
- https://github.com/NousResearch/hermes-agent/blob/e8abec1e9655d135df39e9440c98dec0e8a34137/tools/mcp_tool_handlers.py
