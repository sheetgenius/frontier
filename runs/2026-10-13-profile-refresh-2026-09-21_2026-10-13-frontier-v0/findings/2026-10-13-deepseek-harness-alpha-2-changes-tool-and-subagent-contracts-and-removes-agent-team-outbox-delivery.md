---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-alpha-2-changes-tool-and-subagent-contracts-and-removes-agent-team-outbox-delivery
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2
    precision: github_release
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/4359d3ee17c002c05818d03c6e903767b0705a16
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/agent-team/README.md#L68-L70
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/context/agent-instructions/README.md#L40
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-alpha-2-changes-tool-and-subagent-contracts-and-removes-agent-team-outbox-delivery

Alpha.2 changes tool and subagent contracts and removes Agent Team outbox delivery. Alpha.2 removes both tool presentation, returns subagent identifiers immediately, and requires callers to handle continuation/wait operations. Agent Team messages now go directly to the target Inbox; the separate outbox, automatic retries and resend deduplication are removed. A successful send means Inbox acceptance, not model processing or a synchronous storage flush. Per-row instruction-home overrides are ignored.

Channel: preview-or-beta; alpha-only. Half: both. Date: 2026-10-09 (alpha.2 release).

Operator consequence: Migrate tool presentation to native or ptc, support session/wait in custom runtimes, and handle failed Team sends explicitly without assuming retries or duplicate suppression. Select instruction homes using process environment. The direct-delivery simplification removes a durable delivery promise as well as code.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2
- https://github.com/deepseek-ai/deepseek-harness/commit/4359d3ee17c002c05818d03c6e903767b0705a16
- https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/agent-team/README.md#L68-L70
- https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/context/agent-instructions/README.md#L40
