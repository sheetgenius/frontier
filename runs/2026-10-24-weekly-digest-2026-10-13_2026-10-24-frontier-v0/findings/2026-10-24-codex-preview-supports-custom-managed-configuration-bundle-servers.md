---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-preview-supports-custom-managed-configuration-bundle-servers
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/f3a90545aed3188ee1e5c119ec89a742de399cdc
    precision: commit
  - url: https://github.com/openai/codex/commit/5a1c247dd5fd682c22a34af93df697dd06300a32
    precision: commit
---
# 2026-10-24-codex-preview-supports-custom-managed-configuration-bundle-servers

Preview supports custom managed-configuration bundle servers. Alpha.1 [can load custom config-server bundles without redirects, with optional OAuth and endpoint/identity-scoped caches](https://github.com/openai/codex/commit/f3a90545aed3188ee1e5c119ec89a742de399cdc). Bootstrap network access is constrained, and invalid bundle errors avoid leaking configuration contents. This follows [separating bundle loading from ChatGPT-specific authentication](https://github.com/openai/codex/commit/5a1c247dd5fd682c22a34af93df697dd06300a32); stable server-mismatch rejection does not contain this complete delivery mechanism.

Channel: preview-or-beta. Half: capability. Date: 2026-10-23.

Operator consequence: Evaluate custom policy delivery with missing sign-in, changed endpoints, stale caches and failed validation. Keep stable enforcement and preview delivery as separate rollout decisions.

## Receipt
- https://github.com/openai/codex/commit/f3a90545aed3188ee1e5c119ec89a742de399cdc
- https://github.com/openai/codex/commit/5a1c247dd5fd682c22a34af93df697dd06300a32
