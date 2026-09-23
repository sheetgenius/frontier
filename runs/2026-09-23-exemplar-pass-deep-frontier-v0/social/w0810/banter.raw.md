I'll start by reading the discovery protocol and watchlist so the sweep stays inside the window and only reports real, resolvable posts.I'll pull the watchlist identities, prior harvests, and the X-sweep prompt so searches stay on the right projects and window.I'll load official handles and the prior window's social harvest so the search targets the right accounts and arguments.I'll pull known maintainer handles, then search X across the watchlist for the Aug 10–17 window.Running dated X searches across the watchlist, starting with the DeepSeek/Pi argument and then the rest of the harnesses.Latest-mode results clustered on Aug 17. I'll switch to named accounts, Top ranking, and the earlier days in the window.I have enough independently fetched posts. Next I’ll drop the ones I could not re-resolve, then emit only the in-window records.

===POST===
handle: @tianyi
post_url: https://x.com/tianyi/status/2087888089759015218
event_date: 2026-08-13
date_precision: day
kind: claim
stance: announcement
frameworks: deepseek-harness
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A DeepSeek Harness engineer said the MIT drop is labeled 0.1.0, called it a developer preview aimed at harness builders, and warned it still has a lot of rough edges.
why_it_matters: Operators deciding whether to adopt this week need to treat the social version label as preview until a tag and install channel say otherwise.
===END===

===POST===
handle: @tianyi
post_url: https://x.com/tianyi/status/2088306143772946499
event_date: 2026-08-14
date_precision: day
kind: claim
stance: comparison
frameworks: deepseek-harness, pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Replying to a Pi contributor, he said many DeepSeek researchers already live in Pi day to day, and that DSH reused Pi's adapter for talking to non-DeepSeek models rather than replacing it.
why_it_matters: The lab shipping a new harness is publicly saying the older minimal one is still the daily driver, which undercuts the launch-as-replacement story.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2088189145952731317
event_date: 2026-08-14
date_precision: day
kind: voice
stance: praise
frameworks: deepseek-harness, pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A Pi contributor said the new DeepSeek runtime is not finished, but it is the first fresh harness in a while that made him want to reopen design choices in his own stack.
why_it_matters: That is a maintainer treating a rival preview as a reason to refactor, not as a clone to ignore.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2088900774466105797
event_date: 2026-08-16
date_precision: day
kind: voice
stance: comparison
frameworks: pi-coding-agent, claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said he barely uses Claude Code now and deleted the Claude-specific instruction files, then found that pointing Claude Code at the shared AGENTS.md files was good enough when he had to debug a possible Pi regression.
why_it_matters: That cuts against the habit of maintaining a per-harness instruction file as a required control surface.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2088219926494421230
event_date: 2026-08-14
date_precision: day
kind: claim
stance: criticism
frameworks: pi-coding-agent, deepseek-harness
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Pi's author disputed the essay claiming Pi extensions are static and human-written, saying the agent already grows its own extensions when it finds a gap and that he does not know of a single one a person actually wrote.
why_it_matters: If that is true, the DSH-versus-Pi split is not "agent-grown plugins versus human-written ones," and operators should not migrate on that axis.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2088234017808089556
event_date: 2026-08-14
date_precision: day
kind: voice
stance: comparison
frameworks: pi-coding-agent, deepseek-harness
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He called DSH's architecture neat, then argued Pi agents already do the same self-extension work today, with different trade-offs rather than a new category.
why_it_matters: If both harnesses are solving self-modifying agents, the operator question is which trade-off you want, not whether you missed a new primitive.
===END===

===POST===
handle: @limbopeng
post_url: https://x.com/limbopeng/status/2087932451243041142
event_date: 2026-08-13
date_precision: day
kind: claim
stance: comparison
frameworks: deepseek-harness, pi-coding-agent, claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They framed Pi as subtraction to a thin core of four tools with almost no built-in plan, subagent, MCP, or permission layer, and DSH as turning every layer including the agent loop into a replaceable plugin, then argued only DSH makes the agent invent capabilities at runtime.
why_it_matters: That essay became the public architecture read of the week, so later corrections only make sense if this claim is on the record as a claim.
===END===

