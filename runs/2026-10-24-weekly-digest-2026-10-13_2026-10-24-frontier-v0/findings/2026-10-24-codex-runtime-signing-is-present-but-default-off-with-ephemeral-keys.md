---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-runtime-signing-is-present-but-default-off-with-ephemeral-keys
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/runtime.rs
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/registration.rs
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/auth.rs
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs
    precision: tagged_commit_file
---
# 2026-10-24-codex-runtime-signing-is-present-but-default-off-with-ephemeral-keys

Runtime signing is present but default-off, with ephemeral keys. The runtime can [generate an Ed25519 key, register an instance, and sign agent assertions](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/runtime.rs). In the implementation read, the key is generated for registration and retained in memory; it is not a durable private key written to disk. Registration uses a [restricted HTTPS or loopback endpoint with redirects disabled](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/registration.rs). [Dual-header and assertion-only authorization modes exist](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/auth.rs), while `runtime_agent_instances` remains default-off. Code presence does not establish server enforcement against third-party clients.

Channel: tagged-release. Half: capability. Date: 2026-10-23.

Operator consequence: Authentication adapters should watch this protocol and test it only when intentionally enabled. Do not report the social prediction of durable-key client lockout as shipped fact. The useful question is whether a named service begins requiring these assertions and under which account contract; neither service-side enforcement nor a lockout test was observed.

## Receipt
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/runtime.rs
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/registration.rs
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/auth.rs
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs
