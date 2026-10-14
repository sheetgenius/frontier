---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-default-model-moved-again-in-a-hotfix-and-fresh-tui-threads-now-take-the-server-s-defaults
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.159.1
    precision: github_release
  - url: https://github.com/openai/codex/blob/rust-v0.159.0/codex-rs/models-manager/models.json#L4-L74
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/models-manager/models.json#L177-L248
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/pull/50013
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/51235
    precision: merged_pr
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/models-manager/models.json#L1397-L1406
    precision: tagged_commit_file
  - url: https://learn.chatgpt.com/docs/changelog
    precision: official_docs
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-protocol/src/protocol/v2/thread.rs#L110-L113
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-protocol/src/protocol/v2/turn.rs#L284-L287
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server/src/request_processors/thread_processor.rs#L1156
    precision: tagged_commit_file
---
# 2026-10-13-codex-default-model-moved-again-in-a-hotfix-and-fresh-tui-threads-now-take-the-server-s-defaults

Default model moved again in a hotfix, and fresh TUI threads now take the server's defaults. For the second window running, a patch release changed what runs when `model` is unset: 0.159.1, published the same day as the changelog's "GPT-6.1 Sol in Codex and ChatGPT Work" entry, made `gpt-6.1-sol` priority 1 in the bundled and Bedrock catalogs, and 0.161.0 carried the same default on the main line. Its catalog entry defaults to `low` reasoning and lists `ultra` as its top effort, described as "Maximum reasoning with automatic task delegation" (the effort already existed for other models at 0.155.1). 0.156.1 had already put GPT-6 Sol and GPT-6 Luna in the picker and made the rate-limit prompt recommend Luna. In 0.162.0 fresh TUI threads omit unselected `model`, `model_provider` and `model_reasoning_effort` from `thread/start`, so the connected server's configuration decides: the local daemon's `config/read`, managed new-thread defaults, or its catalog when no model is configured (#50013, #50913). The picker stopped appending "(default)" to any entry (#51235). The legacy thread and turn multiAgentMode fields are deprecated and ignored in favor of ultra effort; the server discards the value, and this already held at 0.155.1, so it is a correction to the prior profile rather than a new in-window removal. The catalog is "backed by bundled models, cache, and `/models`" (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/models-manager/src/manager.rs#L285), so an unset model can still move without an upgrade. GPT-5.5 is still listed at 0.162.1 with an upgrade prompt to `gpt-6-sol` and `retirement_at: null` (models.json L1397-L1406), while the changelog entry of 2026-09-14 retires it "from ChatGPT, ChatGPT Work, and Codex on all plans" on 2026-10-14 and says the retirement "does not apply to the OpenAI API". Managed requirements gained `model_provider` and `model_providers`, which override local and session selection (#44650, 0.156.0); the managed-configuration docs page (retrieved 2026-10-13) does not list them.

Channel: tagged-release; docs-only (changelog entries of 2026-09-14, 2026-09-22 and 2026-09-29). Half: both. Date: 2026-09-23 (0.156.1 GPT-6 Sol and Luna); 2026-09-29 (0.159.1 default GPT-6.1 Sol); 2026-10-08 (0.162.0 server defaults, no default label).

Operator consequence: Set `model` and `model_reasoning_effort` explicitly, in `config.toml` or on the command line, for anything with a cost, latency or eval baseline. A value in `config.toml` is part of the server's configuration and survives the new precedence; an unset one follows the catalog. Re-run evals on fleets that floated through 0.159.1. Remove `gpt-5.5` from configs, custom agents and scheduled tasks before 2026-10-14; the bundled 0.162.1 GPT-5.5 entry has no retirement timestamp; server or cached catalog metadata can differ. Admins who need a fixed gateway can now require it with `model_provider` in `requirements.toml`. The picker no longer tells anyone which model is the default, so the status line is where to look.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.159.1
- https://github.com/openai/codex/blob/rust-v0.159.0/codex-rs/models-manager/models.json#L4-L74
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/models-manager/models.json#L177-L248
- https://github.com/openai/codex/pull/50013
- https://github.com/openai/codex/pull/51235
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/models-manager/models.json#L1397-L1406
- https://learn.chatgpt.com/docs/changelog
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-protocol/src/protocol/v2/thread.rs#L110-L113
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-protocol/src/protocol/v2/turn.rs#L284-L287
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server/src/request_processors/thread_processor.rs#L1156
