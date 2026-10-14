---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-authority-inspection-and-in-chat-approvals-became-easier-to-use
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/approvals.md#L210-L273
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.7/CHANGELOG/2026.9.7.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/pull/164534
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/commit/17b92c6988cd2ca9effdc8db5443ee9edd1a106c
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/openclaw.md#L120-L143
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/exec-approvals.md#L554-L589
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/trust-model.md#L55-L68
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-tools/tool-policy.md#L230-L248
    precision: tagged_commit_file
---
# 2026-10-13-openclaw-authority-inspection-and-in-chat-approvals-became-easier-to-use

Authority inspection and in-chat approvals became easier to use. 9.7 adds exec-policy show to explain terminal-tool policy and approval sources, a plain-language connection Profile view, and structured change approvals completed in the chat that requested them. 10.1 adds scope to the standalone approval page, which previously showed command and host without payment details or standing-grant terms carried by the request. Current docs still offer sender tool policy, per-agent message restrictions and exact-operation standing grants for the named automation path. Standing grants bind the agent, job definition and operation and are rechecked before spawn. One Gateway is one trust domain; these collaboration controls are not hostile-tenant isolation.

Channel: tagged-release. Half: capability. Date: 2026-09-23 (9.6), 2026-09-30 (9.7), 2026-10-10 (10.1).

Operator consequence: Use `openclaw exec-policy show --agent <id> --session <existing-session-key> --verbose` for a read-only live Gateway preview. Without session, the command is offline policy inspection and locally allowed execution is unverified. Even a successful preview can be cached and does not guarantee execution; model, channel, sandbox and runtime checks may still deny it. Keep unrelated trust domains on separate Gateways and approve notification requests on a build with the scope display fix.

## Receipt
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/approvals.md#L210-L273
- https://github.com/openclaw/openclaw/blob/v2026.9.7/CHANGELOG/2026.9.7.md
- https://github.com/openclaw/openclaw/pull/164534
- https://github.com/openclaw/openclaw/commit/17b92c6988cd2ca9effdc8db5443ee9edd1a106c
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/openclaw.md#L120-L143
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/exec-approvals.md#L554-L589
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/trust-model.md#L55-L68
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-tools/tool-policy.md#L230-L248
