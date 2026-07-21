---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-codex-codex-remote-reaches-general-availability-control-a-conn
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: medium
evidence:
  - url: https://developers.openai.com/codex/changelog
    precision: official_changelog
---
# 2026-07-01-codex-codex-remote-reaches-general-availability-control-a-conn

Codex Remote reaches general availability (control a connected Mac/Windows host from the ChatGPT mobile app) (channel: main-unreleased, 2026-06-25). Operator consequence: Product-surface GA (not a CLI tag): operators can now start/continue work on a connected desktop host, review progress, and approve actions from the ChatGPT phone app. Governance-relevant — approvals can now originate from a mobile device against a desktop host; teams with sandbox/approval policies should decide whether remote mobile approval is in-scope. Backed only by a dated developer-site changelog entry (2026-06-25), no in-repo commit/tag receipt; confidence medium on exact GA date because the changelog lacks a stable per-entry anchor URL. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://developers.openai.com/codex/changelog
