---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omnigent-governance-layering-on-policy-server-outage-native-claude-codex-tool-calls-now-defer-to
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/6429
    precision: merged_pr
---
# 2026-09-21-omnigent-governance-layering-on-policy-server-outage-native-claude-codex-tool-calls-now-defer-to

Governance layering: on policy-server outage, native Claude/Codex tool calls now defer to the harness's own dialog. This is the first documented answer to the contract's layering question for a failure case. Before v0.13.0, if the Omnigent policy server was unreachable, claude-native and codex-native PreToolUse hooks denied every tool call (meta-harness refuses). From v0.13.0, PreToolUse returns no opinion and the wrapped harness's native approval dialog decides; `UserPromptSubmit` stays fail-closed as the only pre-turn gate for native sessions. Other native harnesses (hermes, opencode, kimi) keep fail-closed. Separately, #6055 made agent-declared output policies (`response`/`llm_response`) actually enforce on runner-relayed claude-sdk sessions: before v0.13.0 a DENY verdict let the denied text stream and persist as a normal message.

Channel: tagged-release. Half: both. Date: 2026-09-09 (v0.13.0).

Operator consequence: For the Omnigent + Claude Code and Omnigent + Codex pairs on v0.13.0+, an Omnigent tool DENY is not guaranteed during a policy-server outage; the harness's own permission mode governs. If the harness is in a bypass or auto mode, nothing asks. Keep a harness-native deny list for anything that must not run, not only an Omnigent policy. If you used output policies on claude-sdk before v0.13.0, they were advisory; re-audit transcripts.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/6429
