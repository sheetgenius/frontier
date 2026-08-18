---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openclaw-the-boundary-fix-jumped-beta-lines-2026-7-2-was-abandoned-2026-8-1-beta
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.2
    precision: github_release
---
# 2026-08-17-openclaw-the-boundary-fix-jumped-beta-lines-2026-7-2-was-abandoned-2026-8-1-beta

The boundary fix jumped beta lines: 2026.7.2 was abandoned, 2026.8.1-beta.2 carries it.

v2026.8.1-beta.2 (2026-08-15) contains the workspace-boundary fix, as did v2026.7.2-beta.5 through beta.7. But the 2026.7.2 beta line that this publication tracked last window was never promoted  --  no v2026.7.2 stable tag exists  --  and beta numbering restarted at 2026.8.1. The fix survived the line change because it lives on main and both beta lines are cut from main, not because 7.2 was promoted.

Channel: preview-or-beta. Ancestry: gh api repos/openclaw/openclaw/compare/v2026.8.1-beta.2...cc027149e553ff4be1afe2ca9cc3de9ccdea6f68 -> status=behind, ahead_by=0 (fix IS an ancestor of the beta tag). The 2026.7.2 line that first carried it never produced a stable tag: the tag list goes v2026.7.2-beta.1..beta.7 then straight to v2026.8.1-beta.1/beta.2, with no v2026.7.2. compare/v2026.8.1-beta.2...v2026.7.2-beta.7 -> diverged, ahead_by=66, behind_by=5470, so 8.1-beta is a new cut from main rather than a promotion of the 7.2 betas. npm dist-tag `beta` = 2026.8.1-beta.2 (published 2026-08-15T05:35:31Z).

Operator consequence: If you need the fix today, `openclaw update --channel beta` is the only channel that has it, and you are accepting the rest of a 5,470-commit beta with it. Treat 'it shipped in beta.5' from the prior window as expired information: that beta line is dead, and beta.5 is not on the path to any current release.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.2
