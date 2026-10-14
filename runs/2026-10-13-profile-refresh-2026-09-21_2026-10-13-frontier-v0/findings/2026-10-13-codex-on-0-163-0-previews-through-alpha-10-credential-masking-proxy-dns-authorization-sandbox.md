---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-on-0-163-0-previews-through-alpha-10-credential-masking-proxy-dns-authorization-sandbox
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.5
    precision: github_release
  - url: https://github.com/openai/codex/pull/52302
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/51650
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/51843
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/52223
    precision: merged_pr
  - url: https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10
    precision: github_release
  - url: https://github.com/openai/codex/commit/27e6192e84fa8a2969d9d56c2fbe05754205958b
    precision: commit
  - url: https://github.com/openai/codex/commit/12cca49c81c8aa6a37a5cc4e39964ee3b70f9458
    precision: commit
  - url: https://github.com/openai/codex/commit/10da569252004863c8256eb6bdabee3a8fc73042
    precision: commit
  - url: https://github.com/openai/codex/commit/cba716c0f1caa4f2528dedbb1075b50126709d7e
    precision: commit
---
# 2026-10-13-codex-on-0-163-0-previews-through-alpha-10-credential-masking-proxy-dns-authorization-sandbox

On 0.163.0 previews through alpha.10: credential masking, proxy DNS authorization, sandbox integrity checks. The next minor is shaping up around secrets and isolation. `features.credential_masking`, off by default, brokers credentials through an already enabled network proxy and keeps project config from overriding it (#52302). The proxy now requires hostname authorization before DNS lookups (#51650), stops brokered credential aliases from bypassing MITM hooks (#52661) and, from alpha.8, rejects duplicate Host headers (#53506). Sandbox integrity checks run before commands and filesystem operations on bubblewrap, Seatbelt and MXC backends (#51840 to #51843), but are observational: preparation failures and timeouts do not stop execution. They are not an additional enforced containment boundary. Daemon updates honor application network policy (#52223). Also on the alphas: code-mode interruption on by default (#51835), parallel execution of read-only tools (#52245), a configurable default plugin activation policy (#52220), a verified sandbox launcher exposed to local MCP servers (#52182), opt-in Guardian trust for orchestrator connector identities (#52250), and per-turn cyber access programs forwarded to Guardian (#52689).

Channel: preview-or-beta (rust-v0.163.0-alpha.1 through alpha.10). Half: both. Date: 2026-10-07 to 2026-10-13.

Operator consequence: None of this is in stable 0.162.1. Alpha.10 also flips the Daybreak gates (section 26); the genuine cutoff main-only Guardian classifier fallback change is in section 27. Teams waiting on credential masking or the daemon-update network fix should test the 0.163.0 alphas off production and watch for a 0.163.0 stable; settle it by reading `features/src/lib.rs` and `cli/src/main.rs` at that tag.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.5
- https://github.com/openai/codex/pull/52302
- https://github.com/openai/codex/pull/51650
- https://github.com/openai/codex/pull/51843
- https://github.com/openai/codex/pull/52223
- https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10
- https://github.com/openai/codex/commit/27e6192e84fa8a2969d9d56c2fbe05754205958b
- https://github.com/openai/codex/commit/12cca49c81c8aa6a37a5cc4e39964ee3b70f9458
- https://github.com/openai/codex/commit/10da569252004863c8256eb6bdabee3a8fc73042
- https://github.com/openai/codex/commit/cba716c0f1caa4f2528dedbb1075b50126709d7e
