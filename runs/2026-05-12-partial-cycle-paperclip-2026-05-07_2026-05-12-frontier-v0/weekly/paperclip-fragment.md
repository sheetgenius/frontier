---
schema_version: bitter.frontier_digest_fragment.v0
fragment_id: 2026-05-12-paperclip-fragment
window:
  start: 2026-05-07
  end: 2026-05-12
parent_run: 2026-05-12-partial-cycle-paperclip-2026-05-07_2026-05-12-frontier-v0
status: not_published
note: >
  Digest fragment from a partial cycle. Not itself a weekly digest.
  Exists to test the digest-then-profile sequencing on Paperclip,
  the coordination and economic-control-plane source.
---

# Paperclip Fragment (Partial Cycle, 2026-05-07 -- 2026-05-12)

v2026.511.0 is Paperclip's governance wave. Three additions are worth reading
together as a single argument.

**Secrets provider vaults.** Company secrets now have provider-vault configuration,
with AWS Secrets Manager as the first remote-import backend. Operators can
import credentials from AWS, track binding usage, record access events, and
configure rotation guards. The database gains `secret_access_events` and
`company_secret_provider_configs` tables. Rotation is no longer entirely
manual. This is credential governance at the orchestration layer — not just
storing API keys, but tracking which keys are in use, who used them, and when
they were last rotated.

**Agent-authored review restrictions.** The hardened control-plane safety fix
(PR #5292) closes a gap where an agent model could self-transition an issue to
`in_review` without going through a real review path. The fix makes `in_review`
state a control-plane precondition, not a convention the model can skip. This
is a meaningful governance enforcement: it is now structurally harder for an
agent to claim its work is under review when it isn't.

**Host environment isolation.** SSH remote execution now strips the inherited
host shell environment before passing env to remote commands (PR #5142). Prior
to this fix, the Paperclip host's environment — including API keys, tokens, and
filesystem paths — was being forwarded to remote execution targets. Operators
running SSH-managed remote agents should treat this as the equivalent of a
security advisory.

Taken together: Paperclip is building enforced governance at the control-plane
level — not dashboard descriptions of governance, but state machines that block
state transitions without required preconditions. That is a significant
architectural commitment for an agent orchestration layer.

On the capability side: the `cursor_cloud` adapter routes work to Cursor's
hosted-agent platform, adding cloud-hosted Cursor to the adapter roster
alongside local Cursor and local Claude Code. Daytona, exe.dev, and Cloudflare
sandbox providers expand the execution environment options. Planning mode gives
issues a `standard`/`planning` flag through the full stack. Routine revision
history with restore makes routine definitions auditable.

## What To Try

- Upgrade any SSH-managed execution environment before running new remote agents.
  The host env isolation fix is silent in prior versions — there is no warning
  when host env is being forwarded to remote execution.
- If you manage API keys for agents: open Secrets settings and review the AWS
  Secrets Manager import path. The `secret_access_events` table is created by
  migration `0082` and starts recording access from the upgrade point forward.
- Test the `cursor_cloud` adapter if you run Cursor cloud-hosted agents.
  Heartbeats map to Cursor's durable-agent model with session reuse.

## What Remains Uncertain

- The `in_review` self-transition restriction is a governance enforcement in the
  control plane. But what counts as a "real review path"? Is the requirement
  for a human reviewer, an automated review step, or a configured review
  participant list? The PR notes are not explicit about the gate criteria.
- The secrets rotation guard is documented in the release notes but the
  rotation trigger mechanism is not yet clear: does Paperclip poll AWS on a
  schedule, respond to a webhook, or require manual import?
- Planning mode issues carry a `work_mode` flag through the stack. Does planning
  mode change the agent's behavior during execution (e.g., output format, tool
  restrictions), or is it purely a UI/classification signal?
