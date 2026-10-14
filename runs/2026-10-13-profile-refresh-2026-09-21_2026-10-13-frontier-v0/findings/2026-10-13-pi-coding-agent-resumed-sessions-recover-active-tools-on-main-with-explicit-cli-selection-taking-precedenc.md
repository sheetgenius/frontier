---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-resumed-sessions-recover-active-tools-on-main-with-explicit-cli-selection-taking-precedenc
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/6f2f164ab7e7f1516c4530da396b151ab2f84779
    precision: commit
---
# 2026-10-13-pi-coding-agent-resumed-sessions-recover-active-tools-on-main-with-explicit-cli-selection-taking-precedenc

Resumed sessions recover active tools on main with explicit CLI selection taking precedence. Main restores tools activated during a session when resuming it. Explicit named --tools, --no-tools, or --no-builtin-tools selection takes precedence; additive/subtractive CLI entries apply to the restored set. This changes resumed tool authority and reproducibility but is absent from v1.2.0.

Channel: main-unreleased. Half: both. Date: 2026-10-13.

Operator consequence: Record explicit tool selections in wrappers until a containing release ships. On that upgrade, check that resumed sessions restore the intended set, including modifiers; do not assume either old or new authority from the session filename alone.

## Receipt
- https://github.com/earendil-works/pi/commit/6f2f164ab7e7f1516c4530da396b151ab2f84779
