---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-codex-guardian-v2-a-model-driven-risk-classifier-gating-tool-calls-was-built
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/1c4f42863c1f84eb5175a1a0cfffe84641a63df3
    precision: commit
---
# 2026-08-17-codex-guardian-v2-a-model-driven-risk-classifier-gating-tool-calls-was-built

Guardian V2  --  a model-driven risk classifier gating tool calls  --  was built entirely inside the alpha line.

Across roughly 41 commits dated 2026-08-13 to 2026-08-17, Codex grew a second-generation Guardian: an extension scaffold, a sampler, per-thread sampler initialization, tool-call classification with full tool action context, risk scores recorded on threads, bounded transcript rendering, pooled sampling WebSocket connections, priority for new classifications under load, and installation into the app server. #38569 makes automatic review mandatory for actions Guardian V2 classifies as high-risk. Guardian reviewer sessions are isolated from parent extensions (#38602) and Guardian reviews are constrained to parent filesystem permissions (#38377). Adjacent alpha work routes network access (#38299) and MCP tool calls (#38108) through the shared approval pipeline, and #38205 enforces a non-interactive approval policy for Codex delegates.

Channel: preview-or-beta. Ancestry: grep -ci guardian over the commit list from gh api repos/openai/codex/compare/rust-v0.147.0...rust-v0.148.0-alpha.21 returns 41 matches; the same grep over the rust-v0.146.0...rust-v0.147.0 compare list confirms none of these SHAs are in the 0.147.0 tag. Representative commits: fe614a6304ef804be74a622e482fdd75977abcba 'Add Guardian V2 extension scaffold (#38336)' (2026-08-13), 1c4f42863c1f84eb5175a1a0cfffe84641a63df3 'Require automatic review for high-risk Guardian v2 actions (#38569)' (2026-08-14), 3360f4a909a920d2e534a63c508d98e91fe6655a 'Install Guardian V2 in the app server (#38597)' (2026-08-14). No non-prerelease tag exists after rust-v0.147.0.

Operator consequence: Watch closely; do not plan around it yet. This is the architectural direction that matters more than anything that shipped: Codex is moving from static sandbox and approval policy toward a model that scores each tool action and can compel automatic review on its own classification. Every piece of it is alpha-only at window close, so any claim that Codex 'now' does risk-based gating is describing an unreleased build. When it lands, the governance question changes shape  --  the reviewer becomes a model whose risk threshold you must be able to inspect and pin.

## Receipt
- https://github.com/openai/codex/commit/1c4f42863c1f84eb5175a1a0cfffe84641a63df3
