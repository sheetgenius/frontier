# Carry-forward checks inherited from the 2026-08-03 manifest

Answered against the primary record across the whole 2026-08-03..2026-08-17 span,
because a question about whether something reached a tag cannot be answered inside
one seven-day window alone. Each answer names the window the event landed in.
Negative answers are recorded, not dropped.

## heypi publishes git tags but no GitHub "releases"; is the tag the canonical ship signal, or is npm publish the real channel?

*Answered by the heypi researcher.*

Both, and they are not identical -- npm is the wider channel. GET /repos/hunvreus/heypi/releases still returns length 0, so there are no GitHub Releases at all; the git tag is the repo-side ship signal. But the npm registry holds a version with no corresponding git tag: @hunvreus/heypi@0.2.0-beta.1 was published 2026-06-24T16:24:15Z while the tag list contains only 0.1.0, 0.1.1, 0.1.2, 0.1.3, 0.2.0-beta.0, 0.3.0-beta.0/1/2. So an operator watching tags alone would have missed a shipped artifact. For the current line the two agree: tag 0.3.0-beta.2 = commit 436da22ceab0bc4e2db133e8626649b4bf76286d, and @hunvreus/heypi@0.3.0-beta.2 published 2026-07-22T01:15:13Z. All six workspace packages (@hunvreus/heypi, create-heypi, @hunvreus/heypi-runtime-{gondolin,just-bash,cloudflare,vercel}) sit at 0.3.0-beta.2. Practical rule: watch npm for what shipped, watch tags for what is reproducible from source.

Receipt: https://www.npmjs.com/package/@hunvreus/heypi?activeTab=versions

## Which version line is "stable" once 0.2.0 leaves beta, and what is the support/upgrade contract?

*Answered by the heypi researcher.*

There is still no stable line, and npm's `latest` dist-tag now resolves to a prerelease. `npm view @hunvreus/heypi dist-tags` returns {"latest":"0.3.0-beta.2"} -- so a plain `npm i @hunvreus/heypi` installs a beta, and the landing page's own install command (`npm create heypi@latest -- codex-tag my-agent`) resolves create-heypi@0.3.0-beta.2. The last non-prerelease tag remains 0.1.3 (2026-06-04). The upgrade contract is explicitly a non-contract: CHANGELOG.md states "Version 0.3.0-beta.0 is intentionally incompatible with the previous beta architecture, configuration, persistence, and package layout" and the Removed section deletes "the previous database-backed runtime, config format, migration path, CLI and admin application, compatibility shims." Operators on 0.2.x rebuild; there is no migration.

Receipt: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md

## Does an approval actually block the tool call, or only surface a notification after the fact?

*Answered by the heypi researcher.*

It blocks, and the audit write is the precondition -- but only where an operator opted in. The approvals doc at tag 0.3.0-beta.2 states: "heypi records `approval_requested` before posting UI and `approval_resolved` before continuing the tool. If either canonical write fails, the call is blocked. Rejection, timeout, missing adapter UI, and process shutdown also fail closed." That is genuine enforcement, not surfacing. The same doc caps it twice: "Approvals are opt-in per tool; configuring approvers alone does not make tools require approval," and "If `admins` and `approvers` are both omitted, any actor who can reach the approval UI may respond; heypi logs a startup warning." So the gate is enforcing but the identity half is advisory by default. Unchanged from the 2026-07-27 baseline -- no commit touched this file in the window.

Receipt: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/approvals.md

## Is the audit trail complete enough to reconstruct who approved what, and is it tamper-evident?

*Answered by the heypi researcher.*

Complete enough to reconstruct authorization; NOT tamper-evident. The admin/audit doc names the ledger hierarchy explicitly: "heypi conversation logs are the canonical authorization and routing ledger. Pi session JSONL is the execution trace. Reduced approval annotations in Pi are for correlation and are not authoritative." Access is via `listAuditConversations()` and `readAuditConversation()` rather than raw paths. There is no claim anywhere in the tagged docs of hashing, chaining, signing, append-only storage, or external export -- the records are plain files under the `.heypi` state directory, and the doc says "The admin UI is intentionally operational and local-first; it is not a hosted control plane." Anyone with filesystem access to the state directory can rewrite the ledger without detection. An operator who needs tamper-evidence must ship the records off-host themselves.

Receipt: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/admin.md

## What does a sandbox runtime (just-bash, Docker, Gondolin) actually isolate, and what leaks across it?

*Answered by the heypi researcher.*

The runtimes doc publishes an isolation table, and the honest reading is that only Gondolin is a real boundary. Host: "None beyond file-tool path checks" -- and the doc concedes "Host file tools remain inside the workspace, but Bash can leave it." Docker: container isolation, bind-mounted workspace at /workspace. just-bash: "In-process interpreter and confined filesystem" over mounted host roots -- in-process, so it is a language-level confinement, not an OS boundary. Gondolin: "Local QEMU micro-VM" with bind-mounted host roots, requiring Node.js 23.6+ and QEMU. Vercel and Cloudflare are managed remote sandboxes that mirror host roots. The contract is strict in one useful way: "A provider must implement the full contract; failed or unsupported operations never fall back to the host." What leaks across every one of them is environment: "Runtime `env` values are visible to model-driven commands and are not secret-safe."

Receipt: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/runtimes.md

## How are secrets handed to a tool without passing through chat, and where do they rest?

*Answered by the heypi researcher.*

Via `chat_request_secret`, which does browser-side encryption so the plaintext never reaches the model or the transcript: heypi mints a pending request and public key, the user opens the admin secret page, "The browser encrypts the value before submission," heypi decrypts in-process and stores it encrypted at rest under `.heypi`. Replies go to POST /admin/secret or are pasted as `!secret:<id>:<payload>`, and "Secret replies are intercepted before Pi sees them. The raw secret is not written into /workspace and is not returned in the tool result." Two operator-owned gaps are stated plainly: "The state root contains both encrypted values and `secrets.key`. Protect and back up that key with the state it decrypts" -- key and ciphertext sit in the same directory -- and "Model-driven runtime commands do not receive collected secrets automatically," so collection and use are separate problems; heypi solves ingress only.

Receipt: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/secrets.md

## In a multiplayer channel, whose authority binds -- the requester's, the approver's, or the agent's config?

*Answered by the heypi researcher.*

The agent's config binds, and it is exact-match allowlisting rather than platform identity. Access control is per-adapter: "Every adapter accepts an exact-match `allow` policy. Denied messages are not acknowledged, queued, or sent to Pi" -- destination and user rules are intersected, DMs default to true, bots default to denied. The limits matter: "Built-in adapters do not fetch organization groups. Slack user groups and Telegram group memberships are therefore not valid `groups` values. Discord roles are used for approval decisions, not general message access." So on Slack and Telegram you enumerate user IDs by hand; only Discord can bind approval authority to a role. The doc states the boundary itself: "Allowlists are application policy, not platform authentication." On the approval side, "Admins can always approve," and with both lists omitted every actor who can see the UI is an approver.

Receipt: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/access.md

## What durability does heypi NOT provide (it disclaims crash-replay), and what does an operator have to own themselves?

*Answered by the heypi researcher.*

The architecture doc still disclaims replay, and adds a single-writer constraint that is easy to miss: "Scheduling, queues, and active turns are coordinated inside one process. Run one active process for a given state directory; heypi is not a distributed workflow engine." On crash: "Inbound messages are recorded before asynchronous processing. Stable message IDs make adapter redelivery idempotent. Queued work and approval state can be recovered after restart, but arbitrary in-flight model execution is not replayed. A process interruption leaves an audit record and the next request resumes from Pi's persisted session state where applicable." So the operator owns: horizontal scaling (there is none -- one process per state dir), replay of a turn that died mid-flight, and any HA story. What heypi does own is intake durability, redelivery dedup, and recovery of queued/approval state.

Receipt: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/architecture.md

## Which governance surfaces (approvals, audit, sandbox, secrets) are on by default vs opt-in, and which bind at runtime vs surface only?

*Answered by the heypi researcher.*

Almost everything governance-shaped is opt-in. Approvals: opt-in per tool, and enforcing when configured. Admin/audit HTTP surface: "Admin is disabled by default. Loopback binds may run without authentication for local development. Non-loopback binds require `token`. Wildcard binds such as `0.0.0.0` also require `hosts`, an explicit HTTP Host allowlist" -- the auth requirement does bind at runtime as of 0.3.0-beta.0. Sandboxing: opt-in by runtime selection, with Host ("None beyond file-tool path checks") as the weakest option. Access allowlists: opt-in per adapter, with `dms` defaulting to true. Secrets: opt-in via the `chat_request_secret` tool. The pattern across all four is the same one the 2026-07-27 harvest flagged -- the enforcement is real once configured, so the strength of a heypi deployment is a property of its config, not of the product.

Receipt: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/admin.md

## What exactly does the Gondolin sandbox runtime provide relative to just-bash and Docker?

*Answered by the heypi researcher.*

Resolved. Gondolin is a shipped, installable package (@hunvreus/heypi-runtime-gondolin, 0.3.0-beta.2, published 2026-07-21T15:50:06Z / 2026-07-22T01:15:15Z) that runs the agent's file and shell tools inside a "Local QEMU micro-VM" with bind-mounted host roots. It requires Node.js 23.6 or later plus QEMU on the host. Against the alternatives: Docker gives container isolation with a bind-mounted workspace and executes /bin/bash -lc (the image must supply Bash -- heypi does not); just-bash gives only "In-process interpreter and confined filesystem," i.e. no OS-level boundary at all. Gondolin is therefore the only local option that isolates at the kernel/VM level, at the cost of a QEMU dependency and a bleeding-edge Node requirement.

Receipt: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/runtimes.md

## What shipped stable after the network-authority wave reached 0.146.0, which the prior window closed on 2026-08-03?

*Answered by the codex researcher.*

