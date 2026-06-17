# Council Dossier: macro_268f9a21-9329-4e0f-a7af-11b297e16417

## Context
- question_source: file
- question_file: /tmp/codex-ratification-consult.md
- cwd: /Users/c3po/co/bitterfrontier
- model_policy: {"codex_model":null,"codex_config":["model_reasoning_effort=xhigh"],"synthesis_codex_model":null,"synthesis_codex_config":["model_reasoning_effort=xhigh"],"claude_model":null,"gemini_model":null,"reviewers":["codex"],"synthesizer":"codex","child_timeout_ms":900000,"name":"amendments-005-006-codex-xhigh"}

## Question
# Codex consult — ratify amendments 005 and 006?

You are an independent reviewer giving a ratification verdict on two
proposed charter amendments for the Bitter Frontier project. Both are
the second draft, revised after a four-reviewer Claude pressure-test on
2026-05-27. The author of the amendments is asking specifically for
*your* read at xhigh reasoning before applying them.

## Your task

1. Read both amendments in `charter/proposed/`.
2. Read the four pressure-test dossiers in
   `research/council-dossiers/2026-05-27-amendment-*.md` to see what
   the prior reviewers caught and what the second drafts changed in
   response.
3. Read the audit note that motivated both amendments:
   `runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/audit.md`.
