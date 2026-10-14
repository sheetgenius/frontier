---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-every-minor-in-the-window-broke-an-interface-an-integrator-touches
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.16.0
    precision: github_release
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.17.0
    precision: github_release
  - url: https://github.com/omnigent-ai/omnigent/pull/8795
    precision: merged_pr
  - url: https://github.com/omnigent-ai/omnigent/blob/353a387b04db708aabee9a2facdd07e5038dd0e2/CHANGELOG.md#L8-L12
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/353a387b04db708aabee9a2facdd07e5038dd0e2/CHANGELOG.md#L293
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-every-minor-in-the-window-broke-an-interface-an-integrator-touches

Every minor in the window broke an interface an integrator touches. Pre-1.0 weekly minors carried real breaks: collaborators lost MCP editing and oversized preferences reset in v0.16.0; the in-place agent switch was retired in v0.17.0 (fork into another agent where supported; some managed deployments disable fork (section 16); the path is reserved for a future shape); v0.18.0 rejects uploaded source tools on shared servers, types skills by directory name, and changes the Python client's list return types. None of v0.18.0's three breaking items is labeled breaking in its release notes, two are absent from them, and the v0.17.0 context-shape change is recorded nowhere; the labels exist only in a CHANGELOG that lands on main after the tag. The removed switch path is also the clearest scaffolding deletion of the window: where supported, a user can fork into another agent instead. This is not autonomous mid-session harness replacement.

Channel: tagged-release. Half: both. Date: 2026-09-22 (v0.15.0), 2026-09-29 (v0.16.0), 2026-10-06 (v0.17.0), 2026-10-13 (v0.18.0).

Operator consequence: Pin exact versions in CI and fleet images and upgrade on purpose, one minor at a time. Before each upgrade read the CHANGELOG on main (not at the tag) and the advisory page, then test API clients (switch-agent, Python client pagination), custom policies (`user_daily_cost`), skills invoked by name and uploaded bundles on a staging server. Also inspect brokered Databricks Codex executor configurations for the active-sandbox, provider/profile, route-grant and helper requirements introduced in v0.16.0 (section 14). A weekly cadence makes that a weekly chore; budget the attention and batch upgrades deliberately after meeting the security patch floor.

## Receipt
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.16.0
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.17.0
- https://github.com/omnigent-ai/omnigent/pull/8795
- https://github.com/omnigent-ai/omnigent/blob/353a387b04db708aabee9a2facdd07e5038dd0e2/CHANGELOG.md#L8-L12
- https://github.com/omnigent-ai/omnigent/blob/353a387b04db708aabee9a2facdd07e5038dd0e2/CHANGELOG.md#L293
