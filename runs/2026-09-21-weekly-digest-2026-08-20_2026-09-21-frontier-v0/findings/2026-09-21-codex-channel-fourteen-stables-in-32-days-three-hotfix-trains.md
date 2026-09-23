---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-codex-channel-fourteen-stables-in-32-days-three-hotfix-trains
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases
    precision: official_docs
---
# 2026-09-21-codex-channel-fourteen-stables-in-32-days-three-hotfix-trains

Channel: fourteen stables in 32 days, three hotfix trains. A minor roughly every 2 to 8 days, 90 to 250 commits each. Default install moved from 0.149.0 to 0.155.1 across the window. 0.155.1 restores reasoning summaries to off by default for new local TUI sessions (#46467) after 0.155.0 caused request rejections on providers that do not support them. 0.153.0 adds a disabled-by-default `features.context_management.experimental_mode` (token-budget context, `new_context` tool) for ChatGPT-plan sessions only.

Channel: tagged-release. Half: capability. Date: 2026-08-24..2026-09-18.

Operator consequence: Floating `latest` means a behavior change every few days, including model defaults (item 2). Pin a version in CI and fleet images, and upgrade on purpose.

## Receipt
- https://github.com/openai/codex/releases
