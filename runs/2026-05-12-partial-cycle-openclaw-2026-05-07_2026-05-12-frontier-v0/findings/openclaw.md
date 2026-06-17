---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-05-07
  end: 2026-05-12
versions_covered: "v2026.5.10-beta.1..v2026.5.10-beta.5"
status: accepted_signal
confidence: medium
accessibility_impact: medium
operator_relevance: high
actionability: observe
evidence:
  - label: "v2026.5.10-beta.5 release notes (primary)"
    url: https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.5
    precision: release_note
  - label: "OpenClaw getting-started docs"
    url: https://docs.openclaw.ai/start/getting-started
    precision: official_docs
---

# OpenClaw: Agent Permission Surfaces, Gated Code Install, and Onboarding Clarity

## What Changed

OpenClaw shipped its v2026.5.10 beta series (beta.1 through beta.5, May 10--11,
2026) with a cluster of changes relevant to operators deploying agents in
multi-channel and multi-user contexts.

**Per-agent message send restrictions** (`tools.message.crossContext` and
`tools.message.actions.allow` overrides): sandboxed and public agents can now
restrict their own message-send capabilities to the current conversation without
changing the global bot policy. Combined, these two config keys let an operator
deploy a public-facing agent with a deliberately limited action surface --
specifically, an agent that can only reply in the thread it was addressed in,
with no cross-context message sends.

**Gated skill archive upload** (`skills.install.allowUploadedArchives`): an
opt-in install path gated behind a config flag. When enabled, trusted Gateway
clients can stage and install zip-backed skills. The gate is explicit and
operator-owned: the code-install surface is closed by default.

**Memory dreaming promotion cap**: the gateway now compacts the oldest
auto-promoted sections of `MEMORY.md` when memory exceeds the bootstrap budget,
while preserving user-authored notes. The behavior change is that long-running
OpenClaw agents no longer silently accumulate unlimited auto-memory; there is
a bounded working set with a clear priority rule (user notes survive, oldest
auto-promoted sections yield).

**CLI onboarding wayfinding**: the setup, onboarding, configure, and channel
commands now explain the next useful command at each step rather than relying
on terse labels. This is a low-drama change with high first-run impact: the
most common OpenClaw support question is "what do I do after I run install?"

**Voice channel allowlist** (`voice.allowedChannels`): restricts voice joins
and bot voice-state moves to configured channels. Operators running Discord
voice deployments can now limit which channels the agent can join, rather than
allowing voice everywhere in a server.

**Transcript streaming** (memory optimization): sessions now stream transcript
reads rather than loading the full file into memory. Peak RSS delta for a
200 MiB synthetic transcript dropped from +252 MiB to +27 MiB -- roughly a
90% reduction. Long-running sessions that were previously memory-constrained
are more viable.

**Agent-to-agent turn limit extended**: `session.agentToAgent.maxPingPongTurns`
raised from a max of 10 to a max of 20 (default remains 5). Enables longer
agent-to-agent exchanges for workflows that require multi-turn handoffs.

Note: all v2026.5.10 releases are beta. These changes may adjust before the
stable 2026.5.10 release.

## Operator Consequence

The per-agent message restrictions are the most meaningful governance addition:
they let operators deploy agents with deliberately restricted send capabilities
without needing to modify the global bot policy. A sandboxed helpdesk agent can
be configured to never message outside its own thread. A public onboarding
agent can be limited to send-only responses.

The gated skill archive upload follows the pattern OpenClaw has been building:
capabilities that could install or execute code require explicit operator
enablement, and the default is closed. This is good design for a self-hosted
gateway where the operator controls the trust surface.

The onboarding wayfinding improvement is easy to underweight because it is not
technically complex. But OpenClaw's value is accessibility. "What do I run
next?" friction at setup is the single largest barrier to a new user completing
installation. Next-step explanations at each stage are a real accessibility
improvement.

The transcript streaming optimization is relevant for Bitter: OpenClaw agents
running long sessions no longer face a memory wall that forces session
termination. This changes the practical ceiling for long-horizon OpenClaw runs.

## Bitter Implication

The per-agent permission overrides are a worked example of operator-controlled
agent authority surfaces. Bitter should note: authority restriction at the agent
level (not just the platform level) is a viable pattern for multi-tenant or
public-facing deployments.

The gated code-install surface (skill archive upload) models how a self-hosted
platform should expose a potentially dangerous capability: behind a flag, default
closed, with explicit operator opt-in. Bitter should apply the same principle to
any surface that involves untrusted code or credential access.

## Signal

Per-agent message restrictions and the memory dreaming cap are both action-bearing:
operators deploying public-facing agents should evaluate crossContext restrictions
now; operators running long-horizon sessions should know their session memory is
now bounded with a clear priority rule. Together with the transcript streaming
optimization, the long-running session story for OpenClaw improved materially
this window.
