# Council Review: Amendment 006 — Closed-World Assumption on `composes:`

- Reviewer angle: closed-world assumption on `composes: [...]`
- Subject: `charter/proposed/amendment-006-composition-findings.md`
- Date: 2026-05-27
- Posture: source-bound, skeptical of unforced friction; recommend
  changes before ratification

The amendment proposes a `composes: [<source_id>, ...]` field on findings
and signals. Integrity-check rule 1 requires every entry to resolve
against `sources/index.yml`. The amendment's own Applied To section
acknowledges the rule already bites: the 2026-05-27 Hermes finding is
the canonical case of a composition the schema cannot represent
(`hermes proxy` routes to Codex CLI / Aider / Cline / Continue; three
of the four targets are not on the watchlist), and the amendment
defers it by omitting `composes:` on that finding entirely.

This review pressure-tests whether the closed-world rule is the right
default, given the data the publication already has on hand.

## 1. How often does composition with non-watchlist sources come up?

Total findings on disk: 38 files across all runs.

Scanning findings 2026-04-22 through 2026-05-27 for cases where the
*operator consequence* (not a passing mention) touches a tool the
watchlist does not cover. Findings where composition with a
non-watchlist tool is the structural shape:

1. `2026-05-27-hermes-v0.14.0-foundation-release` — `hermes proxy`
   routes Codex CLI / **Aider** / **Cline** / **Continue** through a
   Hermes OAuth subscription. Codex is on the watchlist; the other
   three are not.
2. `2026-05-12-paperclip-secrets-vaults-and-cursor-cloud` —
   `cursor_cloud` adapter drives **Cursor**'s hosted-agent platform
   through `@cursor/sdk`; Paperclip can route work to local Cursor and
   cloud-hosted Cursor. Cursor is not on the watchlist.
3. `2026-05-12-paperclip-secrets-vaults-and-cursor-cloud` (same
   finding, separate vector) — **AWS Secrets Manager** as the first
   external credential backend (provider vaults, remote import).
4. `2026-05-12-paperclip…` (third vector) — `cursor_cloud` plus
   **Daytona**, **exe.dev**, **Cloudflare** as sandbox providers
   (joining E2B).
5. `2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets` —
   **Modal** added as sandbox provider plugin (joins E2B, Cloudflare,
   Daytona, exe.dev). ACPX-Claude adapter respects
   `~/.claude/settings.json` (claude-code is on the watchlist).
6. `2026-05-07 OpenHands commit harvest` — self-hosted **GitLab**
   support; **Slack** / **Jira** / **GitLab** integration work.
7. `2026-05-27-openhands-acp-ui-and-org-llm-profiles` — Azure DevOps
   (via Entra), Jira DC, Bitbucket DC integration suite. The ACP
   front-end portion composes with Claude Code / Codex / Gemini CLI
   (all watchlist).
8. `2026-05-12 flue (v0.5.x)` — Cloudflare AI Gateway integration on
   the Cloudflare deployment target; Daytona/E2B as sandbox classes.
9. `2026-05-06 hermes-agent` and `2026-05-07 commit-harvest hermes` —
   provider/AI Gateway integrations (DeepSeek, Cloudflare Workers AI,
   Cloudflare AI Gateway, Moonshot, Mistral) as model-route surfaces.
10. `2026-05-27-codex-permission-profile-inheritance-and-managed-requirements`
    — managed `requirements.toml` "via a central distribution
    mechanism? Signed?" question is open; the distribution layer
    composes with whatever org tooling the operator runs.

Of the 38 findings, **at least 9–10 contain operator consequences that
materially touch a tool not on the watchlist**. That is roughly
**25–30 percent** of total findings. Of the 11 findings in the most
recent weekly digest (2026-05-27), **2 of 11 (Hermes proxy, Paperclip
sandbox/ACPX)** explicitly run into the closed-world wall — the
amendment names the Hermes case directly.

Crucially the pattern is concentrated in three providers (Paperclip,
Hermes, OpenHands) and one Tier-2 source (Flue). Those four
providers are the ones whose product shape is *explicitly* about
composing with other tools — Paperclip and OpenHands as control
planes, Hermes as a credential router, Flue as a programmable
harness across deploy targets. The amendment correctly identifies
this as a structural pattern; it incorrectly underestimates how often
the composition target is outside the watchlist.

