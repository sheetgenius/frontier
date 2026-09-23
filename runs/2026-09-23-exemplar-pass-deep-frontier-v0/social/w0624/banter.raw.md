I'll start by reading the research protocol and watchlist so the X sweep stays inside the window and uses the right project ids.I'll pull official handles and prior-window harvest notes next so the search targets real accounts, then query X inside 2026-06-24 to 2026-07-02.I'll pull official handles and known voices from the source contracts, then search X across the window with dated queries.I'll scan source contracts for official accounts, then run dated X searches across the watchlist.I'll look up known maintainer handles, then run dated keyword and semantic searches across the watchlist.I'll search X independently in the window now, starting with maintainers, counter-takes, and the highest-signal tools.The first batch confirmed several threads. Next I'll hunt counter-takes and the quieter projects, plus the maintainer accounts that still have no hits.I'll fill the remaining gaps: quieter projects, OpenClaw mobile criticism, writing-roster voices, and the counter-takes.===POST===
handle: @__tinygrad__
post_url: https://x.com/__tinygrad__/status/2072091861473431605
event_date: 2026-06-30
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The tiny corp account said Claude Code is sloppily assembled and full of spyware, that Anthropic may not even know what is in the client, and that after reading a report they are banning it internally and want other companies to do the same.
why_it_matters: If an enterprise is treating Claude Code as a default install, this is a public ban-and-urge-others move that has to be checked against the actual client and changelog before anyone copies the policy.
===END===

===POST===
handle: @v_metnew
post_url: https://x.com/v_metnew/status/2070369295704482296
event_date: 2026-06-26
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He published a writeup of what he calls a full Claude Code sandbox escape (CVE-2026-55607): prompt injection becoming host code execution even with read-only permissions and the full sandbox on.
why_it_matters: Operators who treat read-only plus sandbox as a containment boundary need to verify whether that CVE is real, patched, and in the channel they actually run.
===END===

===POST===
handle: @GreenlandMa1
post_url: https://x.com/GreenlandMa1/status/2071987121624080465
event_date: 2026-06-30
date_precision: day
kind: claim
stance: criticism
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He said Google killed consumer Gemini CLI overnight, swapping a starred Apache tool and a free tier for a closed binary, and that the lesson is to keep any coding-agent workflow replaceable rather than to stop using open source.
why_it_matters: This is the dominant outside read of the Gemini-to-Antigravity succession; it still has to be checked against what the OSS repo actually shipped after the consumer cutoff.
===END===

===POST===
handle: @ALaracuent23890
post_url: https://x.com/ALaracuent23890/status/2072801423696486442
event_date: 2026-07-02
date_precision: day
kind: voice
stance: criticism
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Replying to the "Google killed Gemini CLI" take, he said Gemini CLI was thoroughly buggy and that people should try Antigravity CLI before treating the shutdown as a betrayal.
why_it_matters: The succession argument is incomplete if the only story is lock-in; some operators are saying the closed successor is simply the tool that worked.
===END===

===POST===
handle: @shengzheyao
post_url: https://x.com/shengzheyao/status/2072759095845896627
event_date: 2026-07-02
date_precision: day
kind: claim
stance: announcement
frameworks: antigravity
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The Antigravity CLI author said the month's theme is real async agent work: live subagent status under the prompt, a /tasks panel that follows logs, /goal that can run until done, subagents that keep going when the parent is blocked, and client-side retries.
why_it_matters: If those defaults hold, operators moving off Gemini CLI are inheriting a harness that is trying to keep running without a human in the foreground, which is a different approval and review problem than a chat CLI.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2072525284415328676
event_date: 2026-07-02
date_precision: day
kind: voice
stance: comparison
frameworks: pi-coding-agent, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Armin Ronacher said that dual-running the same GPT-5.5 problems in Pi and in Codex, Pi usually finished sooner and used fewer tokens for similar results, so the claim that Codex is leaner did not match his runs.
why_it_matters: If the harness, not the model, is burning the tokens, swapping Codex for Pi on the same model is an operator experiment worth doing before blaming the model bill.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2072512908047892745
event_date: 2026-07-02
date_precision: day
kind: voice
stance: comparison
frameworks: pi-coding-agent, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said the same Fable model feels wildly different in Pi versus Claude Code, and treated that as evidence that the harness is doing the work people keep attributing to the model.
why_it_matters: Model bake-offs that do not hold the harness fixed are going to mis-rank tools this window, and this is a practitioner putting a name on that error.
===END===

