---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-bot-mode-ships-bundled-and-on-by-default-and-the-bot-to-bot-protocol
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/87886
    precision: merged_pr
---
# 2026-08-17-hermes-agent-bot-mode-ships-bundled-and-on-by-default-and-the-bot-to-bot-protocol

Bot Mode ships bundled and on by default, and the bot-to-bot protocol moves into the core system prompt.

The Hermes-Bot-Mode plugin, previously a standalone install, is now bundled in the desktop app and enabled by default (live-disable via Settings -> Plugins). More consequential than the bundling: the bot-to-bot messaging protocol moves out of user SOUL.md files and into a core stable-tier system-prompt section, so it covers every session of every profile  --  including headless `hermes -p <bot> chat` sessions that teammates start. A `tools/bot_mode_probe.py` gates the injection behind `agent.bot_mode_protocol` (default on) and keeps it silent unless a profile carries `ui_meta['hermes-bots']` or already has the legacy SOUL section; the section is cached per process+home and byte-stable across rebuilds, adding +916 bytes only on a managed home. `profiles.list` gains a `bot_mode_protocol` capability flag so the plugin can stop writing to SOUL.md on gateways that support it. Related work the same day added cross-machine bot DMs (`hermes peer`, #88725) and Discord-style group chats.

Channel: tagged-release. Ancestry: merge_commit_sha 8236b417713dd3f4a6bea0ff26cc5f64a1d3b8c4; compare/8236b417...v2026.8.16.2 -> status=ahead, ahead_by=204, behind_by=0 (ancestor of stable tag v2026.8.16.2).

Operator consequence: Watch this one rather than adopt it. A default-on plugin that injects an inter-agent messaging protocol into every session's system prompt is a meaningful change to what your agents are told they can do, even when you never open the Bots panel. Verify `agent.bot_mode_protocol` and check whether your profiles carry the ui_meta key; if you run headless bot profiles, the protocol is now in their prompt too.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/87886
