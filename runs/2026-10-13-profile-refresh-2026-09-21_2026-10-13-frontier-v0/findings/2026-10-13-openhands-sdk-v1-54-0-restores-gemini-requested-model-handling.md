---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-sdk-v1-54-0-restores-gemini-requested-model-handling
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/6d51e7262fc234586ff5e8e519ce5a658d334cdf
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/pull/5579
    precision: merged_pr
  - url: https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.54.0
    precision: github_release
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/config/defaults.json
    precision: tagged_commit_file
---
# 2026-10-13-openhands-sdk-v1-54-0-restores-gemini-requested-model-handling

SDK v1.54.0 restores Gemini requested-model handling. The ACP dependency upgrade removed the legacy model response/switch methods Gemini uses. Per #5579, a requested model could be ignored while reported as applied. The SDK restores parsing of the models block and session/set_model calls through a compatibility connection. This repair accompanies model discovery but changes execution correctness, not merely menu contents.

Channel: tagged-release. Half: defect. Date: 2026-10-09 (SDK v1.54.0); 2026-10-12 (Canvas v1.27.0 bundle).

Operator consequence: For Gemini sessions whose selected model matters to cost or evaluation, use agent-server 1.54.0 or later and check the runtime-reported model. Canvas first bundles the repair in v1.27.0; use v1.27.1 for the repaired all-in-one Docker package. No live Gemini acceptance was run here.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/6d51e7262fc234586ff5e8e519ce5a658d334cdf
- https://github.com/OpenHands/software-agent-sdk/pull/5579
- https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.54.0
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/config/defaults.json
