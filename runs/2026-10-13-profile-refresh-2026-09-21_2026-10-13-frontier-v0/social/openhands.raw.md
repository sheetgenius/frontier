I'll start by reading the research protocol and confirming how OpenHands is identified on the watchlist, then sweep X in the window.I'll identify official handles and then run dated X searches for OpenHands maintainers and users in the window.Official posts are in; next I’ll pull maintainer threads, user criticism, and earlier-window posts so the sweep is not just announcements.A few operator posts look high-signal; I’ll fetch those threads and keep hunting for maintainer and critical takes.===POST===
handle: @wallabytoken
post_url: https://x.com/wallabytoken/status/2102667135910629444
event_date: 2026-09-23
date_precision: day
kind: claim
stance: frustration
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: An operator said they ran Kimi K3 through OpenHands on an OpenAI-compatible endpoint and hit an automations-menu crash, a /v1 base-url mismatch, and a Safari refresh gotcha, for about six cents of session spend.
why_it_matters: This is an early-window report that the automations UI and custom-endpoint path were still sharp-edged, which is the opposite of the later control-plane pitch.
===END===

===POST===
handle: @OpenHandsDev
post_url: https://x.com/OpenHandsDev/status/2102823083199316100
event_date: 2026-09-23
date_precision: day
kind: voice
stance: announcement
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: The official account argued that a dark factory is less about a smarter model replacing engineers and more about redesigning the process so fewer steps need human judgment, then earning autonomy one workflow at a time, and pointed at their blog.
why_it_matters: That is the house framing for Agent Canvas automations, and it is the claim later user posts are cheering or distrusting.
===END===

===POST===
handle: @gneubig
post_url: https://x.com/gneubig/status/2102921297395429412
event_date: 2026-09-24
date_precision: day
kind: voice
stance: praise
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: OpenHands co-founder Graham Neubig replied to a CliffCompaction launch by saying they would welcome a pull request that adds it as a native compactor.
why_it_matters: A maintainer treating long-session compaction as an in-tree primitive tells operators where context-cost work is supposed to land.
===END===

===POST===
handle: @rajistics
post_url: https://x.com/rajistics/status/2102927552234848294
event_date: 2026-09-24
date_precision: day
kind: claim
stance: announcement
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: An OpenHands engineer told the Kimi tester they were on an older build, pointed them at Agent Canvas, and linked the GitHub heading for running it without a sandbox.
why_it_matters: The documented no-sandbox path is exactly the blast-radius issue later operator posts raise, so the pointer itself is the thing to check against current docs.
===END===

===POST===
handle: @wallabytoken
post_url: https://x.com/wallabytoken/status/2103187779333296306
event_date: 2026-09-24
date_precision: day
kind: claim
stance: criticism
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The same tester said Canvas 1.23.0 completed a Kimi K3 loop, but the UI showed zero dollars for custom openai-style models because LiteLLM had no price map, and every automation run started in a fresh workspace so prompts had to be self-contained.
why_it_matters: Cost visibility and workspace persistence are the two things a team needs before they trust scheduled agents, and both are alleged to be missing on that path.
===END===

===POST===
handle: @wallabytoken
post_url: https://x.com/wallabytoken/status/2103383737706909776
event_date: 2026-09-25
date_precision: day
kind: claim
stance: criticism
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They reported a standalone agent-server 1.49.5 plus Canvas remote backend, then said GitHub issue 5168's telemetry crash also fails profile pre-flight, so Canvas silently refuses to save an LLM profile.
why_it_matters: A save that fails closed with no error is the kind of self-host defect that looks like a model problem until someone traces it.
===END===

===POST===
handle: @rajistics
post_url: https://x.com/rajistics/status/2103504714620878988
event_date: 2026-09-25
date_precision: day
kind: claim
stance: announcement
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The same OpenHands engineer said Enterprise 0.70 adds shared org secrets, OAuth MCP connections, visibility into automations and usage, and Git Sync for PR review, and linked the hub blog.
why_it_matters: That is the versioned enterprise control-plane drop for the window, and it needs a channel check against what a self-hosted OSS operator actually gets.
===END===

