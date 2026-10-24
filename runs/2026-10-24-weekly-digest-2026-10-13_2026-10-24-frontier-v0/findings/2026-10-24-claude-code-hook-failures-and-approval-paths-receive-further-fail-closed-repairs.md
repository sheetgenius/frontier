---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-hook-failures-and-approval-paths-receive-further-fail-closed-repairs
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.299
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.300
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.309
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.310
    precision: github_release
  - url: https://web.archive.org/web/20261019030048/https://code.claude.com/docs/en/hooks
    precision: official_docs
---
# 2026-10-24-claude-code-hook-failures-and-approval-paths-receive-further-fail-closed-repairs

Hook failures and approval paths receive further fail-closed repairs. Version 299 blocks failed Windows `PreToolUse` and `PermissionRequest` hooks with no shell specified when Git is missing. Version 309 repairs PowerShell exit-code handling and the explicit-PowerShell missing-Git case. Version 310 closes the remaining quoted-command-only case. Version 299 also runs UserPromptSubmit before a skill or slash command expands, so blocking the prompt stops embedded shell commands; a skill's own frontmatter hook first runs on the following prompt. Version 300 validates hook `updatedInput` like model input: unknown keys are removed and invalid tool input denies the call. Version 310 also fixes VS Code's plan-feedback button approving a plan when Enter should send feedback.

Channel: tagged-release. Half: defect. Date: 2026-10-23.

Operator consequence: Windows policy-hook deployments should test 310 with missing Git, a quoted executable path, crashes and timeouts. Keep `onFailure: "block"` for policy hooks: the 295 opt-in remains relevant and the general default remains continue. Do not generalize the social shorthand about exit 2 to every event; `PermissionRequest` needs its documented decision JSON and does not use exit 2 as a universal denial. Test what the approval UI does, not just what its button says.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.299
- https://github.com/anthropics/claude-code/releases/tag/v2.1.300
- https://github.com/anthropics/claude-code/releases/tag/v2.1.309
- https://github.com/anthropics/claude-code/releases/tag/v2.1.310
- https://web.archive.org/web/20261019030048/https://code.claude.com/docs/en/hooks
