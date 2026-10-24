---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-minimal-gains-image-reading-and-automatic-and-manual-history-compaction
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/f15091a9228780f5024d64e0f8ac1ab25de50ad5
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/5b784ecbc31777a75576c9e0653344ff933af8e9
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/444692d1ca9731920c73514ef6daa9740db8c127
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/sdk-minimal/cordis.patch.yml
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/ui-agent-preset/README.md
    precision: tagged_commit_file
---
# 2026-10-24-deepseek-harness-minimal-gains-image-reading-and-automatic-and-manual-history-compaction

Minimal gains image reading and automatic and manual history compaction. Minimal gains image reading and automatic history compaction, with `/compact` available for idle sessions. SDK-minimal mounts image attachments, `read_image`, token metering and automatic compaction. These changes first become installable in alpha.3 and are inherited by the current rc line. They do not add Schedule or general shell tools as part of this change; the SDK-minimal composition also has a separate persistent shell path.

Channel: preview-or-beta. Half: capability. Date: 2026-10-14.

Operator consequence: Try the existing preset and SDK composition before maintaining custom image/history glue. Test which task state survives compaction and preserve external checkpoints where needed. This expands the work a small composition can support without proving model accuracy or durable recovery of external processes.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/f15091a9228780f5024d64e0f8ac1ab25de50ad5
- https://github.com/deepseek-ai/deepseek-harness/commit/5b784ecbc31777a75576c9e0653344ff933af8e9
- https://github.com/deepseek-ai/deepseek-harness/commit/444692d1ca9731920c73514ef6daa9740db8c127
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/sdk-minimal/cordis.patch.yml
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/ui-agent-preset/README.md
