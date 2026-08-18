---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-codex-network-authority-hardening-continued-after-0-146-0-but-stayed-alpha
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/7a0e974e08c798d1e8d59d407aeb6e24db1313af
    precision: commit
---
# 2026-08-10-codex-network-authority-hardening-continued-after-0-146-0-but-stayed-alpha

Network-authority hardening continued after 0.146.0 but stayed alpha-only all window.

#37211 states the problem directly: MITM hooks authorize requests before the upstream server parses them, so a path that can be decoded or normalized into a different resource must not match an allowlist entry. It rejects ambiguous hook paths (traversal segments, backslashes, malformed percent encodings, encoded separators and percent signs) and blocks plain-HTTP proxy requests for hosts whose policy always requires MITM, recording the decision as `mitm_required`. Tests cover encoded traversal through repository allowlists and absolute-form HTTPS sent to the HTTP proxy. #38049 hardens credential brokerage in the same proxy, and #38299 folds network access into the shared approval pipeline. A companion cyber-model control, #37190, interrupts a cyber-specialty model's turn after a single Guardian denial rather than letting it retry to the normal threshold.

Channel: preview-or-beta. Ancestry: grep for (#37211) over the rust-v0.146.0...rust-v0.147.0 compare commit list returns 0; the same grep over the rust-v0.147.0...rust-v0.148.0-alpha.21 list returns 7a0e974e08c798d1e8d59d407aeb6e24db1313af 'Harden network proxy MITM authorization (#37211)' dated 2026-08-06T03:57:10Z. Per-tag compares show it first reachable in rust-v0.148.0-alpha.1 (prerelease). Later alpha-only companions: eea28321ad67a109550f9285a3597c76a2635be1 'Harden network proxy credential brokerage (#38049)' (2026-08-11) and 357696c5e7127525a9259d3dcfa0574516b1fe84 'Route network access through the shared approval pipeline (#38299)' (2026-08-13). No non-prerelease tag after rust-v0.147.0 contains any of them.

Operator consequence: Watch, and do not assume your network allowlist is path-safe on 0.147.0. This reads as an allowlist-bypass class fix  --  parser-differential path confusion against the proxy's authorization hook, plus a plain-HTTP path around mandatory inspection  --  and it is not in any stable release as of 2026-08-17. Operators who rely on Codex's network policy as a real boundary rather than a speed bump should treat repository allowlist entries with encodable separators as untrusted until 0.148.0 cuts, and should not read the prior window's 'network-authority wave reached stable' as meaning the work is finished.

## Receipt
- https://github.com/openai/codex/commit/7a0e974e08c798d1e8d59d407aeb6e24db1313af
