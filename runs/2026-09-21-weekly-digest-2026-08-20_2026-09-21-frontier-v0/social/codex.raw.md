I'll start by reading the research protocol and Codex identity notes so the sweep only captures the OpenAI coding-agent project, then search X in the given window.I'll load Codex maintainer handles and prior harvest notes, then search X in the window for both official and operator posts.I have the identity and known Codex handles. Next I’ll search X in the window for maintainer posts, operator friction, and takes that cut against the usual story.The first pass is mostly announcements. I’ll now hunt maintainer arguments, usage/sandbox friction, and posts that cut against the usual Codex take.I have the usage-burn and sandbox-escape threads. Next I’ll fetch maintainer posts from August and the original disclosures so the records stay dated and URL-backed.I have dated, URL-backed leads across maintainers and operators. Next I’ll drop recaps and ads, keep the arguments that cut both ways, and emit the records.===POST===
handle: @OpenAIDevs
post_url: https://x.com/OpenAIDevs/status/2090230646497251387
event_date: 2026-08-20
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official developer account said teams are embedding the open-source Codex agent loop inside their own apps and dashboards, with the host application owning the interface, context, tools, and approvals while the harness runs the loop.
why_it_matters: If that split is real, operators should treat the public tree as an embeddable runtime rather than only as a CLI, and check which surfaces still require the closed desktop app.
===END===

===POST===
handle: @gdb
post_url: https://x.com/gdb/status/2090246288478814281
event_date: 2026-08-20
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: OpenAI's president quoted that platform post and said Codex is already doing non-coding work, citing a tax-prep pilot of about 7,000 returns that cut preparation time by roughly a third, and that outsiders can build products on the public harness.
why_it_matters: That is a different product claim than "coding agent": if the harness is the unit of reuse, operators evaluating Codex are deciding on an orchestration layer, not only a programmer tool, and the tax-prep numbers need a primary receipt.
===END===

===POST===
handle: @RijnHartman
post_url: https://x.com/RijnHartman/status/2091842836819804425
event_date: 2026-08-24
date_precision: day
kind: voice
stance: criticism
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A user said a keep-the-last-turn-alive usage tool, built after someone reported getting hundreds of dollars of Codex usage at zero remaining quota, was deleted once the Codex lead warned that scaled abuse would force OpenAI to revisit the feature, and that the underlying behavior then appeared gone.
why_it_matters: Unofficial quota-extension tricks are not an operator plan: if the team treats them as abuse, the durable question is whether last-turn continuation is a supported contract or a hole they will close.
===END===

===POST===
handle: @labelmake
post_url: https://x.com/labelmake/status/2092753196787900628
event_date: 2026-08-26
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: An OSS maintainer said Codex CLI 0.150.0 stopped loading project-level AGENTS.md on untrusted projects, so a malicious instruction file in a cloned repo should no longer steer the agent.
why_it_matters: Opening someone else's tree is an execution event; operators should confirm which channel actually ships that refusal and whether trust is a session flag, a folder marker, or something that can be flipped after the files are already in context.
===END===

===POST===
handle: @theo
post_url: https://x.com/theo/status/2093835339509240003
event_date: 2026-08-29
date_precision: day
kind: voice
stance: comparison
frameworks: codex, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A well-known developer split the comparison by surface: Claude Code's CLI over Codex's CLI, and Codex's desktop app over Claude Code's desktop app, and refused to collapse that into a single winner.
why_it_matters: The window's "which agent" fight is often a harness-surface fight; an operator who lives in a terminal is not buying the same product as one who lives in the desktop app, even when both logos say Codex.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2094254532020818191
event_date: 2026-08-31
date_precision: day
kind: claim
stance: comparison
frameworks: codex, claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The Codex lead said Codex's 20X multiplier applies to weekly limits, that both Pro plans lack the 5-hour windows Claude uses, and that Pro 20X is meant to be twenty times Plus rather than a marketing fraction.
why_it_matters: If that is how billing actually works, comparing Claude 20x to Codex 20x as if they were the same unit is a planning error; it still has to be checked against the live quota UI, not the slogan.
===END===

===POST===
handle: @iuditg
post_url: https://x.com/iuditg/status/2094297124221641158
event_date: 2026-08-31
date_precision: day
kind: voice
stance: criticism
frameworks: codex, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A founder said Codex was still burning about three times as many tokens as Claude Code on similar work because it over-engineers and takes more iterations to reach a comparable result, so the issue is efficiency, not only the published quota size.
why_it_matters: Generous weekly limits do not help if the harness spends them on extra loops; operators deciding between the two should measure tokens per accepted change, not list-price headroom.
===END===

