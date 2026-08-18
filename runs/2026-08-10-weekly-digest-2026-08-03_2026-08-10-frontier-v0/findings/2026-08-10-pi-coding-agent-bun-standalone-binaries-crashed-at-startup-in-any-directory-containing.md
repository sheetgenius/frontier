---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-pi-coding-agent-bun-standalone-binaries-crashed-at-startup-in-any-directory-containing
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/pull/7685
    precision: merged_pr
---
# 2026-08-10-pi-coding-agent-bun-standalone-binaries-crashed-at-startup-in-any-directory-containing

Bun standalone binaries crashed at startup in any directory containing a `bunfig.toml` with `preload`.

Pi's compiled Bun standalone binaries crashed on startup whenever the current working directory contained a `bunfig.toml` declaring `preload`. The binary was autoloading the project's bunfig and executing its preload scripts inside itself. Fixed by compiling with `--no-compile-autoload-bunfig`. Contributed by @geril07.

Channel: tagged-release. Ancestry: Listed under Fixed in the v0.84.1 release body, referencing PR #7685. Backing commit beeca6ab ("fix(coding-agent): disable bunfig autoload in compiled binaries (#7685)", 2026-08-06T15:16:12Z) appears in the commit range returned by `gh api repos/earendil-works/pi/compare/v0.83.0...v0.84.2`, between the v0.84.0 and v0.84.1 tag points. v0.84.1: prerelease=false, published 2026-08-07T06:07:00Z.

Operator consequence: Upgrade if you install Pi as a standalone binary and work on Bun projects. Before 0.84.1 the failure looked like Pi being broken rather than the directory being the trigger, which is a hard symptom to diagnose. Worth noting for its own sake: a compiled agent binary was reading and running a preload script out of whatever directory it happened to be started in.

## Receipt
- https://github.com/earendil-works/pi/pull/7685
