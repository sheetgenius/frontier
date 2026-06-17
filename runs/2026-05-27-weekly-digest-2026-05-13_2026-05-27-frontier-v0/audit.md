# Audit — 2026-05-27 weekly digest run

Run ID: `2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0`
Window: 2026-05-13 → 2026-05-27 (15 days; one fortnight)
Operator: claude-opus-4-7 (1M context)
Mode: consolidated weekly_digest

This audit records process decisions, doctrine questions raised by the
harvest, and known caveats that should travel with the run's outputs.

## Process notes

- This run consolidates findings and signals in a single run directory
  rather than orchestrating per-provider partial cycles (as the
  2026-05-12 weekly digest did across nine partial-cycle runs). Source
  material is the three parallel-subagent harvest files committed to
  `research/watchlist-harvest-2026-05-13_2026-05-27/` and the receipt
  spec landscape delta at `research/agent-receipt-spec-survey-delta-2026-05-27.md`.
  The consolidation is a deliberate simplification; if a future cycle
  needs per-provider partial-cycle granularity, the harvest files
  carry the same per-provider scaffolding.
- This is the first weekly digest produced against the full Amendment 004
  schema — every signal carries `section` (control-plane / runtime /
  platform), `accessibility_consequence` triad where impact ≥ low, and
  `security_consequence` triad where impact ≥ low. The
  `security_advisory: true` flag is used once (Claude Code PowerShell +
  worktree sandbox fixes), which exercises the conditional Security
  Advisories digest sub-section.
- Eleven findings were promoted to accepted signals; no `not_promoted`
  block is included in this digest. The deferred items (Pi
  supply-chain hardening, Flue agents-vs-workflows category split,
  Agent Zero ephemeral capture, Hermes Kanban hardening wave as
  separate signal, OpenClaw transcripts-as-core, OpenClaw reaction
  approvals, Codex CLI 0.131/0.132/0.134 individually) appear in the
  digest's running prose under Provider Notes; they are not
  schema-level signals.
- `content/digests/index.md` was missing the `2026-04-23_2026-05-07-frontier-rollup-expanded.md`
  entry per the prior synthesis's hygiene flag. This run repaired that
  alongside adding the new digest.

## Doctrine questions surfaced (candidate amendment material)

Three doctrine questions emerged from the harvest. Each is recorded
here; if they recur in the next cycle, the recommended next move is a
draft in `charter/proposed/` rather than continuing to flag them
informally.

### 1. Release-as-finding vs. decompose at signal-promotion

Hermes Agent v0.14.0 ("Foundation Release") is one release with 808
commits and 633 merged PRs touching distribution (PyPI, Windows beta,
Zed registry), provider routing (`hermes proxy`), identity mapping
(Honcho), supply-chain advisory checker, and Kanban corruption
hardening. `RESEARCH_CONTRACT.md` defines a finding as a
*"source-backed observation of what changed"* — singular.

