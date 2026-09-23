---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-cursor-grok-bot-a-separate-teammate-product-now-documented-inside-cursor-s-docs-and-bundled-in
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/grok-bot.md
    precision: official_docs
  - url: https://cursor.com/docs/grok-bot/security.md
    precision: official_docs
  - url: https://cursor.com/help/grok-bot/plans.md
    precision: official_docs
  - url: https://cursor.com/en-US/terms/grok-bot
    precision: official_docs
---
# 2026-09-21-cursor-grok-bot-a-separate-teammate-product-now-documented-inside-cursor-s-docs-and-bundled-in

Grok Bot: a separate teammate product now documented inside Cursor's docs and bundled in Cursor plans. Per Cursor's docs, Grok Bot is a desktop and iOS app for named "Bots" that work on a persistent cloud computer (browser, filesystem, terminal). All of a user's Bots share one computer and its files, browser sessions, and logins; the docs say to treat anything on it as available to every Bot, and the terms say Bots "must not be treated as separate security boundaries" and that deleting a Bot may not delete shared files, sessions, credentials, or routines. Access is included with every paid individual Cursor plan and Cursor Teams, or via a linked SuperGrok / X Premium+ account, with weekly usage. Controls: Enterprise-only network allowlist (no policy = allow all), Enterprise-only enforced Auto-review (a review model over shell, plugin, computer-use, and delegation actions), Enterprise-only audit logs and Action Recording (off by default). Bots act as the signed-in member; connector OAuth tokens stay on Cursor's backend.

Channel: docs-only. Half: both. Date: docs nav entry between 2026-08-20 and 2026-09-02; docs page first captured 2026-09-03; terms page first captured 2026-09-03. x.ai/bot product page predates the window (captured 2026-08-11)..

Operator consequence: Identity: Grok Bot is not the `agent` CLI, not cloud agents, not the editor, and not xAI's Grok Build CLI. A Latent Space review of "Grok Bot" is about this product. For Cursor admins, the change is that a paid Cursor seat now carries a general-purpose computer-use agent with default allow-all egress and no Auto-review enforcement unless you are on Enterprise. Decide whether to allow it before members discover it.

## Receipt
- https://cursor.com/docs/grok-bot.md
- https://cursor.com/docs/grok-bot/security.md
- https://cursor.com/help/grok-bot/plans.md
- https://cursor.com/en-US/terms/grok-bot
