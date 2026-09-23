---
schema_version: bitter.frontier_digest.v0
digest_id: 2026-04-23_2026-05-07-frontier-rollup-expanded
title: "Watchable Is Not Watched"
window:
  start: 2026-04-23
  end: 2026-05-07
run_id: 2026-05-07-commit-harvest-2026-04-23_2026-05-07-frontier-v1
status: published
artifact_version: 5
last_updated: 2026-09-23
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
  thesis: "For two weeks the open agent projects spent their commits making the agent's computer something an operator can look at: Agent Zero's browser and desktop, OpenClaw's progress inside the chat, Paperclip's cost and pause controls, OpenHands' scrubbed logs. In the last two days of the window the vendors shipped agents built to work while nobody looks: Codex in a background browser tab, Claude's dreaming editing memory between sessions. A window into the agent is worth what it costs only if something still tells you when to look through it."
  try:
    - "Agent Zero: give its native browser a task you would normally hand a headless agent, and check the screenshots against what the transcript claims happened. [Signal](/signals/2026-05-07-visible-computer-workcells/)"
    - "Gemini CLI: prefer memory that arrives as a patch you accept. The Auto Memory inbox proposes; it does not write silently. [Signal](/signals/2026-05-07-persistent-agent-state/)"
    - "Before an agent touches real credentials, read what its logs keep. OpenHands found a debug log writing hook-config secrets and deleted it. [Signal](/signals/2026-05-07-permissions-secrets-and-sandboxes/)"
  watch:
    - "Which of Agent Zero's browser and desktop commits reach a release you can install, and whether they arrive switched on. [Signal](/signals/2026-05-07-visible-computer-workcells/)"
    - "Whether Paperclip's cost summaries and pause/resume hold up on a multi-agent run long enough to need them. [Signal](/signals/2026-05-07-agent-company-control-planes/)"
  uncertain:
    - "OpenClaw landed 8,210 commits in the fortnight. From commits alone we cannot separate lasting product movement from stabilization. [Signal](/signals/2026-05-07-accessibility-is-frontier-capability/)"
    - "Which agent-side goals and memories will hold still long enough to build on, and which are tool-local state that will change under you. [Signal](/signals/2026-05-07-integrations-are-volatile/)"
---

# Watchable Is Not Watched

