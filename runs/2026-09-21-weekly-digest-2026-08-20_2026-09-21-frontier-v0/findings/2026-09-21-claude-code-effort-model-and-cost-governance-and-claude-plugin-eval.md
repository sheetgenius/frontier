---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-effort-model-and-cost-governance-and-claude-plugin-eval
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.267
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.269
    precision: github_release
---
# 2026-09-21-claude-code-effort-model-and-cost-governance-and-claude-plugin-eval

2.1.243 (2026-08-24) adds modelPicker, the modelPricing managed setting, prompt-cache TTL settings and keyless Console sign-in. 2.1.267 (2026-09-09) adds maxEffortLevel, which caps effort on every provider with the lowest cap winning. 2.1.269 (2026-09-11) adds claude plugin eval, which runs a plugin's eval suite and a no-plugin baseline and reports JSON and HTML. 2.1.274 adds a claude_code.managed_settings_resolved OTel event naming the policy sources a session applied.

Channel: tagged-release (2.1.243, 2.1.267 on stable; 2.1.269 latest only). Half: capability.

Operator consequence: maxEffortLevel in managed settings is the first effort ceiling that binds on Bedrock, Vertex and Foundry. Teams that built a bespoke plugin eval harness can compare against the vendor's. Wire the managed_settings_resolved event into the fleet dashboard.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.267
- https://github.com/anthropics/claude-code/releases/tag/v2.1.269
