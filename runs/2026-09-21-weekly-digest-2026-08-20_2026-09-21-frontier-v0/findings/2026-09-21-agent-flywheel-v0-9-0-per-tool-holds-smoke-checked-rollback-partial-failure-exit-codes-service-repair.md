---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-agent-flywheel-v0-9-0-per-tool-holds-smoke-checked-rollback-partial-failure-exit-codes-service-repair
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.9.0
    precision: github_release
---
# 2026-09-21-agent-flywheel-v0-9-0-per-tool-holds-smoke-checked-rollback-partial-failure-exit-codes-service-repair

v0.9.0: per-tool holds, smoke-checked rollback, partial-failure exit codes, service repair. `acfs hold <tool> --reason --version --expiry --owner`
freezes a bundled tool; a fresh tool install that fails its smoke probe rolls
back to the retained `.prev` binary; `acfs update` exits 0/1/2 for
success/total/partial failure; `acfs services` relaunches only dead panes and
reports services still running a replaced inode.

Channel: tagged-release. Half: capability. Date: 2026-09-04.

Operator consequence: This is the first tag that gives the operator a
per-tool version lever. It partly answers the contract question "does the
installer pin agent versions and channels?": the operator can now hold, but the
installer still does not pin by default (finding 4). Wire `acfs update`'s exit
code 2 into whatever alerts you; before v0.9.0 a partial failure looked like
success.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.9.0
