# Codex: final-drafter directives

Profile date: 2026-10-13. Window: 2026-09-21..2026-10-13, inclusive, UTC.

Use the corrected [owning harvest](../../harvest/codex.primary.md) with its
[crosscheck](../../verify/codex.crosscheck.md). Preserve the dated profile shape
and primary receipts. Historical correction prose belongs in this research
record; the public body states the current operating rule.

## Must

1. **State the trust rule directly.** Replace the sentence beginning "Contrary to our earlier CI guidance" with: "Codex reads project AGENTS.md unless the project is explicitly Untrusted; project config, hooks and exec policies have a separate trust gate." Keep the historical correction in the research record.

   Evidence: [owning record, sections 6](../../harvest/codex.primary.md), [Explicit-Untrusted gate](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/agents_md.rs#L63-L66).

   Merged inputs: [thread T01](../thread.md).


## Should

1. **Put the daemon support limit beside the runtime choice.** Identify 0.162.1 as stable CLI delivery, then put the daemon's experimental lifecycle contract beside the recommendation for production embedders. Preserve eligible interactive attachment, retained startup environment, independent server pinning, explicit standalone-pin exceptions and the fact that codex exec does not use this daemon. A daemon restart does not downgrade an already advanced server.

   Evidence: [owning record, sections 1, 2](../../harvest/codex.primary.md), [daemon support statement](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L1-L9).

   Merged inputs: [utility U47](../utility.md).

2. **Close only the answered reviewer question.** Keep opt-in OTLP export of completed synchronous reviewer assessments as partial progress on the feature's auditability question. It excludes cached V2 approvals. Guardian V2 remains default-off, the older reviewer remains a separate default-on feature, and usage labels do not establish prices or billing ownership. Keep CLI and daemon identities separate.

   Evidence: [owning record, sections 7](../../harvest/codex.primary.md), [Assessment export](https://github.com/openai/codex/commit/30758e5c77c14e6ddcc53a6c7407a477fed4ac76).

   Merged inputs: [thread T02](../thread.md).

3. **Give orchestration a bounded trial.** Beside the runtime decision, offer ranked tool discovery and settlement-order streaming in stable 0.162.x. Discovery requires code_mode_tool_search=true and model support; fresh V2 child dynamic-tool inheritance separately requires multi_agent_v2_dynamic_tools=true. Both flags are off by default. Preserve ordinary nested-tool policy and avoid a measured speedup claim.

   Evidence: [owning record, sections 20, 21](../../harvest/codex.primary.md), [discovery](https://github.com/openai/codex/commit/4d15794336668d6098c0e36eb8e96cbbbfdb1d2d), [inheritance](https://github.com/openai/codex/commit/e4e33a56b073b5d9a550aaf513798480f88e4a38).

   Merged inputs: [utility U46](../utility.md).


## Could

1. **Use the updater comparison only if it changes the pinning advice.** Explain that Copilot updates its executable, while an eligible Codex daemon-only update can leave the client command fixed. Record both Codex identities. Add github-copilot-cli to compared_with only if this paired explanation is published; retain standalone-pin and exec qualifications.

   Evidence: [owning record, sections 1, 2](../../harvest/codex.primary.md), [Codex updater](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L48-L68), [Copilot updater default](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L452-L453), [Copilot opt-out](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md?plain=1#L144).

   Merged inputs: [comparison P12](../comparison.md).


## Resolutions

The lenses agree on the facts. The reviewer feature is partly answered, not closed wholesale. Stable CLI delivery and an experimental daemon support contract are different statements. Keep compared_with empty unless the optional Copilot divergence enters the prose.

