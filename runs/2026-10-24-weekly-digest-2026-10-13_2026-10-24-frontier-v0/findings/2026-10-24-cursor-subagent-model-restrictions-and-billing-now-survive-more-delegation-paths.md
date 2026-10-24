---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-subagent-model-restrictions-and-billing-now-survive-more-delegation-paths
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/release-notes/ide#oct-14-2026
    precision: official_docs
  - url: https://cursor.com/docs/cli/changelog#oct-15-2026
    precision: official_docs
  - url: https://cursor.com/docs/cli/changelog#oct-22-2026
    precision: official_docs
---
# 2026-10-24-cursor-subagent-model-restrictions-and-billing-now-survive-more-delegation-paths

Subagent model restrictions and billing now survive more delegation paths. IDE 3.25 says Private Inference children respect disabled models. CLI notes repair malformed model-name handling and make blocked, unavailable or Max-only custom-subagent choices fall back to the parent's model, with the actual choice reported. Composer 2.5 standard and Fast subagents now use the corresponding speed and billing tier. A failed or stopped child is reported as such rather than treated as complete.

Channel: tagged-release. Half: both. Date: 2026-10-14 IDE; 2026-10-15 and 2026-10-22 CLI.

Operator consequence: Inspect the returned child model and actual usage before accepting a delegated result. In particular, a pinned subagent model is not a promise it ran. The repair can eliminate brittle model-name workarounds and unnecessary child retries, while keeping model choice and failure interpretation visible. It does not establish that Grok Bot or cloud testing helpers obey the editor's model switches.

## Receipt
- https://cursor.com/docs/release-notes/ide#oct-14-2026
- https://cursor.com/docs/cli/changelog#oct-15-2026
- https://cursor.com/docs/cli/changelog#oct-22-2026
