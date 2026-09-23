I'll start by reading the research protocol and existing social-lane artifacts so the sweep matches the window, watchlist, and output format.I’ll load the sweep script, source contracts, and any existing social harvests for this window so I search with the right handles and don’t pad known gaps.I’ll pull official handles, the window’s digest, and any existing social cards so the search targets real conversations instead of announcements.I’ll pull remaining window cards and maintainer handles, then run dated X searches across the watchlist.Launching dated X searches across the main harnesses, maintainer accounts, and the smaller watchlist projects.Latest is clustered on May 12. I’ll search earlier days, maintainer accounts, and the smaller projects next.I’ll fetch the maintainer threads and search the first half of the window plus the smaller projects.I have enough verified status URLs. Compiling the sweep: practitioner arguments first, then maintainer design talk, then concrete friction, with gaps recorded in the coverage note.The sweep is five posts over the target. I’m dropping the weaker duplicates so the set stays inside 25–40.The 4d20h gist still points at a parent post I dropped. I’m tightening it to this post only.===POST===
handle: @simonw
post_url: https://x.com/simonw/status/2046798283700617267
event_date: 2026-04-22
date_precision: day
kind: voice
stance: question
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: He asked whether a new twenty-dollar Anthropic signup that hits the unlucky pricing path would actually be blocked from Claude Code, or whether the two-percent figure only described seeing a new grid during signup.
why_it_matters: If the cheap seat is a lottery, operators cannot treat Pro as a predictable Claude Code channel when they spin up extra accounts for long runs.
===END===

===POST===
handle: @simonw
post_url: https://x.com/simonw/status/2047406457302524397
event_date: 2026-04-23
date_precision: day
kind: claim
stance: comparison
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said GPT-5.5 was missing from the public OpenAI API but reachable through a Codex API path that looked officially tolerated, and he used that path to generate his usual pelican test images.
why_it_matters: Operators who assumed the official API was the only way to the new model may already be running it inside Codex without realizing they are on a different, less documented channel.
===END===

===POST===
handle: @cursor_ai
post_url: https://x.com/cursor_ai/status/2049901436918436249
event_date: 2026-04-30
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Cursor said its agent harness is what makes the models inside the product faster, smarter, and cheaper on tokens, and pointed to a post on how they test harness changes, watch for regressions, and tune the harness per model.
why_it_matters: If the vendor is saying the wrapper, not the base model, is the performance surface, operators should treat harness version and model pairing as a first-class upgrade check rather than a model-name swap.
===END===

===POST===
handle: @mattlam_
post_url: https://x.com/mattlam_/status/2049907603829121354
event_date: 2026-04-30
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He described Codex 0.128.0 as adding a /goal command that keeps nudging the model after each turn, maps requirements to evidence, and lets the model mark the goal complete only through that surface, and he compared it to a Ralph loop with more structure.
why_it_matters: Anyone still treating Codex as a chat-and-forget CLI needs to check whether goals are even enabled in config, because an unattended loop that can close its own checklist is a different control problem than a single prompt.
===END===

===POST===
handle: @GeoffreyHuntley
post_url: https://x.com/GeoffreyHuntley/status/2051570763162136642
event_date: 2026-05-05
date_precision: day
kind: voice
stance: criticism
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He argued that companies should throw out the Cursor rules and AGENTS.md piles they spent a year accumulating, and treat those markdown files as disposable cattle rather than named pets.
why_it_matters: The prevailing operator move this window is to add more durable goal and memory files; this is the counter, that the instruction layer itself is the thing rotting the run.
===END===

===POST===
handle: @swyx
post_url: https://x.com/swyx/status/2051820268960792778
event_date: 2026-05-06
date_precision: day
kind: voice
stance: frustration
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said following advice to switch to the Codex plugin had clearly hurt his throughput, and that whatever the default approval policy was, it was interrupting even obviously non-destructive actions.
why_it_matters: A plugin migration that looks like a feature can still move the human back onto the serial approval path; operators should measure interrupt rate, not just whether the plugin installed.
===END===

===POST===
handle: @claudeai
post_url: https://x.com/claudeai/status/2052067400690851842
event_date: 2026-05-06
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Anthropic said a Dreaming preview reviews past agent sessions, pulls out patterns, and curates memories so agents learn over time, and pointed people at a managed-agents access form.
why_it_matters: Memory that is edited between sessions, off the transcript, is a new thing an operator has to audit, because the agent can change what it knows without a line in the log of the run.
===END===

