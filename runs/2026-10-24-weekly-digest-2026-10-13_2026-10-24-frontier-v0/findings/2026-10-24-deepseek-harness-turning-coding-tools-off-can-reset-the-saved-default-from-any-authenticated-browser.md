---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-turning-coding-tools-off-can-reset-the-saved-default-from-any-authenticated-browser
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/23c29d067a865107d5157c6924dbbe09c571d4c4
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/ui-agent-preset/README.md#L30-L32
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.3
    precision: github_release
---
# 2026-10-24-deepseek-harness-turning-coding-tools-off-can-reset-the-saved-default-from-any-authenticated-browser

Turning Coding Tools off can reset the saved default from any authenticated browser. Once Coding Tools off is accepted, every authenticated browser can reset a saved built-in PTC or Minimal default to Standard. Existing sessions retain their mode; turning the setting back on does not restore the old default. Saved Standard, Creator and custom defaults remain unchanged. If Standard is missing or broken, the setting reports an error and leaves the default unchanged.

Channel: preview-or-beta. Half: both. Date: 2026-10-14.

Operator consequence: Recheck the new-session preset after changing this setting from a remote browser. Treat it as a persisted default change rather than a local menu preference, especially when Minimal's narrower tool selection was intentional. No browser interaction or default mutation was performed here.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/23c29d067a865107d5157c6924dbbe09c571d4c4
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/ui-agent-preset/README.md#L30-L32
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.3
