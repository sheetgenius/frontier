# DeepSeek Harness: final-drafter directives

Profile date: 2026-10-13. Window: 2026-09-21..2026-10-13, inclusive, UTC.

Use the corrected [owning harvest](../../harvest/deepseek-harness.primary.md) with its
[crosscheck](../../verify/deepseek-harness.crosscheck.md). Preserve the dated profile shape
and primary receipts. Historical correction prose belongs in this research
record; the public body states the current operating rule.

## Must

1. **Put evaluation conditions before the copyable launch.** Before npx @deepseek-ai/dsh@0.2.0-rc.2 web, require evaluation-only use in an outer disposable environment without valuable host credentials and a loopback listener. Before the first request, disable session-log-deepseek and plugin-package-inventory-deepseek, set DSH_TELEMETRY_DISABLED=1 and verify composed settings with --dump-config. Keep a reviewed lockfile for repeatability. Real Web login does not separate a same-user command that can read the cookie-signing key and reach operator APIs; this is a static path, not a reproduced remote pre-auth exploit.

   Evidence: [owning record, sections 2, 18](../../harvest/deepseek-harness.primary.md), [Persistent signing key](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/browser-auth.ts#L125-L177).

   Merged inputs: [utility U07](../utility.md).

2. **Replace the headless correction recital with the current rc contract.** Remove "Our previous recommendation at 0.1.5-rc.2 was wrong." State current rc NDJSON/resume support directly. Retain session-log upload enabled on eligible DeepSeek-adapter requests by default and the distinction between login and inner principal separation. OTel opt-out does not disable session-log upload.

   Evidence: [owning record, sections 2, 10, 18](../../harvest/deepseek-harness.primary.md), [Current headless flags](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/bundle/headless/src/startup.ts#L43-L44).

   Merged inputs: [thread T19](../thread.md).


## Should

1. **Bring one controlled rc use forward.** Choose account-funded sign-in/search or headless NDJSON/resume as the early trial, paired with the privacy settings above and explicit maxConsecutiveWakes. Keep persistent working-directory state and reasoning translation in the alpha lane. Removal of the old default three-wake cap is not a stopping budget.

   Evidence: [owning record, sections 8, 10, 19](../../harvest/deepseek-harness.primary.md), [Rc route release](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.2).

   Merged inputs: [utility U08](../utility.md).

2. **Flatten the tone and put alpha in the capability heading.** Use "DeepSeek's default rc enables session-log upload, and same-user commands can read its Web cookie signing key." Replace "Directory changes finally survive resume" with "Alpha persists Session directory changes." Preserve API-reach prerequisites, independent process/grant lifetimes and missing-directory recovery. Neither edit weakens the mechanism or broadens alpha delivery.

   Evidence: [owning record, sections 2, 18, 23](../../harvest/deepseek-harness.primary.md), [section 2 primary source](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/src/index.ts#L51-L77), [section 2 primary source](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/README.md#L33-L47), [section 2 primary source](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/app-boot/src/profile-context.ts#L39-L55), [section 18 primary source](https://github.com/deepseek-ai/deepseek-harness/discussions/8678), [section 23 primary source](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2).

   Merged inputs: [skeptic S08](../skeptic.md), [skeptic S09](../skeptic.md).


## Could

No additional could-level edit from these six lenses.

## Resolutions

The owning harvest decides the Team-delivery disagreement: alpha.2 removes the outbox, retries and resend deduplication; do not import the earlier crosscheck's opposite direction. The rc privacy reversal is real; alpha directory persistence does not reach rc. Keep codex/claude-code only as wrapper invocations, not standalone permission defaults.

