---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-codex-the-entire-codex-documentation-and-changelog-moved-off-developers
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: low
evidence:
  - url: https://learn.chatgpt.com/docs/changelog
    precision: official_changelog
---
# 2026-08-17-codex-the-entire-codex-documentation-and-changelog-moved-off-developers

The entire Codex documentation and changelog moved off developers.openai.com.

Both primary surfaces named in this publication's Codex source contract now permanently redirect: the changelog to learn.chatgpt.com/docs/changelog and the docs root to learn.chatgpt.com/docs. The destination is a merged ChatGPT-and-Codex changelog rather than a Codex-specific one, so Codex CLI releases now appear interleaved with ChatGPT desktop, iOS, and model-availability entries.

Channel: docs-only. Ancestry: curl -sSI https://developers.openai.com/codex/changelog returns 'HTTP/2 308' with 'location: https://learn.chatgpt.com/docs/changelog'. curl -sSI https://developers.openai.com/codex returns 'HTTP/2 308' with 'location: https://learn.chatgpt.com/docs'. Both served by Vercel. This is a hosting/surface change with no code channel; no repository commit was located that dates the migration.

Operator consequence: Re-point your bookmarks, scrapers, and any citation you have pinned to developers.openai.com/codex. Two consequences beyond the URL: Codex release notes are now mixed into a consumer-product changelog, which makes it materially harder to see the CLI's cadence at a glance, and a 308 today is a 404 eventually. I could not establish the migration date from any primary source, so this entry is dated by observation, not by a receipt.

## Receipt
- https://learn.chatgpt.com/docs/changelog
