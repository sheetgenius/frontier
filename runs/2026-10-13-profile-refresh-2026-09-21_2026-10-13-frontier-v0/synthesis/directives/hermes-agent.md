# Hermes Agent: final-drafter directives

Profile date: 2026-10-13. Window: 2026-09-21..2026-10-13, inclusive, UTC.

Use the corrected [owning harvest](../../harvest/hermes-agent.primary.md) with its
[crosscheck](../../verify/hermes-agent.crosscheck.md). Preserve the dated profile shape
and primary receipts. Historical correction prose belongs in this research
record; the public body states the current operating rule.

## Must

1. **State current floors and vault defaults without a correction section.** Remove "Retire the old v2026.9.7 floor" and "Our earlier profile got this wrong." State that the Git-filter and LSP startup repairs require v0.21.6, and the repaired unattended Gateway branch requires v0.21.7. The credential vault is available with browser tools and is on by default, empty until populated; real-profile browsing remains opt-in. Preserve earlier guard checks and separate notifier/container/YOLO paths.

   Evidence: [owning record, sections 1, 2, 14](../../harvest/hermes-agent.primary.md), [Repaired unattended branch](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L910-L942).

   Merged inputs: [thread T07](../thread.md).


## Should

1. **Make installation and unattended policy one early choice.** Choose pinned v0.21.7 source at 71d34bad1045610252eda02ee79549436896e784 or nousresearch/hermes-agent@sha256:444b42594e7f467425872fc35e077a227d377f0fe0726bc818706d62175fad8b. The bare installer selects main; public PyPI is retired. Inspect approvals.unattended_mode before upgrading: previously guardian-approved jobs can now block, and saved approve can become effective. Keep browser placement and provider-resume uses bounded. v0.22.0 was published on October 14 UTC and does not replace this cutoff.

   Evidence: [owning record, sections 2, 4, 5, 31](../../harvest/hermes-agent.primary.md), [unattended branch](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L910-L942), [v0.21.7 release and receipt](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7), [installer default](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/scripts/install.sh#L23-L25).

   Merged inputs: [utility U30](../utility.md).

2. **Report the scanner-removal trade on both sides.** Say Hermes removed bundled tirith in v0.21.6. On the removal author's small command corpus, everyday flags fell from 12/24 to 5/24 and attack catches from 14/16 to 13/16 with core alone. Two detector shapes moved into core; no tirith replacement is automatically installed. Attribute the measurement and say it was not independently reproduced. If the lost catches were part of policy, operate and test tirith separately. This is a coverage/usability trade, not proof models outgrew the scanner.

   Evidence: [owning record, sections 6](../../harvest/hermes-agent.primary.md), [removal rationale](https://github.com/NousResearch/hermes-agent/commit/911da42e9e03ba8594ab2af5dfd1e50e7e721e3e), [two built-in detector additions](https://github.com/NousResearch/hermes-agent/commit/68dd9927691e66058bf2347937e7dc276ceb50cd).

   Merged inputs: [lens L03](../lens.md), [utility U31](../utility.md), [skeptic S04](../skeptic.md).

3. **Flatten the tagline while keeping the repair.** Use "Hermes v0.21.7 makes webhook approvals consult the configured unattended policy." Remove the "finally consult" sting; keep the path and policy qualifications in the body.

   Evidence: [owning record, sections 2](../../harvest/hermes-agent.primary.md), [repaired unattended branch](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L910-L942).

   Merged inputs: [skeptic S03](../skeptic.md).


## Could

No additional could-level edit from these six lenses.

## Resolutions

The three scanner directives are one edit. Their numbers and attribution agree with the owning harvest; retain both fewer routine flags and one fewer attack catch. The apparent late stable conflict is resolved by UTC publication time in harvest section 31. Keep the old Paperclip comparison removed.

