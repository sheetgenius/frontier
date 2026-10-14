---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-2-3-0-gives-execution-interceptors-the-agent-s-name-on-every-step-which-per-agent-policy
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/client.ts#L492-L495
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/blob/658325942b0f4eecd888f9698ab0bebb3b749163/packages/runtime/src/client.ts#L492
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/reference/events.md#L623-L659
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L14
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/issues/785
    precision: official_docs
---
# 2026-10-13-flue-2-3-0-gives-execution-interceptors-the-agent-s-name-on-every-step-which-per-agent-policy

2.3.0 gives execution interceptors the agent's name on every step, which per-agent policy interceptors needed. Interceptors registered through `instrument()` wrap agent, model, tool and task execution, and they can skip the wrapped work. Before 2.3.0 only the outer `agent` operation carried `ctx.agentName`; model, tool and shell steps did not. A rule keyed on agent identity therefore never fired at the step level and fell through to its default. In the reported case the default refused, so runs failed. A default that allowed would have passed every agent's steps without a sound.

Channel: tagged-release. Half: defect. Date: 2026-10-12.

Operator consequence: If you enforce per-agent rules in an interceptor (tool allowlists, model routing, audit tags), upgrade to 2.3.0 and test that each agent's steps now take their own branch. Make the default branch fail closed either way. For session-scope steps, the reference page still documents the old field list, so trust the 2.3.0 code over the docs. Like section 4, this shipped as a changelog line, not an advisory.

## Receipt
- https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/client.ts#L492-L495
- https://github.com/withastro/flue/blob/658325942b0f4eecd888f9698ab0bebb3b749163/packages/runtime/src/client.ts#L492
- https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/reference/events.md#L623-L659
- https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L14
- https://github.com/withastro/flue/issues/785
