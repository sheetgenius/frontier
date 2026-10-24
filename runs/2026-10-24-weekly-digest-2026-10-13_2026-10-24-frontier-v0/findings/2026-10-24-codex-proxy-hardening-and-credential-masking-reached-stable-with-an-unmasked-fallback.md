---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-proxy-hardening-and-credential-masking-reached-stable-with-an-unmasked-fallback
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/37eaae6eeb71c3bd3d165f52515086db8f5e7dee
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/network-proxy/README.md
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/runtimes/unified_exec.rs#L558-L565
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1469-L1487
    precision: tagged_commit_file
---
# 2026-10-24-codex-proxy-hardening-and-credential-masking-reached-stable-with-an-unmasked-fallback

Proxy hardening and credential masking reached stable, with an unmasked fallback. Stable now [authorizes before DNS resolution](https://github.com/openai/codex/commit/37eaae6eeb71c3bd3d165f52515086db8f5e7dee) and checks aliases and duplicate Host headers. In 0.164.0, masking extends to remote execution, shell snapshots and custom provider credentials. When an injected-header action configures a placeholder, [substitution requires exactly that whole-header value and HTTPS on port 443; the proxy also supports injected-header actions without a placeholder](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/network-proxy/README.md#L277-L285). Scheme/port matcher lists are optional and preserve existing behavior when empty; the [implementation takes the authenticated tunnel origin separately from request headers](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/network-proxy/src/mitm_hook.rs). However, masking is default-off, and [unsupported execution-server, proxy, shell, or snapshot conditions can warn and continue with real credentials restored](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/runtimes/unified_exec.rs#L706-L745). This is not an unconditional fail-closed secret-isolation guarantee.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Upgrade for proxy enforcement, then separately trial masking with the actual remote server and shell. Treat fallback warnings as material evidence, inspect the environment delivered to tools, and verify denied origins and placeholders. This can remove handcrafted secret forwarding, but the operator still has to establish which execution paths actually mask credentials.

## Receipt
- https://github.com/openai/codex/commit/37eaae6eeb71c3bd3d165f52515086db8f5e7dee
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/network-proxy/README.md
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/runtimes/unified_exec.rs#L558-L565
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1469-L1487
