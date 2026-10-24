I'll chase the Pi coding-agent thread on X in the 2026-10-13 to 2026-10-24 window: originating posts, replies, maintainer claims, and the counter-read. Starting with the watchlist accounts and release keywords.The first maintainer pull was mostly off-topic. Next I’ll page through Pi’s own posts and search the release, MCP, and ecosystem keywords in the window.Release announcements are in. Next I’ll pull maintainer threads, quote-posts, ecosystem projects, and anyone arguing the other way.Ecosystem posts are turning up. I’ll fetch the key threads next and look for switchers, complaints, and the counter-read.The Durable and switcher threads are taking shape. I’ll pull Mario’s mid-window posts, the Vercel/Cloudflare follow-ons, and look specifically for complaints and the counter-read.Phone-as-harness and Claude-sub threads are in. I’ll grab the remaining origin posts, the Pi GUI/piclaw lane, and the counter-read on native vs third-party harnesses.I have enough originating posts, maintainer claims, switcher arguments, and counter-reads. Compiling the substantive records now.===POST===
handle: @PiChangelog
post_url: https://x.com/PiChangelog/status/2110812977909596531
event_date: 2026-10-15
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: An unofficial changelog account said Pi 1.3.0 shipped, with share-upload destination control, resumed sessions restoring active tools, model switches dropping prior thinking blocks, and Kimi Code moving to OpenAI Chat Completions plus a breaking base-URL change.
why_it_matters: Operators on 1.2.x would need to check the tagged notes at https://github.com/earendil-works/pi/releases/tag/v1.3.0 before upgrading, especially any kimi-coding URL override.
===END===

===POST===
handle: @pidotdev
post_url: https://x.com/pidotdev/status/2111100406612861105
event_date: 2026-10-16
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: The product account pointed operators at a weekend walkthrough for building a multiplayer chat agent with subagents on Cloudflare Durable Objects using Pi Durable, and followed up with a sample repo.
why_it_matters: This is the official in-window pitch that durability is a product you host, not only a CLI session file; verify against https://earendil.com/posts/pi-durable-on-cloudflare/ and https://github.com/earendil-works/pi-durable-cloudflare/.
===END===

===POST===
handle: @DanielGri
post_url: https://x.com/DanielGri/status/2111065631046955359
event_date: 2026-10-16
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: praise                 # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: A Sentry engineering director said he spent two weeks building Ultimate, a self-extensible harness on Pi Durable whose UI is almost all extensions, that hot-reloads even the server runtime while continuing to build itself, and called the result beautiful slop with a public repo.
why_it_matters: It is the first in-window worked example of the extension philosophy turning into a second harness, later written up at https://danielgriesser.com/posts/ultimate/.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2111189600685207559
event_date: 2026-10-16
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: praise                 # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Mario said he has been doing all his work for almost two weeks from a phone-hosted Pi build, LLM calls excepted, rewrote it twice on the phone, and does not plan to go back. The post quotes his 2026-10-05 unpublished design study.
why_it_matters: The maintainer is treating a phone as the durable control plane, which is the practical claim later episodes and Cloudflare posts keep citing.
===END===

===POST===
handle: @trq212
post_url: https://x.com/trq212/status/2111499591778734394
event_date: 2026-10-17
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, claude-code # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Thariq, then on Claude Code, replied to a code-mode cheer that in his experience it is just another shape of tool calling and has not been much more token-efficient.
why_it_matters: This is the in-window counter to the idea that native tool scripting is an automatic context win; an operator would want a measured turn count, not a slogan.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2111501246171410731
event_date: 2026-10-17
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: comparison             # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, claude-code # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Mario answered that for him code mode is a lot more token-efficient, specifically fewer turns even against parallel tool calls.
why_it_matters: The disagreement is about turns, not vibes, so a later capture should keep both posts and check them against a primary measurement.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2111595722806300811
event_date: 2026-10-17
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: Mario said quality-of-life work coming to Pi Durable the following week would include proper hibernation on serverless hosts such as Cloudflare Durable Objects or Vercel, plus telemetry, and that few bug fixes had been needed so far.
why_it_matters: Treat as a plan, not a ship; cross-check against later Durable releases and the Cloudflare Agents SDK 0.30 notes rather than this post.
===END===

===POST===
handle: @lovelylogicss
post_url: https://x.com/lovelylogicss/status/2111849281166663900
event_date: 2026-10-18
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: The Pi Pocket maintainer said 0.15 shipped early because he needed MCP for work, as a drop-in extension that reads Pi's mcp.json and lets you enable servers one by one.
why_it_matters: Native MCP is being consumed as an extension surface on mobile; verify against https://github.com/TannerMidd/pi-pocket/releases/tag/v0.15.0.
===END===

