---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-05-13
  end: 2026-05-27
versions_covered: "v2026.513.0..v2026.525.0"
status: accepted_signal
confidence: high
accessibility_impact: medium
operator_relevance: high
bitter_relevance: high
factory_relevance: high
actionability: study
evidence:
  - label: "Paperclip v2026.525.0 release (scoped agent permissions, routine env secrets, Modal sandbox)"
    url: https://github.com/paperclipai/paperclip/releases/tag/v2026.525.0
    precision: release_note
  - label: "PR #6386: scoped agent permissions and protected assignments"
    url: https://github.com/paperclipai/paperclip/pull/6386
    precision: commit_diff_reviewed
  - label: "PR #6212: routine env secrets with agent < project < routine precedence"
    url: https://github.com/paperclipai/paperclip/pull/6212
    precision: commit_diff_reviewed
  - label: "PR #6009: board-managed document locks (v2026.517.0)"
    url: https://github.com/paperclipai/paperclip/pull/6009
    precision: commit_diff_reviewed
---

# Paperclip: Scoped Agent Permissions, Layered Routine Secrets, Document Locks

## What Changed

Paperclip's 2026-05-13 → 2026-05-27 window pushes the structural-not-
asserted governance thesis from the prior digest into two new
surfaces.

**Scoped agent permissions and protected assignments
([PR #6386](https://github.com/paperclipai/paperclip/pull/6386),
v2026.525.0)** routes issue and agent-assignment mutations through a
real authorization service with protected-assignment enforcement.
Assignment is no longer "agent declared, server believed" — it goes
through authz. The plugin SDK and host APIs gain company-settings
slots and policy/grant management. Blocked issues get retry-now
affordances. An incremental principal-access compatibility backfill
runs against pre-existing data.

**Routine env secrets with explicit precedence
([PR #6212](https://github.com/paperclipai/paperclip/pull/6212),
v2026.525.0)** makes routine env flow through the runtime contract
with persisted revisions and `agent < project < routine` precedence.
Safe secret metadata surfaces in routine UI and history without
exposing secret values in logs or `secret_access_events`. The
precedence is named in release notes, not just code — it is meant
to be an operator concept.

**Board-managed document locks
([PR #6009](https://github.com/paperclipai/paperclip/pull/6009),
v2026.517.0)** preserve approved snapshots, route agent writes to
derived documents, expose lock state in the UI and API, and record
lock activity. Approved documents cannot be overwritten by an agent
in-place; agent writes are diverted to a derived document.

**Modal as a first-party sandbox plugin
([PR #6245](https://github.com/paperclipai/paperclip/pull/6245))**
joins E2B, Cloudflare, Daytona, and exe.dev. The ACPX-Claude adapter
now resolves bare Claude model IDs, surfaces real diagnostic detail
instead of opaque "Internal error," and **respects user
`~/.claude/settings.json` permissions**
([PR #6590](https://github.com/paperclipai/paperclip/pull/6590)).

## Why It Matters

The prior digest captured Paperclip's `in_review` claim: agents
cannot self-transition to review without a real review path. The
new work generalizes that thesis across object types:

- **Assignment** goes through authz.
- **Routine secrets** layer with documented precedence.
- **Documents** lock at approval.

Together: governance is being enforced at the structural layer, not
asserted by the agent. This is the cleanest evidence in the watchlist
that multi-agent labor can be governed without trusting agent
self-report.

The ACPX-Claude permission-file deference is its own small but real
move: Paperclip is a control plane that, in this composition,
*defers* to the underlying coding agent's own permission file
(`~/.claude/settings.json`) rather than owning permissions
top-down. That is a different posture than "control plane owns all
permissions" — and it raises a composition question recorded in the
run audit note (where do findings about cross-product permission
composition live in the schema?).

## Operator Implication

- **Multi-agent operators**: this is direct evidence Paperclip is
  operationalizing the governance thesis. Re-evaluate Paperclip's
  authz model for your deployment; the principal-access backfill
  means pre-existing data is being normalized to the new model.
- **Secret-handling operators**: the `agent < project < routine`
  precedence is the kind of structural choice you must understand to
  govern correctly. Read PR #6212 before configuring routine env in
  a deployment where secrets matter.
- **Approval-discipline operators**: document locks give approval a
  persistent surface. Operators relying on the prior
  "approve-by-convention" pattern should migrate to lock-backed
  approval.
- **ACPX-Claude operators**: confirm `~/.claude/settings.json` is
  configured as the source of truth for Claude permissions; the
  Paperclip control plane now respects it.

## Open

- The principal-access compatibility backfill suggests pre-existing
  data without principal-access metadata. The pre-backfill governance
  baseline and operator action for older versions is not in the
  release notes — possible security-advisory shape.
- The composition question — does Paperclip's authz service compose
  with the agent-owned permission file, or do they operate on
  disjoint surfaces? — affects how operators should structure
  permission policy.
- Modal cold-start probe timeout at 120s is a sandbox-class
  characteristic vs. Modal-specific quirk; affects timeout settings
  for other cold-start providers.
