# Paperclip final-draft directives

Profile date: 2026-10-24. Merged inputs: consistency `paperclip:C03`; lens `paperclip`; thread `paperclip`. The [owning harvest](../../harvest/paperclip.primary.md) controls facts and timestamped selectors, including corrected nightly tag/container observations.

## Must

No additional must correction was identified by the three lenses.

## Should

1. Keep the stable migration lead and concise takeaway: "Paperclip 2026.1023.0 brings Operator-grant expansion and durable accounting to stable; inspect persisted human grants and reconcile interrupted runs before reopening dispatch." Preserve old-writer draining and lock files. Existing human grant seeding differs from the separate new-agent defaults; missing rows can be inserted while existing scoped rows survive. Receipts are not a cap on the provider's final charge. Evidence: harvest sections 1-2 and carry-forward answers; [stable release](https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0), [grant seeding](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/principal-access-compatibility.ts#L17-L135), [committed settlement](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/run-cost-accounting.ts), [writer-drain runbook](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L42-L56).
2. Keep beta removals and repairs visibly separate from stable. Pipelines loss is an operating/export migration obligation despite retained rows; Cases is not its automatic replacement. Filesystem-history authorization removal changes policy; it does not show models absorbed confidentiality enforcement. Stable still lacks the live-review replacement guard and the corrected soft-budget wording. Retain uncompleted shorter-manual and browser-lifecycle trials. Evidence: harvest sections 12, 14, 16-18 and 25; [Pipelines removal](https://github.com/paperclipai/paperclip/commit/90777488945fc2ceba6d27c407516d4a1df69b54), [historical authorization removal](https://github.com/paperclipai/paperclip/commit/813e808af462b6a6f9db38b6791e3bfe8465b51e), [beta Cases contract](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/feature-map/cases.md), [crosscheck](../../verify/paperclip.crosscheck.md).
3. Preserve the runtime sentence's numbers: declared Codex 0.160.0 and Claude Code 2.1.286, installed local Codex preference, remote Codex >=0.149.0 and <0.161.0. Add: "The standalone Codex recommendation, 0.164.0, is outside this remote range; qualify a compatible Paperclip worker separately before upgrading it." Evidence: harvest section 6 and prior-claim rechecks; [remote predicate](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-runtime-compatibility.ts), [local resolution](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/paperclip-runner/src/drivers/codex/codex-command.ts), [standalone Codex release](https://github.com/openai/codex/releases/tag/rust-v0.164.0). Exclusion follows from the numeric bounds; no failed worker launch was reproduced.

## Could

None.

## Resolution

The stable promotion and beta changes are different events, so the lenses' emphasis merges without borrowing preview repairs into stable. Consistency resolves the apparent version tension by preserving wrapper-owned pins and adding the concrete remote-upgrade consequence. Do not replace embedded Pi/Copilot/Claude numbers with current standalone recommendations. Current native-driver defaults remain Paperclip choices. Keep `compared_with: []`; integration facts do not require a comparative verdict. Use the owning harvest's later nightly observations rather than restoring an earlier absent-tag or container mismatch claim.
