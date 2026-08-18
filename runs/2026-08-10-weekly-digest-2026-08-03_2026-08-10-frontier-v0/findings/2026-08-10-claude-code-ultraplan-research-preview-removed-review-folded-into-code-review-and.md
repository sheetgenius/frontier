---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-claude-code-ultraplan-research-preview-removed-review-folded-into-code-review-and
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/changelog#2-1-222
    precision: official_changelog
---
# 2026-08-10-claude-code-ultraplan-research-preview-removed-review-folded-into-code-review-and

Ultraplan research preview removed, `/review` folded into `/code-review`, and context-window enforcement tightened on unknown models.

v2.1.222 ends with a single line  --  "Removed ultraplan feature"  --  retiring a research preview that entered early preview in Week 15 (April 2026) as cloud-drafted plans reviewable in a web editor. The digest names the migration path: plan mode or Claude Code on the web. v2.1.223 rationalised review: "`/review` is now an alias of `/code-review`, which reviews the current diff or a PR (`/code-review <level> <pr#>`); use `/code-review ultra` for a deep cloud review", and `/code-review` with no level reuses the last level typed. v2.1.223 also changed two context-window behaviours with cost consequences: `CLAUDE_CODE_DISABLE_1M_CONTEXT` now "hold[s] every Claude model with a native 1M window to 200K via auto-compaction, not just a fixed list", with a startup warning when auto-compaction is not holding the session to 200K; and auto-compact now keeps sessions on unrecognised model IDs "within the assumed context window instead of letting them grow past it" (`CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1` restores the old behaviour). v2.1.234 cut the built-in `claude-api` skill's context cost "from ~200k+ tokens to ~25k by loading reference docs on demand."

Channel: tagged-release. Ancestry: Closed source; npm publish record is the release proof. registry `time[]`: 2.1.222 = 2026-08-04T20:37:17Z and 2.1.223 = 2026-08-05T22:51:13Z, both plain non-prerelease semver under dist-tag `latest` with resolvable per-version manifests. Corroborated on a second surface: the Week 32 digest's "Other wins" grid states "The Ultraplan research preview is removed, including the `/ultraplan` command and the `ultraplan` keyword; use plan mode or Claude Code on the web instead" and links /docs/en/ultraplan, and separately confirms the `/review` alias.

Operator consequence: Adapt if you scripted `/ultraplan`  --  it is gone with no deprecation window, and a keyword-triggered workflow will now simply not fire. The context-enforcement changes are the ones to watch on a bill: if you were relying on `CLAUDE_CODE_DISABLE_1M_CONTEXT` naming a fixed model list, it now covers every 1M-native model, which will change compaction behaviour on models you did not intend to constrain; and if you route through a gateway that presents model IDs Claude Code does not recognise, sessions that previously grew unbounded are now held to an assumed window. Both are improvements, and both change token accounting from one release to the next  --  re-baseline before you read a cost regression as a model change.

## Receipt
- https://code.claude.com/docs/en/changelog#2-1-222
