# Council Review: Amendment 005 — Finding/Signal Granularity (Doctrinal Fit)

- Reviewer: independent council seat (claude-opus-4-7, 1M context, doctrine read-only)
- Date: 2026-05-27
- Angle: doctrinal fit — does amendment-005 cohere with the existing
  charter and research-contract grammar, or does it strain doctrine in
  places the proposal does not surface?
- Posture: skeptical, source-grounded, separate observed facts from
  hypotheses.
- Inputs: `AGENTS.md`, `CHARTER.md`, `RESEARCH_CONTRACT.md`,
  `charter/ratified/amendment-{001,002,003,004}-*.md`,
  `charter/proposed/amendment-005-finding-signal-granularity.md`,
  `charter/proposed/amendment-006-composition-findings.md`,
  `runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/audit.md`,
  `findings/hermes-v0.14.0-foundation-release.md`,
  `signals/frontier-signals.yml` (Hermes entry, lines 441–501).

## 1. Does the grammar fit?

### Observed facts

- `RESEARCH_CONTRACT.md:54` defines a finding as
  *"a source-backed observation of what changed."* Singular noun,
  singular event, no quantifier on "what changed."
- `CHARTER.md:183` repeats this in the Owned Primitive section verbatim:
  *"Finding: source-backed observation of what changed."*
- `AGENTS.md:56` repeats again: *"Finding: source-backed observation of
  what changed. A finding is not automatically public and is not
  automatically important."*
- The finding required-field list (`RESEARCH_CONTRACT.md:58–71`) carries
  singular fields: `source`, `source URL`, `what changed`, `change
  type`, `operator implication`, `confidence`, `receipts`. None of these
  fields is plural at the schema level. `change type` is singular.
  `operator implication` is singular.
- By contrast, signal required-fields (`RESEARCH_CONTRACT.md:103–104`)
  explicitly carry plurality: `finding_ids` (list) and
  `why_action_bearing` (list). The plurality lives on the signal side
  today.

### Hypothesis

The amendment's framing — *"a finding may be release-shaped … the
finding's body must enumerate the distinct operator consequences it
contains"* (`amendment-005:27–30`) — is a stretch of the existing
definition, but it is a stretch the contract already half-tolerates in
practice. The Hermes v0.14.0 finding already carries four bullet
sections (Distribution / Provider routing / Identity mapping /
Reliability) under one `what changed` heading. The contract's silence
on multiplicity inside a finding has been resolved informally already.

What is *new* in amendment 005 is making the multiplicity explicit on
the signal side: "one operator consequence, one signal." This second
half does not strain the existing definition — `RESEARCH_CONTRACT.md:81`
is already "a signal is an accepted finding that can change an action,"
singular action. The amendment is closer to *clarifying enforcement* of
the existing signal grammar than *extending* it.

### The actual doctrinal tension

The amendment's prose treats "release-shaped finding" as if the finding
type itself were getting wider. Read against the contract, what is
actually happening is asymmetric:

- The **finding** is *not* changing shape. It was already permitted to
  cover one source event with multiple consequences in its body —
  `RESEARCH_CONTRACT.md` neither forbids nor specifies the granularity.
  Existing practice (Hermes v0.14.0, prior cycle's larger Codex releases
  per the audit's "Codex CLI 0.131/0.132/0.134 individually" deferred
  decomposition) already used this shape.