===POST===
handle: @wallabytoken
post_url: https://x.com/wallabytoken/status/2104508316755865992
event_date: 2026-09-28
date_precision: day
kind: claim
stance: praise
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: After a Slack incoming-webhook automation on Canvas, the tester said 1.21 through 1.24 landed in four days and that three posts in they had stopped treating Canvas as a beta.
why_it_matters: That cuts against the later viral line that Agent Canvas is still beta, and it is an operator judgment about release cadence rather than a star count.
===END===

===POST===
handle: @OpenHandsDev
post_url: https://x.com/OpenHandsDev/status/2104954018963374303
event_date: 2026-09-29
date_precision: day
kind: claim
stance: announcement
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said running agents across an org is an infrastructure problem, and listed org-level secrets, usage and budget visibility, OAuth for MCP servers, org-wide automation management, and Git Sync for automations as new in OpenHands Enterprise.
why_it_matters: This is the public feature list a buyer would audit against Enterprise docs and the runnable channel, not against the OSS tag.
===END===

===POST===
handle: @gneubig
post_url: https://x.com/gneubig/status/2105306918424379852
event_date: 2026-09-30
date_precision: day
kind: claim
stance: announcement
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Neubig posted an explainer on Canvas automations and said the OpenHands project itself is using the same machinery as a software factory, with a longer video still to come.
why_it_matters: Dogfooding automations on the canonical repo is the strongest maintainer claim that the control plane is for real work, not a demo surface.
===END===

===POST===
handle: @0xsael
post_url: https://x.com/0xsael/status/2105313486821900535
event_date: 2026-09-30
date_precision: day
kind: voice
stance: criticism
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A reply to that software-factory post said the setup sounds like a way to produce unreadable commits.
why_it_matters: It is the attention-cost counter to factory talk: if review cannot keep up, the bottleneck just moves to git history.
===END===

===POST===
handle: @OpenHandsDev
post_url: https://x.com/OpenHandsDev/status/2105666584161276397
event_date: 2026-10-01
date_precision: day
kind: claim
stance: announcement
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said OpenHands is SOC 2 Type II compliant, framed it as independent validation of controls for running agents on more code and tools, and pointed at a trust center.
why_it_matters: SOC 2 is an enterprise procurement gate, and the report itself is the receipt, not the tweet.
===END===

===POST===
handle: @gneubig
post_url: https://x.com/gneubig/status/2105833104648667520
event_date: 2026-10-02
date_precision: day
kind: claim
stance: comparison
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Quoting a thread on AI slop PRs, Neubig said OpenHands now assumes every issue will attract a vibe-coded PR, so the defense is automated issue triage plus automated review, both run as OpenHands automations.
why_it_matters: That is a maintainer saying they stopped trying to ban agent PRs and instead moved human attention onto clearer issues and machine review, which is a different operating model than most public GitHub hygiene talk.
===END===

===POST===
handle: @AnirudhKhatry
post_url: https://x.com/AnirudhKhatry/status/2106071467259543893
event_date: 2026-10-02
date_precision: day
kind: claim
stance: announcement
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A UT Austin researcher posting work done with OpenHands said SkillRefiner refines skills offline from existing traces, evaluated it with the OpenHands agent on gpt-5.4-mini and Minimax M2.7, and claimed large savings versus generating fresh rollouts.
why_it_matters: If skill edits can come from traces you already have, the scarce input becomes failure logs rather than more agent hours, but the numbers live in the paper, not the thread.
===END===

===POST===
handle: @OneDroidAI
post_url: https://x.com/OneDroidAI/status/2107359872782053801
event_date: 2026-10-06
date_precision: day
kind: claim
stance: criticism
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A comparison thread called OpenHands a many-agent control center and said its weak spot is a quick-start that hands the agent the whole filesystem.
why_it_matters: That is the opposite of the isolated-runtime story in the September product post, so an operator needs to know which path the default install actually takes.
===END===

