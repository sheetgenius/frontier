---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-deepseek-harness-sandbox-escalation-dead-loops-any-danger-full-access-session-and-rc-7
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/discussions/1069
    precision: official_docs
---
# 2026-08-17-deepseek-harness-sandbox-escalation-dead-loops-any-danger-full-access-session-and-rc-7

Sandbox escalation dead-loops any danger-full-access session, and rc.7 still ships the loop.

A session on the `danger-full-access` preset (sandbox `danger-full-access` + approval `never`) can be driven into an unbreakable retry loop. `approveEscalation()` does `if (!(WIDER_MODES[effectiveMode] ?? []).includes(mode)) throw new Error(`sandbox escalation to "${mode}" is not strictly wider than this call's current "${effectiveMode}" mode`)`. `WIDER_MODES` has no `danger-full-access` key, so from that mode every escalation throws  --  there is no wider mode to name. Meanwhile the tool schema keeps advertising the escalation arguments regardless, by design: the file's own comment says the widening table is "Checked at EXECUTION, never baked into a tool schema  --  the schema's enum is ESCALATION_TARGETS, because schemas are registry-global while the effective mode is per-call truth." So bash, pwsh, edit and write keep offering `sandbox_permissions` in a session where no value can ever succeed, the model keeps filling it in, and every call is refused with a message that reads like an invitation to pick a wider value. Reported 2026-08-14 by wizzy-yang against rc.6 with source line references, reproduced by four other users through 2026-08-17, and a commenter who pulled master at rc.7 confirms the code is unchanged. The report is model-independent: it reproduces through an OpenAI-compatible gateway, and models in that family tend to send the escalation arguments pre-emptively rather than only after a denial marker.

Channel: preview-or-beta. Ancestry: Verified in source at the tag rather than taken from the report: packages/sandbox/sandbox/src/escalation.ts at 99f6f02 (the sole tag, prerelease) still defines `WIDER_MODES` with keys `read-only` and `workspace-write` only, and `ESCALATION_TARGETS = ['workspace-write', 'danger-full-access']`. The file's last change is 2dc62497ce (2026-07-14), well before the tag, so nothing in rc.7 addressed it.

Operator consequence: Watch, and work around it rather than waiting. If you use the `danger-full-access` preset with a non-DeepSeek model, expect the agent to burn tokens in a refusal loop. The no-code workaround with the best evidence behind it is one line in your project or home `AGENTS.md` telling the model never to send `sandbox_permissions` or `justification`; under `danger-full-access` those fields have no success path, so stripping them loses nothing. Report follow-ups in Discussions, since there is no issue tracker. Structurally this is what a schema that is registry-global while policy is per-call costs  --  worth remembering when evaluating any harness that separates the two.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/discussions/1069
