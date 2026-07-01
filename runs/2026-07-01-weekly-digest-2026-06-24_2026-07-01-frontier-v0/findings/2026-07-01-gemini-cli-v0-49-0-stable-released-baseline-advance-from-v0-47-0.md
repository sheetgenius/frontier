---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-gemini-cli-v0-49-0-stable-released-baseline-advance-from-v0-47-0
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0
    precision: github_release
---
# 2026-07-01-gemini-cli-v0-49-0-stable-released-baseline-advance-from-v0-47-0

v0.49.0 stable released (baseline advance from v0.47.0) (channel: tagged-release, 2026-06-25). Operator consequence: New stable to test/upgrade to. Beyond the path-traversal fix, notable items: zero-quota limits now fail fast to prevent a retry-loop hang (PR #27698); pending-tools and trust-override behavior fixed (PR #27854); standardized tool output formatting (PR #27772). Operators on v0.47.x should re-test and adopt. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0
