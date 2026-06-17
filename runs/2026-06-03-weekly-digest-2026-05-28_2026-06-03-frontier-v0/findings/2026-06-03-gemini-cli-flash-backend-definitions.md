---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-gemini-cli-flash-backend-definitions
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.46.0-preview.1"
status: accepted
change_type: capability
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "Commit title: 'Respect backend definitions for 3.5 flash and Update auto mode to use 3.5 flash when the flag is enabled. (#27645)' with 24 files changed (+463/-42), modifying defaultModelConfigs.ts, a"
    url: https://github.com/google-gemini/gemini-cli/commit/e4315b36eb324d34b1bc993ef7b26e306ea3853d
    precision: commit
---
# Flash Backend Definitions and Auto Mode Update

## What Changed

Updated auto mode selection logic to respect backend definitions for Gemini 3.5 Flash and route to Flash GA model when useGemini3_5Flash flag is enabled. Modified model selection in ACP utilities and ModelDialog to pass useGemini3_5Flash parameter through configuration. Added conditional schema logic distinguishing preview vs GA access scenarios with different authentication type handling.

## Operator Implication

Ensures Flash model routing respects backend definitions and authentication type. Differentiates behavior between USE_GEMINI auth (uses gemini-3.5-flash) and other auth methods (uses gemini-3-flash). Enables proper display name resolution in UI.

## Receipt

- [Commit title: 'Respect backend definitions for 3.5 flash and Update auto mode to use 3.5 flash when the flag is enabled. (#27645)' with 24 files changed (+463/-](https://github.com/google-gemini/gemini-cli/commit/e4315b36eb324d34b1bc993ef7b26e306ea3853d)
