---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-hermes-agent-capability-real-profile-browsing-password-blind-vault-sha-pinned-plugin-catalog
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L423-L442
    precision: tagged_commit_file
---
# 2026-09-21-hermes-agent-capability-real-profile-browsing-password-blind-vault-sha-pinned-plugin-catalog

Capability: real-profile browsing, password-blind vault, SHA-pinned plugin catalog. Capability: real-profile browsing, password-blind vault, SHA-pinned plugin catalog

Channel: tagged-release. Half: capability (authority-bearing). Date: 2026-08-27 (browser), 2026-09-11 (vault, catalog).

Operator consequence: These are the largest authority grants of the window and all are opt-in. Try them only on a profile you would let a delegate use. Payment and real-login capability moves the review question from "what command will it run" to "which sites and accounts is it allowed to act on"; there is no per-site allowlist in the config block at v2026.9.21.

## Receipt
- https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L423-L442
