---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-ripgrep-deny-glob-expansion-now-ignores-user-configuration
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/ac9b5b8380517ded445b09dd3196d8d9e2ba3c59
    precision: commit
---
# 2026-10-13-codex-ripgrep-deny-glob-expansion-now-ignores-user-configuration

Ripgrep deny-glob expansion now ignores user configuration. User ripgrep configuration, including --quiet in RIPGREP_CONFIG_PATH, could suppress the file list used to build Linux sandbox deny-glob masks and leave matching files accessible. The deny-glob invocation now passes --no-config; protected executable lookup alone did not close this separate hole.

Channel: tagged-release. Half: defect. Date: 2026-10-08 (0.162.0).

Operator consequence: Use 0.162.0 or later and re-test denied reads and writes with RIPGREP_CONFIG_PATH set, checking that permitted files still work.

## Receipt
- https://github.com/openai/codex/commit/ac9b5b8380517ded445b09dd3196d8d9e2ba3c59
