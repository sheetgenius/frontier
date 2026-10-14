---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-v2026-1005-0-persists-agent-files-but-new-writes-omit-prior-content-revisions
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/3ca196b0a642aa21b8feba1fcd89edb53d1c622e
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-file-store.ts#L175-L284
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/LOW-TRUST-PRESETS.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0
    precision: github_release
---
# 2026-10-13-paperclip-v2026-1005-0-persists-agent-files-but-new-writes-omit-prior-content-revisions

v2026.1005.0 persists agent files but new writes omit prior-content revisions. Managed AGENTS.md and supporting agent files persist across tasks and sessions and share the Instructions Editor. Concurrent runs sync only changed files; the last sync of the same file wins. New managed-file writes do not append prior-content revisions; old revision and candidate rows are retained for compatibility. Activity records retain actor/run/responsible-user attribution and editor-save content hashes, not a recovery copy of every new version. Directory sync allows 256 MiB per file and 2 GiB per directory; editor input limits are smaller. New runs have no file conflict-review queue. v2026.1012.0 permits low-trust self-instruction edits from authorized owner-chat turns under live provenance/edit-access checks, not arbitrary external tasks.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: Persistent notes and working memory need less cross-task plumbing. If historical instruction content or same-file conflict recovery matters, snapshot the managed directory yourself before consequential runs. Do not read an activity hash as the prior file bytes or infer that old stored history was deleted. Owner-chat authorization verifies the turn and permission, not the semantic intent of each resulting edit.

## Receipt
- https://github.com/paperclipai/paperclip/commit/3ca196b0a642aa21b8feba1fcd89edb53d1c622e
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-file-store.ts#L175-L284
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/LOW-TRUST-PRESETS.md
- https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0
