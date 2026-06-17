---
schema_version: bitter.frontier_digest_fragment.v0
fragment_id: 2026-05-12-claude-code-fragment
window:
  start: 2026-05-07
  end: 2026-05-12
parent_run: 2026-05-12-partial-cycle-claude-code-2026-05-07_2026-05-12-frontier-v0
status: not_published
note: >
  Digest fragment from a partial cycle. Not itself a weekly digest.
  Exists to test the digest-then-profile sequencing on a
  closed_source_release_notes source.
---

# Claude Code Fragment (Partial Cycle, 2026-05-07 -- 2026-05-12)

The most significant change this window is a new surface, not a new feature.
[`claude agents`](https://code.claude.com/docs/en/agent-view) (v2.1.139,
Research Preview) opens a full-screen list of every Claude Code session by state:
working, waiting on you, done, or failed. Background sessions run under a
persistent supervisor process -- they keep going when you close the terminal,
isolate their file edits to separate git worktrees automatically, and show
one-line summaries without requiring you to open the transcript. You can reply
to a blocked session from a peek panel without attaching.

The design is deliberate: `claude agents` is a management surface, not just a
session list. You can dispatch new sessions from the prompt, background an active
session with one keystroke, filter by state or directory, and pin sessions that
need attention. The combination of persistent background execution, automatic
worktree isolation, and lightweight peek/reply closes the gap between "running
five Claude sessions in separate windows" and having a proper multi-agent
workspace.

Alongside it, the [`/goal` command](https://code.claude.com/docs/en/changelog#2-1-139)
sets a completion condition that Claude works toward across turns until it is met.
It is the first explicit goal-completion primitive in Claude Code. You can step
away while the work continues, and the live overlay tracks elapsed time, turns,
and tokens consumed.

The governance additions are quieter but load-bearing. `settings.autoMode.hard_deny`
completes the auto-mode policy model: hard blocks that no allow rule can override.
The new `continueOnBlock` option for PostToolUse hooks feeds the rejection reason
back to Claude so it can adapt rather than just stop. Together they move auto mode
from "classifier decides, full stop" to "classifier decides, explains, and tries
again with the constraint in context."

One behavioral change to note: `worktree.baseRef` reverts to `"fresh"` (branch
from `origin/<default>`) as the default. Operators who relied on new worktrees
carrying unpushed local commits need to set `worktree.baseRef: "head"` explicitly.

## What To Try

- Dispatch background sessions with `claude --bg "<prompt>"` and use
  `claude agents` to monitor them. Peek and reply from the list to handle
  blocked sessions without leaving the supervisor view.
- Set a `/goal` on a multi-step refactoring or investigation and check back
  after several minutes. Inspect the turn/token overlay to calibrate how
  complex your goals should be for a given context budget.
- Add `continueOnBlock: true` to a PostToolUse hook that currently rejects
  certain file writes. Include a `reason` that explains the constraint.
  Watch whether Claude routes around the rejected path or clarifies its intent.

## What Remains Uncertain

- What artifact does `/ultrareview` produce, and how should a CI pipeline
  ingest or route the verdicts? The research preview returns findings to
  CLI/Desktop but the schema is not yet documented.
- Whether `/goal` state survives context compaction. The compaction prompt
  now asks the model to preserve sensitive user instructions; whether a goal
  counts as sensitive is not specified.
- How `parentSettingsBehavior` (the admin-tier SDK managedSettings merge key,
  v2.1.133) interacts with enterprise policy deployments at scale. The changelog
  documents the key but not the policy-merge semantics in detail.
