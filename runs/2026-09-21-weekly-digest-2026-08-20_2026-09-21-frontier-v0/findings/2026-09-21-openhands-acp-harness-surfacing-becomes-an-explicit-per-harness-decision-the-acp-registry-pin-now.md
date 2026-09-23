---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openhands-acp-harness-surfacing-becomes-an-explicit-per-harness-decision-the-acp-registry-pin-now
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/17228
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17423
    precision: merged_pr
---
# 2026-09-21-openhands-acp-harness-surfacing-becomes-an-explicit-per-harness-decision-the-acp-registry-pin-now

ACP harness surfacing becomes an explicit per-harness decision; the ACP registry pin now follows the agent server. #17228: SDK 1.45.0 registered new ACP harnesses (kimi-code, pi, opencode). Canvas's credential form read the SDK registry directly, so it offered credential fields for harnesses Canvas never listed. Canvas now has one surfaced list, and a test fails if a surfaced harness disappears upstream. #17423: the UI's ACP registry (npm `@openhands/typescript-client` 1.39.0) had drifted seven minors behind the agent server that launches the adapters. The pins are now tied together and CI checks them. The Codex shim for GPT-6 Astra (#17164) is gone.

Channel: tagged-release. Half: both. Date: 2026-09-11 (v1.18.0), 2026-09-16 (v1.19.0).

Operator consequence: On v1.19.0 and later, the harness picker matches what the pinned agent server can launch. On earlier tags, do not enter credentials for a harness that shows up only in the credential form.

## Receipt
- https://github.com/OpenHands/OpenHands/pull/17228
- https://github.com/OpenHands/OpenHands/pull/17423
