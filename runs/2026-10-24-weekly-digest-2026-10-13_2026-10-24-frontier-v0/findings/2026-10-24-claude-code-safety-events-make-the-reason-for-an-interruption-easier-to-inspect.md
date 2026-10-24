---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-safety-events-make-the-reason-for-an-interruption-easier-to-inspect
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.307
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.301
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.302
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.300
    precision: github_release
---
# 2026-10-24-claude-code-safety-events-make-the-reason-for-an-interruption-easier-to-inspect

Safety events make the reason for an interruption easier to inspect. `claude_code.safety_event` reports calls stopped, prompted or sent back by rules, auto mode, safety checks, hooks or the sandbox. `tool_decision` also gains classifier verdict and permission mode; classifier category requires `OTEL_LOG_TOOL_DETAILS=1`, and 302 repairs missing categories and attribute-limit interactions. API events split five-minute and one-hour cache creation tokens.

Channel: tagged-release. Half: capability. Date: 2026-10-21.

Operator consequence: Use these native events to distinguish a policy block, classifier decision, retry and cache expense before building another log parser. Preserve correlation fields when collector attribute limits are low. An emitted event is an observation of the client's decision, not proof of an OS boundary, a successful redaction policy or the server's quota accounting. The saved attention is in diagnosing why work stopped.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.307
- https://github.com/anthropics/claude-code/releases/tag/v2.1.301
- https://github.com/anthropics/claude-code/releases/tag/v2.1.302
- https://github.com/anthropics/claude-code/releases/tag/v2.1.300
