---
schema_version: bitter.frontier_finding.v0
source: codex
source_contract: sources/codex.yml
window: 2026-04-22..2026-05-06
status: accepted_signal
confidence: high
receipts:
  - https://developers.openai.com/codex/changelog/#github-release-315916672
  - https://github.com/openai/codex/releases/tag/rust-v0.128.0
evidence:
  - label: Official Codex changelog entry
    url: https://developers.openai.com/codex/changelog/#github-release-315916672
    precision: section
  - label: GitHub release rust-v0.128.0
    url: https://github.com/openai/codex/releases/tag/rust-v0.128.0
    precision: release
---

# Codex: Provider-Native Long-Horizon Work Is Moving Into the CLI

## What Changed

Codex CLI release `0.128.0`, published April 30, 2026, made persisted `/goal`
workflows a first-class surface with app-server APIs, model tools, runtime
continuation, and TUI controls for creating, pausing, resuming, and clearing
goals.

The same release expanded permission profiles, sandbox profile selection,
active-profile metadata, plugin marketplace workflows, bundled hooks, external
agent session import, and MultiAgentV2 controls.

Recent follow-on commits in the sprint window continued the same direction:
plugin share access controls, hook trust metadata, model/reasoning metadata in
MCP turns, cloud executor registration, selected-environment process routing,
and Linux sandbox hardening.

## Operator Consequence

Codex is becoming less like a stateless terminal agent and more like a
provider-native agent environment: goals, permissions, plugins, imported
sessions, multi-agent execution, turn metadata, and hosted/cloud executor
surface area are all becoming normal.

Operators should use those provider-native capabilities where they are strong,
but should not let them become the only durable record of work.

## Frontier Implication

The durable move is not to clone `/goal` but to wrap and receipt it.

The adapter contract should preserve:

- which Codex goal or imported session governed the run
- which permission profile and sandbox profile were active
- which plugin or hook surfaces were enabled
- which external agent session was imported
- which multi-agent configuration was used
- which evidence crossed back into the run's receipts and inputs

## Signal

Provider-native long-horizon state is now a real worker capability. The durable
asset is the operator-owned loop around that state: charter, authority,
evidence, verification, memory, replay, and next action.
