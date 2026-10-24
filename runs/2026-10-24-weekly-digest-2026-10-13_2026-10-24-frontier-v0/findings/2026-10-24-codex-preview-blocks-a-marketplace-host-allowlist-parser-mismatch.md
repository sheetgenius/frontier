---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-preview-blocks-a-marketplace-host-allowlist-parser-mismatch
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/61a991990fa4fd0c511ccaaab3875371796be956
    precision: commit
---
# 2026-10-24-codex-preview-blocks-a-marketplace-host-allowlist-parser-mismatch

Preview blocks a marketplace host-allowlist parser mismatch. Alpha.1 [rejects literal backslashes in HTTP(S) marketplace URL userinfo](https://github.com/openai/codex/commit/61a991990fa4fd0c511ccaaab3875371796be956). Different URL parsing by the policy check and Git/libcurl could otherwise approve one host while connecting to another. The patch tests rejection before cloning or writing installation/configuration state; stable 0.164.0 lacks it.

Channel: preview-or-beta. Half: defect. Date: 2026-10-23.

Operator consequence: Where marketplace host patterns are a security boundary, constrain installation inputs and destinations outside the affected check. Track a stable tag containing this commit and test divergent URL forms before relying on the allowlist alone.

## Receipt
- https://github.com/openai/codex/commit/61a991990fa4fd0c511ccaaab3875371796be956
