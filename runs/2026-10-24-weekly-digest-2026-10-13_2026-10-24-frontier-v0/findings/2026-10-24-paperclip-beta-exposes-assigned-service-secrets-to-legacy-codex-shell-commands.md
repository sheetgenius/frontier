---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-exposes-assigned-service-secrets-to-legacy-codex-shell-commands
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/042051904d368f5514e287e5ca8e404dc8f78a0d
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/AGENT-IDENTITY.md#L96-L116
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/packages/adapter-utils/src/codex-shell-environment.ts
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-beta-exposes-assigned-service-secrets-to-legacy-codex-shell-commands

Beta exposes assigned service secrets to legacy Codex shell commands. The 2026-10-22 change opts configured task service-secret variables such as SLACK_BOT_TOKEN into legacy Codex ACP and CLI shell delivery, including runs without an agent identity. Values stay in the child environment; shell configuration contains names. Provider/login keys, observability credentials and reserved runtime transport keys remain excluded, and unassigned ambient host secrets are not opted in. This is not a claim about every native Codex path.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: In 2026.1023.0-beta.0, treat assigning the service credential as authorizing model-directed shell commands to read it. Narrow service permissions and inspect adapter environment bindings. This can remove credential-delivery glue, while deliberately exposing the assigned credential to agent code; choose a brokered tool instead when the agent should not receive the value. No exfiltration was reproduced.

## Receipt
- https://github.com/paperclipai/paperclip/commit/042051904d368f5514e287e5ca8e404dc8f78a0d
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/AGENT-IDENTITY.md#L96-L116
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/packages/adapter-utils/src/codex-shell-environment.ts
