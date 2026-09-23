I'll chase the OMP/Pi fork thread on X in the 2026-08-08 to 2026-08-23 window: originating posts first, then replies, quotes, and maintainer counter-reads. Starting with project identity and the social search.Key people are @_can1357 (OMP) and @badlogicgames (Pi). Next I’ll pull their originating threads and hunt the CPython-plugin / disputed-reasons counter-read.===POST===
handle: @theodorvaryag
post_url: https://x.com/theodorvaryag/status/2088281208803238301
event_date: 2026-08-14
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Chris Allen said he had only just noticed OMP starting to move pieces into Rust, and that he had asked a coding model to look at the repo.
why_it_matters: This is the first in-window public sighting that OMP's Rust work was already visible in-tree, before the later omp2 announcement thread.
===END===
===POST===
handle: @_can1357
post_url: https://x.com/_can1357/status/2088291293394837861
event_date: 2026-08-14
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: OMP's maintainer told him to inspect the omp2 branch, said that work had already been sitting there, and predicted an agent would miss the actual design reasons. He also teased a long harness-design writeup.
why_it_matters: A maintainer is directing operators to a named branch rather than main, and treating the rewrite as already in progress rather than a rumor. Verify against https://github.com/can1357/oh-my-pi/tree/omp2
===END===
===POST===
handle: @julie_bush
post_url: https://x.com/julie_bush/status/2088820502324510984
event_date: 2026-08-16
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Julie Bush said her open advisor-light pull request, which aims to feed the advisor less context, would probably only land after the omp2 Rust rewrite.
why_it_matters: Contributors are already treating omp2 as a merge freeze for current-tree work. The PR to check is https://github.com/can1357/oh-my-pi/pull/7766
===END===
===POST===
handle: @_can1357
post_url: https://x.com/_can1357/status/2089358681171182043
event_date: 2026-08-17
date_precision: day
kind: claim
stance: comparison
frameworks: omp, pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Can said both current OMP and the omp2 branch were agent-written, but omp2 came out cleaner because Pi was no longer the constraint, and because provider compat was a DSL instead of a TypeScript type filled in at runtime.
why_it_matters: This is the maintainer's own reason for leaving Pi, with a concrete tree to inspect at https://github.com/can1357/oh-my-pi/tree/omp2/crates/llm-catalog/compat
===END===
===POST===
handle: @_can1357
post_url: https://x.com/_can1357/status/2090591535628706092
event_date: 2026-08-21
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Can said omp2 would have to wait because an OMP blob-broker was shipping the next day.
why_it_matters: Operators waiting on the rewrite should not treat omp2 as imminent; the maintainer publicly deprioritized it for other work.
===END===
===POST===
handle: @graykevinb
post_url: https://x.com/graykevinb/status/2090911436507693097
event_date: 2026-08-21
date_precision: day
kind: voice
stance: question
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Kevin Gray liked the idea but said current OMP startup time and RAM were brutal, and asked whether the announced work was mainline OMP or something that was already mostly OMP anyway.
why_it_matters: This is the first surviving reply to the later deleted announcement, and it already treats current OMP as a RAM/startup problem the rewrite is supposed to fix.
===END===
===POST===
handle: @benyficent
post_url: https://x.com/benyficent/status/2090919936554332574
event_date: 2026-08-21
date_precision: day
kind: voice
stance: question
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: beny asked how plugins would work in v2 and whether TypeScript plugin support would still ship with OMP.
why_it_matters: Extension authors need to know whether current TS plugins survive the rewrite or have to be thrown away.
===END===
===POST===
handle: @eDezhic
post_url: https://x.com/eDezhic/status/2090932478450028722
event_date: 2026-08-21
date_precision: day
kind: voice
stance: question
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Egor asked whether the rewrite would produce a reusable Rust crate for Pi-style providers, not just a private OMP binary.
why_it_matters: If omp2 is a single closed harness rather than a library, downstream authors cannot reuse the provider layer the way they reuse Pi today.
===END===
===POST===
handle: @kuznecov26909
post_url: https://x.com/kuznecov26909/status/2090945114986201457
event_date: 2026-08-21
date_precision: day
kind: voice
stance: question
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He asked whether the rewrite would keep backwards compatibility at all, and why plugins were not being done in Wasm instead, which he said would be faster for heavy plugins and easier to sandbox.
why_it_matters: This is the first surviving counter-proposal on the plugin runtime: Wasm versus whatever CPython path other replies say was announced.
===END===
===POST===
handle: @nszceta
post_url: https://x.com/nszceta/status/2090955508064698536
event_date: 2026-08-22
date_precision: day
kind: voice
stance: criticism
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Adam G said he could not see how leaving TypeScript/Bun for CPython would make anything faster, and asked whether they planned to AoT-compile Python to native code.
why_it_matters: This is the surviving receipt that the deleted announcement proposed CPython, and it is the speed objection operators should test against the branch rather than take as fact.
===END===
===POST===
handle: @kuznecov26909
post_url: https://x.com/kuznecov26909/status/2090958897016119406
event_date: 2026-08-22
date_precision: day
kind: claim
stance: comparison
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He answered that the CPython path would use less RAM and probably not expose the whole standard library, and that his current OMP bottleneck was rendering and memory, not language speed.
why_it_matters: The rewrite is being sold on RSS and binary slimness, not throughput. That is a different operator test than "is Python faster than Bun."
===END===
===POST===
handle: @transpiracy
post_url: https://x.com/transpiracy/status/2090974440834343293
event_date: 2026-08-22
date_precision: day
kind: voice
stance: criticism
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They argued a native boundary would make the harness harder to extend and that CPython plugins would lose to V8 or JSC, so breaking plugin compatibility would push users toward other Rust harnesses.
why_it_matters: Extension authors have to decide whether to keep investing in OMP's current plugin contract or freeze that work until omp2's runtime is specified.
===END===
===POST===
handle: @PrapKim
post_url: https://x.com/PrapKim/status/2091017754778431885
event_date: 2026-08-22
date_precision: day
kind: voice
stance: question
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Kim asked what omp2 would do once Pi 2.0 existed.
why_it_matters: If the fork is leaving Pi while Pi is also being redesigned, an operator has to pick which lineage to stay on rather than waiting for a merge-back that may never happen.
===END===
===POST===
handle: @Wauters_Wim
post_url: https://x.com/Wauters_Wim/status/2091022211628839112
event_date: 2026-08-22
date_precision: day
kind: voice
stance: criticism
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Wim admitted prejudice but said removing Pi risked killing a good product, because he thinks the power is the harness.
why_it_matters: This is the operator-side version of the later maintainer dispute: OMP's value may be the Pi contract, not the extra features.
===END===
===POST===
handle: @voidcooks
post_url: https://x.com/voidcooks/status/2091040448403919285
event_date: 2026-08-22
date_precision: day
kind: voice
stance: question
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: void asked what would replace Pi, and whether Pi was not the thing that made OMP what it is.
why_it_matters: If omp2 is a new core rather than a Pi fork, operators cannot keep treating OMP as a batteries-included Pi with a familiar extension model.
===END===
===POST===
handle: @bchap1n
post_url: https://x.com/bchap1n/status/2091068468473000044
event_date: 2026-08-22
date_precision: day
kind: voice
stance: frustration
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: An operator said they had just finished a Bun TUI specifically to make OMP extension integration easier.
why_it_matters: People already shipping against today's Bun/TS extension surface will eat a rewrite cost if that surface is dropped.
===END===
===POST===
handle: @vaiduakhu
post_url: https://x.com/vaiduakhu/status/2091074699342299630
event_date: 2026-08-22
date_precision: day
kind: voice
stance: comparison
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They noted that while Mario and Armin were talking about Pi 2.0, OMP was talking about leaving Pi in omp2.
why_it_matters: The two projects are diverging in public at the same moment, so "wait for upstream" is no longer a default strategy.
===END===
===POST===
handle: @jacobsali123
post_url: https://x.com/jacobsali123/status/2091081440725266689
event_date: 2026-08-22
date_precision: day
kind: claim
stance: criticism
frameworks: pi-coding-agent, omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: jacob said Pi does not rely on Bun, because they run it from npm.
why_it_matters: If the rewrite is justified by leaving Bun, that reason does not automatically apply to upstream Pi, which an operator can already run without Bun.
===END===
===POST===
handle: @DenisShepelin
post_url: https://x.com/DenisShepelin/status/2091090555446943918
event_date: 2026-08-22
date_precision: day
kind: claim
stance: criticism
frameworks: pi-coding-agent, omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Denis said Pi has no Bun dependency, that sandbox and trust are left to people and their extensions, that remote workspaces were likely already being worked on, and that OMP seemed to want different things than Pi.
why_it_matters: This is the pre-maintainer counter-read of the deleted announcement's stated reasons, and each clause is checkable against Pi docs rather than against OMP marketing.
===END===
===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2091099037629866446
event_date: 2026-08-22
date_precision: day
kind: claim
stance: criticism
frameworks: pi-coding-agent, omp
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Pi's maintainer asked the thread to stop bashing other projects, said Pi has no Bun dependency, that the sandbox and trust model is whatever the operator builds as documented, that a remote workspace is straightforward if needed, and asked Can not to frame it that way.
why_it_matters: The upstream maintainer is disputing the reasons given for ripping Pi out. Operators should not treat those reasons as facts about Pi until they are checked against Pi's docs and code.
===END===
===POST===
handle: @_can1357
post_url: https://x.com/_can1357/status/2091100053171519995
event_date: 2026-08-22
date_precision: day
kind: voice
stance: criticism
frameworks: omp, pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Can replied that OMP and Pi are not associated, and that he is against a trust model anyway.
why_it_matters: The OMP maintainer is publicly declining Pi's trust/sandbox framing rather than claiming Pi cannot do those things, which is a different argument than the one Mario was answering.
===END===
===POST===
handle: @rusabuilds
post_url: https://x.com/rusabuilds/status/2091118287958724628
event_date: 2026-08-22
date_precision: day
kind: voice
stance: comparison
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: rusa said the week's pattern was people rewriting off Bun to shrink binaries, called an embedded runtime dead weight for a CLI, and said the number that would actually sell omp2 was the size delta once the Pi core was native.
why_it_matters: Binary size, not plugin language, is the falsifiable metric for this rewrite. Measure installed OMP versus the omp2 branch before changing tools.
===END===
===POST===
handle: @lyc_aon
post_url: https://x.com/lyc_aon/status/2091209237393486067
event_date: 2026-08-22
date_precision: day
kind: claim
stance: announcement
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Zeus said OMP was the best harness but told people to watch omp2, because Can had been rewriting it in Rust and ripping out the Pi dependency.
why_it_matters: By late on the 22nd the rewrite-and-leave-Pi story had left the original thread and was being repeated as settled fact.
===END===
===POST===
handle: @benvargas
post_url: https://x.com/benvargas/status/2091279099436417197
event_date: 2026-08-22
date_precision: day
kind: voice
stance: criticism
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Ben Vargas asked whether people would still run OMP after it ripped out Pi and rewrote in Rust, and whether it should still be called oh-my-pi. He said he did not want that opinionated custom base and had already deleted OMP ahead of omp2.
why_it_matters: At least one operator is treating the rewrite as a reason to leave now, not as a reason to wait for a better OMP.
===END===
===POST===
handle: @qilua02
post_url: https://x.com/qilua02/status/2091363994632396921
event_date: 2026-08-23
date_precision: day
kind: claim
stance: praise
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: qilua said they were running twenty OMP sub-agents at once with low CPU, that this would have been impossible on a Node harness, and that OMP's core was built in Rust.
why_it_matters: This is the popular product claim the rest of the 23rd is arguing with. It describes current OMP, not the omp2 branch, and needs a primary check of what is actually native today versus still Pi/TS.
===END===
===POST===
handle: @VadimGoldmanX
post_url: https://x.com/VadimGoldmanX/status/2091427200990081142
event_date: 2026-08-23
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Vadim told people to look at the omp2 branch rather than main, and that Can was the one working on it.
why_it_matters: This is the counter to the "OMP core is already Rust" claim: the native rewrite is on a side branch, not the installable default. Check https://github.com/can1357/oh-my-pi/tree/omp2
===END===
===POST===
handle: @yabaizettai
post_url: https://x.com/yabaizettai/status/2091598594260287745
event_date: 2026-08-23
date_precision: day
kind: claim
stance: criticism
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: yabaizettai said OMP is a fork of Pi, that Pi has no Rust in it, and that calling OMP's core Rust was therefore crazy.
why_it_matters: This splits current OMP from omp2. An operator who installed from main or the install script may still be on a Pi-derived TypeScript tree, not a Rust rewrite.
===END===
COVERAGE_NOTE: Window 2026-08-08 to 2026-08-23. Searched X keyword and semantic for omp2, oh-my-pi, Rust rewrite, CPython, plugin, orphan, Bun, plus from:_can1357, from:badlogicgames, conversation_id:2090910311746297954 and related threads; resolved IDs via fxtwitter. Timeline: 2026-08-14 first sighting (Chris Allen, then Can pointing at omp2 and teasing a harness-design writeup); 2026-08-16 Julie Bush treating omp2 as a merge gate; 2026-08-17 Can comparing main vs omp2 and calling Pi the limiting factor, with a GitHub tree link; 2026-08-21 Can delaying omp2 for blob-broker; 2026-08-21 ~21:14 @oleksoleksoleks posted the announcement that the rest of the thread is answering. That origin and olek's follow-ups are now gone: 2090910311746297954, 2090923286892892518, 2090918434120859988, 2090947411581796564, 2090949244748267602 all 404 on x.com and fxtwitter, thread-fetch of the root failed, and quoted_tweet_id on the origin returned nothing. Surviving replies are how CPython plugins, ripping out Pi, Bun, sandbox/trust, and remote workspace entered the record. 2026-08-22 morning: plugin/CPython/compat pushback. 2026-08-22 09:10-09:48: Denis then Mario dispute the stated reasons; Can says OMP is not associated with Pi and he is against a trust model. 2026-08-22/23: rust-core claim spreads via @qilua02; Vadim points at omp2 not main; yabaizettai says current OMP is still a Pi fork with no Rust. Could not reach: the deleted olek posts (so the original wording of the reasons is not in this harvest), any in-window post that actually says "orphan branch" (only "omp2 branch"), Can's promised harness-101 writeup (the Sep playbook is outside the window), Discord, and git ancestry of whether omp2 is an orphan branch. Can's own technical answers inside the olek thread are thin: only two surviving Can replies there, neither specifying CPython or plugins. Ruled out: heypi, @ompompi, @ThatDudeOMP, OpenCode's rust joke, Dicklesworthstone/pi_agent_rust, grok.com explainers, and the separate MaxForAI Pi 2.0/harness-v2 thread except the one reply that names omp2. Identity: OMP is can1357/oh-my-pi / @_can1357; Pi is earendil-works/pi / @badlogicgames; omp2 is a branch on the OMP repo, not a separate product. Sweep is thin on the original announcement text and on whether omp2 is an orphan branch.
