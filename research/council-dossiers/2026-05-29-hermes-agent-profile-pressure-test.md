# Council Dossier: macro_1459ac5a-24dc-4aa1-9244-40f52b6b01e7

## Context
- question_source: file
- question_file: /tmp/bitter-council-prompts/hermes-agent.md
- cwd: /Users/c3po/co/bitterfrontier
- model_policy: {"codex_model":null,"codex_config":["model_reasoning_effort=xhigh"],"synthesis_codex_model":null,"synthesis_codex_config":["model_reasoning_effort=xhigh"],"claude_model":null,"gemini_model":null,"reviewers":["codex"],"synthesizer":"codex","child_timeout_ms":900000,"name":"hermes-agent-profile-2026-05-29"}

## Question
# Bitter Frontier — Hermes Agent profile council pressure-test

## Context

Bitter Frontier (`https://frontier.bitter.sh`) is a research-and-publication
surface watching frontier coding-agent harnesses. The house rule is:

> No frontier claim without an operator consequence.
> No operator consequence without a receipt.
> No signal unless it can change the next action.

The Hermes Agent profile (`content/profiles/hermes-agent.md` in the
`bitterfrontier` repo) carries `surface_class: open_source_commits` and
`evidence_floor: release_note`. There are seven profiles in this
surface_class; this profile was picked for council pressure-test because
it carries the freshest amendment-006 composition surface and a recent
4-way signal decomposition under amendment-005.

This council is the external-review pressure-test for
`open_source_commits`. You are asked to act as an independent reviewer
(Codex, xhigh reasoning effort).

## Current stance (paraphrased from the profile)

The recent editorial reframe positions Hermes Agent as a *distribution
primitive, provider router, and identity layer* — moving away from the
"broad-surface personal agent" framing in earlier profile revisions.

## Recent signal shape

Under ratified amendment-005, the v0.14.0 "Foundation Release" finding
was decomposed into four operator-consequence-shaped signals:

1. `2026-05-27-hermes-pypi-and-windows-beta-distribution` (platform)
2. `2026-05-27-hermes-proxy-credential-router` (control plane, opens)
3. `2026-05-27-hermes-honcho-identity-and-credential-isolation`
   (control plane, closes; `security_advisory: true`)
4. `2026-05-27-hermes-kanban-corruption-hardening` (runtime)

Under ratified amendment-006, the underlying finding
`2026-05-27-hermes-v0.14.0-foundation-release` carries
`composes: [codex, aider, cline, continue]`. The first is a watchlist
provider; the last three resolve to `sources/adjacent.yml` entries.

## Four claims to pressure-test

Defend or refute each claim below. For each, name either a missed
nuance in the editorial prose or a piece of overclaim, and give one
operator-facing recommendation.

### Claim 1 — "v0.14.0 reframes Hermes from broad-surface personal agent to distribution primitive."

The release shipped many things: 808 commits, 633 merged PRs, multiple
structurally distinct vectors. The editorial reframe picked
"distribution primitive" (PyPI + Windows beta + Zed registry listing)
as the headline.

Defend or refute: is the reframe over-confident? Among the four
vectors that decomposed into signals, which one is actually the most
operator-consequential — and is the profile naming the right one as
the headline?

### Claim 2 — "`hermes proxy` makes Hermes a credential router for any OpenAI-compatible tool."

Signal `2026-05-27-hermes-proxy-credential-router` positions
`hermes proxy` as a structural shift in Hermes's adjacency to other
watched providers: Codex CLI, Aider, Cline, Continue can all route
through a Hermes subscription instead of maintaining separate API
keys.

Defend or refute: does the proxy materially change Hermes's adjacency
to other watched providers, or is it a feature that will see narrow
operator adoption? Bonus: is the auth model named honestly enough
(profile and signal hedge that bind address and default-loopback
posture are not enumerated in the PR body)?

### Claim 3 — "Honcho identity-mapping is upgrade-blocking."

The signal
`2026-05-27-hermes-honcho-identity-and-credential-isolation` carries
`security_advisory: true`. Under ratified amendment-005, the definition
of `security_advisory` is paraphrased:

> Left unaddressed, this defect can be exploited; upgrade before the
> next deployment of this surface.

