---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-flue-flue-v2-0-2-makes-conditional-tool-additions-prompt-cache-safe-on
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/blob/a171cc1bc8a552775a820ae3d343ccd09597cc8c/CHANGELOG.md
    precision: official_changelog
---
# 2026-08-10-flue-flue-v2-0-2-makes-conditional-tool-additions-prompt-cache-safe-on

Flue v2.0.2 makes conditional tool additions prompt-cache-safe on Anthropic models and writes down the actual cache contract.

A tool mounted by the rerender that follows a settled tool batch is now anchored to that batch's final tool result. On current first-party Anthropic models (Claude 4.5 and later, excluding Haiku) that keeps the added tool definition out of the cached prompt prefix instead of invalidating it; other providers ignore the anchor and their requests are unchanged. The anchor persists with the run and is restored on rehydration, so a rehydrated context matches the live loop exactly, and the internal reduced-state format counter bumps to 2. The Tools guide now states the real contract: tool-set changes rewrite the native tools array and invalidate the provider prompt cache, except for additions unlocked by a completed tool call on those models (#545).

Channel: tagged-release. Ancestry: Same tag as above: `gh api repos/withastro/flue/compare/v2.0.2...a171cc1bc8a552775a820ae3d343ccd09597cc8c` returned status "identical", so the 2.0.2 CHANGELOG section is in the history of the stable tag v2.0.2. Not a prerelease (no rc/beta/alpha in the tag name; the last prerelease tag in the repo is v1.0.0-beta.9).

Operator consequence: If you build agents that mount tools conditionally mid-run  --  the standard progressive-disclosure pattern  --  upgrade to v2.0.2 and measure your cache-hit rate again before you re-tune anything. This is the difference between paying full prefix cost on every conditional mount and paying it once. Note the boundary before you generalize: it is an Anthropic-model behaviour, Haiku is excluded, and every other provider gets the old invalidation. A cache saving observed on Claude 4.5 through Flue is a fact about that pair, not about the harness.

## Receipt
- https://github.com/withastro/flue/blob/a171cc1bc8a552775a820ae3d343ccd09597cc8c/CHANGELOG.md
