---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-radius-and-openrouter-catalogs-honor-account-specific-lists-more-closely
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/43d37639912fe15c0926ca5bc7965822ced5615c
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/ee409a85f6ad92bf8c6ab8ed735c6cd24f2e749e
    precision: commit
---
# 2026-10-13-pi-coding-agent-radius-and-openrouter-catalogs-honor-account-specific-lists-more-closely

Radius and OpenRouter catalogs honor account-specific lists more closely. In 1.1.0 a fetched/cached Radius catalog replaces bundled defaults rather than merging organization-disabled models back into the list. In 1.2.0 OpenRouter chat models are narrowed to the key's permitted catalog, with its context/output limits and prices; cached lists and configured regional base URLs are handled. Image and classifier entries are retained. These changes improve client selection, not proof of server-side authorization enforcement.

Channel: tagged-release. Half: both. Date: 2026-10-12.

Operator consequence: Refresh catalogs and inspect the available list under each real account/key before delegating model choice. Keep authorization tests separate from menu visibility and cost estimates.

## Receipt
- https://github.com/earendil-works/pi/commit/43d37639912fe15c0926ca5bc7965822ced5615c
- https://github.com/earendil-works/pi/commit/ee409a85f6ad92bf8c6ab8ed735c6cd24f2e749e
