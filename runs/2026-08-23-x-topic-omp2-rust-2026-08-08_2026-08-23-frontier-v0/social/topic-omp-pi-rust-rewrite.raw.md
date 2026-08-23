I'll chase the OMP-rewriting-Pi-in-Rust conversation on X: originating posts first, then maintainer replies and counter-reads. No product facts, only what people said, with real status URLs.Web search already points at an August 22 Pi 2 harness thread from Armin Ronacher and an `omp2` Rust rewrite in the OMP repo. Next I’ll pull watchlist contracts and search X for the originating posts.===POST===
handle: @_can1357
post_url: https://x.com/_can1357/status/2088257525334315298
event_date: 2026-08-14
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Can pointed readers at a source file under the omp2 branch of can1357/oh-my-pi, in a Rust crate path for local Apple Foundation Models inference.
why_it_matters: This is a maintainer pointer at a branch and a Rust tree, not a tagged release; verify against https://github.com/can1357/oh-my-pi/blob/omp2/crates/llm-inference/src/local/applefm/platform.rs before treating omp2 as something an operator can run.
===END===

===POST===
handle: @theodorvaryag
post_url: https://x.com/theodorvaryag/status/2088281208803238301
event_date: 2026-08-14
date_precision: day
kind: claim
stance: neutral
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Chris Allen said he had not realized OMP had begun rewriting pieces in Rust, and that he asked a coding agent about it.
why_it_matters: This is the first third-party sighting in the window, and it is easy to confuse with the Rust natives already on OMP main; the claim is about a rewrite, not about a shipped omp2 binary.
===END===

===POST===
handle: @doodlestein
post_url: https://x.com/doodlestein/status/2088283153051922436
event_date: 2026-08-14
date_precision: day
kind: claim
stance: comparison
frameworks: pi-coding-agent, omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Jeffrey Emanuel replied that he had already finished a fully Rust take on Mario Zechner's Pi, named pi_agent_rust, and pointed at that repo rather than OMP's branch.
why_it_matters: Operators hearing "Pi is being rewritten in Rust" may be looking at a different project; the linked repo is https://github.com/Dicklesworthstone/pi_agent_rust and is not can1357/oh-my-pi or earendil-works/pi.
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
gist: Can told people to inspect the omp2 branch, said it had been there already, and teased a long write-up on harness design that he expected a model would still miss the point of.
why_it_matters: The maintainer framed omp2 as an existing branch plus an unpublished design essay, not as a release channel an operator can pin.
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
gist: Can said both current OMP and the omp2 branch were agent-written, but that omp2 was much cleaner because Pi no longer constrained the design, and he pointed at a catalog-compat crate expressed as a DSL rather than a TypeScript type filled at runtime.
why_it_matters: This is the maintainer stating the rewrite's purpose as leaving Pi behind; the linked tree is https://github.com/can1357/oh-my-pi/tree/omp2/crates/llm-catalog/compat and still needs a primary-source read for whether that is a plan, a branch, or anything runnable.
===END===

===POST===
handle: @badlogicgames
post_url: https://x.com/badlogicgames/status/2089487058842575229
event_date: 2026-08-17
date_precision: day
kind: voice
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Mario Zechner teased that people would be upset when Pi 2.0 arrived, as a follow-up to a post about other tools copying Pi's extension model.
why_it_matters: This is Pi's own v2 talk, not OMP's Rust fork, and it is the identity trap for anyone collapsing "Pi rewrite" and "omp2 rewrite" into one event.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2090368103972479324
event_date: 2026-08-20
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Armin Ronacher said the new Pi harness work was happening on the dev branch rather than on main.
why_it_matters: Operators looking at earendil-works/pi main will not see that work; it is a branch-level claim about Pi itself, independent of OMP's omp2 tree.
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
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Can said omp2 would have to wait because he was shipping an OMP blob-broker the next day instead.
why_it_matters: This cuts against "coming very soon" talk later the same day; as of this post the rewrite is queued behind other OMP work, not a binary on the install script.
===END===

