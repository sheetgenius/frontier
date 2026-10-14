---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-ctrl-c-reaches-cancellation-during-active-operations-in-v0-64
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/5b71659d58eab63f5f249524f157c195be420427
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0
    precision: github_release
---
# 2026-10-13-gemini-cli-ctrl-c-reaches-cancellation-during-active-operations-in-v0-64

Ctrl+C reaches cancellation during active operations in v0.64.0. During generation the input prompt lets Ctrl+C propagate to the cancellation handler instead of treating it as input clearing. The mouse-escape parser also emits the Ctrl+C keypress when it arrives during an incomplete escape sequence. These fixes address swallowed emergency cancellation paths, not a measured guarantee about every running subprocess.

Channel: tagged-release. Half: capability. Date: 2026-10-13.

Operator consequence: Use 0.64.0 and test the stop action with your terminal/session setup. Cancelling active work is an operator control; an input buffer that clears while the work continues is not an adequate substitute. Rapid-exit recording repair remains a separate preview change (section 16).

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/5b71659d58eab63f5f249524f157c195be420427
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0