The amendment's Rejection Criteria #3 already names this: *"The
watchlist gains many composition targets that are not on the
watchlist (Aider, Cline, Continue, third-party tools). If the
closed-world assumption fails, the integrity check needs to soften…"*
The data already shows it failing. The amendment as written defers
the resolution to a future re-proposal, but the failure is current,
not prospective.

## 2. Alternatives the amendment does not name

The amendment names two options: (a) list only watchlist sources, (b)
add non-watchlist tools to the watchlist. There are at least three
others worth considering:

**(c) Namespaced sentinel — `external:<name>`.** A finding could
declare `composes: [codex, external:aider, external:cline,
external:continue]`. The integrity checker validates that bare ids
resolve against `sources/index.yml` and that `external:` entries are
non-empty strings drawn from a small allowlist
(e.g. `external-tools.yml`). This preserves the integrity-check
discipline (no free-text typos) while admitting that the watchlist is
a deliberately bounded set and adjacent tools exist.

**(d) Free-text `composes_external: [...]`.** A separate optional
field with no integrity check, prose-equivalent. This is the lowest-
discipline option; it duplicates what the finding body already says
and creates two surfaces for the same claim. Worse than (c) and
worse than the current closed-world rule. Mentioned for
completeness; not recommended.

**(e) Adjacent-tools index distinct from `sources/`.** A
`sources/adjacent.yml` file (or equivalent) registers tools that
appear as composition targets but are not themselves harvested. Each
adjacent tool has a single line: id, canonical name, URL. The
integrity checker accepts ids from either index. This formalizes the
distinction between *"a tool we watch"* and *"a tool we name in
composition claims"* — which is the distinction the closed-world
rule conflates.

**(f) Open-world with referenced-id discipline.** `composes: [...]`
entries are strings; the integrity checker requires each to be lower-
case, hyphenated, and present in **either** `sources/index.yml`
**or** a `composition_targets:` set in the run manifest. Each run
declares which non-watchlist tools it touches; the integrity check
catches typos against the per-run set, and the global index of
composition targets is reconstructable from run manifests. This
preserves "no free text" without forcing a permanent watchlist
expansion.

Of these, **(c) and (e) are the strongest alternatives.** Both
preserve integrity-check value (no `composes: [aiderr]` typos) while
respecting that the watchlist is a deliberate small set. (c) is
lower-ceremony; (e) is more structured and supports future site
rendering ("composition with adjacent tools" as a distinct render
class).

## 3. Cost of expanding the watchlist

`AGENTS.md` lines 191–229 describe the watchlist as deliberately
small. Each entry has:

- a source contract (`sources/<id>.yml`) defining primary surfaces,
  accepted evidence, rejected evidence, change types, ambiguity
  handling, citation requirements
- a notes file (`sources/<id>.notes.md`) carrying calibration role
- a profile (`content/profiles/<id>.md`) refreshed each cycle with
  three or more active claims at or above the evidence floor
- a harvest budget per run (the 2026-05-27 weekly digest used roughly
  12 WebFetch calls + 16 `gh` calls = ~28 calls split across
  10 sources; per-source budget is small)
- inclusion in the autonomous-loop convergence target
  (`AGENTS.md` §"Operational Target"): coverage, depth, freshness,
  per-source council review

To add Aider, Cline, Continue, E2B, Cloudflare Workers AI, Daytona,
Modal, Cursor (and the enterprise DC integrations Jira DC, Bitbucket
DC, Azure DevOps) to the watchlist purely to satisfy `composes:`
would roughly double the watchlist size. That is:

- ~10 new source contracts to write and maintain
- ~10 new profiles to seed, refresh, and council-review
- a harvest budget that quadruples (per `AGENTS.md` source-contract
  posture, each contract anchors a primary-surface read; if half the
  new entries are sandbox providers with no `agent` shape, they would
  fail several existing axis fields and force schema special-casing)
- and — most importantly — would change what Bitter Frontier *is*.
  The watchlist is `Codex, Claude Code, Gemini CLI, Hermes Agent, Pi
  coding agent, OpenClaw, Paperclip, Agent Zero, OpenHands, Flue` —
  these are agentic coding harnesses, control planes, and one
  programmable-harness reference. Aider/Cline/Continue are also
  agentic coding tools (would fit) but E2B/Daytona/Modal are
  sandbox-as-a-service primitives, not harnesses; Cursor is an IDE;
  GitLab/Jira/Bitbucket are dev-infra products that an agentic
  harness *uses*, not products in the watched category.

