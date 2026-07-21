---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-gemini-cli-coretools-setting-migrated-to-tools-core-config-rename-i
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: medium
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0
    precision: github_release
---
# 2026-07-01-gemini-cli-coretools-setting-migrated-to-tools-core-config-rename-i

coreTools setting migrated to tools.core (config rename in v0.49.0) (channel: tagged-release, 2026-06-25). Operator consequence: The 'coreTools' configuration key was migrated to 'tools.core' (PR #27947). Operators with settings files or automation that pin the old key should re-audit their config; run-contract/adapter assumptions that read this setting may need updating. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0
