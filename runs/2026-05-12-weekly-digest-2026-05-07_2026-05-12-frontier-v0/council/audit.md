# External Review Audit: Council Pressure-Tests 2026-05-12

Three bitter council sessions were run against profiles from each
`surface_class` in the watchlist. External Review condition for the
Operational Target is now MET.

## Sessions Run

1. **Hermes Agent** (`open_source_commits`) — macro_11df41bf
   Question: q-hermes-open-source-commits.md
   Dossier: dossier-hermes-open-source-commits.md

2. **OpenHands** (`mixed_official_docs`) — macro_40f69c11
   Question: q-openhands-mixed-official-docs.md
   Dossier: dossier-openhands-mixed-official-docs.md

3. **Claude Code** (`closed_source_release_notes`) — macro_8528333b
   Question: q-claude-code-closed-source-release-notes.md
   Dossier: dossier-claude-code-closed-source-release-notes.md

All three ran `council.research.v1` with real providers (claude, codex,
gemini; synthesis by codex).

## Corrections Applied

**Hermes Agent** (`content/profiles/hermes-agent.md`):
- Hallucination gate claim narrowed: now cites PR #20232 directly, describes
  the mechanism as "Kanban integrity check on card references" rather than
  "evidence required before state change." Removes overstatement.
- Governance posture rewritten: "active defaults rather than opt-in safety"
  replaced with "moving sensitive security checks into defaults while leaving
  scope narrowing and automation modes operator-configured."
- Open questions: removed speculative `enable_sub_agents` question; added
  governance-map question (which controls are default-on vs. opt-in).

**OpenHands** (`content/profiles/openhands.md`):
- "Structurally constrained tool surfaces" → "tool surfaces defined by
  `TaskToolSet`... whether runtime-enforced or instruction-level requires
  code-level evidence and remains an open question."
- Critic default: "enabled by default for new users" → "deployment-controlled
  via `OH_ENABLE_CRITIC_BY_DEFAULT`; default disabled unless explicitly
  enabled in the deployment."
- Governance lens rewritten: removes "default-on for visibility surfaces"
  framing; replaces with deployment-controlled characterization.
- What to Watch Next: replaced with runtime enforcement / governance-focused
  questions.

**Claude Code** (`content/profiles/claude-code.md`):
- `hard_deny` capability state: removed "Completes the three-tier auto-mode
  policy model" phrasing from current-state section.
- Governance Lens: added explicit "reviewer interpretation" label for the
  three-tier model framing; rewrote API key auth as capability loss, not
  clarification.

## New Source Addition: Flue (Tier 2)

During this iteration, AGENTS.md and sources/index.yml were updated to add
Flue as a Tier 2 (weekly) watchlist provider. The Coverage condition now
requires a Flue profile in addition to the original 9. Coverage is
temporarily NOT MET again.

**What Flue is**: TypeScript programmable harness framework (withastro).
"Agent = Model + Harness" framing. Headless, CI-deployable, Markdown-skill-driven.
Self-described as "like Claude Code, but 100% headless and programmable."
Source contract: `sources/flue.yml`.

**Priority**: Build Flue profile in the next iteration to restore Coverage.

## Operational Target Status (post-council)

1. **Coverage**: NOT MET — Flue profile missing.
2. **Depth**: MET — all 9 prior profiles have >= 3 active claims.
3. **Freshness**: NOT MET — no profile refreshed beyond initial build.
4. **Doctrine convergence**: APPROACHES MET — zero new gaps across four cycles.
5. **External review**: MET — three council runs, one per surface_class.
6. **Synthesis**: MET — weekly digest published.

Next priority: build Flue profile (Coverage), then Freshness refresh cycles.
