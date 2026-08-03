---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-03-gemini-cli-a2a-workspace-self-trust-rce-reaches-stable
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-07-27
  end: 2026-08-03
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/28470
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0
    precision: github_release
---
# 2026-08-03-gemini-cli-a2a-workspace-self-trust-rce-reaches-stable

Gemini CLI's a2a-server backend loaded workspace environment files before evaluating workspace trust, so an attacker could place GEMINI_CLI_TRUST_WORKSPACE=true inside a malicious .gemini/.env and, in the PR's words, 'self-validate their own untrusted workspace before trust is checked'. The stated class is zero-click remote code execution and environment poisoning in untrusted workspaces: opening a hostile repository was enough. The fix defers loadEnvironment() until after checkPathTrust/setIsTrusted, ignores workspace-level .env and .gemini/.env entirely when untrusted (falling back to the user's home directory), and adds task-level environment and process isolation via AsyncLocalStorage and a Proxy on process.env, aligning the backend with the CLI frontend's existing model. Merged 2026-07-21, shipped in stable v0.53.0 on 2026-07-28. Channel: tagged-release. This resolves a carry-forward check from the prior run. Operator consequence: upgrade past v0.53.0 before pointing a2a-server at any repository you did not write.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/28470
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0
