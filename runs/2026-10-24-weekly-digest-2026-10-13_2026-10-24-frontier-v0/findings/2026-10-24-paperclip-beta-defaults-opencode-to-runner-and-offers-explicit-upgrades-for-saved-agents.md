---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-defaults-opencode-to-runner-and-offers-explicit-upgrades-for-saved-agents
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/39e44a9d9b0dbbb327beecc490c0e5095f92649b
    precision: commit
  - url: https://github.com/paperclipai/paperclip/commit/0f15f82b19dfefcb66f278b575cd430be381015f
    precision: commit
---
# 2026-10-24-paperclip-beta-defaults-opencode-to-runner-and-offers-explicit-upgrades-for-saved-agents

Beta defaults OpenCode to Runner and offers explicit upgrades for saved agents. New qualified OpenCode agents default to Paperclip Runner, translating supported settings and rejecting unsupported legacy configuration/permission combinations. Explicit Legacy and saved runner choices remain. Eligible existing Codex and Claude agents gain an Upgrade runner control that saves pending edits and translates compatible settings while preserving identity, instructions, bindings and run history. Conversion starts fresh sessions; merely visiting or saving unrelated settings does not migrate an agent. Both changes merged on 2026-10-21.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Trial 2026.1023.0-beta.0 with the selected harness, account and target. Review unsaved form changes before clicking Upgrade runner, and record the saved runner, configuration and fresh-session boundary when comparing results. Upstream reports local API-account journeys, which do not qualify all remote or subscription combinations. A convenient migration control reduces repeated setup work while leaving compatibility choices explicit.

## Receipt
- https://github.com/paperclipai/paperclip/commit/39e44a9d9b0dbbb327beecc490c0e5095f92649b
- https://github.com/paperclipai/paperclip/commit/0f15f82b19dfefcb66f278b575cd430be381015f
