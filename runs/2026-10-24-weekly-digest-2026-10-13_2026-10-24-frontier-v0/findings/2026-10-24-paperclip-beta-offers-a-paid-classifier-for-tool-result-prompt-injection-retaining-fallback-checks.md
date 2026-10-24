---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-offers-a-paid-classifier-for-tool-result-prompt-injection-retaining-fallback-checks
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/prompt-injection-prevention.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/2c96f76780b37405e0fd2b423be39ecd5021d40c
    precision: commit
---
# 2026-10-24-paperclip-beta-offers-a-paid-classifier-for-tool-result-prompt-injection-retaining-fallback-checks

Beta offers a paid classifier for tool-result prompt injection, retaining fallback checks. The classifier starts unconfigured and requires explicit saved setup with a shared OpenRouter API key. It sends the complete secret-redacted tool result within a bounded request, rather than a misleading truncated sample. A valid model verdict replaces the regex verdict and can permit a regex false positive. Disabled, failed, invalid, timed-out, unauthorized or budget-blocked classification falls back to regex checks. There is one bounded paid request, no automatic paid retry, durable accounting and retained holds for unknown billing. Oversized or redaction-mismatched results skip model dispatch; caller cancellation propagates rather than returning a regex result to a stopped caller. Classifier accounting does not store the result's content.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Trial `2026.1023.0-beta.0` only after approving the tool-result data destination, latency and spend. Examine both false positives and misses on representative results. A classifier can remove some manual triage, but it is not a prompt-injection guarantee and cannot undo a tool mutation that already occurred. The operator must still define access boundaries; a model judgment is one additional decision point, not a replacement for them.

## Receipt
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/prompt-injection-prevention.md
- https://github.com/paperclipai/paperclip/commit/2c96f76780b37405e0fd2b423be39ecd5021d40c
