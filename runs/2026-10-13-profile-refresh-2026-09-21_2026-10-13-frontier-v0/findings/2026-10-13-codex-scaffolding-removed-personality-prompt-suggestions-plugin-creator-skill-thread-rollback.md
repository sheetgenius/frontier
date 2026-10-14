---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-scaffolding-removed-personality-prompt-suggestions-plugin-creator-skill-thread-rollback
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/pull/44935
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/44915
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/48621
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/48604
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/47932
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/51329
    precision: merged_pr
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1889-L1892
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/commit/3052bbcf8c9d48e130599308c583784db43e57aa
    precision: commit
  - url: https://github.com/openai/codex/commit/6221a217e2b24701ecbf05a239e4ca899ae3a359
    precision: commit
---
# 2026-10-13-codex-scaffolding-removed-personality-prompt-suggestions-plugin-creator-skill-thread-rollback

Scaffolding removed: personality, prompt suggestions, plugin-creator skill, thread/rollback and default-model labels. The window deleted harness in several places. Personality selection left the TUI and the `personality` flag is Removed; the app-server protocol documents that "`friendly` and `pragmatic` no longer select a style". The deprecated `thread/rollback` API is gone, with `thread/revert` named as the alternative for paginated threads; legacy history markers remain for replay. Automatic follow-up prompt suggestions and the `tui.prompt_suggestions` setting were removed, as was the bundled `plugin-creator` skill. GPT-5.4 left the bundled catalogs (migration prompts kept), and the `ultrafast` tier left `gpt-5.6-sol`. Partial-history subagent forks and randomized session greetings were removed. Legacy positive integer fork strings now inherit all history; zero and invalid values are rejected, and model overrides require `fork_turns: "none"` (#51329). The model picker stopped labeling a default, and CRLF preservation in `apply_patch` became unconditional, retiring its flag. On the 0.163.0 alphas the patched zsh execution backend is removed (#52160).

Channel: tagged-release; preview-or-beta (#52160). Half: capability. Date: 2026-09-22 to 2026-10-08.

Operator consequence: App-server clients calling `thread/rollback` break on 0.156.0 and later and must assess `thread/revert` for paginated threads rather than treating it as an unrestricted drop-in replacement. Configs setting `personality` or `tui.prompt_suggestions` now do nothing. Workflows that used the bundled plugin-creator skill must supply their own. Short-history fork clients may now pass the whole parent context; check context volume and model overrides. This is the same pattern as `update_plan` in the prior window: guidance scaffolding is coming out, and the knobs that matter are model, effort and permissions.

## Receipt
- https://github.com/openai/codex/pull/44935
- https://github.com/openai/codex/pull/44915
- https://github.com/openai/codex/pull/48621
- https://github.com/openai/codex/pull/48604
- https://github.com/openai/codex/pull/47932
- https://github.com/openai/codex/pull/51329
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1889-L1892
- https://github.com/openai/codex/commit/3052bbcf8c9d48e130599308c583784db43e57aa
- https://github.com/openai/codex/commit/6221a217e2b24701ecbf05a239e4ca899ae3a359