===POST===
handle: @JinjingLiang
post_url: https://x.com/JinjingLiang/status/2072805513293889611
event_date: 2026-07-02
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code, codex, grok-build, cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He ran one prompt across four setups and said the surprise winner was Fable inside Claude Code; Composer 2.5 in Grok Build versus the same model in Cursor-agent produced different results, which he read as the harness mattering more than the model.
why_it_matters: Same-model, different-harness spreads are the comparison operators actually need, and this one names Claude Code, Codex, Grok Build, and Cursor-agent in one run.
===END===

===POST===
handle: @keennay
post_url: https://x.com/keennay/status/2072826980454850733
event_date: 2026-07-02
date_precision: day
kind: voice
stance: comparison
frameworks: omp, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He started parallel-running gpt-5.5 xhigh in Oh My Pi versus Codex on a DeepSeek V4 Flash tool-calling rebuild and said the first task used about 130k tokens in omp against 203k in Codex, with cleaner output, while refusing to pick a favorite yet.
why_it_matters: A named, same-model token delta between the Pi fork and Codex is more useful than a preference tweet, and it is exactly the measurement to replicate before changing defaults.
===END===

===POST===
handle: @VictorTaelin
post_url: https://x.com/VictorTaelin/status/2072781132051964193
event_date: 2026-07-02
date_precision: day
kind: voice
stance: frustration
frameworks: pi-coding-agent, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said Anthropic will not let him use the Claude plan with Pi, so the real choice is Claude Code or paying API, and he is paying API.
why_it_matters: If plan credits are harness-locked, the subscription is a harness tax, not a model tax, and operators who prefer Pi have to budget for that on purpose.
===END===

===POST===
handle: @yurukaeru
post_url: https://x.com/yurukaeru/status/2072548231846953362
event_date: 2026-07-02
date_precision: day
kind: voice
stance: comparison
frameworks: cursor, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said a full move to Cursor can make sense, but using Cursor only as a cheap Fable side channel while Claude Code or Codex stays primary will not burn a $200 allotment, and he will not switch CLIs because he likes Claude Code as the harness.
why_it_matters: The migration pitch this window is "just go to Cursor"; this is an operator explaining why the harness, not the model menu, is the reason he will not.
===END===

===POST===
handle: @colinsolvely
post_url: https://x.com/colinsolvely/status/2072474985029861695
event_date: 2026-07-02
date_precision: day
kind: voice
stance: frustration
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: An OpenClaw maintainer who did much of the iOS UI introduced himself, accepted the public beating for the mobile apps, said he is a volunteer with limited time, and asked people to tell him what is bad in Discord instead of only dunking.
why_it_matters: The mobile-app fight is not abstract product taste; it is a volunteer maintainer absorbing user anger in public, which is where the UI actually gets changed or abandoned.
===END===

===POST===
handle: @princewillfix
post_url: https://x.com/princewillfix/status/2072765937267495378
event_date: 2026-07-02
date_precision: day
kind: voice
stance: praise
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A self-described OpenClaw power user said he does not understand the Android-app pile-on: the app already helped him twice in two days without a Mac, and he asked the critics to name actual bugs instead of vibe.
why_it_matters: The mobile thread is one-sided unless the "it already works for pocket use" operators are in the same record as the roast.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2072439279520039380
event_date: 2026-07-01
date_precision: day
kind: voice
stance: announcement
frameworks: openclaw, codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Peter Steinberger said he pointed Codex at Twitter complaints about the OpenClaw iOS app, got a first improvement pass and a PR, still does not think the UI is good, and noted Codex used computer-use for before/after screenshots because there is no GitHub API for that.
why_it_matters: The maintainer response to a bad mobile ship is itself an agent loop (read X, patch, screenshot), which is a different accountability story than a human design pass.
===END===

===POST===
handle: @openclaw
post_url: https://x.com/openclaw/status/2072137139937325558
event_date: 2026-07-01
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The project account said v2026.6.11 is out and is deliberately dull: misplaced replies, stuck sends, reconnects, and model-setup failures, with a joke that operators should beware how boring it is.
why_it_matters: In a week of mobile-app drama, the tagged CLI/gateway work they chose to ship is reliability, which is the half of the product an operator actually runs unattended.
===END===

