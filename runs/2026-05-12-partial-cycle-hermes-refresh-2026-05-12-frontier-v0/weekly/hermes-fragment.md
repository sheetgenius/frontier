---
schema_version: bitter.frontier_digest_fragment.v0
source: hermes-agent
window:
  start: 2026-05-12
  end: 2026-05-12
finding_ids:
  - 2026-05-12-hermes-mistralai-quarantine-response
---

**Hermes drops `mistralai` from `[all]` extras after PyPI quarantine.**
[PR #24205](https://github.com/NousResearch/hermes-agent/pull/24205) removes
`mistralai` from `[all]` and `[termux-all]` optional dependency groups after
`mistralai` 2.4.6 was quarantined on PyPI as a malicious release. Mistral
Voxtral TTS now returns "temporarily disabled" rather than importing the stale
cached package. The `[mistral]` extra is preserved for explicit opt-in once PyPI
restores the package. Not yet in a tagged release (main only). Operators who
installed `hermes-agent[all]` on or around 2026-05-12 should verify that
`mistralai==2.4.6` is not present in their environment.
