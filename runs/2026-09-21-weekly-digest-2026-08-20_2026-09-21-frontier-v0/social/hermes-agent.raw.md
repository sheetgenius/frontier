I'll start by reading the research protocol and confirming Hermes Agent's identity so the sweep only includes posts about that repo.Next I’ll load the Hermes Agent contract, known handles, and any prior social harvests so the identity check stays tight.I’ll pull official handles and recent release talk, then search X with identity filters so lookalikes stay out.I’ll search official accounts and operator conversation in the window, then go looking for the critical and contrary posts.Latest results cluster on Sept 21. I’ll split the window and hunt for criticism, billing pushback, and earlier maintainer posts.I’ll fetch the charging-pushback thread and keep searching August plus the critical operator posts.===POST===
handle: @NousResearch
post_url: https://x.com/NousResearch/status/2090432358969196548
event_date: 2026-08-20
date_precision: day
kind: claim
stance: comparison
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said Hermes already has a remote computer via Nous Portal cloud, that operators are not locked into that host, and that it costs a few dollars a month rather than a two-hundred-dollar SuperGrok-style sub.
why_it_matters: An operator choosing a always-on host needs the actual Portal SKU and price, not the comparison slogan, before treating cloud Hermes as a cheaper Grok Bot.
===END===
===POST===
handle: @EmmettMaher
post_url: https://x.com/EmmettMaher/status/2090434068542283955
event_date: 2026-08-20
date_precision: day
kind: voice
stance: criticism
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He told Nous to stop measuring itself against Grok Bot, said they were already at the top of the personal-harness pile, and argued the Bots push looked like a same-day copy rather than their own path.
why_it_matters: If that read is right, the window's product energy went into a hosted-bot UX race instead of the local harness operators already trusted.
===END===
===POST===
handle: @mayfair0077
post_url: https://x.com/mayfair0077/status/2092762443542053271
event_date: 2026-08-26
date_precision: day
kind: claim
stance: frustration
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A Windows 11 operator said write_file was reporting success while leaving empty files, suspected an internal sync or roughly 8KB cap, and argued you should not trust the tool result until you check the bytes on disk. They pointed at GitHub issues 57788 and 62948.
why_it_matters: If the success receipt is lying, any agent that treats write_file as landed is shipping empty files into production without a human noticing.
===END===
===POST===
handle: @NousResearch
post_url: https://x.com/NousResearch/status/2093407677128790433
event_date: 2026-08-28
date_precision: day
kind: voice
stance: criticism
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: After a user posted a screenshot of a Hermes-looking install page, the official account said that site was not theirs and asked for the URL.
why_it_matters: Operators hitting a random landing page during setup can hand credentials to a clone; the canonical install path has to be checked, not googled.
===END===
===POST===
handle: @GaryMarcus
post_url: https://x.com/GaryMarcus/status/2094415570171220285
event_date: 2026-08-31
date_precision: day
kind: claim
stance: criticism
frameworks: hermes-agent, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He amplified an Ars Technica piece that said Claude, Codex, and Hermes had been installing code nobody in the company owned onto corporate networks, and treated that as another reason agent coding is a security problem.
why_it_matters: A team that adopted Hermes because it is open source still has to answer how unowned packages get onto the box, and whether the default install path even asks.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2094473747852120287
event_date: 2026-08-31
date_precision: day
kind: claim
stance: criticism
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The lead engineer said Hermes has long supported NVIDIA openshell with them, and that any company running it on a corporate network without using that path has an uninformed IT team.
why_it_matters: That is a claim that a hardened backend already exists; operators still need to check whether it is default, documented, and reachable on the channel they actually run.
===END===
===POST===
handle: @NousResearch
post_url: https://x.com/NousResearch/status/2094515104670715940
event_date: 2026-08-31
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The project account announced Hermes Agent v0.21.0 as the Pantheon release, with a changelog video, and pointed operators at the v2026.8.31 GitHub tag and `hermes update`.
why_it_matters: That is the tagged channel an operator can actually run for Bots mode, multi-gateway, subagent steering, and the rest of the late-August feature drop.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2094521827884417208
event_date: 2026-08-31
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He added that the same Pantheon tag also cut default context use by about half, and linked the v2026.8.31 release notes.
why_it_matters: If default prompts got that much smaller, local-model and cost-sensitive operators should re-measure tokens on 8.31 rather than assume the Herald-era context bill still holds.
===END===
===POST===
handle: @CharlesMonneron
post_url: https://x.com/CharlesMonneron/status/2094725508697117080
event_date: 2026-09-01
date_precision: day
kind: voice
stance: criticism
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He answered the openshell post by saying a backend that is not on by default will not be used by almost anyone, and that blaming uninformed IT does not help operators who cannot turn it on, unless yolo is already blocking the dangerous path.
why_it_matters: A sandbox that exists only as an optional NVIDIA integration does not change the default threat model for people who just ran the installer.
===END===
===POST===
handle: @llm_redteam
post_url: https://x.com/llm_redteam/status/2097409250264043777
event_date: 2026-09-08
date_precision: day
kind: claim
stance: criticism
frameworks: hermes-agent, claude-code, cursor, codex, grok-build
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A security account said Manifold found the same Git core.fsmonitor pre-trust RCE pattern across seven coding agents, and named Hermes Agent among the ones still unpatched at publication, with the payload firing before a workspace-trust prompt.
why_it_matters: If git status at session start reads a repo-supplied fsmonitor command, opening a copied folder is enough; operators should not wait for a trust dialog that never appears.
===END===
===POST===
handle: @NousResearch
post_url: https://x.com/NousResearch/status/2098071687145365632
event_date: 2026-09-10
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said Hermes now shows live detail on every subagent and lets you steer or stop one from the CLI and the desktop app without killing the rest.
why_it_matters: Parallel work is only operable if a human can see and halt a single worker; this is the control surface to check on the tagged channel, not just the spawn count.
===END===
===POST===
handle: @PadhiyarRushi
post_url: https://x.com/PadhiyarRushi/status/2098801308144713999
event_date: 2026-09-12
date_precision: day
kind: claim
stance: criticism
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A researcher said CVE-2026-84289 is unbounded memory allocation in hermes-agent's MCP list_tools handler, that a remote DoS exists, that they contacted the vendor early and got no reply, and that a public exploit is out.
why_it_matters: An MCP endpoint that can be crashed from the network is a gateway exposure, not a coding-agent footnote, and the "vendor did not respond" part is itself an operator fact to verify.
===END===
===POST===
handle: @NousResearch
post_url: https://x.com/NousResearch/status/2099599032037388404
event_date: 2026-09-14
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They announced Hermes Business on Nous Portal as invite-colleagues team billing with a shared balance, per-member caps, and shared skills, plus an Enterprise pitch for on-prem or customer cloud.
why_it_matters: That is a new commercial control plane sitting beside the MIT harness; operators need to know which of team billing, shared agents, and on-prem is actually shipping versus sales copy.
===END===
===POST===
handle: @thomasheimann
post_url: https://x.com/thomasheimann/status/2099924183396372781
event_date: 2026-09-15
date_precision: day
kind: voice
stance: criticism
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He liked the Business idea but said he already self-hosts, and that he wants agents themselves shareable across a team, not just skills, because the current shape still looks like individuals running their own agents who can swap skill files.
why_it_matters: Shared skills on a central balance are not an org; a shop that needs one agent fleet with shared jobs will still be wrapping Hermes themselves.
===END===
===POST===
handle: @NousResearch
post_url: https://x.com/NousResearch/status/2099984561451028913
event_date: 2026-09-15
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said Teknium pointed Hermes at its own million-line Python tree on September 2, that 1,393 subagents ran for nineteen hours, that the tree shrank 34.4 percent, and that this saved nearly two million dollars of engineering time, linking a Nous blog.
why_it_matters: If a fleet refactor of that size actually merged, the operator question is which tag contains it and what the reviewers still had to catch by hand.
===END===
===POST===
handle: @jimmy_longbow_
post_url: https://x.com/jimmy_longbow_/status/2099994186158358606
event_date: 2026-09-15
date_precision: day
kind: voice
stance: criticism
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He restated the fleet-refactor numbers, then flagged that the two-million-dollar savings line is the top of a 150k to 1.8M manual estimate against roughly 19k of tokens, that human review is excluded, and that community reviewers still caught deleted public names plugins might import.
why_it_matters: The viral receipt is a token bill plus an upper-bound salary model; an operator copying the stunt still owes a review pass the blog itself says was load-bearing.
===END===
===POST===
handle: @JacquelineSYC19
post_url: https://x.com/JacquelineSYC19/status/2100262432413528336
event_date: 2026-09-16
date_precision: day
kind: voice
stance: comparison
frameworks: hermes-agent, openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: The Artie CEO wrote that their seventeen-person company runs Nous Hermes as a shared harness on one machine in Germany, that they looked at OpenClaw first and bounced because agents wandered off, and that they picked Hermes for guardrails, per-team personalities, and overnight jobs.
why_it_matters: That is a concrete org design (one box, many personalities, night batch) rather than a fandom take, and it cuts against treating OpenClaw as the default personal-agent install.
===END===
===POST===
handle: @NousResearch
post_url: https://x.com/NousResearch/status/2100266421020152114
event_date: 2026-09-16
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They launched a plugin catalog with four official plugins and ninety-six community ones, said the team reviews every community plugin, and linked the docs plus a submit guide.
why_it_matters: Catalog install is now a supply-chain decision; operators need the pin, the review bar, and whether CLI and desktop actually verify the same SHA.
===END===
===POST===
handle: @iAjittiwari
post_url: https://x.com/iAjittiwari/status/2100282139145376061
event_date: 2026-09-16
date_precision: day
kind: voice
stance: question
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A headless-server operator was glad catalog search is not desktop-only, then asked whether the CLI install path also checks the SHA pin or whether that check lives only in the desktop flow.
why_it_matters: Server installs cannot eyeball a GUI; if the pin is desktop-only, the catalog's provenance story does not cover the way a lot of Hermes is actually run.
===END===
===POST===
handle: @composio
post_url: https://x.com/composio/status/2100308380980068538
event_date: 2026-09-16
date_precision: day
kind: claim
stance: comparison
frameworks: hermes-agent, claude-code, codex, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Composio said they ran GPT-6 Astra through six harnesses on 29 tasks, that success rates clustered, that Hermes tied Codex and Command Code at 21/29, and that failed runs burned three to five times the tokens depending on the harness.
why_it_matters: If the spread is efficiency rather than capability, picking Hermes is a token-and-latency decision, not a quality leap, and the method still has to be checked.
===END===
===POST===
handle: @benthecarman
post_url: https://x.com/benthecarman/status/2100311689132740894
event_date: 2026-09-16
date_precision: day
kind: voice
stance: criticism
frameworks: hermes-agent, openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said Hermes is starting to feel like OpenClaw to him, too much slop, and asked whether he would have to build his own.
why_it_matters: The prevailing public story this window is that Hermes is the grown-up OpenClaw; a user who already lives in both saying they have converged is the counter-reading maintainers then answered.
===END===
===POST===
handle: @virtualunc
post_url: https://x.com/virtualunc/status/2100357592929214628
event_date: 2026-09-16
date_precision: day
kind: claim
stance: criticism
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He cited star growth from about 27k in April to about 246k, called Hermes the OpenClaw successor with a skill-writing loop, said it started charging this week via team and enterprise plans, and put 43,824 open issues next to the stars as a triage warning.
why_it_matters: Stars-plus-issues is not a product fact, but the charging line is exactly the claim an operator will hear, and it has to be checked against whether Portal was already paid.
===END===
===POST===
handle: @NousResearch
post_url: https://x.com/NousResearch/status/2100365161085153585
event_date: 2026-09-16
date_precision: day
kind: claim
stance: criticism
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The official account replied that Portal has been an optional paid provider since Q1, that the harness stays free with other providers and local models, and that they did not start charging this week, they added team billing on top of an existing service.
why_it_matters: The distinction is whether the MIT agent got a paywall or whether a hosted balance got org features; operators who never touch Portal are unaffected only if that split is real.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2100645382552428963
event_date: 2026-09-17
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent, pi-coding-agent, openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The lead engineer said they will lean into making Hermes more like Pi and less like OpenClaw.
why_it_matters: That is a public reversal of the kitchen-sink personal-agent posture a lot of users installed Hermes for; the next question is what actually leaves the default install.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2100645510856298543
event_date: 2026-09-17
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He said the first step is removing bundled memory providers so their authors keep them in their own repos and they land through the plugins market, as a test of pulling integrations out of core.
why_it_matters: Anyone on Mem0, Honcho, or another bundled memory path should expect a migration, and should not assume the current default memory stack survives the next tagged release.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2100647460217729401
event_date: 2026-09-17
date_precision: day
kind: voice
stance: announcement
frameworks: hermes-agent, pi-coding-agent, openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: After people read the Pi line as "Hermes is becoming a coding agent," he clarified he meant a leaner core with more plugins, not that they were dropping the personal-assistant job.
why_it_matters: The live misread itself shows how loaded the comparison is; operators should track unbundling, not a secret pivot into Claude-Code-class coding CLI.
===END===
===POST===
handle: @prolibertine
post_url: https://x.com/prolibertine/status/2101637540029599838
event_date: 2026-09-20
date_precision: day
kind: claim
stance: criticism
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said CVE-2026-82021 covered Hermes 0.18.2 through just before 0.19.0, where some built-in MCP catalog entries pinned a moving branch instead of a 40-character SHA, so a hijacked upstream could retarget already-installed machines, and that a later commit forced exact pins.
why_it_matters: Catalog install is only as good as the pin; anyone who installed from those versions, or who still follows a branch ref, should re-read what is actually running.
===END===
===POST===
handle: @witcheer
post_url: https://x.com/witcheer/status/2101948838407786863
event_date: 2026-09-21
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A Nous community account said a compaction change merged that caps the verbatim tail at about 20 percent of the model window instead of a floor near 10k tokens, which they said helps 8k to 32k local models and leaves 128k-plus unchanged, and they linked PR 117957 plus the compression docs.
why_it_matters: On a small local window the old protected tail could be larger than the model; this is the knob to re-check before assuming long chats still keep the last 10k words intact.
===END===
===POST===
handle: @petercat721
post_url: https://x.com/petercat721/status/2102046288279670915
event_date: 2026-09-21
date_precision: day
kind: claim
stance: comparison
frameworks: hermes-agent, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He reported a 55-task personal-agent bake-off on the same self-hosted endpoint, with Pi at 55/55 using about 316k tokens in 8.5 minutes and Hermes at 54/55 using about 2.17M tokens in 17 minutes, and said Pi won on efficiency for that workload.
why_it_matters: That cuts against both the Composio "tied on quality" story and the house "Hermes is efficient now" story; if the method holds, Hermes is the expensive personal-agent on small tasks.
===END===
===POST===
handle: @gm_mertd
post_url: https://x.com/gm_mertd/status/2102074344075604087
event_date: 2026-09-21
date_precision: day
kind: voice
stance: frustration
frameworks: hermes-agent, pi-coding-agent, openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He called setup one of the worst software experiences he has had, citing too many options, buggy terminal onboarding that jumps screens, confusion about Modal still leaving the agent local, and a WhatsApp setup that did nothing, and said it felt barely better than OpenClaw.
why_it_matters: The public conversation this window is full of catalog and cloud launches; this is the install-path report those launches do not absorb.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2102093483788107792
event_date: 2026-09-21
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent, claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He announced an official plugin that talks to the Claude SDK so Claude Code subscriptions work inside Hermes again, billed as avoiding earlier tradeoffs, and linked the DirectSDK plugin docs.
why_it_matters: This is the claimed legal and technical path back to using a Claude sub as Hermes's model without replacing Hermes's tools, memory, and loop; it needs a primary check and a Desktop versus CLI check.
===END===
===POST===
handle: @Faisal942x
post_url: https://x.com/Faisal942x/status/2102123810866495773
event_date: 2026-09-21
date_precision: day
kind: claim
stance: frustration
frameworks: hermes-agent, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Same day as the plugin launch, he said it worked in the terminal but not in Hermes Desktop, and posted a diagnostics link.
why_it_matters: A subscription plugin that only works in the CLI is not the desktop-app story the launch post implies; Desktop-first operators should not migrate on the announcement alone.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2102155766417490147
event_date: 2026-09-21
date_precision: day
kind: voice
stance: comparison
frameworks: hermes-agent, claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Asked why they do not just run Claude Code as the agent, he said Anthropic would block Hermes tools, memory, the self-improvement loop, plugins, and the rest.
why_it_matters: That is the design argument for DirectSDK (Claude as model, Hermes as harness) versus wrapping Claude Code, and it is the opposite of "just use the Claude agent inside Hermes."
===END===
===POST===
handle: @iAjittiwari
post_url: https://x.com/iAjittiwari/status/2102168362331877529
event_date: 2026-09-21
date_precision: day
kind: claim
stance: criticism
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said the official backup path zips config, skills, sessions, and data and copies sqlite safely while the agent is running, then warned that the zip contains `.env` with every provider key.
why_it_matters: A backup that is also a key dump changes how you store, copy, and share Hermes homes; treating `hermes backup` as a routine tarball is the wrong default.
===END===
COVERAGE_NOTE: Searched X in 2026-08-20..2026-09-21 (until:2026-09-22) for from:NousResearch, from:Teknium, from:witcheer, from:HermesAgentTips, from:iAjittiwari, from:thomasheimann, the phrase "Hermes Agent", NousResearch/hermes-agent links, and argument queries (OpenClaw, Pi, slop, bloat, billing/charging, sandbox/approval, CVE, Desktop/Windows, plugin catalog/SHA). Identity: kept only NousResearch/hermes-agent; dropped Nous Hermes LLM posts, crypto/NASA Hermes, Grok Bot as a product (it is not grok-build), OpenClaw-only threads, oh-my-hermes spam, and sales cadence posts. Could not reach Discord (Teknium and witcheer keep pointing operators there; that is likely where memory-provider migration and catalog review actually happen), full reply trees on the Pi-direction, 1393-blog, Pantheon, and DirectSDK threads, or a complete sweep of @dillonrolnick / @theemozilla / @imbabybrooklyn / @HermesAgentLog. Thin: Aug 21-25 besides the Grok Bot/Bots argument; whether the fsmonitor and MCP DoS CVEs reached a tagged Hermes release in-window (X did not settle it); CLI vs desktop SHA verification (asked, no maintainer answer found here); DirectSDK Desktop failure (user report in-window; Teknium's follow-up PR is 2026-09-22 and was dropped as out of window). Japanese write_file and Chinese CVE posts were included as leads, not as translations.