===POST===
handle: @wallabytoken
post_url: https://x.com/wallabytoken/status/2107413991048069600
event_date: 2026-10-06
date_precision: day
kind: claim
stance: criticism
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A day-one test of the new Model Router on a third-party endpoint said routing itself worked at a fraction of a cent per decision, but the run-at-first-message toggle was not wired up and the documented install path still did not yield 1.25.0.
why_it_matters: A release that cannot be reached by the documented install, with a dead start-of-conversation switch, is a channel problem, not a model-routing idea problem.
===END===

===POST===
handle: @xchatgcp
post_url: https://x.com/xchatgcp/status/2107424053338243336
event_date: 2026-10-06
date_precision: day
kind: claim
stance: announcement
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A Chinese-language recap of 1.25.0 said self-hosters should first check whether the local session key is bound to a listen address reachable from the public internet, because that release specifically fixed that.
why_it_matters: If the notes are right, anyone who exposed agent-server before 1.25.0 has a credential-binding check to run, independent of the Model Router headline.
===END===

===POST===
handle: @wallabytoken
post_url: https://x.com/wallabytoken/status/2107424461108674770
event_date: 2026-10-06
date_precision: day
kind: voice
stance: praise
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Replying to the 90k-star post, the same tester said they run OpenHands on their own endpoint in production and stay because the settings surface keeps growing, calling that the unglamorous part that makes a project safe to build on.
why_it_matters: That is an operator reason for staying, configuration depth, rather than a star-count reaction.
===END===

===POST===
handle: @OpenHandsDev
post_url: https://x.com/OpenHandsDev/status/2107872222463353178
event_date: 2026-10-07
date_precision: day
kind: claim
stance: announcement
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official September recap said eight Agent Canvas releases added automations that carry context from issue through development to PR review, Agent Profiles with scoped tools and credentials, and isolated Docker runtimes per conversation.
why_it_matters: Profiles plus per-conversation Docker is the product answer to the filesystem-and-credentials objections, and it is still only as real as the default install an operator actually runs.
===END===

===POST===
handle: @oikon_ai
post_url: https://x.com/oikon_ai/status/2107943169711280214
event_date: 2026-10-07
date_precision: day
kind: voice
stance: question
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A reply asked whether Agent Canvas only checks a PR's head commit before review starts, or also notices a new commit mid-review and restarts, because agent edits can make a review stale.
why_it_matters: Stale automated review is the failure mode of the factory loop Neubig described, and the question is still unanswered on X in this window.
===END===

===POST===
handle: @engelnyst
post_url: https://x.com/engelnyst/status/2108057098130956411
event_date: 2026-10-08
date_precision: day
kind: claim
stance: criticism
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: An OpenHands maintainer, responding to a result that banning agent-written tests did not hurt DeepSWE scores, said agents had opened 694 test-adding PRs on OpenHands in three months and that 303 of those also changed or deleted older tests, then argued tests increasingly act as prompts because humans will not keep reading them.
why_it_matters: If nearly half of agent test PRs also mutate the old suite, an operator cannot treat added tests as a free regression net without an external check.
===END===

===POST===
handle: @OpenHandsDev
post_url: https://x.com/OpenHandsDev/status/2108211878040105246
event_date: 2026-10-08
date_precision: day
kind: voice
stance: announcement
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: The official account said chat is fine for one agent and that growing usage needs an interface built around managing the work, then pointed at a Kanban-style demo of orchestrating agents.
why_it_matters: This is the UI half of the factory argument: the scarce human job becomes board hygiene, not a single conversation.
===END===

===POST===
handle: @OdinsReisen
post_url: https://x.com/OdinsReisen/status/2108128439396082157
event_date: 2026-10-08
date_precision: day
kind: claim
stance: frustration
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A German-language operator called OpenHands the worst Docker project they had tried on Linux, saying they spent about fourteen hours on setup against about four minutes to get OpenCode running in its own container.
why_it_matters: If that time gap holds, self-hosting the open control plane is still the serial human cost, which undercuts the easy-alternative-to-Claude-Code pitch.
===END===

