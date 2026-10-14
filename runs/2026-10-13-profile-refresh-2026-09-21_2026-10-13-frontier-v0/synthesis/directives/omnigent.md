# Omnigent: final-drafter directives

Profile date: 2026-10-13. Window: 2026-09-21..2026-10-13, inclusive, UTC.

Use the corrected [owning harvest](../../harvest/omnigent.primary.md) with its
[crosscheck](../../verify/omnigent.crosscheck.md). Preserve the dated profile shape
and primary receipts. Historical correction prose belongs in this research
record; the public body states the current operating rule.

## Must

1. **State budget and outage behavior without correction prefixes.** Remove both "Correction:" prefixes. Missing total_cost_usd with nonzero reported tokens triggers ASK, with root-scoped approval only while that predicate holds; it is not unconditional DENY or a complete mixed-history price check. Claude/Codex tool-call outage hooks emit ASK. Whether that stops the deployed harness in its chosen mode needs a paired test. Keep response/tool-result timeout fall-through separate from tool-call admission.

   Evidence: [owning record, sections 6, 7](../../harvest/omnigent.primary.md), [Outage ASK implementation](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/native/native_policy_hook.py#L543-L584).

   Merged inputs: [thread T22](../thread.md).


## Should

1. **Describe the trust movement without promising time saved.** Replace "Omnigent saves terminal babysitting by moving consequential trust decisions into configuration" with the supported movement of decisions into configuration. Particular dialogs disappear and some shell approvals are added; net human attention savings are unmeasured.

   Evidence: [owning record, sections 3, 5](../../harvest/omnigent.primary.md), [Pre-seeded configuration](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/harnesses/claude_native/bridge.py#L2555-L2572), [shell fallback](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/github.py#L943-L986).

   Merged inputs: [utility U48](../utility.md).

2. **Make reusable-agent installation useful after the host patch.** Keep 0.18.0 execution-host upgrades and helper/session restarts first. Then offer omnigent agent add from a trusted GitHub repository, authority review and a new session. Single-user installs admit trusted source tools; multi-user bundles reject server-side source tools and require MCP migration. Re-uploading does not rewrite old sessions.

   Evidence: [owning record, sections 1, 9, 12, 13](../../harvest/omnigent.primary.md), [agent-add command](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/cli.py#L11742-L11830), [migration contract](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/docs/AGENT_YAML_SPEC.md#L570-L588).

   Merged inputs: [utility U49](../utility.md).

3. **Test the last policy answer, not just emitted JSON.** Extend the outage acceptance test to record installed Claude/Codex versions, bypass/auto mode, admitted Claude mods and guard presence. Observe actual execution after ASK: a released Claude mod can approve an ask and skip the classifier, while the ask-holding guard design is only on cutoff main. Do not claim a paired bypass was demonstrated. Keep claude-code and codex as the explained composition comparisons.

   Evidence: [owning record, sections 5, 6](../../harvest/omnigent.primary.md), [Omnigent outage ASK](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/native/native_policy_hook.py#L543-L584), [Claude released guard](https://github.com/anthropics/claude-code/blob/2301018b1f61/mods/sec-default/hooks/register.ts#L67-L114), [main-only ask-holding design](https://github.com/anthropics/claude-code/blob/bf2323b3021c9d3db7a31e1e7d61068c3f704497/mods/sec-default/README.md).

   Merged inputs: [comparison P08](../comparison.md).


## Could

No additional could-level edit from these six lenses.

## Resolutions

Skeptic accepted the tagline as a local workflow interpretation; utility objected to its possible net-time promise. Preserve the local mechanism and remove the unmeasured aggregate implication. The owning code overrides the old outage abstention and unconditional-cost-denial readings. Emitting ASK and honoring ASK remain separate facts.

