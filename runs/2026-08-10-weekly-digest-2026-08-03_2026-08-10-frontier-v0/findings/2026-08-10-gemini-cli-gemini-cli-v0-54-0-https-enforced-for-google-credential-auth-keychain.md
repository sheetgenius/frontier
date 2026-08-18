---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-gemini-cli-gemini-cli-v0-54-0-https-enforced-for-google-credential-auth-keychain
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0
    precision: github_release
---
# 2026-08-10-gemini-cli-gemini-cli-v0-54-0-https-enforced-for-google-credential-auth-keychain

Gemini CLI v0.54.0  --  HTTPS enforced for Google credential auth, keychain tag validation.

Stable v0.54.0 (19 commits over v0.53.1) is the first release containing #28517 (commit e2a5375d10d59f2378db6fb8b973eeaef4cf26eb), which enforces HTTPS in `GoogleCredentialsAuthProvider` to prevent credentials being sent in cleartext, and #28523 (commit bef6119500b0238ad84f6396d2a6cabda9991554), which enforces explicit tag length and validation in the file keychain  --  an authenticated-encryption hygiene fix on the at-rest credential store. It also carries #28469, rotating the session ID on model fallback so a fallback no longer reuses server-side state from the exhausted model.

Channel: tagged-release. Ancestry: `gh api repos/google-gemini/gemini-cli/releases/tags/v0.54.0` -> prerelease:false, published_at 2026-08-06T01:35:59Z. `git tag --contains e2a5375d1` -> v0.54.0 v0.54.4 v0.55.1 (v0.54.0 is the earliest stable). Same for bef611950. Confirmed neither is in v0.53.1 via `git log v0.53.1..v0.54.0`.

Operator consequence: Upgrade past v0.54.0 if you authenticate via `GOOGLE_APPLICATION_CREDENTIALS` or a service account, especially through a proxy or a non-TLS internal endpoint  --  before this the provider would transmit over plain HTTP if pointed there. Neither issue has a published advisory, so version-scanning tools will not flag you; check your installed version directly.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0
