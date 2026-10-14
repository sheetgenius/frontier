---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-sandbox-escapes-closed-as-release-note-bullets-in-0-156-0-and-0-162-0-with-no-matching-new
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
  - url: https://github.com/openai/codex/pull/45984
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/46500
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/51211
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/51407
    precision: merged_pr
  - url: https://github.com/openai/codex/security/advisories
    precision: official_docs
---
# 2026-10-13-codex-sandbox-escapes-closed-as-release-note-bullets-in-0-156-0-and-0-162-0-with-no-matching-new

Sandbox escapes closed as release-note bullets in 0.156.0 and 0.162.0, with no matching new public advisory found. Per the merged PR descriptions: before #45984, "Network access and Unix-socket allowlists" could let filesystem-restricted commands reach "the privileged app-server RPC transport"; the fix moves control sockets into a 0700 directory, masks it in bubblewrap, denies it in Seatbelt, and makes bubblewrap mandatory for filesystem-restricted Linux execution, so users of the deprecated `features.use_legacy_landlock` must turn it off. #46500 blocks the macOS `F_MAKECOMPRESSED` and `F_TRANSFEREXTENTS` fcntls, which "can mutate files through read-only descriptors". #44639 adds the missing inbound firewall block for the Windows offline sandbox. #47389 and #47407 keep Codex's own network policy in force across redirects, response bodies and live WebSocket traffic. #48155 keeps explicit filesystem denials when an approved command gets broader writes, and #48176 protects `.aws` under writable roots because "AWS profiles can select credential helpers that the application executes". In 0.162.0, #51211 stops bubblewrap discovery from probing or launching a `bwrap` found in a sandbox-writable PATH entry, which could otherwise "run outside the sandbox", and #51407 stops deny-read glob expansion from running a workspace-writable `rg` before confinement. The release notes carry these as one-line bullets; no matching new public advisory was found in the repository list, global package query or scoped NVD search during the 2026-10-14 crosscheck. That search does not prove an advisory can never exist.

Channel: tagged-release. Half: defect. Date: 2026-09-22 (0.156.0); 2026-09-25 (0.157.0); 2026-09-29 (0.159.0); 2026-10-08 (0.162.0).

Operator consequence: Run 0.162.0 or later (0.162.1 today) wherever Codex touches untrusted repository content. On Linux with a sandbox-writable directory on PATH, a planted `bwrap` or `rg` could run before confinement on 0.161.x and earlier. Check Linux configs for `features.use_legacy_landlock` before relying on filesystem-restricted profiles past 0.156.0. Do not rely solely on advisory feeds or Dependabot; watch the versioned release feed too. Reading release bullets for security fixes remains serial human work the vendor has not removed.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.156.0
- https://github.com/openai/codex/releases/tag/rust-v0.162.0
- https://github.com/openai/codex/pull/45984
- https://github.com/openai/codex/pull/46500
- https://github.com/openai/codex/pull/51211
- https://github.com/openai/codex/pull/51407
- https://github.com/openai/codex/security/advisories
