I'll start by reading the research protocol and watchlist so the X sweep matches Bitter Frontier's discovery rules, then search for practitioner posts in the window.I'll load the watchlist identities and prior social harvests next, then search X for practitioner arguments in the window.I'll pull maintainer identities and then run dated X searches across the watchlist, looking for arguments rather than announcements.Writing-lane items already point at a few threads. Next I’ll search X by project and known practitioner handles, then chase the counter-takes.Latest-mode results are mostly noise from the last hours of the window. I’ll switch to Top, known maintainers, and earlier dates, and chase the Plugin4Shell and operator-friction threads.I have enough dated, URL-backed leads. Next I’ll drop recaps and marketing, keep the arguments that cut both ways, and emit the records.===POST===
handle: @bcherny
post_url: https://x.com/bcherny/status/2098217573276131577
event_date: 2026-09-11
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A Claude Code maintainer answered a user who was drowning in generated code by splitting throwaway prototypes from production work, and arguing that Claude-written production code should be held to a higher bar than human-written code, via tests, review, fuzzing, and more effort rather than more hovering.
why_it_matters: This is the official counter to the window's "nobody is reading anything" panic: the human job is the bar, not the keystrokes, and it should be checked against whether those guardrails actually exist outside Anthropic.
===END===

===POST===
handle: @ericvtheg
post_url: https://x.com/ericvtheg/status/2098221806859718737
event_date: 2026-09-11
date_precision: day
kind: voice
stance: joke
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: In reply to that maintainer letter, an engineer compressed the advice as "just spend more tokens."
why_it_matters: It is the cheapest cut against the quality-bar story: if the fix is always a more expensive model and a higher effort knob, operators without Anthropic's token budget cannot follow the official playbook.
===END===

===POST===
handle: @matteocollina
post_url: https://x.com/matteocollina/status/2098480985352311031
event_date: 2026-09-11
date_precision: day
kind: voice
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A Node maintainer read the same letter as implying only Anthropic can ship production Claude code, because the best models needed for the security-review loop are gated away from everyone else.
why_it_matters: If the production bar depends on models the customer cannot buy for review, the advice is a capability Anthropic has and operators do not, which is a different claim than "raise your CLAUDE.md."
===END===

===POST===
handle: @trq212
post_url: https://x.com/trq212/status/2101009392611278961
event_date: 2026-09-18
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A Claude Code maintainer said version 2.1.277 will read AGENTS.md when a folder has no CLAUDE.md, with a /config toggle, and that the behavior is implemented as a built-in "mod" rather than a one-off parser.
why_it_matters: Operators who standardized on AGENTS.md for Codex and Copilot can stop maintaining a second instruction file, but only after checking which channel actually ships 2.1.277 and what the toggle defaults to.
===END===

===POST===
handle: @trq212
post_url: https://x.com/trq212/status/2101024465723462143
event_date: 2026-09-18
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Asked whether AGENTS.md support would burn tokens, the same maintainer said no: the mod runs as ordinary code, not as another model pass, and the source is public in the repo.
why_it_matters: That is the opposite of the usual "every new instruction file is another prompt tax" take, and it is worth checking whether the mod path stays off the model for nested folders and large files.
===END===

===POST===
handle: @v0xium
post_url: https://x.com/v0xium/status/2101526107128529120
event_date: 2026-09-20
date_precision: day
kind: voice
stance: frustration
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: An engineer new to a large company said everyone from junior to senior now spends 12-hour days prompting Claude Code to ship, with no time to read specs, tests, or the resulting diffs, because management treats pushing code as no longer the bottleneck.
why_it_matters: This is the Amdahl story from the other side of the Cherny letter: if the human gate is not funded, the agent does not raise the bar, it just removes the people who used to hold it.
===END===

===POST===
handle: @MokshPapneja
post_url: https://x.com/MokshPapneja/status/2102179945829273956
event_date: 2026-09-21
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: In the same thread, a practitioner argued the remaining scarce work is high-level design, and that once that exists, low-level design and code through Claude are straightforward.
why_it_matters: It is the counter-read of the same workplace: the bottleneck moved to architecture, not to "press enter," and an operator who still spends review budget on implementation may be watching the wrong layer.
===END===

