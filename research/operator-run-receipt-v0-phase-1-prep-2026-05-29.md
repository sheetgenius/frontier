# Operator Run Receipt v0 — Phase 1 ship preparation

Last revised: 2026-05-29
Status: Internal scoping doc for Bitter / Bitter Frontier
Author of record: Michael Ruescher, with Claude Opus 4.7. Built on
`research/agent-receipt-spec-survey-2026-05-11.md` and the delta
`research/agent-receipt-spec-survey-delta-2026-05-27.md`.

This is a Bitter-Frontier-internal scoping artifact. The spec itself
does not live here; this doc names what lives where, drafts the
artifacts that can be drafted from this repo's research footing, and
flags the cross-repo dependencies that block ship.

---

## 1. Why this doc exists

The delta survey ended with a Phase 1 recommendation: *ship the spec
in ≤2 weeks, add Maestro as an adapter target, lead with five-neighbor
disambiguation, post an OTel SIG sketch in parallel with publication.*

That recommendation crosses repository boundaries. This doc separates
the work into:

- **In `bitterfrontier`** (this repo) — research drafts, disambiguation
  language, four-bucket taxonomy summary, OTel SIG discussion-issue
  sketch. These are research artifacts under `research/`. They do not
  become the published spec; they become the source the published spec
  is written from.
- **In Bitter** (`/Users/c3po/co/bitter`) — the canonical schema
  implementation, `bitter.macro_run.v0` (internal), the adapter
  reference implementations, and the publication of the open envelope
  (`operator.run.receipt.v0`) under whatever open-spec subdirectory
  Bitter chooses.
- **Upstream (OTel SIG)** — the discussion issue, draft PR, eventual
  semantic-convention proposal. Posted to
  `open-telemetry/semantic-conventions-genai` by a Bitter-affiliated
  contributor; the *content* of the post can be drafted here.

This doc covers only the in-repo and draft-for-upstream pieces. The
Bitter-side ship is named but not implemented here — it is the user's
call when to cut.

The Factory boundary (per `AGENTS.md`) is preserved: Bitter Frontier
observes and publishes, it does not implement adapters or operate the
spec. This doc stays on the observation side.

---

## 2. What lives where (the boundary matrix)

| Artifact | Repo | Status | Notes |
|---|---|---|---|
| Operator-side problem framing | bitterfrontier | done | research/agent-receipt-spec-survey-2026-05-11.md §1, §2 |
| Four-bucket taxonomy | bitterfrontier | done | baseline §2.1 + delta §7 |
| Five-neighbor disambiguation language | bitterfrontier | drafted below (§4) | flows into the open spec's preamble |
| OTel SIG discussion-issue sketch | bitterfrontier | drafted below (§6) | posted upstream when the open spec lands |
| `operator.run.receipt.v0` schema sketch | bitterfrontier | drafted below (§5) | becomes the open spec; lives in Bitter's open-spec subdir |
| Canonical schema doc (Markdown + JSON Schema) | Bitter | not started | open licensing; references this repo's research |
| Reference adapter — Claude Code | Bitter | not started | reads transcript + tool calls; emits envelope |
| Reference adapter — Codex | Bitter | not started | reads goal mode + permission profile + run state |
| Reference adapter — Maestro | Bitter | not started | reads verdict ledger + per-task receipt metadata |
| Reference adapter — Hermes / OpenHands | Bitter | not started | downstream of the above three |
| OTel `gen_ai.*` mapping doc | Bitter | not started | shows how an `operator.run.receipt.v0` projects into the merged memory-ops spans + the context-selection event |
| Upstream OTel SIG discussion issue | OTel repo | not posted | content drafted here |

The split discipline: anything that is *research* (what is happening,
what the disambiguation should be, what to say to the SIG) belongs in
`bitterfrontier`. Anything that is *the spec itself* or *the adapters
that read from real harnesses* belongs in Bitter.

---

## 3. The four-bucket taxonomy, condensed

For reference in any open-spec preamble. Source: baseline §2.1, delta
§7.

- **Past-tense observability** — *what happened during this run, as a
  trace.* Graduated CNCF standard (OpenTelemetry, 2026-05-21). Dedicated
  GenAI semconv repo. Memory ops merged. Bitter posture: *emit OTel for
  past-tense.*
