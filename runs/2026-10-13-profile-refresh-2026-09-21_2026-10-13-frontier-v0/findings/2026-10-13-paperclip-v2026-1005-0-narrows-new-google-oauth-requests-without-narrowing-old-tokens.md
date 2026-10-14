---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-v2026-1005-0-narrows-new-google-oauth-requests-without-narrowing-old-tokens
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/GOOGLE-WORKSPACE.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/25c422ba7e30f9e4bfb34ddeff88ce4bd6b2773e
    precision: commit
---
# 2026-10-13-paperclip-v2026-1005-0-narrows-new-google-oauth-requests-without-narrowing-old-tokens

v2026.1005.0 narrows new Google OAuth requests without narrowing old tokens. Docs, Sheets and Slides request their service-specific scopes without additional Drive scopes; Calendar write drops a redundant scope. Existing consent is not retroactively reduced. Managed methods require a matching Cloud broker registry and exact scope evidence; mixed contracts fail closed. Customer-owned methods use reduced requests on new consent. The tagged document also describes independent app/tool profiles, not a single combined credential.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: Reconnect affected grants for fresh reduced-scope consent and roll the broker scope registry with the application. Check provider-returned scopes rather than assuming the upgrade shrank existing tokens. Do not globally revoke the shared Google client to migrate one profile, because that can disrupt unrelated Workspace connections.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/GOOGLE-WORKSPACE.md
- https://github.com/paperclipai/paperclip/commit/25c422ba7e30f9e4bfb34ddeff88ce4bd6b2773e
