I'll start by reading the discovery rules and identifying OMP so I only collect posts about the canonical repo.I'll load the OMP contract, prior harvests, and the X-sweep workflow so identity and search terms stay tight.I'll pull known OMP handles, prior X cards, and recent GitHub activity so the identity check stays tight.There's already an OMP log in this run. I'll inspect it and the known handles, then search X for the window.I'll search maintainer accounts and the main OMP phrases first, then fan out to users and counter-takes.Maintainer is `@can1357` now. I'll pull the rest of the window and look for user criticism, `omp2`, and Tern/OMP collisions.I'll fetch the maintainer threads and hunt for criticism, `omp2`, and Tern collisions next.The AlicanKiraz benchmark is the strongest counter-take so far. I'll pull that thread plus more maintainer and criticism posts.Can gated Tern 1.0 on omp². I'll pull that thread, the Claude-sub vs Pi split, and more criticism.===POST===
handle: @can1357
post_url: https://x.com/can1357/status/2112305082381258949
event_date: 2026-10-19
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The OMP maintainer thanked Tern testers, said new invites pause after that day, and said the ramp resumes once omp squared and its Tern integration are ready to try, before Tern leaves beta at 1.0. Existing installs keep working and updates do not stop.
why_it_matters: This is the in-window status of the rewrite: still not a channel an operator can run, and Tern 1.0 is gated on it.
===END===
===POST===
handle: @can1357
post_url: https://x.com/can1357/status/2112311971114525140
event_date: 2026-10-19
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: In the same thread he said Tern ships without telemetry, matching OMP.
why_it_matters: A maintainer privacy claim about both products that still has to be checked in the OMP tree and Tern binary.
===END===
===POST===
handle: @can1357
post_url: https://x.com/can1357/status/2111070301018579229
event_date: 2026-10-16
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He described Tern as a native remote-first workspace built for OMP, using a specialized protocol to render GUI elements over stdio, and as a fast terminal multiplexer.
why_it_matters: Operators mixing the two names need the maintainer's own split: Tern is the workspace, OMP is the harness it is built around.
===END===
===POST===
handle: @can1357
post_url: https://x.com/can1357/status/2111599748805501106
event_date: 2026-10-17
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He said a pane in a GPU-throughput screenshot was Clawd running inside OMP, and sketched a loop of pointing Nsight at hotspots then spawning a subagent per hotspot.
why_it_matters: Maintainer-described use of OMP subagents on profiling work, which is a workflow claim rather than a tagged feature.
===END===
===POST===
handle: @can1357
post_url: https://x.com/can1357/status/2113560072810828153
event_date: 2026-10-23
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Asked about OpenCode avoiding QuickJS, he said the posted dquickts primitive is for TypeScript-to-TypeScript work and that their own engine will not be TypeScript.
why_it_matters: Continues the omp2 rewrite: the shipping TypeScript line is not the engine they say they are moving to, so plugin and eval assumptions from 18.x may not carry.
===END===
===POST===
handle: @can1357
post_url: https://x.com/can1357/status/2111591781217296456
event_date: 2026-10-17
date_precision: day
kind: voice
stance: criticism
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: In that same performance thread he said treating one-shot synthetic benchmarks as a picture of real use is foolish, and that benches only help when they are not the sole signal.
why_it_matters: Direct counter to the window's harness-benchmark posts, including the public run that ranked OMP last.
===END===
===POST===
handle: @AlicanKiraz0
post_url: https://x.com/AlicanKiraz0/status/2112290182858940432
event_date: 2026-10-19
date_precision: day
kind: claim
stance: criticism
frameworks: omp, pi-coding-agent, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He ran the same planning-then-build prompt on Pi, OMP, Droid, and Codex CLI with GPT-6 Luna and a judge model, and reported OMP last on delivery score, slowest wall clock, and highest spend.
why_it_matters: A four-way harness comparison that cuts against the batteries-included-is-better story; version, prompt, and method still have to be checked before anyone acts on the ranking.
===END===
===POST===
handle: @farmer_pink
post_url: https://x.com/farmer_pink/status/2112011354420945007
event_date: 2026-10-19
date_precision: day
kind: claim
stance: comparison
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He warned readers not to treat Pi benchmark scores as if they described the Oh My Pi they actually run, because the fork has diverged on runtime, prompt, tools, editing, and context management.
why_it_matters: States the handling rule operators keep missing: a Pi result is not an OMP result unless the code path is shown to be shared.
===END===
===POST===
handle: @zoomq
post_url: https://x.com/zoomq/status/2113453007501496503
event_date: 2026-10-23
date_precision: day
kind: claim
stance: comparison
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: After switching to OMP he said its built-in yolo mode felt more conservative than other agents' auto-approve, and that with jj he had not seen accidental deletes, only extra tracking issues.
why_it_matters: Cuts against reading OMP yolo as the reckless default; still a user report, not a policy receipt.
===END===
===POST===
handle: @BesnowCloud
post_url: https://x.com/BesnowCloud/status/2112828828955640223
event_date: 2026-10-21
date_precision: day
kind: claim
stance: comparison
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Asked how OMP compares to Pi on tokens and customization, he said the official extension path is TypeScript with a reload command, and that Hashline saving recopy of old lines is an edit-layer trick that does not prove whole-task spend is lower than Pi.
why_it_matters: Refuses the marketing inference from Hashline to cheaper jobs and tells operators how a fair Pi-versus-OMP bakeoff would have to be run.
===END===
===POST===
handle: @xiaomovps
post_url: https://x.com/xiaomovps/status/2112784288030794092
event_date: 2026-10-21
date_precision: day
kind: claim
stance: praise
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: After looking at Oh My Pi again he said Browser Relay can drive already-open Chrome tabs, subagents can run in isolated worktrees with a hub to inspect them, search backends are swappable including DeepSeek Search, and Hashline anchors edits, framing OMP as a developer-workflow fork that has pulled ahead of Pi on those details.
why_it_matters: A feature cluster (browser, subagents, search, hashline) that has to be checked on a tagged channel before an operator treats it as shipped.
===END===
===POST===
handle: @LilTea_eth
post_url: https://x.com/LilTea_eth/status/2113002342538953150
event_date: 2026-10-21
date_precision: day
kind: voice
stance: question
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He asked whether, once Browser Relay is on a logged-in tab, OMP can hard-stop if browser actions, the code diff, or test results cannot be replayed step by step.
why_it_matters: The permission question the Browser Relay pitch does not answer, and the one that would change whether an operator lets it touch an already-authenticated session.
===END===
===POST===
handle: @JustMicrock
post_url: https://x.com/JustMicrock/status/2113202182153482708
event_date: 2026-10-22
date_precision: day
kind: claim
stance: comparison
frameworks: omp, pi-coding-agent, codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He framed OMP as Pi already set up for daily use, with subagents, compaction, and auth included, and claimed its main compaction path is Codex's, with fallbacks, which he called the best compaction around.
why_it_matters: A specific compaction-origin claim operators would reconfigure around if the tree matches, and a reason someone would pick OMP over assembling the same stack on stock Pi.
===END===
===POST===
handle: @CodyBontecou
post_url: https://x.com/CodyBontecou/status/2111915156783403185
event_date: 2026-10-18
date_precision: day
kind: claim
stance: comparison
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Asking whether a Claude-subscription trick was raw Pi or Oh My Pi, he said Pi-family variants such as OMP worked for him while stock Pi did not.
why_it_matters: Names a scope split operators already hit: same basename, different OAuth behavior, so "it works on Pi" is not an install instruction.
===END===
===POST===
handle: @thinhdho
post_url: https://x.com/thinhdho/status/2111940385845203092
event_date: 2026-10-18
date_precision: day
kind: voice
stance: question
frameworks: omp, claude-code, codex, gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He asked whether Anthropic would ban accounts that put a Claude subscription through OMP, having already used Codex and Gemini Pro there but hesitating on Claude.
why_it_matters: The ToS risk sitting on top of the "use your Claude sub in OMP" advice, which changes whether that routing is an operator move or a gamble.
===END===
===POST===
handle: @JamesArslanSwe
post_url: https://x.com/JamesArslanSwe/status/2113032857962914016
event_date: 2026-10-21
date_precision: day
kind: claim
stance: comparison
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He said a Terminal-Bench 2.1 run of DeepSeek V4.1 Flash used OMP 18.12.5 as the agent inside Harbor task containers, max reasoning, three tasks at a time, one attempt each.
why_it_matters: Pins a version and harness for an 87.6 percent score; without that pin the number is not an OMP finding.
===END===
===POST===
handle: @i17s_inc
post_url: https://x.com/i17s_inc/status/2112157433019908209
event_date: 2026-10-19
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A Japanese operator account said Oh My Pi 18.12.1 retries uncompressed once when corporate proxies break request compression and then disables compression for that destination, and that advisor concern notes now continue the agent by default unless continueSeverity is set to blocker.
why_it_matters: Two upgrade-contract details that would change proxy setups and stop conditions after 18.12.1 if the changelog agrees.
===END===
===POST===
handle: @0xFitz
post_url: https://x.com/0xFitz/status/2113620674623517005
event_date: 2026-10-23
date_precision: day
kind: claim
stance: frustration
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He asked Stencil to fix a bug where OMP output is covered by the model's internal thoughts, so a later subagent update clips the text he was reading.
why_it_matters: A live review defect in the Tern-plus-OMP pairing that would change whether an operator can actually see subagent work.
===END===
===POST===
handle: @wwenioaguiar
post_url: https://x.com/wwenioaguiar/status/2111486322410217976
event_date: 2026-10-17
date_precision: day
kind: claim
stance: comparison
frameworks: omp, claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He uses OMP with Claude behind it as his main coding agent and listed hash-anchored edits that reject stale patches, a real LSP and debugger, semantic memory across sessions, and sixty-plus providers, while granting Claude Code the Anthropic app, Slack, and cloud-session edge.
why_it_matters: A reasoned OMP-versus-Claude-Code split with capability claims that still need the docs, and a reminder that ecosystem lock-in is the remaining Claude Code argument.
===END===
===POST===
handle: @piyush_yip
post_url: https://x.com/piyush_yip/status/2113673770837901533
event_date: 2026-10-23
date_precision: day
kind: voice
stance: criticism
frameworks: omp, pi-coding-agent, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said he no longer cares which harness he uses, claiming Claude, Codex, Pi, and OMP all reach the same work quality if the instructions and skills are good.
why_it_matters: Cuts against the window's harness-identity argument; if that is how operators actually work, OMP's extra surface is not the lever.
===END===
===POST===
handle: @rem_thank
post_url: https://x.com/rem_thank/status/2111491061852049867
event_date: 2026-10-17
date_precision: day
kind: voice
stance: comparison
frameworks: omp, pi-coding-agent, codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: He said Oh My Pi is usable enough that he would rather tune it than start from stock Pi, and that he has it working better than Codex, while calling the company's heytilly remote-SSH UI laggy next to Super Engineer.
why_it_matters: Splits the harness from the company's other surface, so operators shopping OMP should not assume the GUI product is the same quality.
===END===
===POST===
handle: @kuznecov26909
post_url: https://x.com/kuznecov26909/status/2113414030521942186
event_date: 2026-10-22
date_precision: day
kind: voice
stance: question
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Under the maintainer's QuickJS snapshot post he asked whether that work is how current OMP plugins would keep working in the omp-squared era.
why_it_matters: The plugin-compat question the rewrite still has not answered in public, which is what an extension author needs before porting.
===END===
COVERAGE_NOTE: Window 2026-10-13 to 2026-10-24. Searched X keyword Latest/Top and semantic for "oh-my-pi", "oh my pi", omp.sh, github.com/can1357/oh-my-pi, omp2/omp², from:can1357, from:_can1357, from:oleksoleksoleks, from:stencil_labs, from:badlogicgames, plus threads on Tern/omp2, Claude-sub routing, Browser Relay, Hashline, and harness benches. Identity drops: OpenMP; Pi Network crypto; Solana $omp / oh-my-pi memecoins; One Piece OMP/OPM; Raspberry Pi; upstream-Pi-only posts (package roundups, Pi courses, pi-cached-compaction); Tern-only UX (Android auto-update, Intel macOS window, wait-tool cards) unless the post named OMP; Grok bot summaries; CLIHub/OSRepos release pings; ACK/AdverserialAI compatibility lists with no argument. Could not reach: @oleksoleksoleks (zero in-window posts); @stencil_labs (one salute, no product thread); Discord (linked from Tern bug reports); deleted or protected posts; most quote-tweet bodies. Handle note: @_can1357 resolved to @can1357; the maintainer posted the rename on 2026-10-22. Thin: 2026-10-13 to 2026-10-15 except vendor pairing posts; English criticism thinner than CN/TR/PT practitioner threads; no in-window Pi-maintainer (@badlogicgames) comment on OMP; nobody in public claimed to have run omp2, only asked when; Tern conversation crowds the OMP-the-harness lane.
