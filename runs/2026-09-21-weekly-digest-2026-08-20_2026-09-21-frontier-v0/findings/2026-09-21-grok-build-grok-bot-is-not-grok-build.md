---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-grok-build-grok-bot-is-not-grok-build
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20260812102557/https://x.ai/bot
    precision: official_docs
  - url: https://cursor.com/docs/grok-bot.md
    precision: official_docs
---
# 2026-09-21-grok-build-grok-bot-is-not-grok-build

"Grok Bot" is not Grok Build. Nothing in Grok Build. The Latent Space piece "OpenClaw Power, MacBook Simplicity: Five Days With Grok Bot" (2026-09-05) reviews the hosted teammate product: named Bots on a shared cloud computer, desktop and iOS apps, routines, and plugins, operated through Cursor's cloud and billed through Cursor or SuperGrok. It is not the `grok` terminal CLI this contract watches.

Channel: docs-only. Half: both. Date: product page captured 2026-08-11 (pre-window); Cursor docs section added in window (see cursor.primary.md item 7).

Operator consequence: Do not cite that review, or Grok Bot's security docs (Auto-review, network allowlist), as facts about the `grok` CLI's permissions. Grok Build's controls are items 3 to 7.

## Receipt
- https://web.archive.org/web/20260812102557/https://x.ai/bot
- https://cursor.com/docs/grok-bot.md
