---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-v2026-1012-0-requires-a-writer-drain-earlier-integration-migrations-are-conditional
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.1001.0
    precision: github_release
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0
    precision: github_release
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0
    precision: github_release
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/workspace-restore-locks.md#L42-L52
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/SPEC.md#L418
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/2de43fc9094c94f3f85a5f5429bcd77a7bb8e005
    precision: commit
---
# 2026-10-13-paperclip-v2026-1012-0-requires-a-writer-drain-earlier-integration-migrations-are-conditional

v2026.1012.0 requires a writer drain; earlier integration migrations are conditional. v2026.1001.0 removes the legacy Composio broker without credential/grant/rule migration. v2026.1005.0 removes Cloud UI snippets and GET/PATCH /api/auth/preferences. An @-mention no longer wakes the mentioned agent or authorizes taking the task. Ordinary issue comments can still wake the current assignee; assignment, delegation, reviews and other existing wake paths remain. v2026.1012.0 replaces directory locks with kernel-released SQLite files under the instance lock root; old and new writer protocols must not coexist there. Stable pins are Codex 0.160.0, Claude Code 2.1.286 and OpenCode 1.18.34; remote Codex permits >=0.149.0 and <0.161.0. Custom Claude sandbox images need >=2.1.284 for Sonnet 5.5. Silent active-run notices move to 5 and 15 minutes without automatic cancellation.

Channel: tagged-release. Half: both. Date: 2026-10-02, 2026-10-06, 2026-10-12.

Operator consequence: Drain and stop every old server and worker writing to the instance root, including other hosts/containers, before upgrade or rollback. Move leftover legacy hash.lock directories aside; do not delete or move new .lock.sqlite files. If applicable, recreate Composio Connect credentials and access rules, replace UI snippets with plugin contributions and update auth-preference clients. Replace mention-driven dispatch to another agent with assignment/delegation/review. Expect earlier silence alerts, and rebuild obsolete custom Claude images. These integration steps are conditional; the writer drain is mandatory for shared instance roots.

## Receipt
- https://github.com/paperclipai/paperclip/releases/tag/v2026.1001.0
- https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0
- https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/workspace-restore-locks.md#L42-L52
- https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/SPEC.md#L418
- https://github.com/paperclipai/paperclip/commit/2de43fc9094c94f3f85a5f5429bcd77a7bb8e005
