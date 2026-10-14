# Flue: final-drafter directives

Profile date: 2026-10-13. Window: 2026-09-21..2026-10-13, inclusive, UTC.

Use the corrected [owning harvest](../../harvest/flue.primary.md) with its
[crosscheck](../../verify/flue.crosscheck.md). Preserve the dated profile shape
and primary receipts. Historical correction prose belongs in this research
record; the public body states the current operating rule.

## Must

1. **Qualify installation with the attestation-policy choice.** Qualify "Install the stable 2.3.0 package set" for deployments requiring attestations. Newest-attested 2.2.2 lacks 2.3.0's finish-hook, process-group and interceptor-identity repairs and is not a protected fallback. Put the repair/provenance trade together and direct readers to the root changelog at the tag. Close the allowed-tools wording watch at 2.1.1 without implying the field now enforces anything.

   Evidence: [owning record, sections 1, 2, 4, 5, 6, 10](../../harvest/flue.primary.md), [2.3.0 registry record](https://registry.npmjs.org/@flue%2Fruntime/2.3.0), [2.2.2 attestation](https://registry.npmjs.org/-/npm/v1/attestations/@flue%2fruntime@2.2.2), [Public release/test machinery removal](https://github.com/withastro/flue/commit/95a8c86244557e4c257b0fbd7eef2481de2c2150).

   Merged inputs: [utility U22](../utility.md), [thread T14](../thread.md).

2. **Describe sandbox output as a preview feature.** Replace "Stable gives up live sandbox output" with "Sandbox onOutput streaming remains preview-only." Put next 2.2.0-next.1 and its missing later stable repairs in the initial channel choice. It never shipped stable, so this is not a loss of an already-stable API.

   Evidence: [owning record, sections 7](../../harvest/flue.primary.md), [Addition](https://github.com/withastro/flue/commit/4827d6ee8dd3c3de714059301887a3872c6ac7a6), [next package](https://registry.npmjs.org/@flue%2Fruntime/2.2.0-next.1).

   Merged inputs: [utility U23](../utility.md).

3. **Count removed files, not tests.** Replace "27 public tests" with "27 public test files" in the 2.3.0 Changesets/release-workflow removal sentence. Keep the abort/deadline examples and the loss of public regression evidence. Do not infer that private testing ended.

   Evidence: [owning record, sections 1](../../harvest/flue.primary.md), [section 1 primary source](https://github.com/withastro/flue/commit/95a8c86244557e4c257b0fbd7eef2481de2c2150), [section 1 primary source](https://github.com/withastro/flue/commit/deee93b40d275ecc9a50c50af2158f20089d54bc), [section 1 primary source](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L3-L16).

   Merged inputs: [skeptic S01](../skeptic.md).


## Should

1. **Join the Pi migration to the exact patch it absorbed.** Near "Lock the Pi pair," say 2.3.0 removed Flue's Claude-ID rewrite once Pi corrected its catalog. Keep the pi-ai/pi-agent-core ^1.1.0 resolution cost. Azure provider keys and model-specifier provider prefixes change to azure; the API ID azure-openai-responses and AZURE_OPENAI_* variables stay. Do not import Pi CLI trust or MCP defaults from these libraries.

   Evidence: [owning record, sections 3, 6](../../harvest/flue.primary.md), [Pi 1.0.3 changelog](https://github.com/earendil-works/pi/blob/v1.0.3/packages/ai/CHANGELOG.md#L5-L11), [migration note](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L7), [2.2.2 rewrite](https://raw.githubusercontent.com/withastro/flue/refs/tags/@flue/runtime@2.2.2/packages/runtime/src/runtime/providers.ts), [2.3.0 direct registration](https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/runtime/providers.ts#L31-L33).

   Merged inputs: [consistency C03](../consistency.md), [lens L04](../lens.md).

2. **Bring a usable history or approval pattern forward.** Offer bounded SDK history reads or persisted approval early. React still loads the whole conversation. The approval recipe ends the response, stores exact arguments and resumes from application state; Flue has no built-in approval service. The application owns authenticated decisions, expiry and idempotent effects.

   Evidence: [owning record, sections 11, 12](../../harvest/flue.primary.md), [history notes](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L34), [approval composition](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L228-L433).

   Merged inputs: [utility U24](../utility.md).

3. **Name the outstanding feature without imputing issue handling.** Replace "Inspectable source still helps; issue closure alone proves little..." with "Conversation deletion remains a feature request in Discussion #855." Fourteen closures were issue-to-Discussion conversions preserving open requests; do not imply they were claimed as implemented.

   Evidence: [owning record, sections 1](../../harvest/flue.primary.md), [section 1 primary source](https://github.com/withastro/flue/commit/95a8c86244557e4c257b0fbd7eef2481de2c2150), [section 1 primary source](https://github.com/withastro/flue/commit/deee93b40d275ecc9a50c50af2158f20089d54bc), [section 1 primary source](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L3-L16).

   Merged inputs: [skeptic S06](../skeptic.md).


## Could

No additional could-level edit from these six lenses.

## Resolutions

The source proves removal of 27 test files, not 27 individual tests. Preview-to-stable feature choice is not a stable regression. Attestation and runtime fixes do not share a safe fallback in this record. The exact absorbed catalog patch earns the Pi comparison, while issue conversion establishes request status rather than vendor motive.