The Honcho commits (`0bac8809`, `58987cb8`, `c03960de`, `6feb2afd`,
week of 2026-05-21) add identity-mapping primitives that prevent
shared-thread peer contamination and isolate the credential pool on
provider fallback.

Defend or refute: does Honcho identity-isolation qualify as
upgrade-blocking under amendment-005's definition? Or does the signal
posture stretch the `security_advisory` boundary by treating a
correctness fix as exploitable in a way the amendment did not intend?

This claim doubles as a pressure-test of the freshly-ratified
amendment-005 definition itself. If the council finds the boundary
unclear, that is doctrine work.

### Claim 4 — "The composes choice on the foundation-release finding is correct."

The finding carries `composes: [codex, aider, cline, continue]`.

Defend or refute the inclusion of each element:

- **codex** — `hermes proxy` mediates Codex CLI as one of its
  routing targets. Is "compose" the right relational verb? Codex is
  not modified by Hermes; it is routed through Hermes.
- **aider, cline, continue** — adjacent tools that adopt
  OpenAI-compatible endpoints. Same routing question; same
  relational-verb pressure.

Are there providers the composes array *misses* (Continue.dev's own
gateway; Cursor; OpenHands ACP backend)? Or is the closed-world
finding correctly scoped to providers Hermes actually demonstrated
routing for in the v0.14.0 release notes?

This claim doubles as a pressure-test of amendment-006's composition
semantics. Pressure on whether the relational verb "compose" extends
to a routing-target relationship.

## Required answer shape

- Per claim: verdict (sustain / refute / partial), reasoning, operator-facing
  recommendation.
- A single overall verdict on whether the profile's current stance is
  defensible as written for the next refresh cycle.
- Any missed nuance the profile should add.
- Any over-claim the profile should retract.
- For claims 3 and 4: name explicitly whether the pressure surfaces
  doctrine work (amendment refinement) or only profile-editorial work.

## Source handles

- Profile: `content/profiles/hermes-agent.md` in `bitterfrontier`.
- Recent signals:
  - `2026-05-27-hermes-pypi-and-windows-beta-distribution`
  - `2026-05-27-hermes-proxy-credential-router`
  - `2026-05-27-hermes-honcho-identity-and-credential-isolation`
  - `2026-05-27-hermes-kanban-corruption-hardening`
- Underlying finding: `2026-05-27-hermes-v0.14.0-foundation-release`
  in `runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/findings/`.
- Source contract: `sources/hermes-agent.yml`.
- Adjacent index: `sources/adjacent.yml`.
- Amendments: `charter/ratified/amendment-005-finding-signal-granularity.md`,
  `charter/ratified/amendment-006-composition-findings.md`.
- House rules: `CHARTER.md`, `RESEARCH_CONTRACT.md`, `AGENTS.md`.

## Quality target

Surface at least one finding the editor should fix, reword, or
sharpen — and, if pressure surfaces a definitional boundary on
amendment-005 or amendment-006, name it explicitly. The convergence
target benefits from useful corrections; an amendment refinement is
the most valuable outcome.

## Research Outputs
- research_codex: ok -> child_runs/research_codex/output.jsonl

## Review Outputs
- review_codex: ok -> child_runs/review_codex/output.jsonl

## Synthesis
I’ll use the `charterwright` skill here because this is a profile/doctrine pressure-test. I’m going to read only the governing docs and named Hermes artifacts needed to validate the claims.The governing docs confirm the review should stay split between profile prose, signal schema, and doctrine. I’m now reading the Hermes profile, source contract, amendments 005/006, and the v0.14.0 finding/signals so I can reject or sustain each claim against receipts rather than the paraphrase alone.One important source-check already surfaced: the profile/finding say the proxy PR body does not enumerate bind/auth posture, but the PR body does show `--host 127.0.0.1` and says client `Authorization` headers are accepted and stripped. That changes the review from “unknown” to “default loopback is evidenced, auth is intentionally permissive at the client side.”The remaining disagreement is not symmetrical: distribution is defensible as the adoption headline, proxy is the composition/control-plane headline, and Honcho is only upgrade-blocking for a scoped multi-user deployment class. I’m grabbing exact local line handles now so the answer can point the next worker at the right edits.**Overall Verdict**
The stance is defensible only with revisions. The main thesis should be “Hermes is now an installable provider-router with identity/isolation work,” not “Hermes moved away from broad-surface personal agent.” The profile still correctly says Hermes remains broad-surface, but the finding headline over-centers distribution and one proxy source-check is wrong.

