---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-pi-coding-agent-extensions-gained-authenticated-model-calls-and-full-transcript-control-context-handlers
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/releases/tag/v0.87.0
    precision: github_release
---
# 2026-09-21-pi-coding-agent-extensions-gained-authenticated-model-calls-and-full-transcript-control-context-handlers

Extensions gained authenticated model calls and full-transcript control; `context` handlers lost sight of system messages. What an operator can now do that they could not on 2026-08-20: an extension can call any configured provider with the user's resolved credentials, and can rewrite the entire request including the system prompt and send it verbatim, and can hide messages from the model while keeping the raw log intact. The scaffolding removed: mutating `agent.state.messages` as a context hack no longer works. The authority an extension holds grew, in a harness whose security posture is still "extensions are trusted code."

Channel: tagged-release. Half: capability. Date: 2026-09-19 (v0.86.0), 2026-09-21 (v0.87.0).

Operator consequence: Re-audit third-party extensions for `modelRegistry.stream`, `context_with_system`, and `appendContextEdit` on upgrade to 0.86/0.87; each is a place spend, prompt, or visible history can change without the user seeing it in the transcript. SDK embedders who mutate `agent.state.messages` must port to SessionManager calls on 0.87.0.

## Receipt
- https://github.com/earendil-works/pi/releases/tag/v0.87.0
