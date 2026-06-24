# Harvest — codex (X Social Signals)

## Claim 1
claim_id: codex-disk-bug-2026-06
source: codex
claim: Codex CLI v0.142.0 fixed aggressive background writing to ~/.codex/logs_2.sqlite that could fill SSDs.
primary_url: https://x.com/songguoxiansen/status/2069246911841022200
author: @songguoxiansen
observed_at: 2026-06-24
event_date: 2026-06-23
date_precision: day
date_note: Exact post publication date resolved via public X post lookup (ID 2069246911841022200): 2026-06-23. Reproducible from primary_url.
evidence_kind: community_discussion
channel: x.com
status: candidate
crosscheck_status: needs_primary_crosscheck
release_channel: social_only
operator_consequence: Candidate reliability incident; verify against OpenAI/Codex release notes or issue/commit receipts before action language.
notes: Reliability incident.

## Claim 2
claim_id: codex-token-budgets-2026-06
source: codex
claim: v0.142.0 added configurable per-thread token budgets with automatic turn abortion.
primary_url: https://x.com/CodexReleases/status/2069185685131804760
author: @CodexReleases
observed_at: 2026-06-24
event_date: 2026-06-22
date_precision: day
date_note: Exact post publication date resolved via public X post lookup (ID 2069185685131804760): 2026-06-22. Reproducible from primary_url.
evidence_kind: community_account_post
channel: x.com
status: candidate
secondary_receipts:
  - https://github.com/openai/codex/releases/tag/rust-v0.142.0
crosscheck_status: verified_secondary
release_channel: tagged-release
operator_consequence: Candidate capability item with public release-tag support; verify release-note wording before promotion.
notes: Capability claim.
