Compiling the highest-signal in-window leads into YAML records only.

```yaml
- claim_id: hermes-agent-2026-07-08-cloud-portal-launch
  source: hermes-agent
  claim: Official @NousResearch account posted that Hermes Agent is available in the cloud via simple setup (model and server size, live in about 60 seconds) with org features including per-user agents, access controls, and unified billing through Nous Portal.
  primary_url: https://x.com/NousResearch/status/2074878754485043333
  author: "@NousResearch"
  observed_at: 2026-07-27
  event_date: 2026-07-08
  date_precision: day
  date_note: Date reported by x_search citation metadata as Wed, 08 Jul 2026.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Discovery-only cloud/product-surface claim. Cross-check Portal docs, billing pages, and GitHub/docs before treating cloud org controls as shipped. Related community amplify posts include https://x.com/IBuzovskyi/status/2074883463916777612 and https://x.com/HermesAgentTips/status/2074883781933011001.

- claim_id: hermes-agent-2026-07-10-desktop-cloud-autoconnect
  source: hermes-agent
  claim: Official @NousResearch account posted that the Hermes Desktop app can discover and auto-connect to Hermes Cloud agents after Nous Portal sign-in.
  primary_url: https://x.com/NousResearch/status/2075675120442486931
  author: "@NousResearch"
  observed_at: 2026-07-27
  event_date: 2026-07-10
  date_precision: day
  date_note: Date reported by x_search as 2026-07-10; maintainer echo at https://x.com/Teknium/status/2075680180442747309 same day.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Desktop-to-cloud remote connection claim is social-only until checked against desktop release notes and Portal docs. Community install friction posts later in the window contest the local-install path around remote agents.

- claim_id: hermes-agent-2026-07-09-gpt-5-6-portal
  source: hermes-agent
  claim: Official @NousResearch account posted that GPT-5.6 support is available in Hermes Agent via Nous Portal.
  primary_url: https://x.com/NousResearch/status/2075270903458373640
  author: "@NousResearch"
  observed_at: 2026-07-27
  event_date: 2026-07-09
  date_precision: day
  date_note: Date reported by x_search citation metadata as 2026-07-09.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Model-availability claim only. Cross-check Portal model catalog and Hermes provider docs; do not treat as a Hermes version pin.

- claim_id: hermes-agent-2026-07-16-kimi-support
  source: hermes-agent
  claim: Maintainer @Teknium posted that Kimi model support is welcome in Hermes Agent via Portal, Kimi Direct, and OpenRouter, noting an update is needed for direct.
  primary_url: https://x.com/Teknium/status/2077849107369218211
  author: "@Teknium"
  observed_at: 2026-07-27
  event_date: 2026-07-16
  date_precision: day
  date_note: Date reported by x_search as 2026-07-16.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Provider/model routing lead. Cross-check release notes and provider config docs for which channels actually work without a pending update.

- claim_id: hermes-agent-2026-07-16-raft-1-0-support
  source: hermes-agent
  claim: Maintainer @Teknium posted that Hermes Agent is fully supported in Raft 1.0 and encouraged trying it.
  primary_url: https://x.com/Teknium/status/2077652316547932536
  author: "@Teknium"
  observed_at: 2026-07-27
  event_date: 2026-07-16
  date_precision: day
  date_note: Date reported by x_search as 2026-07-16.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ecosystem interoperability claim about Raft 1.0. Identity of Raft and the support surface need primary cross-check; treat as social positioning until docs or release notes confirm.

- claim_id: hermes-agent-2026-07-19-async-subagent-visibility
  source: hermes-agent
  claim: Maintainer @Teknium posted that Hermes spawns async subagents and can now probe or read their activity with timestamps, check direction, and shut them down for long-running tasks, after previously limited visibility.
  primary_url: https://x.com/Teknium/status/2078919600746660173
  author: "@Teknium"
  observed_at: 2026-07-27
  event_date: 2026-07-19
  date_precision: day
  date_note: Date reported by x_search as 2026-07-19.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: High-signal subagent control-plane lead aligned with contract watch patterns (subagent, delegate). Cross-check commits/docs/release notes. Community durability pain nearby at https://x.com/BkashJosi/status/2078983140249686055.

- claim_id: hermes-agent-2026-07-19-desktop-tool-backend-fixes
  source: hermes-agent
  claim: Maintainer @Teknium posted that Hermes Agent desktop app fixes cover tool backends, readiness surfacing, and configurability, and that users should update the app.
  primary_url: https://x.com/Teknium/status/2078788393023217691
  author: "@Teknium"
  observed_at: 2026-07-27
  event_date: 2026-07-19
  date_precision: day
  date_note: Date reported by x_search as 2026-07-19.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Desktop reliability lead only. Pair with later community install/remote friction posts before any product conclusion.

- claim_id: hermes-agent-2026-07-20-grows-with-user-portal
  source: hermes-agent
  claim: Official @NousResearch account described Hermes as an agent that grows with the user and positioned Nous Portal as the best way to power it via bundled models, tools, and cloud agent under one subscription.
  primary_url: https://x.com/NousResearch/status/2079347632619577693
  author: "@NousResearch"
  observed_at: 2026-07-27
  event_date: 2026-07-20
  date_precision: day
  date_note: Date reported by x_search as 2026-07-20.
  evidence_kind: official_account_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Positioning and commercial bundling intent more than a discrete feature receipt. Useful for adoption/economics questions; not a capability proof.

- claim_id: hermes-agent-2026-07-22-portal-models-discount
  source: hermes-agent
  claim: Official @NousResearch account posted a limited-time 20 percent off all models at Nous Portal, framed as a way to power Hermes Agent including frontier models.
  primary_url: https://x.com/NousResearch/status/2080039066771337475
  author: "@NousResearch"
  observed_at: 2026-07-27
  event_date: 2026-07-22
  date_precision: day
  date_note: Date reported by x_search as 2026-07-22.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Pricing/promo lead only. Cross-check Portal billing pages for scope, duration, and eligibility; social post is not a durable price card.

- claim_id: hermes-agent-2026-07-22-teknium-cloud-sovereignty
  source: hermes-agent
  claim: Maintainer @Teknium posted that Nous can shape Hermes for quality and optimization per product, aims to make Nous cloud the cheapest and most powerful option for it, serves enterprise customers, and prefers self-hosted infra framing while asserting strong care for Hermes users.
  primary_url: https://x.com/Teknium/status/2079882124002574650
  author: "@Teknium"
  observed_at: 2026-07-27
  event_date: 2026-07-22
  date_precision: day
  date_note: Date reported by x_search as 2026-07-22.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Maintainer commercial and product-direction intent. Earlier sovereignty framing at https://x.com/Teknium/status/2073201424054562859 (2026-07-04). Keep as intent/positioning, not verified economics.

- claim_id: hermes-agent-2026-07-24-ironproxy-credential-firewall
  source: hermes-agent
  claim: Official @NousResearch account posted that a credential firewall called IronProxy for Docker sandboxes keeps real keys out of the sandbox via stand-in tokens and a local proxy swap at the boundary, with compromised tokens useless elsewhere, referencing hermes egress setup.
  primary_url: https://x.com/NousResearch/status/2080728699100406042
  author: "@NousResearch"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Date reported by x_search as 2026-07-24; maintainer echo https://x.com/Teknium/status/2080730158999474202 same day.
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: High-signal security/sandbox lead (contract patterns - sandbox, container, security). Cross-check docs for egress setup, Docker defaults, and threat model. Related community credential-memory concern earlier at https://x.com/samadh1i/status/2078960213525164405.

- claim_id: hermes-agent-2026-07-24-claude-opus-5-providers
  source: hermes-agent
  claim: Maintainer @Teknium posted that Claude Opus 5 is now available in Hermes Agent via Nous Portal, OpenRouter, and Anthropic Direct.
  primary_url: https://x.com/Teknium/status/2080745099789738119
  author: "@Teknium"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Date reported by x_search as 2026-07-24.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Multi-provider model availability claim. Verify provider docs and Hermes model routing tables; model name spelling and channel coverage are unverified here.

- claim_id: hermes-agent-2026-07-25-compaction-streaming-timeout
  source: hermes-agent
  claim: Maintainer @Teknium posted that users struggling with slow or local models timing out during compaction should see relief because streaming is now enabled on the backend so timeout is no longer dynamic and work continues as long as tokens arrive.
  primary_url: https://x.com/Teknium/status/2081099150255702513
  author: "@Teknium"
  observed_at: 2026-07-27
  event_date: 2026-07-25
  date_precision: day
  date_note: Date reported by x_search as 2026-07-25.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Reliability/runtime pain acknowledgment plus claimed fix. Cross-check commits/release notes for compaction streaming behavior; earlier same-window slowness report https://x.com/Teknium/status/2077227030639415633 attributed GPT slowness to outage/overload.

- claim_id: hermes-agent-2026-07-26-mcp-progressive-disclosure
  source: hermes-agent
  claim: Maintainer @Teknium posted that Hermes now scales to near-infinite MCP or plugin tools with high accuracy and large input-token savings via progressive disclosure, where tools act like skills behind a single search-and-execute tool and low-context tools are shown directly otherwise summarized behind search around a roughly 5 percent context threshold, with near-zero accuracy loss claimed in internal tests.
  primary_url: https://x.com/Teknium/status/2081450522608107816
  author: "@Teknium"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Date reported by x_search as 2026-07-26.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: High-signal MCP/toolset/economics lead. Internal-test accuracy and token-savings claims are unverified. Community reaction examples https://x.com/DG777___/status/2081451332016451657 and https://x.com/AIwithJai/status/2081490206574686500. Cross-check docs/commits before any operator guidance.

- claim_id: hermes-agent-2026-07-14-plugins-tracking-issue
  source: hermes-agent
  claim: Maintainer @Teknium posted a link to a GitHub tracking issue consolidating community requests and ideas for expanding the Hermes plugins system.
  primary_url: https://x.com/Teknium/status/2076903786560602394
  author: "@Teknium"
  observed_at: 2026-07-27
  event_date: 2026-07-14
  date_precision: day
  date_note: Date reported by x_search as 2026-07-14.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Roadmap/community-intent lead. Resolve the linked GitHub issue URL from the post body and treat issue contents as the primary surface for plugin expansion scope.

- claim_id: hermes-agent-2026-07-26-user-stories-docs
  source: hermes-agent
  claim: Maintainer @Teknium posted that a newly assembled user-stories docs page was created in response to a question.
  primary_url: https://x.com/Teknium/status/2081399150244143378
  author: "@Teknium"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Date reported by x_search as 2026-07-26.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Docs-surface lead only. Resolve the exact docs URL from the post and cross-check the deployed docs domain (contract open question on canonical docs).

- claim_id: hermes-agent-2026-07-10-sol-terra-pr-review-bench
  source: hermes-agent
  claim: Maintainer @Teknium posted an informal five-PR review benchmark of Sol vs Terra inside Hermes Agent on Hermes Agent PRs, saying both performed quite well as judged by Fable, and in a follow-up preferred Sol so far over Fable for Hermes development work.
  primary_url: https://x.com/Teknium/status/2075381154669293979
  author: "@Teknium"
  observed_at: 2026-07-27
  event_date: 2026-07-10
  date_precision: day
  date_note: Date reported by x_search as 2026-07-10; follow-up https://x.com/Teknium/status/2075392507794624803 same day.
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Informal maintainer benchmark discourse without published method card in the post. Reject as evaluation evidence under contract rejected_evidence benchmark_claim_without_method; keep only as model-preference chatter inside Hermes.

- claim_id: hermes-agent-2026-07-21-proagentbench-dispute
  source: hermes-agent
  claim: Community account @evermind posted ProAgentBench and related scores claiming Raven at 0.60 F1 versus 0.25 for Hermes and OpenClaw among other gains; maintainer @Teknium replied that the Hermes harness system prompt used in the eval defaults to silence and rare high-bar intervention, calling the comparison biased or scamming on a detect-the-need task.
  primary_url: https://x.com/evermind/status/2079540841962717347
  author: "@evermind"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: EverMind post date from x_search Tue, 21 Jul 2026 12:15:47 GMT; Teknium critiques https://x.com/Teknium/status/2079649120197955757 and https://x.com/Teknium/status/2079649301756813460 same day; later revised table https://x.com/elliotchen100/status/2080528860882645476 on 2026-07-24.
  evidence_kind: community_discussion
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ecosystem tension plus benchmark discourse. Scores and method are unverified; contract rejects benchmark claims without method. Cross-check public eval repo paths cited in replies (e.g. benchmarks/proactivity_eval/runners/prompts/hermes_agent.yaml) and the 2026-07-24 revised numbers (Raven 0.715, OpenClaw 0.682, Hermes 0.579) before any synthesis. Keep conduct language in notes only.

- claim_id: hermes-agent-2026-07-23-head-to-head-openclaw-userbench
  source: hermes-agent
  claim: Community user @riyasudeenpm posted a head-to-head of Hermes versus OpenClaw on the same model and Mac Mini hardware across six real-world tests, claiming Hermes 94 versus OpenClaw 59 and emphasizing Hermes routing that sometimes avoids LLM calls.
  primary_url: https://x.com/riyasudeenpm/status/2080388466022482302
  author: "@riyasudeenpm"
  observed_at: 2026-07-27
  event_date: 2026-07-23
  date_precision: day
  date_note: Date reported by x_search as Thu, 23 Jul 2026 20:23:56 GMT.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Unverified user benchmark without independent method package in this scout pass. Useful only as adoption/comparison chatter, not as evaluation evidence.

- claim_id: hermes-agent-2026-07-20-stale-installer-remote-friction
  source: hermes-agent
  claim: Community user @Authentic1ty posted that the website installer still ships an old version (0.17) and objected that setup forces a local Hermes install before configuring a remote agent.
  primary_url: https://x.com/Authentic1ty/status/2079309050722828540
  author: "@Authentic1ty"
  observed_at: 2026-07-27
  event_date: 2026-07-20
  date_precision: day
  date_note: Date reported by x_search as 2026-07-20.
  evidence_kind: community_discussion
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Installer version and remote-first setup pain. Cross-check current installer artifacts and desktop/cloud docs. Related friction https://x.com/corxntyn/status/2080347021580374050 and https://x.com/sailingbikeruk/status/2081048833199399328.

- claim_id: hermes-agent-2026-07-25-macos-desktop-remote-install-stuck
  source: hermes-agent
  claim: Community user @sailingbikeruk posted that the macOS desktop installer stuck on Install Hermes when a remote Hermes install already exists and pointed at open GitHub issues.
  primary_url: https://x.com/sailingbikeruk/status/2081048833199399328
  author: "@sailingbikeruk"
  observed_at: 2026-07-27
  event_date: 2026-07-25
  date_precision: day
  date_note: Date reported by x_search as 2026-07-25.
  evidence_kind: community_discussion
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Desktop/remote coexistence pain. Resolve referenced GitHub issues from the post before promotion.

- claim_id: hermes-agent-2026-07-25-docker-cli-permission-auth-rewrite
  source: hermes-agent
  claim: Community user @gl00mt1t4n posted about file-ownership and permission conflicts between Docker Hermes user and CLI or desktop user, with auth files repeatedly rewritten, and described a systemd timer workaround.
  primary_url: https://x.com/gl00mt1t4n/status/2080902835160465749
  author: "@gl00mt1t4n"
  observed_at: 2026-07-27
  event_date: 2026-07-25
  date_precision: day
  date_note: Date reported by x_search as 2026-07-25.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Runtime portability and credentials-path pain across Docker vs host. Cross-check issues/docs on state directory ownership; workaround is user-reported only.

- claim_id: hermes-agent-2026-07-26-telegram-gateway-crash
  source: hermes-agent
  claim: Community user @s6sdev posted that after a recent update the Telegram gateway crashes when the network is unstable, blocking remote Telegram access.
  primary_url: https://x.com/s6sdev/status/2081425540154864006
  author: "@s6sdev"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Date reported by x_search as 2026-07-26.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Messaging-gateway reliability lead (Telegram). Needs issue or repro cross-check; version pin not established from the post alone.

- claim_id: hermes-agent-2026-07-25-sqlite-wal-state-db-corruption
  source: hermes-agent
  claim: Community user @EyeDentify posted that a SQLite WAL bug corrupted state.db on WSL2, that backup restore was also corrupted, and that skills, memory, and config had to be migrated manually.
  primary_url: https://x.com/EyeDentify/status/2081092114427810102
  author: "@EyeDentify"
  observed_at: 2026-07-27
  event_date: 2026-07-25
  date_precision: day
  date_note: Date reported by x_search as 2026-07-25.
  evidence_kind: community_discussion
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: High-signal reliability/memory persistence pain on WSL2. Cross-check GitHub issues and any WAL-related fixes; do not generalize beyond the report without primary confirmation.

- claim_id: hermes-agent-2026-07-22-self-break-reinstall-openclaw-compare
  source: hermes-agent
  claim: Community user @yepsurethatsme posted that Hermes needed a painful reinstall after breaking itself for the first time, contrasting that this used to be common on every OpenClaw update and wanting zero occurrences.
  primary_url: https://x.com/yepsurethatsme/status/2079960199805436254
  author: "@yepsurethatsme"
  observed_at: 2026-07-27
  event_date: 2026-07-22
  date_precision: day
  date_note: Date reported by x_search as 2026-07-22.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Upgrade/self-modification reliability pain plus OpenClaw comparison context. Not a product instruction; single-user anecdote.

- claim_id: hermes-agent-2026-07-19-subagent-durability-gap
  source: hermes-agent
  claim: Community user @BkashJosi posted that completed undelivered subagent events can survive restart but running subagents do not auto-resume, leaving execution state unknown.
  primary_url: https://x.com/BkashJosi/status/2078983140249686055
  author: "@BkashJosi"
  observed_at: 2026-07-27
  event_date: 2026-07-19
  date_precision: day
  date_note: Date reported by x_search as 2026-07-19.
  evidence_kind: community_discussion
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Subagent durability/resume gap lead. Pair with maintainer visibility post https://x.com/Teknium/status/2078919600746660173; verify against runtime docs and issues.

- claim_id: hermes-agent-2026-07-25-discord-channel-binding-limits
  source: hermes-agent
  claim: Community user @BkashJosi posted that Discord cannot bind separate agents to separate channels or assign channels per task and always creates threads, unlike OpenClaw.
  primary_url: https://x.com/BkashJosi/status/2081072507004866886
  author: "@BkashJosi"
  observed_at: 2026-07-27
  event_date: 2026-07-25
  date_precision: day
  date_note: Date reported by x_search as 2026-07-25.
  evidence_kind: community_discussion
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Messaging gateway multi-agent routing pain and OpenClaw comparison. Cross-check Discord gateway docs and issues. Related RBAC friction https://x.com/ptaranat/status/2081404564163412127 citing long-open issue #527.

- claim_id: hermes-agent-2026-07-19-credentials-in-memory-pr
  source: hermes-agent
  claim: Community user @samadh1i posted that prose-form credentials could land in persistent memory then model context, that they reproduced the issue, fixed it, and opened a PR.
  primary_url: https://x.com/samadh1i/status/2078960213525164405
  author: "@samadh1i"
  observed_at: 2026-07-27
  event_date: 2026-07-19
  date_precision: day
  date_note: Date reported by x_search as 2026-07-19.
  evidence_kind: community_discussion
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Security/memory governance lead. Resolve the linked PR/issue from the post; do not treat the social claim as merged or released until GitHub primary confirms.

- claim_id: hermes-agent-2026-07-26-memory-context-recovery-pain
  source: hermes-agent
  claim: Community user @LouieMota88 posted that they cannot make memory and context recovery effective enough and see that as the core unsolved problem.
  primary_url: https://x.com/LouieMota88/status/2081327199190179882
  author: "@LouieMota88"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Date reported by x_search as 2026-07-26.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Memory effectiveness pain anecdote. Adoption/tutorial chatter in the same window (e.g. https://x.com/GranzenTon/status/2080251069075001470) frames memory as a selling point; keep tension without resolving it.

- claim_id: hermes-agent-2026-07-26-desktop-local-deps-complaint
  source: hermes-agent
  claim: Community user @komavideo posted asking why the desktop app installs many local dependencies such as Python and Node.js and wanting a cleaner desktop-only install.
  primary_url: https://x.com/komavideo/status/2081506716911571189
  author: "@komavideo"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Date reported by x_search as 2026-07-26.
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Accessibility/install footprint pain for desktop distribution. Cross-check desktop packaging docs only if promoting.

- claim_id: hermes-agent-2026-07-05-community-review-200k-stars-showcase
  source: hermes-agent
  claim: Community account @ShenSeanChen posted a showcase or review after claiming Hermes hit 200K GitHub stars, testing memory, skills, cron, and sub-agents from Desktop and WhatsApp, and describing a loop of tools, plain-text skills and facts without embeddings, and compounding local DB chat history.
  primary_url: https://x.com/ShenSeanChen/status/2073748899748008405
  author: "@ShenSeanChen"
  observed_at: 2026-07-27
  event_date: 2026-07-05
  date_precision: day
  date_note: Date reported by x_search as Sun, 05 Jul 2026.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Adoption and architecture chatter. Star-count claim is especially suspect and must be checked against GitHub; feature descriptions remain social-only. Related tutorial/adoption posts in-window include https://x.com/AlexFinn/status/2074231747315978416, https://x.com/tonysimons_/status/2079184723667026138, https://x.com/stackzz/status/2081475656848957702.

- claim_id: hermes-agent-2026-07-06-alexfinn-learn-journey-moa
  source: hermes-agent
  claim: Community account @AlexFinn posted a video showcase of major Hermes Agent updates including Mixture of Agents, /learn skill auto-creating skills from prompts URLs or tweets, /journey timeline of skills and memory, self-improvement cost savings via cheaper models, desktop vibe-coding improvements, and a Fable 5 profile.
  primary_url: https://x.com/AlexFinn/status/2074231747315978416
  author: "@AlexFinn"
  observed_at: 2026-07-27
  event_date: 2026-07-06
  date_precision: day
  date_note: Date reported by x_search as Mon, 06 Jul 2026.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Feature chatter covering skills, memory, self-improvement. Not maintainer-authored; cross-check docs/releases for /learn, /journey, MoA, and named model profile before any claim promotion.

- claim_id: hermes-agent-2026-07-26-vps-daytona-modal-telegram-ops
  source: hermes-agent
  claim: Community user @stackzz posted that Hermes Agent can run on a cheap VPS or hibernate on Daytona or Modal and be accessed via Telegram as a persistent operator workflow that survives closing the laptop.
  primary_url: https://x.com/stackzz/status/2081475656848957702
  author: "@stackzz"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Date reported by x_search as Sun, 26 Jul 2026.
  evidence_kind: community_discussion
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Runtime portability adoption chatter matching contract patterns (Daytona, Modal, Telegram, messaging gateway). Treat as user report of possible setups, not official support matrix.

- claim_id: hermes-agent-2026-07-26-third-party-repo-eval-risk
  source: hermes-agent
  claim: Community user @marcos_placona posted that a popular Hermes-related repo looked sloppy or dangerous, alleging installer use of nonexistent CLI flags, missing prompt files, and an LLM DETAIL field passed to eval with shell-exec risk, and said they would not install it as-is.
  primary_url: https://x.com/marcos_placona/status/2081321711388033435
  author: "@marcos_placona"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Date reported by x_search as 2026-07-26.
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ecosystem safety tension about a third-party Hermes-adjacent repo, not necessarily the official NousResearch/hermes-agent tree. Keep reputational specifics in notes; identify the exact repo from the post before any primary security analysis.

- claim_id: hermes-agent-2026-07-26-community-v0-19-gateway-cron
  source: hermes-agent
  claim: Community account @TeksCreate posted about v0.19 release notes claiming gateway and cron latency improvements and described Hermes as a model-agnostic harness with shared memory and identity across Telegram and other platforms.
  primary_url: https://x.com/TeksCreate/status/2081494634501472276
  author: "@TeksCreate"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Date reported by x_search as Sun, 26 Jul 2026; follow-up cited as https://x.com/TeksCreate/status/2081494677811876177.
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Unofficial release commentary. Version and latency claims require GitHub release primary (tagged-release cross-check); social post alone is not a release receipt.
```
