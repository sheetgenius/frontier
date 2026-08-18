- claim_id: deepseek-harness-official-v0-1-developer-preview-2026-08-13
  source: deepseek-harness
  claim: "@deepseek_ai posts that DeepSeek Harness v0.1 is available in Developer Preview under MIT, powered by Cordis, with the design claim that models, tools, skills, sessions, sandboxes, filesystems, loops, orchestration, and UI are all plugins."
  primary_url: https://x.com/deepseek_ai/status/2087887408440164663
  author: "@deepseek_ai"
  observed_at: 2026-08-17
  event_date: 2026-08-13
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2087887408440164663"
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Launch-thread lead for preview positioning, Cordis dependency, and everything-is-a-plugin claim. Cross-check landing page, GitHub tag/release, and npm @deepseek-ai/dsh before any channel or feature statement."

- claim_id: deepseek-harness-tianyi-0-1-0-preview-rough-edges-2026-08-13
  source: deepseek-harness
  claim: "@tianyi (DeepSeek Harness team) posts that DeepSeek Harness was just MIT-released, calls the current 0.1.0 a developer preview with many rough edges, and asks for feedback."
  primary_url: https://x.com/tianyi/status/2087888089759015218
  author: "@tianyi"
  observed_at: 2026-08-17
  event_date: 2026-08-13
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2087888089759015218"
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Maintainer intent lead on preview maturity and version labeling. Cross-check tag naming (rc vs 0.1.0), GitHub Releases prerelease flag, and npm dist-tags; do not treat social 0.1.0 wording as a stable channel."

- claim_id: deepseek-harness-tianyi-beta-invite-oss-authors-2026-08-04
  source: deepseek-harness
  claim: "@tianyi invites open-source agent-harness authors (plugins, skills, MCP, orchestrators, aggregators, UI, etc.) to reply with GitHub ids/repos for possible DSH internal/beta access and API credits timed to day-one integration."
  primary_url: https://x.com/tianyi/status/2084693319188439211
  author: "@tianyi"
  observed_at: 2026-08-17
  event_date: 2026-08-04
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2084693319188439211"
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Pre-launch ecosystem outreach and maintainer intent lead. Investigate which third-party projects were actually invited or shipped day-one plugins; social invite is not evidence a given integration shipped."

- claim_id: deepseek-harness-tianyi-reused-pi-llm-adaptor-2026-08-14
  source: deepseek-harness
  claim: "@tianyi states DSH reused Pi's LLM adaptor package for connecting to non-DeepSeek models, calls Pi a favorite daily drive among many DeepSeek researchers/developers, and says that path just works."
  primary_url: https://x.com/tianyi/status/2088306143772946499
  author: "@tianyi"
  observed_at: 2026-08-17
  event_date: 2026-08-14
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2088306143772946499"
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Lead on multi-model path and upstream dependency on Pi adaptor code. Cross-check package imports, licenses, and docs for supported non-DeepSeek backends; quote-tweet context is Armin Ronacher praise of the harness."

- claim_id: deepseek-harness-tianyi-team-hiring-hangzhou-2026-08-14
  source: deepseek-harness
  claim: "@tianyi posts that the DeepSeek Harness group is hiring (researchers, engineers, PM, design, devrel, community, project managers; full-time and intern) and asks Hangzhou-area candidates to contact him."
  primary_url: https://x.com/tianyi/status/2088304053193421218
  author: "@tianyi"
  observed_at: 2026-08-17
  event_date: 2026-08-14
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2088304053193421218"
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Maintainer intent / investment lead only. Not a product capability claim; keep hiring chatter out of technical findings unless tied to a primary role posting."

- claim_id: deepseek-harness-eliebakouch-modes-kv-cache-agents-notes-2026-08-13
  source: deepseek-harness
  claim: "@eliebakouch claims DeepSeek Harness is a web UI with multiple default modes/harnesses (code with programmatic TS tool calling; bash+edit used in evals; standard read/write), first-class KV-cache-aware append-only history edits, heavy agent-first development including a .agents/notes decision trail, and that Claude Code/Codex can be spawned via SDKs inside it."
  primary_url: https://x.com/eliebakouch/status/2087904176357437820
  author: "@eliebakouch"
  observed_at: 2026-08-17
  event_date: 2026-08-13
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2087904176357437820"
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "High-signal architecture/feature chatter. Cross-check modes, trajectory/session log behavior, .agents/notes presence, and any subagent/SDK embedding against repo docs and code; treat SDK spawn claims as unverified."

