---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-05-07
  end: 2026-05-12
versions_covered: "v0.13.0 (v2026.5.7)"
status: accepted_signal
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: test
evidence:
  - label: "v0.13.0 release notes (v2026.5.7) — The Tenacity Release"
    url: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.7
    precision: release_note
  - label: "Durable multi-profile Kanban board (PR #17805)"
    url: https://github.com/NousResearch/hermes-agent/pull/17805
    precision: merged_pr
  - label: "Enable secret redaction by default (PR #21193)"
    url: https://github.com/NousResearch/hermes-agent/pull/21193
    precision: merged_pr
  - label: "Platform channel allowlists (PR #21251)"
    url: https://github.com/NousResearch/hermes-agent/pull/21251
    precision: merged_pr
  - label: "Auto-resume interrupted sessions (PR #21192)"
    url: https://github.com/NousResearch/hermes-agent/pull/21192
    precision: merged_pr
  - label: "no_agent cron mode (PR #19709)"
    url: https://github.com/NousResearch/hermes-agent/pull/19709
    precision: merged_pr
---

# Hermes Agent v0.13.0: Durable Kanban, Persistent Goals, and a Security Hardening Wave

## What Changed

v0.13.0 ("The Tenacity Release") shipped May 7, 2026 with 864 commits and 588
merged PRs since v0.12.0 -- the largest release in the cycle. The release
headline is durability: Kanban, goals, checkpoints, and sessions are all now
designed to survive interruption. The security wave makes redaction active by
default.

**Durable multi-agent Kanban board**: Multiple Hermes profiles can now pick up,
execute, hand off, and close tasks from a shared board. The board is durable
across restarts. Worker reliability is managed through: heartbeats (stale
workers reclaimed automatically), zombie detection (darwin-aware), per-task
`max_retries`, auto-block on clean-exit-without-completion, and a
**hallucination gate** that verifies worker-created card claims before accepting
them. This is the most architecturally significant addition: Kanban is not just
a task manager but an orchestration layer with explicit reliability contracts.

**`/goal` — persistent cross-turn goals** (Ralph loop): Operators can lock the
agent onto a target that persists across turns. The goal survives context
compression and turn budget management. This is a first-class primitive for
long-horizon agent sessions where a single task spans many conversation turns.

**Security hardening wave — 8 P0 closures**:
- **Secret redaction is now ON by default** (was opt-in). Operators who relied
  on unredacted logs must adapt. This is a default behavior change.
- Discord `DISCORD_ALLOWED_ROLES` is now scoped to the originating guild (CVSS
  8.1 cross-guild DM bypass, issue #12136).
- WhatsApp rejects messages from unknown contacts by default and never responds
  in self-chat.
- TOCTOU windows closed in `auth.json` credential writers and MCP OAuth token
  saves.
- Browser enforces a cloud-metadata SSRF floor in hybrid routing.
- Cron scans assembled prompt + skill content for prompt injection before
  execution (#3968).
- `hermes debug share` redacts log content at upload time.

**Platform channel allowlists** (`allowed_channels`/`allowed_chats`/`allowed_rooms`):
Operators can now restrict which channels/chats/rooms on Slack, Telegram,
Mattermost, Matrix, and DingTalk the agent will respond in. This mirrors the
OpenClaw `voice.allowedChannels` pattern for messaging platforms.

**Gateway session auto-resume**: Sessions interrupted by gateway restarts,
`/update`, or source-file reloads are automatically resumed when the gateway
comes back. Previously, interrupted sessions were lost.

**Cron `no_agent` mode**: Cron jobs can now run a script directly without
invoking the agent at all. Empty stdout is silent; non-empty output is delivered
verbatim. This enables pure automation watchdog patterns that don't need LLM
involvement.

**Post-write delta lint** on `write_file` + `patch`: Python, JSON, YAML, and
TOML files are linted in-process after each write. Syntax errors surface
immediately rather than propagating downstream.

## Operator Consequence

The redaction-on-by-default change is the most immediate operator impact. Any
Hermes deployment that was relying on unredacted logs for debugging will now see
logs sanitized. Operators should verify their observability tooling handles
redacted output correctly.

The Kanban hallucination gate is notable for a different reason: it introduces
evidence verification as a first-class control in a multi-agent workflow. A
worker agent cannot simply claim a task is done -- the claim must pass the gate.
This is a durability contract for multi-agent orchestration.

The channel allowlists complete a governance pattern Hermes has been building:
operators can now restrict which contexts the agent operates in, at both the
credential level (API key scoping), the platform level (allowed channels), and
the task level (kanban ownership enforcement).

## Bitter Implication

The Kanban hallucination gate is the most directly relevant signal for Bitter.
It is a deployed example of "evidence required before state transition" in a
multi-agent context. The gate enforces that a worker's claimed completion is
verified before the task moves to done. Bitter's receipt model applies the same
principle at the session/claim level. They are solving the same problem at
different scopes.

The `no_agent` cron mode deserves attention: it establishes cron as both an
agent trigger and a pure automation runtime. An operator can use cron for
predictable, script-only work without paying the cost and non-determinism of an
LLM invocation. Bitter should evaluate whether its own cron/loop primitives have
a clean no-LLM path.

The redaction-default change is a model for Bitter: safety defaults should be
active, not opt-in. Bitter's own credential handling should follow the same
posture.

## Signal

Redaction-on-by-default, the Kanban hallucination gate, and platform channel
allowlists are all action-bearing:
- Operators with existing Hermes deployments should verify their log pipelines
  handle default redaction correctly before upgrading.
- Operators building multi-agent workflows should evaluate the Kanban board's
  reliability contracts (heartbeat/reclaim/zombie/hallucination gate) before
  rolling their own coordination layer.
- Operators on Discord with role-based access control must re-verify their
  `DISCORD_ALLOWED_ROLES` scoping after upgrading (the cross-guild bypass fix
  may change behavior in guild-spanning bot deployments).
