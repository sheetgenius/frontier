---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-05-08
  end: 2026-05-11
commit_count: 71
status: accepted_signal
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: test
evidence:
  - label: "Permissions and approval mode visible in TUI status line (PR #21677)"
    url: https://github.com/openai/codex/commit/e6312d44f073
    precision: commit_diff_reviewed
  - label: "Role-aware plugin share context APIs (PR #21867)"
    url: https://github.com/openai/codex/commit/479491ed8925
    precision: commit
  - label: "Plugin share settings with discoverability (PR #21637)"
    url: https://github.com/openai/codex/commit/ae15343243ee
    precision: commit
  - label: "Skills watcher moved to app-server (PR #21652)"
    url: https://github.com/openai/codex/commit/408e6218ab7f
    precision: commit
  - label: "CLI 0.130.0 release: plugin details, remote control, app-server pagination"
    url: https://developers.openai.com/codex/changelog
    precision: release_note
---

# Codex: Permissions Get A Glance Surface; Plugin Sharing Gets Role-Aware

## What Changed

The Codex TUI status line gains separately configurable `permissions` and
`approval-mode` items, so an operator can see "Read Only / Workspace /
Full Access" alongside the active approval policy at a glance, with
named profiles preserved and non-standard shapes rendered as `Custom
permissions`. The commit is diff-reviewed and includes test coverage
for status-surface preview rendering. The split between the two items
is intentional: they answer related but different questions
(sandbox/profile shape vs approval handling) and the author argues
keeping them separate keeps each label concise.

Plugin sharing gains role-aware context APIs and discoverability work,
splitting share controls from raw access permissions. The skills
watcher moves to the app-server (mirroring an app-server consolidation
trend already visible in the prior window's findings). Git plugin
metadata is now cached to reduce startup cost.

The CLI 0.130.0 changelog entry (2026-05-08) cross-references the same
themes: plugin details improvements, remote control surfaces, and
app-server pagination.

## Operator Consequence

Authority surfacing in the status line is a real ergonomic and
governance win. The most common reason an operator gets surprised by a
Codex action is forgetting which permission posture is active.
Splitting `permissions` from `approval-mode` keeps each label short
enough to coexist with other status-line items.

Plugin sharing role-awareness matters for any operator with multiple
roles or environments. Role-aware sharing makes "who can see this
plugin" a first-class question rather than a binary access flag.

## Bitter Consequence

Bitter should record the active permission posture and approval mode
per run as standard receipt fields; the TUI now exposes both as
glanceable strings, which is a clean adapter source.

Plugin share role-awareness is something to test before assuming
Bitter can share configurations across role boundaries.
