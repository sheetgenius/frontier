---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-interactive-codex-now-attaches-to-a-shared-background-app-server-by-default-from-0-157
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.157.0
    precision: github_release
  - url: https://github.com/openai/codex/pull/47179
    precision: merged_pr
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L992-L995
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/startup_orchestration.rs#L509-L512
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md?plain=1#L22-L28
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/pull/49426
    precision: merged_pr
---
# 2026-10-13-codex-interactive-codex-now-attaches-to-a-shared-background-app-server-by-default-from-0-157

Interactive codex now attaches to a shared background app server by default from 0.157.0. Since 0.157.0 an eligible interactive `codex` launch starts or reuses a detached, pid-backed app server and connects the TUI to it over the Unix control socket advertised at `CODEX_HOME/app-server-control/`, unless `--no-daemon` is passed, the launch targets a remote workspace or the agents overview, the Bedrock sign-in wizard or a Windows-mounted WSL home forces the embedded server, or `CODEX_EXEC_SERVER_URL` is set (startup_orchestration.rs L509-L512; README L25-L28). The server keeps running after the TUI exits, until a managed stop, restart or update; the README's lifecycle section describes no idle exit. The daemon crate's README at the tag says it "is experimental and its lifecycle contract may change" and that "Shared clients use the environment inherited when the daemon started. Opening a new terminal or clearing variables there does not clear the running daemon's environment; per-client environment isolation is not provided." The TUI now adopts that server's view of authority: permission profiles and permission shortcuts come from the server's catalog (#49472 in 0.161.0, #50140 in 0.162.0), and fresh threads take the server's model and reasoning defaults unless the launch sets them (#50013, #50913 in 0.162.0). From 0.161.0 the daemon launches app-server with `--analytics-default-enabled` (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/backend/pid.rs#L410), matching first-party clients; `analytics.enabled = false` still opts out. 0.162.1 is itself a fix for startup failures when a running daemon's feature settings differ from CLI defaults (#52648). The precondition shipped one release earlier: #45984 (0.156.0) binds control sockets in a 0700 user-owned directory and masks it from bubblewrap and Seatbelt sandboxes so filesystem-restricted commands cannot reach the privileged RPC transport.

Channel: tagged-release. Half: both. Date: 2026-09-25 (0.157.0 default); 2026-10-07 (0.161.0 analytics default for daemon-launched servers).

Operator consequence: Environment variables set in a new terminal (cloud profiles, tokens, PATH) do not reach work served by an already-running daemon, and every terminal using the same `CODEX_HOME` shares one server: run `codex app-server daemon restart` after changing the environment, or use `--no-daemon` or `features.daemon_auto_start = false` where per-shell isolation matters. Expect the running server's version and settings to differ from the CLI just typed (section 2) and check with `codex app-server daemon version`. Set `analytics.enabled = false` explicitly if telemetry policy requires it. `codex exec` in CI does not use the daemon. Human attention moves from "which binary did I run" to "which long-lived server is this terminal talking to".

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.157.0
- https://github.com/openai/codex/pull/47179
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L992-L995
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/startup_orchestration.rs#L509-L512
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md?plain=1#L22-L28
- https://github.com/openai/codex/pull/49426
