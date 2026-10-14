---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-v2-13-ships-the-earlier-branch-fixes-and-two-breaking-changes
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/releases/tag/v2.13
    precision: github_release
  - url: https://github.com/agent0ai/agent-zero/compare/v2.12...v2.13
    precision: git_compare
  - url: https://github.com/agent0ai/agent-zero/commit/a62aad4aceb3270009b0f1eb801996c46bc86a16
    precision: commit
---
# 2026-10-13-agent-zero-v2-13-ships-the-earlier-branch-fixes-and-two-breaking-changes

v2.13 ships the earlier branch fixes and two breaking changes. The first of two stable framework releases in the window ships redesigned Files navigation, project folders, deeper subordinate rendering, streamed native commentary, messaging administration, parallel secret substitution and Browser panel/deadline fixes. It removes runtime=input from remote execution without an alias and removes static dummy API keys that overrode saved credentials for LM Studio, llama.cpp, oMLX and vLLM. These changes remain in v2.14. The current recommendation is framework v2.14, CLI v2.14 and Launcher v1.9; main is identical to v2.14.

Channel: tagged-release. Half: both. Date: 2026-09-23.

Operator consequence: Install the current stable set in section 9. Migrate runtime=input callers to input_remote and configure saved keys or keyless mode for local providers that depended on dummy keys. Recheck messaging identities and execution-tool policies before resuming connected workloads (sections 2 and 3).

## Receipt
- https://github.com/agent0ai/agent-zero/releases/tag/v2.13
- https://github.com/agent0ai/agent-zero/compare/v2.12...v2.13
- https://github.com/agent0ai/agent-zero/commit/a62aad4aceb3270009b0f1eb801996c46bc86a16
