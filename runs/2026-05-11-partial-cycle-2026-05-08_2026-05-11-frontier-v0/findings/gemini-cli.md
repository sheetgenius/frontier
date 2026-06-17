---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-05-08
  end: 2026-05-11
commit_count: 21
status: accepted_signal
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: test
evidence:
  - label: "RemoteSubagentProtocol behind AgentProtocol"
    url: https://github.com/google-gemini/gemini-cli/commit/54f1e8c6d7e2
    precision: commit_diff_reviewed
  - label: "LocalSubagentProtocol behind AgentProtocol"
    url: https://github.com/google-gemini/gemini-cli/commit/014bfeb89bb7
    precision: commit_diff_reviewed
  - label: "Session export to file and import via flag"
    url: https://github.com/google-gemini/gemini-cli/commit/3805640530a9
    precision: commit_diff_reviewed
  - label: "v0.41.0 stable release: headless workspace trust enforcement and shell tools allowlist"
    url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.41.0
    precision: release_note
  - label: "Workspace trust enforced in headless mode (PR #25814)"
    url: https://github.com/google-gemini/gemini-cli/commit/dba9b9a0ff5a43a5d40d554b944db3e2ce99d5b6
    precision: commit_diff_reviewed
  - label: "Shell command validation with core tools allowlist (PR #25720)"
    url: https://github.com/google-gemini/gemini-cli/commit/27927c55e5b4947df0f2e853971c170000429dec
    precision: commit_diff_reviewed
---

# Gemini CLI: Subagents Become Pluggable; Sessions Become Portable

## What Changed

The 2026-05-08 commit batch introduces an `AgentProtocol` abstraction with
two backends: `LocalSubagentProtocol` and `RemoteSubagentProtocol`. Each
lands as a new module of roughly 400 lines of implementation plus 950 lines
of tests in `packages/core/src/agents/`. The previous evidence base had
subagents inheriting the parent agent's approval-mode posture; subagents now
sit behind a protocol that distinguishes local-process work from
remote-process work.

A separate change introduces an `/export` slash command and a corresponding
`--import` CLI flag, with new UI message types for export results. An
operator can write a session to a file and rehydrate it later.

The v0.41.0 stable release (tag published 2026-05-05, changelog merged
2026-05-08) extends two adjacent surfaces: workspace trust now enforces in
headless mode (PR #25814), and shell command validation gains a core-tools
allowlist (PR #25720).

## Operator Consequence

Subagent pluggability preempts an ambiguity that the previous evidence base
did not surface: does delegated work run in the same trust and sandbox
context as the parent, or somewhere else? The protocol split forces that
question into a surface that can be inspected and configured. A
`RemoteSubagentProtocol` makes "where did this work actually run" a
first-class operator concern.

Session portability gives operators a real recovery and audit path. A
session file is something they can read, edit, version-control, or move
between machines. The shape of the file (and whether it includes accepted
memory patches, approval-mode state, or open MCP connections) is the next
question worth probing.

Headless workspace-trust enforcement closes the obvious gap where CI and
other non-interactive contexts could bypass the trust prompt by being
non-interactive.

## Bitter Consequence

The `AgentProtocol` abstraction is a useful test target for capability
profiles. A profile that asserts "Gemini subagents inherit approval mode" is
now partially correct but under-specified; adapter work should distinguish
local from remote subagent execution and record which variant a run used.

Session export/import is a clean primitive for Bitter to mirror or wrap. The
file format is a stable thing to record as a receipt, and it gives Bitter a
way to observe what state Gemini believes is portable.
