I'll start by identifying the DeepSeek Harness project so I can filter out similarly named products, then sweep X for posts in the window.I'll search official accounts and the product name first, then fan out to users and counter-takes.===POST===
handle: @deepseek_ai
post_url: https://x.com/deepseek_ai/status/2090730032574631962
event_date: 2026-08-21
date_precision: day
kind: claim
stance: announcement
frameworks: deepseek-harness
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Official account said DeepSeek Harness 0.1.1 shipped the same day as V4-Flash-Vision-Exp and already knows how to call that experimental multimodal model. The rest of the thread is a model launch; the harness line is a same-day channel claim.
why_it_matters: An operator who only saw the vision-model post may think they need a custom adapter, when the claimed path is a harness bump instead.
===END===
===POST===
handle: @tianyi
post_url: https://x.com/tianyi/status/2090730841509171466
event_date: 2026-08-21
date_precision: day
kind: claim
stance: announcement
frameworks: deepseek-harness
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Harness-team lead Tianyi Cui quoted the vision-model launch and told people to try the newest DSH build because the multimodal model is already wired in.
why_it_matters: This is the maintainer pointing at a runnable preview channel for vision agents, not a docs-only promise, so the version and dist-tag still have to be checked before anyone unpins.
===END===
===POST===
handle: @yifanxu_ephai
post_url: https://x.com/yifanxu_ephai/status/2091432002503508473
event_date: 2026-08-23
date_precision: day
kind: voice
stance: criticism
frameworks: deepseek-harness, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Yifan Xu argued DSH has little original agent craft, that its tools look borrowed from Claude Code and Codex, and that treating composability, reversibility, and UI work as the harness itself is backwards. He said the product talks about self-evolution and AGI while its agent skill is still below average, and that creator mode is less convenient than building elsewhere and reloading.
why_it_matters: This is the window's clearest case against the plugin-and-skin story, and it asks operators to judge DSH on whether it makes a better agent rather than on how freely the chrome can be swapped.
===END===
===POST===
handle: @jon_snow_ex
post_url: https://x.com/jon_snow_ex/status/2091494348848525418
event_date: 2026-08-23
date_precision: day
kind: voice
stance: criticism
frameworks: deepseek-harness
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: In reply, they agreed the community is mistaking UI and skins for a harness, and said pluginization does almost nothing for intelligence compared with model quality and a tight feedback loop.
why_it_matters: If that ranking is right, time spent on DSH themes and plugin marketplaces is the wrong scarce-attention spend for an operator trying to raise agent quality.
===END===
===POST===
handle: @tianyi
post_url: https://x.com/tianyi/status/2091561972374597953
event_date: 2026-08-23
date_precision: day
kind: voice
stance: joke
frameworks: deepseek-harness
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: After the criticism thread, Cui said he had liked it on purpose so X would feed him more negative DSH takes and keep him out of a praise bubble.
why_it_matters: A maintainer publicly hunting for defect reports is a lead that GitHub Discussions, not the launch thread, may be where the real preview bugs live.
===END===
===POST===
handle: @Daiiors
post_url: https://x.com/Daiiors/status/2091564397793869989
event_date: 2026-08-23
date_precision: day
kind: claim
stance: criticism
frameworks: deepseek-harness, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Replying to Cui, they said DSH still lacks isolation when a plugin breaks, so many users keep Claude Code or Codex beside it, and that the shell tool on Windows in server mode pops windows constantly because popups are not off by default.
why_it_matters: If plugin faults are process-wide and Windows server mode is unusable without a local patch, DSH is not yet a replacement harness even for people who like the architecture.
===END===
===POST===
handle: @TheAhmadOsman
post_url: https://x.com/TheAhmadOsman/status/2091687651610894533
event_date: 2026-08-24
date_precision: day
kind: voice
stance: praise
frameworks: deepseek-harness
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They reported strong results on a self-hosted V4 Flash build, especially cache-hit rate and planning efficiency, and named the missing TUI as the only real blocker because the product is web-only.
why_it_matters: Cache-hit economics are why some operators stay; the TUI gap is why others never leave a CLI harness, and both claims are testable on a local box.
===END===
===POST===
handle: @QuantumTransf
post_url: https://x.com/QuantumTransf/status/2092102036833911080
event_date: 2026-08-25
date_precision: day
kind: voice
stance: question
frameworks: deepseek-harness
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They asked why, given DSH's claimed easy plugin swap and lack of privileged plugins, people are writing plugin adapters after a breaking update instead of targeting DSH directly, and said an adapter will not save you from the next break anyway.
why_it_matters: Adapter layers are a tell that the preview's compatibility warning is already shaping the ecosystem, which is the opposite of the one-command plugin story.
===END===
===POST===
handle: @Daiiors
post_url: https://x.com/Daiiors/status/2092116777916682401
event_date: 2026-08-25
date_precision: day
kind: voice
stance: criticism
frameworks: deepseek-harness
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They said the core project is rough, does not take outside PRs, and still has not shipped basic fault isolation, so the community is being asked to fill gaps on a closed contribution path.
why_it_matters: If the public GitHub repo is not a place an operator can land a fix, waiting on Discussions and third-party plugins is the actual support model.
===END===
===POST===
handle: @tianyi
post_url: https://x.com/tianyi/status/2095587338894352579
event_date: 2026-09-03
date_precision: day
kind: voice
stance: comparison
frameworks: deepseek-harness, claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Quoting Claude Code's still-unshipped Function Hooks exploration, Cui said that looks useful and pointed people at DSH creator mode, which he said has been MIT-open for some time.
why_it_matters: This is the maintainer positioning creator mode as the already-open analogue of Claude Code's extension work, which is a different install and a different permission model than hooks inside Claude Code.
===END===
===POST===
handle: @tianyi
post_url: https://x.com/tianyi/status/2097919769878135053
event_date: 2026-09-10
date_precision: day
kind: claim
stance: announcement
frameworks: deepseek-harness
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Cui invited people to try DSH v0.1.5, said the model was trained and tuned against multiple DSH configurations together with V4.1 Flash, flagged experimental Agent Teams as something to try, and noted the harness team is still hiring.
why_it_matters: Co-training plus an experimental teams plugin is the window's main "use our harness with our model" claim; operators should check which profile is the trained one and that Agent Teams is off by default before turning it on.
===END===
===POST===
handle: @zainhas
post_url: https://x.com/zainhas/status/2097941157905142210
event_date: 2026-09-10
date_precision: day
kind: claim
stance: comparison
frameworks: deepseek-harness, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said DeepSeek's own V4.1 Flash evals across eight harness setups peak in the thin ones, including a minimal DSH profile and mini-SWE, and lag in Claude Code and Codex.
why_it_matters: If the lab's chart is real, the default full DSH profile is not the place this model scores best, which cuts against buying DSH as a fatter, more-tooled coding agent.
===END===
===POST===
handle: @themandalorenzo
post_url: https://x.com/themandalorenzo/status/2097974703998611597
event_date: 2026-09-10
date_precision: day
kind: claim
stance: frustration
frameworks: deepseek-harness
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: After the 0.1.5-rc.1 bump they said New Session in the web UI does nothing because the old code preset is gone, session create fails on a missing agent-preset, and the client only logs a warning. They gave a workaround of setting the default agent preset to standard.
why_it_matters: Anyone who upgraded an existing web profile without renaming code to ptc can think the product is dead when it is a preset-id break.
===END===
===POST===
handle: @FiniYang
post_url: https://x.com/FiniYang/status/2098054412866572763
event_date: 2026-09-10
date_precision: day
kind: claim
stance: frustration
frameworks: deepseek-harness
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A plugin author said 0.1.5-rc.1 dropped the settingsNamespace export and broke their memory plugin, and that the built-in preset rename from code to ptc makes New Session fail until the agent preset is picked again. They posted a patched plugin version and a global npm upgrade path.
why_it_matters: This is the preview compatibility warning landing on real plugin authors; pin both dsh and every memory or settings plugin before an rc bump.
===END===
===POST===
handle: @CMS_Flash
post_url: https://x.com/CMS_Flash/status/2098197896634286490
event_date: 2026-09-10
date_precision: day
kind: voice
stance: praise
frameworks: deepseek-harness
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Shen Zhuoran said DSH is their personal favorite for default UX and extensibility, and that Tailscale makes the web UI easy to reach from a phone.
why_it_matters: That is an operator path around the missing official desktop and TUI, and it also puts an unauthenticated-by-default local web UI on a VPN rather than on the public internet.
===END===
===POST===
handle: @HCSolakoglu
post_url: https://x.com/HCSolakoglu/status/2099444259808010251
event_date: 2026-09-14
date_precision: day
kind: voice
stance: comparison
frameworks: deepseek-harness, hermes-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They said V4.1 Flash looks clearly better inside DSH than in Hermes or CommandCode even at max effort, while DSH spends more tokens and stretches tasks, and that GLM 5.3 Flash is still more harness-agnostic and cheaper.
why_it_matters: Model-harness fit is the practical install question this window; an operator copying a DeepSeek model into another harness should not expect the DSH-trained behavior for free.
===END===
===POST===
handle: @twatdipper
post_url: https://x.com/twatdipper/status/2101241949436985380
event_date: 2026-09-19
date_precision: day
kind: claim
stance: criticism
frameworks: deepseek-harness
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said basic tool calling on the DSH master branch is broken, and that calling the tree alpha does not make that acceptable.
why_it_matters: If master is the branch npx latest tracks, a tool-calling break is not a preview-edge complaint, it is a do-not-run-unpinned finding.
===END===
===POST===
handle: @yifanxu_ephai
post_url: https://x.com/yifanxu_ephai/status/2101639434924163255
event_date: 2026-09-20
date_precision: day
kind: voice
stance: comparison
frameworks: deepseek-harness, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: The same critic from August said they had moved all the way onto DSH minimal mode with V4.1 Flash after Codex plus subagents left them burned, and they like that pairing as a small fast loop.
why_it_matters: Their later use of the thin profile, not the plugin-and-UI product, is evidence for the eval chart that said this model prefers a minimal harness.
===END===
===POST===
handle: @cholf5
post_url: https://x.com/cholf5/status/2101684731305947630
event_date: 2026-09-20
date_precision: day
kind: voice
stance: praise
frameworks: deepseek-harness
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They said DSH's planning is strong enough that after it investigates it writes a long todo list, which made older skill-pack rituals such as Superpowers look pointless as models and agents improve.
why_it_matters: If planning quality is coming from the model-plus-loop rather than from extra skill packs, operators should re-audit how much prompt ceremony they still pay for.
===END===
===POST===
handle: @zuckjetcn
post_url: https://x.com/zuckjetcn/status/2101929848713380193
event_date: 2026-09-21
date_precision: day
kind: claim
stance: criticism
frameworks: deepseek-harness
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: After calling the web UI too crude to preview files, they said a conversation that fails once then keeps failing on later turns in the newest DSH they were running.
why_it_matters: A poisoned session is an operator-visible reliability bug; the workaround is probably fork-or-new-session until someone pins whether it is a log-format or client-state defect.
===END===
===POST===
handle: @Ubendev
post_url: https://x.com/Ubendev/status/2101967552671093068
event_date: 2026-09-21
date_precision: day
kind: voice
stance: comparison
frameworks: deepseek-harness, hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They described hopping ZCode to DSH to Command Code to OpenCode and landing back on Hermes, and said Hermes is the more complete daily driver.
why_it_matters: DSH as a station on a tour rather than a destination is the opposite of the launch-week story, and it is a reason to watch retention rather than stars.
===END===
===POST===
handle: @cholf5
post_url: https://x.com/cholf5/status/2102063636298772825
event_date: 2026-09-21
date_precision: day
kind: voice
stance: frustration
frameworks: deepseek-harness
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A plugin author said they had written three DSH plugins that still feel like clumsy copies of ZCode, wondered why they were reconstructing that UX at all, and stayed only because ZCode is hard to customize.
why_it_matters: Everything-is-a-plugin does not make a polished agent cheap to rebuild; it can trap operators in a long reconstruction of a closed product's details.
===END===
===POST===
handle: @bisheshab
post_url: https://x.com/bisheshab/status/2102143348169703659
event_date: 2026-09-21
date_precision: day
kind: voice
stance: comparison
frameworks: deepseek-harness, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They said V4.1 feels worse and more sluggish in DSH than the same DeepSeek model running in Pi, where it has been working well.
why_it_matters: Native-harness-is-best is the official line after co-training; a same-model Pi win is the counter-measurement an operator can run in an afternoon.
===END===
COVERAGE_NOTE: Searched X 2026-08-20 to 2026-09-21 with from:deepseek_ai, from:tianyi, quoted "DeepSeek Harness", repo/npm strings, DSH plus Chinese 极简/创造模式/插件/反向/简陋, Cordis, creator mode, Agent Teams, desktop/TUI, 0.1.5, sandbox/auth/3080, and Pi/Claude/Codex/Hermes comparisons, plus known voices @yifanxu_ephai @TheAhmadOsman @zainhas @cholf5 @Daiiors. Official @deepseek_ai barely talked about the harness in-window (one 0.1.1 line inside the Aug 21 vision-model thread); 0.1.5 was announced by @tianyi, not the brand account. Could not reach WeChat, Discord, GitHub Discussions, Bilibili (Chinese plugin authors reportedly live there), Zhihu (Cui was told to look there for dunks), X lists, or deleted posts. Thin: English-language operator criticism vs Chinese; no in-window posts from @mitsuhiko, @simonw, or @eliebakouch; official desktop is rumor and third-party clients, not a maintainer ship post. Identity drops: PyPI package deepseek-harness (CyberWizard protocol client) is not this repo; handles such as @dsh_official_1, @abcdEFg_dsh, @DSH050, @Cup1dsh0tt are unrelated people; DeepSeek V4/V4.1 model threads without the harness were excluded; B.AI/HarnessRouter/star-count marketing and "killed the coding-agent industry" explainers were dropped as no-argument. A CVE-shaped @hazemomier post that leaked agent instructions was not used.