===POST===
handle: @iuditg
post_url: https://x.com/iuditg/status/2094710370451718357
event_date: 2026-09-01
date_precision: day
kind: voice
stance: comparison
frameworks: codex, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: The same operator said a Codex run using Sol as orchestrator and Luna as worker emptied the weekly limit in under two days despite token-saving tricks, while a parallel Claude Code project on Fable and Opus had used about a fifth of its weekly limit.
why_it_matters: This is the practical form of the efficiency complaint: if Codex runs out first on matched work, the migration story from Claude is a quota story, not a model-quality story.
===END===

===POST===
handle: @OpenAI
post_url: https://x.com/OpenAI/status/2095968413646737608
event_date: 2026-09-04
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: OpenAI said GPT-6 Astra was live for Pro, Enterprise, and Business Premium users in Codex and ChatGPT Work, and in the API, with Plus and remaining Business users still waiting a few days.
why_it_matters: Astra availability is plan-gated, not a single Codex switch; operators on Plus should not plan as if the flagship model is already on their install.
===END===

===POST===
handle: @twostraws
post_url: https://x.com/twostraws/status/2096678351163236654
event_date: 2026-09-06
date_precision: day
kind: voice
stance: criticism
frameworks: codex, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A Swift educator said Astra beats Sol but Codex's CLI still lags Claude's, and asked the team to copy Claude's subagent management and sticky prompt headers rather than treat recaps as enough.
why_it_matters: This is the counter to the desktop-first pitch: CLI-native operators are still missing harness UX that Claude already ships in a terminal, so switching models does not switch the product.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2096844099626098770
event_date: 2026-09-07
date_precision: day
kind: voice
stance: comparison
frameworks: codex, claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Replying to that CLI complaint, the Codex lead said people can run Astra inside Claude Code if they insist, but that they miss computer use, subagent management, voice, and non-blocking context questions that he said live on the Codex desktop app.
why_it_matters: The team is telling operators the model is portable and the superpowers are not; that is a bet that the closed app, not the public CLI, is the product worth comparing.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2097084139627561041
event_date: 2026-09-07
date_precision: day
kind: voice
stance: criticism
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: The Codex lead pushed back on a story that OpenAI skipped internal tooling teams while waiting for AGI: he said Codex began as an internal tool to accelerate infrastructure, that a Meta-versus-everyone split is not the useful frame, and that a lot of internal tools were built rather than postponed.
why_it_matters: If Codex is an internal-tools program that escaped, operators should read deletions and thickenings in the tree as OpenAI's own factory design, not as a consumer CLI that accidentally grew a control plane.
===END===

===POST===
handle: @OpenAI
post_url: https://x.com/OpenAI/status/2097431322117476423
event_date: 2026-09-08
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: OpenAI said Astra had finished rolling out to Plus, Pro, Business, and Enterprise users in Codex and ChatGPT Work.
why_it_matters: The Plus lag from four days earlier is the operator fact: a feature named live on Pro is not live on Plus until this kind of follow-up, and it still needs a changelog or in-app model picker to prove the channel.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2097482341916852719
event_date: 2026-09-09
date_precision: day
kind: voice
stance: comparison
frameworks: codex, claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: The Codex lead said Anthropic's new Claude Code had reached a background computer-use level he compared to Codex from May, framed shipping first as a way to force other labs to follow, and said GPT models had computer use solved in practice about four months earlier.
why_it_matters: The public argument is no longer "does Codex have computer use" but whether the May version is the one operators can actually run, and whether Claude's copy changes who should own that workflow.
===END===

===POST===
handle: @theo
post_url: https://x.com/theo/status/2097483358150537300
event_date: 2026-09-09
date_precision: day
kind: claim
stance: question
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said he had just learned that OpenAI or Codex encrypts prompts sent to subagents, and guessed the point is to block distillation.
why_it_matters: If parent-to-child prompts are opaque, operators cannot audit what a subagent was told, which collides with the usual "the thread is the receipt" mental model and needs a protocol or docs check.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2097752790177370535
event_date: 2026-09-09
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The Codex lead said some banked usage resets had failed to apply that morning in ChatGPT Work and Codex, and that everyone who used one in the broken window would get another reset plus an apology email.
why_it_matters: Banked resets are part of the run contract, not a courtesy; if they can silently no-op, operators should not plan a week of work against a reset they have not seen land in the quota UI.
===END===

===POST===
handle: @OpenAIDevs
post_url: https://x.com/OpenAIDevs/status/2098130570048045453
event_date: 2026-09-10
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The developer account said a public-beta Agents API lets builders run cloud agents on the Codex harness with OpenAI managing orchestration, long-running sessions, and context.
why_it_matters: That is Codex sold as infrastructure: teams still maintaining their own loop, compaction, and retry stack have to decide whether to call this API or keep a inspectable copy of the public tree.
===END===

