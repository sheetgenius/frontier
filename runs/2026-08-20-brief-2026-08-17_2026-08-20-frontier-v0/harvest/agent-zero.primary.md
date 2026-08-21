---
schema_version: bitter.frontier_harvest.v0
provider: agent-zero
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/agent-zero.yml
channels_present: [tagged-release]
window_volume: 3 material changes, 2 capability-bearing, 1 defect-bearing (test acquired)
lane: primary sources, coordinator; identity agent0ai/agent-zero
---

# Harvest -- agent-zero (primary sources)

Punctuation is ASCII. Identity: agent0ai/agent-zero, not other ZERO projects.

## 1. v2.10 tags the ACP bridge and interactive Browser that were branch-only in the parent window

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** GitHub release v2.10, prerelease=false, published_at=2026-08-19T12:30:34Z. `gh api .../compare/v2.9...v2.10` -> ahead_by=20, behind_by=0. Commits in that range include add781d3b3 "Bundle Agent Zero ACP" (2026-08-16) and 005b366b51 "Add interactive internal Browser viewport" (2026-08-16). Both are ancestors of tag v2.10. plugins/_a0_acp exists at ref=v2.10 (plugin.yaml, tests/). Parent recorded these on `ready`, in no tag and not on main.
- **Receipt:** https://github.com/agent0ai/agent-zero/releases/tag/v2.10
- **Half:** capability | **Confidence:** high

**What changed.** The release body states a live interactive Browser via Xpra with CDP screencast fallbacks, a shared Chromium/Xvfb/Xpra runtime, bot-detection hardening (Patchright on a private Xvfb), tab restore, and a bundled ACP session bridge with editor-hosted CLI transport. Ancestry puts those commits in the v2.10 tag, not only in the notes.

**Operator consequence.** Upgrade to v2.10 if you want ACP or the interactive viewport. Bot-detection hardening that makes the agent browser look like a human one is a policy question before you enable it against third-party sites. Parent said watch the `ready` branch; the watch is over, the tag exists.

## 2. The restored SSRF fix acquired regression tests in v2.10

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** tests/test_document_query_plugin.py at ref=v2.10 contains `test_fetch_http_blocks_non_public_destinations` (raises ValueError "Blocked non-public address" on http://127.0.0.1/internal.txt) and `test_fetch_http_blocks_redirects_to_non_public_destinations`. The same file asserts `allow_redirects is False` on the public-redirect compatibility test. plugins/_document_query/helpers/fetch.py at v2.10 imports `fetch_public_http_resource` from helpers.network (the restored helper). plugins/_document_query has no tests/ directory; the tests live under repo tests/.
- **Receipt:** https://github.com/agent0ai/agent-zero/blob/v2.10/tests/test_document_query_plugin.py
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Parent asked whether the restored CVE-2026-4308 fix would acquire a regression test after being lost once in a plugin refactor. It did. The tests cover loopback and redirect-to-loopback, which is the SSRF class: an agent fetching a user-supplied URL must not be pointed at internal addresses.

**Operator consequence.** Upgrade to v2.10 is still the channel for the fix (v2.9 restored the code; v2.10 pins the test). If you track advisories, the test is what makes the next plugin refactor fail closed.

## 3. Backup restore no longer overwrites ALLOWED_ORIGINS

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** commit e6123e476a "Fix backup restore allowed origins" dated 2026-08-19T02:26:57Z, in v2.9...v2.10 compare. Release body: restoring a backup no longer overwrites ALLOWED_ORIGINS with the source instance's value.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/e6123e476a
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** A restore could lock you out (or open the UI to the source instance's origins).

**Operator consequence.** If you restore backups across hosts, v2.10 is the first tag that keeps this host's origin list.

## Researcher lane notes

CVE-2026-4308 remains SSRF. No new GHSA searched beyond the restored test. Capability half is ACP + interactive browser, not just the test.

## Surfaces checked

- gh api releases/tags/v2.10
- gh compare v2.9...v2.10 (20 commits, listed)
- fetch.py and tests at ref=v2.10
- plugins/_a0_acp at ref=v2.10
- GitHub tree recursive for document_query tests
