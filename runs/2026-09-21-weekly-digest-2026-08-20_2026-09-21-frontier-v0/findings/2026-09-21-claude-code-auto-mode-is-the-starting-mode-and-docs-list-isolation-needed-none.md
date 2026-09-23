---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-auto-mode-is-the-starting-mode-and-docs-list-isolation-needed-none
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: medium
evidence:
  - url: https://code.claude.com/docs/en/permission-modes
    precision: official_docs
  - url: https://embracethered.com/blog/posts/2026/breaking-claude-code-opus-5-and-automode/
    precision: third_party_research
---
# 2026-09-21-claude-code-auto-mode-is-the-starting-mode-and-docs-list-isolation-needed-none

The permission-modes page describes auto mode as the built-in starting permission mode on Pro, Max and Team, and its table row for working hands-off in auto mode lists isolation needed as "None; a sandbox or container adds defense in depth". The bypassPermissions section points users who want background safety checks to auto mode. On 2026-08-26 Johann Rehberger published an indirect prompt injection from a summarized web page that drove Claude Code on Opus 5 in auto mode to run attacker code, reporting 60 to 80 percent success, and wrote that Anthropic closed the report as Informative because auto mode is not a security boundary. The vendor's response is reported by the researcher, not published by the vendor.

Channel: docs-only (permission-modes page observed 2026-09-23). Half: defect.

Operator consequence: Treat auto mode as a review layer, not isolation. Any session that reads untrusted web content in auto mode should also run in the Bash sandbox or a container with egress control; the docs call that defense in depth, the researcher's result says it is the boundary.

## Receipt
- https://code.claude.com/docs/en/permission-modes
- https://embracethered.com/blog/posts/2026/breaking-claude-code-opus-5-and-automode/