**Claim 1 — Partial**
Distribution is a defensible public headline: v0.14.0 itself leads with install-anywhere, `pip install`, lazy deps, Windows beta, Zed ACP, and the proxy. But it is over-confident if read as replacing the broad-surface personal-agent frame; the release also expands messaging/platform surfaces and provider routing. The most operator-consequential vector depends on operator class: distribution is broadest adoption impact, proxy is the strongest frontier/composition shift, Honcho is the sharpest deployment-safety gate. Recommendation: headline the profile as “distribution plus provider routing,” and keep “broad-surface personal agent” as current state, not retired state. See [profile](/Users/c3po/co/bitterfrontier/content/profiles/hermes-agent.md:106), [finding](/Users/c3po/co/bitterfrontier/runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/findings/hermes-v0.14.0-foundation-release.md:37), and the release notes. 

**Claim 2 — Partial**
`hermes proxy` materially changes adjacency, but “any OpenAI-compatible tool” should be bounded to named/wire-compatible clients and supported upstream paths. The source does support Codex/Aider/Cline/Continue/custom scripts, but the PR says “Nous Portal today, more providers later,” so universal provider routing is too broad. The auth/bind hedge is not honest enough: the PR body does name default `--host 127.0.0.1` and says it accepts then strips any client `Authorization` header before attaching Hermes OAuth upstream. Recommendation: keep the signal, but replace “PR body does not detail bind address or auth model” in profile/finding/signal with the actual source-backed posture and keep “verify before non-loopback exposure.” See [signal](/Users/c3po/co/bitterfrontier/runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/signals/frontier-signals.yml:483) and PR #25969. 

**Claim 3 — Partial, Doctrine Work**
Honcho identity isolation can qualify as upgrade-blocking, but only for the scoped deployment class: multi-user gateways using shared threads and provider fallback. It is not merely correctness if it closes cross-user contamination and credential bleed, but the profile should not imply a global Hermes advisory. The current signal already scopes the action to multi-user gateway operators, which is the right shape; the doctrine gap is that `security_advisory: true` lacks required fields for affected deployment class and exploit/evidence precondition. Recommendation: keep the advisory flag only if the next pass preserves that scope; otherwise downgrade to `security_consequence` without advisory. This surfaces amendment refinement, not just profile editing. See [RESEARCH_CONTRACT.md](/Users/c3po/co/bitterfrontier/RESEARCH_CONTRACT.md:194) and [signal](/Users/c3po/co/bitterfrontier/runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/signals/frontier-signals.yml:522).

**Claim 4 — Sustain Under Current Doctrine, With Refinement**
`composes: [codex, aider, cline, continue]` is correct under amendment-006 because it explicitly includes “routes through” relationships and names Hermes proxy as the example. Codex is valid as a watchlist target; Aider/Cline/Continue are valid adjacent targets. Do not add Cursor, Continue’s own gateway, or OpenHands ACP backend unless the Hermes release/finding source names them. The nuance is semantic: “compose” here means “routing target / authority path,” not “Hermes modifies Codex.” This surfaces amendment-006 refinement work: add a relation subtype or clarify that routing-target composition is first-class. See [amendment-006](/Users/c3po/co/bitterfrontier/charter/ratified/amendment-006-composition-findings.md:20) and [finding frontmatter](/Users/c3po/co/bitterfrontier/runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/findings/hermes-v0.14.0-foundation-release.md:17).

Missed nuance to add: proxy default host/auth behavior from PR #25969; Honcho advisory scope; composition-as-routing, not modification.

Over-claims to retract: “PR body does not detail bind address or auth model”; unbounded “any OpenAI-compatible tool”; any reading that v0.14.0 stops being a broad-surface personal agent.

## Smallest Implementation Target

Patch the Hermes profile, foundation-release finding, and proxy signal to replace the incorrect proxy bind/auth uncertainty with the PR-backed default host and Authorization-stripping behavior, while keeping the operator recommendation to verify before non-loopback exposure.

## Use
- Treat this dossier as research input, not authority by itself.
- Source-check accepted and rejected claims before launching a worker.
