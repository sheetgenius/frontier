```yaml
- claim_id: codex-2026-07-09-openai-chatgpt-work
  source: codex
  claim: Official OpenAI account posted that ChatGPT Work is a new agent powered by Codex and GPT-5.6, described as acting across apps and files and staying with a project for hours, with desktop Chat/Work/Codex surfaces and Codex app updates becoming the ChatGPT desktop app.
  primary_url: https://x.com/OpenAI/status/2075274271845404744
  author: "@OpenAI"
  observed_at: 2026-07-27
  event_date: 2026-07-09
  date_precision: day
  date_note: Date reported by x_search citation metadata as Thu, 09 Jul 2026 17:41:57 GMT; related rollout reply https://x.com/OpenAI/status/2075274276849226204.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Discovery-only product/surface claim. Related same-day model-availability post https://x.com/OpenAI/status/2075271435573244008. Cross-check official Codex/ChatGPT docs, app release notes, and plan-eligibility wording before any promotion.

- claim_id: codex-2026-07-09-cli-0-144-approvals-sandbox
  source: codex
  claim: Community release-tracker account posted that Codex CLI 0.144.0 added interactive MCP tool auth without experimental opt-in, a writes app-approval mode, and Windows sandbox changes allowing deletes in writable roots plus managed primary runtime access.
  primary_url: https://x.com/CodexReleases/status/2075261656146522158
  author: "@CodexReleases"
  observed_at: 2026-07-27
  event_date: 2026-07-09
  date_precision: day
  date_note: Date reported by x_search citation metadata as Thu, 09 Jul 2026 16:51:49 GMT; post allegedly points at github.com/openai/codex/releases/tag/rust-v0.144.0.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Unofficial tracker, not a primary OpenAI surface. Approvals/sandbox/MCP claims are high-signal only as investigation leads against the GitHub tag, changelog, and local probe.

- claim_id: codex-2026-07-08-cli-0-143-remote-plugins-mcp
  source: codex
  claim: Community release-tracker account posted that Codex CLI 0.143.0 enabled remote plugins by default via an npm marketplace, defaulted MCP tools to tool search, added ChatGPT-hosted MCP session auth, and mentioned Bedrock GPT-5.6 model routing plus Windows ConPTY/sandbox credential fixes.
  primary_url: https://x.com/CodexReleases/status/2074668188651098181
  author: "@CodexReleases"
  observed_at: 2026-07-27
  event_date: 2026-07-08
  date_precision: day
  date_note: Date reported by x_search citation metadata as Wed, 08 Jul 2026 01:33:36 GMT; post allegedly points at github.com/openai/codex/releases/tag/rust-v0.143.0.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Plugin marketplace and MCP defaults are ecosystem/control-plane leads only until checked against official release notes and docs.

- claim_id: codex-2026-07-09-desktop-merge-computer-use
  source: codex
  claim: Community release-tracker account posted that Codex joined the ChatGPT desktop app with multi-repo project support, sidebar GitHub PR review, faster Computer Use under GPT-5.6, and plugin management moved into Settings.
  primary_url: https://x.com/CodexReleases/status/2075265220054782386
  author: "@CodexReleases"
  observed_at: 2026-07-27
  event_date: 2026-07-09
  date_precision: day
  date_note: Date reported by x_search citation metadata as Thu, 09 Jul 2026 17:05:59 GMT.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Aligns thematically with the official ChatGPT Work / desktop merge posts but remains secondary social evidence. Computer Use performance claim is unverified.

- claim_id: codex-2026-07-13-maintainer-usage-context-multiaagent
  source: codex
  claim: OpenAI Codex-adjacent maintainer @thsottiaux posted usage updates claiming inference optimizations (~10% more usage), a temporary context-limit revert from 372k to 272k for GPT-5.6 Sol after unintended usage drain, multi-agent over-use on high/xhigh being fixed, auto-review efficiency work, and a temporarily disabled 5h limit.
  primary_url: https://x.com/thsottiaux/status/2076495156757577895
  author: "@thsottiaux"
  observed_at: 2026-07-27
  event_date: 2026-07-13
  date_precision: day
  date_note: Date reported by x_search citation metadata as Mon, 13 Jul 2026 02:33:19 GMT; follow-up clarification https://x.com/thsottiaux/status/2076543065045795309 same day.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Strong maintainer-intent / economics lead about usage metering, context windows, and multi-agent cost behavior. Product numbers and limit policy still need primary docs, in-product settings, or changelog cross-check. Related community analysis https://x.com/theo/status/2076512403668488299.

- claim_id: codex-2026-07-13-theo-usage-burn-stack
  source: codex
  claim: Community account @theo posted a stacked explanation of Codex usage burn involving larger context, nested Ultra subagents, and early multi-agent v2 context-copy behavior under Sol/Terra, describing extreme drain when combined with fast mode.
  primary_url: https://x.com/theo/status/2076512403668488299
  author: "@theo"
  observed_at: 2026-07-27
  event_date: 2026-07-13
  date_precision: day
  date_note: Date reported by x_search citation metadata as Mon, 13 Jul 2026.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: High-engagement pain/economics discourse, not a receipt. Useful as a pointer into maintainer replies and multi-agent v2 behavior; do not promote mechanism details without primary confirmation.

- claim_id: codex-2026-07-10-subagent-model-routing-pain
  source: codex
  claim: Community user @dedene posted that GPT-5.6 Sol plus subagents in Codex CLI burned usage quickly due to an alleged bug forcing Sol for spawned subagents, and shared a ~/.codex/config.toml workaround under features.multi_agent_v2.
  primary_url: https://x.com/dedene/status/2075504332594885040
  author: "@dedene"
  observed_at: 2026-07-27
  event_date: 2026-07-10
  date_precision: day
  date_note: Date reported by x_search citation metadata as Fri, 10 Jul 2026; post allegedly links a GitHub issue.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: User-pain lead about subagent model selection and spend control. Config keys and bug status need issue/PR/release cross-check; workaround is not an operator instruction.

- claim_id: codex-2026-07-16-cli-0-144-5-dangerous-command-detection
  source: codex
  claim: Community release-tracker account posted that Codex CLI 0.144.5 improved dangerous-command detection for more forced rm forms and clearer rejection reasons when commands are denied.
  primary_url: https://x.com/CodexReleases/status/2077588288265765226
  author: "@CodexReleases"
  observed_at: 2026-07-27
  event_date: 2026-07-16
  date_precision: day
  date_note: Date reported by x_search citation metadata as Thu, 16 Jul 2026 02:57:02 GMT; post allegedly points at github.com/openai/codex/releases/tag/rust-v0.144.5.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Security/permissions reliability lead only. Verify against release notes and command-policy behavior before any trust or governance claim.

- claim_id: codex-2026-07-13-cli-0-144-2-guardian-autoreview-revert
  source: codex
  claim: Community release-tracker account posted that Codex CLI 0.144.2 reverted a prompting regression affecting Guardian auto-review policy, request format, and tool behavior.
  primary_url: https://x.com/CodexReleases/status/2076528324491231369
  author: "@CodexReleases"
  observed_at: 2026-07-27
  event_date: 2026-07-13
  date_precision: day
  date_note: Date reported by x_search citation metadata as Mon, 13 Jul 2026 04:45:07 GMT; post allegedly points at github.com/openai/codex/releases/tag/rust-v0.144.2 and mentions rollback of #32672.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Governance/auto-review control-plane lead. Needs PR/tag confirmation; do not infer current policy from the social summary alone.

- claim_id: codex-2026-07-17-openai-codex-security-plugin
  source: codex
  claim: Official OpenAI account posted that GPT-5.6 Sol set a cybersecurity SOTA on “The Last Ones” cyber range and directed users to put it to work with a Codex Security plugin, with a how-to for install, folder selection, and scan prompt.
  primary_url: https://x.com/OpenAI/status/2078243667081617826
  author: "@OpenAI"
  observed_at: 2026-07-27
  event_date: 2026-07-17
  date_precision: day
  date_note: Date reported by x_search citation metadata as Fri, 17 Jul 2026 22:21:16 GMT; how-to reply https://x.com/OpenAI/status/2078243670265041038.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Benchmark/method and plugin availability claims remain unverified social leads. Cross-check plugin marketplace/docs and any published evaluation method before treating security outcomes as evidence.

- claim_id: codex-2026-07-21-cli-0-145-multiaagent-v2-stable
  source: codex
  claim: Community release-tracker account posted that Codex CLI 0.145.0 made Multi-agent V2 stable with configurable sub-agent models, reasoning, concurrency, and roles; expanded /import for Cursor/Claude Code settings, MCP, plugins, sessions, commands, and project-scoped memories; and added experimental paginated thread history plus audio/realtime V3.
  primary_url: https://x.com/CodexReleases/status/2079634417299918949
  author: "@CodexReleases"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Date reported by x_search citation metadata as Tue, 21 Jul 2026 18:27:37 GMT; post allegedly points at github.com/openai/codex/releases/tag/rust-v0.145.0.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Core long-horizon/subagent/memory/workflow lead for the window. Community amplification example https://x.com/kkaminsk/status/2080702166457831745. All version/feature claims need primary release and behavior checks.

- claim_id: codex-2026-07-21-mongodb-codex-plugin
  source: codex
  claim: MongoDB official account posted an official MongoDB Codex plugin claiming MCP server connectivity plus pre-built skills for data modeling, query optimization, Search, and Vector Search.
  primary_url: https://x.com/MongoDB/status/2079423625841492412
  author: "@MongoDB"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Date reported by x_search citation metadata as Tue, 21 Jul 2026 04:30:00 GMT.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ecosystem plugin/marketplace adoption lead. Not an OpenAI primary; verify plugin listing, install path, and MCP/skill contents on official surfaces.

- claim_id: codex-2026-07-23-openai-voice-multi-agent-control
  source: codex
  claim: Official OpenAI account posted that ChatGPT Voice is in the desktop app via GPT-Live and can control the computer and direct multiple agents running in ChatGPT Work or Codex by voice, with a follow-up about iOS remote access for Codex.
  primary_url: https://x.com/OpenAI/status/2080378182469857576
  author: "@OpenAI"
  observed_at: 2026-07-27
  event_date: 2026-07-23
  date_precision: day
  date_note: Date reported by x_search citation metadata as Thu, 23 Jul 2026 19:43:04 GMT; iOS remote follow-up https://x.com/OpenAI/status/2080392280549253392.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Computer-use / multi-agent coordination surface lead. Plan eligibility and actual control scope need docs or reproducible probe; social post alone is not a capability receipt.

- claim_id: codex-2026-07-23-app-multi-folder-agents-md-skills
  source: codex
  claim: Community release-tracker account posted Codex app update 26.715 with ChatGPT Voice and multi-folder local projects where the primary folder drives chats/Git and automatic AGENTS.md, skills, and config.toml discovery while secondary folders are used for search/read/edit.
  primary_url: https://x.com/CodexReleases/status/2080374810895331450
  author: "@CodexReleases"
  observed_at: 2026-07-27
  event_date: 2026-07-23
  date_precision: day
  date_note: Date reported by x_search citation metadata as Thu, 23 Jul 2026 19:29:41 GMT.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: AGENTS.md/skills discovery and multi-root project behavior are high-signal operator leads. Cross-check app release notes and docs; related community AGENTS.md guide https://x.com/cv_usk/status/2080550549523476854 is instructional chatter only.

- claim_id: codex-2026-07-24-insforge-plugin-marketplace
  source: codex
  claim: InsForge account posted that InsForge is in OpenAI’s curated plugin marketplace with an InsForge CLI plus skills for coding agents, framed as giving Codex agents access to an agent-native AWS alternative.
  primary_url: https://x.com/insforge/status/2080752853233066403
  author: "@insforge"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Date reported by x_search citation metadata as Fri, 24 Jul 2026 20:31:53 GMT.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ecosystem marketplace claim from the vendor account. Verify marketplace listing and plugin contents; marketing comparisons stay in notes only.

- claim_id: codex-2026-07-16-adoption-vs-claude-limits
  source: codex
  claim: Community user @VaibhavSisinty posted a comparative adoption/pain anecdote that Claude hit limits repeatedly on a high-tier plan while Codex allowed multiple parallel agent loops with fewer resets, preferring GPT-5.6 for most work.
  primary_url: https://x.com/VaibhavSisinty/status/2077734829572096122
  author: "@VaibhavSisinty"
  observed_at: 2026-07-27
  event_date: 2026-07-16
  date_precision: day
  date_note: Date reported by x_search citation metadata as Thu, 16 Jul 2026.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Adoption and quota-tension discourse only. Not a benchmark receipt. Related sentiment posts include https://x.com/codyplof/status/2078465480289870127 and https://x.com/pcshipp/status/2076655095496990843.

- claim_id: codex-2026-07-26-parallel-harness-comparison
  source: codex
  claim: Community user @tomhacks posted a head-to-head anecdote running Codex and Claude in parallel, claiming Codex produced cleaner PRs with fewer iterations and better AGENTS.md adherence while both saw CLI hangs or 403s.
  primary_url: https://x.com/tomhacks/status/2081374911939887307
  author: "@tomhacks"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Date reported by x_search citation metadata as Sun, 26 Jul 2026.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Unverified benchmark/anecdote discourse. Useful only to cue reliability and instruction-following checks against primary surfaces and controlled evals.

- claim_id: codex-2026-07-25-sandbox-escape-chatter
  source: codex
  claim: Community account @EveryDevAi posted that around the same days as a Claude Opus 5 event, seven sandbox escapes were reported across Cursor, Codex CLI, Gemini CLI, and Antigravity.
  primary_url: https://x.com/EveryDevAi/status/2081025386859884855
  author: "@EveryDevAi"
  observed_at: 2026-07-27
  event_date: 2026-07-25
  date_precision: day
  date_note: Date reported by x_search citation metadata as Sat, 25 Jul 2026.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: not_applicable
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Security-tension lead only. No CVE, advisory, or maintainer confirmation attached here; do not promote count, severity, or Codex-specific impact without primary incident receipts. Related k8s sandbox hosting chatter https://x.com/edkadigital/status/2080551898474586371 is separate and also unverified.

- claim_id: codex-2026-07-12-browser-account-session-chatter
  source: codex
  claim: Community user @0x_kaize posted that a latest Codex update enables browsing with the user account by importing Chrome cookies/passwords and offers built-in browser DOM/console/network actions such as checking email and filling forms.
  primary_url: https://x.com/0x_kaize/status/2076374581229637780
  author: "@0x_kaize"
  observed_at: 2026-07-27
  event_date: 2026-07-12
  date_precision: day
  date_note: Date reported by x_search citation metadata as Sun, 12 Jul 2026 18:34:11 GMT.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Browser/computer-use credential-boundary lead. Cookie/password import claim is sensitive and unverified; investigate only via official docs/release notes, not this post.

- claim_id: codex-2026-07-10-maintainer-launch-feedback-not-sunsetting
  source: codex
  claim: Maintainer @thsottiaux posted launch-week feedback responses describing usage resets across Codex and ChatGPT Work, high-compute defaults, desktop reorg, multi-agent workflow regressions and plugin issues, and an explicit framing that Codex was not going away despite ChatGPT/Codex combination ambitions.
  primary_url: https://x.com/thsottiaux/status/2075641131002700120
  author: "@thsottiaux"
  observed_at: 2026-07-27
  event_date: 2026-07-10
  date_precision: day
  date_note: Date reported by x_search citation metadata as Fri, 10 Jul 2026 17:59:43 GMT; nearby reset posts include https://x.com/thsottiaux/status/2075330198887940337 and https://x.com/thsottiaux/status/2075452680760443190.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Maintainer-intent and packaging/positioning lead around ChatGPT-Codex merge anxiety. Product regression and reset details still need primary confirmation before any operational reading.
```