- **Proof-tense accountability** — *what action was authorized, by
  whom, with what evidence.* Stratifying fast: compliance leg (Marques
  ASQAV), deliberation leg (Farley ACTA KU), enterprise leg
  (MS Toolkit GateRecord), payments leg (Mastercard AAR, Visa TAP).
  Bitter posture: *not our bucket; reference and disambiguate.*
- **Manifest-tense declaration** — *what an agent can do, declared in
  advance.* Consolidating around A2A AgentCard + Anthropic Agent Skills
  + AWS Agent Registry (catalog tier). Bitter posture: *the catalog is
  not the ledger; we can reference manifests, we are not one.*
- **Future-tense corrective signal** — *what the next run should do
  differently because of what this run learned.* Still empty *as a
  spec*. Tool-level claimant emerged (Maestro, 176 stars). OTel SIG
  narrowing from above (context-selection event #190; memory-systems
  proposal #200). Bitter posture: *first credible spec-layer occupant.*

---

## 4. Five-neighbor disambiguation language (draft)

This is the text the open spec's preamble should carry. Each row is
one sentence per axis: *what they are, what we are, why both should
exist.* Drafted to be transplantable into the open spec without
editorial rework.

> **`operator.run.receipt.v0` is an operator-side, cross-run,
> future-tense learning record. It is not any of these five things,
> all of which exist for good reasons:**

1. **vs Marques ASQAV compliance receipts**
   (`draft-marques-asqav-compliance-receipts`)
   *What they are:* a regulatory-anchored compliance receipt binding
   agent actions to EU AI Act Articles 12 + 26, DORA Article 17,
   NIST AI RMF, US state acts, HIPAA, SEC 17a-4, NYDFS, CIRCIA.
   *What we are:* operator-side learning across runs, not policy
   evidence for any regulatory framework.
   *Why both should exist:* compliance receipts answer *"was this
   action permitted under regulation X?"*; this spec answers *"what
   should the next run do differently?"* — orthogonal questions, both
   real.

2. **vs Farley ACTA signed receipts**
   (`draft-farley-acta-signed-receipts`)
   *What they are:* a cryptographic per-action provenance record,
   Ed25519-signed, chained across agent actions.
   *What we are:* not a per-action signature; we reference replay
   packets and tool-call records but we do not chain signatures or
   produce evidence-grade provenance.
   *Why both should exist:* signed receipts answer *"can this action's
   authorization chain be verified?"*; this spec answers *"what
   pattern from this run survives into the next?"*

3. **vs MS Agent Governance Toolkit GateRecord**
   (`microsoft/agent-governance-toolkit`)
   *What they are:* a pre-execution decision-receipt record with
   SHA-256 pre-execution hash, institutional categorization, and
   tamper-detection, designed to populate ACTA-format commitment-mode
   receipts.
   *What we are:* not a policy enforcement artifact; we record what
   the run *taught*, not what was *gated*.
   *Why both should exist:* GateRecord answers *"was this action
   allowed by policy at decision time?"*; this spec answers *"what
   correction or carry-forward should next-run honor?"*

4. **vs Mastercard Agent Action Record / Verifiable Intent and Visa
   Trusted Agent Protocol**
   *What they are:* payments-side per-action accountability records
   binding agent identity, principal, action, input/output hashes,
   cost, and timestamp to the payment rails.
   *What we are:* not per-action payment authorization; not bound to
   any payment processor or settlement layer.
   *Why both should exist:* AAR / TAP answer *"who pays for this
   action and who can dispute it?"*; this spec answers *"what does
   the operator need to remember from this run?"*

5. **vs `agentreceipts.ai` (`realalonw/agent-receipts`, W3C
   Verifiable Credentials)**
   *What they are:* an end-user-facing W3C VC framing of agent
   actions; single-action, identity-bound, VC-shaped.
   *What we are:* operator-facing, not end-user-facing; cross-run, not
   single-action; not VC-shaped.
   *Why both should exist:* VC-shaped receipts answer *"can an end user
   verify what an agent did on their behalf?"*; this spec answers
   *"what should the operator's next run carry forward?"*

The five-neighbor framing replaces the four-bucket taxonomy as the
preamble's lead. The four-bucket taxonomy moves into a "background"
section. This matches the delta's §8 Change 2 recommendation.

---

## 5. `operator.run.receipt.v0` schema sketch

This is a working sketch. The canonical schema lives in Bitter's
open-spec subdirectory once cut. Field names and shapes are subject to
refinement during reference-adapter implementation; the *shape of the
object* is what this sketch commits to.

The envelope is YAML-frontmatter + Markdown body, matching the
file-backed grammar Bitter and Bitter Frontier already use. JSON
projection is derivable per the `schema_version` registry.

```yaml
schema_version: operator.run.receipt.v0
receipt_id: <YYYY-MM-DD>-<harness>-<run-slug>
harness:
  id: <claude-code | codex | gemini-cli | maestro | openhands | hermes-agent | custom>
  version: <semver>
  surface: <cli | sdk | ui | acp-front | ...>
operator:
  id: <opaque-operator-handle>           # not PII; opaque to receipt readers
  context_window_class: <local | cloud | mixed>
window:
  started: <RFC3339>
  ended: <RFC3339>
goal:
  stated: <one-line goal as the operator framed it>
  classification: <new | repeat | resumed-from-prior-receipt>
  prior_receipt_id: <receipt_id | null>   # if resumed
authority:
  permission_profile: <profile id or short-prose summary>
  auto_mode: <enabled | disabled | per-tool>
  policy_files: [<paths or repo-ids of governing manifests>]
runtime:
  sandbox: <none | local-shell | container | sandbox-provider:<id>>
  tools_invoked: [<tool name>, ...]      # set, not log
  cost_summary:
    tokens_in: <int>
    tokens_out: <int>
    wall_clock_s: <int>
outcome:
  status: <completed | abandoned | failed | handoff>
  receipts: [<URL or repo-relative path to per-action receipts>]
  observability_target: <otel | none | other:<id>>

# The Bitter-specific bit — the future-tense payload.
# Each field below is optional; an absent field is the honest claim "no
# learning of this shape from this run."
carry_forward:
  - kind: <skill | failure-signature | environment-quirk | tool-pref | ...>
    summary: <one line>
    rationale: <one line — why next-run should honor it>
    confidence: <low | medium | high>
    evidence: [<receipt_id refs, span IDs, file paths>]
lesson:
  - kind: <correction | reinforcement | abandonment>
    about: <one line — what the lesson concerns>
    text: <prose — what the lesson is>
    confidence: <low | medium | high>
    evidence: [<receipt_id refs, span IDs, file paths>]
harness_diff:
  - kind: <prompt | tool | policy | model | sandbox | ...>
    before: <ref or one-line>
    after: <ref or one-line>
    reason: <one line>
repeat_failure:
  detected: <bool>
  signature: <hash of failure-mode fingerprint>
  prior_receipt_ids: [<refs>]
contract_level: <provisional | confirmed | retired>
evidence_origin: <self-report | tool-call | observation | external-check>
notes: |
  Free-form operator prose. Not consumed by automated readers.
```

Five drafting commitments worth naming explicitly:

1. **No mandatory cryptographic chain.** This is what separates the
   envelope from ACTA. Operators *may* sign; the schema does not
   require it. Phase 2 may add a signed-envelope profile.

2. **Operator handle is opaque.** No PII; no end-user binding. This is
   what separates from `agentreceipts.ai`.

3. **`carry_forward`, `lesson`, `harness_diff`, `repeat_failure` are
   all optional.** An honest receipt with empty future-tense fields is
   the *normal* case for routine runs. The schema only requires that
   when these fields are present, they have an evidence reference.

4. **`evidence` arrays point at past-tense receipts** (OTel span IDs,
   file paths, prior receipt IDs). This is what links the future-tense
   envelope to the past-tense substrate without re-implementing it.

5. **`harness_diff` is a first-class primitive.** This is the field
   most likely to attract OTel SIG attention (per the delta's §5.4
   read on the seam). Naming it explicitly in the envelope establishes
   the operator concern the SIG sketch will reference.

---

## 6. OTel SIG discussion-issue sketch (draft)

For posting at
`https://github.com/open-telemetry/semantic-conventions-genai/issues/new`
when the open spec lands. Drafted praise-first, operator-coherent, and
respectful of the SIG's ongoing work. Title and body:

**Title:**

> Proposal sketch: future-tense semantic conventions
> (`gen_ai.lesson.recorded`, `gen_ai.harness.diff`,
> `gen_ai.repeat_failure.detected`)

**Body (draft):**

> Filing a discussion issue, not a PR, because the design space here
> is wider than any one of us has standing to claim. Posting it to
> open the conversation.
>
> ## What this is about
>
> The recent SIG work on memory operations (PR #140, merged), context
> selection (PR #190), workflow nodes (PR #188), evaluation spans
> (PR #185), and the broader memory-systems proposal (issue #200) is
> visibly narrowing on a concern that doesn't yet have a name in the
> spec: *what the harness learned from this run that should influence
> the next one.*
>
> Today an operator running a harness can emit a clean OTel trace of
> *what happened*. They cannot emit, in the same vocabulary:
>
> - *"This run discovered a tool-call pattern next-run should reuse."*
>   (carry-forward)
> - *"This run encountered a failure mode I've seen before — same
>   signature."* (repeat-failure detection)
> - *"This run made a one-shot change to the prompt / policy / tool
>   set that future runs should inherit."* (harness diff)
> - *"This run's lesson is that approach X doesn't work for problem
>   shape Y."* (lesson record)
>
> These are operator-side, cross-run primitives. They are not memory
> operations (which #140 already covers); they are not context
> selection events (which #190 covers); they are not workflow nodes
> (which #188 covers). They are the *next-run-relevant* projection of
> what those primitives captured.
>
> ## Why post this here, now
>
> Two reasons:
>
> 1. The SIG has demonstrated in the last 16 days that it will accept
>    new namespaces when the operator concern is coherent (per PR #165
>    introducing `agent.*` for threat detection).
> 2. We (the Bitter project — disclosure below) are about to publish
>    an open-licensed envelope called `operator.run.receipt.v0` that
>    carries these primitives as first-class fields, and we'd rather
>    align early than ship a `bitter.*` schema that ends up parallel to
>    a later `gen_ai.*` proposal.
>
> ## Sketch of three candidate primitives
>
> *Not a PR. Names are placeholders; the goal is the shape.*
>
> ### `gen_ai.lesson.recorded` event
>
> Attributes:
> - `gen_ai.lesson.kind`: enum (`correction`, `reinforcement`,
>   `abandonment`)
> - `gen_ai.lesson.about`: short string — what the lesson concerns
> - `gen_ai.lesson.confidence`: enum (`low`, `medium`, `high`)
> - `gen_ai.lesson.evidence_span_count`: int — how many spans this
>   lesson references (no raw payload)
>
> The event lives at run-end. The intent is *"the harness recorded
> something the next run should consider"*; it does not carry the
> lesson's free-text payload, only the count and confidence. The
> payload lives in the operator-side receipt envelope.
>
> ### `gen_ai.harness.diff` event
>
> Attributes:
> - `gen_ai.harness.diff.kind`: enum (`prompt`, `tool`, `policy`,
>   `model`, `sandbox`, `other`)
> - `gen_ai.harness.diff.reason_class`: enum (`failure-response`,
>   `optimization`, `correction`, `experiment`)
> - `gen_ai.harness.diff.applied_at_run_id`: string (cross-run
>   reference)
>
> Names a *one-shot change* the harness made during this run that the
> operator should consider porting to future runs.
>
> ### `gen_ai.repeat_failure.detected` event
>
> Attributes:
> - `gen_ai.repeat_failure.signature`: hash of failure-mode
>   fingerprint (operator-defined hash function)
> - `gen_ai.repeat_failure.prior_run_count`: int — how many prior
>   runs saw the same signature
> - `gen_ai.repeat_failure.cross_harness`: bool — was the signature
>   observed under a different harness?
>
> Names *"this run encountered a failure mode the operator has seen
> before"*, with explicit cross-harness flag for operators who
> rotate.
>
> ## What I'm asking
>
> Three things:
>
> 1. Is this seam something the SIG would accept proposals on, or is
>    it explicitly out of scope (e.g., "operator learning belongs
>    above the trace layer")?
> 2. If in-scope: should this go under `gen_ai.*` (because the
>    artifacts in #190 and #200 are visibly adjacent) or under a new
>    `agent.*` namespace (because the concern is the *agent's
>    learning*, not the *model's call*)? PR #165 chose `agent.*` for
>    threat detection on similar reasoning.
> 3. Would a follow-up PR adding *one* of the three primitives — the
>    `harness.diff` event seems lowest-risk and most adjacent to the
>    SIG's existing concerns — be welcome as a starting point?
>
> ## Disclosure
>
> I'm posting this on behalf of the Bitter project
> (`https://bitter.sh`). We're about to publish
> `operator.run.receipt.v0` as an open-licensed envelope that carries
> these primitives. We'd rather post here first and align than ship a
> parallel schema. The open envelope and reference adapters will be
> public within the next two weeks.
>
> Happy to fold the sketch into the format and prose conventions the
> SIG prefers; happy to drop it entirely if the seam belongs
> elsewhere.

---

## 7. What still blocks Phase 1 ship

The work that lives in this repo is now drafted. What remains, and
where it lives:

1. **Bitter-side decision on the open-spec subdir layout.** Where in
   the Bitter repo does the canonical Markdown + JSON Schema live?
   What license? What `spec/` convention? Not a Bitter-Frontier
   question. *Owner: user.*

2. **Reference adapter prototypes.** At least one (Claude Code or
   Maestro) needs to be working before the spec doc can claim
   ship-readiness. *Owner: Bitter-side implementation.*

3. **OTel SIG sketch posting.** The text is drafted in §6 above. The
   posting itself is upstream-facing and should happen the same week
   the open spec lands. *Owner: a Bitter-affiliated contributor with
   an OTel-facing GitHub identity.*

4. **The brand-vs-spec naming call.** The delta recommends
   `operator.run.receipt.v0` for the open envelope and
   `bitter.macro_run.v0` for the internal Bitter implementation. This
   is a brand decision the user owns; this doc treats it as confirmed
   in §5. If the user prefers a different name, only §5 and §6 need
   re-wording. *Owner: user.*

5. **The Maestro outreach.** The delta names Maestro as a candidate
   first-adopter. Reaching out to the Maestro maintainer
   (`ReinaMacCredy`) about adopting `operator.run.receipt.v0` as a
   companion to the verdict ledger is a relationship move, not a code
   move. *Owner: user or someone designated to represent Bitter
   externally.*

None of these block work on this side; they block ship.

---

## 8. What this doc commits to (and doesn't)

This doc *commits* to:

- The five-neighbor disambiguation language as the open spec's
  preamble lead.
- The schema sketch in §5 as the shape the spec ships.
- The OTel SIG discussion-issue body in §6 as the upstream first
  message.

This doc *does not commit* to:

- The exact JSON Schema rendering of the envelope (deferred to
  Bitter-side implementation).
- The license choice (deferred to Bitter-side decision; Apache 2.0
  is the obvious candidate per the baseline survey's recommendation
  for open ecosystem adoption).
- The adapter implementation order (deferred to Bitter-side
  prioritization; the delta names Claude Code, Codex, Maestro as the
  three highest-leverage targets).

---

## 9. One-line answer

The Phase 1 prep work that lives in Bitter Frontier is now drafted:
five-neighbor disambiguation, schema sketch, OTel SIG discussion-issue
body. What remains is Bitter-side (open-spec layout, reference
adapters, license) and upstream (posting the SIG sketch). The blockers
are decisions and implementation outside this repo; the research and
drafting side is ready.

---

## Appendix — references

- Baseline: `research/agent-receipt-spec-survey-2026-05-11.md`
- Delta: `research/agent-receipt-spec-survey-delta-2026-05-27.md`
- Repo: `https://github.com/open-telemetry/semantic-conventions-genai`
- OTel PRs of interest: #140 (merged), #162, #165, #185, #188, #190
- OTel issue of interest: #200
- IETF: `draft-marques-asqav-compliance-receipts-04` (2026-05-19);
  `draft-farley-acta-signed-receipts-01` (silent);
  `draft-farley-acta-knowledge-units-00` (2026-04-06)
- Microsoft Agent Governance Toolkit:
  `https://github.com/microsoft/agent-governance-toolkit`
- Maestro: `https://github.com/ReinaMacCredy/maestro`
- agent-replay: `https://github.com/manasvardhan/agent-replay`
- Mastercard Verifiable Intent;
  Visa Trusted Agent Protocol; AWS Agent Registry.
