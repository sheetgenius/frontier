---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-omnigent-the-same-blind-approval-hole-reappeared-through-a-tool-s-wire-level
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/blob/v17.3.5/packages/coding-agent/CHANGELOG.md
    precision: official_changelog
---
# 2026-08-17-omnigent-the-same-blind-approval-hole-reappeared-through-a-tool-s-wire-level

The same blind-approval hole reappeared through a tool's wire-level alias and was fixed again in v17.3.5.

The v17.3.5 changelog entry: "Fixed always-ask approval prompts bypassing edit preview readiness when a built-in tool executes under its wire-level alias, such as edit running as apply_patch." The preview-readiness wait added five days earlier keyed on the tool's own name, so the same built-in reaching the approval path under its wire alias skipped the wait and reproduced the original defect.

Channel: tagged-release. Ancestry: Fix commit 1fc05fc635ce2c1ae53ef9de10fc26d37902da61, "fix(tui): waited for wire-aliased edit previews", authored 2026-08-15T03:32:17Z. gh api repos/can1357/oh-my-pi/compare/v17.3.5...1fc05fc635ce -> status "behind", ahead_by 0; against v17.3.4 -> status "ahead", ahead_by 1. GitHub release v17.3.5 published 2026-08-16T08:00:13Z; npm published 17.3.5 at 2026-08-16T08:03:37Z; the Homebrew tap moved to 17.3.5 at 2026-08-16T08:00:38Z.

Operator consequence: Upgrade to v17.3.5 or later, and treat the pair as the lesson rather than either fix alone. A human-in-the-loop control was repaired, then routed around by the same code path under a different name, inside one release window. If you are auditing an approval gate in any harness, the question to ask is not whether the gate fires but whether every alias of the gated operation reaches it.

## Receipt
- https://github.com/can1357/oh-my-pi/blob/v17.3.5/packages/coding-agent/CHANGELOG.md
