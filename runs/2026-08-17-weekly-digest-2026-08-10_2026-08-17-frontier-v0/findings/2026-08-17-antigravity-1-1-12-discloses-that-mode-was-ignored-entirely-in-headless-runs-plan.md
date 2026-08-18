---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-antigravity-1-1-12-discloses-that-mode-was-ignored-entirely-in-headless-runs-plan
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.12
    precision: github_release
---
# 2026-08-17-antigravity-1-1-12-discloses-that-mode-was-ignored-entirely-in-headless-runs-plan

1.1.12 discloses that --mode was ignored entirely in headless runs -- plan mode never applied in CI.

'Fixed `--mode` being ignored in headless `-p` runs, where a valid value such as `accept-edits` or `plan` was never applied and an unrecognized value produced no warning at all.' Class: silent failure of an operator-supplied safety control. An operator running `agy -p --mode plan` in CI, believing the agent was restricted to planning, was running in whatever mode the persisted config resolved to, with no warning even when the value was garbage. The same release also fixed startup diagnostics -- including the `--mode` warning itself -- being swallowed into the log file instead of printed, so the failure had no visible symptom.

Channel: tagged-release. Ancestry: gh api .../releases/tags/1.1.12 -> prerelease:false, draft:false, published_at 2026-08-11T01:26:58Z. gh api .../git/ref/tags/1.1.12 -> commit f7519c9084190ed421e89dd81c63970b5177c9ef, which appears on main in the windowed commits API as 'docs: add changelog for 1.1.12 (#775)'. CHANGELOG.md at that SHA has '## 1.1.12' as its top section with the entry verbatim.

Operator consequence: This is the upgrade-now item. If any pipeline invoked `agy -p --mode plan` or `--mode accept-edits` before 2026-08-11, the flag did nothing: re-audit what those runs were actually permitted to do rather than what the flag said. Upgrade to 1.1.12 or later and re-verify by passing a deliberately invalid `--mode` value -- you should now get a warning on the terminal, which is itself the proof that startup diagnostics reach you. This continues the arc from 1.1.4 (2026-07-18), which disclosed that headless runs had honoured no persisted settings.json policy at all; the headless permission path has now failed in three separate ways across four weeks.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.12
