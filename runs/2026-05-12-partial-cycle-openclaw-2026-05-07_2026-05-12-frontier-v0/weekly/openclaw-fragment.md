---
schema_version: bitter.frontier_digest_fragment.v0
fragment_id: 2026-05-12-openclaw-fragment
window:
  start: 2026-05-07
  end: 2026-05-12
parent_run: 2026-05-12-partial-cycle-openclaw-2026-05-07_2026-05-12-frontier-v0
status: not_published
note: >
  Digest fragment from a partial cycle. Not itself a weekly digest.
  Exists to test the digest-then-profile sequencing on OpenClaw,
  the accessibility calibration source.
---

# OpenClaw Fragment (Partial Cycle, 2026-05-07 -- 2026-05-12)

The v2026.5.10 beta series (five releases in two days, May 10--11) brought
OpenClaw a cluster of governance and reliability additions worth watching as
a pattern, not just as features.

The most operator-relevant change is per-agent message send restrictions. The
new `tools.message.crossContext` and `tools.message.actions.allow` overrides
let you deploy a sandboxed or public agent that can only reply in the thread it
was addressed in -- no cross-context message sends, no reaching into other
conversations. Previously, restricting an agent's message capabilities meant
changing the global bot policy. Now it is a per-agent config. An operator
running a public onboarding agent or a helpdesk agent in a shared Slack
workspace can limit its action surface without touching the rest of the
gateway setup.

The second notable addition is the skill archive upload gate
(`skills.install.allowUploadedArchives`). Trusted Gateway clients can now stage
and install zip-backed skills -- but only when the operator explicitly enables
the flag. The code-install surface is closed by default. OpenClaw keeps
repeating this pattern: capabilities that touch code execution or credential
access are opt-in, explicit, and documented as requiring operator trust. That
is a product posture choice, and it is worth noting as a design pattern for
any gateway that handles untrusted input.

The smaller changes are consistent with the same theme. Memory auto-promotion
is now bounded: the dreaming process compacts the oldest auto-promoted sections
when memory reaches the budget, while preserving user-authored notes. Long
sessions stay predictable. Transcript reads are now streaming rather than
in-memory: peak memory for a long session dropped roughly 90%. Voice joins can
be restricted to configured channels.

And the least glamorous improvement: CLI onboarding now explains what to run
next at each step. OpenClaw's value is that it makes agentic work reachable.
Terse setup labels are a first-run barrier. Next-step guidance is an
accessibility improvement, and for a tool that reaches everyday users through
Discord and Telegram, it is not a minor one.

## What To Try

- Deploy a sandboxed agent with `tools.message.crossContext: false`. Verify it
  cannot message outside the current conversation even when the global policy
  would allow it.
- If you run long OpenClaw sessions, check the new memory cap behavior: auto-promoted
  entries older than the bootstrap budget compact; user-authored notes survive.
  Inspect `MEMORY.md` before and after a long session to understand the priority rule.
- Run `openclaw onboard` on a fresh install and follow each step. The wayfinding
  improvements are most visible on first run; test with someone who has not used
  OpenClaw before.

## What Remains Uncertain

- All v2026.5.10 releases are beta. Feature details may change before stable release.
- The exact `session.agentToAgent.maxPingPongTurns` semantics for complex
  multi-agent workflows are not fully documented: what happens at the limit, and
  whether the count resets per session or per turn chain.
- The `skills.install.allowUploadedArchives` surface is opt-in but the trust
  model for uploaded archives (signature checking, sandbox isolation) is not
  yet documented.
