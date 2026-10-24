I'll chase practitioner conversation on those non-vendor agents in the Sept–Oct window, starting with the watchlist IDs and then pulling originating posts plus the counter-reads.I'll map these agents against the watchlist and adjacent sources, then pull originating posts and the counter-reads in the window.I'll check the cycle's existing OpenCode intake and recent social harvests, then search X for originating posts in the window.I'll look up official accounts and run dated keyword searches for each agent, then follow the replies.I'll pull dated posts from the official accounts and from practitioner switching threads next.Official accounts are mostly product marketing. Next I'll hunt practitioner switching stories, daily-driver claims, and the counter-reads.I have the originating posts, maintainer follow-ups, and the counter-reads. Compiling the records next, dropping anything without a resolvable status URL.===POST===
handle: @opencode
post_url: https://x.com/opencode/status/2109649032931119362
event_date: 2026-10-12
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code,codex,cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official OpenCode account posted a 2.0 release pointing at a company note. Later recaps in the same thread said the rewrite shares one local background service across terminal, web, and desktop, adds background agents and a Code Mode that scripts MCP and OpenAPI calls, and that 1.x plugins plus the old server API do not carry over.
why_it_matters: An operator deciding whether to leave Claude Code or Codex for an open harness has to check whether 2.0 is actually tagged and whether their plugins still load; start at https://anoma.ly/notes/opencode-2-0/ and the anomalyco/opencode tags.
===END===

===POST===
handle: @jayair
post_url: https://x.com/jayair/status/2107184410680590753
event_date: 2026-10-05
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code,codex,cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: OpenCode's CEO said the product launched about sixteen months ago and now has 17 million monthly active users. A reply joked that a large share of those users were the replier reselling tokens.
why_it_matters: This is the first big adoption number in the window; it is a vendor metric with no published method, so it cannot be treated as a reason to switch until a primary surface states how MAU is counted.
===END===

===POST===
handle: @thdxr
post_url: https://x.com/thdxr/status/2110544790764794231
event_date: 2026-10-15
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code,codex,cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: An OpenCode maintainer said usage had jumped again after the 2.0 release and that they were about to hit two million daily active users. Replies treated the jump as a harness-loop story rather than a model-drop story.
why_it_matters: If 2.0 really moved daily use at that scale, operators on Claude Code or Codex would have a reason to trial the upgrade path; the figure still needs a method, not a screenshot of a tweet.
===END===

===POST===
handle: @jayair
post_url: https://x.com/jayair/status/2112338376833777908
event_date: 2026-10-20
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code,codex,cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Five days after the "about to hit 2M" post, the CEO stated OpenCode now has two million daily active users. The maintainer @thdxr replied that the figure was up 25 percent from a month earlier.
why_it_matters: This is the number people in the thread treated as proof OpenCode is the serious non-vendor daily driver; it remains an unmethodized vendor claim until a blog, dashboard, or repo receipt shows how DAU is defined.
===END===

===POST===
handle: @farseen
post_url: https://x.com/farseen/status/2112345014655447289
event_date: 2026-10-20
date_precision: day
kind: voice
stance: criticism
frameworks: claude-code,codex,cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Replying to the 2M DAU claim, he said the company should try turning off all the free models and then recount. A Spanish-language reply argued the free tier is a funnel into the cheaper Go plan, not fake usage.
why_it_matters: The counter-read in this thread is that OpenCode's headline users are subsidized-inference tourists, which would change whether an operator treats 2M as a reason to migrate a team.
===END===

===POST===
handle: @opencode
post_url: https://x.com/opencode/status/2111519637049319818
event_date: 2026-10-17
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code,codex,cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said a distillation-related breach the night before hit 1.4 percent of OpenCode Console users who had external providers linked, that those users were emailed, and that they were working with Anthropic, OpenAI, and Google. They said people who got no email were not in the affected set, and that more detail had to wait because the incident was still open.
why_it_matters: Anyone who pasted provider keys into OpenCode Console has a revoke-at-the-provider job even if they never used the CLI; wait for an incident writeup, not this status, before treating Console as safe.
===END===