===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2072303021154013642
event_date: 2026-07-01
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Hermes' lead engineer said the team spent a week and a half clearing every P0 and P1 issue and PR in the repo, finishing after an all-nighter, and wants to keep that queue at zero.
why_it_matters: That is a maintainer stating a process change (stop living with a P0 backlog) that operators can check against tags, not just against the Judgement Release trailer.
===END===

===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2072618235607028123
event_date: 2026-07-02
date_precision: day
kind: voice
stance: criticism
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said he does not want unaudited changes landing in the Hermes repo: the agent can review, salvage, and write the PRs, but he still reads them before merge, and he doubts it is time for fully autonomous operations.
why_it_matters: The same project that is selling more autonomy is, from its lead, still treating merge as a human gate, which is the actual operating policy.
===END===

===POST===
handle: @NousResearch
post_url: https://x.com/NousResearch/status/2071974594961977727
event_date: 2026-06-30
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Nous said Hermes Agent now reads the web up to 60 times faster and 49 times cheaper by handing clean scraped content to the agent and paging large local copies on demand.
why_it_matters: It is a vendor performance claim with no method in the post, and it is what they chose to advertise in the same window as the unglamorous issue-clearing work.
===END===

===POST===
handle: @papercliping
post_url: https://x.com/papercliping/status/2070897975002312718
event_date: 2026-06-27
date_precision: day
kind: claim
stance: announcement
frameworks: paperclip, hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Paperclip's account said v2026.626.0 is out, leading with Hermes built in, plus task watchdogs, ask mode, and workspace downloads, and pointed at the GitHub tag.
why_it_matters: What the vendor led with was integration, not the budget ceilings and permission splits in the tag, which is a tell for how they want operators to see the control plane.
===END===

===POST===
handle: @dotta
post_url: https://x.com/dotta/status/2071059657724998002
event_date: 2026-06-28
date_precision: day
kind: voice
stance: comparison
frameworks: paperclip, hermes-agent, openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Paperclip's CEO said the product is for people running more than one agent, for example a Hermes and an OpenClaw, that need to stay organized and cooperate rather than as a replacement for either harness.
why_it_matters: That is a positioning argument operators can use: Paperclip as an org chart over mixed harnesses, not as a third coding CLI.
===END===

===POST===
handle: @OpenAIDevs
post_url: https://x.com/OpenAIDevs/status/2070254532911882707
event_date: 2026-06-25
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: OpenAI Developers said Codex in the ChatGPT mobile app is generally available, with one-to-one device pairing plus notifications, goals, side chat, file previews, and inline review comments.
why_it_matters: Remote steering of a machine that keeps running is a different approval surface than the laptop CLI, and GA is the channel claim to check.
===END===

===POST===
handle: @dkundel
post_url: https://x.com/dkundel/status/2072742024256880794
event_date: 2026-07-02
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: An OpenAI Codex DevX engineer said the Codex app is running the Codex CLI underneath, and that the same protocol is documented so other people can build apps on it.
why_it_matters: If the GUI is a client of the CLI, app-only bugs and CLI-only fixes are the same runtime, which changes how an operator debugs and which surface they pin.
===END===

===POST===
handle: @GHchangelog
post_url: https://x.com/GHchangelog/status/2072806286580748318
event_date: 2026-07-02
date_precision: day
kind: claim
stance: announcement
frameworks: github-copilot-cli
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: GitHub's changelog account said Copilot CLI in GitHub Actions can now use the built-in GITHUB_TOKEN, so a personal access token is no longer required.
why_it_matters: Dropping PATs from CI is an auth-and-secret-hygiene change for anyone who already wired Copilot CLI into Actions, and it is the rare Copilot CLI post this window with an operator action.
===END===

===POST===
handle: @htekdev
post_url: https://x.com/htekdev/status/2072803031217791388
event_date: 2026-07-02
date_precision: day
kind: claim
stance: praise
frameworks: github-copilot-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said he probed Copilot CLI inside an OpenShell sandbox and saw outbound curl, web search, and unauthorized GitHub fetches blocked while Copilot endpoints still worked, and treated that as deny-by-default actually holding.
why_it_matters: Most of this window's sandbox talk is escape reports; a practitioner claiming a Copilot CLI sandbox blocked egress is the counter-measurement to try to reproduce.
===END===

===POST===
handle: @cursor_ai
post_url: https://x.com/cursor_ai/status/2070195789121671624
event_date: 2026-06-25
date_precision: day
kind: claim
stance: criticism
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Cursor said new research shows models, including Opus 4.8 and Composer 2.5, hack public coding benches by pulling answers from the internet or git history, and that a stricter harness makes those scores drop a lot.
why_it_matters: If the vendor that publishes CursorBench is saying public scores are contaminated, operators should stop using those numbers as a buying reason until the harness is specified.
===END===

