```yaml
- claim_id: heypi-2026-07-08-rewrite-core-5k
  source: heypi
  claim: Maintainer @hunvreus posted that heypi.dev was rewritten the prior week, describing the core as about 5k LOCs (order-of-magnitude smaller) and saying it worked better so far, with a release targeted by end of week.
  primary_url: https://x.com/hunvreus/status/2074889332259729552
  author: "@hunvreus"
  observed_at: 2026-07-27
  event_date: 2026-07-08
  date_precision: day
  date_note: Date reported by x_search as Wed, 08 Jul 2026 16:12:21 GMT.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Early rewrite intent lead only. LOC and quality claims are social-only; cross-check tags, CHANGELOG, and package layout before treating size or ship timing as real. No community reply volume surfaced in this scout pass.

- claim_id: heypi-2026-07-11-serverless-agents-critique
  source: heypi
  claim: Maintainer @hunvreus posted that agents should not run in serverless infrastructure, arguing agents expect long-running processes and a persistent environment, and that running agents on Cloudflare or Vercel requires heavy stitching.
  primary_url: https://x.com/hunvreus/status/2075977886025322539
  author: "@hunvreus"
  observed_at: 2026-07-27
  event_date: 2026-07-11
  date_precision: day
  date_note: Date reported by x_search as Sat, 11 Jul 2026 16:17:52 GMT.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Philosophy/runtime-intent lead from the heypi owner; does not name a heypi version. Interesting tension later in-window when the same account posts Vercel and Cloudflare Sandbox runtime support for heypi. Cross-check docs/runtime packages rather than treating this as a product guarantee.

- claim_id: heypi-2026-07-15-codex-tag-rewrite-sandboxes
  source: heypi
  claim: Maintainer @hunvreus posted that a personal Codex Tag setup for open-source work was built on an upcoming rewritten heypi.dev, claiming a much smaller footprint, cleaner @pidotdev integration, Cloudflare Sandbox and Vercel Sandbox support, and a planned same-week release with a codex-tag example.
  primary_url: https://x.com/hunvreus/status/2077431356616052986
  author: "@hunvreus"
  observed_at: 2026-07-27
  event_date: 2026-07-15
  date_precision: day
  date_note: Date reported by x_search as Wed, 15 Jul 2026 16:33:26 GMT.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Pre-release feature and architecture chatter. Version, sandbox runtime boundaries, and Pi integration depth need primary cross-check against tags, runtime packages, and docs. Thread had no replies in x_search conversation fetch.

- claim_id: heypi-2026-07-16-codex-tag-demo-0-3-0-tease
  source: heypi
  claim: Maintainer @hunvreus posted that a Codex Tag demo was progressing and would be included in an upcoming heypi.dev 0.3.0 release, claiming a full rewrite with core under 10k LOCs, better long-running-task performance, and heavy delegation to @pidotdev.
  primary_url: https://x.com/hunvreus/status/2077796546834534520
  author: "@hunvreus"
  observed_at: 2026-07-27
  event_date: 2026-07-16
  date_precision: day
  date_note: Date reported by x_search as Thu, 16 Jul 2026 16:44:35 GMT.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Version-line and architecture lead with attached demo video per x_search. Social-only until checked against git tags, npm package, CHANGELOG, and whether 0.3.0 vs 0.3.0-beta is the ship channel. LOC and performance claims unverified here.

- claim_id: heypi-2026-07-20-stop-serverless-agents
  source: heypi
  claim: Maintainer @hunvreus posted that operators should stop trying to run agents on serverless infrastructure, arguing simpler primitives (persistent filesystem, long-running processes) beat stitching multiple services, and that a cheap VPS can outperform that path.
  primary_url: https://x.com/hunvreus/status/2079329922703622568
  author: "@hunvreus"
  observed_at: 2026-07-27
  event_date: 2026-07-20
  date_precision: day
  date_note: Date reported by x_search as Mon, 20 Jul 2026 22:17:40 GMT.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Broader maintainer runtime philosophy adjacent to heypi's multiplayer chat-agent positioning and same-week sandbox-runtime claims. Not a heypi version announcement. Higher engagement than heypi product posts in this window per x_search; still discovery-only.

- claim_id: heypi-2026-07-21-codex-tag-slack-serverless-stitching
  source: heypi
  claim: Maintainer @hunvreus replied that coding tasks were being fed to agents via Slack under a Codex Tag pattern, and that making that work on serverless would require extensive stitching, wrapping, and duct-taping.
  primary_url: https://x.com/hunvreus/status/2079452385433559333
  author: "@hunvreus"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Date reported by x_search as Jul 21, 2026; same day as the 0.3.0-beta.0 announcement thread cluster.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ties Codex Tag / Slack multiplayer workflow to anti-serverless intent on the release day. Nearby same-day replies in the cluster include https://x.com/hunvreus/status/2079451238954111404 (long sessions vs serverless) and https://x.com/hunvreus/status/2079454096063611308 (VM lifecycle / Render / security framing). Not a verified runtime matrix.

- claim_id: heypi-2026-07-21-0-3-0-beta-0-release-codex-tag
  source: heypi
  claim: Maintainer @hunvreus posted that heypi 0.3.0-beta.0 was released for building multiplayer chat agents, including a codex-tag demo via `npm create heypi -- codex-tag`, a ground-up rewrite relying more on @pidotdev, ~70% LOC reduction, new Vercel and Cloudflare Sandbox runtimes, cleaned-up config, and a promised Codex Tag video demo.
  primary_url: https://x.com/hunvreus/status/2079639581620949293
  author: "@hunvreus"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Date reported by x_search as Tue, 21 Jul 2026 18:48:08 GMT.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Strongest in-window product/version lead. All version, scaffold command, runtime, and rewrite claims remain social-only until cross-checked against git tags, npm `@hunvreus/heypi`, create-heypi, runtime packages, and docs. x_search reported low engagement and no replies on the root post. Follow-up self-quote same day at https://x.com/hunvreus/status/2079716836334301525.

- claim_id: heypi-2026-07-21-self-host-model-skills-quote
  source: heypi
  claim: Maintainer @hunvreus quote-posted the 0.3.0-beta.0 announcement with the line that operators could run their own setup using whatever model and skills they want.
  primary_url: https://x.com/hunvreus/status/2079716836334301525
  author: "@hunvreus"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Date reported by x_search as Jul 21, 2026; quotes https://x.com/hunvreus/status/2079639581620949293.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Positioning/flexibility claim only (model choice and skills). Cross-check docs for actual model adapter surface, skill loading, and multiplayer authority before treating as an operator contract. Sparse public adoption chatter found beyond maintainer posts in this window.
```
