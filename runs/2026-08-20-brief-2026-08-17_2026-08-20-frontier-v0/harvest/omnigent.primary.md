---
schema_version: bitter.frontier_harvest.v0
provider: omnigent
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/omnigent.yml
channels_present: [tagged-release]
window_volume: 4 material changes, 1 capability, 3 defect (approval still shared; cost.py unchanged; ACP result-phase still fails open; Usage page off)
lane: primary sources, coordinator from v0.10.0 body plus leftover re-read of cost.py / qwen_executor / feature_flags at the tag
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

**Operator consequence.** Same as parent: do not share a session if you needed owner-only approval.

## 3. cost.py is byte-identical at v0.9.0 and v0.10.0; max_cost_usd is still a downgrade gate

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** gh api contents cost.py at v0.9.0 and v0.10.0 both return blob SHA 5b4ca5964b285e3a804538a2050507a83005c98b, size 47665. Module docstring at v0.10.0 lines 21-28 still calls max_cost_usd a "downgrade gate," not a hard stop. _resolve_expensive_models at lines 398-404 still sets block_all_models=True when expensive_models is None or []. CHANGELOG.md at the v0.10.0 tag still starts at ## [v0.9.0]; no v0.10.0 heading.
- **Receipt:** https://github.com/omnigent-ai/omnigent/blob/v0.10.0/omnigent/policies/builtins/cost.py
- **Half:** neither (unchanged) | **Confidence:** high

**What changed.** Nothing in the spend cap. The Usage page tracks cost; it does not change the gate.

**Operator consequence.** Same as July. A cost_budget with a non-empty expensive_models list forces a model switch and keeps spending. Omitting expensive_models or setting [] is the hard stop.

## 4. ACP delegated file I/O still fails open on the result phase; Usage page is off unless OMNIGENT_FEATURES is set

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** types.py blob SHA 1c4a0862b9479d877d0dffad548e2d469caeaabe identical at v0.9.0 and v0.10.0. FAIL_CLOSED_PHASES at v0.10.0 line 80 is ("PHASE_TOOL_CALL", "PHASE_REQUEST"); comment at line 72 still says PHASE_TOOL_RESULT is intentionally NOT here. qwen_executor.py at v0.10.0: _fs_result_policy_denies lines 765-775 returns False on eval error (comment: result phase fails open) and on unwired policy; _handle_fs_write docstring still says a result-phase denial refuses the response without undoing the write. feature_flags.py at v0.10.0 blob 42a98fd6: resolve_feature_flags docstring, "Unset or empty means every release feature is off." Feature.USAGE_PAGE = "usage_page".
- **Receipt:** https://github.com/omnigent-ai/omnigent/blob/v0.10.0/omnigent/inner/qwen_executor.py
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** The Usage page is new and off. The qwen/goose content gate did not close. Devin as a built-in harness (release body) sits on the generic ACP path, which does not get that content gate.

**Operator consequence.** Do not treat v0.10.0 as a fix for ACP file I/O policy. Set OMNIGENT_FEATURES=usage_page if you want the page. Do not attribute Devin behavior observed through Omnigent to Devin alone.

## Researcher lane notes

Parent defects were re-read at the v0.10.0 tag. cost.py identical. ACP result-phase fail-open still present. Owner-only still gone. Cherry-pick trap still applies: do not treat compare/v0.9.0...v0.10.0 as a linear story without checking tag objects.

## Surfaces checked

- GitHub releases v0.10.0 body
- cost.py blob SHA at v0.9.0 and v0.10.0
- types.py blob SHA at both tags
- qwen_executor.py fail-open helpers at v0.10.0
- feature_flags.py resolve_feature_flags at v0.10.0
- CHANGELOG.md headings at v0.10.0 (no v0.10.0 section)
