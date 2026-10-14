---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-temporal-agent-harness-auto-mode-can-approve-or-deny-without-a-person-but-a-remembered-tool-name-bypasses-the-eva
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/pull/142
    precision: merged_pr
  - url: https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.5.0
    precision: github_release
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L600-L606
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_protocol/agent_interface.py#L527-L535
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/approver.py#L254-L267
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/activity.py#L85-L97
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/models.py#L21-L24
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L316-L330
    precision: tagged_commit_file
  - url: https://github.com/temporalio/ai-integrations/blob/681a1d7b97af5ef424f9c479ae0f5db529f517cc/python/typesafe/README.md#L229-L230
    precision: tagged_commit_file
---
# 2026-10-13-temporal-agent-harness-auto-mode-can-approve-or-deny-without-a-person-but-a-remembered-tool-name-bypasses-the-eva

Auto mode can approve or deny without a person, but a remembered tool name bypasses the evaluator. Gated calls park as workflow waits until a model or human decision resolves them. Auto mode adds argument-aware decisions against named criteria sets. In the generic harness, a tool without criteria goes to a person without a model call; evaluator errors or unusable results escalate; a human answer cancels pending evaluation; evaluations are bracketed on the event stream. With the built-in Jev evaluator, confidence below min_confidence (default 0.8) escalates, and an approve judged too irreversible (default ceiling 0.5) escalates. These numeric thresholds are Jev behavior, not independent enforcement on every custom evaluator. A confident DENY resolves the call without asking a person, contrary to the release note that every non-approval reaches one. Jev sends the tool name, description, exact arguments, criteria and optional extra_state to TypeSafe System One from the worker; the request is also an activity input in workflow history. Its default model is jev-latest; the pinned integration README recommends a fixed version because calibration can change. remember=True adds a bare tool name above auto mode, which is bypassed while the tool remains on the by-name allow-list. Subsequent policy replacement or name removal can restore gating. Each evaluation records its criteria set name/version; live criteria are not shown on AgentStatus.

Channel: preview-or-beta (off unless the policy enables it; the Jev evaluator needs the jev extra). Half: both. Date: 2026-09-30.

Operator consequence: Try this for repetitive low-risk decisions with criteria that escalate or deny consequential calls. Enable the policy and wire an evaluator; Jev needs the jev extra and TYPESAFE_API_KEY on the worker. Pin agent.jev_evaluator(model=...) to a concrete version and treat TypeSafe as a processor of gated call arguments. Audit auto_approval_evaluation_ended events for unattended denials. Avoid Always allow on a tool whose arguments should keep being evaluated. No live evaluation or TypeSafe retention behavior was checked.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/pull/142
- https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.5.0
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L600-L606
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_protocol/agent_interface.py#L527-L535
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/approver.py#L254-L267
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/activity.py#L85-L97
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/models.py#L21-L24
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L316-L330
- https://github.com/temporalio/ai-integrations/blob/681a1d7b97af5ef424f9c479ae0f5db529f517cc/python/typesafe/README.md#L229-L230
