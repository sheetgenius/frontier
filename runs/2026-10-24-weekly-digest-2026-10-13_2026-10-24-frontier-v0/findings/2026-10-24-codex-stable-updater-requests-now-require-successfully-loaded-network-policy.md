---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-stable-updater-requests-now-require-successfully-loaded-network-policy
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/cli/src/main.rs#L2459-L2464
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L48-L70
    precision: tagged_commit_file
---
# 2026-10-24-codex-stable-updater-requests-now-require-successfully-loaded-network-policy

Stable updater requests now require successfully loaded network policy. The [updater client factory now propagates configuration failure and activates the embedded network policy](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/cli/src/main.rs#L2459-L2464), replacing the older fallback to a default HTTP client. The tag includes tests for configuration failure and denied destinations. The [standalone MCP path also acquired network-policy enforcement](https://github.com/openai/codex/commit/79773e8826aeb6bca09305728297908b0d5bc6c3), first contained in 0.163.0. This does not turn the updater into part of the invoking CLI process: [saved network settings govern it, and CLI `-c` overrides do not reach it](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L63-L70).

Channel: tagged-release. Half: defect. Date: 2026-10-15.

Operator consequence: The profile's wait for a stable tag is settled. Restricted fleets can test 0.164.0 with invalid configuration and blocked destinations before reconsidering automatic updates. Continue recording CLI and running-daemon versions separately. The human task moves from waiting for a release to verifying the fleet's actual saved policy; no network or updater probe was run here.

## Receipt
- https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/cli/src/main.rs#L2459-L2464
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L48-L70
