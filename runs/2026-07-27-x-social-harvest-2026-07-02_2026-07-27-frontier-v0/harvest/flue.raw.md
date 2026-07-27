```yaml
- claim_id: flue-x-20260721-react-for-agents
  source: flue
  claim: Maintainer @FredKSchott posts a "React for Agents" framing for Flue, showing hook-style agent definitions (useModel, useSkill, useTool, usePersistentState, useSandbox) and code-first composition rather than pure config.
  primary_url: https://x.com/FredKSchott/status/2079630772928147676
  author: "@FredKSchott"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2079630772928147676 (UTC day).
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: High-engagement philosophy/API-direction signal. Product/API surface is social-only until docs/CHANGELOG/tag crosscheck. Related reply discourse includes non-Flue "React for agents" reinterpretations.

- claim_id: flue-x-20260721-framework-category-analogy
  source: flue
  claim: Maintainer @FredKSchott positions Flue directionally among "Rails vs Laravel vs Next.js vs React.js" style framework analogies, saying which fit is still playing out but the directional answer is yes.
  primary_url: https://x.com/FredKSchott/status/2079643013970878490
  author: "@FredKSchott"
  observed_at: 2026-07-27
  event_date: 2026-07-21
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2079643013970878490 (UTC day).
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Category/positioning intent, not a shipped feature claim. Useful as maintainer framing for model+harness / framework discourse.

- claim_id: flue-x-20260722-composable-agents-next-version
  source: flue
  claim: Maintainer @FredKSchott teases "in the next version of flue: composable agents" — define agents with code not config, and react to conditions to customize behavior as a conversation evolves.
  primary_url: https://x.com/FredKSchott/status/2079979676911714379
  author: "@FredKSchott"
  observed_at: 2026-07-27
  event_date: 2026-07-22
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2079979676911714379 (UTC day).
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Explicit "next version" / unreleased-direction language. Do not treat as tagged release. Thread companions include self-upgrade and workflow teasers.

- claim_id: flue-x-20260722-self-upgrading-agent-tease
  source: flue
  claim: Maintainer follow-up in the composable-agents series asks "what if your agent could upgrade itself?" with accompanying code/image example in the Flue API style.
  primary_url: https://x.com/FredKSchott/status/2079980482868183368
  author: "@FredKSchott"
  observed_at: 2026-07-27
  event_date: 2026-07-22
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2079980482868183368 (UTC day).
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Feature chatter only; needs primary docs/CHANGELOG before any capability claim. Companion to composable-agents post.

- claim_id: flue-x-20260722-agent-as-multistep-workflow
  source: flue
  claim: Maintainer @FredKSchott teases representing an agent as a multi-step workflow (useWorkflow-style steps with dependencies/onComplete), with the agent navigating steps autonomously.
  primary_url: https://x.com/FredKSchott/status/2080033139267682450
  author: "@FredKSchott"
  observed_at: 2026-07-27
  event_date: 2026-07-22
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2080033139267682450 (UTC day).
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Workflow/session primitive direction. Social-only until primary surface confirms API and stability.

- claim_id: flue-x-20260722-1-0-branch-mention
  source: flue
  claim: Maintainer @FredKSchott reply mentions active work "on the 1.0 branch" and a dependency version lag to update, implying a 1.0 line in progress rather than a finished public receipt.
  primary_url: https://x.com/FredKSchott/status/2080042265985405294
  author: "@FredKSchott"
  observed_at: 2026-07-27
  event_date: 2026-07-22
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2080042265985405294 (UTC day).
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Version-line chatter only. Crosscheck tags/CHANGELOG/homepage beta announcement; do not treat as shipped 1.0.

- claim_id: flue-x-20260724-mcp-dynamic-auth-composable
  source: flue
  claim: Maintainer @FredKSchott extends composable-agents direction with "MCP support with dynamic auth" (useMcpConnection / composable MCP hooks style examples).
  primary_url: https://x.com/FredKSchott/status/2080670327903052046
  author: "@FredKSchott"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2080670327903052046 (UTC day).
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Protocol/integration surface claim from social preview. Needs docs/code crosscheck for MCP auth model and package names (e.g. @flue/mcp) before any operator guidance.

- claim_id: flue-x-20260724-nightly-subdomain-docs
  source: flue
  claim: Maintainer @FredKSchott states "all new stuff is on `nightly` subdomain atm" when discussing a possibly broken/missing docs link, signaling preview docs channel separation.
  primary_url: https://x.com/FredKSchott/status/2080671702854545914
  author: "@FredKSchott"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2080671702854545914 (UTC day).
  evidence_kind: maintainer_authored_post
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: preview-or-beta
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Preview/docs channel signal. Pair with community nightly changelog mentions; confirm actual nightly host/path on primary site.

- claim_id: flue-x-20260724-official-node-vite-target
  source: flue
  claim: Official @flueai account posts that Node is a first-class build target and that the next version uses "vite build" directly for a more natural self-host path, linking Node target docs.
  primary_url: https://x.com/flueai/status/2080756571840331786
  author: "@flueai"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2080756571840331786 (UTC day).
  evidence_kind: official_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Deployment/target direction. Post cites https://flueframework.com/docs/guide/targets/node/ — still needs primary docs/CHANGELOG verification for current vs next-version behavior.

- claim_id: flue-x-20260722-community-react-api-skepticism
  source: flue
  claim: Community reply to composable-agents post reports enjoying building with Flue but not liking the React-like "use agent" syntax/directives.
  primary_url: https://x.com/beaussan/status/2079983086851195118
  author: "@beaussan"
  observed_at: 2026-07-27
  event_date: 2026-07-22
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2079983086851195118 (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: User-pain / DX tension lead around API ergonomics. Single-voice; not a product defect receipt.

- claim_id: flue-x-20260722-pi-extension-reuse-question
  source: flue
  claim: Community user praises "pi core" and asks whether Pi extensions/hooks can be reused inside Flue.
  primary_url: https://x.com/blaiym/status/2080057177516261588
  author: "@blaiym"
  observed_at: 2026-07-27
  event_date: 2026-07-22
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2080057177516261588 (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ecosystem tension / harness-layering lead (Flue on Pi). Signals operator curiosity about extension compatibility; no verified answer in this scout item.

- claim_id: flue-x-20260722-job-search-agent-adoption
  source: flue
  claim: Community builder @nick_radford describes Flue as "pretty cool" for a job-search agent where the agentic part is roughly one TypeScript tool plus a behavior string, with planned schedule + browser tooling expansion.
  primary_url: https://x.com/nick_radford/status/2080067038563942778
  author: "@nick_radford"
  observed_at: 2026-07-27
  event_date: 2026-07-22
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2080067038563942778 (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Adoption/ergonomics anecdote only. Not a capability receipt.

- claim_id: flue-x-20260723-hono-for-agents-praise
  source: flue
  claim: Community @NathanFlurry says they finally "mess with Flue (inside and out)" and likens its composability to "hono for agents."
  primary_url: https://x.com/NathanFlurry/status/2080315708513378789
  author: "@NathanFlurry"
  observed_at: 2026-07-27
  event_date: 2026-07-23
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2080315708513378789 (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Category analogy from community, not maintainer claim. Useful as adoption/positioning discourse.

- claim_id: flue-x-20260723-rivet-agentos-sandbox-integration
  source: flue
  claim: Community/product account @rivet_dev announces "Flue × agentOS" sandbox integration using V8 isolates + WebAssembly (~22MB RAM, ~4.8ms startup, Linux-compatible tools), with changelog and Flue framework integration guide links.
  primary_url: https://x.com/rivet_dev/status/2080313743813255611
  author: "@rivet_dev"
  observed_at: 2026-07-27
  event_date: 2026-07-23
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2080313743813255611 (UTC day).
  evidence_kind: community_account_post
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ecosystem integration lead. Thread companions include https://x.com/rivet_dev/status/2080313747768512559 and https://x.com/rivet_dev/status/2080313749655945453. Social cites https://rivet.dev/changelog/2026-07-23-flue-now-supports-agentos/ and https://agentos-sdk.dev/docs/frameworks/flue/ — still third-party until Flue primary surfaces acknowledge support.

- claim_id: flue-x-20260714-h4cker-production-agent-writeup
  source: flue
  claim: Community @Go7hic describes putting Flue into practice via h4cker, a production-style HN research agent with persistent memory, workflows, skills, bounded subagents, and scheduled digests (not an isolated demo).
  primary_url: https://x.com/Go7hic/status/2077058769570382054
  author: "@Go7hic"
  observed_at: 2026-07-27
  event_date: 2026-07-14
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2077058769570382054 (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Adoption/architecture anecdote. Related same-author detail post https://x.com/Go7hic/status/2076975160331325642 and later stack mention https://x.com/Go7hic/status/2080304152337674656 (Hono/React/Pi-Flue on Cloudflare Workers). Unverified product claims.

- claim_id: flue-x-20260703-atom-eve-registry-dual-support
  source: flue
  claim: Community @elie2222 introduces Atom Eve as an open-source agent registry supporting both Eve and Flue, framing Flue as the Astro-team agent framework structured differently and less tied to Vercel than Eve.
  primary_url: https://x.com/elie2222/status/2073003457221382611
  author: "@elie2222"
  observed_at: 2026-07-27
  event_date: 2026-07-03
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2073003457221382611 (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Ecosystem tension/adoption lead (Eve vs Flue category pairing). Third-party registry claim; not a Flue primary receipt.

- claim_id: flue-x-20260726-prefer-flue-over-file-based
  source: flue
  claim: Community @arnvbnsl states preference for Flue (or plain AI SDK) over file-based agent frameworks, wanting something more declarative.
  primary_url: https://x.com/arnvbnsl/status/2081457182848254066
  author: "@arnvbnsl"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2081457182848254066 (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Comparative DX opinion in Eve-vs-Flue discourse. Single-source preference, not a verified product comparison.

- claim_id: flue-x-20260726-buyer-chose-flue-among-harnesses
  source: flue
  claim: Community @arielchouminov says their team "picked flue from astro" among roughly five other agent harnesses, citing team/vision/shipping velocity over feature parity.
  primary_url: https://x.com/arielchouminov/status/2081471778866561296
  author: "@arielchouminov"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2081471778866561296 (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: single-source-unconfirmed
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Adoption/selection anecdote only. No independent confirmation of deployment scale or alternatives considered.

- claim_id: flue-x-20260726-community-harness-feature-summary
  source: flue
  claim: Community summary post describes Flue as an open-source TypeScript agent harness from the Astro team with sandboxed tool execution, durable execution across restarts, subagents and MCP, deploying to Node, Cloudflare Workers, or CI.
  primary_url: https://x.com/JustinMiddler/status/2081180663806357627
  author: "@JustinMiddler"
  observed_at: 2026-07-27
  event_date: 2026-07-26
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2081180663806357627 (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: needs_primary_crosscheck
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Compact public capability laundry list circulating on X. Every product bullet needs primary docs/CHANGELOG/repo crosscheck.

- claim_id: flue-x-20260724-nightly-vite-and-ship-1-0-chatter
  source: flue
  claim: Community @hossein761 notes seeing Vite-related items in nightly build changelogs in conversation with official Node/Vite target chatter, contributing to 1.0/nightly shipping discourse.
  primary_url: https://x.com/hossein761/status/2080759310879998180
  author: "@hossein761"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2080759310879998180 (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Pairs with @flueai Node/Vite post and maintainer nightly/1.0-branch replies. Unverified changelog contents.

- claim_id: flue-x-20260724-eve-vs-flue-discourse
  source: flue
  claim: Community posts frame "Eve vs Flue" as a hot comparison in agent-framework discourse during the window, pairing Flue with competing harness narratives.
  primary_url: https://x.com/Vishal_anton16/status/2080677430420025668
  author: "@Vishal_anton16"
  observed_at: 2026-07-27
  event_date: 2026-07-24
  date_precision: day
  date_note: Derived from Twitter snowflake timestamp on status id 2080677430420025668 (UTC day).
  evidence_kind: community_discussion
  channel: x.com
  status: candidate
  crosscheck_status: needs_primary_crosscheck
  release_channel: social_only
  operator_consequence: cautious; a lead to investigate, not an instruction
  notes: Discourse/tension lead, not a product claim. Adjacent comparison chatter includes https://x.com/wgw_eth/status/2080061032140075145. Keep reputational/competitive framing as notes unless primaries support specifics.
```
