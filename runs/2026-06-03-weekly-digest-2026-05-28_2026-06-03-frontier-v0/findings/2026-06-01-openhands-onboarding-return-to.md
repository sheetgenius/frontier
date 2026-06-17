---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-01-openhands-onboarding-return-to
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: workflow
confidence: high
accessibility_impact: medium
actionability: observe
evidence:
  - label: "Commit d04ddf6 (2026-06-01T21:44:47Z): 'fix(frontend): preserve returnTo through the onboarding interstitial (#14353)' - Backend _build_onboarding_redirect() function and frontend OnboardingForm modif"
    url: https://github.com/OpenHands/OpenHands/commit/d04ddf6
    precision: commit
---
# UX: Preserve returnTo through onboarding interstitial

## What Changed

Fixed navigation flow to preserve user's original destination (returnTo) through onboarding process. Unauthenticated users clicking deep links are now redirected to onboarding but retain their target URL, and navigate to intended destination after form completion.

## Operator Implication

Operators will see improved onboarding UX where users no longer lose their navigation context after completing onboarding. Deep-linked URLs are now properly preserved through authentication flow.

## Receipt

- [Commit d04ddf6 (2026-06-01T21:44:47Z): 'fix(frontend): preserve returnTo through the onboarding interstitial (#14353)' - Backend _build_onboarding_redirect() fu](https://github.com/OpenHands/OpenHands/commit/d04ddf6)
