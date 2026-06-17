---
run_id: 2026-05-12-partial-cycle-hermes-refresh-2026-05-12-frontier-v0
type: partial_cycle
source: hermes-agent
window:
  start: 2026-05-12
  end: 2026-05-12
operator: claude-sonnet-4-6
parent_loop: autonomous-research-loop
---

# Audit Note: Hermes Agent Refresh (2026-05-12)

## What Was Done

Harvested Hermes Agent activity for 2026-05-12 beyond the initial v0.13.0
build. One new finding accepted:

- **2026-05-12-hermes-mistralai-quarantine-response**: PR #24205 / commit
  `99ad2d1` removes `mistralai` from `[all]` extras after PyPI quarantined
  `mistralai` 2.4.6 as a malicious release. Mistral Voxtral TTS gracefully
  disabled; `[mistral]` extra preserved for explicit opt-in. Not yet in a
  tagged release.

Profile updated:
- New claim `mistralai-quarantine-graceful-disable` added
- Claim referenced in `posture_basis` governance
- Prose note added under ### Security and Credential Handling

## Freshness Status

Hermes Agent profile refreshed beyond initial v0.13.0 build. Freshness
condition: 3/10 providers refreshed (Codex, Gemini CLI, Hermes Agent).

Remaining 7 providers (Claude Code, Pi, OpenClaw, Paperclip, Agent Zero,
OpenHands, Flue) have no harvestable new activity on 2026-05-12 beyond
their initial build windows. Freshness for those providers requires future
harvest windows.

## Supply-Chain Note

The `mistralai` 2.4.6 quarantine is a supply-chain security event affecting
any project that installed that version. Operators who ran
`pip install hermes-agent[all]` on 2026-05-12 before this commit landed
should verify their environments.
