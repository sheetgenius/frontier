---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-2-1-1-keeps-useflueagent-streaming-after-reload-while-an-observed-submission-remains-unset
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/commit/4685436f75fe0aea1fe661f47969d053742de221
    precision: commit
  - url: https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L48-L49
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/releases/tag/%40flue%2Freact%402.1.1
    precision: github_release
---
# 2026-10-13-flue-2-1-1-keeps-useflueagent-streaming-after-reload-while-an-observed-submission-remains-unset

2.1.1 keeps useFlueAgent streaming after reload while an observed submission remains unsettled. After a reload, useFlueAgent derives active submission ids from observed messages minus settlements. A running tool or silent admitted prompt that has appeared in the conversation now stays streaming rather than looking idle until assistant text arrives. A submission admitted but not yet materialized into a message at reload time remains a documented residual window.

Channel: tagged-release. Half: defect. Date: 2026-09-23 (2.1.1 publication; code committed 2026-09-22).

Operator consequence: Upgrade React chat clients from 2.1.0 to at least 2.1.1 so a reload does not invite a duplicate send merely because a tool is silent. Treat status as aggregate conversation activity, and preserve submission receipts if your UI must cover the residual pre-message window. The current 2.3.0 pin includes the fix.

## Receipt
- https://github.com/withastro/flue/commit/4685436f75fe0aea1fe661f47969d053742de221
- https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L48-L49
- https://github.com/withastro/flue/releases/tag/%40flue%2Freact%402.1.1