===POST===
handle: @limbopeng
post_url: https://x.com/limbopeng/status/2088134584773095882
event_date: 2026-08-14
date_precision: day
kind: voice
stance: criticism
frameworks: pi-coding-agent, deepseek-harness
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: After pushback, the same author walked back the static-extension half and granted that Pi already has runtime registration.
why_it_matters: The week's most shared architecture contrast lost its sharpest Pi claim in public, which is the kind of correction a sweep should keep next to the original.
===END===

===POST===
handle: @alading22
post_url: https://x.com/alading22/status/2087917100929278285
event_date: 2026-08-13
date_precision: day
kind: voice
stance: comparison
frameworks: pi-coding-agent, deepseek-harness
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They argued Pi starts from a few primitives and lets the rest grow, while DeepSeek Harness keeps stuffing every important-looking part into the bag and still has no destination.
why_it_matters: If that read is right, operators chasing the new plugin kitchen-sink are buying surface area, not a clearer control model.
===END===

===POST===
handle: @alading22
post_url: https://x.com/alading22/status/2088748763666129342
event_date: 2026-08-15
date_precision: day
kind: voice
stance: criticism
frameworks: deepseek-harness
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They said a commercial lab shipped something you start from a command line, with jargon UI, almost no user docs, and a paper first, then split the audience into people who cannot even launch it and people already praising Cordis metaphysics.
why_it_matters: That is a product-shape argument, not a star-count argument: DSH may be a kit for harness authors while the launch copy reads like a tool for everyone else.
===END===

===POST===
handle: @verysmallwoods
post_url: https://x.com/verysmallwoods/status/2089144422172680591
event_date: 2026-08-17
date_precision: day
kind: voice
stance: comparison
frameworks: deepseek-harness, openclaw, hermes-agent, codex, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: After writing DSH plugins, they said the OpenClaw, Hermes, Codex, and Claude Code era trained people to extend agents in natural language, and that DeepSeek's plugin kernel pulls engineers back into writing code.
why_it_matters: If that split holds, the next harness choice is also a staffing choice: who on the team can change the runtime.
===END===

===POST===
handle: @QuantumTransf
post_url: https://x.com/QuantumTransf/status/2088499422619750433
event_date: 2026-08-15
date_precision: day
kind: voice
stance: comparison
frameworks: deepseek-harness, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They said DSH's mental model is hard even for someone writing it up, but writing a plugin is not, because the complexity did not vanish, it moved inside the system.
why_it_matters: A plugin-everything design can feel easy at the extension boundary while making the privileged core harder to inspect, which is the opposite of what "everything is replaceable" sounds like.
===END===

===POST===
handle: @reefwing
post_url: https://x.com/reefwing/status/2088407640951103730
event_date: 2026-08-14
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said auto mode becomes the default permission mode on August 14 for Pro, Max, and Team, dumped the classifier rulebook, and reported 17 allow rules, 65 overridable soft denials, and a single hard denial that cannot be talked past.
why_it_matters: If those counts are right, default safety is almost entirely negotiable, and operators who wanted a hard stop still have to write it themselves.
===END===

===POST===
handle: @zokrr
post_url: https://x.com/zokrr/status/2089495045413941659
event_date: 2026-08-17
date_precision: day
kind: voice
stance: question
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They asked why Claude Code, while auto mode is on, is telling the model to edit files through bash.
why_it_matters: If the default permission path routes edits through the shell, the classifier is watching a different tool than the one operators think is doing the write.
===END===

===POST===
handle: @simonw
post_url: https://x.com/simonw/status/2086931955539742985
event_date: 2026-08-10
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said Haiku is currently his least favorite model because it hallucinates badly, and that Claude Code's URL-fetch tool still appears to use it, so fetching a page inherits that hallucination risk.
why_it_matters: A fetch that is supposed to ground the agent may be the step that invents the page.
===END===