===POST===
handle: @nitsan2dots
post_url: https://x.com/nitsan2dots/status/2113915574673649673
event_date: 2026-10-24
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code,codex,cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A week after the breach post, he said a legacy Console system was involved, that keys for that 1.4 percent may have been exposed, that one user reported about 1700 dollars of spend, and that deleting a key inside Console does not revoke it at the provider. His operator advice was one key per tool and a spend cap on each.
why_it_matters: If Console delete is not revoke, a team that "rotated" only in OpenCode's UI still has live keys; confirm against the incident note and the provider dashboards, not the in-app delete button.
===END===

===POST===
handle: @thdxr
post_url: https://x.com/thdxr/status/2110793318959632615
event_date: 2026-10-15
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code,codex,cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The same maintainer said he was walking outside, driving OpenCode on his phone against a server in his office, and posting progress into a Slack thread with the team's OpenCode bot. A follow-up said the link was OpenCode's built-in remote path over HTTPS via opentunnel.xyz, not a Tailscale SSH hop.
why_it_matters: This is the maintainer's own daily-driver story: phone, remote server, Slack, no SSH; an operator copying it should inspect the remote and Slackbot docs and the opentunnel.xyz path before treating it as an equivalent to Claude Code's desktop or Codex's Mac app.
===END===

===POST===
handle: @thdxr
post_url: https://x.com/thdxr/status/2113781657341755423
event_date: 2026-10-23
date_precision: day
kind: voice
stance: frustration
frameworks: claude-code,codex,deepseek-harness
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Asked to squash rumors that OpenCode degrades or quantizes the models it serves, he said statements have not helped and that they will not know why people complain until they run 100 percent of inference themselves. A parent post had claimed they only slow tokens under load and never cut quality, and that third-party providers are the uncontrolled part.
why_it_matters: The maintainer is saying the hosted Go/Free quality argument cannot be closed from their side yet, so an operator who needs consistent Opus or DeepSeek behavior still has a reason to hit the model maker's API or a local harness instead of OpenCode's pool.
===END===

===POST===
handle: @TheHackersNews
post_url: https://x.com/TheHackersNews/status/2113219984365359340
event_date: 2026-10-22
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code,codex,cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They reported an OpenCode flaw where a malicious MCP server can run code on Windows and WSL at sign-in, said it was fixed in 1.18.33, and said there is no CVE or advisory so scanners will not flag old installs. Replies treated every remote MCP server as a stranger with a shell.
why_it_matters: Windows and WSL operators still on 1.x should check whether they are on 1.18.33 or have already moved to 2.0, and should not trust a green scanner; the writeup is at https://thehackernews.com/2026/10/opencode-flaw-lets-malicious-mcp.html.
===END===

===POST===
handle: @AmpCode
post_url: https://x.com/AmpCode/status/2112551261749047333
event_date: 2026-10-20
date_precision: day
kind: voice
stance: announcement
frameworks: cursor,codex,claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Amp posted a long interview in which Quinn Slack and Thorsten Ball described a 21-person team with one meeting a week, no quarterly goals, no pull requests, no mandatory review, a hundred releases a day, and a habit of killing features. They said the nearest thing to a roadmap was February's "The Coding Agent Is Dead" essay, and later clips said they ask the agent for end-to-end proof before a human looks.
why_it_matters: This is Amp's direction statement for the window: they are arguing the coding-agent product itself is the wrong unit, which is the opposite of OpenCode's 2.0 CLI/desktop push; the talk is also on YouTube as https://www.youtube.com/watch?v=deiLxNZH_DM.
===END===

===POST===
handle: @kouky
post_url: https://x.com/kouky/status/2113900977275416718
event_date: 2026-10-24
date_precision: day
kind: voice
stance: praise
frameworks: codex,claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A former Square and Canva engineer said he had been a committed Codex Mac app user and is now moving projects to Amp because cloud agents and orbs keep running after he closes the laptop, including from his phone at school pickup. Amp's CEO replied to welcome him.
why_it_matters: This is the strongest non-vendor switching story against the OpenCode-is-winning read: the reason given is remote continuity, the same job OpenCode's phone-to-office demo claims, so an operator choosing between them is choosing whose remote runtime they trust.
===END===

