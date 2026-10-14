---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-ci-usage-telemetry-suppression-is-repaired-after-the-stable-cut
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/commit/3aed65725827d02451ed59afd8d94d43ba5de5d7
    precision: commit
  - url: https://github.com/omnigent-ai/omnigent/blob/3aed65725827d02451ed59afd8d94d43ba5de5d7/omnigent/cli.py#L3599-L3630
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-ci-usage-telemetry-suppression-is-repaired-after-the-stable-cut

CI usage telemetry suppression is repaired after the stable cut. The main-only repair preserves CI markers and explicit DISABLE_TELEMETRY/DO_NOT_TRACK opt-outs when launching a local background server. Usage suppression is evaluated in the server's startup environment. The maintainer explanation describes automated jobs being counted as users when daemon startup lost their context. An already running server does not adopt a later caller's CI environment.

Channel: main-unreleased. Half: both. Date: 2026-10-13T13:18:02Z merged.

Operator consequence: For CI suppression, inspect and control the server launch environment, not just the invoking job's variables. Track the first containing stable release; this repair is not in the 0.18.0 wheel. Restart the relevant server with the desired environment when adopting it.

## Receipt
- https://github.com/omnigent-ai/omnigent/commit/3aed65725827d02451ed59afd8d94d43ba5de5d7
- https://github.com/omnigent-ai/omnigent/blob/3aed65725827d02451ed59afd8d94d43ba5de5d7/omnigent/cli.py#L3599-L3630
