---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-stable-adds-model-gateways-and-native-runtime-choices-without-removing-compatibility-limit
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/9f7057e122c0c6987044240e22ea067402e6e450
    precision: commit
  - url: https://github.com/paperclipai/paperclip/commit/e38d6d16b6f234c29651f5ed501cc8d25cfc121a
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/paperclip-runner/src/drivers/codex/codex-command.ts
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-model-fallback.ts
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-runtime-compatibility.ts
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/openai-dot-runner.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/paperclip-runner/src/drivers/acpx/acp-permission-adapter.ts
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/adapter-utils/src/paperclip-runner-permissions.ts#L48-L136
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-stable-adds-model-gateways-and-native-runtime-choices-without-removing-compatibility-limit

Stable adds model gateways and native runtime choices without removing compatibility limits. Connections can hold OpenRouter, Bedrock, Gemini and compatible Responses/Messages/Chat Completions/local endpoint configuration, with harness-specific routing rather than an assumption that every endpoint fits every agent. Native Codex prefers its installed package CLI and can choose a compatible model with a visible warning; explicit runtime pins retain precedence. Pi 1.0 and paired Dot join the experimental Runner, and Cursor's integration reaches stable. Dot uses an existing hosted agent through dedicated OAuth/MCP events, requires its own flag and Assistant MCP, and acknowledges externally unmetered billing. Personal assistant OAuth is not the Dot agent identity. Remote Codex still admits only >=0.149.0 and <0.161.0; declared Codex/Claude pins remain 0.160.0/2.1.286. Native ACPX still defaults to `approve-all` and native OpenCode to `allow`. The native ACPX permission adapter now offers supported decisions; the prior profile's blanket no-interactive-handler explanation is superseded, while legacy ACPX remains a separate path.

Channel: tagged-release. Half: both. Date: 2026-10-24.

Operator consequence: On v2026.1023.0, move compatible routing and credentials into governed connections instead of custom launcher environment glue. Record the selected runtime and actual model after fallback. Do not use local version tolerance to bypass remote admission, or generalize a successful harness/protocol combination to another. New runtime options reduce integration scaffolding; provider compatibility, unmetered hosted usage and explicit connection authority remain operator work. No provider account or model inference was exercised here.

## Receipt
- https://github.com/paperclipai/paperclip/commit/9f7057e122c0c6987044240e22ea067402e6e450
- https://github.com/paperclipai/paperclip/commit/e38d6d16b6f234c29651f5ed501cc8d25cfc121a
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/paperclip-runner/src/drivers/codex/codex-command.ts
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-model-fallback.ts
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-runtime-compatibility.ts
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/openai-dot-runner.md
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/paperclip-runner/src/drivers/acpx/acp-permission-adapter.ts
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/adapter-utils/src/paperclip-runner-permissions.ts#L48-L136
