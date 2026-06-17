---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-12-hermes-mistralai-quarantine-response
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-05-12
  end: 2026-05-12
versions_covered: "main (post-v0.13.0, commit 99ad2d1)"
status: accepted_signal
confidence: high
accessibility_impact: low
operator_relevance: high
actionability: observe
evidence:
  - label: "PR #24205 — fix(deps): unbreak [all] install — drop mistralai while PyPI quarantined"
    url: https://github.com/NousResearch/hermes-agent/pull/24205
    precision: commit_diff_reviewed
---

# Hermes Agent: mistralai Quarantine Response (main, post-v0.13.0)

## What Changed

Commit `99ad2d1` (2026-05-12 UTC) responds to the quarantine of `mistralai`
2.4.6 on PyPI, which was flagged as a malicious release:

- `mistralai` is removed from `[all]` and `[termux-all]` optional dependency
  groups so fresh installs with `hermes-agent[all]` no longer pull the
  quarantined package. The `[mistral]` extra is preserved for operators who
  explicitly opt in once the package is restored.
- Mistral Voxtral TTS is hidden from the provider picker and dashboard STT
  options while quarantined. Calling the provider returns a "temporarily
  disabled" status rather than importing the stale cached package.
- Tests updated to assert disabled behavior.

**Not yet tagged.** This fix is in `main` only; no new release has shipped
as of 2026-05-12.

## Operator Consequence

Operators who ran `pip install hermes-agent[all]` on or around 2026-05-12 may
have installed `mistralai` 2.4.6 before PyPI quarantined it. Those operators
should:
1. Verify whether `mistralai==2.4.6` is present in their environment.
2. If present, remove it and re-install from the fixed package or reinstall
   `hermes-agent[all]` after quarantine is lifted.
3. Operators who need Mistral Voxtral TTS must explicitly install
   `hermes-agent[mistral]` once PyPI restores the package; it will not
   return to `[all]` automatically until the revert commit ships.

Operators installing from a tagged release are unaffected until a new
release ships with this fix — Hermes has no automatic update path from
`[all]` to `[mistral]`.

## Context

The `mistralai` 2.4.6 PyPI quarantine is a supply-chain security event
affecting any project that pinned or auto-upgraded to that version. Hermes'
response is clean: disable gracefully, preserve the opt-in path, document
the rollback in code comments. The change is self-contained and will be
reverted in a single commit when PyPI restores the package.
