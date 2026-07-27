```yaml
- claim_id: pi-coding-agent-official-0-82-0-bash-metadata-constrained-sampling-2026-07-24
  source: pi-coding-agent
  claim: Official @pidotdev post claims Pi 0.82.0 lets bash/shell-outs see the loaded model and provider, lands constrained sampling for supported providers/models, and includes other fixes.
  primary_url: https://x.com/pidotdev/status/2080536388861034547
  author: "@pidotdev"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080536388861034547) as 2026-07-24T06:11:44Z.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Companion post links https://pi.dev/news/releases/0.82.0 (https://x.com/pidotdev/status/2080536391465791699). Version/feature claims need changelog/docs/local probe.

- claim_id: pi-coding-agent-official-dynamic-model-catalogs-opus5-no-release-2026-07-24
  source: pi-coding-agent
  claim: Official @pidotdev post claims Pi may not need a new release for Opus 5 because dynamic model catalogs let operators run "pi update --models" (or wait for cache expiry) to surface Opus 5 automatically.
  primary_url: https://x.com/pidotdev/status/2080733936494223767
  author: "@pidotdev"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080733936494223767) as 2026-07-24T19:16:43Z.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Social-only product/ops claim about catalog refresh vs tagged release; cross-check docs, model catalog behavior, and whether a later release still shipped.

- claim_id: pi-coding-agent-official-0-82-1-opus5-fetch-bearer-2026-07-25
  source: pi-coding-agent
  claim: Official @pidotdev post claims a release did ship with model-data fetch improvements, bundled Opus 5 model data, and Anthropic bearer-token handling improvements, contradicting the earlier no-release-for-Opus-5 heads-up.
  primary_url: https://x.com/pidotdev/status/2080999248770826351
  author: "@pidotdev"
  observed_at: 2026-07-27
  event_date: 2026-07-25
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080999248770826351) as 2026-07-25T12:50:58Z.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Quotes the dynamic-catalog heads-up; companion changelog link https://x.com/pidotdev/status/2080999250867986582 points at https://pi.dev/news/releases/0.82.1. Needs primary release notes cross-check.

- claim_id: pi-coding-agent-official-week-features-llamacpp-openrouter-kimi-bash-2026-07-25
  source: pi-coding-agent
  claim: Official @pidotdev post claims a weekly feature set including local llama.cpp models, direct sign-in for OpenRouter and Kimi Code, and bash commands seeing live model/provider, thanking contributors.
  primary_url: https://x.com/pidotdev/status/2080978871927910695
  author: "@pidotdev"
  observed_at: 2026-07-27
  event_date: 2026-07-25
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080978871927910695) as 2026-07-25T11:30:00Z.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Marketing cheatsheet; map each bullet to tagged release notes and /login provider docs before treating as shipped operator path.

- claim_id: pi-coding-agent-official-prompt-caching-blog-amplify-2026-07-23
  source: pi-coding-agent
  claim: Official @pidotdev post claims prompt caching affects latency, cost, tool design, and product decisions, and amplifies an Earendil blog post by @mitsuhiko on how prompt caching is implemented in Pi.
  primary_url: https://x.com/pidotdev/status/2080254453874127033
  author: "@pidotdev"
  observed_at: 2026-07-27
  event_date: 2026-07-23
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080254453874127033) as 2026-07-23T11:31:25Z.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Quotes https://x.com/mitsuhiko/status/2080243367535898707 and points at https://earendil.com/posts/prompt-caching/ via companion https://x.com/pidotdev/status/2080254458370437407. Philosophy/economics lead, not a version receipt.

- claim_id: pi-coding-agent-maintainer-mitsuhiko-prompt-cache-visibility-2026-07-23
  source: pi-coding-agent
  claim: Earendil-linked maintainer @mitsuhiko claims Pi made cache behavior more visible and frames agent-harness discourse around whether harnesses help or quietly torch KV caches, linking an explanatory post.
  primary_url: https://x.com/mitsuhiko/status/2080243367535898707
  author: "@mitsuhiko"
  observed_at: 2026-07-27
  event_date: 2026-07-23
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080243367535898707) as 2026-07-23T10:47:22Z.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Maintainer-intent/philosophy signal about cache visibility and harness economics; verify any concrete Pi behavior claims against the linked post and code/docs. Author treated as Earendil-side maintainer from public affiliation chatter, still not a tagged release.

- claim_id: pi-coding-agent-official-poolside-laguna-openrouter-welcome-2026-07-21
  source: pi-coding-agent
  claim: Official @pidotdev post claims Poolside Laguna S 2.1 (118B, open weight, 1M context, DGX Spark runnable) is available through OpenRouter and is welcomed into Pi, citing a 78.5% SWE-bench Multilingual figure.
  primary_url: https://x.com/pidotdev/status/2079668722029977928
  author: "@pidotdev"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2079668722029977928) as 2026-07-21T20:43:56Z.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Benchmark figure is third-party/model-vendor social context via quote of @poolsideai; treat model availability in Pi and any benchmark number as unverified until provider catalog/docs and primary benchmark method are checked.

- claim_id: pi-coding-agent-official-syntaxfm-pi-auto-research-adoption-2026-07-24
  source: pi-coding-agent
  claim: Official @pidotdev post claims Syntax.fm hosts discussed using "Pi Auto Research" while building @pierrecomputer, pointing operators to syntax.fm/show/1008 as adoption chatter.
  primary_url: https://x.com/pidotdev/status/2080616483072225778
  author: "@pidotdev"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080616483072225778) as 2026-07-24T11:30:00Z.
  evidence_kind: official_account_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Adoption/ecosystem lead only. "Pi Auto Research" naming and workflow details are social; cross-check the podcast episode and any Pi package/extension surfaces before treating as a product feature.

- claim_id: pi-coding-agent-community-changelog-0-81-0-llamacpp-extension-providers-2026-07-21
  source: pi-coding-agent
  claim: Community account @PiChangelog claims Pi v0.81.0 adds local llama.cpp model management (router connect, HF search/download, load/unload with progress), extension-registered complete pi-ai providers, Qwen Token Plan providers, and persisted tool/compaction/branch-summary usage in session totals.
  primary_url: https://x.com/PiChangelog/status/2079561612680143035
  author: "@PiChangelog"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2079561612680143035) as 2026-07-21T13:38:19Z.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Unofficial changelog account (thread also links GitHub release notes). High-signal feature list but not maintainer/official; cross-check https://github.com/earendil-works/pi/releases/tag/v0.81.0 and docs.

- claim_id: pi-coding-agent-community-changelog-0-81-1-source-archives-retry-2026-07-21
  source: pi-coding-agent
  claim: Community account @PiChangelog claims Pi v0.81.1 adds deterministic checksummed GitHub source archives for rebuilding standalone binaries, and compaction/branch summarization retries transient provider failures with retry lifecycle events for interactive/JSON/RPC/SDK consumers.
  primary_url: https://x.com/PiChangelog/status/2079609935223001551
  author: "@PiChangelog"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2079609935223001551) as 2026-07-21T16:50:20Z.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Unofficial social summary; reliability/SDK event claims need primary release notes and SDK docs. Thread points at GitHub tag v0.81.1.

- claim_id: pi-coding-agent-community-changelog-0-82-0-constrained-sampling-login-bash-2026-07-24
  source: pi-coding-agent
  claim: Community account @PiChangelog claims Pi v0.82.0 ships constrained tool sampling (JSON Schema / OpenAI Lark-regex grammars with capability metadata), OpenRouter and Kimi Code sign-in via /login without manual API keys, and bash tools receiving session/model metadata plus correlated RPC bash streaming.
  primary_url: https://x.com/PiChangelog/status/2080536966257344680
  author: "@PiChangelog"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080536966257344680) as 2026-07-24T06:14:01Z.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Corroborates official @pidotdev 0.82.0 chatter but remains unofficial social; verify against GitHub/npm and /login provider docs.

- claim_id: pi-coding-agent-community-changelog-0-82-1-opus5-gateway-catalog-304-2026-07-25
  source: pi-coding-agent
  claim: Community account @PiChangelog claims Pi v0.82.1 adds Claude Opus 5 on Anthropic and Bedrock with adaptive thinking including xhigh, ANTHROPIC_AUTH_TOKEN bearer auth for Anthropic-compatible gateways (including compaction/branch summaries), pi.dev catalog revalidation via If-None-Match 304s, and persistent llama.cpp model listings across restarts.
  primary_url: https://x.com/PiChangelog/status/2080999096052339020
  author: "@PiChangelog"
  observed_at: 2026-07-27
  event_date: 2026-07-25
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080999096052339020) as 2026-07-25T12:50:22Z.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Dense version/feature claim from unofficial account; cross-check official release notes and provider docs. Gateway bearer-auth wording in the social text looks truncated/redacted in the public lookup payload.

- claim_id: pi-coding-agent-community-dodoreach-oneshot-webui-prompt-sdk-2026-07-21
  source: pi-coding-agent
  claim: Community user @DODOREACH claims the best lesson from @pidotdev is shaping your own tools rather than taking someone else's finished UI, and publishes a long one-shot prompt to build a local private codex-style web UI over Pi SDK/sessions/RPC with Tailscale Serve, citing Pi 0.80.6 SessionManager APIs and no built-in sandbox.
  primary_url: https://x.com/DODOREACH/status/2079645642532462850
  author: "@DODOREACH"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2079645642532462850) as 2026-07-21T19:12:13Z.
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ecosystem tension/adoption lead about DIY control surfaces on top of Pi minimalism. Prompt embeds many version-specific API names and security claims; treat as unverified community recipe, not docs. Maintainer @badlogicgames later quote-posted "love it" at https://x.com/badlogicgames/status/2079880977757634645 (2026-07-22).

- claim_id: pi-coding-agent-community-dodoreach-mobile-companion-camping-2026-07-18
  source: pi-coding-agent
  claim: Community user @DODOREACH claims to be using @pidotdev to build a mobile companion for a @pidotdev app and taking it camping, signaling mobile/control-surface adoption around Pi.
  primary_url: https://x.com/DODOREACH/status/2078432578139304321
  author: "@DODOREACH"
  observed_at: 2026-07-27
  event_date: 2026-07-18
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2078432578139304321) as 2026-07-18T10:51:56Z.
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Adoption anecdote only; no shipped Pi feature receipt. Later expanded in the one-shot web UI prompt thread.

- claim_id: pi-coding-agent-maintainer-badlogic-love-diy-pi-ui-prompt-2026-07-22
  source: pi-coding-agent
  claim: Maintainer @badlogicgames quote-posts the community one-shot Pi web-UI prompt with the comment "love it", appearing to endorse the DIY-extension/control-surface approach over shipping a finished official UI.
  primary_url: https://x.com/badlogicgames/status/2079880977757634645
  author: "@badlogicgames"
  observed_at: 2026-07-27
  event_date: 2026-07-22
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2079880977757634645) as 2026-07-22T10:47:22Z.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Maintainer intent/philosophy signal aligning with Pi's deliberate minimalism. Does not by itself verify any SDK API or security claim inside the quoted community prompt.

- claim_id: pi-coding-agent-community-bentlegen-hunk-extension-api-like-pi-2026-07-26
  source: pi-coding-agent
  claim: Community user @bentlegen asks whether "hunk" should have an extension API like @pidotdev, treating Pi's extension surface as a reference design for another tool.
  primary_url: https://x.com/bentlegen/status/2081369030573625586
  author: "@bentlegen"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081369030573625586) as 2026-07-26T13:20:21Z.
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ecosystem influence lead. Follow-on replies in-thread claim a related API is "90% lifted from Pi" (https://x.com/bentlegen/status/2081444692072292739) and that a capability will be "possible as an extension" (https://x.com/bentlegen/status/2081420054298530222); those remain single-source community chatter.

- claim_id: pi-coding-agent-community-bentlegen-api-lifted-from-pi-2026-07-26
  source: pi-coding-agent
  claim: Community user @bentlegen claims a discussed API is about 90 percent lifted from Pi, in a thread comparing extension-style design to @pidotdev.
  primary_url: https://x.com/bentlegen/status/2081444692072292739
  author: "@bentlegen"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081444692072292739) as 2026-07-26T18:21:00Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Reputational/derivation claim about another project borrowing Pi's extension contract; keep as lead only unless primary code comparison is done. Not a Pi product change.

- claim_id: pi-coding-agent-maintainer-badlogic-fomo-vs-building-experience-2026-07-26
  source: pi-coding-agent
  claim: Maintainer @badlogicgames argues operators do not gain experience by doom-scrolling AI FOMO on X and should build/do things instead, in a thread mentioning @pidotdev and @mitsuhiko.
  primary_url: https://x.com/badlogicgames/status/2081348909205422147
  author: "@badlogicgames"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081348909205422147) as 2026-07-26T12:00:24Z.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Maintainer philosophy/attention-bottleneck discourse, not a feature receipt. Related replies emphasize practice over tweet-length insights (e.g. https://x.com/badlogicgames/status/2081413184657776829).

- claim_id: pi-coding-agent-maintainer-badlogic-provider-specific-api-resistance-2026-07-26
  source: pi-coding-agent
  claim: Maintainer @badlogicgames says exposing a requested capability in an existing API is trivial but resists stuffing OpenAI-only/provider-specific behavior into a general API on design grounds, while acknowledging user demand.
  primary_url: https://x.com/badlogicgames/status/2081413579635294291
  author: "@badlogicgames"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081413579635294291) as 2026-07-26T16:17:22Z.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Maintainer intent about API boundary discipline in provider/harness design. Thread context involves @mitsuhiko and @lucasmeijer; the exact capability under discussion needs thread reconstruction before any product claim is filed.

- claim_id: pi-coding-agent-community-dillon-mulroy-workflow-show-and-official-thanks-2026-07-23
  source: pi-coding-agent
  claim: Community user @dillon_mulroy claims a "next token" episode shows his agentic engineering workflow and tooling; official @pidotdev replies thanking him for sharing how he uses Pi.
  primary_url: https://x.com/dillon_mulroy/status/2080118955100791290
  author: "@dillon_mulroy"
  observed_at: 2026-07-27
  event_date: 2026-07-23
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080118955100791290) as 2026-07-23T02:33:00Z.
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Adoption/workflow discourse lead. Official thanks at https://x.com/pidotdev/status/2080184736316567573. Episode contents and whether Pi-specific features are demonstrated remain unchecked.

- claim_id: pi-coding-agent-discovery-coverage-gap-note-2026-07-27
  source: pi-coding-agent
  claim: Scout coverage for public X posts about Pi in 2026-07-02..2026-07-27 is densest from roughly 2026-07-16 onward via recent timelines of @pidotdev, @badlogicgames, @PiChangelog, and related community accounts; earlier in-window days were not fully enumerable without authenticated X search.
  primary_url: https://x.com/pidotdev
  author: "@pidotdev"
  observed_at: 2026-07-27
  event_date: 2026-07-27
  date_precision: day
  date_note: Meta coverage note for the scout window; not a product event date.
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Process caveat for downstream reviewers. xurl had no registered app in this environment; discovery used public profile mirrors plus per-status lookups. Re-run with authenticated X search before treating the early-window absence as true silence. Secondary public snippet chatter also alleged a 2026-07-11 @pidotdev "Pidalf" endorsement and @badlogicgames "official account" notice, but exact status URLs were not resolved in this pass.
```
