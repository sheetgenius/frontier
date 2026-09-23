---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-cursor-projects-a-coordinator-that-spawns-agents-on-its-own-beta-cloud-only
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20260913123011/https://cursor.com/changelog/projects
    precision: official_docs
  - url: https://cursor.com/docs/agent/projects.md
    precision: official_docs
---
# 2026-09-21-cursor-projects-a-coordinator-that-spawns-agents-on-its-own-beta-cloud-only

Projects: a coordinator that spawns agents on its own, beta, cloud-only. A Project runs on its own cloud computer, keeps a shared set of context files that sync to every cloud and local machine its agents use, and has a coordinator that "creates and manages agents on your behalf, running as many in parallel as the work needs" (the changelog says "thousands of subagents"). Subscriptions let the coordinator act on Slack messages, PR activity, CI runs, or a schedule "without waiting for your prompt." When something needs testing locally, the coordinator starts a local agent on your machine. Docs: not available on Enterprise plans or with Privacy Mode (Legacy), because Projects store code in the cloud.

Channel: preview-or-beta ("available in beta and rolling out to all users"). Half: capability. Date: 2026-09-10.

Operator consequence: Surface is cloud agents plus the editor's Agents Window, not the CLI. The authority shift is that a model, not the human, decides how many agents to start and when; the docs name no spend cap, approval gate, or concurrency limit for the coordinator (searched projects.md for approv|permission|limit|spend|usage: only the Enterprise exclusion). Watch: whether a usage ceiling or per-Project approval control appears. Before connecting a Slack channel as a subscription, treat every message in it as a prompt that can start work, including prompt injection from anyone who can post there. The local-agent hop means a cloud coordinator can cause execution on your laptop.

## Receipt
- https://web.archive.org/web/20260913123011/https://cursor.com/changelog/projects
- https://cursor.com/docs/agent/projects.md
