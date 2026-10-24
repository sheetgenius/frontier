---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-nightly-scopes-flag-taint-to-external-output-and-remembers-approved-flags-within-the-sessi
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/120a39ded6ad7b82e45b574ab54baba451d65fe9
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/core/src/utils/untrustedContextTracker.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/core/src/tools/shell.ts
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-nightly-scopes-flag-taint-to-external-output-and-remembers-approved-flags-within-the-sessi

Nightly scopes flag taint to external output and remembers approved flags within the session. Unknown-flag matching distinguishes external output, including web/MCP/remote-shell sources, from local shell output. Workspace-local path handling and remembered approved flags/root commands narrow repeated prompts. Approval memory is held in the session configuration, not established here as a persistent grant. High-risk argument matching remains a separate check; this does not turn external tool text into trusted instructions.

Channel: preview-or-beta. Half: both. Date: 2026-10-21.

Operator consequence: Canary the nightly on long shell-heavy jobs where ordinary commands repeatedly require approval after output accumulates. Inspect what the first approval covers, since later reuse may not ask again in that session. The durable gain is less repetitive attention spent on the same reviewed flag; no prompt-frequency benchmark or proof against all injection variants was run.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/120a39ded6ad7b82e45b574ab54baba451d65fe9
- https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/core/src/utils/untrustedContextTracker.ts
- https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/core/src/tools/shell.ts
