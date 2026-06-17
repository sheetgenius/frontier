---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-28-openhands-posthog-analytics-restore
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: ecosystem
confidence: high
accessibility_impact: none
actionability: observe
evidence:
  - label: "Commit a9de690 (2026-05-28T04:37:50Z): 'fix(APP-1892): restore PostHog onboarding-completed and create-pr-button-clicked events' - Analytics restoration with generic /api/analytics/events endpoint, al"
    url: https://github.com/OpenHands/OpenHands/commit/a9de690
    precision: commit
---
# Analytics: Restore PostHog onboarding-completed and create-pr-button-clicked events

## What Changed

Restored two PostHog analytics events that were previously missing: onboarding-completed event (captures onboarding selections and updates org metadata with timestamp) and create-pr-button-clicked event (tracks git provider usage when PR button clicked). Implemented via new generic /api/analytics/events endpoint with event allowlist and isolated failure handling.

## Operator Implication

Operators can now capture onboarding completion metrics and PR button usage analytics. Analytics data is isolated from user operations via allowlist validation. Enables product insights into onboarding flow and PR creation behavior.

## Receipt

- [Commit a9de690 (2026-05-28T04:37:50Z): 'fix(APP-1892): restore PostHog onboarding-completed and create-pr-button-clicked events' - Analytics restoration with ge](https://github.com/OpenHands/OpenHands/commit/a9de690)