- The **signal** *is* getting a tightened rule: "operator-consequence-
  shaped, one signal per distinct operator action," with a `> 3 items
  in why_action_bearing → probably two signals` heuristic
  (`amendment-005:78–80`).

That asymmetry is the real proposal. The amendment underdescribes it.
If the finding's shape is unchanged, the Summary should say
"Reaffirm: findings are source-event-shaped (one event, possibly
multiple consequences in the body); new rule: signals are
operator-consequence-shaped (one consequence per signal)." That is a
sharper framing than "findings may be release-shaped."

### Tempting alternative to reject

It is tempting to argue this is purely a clarification with no
doctrinal weight ("the contract already permits both shapes; this just
names the convention"). I would reject that read. Codifying "one
signal per operator consequence" is a real constraint on how the
publication produces output, with downstream effects on signal counts,
digest scan-cost, the integrity checker's reference-graph density, and
the `top_signal_ids` curation budget. Pretending the rule is purely
descriptive understates the change.

### What to change in the amendment text

- Reframe the Summary so the asymmetry is explicit: finding shape is
  unchanged; signal granularity tightens.
- Drop "Findings may be release-shaped" from the first sentence — that
  framing implies findings are gaining a new permission they did not
  have. They are not.
- Replace with: "A finding captures one source event. A signal captures
  one operator consequence. When a single source event contains
  multiple operator consequences, the canonical shape is one finding
  with N signals via `finding_ids: [...]`."

## 2. Hidden conflicts with ratified amendments

### Amendment 003 (`commit` precision level)

Observed facts:

- `amendment-003` added `commit` to the `evidence_floor` enum between
  `commit_diff_reviewed` and `release_note`. It applies to *profiles*
  (the `evidence_floor` lives on the profile schema), and per
  `RESEARCH_CONTRACT.md:222–229` the floor "is for the *primary*
  citation supporting any claim listed in the profile."
- The Hermes finding under review carries mixed-precision evidence
  (`release_note`, `commit_diff_reviewed`, and `commit`) on a single
  composite finding (lines 17–29 of the finding).

Hypothesis: the 1→N decomposition under amendment 005 actually
*sharpens* amendment 003's value rather than conflicting with it. Each
decomposed signal can carry a tighter evidence subset (the Honcho
signal would carry only the `commit`-precision citations; the
distribution signal would carry the `release_note` + PR
`commit_diff_reviewed`; the proxy signal would carry the PR
`commit_diff_reviewed`). Per-signal evidence sets become more
coherent, and the precision floor for any downstream profile claim
referencing the signal is more honest.

**No conflict found.** If anything, this is a complementary
strengthening that the amendment should *mention* — see revision
recommendations below.

### Amendment 004 (sections + accessibility/security triads + Bitter
as primary consumer)

This is where the real doctrinal tension lives.

Observed facts:

- `CHARTER.md:139–140`: *"Signals carry a `section:
  control-plane | runtime | platform` field (or `sections: [...]`
  array for cross-cutting theses)."*
- `amendment-004:354–360`: `section` (singular) is the default;
  `sections` (plural) is "used only when the signal covers more than
  one lane and the operator consequence in each is distinct enough to
  warrant the dual tag."
- `amendment-004:213–217` (Rule 4 cross-cutting theses): "*If more than
  20% of signals carry multiple sections, the routing rules are too
  vague.*"
- `amendment-004:217–229` (Rule 5 platform-shaped-but-not-adoption):
  evaluation/governance/authority → control-plane; sandbox/runtime →
  runtime. Platform is reserved for adoption/distribution.
- The current Hermes composite signal carries `section: platform`
  (frontier-signals.yml:442). Read against its `why_action_bearing`
  bullets (lines 447–461):
  1. "Builders who bounced off … should re-evaluate Hermes — `pip
     install` and Windows beta…" — **platform** (distribution/adoption).
  2. "Operators routing through `hermes proxy` should confirm bind
     address and auth model…" — **control-plane / security advisory**
     by Rule 5 (this is authority/credential routing, not adoption).
  3. "Multi-user gateway operators should upgrade past the Honcho
     commits … and the credential-pool isolation commit … quiet
     correctness fixes for cross-user contamination." — **control-plane
     security** (identity-mapping correctness, credential isolation;
     this is policy-shaped, advisory in shape).
  4. "Kanban-dependent multi-agent operators should treat the
     post-v0.14.0 line as the integrity-floor baseline" — **runtime**
     (SQLite hardening on the runtime persistence primitive).

That single signal carries four bullets that route to **three
different sections**. Routing the composite as `platform` is
defensible only if you read "Foundation Release" as primarily a
distribution event. By Rule 5, two of the four bullets explicitly
*do not belong in Platform*. The current shape silently violates
Rule 5.

This is the hidden conflict the amendment does not surface:

> The composite signal pattern fights Amendment 004's section
> doctrine. Sections were chosen precisely to be operator-
> consequence-shaped, and the routing rules assume a signal has *one*
> operator consequence to route. A composite signal whose four
> operator consequences live in three different sections is the
> precise shape Rule 5 was written to prevent.

Hypothesis: amendment 005's 1→N decomposition is the *correct
implementation* of amendment 004's section doctrine. Rule 5 is
unspeakable for composite signals; it presupposes a single operator
consequence. Decomposing the composite *closes the latent conflict*
that Rule 5 already implied.

The amendment should name this. Currently amendment-005 mentions
section only once ("each signal carries its own `section`,
`accessibility_consequence`, and `security_consequence` blocks";
amendment-005:96–99). That sentence should be elevated into the **Why**
section as the load-bearing argument: composite signals cannot honor
Rule 5; decomposed signals can.

### Amendment 004 + accessibility/security triads

Observed facts:

- `RESEARCH_CONTRACT.md:117–122` defines `accessibility_consequence` as
  a singular triad: `what_got_easier` (one concrete action),
  `who_can_use_now` (one operator class), `authority_visibility` (one
  authority/credential/evidence/risk statement).
- The current Hermes signal's `accessibility_consequence.what_got_easier`
  (frontier-signals.yml:464–467) jams four distinct accessibility wins
  into one prose blob: "`pip install hermes-agent` plus lazy adapter
  install plus Windows beta plus Zed ACP Registry listing — Hermes is
  reachable through standard package paths now, not just through repo
  clone."
- Its `who_can_use_now` (lines 468–472) lists *four operator classes*
  in one field: Python operators, Windows developers, Zed users, users
  of any OpenAI-compatible tool.

That field is doing a job the schema doesn't reward. The
`accessibility_consequence` was designed to be queryable — Bitter as
primary consumer (`CHARTER.md:97–104`) needs to filter signals on
"what got easier?" If `what_got_easier` is "pip install plus lazy
install plus Windows beta plus Zed registry," Bitter cannot
meaningfully query against it.

**This is doctrinally inconsistent with amendment-004's
"schema-is-the-deliverable" framing** (`amendment-004:413–449`,
`CHARTER.md:99–104`). Amendment 005's decomposition is the only way to
restore the queryability the schema was designed for.

The amendment should make this argument too. Currently it does not.

## 3. Editorial voice: where is the `why_action_bearing` boundary?

### Observed facts

- The signal schema lists `why_action_bearing` as an array
  (`RESEARCH_CONTRACT.md:104`). The array is unbounded; no count rule
  in the contract.
- Existing signals throughout the run carry 2–4 bullets per signal
  (sampled from `frontier-signals.yml`). Many signals carry plausibly
  one distinct operator consequence in their primary frame, with
  supporting bullets nuancing it. Example: the Paperclip signal
  (frontier-signals.yml:503–522) carries four bullets, but all four
  attach to a single operator consequence ("re-evaluate Paperclip's
  authz model under the new principal-access backfill") — they are
  facets of one decision, not four decisions.
- Amendment 005 introduces a `> 3 items → probably two signals`
  heuristic (`amendment-005:78–80`).

### Hypothesis

The `> 3 items` heuristic is a procedural test, not the doctrinal
criterion. The doctrinal criterion is: **does each bullet correspond
to a separate operator decision that lands at a different time, on a
different operator, in a different section, or against a different
axis?**

A four-bullet signal where all bullets describe *one decision* (the
Paperclip example) is one signal. A two-bullet signal where the two
bullets describe *two decisions* (e.g., "upgrade your runtime" + "audit
your control plane") is two signals.

The `> 3 items` heuristic catches some real cases (the Hermes composite
has four bullets across three sections — heuristic flags correctly).
It will produce false positives (a coherent multi-faceted single
decision will get split) and false negatives (a two-bullet signal
spanning two decisions will pass). The heuristic should be presented
as a *prompt to check*, not a *splitting rule*.

### What to change in the amendment text

Replace the heuristic clause with:

> A signal whose `why_action_bearing` bullets land at different times,
> on different operator classes, in different sections, or against
> different axes should split into separate signals. Bullet count is a
> useful trigger to check this — three or more bullets is a reliable
> prompt — but the test is decision-shape, not count.

This is the boundary the amendment is trying to draw but its current
wording elevates the count above the structural test.

## 4. Finding↔signal content relationship: what does the finding own
versus what does each signal own?

### Observed facts

The amendment is silent on this. It says only that each signal
"carries its own `section`, `accessibility_consequence`, and
`security_consequence` blocks, and each lists the same composite
finding in `finding_ids: [...]`" (`amendment-005:96–99`).

It does *not* say:

- Whether each signal's `accessibility_consequence` block is a *subset*
  of the finding's prose (extraction) or *independent prose* (rewrite).
- Whether the finding's `accessibility_impact` (currently `high` on the
  Hermes finding, line 12) constrains the signals' impacts, or whether
  signals set their own.
- What happens when one decomposed signal carries
  `security_advisory: true` and another doesn't — does the finding
  inherit any advisory marker?
- Whether the finding's `Operator Implication` section becomes one
  signal's `why_action_bearing` or whether it's reshuffled across
  signals.

### Hypothesis

The clean rule is:

> The finding owns *the observation* (source event, evidence,
> dated window, what was observed in the source). Each signal owns *its
> own decision*: section, accessibility/security consequence,
> `why_action_bearing`, action verb, advisory flag. The finding's
> body lists the consequences for context, but the structured fields
> on each signal are authoritative for that signal. Signal-level
> structured fields are not constrained by finding-level scalars.

This separation is consistent with how the contract already partitions
ownership (`RESEARCH_CONTRACT.md:276–285`): *"Finding owns what changed
in a dated window, with receipts. Signal owns why a finding can change
an action."* The finding owns *what*; the signal owns *why-act*. The
decomposed shape simply lets multiple *why-acts* attach to one *what*.

### What to change in the amendment text

Add an explicit "Ownership" sub-section to the amendment, naming the
above. Without it, the first agent applying the rule retroactively
will have to invent the partition, and the partition will drift.

Suggested wording:

> **Ownership in the 1→N pattern.** The finding owns the observation:
> the source event, the evidence array, the dated window, the
> narrative of what changed at the source. Each derived signal owns
> its own decision: `section` (or `sections`), `accessibility_impact`
> + `accessibility_consequence`, `security_impact` + `security_change`
> + `security_consequence`, `security_advisory`, `why_action_bearing`,
> and `actionability`. The finding's body may enumerate the
> consequences for narrative coherence, but the structured signal
> fields are authoritative for each signal. The finding's scalar
> impact fields (e.g., `accessibility_impact: high` on the finding)
> are summary-level only; they do not bind any derived signal's
> impact rating.

## 5. Retroactive Hermes decomposition — what would the after-state
look like?

### Observed facts (the current shape)

One finding (`2026-05-27-hermes-v0.14.0-foundation-release.md`) with
four narrative vectors in its body: Distribution, Provider routing,
Identity mapping, Reliability. One signal at frontier-signals.yml:441
with `section: platform`, four `why_action_bearing` bullets spanning
three sections by Rule 5 (see §2 above), one `accessibility_consequence`
block conflating four wins, one `security_consequence` block with
`security_change: closes` despite the proxy bullet explicitly opening
a new attack surface ("Opens a local-loopback HTTP attack surface via
`hermes proxy` if the default bind is not loopback-only";
lines 484–486). The `security_change` field is a single enum — it
cannot honestly be both `closes` and `opens` for the composite.

This last point is **a second hidden conflict with amendment 004** that
neither amendment-005 nor the audit note surfaced explicitly: the
`security_change: closes | opens | reframes` enum on the composite
signal is forced into an incoherent state. The Hermes signal currently
reads `security_change: closes` (line 480) but its
`threat_blocked_or_opened` field (lines 482–486) lists both a close
(cross-user contamination, credential bleed) and an open (local-loopback
HTTP attack surface). The composite hides a real schema violation.

### Hypothesis: the canonical after-state

Decomposing the Hermes finding under amendment-005, I would expect:

**Finding (unchanged in shape, perhaps light prose tweak):**
`2026-05-27-hermes-v0.14.0-foundation-release` — narrative summary of
the release; body enumerates the four vectors; evidence array
unchanged.

**Signal 1: `2026-05-27-hermes-pypi-and-windows-beta-distribution`**
- `section: platform`
- `accessibility_impact: high`
- `accessibility_consequence.what_got_easier`: "`pip install
  hermes-agent` plus lazy adapter install plus Windows beta plus Zed
  ACP Registry listing replaces the prior clone-and-shell install
  path."
- `accessibility_consequence.who_can_use_now`: "Python operators who
  default to `pip install` for tooling, Windows developers, Zed ACP
  Registry users."
- `security_impact: low` (lazy-install advisory checker note —
  supply-chain posture)
- `security_change: reframes` (lazy install plus advisory checker is a
  posture choice, not a fix-shaped change)
- `why_action_bearing`: "Builders who bounced off the prior clone-
  and-shell installer should re-evaluate Hermes — `pip install` and
  Windows beta materially lower the floor."
- `finding_ids: [2026-05-27-hermes-v0.14.0-foundation-release]`

**Signal 2: `2026-05-27-hermes-proxy-credential-router`**
- `section: control-plane` (Rule 5: authority/credential routing
  surface is control-plane, not platform)
- `accessibility_impact: medium` (any OpenAI-compatible tool can
  reach a Hermes subscription)
- `accessibility_consequence.authority_visibility`: "Authority transfer
  is explicit at config time but opaque at runtime — downstream tools
  do not see they are routing through a local proxy. Authority surface
  reduces unless operator-visible at the tool level."
- `security_impact: medium`
- `security_change: opens` (new local-loopback HTTP attack surface)
- `security_consequence.threat_blocked_or_opened`: "Opens a
  local-loopback HTTP attack surface if the default bind is not
  loopback-only."
- `security_advisory: true` — operators must confirm bind/auth before
  exposing.
- `why_action_bearing`: "Operators routing through `hermes proxy`
  should confirm bind address and auth model before exposing it;
  default-loopback-only is the safe assumption to verify, not assume."
- `finding_ids: [2026-05-27-hermes-v0.14.0-foundation-release]`

**Signal 3: `2026-05-27-hermes-honcho-identity-and-credential-isolation`**
- `section: control-plane`
- `accessibility_impact: low`
- `security_impact: medium`
- `security_change: closes`
- `security_consequence.threat_blocked_or_opened`: "Closes cross-user
  contamination on shared threads (peer-id in cache signatures) and
  credential bleed on provider fallback (isolated credential pool)."
- `security_advisory: true` — multi-user gateway operators must
  upgrade past the 2026-05-21+ commits.
- `why_action_bearing`: "Multi-user gateway operators should upgrade
  past the Honcho commits (week of 2026-05-21) and the credential-
  pool isolation commit (2026-05-27)."
- `finding_ids: [2026-05-27-hermes-v0.14.0-foundation-release]`

**Signal 4: `2026-05-27-hermes-kanban-corruption-hardening`**
- `section: runtime` (SQLite hardening on the runtime persistence
  primitive — the audit's deferred-list already gestures here)
- `accessibility_impact: none`
- `security_impact: low`
- `security_change: closes` (torn-write corruption resistance)
- `why_action_bearing`: "Kanban-dependent multi-agent operators should
  treat the post-v0.14.0 line as the integrity-floor baseline; the
  corruption-hardening volume is the signal."
- `finding_ids: [2026-05-27-hermes-v0.14.0-foundation-release]`

### Why this is a better artifact

- Every signal's section assignment is defensible against Rule 5.
- Every `accessibility_consequence.what_got_easier` field names *one*
  concrete operator action.
- The `security_change` enum honestly records closes/opens/reframes
  per signal; no signal carries a contradictory close-and-open.
- The `security_advisory: true` flag attaches precisely to the two
  signals where it applies (proxy, Honcho), not to the composite.
- Bitter as primary consumer can now query "show me all control-plane
  signals with `security_advisory: true` in this window" and get the
  Hermes proxy and Honcho rows — not the composite. The schema's
  query promise (`CHARTER.md:97–104`) is restored.
- The digest's `top_signal_ids` budget should probably *not* include
  all four; the lower-impact two (Kanban, perhaps distribution) belong
  in the digest body without top-signal billing. The decomposition
  also lets the editor draw that line honestly — the composite forced
  all four into one top-signal slot.

### Tempting alternative to reject

It is tempting to *combine* the proxy and Honcho signals into a single
"identity and routing" control-plane signal because they share a
multi-user-gateway-operator audience. I would reject this: they are
distinct decisions (audit proxy bind vs. upgrade past specific commits),
require different verification work, and one is `security_change:
opens` while the other is `security_change: closes`. Sharing audience
is not sharing decision.

### Conclusion on §5

The retroactive decomposition produces strictly better artifacts on
every doctrinal axis the contract names: section routing fidelity,
accessibility-block queryability, security-change honesty, and
advisory-flag precision. Hermes v0.14.0 is the **right** canonical
first example. If anything, it is suspiciously good — the example was
constructed to break under composite handling, and the audit note's
framing ("the awkward shape") was clear-eyed about it.

A weaker first example (say, a release where one consequence dominates
and the others are minor) would not prove the rule. Hermes v0.14.0
proves it.

## 6. Other findings worth surfacing

- **Amendment 005 should explicitly tie itself to amendment 004.** The
  current text mentions amendment 004 indirectly (the per-signal
  `section` and consequence blocks). The argument
  "amendment-005 is the implementation of amendment-004's
  one-consequence-per-section premise" is the strongest doctrinal
  argument for the amendment and the amendment does not make it.
- **The amendment's relationship to amendment-006 (composition) is
  under-explored.** Both amendments touch the signal-multiplicity
  question. A composite finding under amendment-005 may also need
  `composes:` under amendment-006 (e.g., the Hermes proxy signal
  composes with Codex/Aider/Cline/Continue per the
  amendment-006 draft). The two amendments interact cleanly in
  principle — composes is a per-signal field, decomposition gives
  each signal its own `composes` array — but the order of ratification
  matters: ratify 005 first; 006 then has clean per-decision signals
  to attach `composes:` arrays to. Amendment 005 should briefly note
  this ordering preference.
- **The audit note's framing is mildly self-serving.** The audit (lines
  64–76) recommends amendment 005 *and* implements an "(a)-light"
  partial workaround in the same run. That is the right call for the
  loop's "do not self-commit doctrine" discipline (per
  `AGENTS.md:147–154`), but the partial workaround means the on-disk
  artifact carries doctrine violations (Rule 5 cross-section bullets;
  contradictory security_change). The amendment's ratification commit
  should include the retroactive decomposition explicitly to leave the
  repo clean — and amendment-005 already specifies this in step 5 of
  Applied To (`amendment-005:127–133`). Good.
- **The "Rejection criteria" section is honest but light.** The named
  failure modes (noise, arbitrary splits, cross-signal navigation
  needs) are real. I would add one more: "If retroactive decomposition
  reveals that the four-bullet composite was hiding routing decisions
  the publication is not ready to make (e.g., `section:
  control-plane` vs. `runtime` ambiguity on the same operator
  consequence), the amendment should pause until amendment 004's
  routing rules are sharpened first." This is the latent risk: 005
  exposes 004's routing edges that the composite shape was masking.

## 7. What I would change in the amendment text before ratifying

1. **Reframe the Summary** to make the asymmetry explicit: finding
   shape is unchanged, signal granularity tightens. (§1)
2. **Add an "Ownership" sub-section** specifying which fields the
   finding owns versus which fields each derived signal owns. (§4)
3. **Replace the bullet-count heuristic** with a decision-shape test;
   keep bullet count as a check trigger, not a rule. (§3)
4. **Surface the amendment-004 conflict explicitly** — composite
   signals violate Rule 5 by construction; this amendment closes that
   latent violation. Make this the lead argument in the **Why**
   section. (§2)
5. **Note the `security_change` enum incoherence** on composite
   signals as a second hidden conflict with amendment 004's schema.
   The current Hermes signal demonstrates it (closes-and-opens at
   once). (§5)
6. **Briefly name the ordering preference vs. amendment-006**
   (composition findings). 005 should ratify first so per-decision
   signals exist to carry per-decision `composes:` arrays. (§6)
7. **Tighten the Hermes retroactive plan** by naming the four
   target signals and their sections explicitly, so the ratification
   commit is a mechanical apply rather than a fresh editorial
   judgment under time pressure. The amendment currently lists
   four illustrative IDs (`amendment-005:90–94`) but does not name
   their sections, advisory flags, or `security_change` values.

## 8. Doctrinal-fit summary

Amendment 005 *fits* the existing charter and research contract better
than the proposal itself realizes. It is more accurately framed as
**the corrective amendment that closes amendment-004's latent
routing-rule conflict on composite signals**, not as a new
granularity rule. With the revisions above, it becomes a cleaner
doctrinal piece and a stronger ratification.

The retroactive Hermes decomposition is the right first canonical
example. The schema needs no changes. The integrity checker needs no
changes. The downstream digest needs a top-signal-budget rebalance
that the amendment should mention but does not require structurally.

I would not ratify the amendment in its current text. I would ratify
the amendment with the revisions listed in §7.

## Recommendation

`ratify-with-revisions`

Revisions required:

1. Reframe Summary to make finding-shape-unchanged vs.
   signal-granularity-tightens asymmetry explicit (§1).
2. Add an Ownership sub-section partitioning finding-owned fields
   from signal-owned fields (§4).
3. Replace the `> 3 items in why_action_bearing` heuristic with a
   decision-shape test; keep count as a trigger to check, not a
   splitting rule (§3).
4. Make the amendment-004 Rule 5 conflict the lead argument in
   **Why**: composite signals violate Rule 5 by construction; this
   amendment closes that latent violation (§2).
5. Name the `security_change` enum incoherence on composite signals
   (closes-and-opens at once on the current Hermes signal) as a
   second hidden conflict with amendment 004's schema (§5).
6. Note the ratification-ordering preference with amendment-006
   (composition findings): 005 ratifies first (§6).
7. Tighten the Hermes retroactive plan: name the four target signals
   with their sections, advisory flags, and `security_change` values
   explicitly, so the ratification commit is a mechanical apply
   (§5, §7).
