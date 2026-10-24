---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-preview-proxy-signing-keeps-aws-credentials-in-the-proxy-for-supported-requests
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/9a8a85bc539325f2819dd0717f88b6ba6286495e
    precision: commit
---
# 2026-10-24-codex-preview-proxy-signing-keeps-aws-credentials-in-the-proxy-for-supported-requests

Preview proxy signing keeps AWS credentials in the proxy for supported requests. Alpha.1 [adds an aws_sigv4 MITM action that re-signs authorized requests carrying placeholder credentials](https://github.com/openai/codex/commit/9a8a85bc539325f2819dd0717f88b6ba6286495e). Credentials stay in the trusted proxy. Supported forms include empty and explicitly unsigned payloads; incompatible scopes, presigned URLs, unsupported streaming signatures and ambiguous framing are rejected.

Channel: preview-or-beta. Half: capability. Date: 2026-10-23.

Operator consequence: Assess supported AWS request forms before retaining a signing shim. The proxy primitive alone does not supply complete local command/snapshot masking, which remains main-only in section 30.

## Receipt
- https://github.com/openai/codex/commit/9a8a85bc539325f2819dd0717f88b6ba6286495e