- claim_id: deepseek-harness-eliebakouch-codex-worktrees-share-2026-08-13
  source: deepseek-harness
  claim: "@eliebakouch claims DeepSeek Harness was heavily developed using Codex and that at least roughly 20% of commits and PRs come from Codex worktrees."
  primary_url: https://x.com/eliebakouch/status/2087910749330952441
  author: "@eliebakouch"
  observed_at: 2026-08-17
  event_date: 2026-08-13
  date_precision: day
  date_note: "UTC day from snowflake of nearby eliebakouch thread status; confirm exact status id resolves to this wording before promotion"
  evidence_kind: community_account_post
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Unverified development-process claim. If investigated, use git history/co-author/trailers only; do not promote a percentage from social alone. URL should be re-resolved if the modes thread split across multiple statuses."

- claim_id: deepseek-harness-mitsuhiko-inspired-pi-refactor-2026-08-14
  source: deepseek-harness
  claim: "@mitsuhiko says DeepSeek Harness is imperfect but is the first new thing in the space that inspired revisiting choices, and earlier notes it makes him rethink the harness refactor in Pi."
  primary_url: https://x.com/mitsuhiko/status/2088189145952731317
  author: "@mitsuhiko"
  observed_at: 2026-08-17
  event_date: 2026-08-14
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2088189145952731317; related earlier post https://x.com/mitsuhiko/status/2087973032102941122 on 2026-08-13"
  evidence_kind: community_account_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Ecosystem-tension / peer-harness maintainer reaction lead (Pi). Not a DeepSeek product receipt; useful for competitive framing only after primary Pi/DSH surfaces are checked."

- claim_id: deepseek-harness-grapeot-cordis-vs-codex-plugins-2026-08-13
  source: deepseek-harness
  claim: "@grapeot contrasts DSH imperative in-process Cordis plugins (claimed able to replace the agent loop at runtime, HMR/rollback, self-modifying agents) with Codex-style declarative out-of-process plugins, calling DSH overkill for everyday coding but suited as a generative kernel."
  primary_url: https://x.com/grapeot/status/2088019011561005382
  author: "@grapeot"
  observed_at: 2026-08-17
  event_date: 2026-08-13
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2088019011561005382"
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Architecture discourse lead on Cordis plugin power vs Codex. Cross-check whether the agent loop is actually a replaceable plugin and which behaviors are Cordis vs deepseek-harness; attribute upstream correctly per source contract."

- claim_id: deepseek-harness-grapeot-harness-as-data-pipeline-2026-08-13
  source: deepseek-harness
  claim: "@grapeot argues DeepSeek previously sold model API without a harness and missed coding behavioral data, framing harnesses as shifting from user tools toward data-collection instruments and linking that gap to now building/hiring around the runtime."
  primary_url: https://x.com/grapeot/status/2087934454497194440
  author: "@grapeot"
  observed_at: 2026-08-17
  event_date: 2026-08-13
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2087934454497194440"
  evidence_kind: community_account_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Philosophy/economics discourse lead, not a verified company strategy fact. Keep as interpretation unless primary DeepSeek statements support the data-collection framing."

- claim_id: deepseek-harness-grapeot-terminal-bench-harness-gap-2026-08-15
  source: deepseek-harness
  claim: "@grapeot claims large score gaps for the same DeepSeek model across harnesses (example drops cited on Terminal-Bench-style runs), says DeepSeek footnotes official benches in a minimal bash+editor environment the model was trained on, and links DSH to multi-turn agent ceiling / narrow-distribution concerns."
  primary_url: https://x.com/grapeot/status/2088734727499026660
  author: "@grapeot"
  observed_at: 2026-08-17
  event_date: 2026-08-15
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2088734727499026660"
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Benchmark discourse lead. Any numeric gap, Minimal-mode training claim, or footnote wording needs primary model card/report plus method reproduction; social scores are not evaluation receipts."

- claim_id: deepseek-harness-zhihufrontier-not-codex-rival-yet-2026-08-15
  source: deepseek-harness
  claim: "@ZhihuFrontier relays a cautious third-party read that DeepSeek Harness is an early infrastructure preview rather than a Codex/Claude Code rival, citing rough npx install/deps, familiar tool stack, ~7.5k fixed context cost, and a looping first coding test."
  primary_url: https://x.com/ZhihuFrontier/status/2088504124346343763
  author: "@ZhihuFrontier"
  observed_at: 2026-08-17
  event_date: 2026-08-15
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2088504124346343763"
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "User-pain and positioning lead via secondary summary of a Zhihu contributor. Trace to the underlying writeup and local repro before treating install friction, token overhead, or loop instability as findings."

