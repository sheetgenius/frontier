---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-preview-fresh-terminal-sessions-defer-reviewer-selection-to-the-server
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/47a1f6bb77baa8ba237757196a62cadf97dc854b
    precision: commit
---
# 2026-10-24-codex-preview-fresh-terminal-sessions-defer-reviewer-selection-to-the-server

Preview fresh terminal sessions defer reviewer selection to the server. Alpha.1 [leaves fresh-thread approval reviewer selection to the server unless invocation overrides are supplied](https://github.com/openai/codex/commit/47a1f6bb77baa8ba237757196a62cadf97dc854b). Explicit profile launches retain their resolved-configuration behavior. This extends server default handling for a separate setting from model and effort; stable 0.164.0 does not contain this fix.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Test first-turn reviewer identity using a server default, explicit override, and named profile. Do not infer reviewer selection from stable model-default behavior.

## Receipt
- https://github.com/openai/codex/commit/47a1f6bb77baa8ba237757196a62cadf97dc854b
