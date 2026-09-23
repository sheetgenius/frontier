---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-antigravity-1-1-18-a-valueless-prompt-flag-could-silently-turn-the-sandbox-off
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.1.18/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-09-21-antigravity-1-1-18-a-valueless-prompt-flag-could-silently-turn-the-sandbox-off

1.1.18: a valueless prompt flag could silently turn the sandbox off. On 1.1.17 and earlier, a headless invocation that put the prompt after `--sandbox` ran unsandboxed, with `--sandbox` as the prompt text, and gave no error.

Channel: tagged-release. Half: defect. Date: 2026-08-22.

Operator consequence: Upgrade scripted `agy -p` / `--print` callers to >= 1.1.18. Re-audit CI and cron wrappers for flag order (`--print --sandbox '...'`) and treat runs on older builds as having had no sandbox. Pair with 1.2.1: the status line reported the sandbox as disabled when launched with `--sandbox` until 1.2.1, so the UI was not evidence either way before 1.2.1.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.1.18/CHANGELOG.md
