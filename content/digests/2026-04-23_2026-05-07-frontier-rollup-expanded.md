---
schema_version: bitter.frontier_digest.v0
digest_id: 2026-04-23_2026-05-07-frontier-rollup-expanded
title: "The Harness Leaves The Chat Box"
window:
  start: 2026-04-23
  end: 2026-05-07
run_id: 2026-05-07-commit-harvest-2026-04-23_2026-05-07-frontier-v1
status: published
artifact_version: 4
last_updated: 2026-07-02
sources:
  - codex
  - gemini-cli
  - hermes-agent
  - pi-coding-agent
  - openclaw
  - paperclip
  - agent-zero
  - openhands
finding_count: 8
signal_count: 6
top_signal_ids:
  - 2026-05-07-persistent-agent-state
  - 2026-05-07-visible-computer-workcells
  - 2026-05-07-permissions-secrets-and-sandboxes
  - 2026-05-07-accessibility-is-frontier-capability
  - 2026-05-07-agent-company-control-planes
  - 2026-05-07-integrations-are-volatile
operator_brief:
  thesis: "The action in coding agents has left the model and the transcript. Two weeks of commits across eight projects are about goals, memory, visible computers, permissions, gateways, and supervision layers -- the environment around the agent getting thicker -- and the four sources new to this read (OpenClaw, Agent Zero, Paperclip, OpenHands) each show a different wall of the same building. The durable question is who owns the loop around all of it."
  try:
    - "Run at least one visible-computer harness. Agent Zero's browser, file browser, screenshots, and desktop surface expose failure modes terminal chat hides. [Signal](/signals/2026-05-07-visible-computer-workcells/)"
    - "Prefer memory that asks first: Gemini's Auto Memory inbox proposes changes for review instead of writing them silently. [Signal](/signals/2026-05-07-persistent-agent-state/)"
    - "Read the permissions and sandbox story before an agent touches real credentials -- this fortnight shows who is actually doing that work. [Signal](/signals/2026-05-07-permissions-secrets-and-sandboxes/)"
  watch:
    - "Which visible-computer shape wins: local desktop, browser sandbox, remote workcell, hosted app server, messaging agent, or a mix. [Signal](/signals/2026-05-07-visible-computer-workcells/)"
    - "Whether agent-company control planes (Paperclip's costs, roles, liveness, pause/resume) keep multi-agent systems legible as they scale. [Signal](/signals/2026-05-07-agent-company-control-planes/)"
  uncertain:
    - "OpenClaw's commit volume makes it hard to separate durable product movement from rapid stabilization without deeper release review. [Signal](/signals/2026-05-07-accessibility-is-frontier-capability/)"
    - "Which agent-side memories and goals will be stable enough to integrate deeply, versus merely record as tool-local state. [Signal](/signals/2026-05-07-integrations-are-volatile/)"
---

# The Harness Leaves The Chat Box

