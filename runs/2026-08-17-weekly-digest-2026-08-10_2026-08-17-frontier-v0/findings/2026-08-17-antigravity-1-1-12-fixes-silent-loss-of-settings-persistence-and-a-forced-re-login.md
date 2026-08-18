---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-antigravity-1-1-12-fixes-silent-loss-of-settings-persistence-and-a-forced-re-login
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
# 2026-08-17-antigravity-1-1-12-fixes-silent-loss-of-settings-persistence-and-a-forced-re-login

1.1.12 fixes silent loss of settings persistence and a forced re-login from a slow keyring.

'Fixed corruption of `config.json` by writing user config atomically, so a crash or a concurrent writer can no longer leave a truncated file that silently breaks settings persistence.' And: 'Fixed the CLI giving up on a slow OS keyring after one second and falling back to empty storage, which forced a re-login; it now waits five seconds, as every other keyring operation already did.' The first matters more than it reads: `config.json` is where 1.1.11 had just centralised plugin enablement, and a silently truncated config means your persisted policy stops applying without telling you. 1.1.13 continues the same cluster -- trajectory truncation destroying nearly all of a long conversation's history, unbounded conversation-database growth on every background wake, and transcript corruption when a background message raced context compaction.

Channel: tagged-release. Ancestry: Tag 1.1.12 -> f7519c9084190ed421e89dd81c63970b5177c9ef (stable, prerelease:false), commit on main dated 2026-08-11T01:26:06Z; both entries verbatim in the release body and in CHANGELOG.md pinned at that SHA.

Operator consequence: Upgrade, then verify your `config.json` and `settings.json` actually parse and contain what you expect -- a pre-1.1.12 crash may have left them truncated, and the symptom is your policy quietly not applying rather than an error. If you keep long-running or background-woken sessions, expect some pre-1.1.13 conversation state to be lost or unparseable and do not rely on those transcripts as an audit record.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.12
