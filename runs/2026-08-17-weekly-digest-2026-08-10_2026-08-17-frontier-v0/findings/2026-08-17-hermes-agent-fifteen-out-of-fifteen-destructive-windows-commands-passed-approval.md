---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-fifteen-out-of-fifteen-destructive-windows-commands-passed-approval
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/84428
    precision: merged_pr
---
# 2026-08-17-hermes-agent-fifteen-out-of-fifteen-destructive-windows-commands-passed-approval

Fifteen out of fifteen destructive Windows commands passed approval silently.

Probed live against the branch's parent, 15 of 15 destructive Windows commands cleared the approval system with no prompt: `Remove-Item -Recurse -Force`, `del /s /q`, `rd /s /q`, `iwr ... | iex`, `taskkill /F`, `Stop-Process -Force`, `Format-Volume`, `diskpart`, `icacls ... /grant Everyone:(F)`, `del C:\Users\me\.ssh\id_rsa`, `cipher /w`, `vssadmin delete shadows`, `bcdedit /set`, `reg delete`. Two root causes: the DANGEROUS_PATTERNS list was POSIX-shaped, and the command normalizer stripped backslashes as shell escapes, so `C:\Users\me\.ssh` reached the matcher as `C:Usersme.ssh` and no path rule could ever fire. The fix adds a Windows destructive tier (every pattern requiring the destructive flag or verb, so `reg query`, `sc query`, plain `del file.txt` do not prompt) plus a Windows-path detection variant emitted before normalization eats the backslashes. The patterns live in the main list, not a win32-gated tier, because a Linux-hosted Hermes can drive a Windows box over SSH. 48 test cases: 27 destructive flagged, 13 benign not flagged, 5 credential-path cases in both separator spellings, 4 POSIX-escape non-regressions.

Channel: tagged-release. Ancestry: merge_commit_sha e1caf88c6ca62e364d4599a53c097b10c70ffb03; compare/e1caf88c...v2026.8.13 -> status=ahead, ahead_by=424, behind_by=0 (ancestor of stable tag v2026.8.13).

Operator consequence: This is the sharpest single finding in the window. If you ran Hermes against a Windows host  --  natively or over SSH from Linux  --  on v0.20.0 or earlier, your approval rail was not covering the commands that destroy a machine, including shadow-copy deletion and boot-config edits. Upgrade to v0.20.1+ and re-audit any Windows session transcript from before 2026-08-12.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/84428