===POST===
handle: @sqs
post_url: https://x.com/sqs/status/2113239179752792317
event_date: 2026-10-22
date_precision: day
kind: voice
stance: criticism
frameworks: claude-code,codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Amp's CEO told someone trying the Amp CLI that they would miss most of the product's value there, while conceding the CLI still works. The parent said orbs were why they were trying Amp in the first place.
why_it_matters: A maintainer steering people off their own CLI is a directional tell: Amp is not trying to win the terminal daily-driver fight OpenCode, Cline, Crush, and Qwen Code are in.
===END===

===POST===
handle: @warpdotdev
post_url: https://x.com/warpdotdev/status/2112605226196750762
event_date: 2026-10-20
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code,codex,cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Warp said that three months after adopting software factories they were merging 40 percent more PRs at 67 percent lower cost per PR, and credited agent-quality measurement, model benchmarks, and self-improvement loops. A follow-up asked people to request early access.
why_it_matters: This is the only non-vendor agent in the window citing a before-and-after on merge rate and cost; it is a first-party figure with no method in the post, so an operator should not copy the architecture until Warp publishes how those percentages were measured.
===END===

===POST===
handle: @BHolmesDev
post_url: https://x.com/BHolmesDev/status/2113281001715597358
event_date: 2026-10-22
date_precision: day
kind: voice
stance: comparison
frameworks: claude-code,codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Warp's factory lead said agent conversations should live in a shared store, not on laptops, so you can mine failure modes and replay runs on other models. He said he had met a team zipping Claude and Codex sessions into S3, and that Warp Factories instead runs in cloud sandboxes with an API and an inbox. A reply pointed at Atuin threads doing cross-device resume between Claude and Codex.
why_it_matters: The argument is that the vendor CLIs' local session files are the bottleneck, which is a different bet than OpenCode's shared local daemon; Atuin is the counter-example that you can sync sessions without moving the runtime to Warp.
===END===

===POST===
handle: @zachlloydtweets
post_url: https://x.com/zachlloydtweets/status/2113042668993614069
event_date: 2026-10-21
date_precision: day
kind: voice
stance: criticism
frameworks: claude-code,codex,cursor
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Warp's founder said not to start a software factory by pointing agents at the whole backlog, because a pile of unreviewed PRs will make the team treat the factory as a slop cannon. He said start on tasks that are likely right on the first pass.
why_it_matters: This is the in-house counter-read to Warp's own 40-percent-more-PRs pitch: volume without review is how you lose the room, so an operator copying factories should pick a narrow first automation, not a backlog vacuum.
===END===

===POST===
handle: @FactoryAI
post_url: https://x.com/FactoryAI/status/2110765256402473416
event_date: 2026-10-15
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code,cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Factory said Blackstone is running Droid in its own data centers with no cap on model choice or workflow, after trialing other offerings. A follow-up linked a case study.
why_it_matters: This is the enterprise adoption claim for Droid in the window; verify against https://factory.com/case-studies/blackstone before treating on-prem Droid as a proven alternative to Cursor or Claude Code for a locked-down fleet.
===END===

===POST===
handle: @forsakenjvg
post_url: https://x.com/forsakenjvg/status/2111990960670244973
event_date: 2026-10-19
date_precision: day
kind: voice
stance: comparison
frameworks: omp,claude-code,codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A long-time user said Droid has been their harness since mid-2025, that they had tried OpenCode, Oh My Pi, Amp, and others, and that nothing else had been better in their hands. They asked for Command Code's benchmark method so Droid could be included, and said DeepSeek V4.1 Flash plus Opus 5.5 is their current workhorse. Factory's @droid account quote-posted it as a testimonial.
why_it_matters: This is the only on-thread daily-driver claim that ranks Droid above OpenCode, Amp, and Oh My Pi with a reason (lived comparison since 2025), so it is the counter to the OpenCode-wins ranking; it is still one person's setup.
===END===