===POST===
handle: @bcherny
post_url: https://x.com/bcherny/status/2088140601967730978
event_date: 2026-08-14
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: On a thread about crash-fuzzing routines, the Claude Code lead said a smaller model could do much of that work if the operator spent more time auditing the PRs and tightening the routine prompts and guardrails.
why_it_matters: That is a maintainer putting the scarce attention on review and prompt iteration, not on always buying the top model.
===END===

===POST===
handle: @simonw
post_url: https://x.com/simonw/status/2087234839024161062
event_date: 2026-08-11
date_precision: day
kind: voice
stance: criticism
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: He asked Codex for a local HTML file he could open, and said the agent published it to a site instead, calling the product a bit too eager to use hosted pages.
why_it_matters: An approval that was meant to produce a file can become a publish, which is a different blast radius than the prompt named.
===END===

===POST===
handle: @Querisity
post_url: https://x.com/Querisity/status/2089011179448668399
event_date: 2026-08-16
date_precision: day
kind: claim
stance: frustration
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They said a simple echo test now burns thousands of tokens since the 5.6 models landed, and that the approve-for-me feature also spends usage at a rate that makes Codex feel broken.
why_it_matters: A flag that puts a model in the approval seat may also be a spend accelerator, which is not how most operators will read the name.
===END===

===POST===
handle: @AbdullahElzeki
post_url: https://x.com/AbdullahElzeki/status/2089502365657239729
event_date: 2026-08-17
date_precision: day
kind: voice
stance: frustration
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They said stopping Codex CLI mid-task to add a small instruction works at first, but after compaction the agent revisits that instruction, overbuilds it, and can loop.
why_it_matters: A steer that looked like it held can come back as a new project after the window is compressed, which is a control failure at the memory seam rather than at the prompt.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2089029499476431332
event_date: 2026-08-16
date_precision: day
kind: voice
stance: criticism
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: He said he recently changed the Claw harness so that hitting stop actually stops the swarm, after watching dozens of child agents keep editing files after the human had already cancelled.
why_it_matters: A stop control that does not bind children is not a stop control, and a maintainer is saying that used to be the live behavior.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2088074664585400684
event_date: 2026-08-14
date_precision: day
kind: voice
stance: comparison
frameworks: openclaw, codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: The OpenClaw maintainer said he moved his own work off Codex because talking to the agent now spins up cloud sessions he can keep iterating from anywhere.
why_it_matters: That is a named-harness switch with a reason: session mobility beat staying inside the lab CLI.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2089045733517545739
event_date: 2026-08-16
date_precision: day
kind: voice
stance: comparison
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: On memory, he said the good setup is one markdown directory and every other memory system turned off, and the better setup is moving the work into cloud sessions in Claw's web UI.
why_it_matters: Multiple memory layers are being treated as a source of drift, not as more intelligence.
===END===

===POST===
handle: @fagamericano
post_url: https://x.com/fagamericano/status/2089501326048932031
event_date: 2026-08-17
date_precision: day
kind: voice
stance: praise
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They described running their OpenClaw fork with local intercepts into a cluster, then flipping only annotated users onto a new image as canaries so a bad agent change rolls back a pod instead of the fleet.
why_it_matters: That is an operator treating agent releases like ordinary risky deploys, which most harness marketing still does not.
===END===

===POST===
handle: @fagamericano
post_url: https://x.com/fagamericano/status/2089433022630359168
event_date: 2026-08-17
date_precision: day
kind: voice
stance: criticism
frameworks: openclaw, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They said the first rule of agentic infrastructure is not to believe agents will do as told, so putting "don't leak credentials" in an AGENTS.md and calling it a day is empty, and you need vaults and read-only filesystems instead.
why_it_matters: Instruction files are being treated as policy by a lot of teams; this is an operator saying that layer does not bind.
===END===

===POST===
handle: @shengzheyao
post_url: https://x.com/shengzheyao/status/2088136207775719696
event_date: 2026-08-14
date_precision: day
kind: claim
stance: announcement
frameworks: antigravity
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The Antigravity CLI author said 1.1.13 accepts a Gemini API key with no sign-in, plus a custom base URL, and listed other fixes around background tasks and local search fallback.
why_it_matters: That is a maintainer saying the eligibility gate can be bypassed with a key, which is the channel an operator can actually test against the auth complaints in the same window.
===END===

