# Gemini CLI final-draft directives

Profile date: 2026-10-24. Merged inputs: lens `gemini-cli`; thread `gemini-cli`. Consistency found no cross-profile fact correction. The [owning harvest](../../harvest/gemini-cli.primary.md) controls facts and timestamped selectors.

## Must

No additional must correction was identified by the three lenses.

## Should

1. Give directory discovery a short capability paragraph of its own: 0.65.0 leaves the directory for the agent to explore instead of eagerly injecting its files. Tell readers to name indispensable files explicitly. Move the existing 65,536-byte handled-tool-text cap sentence to output-limit guidance, with its best-effort saving and completeness check. These are different boundaries. Evidence: harvest section 5 and retained output-limit claim; [stable directory processing](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/ui/hooks/atCommandProcessor.ts#L535-L549), [per-field cap and saving path](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/scheduler/tool-executor.ts#L320-L405). No measured latency, token or selection-quality gain follows.
2. Keep stable delivery prominent and collapse the old preview wait: "Gemini CLI 0.65.0 refuses project MCP writes in untrusted folders; use user scope or make the trust decision explicitly when it refuses." This is a settings-persistence guard, not a read-only tree. Evidence: harvest sections 1-2; [MCP write refusal](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/commands/mcp/add.ts#L45-L66), [read-only unloaded settings](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/settings.ts#L365-L492).
3. Preserve the remaining separate questions: requested extension HEAD is still unchecked; source delivery of companion repairs does not establish Marketplace delivery; plan exit does not enforce read-only work. Keep authentication-route advice separate from version advice. Evidence: harvest sections 6, 11 and 18; [extension checkout](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extensions/github.ts#L32-L80), [plan exit](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/tools/exit-plan-mode.ts#L210-L268), [pinned Argon/access warning](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/README.md#L1-L22).

## Could

None.

## Resolution

The capability paragraph and delivery advice answer different operator questions; retain both without attaching the unrelated output cap to discovery. Stable schema/runtime evidence controls the folder-trust default where the guide or social recap differs. Keep `compared_with: [antigravity, claude-code]` for the attributed migration recommendation and nightly timeout conversion. Do not revive the retired Antigravity Plan claim or transfer native Claude failure policy through the importer. The timeout conversion is nightly-only and not a retroactive rewrite of old imports.