Exactly two stable releases, both in w1: rust-v0.146.1 on 2026-08-05 (a single-commit hotfix backporting safer permission defaults for cyber-specialty models, #37057) and rust-v0.147.0 on 2026-08-07 (344 commits since 0.146.0: portable Agent Plugins with enforced runtime boundaries, the `--approve-for-me` auto-review flag, removal of `codex exec --full-auto`, an explicit project-directory trust prompt, bearer-token redaction fixes, and opt-in MCP 2026-07-28 support). Nothing stable shipped after 2026-08-07. Note on the prior window's framing: 0.146.0 itself was published 2026-07-29 on both GitHub and npm; 2026-08-03 was that window's closing date, not the release date, and the prior finding states 2026-07-29 correctly in its body.

Receipt: https://github.com/openai/codex/releases/tag/rust-v0.147.0

## Did anything sit in alpha through the window end?

*Answered by the codex researcher.*

Yes, and it is the defining fact of this window. 0.148.0 never cut. Twenty-one alpha builds were published from rust-v0.148.0-alpha.1 (2026-08-07T03:20:28Z) through rust-v0.148.0-alpha.21 (2026-08-17T19:27:11Z), accumulating 422 commits with no stable tag, 324 of them dated on or after 2026-08-10. npm dist-tags at window close read latest=0.147.0, alpha=0.148.0-alpha.21. The entire second week of the window produced zero installable stable change.

Receipt: https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21

## Did the network-authority hardening line continue after reaching stable, and where is it now?

*Answered by the codex researcher.*

It continued and then stalled outside stable. #37211 (2026-08-06) hardens network-proxy MITM authorization against ambiguous and encoded hook paths and blocks plain-HTTP proxy requests for MITM-required hosts; #38049 (2026-08-11) hardens proxy credential brokerage; #38299 (2026-08-13) routes network access through the shared approval pipeline. None of the three is in rust-v0.147.0 or any later non-prerelease tag; all are reachable only through 0.148.0 alphas. The prior window's conclusion that the wave 'reached stable' held for the 0.146.0 batch, but a second batch has been alpha-only for the eleven days since.

Receipt: https://github.com/openai/codex/commit/7a0e974e08c798d1e8d59d407aeb6e24db1313af

## The source contract asks which surface is canonical when the GitHub releases, npm, and the official changelog disagree. What did this window show?

*Answered by the codex researcher.*

GitHub release tags and npm agreed precisely all window (0.146.0 within 3 minutes, 0.146.1 within 5, 0.147.0 within 6). The official changelog is the outlier: it is now a merged ChatGPT-and-Codex changelog, it lags (the /import capability shipped in 0.147.0 on 2026-08-07 and was announced 2026-08-11), and it omits version numbers on some Codex CLI entries. Recommendation for future windows: treat the GitHub tag as canonical for what shipped and when, use npm to confirm installability, and treat the changelog as an announcement surface only.

Receipt: https://learn.chatgpt.com/docs/changelog

## Were there any CVEs or GHSA advisories for Codex in this window?

*Answered by the codex researcher.*

No. gh api repos/openai/codex/security-advisories returns a single advisory, GHSA-w5fx-fh39-j5rw / CVE-2025-59532 (sandbox bypass via model-generated cwd, published 2025-09-19, patched in 0.39.0) -- well outside the window and long since fixed. The security-relevant work this window arrived as ordinary release-note bug fixes rather than advisories: bearer-token under-redaction (#36908), plugin runtime boundaries (#37027), and the alpha-only proxy MITM authorization fix (#37211). An operator watching only the advisory feed would have seen nothing.

Receipt: https://github.com/openai/codex/security/advisories/GHSA-w5fx-fh39-j5rw

## Prior window: agent-zero shipped a stop control. What followed?

*Answered by the agent-zero researcher.*

Nothing further on the stop control itself, and I checked rather than assumed. The stop button and /stop endpoint shipped in v2.8, published 2026-08-01T15:50:00Z -- one day before this window opens, so v2.8 is 'outside' and the prior harvest caught it at the tag. Scanning all 52 commits between v2.8 and v2.9 (gh api compare/v2.8...v2.9, total_commits=52) for stop/cancel/abort/interrupt returns exactly one hit, 'Stop idle goal polling' (e8e566d221), which is about removing recurring API requests and has nothing to do with agent cancellation. So the stop control was shipped once and not revisited. What followed is a different kind of control: v2.9's scoped tool, MCP, and skill access policies. The governance move in this window is from 'halt the run' to 'constrain what the run can reach', including through delegated subagents -- a more durable answer to the same problem, since a stop button only helps a human who is watching.

Receipt: https://github.com/agent0ai/agent-zero/releases/tag/v2.8

## IDENTITY WARNING: verify against the repo named in the contract, since a past harvest confused a different project called 'ZERO' with this one.

*Answered by the agent-zero researcher.*

Verified, and nothing in this harvest touches any other project. Every finding is anchored to github.com/agent0ai/agent-zero, confirmed via the API as full_name 'agent0ai/agent-zero', description 'Agent Zero AI framework', default_branch main, 18,901 stars, fork=false, archived=false -- matching the owner 'agent0ai' and repo URL named in sources/agent-zero.yml. The site https://www.agent-zero.ai/ and docs at /p/docs/ are the same product (landing tagline: 'Let Agent Zero build your own agentic AI system', and the homepage names v2.9 as current, matching the repo's latest tag). One genuine adjacency to flag so it is not confused later: 'Spynel' is a separate, unreleased project by the same author announced on the Agent Zero site -- it is not this repo and has no code surface, and I have channelled it as docs-only for exactly that reason. Also note the CVE record uses the older vendor string 'frdel/agent0ai agent-zero', which is the same project under its former owner name, not a different one.

Receipt: https://github.com/agent0ai/agent-zero

## Which release or docs surface best describes the current runtime isolation model? (contract open question)

*Answered by the agent-zero researcher.*

For released behaviour, the docs index at /p/docs/ splits it across the Browser, Desktop, and Installation pages, and the Agent Profiles page is now the best single description of the *governance* layer on top of that isolation -- it documents where profiles live on disk (/a0/usr/agents/<profile-id>/ global, /a0/usr/projects/<project>/.a0proj/agents/<profile-id>/ project-scoped) and the tri-state On/Default/Off tool policy model. Be careful here: the most interesting isolation work is staged, not released. The internal Browser rework on the `ready` branch (private Xvfb display, Patchright isolated world, authenticated Xpra session with CDP screencast) is a materially different isolation posture from what v2.9 ships, and it is in no tag and not on main. So the honest answer is that the docs describe v2.9's model, the `ready` branch describes a model no operator has yet, and no surface currently describes both clearly.

Receipt: https://www.agent-zero.ai/p/docs/agent-profiles/

## Which parts of Agent Zero's tool creation are safe to compare against an operator's own tool and receipt boundaries? (contract open question)

*Answered by the agent-zero researcher.*

The scoped tool access policy work in v2.9 is the comparable part, because it is enforced rather than declarative: helpers/tool_policy.py resolves canonical identities for local, plugin, and MCP tools, and the block is applied at prompt rendering, Responses schema generation, connector stubs, local execution, MCP invocation, and delegated/parallel subordinate agents. That last enforcement point is the one worth borrowing -- a boundary that does not survive delegation is not a boundary, and the hardening commit afff2e3c05 exists precisely because the first implementation let an empty upper-layer config shadow an inherited restriction. What is NOT safe to compare is skill visibility: the docs state that skill access 'controls discovery and new loading. It does not erase skill text already saved in a chat's history', so it is a discovery filter, not a revocation. Treat it as a different primitive from tool policy despite the shared UI.

Receipt: https://github.com/agent0ai/agent-zero/commit/afff2e3c055dd9f304a37516a31c5f325e09c3bf

## Which behaviors should operators test locally versus only study as product posture? (contract open question)

*Answered by the agent-zero researcher.*

Test locally, in this order: (1) that CVE-2026-4308 is actually closed on your instance, since the whole finding this window is that a working fix was lost in a refactor and shipped broken across v1.19 through v2.8 -- verify by behaviour against a private address, not by version number; (2) that a project-scoped tool block actually denies through a delegated subagent and through an MCP call, not just in the UI; (3) Time Travel disk usage and any stranded repo.git/index.lock, which silently disables snapshotting for that workspace. Study only, do not test: Spynel, which has no artifact to test. Hold in between: the ACP bundle and interactive Browser viewport on `ready` -- real code with real receipts, but in no tag and not on main, so probing them tells you about a branch, not about anything you can deploy.

Receipt: https://github.com/agent0ai/agent-zero/commit/b40874e7c03775c53989e206769e33ff23a4384e

## Are Pi's auth print-api-key / print-bearer-token commands gated from the agent's own shell tool?

*Answered by the pi-coding-agent researcher.*

No. They are not gated, and as of this window there are now three ungated paths rather than two. I verified this three ways at the v0.84.2 tag.

(1) THE COMMANDS THEMSELVES CARRY NO CALLER GATE. `packages/coding-agent/src/cli/auth-command.ts` at v0.84.2 is 126 lines and contains no environment check, no caller check, no TTY check, and no confirmation prompt. `validateAuthCommandArgs()` enforces exactly one precondition -- "Credential printing requires --provider <provider> or --model <model>" -- and rejects unknown flags. `getAuthCredential()` returns `auth.auth.apiKey` outright, or extracts the token from the `Authorization: Bearer ...` header. In `src/main.ts`, `runAuthCommand(args)` is dispatched at line 578 with no gating around it.

(2) THERE IS NO SANDBOX OR COMMAND POLICY TO GATE IT WITH. `packages/coding-agent/docs/security.md` at v0.84.2 states: "Pi does not include a built-in sandbox. Built-in tools can read files, write files, edit files, and run shell commands with the permissions of the pi process." The doc calls this intentional: "A partial in-process sandbox would be easy to misunderstand as a security boundary while still depending on the host shell, filesystem, package managers, credentials, and extension code. Real isolation needs to come from the operating system or a virtualization/container boundary."

(3) THE BASH TOOL ITSELF HAS NO DENYLIST. `packages/coding-agent/src/core/tools/bash.ts` at v0.84.2 (510 lines) contains no command denylist, allowlist, pattern filter, or output redaction. Its only environment handling is deleting and re-setting `PI_SESSION_ID`, `PI_SESSION_FILE`, `PI_PROVIDER`, `PI_MODEL`, and `PI_REASONING_LEVEL`. Its tool guideline actively invites inspection: "You can inspect PI_* environment variables for current model and session details."

So an agent turn that emits `bash("pi auth print-api-key --provider anthropic")` gets the plaintext key on stdout, and that stdout goes back into the transcript and to the model.

THE WINDOW MADE THIS BROADER, NOT NARROWER. v0.84.1 (2026-08-07, stable) added `pi auth check --provider <p> [--credentials]` -- commit a261366bde90c24826eb77bfc600f1bb62ad36e2, proven an ancestor of v0.84.1 and not of v0.84.0 by the GitHub compare API (behind_by=13 against v0.84.1; ahead_by=17 against v0.84.0). The help text: "--credentials emits the credential, or includes it in JSON output." `test/credential-print.test.ts` at v0.84.2 shows it will also refresh an expired OAuth grant and print the freshly minted token, persisting it back to storage. The two original commands (`auth print`, commit 99e34013, 2026-07-27) predate the window.

THE ONLY LEVER, AND IT ALSO MOVED THIS WINDOW. Nothing gates the command; the only control is to not give the agent a shell. That is `--no-tools`, `--no-builtin-tools`, `--tools <allowlist>`, `--exclude-tools`, and -- new in v0.84.2 (commit 4d9aa837c2ec6e0ebc7599f7e724c7c19c06441e, proven an ancestor of v0.84.2 and not of v0.84.1) -- the `defaultTools` setting, which puts that choice in settings.json globally or per project. So the honest full answer is: the credential-printing surface grew by one command in v0.84.1, and the ability to remove the shell that reaches it became configuration rather than a per-invocation flag in v0.84.2.

CAVEAT ON METHOD: this is a source and documentation reading, not a live probe. I am a read-only agent and did not install Pi or execute `pi auth print-api-key` from inside a Pi session. The conclusion rests on the absence of any gating code in the three files above plus Pi's own security doc disclaiming a sandbox -- strong evidence, but a reproducible local probe would settle it beyond argument and is the one piece I could not supply.

Receipt: https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/src/cli/auth-command.ts

## Does the omp fork (can1357/oh-my-pi, @oh-my-pi/pi-coding-agent 17.x) appear anywhere in this report?

*Answered by the pi-coding-agent researcher.*

No. Every finding above is drawn from earendil-works/pi only: its releases API, its tags, its default branch, its CHANGELOG, its docs tree, and the npm package @earendil-works/pi-coding-agent. I did not fetch, read, or reason about can1357/oh-my-pi at any point, and no behaviour is attributed across the fork boundary in either direction. Confirming the scope on the registry side: `npm dist-tags` for @earendil-works/pi-coding-agent are `latest: 0.84.2` and `legacy-node20: 0.74.2`, with 0.84.2 published 2026-08-14T10:09:06Z -- consistent with the v0.84.2 tag published 2026-08-14T10:14:32Z on the earendil-works repo, and unrelated to the fork's 17.x line.

Receipt: https://registry.npmjs.org/@earendil-works/pi-coding-agent

## Prior window ended at v0.20.0 'The Herald Release' (tag v2026.8.3) with approval guardrails and a restored session-wide delegate_task runaway cap. What shipped after that tag?

*Answered by the hermes-agent researcher.*

Three more stable tags inside the window: v0.20.1 (v2026.8.13, ~656 PRs), v0.20.2 (v2026.8.16, ~397 PRs) and v0.20.3 (v2026.8.16.2, published 2026-08-17, ~125 PRs) -- all prerelease:false. None carries curated notes; all three defer the changelog to an unshipped v0.21.0. On the specific guardrail thread the prior window opened, the movement is in the opposite direction: on 2026-08-14 and 2026-08-15 the delegation defaults were raised from 50 to 250 iterations per child (#86506) and from 3 to 10 concurrent children (#86745), each shipped with a config migration that rewrites existing installs still sitting on the old default. The session-wide runaway cap from #66600 is not removed, and control actions were deliberately exempted from the per-turn spawn cap (#85232) so stop stays usable once the cap is hit -- but the shipped fan-out envelope widened roughly 16x in 24 hours.

Receipt: https://github.com/NousResearch/hermes-agent/pull/86506

## Does this change how an operator should think about self-improving agents?

*Answered by the hermes-agent researcher.*

Yes, on the input side rather than the self-improvement loop itself. The window's throughline is where agent-steering text is allowed to come from. Writes to AGENTS.md/CLAUDE.md/SOUL.md now always require a human (#81152); untrusted MCP servers gate write-capable tools (#81151); plugin trees are scanned before they can run in-process (#80728); repo-vendored skills load only behind an explicit per-repo trust decision (#88566). The publication's caution: the piece that keeps a trusted repo trustworthy across a `git pull` -- scan quarantine plus non-interactive trust inheritance (#88643) -- merged 2h23m after the last tag was cut and is main-unreleased. So the trust gate is released and its rescan is not.

Receipt: https://github.com/NousResearch/hermes-agent/pull/88643

## Does this affect long-horizon work, memory, skills, subagents, runtime portability, or messaging gateways?

*Answered by the hermes-agent researcher.*

All of them. Subagents: worktree isolation (#84942), live list/steer/stop (#85232), output contracts (#81144), and the raised caps. Skills: a project-local tier with a trust gate (#88566). Runtime portability: Docker sessions were sharing containers and mounts until #82731, and the MCP client moved to SDK 2.x plus the 2026-07-28 stateless protocol (#88180, #88299). Messaging: Bot Mode became a bundled default-on plugin whose bot-to-bot protocol now lives in the core system prompt of every session, headless ones included (#87886). Memory specifically was quieter -- the notable item is that the memory tool was hidden from cron agents where it had been advertised in the schema but always failed at runtime.

Receipt: https://github.com/NousResearch/hermes-agent/pull/87886

## Does this change whether teams should wrap Hermes as an agent engine, compare it, or adopt an adapter assumption?

*Answered by the hermes-agent researcher.*

Two adapter-relevant facts. First, the MCP dependency floor moved to mcp==2.0.0 + httpx2==2.7.0 across the dev/mcp/computer-use extras (#88180), so anything wrapping Hermes and pinning mcp<2 or httpx<2 now conflicts; back-compat against legacy 1.x servers was E2E-verified, so the break is in your environment, not on the wire. Second, delegation result shapes stayed deliberately byte-identical when features are off -- worktree fields appear only when isolation engaged, schema fields only when a schema was requested -- so a wrapper reading delegate_task entries does not break on upgrade. The thing that does change under a wrapper is the default envelope, because the config migrations apply on update rather than on opt-in.

Receipt: https://github.com/NousResearch/hermes-agent/pull/88180

## Does this expose a governance, permission, receipt, or replay gap for teams running it in production?

*Answered by the hermes-agent researcher.*

Three concrete ones, all now closed in a stable tag. (1) On Windows, 15 of 15 destructive commands -- including `vssadmin delete shadows`, `bcdedit /set`, `Format-Volume`, and reads of `C:\Users\me\.ssh\id_rsa` -- passed approval silently, because the pattern list was POSIX-shaped and the normalizer ate backslashes; fixed in #84428, in v2026.8.13. (2) Docker sessions with container_persistent:false shared one container and inherited each other's read-write repo mounts; fixed in #82731. (3) Terminal exception results and ACP stderr returned unredacted secrets to the model and the transcript; fixed in #81675. The open replay gap is the release notes themselves: three stable tags in the window itemize nothing, so 'what changed between the version I ran and the version I run now' is not answerable from the release page.

Receipt: https://github.com/NousResearch/hermes-agent/pull/84428

## Does this make serious agent work easier to start, inspect, or control without hiding authority?

*Answered by the hermes-agent researcher.*

Mostly yes, with one clear exception. Easier to control: per-repo skill trust, MCP trust tiers, cua's graded browser-authorization ladder, and delegate_task's list/steer/stop are all authority made explicit rather than assumed. Easier to inspect: the #88419 fix specifically exists because a failure was byte-identical to 'nothing happened' in the only payload the parent agent can read -- the fix is a reporting fix as much as a data-loss fix. The exception is the pair of delegation default raises: they widen what an agent may spend without being asked, they reach existing installs through a migration, and the concurrency figure was chosen to sit just under the project's own cost-warning threshold so the default never trips it.

Receipt: https://github.com/NousResearch/hermes-agent/pull/86745

## Which docs domain should be considered canonical if GitHub README links and deployed docs diverge? (contract open question)

*Answered by the hermes-agent researcher.*

They did not diverge from each other this window -- they diverged together from the code. The deployed docs at hermes-agent.nousresearch.com/docs are served from website/docs/ in the repo and matched the in-tree file byte-for-byte on the delegation page (both stating max_iterations 50 and max_concurrent_children 3 at tag v2026.8.16.2, where the shipped defaults are 250 and 10). Practical answer for the publication: treat the in-tree docs pinned at a tag as canonical, because the deployed site tracks main with no version selector, so a live URL cannot be a receipt for what any released version documents.

Receipt: https://github.com/NousResearch/hermes-agent/blob/v2026.8.16.2/website/docs/user-guide/features/delegation.md#L445

## Does a subagent's "always proceeds" auto-approval remove the human gate the parent agent was subject to?

*Answered by the antigravity researcher.*

Still unanswerable from any official surface, and the window made the question sharper rather than answering it. The subagents doc renders now but says nothing about permission inheritance, prompting, or an auto-approval setting -- it mentions that subagents may require tool authorizations, gives approval keyboard shortcuts (alt+J, ctrl+K), and explicitly defers security to /docs/cli/sandbox, which in turn does not discuss subagents. No in-window changelog entry (1.1.11, 1.1.12, 1.1.13) addresses subagent approval inheritance. What the window did establish is adjacent and worse: 1.1.11 disclosed that commands were being auto-approved even while the session was in request-review or strict permission mode, so before 2026-08-07 the PARENT's gate was itself not binding -- making the question of what a subagent inherits from it moot in the direction nobody wanted. The 1.1.13 define_subagent path traversal is the second data point that the subagent tool surface takes model-supplied input less carefully than the parent's. Verify by local probe; the docs will not tell you.

Receipt: https://antigravity.google/docs/cli/subagents

## What does the sandbox actually isolate, and which commands does proceed-in-sandbox auto-run without asking?

*Answered by the antigravity researcher.*

Half answered, and the half that is answered comes from docs, not code. The sandbox doc names a per-platform mechanism: Linux nsjail confining 'CPU, memory, and path visibility'; macOS sandbox-exec restricting 'absolute filesystem access and raw TCP queries'; Windows AppContainer isolating 'filesystem permissions and registry visibility'. It is enabled by "enableTerminalSandbox": true in ~/.gemini/antigravity-cli/settings.json; no --sandbox flag is documented. The per-prompt options are 'Yes, and run without sandbox restrictions', which 'bypasses the containment barrier exclusively for that single execution run', and, when the sandbox is off, 'Yes, and run in sandbox', which forces containment for one command. The second half is NOT answered: the doc names no command that proceed-in-sandbox auto-runs without asking, and states that all terminal tools trigger an approval prompt -- which the 1.1.11 changelog contradicts for every version before 2026-08-07. Treat the mechanism list as reliable (it names real OS primitives) and the approval claims as unverified. Note also the doc is undated, so nothing here can be attributed to this window.

Receipt: https://antigravity.google/docs/cli/sandbox

## Antigravity is closed source -- how does an operator verify a governance claim they cannot read the code for?

*Answered by the antigravity researcher.*

They cannot, and this window supplies the demonstration rather than the workaround. The repository at the 1.1.14 tag commit (fbf22703) contains exactly .github, CHANGELOG.md, README.md, agy-cli-demo.gif and examples; the languages endpoint returns {} and the license endpoint returns 404. The security-advisories endpoint returns [] and there is no SECURITY.md -- yet 1.1.13 shipped a fix for a model-driven path traversal and 1.1.11 shipped fixes for two independent permission-gate bypasses, none of which got an advisory. So the answer is: an operator verifies a governance claim in exactly two ways. (1) Local probe -- run the binary, set the rule, and watch whether it binds; this is the only method that produced ground truth this window. (2) Wait for the vendor's own later correction, which is how all four in-window gate failures became public. Method (2) means the operator learns a control was not enforcing only after it has stopped not enforcing, on the vendor's schedule. The tag-drift finding compounds this: even the metadata an operator would use to pin a claim to a version is wrong for three of the last thirteen releases.

Receipt: https://github.com/google-antigravity/antigravity-cli/tree/fbf22703a9c4bda0758b5bace0ab3142746780a9

## What is the real migration cost and behavior change moving from consumer Gemini CLI to Antigravity CLI (agy)?

*Answered by the antigravity researcher.*

Two concrete items resolved this window. First, the 2026-07-27 crosscheck's open lead is now confirmed on an official surface: the successor writes its configuration under the PREDECESSOR's dotfile directory. The sandbox doc gives the path verbatim as ~/.gemini/antigravity-cli/settings.json, and the settings doc names that same single file as the only location. An operator migrating from Gemini CLI therefore finds the new product's state nested inside the old product's directory -- which also means the two tools' dotfile trees are not separable by directory, and in-window issue #744 reports the CLI's own status-line JSON pointing at the wrong variant of that path (~/.gemini/antigravity/ rather than ~/.gemini/antigravity-cli/). Second, 1.1.13 (2026-08-14) removed sign-in as a hard requirement: GEMINI_API_KEY plus modelProvider: "gemini" runs the binary against the Gemini API directly, so the account-eligibility gate that 1.1.7 disclosed on 2026-07-26 now has a documented bypass at metered cost. The lifecycle framing from the transition post is unchanged: consumer tiers were cut off 2026-06-18; enterprise Code Assist retains Gemini CLI.

Receipt: https://antigravity.google/docs/cli/sandbox

## Which permission scope wins when project and global configs disagree, and can that be exploited?

*Answered by the antigravity researcher.*

Still unanswered on the official surface, and now contradicted by an operator report. The permissions doc documents only the three-list order -- 'Conflicting rules are strictly evaluated in priority order: Deny > Ask > Allow' -- together with the action(target) schema and the statement that command matches by 'exact word/token prefix' on whitespace-separated tokens evaluated as anchored regex. It says nothing about project-level versus global/user-level config. The settings doc names exactly one file, ~/.gemini/antigravity-cli/settings.json, and describes no merge order, no project-scoped file, and no precedence. So the source contract's premise of 'project-over-global permission precedence' is not documented anywhere the operator can read. Meanwhile issue #742, opened 2026-08-03 against 1.1.10 and still open on 2026-08-17, reports that command(git) and command(git:*) added to an allowlist AT PROJECT LEVEL did not take effect -- the CLI kept prompting. No in-window changelog entry addresses it. On exploitability: the answer for now runs through the token-prefix matcher rather than through scope. 1.1.11 fixed an entry that tokenized to zero words matching everything; that is the concrete exploit primitive this window produced, and it lived in whichever list the operator wrote it in.

Receipt: https://antigravity.google/docs/cli/permissions

## Flue: Does this validate or challenge the "model + harness" framing as a durable public category?

*Answered by the flue-eve-agent-flywheel researcher.*

It challenges it -- the slogan is being retired while the substance stays. The homepage now reads "The Open Agent Framework" with the sub-line "Build durable AI agents with Flue's programmable TypeScript harness. Write once, deploy anywhere, use any LLM." The literal "Agent = Model + Harness" formula this source was registered on is not on the page, and the GitHub repo description now reads "The sandbox agent framework." In-window, v2.0.2 renamed the sandbox types so `Sandbox` is the first-class handle behind `harness.sandbox` -- the harness word survives as the mechanism, but the noun the project leads with has moved from the model/harness split to the sandbox. Honest caveat: the homepage and repo description are undated moving surfaces, so I can receipt the current state but cannot prove the repositioning happened inside 2026-08-03..2026-08-17; the v2.0.0 release of 2026-07-31 ("Flue 2.0 -- Introducing Agent Hooks", announced on the site) is the more likely moment.

Receipt: https://flueframework.com/

## Flue: Which harness primitives (sandbox, filesystem, skills, memory, sessions, credentials) are stabilizing vs. still experimental?

*Answered by the flue-eve-agent-flywheel researcher.*

Sandbox is stabilizing: v2.0.2 renamed every sandbox type to its role and kept the old names as deprecated aliases, with a legacy `createSessionEnv()` factory still initializing behind a one-time warning -- a project that renames a primitive but refuses to break callers is a project that expects those callers to exist. The tool surface is also firming: v2.0.2 documents the prompt-cache contract for tool-set changes and ships an Agent Behavior reference page stating the built-in limits. The deployment surface is the opposite of stable -- v2.0.0 on 2026-07-31, six days before the window, removed `flue dev` and `flue build` outright and made Flue a Vite plugin, and removed file-based routing in favour of a `'use agent'` directive. Treat sandbox and tools as citable precedent; treat deployment and routing as still moving.

Receipt: https://github.com/withastro/flue/blob/a171cc1bc8a552775a820ae3d343ccd09597cc8c/CHANGELOG.md

## Flue: Does any API change affect how operators should think about their own receipt layer or deployment membrane?

*Answered by the flue-eve-agent-flywheel researcher.*

Yes, and it is the sharpest thing Flue did in the window. v2.0.3 moved the Cloudflare Agents SDK from a dependency each project declares into `@flue/vite` itself, so every project runs the SDK version Flue was tested against rather than whatever a scaffolded `^0.14.2` range resolved to on install day -- the trigger was fresh installs breaking on an `ai` peer conflict internal to `agents@0.14.5`. A project that declares its own `agents` dependency still wins. The membrane lesson generalizes past Flue: a caret range written into a scaffold is an undated promise that some future third-party publish will keep, and the fix is for the layer that generates the code to own the pin.

Receipt: https://github.com/withastro/flue/blob/bf86b8726f5ba189844185fdbeca0e194344ded1/CHANGELOG.md

## Flue: Is the project gaining enough traction to treat as architectural reference rather than just category evidence?

*Answered by the flue-eve-agent-flywheel researcher.*

Still category evidence, with one new reason for caution. The GitHub API reports 7,929 stars, Apache-2.0 confirmed in repo metadata, and the repo is not archived -- that settles two of the contract's registration open questions. But velocity collapsed inside the window: `gh api 'repos/withastro/flue/commits?sha=main&since=2026-08-03&until=2026-08-18'` returned exactly two commits, both release commits (v2.0.2 on 2026-08-04 and v2.0.3 on 2026-08-05), and a GitHub search for merged PRs in the window returned total_count 0. Nothing landed on main after 2026-08-05. Two weeks of quiet immediately after a major version is not evidence of abandonment, but it is a reason to re-check before citing Flue as an active architectural reference.

Receipt: https://github.com/withastro/flue/commits/main

## Eve: Does Eve's approval-gate model change how teams gate tool calls before an agent proceeds?

*Answered by the flue-eve-agent-flywheel researcher.*

Yes, twice in six days, and the second change is the substantive one. eve@0.32.0 (2026-08-11) renamed the negative approval response from `deny` to `cancel` "aligning the public protocol with the user-facing flow-control semantics" -- a vocabulary move from authority verdict toward flow control. eve@0.34.0 (2026-08-12) then added optional `request` and `response` approval policies on tools and connections, where a response policy can authenticate the responder and return a tagged allow-or-rejection decision, and authorization token results can expose a stable provider subject. That is the gate learning who is answering it, not just that it was answered -- the property that separates an approval UI from an approval control. 0.36.0 added recovery for cancelled responder-authorized approvals after replay, so a consumed response cannot leave the pending tool call hanging.

Receipt: https://github.com/vercel/eve/releases/tag/eve%400.34.0

## Eve: What does the human-in-the-loop approval surface look like end to end -- who approves, where the pause is recorded, what an operator sees?

*Answered by the flue-eve-agent-flywheel researcher.*

This registration open question is now largely answered. Who approves: as of 0.34.0 a response policy can authenticate the responder and expose a stable provider subject, so the decision carries identity. Where the pause is recorded: 0.34.0 made human approval waits durable `agent.approval` child spans, reconstructed when actions settle including across worker replacement, each lifecycle event carrying a replay-stable `idempotencyKey` derived from durable eve identity so a provider can upsert one record across retries and replays. What an operator sees: it depends on the channel -- 0.34.0 posts GitHub human-in-the-loop prompts by default in the issue or PR thread, and 0.32.0 made Slack post tool input previews separately from approval controls so large inputs no longer inflate button callbacks. The caveat: 0.35.0 then made trace content metadata-only by default, so the approval span records that a decision happened without recording the tool payload it was about unless you opt in.

Receipt: https://github.com/vercel/eve/releases/tag/eve%400.34.0

## Eve: Which primitives are stabilizing versus still moving on a fast beta -- is it stable enough to treat any primitive as architectural precedent?

*Answered by the flue-eve-agent-flywheel researcher.*

Not stable, and the window makes the answer unambiguous. Ten minor versions shipped in fourteen days (eve@0.30.0 on 2026-08-04 through eve@0.39.0 on 2026-08-17), with breaking changes on four of them: the entire continuation-token session API replaced by ID-addressed handles (0.31.0), the approval denial verb renamed and custom sandbox backends required to implement `stop()` (0.32.0), the channel turn policy default flipped to steering (0.33.0), and frontend `stop()` replaced by `cancel()` (0.38.0). Two different cancellation vocabularies were renamed in seven days. One primitive is genuinely stabilizing: `chatgpt()` was promoted out of `experimental_` in 0.39.0. Study eve's approval and instrumentation designs as precedent; do not build a production dependency on its API shape.

Receipt: https://github.com/vercel/eve/releases/tag/eve%400.31.0

## Eve: How does durable, resumable execution change what operators can promise about crash recovery and human pauses mid-run?

*Answered by the flue-eve-agent-flywheel researcher.*

The window turned this from a claim into a set of dated mechanisms. 0.34.0 reconstructs durable `agent.action` spans when runtime actions settle, including across worker replacement, and records each action's caller-accepted duration, kind, outcome, stable error code and subagent usage even when settlement crosses workers; approval decisions that resume in another worker publish durable lifecycle events. Remote eve sessions join the caller action trace through W3C `traceparent`, so the trace crosses a deployment boundary. 0.31.1 extended durability across an eve upgrade itself: sends cross durable session hooks as a `deliver` envelope with a transitional single-payload mirror for sessions pinned to 0.30.3 -- 0.30.8, so sessions stay resumable through the version bump. 0.30.7 made cancelled subagent children park as "(cancelled)" and stay resumable rather than leaking as permanently running. Eve's underlying Workflow SDK dependency is still on 5.0.0 beta releases, updated twice in-window (0.30.0 and 0.35.0).

Receipt: https://github.com/vercel/eve/releases/tag/eve%400.34.0

## Eve: Does the filesystem-first "agent is a directory of files" model make agent definitions more portable, reviewable, or version-controllable?

*Answered by the flue-eve-agent-flywheel researcher.*

More composable in-window, with a new review burden attached. 0.38.0 lets extensions contribute channels and schedules, with mounted IDs taking the extension namespace while authored route paths, cron expressions and handler behaviour stay unchanged; 0.30.3 lets declared local subagents mount extensions under their own `extensions/` directory, scoped so contributions do not extend the root agent. That is real modularity. The cost is that the directory is no longer the whole definition: a third-party extension can now give your agent an inbound channel and a cron trigger that appear nowhere in your own tree. 0.30.6 pulled in the other direction usefully, accepting unmodeled `SKILL.md` frontmatter when importing a skill authored for another runtime (the fields are no-ops in eve) -- a small but concrete portability gesture across harnesses.

Receipt: https://github.com/vercel/eve/releases/tag/eve%400.38.0

## Agent Flywheel: Does the installer pin agent versions and channels? An assembly layer inherits the released-is-not-merged problem for every tool it bundles.

*Answered by the flue-eve-agent-flywheel researcher.*

The default install does not track a release at all -- it tracks the default branch. The README pinned at the v0.7.0 dereferenced commit (edaee4f) documents the production one-liner as `curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/main/install.sh?$(date +%s)" | bash -s -- --yes --mode vibe`, with tag- and SHA-pinned variants shown only as an alternative (`.../v0.5.0/install.sh ... --ref v0.5.0`). So for this source the publication's central rule inverts: released is not what operators run, main is. That matters concretely this window, because main moved 55 commits between 2026-08-03 and 2026-08-17 while the newest tag stayed v0.7.0 from 2026-06-26. Anyone who installed on two different days in this window installed two materially different systems, and neither is described by any tag. The same README notes the production one-liner is still hand-written today rather than generated from the `acfs.manifest.yaml` single source of truth, so installer behaviour and the manifest can drift.

Receipt: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/README.md

## Agent Flywheel: Are the project's attributed operating-budget examples ($440-656/month at intake, including a two-Claude-account high end) holding as the lineup changes?

*Answered by the flue-eve-agent-flywheel researcher.*

Holding unchanged. agent-flywheel.com currently states VPS hosting at "$40 -- 56/month", Claude Max at "$200/month" or "$400 for power users (2 accounts)", ChatGPT Pro at "$200/month", and a total of "$440 -- $656/month", against a stated comparison that "a junior developer costs $5,000+/month". These are the same figures the contract recorded at the 2026-07-02 intake. The agent lineup is also unchanged: "Claude Code, Codex CLI, and Antigravity CLI". Note the standing caveat -- this is a project-authored budget on an undated marketing surface, accepted under the contract as an attributed current-posture claim, not as an independently verified cost.

Receipt: https://agent-flywheel.com/

## Agent Flywheel: Does the next tag make safe mode gate the dangerous Claude, Codex, and Antigravity shortcuts, remove ACFS-created NOPASSWD state when changing modes, and detect provider-supplied passwordless sudo?

*Answered by the flue-eve-agent-flywheel researcher.*

Still open -- there is no next tag. `gh api repos/Dicklesworthstone/agentic_coding_flywheel_setup/releases` and `.../tags` both return the same seven entries, newest v0.7.0 published 2026-06-26T22:46:27Z. Fifty-two days have passed without a tagged release, so the incomplete mode boundary documented at v0.7.0 is unresolved at the release surface, and the homepage still advertises "Vibe Mode" as "Passwordless sudo with dangerous flags enabled for maximum velocity on throwaway VPS environments" alongside an "Idempotent & Safe" claim with "SHA256 verified installers". Because the default installer runs from main rather than from a tag, the practical exposure of an operator installing today is not described by v0.7.0 either -- which makes this open question harder to close, not easier.

Receipt: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.7.0

## Did Paperclip tag the review-round cap and the rest of its unreleased default-branch work?

*Answered by the paperclip researcher.*

Yes, both -- and then reopened the same gap within a week. Paperclip published v2026.817.0, its first stable since v2026.722.0 (2026-07-22), carrying 315 commits. The review-round cap is in it: PR #10650's merge commit 27f8c8dbcf42781e1886df2d96805ef41688690c is contained in the tag by ancestry (compare 27f8c8db...v2026.817.0 -> status=ahead, ahead_by=135, behind_by=0), and the release body credits #10650 by number under 'Agent-to-agent governance surfaces'. The rest of the default-branch backlog recorded on 2026-08-03 tagged with it -- Decisions v1, the Activity/audit merge, human-approved secret proposals, default-open visible issue writes, Import/Export replacing Cloud Sync. Three qualifications. (1) The boundary: the tag name and the release header say 2026-08-17, but GitHub's publish timestamp is 2026-08-18T03:17:29Z UTC, hours past the window edge. (2) The freeze: the merge-base of master and the tag is 8f7b8b3f, committed 2026-08-10T23:52:59Z, so nothing merged after 2026-08-10 is in the release -- the tag adds only one CI refactor and three release-notes edits on top of the soaked beta/v2026.811.0-beta.0, which points at that same commit. (3) The gap is already back: master is 176 commits past the freeze, including a review-policy authorization bypass fix (#11405) and a CWE-78 CLI fix (#11400) that no released build contains. The structural answer is that Paperclip stopped being an untagged-master project by building a canary -> nightly -> beta -> stable train with an enforced 3-day beta soak (#11006, #11008, both merged 2026-08-10 and both in the tag), so from here on a Paperclip stable is a roughly week-old build by design, and the current week is visible on `paperclipai@beta` rather than on master.

Receipt: https://github.com/paperclipai/paperclip/pull/10650

## Did the OpenClaw workspace-boundary / sandbox-boundary fix reach a STABLE release this window? The prior window found it stopped at beta. Prove the channel by ancestry.

*Answered by the openclaw researcher.*

No. It is still beta-only, and it has now been beta-only for 21 days.

Ancestry proof. The fix is merge commit cc027149e553ff4be1afe2ca9cc3de9ccdea6f68 (PR #113405, 'security fix(agents): close symlink-then-.. workspace boundary bypass in assertSandboxPath', merged to main 2026-07-27T07:16:00Z).

Against every non-prerelease tag that exists:
- compare/v2026.7.1...cc027149 -> status=diverged, ahead_by=7124, behind_by=215
- compare/v2026.7.1-1...cc027149 -> diverged, ahead_by=7124, behind_by=223
- compare/v2026.7.1-2...cc027149 -> diverged, ahead_by=7124, behind_by=224  (this is GitHub's Latest AND npm dist-tag `latest`)
- compare/v2026.6.33...cc027149 -> diverged, ahead_by=10277, behind_by=294
- compare/v2026.6.34...cc027149 -> diverged, ahead_by=10277, behind_by=332  (npm dist-tag `extended-stable`)
'diverged' with a non-zero ahead_by means the fix commit is not an ancestor of the tag: no stable tag contains it.

Against the prerelease tags:
- compare/v2026.7.2-beta.5...cc027149 -> status=behind, ahead_by=0 (contained)
- compare/v2026.7.2-beta.7...cc027149 -> behind, ahead_by=0 (contained)
- compare/v2026.8.1-beta.2...cc027149 -> behind, ahead_by=0 (contained)

Corroborated at the byte level via the contents API at pinned refs: src/agents/sandbox-paths.ts is size 9448 and byte-identical at v2026.7.1-2 and v2026.6.34, with no `fs.realpath.native` and no `assertRawParentWithinRoot`; at v2026.8.1-beta.2 the same file is size 12291 and contains `const realpathNative = promisify(fs.realpath.native)` and `async function assertRawParentWithinRoot`.

Two things changed since the prior window, and both make the answer worse rather than better. First, stable published four times inside the window (v2026.7.1-1 and v2026.7.1-2 on 2026-08-04; v2026.6.33 and v2026.6.34 on 2026-08-08) and none of those releases carried the fix -- the gap is now a demonstrated choice of release line, not a timing accident. Second, the beta line that carried it was abandoned: there is no v2026.7.2 stable tag, beta numbering restarted at v2026.8.1-beta.1/beta.2, and compare/v2026.8.1-beta.2...v2026.7.2-beta.7 -> diverged, ahead_by=66, behind_by=5470, so 8.1-beta is a fresh cut from main rather than a promotion of the 7.2 betas. The fix survives only because it lives on main.

One honest qualification the publication should carry: the PR's own description says the bypass is 'not currently reachable through shipped tools' -- read/write/edit route I/O through fs-safe Root and other callers use the returned `.resolved` -- and describes the change as hardening the validator so the boundary no longer depends on caller discipline. So the operator consequence on stable is a latent boundary weakness reachable by a future or third-party caller, not a demonstrated escape through a shipped tool. That is still worth acting on, and it is not the same claim as 'stable is exploitable today'.

Receipt: https://github.com/openclaw/openclaw/compare/v2026.7.1-2...cc027149e553ff4be1afe2ca9cc3de9ccdea6f68

## Did the open-source series pass 1.11.0 again this window?

*Answered by the openhands researcher.*

Yes, on 2026-08-07. The migrated Agent Canvas series ran v1.9.0 (2026-08-03), v1.10.0 (08-05), v1.11.0 (08-07 18:01 UTC), v1.12.0 (08-07 19:33 UTC), v1.13.0 (08-13), and v1.14.0 (08-17). v1.11.0 re-uses the exact version number the pre-migration OpenHands line published on 2026-07-09, and v1.9.0 and v1.10.0 likewise duplicate 1.9.0 (2026-07-06) and 1.10.0 (2026-07-08). git ls-remote --tags confirms both refs/tags/1.11.0 (11ca68ab2e15dcd85c21e4d7d3409e7a259369ac) and refs/tags/v1.11.0 (3c562fa694e54741f41ad7acf7210430079495fe) exist on the same repository, and compare/1.11.0...v1.11.0 returns status ahead, ahead_by 955, behind_by 0 -- one continuous history, not a fork.

Receipt: https://github.com/OpenHands/OpenHands/releases/tag/v1.11.0

## What did the release automation do when it reached a number it had already published?

*Answered by the openhands researcher.*

Nothing. It did not collide, warn, or acknowledge the reuse, because it was never asked to create a ref that existed. release-please-config.json at v1.14.0 sets "include-v-in-tag": true -- the config inherited from OpenHands/agent-canvas during the 2026-07-27 migration -- so Release Please created v1.11.0 where 1.11.0 already sat, a distinct git ref. The GitHub release was cut cleanly, and the npm-publish run for v1.11.0 (31205055414) completed successfully. .release-please-manifest.json reads {".": "1.14.0"} and carries no memory of the older series: it counted up from Agent Canvas's own 1.8.0, not from OpenHands' 1.11.0. The human-facing collision is visible in the release notes themselves, which Release Please titles without the prefix -- the July release body opens '## 1.11.0 (2026-07-09)' and the August one opens '## 1.11.0 (2026-08-07)'. The two series were also never on the same pipeline: .github/workflows/npm-publish.yml fires on 'push: tags: v*', so the old unprefixed tags could never have triggered an npm publish.

Receipt: https://github.com/OpenHands/OpenHands/blob/v1.14.0/release-please-config.json

## What is marked Latest now?

*Answered by the openhands researcher.*

v1.14.0, published 2026-08-17T21:41:36Z. gh api repos/OpenHands/OpenHands/releases/latest returns tag_name v1.14.0 with prerelease=false and draft=false. It is 1001 commits ahead of the old 1.11.0 (compare/1.11.0...v1.14.0: status ahead, ahead_by 1001, behind_by 0), so the number series has now passed its own duplicate and the anomaly reported on 2026-08-03 -- Latest numbered lower than a predecessor -- has resolved itself by the line simply climbing past the collision rather than by anyone renumbering. The two 1.11.0 releases both remain published. The pre-migration series has published nothing since 1.11.0 on 2026-07-09 and the cloud-* series nothing since cloud-1.47.1 on 2026-07-21; OpenHands/docs#686 confirms the reason, stating that OpenHands/OpenHands is now the home of Agent Canvas and OpenHands/legacy preserves the prior monorepo snapshot.

Receipt: https://github.com/OpenHands/OpenHands/releases/tag/v1.14.0

## What followed the a2a-server workspace-self-trust RCE fix (#28470) after it reached stable v0.53.0?

*Answered by the gemini-cli researcher.*

Three things, in order. (1) Consolidation, unreleased: PR #28792 (commit c0d192452b4e2df7efb6d62a60385f475bfd6779, merged 2026-08-13, in no tag) removed the a2a-server's second, divergent trust evaluator. Before it, `setIsTrusted()` in packages/a2a-server/src/config/config.ts returned `getEnv('GEMINI_FOLDER_TRUST') === 'true'` -- a feature-enable flag read as a trust verdict -- falling back to a client-supplied `agentSettings.isTrusted`, and never consulted the user's trusted-folders file at all. It was dead code in v0.55.1 (`git grep setIsTrusted c0d192452^ -- packages/` shows no production caller in a2a-server), so it was not exploitable in stable; #28792 fixed it and made it the single evaluator the executor calls, and the executor now stamps `GEMINI_CLI_TRUST_WORKSPACE` into the task env so downstream `checkPathTrust` calls read one verdict instead of re-deriving it. (2) Maintenance of the regression test itself: the vulnerability test `packages/a2a-server/src/config/rce_vulnerability.test.ts` ('Vulnerability Mitigation: b-519269096') is still present and still asserts that GEMINI_CLI_TRUST_WORKSPACE and GEMINI_YOLO_MODE are ignored in untrusted workspaces; #28792 hoisted its homedir mock, and the agent-authored #28811 migrated the surrounding a2a-server tests off direct `process.env` mutation. (3) No advisory: `gh api repos/google-gemini/gemini-cli/security-advisories` returns [], and the only published npm advisory for the package remains GHSA-wpqr-6v78-jr5g from 2026-04-24. Nothing about #28470 was ever assigned a GHSA.

Receipt: https://github.com/google-gemini/gemini-cli/pull/28792

## Does any related guard still read trust from inside the workspace it guards?

*Answered by the gemini-cli researcher.*

Not from workspace settings or workspace .env -- but yes, from the workspace's git config, and that fix is not in any release. Settings and env are clean, verified by reading the code at pinned SHAs. In the CLI frontend (packages/cli/src/config/settings.ts at e120d041e), `_doLoadSettings` computes the initial verdict from a merge of schema defaults + system defaults + user + system only, with the comment 'For the initial trust check, we can only use user and system settings'; `mergeSettings` then sets `safeWorkspace = isTrusted ? workspace : {}`, dropping workspace settings entirely when untrusted. `loadEnvironment` skips `.gemini/.env` when untrusted and, for a plain workspace `.env`, admits only AUTH_ENV_VAR_WHITELIST = [GEMINI_API_KEY, GOOGLE_API_KEY, GOOGLE_CLOUD_PROJECT, GOOGLE_CLOUD_LOCATION] with values passed through `sanitizeEnvVar` -- so a hostile repo cannot inject GEMINI_CLI_TRUST_WORKSPACE and flip `checkPathTrust`, which is still env-first by design. In the a2a-server, both `createApp` and `loadSettings` call `loadSettings(workspaceRoot, false)` with an explicit isTrustedOverride of false before `checkPathTrust`, and workspace settings.json is read only if trusted, with policyPaths/adminPolicyPaths pinned to user level even then. The remaining hole is git: until #28792 (main, 2026-08-13, no tag), every git subprocess the agent spawns inherited the repository's own `.git/config`, so an untrusted workspace could supply `core.pager`, `core.hooksPath`, `core.sshCommand`, `diff.external` or `core.fsmonitor` and have them execute -- and PolicyEngine's `isKnownSafeCommand` path auto-promoted git invocations from ASK_USER to ALLOW in untrusted folders. That is a guard reading configuration from inside the workspace it guards, and it is live in stable v0.55.1. Two lesser divergences worth noting: a2a-server's `loadEnvironment` applies no equivalent of the CLI's DEFAULT_EXCLUDED_ENV_VARS (DEBUG, DEBUG_MODE, GEMINI_CLI_IDE_SERVER_STDIO_COMMAND, GEMINI_CLI_IDE_SERVER_STDIO_ARGS), which the CLI strips from project .env files regardless of trust -- so a trusted workspace's .env reaches further through the a2a-server than through the CLI; and `--skip-trust` still sets GEMINI_CLI_TRUST_WORKSPACE=true globally (packages/cli/src/config/config.ts:517), which is the intended escape hatch but is indistinguishable downstream from any other source of trust.

Receipt: https://github.com/google-gemini/gemini-cli/blob/c0d192452b4e2df7efb6d62a60385f475bfd6779/packages/core/src/utils/gitUtils.ts

## The prior window recorded that Claude Code published nothing for ten days. Did its publish cadence resume in this window? (Two independent surfaces required before asserting a cadence claim either way.)

*Answered by the claude-code researcher.*

Yes on the changelog and package surfaces, and no on the weekly-digest surface -- the cadence resumed unevenly, and the split is the more useful answer than a bare yes.

SURFACE 1 -- package registry (independent, machine-readable, not authored). The `time[]` map from https://registry.npmjs.org/@anthropic-ai/claude-code confirms the gap and its end to the minute: 2.1.220 published 2026-07-24T23:11:21Z, then nothing until 2.1.221 on 2026-08-03T22:16:25Z. That is 9 days 23 hours -- the ten-day silence the prior window recorded, now closed with a hard timestamp on both ends. After it, thirteen releases in fourteen days: 2.1.221 (Aug 3), 222 (Aug 4), 223 (Aug 5), 224 (Aug 7), 225 (Aug 7), 226 (Aug 8), 227 (Aug 10), 228 (Aug 11), 229 (Aug 12), 231 (Aug 13), 232 (Aug 13), 233 (Aug 14), 234 (Aug 17). Two same-day pairs (Aug 7 and Aug 13) and a resumed near-daily rhythm. Note 2.1.230 is absent from `time[]` entirely -- not unpublished, since unpublished versions retain their `time[]` entry, but never published.

SURFACE 2 -- official changelog (independent of the registry; authored by Anthropic, rendered at code.claude.com). It shows the identical gap from a different direction: v2.1.220 dated July 25, 2026, then v2.1.221 dated August 4, 2026, and every subsequent version present with substantive entries rather than the "Bug fixes and reliability improvements" placeholder that 2.1.220 and 2.1.226 carry. The two surfaces agree on the shape and disagree only by the ~1 day of timezone skew you would expect between a UTC publish timestamp and an authored date.

SURFACE 3 -- the weekly digest, which did NOT fully resume. https://code.claude.com/docs/en/whats-new lists Week 30 (July 20 -- 24) and then Week 32 (August 3 -- 7). Week 31 is missing from the index, and /docs/en/whats-new/2026-w31 returns HTTP 404 -- the digest for the silent week was never written, which independently corroborates that the gap was real and not a rendering artifact. More significantly for this window: as of 2026-08-17, /docs/en/whats-new/2026-w33 also returns HTTP 404. The digest surface covers only the first five days of a fourteen-day window. Everything from v2.1.225 onward -- including the entire v2.1.232 permission-bypass cluster and the Windows NTLM credential-leak fix -- exists on the changelog and in the package, and has no digest entry at all.

So: shipping cadence resumed on 2026-08-03 and is now running at roughly one release per day, verified on two independent surfaces. Editorial cadence has not caught up -- the human-readable digest is nine days and nine releases behind the artifacts. An operator watching only the what's-new page in this window would have missed every security fix in it.

Receipt: https://registry.npmjs.org/@anthropic-ai/claude-code

## What release channel does Claude Code publish on, and can channel be resolved by git ancestry for this source?

*Answered by the claude-code researcher.*

It cannot, and this needs to be stated once plainly rather than fudged per-change. Claude Code is closed-source. There is no public git repository, no public tags, and no commits -- so `git tag --contains <sha>`, `gh api repos/OWNER/REPO/compare/<tag>...<sha>`, and every other ancestry proof the method prescribes are structurally unavailable for this source. Nothing was withheld from me; the artifact does not exist.

The defensible substitute, used consistently throughout: the npm registry publish record IS the release event, and the semver version IS the tag. A version present in `time[]` with a resolvable per-version manifest and plain non-prerelease semver is a tagged release. That is a weaker claim than ancestry -- it proves an artifact was published, not that a given change is contained in it -- so every `what_changed` is anchored to Anthropic's own changelog text for that exact version rather than to any inference of mine about what a build contains.

One genuine channel structure does exist and is documented rather than inferred: `stable` and `latest`, exposed as npm dist-tags, as `autoUpdatesChannel` in settings.json, as an argument to the native installer, as two separate Homebrew casks, and as separate apt/dnf/apk repository suites. Per https://code.claude.com/docs/en/setup#configure-release-channel, `stable` is "typically about one week old, skipping releases with major regressions". On 2026-08-17 that channel gap was eight releases wide. That is this source's real released-is-not-merged axis, and it is the first change reported.

No prerelease tag (rc, beta, alpha, nightly) appeared anywhere in the registry during this window. Where a feature is called "public beta" -- self-hosted environments -- that is a product-maturity label on a feature shipped inside an ordinary stable release, not a release channel, and I classified it tagged-release with the discrepancy spelled out.

Receipt: https://code.claude.com/docs/en/setup#configure-release-channel

## omnigent (a): did the worktree_guard fix reach a tag, and does v0.8.0 carry it?

*Answered by the omnigent-omp researcher.*

Yes to both, and it closed faster than the prior cycle's picture suggested. PR #3856 merged to main at 2026-08-03T11:31:21Z; v0.8.0 was tagged and published the same day at 21:45:24Z, about ten hours later. Ancestry proves containment: `gh api repos/omnigent-ai/omnigent/compare/v0.8.0...1c6dfedce7cb88186775d427f77203870b30483f` returns status "behind" with ahead_by 0 (the fix is an ancestor of the v0.8.0 tag), while the same compare against v0.7.0 returns "diverged" with ahead_by 374. The file confirms it independently: orchestration.py at v0.8.0 imports posixpath at line 12 and calls `posixpath.normpath(path)` at line 589 with a new comment naming ntpath's slash rewriting as the reason; at v0.7.0 the same site is `os.path.normpath(path)`. It also rides forward into v0.8.1, v0.8.2 and v0.9.0. One caveat worth carrying: the sibling defect filed the same day is still open -- issue #3852 (built-in write policies miss Claude Code's MultiEdit and NotebookEdit, so "Require Approval for File & Shell Operations" does not ask and "Report-Only (Deny File Writes)" does not deny) and its PR #3854 are both still open as of this harvest, sixteen days on.

Receipt: https://github.com/omnigent-ai/omnigent/pull/3856

## omnigent (b): did max_cost_usd grow a hard stop rather than forcing a model downgrade? Prove the channel by ancestry.

*Answered by the omnigent-omp researcher.*

No. Nothing changed in this window, and the hard stop that exists predates it. omnigent/policies/builtins/cost.py is byte-comparable between v0.7.0 and v0.9.0 apart from type-annotation and isinstance hardening introduced by the pyrefly lint sweep (commit 1262652a039c, 2026-08-03, PR #3972) -- that is the only commit touching the file since 2026-08-01, and it changes no semantics. At v0.9.0 the module docstring still states that on reaching max_cost_usd "the policy forces a model downgrade. Rather than stopping the session, it DENYs while the session is still on an expensive model ... the budget becomes a 'downgrade gate,' not a hard stop." A true hard stop is reachable, but only by configuration: `_resolve_expensive_models` (v0.9.0 lines 380-414) returns `block_all_models=True` when `expensive_models` is None or [], and `_is_blocked_model` returns True for every model under that flag. That behaviour was established by PR #1631 on 2026-06-30, outside this window. Channel by ancestry for the one commit that did touch the file: `gh api repos/omnigent-ai/omnigent/compare/v0.8.0...1262652a039c` -- it is in the v0.8.0 tag and every later stable tag, so the lint change is tagged-release and the cost semantics an operator runs on v0.9.0 are the same ones they ran on v0.7.0.

Receipt: https://github.com/omnigent-ai/omnigent/blob/v0.9.0/omnigent/policies/builtins/cost.py

## omp: do tags still run ahead of published releases? (At intake v17.3.6 and v17.3.7 were tagged with no release behind them, and the newest release and npm latest were both v17.3.5.)

*Answered by the omnigent-omp researcher.*

Yes, and the state at intake is confirmed unchanged -- but the reason is narrower than a systemic split. Tags v17.3.6 (54e1a8c900d30e5b6185975ab02a4a923faf1717, 2026-08-17T14:16:40Z) and v17.3.7 (644ad30d6e9436074a00f8bd08ecadcd98992fc1, 2026-08-17T20:55:09Z) both exist as non-prerelease tags with no GitHub release behind them; the releases API returns v17.3.5 (2026-08-16T08:00:13Z) as newest, and npm dist-tags read {"latest": "17.3.5"}. What the historical pattern shows is that this is normally a lag of minutes, not a policy: for v17.3.5 the tagged commit is dated 07:21:05Z, the GitHub release 08:00:13Z and the npm publish 08:03:37Z; for v17.3.4, 12:38:16Z / 13:14:09Z / 13:17:57Z. So the project's own tag-to-release lag is 20-40 minutes, and v17.3.6 is many hours past that at harvest time while v17.3.7 was cut minutes before it. The honest reading: the tag series does lead every install channel, but the two-version gap seen at intake is a same-day artifact rather than evidence that tags routinely strand releases. It matters anyway, because v17.3.6 carries a real capability (the extension file-write/delete fallback hooks) that no package channel can install. Worth re-checking next window to see whether v17.3.6 ever got a release or was skipped over.

Receipt: https://github.com/can1357/oh-my-pi/releases/tag/v17.3.5

## omp: what do the four install paths (omp.sh/install, Homebrew tap can1357/tap/omp, bun install -g @oh-my-pi/pi-coding-agent, nix run github:can1357/oh-my-pi) each resolve to today, and do they agree?

*Answered by the omnigent-omp researcher.*

Three agree at 17.3.5; Nix lands on 17.3.7, two patch versions ahead, on a commit no release channel has published. I read the resolution logic rather than running the installers. (1) omp.sh/install, 334 lines fetched today: with no flags it checks for bun and, if bun's architecture matches the host, runs `bun install -g @oh-my-pi/pi-coding-agent` -- npm latest, 17.3.5. Otherwise it takes the binary path, which curls https://api.github.com/repos/can1357/oh-my-pi/releases/latest and downloads `omp-<platform>-<arch>` from that tag -- also v17.3.5. Both arms of the script agree. Worth naming: the binary arm verifies nothing but a `--version` smoke test; there is no checksum or signature on the downloaded binary. (2) Homebrew: can1357/homebrew-tap Formula/omp.rb declares `version "17.3.5"` with four pinned sha256 digests against the v17.3.5 release assets; the tap's newest commit is be43315fe8d507185ebd753bbfa1a6a12a87f633, "omp v17.3.5", 2026-08-16T08:00:38Z -- 25 seconds after the GitHub release. Homebrew is the only path with integrity verification. (3) bun install -g: npm dist-tag latest is 17.3.5. (4) nix run github:can1357/oh-my-pi: a flake URL with no ref resolves the default branch, whose HEAD is 644ad30d6e9436074a00f8bd08ecadcd98992fc1 ("chore: bump version to 17.3.7"); packages/coding-agent/package.json at main reads version 17.3.7. So the Nix path builds from source at main and hands you an unreleased, unpublished version. An operator running `omp --version` cannot tell from the number which of these four they took, and the two who took the script and the flake are running different code.

Receipt: https://github.com/can1357/homebrew-tap/blob/be43315fe8d507185ebd753bbfa1a6a12a87f633/Formula/omp.rb

## omp: anything material in the LSP/DAP surface, or in hindsight memory / time-traveling rules?

*Answered by the omnigent-omp researcher.*

Yes on LSP, thin on DAP, and two defects plus one documented design fact on the stored-state side. LSP: v17.2.5 (2026-08-03) shipped broker-shared language servers via the `lsp.shared` setting, multiplexing one server across OMP instances in a project; v17.3.0 (2026-08-13) then fixed the defects that capability produced -- concurrent sessions sharing backend overlays, stale document overlays after workspace edits, incorrect transactional edit advertisements -- plus `diagnostics` reporting success when every language server had failed, and added Astral `ty` as a fallback Python LSP. v17.2.13 also fixed timed-out LSP requests continuing to burn server CPU without a `$/cancelRequest`, and `shutdownAll()` leaving the idle checker alive. DAP moved barely at all: v17.2.11 clarified js-debug-adapter installation paths in docs and error messages, and v17.3.0 fixed undrained stdout in DAP `runInTerminal` requests. Nothing in the window documents what confines a debugger session or whether it can execute past the tool permission layer -- that operator question is still open. Hindsight: v17.2.9 fixed `autoRecall` intermittently never reaching the model (a shared `hasRecalledForFirstTurn` flag consumed by the wrong path, issue #7568), and v17.3.0 fixed scoping that split one repository across multiple scopes on case-sensitive filesystems. Time-traveling rules: TTSR expands to Time Traveling Stream Rules, and docs/rulebook-matching-pipeline.md at v17.3.5 documents that rules are discovered from in-workspace sources -- native `.omp` rules, OMP plugin roots, agents, Cursor, Windsurf, Cline and GitHub providers, by descending priority -- and that rule identity is `rule.name` with the explicit consequence that "precedence and deduplication are name-based only. Two different files with the same name are considered the same logical rule." So a repository under review supplies rule content by design, and collision is resolved by name. I read that pipeline, I did not probe it, and no change to it landed in this window beyond a stale-docs refresh (ebd5e3f8, 2026-08-03).

Receipt: https://github.com/can1357/oh-my-pi/blob/v17.3.5/docs/rulebook-matching-pipeline.md

## (a) Does any non-prerelease tag exist yet, or is dsh-v0.1.0-rc.7 still the only tag?

*Answered by the deepseek-harness researcher.*

dsh-v0.1.0-rc.7 is the only tag that has ever existed, and it is a prerelease. `git ls-remote --tags https://github.com/deepseek-ai/deepseek-harness.git` returns exactly one line: `99f6f02fecdb7dff40c3fbc9470f5907c29f74ca refs/tags/dsh-v0.1.0-rc.7`. The GitHub release for it returns `prerelease: true`, `draft: false`, `published_at: 2026-08-17T12:01:58Z`. Note the tag itself is new this window, and rc.6 (npm 2026-08-13T12:35Z) never received a public tag at all. `compare/dsh-v0.1.0-rc.7...master` returns `identical`, so there is not even a main-unreleased surface today.

Receipt: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.0-rc.7

## (b) What does the npm latest dist-tag on @deepseek-ai/dsh resolve to today?

*Answered by the deepseek-harness researcher.*

`0.1.0-rc.7`, published 2026-08-17T11:50:59Z -- eleven minutes before the GitHub release. `next` also points at `0.1.0-rc.7`. Seven versions exist: 0.0.1-rc.1 (2026-08-10T19:41Z), 0.0.1-rc.2, 0.0.1-rc.5, 0.1.0-rc.2, 0.1.0-rc.3, 0.1.0-rc.6, 0.1.0-rc.7 -- every one a prerelease, and the first three published before the public repo existed. So the README's `npx @deepseek-ai/dsh web` installs a release candidate, exactly as the contract's intake condition states. The important new detail is that this is the only dsh package whose `latest` is current: `dsh-base`, `dsh-llm`, `dsh-tool-bash`, `dsh-sandbox`, `dsh-user-approval` and `dsh-web-app` all resolve `latest` to `0.0.1-rc.1` from 2026-08-10, while `next` is `0.1.0-rc.7`.

Receipt: https://registry.npmjs.org/@deepseek-ai/dsh

## (c) What does the plugin contract actually enforce, per docs/architecture.md and docs/capability-seams.md at a pinned ref?

*Answered by the deepseek-harness researcher.*

Types, lifecycle and dependency order -- not privilege. A plugin is "a TypeScript module that exports an `apply` function" receiving a Cordis `Context`; there is no manifest, no capability declaration and no isolation, and it runs in-process. What the architecture does enforce is composition discipline: a capability is a seam only if it has all three roles (Service Definition, Service Provider, Consumer) -- "one role alone is not a seam"; registrations are reversible effects that unwind on unload; boot is a fixed layer order (bundles in the profile's order, then the profile patch, then the home patch, then any `--patch`); a duplicate route registration or a second fallback claim throws; the approval outcome vocabulary is closed and fails closed to `unavailable`; and a runtime invariant asserts that anything model-visible is reconstructable from the session log. capability-seams.md is generated from Cordis declarations with a completeness guard, so the seam table is a checkable artefact rather than prose. What it does not enforce is any limit on what a loaded plugin may do.

Receipt: https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/docs/architecture.md

## (d) Can the component that enforces a limit itself be replaced by a plugin?

*Answered by the deepseek-harness researcher.*

Yes, with one deliberate exception. architecture.md: "There is no privileged core to patch" and "Any row it prints can be replaced by a patch of your own." `ctx.approval` and `ctx.sandbox` are both classified as ordinary seams. The approval decision runs over the `approval/request` waterfall where "the first answer occupies the single decision slot," so a plugin registering an answerer with `prepend` can auto-approve everything. Confinement is opt-in at the consumer: "A `danger-full-access` consumer spawns its original argv and does not call `ctx.sandbox`," and the shell executor is itself swappable (`bash-sandbox` confines, `bash-local` does not). The sharpest illustration is the network bind: DeepSeek blocked `--host 0.0.0.0` in the CLI flag parser because it "would expose remote code execution to the network," yet the thing it protects is `- id: webserver ... config: host:` -- an ordinary Cordis row a patch can rewrite. The exception: the `never` approval policy is "enforced inside the service before waterfall dispatch, so even an answerer registered later with `prepend` cannot bypass it." Two accidental guards worth knowing: permission-presets throws at load over a non-confining shell executor, and a missing or throwing answerer fails closed rather than open.

Receipt: https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/packages/bundle/web-app/cordis.patch.yml

## (e) What authenticates a request to the Web UI on 127.0.0.1:3080?

*Answered by the deepseek-harness researcher.*

Nothing, and the code says so. packages/client/connection/src/api-request-trust.ts: "Network reachability and authentication stay out of scope: binding policy belongs to the webserver config, and this fence is not an auth layer." `isTrustedApiRequest()` checks the Host header against loopback or a declared `trustedHosts` authority (DNS-rebinding defence), refuses an explicit `sec-fetch-site: cross-site`, and requires any attached Origin to equal the Host. An absent Origin passes. docs/subsystems/web-server.md: "there is no TLS, auth, or origin policy, so a non-loopback bind exposes the server to that network." Any local process therefore has the full API. As for exposing the port: DeepSeek's own CLI now refuses it -- `program.error('error: --host 0.0.0.0 is intentionally not supported yet for safety: it would expose remote code execution to the network; use 127.0.0.1 instead')` -- a guard added 2026-08-13 that replaced help text which had previously advertised `--host 0.0.0.0` as the way to "reach it from another machine on the LAN." The guard is in the flag parser only; the webserver config still accepts `'0.0.0.0'` and a Cordis patch can set it.

Receipt: https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/packages/bundle/web-app/src/startup.ts

## (f) Is the repo a mirror of an internal one, and what does that mean for the commit record?

*Answered by the deepseek-harness researcher.*

It is a mirror, and the repo's own CI names the arrangement. .github/workflows/python-release.yml refuses to publish unless `"$REPOSITORY" = "$PYPI_PUBLISHER_REPOSITORY"`, its header speaks of "the private publisher-repository identity," and it disables PyPI attestations with "Public attestations reveal the private publisher repository." Supporting evidence: .gitlab-ci.yml publishes wheels to a GitLab package registry on `python-v*` tags that do not exist here; scripts/publish-npm-baseline.ts defaults to `https://registry.npm.harnessment.com`; issue templates, an issue-lifecycle policy engine and a PR template are committed while issues and PRs are both disabled; merge commits cite PRs up to #2620 in the `deepseek-harness` org (created 2026-05-26, 0 public repos) and #2620 404s here; npm publishing began 2026-08-10, three days before this repo was created. What it means for the record is better than the usual mirror case: the history is deep, not squashed -- 12,404 commits back to 2026-06-10 -- so archaeology works and authorship is intact. But the tag surface is not the release record (six of seven npm versions have no tag here), PR links are unresolvable, and a gap in commits is not evidence that no work happened. Defects live in Discussions with no issue tracker behind them, so capture permalinks and verbatim text.

Receipt: https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/.github/workflows/python-release.yml

## Docs ship English and Chinese side by side. When the two disagree, which is normative?

*Answered by the deepseek-harness researcher.*

Neither -- deliberately. docs/i18n/README.md states the pairing contract: "**Both languages carry equal authority.** A document may be authored and reviewed in either language first -- a Chinese-first Agent Note is as legitimate as an English-first one -- and the counterpart is translated from it. Neither file outranks the other; what binds them is that they must say the same thing." A pair is three files (`foo.md`, `foo.zh.md`, `foo.i18n.yaml` holding both git blob hashes), and CI fails a PR that leaves a pair out of sync. But the gate's own stated limit answers the operator's real question: "a green gate means the pair was confirmed consistent at these exact contents, not that the confirmation was sound. It checks hashes and Markdown structure; it cannot judge whether the two sides actually say the same thing." So when the two disagree in substance there is no tiebreaker document -- read the code. One exception: generated pages (the seam graph, the Cordis catalogs) name the English generator output as the source of truth, and their generated sections are byte-identical across both language sides.

Receipt: https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/docs/i18n/README.md

## Which behaviours does an operator inherit from Cordis rather than from DeepSeek, and who ships a fix?

*Answered by the deepseek-harness researcher.*

Plugin mounting and unmounting, dependency resolution, service registration and disposal, typed events and their dispatch modes (waterfall, serial, parallel), reversible effects, config schemas via schemastery, and hot-reload all come from Cordis. But an operator does not inherit them from cordiverse. `@deepseek-ai/dsh@0.1.0-rc.7` depends on `@deepseek-ai/cordis: ^4.0.1`, a DeepSeek-scoped republication built from this repo's own `vendor/cordis` directory, alongside vendored cosmokit, group, hmr, include, loader, logger-console, schemastery and timer. Upstream `cordis` has never shipped a stable 4.x -- its npm `latest` is `4.0.0-rc.8`. So DeepSeek ships the fix, on DeepSeek's schedule, out of a directory in this repo; a cordiverse commit does not reach your install. The correct place to read framework behaviour for a given dsh version is `vendor/` at that version, and the correct attribution for a plugin-lifecycle finding is "dsh's vendored Cordis," not "Cordis."

Receipt: https://registry.npmjs.org/@deepseek-ai/cordis

## Does the harness run any model other than DeepSeek's own, and is that supported or incidental?

*Answered by the deepseek-harness researcher.*

Yes, and it is supported. `@deepseek-ai/dsh-llm-pi-ai` is a first-party "generic multi-provider adapter for the harness LLM seam," it is a declared dependency of `@deepseek-ai/dsh-base` (the bundle architecture.md calls "the first layer of every profile"), capability-seams.md lists it as a `ctx.llm` implementation beside `llm-deepseek`, and it has its own CI workflow at .github/workflows/pi-ai-provider-e2e.yml. Its README's worked config shows routes for `openai` (`apiKeyEnv: OPENAI_API_KEY`), `anthropic` (`claude-sonnet-4-5`), and a hand-declared OpenAI-compatible gateway, with credentials held as references rather than values. Beyond models, the harness ships `subagent-codex` and `subagent-claude-code` as `ctx.subagents` providers, and rc.7 wires their tasks into the Job Panel. The attribution caveat matters: the multi-provider layer is backed by the third-party `@earendil-works/pi-ai`, so provider coverage and wire behaviour are facts about the dsh + pi-ai pair. And the sandbox-escalation dead-loop reported this window reproduces specifically through OpenAI-family models on this path.

Receipt: https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/packages/llm/llm-pi-ai/README.md

## Issues are disabled -- where does an operator report and track a defect?

*Answered by the deepseek-harness researcher.*

GitHub Discussions, and nowhere else publicly. `has_issues: false` and `has_pull_requests: false` on the repo; `.github/ISSUE_TEMPLATE/config.yml` sets `blank_issues_enabled: false` with no contact links. CONTRIBUTING is explicit that code contribution is closed too: "We are sorry that we cannot accept external pull requests at the moment," and directs people to "Identify and report issues or bugs in GitHub Discussions" and to "Upvote discussions that you would like to bring to the team's attention. We are a very small team and may not be able to reply to every post, but we monitor them." So upvotes are the triage signal. There are 2,981 discussions as of this harvest. The practical warning: a discussion can be edited or deleted with no public trace and there is no state machine behind it, so a report's status is unknowable -- capture the permalink and the verbatim text at the time you cite it, as done for #1069 here.

Receipt: https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/CONTRIBUTING.md

## Are there any published security advisories?

*Answered by the deepseek-harness researcher.*

No. `gh api repos/deepseek-ai/deepseek-harness/security-advisories` returns an empty array, and there is no SECURITY.md at the tag. That is not reassurance -- the repo is four days old, has no issue tracker, and there is no published disclosure channel, so an operator has nowhere obvious to report a vulnerability and no surface that would tell them one had been fixed. The security-relevant facts this window all came from reading code and CI, not from an advisory: the Web UI has no auth layer, plugins are unsandboxed in-process code, and the default preset confines file writes only.

Receipt: https://github.com/deepseek-ai/deepseek-harness/security/advisories
