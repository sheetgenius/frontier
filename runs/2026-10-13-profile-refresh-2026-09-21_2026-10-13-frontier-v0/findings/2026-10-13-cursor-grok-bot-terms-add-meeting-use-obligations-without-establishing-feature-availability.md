---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-grok-bot-terms-add-meeting-use-obligations-without-establishing-feature-availability
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20261005223008/https://cursor.com/en-US/terms/grok-bot
    precision: official_docs
  - url: https://web.archive.org/web/20261013185637/https://cursor.com/en-US/terms/grok-bot
    precision: official_docs
  - url: https://cursor.com/help/grok-bot/plans
    precision: official_docs
  - url: https://cursor.com/docs/grok-bot/teams
    precision: official_docs
  - url: https://cursor.com/docs/grok-bot/security
    precision: official_docs
---
# 2026-10-13-cursor-grok-bot-terms-add-meeting-use-obligations-without-establishing-feature-availability

Grok Bot terms add meeting-use obligations without establishing feature availability. The separate Grok Bot computer-use product's terms now cover listening, processing, capturing and transcribing meeting content. The customer must determine and obtain required notices and consents. This is contract text, not a universal rule about every meeting or proof the feature has shipped. The product remains bundled with paid individual Cursor plans and Teams; inspected docs retain allow-all networking without policy and Enterprise-only enforced review and Action Recording, off by default.

Channel: docs-only. Half: both. Date: 2026-10-12 terms; historically captured 2026-10-13.

Operator consequence: Decide meeting-use policy before allowing it. Availability and admin controls are unverified; require a feature release and control documentation to settle them. Keep Grok Bot policy separate from the agent CLI and IDE. Do not infer legal obligations beyond the terms' required-notice and required-consent wording.

## Receipt
- https://web.archive.org/web/20261005223008/https://cursor.com/en-US/terms/grok-bot
- https://web.archive.org/web/20261013185637/https://cursor.com/en-US/terms/grok-bot
- https://cursor.com/help/grok-bot/plans
- https://cursor.com/docs/grok-bot/teams
- https://cursor.com/docs/grok-bot/security