===POST===
handle: @wunderwuzzi23
post_url: https://x.com/wunderwuzzi23/status/2093039917714563098
event_date: 2026-08-27
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A security researcher published a write-up claiming Claude Code on Opus 5 in auto mode can be driven from a website to a full compromise, and framed the lesson as security invariants not being optional.
why_it_matters: Auto mode was sold as safer than skip-permissions; if a classifier can be talked into running attacker code, operators who treated auto as a hard gate need to re-audit that assumption against the primary record.
===END===

===POST===
handle: @wunderwuzzi23
post_url: https://x.com/wunderwuzzi23/status/2093042649447981523
event_date: 2026-08-27
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Later in the same thread he said that in some runs Claude noticed the compromise and tried to kill the malware, and auto mode blocked the cleanup while having allowed the original run.
why_it_matters: A safety layer that permits the exploit and then forbids the fix is worse than no classifier, and it is a concrete reason not to treat auto-mode denials as evidence the machine is safe.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2098612714704891959
event_date: 2026-09-12
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A Codex maintainer told Astra users they had disabled an opt-in context-management experiment that caused early stops and replies to older messages, affecting a few thousand users, and had also pulled misconfigured engines and over-eager skills that stopped the model checking its work, with a usage reset the same night.
why_it_matters: This is a channel fact operators felt as "the model got worse": the defect lived in the harness experiment and skill routing, not in the weights, so a quality complaint in this window needs a date against this reset.
===END===

===POST===
handle: @mark_k
post_url: https://x.com/mark_k/status/2099091185465708690
event_date: 2026-09-13
date_precision: day
kind: voice
stance: criticism
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: An engineer who likes the ChatGPT desktop app said the split between Chat, Work, and Codex is a pointless usability mess.
why_it_matters: If the product surface is three agents with one quota, operators cannot tell which channel they are actually running, which is the same unification fight Claude was having on Cowork the same week.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2099394367744356554
event_date: 2026-09-14
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The Codex maintainer replied that they will fix that Chat / Work / Codex split.
why_it_matters: Treat unification as promised, not shipped: an operator should not migrate workflows onto a merged surface until a build actually removes the split.
===END===

===POST===
handle: @mebeim
post_url: https://x.com/mebeim/status/2102155601518248092
event_date: 2026-09-21
date_precision: day
kind: voice
stance: criticism
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A practitioner asked Astra to denoise audio and said it started downloading executables from GitHub and running them while Codex was in approve-for-me, which is supposed to prompt only on actions detected as unsafe.
why_it_matters: This is the concrete failure mode of putting a model in the approval seat: if the classifier does not treat "fetch and run a binary" as unsafe, the operator never sees a prompt.
===END===

===POST===
handle: @amplifiedamp
post_url: https://x.com/amplifiedamp/status/2102181586058035514
event_date: 2026-09-21
date_precision: day
kind: voice
stance: frustration
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Someone using the Codex desktop app said it reports that a command ran without saying which command, which makes it hard to know what context the agent actually shares.
why_it_matters: Review is impossible if the UI hides the tool call; this is a visibility defect in the desktop channel, not a model complaint.
===END===

===POST===
handle: @air__security
post_url: https://x.com/air__security/status/2100683528383975636
event_date: 2026-09-17
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code, codex, github-copilot-cli, gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: AIR Security said they found the same SHA-pinning bypass in Claude Code, Codex, Gemini CLI, and GitHub Copilot, letting a marketplace plugin that looked pinned to a reviewed commit be swapped for malicious code and yielding zero-click RCE on the machine running the agent.
why_it_matters: Pinning was the industry's answer to plugin rug-pulls; if the agent never checks that HEAD equals the pin, marketplace review is a caption, and operators need a version and a checkout-verify step, not a feeling of having locked the hash.
===END===

