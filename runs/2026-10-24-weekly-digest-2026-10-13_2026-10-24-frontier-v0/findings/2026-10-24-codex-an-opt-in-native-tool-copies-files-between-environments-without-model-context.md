---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-an-opt-in-native-tool-copies-files-between-environments-without-model-context
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/e7de1f444089c29ac002e3df08d940f6de8a2613
    precision: commit
---
# 2026-10-24-codex-an-opt-in-native-tool-copies-files-between-environments-without-model-context

An opt-in native tool copies files between environments without model context. The [host-registered multi_env_copy_file extension transfers bytes between selected environments without loading file contents into model context](https://github.com/openai/codex/commit/e7de1f444089c29ac002e3df08d940f6de8a2613). It requires absolute endpoint-native paths and enforces each endpoint's sandbox policy and grants. Failed writes can leave truncated or partial targets; it is not transactional.

Channel: tagged-release. Half: capability. Date: 2026-10-23.

Operator consequence: Test binary transfers, denied endpoint access and interruption before replacing model-mediated transfer scripts. The host must register the opt-in tool, and recovery must account for partial destinations.

## Receipt
- https://github.com/openai/codex/commit/e7de1f444089c29ac002e3df08d940f6de8a2613
