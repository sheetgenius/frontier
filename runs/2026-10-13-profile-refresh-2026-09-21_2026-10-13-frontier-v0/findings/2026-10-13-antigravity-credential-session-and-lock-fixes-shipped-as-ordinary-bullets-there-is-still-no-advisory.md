---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-credential-session-and-lock-fixes-shipped-as-ordinary-bullets-there-is-still-no-advisory
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L15
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.9/CHANGELOG.md?plain=1#L17
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.9/CHANGELOG.md?plain=1#L22
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L14
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/tree/1.3.4
    precision: official_docs
---
# 2026-10-13-antigravity-credential-session-and-lock-fixes-shipped-as-ordinary-bullets-there-is-still-no-advisory

Credential, session and lock fixes shipped as ordinary bullets; there is still no advisory channel. 1.3.3: after a sign-in expired or was revoked mid-session, "a token refresh that was already in flight no longer restores the expired credentials." 1.2.9: checking the conversation-history database for write access "could silently drop file locks held by concurrent CLI processes on the same file", a corruption risk, and an enterprise sign-in abandoned partway left "a stuck partial credential". 1.3.4: remote MCP servers using OAuth no longer clear saved sign-ins on a temporary network failure, timeout or server error. Each arrived as one bullet among layout, Vim and scrolling fixes; no GHSA, CVE or advisory exists for the repository.

Channel: tagged-release. Half: defect. Date: 2026-09-23 to 2026-10-13.

Operator consequence: The only way to learn about these is to read every release note; no feed will tell you. Machines that run several `agy` processes against one profile, such as the Remote Control daemon next to interactive sessions, should be on 1.2.9 or later. Treat 1.3.4 as the floor and re-read the notes at each upgrade rather than waiting for an advisory.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L15
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.9/CHANGELOG.md?plain=1#L17
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.9/CHANGELOG.md?plain=1#L22
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L14
- https://github.com/google-antigravity/antigravity-cli/tree/1.3.4
