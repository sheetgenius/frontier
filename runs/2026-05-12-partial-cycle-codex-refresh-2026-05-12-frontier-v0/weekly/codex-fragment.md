---
schema_version: bitter.frontier_digest_fragment.v0
source: codex
window:
  start: 2026-05-12
  end: 2026-05-12
finding_ids:
  - 2026-05-12-codex-pretooluse-input-rewrite
---

**Codex `PreToolUse` hooks can now rewrite tool inputs before execution.**
[PR #20527](https://github.com/openai/codex/pull/20527) adds `updatedInput`
support: when a hook returns `permissionDecision: "allow"` alongside an
`updatedInput` payload, the tool receives the rewritten input rather than the
original. Hook authors who previously returned `updatedInput` expecting rewrites
to apply should re-test after upgrading — behavior changes. New capability:
hooks can now sanitize, normalize, or redirect tool arguments before dispatch,
not just allow or deny.