===POST===
handle: @oleksoleksoleks
post_url: https://x.com/oleksoleksoleks/status/2090910311746297954
event_date: 2026-08-21
date_precision: day
kind: claim
stance: announcement
frameworks: omp, pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Olek, whose bio says harness engineering at omp.sh, said Omp2 was a Rust rewrite meant to get off Bun bloat and that it would remove the underlying Pi layer to get past architecture limits.
why_it_matters: This is the public originating announcement of the OMP-side story; it is a plan plus a branch name, and it is not a statement from the Pi maintainers.
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
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Kevin Gray said OMP was already strong but brutal on startup time and RAM, and asked whether the rewrite was mainline OMP, because most of it already was OMP.
why_it_matters: This is the operator distinction the rest of the thread keeps blurring: current OMP already has a large Rust core, so "rewriting in Rust" may not be the same change as ripping Pi and Bun out.
===END===

===POST===
handle: @oleksoleksoleks
post_url: https://x.com/oleksoleksoleks/status/2090918434120859988
event_date: 2026-08-21
date_precision: day
kind: claim
stance: criticism
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Olek said Bun was spending on the order of 600ms just walking dependencies, and that there had been no clean way to fix that.
why_it_matters: If that number holds, the operator-facing win is process startup and multi-session density, not a new agent feature; it still needs a measurement on the shipped channel.
===END===

===POST===
handle: @oleksoleksoleks
post_url: https://x.com/oleksoleksoleks/status/2090919659201556907
event_date: 2026-08-21
date_precision: day
kind: claim
stance: praise
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Olek said the Rust rewrite was Can doing the work alone, and redirected praise there.
why_it_matters: That is a maintainership claim: a single-author branch while current OMP is still taking PRs, which is the review and continuity risk for anyone depending on the fork.
===END===

===POST===
handle: @oleksoleksoleks
post_url: https://x.com/oleksoleksoleks/status/2090921760979832973
event_date: 2026-08-21
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Olek said he believed plugins would run on a bundled CPython, so TypeScript and JavaScript extensions might need to be ported.
why_it_matters: Anyone with OMP TS extensions should treat plugin porting as the migration cost, even if the TUI looks the same.
===END===

===POST===
handle: @oleksoleksoleks
post_url: https://x.com/oleksoleksoleks/status/2090923286892892518
event_date: 2026-08-21
date_precision: day
kind: claim
stance: criticism
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Olek listed Bun, Pi's plugin approach, a weak sandbox or trust model, and a lack of remote-workspace design as the reasons to leave Pi.
why_it_matters: Those are product claims about upstream Pi used to justify a fork rewrite; they are the statements Mario later disputes, and they should not be copied as facts about earendil-works/pi.
===END===

===POST===
handle: @oleksoleksoleks
post_url: https://x.com/oleksoleksoleks/status/2090933443483881566
event_date: 2026-08-21
date_precision: day
kind: claim
stance: announcement
frameworks: omp, pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Olek said Pi was being fully deprecated inside OMP, and that the Bun runtime was coming out in favor of CPython.
why_it_matters: "Deprecated" here is an OMP-fork plan, not a statement that earendil-works/pi is shutting down; operators of upstream Pi are not being told to migrate by this post.
===END===

===POST===
handle: @oleksoleksoleks
post_url: https://x.com/oleksoleksoleks/status/2090935215136948654
event_date: 2026-08-21
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: After a question about whether omp2 would be one crate, Olek said the work was split into reusable layers across several crates.
why_it_matters: That is a claim about library shape, not a published crate on crates.io; the place to check is the omp2 workspace under https://github.com/can1357/oh-my-pi/tree/omp2 .
===END===

===POST===
handle: @oleksoleksoleks
post_url: https://x.com/oleksoleksoleks/status/2090947411581796564
event_date: 2026-08-21
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Olek said the rewrite had started about two weeks earlier, that the immediate goal was to get Pi and Bun out because core work on current OMP had paused under a pile of PRs, that plugins would not be backward compatible because TS/Bun was being replaced with CPython, that user-facing behavior should stay close to one-to-one, that they had on the order of 15k lines of OMP features to port, and that WASM could be a later backend.
why_it_matters: This is the most specific operator contract in the thread: a breaking plugin rewrite, a paused mainline, and a still-unshipped port of existing features, not a drop-in binary.
===END===

