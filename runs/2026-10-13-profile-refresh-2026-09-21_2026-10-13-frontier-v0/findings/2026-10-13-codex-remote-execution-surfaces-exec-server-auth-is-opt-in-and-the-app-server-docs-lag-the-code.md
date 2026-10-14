---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-remote-execution-surfaces-exec-server-auth-is-opt-in-and-the-app-server-docs-lag-the-code
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/pull/47601
    precision: merged_pr
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/exec-server/src/server/transport.rs#L1-L2
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/exec-server/src/server/transport.rs#L40
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-transport/src/transport/websocket.rs#L135-L142
    precision: tagged_commit_file
  - url: https://learn.chatgpt.com/docs/app-server
    precision: official_docs
---
# 2026-10-13-codex-remote-execution-surfaces-exec-server-auth-is-opt-in-and-the-app-server-docs-lag-the-code

Remote execution surfaces: exec-server auth is opt-in, and the app-server docs lag the code on unauthenticated listeners. `codex exec-server` gained `--ws-auth` capability tokens and signed bearer tokens for direct WebSocket listeners in 0.158.0, and app-server executor connections can carry bearer tokens (#47648). The exec-server transport still says "unauthenticated listeners remain supported for compatibility" (transport.rs L1-L2); its default listen URL is `ws://127.0.0.1:0` (L40). The app server is stricter than its docs: at rust-v0.162.1, as since at least 0.150.0, it refuses to start a non-loopback WebSocket listener without `--ws-auth` (websocket.rs L135-L142), while the live app-server page says "Non-loopback WebSocket listeners currently allow unauthenticated connections by default during rollout". The same page still calls the app-server command and WebSocket transport "experimental" and unsupported for production, and lists `process/spawn` as starting "an explicit process session outside Codex's sandbox" behind the `experimentalApi` capability.

Channel: tagged-release; docs-only (app-server page retrieved 2026-10-13). Half: both. Date: 2026-09-28 (0.158.0).

Operator consequence: Anyone exposing `codex exec-server` beyond loopback must add `--ws-auth` (0.158.0 and later) and TLS; the server will not insist. For the app server, the docs warning is stale relative to the stock binary, which refuses an unauthenticated non-loopback listener. Treat any reachable app-server socket as a sandbox-bypass capability because of `process/spawn`. The docs discrepancy was independently reproduced on 2026-10-14; its exact October 13 wording is not archived.

## Receipt
- https://github.com/openai/codex/pull/47601
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/exec-server/src/server/transport.rs#L1-L2
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/exec-server/src/server/transport.rs#L40
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-transport/src/transport/websocket.rs#L135-L142
- https://learn.chatgpt.com/docs/app-server