`CHARTER.md` line 16: "The current watchlist is Codex, Claude Code,
Gemini CLI, Hermes Agent, Pi coding agent, OpenClaw, Paperclip, Agent
Zero, and OpenHands. The canonical index lives in `sources/`."
The watchlist's category boundary is *agentic coding harnesses and
adjacent control-plane / programmable-harness calibration sources*.
Sandbox providers, IDEs, and code-hosting platforms sit outside that
boundary by design.

**Conclusion**: expanding the watchlist to satisfy `composes:` is the
wrong move. It costs harvest budget, dilutes editorial focus, and
crosses the category boundary the charter implicitly draws. The
amendment's rejection-criteria #3 anticipates this; the data confirms
it.

## 4. Asymmetric composition — `touches Aider` vs. `is about Aider`

The Hermes finding says `hermes proxy` routes to Aider / Cline /
Continue. The finding is *about* Hermes. Aider's release cadence,
posture, and roadmap are irrelevant to the claim; what matters is
that Hermes now exposes an OAuth-backed OpenAI-compatible endpoint
those tools can drink from.

The closed-world rule treats `composes: [aider]` as an integrity-
graph reference — "look up aider in the source index and link." But
the actual semantic of the composition claim is one-directional:
Hermes *names* Aider as an example consumer; the publication is not
claiming anything about Aider as a tool.

For the integrity checker to be useful here, it would need to know
the difference between "this composes-id is a sibling first-class
subject" and "this composes-id is a downstream consumer named by way
of illustration." The closed-world rule cannot distinguish: it
demands both kinds resolve identically.

Option (e) (adjacent-tools index) handles this naturally: an entry in
`sources/adjacent.yml` for `aider` carries no profile obligation, no
evidence floor, no harvest cadence. It exists purely as a referent.
Option (c) (`external:aider`) handles it equally well with less
ceremony.

The amendment's `composes:` field is fundamentally about asymmetric
references. The closed-world rule treats them as symmetric. That is
the principled error.

## 5. Per-vector vs. per-finding `composes:`

The amendment's Applied To #4 makes the per-finding choice explicit:
*"`composes: [claude-code]` (for the ACPX-Claude × settings.json
part — the field is finding-level, not per-vector, so the composition
applies to the finding as a whole)."*

The Paperclip 2026-05-27 finding has five distinct vectors:
1. Scoped agent permissions + protected assignments (no composition)
2. Routine env secrets with precedence (no composition)
3. Board-managed document locks (no composition)
4. Modal as first-party sandbox plugin (composition with Modal)
5. ACPX-Claude adapter respects `~/.claude/settings.json`
   (composition with claude-code)

Putting `composes: [claude-code]` at the finding level *understates*
the Modal composition (vector 4 is invisible to the integrity graph)
and *overstates* the claude-code composition (the reader filtering by
"claude-code adjacency this fortnight" lands on a finding where 4 of 5
vectors have nothing to do with claude-code).

The amendment acknowledges this implicitly ("per-vector, not per-
finding") and chooses per-finding for simplicity. That choice
breaks the operator query the amendment exists to serve. The
operator who asks *"what changed in Claude Code's adjacency this
fortnight?"* (amendment §Why, query 1) lands on a finding mostly
about Paperclip's governance generalization, not the permission-
file composition.

This is the right argument for amendment 005's signal-decomposition
discipline to land first or alongside. If signals are operator-
consequence-shaped (one consequence per signal) and `composes:`
attaches at the signal level, the granularity matches: the signal
"Paperclip ACPX-Claude defers to settings.json" carries
`composes: [claude-code]` and nothing else; the signal "Modal sandbox
joins the plugin roster" carries `composes: [modal]` (or whatever
adjacent-tools id resolves Modal) and nothing else.

**Recommendation**: `composes:` belongs on the signal, not the
finding. If the amendment must keep it on the finding for schema
consistency, the integrity checker should at minimum warn when a
finding has more than one vector and a `composes:` array that
covers fewer than all of them.

## 6. Interaction with amendment-005

Amendment 005 (`finding-signal-granularity`) is sitting in
`charter/proposed/` alongside 006. They were proposed in the same
audit note from the same run. They solve adjacent problems:

- 005: composite findings should produce N signals, not one
  composite signal.
- 006: composition (cross-subject) needs schema representation.

If 005 lands, `composes:` becomes naturally per-signal: each signal
already names a single operator consequence; the composition claim is
the relational shape of that one consequence; the signal carries the
`composes:` array for its consequence only. The per-vector concern
from §5 evaporates.

