I'll start by reading the research protocol and Pi Coding Agent watchlist identity so the X sweep only picks up the right project.Next I’ll load the Pi source contract and known maintainer handles so the identity check stays tight.I’ll pull known maintainer handles and prior Pi posts so I can search the right accounts and skip lookalikes.I’ll check the existing window harvest and start X searches against maintainer accounts and the Pi identity.I’ll search official accounts and distinctive Pi terms first, then fan out to users and critics.The first pass only hit late-window posts, so I’ll slice the dates and look for MCP, 1.0, Durable, and the critical takes.I’ll hunt the 1.0/MCP/Durable announcements and the user-side criticism next.I’ll pull the 1.0 and MCP threads, then search for Armin’s take, HarnessTax, and the counter-arguments.I’ll fetch the Durable/Codex argument and look specifically for OMP confusion, Claude-sub friction, and MCP backlash.I’ll grab Mario’s 1.0/MCP posts, the Claude-sub thread, and more operator friction.I have enough verified, in-window URLs. Compiling the records now, identity-checked against earendil-works/pi.

===POST===
handle: @zeekrey_
post_url: https://x.com/zeekrey_/status/2101932903307350159
event_date: 2026-09-21
date_precision: day
kind: claim
stance: frustration
frameworks: pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A new Gondolin-plus-Pi user said the default Alpine VM image lacked package managers such as pnpm and Bun, and that global skills or binaries were invisible unless the operator built a custom image and mounted paths by hand.
why_it_matters: Operators treating Gondolin as a drop-in sandbox still have to own image and mount setup before skills and toolchains actually exist inside the VM.
===END===

===POST===
handle: @pidotdev
post_url: https://x.com/pidotdev/status/2103621949268062324
event_date: 2026-09-25
date_precision: day
kind: voice
stance: comparison
frameworks: pi-coding-agent, claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: The official Pi account quoted Claude Code's plan-mode rethink and said Pi has long skipped plan mode, so they back dropping it as a built-in rather than treating it as a required harness feature.
why_it_matters: This is the vendor repeating that operators who want a plan loop should bring it themselves, even as other CLIs treat plan mode as table stakes.
===END===

===POST===
handle: @pidotdev
post_url: https://x.com/pidotdev/status/2104992471155696120
event_date: 2026-09-29
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The official account said MCP is now in Pi's core and pointed to an Earendil post explaining why they reversed the project's public no-MCP stance.
why_it_matters: Anyone who picked Pi for a four-tool, no-MCP kernel needs to re-read what ships by default from 0.99 onward and whether they still have to opt out.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2105005860673954272
event_date: 2026-09-29
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Armin Ronacher said the new MCP and Codemode pieces are ordinary shipped extensions, gone if tools are turned off, and disableable through Pi config.
why_it_matters: The counter to the sellout reading is operational: operators can keep the old kernel if the disable path actually holds in the tagged release.
===END===

===POST===
handle: @shantanugoel
post_url: https://x.com/shantanugoel/status/2105251106444226901
event_date: 2026-09-30
date_precision: day
kind: voice
stance: criticism
frameworks: pi-coding-agent, deepseek-harness
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A user was glad Codemode stays off by default, saying models in other harnesses keep fighting their own batching by writing bad scripts and then re-batching after a single command is wrong.
why_it_matters: The window's Codemode celebration has an operator dissent: scripting tool calls can add retries and confusion instead of cutting tokens.
===END===

===POST===
handle: @andreisurugiu_
post_url: https://x.com/andreisurugiu_/status/2105225777923178702
event_date: 2026-09-30
date_precision: day
kind: claim
stance: frustration
frameworks: pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A user reported that reading an image through Codemode returned a text placeholder and the model never received the picture.
why_it_matters: Vision workflows that used to go through the normal read tool may silently degrade once Codemode is the path.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2105229882405843213
event_date: 2026-09-30
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Ronacher confirmed that Codemode currently cannot emit non-text outputs and said that gap is something they intend to improve.
why_it_matters: Until a tagged fix, operators should keep image and other binary tool results on the direct-tool path rather than assuming Codemode is a full replacement.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2105320307766731221
event_date: 2026-09-30
date_precision: day
kind: voice
stance: criticism
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Mario Zechner said Figma's remote MCP allowlist leaves Pi with a fake choice: impersonate a sanctioned client, or fill the suggested form and still fail to get users onto the server.
why_it_matters: Native MCP in Pi does not imply the servers operators actually want will accept the client; allowlists can still block the new core feature.
===END===

