---
schema_version: bitter.frontier_digest_fragment.v0
source: gemini-cli
window:
  start: 2026-05-12
  end: 2026-05-12
finding_ids:
  - 2026-05-12-gemini-session-resume-reliability
---

**Gemini CLI session resume now reliable for legacy session formats.**
[PR #26577](https://github.com/google-gemini/gemini-cli/pull/26577) fixes two
bugs: legacy chat JSON files (with `sessionId` and messages) now appear in
`/resume` and `--list-sessions`, and `--resume <sessionId>` failures surface an
error rather than silently starting a new session. Operators who relied on
`--resume` with legacy session formats should re-test after upgrading — prior to
this fix, resume failures were silent.