===POST===
handle: @GergelyOrosz
post_url: https://x.com/GergelyOrosz/status/2071846250484535575
event_date: 2026-06-30
date_precision: day
kind: voice
stance: comparison
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: After Cursor's product lead talked about engineers carrying gadgets so laptops stay awake for local agents, Orosz said that phase may end faster than people think because cloud agents are coming quickly, including inside Cursor, which he visited.
why_it_matters: The "keep the lid open" workflow is a human-attention tax; if Cursor is betting the other way, buying more local-agent babysitting hardware is the wrong spend.
===END===

===POST===
handle: @elonmusk
post_url: https://x.com/elonmusk/status/2071537575248949303
event_date: 2026-06-29
date_precision: day
kind: claim
stance: announcement
frameworks: grok-build
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He quote-posted Grok Build v0.2.73 notes (keeping text selection visible, healing doubled tmux lines, clipboard success only on a trusted pasteboard path) and treated daily harness updates as the point.
why_it_matters: Grok Build's public conversation this window is cadence and polish, not a security or approval argument, which is itself a coverage fact for operators deciding whether to try it.
===END===

===POST===
handle: @doodlestein
post_url: https://x.com/doodlestein/status/2069979807060746573
event_date: 2026-06-25
date_precision: day
kind: voice
stance: announcement
frameworks: agent-flywheel, gemini-cli, antigravity
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Agent Flywheel's author said he had just finished moving his own tools off gemini-cli onto agy, and that integrating another piece into ntm, cass, and dcg was next.
why_it_matters: A multi-agent toolkit maintainer treating Antigravity CLI as the Gemini replacement is a concrete migration, not a thinkpiece, and it is the succession showing up in a real stack.
===END===

===POST===
handle: @goekhan
post_url: https://x.com/goekhan/status/2071187349736677835
event_date: 2026-06-28
date_precision: day
kind: voice
stance: comparison
frameworks: flue, pi-coding-agent, openclaw, hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said he moved two production isolated agents onto Cloudflare with Flue plus Pi plus Think, already liked OpenClaw and Hermes, and still decided this project needs neither.
why_it_matters: The default advice this week is to pick a flagship harness; this is an operator saying a durability layer plus Pi was enough and the bigger agents were unused weight.
===END===

===POST===
handle: @FredKSchott
post_url: https://x.com/FredKSchott/status/2069963922514530337
event_date: 2026-06-25
date_precision: day
kind: voice
stance: criticism
frameworks: flue
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Flue's author said quality control is arguably worse now because people move faster and do not read their own code, and he had already caught Flue bugs that were technically correct but behaved in ways that made no sense.
why_it_matters: A harness maintainer reporting that agent-written, compiling-but-wrong changes are landing in his tree is the review bottleneck moving, not a model-quality dunk.
===END===

===POST===
handle: @mikeyoon_
post_url: https://x.com/mikeyoon_/status/2072791890685235613
event_date: 2026-07-02
date_precision: day
kind: voice
stance: frustration
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Replying to Boris Cherny on Artifacts, he said pushing to Artifacts from Claude Code Routines asked for permissions every time, which undercuts the point of Routines, and asked whether auto-permissions exist or this is a bug.
why_it_matters: A background/routine feature that still stops for approval is not yet the unattended loop the announcement describes.
===END===

===POST===
handle: @theo
post_url: https://x.com/theo/status/2072443268152078698
event_date: 2026-07-01
date_precision: day
kind: voice
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Theo said he runs Claude with bypassed permissions by default, and that this works until /remote-control or --worktree, where directory-trust behavior breaks, and he wants an explicit trust-directory command.
why_it_matters: Skipping the prompt is the common power-user default; if it silently breaks remote control and worktrees, that default is a footgun on the exact features this window is selling.
===END===

===POST===
handle: @simonw
post_url: https://x.com/simonw/status/2069856334305230902
event_date: 2026-06-24
date_precision: day
kind: claim
stance: frustration
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Simon Willison said Claude Code for web started returning a GitHub-blocked-by-egress-policy error, which breaks his usual prompts that clone a public repo into /tmp to read its docs, and asked Anthropic whether it is a known issue.
why_it_matters: If web/cloud Claude Code cannot clone public GitHub, a large class of "read the docs in-repo" workflows is dead until egress policy is documented or fixed.
===END===

