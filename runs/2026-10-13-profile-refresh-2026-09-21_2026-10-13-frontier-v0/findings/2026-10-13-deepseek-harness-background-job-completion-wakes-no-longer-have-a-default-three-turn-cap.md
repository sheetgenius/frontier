---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-background-job-completion-wakes-no-longer-have-a-default-three-turn-cap
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/b6775f6d4f55eaa0bcac36318cd7dfc98d70195c
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/jobs/tool-jobs/README.md#L40-L57
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-background-job-completion-wakes-no-longer-have-a-default-three-turn-cap

Background-job completion wakes no longer have a default three-turn cap. Every eligible idle job completion can now wake its owner when no cap is configured. An agent can start another job on the woken turn, creating a self-exciting chain. Fewer completions wait for a human prompt, but the old default cap no longer bounds that chain.

Channel: preview-or-beta; includes npm latest. Half: both. Date: 2026-09-22 (0.1.7-alpha.2); first rc 2026-09-23.

Operator consequence: Set maxConsecutiveWakes explicitly when unattended cost or attention needs a bound. Understand the trade: beyond the cap, notices wait for the next user input and a wake-dependent task can stall. There is no measured throughput or billing result in this packet.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/b6775f6d4f55eaa0bcac36318cd7dfc98d70195c
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/jobs/tool-jobs/README.md#L40-L57