===POST===
handle: @sawyerhood
post_url: https://x.com/sawyerhood/status/2111883771331187125
event_date: 2026-10-18
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: question               # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, claude-code # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Sawyer asked whether he can run Pi against an existing Claude subscription and have it drain that sub instead of extra API usage, and whether that path is new.
why_it_matters: This is the originating question for the in-window Claude-sub-on-Pi thread; the answer is a product and ToS question, not a vibe.
===END===

===POST===
handle: @asm3r96
post_url: https://x.com/asm3r96/status/2111943031406383375
event_date: 2026-10-18
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, claude-code # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: A reply said the Pi creators themselves publish an extension for this, and linked the earendil-works/pi-claude-code repo.
why_it_matters: The claimed official path is https://github.com/earendil-works/pi-claude-code; later replies argue about latency, system-prompt stripping, and account risk.
===END===

===POST===
handle: @NYCounihan
post_url: https://x.com/NYCounihan/status/2111896812009521660
event_date: 2026-10-18
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: comparison             # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, claude-code, codex # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Julian said he bounced between Claude and Codex for a year on pricing and model-launch games, now reads lab usage as slower-on-purpose discrimination, and has moved to Pi with models served through AWS Bedrock.
why_it_matters: The switch reason is control of spend and serving, not a claim that Pi writes better code.
===END===

===POST===
handle: @ClementWalter
post_url: https://x.com/ClementWalter/status/2112083314039243156
event_date: 2026-10-19
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Quoting the official Durable-on-Cloudflare post, Clement said his fleet's read is that Pi Durable is one harness made durable, while they run a message bus across several harnesses, and that each model is best used with its own harness.
why_it_matters: This is the lock-in counter: durability of one runtime is not the same as routing work to the native harness per model.
===END===

===POST===
handle: @jayledev
post_url: https://x.com/jayledev/status/2112336035309056107
event_date: 2026-10-20
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: comparison             # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, claude-code # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: In the Claude-sub-on-Pi thread, Jay said other harnesses lost to Claude Code for him because Anthropic's native harness has proprietary instructions and workflow logic that third-party shells cannot fully copy.
why_it_matters: The argument is that draining a Claude sub through Pi still leaves the operator without the native harness, which is the opposite of the switcher consensus in this window.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2112559218649686467
event_date: 2026-10-20
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: neutral                # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: Asked what an agent re-reads after a crash, Mario said Pi Durable is tasks made of phases that store intent, run the effect, then store the result and next phase; on reopen it reruns the last phase of live tasks, and he said event sourcing does not fit long sessions.
why_it_matters: That is a concrete crash-recovery model to check against https://github.com/earendil-works/pi/blob/main/packages/durable/README.md, including the double-effect case a reply immediately raised.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2112581469432684724
event_date: 2026-10-20
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: comparison             # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, omp # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: After someone said Oh My Pi already saves sessions to a database, Mario split durable storage from durable execution: if the environment dies you should resume mid-tool, resume subagents, survive months, and move that state across laptop, phone, and cloud, not send the model a continue.
why_it_matters: This is the maintainer counter to the common "I already persist transcripts" read, and it is the distinction Vercel's wrapper announcement collides with later the same day.
===END===

===POST===
handle: @vercel
post_url: https://x.com/vercel/status/2112653833382027729
event_date: 2026-10-20
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, claude-code, codex, eve # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: Vercel said durable-harness can run Pi, OpenCode, Codex, Claude Code, eve, fx, or a custom harness on Vercel so agents resume after failures and run for hours to months.
why_it_matters: The competing product claim is that durability is a host wrapper around any harness, not a Pi-only primitive; verify against https://vercel.com/blog/making-every-harness-durable and https://github.com/vercel-labs/durable-harness.
===END===

===POST===
handle: @pidotdev
post_url: https://x.com/pidotdev/status/2112978311252979761
event_date: 2026-10-21
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: The product account said Recursive's first model Flint had extensive RL training on the Pi harness, is a 40B MoE with 2.5B active under Apache 2.0, and is free in Pi via Radius.
why_it_matters: If true, Pi is being used as a training target, not only a runtime; check the Flint announcement and Radius before treating that as an operator fact.
===END===

