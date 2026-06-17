---
schema_version: bitter.frontier_digest_fragment.v0
fragment_id: 2026-05-12-hermes-agent-fragment
window:
  start: 2026-05-07
  end: 2026-05-12
parent_run: 2026-05-12-partial-cycle-hermes-agent-2026-05-07_2026-05-12-frontier-v0
status: not_published
note: >
  Digest fragment from a partial cycle. Not itself a weekly digest.
  Exists to test the digest-then-profile sequencing on Hermes Agent.
---

# Hermes Agent Fragment (Partial Cycle, 2026-05-07 -- 2026-05-12)

Hermes Agent v0.13.0 is called "The Tenacity Release" and the name is precise.
The theme is what happens when agents don't finish: sessions that die mid-task,
workers that claim completion without evidence, goals that drift over long
conversations. The release adds durability contracts for all of these.

The centerpiece is the Kanban board becoming a serious multi-agent coordination
layer. Workers pick up tasks, execute them, and must prove completion before the
card moves to done -- there is a hallucination gate that verifies
worker-created claims. If a worker exits without completing its task, it is
auto-blocked. Stale workers are reclaimed automatically via heartbeat. Zombie
processes are detected on both Linux and macOS. Per-task retry budgets mean
failures don't silently cascade. This is not a task tracker. It is an
orchestration layer with explicit reliability contracts.

The `/goal` command ships as a first-class primitive for the same problem at
the session level. Lock the agent onto a target and it stays on task across
turns -- through context compression, turn budget management, and conversation
branching. The agent doesn't forget what you asked it to do.

The security wave is the second half of the release. Eight P0 closures, with
two that require operator attention on upgrade:

**Secret redaction is now ON by default.** It was previously opt-in. If you
have Hermes log pipelines that expect raw output, they will see sanitized logs
after upgrade.

**Discord role-allowlists are now guild-scoped.** The prior behavior allowed a
role match from any guild to authorize a cross-guild DM -- a CVSS 8.1 bypass.
Discord operators with role-based access control should re-verify their
configuration.

WhatsApp rejects unknown contacts by default. Cron scans assembled skill
content for prompt injection before execution. MCP OAuth token saves close
a TOCTOU window. Redacted debug shares. Together: Hermes is treating its own
security surface as a product obligation, not an afterthought.

The channel allowlist additions (`allowed_channels`/`allowed_chats`/`allowed_rooms`
across Slack, Telegram, Mattermost, Matrix, DingTalk) are lower drama but worth
noting: operators can now restrict which contexts the agent responds in, without
disabling platforms entirely. The governance pattern matches what OpenClaw added
for voice channels last week.

One addition that deserves a paragraph on its own: `no_agent` cron mode. Cron
jobs can now run a script directly, skip the LLM entirely, and deliver output
verbatim to the home channel. Empty stdout is silent. This makes cron a pure
automation runtime as well as an agent trigger. The same cron configuration can
run a five-line script for deterministic checks and invoke the agent only when
human judgment is actually needed.

## What To Try

- Upgrade carefully and check your log pipelines. Redaction is now on by
  default; any tooling that reads Hermes logs should handle sanitized output.
- If you run a multi-agent Kanban setup, test the hallucination gate with a
  worker that exits cleanly without completing its task. Verify it gets
  auto-blocked rather than silently marked done.
- Try `no_agent` cron mode for a deterministic check (e.g., a disk-space
  watchdog, a uptime probe). Compare the output delivery against an agent-mode
  cron job on the same schedule.

## What Remains Uncertain

- The Kanban hallucination gate verifies worker-created claims -- but what does
  verification involve? Is it model-based, schema-based, or rule-based? The
  gate's false-positive and false-negative behavior under real workloads is not
  yet documented.
- The `/goal` Ralph loop stays on task "across turns" -- but what is the
  mechanism? How does goal context survive compression, and what happens when
  the goal budget is exhausted vs. the turn budget?
- The `no_agent` cron mode delivers non-empty stdout verbatim. Are there size
  limits on delivery, or can a script generate arbitrarily large output to the
  home channel?
