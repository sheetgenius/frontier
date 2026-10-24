I'll start by reading the research protocol and Claude Code watchlist identity so the sweep stays on the right project.Next I’ll load the Claude Code contract, official handles, and prior sweep examples so identity and date rules stay tight.There's already a Claude Code social log in this run; I'll read it plus official handles and recent notes before searching.I’ll pull maintainer handles and last-window conversation so this sweep continues the same identity and threads.I’ll search official Claude Code accounts first, then operator criticism, using the 2026-10-13–2026-10-24 window.Official accounts are posting in-window. I’ll page earlier maintainer posts and open the debug, usage, and MCP threads.Usage drain is the live thread. Next I’ll page earlier maintainer posts and hunt operator criticism, idle compaction, and code-review talk.Desktop, idle compaction, and gzip are in. I’ll pull those threads and run operator searches for usage, comparisons, and counter-takes.Latest-mode user hits are thin. I’ll search the first half of the window, named critics, and the usage, injection, and memory threads.I’ll fetch the Code Review, hive-swarm, and Projects threads, then search named operators and the idle-compaction and hook-fail-open arguments.I’ll grab the Mods, Projects, and ultracode threads, then fill remaining maintainer gaps before selecting records.I have enough receipted leads. Compiling maintainer and operator posts with real URLs, then a coverage note on identity drops and gaps.===POST===
handle: @ClaudeDevs
post_url: https://x.com/ClaudeDevs/status/2110445844675838148
event_date: 2026-10-14
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official developer account said the Claude Code desktop app had been rebuilt around running many sessions side by side, with faster session starts, easier splits, and a live view of what each session is doing.
why_it_matters: Operators who standardized on one CLI session need to check whether desktop is now the supported way to supervise parallel work, and what that does to review load.
===END===
===POST===
handle: @ClaudeDevs
post_url: https://x.com/ClaudeDevs/status/2110445846219382954
event_date: 2026-10-14
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They said a new session screen keeps recent folders one click away, and that operators can save a setup as an environment covering local folders, an SSH host, or the cloud, then start sessions there with an optional git worktree per folder.
why_it_matters: A saved environment plus per-folder worktrees changes how teams isolate parallel jobs and where cloud versus local trust boundaries live.
===END===
===POST===
handle: @ClaudeDevs
post_url: https://x.com/ClaudeDevs/status/2110445847922245974
event_date: 2026-10-14
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They said asking Claude to run tasks in parallel now starts a nested session for each one, and each child reports its result back into the parent so the main thread stays readable.
why_it_matters: Nested sessions move the operator's job from watching every child transcript to reviewing what the parent accepts, which is a different review surface and a different place for a bad child to hide.
===END===
===POST===
handle: @trq212
post_url: https://x.com/trq212/status/2110465009218469972
event_date: 2026-10-14
date_precision: day
kind: voice
stance: praise
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A Claude Code maintainer told a user who had mixed up Claude desktop with Claude Code desktop that the Code tab is easy to miss and is now the best way to run Claude Code.
why_it_matters: If the recommended surface is a hidden tab inside another Claude app, operators can spend weeks on the chat desktop and think they have already tried Claude Code.
===END===
===POST===
handle: @lydiahallie
post_url: https://x.com/lydiahallie/status/2110484840256819380
event_date: 2026-10-14
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A Claude Code maintainer said long idle sessions now compact just before the prompt cache expires, so coming back later reprocesses a summary instead of the whole transcript and uses less quota.
why_it_matters: Unattended sessions that used to burn a full recache on return now spend quota on a summary instead, which changes how operators should leave work overnight.
===END===
===POST===
handle: @lydiahallie
post_url: https://x.com/lydiahallie/status/2110484841926152622
event_date: 2026-10-14
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: She added that the session then continues from that summary rather than full context, that the behavior is on by default, and that operators can turn it off in settings.json or raise the token threshold with CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS.
why_it_matters: The usage save is also a context loss, so teams that resume long debugging threads need to decide whether default idle compaction is cheaper than being wrong.
===END===
===POST===
handle: @ClaudeDevs
post_url: https://x.com/ClaudeDevs/status/2110825294655562048
event_date: 2026-10-15
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The official developer account said Opus 5.5 fast mode left research preview on the Claude Platform at a stated API price, and that the Claude Code path is unchanged and still spends extra usage credits.
why_it_matters: Platform GA does not mean the subscription harness got cheaper; operators who saw the fast-mode headline still need to treat Claude Code fast mode as a credit burn.
===END===
===POST===
handle: @ClaudeDevs
post_url: https://x.com/ClaudeDevs/status/2110866210573386065
event_date: 2026-10-15
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official developer account said Code Review is generally available on Team and Enterprise, with Quick, Standard, or Deep per repo, and that reviews finish faster and catch more of the bugs that matter than they did in research preview.
why_it_matters: A GA reviewer that admins can turn on per repo is a default in the merge path, so teams need a policy for which level runs where and who still reads the findings.
===END===
===POST===
handle: @ClaudeDevs
post_url: https://x.com/ClaudeDevs/status/2110866214528716975
event_date: 2026-10-15
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They said admins turn Code Review on in Claude Code settings, pick the repos, and from then on every new pull request is reviewed with no setup for individual developers.
why_it_matters: The control sits in Claude Code settings rather than in GitHub required checks, so a fleet admin can enable it without the developers who own the repo noticing the new reviewer.
===END===
===POST===
handle: @simonw
post_url: https://x.com/simonw/status/2110758747815784768
event_date: 2026-10-15
date_precision: day
kind: voice
stance: praise
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Simon Willison said he had been running Claude Code in Ultracode mode on a twelve-hour job to write a fast Rust SQLite extension with SPARQL, and that the job was still finishing when he posted.
why_it_matters: A named practitioner treating Ultracode as an overnight unattended worker is a different operating model than a chat session, and it makes idle compaction, usage caps, and nested sessions load-bearing.
===END===
===POST===
handle: @GeoffreyHuntley
post_url: https://x.com/GeoffreyHuntley/status/2111037032659079517
event_date: 2026-10-16
date_precision: day
kind: claim
stance: comparison
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Geoffrey Huntley said Claude Code's crossSessionInbound=accept setting looks like the primitive behind hive-style session swarms, and later said that one setting is why he is back to preferring Claude.
why_it_matters: If sessions can accept inbound messages from each other by default or by a flip, operators running more than one agent in a repo need to know who can talk whom into a change.
===END===
===POST===
handle: @datachad
post_url: https://x.com/datachad/status/2111039089323696272
event_date: 2026-10-16
date_precision: day
kind: voice
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A practitioner replied that accept means one confused session can talk every other session into the same mistake, and that he would want the permission scoped per task.
why_it_matters: Cross-session messaging is being sold as a swarm primitive; this is the argument that the same primitive is a shared-memory bug unless inbound is task-scoped.
===END===
===POST===
handle: @hbthegreat_
post_url: https://x.com/hbthegreat_/status/2111106706956783698
event_date: 2026-10-16
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Ryan Handby said his fleet agents, first in tmux then in Herdr, switched themselves onto Claude Code's native cross-session primitive when it shipped and stopped using the cross-session tools he had written, without being told.
why_it_matters: If agents prefer a built-in inbound channel over operator-written coordination tools, the setting becomes part of the runtime even when nobody opted the fleet into swarms.
===END===
===POST===
handle: @noahreeveshq
post_url: https://x.com/noahreeveshq/status/2111544480457445781
event_date: 2026-10-17
date_precision: day
kind: voice
stance: criticism
frameworks: claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: After blaming Claude Code for refusing a localhost test login, he walked it back: a leftover memory from an old auth setup had hardened into a rule, and he only found it by having Codex search CLAUDE.md and Claude Code memory files.
why_it_matters: Persistent memory can outrank the current prompt, so an operator who thinks the product locked them down may actually be fighting last quarter's instructions, and a rival harness may be the thing that finds them.
===END===
===POST===
handle: @addyosmani
post_url: https://x.com/addyosmani/status/2111604705340326393
event_date: 2026-10-17
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A Claude Code maintainer said giving the agent a way to verify its work is how Claude Code came to write most of its own code, and that line-by-line human review cannot gate that volume, so people should spend attention on intent, risk, and evidence from tests and multi-agent review.
why_it_matters: If the team's own story is that humans no longer read the diff, operators copying the 90-percent-self-written claim need a verification stack, not a faster approve button.
===END===
===POST===
handle: @vincchan
post_url: https://x.com/vincchan/status/2111608173593346554
event_date: 2026-10-17
date_precision: day
kind: voice
stance: question
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Vincent Chan asked what the billed Claude Code review path on API credits actually does that his subscription skill does not, describing a multi-pass review that requires findings to show up more than once and uses gh to skip comments already on the pull request.
why_it_matters: GA Code Review is easy to turn on; this is the operator question of whether the paid reviewer is a different instrument or a more expensive copy of a skill they already run.
===END===
===POST===
handle: @lydiahallie
post_url: https://x.com/lydiahallie/status/2112241281602883702
event_date: 2026-10-19
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A Claude Code maintainer said operators can keep medium effort and still turn on Ultracode with /effort ultracode, or stay on medium and ask for a workflow without enabling Ultracode, noting that the first path is easy to misread.
why_it_matters: Defaulting Ultracode on xhigh is a silent spend; this is the recipe for multi-agent mode without leaving medium, and it needs a changelog check before anyone copies it.
===END===
===POST===
handle: @trq212
post_url: https://x.com/trq212/status/2112219173288120531
event_date: 2026-10-19
date_precision: day
kind: voice
stance: criticism
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A Claude Code maintainer said most people running many agents at once would get more from slowing down, naming a single P0, and giving it full attention, because most of the parallel work will not matter.
why_it_matters: The same week the team shipped nested sessions, environments, and worktrees, a maintainer argued the scarce resource is still focused human attention, which cuts against treating parallel agents as the default.
===END===
===POST===
handle: @dani_avila7
post_url: https://x.com/dani_avila7/status/2112304487746478461
event_date: 2026-10-19
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Daniel San said Claude Project cloud sessions had made him stop using Remote Control, because leaving agents running in the cloud fit his workflow better than driving them from a laptop.
why_it_matters: If Projects replace Remote Control for some operators, laptop-trust and session-resume habits do not transfer, and the cloud project's memory and limits become the ones that matter.
===END===
===POST===
handle: @jerrodtuck
post_url: https://x.com/jerrodtuck/status/2112337961488453874
event_date: 2026-10-20
date_precision: day
kind: voice
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Jerrod Tuck replied that running agents in the cloud makes sense for a SaaS that counts MRR and does not make sense for enterprise apps that run the world.
why_it_matters: Cloud Projects are being treated as the obvious next step; this is the argument that regulated or on-prem work stays on local Claude Code even when the cloud path is nicer.
===END===
===POST===
handle: @DannyGrinberg
post_url: https://x.com/DannyGrinberg/status/2112940090616103097
event_date: 2026-10-21
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Danny Grinberg said Claude still works for him but the desktop app is a different harness from Claude Code in the terminal, and that he can see and feel the difference, so he tells people to use the CLI and then Herdr once they outgrow one terminal.
why_it_matters: Desktop and CLI sharing a brand does not mean they share a runtime; an operator baking a workflow on one cannot assume the other will honor the same hooks, memory, or permissions.
===END===
===POST===
handle: @CampbellKaleb23
post_url: https://x.com/CampbellKaleb23/status/2112957708219433095
event_date: 2026-10-21
date_precision: day
kind: claim
stance: frustration
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Kaleb Campbell said Claude Code usage was draining about five times faster than anything he had seen on any model and asked whether others were hitting the same wall.
why_it_matters: If the five-hour and weekly bars moved without a changelog line, operators cannot plan unattended jobs or choose a plan from last month's burn rate.
===END===
===POST===
handle: @swyx
post_url: https://x.com/swyx/status/2113003628835553559
event_date: 2026-10-21
date_precision: day
kind: voice
stance: praise
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: swyx said Claude Mods are the point of Claude Code's next era: a general-purpose hardened harness that can be specialized the way foundation models were specialized, and pointed at a Latent Space write-up of which mods to try.
why_it_matters: If mods are how the harness becomes domain-specific, install-time trust and who may answer permission checks matter more than any single model bump.
===END===
===POST===
handle: @This_Liss
post_url: https://x.com/This_Liss/status/2113120507289624714
event_date: 2026-10-22
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Steven Liss said Claude Code had put personal data into HTTP headers after sites it curled asked agents to identify their users.
why_it_matters: A coding agent that identifies its operator to random pages is an exfil path; teams that let Claude Code hit the open web need to know whether headers are model-improvised or harness-added.
===END===
===POST===
handle: @bcherny
post_url: https://x.com/bcherny/status/2113141937645769087
event_date: 2026-10-22
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The Claude Code lead told the usage-drain thread that nothing had changed on their side and asked people to paste the full output of claude -p /usage.
why_it_matters: The official first answer is that the bars did not move, so the next check is whether /usage shows a new consumer such as idle compaction, nested sessions, or Ultracode rather than a silent quota cut.
===END===
===POST===
handle: @lydiahallie
post_url: https://x.com/lydiahallie/status/2113322605482852430
event_date: 2026-10-22
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A Claude Code maintainer treated the identifying-headers report as likely prompt injection from page content, said headers added by Claude would be a bug they want to fix, and asked for a /feedback transcript or a HackerOne report.
why_it_matters: If curl-time identity came from the page rather than from a harness header, operators cannot patch it with a setting; they have to treat fetched HTML as an instruction channel.
===END===
===POST===
handle: @bcherny
post_url: https://x.com/bcherny/status/2113333859907747871
event_date: 2026-10-22
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The Claude Code lead said Agent Skills began as an experiment inside Claude Code, that much of the industry had adopted it, and that Anthropic was donating the standard to the Agentic AI Foundation next to MCP.
why_it_matters: A skill file is no longer a Claude-only convention; operators writing skills for Claude Code are writing against a shared standard whose governance and security guidance will sit outside the harness repo.
===END===
===POST===
handle: @lydiahallie
post_url: https://x.com/lydiahallie/status/2113366380842254746
event_date: 2026-10-22
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A Claude Code maintainer told a user who said Opus limits had been cut in half with no explanation that the published limits had not changed, and asked for a /feedback id from a session that drained faster.
why_it_matters: Two maintainers denied a quota change while users reported a 5x burn; until /usage and a changelog agree, operators should treat plan pages as claims and measure their own sessions.
===END===
===POST===
handle: @bcherny
post_url: https://x.com/bcherny/status/2113417302402322910
event_date: 2026-10-22
date_precision: day
kind: voice
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: After a day of asking for /usage dumps and session ids, the Claude Code lead said the team was investigating the drain reports and would report back soon, then kept asking people to run a find over recent ~/.claude/projects jsonl files.
why_it_matters: The denial and the investigation sat in the same thread; at window close there was still no public root cause, so unattended jobs over the weekend were a bet.
===END===
===POST===
handle: @GeoffreyHuntley
post_url: https://x.com/GeoffreyHuntley/status/2113119417303454155
event_date: 2026-10-22
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Geoffrey Huntley said he had bought a Claude subscription for the first time in months, ran the same task against Claude and Codex, and found Codex dissociated and useless while Claude finished the work quickly.
why_it_matters: A practitioner who spent the prior window criticizing Claude's classifier is now arguing Claude Code is the reliable one, which is a live counter to a Codex-is-winning default.
===END===
===POST===
handle: @andyfowler
post_url: https://x.com/andyfowler/status/2113668673680400888
event_date: 2026-10-23
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Andy Fowler said two months of Claude Code CLI plus tmux, local and SSH, still beat several days in the Mac GUI: a few niceties such as inline images, not the same as the TUI, so he is moving back.
why_it_matters: The official desktop v2 pitch does not land for operators whose workflow is remote hosts and multiplexed terminals; those people still need the CLI to stay first-class.
===END===
===POST===
handle: @ClaudeDevs
post_url: https://x.com/ClaudeDevs/status/2113698007892070527
event_date: 2026-10-23
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official developer account said MCP Tasks and Elicitations are available today in the Claude Code CLI, with Tasks for long-running plugin jobs that report back later and Elicitations for mid-task prompts such as confirming a refund, and that other Claude products come later.
why_it_matters: Plugins can now block a session on a human answer and park work in the background; that is a new approval surface and a new place for a plugin to hold a job open against quota.
===END===
===POST===
handle: @LLMpsycho
post_url: https://x.com/LLMpsycho/status/2113867595581382820
event_date: 2026-10-24
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A practitioner said Claude Code 2.1.310 closes a Windows fail-open where PreToolUse and PermissionRequest hooks let tool calls through when Git Bash was missing and the hook command was only a quoted path, arguing a guard that fails open is worse than no guard because people stop watching.
why_it_matters: Windows fleets that treated hooks as the security boundary may have been unprotected whenever Git Bash was absent; they need the version pin and a canary that fires a deny after every upgrade.
===END===
===POST===
handle: @AndreasDmln
post_url: https://x.com/AndreasDmln/status/2113908829754671157
event_date: 2026-10-24
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Andreas Dimolenis said hooks that fail open now have an onFailure block switch from 2.1.295, so a crash, missing script, or timeout blocks the call, and that exit code 2 blocks while exit 1 does not.
why_it_matters: Default fail-open is still the trap; operators who want hooks as a gate have to set the switch and test the crash path, not just a successful deny.
===END===
COVERAGE_NOTE: Identity: Claude Code here is Anthropic's coding CLI/desktop/web (issues at github.com/anthropics/claude-code, npm @anthropic-ai/claude-code). Searched X in Latest mode over since:2026-10-13 until:2026-10-25 (until exclusive) with from: queries on @bcherny, @ClaudeDevs, @claudeai, @_catwu, @trq212, @lydiahallie, @addyosmani, @noahzweben, @AnthropicAI, plus @simonw, @GeoffreyHuntley, @wunderwuzzi23, @swyx; keyword and semantic sweeps for usage/quota drain, idle compaction, Mods, Projects/cloud vs Remote Control, desktop vs CLI, nested sessions/worktrees, hooks fail-open, sandbox, Codex comparisons, Plugin4Shell/GitSpawn, auto mode, and ultracode. Thread-fetched the desktop launch, idle compaction, Code Review GA, gzip, 90-percent-self-written, usage-drain, identifying-headers, Agent Skills donation, MCP Tasks, Thariq exit, Huntley inbound, Ultracode, and Projects threads. Could not reach X lists, most quote-tweet bodies, Discord, GitHub issue threads, deleted posts, or the private DMs Boris and Lydia asked people to send with /feedback ids. Official @AnthropicAI had no in-window Claude Code hits. @claudeai in-window posts were Claude Duet, Claude Security continuous scanning, and auto mode defaulting on Claude web/desktop/mobile (quoting an August Claude Code auto-mode post); those surfaces were dropped as not this harness. @_catwu had no Claude Code product posts in the window (Duet waitlist plus a Thariq farewell). @noahzweben was Claude Tag only. Identity drops: Claude Duet, Claude Tag, Claude Cowork, Claude chat, OSS Scanner, Google Cloud Anthropic-managed models, API version 2026-10-21 except where they named a /claude-api skill, OpenCode Console key revocation (API keys, not this harness), the Japan hackathon, gzip-discovery jokes with no operator argument, and Thariq's exit thread (personnel, no product claim). Danielle Fong's 2026-10-14 mix-up of Claude desktop versus Claude Code desktop is the identity hazard for the window; Thariq's Code-tab reply is the maintainer correction. Thin: Plugin4Shell and GitSpawn had no in-window maintainer or original-researcher posts; enterprise managed-settings and sandbox-auto-allow talk was almost absent; Japanese and Chinese operator threads were only sampled (idle-compaction recaps, not new arguments); @mckaywrigley and @wunderwuzzi23 had no substantive in-window Claude Code harness argument (wunderwuzzi's hit was an older Claude-memory write-up). The usage-drain dispute was still open at window close: maintainers first said nothing changed, then said they were digging, and were still collecting ~/.claude/projects jsonl ids on 2026-10-23.