===POST===
handle: @baggiiiie
post_url: https://x.com/baggiiiie/status/2105335007388860444
event_date: 2026-09-30
date_precision: day
kind: claim
stance: question
frameworks: pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A user asked whether Pi as an MCP client lacks form and URL elicitation, and whether servers would reject the client for that missing capability.
why_it_matters: Operators connecting OAuth or form-gated MCP servers may hit client-capability refusals even after MCP is built in.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2105712877747249288
event_date: 2026-10-01
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Ronacher said skipping elicitation is deliberate: they want to understand it first because the security implications are easy to underestimate.
why_it_matters: The missing elicitation surface is a maintained gap, not an oversight, so operators with servers that require it should not wait on a silent add.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2105451171871641888
event_date: 2026-10-01
date_precision: day
kind: voice
stance: criticism
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Zechner said Reddit treated optional built-in Codemode and MCP as a sellout of Pi's original stance, and he dismissed that reading.
why_it_matters: The public fight is whether Pi still means a minimal kernel; the maintainer's answer is that the new pieces are optional, which is exactly what a later user disputes.
===END===

===POST===
handle: @tshu_w
post_url: https://x.com/tshu_w/status/2105578001153036769
event_date: 2026-10-01
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A contributor said Pi shipped MCP while still refusing sub-agents, so they built pi-agents as an async multi-agent runtime on Codemode that lets agents compose in JavaScript and talk across sessions.
why_it_matters: Operators who want sub-agents on earendil-works/pi are still in extension-land; this is a third-party fill, not a core ship.
===END===

===POST===
handle: @pidotdev
post_url: https://x.com/pidotdev/status/2105738462712209603
event_date: 2026-10-01
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said Pi 1.0 shipped together with Pi Durable and pointed at the Earendil 1.0 post.
why_it_matters: This is the window's main channel claim, and later maintainer posts say Durable is a separate library, so operators must not read 1.0 as Durable-inside-the-CLI.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2105778267798057112
event_date: 2026-10-01
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Ronacher said Durable is an agent framework for building your own agents, and also the foundation they expect to build on going forward.
why_it_matters: Embedders and app builders are the audience; CLI users who only run `pi` are not being told to migrate onto Durable.
===END===

===POST===
handle: @CodeAkram
post_url: https://x.com/CodeAkram/status/2106825003782242682
event_date: 2026-10-04
date_precision: day
kind: claim
stance: frustration
frameworks: pi-coding-agent, codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A user said official OpenAI OAuth login in Pi was failing repeatedly that day and that they had already filed a bug report.
why_it_matters: Codex-route login is an operator blocker independent of the MCP and Durable story, and it is the thread Armin later answered on auth sharing.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2106845927415914598
event_date: 2026-10-04
date_precision: day
kind: claim
stance: criticism
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Ronacher said sharing one auth.json across machines is the trap: whichever client refreshes first invalidates the others, and a fresh sign-in is the way out.
why_it_matters: Multi-device Pi setups that copy credential files will look like random OAuth breakage until operators stop sharing the refresh token that way.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2106414715589230665
event_date: 2026-10-03
date_precision: day
kind: voice
stance: comparison
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: After showing Durable multiplayer running on an Android phone, Zechner said he still believes the future is agents on your phone rather than sandboxes in the cloud.
why_it_matters: That is a product bet against the usual cloud-VM harness default, and it frames Durable as a local control plane rather than a hosted agent farm.
===END===

===POST===
handle: @g48in
post_url: https://x.com/g48in/status/2107058099345375323
event_date: 2026-10-05
date_precision: day
kind: voice
stance: criticism
frameworks: pi-coding-agent, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Gabin praised Durable's design then said the storage swap is fake modularity after reading the code: it assumes you stay inside Pi, while real work jumps across Claude, Codex, and other vendor harnesses.
why_it_matters: Teams hoping to drop Durable under mixed Claude and Codex fleets are being told the event log is not harness-agnostic.
===END===

===POST===
handle: @pidotdev
post_url: https://x.com/pidotdev/status/2107033061905104941
event_date: 2026-10-05
date_precision: day
kind: voice
stance: announcement
frameworks: pi-coding-agent, temporal-agent-harness
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: The official Monday stream framed Durable as a small task-based workflow engine for long-running multiplayer agents that can suspend and resume, and said they would explain why they did not use Temporal or Effect.ts.
why_it_matters: Operators comparing Durable to an existing workflow runtime get the vendor's own contrast, which still has to be checked against the package rather than the talk.
===END===

