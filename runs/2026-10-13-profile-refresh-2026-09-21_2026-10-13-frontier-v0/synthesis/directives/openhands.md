# OpenHands: final-drafter directives

Profile date: 2026-10-13. Window: 2026-09-21..2026-10-13, inclusive, UTC.

Use the corrected [owning harvest](../../harvest/openhands.primary.md) with its
[crosscheck](../../verify/openhands.crosscheck.md). Preserve the dated profile shape
and primary receipts. Historical correction prose belongs in this research
record; the public body states the current operating rule.

## Must

1. **Put backend compatibility and the replacement image in Channel.** Before upgrading Canvas, coordinate separately managed services. Canvas 1.27.1 requires agent-server >=1.51.0; 1.54.0 matches its bundled feature set, with automation 1.19.3. Put "skip Docker 1.27.0" beside ghcr.io/openhands/agent-canvas:1.27.1. Canvas's beta product label is separate from non-prerelease package delivery.

   Evidence: [owning record, sections 3, 7, 27](../../harvest/openhands.primary.md), [bundled defaults](https://github.com/OpenHands/OpenHands/blob/v1.27.1/config/defaults.json#L3-L10), [Docker repair](https://github.com/OpenHands/OpenHands/pull/18343).

   Merged inputs: [utility U11](../utility.md).


## Should

1. **Keep the local secret boundary accurate.** Retain default-local profile secret selection as launch configuration, not a terminal credential boundary. The automation-key alias survives subprocess sanitization and the secret-value route lacks a conversation-profile check. Mark this as a source-derived path, not a reproduced exploit. Credit SDK 1.51.0 delegated tool/MCP restrictions and whole-conversation Docker separately; the execution-only design did not ship.

   Evidence: [owning record, sections 4, 5, 14](../../harvest/openhands.primary.md), [Secret-value route](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/settings_router.py#L492-L522).

   Merged inputs: [thread T09](../thread.md).

2. **Bring reviewed automation drafts into the opening.** Let the agent fill and test an automation draft, then review trigger, schedule and profile before creation under the creator's identity. Treat transcript audience and local secret reach as separate decisions; this form capability does not repair either.

   Evidence: [owning record, sections 10](../../harvest/openhands.primary.md), [form tool](https://github.com/OpenHands/OpenHands/pull/17201), [persisted drafts/tests](https://github.com/OpenHands/OpenHands/pull/17242).

   Merged inputs: [utility U12](../utility.md).

3. **Record the model past both selection boundaries.** Replace the model-pin advice with recording the selected model, outgoing/requested ID and runtime-returned ID where available. SDK 1.54.0 repairs Gemini selection transport; Gemini 0.64.0 can independently rewrite selected Flash IDs under its latest-Flash access gate. No backend response was observed. Set compared_with to [gemini-cli] if this is the only paired, decision-bearing comparison; keep Claude, Codex and Pi in the local ACP roster, without implying Cloud support or particular installed child versions.

   Evidence: [owning record, sections 9, 23](../../harvest/openhands.primary.md), [Flash request mapping](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/models.ts#L144-L164), [access gate](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/config.ts#L3585-L3618), [selection-transport repair](https://github.com/OpenHands/software-agent-sdk/pull/5579), [SDK model-selection repair](https://github.com/OpenHands/software-agent-sdk/commit/6d51e7262fc234586ff5e8e519ce5a658d334cdf), [Gemini request mapper](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/core/modelMappingContentGenerator.ts#L44-L90).

   Merged inputs: [consistency C06](../consistency.md), [comparison P05](../comparison.md).


## Could

No additional could-level edit from these six lenses.

## Resolutions

Consistency accepted the four-name ACP roster as comparison metadata; comparison required a paired consequence. Apply EDITORIAL.md's stricter comparison bar: narrow to Gemini unless the drafter adds independently supported paired consequences for the other engines. The owner records settle the two model layers, not a served-model outcome.

