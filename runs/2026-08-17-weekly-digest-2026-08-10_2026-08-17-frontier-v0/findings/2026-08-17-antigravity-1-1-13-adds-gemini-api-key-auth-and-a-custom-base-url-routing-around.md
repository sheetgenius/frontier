---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-antigravity-1-1-13-adds-gemini-api-key-auth-and-a-custom-base-url-routing-around
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.13
    precision: github_release
---
# 2026-08-17-antigravity-1-1-13-adds-gemini-api-key-auth-and-a-custom-base-url-routing-around

1.1.13 adds GEMINI_API_KEY auth and a custom base URL, routing around the sign-in eligibility gate.

'Added support for `GEMINI_API_KEY`, so the CLI can run against the Gemini API directly without signing in. Set `modelProvider: "gemini"` in `settings.json`, export `GEMINI_API_KEY`, and point `GOOGLE_GEMINI_BASE_URL` at a custom endpoint if you need one. The banner and `/help` show `Gemini API key` as the credential, and `/logout` explains that it comes from the environment rather than appearing to end a session.' This closes the loop on the account-eligibility gate that 1.1.7 disclosed on 2026-07-26: sign-in, and therefore tier eligibility, is no longer required to run the binary. Issue #78, opened 2026-05-21 asking for exactly this for headless environments, is still open as of 2026-08-17.

Channel: tagged-release. Ancestry: Tag 1.1.13, prerelease:false, published_at 2026-08-14T02:26:19Z; the entry is the first bullet of the '## 1.1.13' section in CHANGELOG.md at main commit fbf22703a9c4bda0758b5bace0ab3142746780a9, and the first bullet of the 1.1.13 release body. Corroborated on the second official surface, https://antigravity.google/changelog?tab=cli, which lists 1.1.13 at August 14, 2026.

Operator consequence: Try it if the eligibility gate has been blocking you, and understand what you are trading: subscription-tier quota for metered API billing, and an identity-bound session for a long-lived environment variable that `/logout` explicitly will not clear. Two operational notes. First, `GOOGLE_GEMINI_BASE_URL` means this closed binary will now talk to an endpoint you choose, which is the only handle an operator has ever had for observing its traffic -- worth a proxy if you want to see what it sends. Second, an API key in the environment of a CI job is readable by anything else in that job, including the agent itself.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.13
