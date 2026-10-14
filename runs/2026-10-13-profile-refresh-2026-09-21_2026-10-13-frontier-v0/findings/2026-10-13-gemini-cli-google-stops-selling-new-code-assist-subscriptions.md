---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-google-stops-selling-new-code-assist-subscriptions
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://docs.cloud.google.com/gemini/docs/codeassist/release-notes
    precision: official_docs
  - url: https://docs.cloud.google.com/gemini/docs/codeassist/sunset
    precision: official_docs
  - url: https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals
    precision: official_docs
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/get-started/authentication.mdx#L17-L34
    precision: tagged_commit_file
---
# 2026-10-13-gemini-cli-google-stops-selling-new-code-assist-subscriptions

Google stops selling new Code Assist subscriptions. From 2026-10-09 customers cannot purchase a new Code Assist Standard or Enterprise subscription. Existing subscriptions can still add licenses until 2027-01-31. The official sunset page gives that date for annual renewals and 2027-12-31 for monthly renewals, with existing service supported through its contractual end. These exact dates are now Google's statement, not merely issue #29712's report. Google points customers to Antigravity through Gemini Enterprise and links a Gemini CLI migration guide. Its consumer deprecation page still states the 2026-06-18 cutoff for individual, AI Pro and Ultra access. None of these receipts establishes a universal Gemini CLI shutdown or an API-key, Vertex or Gateway termination date.

Channel: docs-only. Half: defect. Date: 2026-10-09.

Operator consequence: Existing Code Assist teams should schedule transition against their license-addition, final-renewal and contract-end dates; a new subscription is no longer available. Evaluate Google's Antigravity migration path or API-key/Vertex operation against the team's controls and metered costs rather than inferring support from repository activity. Do not use the stale consumer sign-in recommendation as proof of access. The exact schedule is current official documentation with a displayed October 13 update date, not an immutable October 13 capture.

## Receipt
- https://docs.cloud.google.com/gemini/docs/codeassist/release-notes
- https://docs.cloud.google.com/gemini/docs/codeassist/sunset
- https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/get-started/authentication.mdx#L17-L34