- claim_id: deepseek-harness-zhihufrontier-v4-pro-harness-sensitivity-2026-08-16
  source: deepseek-harness
  claim: "@ZhihuFrontier posts that DeepSeek disclosed public Code Agent results for DeepSeek-V4-Pro-0813 were measured with DeepSeek Harness in Minimal mode and frames a cross-harness gap / interface-sensitivity problem (Terminal-Bench figures cited in-thread)."
  primary_url: https://x.com/ZhihuFrontier/status/2088872677692076431
  author: "@ZhihuFrontier"
  observed_at: 2026-08-17
  event_date: 2026-08-16
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2088872677692076431"
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Benchmark-interface lead tightly coupled to Minimal mode. Needs primary DeepSeek evaluation notes plus independent harness definitions; linked third-party analysis mentioned in surrounding discourse is not itself a primary receipt."

- claim_id: deepseek-harness-hesamation-modularity-plugin-garage-2026-08-13
  source: deepseek-harness
  claim: "@Hesamation describes the published harness as a React web app where agent loops, models, tools, and sessions are replaceable plugins, framing it as a modular harness garage rather than a fixed assistant."
  primary_url: https://x.com/Hesamation/status/2087917006448173519
  author: "@Hesamation"
  observed_at: 2026-08-17
  event_date: 2026-08-13
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2087917006448173519"
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Adoption/modularity chatter. Same author also posted rapid star-count claims on later dates; star counts are rejected as adoption evidence per source contract and should not be promoted."

- claim_id: deepseek-harness-zzxwill-ui-toolcall-friction-2026-08-14
  source: deepseek-harness
  claim: "@zzxwill reports early-user friction around page/UI bugs, interaction/config problems, and tool calls not running cleanly with DeepSeek Harness."
  primary_url: https://x.com/zzxwill/status/2088077928219509023
  author: "@zzxwill"
  observed_at: 2026-08-17
  event_date: 2026-08-14
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2088077928219509023"
  evidence_kind: community_account_post
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "User-pain lead only. Confirm exact wording and repro steps from the post/thread; seek Discussions or local repro because GitHub Issues are disabled on the primary repo."

- claim_id: deepseek-harness-liulangsanxiu-3080-insufficient-balance-2026-08-16
  source: deepseek-harness
  claim: "@liulangsanxiu reports failure on first open of the local web UI at 127.0.0.1:3080 with an Insufficient Balance style error and describes needing DeepSeek platform real-name auth plus a small top-up even in a local-seeming flow."
  primary_url: https://x.com/liulangsanxiu/status/2088916579673420133
  author: "@liulangsanxiu"
  observed_at: 2026-08-17
  event_date: 2026-08-16
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2088916579673420133"
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Directly touches source-contract operator questions on Web UI :3080 auth and whether non-DeepSeek/local paths are supported defaults. Cross-check default model provider config, auth to the UI vs API billing, and docs; single-user report until reproduced."

- claim_id: deepseek-harness-alexfreitasai-rc-modes-cordis-preview-2026-08-16
  source: deepseek-harness
  claim: "@AlexFreitasAI discusses DeepSeek Harness as a Cordis-powered everything-is-a-plugin developer preview, mentions modes such as Standard/Code/Minimal/Creator, points at npx @deepseek-ai/dsh web, and references early 0.1.0-rc.x packaging rather than a stable release."
  primary_url: https://x.com/AlexFreitasAI/status/2089122069652947394
  author: "@AlexFreitasAI"
  observed_at: 2026-08-17
  event_date: 2026-08-16
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2089122069652947394"
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Channel and packaging lead (rc vs stable, modes catalog). Cross-check npm versions/dist-tags and README install path; social rc numbers may lag or lead the registry."

- claim_id: deepseek-harness-paragon-x-context-length-thinking-budget-2026-08-16
  source: deepseek-harness
  claim: "@Paragon_X reports agent runs going quiet with finish_reason length around early turns, difficulty constraining reasoning/thinking budget inside the harness, and consumer-GPU context pressure during longer agentic work."
  primary_url: https://x.com/Paragon_X/status/2089047495812800967
  author: "@Paragon_X"
  observed_at: 2026-08-17
  event_date: 2026-08-16
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2089047495812800967"
  evidence_kind: community_account_post
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Reliability/context-management pain lead. Needs thread details and controlled repro before any claim about default max tokens, thinking levels, or harness-level budget controls."

- claim_id: deepseek-harness-nineshoot-plugin-architecture-explain-2026-08-16
  source: deepseek-harness
  claim: "@nineshoot amplifies the Cordis everything-is-a-plugin design, swappable models/tools/skills/sessions/sandboxes/loops/UI, and the npx @deepseek-ai/dsh web try path in community explainers after launch."
  primary_url: https://x.com/nineshoot/status/2089133831513428064
  author: "@nineshoot"
  observed_at: 2026-08-17
  event_date: 2026-08-16
  date_precision: day
  date_note: "UTC day from snowflake timestamp of status id 2089133831513428064"
  evidence_kind: community_account_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: "Derivative explainer/adoption chatter. Prefer official announcement and repo docs for mechanism claims; use only as a pointer to what the community thinks is salient."
