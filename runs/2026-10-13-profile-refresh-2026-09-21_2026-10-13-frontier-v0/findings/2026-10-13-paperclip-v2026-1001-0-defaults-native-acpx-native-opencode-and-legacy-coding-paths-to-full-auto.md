---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-v2026-1001-0-defaults-native-acpx-native-opencode-and-legacy-coding-paths-to-full-auto
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.1001.0
    precision: github_release
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapter-utils/src/paperclip-runner-permissions.ts#L48-L136
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapters/codex-local/src/server/codex-args.ts#L53-L80
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapters/claude-local/src/server/permissions.ts#L7-L23
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/opencode-local/src/server/runtime-config.ts#L105-L117
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/paperclip-runner/src/drivers/codex/codex-security-config.ts#L187-L220
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/pull/13693
    precision: merged_pr
---
# 2026-10-13-paperclip-v2026-1001-0-defaults-native-acpx-native-opencode-and-legacy-coding-paths-to-full-auto

v2026.1001.0 defaults native ACPX, native OpenCode and legacy coding paths to full auto. Missing settings now choose approve-all for native ACPX and allow for native OpenCode. Legacy codex_local defaults to --dangerously-bypass-approvals-and-sandbox instead of workspace-write. Legacy claude_local remote/root paths default to --dangerously-skip-permissions instead of the former allowed-tools list. Legacy opencode_local full auto replaces ambient permission rules with allow. Stored explicit values can opt out. The catalog also has provider-managed modes, so this is not a statement about every provider or launch path. Native Codex retains Paperclip filesystem restrictions and disabled network unless PAPERCLIP_RUNNER_NETWORK_ACCESS=enabled. Provider/account authorization and OS isolation still matter. Local harness shell commands are not necessarily calls through the company connection-tool grant matcher.

Channel: tagged-release. Half: both. Date: 2026-10-02.

Operator consequence: Export agent configs before upgrading from v2026.916.x. Choose native acpxPermissionMode as approve-paperclip, approve-reads or deny-all, or native opencodePermissionMode as ask, when those prompts are intentional. For legacy opencode_local and claude_local the opt-out is dangerouslySkipPermissions: false; for legacy codex_local use dangerouslyBypassApprovalsAndSandbox: false. Native and legacy settings are not interchangeable. Restrictive sandbox/profile/approval/network arguments suppress defaulted Codex bypass, but explicit bypass=true wins. The intended gain is unattended execution without an unanswered provider prompt. The resulting audit needs to distinguish provider execution containment from Paperclip connection permissions; neither covers every operation alone.

## Receipt
- https://github.com/paperclipai/paperclip/releases/tag/v2026.1001.0
- https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapter-utils/src/paperclip-runner-permissions.ts#L48-L136
- https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapters/codex-local/src/server/codex-args.ts#L53-L80
- https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapters/claude-local/src/server/permissions.ts#L7-L23
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/opencode-local/src/server/runtime-config.ts#L105-L117
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/paperclip-runner/src/drivers/codex/codex-security-config.ts#L187-L220
- https://github.com/paperclipai/paperclip/pull/13693
