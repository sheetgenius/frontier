```yaml
- claim_id: antigravity-june-recap-async-subagents-2026-07-02
  source: antigravity
  claim: Maintainer post claims June shipped eleven Antigravity CLI releases nearly every other day and async subagents that stay out of the way, crediting user feedback and bug reports.
  primary_url: https://x.com/shengzheyao/status/2072758849065685256
  author: "@shengzheyao"
  observed_at: 2026-07-27
  event_date: 2026-07-02
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2072758849065685256) as 2026-07-02T19:06:34Z.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Cadence and async-subagent claim are social-only; cross-check CHANGELOG/releases before treating as shipped behavior.

- claim_id: antigravity-cli-1-1-0-shift-tab-modes-2026-07-08
  source: antigravity
  claim: Maintainer post claims Antigravity CLI 1.1.0 adds shift+tab execution modes defaulting to review-every-edit, plus accept-edits and plan modes, described as review-first out of the box.
  primary_url: https://x.com/shengzheyao/status/2074697916716056693
  author: "@shengzheyao"
  observed_at: 2026-07-27
  event_date: 2026-07-08
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2074697916716056693) as 2026-07-08T03:31:44Z.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Product/version and default-mode claims need primary changelog/docs/local probe.

- claim_id: antigravity-cli-1-1-0-line-level-diff-review-2026-07-08
  source: antigravity
  claim: Maintainer thread reply claims default review-first editing shows interactive line-level diffs with accept/reject before disk writes, plus create-file previews and hunk context.
  primary_url: https://x.com/shengzheyao/status/2074698324154953812
  author: "@shengzheyao"
  observed_at: 2026-07-27
  event_date: 2026-07-08
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2074698324154953812) as 2026-07-08T03:33:21Z.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Governance/UX claim about human gate before writes; verify against docs and local behavior.

- claim_id: antigravity-official-1-1-0-modes-ui-2026-07-09
  source: antigravity
  claim: Official @antigravity account post claims Antigravity CLI 1.1.0 ships interactive execution modes, improved UI, and workspace fixes.
  primary_url: https://x.com/antigravity/status/2075036555278717130
  author: "@antigravity"
  observed_at: 2026-07-27
  event_date: 2026-07-09
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2075036555278717130) as 2026-07-09T01:57:21Z.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Official social announcement only; still needs GitHub release/changelog receipt.

- claim_id: antigravity-cli-1-1-3-headless-soft-deny-2026-07-16
  source: antigravity
  claim: Maintainer post claims Antigravity CLI 1.1.3 upgrades no-flicker rendering/clipboard, reduces large-conversation CPU cost, changes headless (-p) so it no longer hangs or silently auto-approves permissioned tools (soft-deny plus exact allow-rule guidance), speeds startup via async skills, and adds /codesearch.
  primary_url: https://x.com/shengzheyao/status/2077576699571741008
  author: "@shengzheyao"
  observed_at: 2026-07-27
  event_date: 2026-07-16
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2077576699571741008) as 2026-07-16T02:10:59Z.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: High-signal permissions/headless governance lead; mark for changelog and local -p probe before any trust language.

- claim_id: antigravity-cli-codesearch-command-2026-07-16
  source: antigravity
  claim: Maintainer thread post claims /codesearch (/cs) provides interactive workspace code search with regex default, literal match flags, and file globs, without leaving the terminal.
  primary_url: https://x.com/shengzheyao/status/2077576997505831245
  author: "@shengzheyao"
  observed_at: 2026-07-27
  event_date: 2026-07-16
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2077576997505831245) as 2026-07-16T02:12:10Z.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Feature chatter tied to 1.1.3 thread; confirm command surface in docs/changelog.

- claim_id: antigravity-cli-1-1-5-effort-model-pin-2026-07-21
  source: antigravity
  claim: Maintainer post claims Antigravity CLI 1.1.5 adds mid-session /effort control with status badge, model slugs beside model name, --model pinning, and agent.md model setting, via agy update.
  primary_url: https://x.com/shengzheyao/status/2079397728900235534
  author: "@shengzheyao"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2079397728900235534) as 2026-07-21T02:47:06Z.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Versioned capability claim; needs primary release notes before operator guidance.

- claim_id: antigravity-gemini-3-6-flash-live-maintainer-2026-07-21
  source: antigravity
  claim: Maintainer post claims Gemini 3.6 Flash is live in Antigravity CLI with weekly quota reset, more efficient tool calls, about 17 percent output-token savings versus 3.5 Flash, lower output price, and example agy --model gemini-3.6-flash --effort medium.
  primary_url: https://x.com/shengzheyao/status/2079642302759493993
  author: "@shengzheyao"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2079642302759493993) as 2026-07-21T18:58:57Z.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Model availability, quota, pricing, and efficiency figures are unverified social claims.

- claim_id: antigravity-official-gemini-3-6-flash-2026-07-21
  source: antigravity
  claim: Official @antigravity account post claims Gemini 3.6 Flash is live in Antigravity and may use up to 17 percent fewer output tokens while finishing complex workflows in fewer reasoning steps and tool calls.
  primary_url: https://x.com/antigravity/status/2079590618171420700
  author: "@antigravity"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2079590618171420700) as 2026-07-21T15:33:34Z.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Official social efficiency claim without method; rejected as receipt until primary docs/benchmark method exist.

- claim_id: antigravity-official-3-6-vs-3-5-modernization-demo-2026-07-21
  source: antigravity
  claim: Official @antigravity account post presents a head-to-head demo claiming Gemini 3.6 Flash rebuilds legacy software faster than 3.5 Flash during automated code modernization inside Antigravity.
  primary_url: https://x.com/antigravity/status/2079663375991046351
  author: "@antigravity"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2079663375991046351) as 2026-07-21T20:22:41Z.
  evidence_kind: official_account_post
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Demo/benchmark-style discourse; no method receipt here.

- claim_id: antigravity-cli-1-1-6-markdown-custom-agents-2026-07-24
  source: antigravity
  claim: Maintainer post claims Antigravity CLI 1.1.6 defines custom agents as Markdown under ~/.gemini/config/agents/<name>/agent.md with YAML frontmatter, plus /copy, streaming /codesearch, and TUI/stability fixes.
  primary_url: https://x.com/shengzheyao/status/2080596639224365381
  author: "@shengzheyao"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080596639224365381) as 2026-07-24T10:11:09Z.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Path still references ~/.gemini/config; succession/config-layout lead for docs and local probe.

- claim_id: antigravity-agent-switch-auto-fork-2026-07-24
  source: antigravity
  claim: Maintainer post claims switching agents mid-conversation auto-forks so the original thread stays on the old agent while the new agent continues on a branch, because custom agents may differ in prompts, tools, and capabilities.
  primary_url: https://x.com/shengzheyao/status/2080797750053196213
  author: "@shengzheyao"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080797750053196213) as 2026-07-24T23:30:17Z.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Coordination/control-plane behavior claim; post links antigravity.google docs on custom subagents.

- claim_id: antigravity-community-gemini-cli-transition-link-2026-07-26
  source: antigravity
  claim: Community post states Gemini CLI is transitioning to Antigravity CLI and links the Google developers blog transition article.
  primary_url: https://x.com/galdawave/status/2081491135583883734
  author: "@galdawave"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081491135583883734) as 2026-07-26T21:25:33Z.
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Lifecycle chatter pointing at known primary blog URL; social post is not itself a receipt.

- claim_id: antigravity-community-post-sunset-usage-shift-2026-07-26
  source: antigravity
  claim: Community reply claims heavy Gemini CLI usage ended after sunset, with Antigravity CLI described as only okay and mainly useful for research and Notebook LM.
  primary_url: https://x.com/morganinc/status/2081516589439164448
  author: "@morganinc"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081516589439164448) as 2026-07-26T23:06:42Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Single-user adoption/pain anecdote after consumer transition.

- claim_id: antigravity-community-gemini-cli-finished-ko-2026-07-26
  source: antigravity
  claim: Community post reacts that Gemini CLI is finished and has become Antigravity CLI, with mild annoyance at the switch.
  primary_url: https://x.com/HamsterSyria/status/2081376915273945106
  author: "@HamsterSyria"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081376915273945106) as 2026-07-26T13:51:41Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Succession sentiment only; no product mechanism claimed.

- claim_id: antigravity-community-tier-cutoff-guide-2026-07-24
  source: antigravity
  claim: Community account post claims personal Google accounts that used Gemini CLI must check account type because from 2026-06-18 individual Code Assist, AI Pro, and AI Ultra can no longer use Gemini CLI Google login and are steered to Antigravity CLI, linking a fix guide.
  primary_url: https://x.com/jeonyongsic/status/2080488155023626318
  author: "@jeonyongsic"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080488155023626318) as 2026-07-24T03:00:04Z.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Tier-access/migration claim; cross-check official transition blog and current login behavior only.

- claim_id: antigravity-community-unpaid-tier-replacement-2026-07-24
  source: antigravity
  claim: Community reply claims unpaid and Google One users were told Gemini CLI would be replaced by Antigravity CLI on June 18 and that Antigravity CLI works for them.
  primary_url: https://x.com/keyelifeai/status/2080454573328908703
  author: "@keyelifeai"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080454573328908703) as 2026-07-24T00:46:37Z.
  evidence_kind: community_discussion
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Echoes tier messaging; not a primary policy receipt.

- claim_id: antigravity-community-install-scripts-2026-07-24
  source: antigravity
  claim: Community post claims Gemini Pro can use Antigravity CLI and shares antigravity.google install script commands for macOS/Linux and Windows, then launching via agy.
  primary_url: https://x.com/xinzhizhu9795/status/2080476385248940111
  author: "@xinzhizhu9795"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080476385248940111) as 2026-07-24T02:13:18Z.
  evidence_kind: community_discussion
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Install-channel chatter; verify only against official install docs, not this post.

- claim_id: antigravity-sandbox-escape-research-roundup-2026-07-26
  source: antigravity
  claim: Community post summarizes research saying coding agents including Antigravity could write files later executed outside the sandbox by trusted host components, so process sandboxing alone is insufficient.
  primary_url: https://x.com/danilofalcao/status/2081459538163822653
  author: "@danilofalcao"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081459538163822653) as 2026-07-26T19:20:00Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Security research summary grouping Antigravity with peers; needs primary research writeup and vendor advisories, not social alone.

- claim_id: antigravity-sandbox-escapes-weekly-digest-2026-07-25
  source: antigravity
  claim: Community account digest claims seven sandbox escapes in the same period across Cursor, Codex CLI, Gemini CLI, and Antigravity among other AI security news.
  primary_url: https://x.com/EveryDevAi/status/2081025386859884855
  author: "@EveryDevAi"
  observed_at: 2026-07-27
  event_date: 2026-07-25
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081025386859884855) as 2026-07-25T14:34:50Z.
  evidence_kind: community_account_post
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Secondary roundup; count and Antigravity-specific impact unverified here.

- claim_id: antigravity-sandbox-escape-mechanism-summary-2026-07-22
  source: antigravity
  claim: Community post claims researchers reproduced sandbox escapes in Cursor, Codex, Gemini CLI, and Antigravity often by having the agent write config a trusted host later ran, and says most disclosed issues are patched.
  primary_url: https://x.com/neko23423/status/2080069646859026571
  author: "@neko23423"
  observed_at: 2026-07-27
  event_date: 2026-07-22
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080069646859026571) as 2026-07-22T23:17:04Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Patch-status claim is social-only; keep as investigation lead.

- claim_id: antigravity-hyrax-sandbox-bypass-writeup-2026-07-22
  source: antigravity
  claim: Community/security account post claims Pillar Security reproduced sandbox bypasses across Cursor, Codex, Gemini CLI, and Antigravity where the agent mostly wrote a file a trusted host component later ran, linking a Hyrax writeup.
  primary_url: https://x.com/hyraxai/status/2079989950888751261
  author: "@hyraxai"
  observed_at: 2026-07-27
  event_date: 2026-07-22
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2079989950888751261) as 2026-07-22T18:00:23Z.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Points to third-party blog; Antigravity-specific scope and remediation still need primary cross-check.

- claim_id: antigravity-italian-press-sandbox-bypass-2026-07-23
  source: antigravity
  claim: Community post quotes Italian coverage claiming Codex, Cursor, Gemini CLI, and Antigravity can bypass sandbox restrictions and perform unwanted actions.
  primary_url: https://x.com/CristianoAnguil/status/2080253509451014290
  author: "@CristianoAnguil"
  observed_at: 2026-07-27
  event_date: 2026-07-23
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080253509451014290) as 2026-07-23T11:27:40Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Press amplification of the same sandbox-escape cluster; not independent proof.

- claim_id: antigravity-user-gemini-3-6-flash-impressions-2026-07-26
  source: antigravity
  claim: Community user starts a thread on programming impressions after a couple of days testing Gemini 3.6 Flash via Antigravity CLI.
  primary_url: https://x.com/pfelipm/status/2081460520272462091
  author: "@pfelipm"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081460520272462091) as 2026-07-26T19:23:54Z.
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Adoption/quality discourse seed; impressions not verified here.

- claim_id: antigravity-user-higher-limits-convenience-2026-07-26
  source: antigravity
  claim: Community user claims Antigravity CLI remains more convenient for now, with higher limits on Google AI Pro and a somewhat more user-friendly system.
  primary_url: https://x.com/oatisgromidos/status/2081376943144841331
  author: "@oatisgromidos"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081376943144841331) as 2026-07-26T13:51:48Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Quota/UX anecdote only.

- claim_id: antigravity-multi-agent-terminal-farm-2026-07-26
  source: antigravity
  claim: Community reply claims an operator runs four terminals in parallel with Claude, Codex, Grok, and Antigravity CLI for continuous monitoring and notes models have been slower lately.
  primary_url: https://x.com/shibi76/status/2081344646199087451
  author: "@shibi76"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081344646199087451) as 2026-07-26T11:43:27Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Adoption pattern showing Antigravity CLI in a multi-harness setup.

- claim_id: antigravity-user-totally-usable-2026-07-26
  source: antigravity
  claim: Community user states Antigravity CLI is totally usable.
  primary_url: https://x.com/twelve_sakuya/status/2081265800502210717
  author: "@twelve_sakuya"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081265800502210717) as 2026-07-26T06:30:09Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Minimal positive adoption sentiment.

- claim_id: antigravity-goal-gemini-3-6-quality-gap-2026-07-23
  source: antigravity
  claim: Community reply claims /goal with agy plus Gemini 3.6 Flash Mid/High is faster than 3.5 but quality is not there yet, needing other models to review and fix.
  primary_url: https://x.com/jellydn/status/2080338314767605797
  author: "@jellydn"
  observed_at: 2026-07-27
  event_date: 2026-07-23
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080338314767605797) as 2026-07-23T17:04:39Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Unverified feature (/goal) and quality comparison; needs docs/local probe.

- claim_id: antigravity-gori-mcp-install-agy-flag-2026-07-23
  source: antigravity
  claim: Community maintainer-style post claims gori mcp supports --install-agy alongside Claude, Grok, and Codex install flags so MCP can be configured for Antigravity CLI.
  primary_url: https://x.com/hahwul/status/2080324214998151562
  author: "@hahwul"
  observed_at: 2026-07-27
  event_date: 2026-07-23
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2080324214998151562) as 2026-07-23T16:08:38Z.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ecosystem MCP packaging chatter; verify against gori project primary surfaces.

- claim_id: antigravity-skills-certified-multi-platform-2026-07-26
  source: antigravity
  claim: Community account post claims skills were certified independently on Claude Code, Codex, OpenClaw, and Google Antigravity.
  primary_url: https://x.com/NexusCatalog/status/2081474641164394815
  author: "@NexusCatalog"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081474641164394815) as 2026-07-26T20:20:01Z.
  evidence_kind: community_account_post
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ecosystem interoperability marketing; certification method not receipted here.

- claim_id: antigravity-cloud-code-vs-antigravity-poll-2026-07-26
  source: antigravity
  claim: Community poll contrasts Google Cloud Code traditional extension flow versus Google Antigravity as an agentic autonomous IDE.
  primary_url: https://x.com/wallpepersphere/status/2081470524715409610
  author: "@wallpepersphere"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081470524715409610) as 2026-07-26T20:03:39Z.
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Market-positioning discourse; may blur Antigravity IDE vs CLI surfaces.

- claim_id: antigravity-acp-support-question-2026-07-21
  source: antigravity
  claim: Community post asks whether Google/Antigravity will adopt ACP, saying discontinued Gemini CLI was an early ACP adopter and claiming agy CLI support status via a google-antigravity/antigravity-cli GitHub issue comment.
  primary_url: https://x.com/t1tvs/status/2079628859159552090
  author: "@t1tvs"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2079628859159552090) as 2026-07-21T18:05:32Z.
  evidence_kind: community_discussion
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Protocol/ecosystem tension lead; verify exact ACP support against the linked issue and docs, not the tweet wording alone.

- claim_id: antigravity-stale-context-user-pain-2026-07-20
  source: antigravity
  claim: Community user claims annoyance using Antigravity because AGY information feels about eight months out of date and targets the wrong environment versus the one requested.
  primary_url: https://x.com/OmegaAbradax/status/2079266566596648971
  author: "@OmegaAbradax"
  observed_at: 2026-07-27
  event_date: 2026-07-20
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2079266566596648971) as 2026-07-20T18:05:55Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Freshness/context user-pain anecdote only.

- claim_id: antigravity-all-the-time-negative-2026-07-21
  source: antigravity
  claim: Community user claims continuous Antigravity CLI use feels bad.
  primary_url: https://x.com/totaloverdose0/status/2079580576194154621
  author: "@totaloverdose0"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2079580576194154621) as 2026-07-21T14:53:40Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Low-detail negative sentiment; no mechanism specified.

- claim_id: antigravity-1-1-3-reply-quality-complaint-2026-07-16
  source: antigravity
  claim: Community reply to the 1.1.3 maintainer post criticizes Antigravity CLI as glitchy with poor usage and models.
  primary_url: https://x.com/Phorceon/status/2077616774946935073
  author: "@Phorceon"
  observed_at: 2026-07-27
  event_date: 2026-07-16
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2077616774946935073) as 2026-07-16T04:50:14Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Reputational/quality complaint in reply thread; treat as sentiment lead only.

- claim_id: antigravity-cli-token-cost-notebooklm-2026-07-25
  source: antigravity
  claim: Community user prefers the app over CLI as a token eater, notes Google is calling it Antigravity CLI, and mentions NotebookLM integration via plugins/docs.
  primary_url: https://x.com/specialkdelslay/status/2081113786078134719
  author: "@specialkdelslay"
  observed_at: 2026-07-27
  event_date: 2026-07-25
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081113786078134719) as 2026-07-25T20:26:06Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Token-cost pain plus plugin/NotebookLM chatter; needs docs cross-check.

- claim_id: antigravity-forced-migration-ide-fatigue-2026-07-26
  source: antigravity
  claim: Community user describes being forced onto Antigravity after Gemini CLI and finding traditional IDE interfaces less appealing than terminal-native agent environments.
  primary_url: https://x.com/Gonnector/status/2081370258179510316
  author: "@Gonnector"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2081370258179510316) as 2026-07-26T13:25:14Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Migration friction and surface-preference anecdote; may mix IDE and CLI product surfaces.

- claim_id: antigravity-oauth-block-user-report-2026-07-06
  source: antigravity
  claim: Community user alleges Google blocks Antigravity OAuth and Gemini CLI OAuth and bans users who use it, asking a third party for help.
  primary_url: https://x.com/Teknium/status/2073956256327577698
  author: "@Teknium"
  observed_at: 2026-07-27
  event_date: 2026-07-06
  date_precision: day
  date_note: Exact post timestamp resolved via public post lookup (ID 2073956256327577698) as 2026-07-06T02:24:38Z.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Access/auth pain lead only. Conduct/ban allegations about Google remain unconfirmed social claims and should stay out of claim text beyond what the post asserts until primary evidence exists.
```
