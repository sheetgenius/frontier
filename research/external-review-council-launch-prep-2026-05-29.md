# External-review council launch preparation

Last revised: 2026-05-29
Status: Internal scoping doc for Bitter / Bitter Frontier
Author of record: Michael Ruescher, with Claude Opus 4.7.

This doc prepares the final open item of the convergence target named
in `AGENTS.md` §Operational Target For The Autonomous Run, condition 5:

> **External review**: at least one `bitter council` pressure-test has
> been run during the autonomous run on a profile from each
> surface_class present in the watchlist (`open_source_commits`,
> `mixed_official_docs`, `closed_source_release_notes` — three council
> runs minimum).

Coverage targets — `surface_class` × profile — and the council
question per surface, are scoped below.

---

## 1. Coverage requirement

Three surface_classes exist in the current watchlist (per
`grep surface_class content/profiles/*.md` on 2026-05-29):

| `surface_class` | Profiles | Count |
|---|---|---|
| `open_source_commits` | agent-zero, flue, gemini-cli, hermes-agent, openclaw, paperclip, pi-coding-agent | 7 |
| `mixed_official_docs` | codex, openhands | 2 |
| `closed_source_release_notes` | claude-code | 1 |

Minimum: one council per surface_class. Three councils total. The
convergence target does not require pressure-testing every profile —
only one per class.

---

## 2. Picks per surface_class (with rationale)

The picks below optimize for council-pressure value: pick the profile
that has the **most editorially-loaded posture** in its class, because
that's where independent review surfaces the most. Avoid profiles that
are mechanical aggregations of release notes — those are hard to
pressure-test usefully.

### 2.1 `closed_source_release_notes` → **`claude-code`**

Only option; no rationale to defend. Council pressure-test should focus
on the most recent posture move: Auto mode default-on, the de-facto
security-advisory discipline, and the API-key-vs-cloud authority
boundary.

### 2.2 `mixed_official_docs` → **`codex`**

Picks over `openhands` because Codex's profile carries a denser
operator-posture surface — permission profile inheritance, managed
`requirements.toml`, goal mode default-on, remote computer use after
lock, plugin marketplace. OpenHands's posture is more naturally
descriptive ("front-end for other harnesses"); Codex's posture asks
operators to *decide* more, which is where council review pays off.

### 2.3 `open_source_commits` → **`hermes-agent`**

Seven candidates; the pick that creates the most value is `hermes-agent`
because:

1. It carries the freshest amendment-006 composition surface
   (`composes: [codex, aider, cline, continue]` on the foundation
   release finding; four decomposed signals under amendment-005).
2. The "distribution primitive / provider router / identity layer"
   reframing in v0.14.0 is exactly the kind of editorial posture
   judgement a council should test.
3. One of its four signals carries `security_advisory: true` (Honcho
   identity isolation). Council pressure on whether that flag holds
   under the amendment-005 definition is a worthwhile second-order
   test of the ratified amendment.

The runner-up is `paperclip` for the deferred-composes case it
exemplifies — but pressure-testing the *deferred* call is less valuable
than pressure-testing a *taken* call. Save `paperclip` for the next
round when its decomposition lands.

---

## 3. Per-surface council questions (drafts)

The `bitter council` CLI accepts a `--name <slug>` and the council
prompt is loaded from a council-dossier file. Each draft below is the
prompt body the council should receive. Each one names the *posture
question* the council is being asked to refute or sustain — not a
generic "review this profile" ask.

### 3.1 `claude-code` council question