This run's choice: capture v0.14.0 as one composite finding because
the release tag is one event, but note in the finding body and the
signal's `why_action_bearing` that the operator consequences split
into at least three distinct vectors. The signal's title
("Foundation Release: PyPI, OpenAI-compatible proxy, identity
mapping") reflects this composite shape.

**Recommended doctrine clarification** (candidate amendment-005):
findings can be release-shaped when the release is one event;
signals must be operator-consequence-shaped. A composite finding
producing one signal is the wrong shape — the right shape is
either (a) decomposing the finding into per-consequence findings
that each produce a signal, or (b) one finding producing multiple
signals tied to distinct `why_action_bearing` lists. The current
schema permits both; the contract should choose.

This run uses (a)-light: one finding, one signal, with the signal's
`why_action_bearing` enumerating distinct consequences. Future
runs should likely shift to one-finding-multiple-signals or
multiple-findings-multiple-signals.

### 2. Composition findings — where do they live?

Two findings in this run involve cross-product composition that the
current schema's single-`source` assumption does not cleanly fit:

- **OpenHands ACP UI fronting Claude Code, Codex, or Gemini CLI.**
  The OpenHands settings page grays out LLM/Condenser/MCP because
  the back-end agent owns those concerns. The finding's `source` is
  `openhands` — but the operator consequence touches Claude Code,
  Codex, and Gemini CLI deployments too. There is no `composes:
  [other_subject]` field on findings or signals.
- **Paperclip's ACPX-Claude adapter respecting `~/.claude/settings.json`.**
  Paperclip's control plane defers to the agent-owned permission
  file. The finding's `source` is `paperclip` — but the claim is
  about how Paperclip composes with Claude Code's permission model.

If composition recurs (and it will — every meta-harness or front-end
wrapping a back-end agent has this shape), the schema needs a
representation for cross-subject findings. Candidate field:
`composes: [<other source ids>]` on the finding, with parallel
`composes` arrays on the resulting signal.

**Recommended doctrine clarification** (candidate amendment-006):
add a `composes` array to the finding and signal schemas. Define
the integrity checker behavior — should `composes` references
require the named providers to exist in `sources/index.yml`? — and
the digest rendering implications.

### 3. Claude Code de-facto security advisories without an advisory surface

`sources/claude-code.yml` names `official_changelog` as priority-1
and has no separate security advisory surface. In this window, the
2.1.147 (forceLoginOrgUUID / forceLoginMethod), 2.1.148 (Vertex AI
provider bypass), and 2.1.149 (PowerShell `cd..` bypass, worktree
sandbox over-scope) entries are de-facto advisories — the kind a
security-conscious operator must upgrade past before deployment —
but they ship as ordinary changelog entries.

This is a source-contract decision, not a charter amendment:

- **Option A**: amend `sources/claude-code.yml` notes to document
  that the changelog carries security-advisory content explicitly,
  and harvesters should flag entries matching advisory-shape
  language as `security_advisory: true` signals.
- **Option B**: add an explicit advisory surface to the contract
  (an Anthropic security blog or RSS feed) and route security
  fixes there; if no such surface exists, document that absence.

This run takes Option A informally — the
`claude-code-powershell-and-worktree-sandbox-fixes` signal carries
`security_advisory: true` based on changelog content. The source
contract should make this explicit. Recommended action: update
`sources/claude-code.yml` notes in the next cycle.

## Source-contract hygiene observations

- Claude Code Weeks 21 and 22 `whats-new` digests are not published
  as of 2026-05-27, despite the changelog being current through
  2.1.152 same-day. The `official_digest` priority-1 surface is
  two weeks stale. Treat the changelog as the trailing-window
  fallback per the existing contract; the digest catching up is not
  a Bitter Frontier responsibility.
- OpenHands has no tagged release in window (1.7.0 was 2026-05-01).
  All in-window work is main-branch only. The OpenHands profile's
  `evidence_floor: release_note` would force this run's findings to
  stage as `commit_diff_reviewed` until the next 1.x release
  consolidates. Amendment 003's `commit_diff_reviewed` precision
  level is the right tool here; the profile's `evidence_floor`
  should accept it explicitly or wait for the next release.
- Paperclip's `docs.paperclip.ing/changelog` returned no content via
  WebFetch during harvest. The Group C harvest fell through to
  GitHub releases (the source contract accepts both). The official
  changelog page may be a render-blocked SPA; worth a follow-up
  probe via curl/wget to confirm whether the page is content-bearing.

## Cross-provider threads worth tracking forward

These appear in the digest's `watch` block; recording here for the
next cycle's harvest priming:

- **Default-on autonomy.** Claude Code Auto, Codex Goal mode, Gemini
  Auto modes merger. Watch for whether the trend reverses (any
  provider re-introducing opt-in friction) or extends (Hermes,
  OpenHands, Paperclip adopting similar defaults).
- **Policy in versioned files.** Codex `requirements.toml`, Gemini
  PolicyEngine-in-ACP, OpenHands org-level LLM profiles. Watch for
  distribution and signing models being documented. Watch for a
  fourth provider adopting the pattern.
- **Authority over inputs at the boundary.** OpenClaw pre-dispatch
  allowlists, Agent Zero vision verification, OpenHands per-member
  scoping. Watch for typed-plugin-author signing models, audit
  evidence landing under ephemeral capture, and composition with
  other agent permission systems.
- **Supply-chain hardening.** Hermes lazy-install advisory checker,
  Pi shrinkwrap + lifecycle-script controls. Two providers, same
  fortnight; watch for OpenHands and Codex adopting similar posture.
- **Composition.** OpenHands ACP fronting Claude Code/Codex/Gemini;
  Paperclip ACPX-Claude respecting `~/.claude/settings.json`;
  Hermes `proxy` as credential router. The pattern is gaining
  weight; the schema needs to grow to represent it.

## Receipt context

The receipt-spec landscape delta survey
(`research/agent-receipt-spec-survey-delta-2026-05-27.md`) is not
itself a digest signal — it is research context. Its strategic
implication (ship Phase 1 of `operator.run.receipt.v0` in ≤2 weeks)
is a separate workstream from this digest. The two workstreams
share the same window and the same operator constraints (autonomy
graduating from opt-in to baseline raises the importance of
operator-side learning across runs), but the receipt spec is not
itself a finding about a watchlist provider — it is a
landscape-level observation.

## Quality gates

- `npm run check:integrity` — to be run before commit
- `npm run check:links` — to be run before commit
- Operator brief signal links — all 11 signals in the digest's
  operator_brief inline links resolve to signals defined in this
  run's `signals/frontier-signals.yml`.
- `top_signal_ids` — all 11 signals listed are defined in this
  run's signals file.

— claude-opus-4-7, 2026-05-27
