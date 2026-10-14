---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-stable-v0-64-0-relaxes-oauth-iss-requirements-and-normalizes-terminal-turns
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/29616
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/pull/29696
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/tools/mcp-server.md#L325-L347
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/mcp/oauth-provider.ts#L411-L421
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/oauth-flow.ts#L268-L300
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/commit/249d51c2631ba1a36b71b0f2c50195abbe4100ce
    precision: commit
---
# 2026-10-13-gemini-cli-stable-v0-64-0-relaxes-oauth-iss-requirements-and-normalizes-terminal-turns

Stable v0.64.0 relaxes OAuth iss requirements and normalizes terminal turns. Stable 0.64.0 requires an OAuth callback iss only when discovered metadata declares authorization_response_iss_parameter_supported=true, or an issuer was configured explicitly without discovered metadata. A supplied iss still has to match. The oauth.authorizationResponseIssParameterSupported override can retain strict enforcement. This relaxes 0.60.0's compatibility break for issuer-publishing servers that omit iss; the PR names Notion. The same cherry-pick normalizes outgoing terminal model turns by adding harness-authored Please continue. user content and Response was lost or interrupted. tool responses where needed after rewinds/aborts/cancellation.

Channel: tagged-release. Half: both. Date: 2026-10-13.

Operator consequence: Test 0.64.0 with MCP OAuth servers affected by the earlier missing-iss refusal. Set the support override true where that response is expected. In transcript/audit readers, distinguish synthetic continuation and missing-response records from user authorization or successful tool execution.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/29616
- https://github.com/google-gemini/gemini-cli/pull/29696
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/tools/mcp-server.md#L325-L347
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/mcp/oauth-provider.ts#L411-L421
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/oauth-flow.ts#L268-L300
- https://github.com/google-gemini/gemini-cli/commit/249d51c2631ba1a36b71b0f2c50195abbe4100ce
