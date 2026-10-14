---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-paperclip-cut-default-role-and-planning-instructions-without-a-completed-live-comparison
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1005.0/skills/paperclip/SKILL.md#L601
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/onboarding-assets/ceo/AGENTS.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/default-agent-instructions.ts#L3-L6
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.916.1/skills/paperclip/SKILL.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/skills/paperclip/SKILL.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/plans/2026-10-05-plan-task-guidance.md#L44-L85
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/862a5758ba0e88a33232c1f1fa645e85c38a3113
    precision: commit
---
# 2026-10-13-paperclip-paperclip-cut-default-role-and-planning-instructions-without-a-completed-live-comparison

Paperclip cut default role and planning instructions without a completed live comparison. v2026.1005.0 replaces manager escalation with direct handling and the rule that titles/reporting lines grant no authority; human-only work goes directly to connection/approval flows or human_only interactions. v2026.1012.0 changes the selected CEO bundle from 1,893 baseline words (1,897 immediately before reduction) to a 20-word role statement, the hire manual from 598 baseline words (602 at v2026.1005.0) to 8, and two planning skills from 1,937 to 415 combined words. Companion CEO files remain compatibility assets, but the new loader selects only AGENTS.md. Existing saved manuals remain unchanged and native Codex keeps its stock base prompt. The core coordination skill grows from 7,626 to 8,584 words. Paperclip shipped shorter default instructions and prepared comparisons; live outcome quality, non-regression, token savings and reduced human attention were not established by these receipts. Evaluation setup failed/cancelled before provider execution, with zero agent runs and no behavioral grade.

Channel: tagged-release. Half: both. Date: 2026-10-06, 2026-10-12.

Operator consequence: Try a short-manual hire beside the existing manual on one matched real task and retain outcomes, failures, tool use, spend and human interventions. Do not delete established procedure on the claim that models were proved to absorb it. The intended reduction of manager hops is supported by the protocol change; an improvement in end-to-end throughput is still unmeasured. The growing protocol is counterevidence to any claim that Paperclip now needs almost no procedure.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1005.0/skills/paperclip/SKILL.md#L601
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/onboarding-assets/ceo/AGENTS.md
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/default-agent-instructions.ts#L3-L6
- https://github.com/paperclipai/paperclip/blob/v2026.916.1/skills/paperclip/SKILL.md
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/skills/paperclip/SKILL.md
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/plans/2026-10-05-plan-task-guidance.md#L44-L85
- https://github.com/paperclipai/paperclip/commit/862a5758ba0e88a33232c1f1fa645e85c38a3113
