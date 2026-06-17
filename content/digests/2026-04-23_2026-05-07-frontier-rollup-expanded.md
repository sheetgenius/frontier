---
schema_version: bitter.frontier_digest.v0
digest_id: 2026-04-23_2026-05-07-frontier-rollup-expanded
title: "The Harness Leaves The Chat Box"
window:
  start: 2026-04-23
  end: 2026-05-07
run_id: 2026-05-07-commit-harvest-2026-04-23_2026-05-07-frontier-v1
status: published
artifact_version: 3
backstage: 2026-04-23_2026-05-07-frontier-rollup-expanded
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
---

# The Harness Leaves The Chat Box

The last two weeks of commits make one thing clear: the interesting action in coding agents is no longer confined to the model or the chat transcript.

Agent harnesses are becoming operating surfaces.

Codex is adding persistent goals, session metadata, memory plumbing, plugin controls, sandbox work, and cloud executor paths. Gemini CLI is treating memory as a reviewable patch, with workspace trust, approval modes, shell safety, and structured non-interactive output close behind. Hermes is sanding down the rough edges of persistent personal agents: gateways, systemd, voice, themes, model providers, skills, search, kanban, and memory scoping. Pi keeps proving the opposite design lesson: a thin harness can move quickly because integrations can be added, removed, or rewritten without becoming the whole product.

The expanded watchlist changes the story. OpenClaw shows that accessibility is not a side quest; ordinary surfaces like Discord, Telegram, WhatsApp, OAuth, voice, onboarding, and visible progress are where agents become usable. Agent Zero shows the workcell becoming literal: browser, desktop, documents, file browser, screenshots, OAuth, and time-travel state. Paperclip shows the company/control-plane version of the problem: remote provisioning, sandbox providers, cost summaries, roles, liveness, pause/resume, and stale session recovery. OpenHands shows what happens when a harness becomes a platform: app server, model profiles, MCP proxying, secrets, security redaction, self-hosted integrations, sandbox grouping, and old runtime cleanup.

The frontier is not one winning agent. The frontier is the environment around agents getting thicker.

## The Week In One Sentence

Coding agents are gaining goals, memory, computers, permissions, gateways, integrations, and supervision layers; the durable question is who owns the loop around all of that.

## Main Signals

### 1. Persistent Agent State Is Becoming A Product Surface

