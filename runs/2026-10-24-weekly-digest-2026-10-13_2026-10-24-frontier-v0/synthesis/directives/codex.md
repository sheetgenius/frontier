# Codex final-draft directives

Profile date: 2026-10-24. Merged inputs: lens `codex`; thread `codex`. Consistency found no cross-profile fact correction. The [owning harvest](../../harvest/codex.primary.md) controls facts and timestamped selectors.

## Must

No additional must correction was identified by the three lenses.

## Should

1. Lead with a native recovery trial. Use completed-summary persistence, compressed-rollout resume and restored settings to explain what conversation supervision can move into Codex. Move "A pin can hold the command you typed while the process doing the work moves on" beside the daemon guidance. Keep external-effect reconciliation a separate responsibility. Evidence: harvest sections 6 and 8; [completed summaries](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/compact.rs#L858-L890), [compressed resume](https://github.com/openai/codex/commit/76ed3b484d62ccceb9fa512ff4dd139f421814c3) and the [independent daemon contract](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md).
2. Replace the retrospective updater framing and duplicated test instruction with: "Codex 0.163.0 and later enforce the updater's saved network policy; test blocked destinations and broken configuration before enabling automatic updates." Record CLI and daemon versions independently; invoking CLI overrides do not configure the updater. Evidence: harvest section 1 and carry-forward answers; [first stable repair](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8), [released configuration handling](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/cli/src/main.rs#L2459-L2464).
3. Keep the full-history/model-override correction historical, and narrow the older reviewer-price question. The backend behavior already exists in baseline 0.162.1; stricter caller contracts can still apply. Current free ChatGPT-authenticated safety checks do not settle optional API-key comparison billing or cached-review audit coverage. Evidence: harvest sections 34-35 and prior-claim rechecks; [baseline child configuration](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/agent/child_config.rs#L51-L84), [current plan contract](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan).

## Could

None.

## Resolution

The lens asks for recovery in the opening; the thread asks to retain daemon inventory. Give recovery the opening and runtime identity the installation guidance. This resolves emphasis without deleting either mechanism. Neither lens establishes perpetual caching, exactly-once effects or a new reasoning gain. Keep `compared_with: []`; the consistency audit found no earned public cross-harness implementation verdict to add.
