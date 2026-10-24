---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-plugins-can-delegate-oauth-sign-in-and-refresh-to-hermes
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/b1b4effe513d5b35b47e7afe8c3abf11d2d75b06
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/plugin_oauth.py
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/README.md#L75-L109
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-plugins-can-delegate-oauth-sign-in-and-refresh-to-hermes

Plugins can delegate OAuth sign-in and refresh to Hermes. A plugin can declare OAuth clients, scopes, endpoint hosts, and client-variable names in its manifest, then use Hermes's credentialed request path instead of implementing token storage and refresh itself. Authorization and token URLs require HTTPS; grants retain a fingerprint of the consented client definition. Changed endpoints, scopes, hosts, or client variables require sign-in again, with visible consent deltas for relevant surface changes. This is a credential-handling convention and consent mechanism, not an OS sandbox. The tagged catalog rules also explicitly limit Hermes's three-day dependency age check to Hermes's own dependencies; plugin dependencies have their own policy within core pin constraints.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Prefer the brokered integration seam over a plugin reading arbitrary credential files, and inspect changed scopes and destinations on update. Budget for an interactive sign-in when a grant definition changes; unattended jobs should not invent a login flow. The core can absorb repeated OAuth plumbing, leaving credential destination and plugin trust as the human decisions. Do not infer a universal three-day catalog quarantine from a maintainer's individual hold decision.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/b1b4effe513d5b35b47e7afe8c3abf11d2d75b06
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/plugin_oauth.py
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/README.md#L75-L109
