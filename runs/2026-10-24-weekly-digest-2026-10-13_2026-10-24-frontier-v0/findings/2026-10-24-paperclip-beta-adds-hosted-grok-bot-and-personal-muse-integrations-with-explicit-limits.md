---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-adds-hosted-grok-bot-and-personal-muse-integrations-with-explicit-limits
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/grok-bot-agent.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/muse-personal-agent.md
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-beta-adds-hosted-grok-bot-and-personal-muse-integrations-with-explicit-limits

Beta adds hosted Grok Bot and personal Muse integrations with explicit limits. These integrations coordinate existing hosted agents rather than invoking the similarly named coding CLIs. Grok Bot uses verified assignment delivery and authenticated replies; deliverable uploads require matching bytes and publication evidence. Provider usage is not reported. Personal Muse is disabled by default, uses scoped delegated authorization, and revokes run authority on Stop, while remote interruption/cleanup can remain uncertain. The tagged Muse document explicitly leaves real work through the current OAuth setup, Cloud and sustained unattended qualification open; a synthetic receiver does not qualify the personal service.

Channel: preview-or-beta. Half: capability. Date: 2026-10-23.

Operator consequence: Treat `2026.1023.0-beta.0` as an integration trial, not proof of a generally unattended hosted workforce. Verify delivery, completion artifacts, cost exposure and cleanup on the actual account. Durable assignment and receipt boundaries could replace manual relaying between a hosted assistant and the work queue. Provider-side stop and missing cost information keep attention on the seams the control plane cannot independently observe.

## Receipt
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/grok-bot-agent.md
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/muse-personal-agent.md