The strongest single signal is still Codex [`/goal`](https://github.com/openai/codex/commit/f09e1936e0fd464dcea78fe55b84bd20f721cad6). It is not just a UX affordance. The goal validation work shows that persistent objectives now deserve first-class validation, paste handling, queued-command behavior, and user guidance.

Gemini's [Auto Memory](https://github.com/google-gemini/gemini-cli/commit/a7beb890d093e2cf66ed1ac8debff690b75e1f6d) inbox points in the same direction from another angle: memory should be proposed, reviewed, and accepted, not silently smeared into hidden context. Hermes adds memory scoping and [Curator](https://github.com/NousResearch/hermes-agent/commit/fe8560fc1249b4a7e448b5c3b80a7d213df9d78f) commands. OpenClaw is making agent progress visible in chat with [timeline spans](https://github.com/openclaw/openclaw/commit/61223a74a43fd8768c426d5b22f1633dbad37477).

This is a real shift. Agent-side state is becoming more durable, more visible, and more operational.

Builder question:

What goal, memory, session, recap, skill report, or thread state shaped this run?

### 2. The Agent Interface Is Becoming A Visible Computer

Agent Zero is the clearest evidence. It replaced a browser-use agent with a [native browser](https://github.com/agent0ai/agent-zero/commit/983d431a5eb785eb9deba9fdfd471fa93f349603), then added a [Chromium runtime](https://github.com/agent0ai/agent-zero/commit/fa7eef1919901093b117a98ad6e402d809687cf6), browser tabs, screenshot previews, annotation, file browser search, ZIP downloads, Linux desktop controls, document canvas, LibreOffice runtime, and OAuth/quota visibility.

OpenHands is moving in the same broad direction from the platform side with [sandbox grouping](https://github.com/OpenHands/OpenHands/commit/90cf5f8003c247597481bcbef9a5aa73eb899e10), app-server routing, ACP/MCP surfaces, user secrets, model profiles, and enterprise integrations. Paperclip adds [remote provisioning](https://github.com/paperclipai/paperclip/commit/90631b09b36fa028ad24ca5375bfa50e3602799c) and sandbox provider work. Codex is adding cloud executor paths and sandbox hardening.

The chat box is not enough. Serious agent work wants a visible machine.

Builder question:

Can I see the browser, files, runtime, screenshots, credentials, and artifacts that shaped this work?

### 3. Permissions, Secrets, And Sandboxes Are Moving Into The Foreground

This window is full of authority work. Codex has [permission profiles](https://github.com/openai/codex/commit/5119680f85ed01fe039ee8fba0245de24f3a5e37), sandbox profiles, plugin sharing controls, MCP metadata, and Linux sandbox hardening. Gemini has [workspace trust](https://github.com/google-gemini/gemini-cli/commit/a38f393af77c0ccf50da10d73c84cfb594dd8175), private memory patch allowlists, shell safety evals, [approval-mode-aware subagents](https://github.com/google-gemini/gemini-cli/commit/40b384de2c1d251c9d13a6359216a9e6cff5a254), and policy-engine work. OpenHands tightened [redaction](https://github.com/OpenHands/OpenHands/commit/61e3dc2cadbefd4e0649b7c141ac2335c021ad2b) and removed a [secret log](https://github.com/OpenHands/OpenHands/commit/0c6c461555f8651347ed140f1c555ff8a88ddf56). OpenClaw is fixing [allowlists](https://github.com/openclaw/openclaw/commit/b6ae0b83a61a1f779ee41b5d639b6049bfd422ce), subagent security docs, OAuth labels, and live exec output limits. Paperclip is adding security roles and sandbox provider contracts. Agent Zero keeps browser and office surfaces opt-in and exposes OAuth disconnect and quota visibility.

This is the right direction. The harness is starting to show its authority model.

Builder question:

What could this agent read, change, execute, install, send, or leak?

### 4. Accessibility Is A Frontier Capability

OpenClaw is the necessary corrective to an overly technical reading of the market. Its commits are full of work that makes agents usable by normal people: [setup recovery](https://github.com/openclaw/openclaw/commit/329580c64d13657592c3fabb97ff567c2e292bb6), stale plugin repair, Discord voice behavior, Telegram reactions, WhatsApp identity mapping, [OAuth labels](https://github.com/openclaw/openclaw/commit/2b4b60b5514b47d8e242b9b11d9b395037e6674b), progress previews, chat drafts, typography cleanup, install recovery, and group allowlists.

Hermes is doing adjacent work through [setup fixes](https://github.com/NousResearch/hermes-agent/commit/6388aafbd6cbfd22c26036291d884d4055b5f6bc), voice push-to-talk parity, dashboard themes, gateway restart readiness, provider pickers, and messaging surfaces. Agent Zero is making the computer visible with [screenshot previews](https://github.com/agent0ai/agent-zero/commit/c2fb2c3c94e1e1c85b783252332b3fc003f39f2b). Pi is improving login, terminal rendering, compact resource reads, clipboard behavior, and [quickstart](https://github.com/badlogic/pi-mono/commit/010e9acfe959f437613bcba7139b264012ca43a4) docs. Gemini is making memory reviewable and headless auth more reliable. OpenHands is exposing model names and model switching in the UI.

That matters. Accessibility is not softness. It is distribution, trust, and operator leverage.

Builder question:

Can a real person start, understand, recover, and control this thing without learning the project owner's private ontology?

### 5. Agent Systems Are Growing Control Planes

Paperclip makes the control-plane problem explicit. It is working on [runtime specs](https://github.com/paperclipai/paperclip/commit/90631b09b36fa028ad24ca5375bfa50e3602799c), sandbox providers, [cost summaries](https://github.com/paperclipai/paperclip/commit/c4269bab59fff7a73ff31797578cc97ece7f160f), roles, liveness, stale sessions, issue workflows, ordered sub-issues, pause/resume controls, and remote workspace shaping.

OpenHands is consolidating around the [app server](https://github.com/OpenHands/OpenHands/commit/5232d96dab0ca98e691d6307bd0759e943220d1c). Hermes has kanban task runners, gateway lifecycle, Curator, [providers](https://github.com/NousResearch/hermes-agent/commit/f0d278412f8c14e94a11678be424f6a6ddb79fa2), and dashboard state. Codex is moving skills, goals, sessions, plugins, and executors into app-server-shaped surfaces. OpenClaw is handling gateway sessions, subagents, plugin metadata, and live execution timelines.

This is the factory problem in miniature.

Builder question:

When agents coordinate across tasks and machines, what keeps the system legible?

### 6. Integrations Are Volatile; The Operating Loop Has To Be Durable

Pi added providers, [removed providers](https://github.com/badlogic/pi-mono/commit/fe66edd943691f8eac295fef68ce36930c35fa05), changed [Codex transport](https://github.com/badlogic/pi-mono/commit/4745a9589883fb8200981ddfecb94a593d6e95a2), added auth flows, improved session behavior, and kept terminal output evolving. Hermes is moving model providers into [plugins](https://github.com/NousResearch/hermes-agent/commit/9022804d78e88253d138d448e9107a3884b2b96c). OpenClaw is externalizing [channel plugins](https://github.com/openclaw/openclaw/commit/42a32298f9681b6af7e8ed001401f24caefa895e). OpenHands is replacing config surfaces and moving toward app-server services. Codex and Gemini are evolving plugin, MCP, memory, and approval surfaces quickly.

This is not a warning against using frontier tools. It is the reason to use them through a durable loop.

Builder question:

What should remain stable while the best agent, provider, runtime, protocol, or plugin changes every week?

## What Serious Builders Should Try

- Test persistent goals, but write down what owns the project-level objective before you trust the agent's local goal.
- Prefer memory systems that show proposed changes before accepting them.
- Try at least one visible-computer harness. The browser, file system, screenshots, and desktop surface reveal different failure modes than terminal chat.
- Inspect the permissions and sandbox story before giving an agent real credentials.
- Treat messaging and voice surfaces as product lessons, not consumer fluff.
- Track exact harness version, provider, transport, plugin set, sandbox, and credential path for serious runs.

## What Remains Uncertain

- OpenClaw's high commit volume makes it hard to separate durable product movement from rapid stabilization without deeper release-note and diff review.
- This run is commit-harvest focused. Claude Code was excluded because the v0 source contract does not define a public commit stream.
- Commit metadata was broad-sampled across all projects, but only selected high-signal commits received diff-level review.
- The frontier may be converging on visible computers, but the winning shape is still open: local desktop, browser sandbox, remote workcell, hosted app server, messaging agent, or some combination.
- It is unclear which agent-side memories and goals will remain stable enough to integrate deeply versus merely record as tool-local state.