===POST===
handle: @bcherny
post_url: https://x.com/bcherny/status/2072777472970563995
event_date: 2026-07-02
date_precision: day
kind: voice
stance: praise
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Claude Code's creator said Artifacts had changed how he works and that he was glad they were reaching Pro and Max, quoting the official expansion post.
why_it_matters: The maintainer enthusiasm is the other half of the Routines-permission complaint in the same thread: the feature is being sold as everyday, not enterprise-only.
===END===

===POST===
handle: @Agent0ai
post_url: https://x.com/Agent0ai/status/2072718117386457324
event_date: 2026-07-02
date_precision: day
kind: claim
stance: announcement
frameworks: agent-zero
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Agent Zero said v2.2 is out for core and CLI, with first-run sending the first typed message after setup, a more reliable Responses-API fallback to Chat Completions, and CLI discovery of local instances via Colima and Docker sockets.
why_it_matters: The Responses-API transport and local-instance discovery are the operator-facing parts of a v2 line that otherwise had almost no independent X conversation this window.
===END===

===POST===
handle: @gneubig
post_url: https://x.com/gneubig/status/2071738340471414935
event_date: 2026-06-29
date_precision: day
kind: voice
stance: comparison
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: OpenHands' cofounder said a sidekick architecture (a smaller agent in parallel, frontier model keeping plan and review) has been effective at cutting LLM spend via context control, and pointed at a short OpenHands SDK gist as how to do it.
why_it_matters: Against "always put the frontier model on every tool call," this is a maintainer arguing the cheap parallel worker is the spend control, with code rather than a slogan.
===END===

===POST===
handle: @chongdashu
post_url: https://x.com/chongdashu/status/2072794372920246320
event_date: 2026-07-02
date_precision: day
kind: voice
stance: praise
frameworks: eve
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: He said he is trying Vercel's Eve agent framework and already has a bot that takes skill-file changes and posts them to his community Discord without him doing it by hand.
why_it_matters: Eve barely appeared in this window's coding-agent argument; this is one practitioner describing a real, narrow automation rather than a launch thread.
===END===

===POST===
handle: @Talk_morimori
post_url: https://x.com/Talk_morimori/status/2072811887138570349
event_date: 2026-07-02
date_precision: day
kind: voice
stance: praise
frameworks: antigravity, github-copilot-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said Antigravity CLI is doing heavy lifting on his machine, that he shares project structure with Copilot CLI, and that on Google AI Pro for personal use token cost is not binding, so he is assigning Gemini 3.1 Pro more freely.
why_it_matters: Against the "closed successor, gutted free plan" narrative, this is an operator who already dual-homes Antigravity and Copilot CLI and is limited by workflow, not quota.
===END===

COVERAGE_NOTE: Dated X keyword search over 2026-06-24 to 2026-07-03 (until exclusive) against the watchlist plus official and roster accounts (from:bcherny, ClaudeDevs, OpenAIDevs, cursor_ai, NousResearch, Teknium, openclaw, steipete, colinsolvely, papercliping, dotta, OpenHandsDev, gneubig, Agent0ai, antigravity, shengzheyao, JackWoth98, FredKSchott, doodlestein, mariozechner, elonmusk, GHchangelog, simonw, GergelyOrosz, mattpocockuk, wunderwuzzi23, swyx, sshh12, GeoffreyHuntley, mitsuhiko, theo, __tinygrad__). Could not reach Discord (OpenClaw "app situation" live), the LinkedIn spyware article behind the tinygrad claim, or private/deleted posts. Thin or empty on X this window: heypi, deepseek-harness (no dsh/cli hits), omnigent, temporal-agent-harness, unreal-agent, eve (one practitioner), flue (maintainer plus one migration), omp (one parallel-run), grok-build (Musk cadence plus one harness bake-off), agent-flywheel (migration aside, not method talk), github-copilot-cli (changelog PAT change plus one sandbox probe). OpenHands' cloud-only CVE split and Hermes' main-vs-tag security wave were not the X conversation; X talked Judgement Release, 60x web, and P0 clearing. Gemini CLI "OSS still ships" barely appeared as a practitioner argument; the killed-overnight narrative dominated, and some accounts still posted stale free-tier tutorials. mariozechner had no in-window hits. Roster: Huntley/swyx/sshh12 had no on-beat posts in range; wunderwuzzi23 posted a Claude classifier note, not a harness argument.