If 005 does *not* land and 006 does, the Paperclip example
demonstrates the field is structurally underspecified.

**Strong recommendation**: ratify 005 before 006, or ratify them
together. Ratifying 006 alone reintroduces the granularity awkwardness
the same audit note already identified.

## 7. What I would change before recommending ratification

In order of importance:

1. **Drop the closed-world rule, or split the integrity surface.**
   Either (a) integrity-check `composes:` against
   `sources/index.yml` ∪ `sources/adjacent.yml` where
   `sources/adjacent.yml` is a low-ceremony index of referent-only
   tools (id, canonical name, optional URL — no contract, no profile,
   no harvest cadence), or (b) accept `external:<id>` sentinels
   alongside watchlist ids, with the sentinel half registered in a
   `composition-targets.yml` set.
   - The Hermes finding gets `composes: [codex, external:aider,
     external:cline, external:continue]` (or
     `composes: [codex, adj:aider, adj:cline, adj:continue]` —
     bikeshed the prefix later).
   - The Paperclip Modal vector gets `composes: [external:modal]`.
   - The Paperclip ACPX vector gets `composes: [claude-code]`.
2. **Move `composes:` to the signal level, not the finding level.**
   This depends on amendment 005 landing first or together. The
   per-vector breakage in §5 is the load-bearing argument.
3. **Defer the integrity rule that `composes:` cannot contain the
   source's own id.** Self-composition is structurally absurd, but
   the rule's value is small; it adds a check and a corresponding
   integrity-error path that the checker would essentially never
   fire. Recommend keeping but treating as low-priority polish.
4. **Name the rendering rule for non-watchlist composes-ids.** The
   amendment says provider profile pages render "Inbound composition"
   for *the profile's source*. If `composes:` admits adjacent tools,
   adjacent tools do not have profile pages. The rendering needs to
   say what happens: a flat "adjacent composition targets" page, or
   no inbound-composition surface for adjacent tools at all
   (acceptable since they are not first-class subjects).
5. **Re-frame the Hermes case in the Applied To section.** Instead of
   "this run uses the conservative option: omit `composes:` on the
   Hermes finding pending the watchlist decision," the resolved
   amendment should be able to show what the Hermes finding's
   `composes:` array actually looks like.

## Risks of the amendment as written

- The amendment's own rejection criteria #3 is already met by current
  data. Ratifying as-is means accepting friction that will resurface
  immediately (in the next cycle if not this one).
- Forcing the watchlist to grow to satisfy the schema crosses a
  category boundary the charter implicitly maintains. The "deliberate
  small watchlist" stance survives because the editorial discipline
  per-source is high; a doubled watchlist will dilute that
  discipline or burn harvest budget.
- The closed-world rule under-specifies the per-vector composition
  case (§5) and over-specifies the asymmetric reference case (§4).
  Both are present in the existing finding corpus.

## What ratification-as-is would buy

- A queryable composition field, which is real value (the amendment's
  §Why is right that the operator query "what changed in Claude
  Code's adjacency" is currently unanswerable by query).
- Schema-level vocabulary for cross-product claims, which is
  inevitable as the watchlist matures.
- Forced conservatism on the Hermes case (the proposal omits the
  field rather than admit non-watchlist targets) is honest about the
  rule's limit.

The value is real. The rule that ships with it is too strict.

## Recommendation

`ratify-with-revisions`. The revisions, in priority order:

1. **Replace the closed-world rule** with adjacent-tools support
   (either `sources/adjacent.yml` + integrity check against both
   indices, or `external:<id>` sentinels with a referent allowlist).
   The closed-world rule fails on present data; ratifying it
   guarantees re-proposal in the next cycle.
2. **Block on amendment-005 landing first or together.** Move
   `composes:` to the signal level so per-vector composition is
   representable. If 005 stalls, 006 should be paused until the
   granularity story is coherent.
3. **Author the Hermes example in the Applied To section** instead of
   deferring it. The amendment's own canonical case should be
   resolvable under the rule it proposes.
4. **Specify rendering for adjacent-tool composition.** A flat
   adjacency render or explicit "no inbound view for adjacent
   tools" — either is fine; silence is not.
5. Keep the bidirectional-rejection clause (the amendment correctly
   resists requiring bidirectional composition; that is the right
   call).

With those changes the field becomes a clean, low-ceremony piece of
schema that answers a real operator query without forcing the
watchlist to grow into a category it does not want to occupy.
