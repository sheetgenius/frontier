---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-deepseek-harness-breaking-changes-an-operator-hits-on-upgrade
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.5-rc.1
    precision: github_release
---
# 2026-09-21-deepseek-harness-breaking-changes-an-operator-hits-on-upgrade

Breaking changes an operator hits on upgrade. The parent's rc.8 SQLite schema problem is moot: the SQLite backend is gone. Session logs migrate forward twice with no way back. On alpha, a failed hot reload can leave a half-applied config.

Channel: preview-or-beta. Half: defect. Date: 2026-08-27 to 2026-09-17.

Operator consequence: Export SQLite-backed sessions on <= 0.1.1 before upgrading. Back up `$DSH_HOME` before moving to 0.1.5 (no downgrade). Third-party plugins written for rc.8 need porting; the unaffiliated oh-my-dsh upgrade skill is linked from 0.1.2-rc.1 notes but is not a DeepSeek product. On alpha, after any live config edit, check `--dump-config` for the new state; a failed activation is not rolled back.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.5-rc.1
