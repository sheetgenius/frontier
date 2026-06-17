---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-gemini-cli-flash-ga-transition
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.46.0-preview.0, v0.46.0-preview.1"
status: accepted_signal
change_type: capability
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "Commit title: 'Transition to flash GA model when experiment flag is present. (#27570)' with 25 files modified across configurations, model hierarchies, and test coverage for new Flash GA access evalua"
    url: https://github.com/google-gemini/gemini-cli/commit/665228e983c611007c4e2d36550e67b34f75055e
    precision: commit
---
# Gemini 3.5 Flash GA Model Transition with Experiment Flag

## What Changed

Implemented conditional model selection to transition users to Gemini 3.5 Flash GA model when experiment flag GEMINI_3_5_FLASH_GA_LAUNCHED (ID: 45780819) is enabled. Added hasGemini35FlashGAAccess() method in Config class, registered new experiment flag, created routing contexts, and added model configurations for gemini-3.5-flash with flash tier classification.

## Operator Implication

Enables gradual rollout of Gemini 3.5 Flash GA to flagged users. Allows backend control of model availability per user cohort without requiring client updates. Updates auto-routing logic to use Flash GA when flag is enabled.

## Receipt

- [Commit title: 'Transition to flash GA model when experiment flag is present. (#27570)' with 25 files modified across configurations, model hierarchies, and test](https://github.com/google-gemini/gemini-cli/commit/665228e983c611007c4e2d36550e67b34f75055e)
