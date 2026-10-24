---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-enterprise-compose-shares-sandboxes-across-conversations-by-default
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/enterprise/commit/029c81a049f978aa8db14a6ba08fbeebcddc621c
    precision: commit
  - url: https://github.com/OpenHands/enterprise/blob/1.79.0/docker-compose.yml
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/app_conversation/live_status_app_conversation_service.py
    precision: tagged_commit_file
---
# 2026-10-24-openhands-enterprise-compose-shares-sandboxes-across-conversations-by-default

Enterprise Compose shares sandboxes across conversations by default. User/org grouping overrides take precedence, then the deployment default, then NO_GROUPING. The released Compose stack sets `OH_APP_CONVERSATION_SANDBOX_GROUPING_STRATEGY=FEWEST_CONVERSATIONS`, packing conversations into shared sandboxes. The app's unset fallback remains NO_GROUPING.

Channel: tagged-release. Half: both. Date: 2026-10-23 (Enterprise 1.79.0).

Operator consequence: Inspect effective grouping, workspace separation and capacity sharing before treating the packaged evaluation stack as one sandbox per conversation. Packing can reduce container sprawl, but reuse changes the isolation and capacity model. Keep this separate from the scoped remote-SaaS daily quota in section 8.

## Receipt
- https://github.com/OpenHands/enterprise/commit/029c81a049f978aa8db14a6ba08fbeebcddc621c
- https://github.com/OpenHands/enterprise/blob/1.79.0/docker-compose.yml
- https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/app_conversation/live_status_app_conversation_service.py
