---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-gemini-cli-pty-resize-hardening
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.45.0-preview.1, v0.44.1, v0.45.0, v0.46.0-preview.0"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: none
actionability: observe
evidence:
  - label: "Commit title: 'fix(core): harden PTY resize against native crashes (#27496)' with changes to packages/cli/index.ts and packages/core/src/services/shellExecutionService.ts adding process existence chec"
    url: https://github.com/google-gemini/gemini-cli/commit/bd53951dc8b04dbe411ecc81972d78d52db33877
    precision: commit
---
# PTY Resize Hardening Against Native Crashes

## What Changed

Core terminal handling now verifies process existence before PTY resize operations to prevent native crashes. Improved error handling for undefined error messages and expanded EBADF detection to cover both message-based and code-based checks. Added null-safe assignment and early return on process verification failures.

## Operator Implication

Eliminates crashes during terminal resize operations, particularly in Termux and multi-process environments. Reduces support burden from terminal instability reports.

## Receipt

- [Commit title: 'fix(core): harden PTY resize against native crashes (#27496)' with changes to packages/cli/index.ts and packages/core/src/services/shellExecution](https://github.com/google-gemini/gemini-cli/commit/bd53951dc8b04dbe411ecc81972d78d52db33877)
