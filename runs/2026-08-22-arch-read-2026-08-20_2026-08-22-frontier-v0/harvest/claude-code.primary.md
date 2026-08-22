---
schema_version: bitter.frontier_harvest.v0
provider: claude-code
window: 2026-08-20..2026-08-22
run: 2026-08-22-arch-read-2026-08-20_2026-08-22-frontier-v0
source_contract: sources/claude-code.yml
channels_present: [tagged-release]
window_volume: 2 npm cuts on latest (2.1.238 boundary, 2.1.239 in-window); stable unmoved
lane: primary sources, coordinator
---

# Harvest -- claude-code (primary sources)

Punctuation is ASCII. Closed source. Channel is npm dist-tags plus the official changelog.

## 1. npm latest is 2.1.239; stable is still 2.1.231

- **Date:** 2026-08-21
- **Channel:** npm `latest` is 2.1.239; npm `stable` is 2.1.231. Do not call latest "stable."
- **Ancestry evidence:** npm dist-tags: latest=2.1.239, next=2.1.239, stable=2.1.231. npm time: 2.1.238 2026-08-20T18:01:54Z (last brief already named this as the in-window cut then), 2.1.239 2026-08-21T17:18:54Z. Official changelog label 2.1.239 dated August 21, 2026: https://code.claude.com/docs/en/changelog
- **Receipt:** https://www.npmjs.com/package/@anthropic-ai/claude-code
- **Half:** both | **Confidence:** high

**What changed.** Last brief's "2.1.239 is the next day" is now this window's latest.

**Operator consequence.** If you run latest, 2.1.239 is the cut. If you run stable, you are still on 2.1.231.

## 2. 2.1.239: Bedrock streaming behind some proxies silently doubled billed turns

- **Date:** 2026-08-21
- **Channel:** npm `latest` (not `stable`)
- **Ancestry evidence:** Changelog 2.1.239: "Fixed Bedrock streaming behind proxies that strip the response Content-Type header, which silently doubled billed API calls by re-running every turn non-streaming." Same cut: startup hang behind HTTPS_PROXY with Bedrock SSO + awsAuthRefresh; Esc-with-queued-prompt race that let the next turn finish early; WebFetch retaining expired page content for the whole session; Linux sandbox making a nonexistent `.git/config.worktree` unreadable; masked login-code inputs pasteable via Ctrl+Y / prompt history; a request rejected by org policy being re-sent before the rejection was shown.
- **Receipt:** https://code.claude.com/docs/en/changelog
- **Half:** defect | economics | **Confidence:** high on the changelog text (moving page; pin the date)

**What changed.** Bedrock-behind-proxy users on latest before 2.1.239 could be billed twice per turn. The changelog is the receipt; there is no public source file.

**Operator consequence.** Bedrock + stripping proxy: install 2.1.239. Stable 2.1.231 does not contain this fix. 2.1.238 (2026-08-20) is in this window too and does not list that Bedrock double-bill line.

## Surfaces checked

- npm dist-tags and time for @anthropic-ai/claude-code
- official changelog 2.1.238 and 2.1.239
