---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-gemini-cli-enableagents-false-still-loads-builtins-on-0-56-0
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.56.0/packages/core/src/agents/registry.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.57.0-preview.0/packages/core/src/agents/registry.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/pull/28867
    precision: github_pr
---
# 2026-08-20-gemini-cli-enableagents-false-still-loads-builtins-on-0-56-0

At v0.56.0, packages/core/src/agents/registry.ts loadAgents() calls loadBuiltInAgents() at line 163 before isAgentsEnabled() at line 168. refreshAgents() also loads built-ins with no flag check. The disable switch only skips project/user .gemini/agents/ directories. Built-in CodebaseInvestigator / CliHelp / Generalist still register. PR #28867 merge 753e4cb55 moves loadBuiltInAgents after the early return. compare v0.57.0-preview.0...753e4cb55 status=behind, ahead_by=0. compare v0.56.0...753e4cb55 status=diverged. At preview, isAgentsEnabled is checked first (line 167) and refreshAgents returns immediately when disabled (line 321).

Channel: tagged-release for the hole (npm latest); preview-or-beta for the fix. Half: both.

Operator consequence: experimental.enableAgents false on 0.55.1 or 0.56.0 does not suppress built-in subagents. Preview 0.57.0-preview.0 is the first tagged channel where the flag does. Restart required.

## Receipt
- https://github.com/google-gemini/gemini-cli/blob/v0.56.0/packages/core/src/agents/registry.ts
- https://github.com/google-gemini/gemini-cli/blob/v0.57.0-preview.0/packages/core/src/agents/registry.ts
- https://github.com/google-gemini/gemini-cli/pull/28867
