---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-03-openclaw-sandbox-boundary-fix-stops-at-beta
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-07-27
  end: 2026-08-03
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/pull/113405
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.5
    precision: github_release
---
# 2026-08-03-openclaw-sandbox-boundary-fix-stops-at-beta

OpenClaw's fix for the symlink-then-.. workspace boundary bypass in assertSandboxPath (PR #113405, merged 2026-07-27T07:16Z, commit cc027149e553) reached a prerelease channel and no further. Ancestry: the commit is contained in v2026.7.2-beta.5 (2026-07-28) and the later betas -beta.6 and -beta.7, and is not contained in the latest stable v2026.7.1, published 2026-07-13, which predates the merge. No stable OpenClaw release shipped in this window. Channel: preview-or-beta. Resolves a carry-forward check with the answer 'beta only'. Operator consequence: on stable OpenClaw the workspace boundary still is not a containment barrier, two windows after the bypass was first recorded.

## Receipt
- https://github.com/openclaw/openclaw/pull/113405
- https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.5