Two weeks ago, Agent Zero fired the agent that used a browser and gave the
agent a browser of its own. It replaced a browser-use module with a
[native browser](https://github.com/agent0ai/agent-zero/commit/983d431a5eb785eb9deba9fdfd471fa93f349603),
then added a
[Chromium runtime](https://github.com/agent0ai/agent-zero/commit/fa7eef1919901093b117a98ad6e402d809687cf6),
tabs, screenshot previews, a searchable file browser, Linux desktop controls,
a document canvas, a LibreOffice runtime, and OAuth and quota visibility. The
"workcell" stopped being a metaphor. The agent has a computer now, and the
operator can watch it work.

That is the loudest version of what every commit stream on this expanded
watchlist said in the same fortnight: the interesting action in coding agents
is no longer confined to the model or the chat transcript. Codex is adding
persistent goals, session metadata, plugin controls, and cloud executor
paths. Gemini CLI is treating memory as a reviewable patch. Hermes is sanding
the rough edges off persistent personal agents. Pi keeps proving the opposite
lesson -- a thin harness moves fast precisely because its integrations are
disposable. And the four projects new to this read each expose a different
wall of the same building: OpenClaw the front door (messaging surfaces,
onboarding, visible progress), Agent Zero the machine room, Paperclip the
management floor, OpenHands the whole leased office. The frontier is not one
winning agent. It is the environment around agents getting thicker, and the
durable question is who owns the loop around all of it.

## State becomes product

The strongest single signal is still Codex
[`/goal`](https://github.com/openai/codex/commit/f09e1936e0fd464dcea78fe55b84bd20f721cad6),
and the telling part is not the feature but the follow-through: goal
validation, paste handling, queued-command behavior, user guidance. When a
persistent objective earns that much plumbing, it has stopped being a UX
affordance and become operating state. Gemini's
[Auto Memory](https://github.com/google-gemini/gemini-cli/commit/a7beb890d093e2cf66ed1ac8debff690b75e1f6d)
inbox makes the same point from the other side, and makes it better than
anyone: memory should be proposed, reviewed, and accepted, not silently
smeared into hidden context. Hermes added memory scoping and
[Curator](https://github.com/NousResearch/hermes-agent/commit/fe8560fc1249b4a7e448b5c3b80a7d213df9d78f)
commands; OpenClaw put agent progress into the chat itself with
[timeline spans](https://github.com/openclaw/openclaw/commit/61223a74a43fd8768c426d5b22f1633dbad37477).
Agent-side state is becoming durable, visible, and operational -- which means
a serious run now has to be able to answer what goal, memory, session, or
thread state shaped it.

## The visible computer

Agent Zero's browser-and-desktop build-out leads this thread, but the
platform side is converging on it too. OpenHands is grouping execution into
[sandbox groups](https://github.com/OpenHands/OpenHands/commit/90cf5f8003c247597481bcbef9a5aa73eb899e10)
with app-server routing, user secrets, and model profiles behind it.
Paperclip is doing
[remote provisioning](https://github.com/paperclipai/paperclip/commit/90631b09b36fa028ad24ca5375bfa50e3602799c)
and sandbox-provider work. Codex is building cloud executor paths and
hardening its sandbox. The chat box is not enough for serious agent work, and
the projects that understand that are racing to show the operator the actual
machine: the browser, the files, the runtime, the screenshots, the
credentials, the artifacts.

## The authority model comes to the foreground

This window is full of permissions work, and the spread is the story. Codex
shipped [permission profiles](https://github.com/openai/codex/commit/5119680f85ed01fe039ee8fba0245de24f3a5e37),
sandbox profiles, plugin sharing controls, and Linux sandbox hardening.
Gemini added
[workspace trust](https://github.com/google-gemini/gemini-cli/commit/a38f393af77c0ccf50da10d73c84cfb594dd8175),
private memory-patch allowlists, shell-safety evals, and
[approval-mode-aware subagents](https://github.com/google-gemini/gemini-cli/commit/40b384de2c1d251c9d13a6359216a9e6cff5a254).
OpenHands tightened
[redaction](https://github.com/OpenHands/OpenHands/commit/61e3dc2cadbefd4e0649b7c141ac2335c021ad2b)
and deleted a
[log that had been recording secrets](https://github.com/OpenHands/OpenHands/commit/0c6c461555f8651347ed140f1c555ff8a88ddf56).
OpenClaw fixed
[allowlists](https://github.com/openclaw/openclaw/commit/b6ae0b83a61a1f779ee41b5d639b6049bfd422ce),
subagent security docs, OAuth labels, and live exec output limits. Paperclip
added security roles and sandbox-provider contracts; Agent Zero keeps its
browser and office surfaces opt-in and exposes OAuth disconnect. The harness
is starting to show its authority model, which is the right direction -- and
the operator's question is finally answerable in some of these tools: what
could this agent read, change, execute, install, send, or leak?

## Accessibility is a frontier capability

OpenClaw is the corrective to an overly technical reading of this market. Its
fortnight is
[setup recovery](https://github.com/openclaw/openclaw/commit/329580c64d13657592c3fabb97ff567c2e292bb6),
stale plugin repair, Discord voice behavior, Telegram reactions, WhatsApp
identity mapping,
[OAuth labels](https://github.com/openclaw/openclaw/commit/2b4b60b5514b47d8e242b9b11d9b395037e6674b),
progress previews, chat drafts, install recovery, and group allowlists --
work whose only purpose is letting a normal person start, understand,
recover, and control an agent without learning the project's private
ontology. Hermes is doing the adjacent work:
[setup fixes](https://github.com/NousResearch/hermes-agent/commit/6388aafbd6cbfd22c26036291d884d4055b5f6bc),
voice push-to-talk parity, gateway restart readiness, provider pickers. Agent
Zero's [screenshot previews](https://github.com/agent0ai/agent-zero/commit/c2fb2c3c94e1e1c85b783252332b3fc003f39f2b)
make the computer legible; Pi's
[quickstart](https://github.com/badlogic/pi-mono/commit/010e9acfe959f437613bcba7139b264012ca43a4)
and terminal work lower the floor; Gemini's reviewable memory and headless
auth, and OpenHands' visible model names, do the same from their corners.
None of this is softness. Accessibility is distribution, trust, and operator
leverage, and the projects treating it as real engineering are buying
something the benchmark chasers are not.

## The control plane arrives

Paperclip makes the management problem explicit:
[runtime specs](https://github.com/paperclipai/paperclip/commit/90631b09b36fa028ad24ca5375bfa50e3602799c),
sandbox providers,
[cost summaries](https://github.com/paperclipai/paperclip/commit/c4269bab59fff7a73ff31797578cc97ece7f160f),
roles, liveness, stale-session recovery, ordered sub-issues, pause and
resume. OpenHands is consolidating around its
[app server](https://github.com/OpenHands/OpenHands/commit/5232d96dab0ca98e691d6307bd0759e943220d1c);
Hermes runs kanban task workers, gateway lifecycle, Curator, and
[providers](https://github.com/NousResearch/hermes-agent/commit/f0d278412f8c14e94a11678be424f6a6ddb79fa2)
under a dashboard; Codex is reshaping skills, goals, sessions, and executors
into app-server-shaped surfaces; OpenClaw manages gateway sessions,
subagents, and plugin metadata. This is the factory problem in miniature:
once agents coordinate across tasks and machines, something has to keep the
system legible, and that something is becoming a product layer of its own.

## Integrations are weather

Pi added providers,
[removed providers](https://github.com/badlogic/pi-mono/commit/fe66edd943691f8eac295fef68ce36930c35fa05),
and changed its
[Codex transport](https://github.com/badlogic/pi-mono/commit/4745a9589883fb8200981ddfecb94a593d6e95a2)
inside a single window. Hermes is moving model providers into
[plugins](https://github.com/NousResearch/hermes-agent/commit/9022804d78e88253d138d448e9107a3884b2b96c);
OpenClaw is externalizing
[channel plugins](https://github.com/openclaw/openclaw/commit/42a32298f9681b6af7e8ed001401f24caefa895e);
OpenHands is replacing config surfaces with app-server services; Codex and
Gemini rework plugin, MCP, memory, and approval surfaces weekly. This is not
a reason to avoid frontier tools. It is the reason to hold them through a
loop that stays stable -- objective, permissions, execution environment,
evidence, review, memory -- while the best agent, provider, runtime, and
plugin change under it every week.

That loop is the fortnight's real subject. Every project above is building a
piece of it inside its own walls. The operator who wants to switch walls
without losing the work keeps the loop outside.

*How this was read: this is a commit-harvest window -- commit metadata was
broad-sampled across all eight projects, with diff-level review only on
selected high-signal commits. Claude Code is absent because its v0 source
contract defines no public commit stream. OpenClaw's high commit volume means
its durable product movement is the hardest to separate from rapid
stabilization; that caveat stands until a release-note review.*

---

*Revised 2026-07-02 (artifact_version 4): editorial pass to the current house
standard -- lede, structure, and operator brief. Claims, receipts, and window
judgments are unchanged from the 2026-05-07 publication.*