===POST===
handle: @nszceta
post_url: https://x.com/nszceta/status/2090955508064698536
event_date: 2026-08-22
date_precision: day
kind: voice
stance: question
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Adam G said he could not see how moving from TypeScript/Bun to CPython would make anything faster, and asked whether they would compile Python with Can's Pon AOT compiler.
why_it_matters: If the speed story is actually the Rust core and not the plugin runtime, operators should not expect Python extensions to get cheaper; that split is the thing to verify on the branch.
===END===

===POST===
handle: @oleksoleksoleks
post_url: https://x.com/oleksoleksoleks/status/2090964492439929058
event_date: 2026-08-22
date_precision: day
kind: claim
stance: announcement
frameworks: omp
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Olek answered that Python was for the plugin system, the omp core would be Rust, and that speed and memory gains should be obvious from that split.
why_it_matters: This is the architecture an operator would actually run if omp2 ships: native core plus a CPython plugin VM, which is a different extension contract than today's TS/Bun OMP.
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
gist: transpiracy argued that a native boundary would make extensions worse, that CPython would lose to V8/JSC on plugin speed, that breaking plugin compatibility would push people away, and that they might move to OpenCode's next version instead.
why_it_matters: This is the operator-exit case: even people who like a Rust core may not follow if their extensions die; that is the migration tax the rewrite has to pay.
===END===

===POST===
handle: @ErdalToprak
post_url: https://x.com/ErdalToprak/status/2091087596642328866
event_date: 2026-08-22
date_precision: day
kind: voice
stance: criticism
frameworks: pi-coding-agent, omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Erdal said he already runs Pi with SSH-rewritten core tools so the agent stays local and works on any sandbox, and that calling Pi undesigned for remote work was bad faith rather than an architectural dead end.
why_it_matters: If that pattern holds, leaving Pi is a product choice by OMP, not a proof that Pi operators cannot do remote workspaces without a Rust rewrite.
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
gist: Mario asked OMP not to bash other projects, said Pi has no Bun dependency at all, said the sandbox and trust model is whatever the operator configures, and said remote workspaces are straightforward if you need them.
why_it_matters: This is the Pi maintainer denying the three defects Olek used to justify ripping Pi out; those defects should be checked against Pi's docs and runtime, not treated as settled by the fork thread.
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
why_it_matters: The OMP maintainer is publicly uncoupling the rewrite from Pi, which is the naming problem for anyone still installing something called oh-my-pi.
===END===

===POST===
handle: @rusabuilds
post_url: https://x.com/rusabuilds/status/2091118287958724628
event_date: 2026-08-22
date_precision: day
kind: voice
stance: comparison
frameworks: omp
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: rusa said the week's pattern was people rewriting off Bun to shrink the binary, and that the number that would sell a native Pi core was the size delta.
why_it_matters: For CLI operators, install size and RSS are the test; without a measured delta, omp2 is still a design argument.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2091175471446638993
event_date: 2026-08-22
date_precision: day
kind: voice
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Armin said people were discussing Pi 2 harness design, offered to talk about the why, and said the how was still in progress.
why_it_matters: Pi is doing its own harness rewrite on a different timeline and in a different language debate; this is not omp2.
===END===

===POST===
handle: @domenkozar
post_url: https://x.com/domenkozar/status/2091185201099489592
event_date: 2026-08-22
date_precision: day
kind: claim
stance: comparison
frameworks: pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Domen Kožar said he had already written a Rust harness that was basically a port of Pi, attached a screenshot of that tree, and said he would rather Pi itself became that.
why_it_matters: This is a third Rust-Pi, neither omp2 nor pi_agent_rust; it is not a Pi or OMP release, and it is a request that upstream absorb a port Armin then declined.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2091185628922757259
event_date: 2026-08-22
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent, omp
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Armin said he does not think they will port Pi to Rust, because they need a runtime language for extensibility, though they might get more experimental with the UI layer after the new harness.
why_it_matters: This is the Pi maintainer closing the "Pi is moving to Rust" reading; operators of earendil-works/pi should not plan a language migration from this window.
===END===