===POST===
handle: @PiChangelog
post_url: https://x.com/PiChangelog/status/2113041827783651774
event_date: 2026-10-21
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: The unofficial changelog account said Pi 1.4.0 is out, highlighting image input for classifier models in code mode, compaction and branch summaries using the model's output limit, code-mode scripts queuing for a free worker, and Rex terminal support, with a thread of session, tool, grep, and mcp.json BOM fixes.
why_it_matters: Official @pidotdev did not tweet this version number; operators should pin https://github.com/earendil-works/pi/releases/tag/v1.4.0, including the BOM-skips-MCP and RIPGREP_CONFIG_PATH defects named in the thread.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2113235904647119013
event_date: 2026-10-22
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: frustration            # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, deepseek-harness # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Mario posted that the tired idea is a durable harness and the wired idea is a durable plugin system, then told a DeepSeek-was-right reply that Pi had plugins first and DeepSeek is not durable.
why_it_matters: The maintainer is moving the scarce design problem from crash-safe agents to crash-safe extensions, which is the same gap Howaboua later says has no official plugin standard.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2113236214891610241
event_date: 2026-10-22
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: praise                 # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Mario showed a sloppy phone-hosted UI in which his devices are connected as environments any subagent can operate in, with the agents and the web/TUI server running on the phone, and credited PWAs.
why_it_matters: Replies asked whether this is finally Pi GUI; it is an unpublished personal PWA, not a tagged pi-gui release, and that distinction matters for anyone waiting on an official desktop.
===END===

===POST===
handle: @danielmulec
post_url: https://x.com/danielmulec/status/2113310568023216361
event_date: 2026-10-22
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: After Mario's plugin-system post, Daniel said that being so conditioned to Pi's minimalism, he honestly does not think of plugins when he thinks of Pi.
why_it_matters: The public identity of the project is still the thin core, even while the maintainer is designing durable extensions.
===END===

===POST===
handle: @rcarmo
post_url: https://x.com/rcarmo/status/2113348208743284911
event_date: 2026-10-22
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: praise                 # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Rui said piclaw is now debugging itself on Pi Durable, live, on Bun, and on Windows on ARM.
why_it_matters: piclaw is one of the named ecosystem threads; earlier in the window he also said he had hacked a delegate tool into it that was being refactored into Pi Durable.
===END===

===POST===
handle: @ai_suxiaole
post_url: https://x.com/ai_suxiaole/status/2113499148154761724
event_date: 2026-10-23
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: comparison             # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, claude-code, codex # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: A Chinese-language operator said Pi still loses to Codex and Claude's own clients in some scenes, is fine for small and medium work, and that people should pick by need rather than treat Pi as a full replacement.
why_it_matters: This is the plain counter-read to the all-roads-lead-to-Pi line, and a later reply in the same thread argued for layering light work on Pi and heavy refactors back on the native clients.
===END===

===POST===
handle: @bkase_
post_url: https://x.com/bkase_/status/2113551251384520860
event_date: 2026-10-23
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: praise                 # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, claude-code # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Brandon said he was switching his dev workflows to Pi after finding Armin's extension for using Claude Code subscriptions, and linked the same earendil-works/pi-claude-code repo.
why_it_matters: This is how the Oct 18 Sawyer question became a public migration, five days later, from a Superlinear host who had just spent an episode on Pi Durable.
===END===

===POST===
handle: @DanielGri
post_url: https://x.com/DanielGri/status/2113557233409614315
event_date: 2026-10-23
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: comparison             # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, claude-code # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: Daniel said he timed the Claude-sub extension and it added half a second to the first turn and half a second per tool call, which he called irrelevant in a long session for the sake of using the sub safely, with the rest working basically the same.
why_it_matters: It is the only numbered latency claim in the thread; it is informal and needs a primary rerun, not promotion into a product fact.
===END===

===POST===
handle: @EstebanForge
post_url: https://x.com/EstebanForge/status/2113646681090605182
event_date: 2026-10-23
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, claude-code # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Esteban argued it looks like a bad idea to force Claude Code off its system prompt because of Anthropic's classifier, and pointed at the official extension's usage-credit-guard docs, Anthropic's legal page, an HN thread, and pi-claude-bridge prompt-capture code.
why_it_matters: The counter-read on the Claude-sub path is account risk, not latency; follow https://github.com/earendil-works/pi-claude-code/blob/main/ARCHITECTURE.md#usage-credit-guard and https://github.com/elidickinson/pi-claude-bridge/blob/main/src/prompt-capture.ts before anyone treats the extension as safe.
===END===

