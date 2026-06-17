---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-07-paperclip-agent-company-control-plane
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-04-23
  end: 2026-05-07
commit_count: 125
status: accepted_signal
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: test
evidence:
  - label: "Adapters declare runtime command spec for remote provisioning"
    url: https://github.com/paperclipai/paperclip/commit/90631b09b36fa028ad24ca5375bfa50e3602799c
    precision: commit_diff_reviewed
  - label: "Fix remote workspace environment shaping"
    url: https://github.com/paperclipai/paperclip/commit/856c6cb192e53a992875821297b5fd8d29c95c2d
    precision: commit
  - label: "Add sandbox callback bridge for remote environment API access"
    url: https://github.com/paperclipai/paperclip/commit/a4ac6ff133fbe8bdb82f4046fda85f7cb372b6a9
    precision: commit
  - label: "Add E2B sandbox provider plugin"
    url: https://github.com/paperclipai/paperclip/commit/4ef969f0840810527333aa6ee44fed89f4551f7c
    precision: commit
  - label: "Issue cost summaries"
    url: https://github.com/paperclipai/paperclip/commit/c4269bab59fff7a73ff31797578cc97ece7f160f
    precision: commit
  - label: "First-class security agent role"
    url: https://github.com/paperclipai/paperclip/commit/c036bbfa98494dcfe2521aab65019a4cd021c769
    precision: commit
  - label: "Pause and resume sidebar agents"
    url: https://github.com/paperclipai/paperclip/commit/43b0f2ae582b18f2872ae60bf468f54b99b614ba
    precision: commit
---

# Paperclip: The Agent Company Needs A Runtime Contract

## What Changed

Paperclip is the closest source in this watchlist to the Factory problem. The diff-reviewed commit on runtime command specs is direct evidence: adapters now declare how their runtime command should be detected and installed on remote sandbox targets. Instead of requiring the operator to hand-write provisioning scripts for every agent CLI, the adapter carries its own install recipe.

The rest of the window rhymes with that: remote workspace environment shaping, model probes on execution targets, E2B sandbox providers, sandbox callback bridges, pause/resume controls, issue cost summaries, security roles, liveness recovery, stale heartbeat cancellation, and ordered sub-issue workflows.

## Operator Consequence

Once agents become a company-like system, the hard parts are not only task assignment. The hard parts are runtime provisioning, stale sessions, costs, role boundaries, liveness, and recoverability.

## Bitter Consequence

Paperclip is useful frontier evidence for Factory, BitterGrid, and BitterPass at once. It shows why agent orchestration needs a run contract: which agent, which adapter, which runtime, which install/provisioning path, which cost surface, which role, which liveness controls, and which recovery path.

This should feed Bitter's charter-gated autonomy work and Grid workcell design.
