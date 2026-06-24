# Research dossiers — 2026-06-23..2026-06-24 run (raw, pre-editorial)

Captured from parallel Opus research agents. Primary-source notes for the heypi
introduction + thin-window watchlist harvest. Editorial framing happens downstream.

## heypi differentiation dossier (foils: EVE, Pi, OpenClaw, workflow platforms)

Subject: heypi (`hunvreus/heypi`, heypi.dev) — TypeScript framework for multiplayer
team chat-ops agents, built on Pi. Latest tag **0.2.0-beta.0 (2026-06-23)**; prior
line 0.1.0 (2026-05-29) → 0.1.3 (2026-06-04). License MIT. No GitHub "releases"
published, only tags. (https://github.com/hunvreus/heypi/tags)

Canonical positioning (verbatim, heypi.dev):
- Headline: "A multiplayer chat agent for your team"
- Foil line: "An app you own, not a workflow platform"
- Self-desc: "a TypeScript framework for multiplayer chat agents: one Pi agent your
  whole team uses in Slack, Discord, Telegram, and trusted webhook entrypoints,
  with approvals, audit trails, scoped runtime tools, memory, secrets, jobs, and an admin UI."
- Durability scope (load-bearing for EVE contrast): "heypi is optimized for chat-ops
  agents with governed tool access… it does not replay arbitrary in-flight agent
  turns after a process crash." (https://heypi.dev)

### EVE (vercel/eve) — headline foil
- URLs: vercel.com/eve, vercel.com/docs/eve (docs last_updated 2026-06-19), github.com/vercel/eve. License Apache-2.0. Latest eve@0.13.1 (2026-06-23). Docs say "eve is currently in beta."
- Tagline: "The Framework for Building Agents" / "Like Next.js for web apps, but for agents."
- "filesystem-first framework for durable backend AI agents that run on Vercel… You define each agent with files under an `agent/` directory." Markdown instructions + skills, TypeScript tools.
- "Durable by default" — "Workflows survive crashes and restarts. Every step is checkpointed. Agents park when waiting, resume on the next message."
- Runs on Vercel Functions/Workflows/Sandbox/AI Gateway/Connect/Observability. One codebase → "web chat, Slack, API, cron, CLI, and custom apps."
- SKEPTIC FLAG: marketing page claims "Tools requiring confirmation trigger approval gates; sessions park until resolved" but the docs feature list (2026-06-19) does NOT surface an approvals/governance primitive. Treat EVE governance as marketing-level until docs/code show it.

### Pi (earendil-works/pi, pi.dev) — the substrate heypi sits on
- Tagline: "There are many agent harnesses but this one is yours." "Pi is a minimal agent harness. Adapt Pi to your workflows, not the other way around."
- Deliberate core exclusions (quoted): No MCP; No sub-agents; **No permission popups** ("Run in a container, or build your own confirmation flow"); No plan mode; No built-in to-dos; No background bash.
- heypi IS the layer that builds that own confirmation flow. Author on HN: "It's built on Pi, so you can use Pi extensions (ish)."

### OpenClaw — Show HN namesake foil
- docs.openclaw.ai. "Any OS gateway for AI agents across Discord, Google Chat, iMessage, Matrix, MS Teams, Signal, Slack, Telegram, WhatsApp, Zalo…" — "a personal AI assistant they can message from anywhere." Single-user/personal; per-sender sessions; multi-agent routing; workspace isolation. No documented team-collab/approval/audit features.
- HN title: "Show HN: Heypi – Like OpenClaw but for Your Team." Author: "I kind of wanted Openclaw, but for teams."
- Axis: OpenClaw = single-user/personal; heypi = team/multiplayer + approvals + audit. (OpenClaw's lack is "not documented", not "confirmed absent".)

### Workflow platforms — what "not a workflow platform" means
- n8n.io: "AI agents and workflows you can see and control"; "workflow automation platform"; visual canvas/node-graph authoring. heypi = code-and-git-owned TS app (custom TS tools, markdown config, self-hosted SQLite), not a drawn workflow on a hosted canvas. Center-of-gravity contrast (n8n also self-hosts/code nodes).

### Show HN reception (news.ycombinator.com/item?id=48327336)
- Title "Show HN: Heypi – Like OpenClaw but for Your Team (Slack, Discord, etc.)." Submitter hunvreus. Date ~ end-May/early-June 2026 (relative "24 days ago"; aligns with 0.1.0 May 29). EXACT day not pinned — treat as approx.
- Author config detail: "Configuration with markdown files (SOUL.md, AGENTS.md) and skills"; "Sandboxing for commands (just-bash, Docker, Gondolin)"; "Approval flows (e.g. any 'risky' command needs approval from a certain team on Slack)"; "web admin panel, audit trail, cron and heartbeat."
- Commenter antonios_makro: "The approval flow is the key feature here. Most agent frameworks focus on the agent's execution loop but forget the human-in-the-loop part, which is critical for anything with real side-effects (like DevOps)."
- Comparisons in thread: only OpenClaw + Pi. No EVE/n8n/Zapier. Community's self-selected differentiator = approval / human-in-the-loop.

### Defensible differentiation axes (priority)
1. Governance-first vs durability-first (vs EVE): heypi centers approvals+SQLite audit, disclaims crash-replay; EVE centers durable resume, approval story marketing-only/undocumented.
2. Owned self-hosted app vs hosted platform (vs EVE + n8n): "an app you own."
3. Team/multiplayer vs single-user (vs OpenClaw): "one agent your whole team uses" + named approvers.
4. Governance-layer-on-minimal-core (vs/with Pi): builds the confirmation flow Pi refuses to bake in.

## Watchlist harvest 2026-06-23..2026-06-24 (thin window)

| Source | In-window? | Version + ISO | Channel | Change | URL |
|---|---|---|---|---|---|
| Codex | YES | 0.143.0-alpha.3..alpha.7, 2026-06-23 | tagged pre-release (alpha) | alpha train; stable stays 0.142.0 (06-22) | github.com/openai/codex/releases |
| Claude Code | NO | 2.1.186, 2026-06-22 | tagged | nothing 06-23/24 | code.claude.com/docs/en/changelog |
| Gemini CLI | NO (material) | v0.47.0 (06-18); 06-23 main commit | main CI-only | `fix(ci)` d3ef6ac, infra only | github.com/google-gemini/gemini-cli |
| Hermes Agent | NO (material) | v2026.6.19 (06-19); 06-23 main | main, non-security | desktop tooltip, CI, computer-use Windows-UIPI doc; NO new security wave, NO tag; last window's untagged security work did NOT tag | github.com/NousResearch/hermes-agent |
| Pi | NO | v0.79.10, 2026-06-22 | tagged | unchanged | github.com/earendil-works/pi/releases |
| OpenClaw | NO | stable v2026.6.9 (06-21), beta.2 (06-22) | tagged | nothing 06-23/24 | github.com/openclaw/openclaw/releases |
| Paperclip | NO | v2026.618.0, 2026-06-18 | tagged | no new tag; master controls still untagged | github.com/paperclipai/paperclip/releases |
| Agent Zero | NO tag; YES `ready` commits | v1.20 (06-04); ~19 commits on `ready` 2026-06-23 | main-unreleased (staging) | mobile/canvas UI, "Persist loaded skills through compaction", "Add project extension data hooks", Gemini-OAuth-as-Google-Cloud; STILL no tag | github.com/agent0ai/agent-zero/commits/ready |
| OpenHands | NO tag; YES security commits | 1.8.0 (06-10); security commits 2026-06-23 | main-unreleased, SECURITY | dep CVE batch: CVE-2026-44727 (jupyter-server 2.20.0), CVE-2026-49458 (dompurify 3.4.6), GHSA-6v7p-g79w-8964 (msgpack 1.2.1), CVE-2026-45409 (idna 3.15), GHSA-gj48-438w-jh9v (bleach 6.4.0) + subagent visualizer; NO new tag | github.com/OpenHands/OpenHands/commits/main |
| Flue (T2) | YES | @flue/react 1.0.0-beta.4, 2026-06-23 | tagged pre-release (beta) | scoped beta: useFlueAgent() durable-history atomicity + live observation. CORRECTION: private-by-default observability rewrite already RELEASED 0.11.0 (2026-06-09), no longer "Unreleased" as last digest implied. Flag: repo resolves under github.com/withastro/flue — confirm vs source contract. | github.com/withastro/flue/blob/main/CHANGELOG.md |

Bottom line: window is thin. Genuinely material citable items: (1) OpenHands unreleased 06-23 security CVE batch (merged-not-shipped, again); (2) two pre-release tags (Codex alpha, Flue scoped beta). NONE is a stable promotion of the backlogs last digest flagged. ~6/10 sources: "nothing material in-window." No 2026-06-24 entries anywhere — everything is dated 2026-06-23.

CORRECTIONS TO HISTORICAL BODY surfaced this run:
- Flue: last digest ("Protected on Paper") said the private-by-default observability rewrite + `flue logs` removal sat "in an Unreleased changelog section, not a tag." Harvest now shows 0.11.0 (2026-06-09) shipped it. The prior digest's framing was correct as of its window close but is now superseded — note in profile/digest, do not silently rewrite the published digest.
- Flue canonical repo slug (withastro/flue) worth a source-contract confirm.

## heypi DEEP dossier (architecture, defaults, channels) — primary-source verified

Identity: heypi, by Ronan Berder (gh `hunvreus`), MIT, TypeScript (94.3%). 105 stars/4 forks @2026-06-24. Repo desc: "Chat agents for your team, with approvals and sandboxed tools. Slack, Discord, Telegram, webhooks." README (soberer than landing): "Team chat agents with approvals, audit, and sandboxed tools… heypi is for governed chat-ops agents that work in shared channels while keeping sensitive actions reviewable." Docs one-liner: "a TypeScript framework for governed AI agents in team chat. It runs Pi agents in Slack, Discord, Telegram, and trusted webhook entrypoints, with approvals, audit trails, scoped runtime tools, memory, secret handoff, scheduling, and an admin panel."

PI RELATIONSHIP (hard fact): packages/heypi/package.json (`@hunvreus/heypi` v0.2.0-beta.0) depends on `"@earendil-works/pi-coding-agent": "^0.79.6"` (hard runtime dep). Gondolin sandbox = `"@earendil-works/gondolin": "^0.12.0"` (also earendil-works; QEMU-backed VM). Docs: heypi agents are "Pi-compatible", wrap "Pi's underlying agent contract". HN author: "It's built on Pi, so you can use Pi extensions (ish)."

ARCHITECTURE (heypi.dev/docs/*):
- agent/ folder: instructions.md (identity/behavior/rules), system.md (optional sys prompt replacement), tools/ (TS), jobs/, skills/ (bundled Pi skills), extensions/ (Pi extensions). Authoring: loadAgent("./agent",{model}). No defineAgent.
- BREAKING in 0.2.0-beta.0: durable instruction surface renamed `prompt`/`soul` -> `instructions`. So SOUL.md (HN, 2026-05-29) is LEGACY; current = instructions.md.
- Built-in tools: bash, read, write, edit, grep, find, ls, attach, history. Custom: defineTool({description, input(zod), run}) default-export in agent/tools/; filename = tool name.
- State: SQLite (libsql + drizzle-orm). CLI `heypi db`.
- Adapters: Slack (@slack/bolt), Discord (discord.js), Telegram, Webhook. Approval permissions adapter-local (permissions.approvers/admins).
- Runtimes: DEFAULT just-bash (TS bash interpreter + virtual FS, NETWORK OFF by default). Docker (one warm container/scope). Gondolin (one warm VM/scope, needs QEMU). Host runtimes (host-bash/guarded-bash) emit startup warning: "For shared or team-facing bots, prefer just-bash, Docker, or Gondolin."
- Approvals: "Approvals pause pending tool calls until an authorized actor approves or denies them in chat." Buttons or /approve <id>, /deny <id>, /approvals. "Pending approvals are persisted. On startup, heypi fails stale running calls."
- Secrets: managed `secret_request` tool; client-side WebCrypto encryption; "intercepted before the normal model turn, so it is not stored as chat history and is not sent to the model." Stored as scoped runtime files `.secrets/<name>`. CAVEATS (quoted): "Anyone who can read the scoped runtime workspace can read saved secrets" + "Pending secret requests are lost on process restart."
- Memory: OFF by default (enabled:true). File-based in state dir, scoped channel/user/adapter/agent. "Write validation is a hygiene check, not a security boundary. Do not store secrets, credentials, private data, or policy rules that must be trusted."
- Scope: channel/user/adapter/agent control shared workspace files/attachments/memory/skills. "Sessions, chat history, approvals, and active-run locks remain per thread."
- Admin panel: "local web panel"; DISABLED by default; /admin/*; binds loopback 127.0.0.1:4321; "heypi logs a one-time login URL that expires after 5 minutes"; "Never set it on a public host."
- Jobs: cron + heartbeat; defineJob() in agent/jobs/; in-process; [SILENT] return records a turn without sending a message.

GOVERNANCE DEFAULTS (the heart):
- Approvals: NOTHING by default. Docs: "approval does not make every tool call require approval. Tool confirmation does that." Opt-in per tool via approval.command() on bash ("blocks destructive commands, asks for approval for risky commands, and allows low-risk commands") or custom-tool confirm fns returning {message}/{block}.
- Sandbox: just-bash default, network off. Docker/Gondolin opt-in. Host runtimes gated by warnings.
- Memory: off by default. Admin: off by default, loopback, 5-min one-time login.
- Secrets: never to model, but plaintext-readable runtime files.
- 0.2.0-beta.0 hardened: webhooks HTTPS-by-default (HTTP needs unsafeReplyHttp:true); root-level approval.approvers/admins now FAIL at startup (forces adapter-scoped permissions); approval identity adapter-local. 0.1.2 added startup security warnings (host runtimes, public binds, missing approvers).
- Net: safe-by-default (no auto-approval bypass, network-off sandbox, admin off, memory off), operator opts INTO power. BUT "approvals" as a binding human-gate is per-tool opt-in, not the default — the landing headline implies a posture the default config doesn't enforce.

AUDIT: no standalone audit-trail doc. Audit = typed trace events. 0.2.0-beta.0 added "Typed trace event persistence for messages, turns, tools, approvals" + "Trace event secret redaction". Viewed in default-OFF admin (Chats view: "messages, model events, tool calls, approvals, and trace events"). CLI `heypi events`.

VERSIONS (git tags + CHANGELOG; NO GitHub Releases exist at all):
- 0.1.0 2026-05-29 (initial core; Docker+Gondolin providers) [tagged-release]
- 0.1.1 2026-06-03 (scoped skills; encrypted secret requests + browser handoff; attach tool; Slack user-group/Discord-role allowlists) [tagged-release]
- 0.1.2 2026-06-04 (startup security warnings; webhook callback timeout + reserved whth_ thread-id prefix) [tagged-release]
- 0.1.3 2026-06-04 (create-heypi scaffolder `npm create heypi@latest`; curated model picker OpenAI/Anthropic/Google/xAI/custom; `heypi init`) [tagged-release]
- 0.2.0-beta.0 2026-06-23 (BREAKING: prompt/soul->instructions; HTTPS-by-default webhooks; builtinTools/tools split; adapter-local permissions; loadAgent/defineTool/approval JS APIs; first-class eval system; heypi dev/start/threads/thread/events/status CLI; typed trace persistence; admin redesign) [PRE-RELEASE / preview-or-beta]
- Post-tag 2026-06-23 main commits (admin CSS/CSRF fixes, `feat(admin): add hot reload toggle` b037b58, `fix(dev): watch app files` ac2c908) [main-unreleased]
- [Unreleased] CHANGELOG section empty.

DEPLOY/REACH: `npm create heypi@latest` (create-heypi, 0.1.3). Single long-running Node 22+ service + persistent state(SQLite)+workspace dirs + model key + adapter creds + HEYPI_ADMIN_SECRET. App lock prevents multi-process ("guardrail, not a scaling mechanism"). Example apps: slack-devops, discord-gondolin, telegram-workout, webhook-github-docker.

MARKETING-VS-SUBSTANCE FLAGS:
- "A multiplayer chat agent for your team" + "An app you own, not a workflow platform" appear ONLY on landing page, not README/docs.
- "audit trail" headline real but = typed trace events in default-OFF admin; no dedicated audit doc.
- Approvals headline vs default: nothing requires approval by default; per-tool opt-in.

HN: Show HN id 48327336, "Show HN: Heypi – Like OpenClaw but for Your Team (Slack, Discord, etc.)", author hunvreus, 2026-05-29T18:30:06Z (Firebase time 1780079406), 3 points/2 comments (small/early). antonios_makro: "The approval flow is the key feature here. Most agent frameworks focus on the agent's execution loop but forget the human-in-the-loop part, which is critical for anything with real side-effects (like DevOps)."

UNVERIFIED (do NOT cite): Pi star count/version/refuses-governance quote (summarizer paraphrase). Only hard Pi fact = heypi dep pin ^0.79.6. /docs/getting-started/{introduction,quickstart} 404'd at guessed slugs.