===POST===
handle: @OpenAIDevs
post_url: https://x.com/OpenAIDevs/status/2098130625144451444
event_date: 2026-09-10
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: In the same thread they said OpenAI-hosted sandboxes can run code, handle files, and produce artifacts, with the customer supplying files, packages, skills, and plugins while OpenAI provisions the box.
why_it_matters: Hosted versus bring-your-own sandbox is now a first-class fork; operators who need credentials or VPC placement should not assume the beta's default box is the one they can actually run.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2098300998968357218
event_date: 2026-09-11
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The Codex lead said GPT-5.3-Codex-Spark would be retired the following week because usage had fallen and newer models were better, and joked about the name.
why_it_matters: Anyone with Spark pinned in a profile, CI job, or AGENTS.md default has a hard cutoff to find and replace before the channel disappears.
===END===

===POST===
handle: @_orcaman
post_url: https://x.com/_orcaman/status/2098412861412233431
event_date: 2026-09-11
date_precision: day
kind: voice
stance: comparison
frameworks: codex, claude-code, cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: The Accomplish AI researcher said a Claude Code sandbox-escape report took about 50 days to ship a fix, while similar Cursor and Codex reports closed in about a week.
why_it_matters: Patch latency is part of the trust model; if that gap holds, "which sandbox is safer" is not only about the bug class, it is about how long an operator sits on a known escape.
===END===

===POST===
handle: @Im_IrushiK
post_url: https://x.com/Im_IrushiK/status/2098757659906461804
event_date: 2026-09-12
date_precision: day
kind: claim
stance: criticism
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A practitioner said the usage drain looked like a Codex harness problem rather than Astra: while waiting on background work the harness kept making model calls that replayed the full conversation, and the goal mechanism could start another turn and repeat the loop.
why_it_matters: If idle polling and auto-started goal turns re-send context, turning the model down will not fix the bill; operators should look for a wait-without-reprompt path, or stop using goals on long background jobs, after checking whether that loop still exists in the current CLI.
===END===

===POST===
handle: @Mr_Salio
post_url: https://x.com/Mr_Salio/status/2098775770743124013
event_date: 2026-09-12
date_precision: day
kind: claim
stance: comparison
frameworks: codex, claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He said a same-price Plus comparison on one task left Codex at 94 percent of its 5-hour window on Sol Medium while Claude used about half of its 5-hour window on Opus, and guessed Astra would have emptied Codex immediately.
why_it_matters: Plus users still talk in 5-hour windows even after the Pro-plan clarification; the matched-task burn rate is the number to verify before treating Codex Plus as the cheaper Claude substitute.
===END===

===POST===
handle: @_orcaman
post_url: https://x.com/_orcaman/status/2099856720176546300
event_date: 2026-09-15
date_precision: day
kind: claim
stance: criticism
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Accomplish AI said this was their third sandbox-escape writeup, after Claude Code and Cursor, and that the Codex CLI escape was in the open-source tree while a second escape in the closed desktop used a heap attack; they called the CLI generally more secure than its peers and said both issues were fixed in eight days.
why_it_matters: Read-only and workspace-write are not the same as host isolation; operators should confirm they are on CLI 0.149.0+ and Desktop 26.818.21641+ and should not treat the public tree as the whole product, because the nastier hole was described as closed-source.
===END===

===POST===
handle: @ChatGPT
post_url: https://x.com/ChatGPT/status/2099954190600876533
event_date: 2026-09-15
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The ChatGPT account said GPT-5.5 leaves ChatGPT, ChatGPT Work, and Codex on all plans on October 14, and told Codex users to move to GPT-5.6 Sol or GPT-6 Astra.
why_it_matters: Anything still pinned to 5.5 in Codex configs, CI, or muscle memory has a dated cutoff, but the next post in this sweep says the API-key path is not the same cutoff.
===END===

===POST===
handle: @OpenAIDevs
post_url: https://x.com/OpenAIDevs/status/2099954342170067174
event_date: 2026-09-15
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The developer account quoted that farewell and said GPT-5.5 remains on the API platform and in Codex sessions authenticated with an API key.
why_it_matters: Subscription Codex and API-key Codex are different retirement clocks; a team that can keep 5.5 only on the key path has to decide whether that is a supported channel or a leftover.
===END===

===POST===
handle: @atKensai
post_url: https://x.com/atKensai/status/2100655093074829790
event_date: 2026-09-17
date_precision: day
kind: voice
stance: criticism
frameworks: codex, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A user told the Codex lead that Codex drains usage faster than Claude Code in his runs because it babysits processes instead of setting monitors and waiting, which he blamed on missing harness capabilities.
why_it_matters: That is a concrete mechanism next to the polling claim: if wait-for-job is implemented as more model turns, no quota dashboard will save an unattended build.
===END===

