# Drama / Code Follow-Up Verification

Observed: 2026-06-24

This file records the follow-up pass requested after the social harvest. It
checks drama leads against public source receipts and records exactly what each
receipt can and cannot support.

## Verdict Legend

- `CONFIRMED_NARROW`: public code, release, PR, or official changelog receipt
  supports the bounded claim stated here.
- `PARTIAL`: public source receipts support part of the social claim but not the
  whole public framing.
- `UNVERIFIED_SOCIAL`: public social post or thread exists, but the claim needs
  direct participant chain reconstruction or other primary receipts.
- `COUNTERWEIGHT`: public source receipt complicates or balances a social-pain
  narrative.
- `ABSENT_IN_WINDOW`: the checked in-window source receipt did not contain the
  named feature or claim.

## Receipt Map

### Gemini CLI / Antigravity

Verdict: `CONFIRMED_NARROW`

Social lead: Gemini CLI / Antigravity transition notice and user backlash.

Public source receipts:

- https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0
- https://github.com/google-gemini/gemini-cli/pull/27676
- https://github.com/google-gemini/gemini-cli/pull/27765

What the receipts support:

- Gemini CLI v0.47.0 was published on 2026-06-18.
- The release includes PR #27676 for Antigravity transition-banner visibility.
- The release includes PR #27765 for Antigravity installation/migration help,
  platform-specific commands, and an `antigravity-support` built-in skill.

What remains unverified:

- A hard cutoff on 2026-06-18.
- Closed-source impact claims.
- Quota/backlash claims from user posts.

Card action: upgrade only the narrow transition/migration-support card to
`verified_secondary`.

### Claude Code 2.1.187

Verdict: `CONFIRMED_NARROW`

Social lead: community changelog post about Claude Code v2.1.187.

Public source receipt:

- https://code.claude.com/docs/en/changelog#2-1-187

What the receipt supports:

- The official Claude Code changelog has a 2.1.187 entry published on
  2026-06-24.
- The entry includes sandbox credential hardening, a `--resume` repair, remote
  MCP idle-timeout handling, and other release notes.

What remains unverified:

- The community tracker account is not an official release channel.
- This receipt does not apply to unrelated Claude Code social controversy or
  takedown claims elsewhere in the harvest.

Card action: upgrade the 2.1.187 card to `verified_secondary`; leave unrelated
Claude Code claims unchanged.

### OpenHands ACP

Verdict: `PARTIAL`

Social lead: official OpenHands post claiming broad ACP support.

Public source receipts:

- https://github.com/OpenHands/OpenHands/releases/tag/1.8.0
- https://github.com/OpenHands/OpenHands/pull/14401

What the receipts support:

- OpenHands 1.8.0 was published on 2026-06-10 and includes "Minimal generic ACP
  agent UI."
- PR #14401 was merged and describes an `ENABLE_ACP` feature flag, Settings
  Agent UI, ACP presets for Claude Code/Codex/Gemini CLI/custom, unified
  conversation routing, `tags['acp_server']`, and deferred cross-kind config
  preservation.

What remains unverified:

- The full Agent Canvas, SDK, and cloud support wording from the social post.
- The exact shipped state of every surface on 2026-06-18.

Card action: add secondary receipts but keep status `needs_primary_crosscheck`.

### Paperclip Maximizer / Interop

Verdict: `ABSENT_IN_WINDOW` for Maximizer, `CONFIRMED_NARROW` for adjacent
interop work.

Social lead: maintainer-described Maximizer mode.

Public source receipts checked:

- https://github.com/paperclipai/paperclip/releases/tag/v2026.618.0
- https://github.com/paperclipai/paperclip/pull/2322
- https://github.com/paperclipai/paperclip/pull/8231

What the receipts support:

- Paperclip v2026.618.0 was published on 2026-06-18.
- The release includes stabilized OpenClaw Gateway integration via PR #2322.
- PR #2322 exposes OpenClaw Gateway config fields, injects `x-openclaw-token`,
  adds an `OPENCLAW_TOKEN` fallback, adds transient retry handling, restores
  documented timeout defaults, and adds regression tests.
- The release includes Hermes custom-provider support via PR #8231.
- PR #8231 passes Hermes `custom:*` providers through as `--provider` args
  while preserving auth injection and avoiding duplicate provider args.

What remains unverified:

- A shipped or documented Paperclip "Maximizer mode."

Card action: keep Maximizer as maintainer intent with
`needs_primary_crosscheck`.

### OpenClaw Reliability Complaints

Verdict: `COUNTERWEIGHT`

Social lead: user reports about update breakage and maintenance tax.

Public source receipts:

- https://github.com/openclaw/openclaw/releases/tag/v2026.6.10
- https://github.com/openclaw/openclaw/pull/94545
- https://github.com/openclaw/openclaw/pull/95328
- https://github.com/openclaw/openclaw/pull/94461

What the receipts support:

- OpenClaw v2026.6.10 was published on 2026-06-24 and lists reliability fixes
  in model routing, session/channel state, trusted policies, and provider
  plugin onboarding.
- PR #94545 fixes trusted-policy lookup across composed hook registries.
- PR #95328 fixes stale per-channel origin fields after channel switches.
- PR #94461 fixes a Z.ai model base-URL fallback that could produce confusing
  401 failures.

What remains unverified:

- Broad "OpenClaw is broken" or comparative stability claims from user posts.
- Any quantitative reliability conclusion.

Card action: do not promote a complaint card from this pass. Use the release
receipts as counterweight when discussing OpenClaw social pain.

### OpenClaw / Hermes Governance Tension

Verdict: `UNVERIFIED_SOCIAL`

Social leads:

- https://x.com/steipete/status/2068961217524490739
- https://x.com/Teknium/status/2069020939132813642
- https://x.com/clawdb0t/status/2069299802903654611

What the social passes found:

- The existing harvest has day precision for the @steipete and @clawdb0t
  posts.
- Hermes could identify direct participant handles and neutral summaries, but
  did not return complete `created_at` timestamps or enough reply-chain
  structure to treat the exchange as reconstructed.

What remains unverified:

- Non-profit legal structure details.
- Funding motive claims.
- Any inference about OpenAI ties, hiring, or project agendas beyond the
  primary public posts already captured.

Card action: keep as `single_source_unconfirmed` social context. Do not promote
to a stronger card or finding without direct primary reconstruction.

## Protocol Notes

- Do not treat a release receipt as a blanket validation for every social claim
  in the same project.
- Prefer narrowing a card to the claim the source receipt actually proves.
- When social user pain is interesting, check for public maintainer responses,
  releases, issue fixes, and changelogs before representing the cluster.
- Reputational, hiring, funding, takedown, and motive claims remain journal-only
  unless public primary receipts support the exact claim.