===POST===
handle: @ajeetsraina
post_url: https://x.com/ajeetsraina/status/2108347566505242968
event_date: 2026-10-09
date_precision: day
kind: claim
stance: announcement
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A Docker advocate said a Hub image runs Agent Canvas plus agent-server as a self-contained sandbox, talks to several model providers through LiteLLM, and keeps API keys in a proxy so they never enter the sandbox.
why_it_matters: That packaging, if accurate, is a third-party answer to the quick-start filesystem complaint, and it is not the same thing as the official default.
===END===

===POST===
handle: @0xHumza
post_url: https://x.com/0xHumza/status/2107708587875205357
event_date: 2026-10-07
date_precision: day
kind: voice
stance: praise
frameworks: openhands, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: An operator said they run openhands.dev on a rented OVH VM next to t3.codes, on Tailscale, with Claude and Codex clients, because a beefy cloud box beat a home machine for shipping from a phone while traveling.
why_it_matters: This is a working remote-control-plane setup, and it treats OpenHands as one hosted surface among others rather than as the only harness.
===END===

===POST===
handle: @RoundtableSpace
post_url: https://x.com/RoundtableSpace/status/2109263998890000535
event_date: 2026-10-11
date_precision: day
kind: claim
stance: praise
frameworks: openhands, claude-code, codex, gemini-cli, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A high-reach recap said Agent Canvas is a self-hosted control center that runs OpenHands, Claude Code, Codex, Gemini, Pi, and OpenCode across local, remote, and cloud backends, with automations such as PR triage, and called it open source in beta.
why_it_matters: This is the window's consensus product picture, and several operator posts exist specifically to qualify or puncture it.
===END===

===POST===
handle: @TiagerBao
post_url: https://x.com/TiagerBao/status/2109264908542157001
event_date: 2026-10-11
date_precision: day
kind: voice
stance: comparison
frameworks: openhands, claude-code, codex, gemini-cli
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A Chinese-language take said the scarce layer is no longer a seventh coding agent but a control plane for who runs, where, when, and how isolated, and that OpenHands is betting Agent Canvas is that layer, including Docker isolation across parallel sessions.
why_it_matters: It names the Amdahl move the official posts are making, scheduling and isolation over another chat window, without adding a new product fact.
===END===

===POST===
handle: @RusticStack
post_url: https://x.com/RusticStack/status/2109278153046990894
event_date: 2026-10-11
date_precision: day
kind: claim
stance: criticism
frameworks: openhands, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Quoting the control-center recap, this post said dropping an API key into Agent Canvas will not move nightly automations off a Claude Code or Codex plan, because the OpenHands docs say an already-signed-in CLI login wins and the key is ignored.
why_it_matters: That is a billing-boundary claim: a multi-harness board can still spend against the vendor subscription you already logged into, which is the opposite of the self-host-to-escape-the-meter pitch.
===END===

===POST===
handle: @laxmena
post_url: https://x.com/laxmena/status/2109522511176347955
event_date: 2026-10-12
date_precision: day
kind: claim
stance: criticism
frameworks: openhands, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A SWE-bench trace reader said OpenHands plus Claude Opus 4.5 stored every step as an unknown action, so outputs were visible but not the commands, and they switched to OpenHands plus GPT-5 traces where commands and edits were recorded.
why_it_matters: If trace fidelity depends on the model pairing, post-hoc eval and incident review are not a property of the harness alone.
===END===

===POST===
handle: @rezafadakaran
post_url: https://x.com/rezafadakaran/status/2109582174668161392
event_date: 2026-10-12
date_precision: day
kind: voice
stance: criticism
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A Persian-language recap of Robert Brennan's AI Engineer talk said skip-permissions on a laptop means access to files, secrets, and even production, listed four isolation options, and called the talk a vendor pitch because it gave no sandbox-escape rate.
why_it_matters: This is the public pushback on OpenHands sandbox evangelism: isolation menus without a measured escape rate do not settle a skip-permissions default.
===END===

