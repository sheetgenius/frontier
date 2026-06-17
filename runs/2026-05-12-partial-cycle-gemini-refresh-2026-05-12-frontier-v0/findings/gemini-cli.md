---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-12-gemini-session-resume-reliability
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-05-12
  end: 2026-05-12
versions_covered: "post-v0.41.0"
status: accepted_signal
confidence: high
accessibility_impact: low
operator_relevance: medium
actionability: test
evidence:
  - label: "PR #26577 — fix(cli): restore resume for legacy sessions"
    url: https://github.com/google-gemini/gemini-cli/pull/26577
    precision: commit_diff_reviewed
---

# Gemini CLI: Session Resume Reliability Fix

## What Changed

[PR #26577](https://github.com/google-gemini/gemini-cli/pull/26577) fixes
session resume behavior for legacy session JSON files:
- Valid legacy chat JSON files (with `sessionId` and messages) that were
  previously missing from `/resume` and `--list-sessions` now appear.
- `--resume <sessionId>` failures no longer silently start a new session;
  the error surfaces correctly.

## Operator Consequence

Operators who relied on `--resume` with legacy session formats may have
been unknowingly starting fresh sessions instead of resuming. This fix
makes resume failure explicit and makes legacy sessions discoverable.

## Context

This directly affects the session export/import capability noted in the
prior finding (2026-05-11-gemini-subagent-protocol-and-session-portability).
The export/import feature is more reliable after this fix.
