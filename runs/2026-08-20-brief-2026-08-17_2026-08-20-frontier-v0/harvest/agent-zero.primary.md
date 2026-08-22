---
schema_version: bitter.frontier_harvest.v0
provider: agent-zero
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/agent-zero.yml
channels_present: [tagged-release]
window_volume: 5 material changes, 3 capability-bearing, 2 defect-bearing, 4 security-relevant
lane: primary sources, coordinator applied researcher harvest; identity agent0ai/agent-zero
---

# Harvest -- agent-zero (primary sources)

Punctuation is ASCII. Identity: agent0ai/agent-zero, not other ZERO projects.

## 1. v2.10 tags the ACP bridge and interactive Browser; Chromium sign-ins are shared across chats

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** GitHub release v2.10, prerelease=false, published_at=2026-08-19T12:30:34Z, tag commit b22a144bf59f15b1516084c9e7b88133ba92c8a9. `gh api .../compare/v2.9...v2.10` -> ahead_by=20, behind_by=0. compare/v2.10...main identical. plugins/_a0_acp and plugins/_browser/helpers/interactive_view.py 404 at v2.9, present at v2.10. plugin.yaml at v2.10: name _a0_acp, always_enabled: true. default_config.yaml defaults enabled: true, host_file_access: read_write, host_code_execution: true. runtime.py launches one Patchright persistent context (SHARED_RUNTIME_ID = "shared"). Xpra binds `--bind-tcp=127.0.0.1:{port}`.
- **Receipt:** https://github.com/agent0ai/agent-zero/releases/tag/v2.10
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** Parent left ACP and the interactive Browser on `ready`. v2.10 is the channel change. Interactive viewport is Xpra on loopback with CDP screencast fallbacks. ACP is bundled and always on, with host write and host exec as defaults. Sign-ins are shared across chats; tab ownership stays per-chat. Bot-detection hardening runs Chromium headful through Patchright on a private Xvfb.

**Operator consequence.** Upgrade to v2.10 for ACP or the live viewport. Then turn ACP off if you do not want an editor-hosted endpoint with host write and host exec. Do not put a personal login in chat A and assume chat B cannot reuse it. `per_context` only hides tabs. Official /p/docs/browser/ has not caught up.

## 2. The v2.9 SSRF tests survived v2.10 byte-identical; they were not written this window

- **Date:** 2026-08-19 (observation; tests date to v2.9)
- **Channel:** `tagged-release`
- **Ancestry evidence:** compare/b40874e7c0...v2.10 ahead_by=29, behind_by=0. compare/v2.9...v2.10 file list does not include fetch.py, helpers/network.py, or tests/test_document_query_plugin.py. Blob SHA for tests/test_document_query_plugin.py is 26bf2a696f785757bed061665543c006bea8aefb at both tags. fetch.py still imports fetch_public_http_resource. Tests: test_fetch_http_blocks_non_public_destinations (http://127.0.0.1/internal.txt), test_fetch_http_blocks_redirects_to_non_public_destinations, test_fetch_http_preserves_public_redirects_and_request_compatibility (allow_redirects is False). plugins/_document_query has no tests/ directory; coverage is at repo-root tests/. test_document_query_fallback.py is not SSRF coverage. No new GHSA. NVD CVE-2026-4308 last modified 2026-06-17.
- **Receipt:** https://github.com/agent0ai/agent-zero/blob/v2.10/tests/test_document_query_plugin.py
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Carry-forward answer is YES: SSRF-class tests exist. They were acquired with the v2.9 restore, not added in v2.10. v2.10 did not drop them.

**Operator consequence.** Stay on v2.9 or v2.10 for document query against untrusted URLs. Do not read a missing plugins/_document_query/tests/ directory as missing coverage. Diff fetch.py after the next plugin extract.

## 3. Backup restore no longer overwrites ALLOWED_ORIGINS

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** e6123e476ad5fd655151c5d306e887e7c784d126 in v2.9...v2.10. tests/test_backup_large_archives.py::test_restore_preserves_destination_origin_and_restores_backup_credentials.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/e6123e476ad5fd655151c5d306e887e7c784d126
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** A restore from another URL no longer copies ALLOWED_ORIGINS. Backup credentials still come across.

**Operator consequence.** Upgrade before the next restore-to-a-new-URL. Check usr/.env after restore.

## 4. Direct and parallel call_subordinate share one persisted child lifecycle

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** a304c7665fff47cc0956e79ed8898eb070db425f in v2.9...v2.10. tools/call_subordinate.py: context_id with reset=true is now a hard error.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/a304c7665fff47cc0956e79ed8898eb070db425f
- **Half:** capability | **Confidence:** high

**What changed.** Failed children are resumable with reset=false. Passing reset=true with a context_id is a hard error, not a silent recreate.

**Operator consequence.** Test resume on a failed child before trusting nested parallel runs.

## 5. usr/api and usr/extensions/webui as contained authenticated fallbacks

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** 81fcc24364ea0d9d36e734e126115bff3a217bf7 in v2.9...v2.10. tests/test_user_routes.py covers unauthenticated 302, path traversal 404/403, builtin-then-plugin-then-user precedence.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/81fcc24364ea0d9d36e734e126115bff3a217bf7
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** Operators can drop API handlers and WebUI assets under usr/ without forking core. Traversal tests name the failure mode.

**Operator consequence.** Do not skip auth. Re-run the traversal tests after adding a handler.

## Researcher lane notes

v2.10 published_at 2026-08-19T12:30:34Z is seven hours before the annotated tagger date and before tag commit b22a144 (Xpra repair). An operator installing the current tag gets b22a144. Image-digest equality at 12:30 UTC that day is unverified. No PRs merged in the window; 20 commits look like direct pushes to main. Public docs lag the tag.

## Surfaces checked

- GitHub release v2.10 / v2.9, compare v2.9...v2.10, v2.10...main, main...ready
- files at v2.10 vs v2.9: fetch.py, network.py, test_document_query_plugin.py, _a0_acp, interactive_view.py, runtime.py, backup.py, call_subordinate.py, test_user_routes.py
- security-advisories empty; GHSA-8g9j-3hrr-2hvm unchanged since 2026-03-17; NVD CVE-2026-4308 last modified 2026-06-17
- vendor article and /p/docs/browser/