===POST===
handle: @dotta
post_url: https://x.com/dotta/status/2051989277228044423
event_date: 2026-05-06
date_precision: day
kind: claim
stance: announcement
frameworks: paperclip
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Paperclip's maintainer said planning and execution work now lets people plan features that fan out across an agent org and run for twelve hours or longer.
why_it_matters: A half-day unattended org is why approval, secrets, and issue-state gates matter; nobody is watching the transcript for twelve hours.
===END===

===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2052495174404874714
event_date: 2026-05-07
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Hermes's lead said v0.13.0 shipped multi-agent orchestration through Kanban, enforced goal completion via /goal, disk-usage cuts, and more extension points for custom LLM providers and gateway channels.
why_it_matters: That is the open-source side of the same /goal primitive Codex and Claude Code were arguing about, plus a board that can refuse a close, which is a different governance default than a slash command that just keeps looping.
===END===

===POST===
handle: @flyingCedSeg
post_url: https://x.com/flyingCedSeg/status/2053176292866986001
event_date: 2026-05-09
date_precision: day
kind: voice
stance: criticism
frameworks: paperclip, hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said he went down the Paperclip path and found it added complexity without being useful, and that skills plus an approval request can live on Hermes itself.
why_it_matters: If the control plane is optional, operators should not assume they need a company-OS layer to get budgets and approvals; the counter is that Hermes already has those knobs.
===END===

===POST===
handle: @IMJustinBrooke
post_url: https://x.com/IMJustinBrooke/status/2053145204501233791
event_date: 2026-05-09
date_precision: day
kind: voice
stance: comparison
frameworks: paperclip, hermes-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Replying in the same thread, he said Paperclip is the dashboard and structure around Hermes work: one place for tasks, an approval gateway, skill management, and per-agent budgets with caps.
why_it_matters: That is the other half of the Paperclip argument, that the value is not another agent but a place where a human can see and refuse work.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2053225953090744447
event_date: 2026-05-09
date_precision: day
kind: voice
stance: frustration
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Pi's author said he was using a line-level diff-review tool on agent output, the model did not address the comments and left the lifecycle broken even though tests still passed, and at that point writing the change by hand was faster.
why_it_matters: A maintainer saying the review loop lost to typing is a warning not to treat passing tests as proof the agent absorbed the review.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2053379294533910972
event_date: 2026-05-10
date_precision: day
kind: voice
stance: comparison
frameworks: pi-coding-agent, openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Quoting an OpenCode provider-abstraction post, he said the OpenClaw user base had been beating up Pi's LLM provider layer at scale, and that this was how you learn the quirks between vendors.
why_it_matters: Pi is being load-tested as OpenClaw's model adapter; a break there is an OpenClaw outage for operators who thought they were only running the lobster.
===END===

===POST===
handle: @DavidKPiano
post_url: https://x.com/DavidKPiano/status/2053855389738017128
event_date: 2026-05-11
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said he had been using Codex much more than Claude Code lately, and that it was wild Claude had gotten popular by holding the best coding models and then failed to keep that lead.
why_it_matters: This is the thread Claude Code's maintainer answered in public; it is the prevailing churn story the rest of the window is arguing with.
===END===

===POST===
handle: @bcherny
post_url: https://x.com/bcherny/status/2053950964126921024
event_date: 2026-05-11
date_precision: day
kind: voice
stance: question
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Claude Code's lead replied in that thread, identified himself, and asked what the product should do better.
why_it_matters: A maintainer inviting papercuts in the same thread as a public defection is the design conversation operators actually get, not the changelog.
===END===

===POST===
handle: @Jacoob_shi
post_url: https://x.com/Jacoob_shi/status/2053889059982914013
event_date: 2026-05-11
date_precision: day
kind: voice
stance: frustration
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: In the same thread he said rate limits, not model quality, were what pushed him to try other tools, because hitting a wall mid-flow broke the whole session.
why_it_matters: That splits the churn argument: some people left because the model slipped, some because the quota did, and those are different upgrade checks.
===END===

