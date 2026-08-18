---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-pi-coding-agent-ai-agent-pi-documented-as-a-process-marker-distinct-from-pi-coding
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/environment-variables.md
    precision: official_docs
---
# 2026-08-17-pi-coding-agent-ai-agent-pi-documented-as-a-process-marker-distinct-from-pi-coding

`AI_AGENT=pi` documented as a process marker distinct from `PI_CODING_AGENT=true`.

docs/environment-variables.md at v0.84.2 now reads: "`AI_AGENT=pi` is a generic marker that lets tooling identify Pi as the agent that launched the process. `PI_CODING_AGENT=true` is Pi-specific and lets child processes detect that they run inside Pi. Child processes inherit both markers. They are not session-specific and are not set automatically when Pi is embedded through the SDK."

Channel: docs-only. Ancestry: The change is a documentation edit with no code channel: issue #7747 asks only to "Add a short AI_AGENT=pi entry to the Process Marker section," noting the variable itself was added earlier by #7493 and was already documented in the coding-agent README. Listed under Changed in the v0.84.2 release body as "Documented the generic `AI_AGENT=pi` process marker." The resulting text is visible in docs/environment-variables.md at the stable v0.84.2 tag.

Operator consequence: Observe, and use it if you gate CI or shell behaviour on whether an agent is driving. Two facts in that paragraph are worth extracting because they are easy to get wrong: both markers are inherited by child processes, so anything Pi spawns can see them and so can anything that spawns from there; and neither is set when Pi is embedded via the SDK, so a guard written as `if [ -n "$PI_CODING_AGENT" ]` silently fails open in SDK-embedded runs. These are markers for cooperative tooling, not a trust signal  --  nothing prevents a process from setting them itself.

## Receipt
- https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/environment-variables.md
