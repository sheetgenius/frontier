---
schema_version: bitter.frontier_harvest.v0
provider: omnigent
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/omnigent.yml
channels_present: [tagged-release]
window_volume: 2 material changes, 1 capability, 1 defect (approval authority still shared)
lane: primary sources, coordinator from v0.10.0 body
---

# Harvest -- omnigent (primary sources)

Punctuation is ASCII. Repo omnigent-ai/omnigent. Parent ended at v0.9.0.

## 1. v0.10.0: multiple sandbox providers, Devin as a built-in harness, Usage page

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** GitHub release v0.10.0 published 2026-08-19T04:34:41Z, prerelease=false. Body: sandbox.providers (several at once, Blaxel, Kubernetes Jobs); Devin built-in harness; ACP agents in omni setup; Copilot harness via gh auth login; Usage page; OMNIGENT_FEATURES gate; session move/fork/bulk.
- **Receipt:** https://github.com/omnigent-ai/omnigent/releases/tag/v0.10.0
- **Half:** capability | **Confidence:** high on the release-note claims; code not line-audited in this pass

**What changed.** Omnigent can run more than one sandbox provider and treat Devin as a first-class harness. Usage is visible. CHANGELOG.md at the v0.10.0 tag still starts at ## [v0.9.0]; the v0.10.0 notes live on the GitHub release body, not in the tagged changelog file.

**Operator consequence.** Try v0.10.0 if you need multi-provider sandboxes or Devin as a harness. Do not attribute Devin behavior to Omnigent's own agent loop. Do not read CHANGELOG.md at the tag for v0.10.0 notes.

## 2. Shared-session approval is still any-editor, and v0.10.0 documents the revert as a breaking change

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** v0.10.0 breaking changes: "Shared-session approval-authority and message-attribution (the #2150 stack) are reverted -- session approvals are again available to any shared editor. (#4318)." Parent already recorded the v0.9.0 revert. This tag keeps that posture and labels it breaking.
- **Receipt:** https://github.com/omnigent-ai/omnigent/releases/tag/v0.10.0
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Owner-only approval did not come back. A shared editor can still authorize tool calls that run with the owner's credentials.

**Operator consequence.** Same as parent: do not share a session if you needed owner-only approval. max_cost_usd as a hard stop was not re-read at this tag in this pass.

## Researcher lane notes

Parent ACP file I/O fail-open and max_cost_usd downgrade-gate were not re-opened at v0.10.0 here. Researcher spawned for that.

## Surfaces checked

- GitHub releases v0.10.0 body