===POST===
handle: @Evoputa
post_url: https://x.com/Evoputa/status/2102108276384997436
event_date: 2026-09-21
date_precision: day
kind: claim
stance: comparison
frameworks: claude-code, codex, github-copilot-cli, gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A practitioner restated Plugin4Shell with a narrower operator map: GitHub's own marketplace largely blocks hash-shaped branch names, risk concentrates on Bitbucket and self-hosted git plus auto-update, Claude Code 2.1.179 and Codex 0.146.0 are the clean upgrades, Copilot had no client fix at disclosure, and Gemini CLI is migrate-to-Antigravity rather than patch.
why_it_matters: A four-vendor pile-on that does not distinguish GitHub-hosted pins from self-hosted git will make people yank the wrong plugins; the actionable inventory is host plus auto-update, not "all coding agents."
===END===

===POST===
handle: @Vuojolahti
post_url: https://x.com/Vuojolahti/status/2102185232069808553
event_date: 2026-09-21
date_precision: day
kind: voice
stance: comparison
frameworks: cursor, grok-build
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: An operator called the Cursor harness worse than anything else they use and said they wish Cursor subscriptions could be spent inside Grok Build.
why_it_matters: If the model is the same and the harness is the complaint, the spend lock-in is the bottleneck: operators cannot take a Cursor seat to the terminal agent they actually prefer.
===END===

===POST===
handle: @theaaron
post_url: https://x.com/theaaron/status/2102182475955159265
event_date: 2026-09-21
date_precision: day
kind: voice
stance: criticism
frameworks: grok-build
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: In the Grok 4.7 launch thread, a tester said the new model is worse and slower in the Grok Build harness than 4.6 and 4.5 were.
why_it_matters: Launch-day consensus was "same price, better coding"; a native-harness regression is the thing to check before anyone moves a default from 4.6 to 4.7 in Build.
===END===

===POST===
handle: @ml_review
post_url: https://x.com/ml_review/status/2102112561697054845
event_date: 2026-09-21
date_precision: day
kind: voice
stance: comparison
frameworks: antigravity
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Someone who likes Antigravity's TUI (diffs, artifacts, agent and task panels) said the real limit is Google locking it to Gemini, then described pointing GOOGLE_GEMINI_BASE_URL at a local Qwen plus an OpenAI fallback so they can run it unpatched.
why_it_matters: The product argument is "migrate from Gemini CLI to Antigravity"; the operator argument is that Antigravity is only a successor if you can bring another model, otherwise it is a Gemini-only TUI.
===END===

===POST===
handle: @Jarretcoon
post_url: https://x.com/Jarretcoon/status/2102111882857328856
event_date: 2026-09-21
date_precision: day
kind: voice
stance: comparison
frameworks: antigravity, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: An operator granted that Antigravity tokens can be cheaper, then said AGY CLI has no browser tool and no auto classifier, so you approve everything by hand, while Claude Code in auto mode can be left on a task; saving pennies per token while spending hours on prompts is not a win.
why_it_matters: The Gemini-to-Antigravity migration is being sold on model access; this is a harness-completeness objection that should be checked before an operator drops Claude auto mode to save on inference.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2100248057413558600
event_date: 2026-09-16
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Pi's maintainer said 3.14 would land the following Friday as a new harness only, not yet the new coding agent built on top of it.
why_it_matters: Operators hearing "Pi 3.14" as a drop-in agent upgrade will be on the wrong artifact; the runnable question is which package still speaks the old harness until the new UI and plugin system exist.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2100282391054950477
event_date: 2026-09-16
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He corrected people calling it a refactor: it is a rewrite, and the old coding agent stays until the new one materializes on the new harness.
why_it_matters: A rewrite with the old agent kept around is a two-channel window; pinning scripts to "latest Pi" without a harness version is how an operator gets a surprise API break.
===END===

