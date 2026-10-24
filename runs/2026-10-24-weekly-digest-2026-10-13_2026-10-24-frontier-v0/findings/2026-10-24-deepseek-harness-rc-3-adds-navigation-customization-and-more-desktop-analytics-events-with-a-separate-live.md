---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-rc-3-adds-navigation-customization-and-more-desktop-analytics-events-with-a-separate-live
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/5ff29190ed8e2bba8211035375ba7c733b332879
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/39d2903841fa1e2e510a1011b4d0a65713270062
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/product-analytics/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/product-analytics/src/events.ts
    precision: tagged_commit_file
---
# 2026-10-24-deepseek-harness-rc-3-adds-navigation-customization-and-more-desktop-analytics-events-with-a-separate-live

Rc.3 adds navigation customization and more Desktop analytics events, with a separate live opt-out. Rc.3 adds More menus and navigation customization and repairs losing an unsent new-session draft after switching sessions. Desktop analytics gains placement-aware navigation, built-in preset and new-session fields. Earlier in this window it added available OS, CPU and memory details to product events. Custom preset names and third-party entry identifiers are excluded, as are prompt/response content and account secrets. Collection defaults on. Ordinary Web does not mount the product analytics services.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Rc.3 makes plugin entry points easier to find, but audit Desktop analytics independently of session-log controls. The `product-analytics.enabled=false` live setting stops new collection and environment queries; there is still no dedicated user-facing switch, and queued exporter records may finish. This qualifies the profile's avoid-Desktop advice: a configuration opt-out exists, although it is less discoverable than a normal UI control. Navigation convenience and product collection must be assessed separately.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/5ff29190ed8e2bba8211035375ba7c733b332879
- https://github.com/deepseek-ai/deepseek-harness/commit/39d2903841fa1e2e510a1011b4d0a65713270062
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/product-analytics/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/product-analytics/src/events.ts
