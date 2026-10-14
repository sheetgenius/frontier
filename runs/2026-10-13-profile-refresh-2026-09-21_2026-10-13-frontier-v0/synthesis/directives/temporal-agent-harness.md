# Temporal Agent Harness: final-drafter directives

Profile date: 2026-10-13. Window: 2026-09-21..2026-10-13, inclusive, UTC.

Use the corrected [owning harvest](../../harvest/temporal-agent-harness.primary.md) with its
[crosscheck](../../verify/temporal-agent-harness.crosscheck.md). Preserve the dated profile shape
and primary receipts. Historical correction prose belongs in this research
record; the public body states the current operating rule.

## Must

1. **Install Code Mode on the workers that now execute it.** Supplement the UI-only command with uv add 'temporal-agent-harness[ui,code-mode]==0.6.0'. Every workflow worker executing Code Mode needs pydantic-monty exactly 1.0.0. Scope the worker requirement to Code Mode agents. Keep relevant old histories on compatible workers until a replay-tested, versioned cutover; no universal replay failure or blind-reset remedy was demonstrated.

   Evidence: [owning record, sections 4](../../harvest/temporal-agent-harness.primary.md), [Dependency contract](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/pyproject.toml#L79-L84), [migration](https://github.com/temporal-community/temporal-agent-harness/pull/167).

   Merged inputs: [utility U25](../utility.md).


## Should

1. **Close delivery watches without closing authorization.** First-class messages and opt-in auto approval reached installable prerelease 0.5.0. Keep 0.6.0's unauthenticated all-interface routes, wildcard CORS and interpreter/history cutover explicit. model_callable=False only affects generated tool presentation. Durable waits do not supply client authorization or exactly-once side effects.

   Evidence: [owning record, sections 1, 2, 3, 4](../../harvest/temporal-agent-harness.primary.md), [0.5.0 release](https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.5.0).

   Merged inputs: [thread T23](../thread.md).

2. **Give Jev its actual prerequisites and custody cost.** Auto needs an enabled policy and wired evaluator. Built-in Jev additionally needs the jev extra and TYPESAFE_API_KEY on the worker. Select a concrete evaluator model version, retain argument/optional-state transfer to TypeSafe and workflow history, and explain remembered bare tool names bypass evaluation while allowed. Jev's confidence/irreversibility thresholds do not apply to every evaluator.

   Evidence: [owning record, sections 3](../../harvest/temporal-agent-harness.primary.md), [Jev integration](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/approver.py#L254-L267).

   Merged inputs: [utility U26](../utility.md).

3. **Offer reviewable DAGs as a controlled pilot.** For teams already operating Temporal, inspect a model-written DAG before its separate Run action. DAG Studio is a repository example; Code Mode preflight is packaged. Keep simulated tools, example skip-all defaults and application authorization visible. A successful preflight does not authorize effects or prove no script instruction executed.

   Evidence: [owning record, sections 11](../../harvest/temporal-agent-harness.primary.md), [DAG execution boundary](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/agent_dag/workflow.py#L170-L214).

   Merged inputs: [utility U27](../utility.md).


## Could

1. **Compare where the human wait lives.** Pair the workflow wait with Flue 2.3.0's response-ending approval recipe. Flue's application owns the authenticated route, expiry and idempotent effects; Temporal owns workflow history and worker compatibility. Neither wait guarantees exactly-once effects. Preserve Temporal's prerelease and Flue's stable channel. Add flue to compared_with only if this comparison enters the prose.

   Evidence: [owning record, sections 3, 4](../../harvest/temporal-agent-harness.primary.md), [Temporal 0.6.0 approval design](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/docs/internal/human-in-the-loop-tool-approvals.md#L353-L369), [Flue recipe](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L228-L433), [Temporal activity dispatch](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L3769-L3775).

   Merged inputs: [comparison P15](../comparison.md).


## Resolutions

The install prerequisite is must because the lead feature moved execution onto workflow workers. Replay incompatibility remains an inference requiring a recorded test. Delivery of messages/auto approval closes two old watches, not server authentication or history custody. Keep the comparison list empty unless the optional Flue explanation is used.

