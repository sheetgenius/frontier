---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-pi-coding-agent-harnesstax-study-same-model-same-success-up-to-five-times-the-cost
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: medium
evidence:
  - url: https://arena.ai/blog/coding-agents-harness-tax
    precision: third_party_research
  - url: https://harnesstax.github.io/
    precision: third_party_research
---
# 2026-09-21-pi-coding-agent-harnesstax-study-same-model-same-success-up-to-five-times-the-cost

UC Berkeley and Arena published HarnessTax on 2026-09-16. It ran seven models through Claude Code, Codex CLI and Pi on the same 30 sampled tasks from SWE-bench Lite and Terminal-Bench 2.0, 21 model-harness pairs. Across 42 within-model comparisons, a Fisher exact test found harness choice had little effect on task success holding the model constant, while cost moved up to fivefold. Their example: Claude Fable 5 completed 97.8 percent of attempts in Claude Code at an average $1.33 and 96.7 percent in Pi at $0.67. The same window, DeepSeek evaluated its V4.1 Flash model across eight harness configurations and a practitioner summary reports it peaked in the minimal ones.

Channel: docs-only (third-party study published 2026-09-16). Half: capability.

Operator consequence: For API-metered work, measure your own tasks in a minimal harness before assuming the vendor harness earns its overhead; the study says success is mostly the model and cost is mostly the harness. The sample is 30 tasks per benchmark and two benchmarks; it does not cover long-horizon or subscription-bundled use.

## Receipt
- https://arena.ai/blog/coding-agents-harness-tax
- https://harnesstax.github.io/
