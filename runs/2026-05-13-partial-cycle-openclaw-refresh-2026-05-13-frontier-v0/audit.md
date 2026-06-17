# Run Audit: OpenClaw Refresh 2026-05-13

## Scope

Primary-source diff against OpenClaw post-baseline (post-2026-05-12). The
previous baseline was `v2026.5.10-beta.5`, harvested in the
`2026-05-12-partial-cycle-openclaw-2026-05-07_2026-05-12-frontier-v0` run.

## What Was Checked

- `gh api repos/openclaw/openclaw/releases/tags/v2026.5.12-beta.3` — release
  metadata + full release notes body (verified release exists, published
  2026-05-12T23:38:26Z, pre-release flag `true`).
- Release notes body inspected for items in the focus areas: permissions,
  skill archive upload, voice/channel limits, onboarding flow, memory
  compaction, gateway recovery.
- Cross-checked against the existing OpenClaw profile claims in
  `content/profiles/openclaw.md` to identify which v2026.5.12-beta.3
  release-note items are new vs. baseline-window restatements.

## Promoted As Signal

- `2026-05-13-openclaw-per-sender-tool-policies` — PR #66933 introduces
  per-sender tool policies via canonical channel-scoped sender keys,
  spanning global, agent, group, core, bundled, and plugin tool surfaces.
  This is a directional change in OpenClaw's authority model (agent-level
  → requester-level).

## Promoted As Claim Update Only (Not Standalone Signal)

- PR #80897, PR #80904 — memory-wiki admin/write scope requirements. Real
  operator-visible change but a configuration tightening rather than a
  directional move; folds into the OpenClaw memory claim block.
- OpenAI CLI auth default (no PR cited in release notes). Setup-script
  impact only; folds into the OpenClaw onboarding-related claim.
- PR #79307 — compaction preserves scoped background exec/process session
  references. Reliability hardening rather than a directional move; folds
  into the OpenClaw reliability claim block.

## Explicitly NOT Promoted

These items appear in the v2026.5.12-beta.3 release notes but are baseline
already (carried by the v2026.5.10-beta.5 cycle) and are not new findings:

- `skills.install.allowUploadedArchives` (skill archive upload gate)
- `voice.allowedChannels` (voice channel allowlist)
- `tools.message.crossContext` / `tools.message.actions.allow` (per-agent
  message restrictions — superseded but not removed by the new per-sender
  layer)
- CLI onboarding wayfinding improvements
- Memory dreaming compaction cap

These remain on the OpenClaw profile claims block from prior cycles. The
v2026.5.12-beta.3 notes re-publish them, but they are not new state.

## Rejected Editorial Framings

- The "unified Local-first Gateway architecture" framing that surfaced in
  preliminary review was rejected — the release notes support narrower
  operator-facing changes, not a wholesale architecture re-statement.

## Confidence

Medium-high confidence this is the complete set of operator-visible
post-baseline changes in the focus areas. The release notes are the
practical evidence floor for OpenClaw (commit volume per harvest window
makes individual commit diff review impractical at scale). Confidence is
not "high" because the release notes themselves may compress some
operator-relevant intermediate commits, and `[AI]`-marked items in the
notes (#80897, #80904) suggest automated change handling that may have
its own review path not yet documented.

## Freshness Conditions

- OpenClaw refreshed: ✓ (this run)
- Hermes Agent refresh exists at 2026-05-12 (separate run)
- 8 other providers remain at 2026-05-12 baseline; no new operator-visible
  state observed in this cycle to trigger their refresh.

## What Should Happen Next

- Update the OpenClaw profile claims block: add
  `per-sender-tool-policies` (new), and note the three claim-level updates
  in their respective claim entries (memory, auth, compaction).
- Optionally surface in the next weekly digest's Operator Brief if
  per-sender tool policies represent the most actionable signal for the
  next reader.
