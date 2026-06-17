---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-06-hermes-curator-and-service-surfaces
source: hermes-agent
source_contract: sources/hermes-agent.yml
window: 2026-04-22..2026-05-06
status: accepted_signal
confidence: high
receipts:
  - https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.23
  - https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.30
  - https://github.com/NousResearch/hermes-agent/commits
evidence:
  - label: v2026.4.30 release
    url: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.30
    precision: release
  - label: Curator release summary
    url: https://github.com/NousResearch/hermes-agent/blob/v2026.4.30/RELEASE_v0.12.0.md#L6-L12
    precision: line
  - label: Curator feature details
    url: https://github.com/NousResearch/hermes-agent/blob/v2026.4.30/RELEASE_v0.12.0.md#L58-L64
    precision: line
  - label: Self-improvement loop details
    url: https://github.com/NousResearch/hermes-agent/blob/v2026.4.30/RELEASE_v0.12.0.md#L71-L77
    precision: line
---

# Hermes Agent: The Self-Improving Personal-Agent Platform Is Hardening

## What Changed

Hermes Agent `v2026.4.23` rebuilt the interactive CLI around React/Ink,
introduced a pluggable transport architecture, added native AWS Bedrock and
multiple inference paths, and expanded messaging and plugin surfaces.

Hermes Agent `v2026.4.30` introduced Curator, an autonomous background process
that maintains the skill library on a default seven-day cycle. Curator grades,
consolidates, and prunes skills, writes `logs/curator/run.json` and
`REPORT.md`, and protects bundled and hub skills behind defense-in-depth
gates. The same release expanded inference providers, messaging platforms,
Teams, Spotify, Google Meet, ComfyUI, TouchDesigner-MCP, and reduced TUI
cold-start time.

Commits after the release continued work around compaction guidance, memory
authority, cache eviction after compression, Kanban worker lifecycle,
concurrency limits, task-run summaries, and runtime-gated worker tools.

## Operator Consequence

Hermes should be watched as a broad self-improving personal-agent platform, not
just as a coding CLI. Its center of gravity is memory, skills, automations,
messaging surfaces, runtime portability, and background worker management.

That is valuable, but it is not the same product as Bitter. Hermes can be a
powerful Bitter worker. Bitter still needs to own charter, authority, receipts,
verification, replay, and operator-grounded memory settlement.

## Bitter Implication

Bitter should benchmark Hermes Curator against BitterLearn's own doctrine:

- What counts as an accepted skill or memory?
- What evidence proves a skill should be kept, merged, or pruned?
- Are curator reports actionable by future runs?
- How are protected bundled/hub skills governed?
- Can Curator output be imported as a Bitter evidence handle or wake-packet
  candidate without giving Hermes durable authority over Bitter memory?

## Signal

Self-improving worker platforms are moving quickly. Bitter's posture should be:
bring Hermes as a worker when it helps, but preserve the operator-owned loop
that decides what becomes durable memory.
