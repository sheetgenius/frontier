# Grok Build: final-drafter directives

Profile date: 2026-10-13. Window: 2026-09-21..2026-10-13, inclusive, UTC.

Use the corrected [owning harvest](../../harvest/grok-build.primary.md) with its
[crosscheck](../../verify/grok-build.crosscheck.md). Preserve the dated profile shape
and primary receipts. Historical correction prose belongs in this research
record; the public body states the current operating rule.

## Must

No additional must-level edit from these six lenses.

## Should

1. **Make the version hold executable and source limits visible.** Put sandbox-off beside stable 1.0.52 installation. Replace the one-line TOML shorthand with grok update --version 1.0.52 and verification of the saved auto-update setting, or valid multiline TOML. Per-run alternatives are --no-auto-update and GROK_DISABLE_AUTOUPDATER=1. A named installation still needs updater policy. The mirror's version label does not identify complete shipping source. Leave current GitSpawn status unresolved; enterprise 1.0.53 and available non-stable builds are not stable 1.0.52.

   Evidence: [owning record, sections 1, 2, 3](../../harvest/grok-build.primary.md), [Installer/updater setting](https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/scripts/install.sh#L207-L345), [Updater](https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-update/src/auto_update.rs#L2637-L2652).

   Merged inputs: [thread T18](../thread.md), [utility U32](../utility.md).

2. **Make goal waiting usable without certifying every worktree path.** Bring native headless background-goal waiting and --background-wait-timeout into the early use decision. Stable includes ownership/deletion repairs; the wrong-checkout fork-shell correction is non-stable 1.0.54. This is not a universal safe-worktree floor or an exactly-once effect guarantee.

   Evidence: [owning record, sections 11, 12](../../harvest/grok-build.primary.md), [goal waiting](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989), [fork fix](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.54.external.md?generation=1791844061749505).

   Merged inputs: [utility U33](../utility.md).

3. **Preserve failure policy when translating hooks.** Add the paired Claude difference to imported-hook advice: Claude 2.1.295+ offers onFailure block, default continue; vendor stable 2.1.287 lacks it. Grok 1.0.52's shipped guide allows calls on missing scripts, crashes, timeouts and refused HTTP requests, with separate oversized-reply and invalid-rewrite denial exceptions. Test failures as well as successful replies after matcher/format translation. Keep claude-code and cursor only for their explained hook/worker boundaries.

   Evidence: [owning record, sections 9, 19](../../harvest/grok-build.primary.md), [Claude 2.1.295](https://github.com/anthropics/claude-code/releases/tag/v2.1.295), [Grok's generation-pinned guide](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964).

   Merged inputs: [comparison P07](../comparison.md).


## Could

No additional could-level edit from these six lenses.

## Resolutions

No must-level edit was assigned. Named installation, updater policy and source correspondence are different contracts. The actual updater controls come from the owning harvest; do not infer a current GitSpawn fix or exposure from mirror changes or silence.

