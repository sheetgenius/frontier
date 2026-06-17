---
schema_version: bitter.frontier_digest_fragment.v0
fragment_id: 2026-05-11-codex-fragment
window:
  start: 2026-05-08
  end: 2026-05-11
parent_run: 2026-05-11-partial-cycle-codex-2026-05-08_2026-05-11-frontier-v0
status: not_published
note: >
  Digest fragment from a partial cycle. Not itself a weekly digest.
  Exists to test the digest-then-profile sequencing on a
  mixed_official_docs source.
---

# Codex Fragment (Partial Cycle, 2026-05-08 → 2026-05-11)

Codex's most operator-visible move this window is putting authority into
the status line. The TUI now shows
[`permissions`](https://github.com/openai/codex/commit/e6312d44f073)
and `approval-mode` as separately configurable items, with named
profiles preserved and non-standard shapes rendered as `Custom
permissions`. That single ergonomic change addresses the most common
operator-surprise pattern: forgetting which permission posture is
active before issuing a destructive command.

Around it, plugin sharing keeps evolving: a
[role-aware share context API](https://github.com/openai/codex/commit/479491ed8925)
and [discoverability work](https://github.com/openai/codex/commit/ae15343243ee)
split share controls from raw access permissions, and the
[skills watcher moves to the app-server](https://github.com/openai/codex/commit/408e6218ab7f)
in the same direction OpenHands has been consolidating. The
[CLI 0.130.0 release](https://developers.openai.com/codex/changelog)
on 2026-05-08 names the same themes in operator-facing terms.

## What To Try

- If you run Codex in multiple permission profiles, enable both the
  `permissions` and `approval-mode` status-line items. The pair is
  designed to coexist.
- If you share plugins across environments, exercise the role-aware
  context API before assuming a shared plugin keeps the same
  permissions in another role.

## What Remains Uncertain

- The shape of `Codex for Chrome`, announced 2026-05-07 via changelog,
  is outside this window's commit evidence. Scope, access boundaries,
  and security model belong to next cycle.
