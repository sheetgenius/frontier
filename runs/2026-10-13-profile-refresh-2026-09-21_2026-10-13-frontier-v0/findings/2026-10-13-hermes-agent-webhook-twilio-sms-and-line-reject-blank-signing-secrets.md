---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-webhook-twilio-sms-and-line-reject-blank-signing-secrets
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/8ec668b3cc8b9289d63f02fa6abca3d67e993eb3
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/84cb790e6425f3ef53aab893dce59ba707cb27da
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/a560ba0b0842f0cd572bade054414667258727e3
    precision: commit
---
# 2026-10-13-hermes-agent-webhook-twilio-sms-and-line-reject-blank-signing-secrets

Webhook, Twilio SMS and LINE reject blank signing secrets. Whitespace-only keys could pass truthiness checks and key message-signature HMACs with a guessable value. Webhook route/startup/request paths now validate usable secrets; SMS rejects an empty token at signature verification, and LINE strips its channel secret before validation. An attacker knowing an empty or whitespace key could forge inbound messages. This does not bypass a valid random secret.

Channel: tagged-release (first stable v0.21.6). Half: defect. Date: 2026-10-07.

Operator consequence: Check webhook route secrets, TWILIO_AUTH_TOKEN and LINE_CHANNEL_SECRET, and upgrade to v0.21.6+ before exposing these receivers. Configure actual random secrets; the fix refuses invalid configuration rather than repairing it.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/8ec668b3cc8b9289d63f02fa6abca3d67e993eb3
- https://github.com/NousResearch/hermes-agent/commit/84cb790e6425f3ef53aab893dce59ba707cb27da
- https://github.com/NousResearch/hermes-agent/commit/a560ba0b0842f0cd572bade054414667258727e3