===POST===
handle: @cline
post_url: https://x.com/cline/status/2112967124360802531
event_date: 2026-10-21
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code,cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Cline said a local model called Flint scored 54.9 percent on Terminal-Bench 2.1 with about 2B active parameters, that this beat other small MoEs and two of three dense ~30B models, and that it runs at 125-plus tokens per second on a MacBook Pro with about 24GB. A follow-up said to install Cline (npm or the new desktop app), point Ollama at local models, and pull Flint from Hugging Face. Flint's author thanked Cline for day-zero support.
why_it_matters: Cline's bet in this window is local small models plus a desktop app, which is a different daily-driver than OpenCode's hosted free pool; check https://huggingface.co/RecursiveSI/flint and https://docs.cline.bot/running-models-locally/overview before treating that Terminal-Bench figure as a reason to drop a cloud subscription.
===END===

===POST===
handle: @QwenDevs
post_url: https://x.com/QwenDevs/status/2112143796591014032
event_date: 2026-10-19
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code,gemini-cli
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Qwen's developer account said a community PR by destire-mio adds email remote control to Qwen Code, with an allowlist, automated filtering, and duplicate-task prevention, so you can send work from a phone and reply in the same thread. The attached t.co PR link was not expanded in this sweep. A quoted take by @superalesha treated the merged-from-outside PR as the point of an open harness versus waiting on Anthropic.
why_it_matters: If the email channel is real, Qwen Code is shipping the same phone-remote job OpenCode and Amp are demoing; confirm against https://github.com/QwenLM/qwen-code and https://qwenlm.github.io/qwen-code-docs/en/users/features/channels/email/ rather than the tweet. A nearby post also said Qwen Code started as a Gemini CLI fork.
===END===

===POST===
handle: @Sithira269
post_url: https://x.com/Sithira269/status/2113697019231670375
event_date: 2026-10-23
date_precision: day
kind: claim
stance: comparison
frameworks: claude-code,gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Under Kimi's K3.1 Pro launch, he said agent setup moves the score a lot, and that the same Qwen3 Coder Next model posted 25.8 under Qwen Code and 30.9 under Claude Code on Terminal-Bench 2.0.
why_it_matters: This is the counter-read on Chinese-harness leaderboards: swapping the CLI can be a bigger swing than swapping the model, so an operator should not pick Qwen Code or Kimi CLI from a vendor chart run in a different harness.
===END===

===POST===
handle: @superalesha
post_url: https://x.com/superalesha/status/2113677684144312545
event_date: 2026-10-23
date_precision: day
kind: claim
stance: frustration
frameworks: claude-code,codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said Kimi K3.1 Pro was live in Kimi CLI, spun up two High Speed sessions, and burned a max-plan five-hour quota in about ten minutes. He blamed compute shortage and throttling. A reply said to wait an hour or two while more infra came up.
why_it_matters: A practitioner who wanted Kimi CLI as a daily driver hit a quota wall immediately; until Moonshot publishes the quota math, treat Kimi CLI as burst-limited, not as a Claude Code replacement for long sessions.
===END===

===POST===
handle: @kilocode
post_url: https://x.com/kilocode/status/2111165272484725019
event_date: 2026-10-16
date_precision: day
kind: claim
stance: announcement
frameworks: cursor,codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Kilo, noting the Anaconda acquisition in its display name, said OpenAI models leave Cursor on 12 November and offered Kilo Enterprise free for the rest of a Cursor contract, up to a year, because Kilo can attach a ChatGPT plan plus 500-plus other models. A follow-up linked kilo.ai/cursor-exodus. Independent switching stories under that offer were not found.
why_it_matters: This is marketing aimed at a Cursor cutoff, not a practitioner argument that Kilo is a better harness; check https://kilo.ai/cursor-exodus and Cursor's own model-availability note before treating Kilo as the default landing pad.
===END===

