---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-cli-hooks-and-nested-rules-cover-work-that-previously-escaped-their-expected-lifecycle
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/cli/changelog#oct-15-2026
    precision: official_docs
  - url: https://cursor.com/docs/cli/changelog#oct-17-2026
    precision: official_docs
  - url: https://cursor.com/docs/cli/changelog#oct-22-2026
    precision: official_docs
  - url: https://cursor.com/docs/hooks
    precision: official_docs
---
# 2026-10-24-cursor-cli-hooks-and-nested-rules-cover-work-that-previously-escaped-their-expected-lifecycle

CLI hooks and nested rules cover work that previously escaped their expected lifecycle. Task-matching post-success and post-failure hooks now fire for subagents and can return context to the parent. Child hooks receive the child's transcript path. Nested AGENTS.md and always-apply rules load on an initial edit even without an earlier read. The CLI also reports failed or missing Windows hook commands as failures, extending the earlier editor-specific repair. Current hook docs retain fail-open handling for many execution failures unless `failClosed` is set; cloud MCP execution hooks are separately listed as deferred.

Channel: tagged-release. Half: both. Date: 2026-10-15, 2026-10-17, 2026-10-22.

Operator consequence: Recheck audit scripts against child success and failure, an edit-first nested directory, and a missing hook executable. A hook firing and a hook blocking are separate checks. These repairs remove some wrapper bookkeeping around delegated work, but rule discovery does not turn instructions into enforcement and editor/CLI hook support must not be assumed for every cloud hook.

## Receipt
- https://cursor.com/docs/cli/changelog#oct-15-2026
- https://cursor.com/docs/cli/changelog#oct-17-2026
- https://cursor.com/docs/cli/changelog#oct-22-2026
- https://cursor.com/docs/hooks
