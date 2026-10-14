---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-sandboxes-reject-sensitive-workdirs-and-seatbelt-changes-its-state-root
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/29214
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L188-L193
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L398-L403
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L535-L623
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L1033-L1175
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/storage.ts#L70-L135
    precision: tagged_commit_file
---
# 2026-10-13-gemini-cli-sandboxes-reject-sensitive-workdirs-and-seatbelt-changes-its-state-root

Sandboxes reject sensitive workdirs and Seatbelt changes its state root. Sandboxed launches refuse sensitive workdirs such as home, its parents and ~/.gemini. Docker/Podman/runsc additionally sanitize their settings copy, remove hooks/custom tool commands/API keys, force HOME=/home/node, and reject sensitive SANDBOX_MOUNTS paths. LXC has its own workdir/allowed-path checks and returns before that setup; no identical sanitized copy or HOME claim is established for LXC. SANDBOX_MOUNTS parsing is not a Seatbelt feature. With SANDBOX=sandbox-exec, Seatbelt runtime state moves to ~/.cache/.gemini, including MCP/A2A tokens, temporary sessions/checkpoints and policy-integrity state. Trusted folders use that default root unless GEMINI_CLI_TRUSTED_FOLDERS_PATH overrides it.

Channel: tagged-release. Half: both. Date: 2026-09-23.

Operator consequence: Launch from a project directory. Recheck hooks/custom tools in Docker/Podman/runsc rather than assuming the host settings survive. On macOS expect separate default token/session/trust paths between Seatbelt and unsandboxed runs; locate resumable sessions under ~/.cache/.gemini and account for the trusted-folder override. Do not infer equivalent isolation details across all sandbox runtimes.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/29214
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L188-L193
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L398-L403
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L535-L623
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L1033-L1175
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/storage.ts#L70-L135
