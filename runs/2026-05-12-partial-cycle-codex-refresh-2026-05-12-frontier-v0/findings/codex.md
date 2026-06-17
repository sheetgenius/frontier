---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-12-codex-pretooluse-input-rewrite
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-05-12
  end: 2026-05-12
versions_covered: "CLI 0.130.x"
status: accepted_signal
confidence: high
accessibility_impact: low
operator_relevance: high
actionability: adapt
evidence:
  - label: "PR #20527 — Support PreToolUse updatedInput rewrites"
    url: https://github.com/openai/codex/pull/20527
    precision: commit_diff_reviewed
---

# Codex: PreToolUse Hook Input Rewrites

## What Changed

[PR #20527](https://github.com/openai/codex/pull/20527) enables PreToolUse
hooks to rewrite tool inputs before execution. The hook output schema already
documented `updatedInput`, but Codex was rejecting it instead of applying it.
Now: when a PreToolUse hook returns `permissionDecision: "allow"` with an
`updatedInput` payload, Codex applies the rewritten input before dispatching
the tool call. The tool executes the updated payload, not the original.

## Operator Consequence

PreToolUse hooks can now sanitize, normalize, redirect, or augment tool
calls before execution. Examples:
- Strip or mask sensitive arguments before a shell command runs
- Normalize file paths to prevent path traversal
- Replace a risky file destination with a safe staging path

Previously, hooks could only observe and allow/deny. Now they can observe,
allow with modification, or deny.

## Signal

Hook authors who have been waiting for `updatedInput` to work should test
existing hooks. Hooks that previously allowed-and-returned an `updatedInput`
(expecting the rewrite to apply) were silently executing the original input.
