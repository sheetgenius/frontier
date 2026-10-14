---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-acp-pi-and-opencode-join-the-built-in-agents-on-local-backends-and-model-lists-come-from
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/releases/tag/v1.27.0
    precision: github_release
  - url: https://github.com/OpenHands/OpenHands/pull/17758
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/18131
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/constants/acp-providers.ts#L129-L190
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/docs/ACP_AGENTS.md#L152-L159
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/pull/5579
    precision: merged_pr
---
# 2026-10-13-openhands-acp-pi-and-opencode-join-the-built-in-agents-on-local-backends-and-model-lists-come-from

ACP: Pi and OpenCode join the built-in agents on local backends, and model lists come from the agent (v1.27.0). Pi and OpenCode join Claude Code, Codex and Gemini CLI as built-in ACP agents with onboarding tiles and credential fields, on local backends only; OpenHands Cloud rejects them at conversation start, so Canvas hides them there, and Kimi stays hidden. Their credentials can be whole CLI auth files saved as secrets (`OPENCODE_AUTH_CONTENT`, `PI_AUTH_JSON`) next to API keys, and OpenCode runs keyless on its free models. Canvas no longer hardcodes ACP model lists. On local backends it asks the agent server which models a harness offers, sending only the secrets the profile allows, and Settings and the home picker offer "Agent default", which saves no model and lets the harness's own config decide (Gemini keeps a gemini-2.5-pro preselect). The surfaced list remains Canvas's own declaration, not whatever the SDK registry holds.

Channel: tagged-release. Half: capability. Date: 2026-10-12.

Operator consequence: Pi and OpenCode no longer need the Custom ACP command workaround on v1.27.0 or later. A profile left on "Agent default" runs whatever the harness's own config says (for Codex, `~/.codex/config.toml`), which changes on that vendor's schedule; pin the model in the profile where cost or eval baselines matter. Whole auth files are broader credentials than API keys; scope them per profile.

## Receipt
- https://github.com/OpenHands/OpenHands/releases/tag/v1.27.0
- https://github.com/OpenHands/OpenHands/pull/17758
- https://github.com/OpenHands/OpenHands/pull/18131
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/constants/acp-providers.ts#L129-L190
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/docs/ACP_AGENTS.md#L152-L159
- https://github.com/OpenHands/software-agent-sdk/pull/5579