> The Claude Code profile's current stance reads (paraphrased): *Use it
> when you want a supervised background-work system. Avoid it when you
> need fully offline workflows. The most valuable surfaces require
> Claude.ai login — API-key-only auth turns them off.*
>
> Three claims this profile makes that we want pressure on:
>
> 1. **"Auto mode default-on is a permission-posture shift, not a UX
>    polish."** Defend or refute: is the editorial framing
>    overweighting a release-note change that most operators won't
>    notice? Or is it appropriately calling out a structural
>    consent-surface removal?
> 2. **"The changelog is the de-facto security-advisory surface."**
>    Defend or refute: does promoting changelog-shape security entries
>    to advisory-equivalent over-claim governance authority for a
>    closed-source project? Or is the discipline correct because
>    operators read changelogs and don't subscribe to a separate
>    advisory channel?
> 3. **"API-key-only auth turns off the most valuable surfaces."**
>    Defend or refute: is this a temporary product reality that will
>    drift, or a durable boundary that operators should plan around?
>
> Quality target: surface either a missed nuance in the profile prose
> or a piece of overclaim, with one operator-facing recommendation per
> claim.

### 3.2 `codex` council question

> The Codex profile's current stance reads (paraphrased): *Teams
> watching closed-source coding-agent platforms for what's coming next.
> Avoid for anyone needing to fork or audit the agent itself.*
>
> Three claims we want pressure on:
>
> 1. **"Permission profile inheritance + managed `requirements.toml` is
>    a structural shift, not feature polish."** Defend or refute: does
>    framing this as a structural shift over-credit a feature that may
>    end up being one team's enforcement model, not a category move?
> 2. **"Goal mode default-on across app, IDE, and CLI is the new
>    persistent-objective baseline."** Defend or refute: is naming
>    `/goal` as a persistent objective rather than a prompt extension
>    a correct read, or is the profile trafficking in Codex marketing
>    framing?
> 3. **"Remote computer use after lock is a new authority decision."**
>    Defend or refute: is the locked-host surface materially different
>    from prior remote agent execution? Or is the locked-state framing
>    a small operational change being treated as a category event?
>
> Bonus: review the surface_class assignment. Codex carries
> `mixed_official_docs` today; is that still right given that the
> evidence_floor is `release_note` and commits/PRs are no longer
> visible? Should it move to `closed_source_release_notes` alongside
> Claude Code?

### 3.3 `hermes-agent` council question

