---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-gemini-cli-v0-57-0-promotes-every-preview-only-item-from-the-previous-brief
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0
    precision: github_release
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.57.0/packages/core/src/agents/registry.ts
    precision: tagged_commit_file
---
# 2026-09-21-gemini-cli-v0-57-0-promotes-every-preview-only-item-from-the-previous-brief

v0.57.0 (2026-08-25) contains all four items the previous brief left preview-only: retry and TTL work (fa2f27aee), git subprocess environment neutralization (getSafeGitEnv, c0d192452), the agent registry checking isAgentsEnabled before loading built-ins (753e4cb55), and the Cloud Workstations OAuth redirect (58ba19945). Each is an ancestor of v0.57.0 by compare (behind_by 0). Four stables cut in the window: v0.57.0 (08-25), v0.58.0 (09-01), v0.59.0 (09-08), v0.60.0 (09-15). npm latest at close is 0.60.0.

Channel: tagged-release (v0.57.0, 2026-08-25, and every later stable). Half: both.

Operator consequence: experimental.enableAgents false now suppresses built-in subagents on stable. Stable Gemini CLI is a weekly promotion of the previous week's preview; plan upgrades on that cadence.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0
- https://github.com/google-gemini/gemini-cli/blob/v0.57.0/packages/core/src/agents/registry.ts
