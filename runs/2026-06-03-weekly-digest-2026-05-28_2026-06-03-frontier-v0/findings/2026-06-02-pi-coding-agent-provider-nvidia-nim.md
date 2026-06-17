---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-pi-coding-agent-provider-nvidia-nim
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "Commit 6014801 'Add NVIDIA NIM provider' adds dynamic model discovery from NVIDIA NIM API with tool-use filtering and NVIDIA_API_KEY support"
    url: https://github.com/earendil-works/pi/commit/6014801
    precision: commit
---
# NVIDIA NIM provider dynamic model discovery

## What Changed

Integrated NVIDIA NIM (NVIDIA Inference Microservice) as OpenAI-compatible provider. Fetches available models from https://integrate.api.nvidia.com/v1 API with filtering for text input/output and tool use support. Uses NVIDIA_API_KEY environment variable. Blocks ~14 models incompatible with tool use.

## Operator Implication

Operators can now use NVIDIA's public inference models through unified pi interface. Dynamic model discovery reduces maintenance burden as NVIDIA adds models.

## Receipt

- [Commit 6014801 'Add NVIDIA NIM provider' adds dynamic model discovery from NVIDIA NIM API with tool-use filtering and NVIDIA_API_KEY support](https://github.com/earendil-works/pi/commit/6014801)