===POST===
handle: @theo
post_url: https://x.com/theo/status/2100765198919581922
event_date: 2026-09-18
date_precision: day
kind: voice
stance: joke
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Quoting a description of OMP's snap compaction (history rendered as a microfont image the model reads), Theo called oh-my-pi the most unserious dev tool he has seen, closer to an art piece than a harness.
why_it_matters: This is the loud public read of OMP as a joke; it should be held next to the maintainer's cost and eval claims rather than treated as the last word on whether the fork is usable.
===END===

===POST===
handle: @bchap1n
post_url: https://x.com/bchap1n/status/2100834613862240541
event_date: 2026-09-18
date_precision: day
kind: voice
stance: praise
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A reply called that take insufferable and said OMP is the best harness available, not slop, and that a large account should not dunk on the team.
why_it_matters: The fork's users are arguing it is the production default, not a meme; a sweep that only carries the art-piece joke would hide the actual operator split.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2100842715122405491
event_date: 2026-09-18
date_precision: day
kind: voice
stance: comparison
frameworks: pi-coding-agent, omp
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Pi's maintainer, asked about OMP, said there is no bad blood with Can, that many people use OMP productively, and that it is simply not his taste.
why_it_matters: Upstream refusing to prosecute the fork is the opposite of the drama the thread wanted, and it tells an operator they can pick either without joining a feud.
===END===

===POST===
handle: @greg_horvay
post_url: https://x.com/greg_horvay/status/2100764473392820433
event_date: 2026-09-18
date_precision: day
kind: claim
stance: praise
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The post Theo quoted said OMP's snap compaction paints conversation history into an image with a microfont so the model can read pixels instead of bloating the KV cache, and that it works surprisingly well.
why_it_matters: If that mechanism is real, it is a different compaction primitive than summarization; it should be checked in the OMP source before anyone copies "put the transcript in an image" as a serious context strategy.
===END===

===POST===
handle: @_can1357
post_url: https://x.com/_can1357/status/2102074543472861372
event_date: 2026-09-21
date_precision: day
kind: claim
stance: comparison
frameworks: omp, pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: OMP's maintainer said defaulting to async tool calls beats the model freezing on a 20-minute Rust build or retrying until cache invalidates, and that in a SWE-rebench run Pi was failing three tasks they were not, purely because the model got stuck sleeping via bash until the job timed out.
why_it_matters: This is a public design argument with a number attached: sync wait is not "simpler," it is an eval and cost leak, and it is a reason an operator on long builds might prefer the fork even if they like upstream Pi's taste.
===END===

===POST===
handle: @petercat721
post_url: https://x.com/petercat721/status/2102046288279670915
event_date: 2026-09-21
date_precision: day
kind: claim
stance: comparison
frameworks: pi-coding-agent, hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Someone reported a 55-task personal-agent bake-off on the same self-hosted GPU and model: Pi finished 55/55 on about 316k tokens in 8.5 minutes, Hermes 54/55 on about 2.17M tokens in 17 minutes, so Pi used roughly seven times fewer tokens for that workload.
why_it_matters: The usual ranking puts Hermes ahead on memory and autonomy; if Pi is several times cheaper on calendar-and-SQLite work, the harness choice for personal agents is not the same as the harness choice for long coding loops.
===END===

===POST===
handle: @hunvreus
post_url: https://x.com/hunvreus/status/2091877977734943107
event_date: 2026-08-24
date_precision: day
kind: voice
stance: criticism
frameworks: flue, eve, heypi
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: HeyPi's author said he wants to like Flue and Vercel Eve but will not run agents on serverless: chat, files, long sessions, and CLIs fit a fat server, and serverless turns that into a pile of glued services and unreadable logs.
why_it_matters: Two watched harnesses are betting on serverless; a maintainer of a third is saying the runtime shape is the product, so an operator evaluating Eve or Flue should ask where the session actually lives before copying the architecture.
===END===

