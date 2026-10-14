---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-openhands-ships-its-own-agent-driven-qa-harness-and-recipes-for-27-feature-families-and
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/commit/d7e14e25bcf14238e566139ec9490e1f05efcd69
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/pull/17961
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/18304
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/.agents/skills/verify-openhands/SKILL.md
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/.agents/skills/verify-openhands/references/feature-map/F13-agent-profiles.md#L23
    precision: tagged_commit_file
---
# 2026-10-13-openhands-openhands-ships-its-own-agent-driven-qa-harness-and-recipes-for-27-feature-families-and

OpenHands ships its own agent-driven QA harness and recipes for 27 feature families and documented known bugs (v1.26.0 to v1.27.0). The repo now ships verify-openhands: a `control-openhands` CLI that launches an isolated real stack (agent server, automation, static frontend, ingress), drives a browser, and records evidence (screenshots, ARIA snapshots, video), plus a feature map of 27 areas (F01 to F27) with exact recipes, expected results and known failures for each user-facing behavior. v1.27.0 records documented known bugs in the map; coverage requirements are not proof of exhaustive defect coverage, and agent-written PRs in the window cite its live runs as their evidence (for example #18127 and #18039).

Channel: tagged-release (follow-ups on main only). Half: capability. Date: 2026-10-08 (v1.26.0); 2026-10-12 (v1.27.0).

Operator consequence: The map is a detailed public account of how Canvas is intended to behave, by-design edges included (the model-pill rule at F13 L23 and L85), and its recipes can be rerun against your own stack to check an upgrade instead of trusting release notes. It runs a real stack and browser (Node 24, uv, Chromium) and its skill forbids unauthorized external writes, but that instruction is not technical confinement: the local terminal runs as the user's account. Human attention shifts from clicking through QA to reviewing agent-recorded evidence; the vendor now writes its review rules around that evidence.

## Receipt
- https://github.com/OpenHands/OpenHands/commit/d7e14e25bcf14238e566139ec9490e1f05efcd69
- https://github.com/OpenHands/OpenHands/pull/17961
- https://github.com/OpenHands/OpenHands/pull/18304
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/.agents/skills/verify-openhands/SKILL.md
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/.agents/skills/verify-openhands/references/feature-map/F13-agent-profiles.md#L23
