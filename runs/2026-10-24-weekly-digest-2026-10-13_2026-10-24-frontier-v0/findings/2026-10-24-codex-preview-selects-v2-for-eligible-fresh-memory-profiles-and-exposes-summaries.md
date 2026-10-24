---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-preview-selects-v2-for-eligible-fresh-memory-profiles-and-exposes-summaries
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/a390571745da105cfdc85443dd1d38bf78e5ea6e
    precision: commit
  - url: https://github.com/openai/codex/commit/b559e6a3988489b636e1e79672eff330bf0679dc
    precision: commit
---
# 2026-10-24-codex-preview-selects-v2-for-eligible-fresh-memory-profiles-and-exposes-summaries

Preview selects v2 for eligible fresh memory profiles and exposes summaries. Alpha.1 [selects v2 when memories are enabled and no v1 workspace exists](https://github.com/openai/codex/commit/a390571745da105cfdc85443dd1d38bf78e5ea6e), honoring explicit version and dual-write opt-outs. [thread/memory/read](https://github.com/openai/codex/commit/b559e6a3988489b636e1e79672eff330bf0679dc) reads the resolved version's summary without cross-version fallback, returning null for disabled, missing, unreadable, or blank summaries.

Channel: preview-or-beta. Half: capability. Date: 2026-10-23.

Operator consequence: Trial with both fresh and existing profiles. Record selected version and summary availability; stable 0.164.0 does not contain these preview changes.

## Receipt
- https://github.com/openai/codex/commit/a390571745da105cfdc85443dd1d38bf78e5ea6e
- https://github.com/openai/codex/commit/b559e6a3988489b636e1e79672eff330bf0679dc
