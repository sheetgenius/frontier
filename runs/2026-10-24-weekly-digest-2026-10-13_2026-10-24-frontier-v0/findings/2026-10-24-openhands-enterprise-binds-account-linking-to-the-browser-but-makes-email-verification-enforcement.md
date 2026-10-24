---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-enterprise-binds-account-linking-to-the-browser-but-makes-email-verification-enforcement
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/enterprise/commit/87f7fcb30523fa07fd3ff0a7ae29c8e7b473839f
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/6ce81f28801f3b1072fa0c1224235f134f82fe10
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/d1df819e9e616f58b629cd92e198018fe31d2bf4
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/c975ffb5798b0b626bc81239687c15328ca0336a
    precision: commit
  - url: https://github.com/OpenHands/enterprise/blob/1.79.0/server/constants.py#L32-L55
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/enterprise/blob/1.79.0/server/middleware.py#L87-L104
    precision: tagged_commit_file
---
# 2026-10-24-openhands-enterprise-binds-account-linking-to-the-browser-but-makes-email-verification-enforcement

Enterprise binds account linking to the browser but makes email-verification enforcement opt-in. OAuth v2 linking validates a browser-held nonce cookie against link state, with expiry and callback cleanup; a link state alone is no longer sufficient in a different browser. Generic OAuth routes reject non-OAuth providers, while dedicated SAML login, callback and metadata routes ship. Provider configuration gains email-match control. Separately, `REQUIRE_VERIFIED_EMAILS` now defaults to false because some configured identity providers omit the verification claim and previously locked new users out. Enforcing that middleware condition requires explicit opt-in. This is a changed access default, not evidence of an incident.

Channel: tagged-release. Half: both. Date: 2026-10-19 (1.72.0); 2026-10-20 (1.74.0); 2026-10-21 (1.75.0).

Operator consequence: Upgrade Enterprise separately, review each identity provider's login, linking and email-match policy, and set `REQUIRE_VERIFIED_EMAILS` explicitly if verification is part of the deployment's admission rule. Test both new-user login and cross-browser linking. The release removes provider-specific integration work but makes the administrator responsible for an explicit verification choice. A [frontend reconciliation](https://github.com/OpenHands/enterprise/commit/adc90a4280c639d6ab5d6e72dfc4e332a28cb38b) and a [further email-match behavior change](https://github.com/OpenHands/enterprise/commit/5516e2484b02fe06c515b0c54a46a2d7186f01c9) are in the inspected main range, not 1.79.0; no claim of complete UI parity or hosted rollout follows.

## Receipt
- https://github.com/OpenHands/enterprise/commit/87f7fcb30523fa07fd3ff0a7ae29c8e7b473839f
- https://github.com/OpenHands/enterprise/commit/6ce81f28801f3b1072fa0c1224235f134f82fe10
- https://github.com/OpenHands/enterprise/commit/d1df819e9e616f58b629cd92e198018fe31d2bf4
- https://github.com/OpenHands/enterprise/commit/c975ffb5798b0b626bc81239687c15328ca0336a
- https://github.com/OpenHands/enterprise/blob/1.79.0/server/constants.py#L32-L55
- https://github.com/OpenHands/enterprise/blob/1.79.0/server/middleware.py#L87-L104