===POST===
handle: @danielmckinn0n
post_url: https://x.com/danielmckinn0n/status/2088394726794006619
event_date: 2026-08-14
date_precision: day
kind: voice
stance: criticism
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: For an eval they chose Gemini CLI because Antigravity's auth looked too strange to implement next to a plain API key, and they told Google to fix that.
why_it_matters: The replacement CLI lost a bake-off on login friction, not on model quality, and the same day's maintainer post claiming a key path is the thing to check against.
===END===

===POST===
handle: @arielsmoliar
post_url: https://x.com/arielsmoliar/status/2087882055921095113
event_date: 2026-08-13
date_precision: day
kind: voice
stance: frustration
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They said trying to ship a real product on Gemini CLI and Antigravity meant invented packages, hangs, broken tool setup, approval friction, and unreliable handoffs, and they doubted the PMs run that path end to end.
why_it_matters: That is a product-building report, not a launch-day reaction, on the two Google surfaces operators are being told to treat as one migration.
===END===

===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2089446733197738048
event_date: 2026-08-17
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Debugging users during the Bot Mode launch, he said the feature has existed in Hermes as agent profiles for a long time and that Bot Mode is only a user interface over that system.
why_it_matters: Operators who think they just got a second product may only have gotten a new skin on the same authority model.
===END===

===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2089451688365302185
event_date: 2026-08-17
date_precision: day
kind: claim
stance: frustration
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Debugging a user, he said their Hermes binary was on that day's v0.20.3 while the desktop GUI was still on v0.17.0, and told them to update through the GUI app rather than only the remote gateway.
why_it_matters: Split update channels can leave the thing you click on weeks behind the thing that actually runs, which is a classic false-upgrade.
===END===

===POST===
handle: @_can1357
post_url: https://x.com/_can1357/status/2089358095457661426
event_date: 2026-08-17
date_precision: day
kind: voice
stance: criticism
frameworks: omp, pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said unsupervised agents mostly do fine on ordinary fixes, and that slop usually appears when the underlying design never contemplated the case, so the model hacks in a refactor instead of the human having designed for it.
why_it_matters: That moves the blame from model quality to whether the operator spent attention on architecture before turning the loop loose.
===END===

===POST===
handle: @_can1357
post_url: https://x.com/_can1357/status/2089358681171182043
event_date: 2026-08-17
date_precision: day
kind: voice
stance: comparison
frameworks: omp, pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said both the current OMP tree and the omp2 branch are agent-written, and that omp2 is cleaner because Pi is no longer the limiting factor and the catalog is a DSL instead of a TypeScript type filled at runtime.
why_it_matters: A fork maintainer arguing that upstream Pi is the constraint on cleanliness is a reason to treat OMP2 as a different product, not a tracking branch.
===END===

===POST===
handle: @doodlestein
post_url: https://x.com/doodlestein/status/2088600999418024143
event_date: 2026-08-15
date_precision: day
kind: voice
stance: criticism
frameworks: agent-flywheel
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said his orchestration tool has always been aimed at another agent, not a human, and that if you operate it yourself you have just moved the bottleneck rather than removed it.
why_it_matters: That is a maintainer arguing against the usual "better TUI for the operator" story: the scarce resource is still the human in the loop.
===END===

===POST===
handle: @omnigent_ai
post_url: https://x.com/omnigent_ai/status/2087926290569457887
event_date: 2026-08-13
date_precision: day
kind: claim
stance: announcement
frameworks: omnigent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The project account said Omnigent policies sit on coding-agent pause points and return allow, ask, or deny from session state and prior events, and that a policy can be added to a live session and observed firing.
why_it_matters: If the gate is a live, contextual policy rather than a static deny file, operators need to know whether it can be composed away the same way a plugin can.
===END===

===POST===
handle: @PaperclipShips
post_url: https://x.com/PaperclipShips/status/2089429778289881256
event_date: 2026-08-17
date_precision: day
kind: claim
stance: announcement
frameworks: paperclip
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The project's ship log said live agent previews can now be served over HTTPS on a private Tailscale network, task threads now show what is blocking them, and approvals that had been hanging are supposed to stop hanging.
why_it_matters: An approval UI that hangs is a silent serial bottleneck; if that is what shipped, operators should check whether the hang was a stuck human gate or a stuck agent.
===END===