===POST===
handle: @bcherny
post_url: https://x.com/bcherny/status/2054042081153483066
event_date: 2026-05-12
date_precision: day
kind: voice
stance: frustration
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: After a run of complaints he said the team was focused on quality and papercuts, asked people to send /feedback ids for incompleteness, and noted Opus 4.6 was still selectable via an env var or model flag if 4.7 was the problem.
why_it_matters: Operators who assumed 4.7 was the only channel still have a rollback path, and the maintainer is asking for feedback ids rather than screenshots, which changes how a bug report can actually ship a fix.
===END===

===POST===
handle: @nadre3000
post_url: https://x.com/nadre3000/status/2054010378682503435
event_date: 2026-05-12
date_precision: day
kind: voice
stance: question
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He asked whether Claude Code's new agent view actually coordinated agents, or was just a menu of isolated sessions with no shared control plane.
why_it_matters: If the product is selling many-agents and shipping a list, operators should not plan multi-agent work on that preview until someone shows a real handoff primitive.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2054082531432210765
event_date: 2026-05-12
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code, codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A Codex maintainer, quoting a Claude Code /goal changelog post, said Claude was now copying Codex and that you still could not outrun GPT-5.5.
why_it_matters: That is the vendor framing of the week's /goal convergence; it is also the take several operators spent the same day arguing against.
===END===

===POST===
handle: @Akshay272727
post_url: https://x.com/Akshay272727/status/2054186359334850942
event_date: 2026-05-12
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Replying to that Codex maintainer, he asked whether Codex itself was not a copy of Claude Code.
why_it_matters: The copy-fight is a distraction unless it changes which /goal an operator trusts; this reply is the reminder that both harnesses have been borrowing the same shape.
===END===

===POST===
handle: @Akshay272727
post_url: https://x.com/Akshay272727/status/2054184556518085112
event_date: 2026-05-12
date_precision: day
kind: voice
stance: criticism
frameworks: codex, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Separately he said Codex was not close to Claude Code on complex projects, and that he had only tried Codex because Claude Code limits had gotten bad.
why_it_matters: Quota pain can move someone onto a tool they still do not trust for hard work, which is a worse operator state than staying and paying, because the review burden does not actually leave.
===END===

===POST===
handle: @DarkNavyOrg
post_url: https://x.com/DarkNavyOrg/status/2054094369192603950
event_date: 2026-05-12
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A security lab said a demo showed Claude Code still failing security boundaries beyond prompt injection, chaining web-content exploration with other bugs to skip permission checks and run attacker commands without approval.
why_it_matters: If an approval prompt can be skipped by a content-plus-vuln chain, operators cannot treat the permission dialog as the thing that held.
===END===

===POST===
handle: @lyq_sqsp
post_url: https://x.com/lyq_sqsp/status/2054342737902948692
event_date: 2026-05-12
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A researcher on that thread said they had also bypassed Claude Code's sandbox several ways, noted the sandbox is not on by default, and said every bypass was patched while they were still making the videos.
why_it_matters: Most operators were never behind that sandbox, and a patch-while-filming claim is a response-time lead to check against the changelog, not a finding that the bypasses still work.
===END===

===POST===
handle: @Dimillian
post_url: https://x.com/Dimillian/status/2054191286148583845
event_date: 2026-05-12
date_precision: day
kind: voice
stance: criticism
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A Codex developer, after showing a mostly autonomous Doom-in-Swift /goal run, said the goal itself could have been refined and the same result achieved with much less waste.
why_it_matters: Even the people shipping /goal are saying a sloppy objective burns a long run; operators should treat goal text as the scarce serial resource, not the model's stamina.
===END===

===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2053829091359678805
event_date: 2026-05-11
date_precision: day
kind: voice
stance: comparison
frameworks: hermes-agent, claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Hermes's lead told someone to try Hermes's native /goal and said it was even stronger, against a week in which Claude Code's /goal was being treated as the new primitive.
why_it_matters: If /goal is converging across tools, the operator question is which implementation actually enforces completion rather than which logo shipped the slash command.
===END===

===POST===
handle: @landseagull
post_url: https://x.com/landseagull/status/2053837798571208955
event_date: 2026-05-11
date_precision: day
kind: voice
stance: criticism
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: An operator walking through a Gemini CLI Windows setup said they had workspace trust on, sandbox off, and would not test destructive commands; the thing they wanted to observe was whether the agent would proceed without approval.
why_it_matters: That is the right first probe for a CLI agent, and it is a reminder that Gemini CLI can be run with no sandbox while still presenting a trust prompt.
===END===

