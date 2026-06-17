---
run_id: 2026-05-12-partial-cycle-codex-refresh-2026-05-12-frontier-v0
type: partial_cycle
source: codex
window:
  start: 2026-05-12
  end: 2026-05-12
operator: claude-sonnet-4-6
parent_loop: autonomous-research-loop
---

# Audit Note: Codex Refresh (2026-05-12)

## What Was Done

Harvested Codex activity for 2026-05-12. One new finding accepted:

- **2026-05-12-codex-pretooluse-input-rewrite**: PR #20527 extends
  `PreToolUse` hooks to apply `updatedInput` rewrites before tool dispatch.
  When a hook returns `permissionDecision: "allow"` alongside `updatedInput`,
  the tool executes the rewritten input. Prior to this fix, the rewrite was
  silently ignored. Hook authors can now sanitize, normalize, or redirect
  tool arguments — not just allow or deny.

Profile updated:
- `last_updated` and `last_full_review` advanced to 2026-05-12
- New claim `pretooluse-input-rewrite` added, pointing to finding above
- New claim referenced in `posture_basis` (capability, governance)
- New ### Hooks section added to capability prose
- Governance Lens updated to name the new primitive (hook surface extends
  from binary gate to advisory-and-rewrite layer)

## Freshness Status

Codex profile has now been refreshed beyond its initial 2026-05-07..2026-05-11
build. Freshness condition partially satisfied (2 of 10 providers after
combining with the Gemini CLI refresh in this same commit).

## Signal Summary

One signal: `2026-05-12-codex-pretooluse-input-rewrite`. Two operator
actions: (1) re-test existing hooks that returned `updatedInput` — behavior
changes after upgrade; (2) new hook authoring opportunity for input
sanitization/normalization. Accessibility impact: low. Operator-loop relevance: low.
