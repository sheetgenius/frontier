# DeepSeek Harness final-draft directives

Profile date: 2026-10-24. Merged inputs: lens `deepseek-harness`; thread `deepseek-harness`. Consistency found no cross-profile fact correction. The [owning harvest](../../harvest/deepseek-harness.primary.md) controls facts and timestamped selectors.

## Must

No additional must correction was identified by the three lenses.

## Should

1. Base the system-level interpretation on SDK saved-session resume replacing conversation reconstruction. Preserve session ID, history and working-directory scope; do not imply shell/browser process restoration or persistent PTC memory across resume. Evidence: harvest section 4; [rc SDK contract](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/sdk/client/README.md). External-action completion still needs its own receipt.
2. Fold the former alpha checklist into ordinary rc migration advice. Use: "DeepSeek's current rc enables Schedule in Standard, Creator and PTC; disable tool-schedule explicitly when model-written reminders must retain their origin." The old optional-bundle opt-out no longer expresses that policy. Keep listener, instruction-home, tool-presentation and Team migrations alongside it. Evidence: harvest section 1 and carry-forward answers; [17 October promotion](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.1), [Standard preset](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/web-app/presets/standard.patch.yml), [reminder framing](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/schedule/schedule/src/domain.ts).
3. Keep main-only Web Fetch filter removal separate as a compatibility and authority trade. Rc.2/rc.3 retain the destination checks; main removes them for source compositions. Preserve the same-user authority reservation and live Auto-unload warning; non-owner API grants and display masking do not isolate the browser owner's signing material. Evidence: harvest sections 5, 9 and 15-16; [fetch deletion](https://github.com/deepseek-ai/deepseek-harness/commit/2f01ad549c9dc7ecf480439f8e6801cc45ca14a0), [local credential persistence](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/credentials/credentials-local/src/index.ts). No signing exploit was reproduced.

## Could

None.

## Resolution

Use resume for the architectural opening and Schedule for the concrete upgrade decision. They do not compete for one claim. Promotion changes the audience that must migrate, not the invention date. Keep "no stable harness," npm default rc.2 versus separately selected rc.3, and platform-specific Desktop feeds. Retain `compared_with: [codex, claude-code]` for DeepSeek's optional child-wrapper approval defaults; those are wrapper choices, not the standalone harnesses' defaults. Main-only Pi-provider capacity assumptions remain DeepSeek adapter policy, not a Pi release or verified endpoint capacity.