===POST===
handle: @charmcli
post_url: https://x.com/charmcli/status/2105304412402974982
event_date: 2026-09-30
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code,codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Charm said Herdr is now native in Crush, so you can watch parallel Crush instances from one TUI, and linked herdr.dev. A reply called it a comeback for the best-looking coding agent. Crush is Charm's agent, formerly the Go project named opencode, which is a different codebase from anomalyco/opencode.
why_it_matters: Crush's window is TUI craft (Herdr, themes, ANSI, a later Program Status Protocol hook) rather than daily-driver migration; confirm at https://github.com/charmbracelet/crush and https://herdr.dev/ and do not confuse it with OpenCode 2.0.
===END===

===POST===
handle: @AgenticAIFdn
post_url: https://x.com/AgenticAIFdn/status/2113722193716633730
event_date: 2026-10-23
date_precision: day
kind: claim
stance: announcement
frameworks: claude-code,codex,openclaw
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The Agentic AI Foundation, which now hosts Block's goose, said a new open-source Dapr integration lets a goose agent resume after a crash without replaying finished turns, and that it works with goose's existing providers and tools. The example lives in a Rust crate. No practitioner daily-driver replies showed up under the post.
why_it_matters: Goose's window is governance and durable execution, not switching stories; verify at https://github.com/diagridio/rust-ai and https://aaif.io/blog/introducing-dapr-durable-execution-for-goose, and keep it distinct from crypto tokens named goose. Repo identity in this window is github.com/aaif-goose/goose, formerly block/goose.
===END===

===POST===
handle: @AnonyfoxCom
post_url: https://x.com/AnonyfoxCom/status/2112879852567101668
event_date: 2026-10-21
date_precision: day
kind: claim
stance: criticism
frameworks: claude-code,codex,cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said he checked Block/goose's agent-instruction file against the code, found 59 of 65 claims still true and 6 stale, and that Claude Code, Codex, and Cursor would have trusted all 65. He pointed at an audit tool he built for that drift. Replies said stale instructions are worse than none because the agent follows them with confidence.
why_it_matters: Goose is being used here as a specimen for instruction drift, not as someone's daily driver; if the 6 stale claims reproduce, any team whose CLAUDE.md or AGENTS.md is treated as ground truth has a merge-time audit job.
===END===

===POST===
handle: @Yuchenj_UW
post_url: https://x.com/Yuchenj_UW/status/2106435001340621147
event_date: 2026-10-03
date_precision: day
kind: voice
stance: criticism
frameworks: claude-code,codex,cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A Databricks engineer said he had not touched Claude Code or Codex CLI in a while, called the terminal the wrong interface because tabs are fleeting while context has to persist, said he also does not need an IDE like Cursor to walk the tree, and named the Codex desktop app as the best agent UI so far. Claude Code's Boris Cherny asked him to try Claude Code Desktop; a reply insisted the terminal is still the right place to orchestrate sessions.
why_it_matters: This is the highest-reach counter-read on the whole non-vendor CLI race: if the terminal is the wrong primitive, OpenCode 2.0, Crush, Cline CLI, Qwen Code, and Kimi CLI are all fighting over a dying surface, and Amp orbs plus Warp factories are the bets that match his argument.
===END===

===POST===
handle: @OrcaRouter
post_url: https://x.com/OrcaRouter/status/2105364729422344549
event_date: 2026-09-30
date_precision: day
kind: claim
stance: comparison
frameworks: claude-code,codex,cursor,deepseek-harness
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They said they extracted and open-sourced system prompts from twelve harnesses, including Claude Code, Codex, Cursor, Devin, Factory Droid, OpenCode, Cline, Kilo, and DeepSeek DSH, and compared secret-sauce loops against how model-agnostic each one is. They pointed at a GitHub vault and a replay tool.
why_it_matters: This is the originating comparison post for the window's off-vendor set; treat the prompt dump as a lead, then verify files at https://github.com/Continuum-AI-Corp/OrcaPromptVault and https://github.com/Continuum-AI-Corp/OrcaReplay before repeating any "secret sauce" claim as fact.
===END===

