---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-2-1-278-auto-mode-classifier-moves-server-side-by-default
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.278
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.273
    precision: github_release
  - url: https://code.claude.com/docs/en/auto-mode-classifier-billing
    precision: official_docs
---
# 2026-09-21-claude-code-2-1-278-auto-mode-classifier-moves-server-side-by-default

2.1.273 (2026-09-15) set the local auto-mode classifier as default on Bedrock, Vertex and Foundry, with CLAUDE_CODE_AUTO_MODE_SERVER=1 to opt into the server classifier. 2.1.278 (2026-09-19) reversed that: auto mode for Claude API, Enterprise, Bedrock, Vertex, Foundry and gateways now defaults to the server-side classifier, which "does not charge for classifier overhead", with CLAUDE_CODE_AUTO_MODE_SERVER=0 as the opt-out on the three clouds and gateways. A new docs page says the server performs the checks inside the session's own model requests. When a gateway strips the safeguards request field or drops safeguard_results, Claude Code holds the action on a notice and Enter continues on the billed local classifier. The page calls the variable temporary. /status gains an Auto mode server row.

Channel: tagged-release (latest 2.1.278; not on stable 2.1.267). Half: both.

Operator consequence: Gateway operators must pass safeguards and safeguard_results through unchanged, or set CLAUDE_CODE_AUTO_MODE_SERVER=0 and keep paying for the local classifier. Otherwise the first checked action in every auto-mode session holds on a notice, including under -p. Record which classifier decided from /status or the stream-json system warning. A fleet that set =1 on 09-15 is now a no-op; one that never set it changed behavior on 09-19.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.278
- https://github.com/anthropics/claude-code/releases/tag/v2.1.273
- https://code.claude.com/docs/en/auto-mode-classifier-billing
