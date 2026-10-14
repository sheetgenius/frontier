---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-rapid-cancellation-history-repair-reaches-v0-65-0-preview
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/204db94ae2a33f70afec7400ebf6b78f1b5e2575
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0
    precision: github_release
---
# 2026-10-13-gemini-cli-rapid-cancellation-history-repair-reaches-v0-65-0-preview

Rapid cancellation history repair reaches v0.65.0 preview. Cancellation gains an in-flight state/promise, records synthetic cancelled tool responses for unanswered calls, and lets rapid exit wait briefly for pending cancellation. The source uses bounded waits rather than guaranteeing all external work finishes. This aims to prevent interrupted session history ending with unanswered model tool calls; it is not in stable 0.64.0.

Channel: preview-or-beta. Half: both. Date: 2026-10-13.

Operator consequence: Test 0.65.0-preview.0 if users interrupt and resume tool-heavy runs. Verify cancelled-call records and resumed history around quick repeated Ctrl+C/exit. Treat synthesized cancellation errors as harness bookkeeping, not evidence that the tool completed successfully.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/204db94ae2a33f70afec7400ebf6b78f1b5e2575
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0
