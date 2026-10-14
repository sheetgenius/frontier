---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-temporal-agent-harness-0-6-0-adds-workflow-held-gemini-conversations-and-stops-retrying-nontransient-gemini-4xx
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/pull/165
    precision: merged_pr
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/ai_sdks/google_genai_plugin/_interactions_conversation.py#L1-L31
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/ai_sdks/google_genai_plugin/_errors.py#L10-L35
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L3444-L3452
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/callback_tools/wiki_agent/workflow.py#L156
    precision: tagged_commit_file
---
# 2026-10-13-temporal-agent-harness-0-6-0-adds-workflow-held-gemini-conversations-and-stops-retrying-nontransient-gemini-4xx

0.6.0 adds workflow-held Gemini conversations and stops retrying nontransient Gemini 4xx errors. Per the PR, chaining streamed Gemini Interactions calls with `previous_interaction_id` broke on the third tool result of a turn with a 400. The optional `InteractionConversation` helper, adopted by five example loops, keeps the conversation in workflow state and sends all of it on every call; custom agents must adopt it themselves, and the module says "every model call carries the whole conversation in its activity input", so a long session's history grows with every model call and inputs over 1.5 MB go to the default local offload directory. A Gemini 4xx other than 408 and 429 is now non-retryable; before, the PR says, the turn hung instead of failing. The examples also now pass `injections=None` to `run_tool`, so a model argument named `injections` cannot fill a tool's workflow-supplied parameters. The `run_tool` signature itself still takes `injections` as a keyword next to `**kwargs`, and docs/internal/agents-as-subagents.md still shows `run_tool(call.id, ..., **args)`.

Channel: preview-or-beta (0.6.0). Half: both. Date: 2026-10-03 (released; merged 2026-10-02).

Operator consequence: Gemini users on 0.5.0 or earlier should upgrade for the nontransient-error classification and adopt the helper in custom loops where needed. Size history retention and payload offload for long sessions, and do not rely on the single-host `/tmp/temporal-large-payloads` default across workers. If your own agent dispatches `run_tool(call.id, tool, **call.arguments)`, pass `injections=` explicitly.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/pull/165
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/ai_sdks/google_genai_plugin/_interactions_conversation.py#L1-L31
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/ai_sdks/google_genai_plugin/_errors.py#L10-L35
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L3444-L3452
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/callback_tools/wiki_agent/workflow.py#L156