4. Read the source artifacts (especially the Hermes finding and signal
   that drive amendment-005's worked example):
   - `runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/findings/hermes-v0.14.0-foundation-release.md`
   - `runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/signals/frontier-signals.yml`
5. Cross-check against the canonical doctrine:
   - `AGENTS.md`
   - `CHARTER.md`
   - `RESEARCH_CONTRACT.md`
   - `charter/ratified/amendment-004-establish-publication-sections.md`
     (the amendment 005 lead arguments hinge on conflicts with this one)

## What I want to know

You are the *third* independent perspective after four parallel Claude
reviewers. Do not just re-litigate what they covered (their dossiers
are in `research/council-dossiers/`). Look for what they missed.

Specifically:

1. **The lead claim in amendment 005**: composite signals violate
   amendment-004's Rule 5 by construction, and `security_change`
   single-enum is incoherent on composites. The Hermes signal is the
   worked example. Is this read correct? Is there a defense of
   composite signals I should not dismiss?

2. **The verb × persona multiplicity rule** in amendment 005
   (replacing the bullet-count heuristic): is this rule sharp enough
   to apply mechanically, or will it produce the same arbitrary
   splits the bullet-count rule produced? The doctrinal-fit dossier
   prefers "decision-shape" and the edge-case dossier prefers
   "verb × persona"; I went with verb × persona. Defensible?

3. **The retroactive Hermes decomposition** spelled out in
   amendment 005's Applied To section. Four signals: distribution,
   proxy, identity, kanban. Each section assignment defensible under
   Rule 5? Each `security_change` honest? Anything wrong with the
   exact frontmatter I propose?

4. **`composes:` finding-only with derived signal union**
   (amendment 006). The schema-fit dossier argued for this; I
   applied it. Are there hidden costs at render time I'm not seeing?

5. **`sources/adjacent.yml` as the closed-world escape hatch**
   (amendment 006). The closed-world dossier quantified the failure
   rate at ~25-30%; I responded with a referent-only index. Will
   this index degenerate into a junk drawer? What constraints belong
   on it that I haven't named?

6. **Ratification order**. Amendment 005 should ratify first or
   together with 006. Together creates a larger atomic ratification
   commit but cleaner Paperclip retroactive handling (Option A).
   Sequential is simpler but leaves an awkward window where 006 has
   to use Option B (whole-finding noise). Your preference?

7. **The Paperclip Option A vs. Option B** handling in amendment
   006's Applied To section. Is the conditional too complex? Should
   I just commit to one and remove the other?

## What to write back

A focused ratification verdict, one of:

- `ratify-as-is` (both amendments)
- `ratify-with-revisions` (list which revisions on which amendment)
- `revise-and-re-pressure-test` (which amendment, what's not yet
  resolved)
- `reject` (which, why)

Plus the answers to questions 1-7 above. Keep prose tight; the
amendments themselves are long enough.

## House discipline

- Source-bound. Quote files and line numbers.
- Separate observed facts from your hypotheses.
- Identify tempting alternatives to reject and why.
- Do not paraphrase the four prior dossiers — look for what they
  missed.

## Research Outputs
- research_codex: ok -> child_runs/research_codex/output.jsonl

## Review Outputs
- review_codex: ok -> child_runs/review_codex/output.jsonl

## Synthesis
I’m using the `charterwright` skill because this is a charter amendment ratification review. I’ll read the amendment drafts, pressure-test dossiers, motivating audit, source artifacts, and the doctrine files, then return a verdict with file/line citations.The skill guidance reinforces the same distinction the repo already makes: durable doctrine should clarify authority and evidence boundaries, not smuggle in implementation plans. I’m gathering line-numbered handles now so the verdict can stay source-bound instead of relying on memory.The motivating artifacts support the core premise: the audit explicitly says one Hermes release produced split operator consequences, and the current Hermes signal carries one `section: platform` plus four different action bullets. I’m now checking the four review dossiers for what was already covered versus what still needs an independent ratification call.The second drafts incorporated most reviewer demands: 005 now leads with Rule 5 and `security_change`, and 006 now uses finding-only `composes` plus an adjacent index. I’m doing one extra implementation-surface check because the remaining risk is not doctrine but whether the render/query model will lie after decomposition.Verdict: `ratify-with-revisions` for both amendments. No re-pressure-test needed if the revisions are narrow.

Observed facts: Amendment 004 makes `section` singular by default and reserves `sections` for rare cross-cutting theses; Rule 5 routes authority/governance to Control Plane and runtime boundaries to Runtime, not Platform ([amendment-004](/Users/c3po/co/bitterfrontier/charter/ratified/amendment-004-establish-publication-sections.md:219), lines 219-229; [line 358](/Users/c3po/co/bitterfrontier/charter/ratified/amendment-004-establish-publication-sections.md:358)). The current Hermes signal is `section: platform` while its bullets cover distribution, proxy bind/auth, Honcho identity isolation, and Kanban integrity ([frontier-signals.yml](/Users/c3po/co/bitterfrontier/runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/signals/frontier-signals.yml:441), lines 441-486). It also says `security_change: closes` while naming both closed risks and an opened loopback HTTP surface (lines 480-486). The audit already identified the shape problem: one release, multiple operator vectors ([audit.md](/Users/c3po/co/bitterfrontier/runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/audit.md:48), lines 48-76).

1. Amendment 005 lead claim: correct for operator-consequence composites, not for every multi-fix signal. Hermes is a valid canonical failure case because its bullets route to three sections and contradictory security enum values. The defense of composite signals is the one 005 already preserves: a security advisory or suite-shaped signal can stay whole when the operator consequence is singular, e.g. “upgrade before deployment” ([amendment-005](/Users/c3po/co/bitterfrontier/charter/proposed/amendment-005-finding-signal-granularity.md:170), lines 170-184). Reject the stronger reading “any multi-part signal violates Rule 5”; the target should be “multiple distinct operator consequences.”

2. Verb x persona is defensible as the mechanical test, but not sufficient as doctrine. The edge-case dossier shows bullet-count was weak: about 50% precision and about 30% false negatives ([edge-cases](/Users/c3po/co/bitterfrontier/research/council-dossiers/2026-05-27-amendment-005-edge-cases.md:239), lines 239-269). It proposed verb/persona because it catches more real splits (lines 464-489). Keep useful disagreement by making “decision-shape” the governing standard and “verb x persona” the operational test. Add one clause: split also when the same persona has different verbs that require different section, `security_change`, or verification work.

3. Hermes decomposition is mostly right. Distribution -> Platform, proxy -> Control Plane, Honcho identity -> Control Plane, Kanban hardening -> Runtime are defensible under Rule 5 ([amendment-005](/Users/c3po/co/bitterfrontier/charter/proposed/amendment-005-finding-signal-granularity.md:252), lines 252-300). The `security_change` assignments are honest except one schema tension: `security_advisory: true` on the proxy signal stretches the current definition, which is upgrade-before-safe-deploy ([RESEARCH_CONTRACT.md](/Users/c3po/co/bitterfrontier/RESEARCH_CONTRACT.md:135), lines 135-137; [amendment-004](/Users/c3po/co/bitterfrontier/charter/ratified/amendment-004-establish-publication-sections.md:401), lines 401-403). Either omit it for proxy or revise the advisory definition to include deployment-blocking verification. Also, 005 says the Hermes specs are “exact frontmatter” but omits required consequence blocks; `security_impact >= low` requires `security_consequence` ([RESEARCH_CONTRACT.md](/Users/c3po/co/bitterfrontier/RESEARCH_CONTRACT.md:101), lines 101-113). Fix that wording or include full blocks.

4. Amendment 006 finding-only `composes` with derived signal union is the right default. It avoids drift and receiptless signal metadata, matching the schema-fit dossier’s concern ([schema-fit](/Users/c3po/co/bitterfrontier/research/council-dossiers/2026-05-27-amendment-006-schema-fit.md:155), lines 155-194). Hidden cost is semantic, not implementation: all signals inheriting from one multi-vector finding inherit the whole `composes` union. That is acceptable for Hermes/OpenHands only where the finding’s composition is broad enough; it is noisy for Paperclip.

5. `sources/adjacent.yml` is the right escape hatch. Closed-world already fails on present data: 9-10 of 38 findings touch non-watchlist tools, about 25-30% ([closed-world](/Users/c3po/co/bitterfrontier/research/council-dossiers/2026-05-27-amendment-006-closed-world.md:64), lines 64-69). Add constraints: no orphan adjacent entries; every active adjacent id must be referenced by at least one accepted finding; require `canonical_url`, `first_seen_finding_id`, and `last_seen`; allow `status: active|archived` so old references do not break; prohibit category placeholders; add only tools named in source-backed claim text, not speculative integrations.

6. Ratify together, with 005 applied first inside the same atomic commit. Sequential ratification creates an avoidable Option B window, and 006 itself says 005 should ratify first or together ([amendment-006](/Users/c3po/co/bitterfrontier/charter/proposed/amendment-006-composition-findings.md:255), lines 255-269).

7. Paperclip Option A vs. B: remove Option B. But also reject the weak claim that Option A is “clean.” With finding-only `composes`, even decomposed Paperclip signals still inherit `composes: [claude-code]` from a five-vector finding, while only the ACPX-Claude vector actually composes with Claude Code ([paperclip finding](/Users/c3po/co/bitterfrontier/runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/findings/paperclip-scoped-permissions-and-routine-env-secrets.md:66), lines 66-72; [lines 89-96](/Users/c3po/co/bitterfrontier/runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/findings/paperclip-scoped-permissions-and-routine-env-secrets.md:89)). Defer Paperclip retroactive `composes` unless the finding is split or the amendment explicitly accepts whole-finding noise.

## Smallest Implementation Target

Revise Amendment 006’s Applied To section to remove Paperclip Option B, defer Paperclip retroactive `composes` pending a split or explicit whole-finding-noise decision, and add the adjacent-index constraints above.

## Use
- Treat this dossier as research input, not authority by itself.
- Source-check accepted and rejected claims before launching a worker.