> The Hermes Agent profile's current stance follows the recent
> editorial reframe: *distribution primitive, provider router, identity
> layer.* Four decomposed signals from v0.14.0 carry the operator
> consequences.
>
> Four claims we want pressure on:
>
> 1. **"v0.14.0 reframes Hermes from broad-surface personal agent to
>    distribution primitive."** Defend or refute: is the reframe
>    over-confident? The release ships many things; framing one of
>    those — PyPI + Windows beta — as the headline reframe is an
>    editorial judgement. Defend or correct.
> 2. **"`hermes proxy` makes Hermes a credential router for any
>    OpenAI-compatible tool."** Defend or refute: does the proxy
>    materially change Hermes's adjacency to other watched providers,
>    or is it a feature that will see narrow operator adoption?
> 3. **"Honcho identity-mapping is upgrade-blocking."** The signal
>    carries `security_advisory: true`. Defend or refute: under the
>    ratified amendment-005 definition of `security_advisory` (*"left
>    unaddressed, this defect can be exploited; upgrade before the
>    next deployment of this surface"*), does Honcho identity isolation
>    qualify? The signal posture says yes; pressure-test that.
> 4. **The amendment-006 `composes:` choice on the foundation-release
>    finding.** The finding carries `composes: [codex, aider, cline,
>    continue]`. Defend or refute: is the codex inclusion correct
>    given that the proxy mediates Codex CLI without modifying it?
>    Are there providers the composes array misses (Continue.dev's
>    own gateway, e.g.)?
>
> Quality target: at least one finding that the editor should fix,
> reword, or sharpen in the next refresh cycle.

---

## 4. What's blocking running these now

This work is **not started**. It is blocked on three concrete things,
all outside this repo:

1. **The `bitter` CLI lives at `/Users/c3po/co/bitter`**, which is
   reported in prior session state as having an unclean worktree
   pending resolution. Running `bitter council` from an unclean
   worktree risks the council artifacts being entangled with whatever
   in-progress work that tree carries. *Resolution: bring `bitter`'s
   worktree to a clean known state before running councils, OR run
   councils from a separate worktree of `bitter` at a known commit.*

2. **Cost discipline.** Per prior session record, the council budget
   cap is soft $0.20 / hard $0.50 per run. Three runs at this cap is
   ≤$1.50 hard. The `--dry-run` flag shows budget; run that first per
   council to confirm the per-run cost estimate before committing.
   *Resolution: dry-run each before live-run. If any council comes
   back over the soft cap, evaluate whether the question can be
   narrowed.*

3. **Reviewer selection.** The session record notes the council can
   run with `--reviewer codex --codex-config model_reasoning_effort=xhigh`.
   For external-review purposes, the convergence target wants
   *independent* perspective — so using the Claude-Code review path
   inside a bitter council called by Claude Code is *not* independent.
   The Codex xhigh reviewer is the right choice. *Resolution: confirm
   the Codex auth + credits before launch; the prior amendment-005/006
   ratification used the same path and reached `ratify-with-revisions`
   verdicts, so the path is known good.*

---

## 5. Suggested order and rationale

Run order, with reason:

1. **`claude-code` first.** Lowest-risk question (it's one profile, no
   composition questions, and the questions are independent of any
   amendment ratification still settling). Gives a known-good baseline
   for council output quality before spending budget on the harder
   ones.

2. **`codex` second.** Adds the `surface_class` reclassification
   question on top of three posture questions. The
   reclassification — if confirmed — is an editorial action with
   downstream implications (the profile's evidence_floor may not need
   to change, but the surface_class label does), so doing it second
   means the result can be applied before the next refresh cycle.

3. **`hermes-agent` last.** Highest-value but also highest-risk: the
   amendment-006 composes choice and the amendment-005
   `security_advisory` test are both questions that, if the council
   pushes back, could trigger non-trivial editorial work. Running it
   last means the council pipeline is already validated by the prior
   two, and the result has the freshest amendment ratification
   context to react to.

Total expected wall-clock: depends on per-council latency. Per the
session record, prior single-reviewer councils complete in minutes
with `--backend real`. Plan for 30–45 minutes of attention if all
three run sequentially with dry-run-first discipline.

---

## 6. What happens after the councils run

Each council run produces a council dossier (per the pattern of
`research/council-dossiers/2026-05-27-amendment-*`). The convention is
to file dossiers as `research/council-dossiers/<date>-<profile-slug>-<question-tag>.md`.

After all three:

1. **Apply confirmed corrections to the relevant profiles.** Per
   the existing discipline, profile edits are an editorial pass —
   not auto-derived. Edits should cite the council dossier in the
   profile's revision history.

2. **If a doctrine question surfaces** (e.g., the Codex
   `surface_class` reclassification, or a `security_advisory`
   definitional pressure), file it as either:
   - An audit note in the most recent run's `audit.md`, if it can
     wait for the next cycle; OR
   - An amendment draft in `charter/proposed/` if it would
     retroactively clean up multiple profiles or block future ones.

3. **Mark convergence-target condition 5 as satisfied** in whichever
   way the project tracks convergence-target state. Per `AGENTS.md`,
   this is the last of six conditions; the others should be checked
   for whether they've drifted.

The "two most recent cycles raise zero new doctrine-level questions"
condition (target #4) is the more uncertain one — the council passes
*may* surface new doctrine work. That's the design intent: external
review is supposed to surface things internal review missed.

---

## 7. Why I'm not running the councils in this turn

Per the project's blast-radius discipline (see `CLAUDE.md` /
`AGENTS.md` and the harness rule about confirming hard-to-reverse
actions): running three bitter councils is real spend against a real
account, and the prior-session record names a separate-worktree
concern at `/Users/c3po/co/bitter`. Both reasons argue for staging the
work via this prep doc rather than launching the runs unattended.

The user can launch the councils whenever the `bitter` worktree state
is good. The questions above are ready to drop into the
council-dossier file format.

---

## 8. One-line answer

External-review coverage requires three council runs — one per
`surface_class`. The picks are claude-code, codex, hermes-agent. The
council questions are drafted above. The launch is blocked on the
`bitter` worktree state, not on any unresolved Frontier-side work.