===POST===
handle: @joey_trasatti
post_url: https://x.com/joey_trasatti/status/2100708241944797397
event_date: 2026-09-17
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A Codex engineer said people hitting the cap should open an analytics tab in the Codex app to see where usage went, and that they need the latest app version.
why_it_matters: Visibility is not a fix for burn, but it is the first operator control the team has shipped for the quota fight; it is also app-gated, so CLI-only users do not get the same instrument.
===END===

===POST===
handle: @TheRohanVarma
post_url: https://x.com/TheRohanVarma/status/2101496316409020730
event_date: 2026-09-20
date_precision: day
kind: voice
stance: question
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A Codex teammate said he is building a personal software factory on Codex for group projects and asked for an agent-first Slack with real MCP and webhook access, because computer use against Slack currently feels like the most general way for his Codex agent to participate.
why_it_matters: The team's own workflow still routes a coding agent through a GUI, which is a tell that identity, rate limits, and chat UX for agents are now the bottleneck, not the edit tool.
===END===

===POST===
handle: @analogalok
post_url: https://x.com/analogalok/status/2102006741193957839
event_date: 2026-09-21
date_precision: day
kind: claim
stance: comparison
frameworks: codex, claude-code, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said a UC Berkeley and Arena "Harness Tax" study ran the same models through Claude Code, Codex CLI, and the open-source Pi harness, and that GPT-5.6 Sol scored higher and cheaper on Pi than on Codex CLI, which he blamed on first-call instruction bloat.
why_it_matters: If the official harness is a tax on API spend rather than a quality win, operators paying per token should not assume Codex CLI is the right place to run OpenAI models; the paper and method still have to be checked.
===END===

===POST===
handle: @tmr31337
post_url: https://x.com/tmr31337/status/2102088355924390269
event_date: 2026-09-21
date_precision: day
kind: voice
stance: comparison
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: An operator said Astra quota pain eased after he left the desktop app, dropped plugins, skills, and a router, and ran a plain Codex CLI with a large context window, and that the CLI felt as fast as desktop fast-mode without the same burn.
why_it_matters: This cuts against the lead's desktop-superpowers pitch: if the app's extras are the quota leak, the inspectable CLI is the cheaper control plane for the same model.
===END===

===POST===
handle: @vincent_spruyt
post_url: https://x.com/vincent_spruyt/status/2102096653045936465
event_date: 2026-09-21
date_precision: day
kind: voice
stance: frustration
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said he had just used his last banked Codex reset, runs two 20X subscriptions, and still empties them mid-week on Astra medium with no fast mode, no subagents, and cleaned-up skills and AGENTS.md.
why_it_matters: Stacking Pro 20X and burning banked resets is the opposite of the "20X means 20X" reassurance; if that is a common pattern, the plan math does not survive real Astra work.
===END===

===POST===
handle: @WhiteNightNiki
post_url: https://x.com/WhiteNightNiki/status/2102111428261925050
event_date: 2026-09-21
date_precision: day
kind: voice
stance: comparison
frameworks: codex, claude-code, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Replying to the Harness Tax thread, an engineer said the only remaining reason to use Claude Code or Codex is the subscription bundle, and that API-metered work is better on a custom harness or Pi.
why_it_matters: That splits Codex into two products: a prepaid quota vehicle and an agent runtime. Operators on API keys should not inherit the subscription default without measuring the wrapper tax.
===END===

COVERAGE_NOTE: Searched X in 2026-08-20..2026-09-21 for github.com/openai/codex (CLI, desktop app, harness), not WordPress Codex, Meta's old Codex, or similarly named tools. Handles: from:thsottiaux, from:OpenAIDevs, from:OpenAI, from:ChatGPT, from:CodexReleases, from:TheRohanVarma, from:joey_trasatti, from:gdb, from:theo, from:_orcaman, plus keyword/semantic sweeps on Codex CLI, sandbox, Guardian, AGENTS.md, usage/quota, Agents API, Heapjack/Overpatch, and CLI-vs-app. Could not reach Discord, GitHub Discussions, or full reply graphs (Tibo's 14 Sep "what should we remove" thread was mostly later, out-of-window, or contentless). Thin spots: 20-28 Aug besides the platform blog and 0.150.0 AGENTS.md note; almost no public Guardian V2 talk this window; no maintainer post on Heapjack/Overpatch found; CodexReleases is unofficial changelog mirroring and was not used as a primary lead; JP/CN operator threads under-sampled. Dropped as identity or no-argument: ArmorCodex ads, a Muse-leak post that only mentioned a bundled CLI version, GPT-Rosalind and Astra-for-Law marketing, workout/voice ads, and Tibo reset-celebration posts with no mechanism.