===POST===
handle: @i17s_inc
post_url: https://x.com/i17s_inc/status/2109917322475716678
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: openhands, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A Japanese operator account said OpenHands 1.27.0, dated 12 Oct, adds OpenCode and Pi as built-in agent choices on local backends, and that those two do not appear as candidates on OpenHands Cloud.
why_it_matters: If Cloud omits the new ACP agents, the multi-harness control-center story is channel-split, and a Cloud user cannot assume the local Settings screen.
===END===

===POST===
handle: @gneubig
post_url: https://x.com/gneubig/status/2110041913134813510
event_date: 2026-10-13
date_precision: day
kind: voice
stance: praise
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Neubig said he already hosts personal cloud agents on DigitalOcean VMs for daily tasks and was glad OpenHands was on the Open Intelligence Summit program.
why_it_matters: The co-founder is describing his own always-on VM pattern, which is the operator shape the Managed Agents integration is supposed to productize.
===END===

===POST===
handle: @digitalocean
post_url: https://x.com/digitalocean/status/2110027820739244261
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: DigitalOcean said OpenHands runs Agent Canvas on Managed Agents with an isolated session for each customer, in a list of summit-day runtime news.
why_it_matters: Per-customer isolation is the security claim to check against the Managed Agents docs, alongside whether pause/resume is in the same channel.
===END===

===POST===
handle: @OpenHandsDev
post_url: https://x.com/OpenHandsDev/status/2110101427074830379
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said OpenHands now integrates with DigitalOcean Managed Agents, so coding agents can run in isolated cloud environments, pause and resume, and be managed from Agent Canvas, with DigitalOcean usable for execution, inference, or both.
why_it_matters: This is the window-closing hosted-runtime claim, and it needs a docs-and-channel check before anyone treats pause/resume or BYO-inference as shipped on their plan.
===END===

===POST===
handle: @digitalocean
post_url: https://x.com/digitalocean/status/2110102268653818010
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: DigitalOcean replied that each OpenHands session gets its own microVM and that pausing keeps files, tools, and conversation while compute stops, and linked their run-OpenHands guide.
why_it_matters: Preserving the workspace across a pause is the operator-useful part of the integration, and it is a stronger persistence claim than the OpenHands post itself made.
===END===

COVERAGE_NOTE: Searched X Latest with since:2026-09-21 until:2026-10-14 on from:OpenHandsDev, from:gneubig, from:rajistics, from:engelnyst, from:rbren_dev, from:xingyaoww, from:wallabytoken; keyword/semantic queries for OpenHands + Agent Canvas, CLI, SDK, Docker, sandbox, Enterprise, SOC 2, SWE-bench, vs Claude Code/Codex/OpenCode, and github.com/OpenHands and url:openhands.dev; thread-fetched the Kimi/Canvas operator thread, software-factory post, SkillRefiner, 1.25.0 recap, September Canvas recap, and DigitalOcean replies. Identity drops: Open Hands DC (church), OpenMinds Developers, OpenSandbox (separate sandbox runtime), vangrid's Robert Brighton (not Robert Brennan), OpenClaw, and GitHub listicles that only named the repo. Could not reach: @rbren_dev posted nothing visible in-window despite an existing CEO account; @xingyaoww likewise silent; official from:OpenHandsDev filter:replies returned empty; Slack/Discord, GitHub issues, and quote-tweet bodies beyond what thread-fetch returned. Sweep is thin on OSS CLI-only users (conversation is Canvas/control-plane), on English setup-failure reports besides @OdinsReisen and @wallabytoken, and on whether 1.27.0's local-only OpenCode/Pi picker is in a tagged release versus Cloud. Semantic search kept mixing in unrelated sandbox and Claude Code swarm posts.
