---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-the-hermes-native-policy-wrapper-now-points-to-the-shipped-hook
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/commit/96cb3231b0453fc4d4e2187bb0ebda775a4873ec
    precision: commit
  - url: https://github.com/omnigent-ai/omnigent/pull/7708
    precision: merged_pr
---
# 2026-10-13-omnigent-the-hermes-native-policy-wrapper-now-points-to-the-shipped-hook

The Hermes-native policy wrapper now points to the shipped hook. The Hermes-native bridge previously generated a policy-hook path under its own nonexistent inner directory. v0.16.0 resolves the shipped hook module's actual location for both regular and relay wrappers. PR #7708 reports that the old wrapper exited on the missing file and Hermes blocked tool calls. This repairs policy availability; it does not demonstrate a permission bypass.

Channel: tagged-release. Half: both. Date: 2026-09-24 merged; 2026-09-29 stable package.

Operator consequence: Hermes-native operators whose tool calls all fail should upgrade to v0.16.0 or later and recreate the wrapper. For this posture use 0.18.0 for the separate security fixes. Attribute behavior to the Omnigent/Hermes pair, rather than calling it a Hermes authorization defect.

## Receipt
- https://github.com/omnigent-ai/omnigent/commit/96cb3231b0453fc4d4e2187bb0ebda775a4873ec
- https://github.com/omnigent-ai/omnigent/pull/7708
