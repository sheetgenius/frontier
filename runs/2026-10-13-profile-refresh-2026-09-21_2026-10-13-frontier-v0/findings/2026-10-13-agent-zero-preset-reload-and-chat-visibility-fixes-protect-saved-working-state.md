---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-preset-reload-and-chat-visibility-fixes-protect-saved-working-state
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/b8905741d056ea7fb17bb28b764dc086b4c7f67e
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/29361a84eb7fff71fd16d67b1d7ecb076cf16f54
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/cb93ed055b56122efbba2a0c719dd0798b598534
    precision: commit
---
# 2026-10-13-agent-zero-preset-reload-and-chat-visibility-fixes-protect-saved-working-state

Preset reload and chat visibility fixes protect saved working state. The preset editor reloads global and active presets before creating its draft, avoiding deletion of presets added from another tab or API by a stale draft. Chat pruning rechecks disk before removing a context missed by an earlier listing. Sidebar Folders registers replacement-list callbacks only while its UI mounts, so importing its store while disabled no longer hides intact chat/task lists. These are distinct failures; a disappeared list was not necessarily deleted disk data.

Channel: tagged-release. Half: defect. Date: 2026-10-13 (first stable; implementations 2026-09-30..2026-10-13).

Operator consequence: Upgrade before concurrent preset editing. If a chat disappears, inspect persisted chat data before trying restoration or recreating work. Verify preset retention across two editor tabs and folder disable/re-enable in a bounded acceptance check.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/b8905741d056ea7fb17bb28b764dc086b4c7f67e
- https://github.com/agent0ai/agent-zero/commit/29361a84eb7fff71fd16d67b1d7ecb076cf16f54
- https://github.com/agent0ai/agent-zero/commit/cb93ed055b56122efbba2a0c719dd0798b598534
