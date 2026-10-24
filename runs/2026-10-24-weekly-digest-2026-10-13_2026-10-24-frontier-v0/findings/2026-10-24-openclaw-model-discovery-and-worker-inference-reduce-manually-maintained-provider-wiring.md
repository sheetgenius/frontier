---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-model-discovery-and-worker-inference-reduce-manually-maintained-provider-wiring
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/CHANGELOG/2026.10.5.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/anthropic.md#L633-L652
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/google.md#L11-L58
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/commit/4d47170f3961fd71c0106a90696096e743c1ff59
    precision: commit
---
# 2026-10-24-openclaw-model-discovery-and-worker-inference-reduce-manually-maintained-provider-wiring

Model discovery and worker inference reduce manually maintained provider wiring. Provider pickers can surface newly listed Claude and ChatGPT models without another OpenClaw release; known catalog rows retain their described metadata, and discovery remains advisory when unavailable. Google adds Gemini 4 Argon and Gemini 3.8 Flash and changes the Google default to Gemini 4 Argon. The same release adds a native worker inference runtime with placement, worker-policy, and destination checks. These are harness support and routing changes, not independent verification of model capability or performance.

Channel: tagged-release. Half: capability. Date: 2026-10-18.

Operator consequence: Stop maintaining manual catalog entries solely to expose supported newly listed models, but explicitly pin the model when reproducibility or cost matters. Trial worker inference on the intended destination before removing a custom dispatch layer. The durable work is credential ownership, placement policy, and evaluation; provider-name plumbing becomes cheaper. Live model discovery, worker inference, and billing were not exercised in this research.

## Receipt
- https://github.com/openclaw/openclaw/blob/v2026.10.7/CHANGELOG/2026.10.5.md
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/anthropic.md#L633-L652
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/google.md#L11-L58
- https://github.com/openclaw/openclaw/commit/4d47170f3961fd71c0106a90696096e743c1ff59
