---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-stable-v0-63-0-fixes-agent-git-diff
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/29467
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.62.0/packages/core/src/services/shellExecutionService.ts#L597-L606
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/shellExecutionService.ts#L597-L618
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/issues/28928
    precision: official_docs
---
# 2026-10-13-gemini-cli-stable-v0-63-0-fixes-agent-git-diff

Stable v0.63.0 fixes agent git diff. v0.57.0 through v0.62.0 set diff.external to an empty string in every agent shell environment. Git interprets that as an external program name: an ordinary content diff with changes exits 128, while git diff --no-ext-diff, git diff --stat, git show and git log -p remain usable. v0.63.0 removes the bad override. Seven other overrides remain: credential.helper, core.fsmonitor, core.hooksPath, core.sshCommand, core.editor and sequence.editor blank, core.pager=cat. GIT_CONFIG_GLOBAL and GIT_CONFIG_SYSTEM still point to /dev/null in v0.64.0.

Channel: tagged-release. Half: defect. Date: 2026-10-06.

Operator consequence: Use 0.63.0 or later for normal diff-based self-review. Older transcripts may contain errors/workarounds, rather than evidence that the agent reviewed the diff. Supply necessary Git identity/other settings at repository level when the agent needs them; do not assume global aliases, URL rewrites or signing settings are visible.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/29467
- https://github.com/google-gemini/gemini-cli/blob/v0.62.0/packages/core/src/services/shellExecutionService.ts#L597-L606
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/shellExecutionService.ts#L597-L618
- https://github.com/google-gemini/gemini-cli/issues/28928
