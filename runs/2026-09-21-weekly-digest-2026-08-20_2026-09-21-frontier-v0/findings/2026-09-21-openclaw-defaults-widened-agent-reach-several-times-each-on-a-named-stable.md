---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openclaw-defaults-widened-agent-reach-several-times-each-on-a-named-stable
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.9.2
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.9.3
    precision: github_release
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.5/CHANGELOG/2026.9.5.md
    precision: tagged_commit_file
---
# 2026-09-21-openclaw-defaults-widened-agent-reach-several-times-each-on-a-named-stable

Defaults widened agent reach several times, each on a named stable. An upgrade from 2026.7.1-2 to 2026.9.5 turns on several things by default: agents read and message other agents' sessions, spawn swarms and recursive sub-sessions, message across providers, and apply self-authored skills without a prompt. Each note says sandbox and explicit restrictions "remain enforced".

Channel: tagged-release. Half: both. Date: 2026-08-31 to 2026-09-19.

Operator consequence: Re-audit shared or multi-agent Gateways after upgrading. Set `tools.sessions.visibility` to `agent` or `self`, and set `skills.workshop.approvalPolicy: "pending"` if you relied on the old gates. On single-owner installs, these defaults remove setup steps. That is the capability half.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.2
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.3
- https://github.com/openclaw/openclaw/blob/v2026.9.5/CHANGELOG/2026.9.5.md
