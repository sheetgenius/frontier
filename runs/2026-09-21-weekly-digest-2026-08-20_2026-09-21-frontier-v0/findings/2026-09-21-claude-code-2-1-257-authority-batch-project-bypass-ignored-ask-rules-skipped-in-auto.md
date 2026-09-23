---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-2-1-257-authority-batch-project-bypass-ignored-ask-rules-skipped-in-auto
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.257
    precision: github_release
  - url: https://code.claude.com/docs/en/settings
    precision: official_docs
---
# 2026-09-21-claude-code-2-1-257-authority-batch-project-bypass-ignored-ask-rules-skipped-in-auto

2.1.257 (2026-09-01) makes defaultMode bypassPermissions in project or local settings files take no effect, as auto already did, so a repository can no longer put a clone into bypass mode. It adds an auto-mode rule that stops auto-approving cloud metadata-credential fetches, egress evasion and cross-tenant reach, and a one-time prompt before the first read outside the working directories with permissions.blockReadsOutsideWorkingDirectories. It fixes a permissions.ask rule being skipped in auto mode when the command ran inside a compound command or subshell; Bash Read() and Edit() deny rules not applying to < file redirects or reader commands such as tac and egrep; and dismissing the Remote Control consent prompt with Esc or n counting as consent. Same release makes Claude Fable 5.1 the default Fable model.

Channel: tagged-release (2.1.257; on stable 2.1.267). Half: both.

Operator consequence: Any repo that committed bypassPermissions loses it on upgrade. Any auto-mode policy that treated permissions.ask as the human checkpoint did not hold for a && b or $(...) forms before 2.1.257; re-test with a compound command. Check the claude.ai session list on any Remote Control host where the consent prompt was dismissed on an older build.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.257
- https://code.claude.com/docs/en/settings