===POST===
handle: @attunewise
post_url: https://x.com/attunewise/status/2107196638452449463
event_date: 2026-10-05
date_precision: day
kind: voice
stance: criticism
frameworks: pi-coding-agent, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A user said Codex has already been durable in the user-experience sense, that copying competitors is normal, and that selling Durable as a dramatic difference overstates what operators feel.
why_it_matters: This is the live counter to the Durable launch: resume-after-kill as UX versus crash-safe intent-before-effect as an implementation claim.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2107197822797742166
event_date: 2026-10-05
date_precision: day
kind: voice
stance: criticism
frameworks: pi-coding-agent, codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Zechner replied that Codex is not durable, and that calling it that misunderstands what durability means in a production agent.
why_it_matters: The disagreement is definitional: operators who already restart Codex sessions may skip Durable for the wrong reason, or adopt it expecting a UX they already have.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2107207172128182541
event_date: 2026-10-05
date_precision: day
kind: claim
stance: criticism
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Zechner said the Pi coding agent does not use Pi Durable, and that Durable is a library for building agentic apps such as coding agents and cloud agents.
why_it_matters: CLI operators should not expect 1.0 to give them Durable resume, forking, or task trees inside `pi` itself.
===END===

===POST===
handle: @japanaibuilders
post_url: https://x.com/japanaibuilders/status/2107256352984940775
event_date: 2026-10-05
date_precision: day
kind: voice
stance: question
frameworks: pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: An operator asked whether a Durable resume replays side-effecting steps, saying a resumed run that resends is worse than a crash, and describing their own second-model audit before unattended browser work.
why_it_matters: Crash resume is only an upgrade if write tools are not blindly replayed; this is the question Durable's replay:safe story has to answer.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2107464890180927782
event_date: 2026-10-06
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Ronacher published a writeup of what Codemode actually is and how it works in Pi.
why_it_matters: This is the primary-shaped explanation of the MCP reversal: operators should check the post against the tagged Codemode package before treating social summaries as the contract.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2107908930253054442
event_date: 2026-10-07
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Zechner published his personal sloppy Pi subagent extension, said it is not an Earendil product, and disabled issues and PRs on that repo.
why_it_matters: Operators hunting for official sub-agents in the coding CLI are looking at a personal plugin with no support contract, not a tagged Earendil feature.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2107904281869431044
event_date: 2026-10-07
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Zechner said he uses sub-agents heavily for adversarial review and some deterministic workflow, not for handing off implementation, and that Pi will get built-in sub-agents only after the design is reworked.
why_it_matters: The no-subagents kernel is still the shipping CLI; people waiting for Claude-style implementation swarms are being told that is not the planned default.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2108671769116581904
event_date: 2026-10-09
date_precision: day
kind: voice
stance: comparison
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: After explaining they did not want an AST interpreter as the only isolation for Codemode, Ronacher said OpenCode's tradeoff is fine for OpenCode but not where he would start with Pi today.
why_it_matters: Two popular CLIs are making opposite sandbox bets on the same Codemode idea; operators copying one isolation story onto the other will miss the abort and WASM constraints Pi is choosing.
===END===

===POST===
handle: @highkeyangel
post_url: https://x.com/highkeyangel/status/2108958233176015273
event_date: 2026-10-10
date_precision: day
kind: voice
stance: frustration
frameworks: pi-coding-agent, claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A user found Pi promising but said Anthropic blocking other AI harnesses from the Claude subscription is the thing that sucks, and pointed at Claude mods as a similar path.
why_it_matters: For many operators the blocker is not Pi's kernel, it is whether a Claude plan can be spent outside Claude Code.
===END===

===POST===
handle: @henriquebastos
post_url: https://x.com/henriquebastos/status/2109094404942119003
event_date: 2026-10-11
date_precision: day
kind: voice
stance: praise
frameworks: pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Henrique Bastos said he keeps returning to Pi after trying other harnesses because those tools are all-or-nothing, while customizing Pi is less work than fighting workflows that only partly match.
why_it_matters: The remaining enthusiast case for Pi after MCP landed is still the original one: cheaper to extend than to disable someone else's product shape.
===END===

