# GitHub Copilot CLI: final-drafter directives

Profile date: 2026-10-13. Window: 2026-09-21..2026-10-13, inclusive, UTC.

Use the corrected [owning harvest](../../harvest/github-copilot-cli.primary.md) with its
[crosscheck](../../verify/github-copilot-cli.crosscheck.md). Preserve the dated profile shape
and primary receipts. Historical correction prose belongs in this research
record; the public body states the current operating rule.

## Must

No additional must-level edit from these six lenses.

## Should

1. **Complete the rollout recipe at the installation decision.** Keep stable 1.0.97, sandbox GA from 1.0.93, default-off status, settings.json migration and updater opt-out together. User setting keys left in config.json are ignored. Give /sandbox enable interactively or copilot --sandbox -p ... for each CI job, then /sandbox status and /sandbox policy verification. Preserve platform prerequisites, unsupported-host behavior and managed sandbox.failIfUnavailable/allowBypass requirements. Keep Plugin4Shell as a named-repair watch. Do not reuse missing-checksum or macOS-local-access-only advice.

   Evidence: [owning record, sections 2, 3, 7, 11](../../harvest/github-copilot-cli.primary.md), [Ignored config.json settings](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L45), [Sandbox usage](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md).

   Merged inputs: [thread T16](../thread.md), [utility U44](../utility.md).

2. **Offer authenticated contained shell work as a bounded trial.** After enabling containment, try a harmless authenticated Git operation through narrow credential injection, then test a blocked destination and localhost on the relevant OS. Keep credential-file/unmasked-variable exposure, Windows cooperative egress and macOS self-connect restrictions. Masking is not an exfiltration-resistance measurement.

   Evidence: [owning record, sections 3, 4](../../harvest/github-copilot-cli.primary.md), [credential proxy and platform limits](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md).

   Merged inputs: [utility U45](../utility.md).


## Could

1. **Compare the actual credential-brokerage channels.** Compare Copilot 1.0.92+ stable brokerage with Codex 0.163.0 previews' proxy-dependent default-off masking, absent from Codex stable 0.162.1. Distinguish withholding ambient GITHUB_TOKEN from masking secrets and preserve configuration and file-exposure limits. Add codex to compared_with only if this paired explanation is published.

   Evidence: [owning record, sections 4](../../harvest/github-copilot-cli.primary.md), [Copilot release record](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L60-L75), [injection scope](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md?plain=1#L151-L157), [Codex masking change](https://github.com/openai/codex/commit/bd274564e1b1b3febb3886d274e6d97c2a3d275e).

   Merged inputs: [comparison P14](../comparison.md).


## Resolutions

No must-level edit was assigned. GA and enabled containment remain different facts; release notes and current policy documents do not establish effective enforcement on a specific host. Keep claude-code for rule-file ingestion, without implying equal trust semantics.

