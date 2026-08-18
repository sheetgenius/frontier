---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-codex-0-146-1-hotfix-backports-safer-permission-defaults-for-cyber-specialty
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.146.1
    precision: github_release
---
# 2026-08-10-codex-0-146-1-hotfix-backports-safer-permission-defaults-for-cyber-specialty

0.146.1 hotfix backports safer permission defaults for cyber-specialty models.

A single-purpose stable hotfix on the 0.146 line, cherry-picking #37055. The model catalog now carries an optional `modelSpecialty` field through `model/list`; when a newly selected model carries the `cyber` specialty, an active TUI thread is defaulted to workspace-write permissions with on-request approval, using automatic review when available and otherwise leaving the human as reviewer. The full-access warning for cyber models is strengthened and a notice is shown when auto review is applied. Explicitly configured permission requirements are respected, and explicitly selected permissions survive reasoning-setting changes.

Channel: tagged-release. Ancestry: gh api repos/openai/codex/compare/rust-v0.146.0...rust-v0.146.1 returns exactly 2 commits, the first being 7558bede75dd7f9ed96c4ff00ccc6b28ded01159 '[0.146] Backport safer cyber-model auto-review defaults (#37057)'. rust-v0.146.1 is a non-prerelease GitHub release (prerelease=false, published_at 2026-08-05T15:55:06Z) and npm shows 0.146.1 published 2026-08-05T16:00:31Z.

Operator consequence: Upgrade if you run cyber-capable models: this is the only stable release carrying the fix on the 0.146 line, and it changes the default permission posture on model switch rather than requiring config. If you pin permissions explicitly in config, verify your requirement is still honoured after the switch, because the defaulting logic now reaches into an active thread. Superseded two days later by 0.147.0, so 0.146.1 is only relevant to operators who cannot move off 0.146.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.146.1