===POST===
handle: @mitsuhiko
post_url: https://x.com/mitsuhiko/status/2091210687091491308
event_date: 2026-08-22
date_precision: day
kind: claim
stance: announcement
frameworks: pi-coding-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Asked whether Pi 2 would stop being small, Armin said Pi was never small as a codebase; small meant light context use and low workflow invasiveness, that this would not change, and that a longer post on the new harness was coming.
why_it_matters: Pi 2, as described by a maintainer, is a harness redesign that claims to keep the old operator contract, not a Rust reboot and not OMP's kitchen-sink surface.
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
gist: Ben Vargas asked whether people would still run OMP after it removed Pi and rewrote in Rust, and whether the name oh-my-pi would still make sense, then said he did not want a fully custom opinionated base and had already deleted OMP ahead of omp2.
why_it_matters: The fork's remaining Pi-shaped value, for this operator, was the shared base; ripping that out is a reason to leave, not a reason to wait for the branch.
===END===

===POST===
handle: @GrowlerEnjooyer
post_url: https://x.com/GrowlerEnjooyer/status/2091369423873728620
event_date: 2026-08-23
date_precision: day
kind: voice
stance: comparison
frameworks: omp, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Replying to Armin's no-Rust-port note, this user said OMP was already doing the split Pi should do: a new core in Rust with Python for extensibility.
why_it_matters: That is the counter to Pi's "we need a runtime language, therefore not Rust": OMP is betting you can keep a runtime language on the plugin side and still native the core.
===END===

COVERAGE_NOTE: Window 2026-07-20 to 2026-08-23. Searched X keyword/latest and thread fetch for omp2, "oh-my-pi"/"oh my pi", rust rewrite, ripping Pi, from:_can1357, from:oleksoleksoleks, from:mitsuhiko, from:badlogicgames, from:pidotdev, from:domenkozar, conversation_id 2090910311746297954 (Olek/OMP2), 2091175471446638993 (Armin Pi 2), 2088281208803238301 (first public notice), 2089339944934511002 (Can omp vs omp2), plus quote-posts of Olek's Pi-problems post. First sighting in-window is 2026-08-14: Can links an omp2 Rust path, Chris Allen notices a rewrite, Can says look at the omp2 branch. Mid-window 2026-08-17 Can compares omp vs omp2 and says Pi is the limiting factor; Mario teases Pi 2.0 as a separate event. 2026-08-20 Armin says Pi's new harness is on the dev branch. 2026-08-21 morning Can delays omp2 for a blob-broker; that evening Olek (bio: harness engineering at omp.sh) makes the public "Rust rewrite, Pi ripped out, Bun replaced by CPython" announcement and answers architecture questions. 2026-08-22 Mario objects (Pi has no Bun dependency); Can says the projects are not associated; Armin runs a Pi 2 AMA and says they are not porting Pi to Rust. 2026-08-23 is mostly pointers at the branch and a "Pi should copy OMP's Rust+Python split" reply. What could not be reached: x_thread_fetch failed on root 2090910311746297954 (API missing conversation_id / post_map), so that origin URL is taken from the conversation_id shared by the replies plus an independent web index of the same post; quote-graph search was incomplete; Olek's DMs and Can's teased "harness 101" essay were not public in this window; @pidotdev did not address the Rust rewrite; no omp2 tag, release, or install-script channel was claimed on X. Sweep is thin before 2026-08-14 (no omp2 hits 2026-07-20 through 2026-08-13) and thin on Pi-side rust talk except Armin's refusal. Identity ruled out: @can1357 is not Can Boluk (real handle @_can1357, Can Boluk); @MarioZechner is not the Pi author (real handle @badlogicgames, Mario Zechner, now at Earendil with Armin); HeyPi, Inflection Pi, Open Multiplayer, and current OMP's already-shipped Rust N-API natives are not omp2; pi_agent_rust (Dicklesworthstone, @doodlestein) and Domen Kozar's private Rust port are separate projects, not can1357/oh-my-pi and not earendil-works/pi. Status as of last post: omp2 is described as a pre-release branch, not a shipped binary; Pi 2 is described as a harness rewrite that is not a Rust port.
