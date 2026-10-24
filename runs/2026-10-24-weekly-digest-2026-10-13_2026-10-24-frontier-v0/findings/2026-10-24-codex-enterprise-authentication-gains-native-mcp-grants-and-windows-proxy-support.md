---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-enterprise-authentication-gains-native-mcp-grants-and-windows-proxy-support
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/1569abc5dcff34a161a37c0697617b5025e1a851
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/config/src/state.rs
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/commit/f496b09bd141af0a6ec1a7ebf3e5fc557ac795dc
    precision: commit
  - url: https://github.com/openai/codex/releases/tag/rust-v0.164.0
    precision: github_release
---
# 2026-10-24-codex-enterprise-authentication-gains-native-mcp-grants-and-windows-proxy-support

Enterprise authentication gains native MCP grants and Windows proxy support. Eligible accounts can [use enterprise MCP grants and a dedicated sign-in flow](https://github.com/openai/codex/commit/6b13dffc5e4c334fe87f823b214ed15a4bf37a11), with confidential-client OAuth support. Windows can [authenticate to Negotiate/NTLM proxies using the signed-in user](https://github.com/openai/codex/commit/f496b09bd141af0a6ec1a7ebf3e5fc557ac795dc). The managed configuration path [requires the configured trusted server to match the server whose configuration was applied](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/config/src/state.rs), failing rather than silently proceeding with a mismatch. The same release also [enables the Bedrock setup wizard by default](https://github.com/openai/codex/releases/tag/rust-v0.164.0).

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Trial the native sign-in and proxy flows before maintaining custom credential bridges. Verify account eligibility, server identity, applied managed requirements, and reconnect behavior with the deployment's actual identity system. Fewer bespoke login steps can reduce setup attention, but successful sign-in is not proof that the intended organization policy was applied.

## Receipt
- https://github.com/openai/codex/commit/1569abc5dcff34a161a37c0697617b5025e1a851
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/config/src/state.rs
- https://github.com/openai/codex/commit/f496b09bd141af0a6ec1a7ebf3e5fc557ac795dc
- https://github.com/openai/codex/releases/tag/rust-v0.164.0
