---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-gemini-cli-build-file-edit-gate-is-preview-only-at-close
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-preview.0
    precision: github_release
  - url: https://github.com/google-gemini/gemini-cli/pull/29250
    precision: merged_pr
---
# 2026-09-21-gemini-cli-build-file-edit-gate-is-preview-only-at-close

v0.61.0-preview.0 (2026-09-15) makes build and test runs require confirmation after the agent has edited a build file such as package.json or a Makefile (PR 29250), and refuses to launch the sandbox from sensitive directories (PR 29214). Neither is in stable v0.60.0. ACP emitting a pending tool_call before request_permission (PR 29439) is on main only at window close.

Channel: preview-or-beta (v0.61.0-preview.0 only). Half: both.

Operator consequence: On stable 0.60.0 an agent-edited package.json script can still run under a previously approved build command. Pin @preview only if you want this gate now.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-preview.0
- https://github.com/google-gemini/gemini-cli/pull/29250