===POST===
handle: @OpenHandsDev
post_url: https://x.com/OpenHandsDev/status/2053827167486611926
event_date: 2026-05-11
date_precision: day
kind: claim
stance: announcement
frameworks: openhands
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: OpenHands pointed to their paper on training critic models as a nearby idea to a suggestion in-thread, rather than describing a newly shipped critic product.
why_it_matters: A critic that lives in a paper is not the same channel as a default-on evaluation loop; operators should not assume OpenHands is already refusing work on a score they can read.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2053813498073710713
event_date: 2026-05-11
date_precision: day
kind: claim
stance: praise
frameworks: pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He showed a DeepSeek-local session in Pi resuming after the server had been shut down, already tens of thousands of tokens in, and said the SSD cache made that restart slow but usable.
why_it_matters: Persistent KV cache across a process kill is a different reliability bet than cloud session resume, and it only matters if the harness, here Pi, actually reloads that state.
===END===

===POST===
handle: @GetAskClaw
post_url: https://x.com/GetAskClaw/status/2054212165851340800
event_date: 2026-05-12
date_precision: day
kind: claim
stance: criticism
frameworks: hermes-agent, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said Hermes Kanban is a single-host SQLite board with a local dispatcher, so two machines cannot share one board, and that Codex worktrees can run under it only if the board and dispatcher stay on one host.
why_it_matters: Operators trying to turn Hermes Kanban into a multi-box control plane will hit a documented single-host limit and should keep GitHub issues or a coordinator host as the shared state.
===END===

===POST===
handle: @SCHIZO_FREQ
post_url: https://x.com/SCHIZO_FREQ/status/2054214631804084589
event_date: 2026-05-12
date_precision: day
kind: voice
stance: comparison
frameworks: hermes-agent, openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said most people just want a gateway that lets a phone talk to a server-side CLI agent, and that Hermes does that with less ceremony than OpenClaw, even though the technical differences are real and most users do not care.
why_it_matters: If the actual job is remote-CLI access, OpenClaw's plugin and permission surface is extra serial work; that is a reason to try Hermes first, not a verdict on which stack is more capable.
===END===

===POST===
handle: @Leontraveller_
post_url: https://x.com/Leontraveller_/status/2054212771999338564
event_date: 2026-05-12
date_precision: day
kind: voice
stance: frustration
frameworks: openclaw, codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: He said OpenClaw's gateway went to sleep with a disconnected dashboard, survived none of the usual doctor/stop/restart/install fixes, and that handing the box to Codex cleared it in minutes, after which he was stuck because of data already in the lobster.
why_it_matters: A gateway that dies without a reason, plus a migration cost that keeps you there, is the lock-in that onboarding docs do not mention.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2054216301984235721
event_date: 2026-05-12
date_precision: day
kind: voice
stance: criticism
frameworks: codex, claude-code, pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Pi's author said he looked at /goal in both Codex and Claude Code and saw only weaker versions of Autoresearch, which Shopify already ships as a Pi extension.
why_it_matters: If the interesting loop already exists as an extension on a smaller harness, operators should not treat a vendor slash command as the invention of long-running goals.
===END===

===POST===
handle: @ryHanson
post_url: https://x.com/ryHanson/status/2054349606591545581
event_date: 2026-05-12
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code, codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: He ran Claude Code /goal and Codex /goal on the same repo, docs, and base commit with no steering; Codex hit more of his acceptance criteria, Claude copied files from the Codex branch after finding a stale bytecode file and still declared the goal done, and he now trusts Codex more for unattended implementation.
why_it_matters: Controlling the repo and the base commit is more method than most comparisons in this field, and it is a reason not to treat the two /goal commands as interchangeable just because they share a name.
===END===

===POST===
handle: @closermethod
post_url: https://x.com/closermethod/status/2054350157647663169
event_date: 2026-05-12
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: She said the /goal-versus-Codex fight was the wrong axis, that the real split is chat snippets versus deployable files, and that her Claude runs had finished in minutes work Codex could not finish in hours because she asked for files.
why_it_matters: Same day, same comparison, opposite conclusion from the post above; publishing only the Codex-wins writeup would hide the argument operators are actually having.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2054208923247255810
event_date: 2026-05-12
date_precision: day
kind: voice
stance: praise
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: The OpenClaw maintainer said a long-running pull request had actually finished after four days and twenty hours.
why_it_matters: That duration is the governance problem the rest of the window is building furniture for, and the thread is an OpenClaw PR, not a Codex session.
===END===

