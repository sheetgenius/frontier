---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-v1-session-sharing-is-discontinued-despite-surviving-sharing-documentation
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/blob/v1.19.4/packages/opencode/src/share/session.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v1.19.4/packages/opencode/src/cli/cmd/import.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/releases/tag/v1.19.1
    precision: github_release
  - url: https://github.com/anomalyco/opencode/commit/9e6877007419dd10b841d6ab600af69dcbba1019
    precision: commit
---
# 2026-10-24-opencode-v1-session-sharing-is-discontinued-despite-surviving-sharing-documentation

V1 session sharing is discontinued despite surviving sharing documentation. V1.19.1 disables new session sharing and share-URL imports. At the newest V1.19.4, the share function fails with a discontinuation error, and import rejects HTTP(S) share URLs. Unshare now clears local metadata rather than establishing deletion from a hosted service. The release also states that existing links are unavailable. The backend retirement commit is in V2.0.30. The V1 sharing documentation remains present and still describes optional hosted conversation links, so that documentation is not evidence that an operator can create a public link today.

Channel: tagged-release. Half: defect. Date: 2026-10-15.

Operator consequence: Remove public share links from new handoff workflows and test a supported file export/import path if a conversation must be transferred. Do not treat local unshare as a retention receipt or infer deletion of previously uploaded history from the removal of a feature. This is a correction to the intake notes, not a prior profile regression. The convenience of hosted handoff has gone away; the operator must now choose a transfer mechanism and control what conversation data it exposes.

## Receipt
- https://github.com/anomalyco/opencode/blob/v1.19.4/packages/opencode/src/share/session.ts
- https://github.com/anomalyco/opencode/blob/v1.19.4/packages/opencode/src/cli/cmd/import.ts
- https://github.com/anomalyco/opencode/releases/tag/v1.19.1
- https://github.com/anomalyco/opencode/commit/9e6877007419dd10b841d6ab600af69dcbba1019
