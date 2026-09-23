---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-eve-credential-exposure-byok-provider-key-served-from-eve-v1-info-chatgpt-login-stored-in-plai
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/pull/3203
    precision: merged_pr
---
# 2026-09-21-eve-credential-exposure-byok-provider-key-served-from-eve-v1-info-chatgpt-login-stored-in-plai

Credential exposure: BYOK provider key served from /eve/v1/info; ChatGPT login stored in plaintext. A deployed agent using the BYOK scaffold handed its model
provider API key to any admitted caller of the info route. Separately, eve's
own ChatGPT login wrote a plaintext session file from 0.52.3 until 0.54.3.

Channel: tagged-release. Half: defect. Date: 2026-09-07 to 2026-09-11.

Operator consequence: If you deployed with BYOK on any version before
0.52.5 and channel auth admits anyone you do not fully trust (anonymous web
chat included), rotate the provider key now; upgrading does not revoke a
copied key. On developer machines that signed into ChatGPT via eve 0.52.3 to
0.54.2, sign in again on >= 0.54.3 so the plaintext file is removed.

## Receipt
- https://github.com/vercel/eve/pull/3203