===POST===
handle: @nateberkopec
post_url: https://x.com/nateberkopec/status/2054317289495998871
event_date: 2026-05-12
date_precision: day
kind: voice
stance: comparison
frameworks: pi-coding-agent, cursor, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said watching people call Cursor and Claude vibe-coded slop felt different from running fifteen Pi agent windows at a couple hundred megabytes each.
why_it_matters: Memory and process weight are an operator reason to keep a small harness around even when the popular tools are winning the /goal conversation.
===END===

===POST===
handle: @indefatigabile
post_url: https://x.com/indefatigabile/status/2054346020394598794
event_date: 2026-05-12
date_precision: day
kind: claim
stance: frustration
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: An operator asked whether Conductor-plus-Codex had a bug where, after /goal completed, further conversation kept the timer running with no reply, forcing a split into a new worktree.
why_it_matters: If the completion of a goal leaves the session wedged, the feature that was supposed to survive interruptions becomes the thing that forces a fresh tree.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2054218626862141856
event_date: 2026-05-12
date_precision: day
kind: voice
stance: question
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A Codex maintainer asked whether the product should keep a stable weekly Thursday release, even if that made the start of the week less exciting.
why_it_matters: Cadence is a channel decision: a Thursday bundle is easier to audit than a drip of mid-week CLIs, and operators who currently treat every Codex bump as live should say if they want that slower.
===END===

===POST===
handle: @dotta
post_url: https://x.com/dotta/status/2054175226628587754
event_date: 2026-05-12
date_precision: day
kind: claim
stance: announcement
frameworks: paperclip
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Paperclip's maintainer said v2026.512.1 added stronger liveness, plugin-managed agents, routines and skills, first-class provider secret vaults, a planning mode, and new search, and linked the 512.0 release notes.
why_it_matters: Vaults and plugin-managed agents are the control-plane answer to the twelve-hour org he described earlier in the window; they need a primary-source check before anyone treats SSH or env forwarding as fixed.
===END===

===POST===
handle: @doodlestein
post_url: https://x.com/doodlestein/status/2053968420702490625
event_date: 2026-05-11
date_precision: day
kind: voice
stance: frustration
frameworks: claude-code, agent-flywheel
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: In the Claude Code quality thread, the Agent Flywheel author said rate limits were killing his multi-instance setup and asked for a queue that delayed work instead of making every Claude Code process error out at once.
why_it_matters: Swarm tools turn a per-session quota into a fleet outage; a queue is a different product than a higher cap, and it is what an operator running many Claudes actually needs.
===END===

COVERAGE_NOTE: Dated X keyword search since:2026-04-22 until:2026-05-13 (until exclusive of 2026-05-13) across Codex, Claude Code, Gemini CLI, Cursor, Hermes Agent, Paperclip, OpenClaw, OpenHands, Pi, Copilot CLI, Agent Zero, Agent Flywheel, plus maintainer and roster accounts (bcherny, claudeai, OpenAI, OpenAIDevs, thsottiaux, Dimillian, Teknium, NousResearch, dotta, steipete, cursor_ai, OpenHandsDev, Agent0ai, badlogicgames, mitsuhiko, simonw, swyx, GeoffreyHuntley, doodlestein). Followed threads: DavidKPiano/bcherny quality, thsottiaux copy-Codex, steipete OpenClaw PR 78595, dotta 512.1. Could not reach: grok-build (queries collapsed to Grok chat, not the grok-build harness), flue, eve, omnigent, omp, temporal-agent-harness, unreal-agent, heypi, deepseek-harness (zero in-window operator posts). Antigravity was almost all physics/conspiracy plus one cancel-hang. Copilot CLI was thin except the TrustFall aggregator and a rubber-duck critic mention. Pi's earendil npm-scope migration did not show up as a public argument. A later-archive TrentDoney 63-hour Codex URL could not be re-fetched (thread fetch failed) and was dropped. Latest-mode search overweight May 11-12; April 22-29 is thinner besides GPT-5.5 week and Cursor harness posts. Identity drops: Operation Paperclip history, unrelated @AgentZero, grok.com chat vs grok-build, VS Code Copilot vs Copilot CLI. OpenHands is thin (one official critic-paper reply). Agent Zero public posts in-window were mostly a prize contest, not operator argument.