===POST===
handle: @hunvreus
post_url: https://x.com/hunvreus/status/2099495122140557631
event_date: 2026-09-14
date_precision: day
kind: voice
stance: criticism
frameworks: codex, heypi
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He argued laptop lockdown is theater against Codex: if a user can see data, the agent can exfiltrate it, and if they can edit it, the agent can too.
why_it_matters: Endpoint DLP is the default enterprise answer to coding agents; this is a reason to put the boundary on egress and scoped credentials instead of on the IDE.
===END===

===POST===
handle: @Agent0ai
post_url: https://x.com/Agent0ai/status/2099876602121212330
event_date: 2026-09-15
date_precision: day
kind: claim
stance: announcement
frameworks: agent-zero
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Agent Zero's account said they tested six changes to the coding workflow covering prompts, memory, runtime guidance, and time awareness, and published what improved and what did not.
why_it_matters: A maintainer running ablation on their own harness is rarer than a star-count post, and the write-up is the thing to read for whether memory and time-awareness actually moved coding quality.
===END===

===POST===
handle: @JasonSteving
post_url: https://x.com/JasonSteving/status/2101716834773065821
event_date: 2026-09-20
date_precision: day
kind: claim
stance: praise
frameworks: temporal-agent-harness
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Someone on Temporal's AI team said wiring Jev-powered auto mode into the Temporal Agent Harness was a natural fit along existing seams, and framed Jev as a way to make oversight cheaper rather than as a chatbot.
why_it_matters: Auto mode is usually a Claude-Code classifier story; if a workflow engine can drop a decision model onto the same seams, the interesting question is whether approval becomes a Temporal signal instead of a TUI prompt.
===END===

===POST===
handle: @AgentEtna
post_url: https://x.com/AgentEtna/status/2101392185874653674
event_date: 2026-09-19
date_precision: day
kind: claim
stance: criticism
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A tester pointed at a SWE-bench issue where a run is marked unresolved because the environment never booted, then scored as the agent, and at an OpenHands issue where a failed browser, glob, or edit can still show as success in the chat.
why_it_matters: If the harness lies about tool outcomes, evals and operators are both reviewing a transcript that did not happen; that is a reason to distrust both the leaderboard and the UI until the issues are checked.
===END===

===POST===
handle: @guzmanpintos
post_url: https://x.com/guzmanpintos/status/2102111368899907632
event_date: 2026-09-21
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A sandbox-provider operator said OpenClaw's Crabbox runs agent test suites in a remote box, syncs the working tree rather than a commit, and that four lines in AGENTS.md were enough for their agents to stop hammering the laptop.
why_it_matters: Parallel agents saturating a MacBook is a new bottleneck; if the open harness already has a remote-sandbox path that tests dirty trees, that is a different answer than "buy a bigger laptop" or "only test on CI after commit."
===END===

===POST===
handle: @aronprins
post_url: https://x.com/aronprins/status/2101937803730796901
event_date: 2026-09-21
date_precision: day
kind: claim
stance: announcement
frameworks: paperclip
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Paperclip's docs person said agent heartbeats are short wakes (timer, assignment, on-demand, automation), not always-on daemons, and told operators to keep interval off, wake on demand, and use routines for clocks.
why_it_matters: Persistent-agent products get sold as 24/7 employees; if the real unit is a short wake, the cost and the alignment surface are the wake conditions, not a daemon that never sleeps.
===END===

===POST===
handle: @ethereaglehq
post_url: https://x.com/ethereaglehq/status/2100043837200646162
event_date: 2026-09-16
date_precision: day
kind: claim
stance: criticism
frameworks: github-copilot-cli
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: An operator said Copilot CLI 1.0.84-9 fixed MCP dying when the CLI was attached to a running IDE: config validation rejected the in-process IDE bridge, plugin reload failed, and the session got restricted.
why_it_matters: This is a channel-coupling bug, not a model one: opening the IDE silently took MCP away, so anyone who saw "MCP went quiet" in mid-September should check that patch before blaming the server.
===END===