In the fortnight to May 7, Agent Zero fired the agent that used its browser.
[One commit](https://github.com/agent0ai/agent-zero/commit/983d431a5eb785eb9deba9fdfd471fa93f349603)
replaced the browser-use sub-agent with a native browser tool the main agent
drives directly, added a live viewer to the web UI, and moved the old module
out of core. Around it came a
[persistent Chromium runtime](https://github.com/agent0ai/agent-zero/commit/fa7eef1919901093b117a98ad6e402d809687cf6),
[tabs](https://github.com/agent0ai/agent-zero/commit/5012dd3128aa6218cc55f6cbce8be42b2db2fee4),
[screenshot previews in the tool log](https://github.com/agent0ai/agent-zero/commit/c2fb2c3c94e1e1c85b783252332b3fc003f39f2b),
[Linux desktop controls](https://github.com/agent0ai/agent-zero/commit/62ac20e7b248179825e05664c1df97ebc6214c54),
a [document canvas](https://github.com/agent0ai/agent-zero/commit/24dd548ebf221e397323b5aa3a509f037fb1b9ae)
and a LibreOffice runtime.

The agent has a computer, and you can watch it work. Everything you can now
watch is also something the agent can now touch: a logged-in browser, a
desktop, OAuth grants. Agent Zero shipped
[OAuth disconnect and remaining-quota visibility](https://github.com/agent0ai/agent-zero/commit/0da8f3dc2b640efbce22499053507837101fdf6f)
in the same fortnight. The machine it had just handed the agent holds real
credentials, and the operator needs a way to take them back.

Every receipt below is a commit on a project's main branch, not a release. Read
it as the direction of travel, not as what you have installed.

## The fortnight's work was making the agent visible

Agent Zero's move is also a bet on the model. It deleted a specialist
sub-agent whose job was to browse, and gave the general agent the browser
instead. That is [Bitter Lesson Maxing](/bitter-lesson/): building where
better general agents compound your advantage rather than erase it. The
browse-for-me wrapper is the part the next model makes redundant. The viewer
the operator watches is not.

The other projects built windows of their own. OpenClaw put agent progress
into the chat as
[timeline spans](https://github.com/openclaw/openclaw/commit/61223a74a43fd8768c426d5b22f1633dbad37477)
and showed
[Codex tool progress in channel drafts](https://github.com/openclaw/openclaw/commit/3f210b10ce3a19ef6a04205aa7420353945567a2),
so the person on the other end of a chat sees the work move. OpenHands exposed its
[sandbox grouping](https://github.com/OpenHands/OpenHands/commit/90cf5f8003c247597481bcbef9a5aa73eb899e10)
in the UI. Paperclip added
[per-issue cost summaries](https://github.com/paperclipai/paperclip/commit/c4269bab59fff7a73ff31797578cc97ece7f160f)
and [pause and resume](https://github.com/paperclipai/paperclip/commit/43b0f2ae582b18f2872ae60bf468f54b99b614ba)
for agents in its sidebar.

State got the same treatment. Codex's
[`/goal`](https://github.com/openai/codex/commit/f09e1936e0fd464dcea78fe55b84bd20f721cad6)
drew validation, paste handling and queued-command behavior, which is the
plumbing a feature earns once people lean on it. Gemini CLI's
[Auto Memory inbox](https://github.com/google-gemini/gemini-cli/commit/a7beb890d093e2cf66ed1ac8debff690b75e1f6d)
shows proposed memory as a patch to accept. Hermes added a
[scoping header to long-term memory](https://github.com/NousResearch/hermes-agent/commit/fe8560fc1249b4a7e448b5c3b80a7d213df9d78f).
Who decides what those memories hold is the argument of the
[overlapping rollup](/digests/2026-04-22_2026-05-06-frontier-rollup/); here
the point is only that each can now be seen.

## A log is a window and a copy

The same visibility that lets an operator supervise also writes things down.
OpenHands found a
[debug log that had been recording hook-config secrets](https://github.com/OpenHands/OpenHands/commit/0c6c461555f8651347ed140f1c555ff8a88ddf56)
and deleted it, and
[strengthened API-key redaction](https://github.com/OpenHands/OpenHands/commit/61e3dc2cadbefd4e0649b7c141ac2335c021ad2b)
across its loggers. It also began
[injecting user secrets into the ACP subprocess environment](https://github.com/OpenHands/OpenHands/commit/cf156b0073350ca8e93067bc2f4ae18b90537a0a),
which is one more place a credential lives and one more place to audit.

Around it, the boundaries got drawn in public. OpenClaw
[bounded live exec output](https://github.com/openclaw/openclaw/commit/3ee7c02bcacfdf6327747c1fe24dd6d11de8612a),
made Telegram
[honor access-group allowlists](https://github.com/openclaw/openclaw/commit/b6ae0b83a61a1f779ee41b5d639b6049bfd422ce),
and [documented where sub-agent security stops](https://github.com/openclaw/openclaw/commit/33b112ad314dc8d9dfe0f5a68caed4811a23245a).
Gemini CLI made
[sub-agents respect the active approval mode](https://github.com/google-gemini/gemini-cli/commit/40b384de2c1d251c9d13a6359216a9e6cff5a254)
and showed [workspace trust in its MCP list](https://github.com/google-gemini/gemini-cli/commit/a38f393af77c0ccf50da10d73c84cfb594dd8175).
Codex added
[plugin share access controls](https://github.com/openai/codex/commit/5119680f85ed01fe039ee8fba0245de24f3a5e37)
and a [bundled Linux sandbox](https://github.com/openai/codex/commit/26f355b67b75b040ff16990d1b2e4e8093479213).
Paperclip made
[security a first-class agent role](https://github.com/paperclipai/paperclip/commit/c036bbfa98494dcfe2521aab65019a4cd021c769).

What this agent could read, change, run, install, send or leak is now
answerable in some of these tools. The OpenHands log is the reminder that the answer includes
the tool's own record of the work.

## Legibility is mostly setup recovery

The least glamorous commits in the window do the most for a new user.
OpenClaw's
[diff-reviewed onboarding fix](https://github.com/openclaw/openclaw/commit/329580c64d13657592c3fabb97ff567c2e292bb6)
stops a stale channel plugin from dead-ending setup: it reinstalls from a
trusted catalog where it can, and leaves channels the operator disabled
disabled. Beside it sit
[labels on Claude CLI OAuth status](https://github.com/openclaw/openclaw/commit/2b4b60b5514b47d8e242b9b11d9b395037e6674b)
and a fix that stops the Discord voice bot
[hearing itself](https://github.com/openclaw/openclaw/commit/1c2832526f65cf23b469e9a1dc5694915c5be548).

Hermes did the adjacent work: a setup wizard that
[no longer dead-ends on a system-scope unit](https://github.com/NousResearch/hermes-agent/commit/3cdbf334d5074aff0de857c0f94f278f06745e6b),
[restart readiness for the gateway](https://github.com/NousResearch/hermes-agent/commit/d797755a1c17566b0aef4d77548a4b460142d26a),
[push-to-talk parity](https://github.com/NousResearch/hermes-agent/commit/04cf4788ccc05003785992682e3cb25205e509cc).
Pi made [auth-provider login searchable](https://github.com/badlogic/pi-mono/commit/010e9acfe959f437613bcba7139b264012ca43a4).

None of this is polish. An operator who cannot get the agent running again
after a config goes stale cannot supervise it either. Recovery is where
visibility starts.

## The newest agents work where nobody is looking

Then the vendors shipped the other half. On May 6, Anthropic previewed
dreaming, which reviews an agent's past sessions,
[[q:claude-dreaming-preview-0507]]. No transcript records that curation and no
operator approves it. On May 7, Codex reached Chrome on macOS and Windows,
and OpenAI said it [[q:codex-chrome-parallel-tabs]].

That last clause changes the job. Agent Zero's viewer assumes someone
watching. An agent that drives your browser while you keep using it is
computer use as a background process, and nobody supervises a background
process by staring at it.

This is where [Amdahl Maxing](/amdahls-law/) earns its place: design the
system so scarce human attention goes to the decisions where it is worth
most. A live viewer spends attention for as long as someone watches it.
Paperclip spent the fortnight on the cheaper kind. A cost summary or a stale
session asks for a human only when something is off. Its
[runtime specs](https://github.com/paperclipai/paperclip/commit/90631b09b36fa028ad24ca5375bfa50e3602799c)
go further and delete a human task: each adapter now declares how to install
itself on a remote sandbox, so nobody hand-writes a provisioning script per
agent CLI. That is the shape that survives agents which do not wait for you.

## Provider notes

**Pi.** The window's reminder that integrations change under you. It added a
[Cloudflare AI Gateway provider](https://github.com/badlogic/pi-mono/commit/24fb6b833b7263df3d08889cc492b03d46d3779b),
moved Codex to a
[cached websocket transport](https://github.com/badlogic/pi-mono/commit/4745a9589883fb8200981ddfecb94a593d6e95a2)
with an [SSE fallback](https://github.com/badlogic/pi-mono/commit/370fdae6fa23881b044efbab571fb7bf6267ed6e),
and [removed built-in Gemini CLI and Antigravity support](https://github.com/badlogic/pi-mono/commit/fe66edd943691f8eac295fef68ce36930c35fa05).
Record the version, provider and transport of any run you care about.

**Hermes.** 2,061 commits. The ones that matter here are above; it also moved
model providers into
[plugins](https://github.com/NousResearch/hermes-agent/commit/9022804d78e88253d138d448e9107a3884b2b96c)
and gave Curator
[archive and prune commands](https://github.com/NousResearch/hermes-agent/commit/436672de0efd8bcc50c6043a16223c102d30d71b).

**OpenHands.** Consolidating on its
[app server](https://github.com/OpenHands/OpenHands/commit/5232d96dab0ca98e691d6307bd0759e943220d1c)
and [removed the V0 runtime](https://github.com/OpenHands/OpenHands/commit/e86067c15b54242fd611877aa9038a2f7a219658).
Its log fix, above, is the item to act on.

**Codex, Gemini CLI.** Covered above and in the overlapping rollup.
**Agent Zero, OpenClaw, Paperclip.** Covered above.

## Closing

The open projects spent a fortnight building windows into the agent's
computer, and the work was worth doing. The agents that shipped at the end of
it were built so you would not need to look.

Watchable is a feature. Watched is a schedule nobody keeps.