===POST===
handle: @gumama_bear
post_url: https://x.com/gumama_bear/status/2089479734103273599
event_date: 2026-08-17
date_precision: day
kind: voice
stance: frustration
frameworks: openhands
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They said trying to run OpenHands with a 3-bit Qwen build on 16GB of VRAM produced an agent that finished the first task, failed to notice, and then repeated the same task forever.
why_it_matters: A completion detector that does not fire turns a local cheap setup into an unbounded loop, which is a control bug rather than a model-quality complaint.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2089420729997513167
event_date: 2026-08-17
date_precision: day
kind: voice
stance: joke
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He needled the take that Cursor Origin launched with great timing, saying GitHub has been down often enough lately that the coincidence is not that impressive.
why_it_matters: The Origin-as-GitHub-insurance story was the day's consensus; this is a practitioner treating outage timing as ordinary rather than as a strategy.
===END===

===POST===
handle: @ducaswtf
post_url: https://x.com/ducaswtf/status/2089486382037090754
event_date: 2026-08-17
date_precision: day
kind: voice
stance: comparison
frameworks: grok-build, codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They said they are using Grok Build and likened it to Codex with more surface area: image preview, mouse-driven UI, closer to an OpenCode-shaped app than a pure CLI.
why_it_matters: That is a named comparison with a reason, not a model ranking, and it is the opposite of the "Grok should just live inside Cursor" take in the same window.
===END===

===POST===
handle: @Hunter_Lott_
post_url: https://x.com/Hunter_Lott_/status/2089498958536073473
event_date: 2026-08-17
date_precision: day
kind: voice
stance: comparison
frameworks: grok-build, cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They argued Grok should stay the model, chat, and personality, while Cursor should remain the developer interface, and that Grok Build instances should be spawned from there rather than used as the primary harness.
why_it_matters: If the first-party harness is treated as optional, operators should not assume xAI's coding surface is where the control plane will live.
===END===

===POST===
handle: @JinseokKim60030
post_url: https://x.com/JinseokKim60030/status/2089130863871103140
event_date: 2026-08-16
date_precision: day
kind: claim
stance: criticism
frameworks: github-copilot-cli, codex, claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They said agent-skill clients only load immediate children of the skills directory, so a nested SKILL.md never loads and looks exactly like the model ignoring instructions.
why_it_matters: A repo that organized skills by domain will silently fail to load them after a plugin migration, and the failure mode impersonates a model defect.
===END===

COVERAGE_NOTE: Searched X with dated since:2026-08-10 until:2026-08-18 keyword and named-account queries across the watchlist, plus thread fetches for the DSH/Pi, Claude auto-mode, Codex, OpenClaw, Hermes, OMP, Antigravity, and Cursor Origin clusters. Latest-mode dumps were recency-biased toward the Aug 17 evening (Cursor Origin, Hermes Bot Mode, Codex AMA replies), so earlier-window coverage for smaller projects is thinner than the DSH argument. Could not re-fetch https://x.com/JinseokKim60030/status/2088963257021173919 (API missing conversation id) and substituted a later in-window post from the same author on the same nested-skills failure. Identity collisions ate several names: flue matched influenza and a Japanese food account; heypi matched birthday greetings and Tolkien Gondolin; agent-zero matched political "zero" talk, not agent0ai; OpenHands latest results were mostly the English idiom. No practitioner posts with a reason were found in-window for flue, eve, heypi, agent-zero, temporal-agent-harness, or unreal-agent. GitHub Copilot CLI was almost entirely Agent Plugins 1.0 recaps and a Pages/DNS marketing thread. Paperclip conversation was SEO swarm marketing plus one ship-log claim. Grok Build argument is one-sided toward Aug 17 and thin on concrete friction. DSH plugin-isolation and security claims circulated as LLM-pasted dumps rather than first-person operator reports, so those were dropped.