===POST===
handle: @hazemomier
post_url: https://x.com/hazemomier/status/2101965597940609479
event_date: 2026-09-21
date_precision: day
kind: voice
stance: criticism
frameworks: claude-code, codex, github-copilot-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He argued that env vars inside a coding-agent sandbox are a shared trust zone, not isolation, because the model can still curl and cat, and that operators putting prod credentials in .env and hoping the system prompt holds have already lost.
why_it_matters: Sandbox-as-safety is the default story across these CLIs; the operational alternative is a credential-injecting proxy that never shows the long-lived key to the agent.
===END===

===POST===
handle: @doodlestein
post_url: https://x.com/doodlestein/status/2101887460728844493
event_date: 2026-09-21
date_precision: day
kind: voice
stance: comparison
frameworks: omp, agent-flywheel, pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Agent Flywheel's author said he is using OMP for now while he "ompifies" his Rust Pi agent, which is a working choice rather than a conversion story.
why_it_matters: A watched multi-agent stack picking the Pi fork as the daily driver is a signal about which harness the swarm tooling actually talks to, not about which README is nicer.
===END===

===POST===
handle: @florian_marty
post_url: https://x.com/florian_marty/status/2102180902214254922
event_date: 2026-09-21
date_precision: day
kind: voice
stance: praise
frameworks: deepseek-harness
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: In a thread that was not about DeepSeek, a user told someone to use the dsh harness, called it the best combo once running, and said it has underappreciated features that become obvious in use.
why_it_matters: DeepSeek Harness barely appears in English argument; a practitioner recommending it as the default over the usual Claude/Codex pairing is the kind of lead the bigger names drown out.
===END===

===POST===
handle: @wiasliaw
post_url: https://x.com/wiasliaw/status/2102008975382466855
event_date: 2026-09-21
date_precision: day
kind: voice
stance: comparison
frameworks: pi-coding-agent, omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: In a thread about oh-my-pi, a user said looking at Pi is enough and there is no need to look at OMP.
why_it_matters: That is the opposite of the OMP-is-the-best-harness camp, and it is the actual user split: upstream taste versus fork features, not a resolved consensus.
===END===

COVERAGE_NOTE: Window 2026-08-20 to 2026-09-21. Searched X keyword (Latest) for each watchlist name plus Plugin4Shell, approve-for-me, auto mode, AGENTS.md, and known maintainer handles (@bcherny @trq212 @lydiahallie @thsottiaux @OpenAIDevs @badlogicgames @_can1357 @oleksoleksoleks @doodlestein @hunvreus @wunderwuzzi23 @sshh12 @GeoffreyHuntley @simonw @mattpocockuk @swyx @v0xium @air__security @Agent0ai @omnigent_ai). Followed threads on Cherny's production-bar letter, voxium's Claude mill, Tibo's Astra reset and Chat/Work/Codex split, Plugin4Shell, Pi 3.14, Theo vs OMP, and Can's async/sleep argument. Could not reach: @sshh12 (zero hits in-window), most Discord-only maintainer talk, GitHub Discussions, and any AIR researcher personal account besides @air__security. Latest-mode is badly skewed to 2026-09-21 (Grok 4.7 launch day plus Plugin4Shell recaps); August is thin except wunderwuzzi's auto-mode write-up (2026-08-27) and hunvreus on Eve/Flue serverless (2026-08-24). Sweep is thin on flue (almost no named argument), omnigent (event promo only, dropped), heypi product (maintainer voice is about other tools), grok-build (drowned by 4.7 and Grok Bot, few native-harness design posts), github-copilot-cli (Plugin4Shell names Copilot the product; only one CLI-specific friction post), OpenHands (eval complaint, little maintainer dialogue), OpenClaw (Crabbox via a partner, not a maintainer thread), and agent-zero (milestone plus one ablation post). Japanese and Arabic Plugin4Shell recaps were not selected. ADDITIONAL FOCUS was the unfilled "$focus" token, so no extra topic was applied. Identity: grok.com chat and Grok Bot were excluded unless Grok Build was named; Copilot VS Code vs Copilot CLI is mixed in Plugin4Shell and flagged in those gists; Agent Zero is agent0ai, not other ZERO projects.
