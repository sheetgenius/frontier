---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-stable-0-162-1-keeps-cli-daybreak-off-current-docs-scope-the-approve-for-me-switch-to-desk
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.161.0
    precision: github_release
  - url: https://github.com/openai/codex/pull/51207
    precision: merged_pr
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/daybreak.rs#L8-L33
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1363-L1366
    precision: tagged_commit_file
  - url: https://learn.chatgpt.com/docs/sandboxing/auto-review
    precision: official_docs
  - url: https://learn.chatgpt.com/docs/cyber-safety
    precision: official_docs
---
# 2026-10-13-codex-stable-0-162-1-keeps-cli-daybreak-off-current-docs-scope-the-approve-for-me-switch-to-desk

Stable 0.162.1 keeps CLI Daybreak off; current docs scope the Approve-for-me switch to desktop. Daybreak is OpenAI's approval-gated cyber access program: Daybreak Blue for authorized defensive work and Daybreak Red for separately approved offensive validation (cyber-safety docs). In the CLI it is a per-turn cyber access program: `--enable cli_daybreak` or `features.cli_daybreak=true` exposes `/daybreak` and its indicators, and `codex exec --cyber-access-program` or the TypeScript SDK's `cyberAccessProgram` selects a program per turn even with the flag off. The 0.161.0 notes say `daybreak=true` alone is insufficient and automatic Cyber routing is omitted by default "even for saved Daybreak threads". The TUI code selects an access program only for an eligible account and model (daybreak.rs L8-L33), and none of its non-test Daybreak code references approvals or permissions. The live auto-review page scopes the permission switch to the desktop app: "selecting an approved Daybreak model automatically switches the permissions control to Approve for me when that mode is available for your account and allowed by organization policy", and "Model selection never overrides managed organization requirements." The bundled catalog carries hidden `gpt-daybreak-blue-latest` and `gpt-daybreak-red-latest` entries with `model_specialty: cyber`.

Channel: tagged-release; docs-only (auto-review and cyber-safety pages, retrieved 2026-10-13). Half: capability. Date: 2026-10-07 (0.161.0); 2026-10-08 (0.162.0, API-key accounts).

Operator consequence: On stable 0.162.1 nothing changes for CLI users who do not opt in, and Daybreak does not loosen CLI approvals. Desktop-app fleets with Daybreak-approved users should expect the permission mode to switch to Approve for me on model selection unless managed requirements pin approvals; set those requirements before granting Trusted Access. Pipelines can request a program per turn with `codex exec --cyber-access-program` without enabling the TUI controls. Alpha.10 enables CLI and API-key cyber-program gates by default, still subject to eligible account, provider and model support (section 26). The desktop switch is current moving documentation, not a dated in-window implementation event.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.161.0
- https://github.com/openai/codex/pull/51207
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/daybreak.rs#L8-L33
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1363-L1366
- https://learn.chatgpt.com/docs/sandboxing/auto-review
- https://learn.chatgpt.com/docs/cyber-safety