===POST===
handle: @CFchangelog
post_url: https://x.com/CFchangelog/status/2113654363109699653
event_date: 2026-10-23
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: Cloudflare's changelog account said Agents SDK v0.30.0 now supports Pi 1.4 with smarter hibernation and crash recovery, and that harnesses can recover from evictions and storage errors automatically.
why_it_matters: Follow-on posts in the same window said opening the SQLite session store migrates the schema so Pi 1.3 cannot read it; verify the rollback warning at https://developers.cloudflare.com/changelog/post/2026-10-22-pi-harness-pi-1-4/.
===END===

===POST===
handle: @Howaboua
post_url: https://x.com/Howaboua/status/2113722776469299569
event_date: 2026-10-23
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, codex # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: Howaboua said he has been keeping two versions of a Pi extensions monorepo, now 23 building blocks for Pi Durable, and that there is still no official plugin standard to publish toward, so the host app still owns wiring, permissions, credentials, and UI.
why_it_matters: This is the ecosystem gap Mario's durable-plugin-system post implies; treat the component list as his packaging, not a Pi 1.4 feature, and confirm the repo from the post before citing it.
===END===

===POST===
handle: @Scott__D
post_url: https://x.com/Scott__D/status/2113763744094536081
event_date: 2026-10-23
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent    # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: Dimon said a cost people miss when wiring MCP is context, and that the pi-mcp-adapter README claims a single MCP server can burn more than 10k tokens whether the tools are used or not.
why_it_matters: Native MCP does not make tool-schema tax free; check the adapter README before loading servers the way Claude Code users now load them by default.
===END===

===POST===
handle: @xiaomovps
post_url: https://x.com/xiaomovps/status/2113912639571255525
event_date: 2026-10-24
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: comparison             # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: pi-coding-agent, omp # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: A Chinese-language Pi explainer mapped five branch projects: Oh My Pi adding LSP, debugger, subagent, and browser; senpi rewriting defaults; mu using a small judge model; Orbi for GitHub issues; and Pi Pocket for mobile Durable sessions, arguing the core stays thin while the community forks in different directions.
why_it_matters: This is the end-of-window ecosystem map; Oh My Pi is https://github.com/can1357/oh-my-pi and is the omp watchlist id, not a Pi 1.4 feature.
===END===

COVERAGE_NOTE: Window 2026-10-13 to 2026-10-24. Searched from:pidotdev, from:badlogicgames, from:PiChangelog, from:earendilworks, from:can1357; keyword and quote-post graphs for 1.3.0/1.4.0, MCP, pi-mcp-adapter, pi-web, pi-gui, piclaw, oh-my-pi/OMP; semantic search for switchers and complaints; thread fetches on the Durable Cloudflare post, phone daily-driver, code-mode argument, Claude-sub thread, Vercel durable-harness, 1.3.0 and 1.4.0 changelog threads, Mario plugin-system posts, and Ultimate. Timeline: native MCP and code mode shipped before this window (0.99.0 on 2026-09-29; Mario's unpublished phone study is 2026-10-05). First in-window sightings are ecosystem listicles and local RTX Spark docs on 2026-10-13. 1.3.0 and 1.4.0 were announced by unofficial @PiChangelog on 2026-10-15 and 2026-10-21; official @pidotdev did not tweet those version numbers and instead pushed Durable-on-Cloudflare, Flint-via-Radius, and Vercel. The conversation then split: Mario's phone-as-control-plane (2026-10-16, follow-up PWA with device envs 2026-10-22), Thariq vs Mario on code-mode token efficiency (2026-10-17), Sawyer's Claude-sub question (2026-10-18) becoming Brandon's public switch plus Esteban's classifier warning (2026-10-23), Vercel wrapping every harness including Pi (2026-10-20) against Mario's storage-versus-execution split, Cloudflare Agents SDK 0.30 claiming Pi 1.4 with an irreversible session-schema migration (2026-10-23), and a Chinese-language fork map on 2026-10-24. Could not reach full reply graphs on high-reply posts (phone thread, Durable post, Vercel), second-hop quote trees, Discord, or GitHub issue traffic that did not hit keyword search. @can1357's in-window posts were dquickts/Tern, not an Oh My Pi changelog. Ruled out Raspberry Pi, Inflection Pi, Pi Network, heypi, and the PiG Go port (it followed 1.4.0 as a separate project). Named pi-gui never resolved to a tagged repo; people asked if Mario's PWA was it. Thin: daily-driver polls, emoji replies, changelog quote-posts with no argument, BeefTV product shout that it used Pi 1.3.
