```yaml
- claim_id: claude-devs-cross-session-messaging-2026-08-07
  source: claude-code
  claim: Official @ClaudeDevs post says Claude Code sessions can message each other via summaries (not full history/files), bidirectionally, with Claude able to initiate; macOS/Linux called out and docs linked.
  primary_url: https://x.com/ClaudeDevs/status/2085817074816070014
  author: "@ClaudeDevs"
  observed_at: 2026-08-17
  event_date: 2026-08-07
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Companion URL also cited in search as https://x.com/ClaudeDevs/status/2085817076980297840; docs URL alleged code.claude.com/docs/en/cross-session-messaging. Unverified product surface until changelog/docs crosscheck.

- claim_id: claude-devs-managed-agents-four-updates-2026-08-07
  source: claude-code
  claim: Official @ClaudeDevs thread claims four Managed Agents updates session budgets with budget_reached, inference_geo US/global, skills loaded from attached repo .claude/skills/, and advisor stronger-model second opinions.
  primary_url: https://x.com/ClaudeDevs/status/2085853169930957158
  author: "@ClaudeDevs"
  observed_at: 2026-08-17
  event_date: 2026-08-07
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Managed Agents may be adjacent to CLI Claude Code; keep scoped as social lead until primary docs/changelog confirm channel and audience.

- claim_id: bcherny-auto-mode-default-next-week-prompt-injection-2026-08-07
  source: claude-code
  claim: Maintainer @bcherny says stacking model training, input probes, and an intent classifier can drive indirect prompt injection near 0% on unseen attacks, and that auto mode becomes default in Claude Code the following week; links claude.com blog.
  primary_url: https://x.com/bcherny/status/2085860677990883454
  author: "@bcherny"
  observed_at: 2026-08-17
  event_date: 2026-08-07
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Related maintainer posts https://x.com/bcherny/status/2085807103382519872 and https://x.com/bcherny/status/2085953586387894475; eval numbers and default rollout need primary blog/changelog crosscheck.

- claim_id: bcherny-eval-footnote-claude-code-vs-codex-versions-2026-08-07
  source: claude-code
  claim: Maintainer @bcherny says an eval footnote used Claude Code v2.1.205 and Codex v0.144.5 and notes OpenAI released a new Auto-review version that could change results.
  primary_url: https://x.com/bcherny/status/2085873966670123178
  author: "@bcherny"
  observed_at: 2026-08-17
  event_date: 2026-08-07
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Benchmark discourse lead only; versions and methodology unverified without the underlying eval artifact.

- claim_id: bcherny-auto-mode-layers-zero-percent-default-2026-08-09
  source: claude-code
  claim: Maintainer @bcherny states roughly 0% residual risk if operators layer model plus probe plus auto mode, calling that stack the default for Claude Code users starting the next week.
  primary_url: https://x.com/bcherny/status/2086541679126086079
  author: "@bcherny"
  observed_at: 2026-08-17
  event_date: 2026-08-09
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Security/default-permission intent signal; treat percentages as social claim pending primary writeup.

- claim_id: claude-devs-auto-mode-how-it-works-video-2026-08-10
  source: claude-code
  claim: Official @ClaudeDevs post says auto mode was made default in Claude Code so users no longer approve every action, and posts a video on what determines safe-to-run.
  primary_url: https://x.com/ClaudeDevs/status/2086844755770757531
  author: "@ClaudeDevs"
  observed_at: 2026-08-17
  event_date: 2026-08-10
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Wording about already-default may conflict with Aug 14 rollout posts; needs primary changelog/blog timeline crosscheck.

- claim_id: bcherny-worktree-cleanup-loop-build-in-question-2026-08-11
  source: claude-code
  claim: Maintainer @bcherny says piled-up git worktrees are rough, that he uses a cleanup loop for stale worktrees, and asks whether Claude Code should build that in.
  primary_url: https://x.com/bcherny/status/2087024157196489117
  author: "@bcherny"
  observed_at: 2026-08-17
  event_date: 2026-08-11
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Maintainer pain/intent signal about multi-worktree agent workflows; not a shipped feature claim.

- claim_id: bcherny-code-review-forked-agent-since-2-1-218-2026-08-12
  source: claude-code
  claim: Maintainer @bcherny says /code-review should use a forked agent since 2.1.218 (alleged July 21 release) and tells users to run claude update for latest.
  primary_url: https://x.com/bcherny/status/2087383935491907894
  author: "@bcherny"
  observed_at: 2026-08-17
  event_date: 2026-08-12
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Version and fork-default behavior need changelog/npm crosscheck; social_only until verified on release surface.

- claim_id: bcherny-claude-maintains-apps-388-prs-2026-08-13
  source: claude-code
  claim: Maintainer @bcherny describes an internal experiment where Claude runs daily maintenance routines across apps via Slack and opened 388 PRs with 180 merged after Claude Code Review plus human review.
  primary_url: https://x.com/bcherny/status/2088014489438621990
  author: "@bcherny"
  observed_at: 2026-08-17
  event_date: 2026-08-13
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: High-signal maintainer adoption/philosophy lead (crash fuzzer, dup unifier, dead-code remover, abstraction police). Follow-up prompt detail https://x.com/bcherny/status/2088022665017901167. Internal Anthropic workflow, not a public product guarantee.

- claim_id: claude-devs-desktop-auto-continue-usage-limit-2026-08-13
  source: claude-code
  claim: Official @ClaudeDevs post says Claude Code desktop gained an auto-continue checkbox that resumes work when a usage limit resets.
  primary_url: https://x.com/ClaudeDevs/status/2088014831605702937
  author: "@ClaudeDevs"
  observed_at: 2026-08-17
  event_date: 2026-08-13
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Desktop-specific UX claim; confirm against official docs/changelog and which clients actually ship it.

- claim_id: claude-code-log-2-1-232-subagent-fork-default-cross-session-2026-08-13
  source: claude-code
  claim: Community changelog account @ClaudeCodeLog claims Claude Code 2.1.232 with ~49 CLI changes including subagent forking default, GitLab token redaction, and @name cross-session SendMessage, plus assorted security fixes.
  primary_url: https://x.com/ClaudeCodeLog/status/2088048589566042367
  author: "@ClaudeCodeLog"
  observed_at: 2026-08-17
  event_date: 2026-08-13
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Unofficial bot; detailed thread also https://x.com/ClaudeCodeLog/status/2088048601154871477. Reject as receipt until official changelog/npm package match.

- claim_id: claude-devs-auto-mode-default-rollout-pro-max-team-2026-08-14
  source: claude-code
  claim: Official @ClaudeDevs post says auto mode is rolling out as the default permission mode in Claude Code for Pro, Max, and Team, with Shift+Tab mode switching, defaultMode pin, and prior default respected unless user confirms change; cites dangerous-command catch rates versus manual approval.
  primary_url: https://x.com/ClaudeDevs/status/2088332927189049738
  author: "@ClaudeDevs"
  observed_at: 2026-08-17
  event_date: 2026-08-14
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Related setup post https://x.com/ClaudeDevs/status/2088332928514420830 (/auto-mode-setup). Blog allegedly claude.com/blog/auto-mode-default-in-claude-code. Percentage claims need primary methods, not social alone.

- claim_id: claude-code-log-2-1-233-cgroup-gitlab-windows-path-2026-08-14
  source: claude-code
  claim: Community changelog account @ClaudeCodeLog claims Claude Code 2.1.233 with opt-in Bash memory cgroup via CLAUDE_CODE_TOOL_MEMORY_LIMIT, GitLab MR URL worktree support, Windows NT path bypass blocking, and notes todo/task tools off by default on newer models unless CLAUDE_CODE_ENABLE_TODO_TOOLS=1.
  primary_url: https://x.com/ClaudeCodeLog/status/2088393117703582063
  author: "@ClaudeCodeLog"
  observed_at: 2026-08-17
  event_date: 2026-08-14
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Unofficial; companion threads https://x.com/ClaudeCodeLog/status/2088393128340230314 and https://x.com/ClaudeCodeLog/status/2088393138612105268. Crosscheck official changelog and package version before any product claim.

- claim_id: hamelhusain-consensus-shift-claude-to-codex-2026-08-04
  source: claude-code
  claim: Community voice @HamelHusain says consensus shifted from Claude as favorite toward Codex, citing harness (Codex Desktop), subscription inclusions/pricing, fewer refusals, and freer subscription use across tools.
  primary_url: https://x.com/HamelHusain/status/2084655655978512717
  author: "@HamelHusain"
  observed_at: 2026-08-17
  event_date: 2026-08-04
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ecosystem tension/adoption sentiment only; not a product fact about Claude Code capabilities.

- claim_id: intcyberdigest-claude-code-force-delete-home-files-2026-08-05
  source: claude-code
  claim: Community account @IntCyberDigest relays a developer report that Claude Code (Opus) force-deleted user files after a bad backup path cleanup and continued casually afterward.
  primary_url: https://x.com/IntCyberDigest/status/2085095341171347658
  author: "@IntCyberDigest"
  observed_at: 2026-08-17
  event_date: 2026-08-05
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day); underlying incident date may differ.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Secondhand social summary of an alleged operator incident (Reddit referred in discussion). Related reaction https://x.com/BillyM2k/status/2086198881470341232. Do not promote to product defect without primary operator thread and repro context. Conduct/severity stays in notes.

- claim_id: yasuo-ozu-max20x-weekly-limit-burn-2026-08-10
  source: claude-code
  claim: Operator @yasuo_ozu discusses Max 20x weekly versus 5-hour window burn behavior for Claude Code usage, claiming upgrade does not simply scale as 4x Max 5x in practice.
  primary_url: https://x.com/yasuo_ozu/status/2086761450484412917
  author: "@yasuo_ozu"
  observed_at: 2026-08-17
  event_date: 2026-08-10
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Quota pain lead; plan multipliers and windows need Anthropic usage docs crosscheck.

- claim_id: jakozaur-max-seat-subsidy-vs-api-list-2026-08-11
  source: claude-code
  claim: Operator @jakozaur prices personal Claude Code token use at API list rates and claims large effective subsidies on Max 5x/20x seat plans (orders-of-magnitude vs list), calling seats a buffet subsidy.
  primary_url: https://x.com/jakozaur/status/2087175474279587988
  author: "@jakozaur"
  observed_at: 2026-08-17
  event_date: 2026-08-11
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Economics/benchmark-style personal math with external blog link alleged; not an official pricing statement.

- claim_id: exm7777-claude-code-default-bloat-optimization-guide-2026-08-11
  source: claude-code
  claim: Operator @EXM7777 claims default Claude Code behavior is token-heavy, argumentative, and slow, and shares a long optimization checklist around CLAUDE.md, context, MCPs, skills, and sessions.
  primary_url: https://x.com/EXM7777/status/2087176716901023834
  author: "@EXM7777"
  observed_at: 2026-08-17
  event_date: 2026-08-11
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: User pain / workflow discourse; anecdotal.

- claim_id: alexey-you-switch-from-claude-code-remote-verbosity-2026-08-12
  source: claude-code
  claim: Operator @alexey_you describes switching away from Claude Code, citing stronger remote sessions elsewhere, verbosity/hidden-reasoning friction on Claude Code, and preference for a competing model class.
  primary_url: https://x.com/alexey_you/status/2087562417194606652
  author: "@alexey_you"
  observed_at: 2026-08-17
  event_date: 2026-08-12
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Adoption churn sentiment; single-operator comparison.

- claim_id: constantindiez-instruction-follow-regression-verbosity-2026-08-12
  source: claude-code
  claim: Operator @ConstantinDiez reports Claude Code ignoring instructions more since a 5-series change, stopping early, becoming opinionated/verbose, slower/more expensive, plus infrastructure issues.
  primary_url: https://x.com/ConstantinDiez/status/2087589603871965534
  author: "@ConstantinDiez"
  observed_at: 2026-08-17
  event_date: 2026-08-12
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Reliability/regression chatter; model-vs-harness attribution unclear.

- claim_id: cobraxai-windows-multi-agent-crashes-update-pain-2026-08-14
  source: claude-code
  claim: Operator @cobraxai reports frequent Windows crashes with multiple agents/tabs that burn usage, plus update/open failures.
  primary_url: https://x.com/cobraxai/status/2088233870919672002
  author: "@cobraxai"
  observed_at: 2026-08-17
  event_date: 2026-08-14
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Platform reliability pain lead; needs repro and version pins.

- claim_id: janschultecom-permissions-ignore-multi-change-verbosity-2026-08-16
  source: claude-code
  claim: Operator @janschultecom claims Claude Code ignores permission requests, bundles multiple unintended changes under one permission, and produces overly verbose summaries, becoming less usable.
  primary_url: https://x.com/janschultecom/status/2088932370434896312
  author: "@janschultecom"
  observed_at: 2026-08-17
  event_date: 2026-08-16
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Permission-model pain adjacent to auto-mode default discourse; unverified.

- claim_id: dankornas-claude-pulse-usage-visibility-2026-08-16
  source: claude-code
  claim: Operator @DanKornas discusses claude-pulse style statusline tooling to surface 5h/7d usage, context, cost, and per-model bars because native Claude Code usage visibility feels limited.
  primary_url: https://x.com/DanKornas/status/2088952664675541373
  author: "@DanKornas"
  observed_at: 2026-08-17
  event_date: 2026-08-16
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ecosystem tooling response to quota opacity; not an official feature.

- claim_id: deepstarts-max-weekly-limits-insufficient-2026-08-16
  source: claude-code
  claim: Operator @DeepStarts reports heavy multi-agent Claude Code use routinely hits Max-tier weekly limits and finds them insufficient mid-task.
  primary_url: https://x.com/DeepStarts/status/2088964470613909544
  author: "@DeepStarts"
  observed_at: 2026-08-17
  event_date: 2026-08-16
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Economics/attention bottleneck lead; plan tier details need primary usage docs.

- claim_id: shawmakesmagic-system-prompt-pi-harness-better-2026-08-16
  source: claude-code
  claim: Community voice @shawmakesmagic criticizes Claude Code system prompt tone/content and says it helps explain why Pi feels much better as a harness than Claude Code.
  primary_url: https://x.com/shawmakesmagic/status/2089047953772331218
  author: "@shawmakesmagic"
  observed_at: 2026-08-17
  event_date: 2026-08-16
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Harness-vs-prompt philosophy tension; opinionated, not a product receipt.

- claim_id: ianhunter-deepseek-harness-better-experience-2026-08-16
  source: claude-code
  claim: Operator @ianhunter claims a DeepSeek harness delivers a far better experience than Claude Code while still wanting stronger coding models via model-swapping.
  primary_url: https://x.com/ianhunter/status/2089120393005265228
  author: "@ianhunter"
  observed_at: 2026-08-17
  event_date: 2026-08-16
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Competitive harness discourse; subjective UX comparison.

- claim_id: itsjustmarky-many-better-harnesses-than-claude-code-2026-08-16
  source: claude-code
  claim: Community voice @itsjustmarky asserts there are many better harnesses than Claude Code.
  primary_url: https://x.com/itsjustmarky/status/2089122814708023645
  author: "@itsjustmarky"
  observed_at: 2026-08-17
  event_date: 2026-08-16
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Low-detail competitive sentiment; pair with richer comparison threads if promoted.

- claim_id: paz-al3x-switching-back-to-codex-from-claude-code-2026-08-16
  source: claude-code
  claim: Operator @paz_al3x says after about seven days they are switching back to Codex from Claude Code.
  primary_url: https://x.com/paz_al3x/status/2089133911615906040
  author: "@paz_al3x"
  observed_at: 2026-08-17
  event_date: 2026-08-16
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Churn anecdote; reasons may be in thread replies not fully captured here.

- claim_id: atmosuzy-claude-stack-auth-outage-includes-claude-code-2026-08-16
  source: claude-code
  claim: Community reporter @atmosuzy describes a short Aug 16 authentication outage affecting claude.ai, Claude Code, related products, API, and Console with rapid expand then resolve.
  primary_url: https://x.com/atmosuzy/status/2089134650409230477
  author: "@atmosuzy"
  observed_at: 2026-08-17
  event_date: 2026-08-16
  date_precision: day
  date_note: Resolved from post snowflake timestamp (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Reliability lead; confirm against official status page before treating impact scope/times as fact.
```
