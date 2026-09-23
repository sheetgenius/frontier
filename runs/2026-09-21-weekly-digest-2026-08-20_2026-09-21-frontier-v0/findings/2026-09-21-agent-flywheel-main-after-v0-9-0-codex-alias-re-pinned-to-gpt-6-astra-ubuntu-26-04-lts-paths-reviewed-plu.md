---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-agent-flywheel-main-after-v0-9-0-codex-alias-re-pinned-to-gpt-6-astra-ubuntu-26-04-lts-paths-reviewed-plu
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/236c6b07ec
    precision: commit
---
# 2026-09-21-agent-flywheel-main-after-v0-9-0-codex-alias-re-pinned-to-gpt-6-astra-ubuntu-26-04-lts-paths-reviewed-plu

main after v0.9.0: Codex alias re-pinned to gpt-6-astra; Ubuntu 26.04 LTS paths; reviewed plugin installs. Main is moving toward a reviewed, digest-pinned, receipt-
bearing plugin installer with explicit approval, which is the first sign of an
approval step inside ACFS's own install flow. None of it is installable from a
tag yet.

Channel: main-unreleased. Half: both. Date: 2026-09-04 to 2026-09-21.

Operator consequence: Watch whether the next tag carries the plugin
approval flow and whether it covers the bundled agents or only third-party
plugins. A v0.9.0 `cod` pins gpt-5.6-sol; main pins gpt-6-astra: model choice
now depends on which ref you installed.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/236c6b07ec