===POST===
handle: @kimrgrey
post_url: https://x.com/kimrgrey/status/2109185061124014207
event_date: 2026-10-11
date_precision: day
kind: voice
stance: frustration
frameworks: pi-coding-agent, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: An operator running several agents on Sol 6.1 through pi.dev said they stall after hitting an issue and refuse to continue, and guessed guardrails caused a large downgrade.
why_it_matters: Model-plus-harness combinations can look like Pi regressions; this is a reason to separate Sol's stop behavior from a Durable or MCP change.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2109413968552820840
event_date: 2026-10-11
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent, claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Zechner said they got durable Codemode working internally, that Claude Code-style dynamic workflows fall out of it for free and durably, and that he can inspect or steer the sub-agents those workflows spawn.
why_it_matters: That is an unreleased-app claim, not a coding-CLI claim; operators should wait for a channel they can actually run before planning on durable Codemode workflows.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2109416099200565580
event_date: 2026-10-11
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Zechner said Durable itself is already published and that the only unpublished piece is the phone app shown in the demo.
why_it_matters: Library versus product: embedders can try `@earendil-works/pi-durable` now; the Android/phone control plane is still a coming-soon surface.
===END===

===POST===
handle: @drdpov
post_url: https://x.com/drdpov/status/2109540380714942634
event_date: 2026-10-12
date_precision: day
kind: voice
stance: criticism
frameworks: pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Andrey Popov told the official account the new fancier UX works worse than the old minimal harness, and that adding MCP is against the original product idea, asking them to return to the minimalist approach.
why_it_matters: This is the user-side of the Reddit sellout fight: someone who liked Pi for what it refused says 1.0 made the tool worse, not just bigger.
===END===

===POST===
handle: @verysmallwoods
post_url: https://x.com/verysmallwoods/status/2109768436968734792
event_date: 2026-10-12
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A user walked through Pi's pi-env package moving tool execution over reused SSH, then said Durable can resume from a checkpoint while whether a remote write is safe to retry still depends on the tool and the target system, not on Durable generating receipts.
why_it_matters: Remote Durable demos can hide a split: session resume is the library, idempotency of SSH-side effects is still the operator's problem.
===END===

===POST===
handle: @pidotdev
post_url: https://x.com/pidotdev/status/2110064527173620001
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said local models can now be used in Pi on NVIDIA RTX Spark laptops via a llama.cpp setup guide written with NVIDIA.
why_it_matters: This is the only in-window official post found that maps onto the 1.2 local/llama.cpp line; operators on that hardware should treat the linked docs as the channel, not the tweet.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2110078750930960391
event_date: 2026-10-13
date_precision: day
kind: claim
stance: frustration
frameworks: pi-coding-agent, claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Zechner said Anthropic explicitly banned Claude subscriptions in Pi months ago like other harnesses, that the rules are still not exact, and that Pi could restore the path in minutes if Anthropic stated them clearly.
why_it_matters: Operators asking Pi to take a Claude Max plan are being routed to Anthropic policy, not a missing Pi feature.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2110080102797308207
event_date: 2026-10-13
date_precision: day
kind: voice
stance: comparison
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Zechner asked what it means that a small coding agent with four tools and no sub-agents sits on the Pareto frontier of a comparison chart.
why_it_matters: That is the maintainer still arguing the original kernel against the window's own MCP, Durable, and sub-agent add-ons.
===END===

COVERAGE_NOTE: Identity target was earendil-works/pi (pi.dev, @pidotdev, @badlogicgames, @mitsuhiko, @earendilworks, npm @earendil-works/pi-coding-agent). Window 2026-09-21 to 2026-10-13 inclusive. Searched Latest keyword slices on from:pidotdev, from:badlogicgames, from:mitsuhiko, from:earendilworks; "pi.dev", "pi-coding-agent", "Pi Durable", "You Said No MCP", "Pi 1.0", "Pi 1.2"; @pidotdev mentions; quoted_tweet_id of the MCP and 1.0 posts; Claude-sub/auth.json/Gondolin/Radius/codemode/subagent terms; omp/"oh-my-pi" co-mentions; a semantic criticism pass. Dropped lookalikes: Oh My Pi / can1357 / @oh-my-pi / omp.sh (separate watchlist id omp), HeyPi, Raspberry Pi, Inflection Pi, Pi Network, mathematical pi, Dicklesworthstone pi_agent_rust, and a DeepSeek/WorkBuddy loop thread that only said "pi agent" in passing. Could not fully page Mario's non-Pi timeline (he posts constantly; Pi-specific hits were recovered by keyword filters, so casual replies without those tokens are thin). Thin spots: no dedicated @pidotdev 1.2.0 ship post found besides the RTX Spark/llama.cpp guide; 1.0 reply thread was mostly jokes, so argumentative user dissent is sparse and low-engagement (the UX-ruin post is 1 like); Japanese and Chinese operator Discord is barely on X; Radius remains rumor-shaped on X with no maintainer ship post in this sweep; OMP-vs-Pi comparisons in-window were almost all OMP-only and were dropped. Capture must re-fetch every URL before any quotation.