===POST===
handle: @zeddotdev
post_url: https://x.com/zeddotdev/status/2113659997338898631
event_date: 2026-10-23
date_precision: day
kind: claim
stance: announcement
frameworks: cursor,claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: After a user said they were put off by Zed pushing AI, the official account said a single disable_ai setting turns off every AI-related feature. Other Zed posts in the window were about Delta recursive subthreads and new model providers, not about people switching daily drivers to Zed agents.
why_it_matters: Zed is arguing it can stay an editor with agents optional, which is the opposite of Amp/OpenCode/Warp trying to make the agent the product; confirm the setting in Zed's docs before assuming a Zed install implies an agent runtime.
===END===

COVERAGE_NOTE: Window 2026-09-24 to 2026-10-24. Searched official accounts @opencode @thdxr @jayair @anomalyco @AmpCode @thorstenball @sqs @FactoryAI @droid @cline @sdrzn @kilocode @charmcli @zeddotdev @warpdotdev @zachlloydtweets @Kimi_Moonshot @Alibaba_Qwen @QwenDevs @AgenticAIFdn, plus keyword and semantic queries for daily-driver, switched, vs Claude/Codex/Cursor, OpenCode 2.0, 2M DAU, breach, orbs, factories, Crush, goose/AAIF, Qwen Code, Kimi CLI. Could not find a Block goose product account; used @AgenticAIFdn and the string block/goose / aaif-goose. Could not resolve the destire-mio Qwen Code PR behind t.co/cmBhPNY1Z2 (docs at qwenlm.github.io describe an email channel; an older QwenLM/qwen-code#2330 is a different browser remote-control PR). Crush keyword search is polluted by soap/poker/idiom; practitioner Crush talk beyond Charm's own shipping posts was not reached. @sdrzn was almost silent. Warp Factories is early-access, so independent user argument is thin. Timeline: Sep 30 OrcaRouter prompt dump and Crush+Herdr; Oct 3 Yuchen "terminal is the wrong interface"; Oct 5 OpenCode 17M MAU; Oct 12 OpenCode 2.0 originating post; Oct 14-15 2M incoming, DeepSeek-free, phone/Slack demo, Blackstone; Oct 16 Kilo Cursor-exodus offer; Oct 17 Console breach; Oct 19 Qwen email PR, Space Bunny token claim, Droid-vs-OpenCode user; Oct 20 2M DAU confirmed, Amp team video, Warp 40%/67% claim, daily-driver poll whose replies still named Claude Code/Pi/OMP; Oct 21 Cline Flint, goose instruction audit; Oct 22 MCP/Windows claim, Warp session-store argument, Amp CEO steering people off the CLI; Oct 23 goose+Dapr, Kimi CLI quota burn, harness-swings-the-benchmark, Dax on not controlling inference; Oct 24 Amp switch-from-Codex, Console-delete-is-not-revoke. Rank by serious practitioner argument in this window: 1 OpenCode (adoption numbers, 2.0 break, remote workflow, breach, quality rumors), 2 Amp (orbs/cloud vs Codex Mac, maintainer anti-CLI), 3 Warp (factory metrics and the slop-cannon counter), 4 Factory Droid (Blackstone plus one long-horizon daily-driver), 5 Cline (local Flint + desktop, little switching argument), 6 Qwen Code / Kimi CLI (open-PR story, harness effect, quota wall), 7 Kilo (Cursor-cutoff marketing, no independent switch stories found), 8 Crush (TUI shipping, almost no daily-driver debate), 9 Goose (AAIF/Dapr, used as an audit specimen, not a daily driver), 10 Zed (AI-optional setting; agent talk is Delta product, not migration). Identity ruled out: anomalyco/opencode is not charmbracelet/crush (the old Go opencode); Block/AAIF goose is not $GOOSE; @cline is cline.bot not Madelyn Cline; @AmpCode is Sourcegraph Amp not promo-code bots; @FactoryAI/@droid is not Star Wars comics; @kilocode (Anaconda) is not the 84-follower @kilocodehq that claims to be powered by OpenClaw. Thin: Sept 24-29 (few originating posts), Crush and Goose practitioner replies, Kimi CLI beyond the K3.1 night, Warp and Zed independent users, Cline founder voice. Reply trees were only first-page; quote-posts of the 2.0 note, the breach, and the Amp interview are larger than what was fetched.
