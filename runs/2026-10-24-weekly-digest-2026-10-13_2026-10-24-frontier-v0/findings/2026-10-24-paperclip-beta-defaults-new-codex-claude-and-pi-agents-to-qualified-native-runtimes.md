---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-defaults-new-codex-claude-and-pi-agents-to-qualified-native-runtimes
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/adb69e8f09852c772d9901ae270e5b2d66e39c77
    precision: commit
  - url: https://github.com/paperclipai/paperclip/commit/8193abb9363ef953edb920c6e48fbf251cc65d79
    precision: commit
  - url: https://github.com/paperclipai/paperclip/commit/734c26533914511f943db8ea5a416277b5625af3
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/connections/github-copilot.md
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-beta-defaults-new-codex-claude-and-pi-agents-to-qualified-native-runtimes

Beta defaults new Codex, Claude and Pi agents to qualified native runtimes. New-agent creation resolves supported harness/target combinations to Paperclip Runner, while saved agents and explicit Legacy choices preserve their execution identity. Unsupported targets keep the appropriate fallback; failures must not silently select a different runner. Pi requires explicit provider/model selection and runtime setup, with its narrower target qualification. Packaged Copilot 1.0.88 adds a native path with personal fine-grained tokens carrying Copilot Requests authority, explicit model selection and credential isolation. Copilot usage credits are not automatically USD cost. The upstream default-rollout records distinguish source/package checks, API-key journeys, subscription gaps and Cloud qualification.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Test `2026.1023.0-beta.0` if choosing a harness once and receiving its supported runtime removes useful setup work. Inspect the saved runner, host architecture, package identity, model and connection before comparing runs. Existing agents do not migrate automatically. Do not turn a dated qualification on one source/platform/account into proof for every later beta or subscription path. Unknown pricing and cleanup holds remain meaningful operating states.

## Receipt
- https://github.com/paperclipai/paperclip/commit/adb69e8f09852c772d9901ae270e5b2d66e39c77
- https://github.com/paperclipai/paperclip/commit/8193abb9363ef953edb920c6e48fbf251cc65d79
- https://github.com/paperclipai/paperclip/commit/734c26533914511f943db8ea5a416277b5625af3
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/connections/github-copilot.md
