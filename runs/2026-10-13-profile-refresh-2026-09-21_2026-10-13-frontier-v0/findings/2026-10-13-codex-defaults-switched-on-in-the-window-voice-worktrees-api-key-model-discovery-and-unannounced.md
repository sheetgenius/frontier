---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-defaults-switched-on-in-the-window-voice-worktrees-api-key-model-discovery-and-unannounced
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.156.0
    precision: github_release
  - url: https://github.com/openai/codex/releases/tag/rust-v0.162.0
    precision: github_release
  - url: https://github.com/openai/codex/commit/a028250541f18b4f3040744be1325214ed5cc832
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1159-L1162
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/pull/50148
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/49683
    precision: merged_pr
---
# 2026-10-13-codex-defaults-switched-on-in-the-window-voice-worktrees-api-key-model-discovery-and-unannounced

Defaults switched on in the window: voice, worktrees, API-key model discovery, and unannounced instant interrupts. 0.156.0 turned voice conversations on by default (F8 toggle, bundled audio runtimes for Linux and Windows) and worktree support on by default; 0.162.0 adds agent-callable `create_worktree`, `get_worktree_creation_status` and `list_worktrees` tools for eligible trusted local projects with attachment storage, rejecting explicitly untrusted sources and leaving the task working directory unchanged (#50148). 0.161.0 enables model discovery for API-key accounts, keeping explicit opt-outs, and registers `in_app_voice`, a managed gate that the PR says is "intended for managed requirements to control permission for voice in desktop apps". 0.162.0 enables `instant_interrupt`, so new user input can preempt a streaming response or a long code-mode call; 0.159.0's notes introduced it as "Opt-in", the flag is still marked under development, and the cherry-pick message says Python SDK tests had to disable it where they depend on responses completing before steering. `ultrafast_mode` is on in the client; eligibility is server-side (changelog 2026-10-08: Pro $500 and eligible Enterprise and Edu plans, "Enterprise access is off by default").

Channel: tagged-release. Half: both. Date: 2026-09-22 (0.156.0); 2026-10-07 (0.161.0); 2026-10-08 (0.162.0).

Operator consequence: Fleet images should decide voice explicitly (`features.realtime_conversation = false` for the TUI, `in_app_voice = false` in managed requirements for desktop apps) where microphone use is out of policy. SDK and app-server clients that send input while a turn runs should re-test on 0.162.0 and later, or set `features.instant_interrupt = false`: new input can yield foreground observations mid-response instead of waiting. Cancellation of code-mode cells and nested calls through code_mode_interrupt is separate and default-on only in the 0.163.0 previews. Worktree tools let the agent create checkouts on its own in trusted projects; watch disk and branch hygiene.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.156.0
- https://github.com/openai/codex/releases/tag/rust-v0.162.0
- https://github.com/openai/codex/commit/a028250541f18b4f3040744be1325214ed5cc832
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1159-L1162
- https://github.com/openai/codex/pull/50148
- https://github.com/openai/codex/pull/49683
