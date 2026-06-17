---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-04-23
  end: 2026-05-07
commit_count: 169
status: accepted_signal
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: test
evidence:
  - label: "Auto Memory inbox flow with canonical patch contract"
    url: https://github.com/google-gemini/gemini-cli/commit/a7beb890d093e2cf66ed1ac8debff690b75e1f6d
    precision: commit_diff_reviewed
  - label: "Tighten private Auto Memory patch allowlist"
    url: https://github.com/google-gemini/gemini-cli/commit/7fb5146c6b084888b38dea05af6a4e95ea48810a
    precision: commit
  - label: "Workspace trust visible in MCP list UX"
    url: https://github.com/google-gemini/gemini-cli/commit/a38f393af77c0ccf50da10d73c84cfb594dd8175
    precision: commit
  - label: "Shell command safety evals"
    url: https://github.com/google-gemini/gemini-cli/commit/82f6ea5b61a6321748d81a62d34c62bf7d2c9fa2
    precision: commit
  - label: "Subagents aware of active approval modes"
    url: https://github.com/google-gemini/gemini-cli/commit/40b384de2c1d251c9d13a6359216a9e6cff5a254
    precision: commit
  - label: "JSON output for AgentExecutionStopped"
    url: https://github.com/google-gemini/gemini-cli/commit/469092a72cbe368b69df25c0caeefbc911b6d6fd
    precision: commit
---

# Gemini CLI: Memory Is Being Treated As A Reviewable Change

## What Changed

Gemini CLI's most important signal is not simply that it has memory. The stronger signal is that memory is being shaped as a reviewable patch. The Auto Memory inbox commit touches docs, settings schema, memory commands, inbox UI, local executor behavior, skill extraction, and evals. That is a full product surface around memory acceptance rather than an invisible note appended to a hidden profile.

The surrounding commits reinforce the same direction: workspace trust in MCP UX, private memory patch allowlists, shell command safety evals, approval-mode awareness for subagents, policy-engine references, sandbox container naming, and structured non-interactive output.

## Operator Consequence

Agent memory becomes safer when it is inspectable. A developer should be able to see what the agent wants to remember, why it matters, and whether the proposed memory should enter the project or remain local to the tool.

## Bitter Consequence

Bitter should treat Gemini's memory inbox as a useful upstream evidence source. It should record the proposed patch, the approval mode, the workspace trust state, and whether anything was accepted into Bitter's own durable project memory.

This is also a good evaluation target: can Bitter distinguish reviewable memory from ambient memory?
