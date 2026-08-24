I'll chase the Codex CLI design-philosophy thread on X: maintainer posts first, then replies and counter-reads, all inside the window. Starting with the publication method, known Codex people, and public threads.I'll load the Codex contract, known maintainer handles, and prior social harvests so the X sweep starts from named people rather than brand noise.I'll pull known Codex maintainer handles from prior harvests, then search X for their design-philosophy posts in the window.I'll pull known Codex voices from prior harvests and GitHub, then run dated X searches for design, Guardian, and release-cadence posts.I have the named Codex voices. Next I’ll search their posts and the Guardian / approvals / cadence threads with dated queries so IDs stay real.Tibo’s harness-as-body post is a lead. I’ll pull that thread and hunt Guardian, sandbox, cadence, and “let the model decide” posts next.Several Tibo posts already hit harness, sandbox, and cadence. I’ll fetch those threads and search the rest of the team plus Guardian / heuristics / alpha-vs-stable talk.Tibo’s “model in the driver seat” line is the bitter-lesson post. I’ll pull that thread and chase Guinness Chen plus Guardian, cadence, and counter-reads.Auto-review, sandboxing, and “model in the driver seat” are the core thread. I’ll fetch those conversations and look for Guardian, cadence, and critic replies.Rohan Varma’s June 2 factory post and the Kundel “Behind the Harness” talk look like origin points. I’ll fetch those and keep chasing Guardian, cadence, and critics.Tibo’s “don’t patch the harness if the model will eat it” line is the design claim. I’ll hunt the original, then Kundel, Lopopolo, Guardian, and cadence posts.I have the thread mapped: originating maintainer posts, replies, and counter-reads, with real status IDs only. Compiling the records next.

===POST===
handle: @TheRohanVarma
post_url: https://x.com/TheRohanVarma/status/2061680932630024321
event_date: 2026-06-02
date_precision: day
kind: voice
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A Codex teammate framed the product as a software factory whose job is to stop software creation being the bottleneck on ambition. He said the models already look close and that the remaining limiter is giving agents the right tools at the right moments, pointing at a prior Harness Engineering writeup.
why_it_matters: This is an early in-window statement of the team's bet that capability now lives in tool access and timing rather than in more hand-written loop code; the cited writeup to check is the Harness Engineering post by @_lopopolo that he named.
===END===

===POST===
handle: @guinnesschen
post_url: https://x.com/guinnesschen/status/2068062280345162047
event_date: 2026-06-19
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A Codex teammate said threads can now move between a laptop and a remote host, including uncommitted work, and that Codex itself can run that handoff rather than the operator stitching environments together.
why_it_matters: If true, operators stop treating local and remote as separate products; verify against Codex docs and github.com/openai/codex for the handoff/worktree behavior he described in the follow-up.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2068120572673077274
event_date: 2026-06-19
date_precision: day
kind: voice
stance: praise
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Quoting that handoff, Tibo argued that once the model is allowed to drive the work you actually need less supporting infrastructure, and that the team is removing boundaries one at a time.
why_it_matters: This is the team's public bitter-lesson phrasing: prefer model-run orchestration over extra scaffolding, which is the opposite of the thickening-harness story many operators were telling.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2071360845309714620
event_date: 2026-06-28
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: After users saw unexpected GPT-5.4 traffic, Tibo said auto-review runs on GPT-5.4 and that the product does not secretly reroute the main model. He had just asked whether the people complaining were even using auto-review.
why_it_matters: Operators reading usage dashboards need to know a second model may be the approval classifier; check Codex usage UI and docs rather than treating all 5.4 spend as the coding model.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2071636285807059315
event_date: 2026-06-29
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Tibo told advanced users the team had replaced coarse sandbox modes with reusable, inheritable permission profiles that bind OS-enforced file rules, including env-file globs, to per-domain network and Unix sockets, plus fail-closed admin allowlists, aiming at least privilege per task.
why_it_matters: This is the sandboxing philosophy in one post: stop picking a global jail, start composing per-task OS policy; verify in github.com/openai/codex and the config docs before rewriting approval workflows around it.
===END===

===POST===
handle: @dkundel
post_url: https://x.com/dkundel/status/2075361122228834517
event_date: 2026-07-09
date_precision: day
kind: claim
stance: comparison
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Answering Ethan Mollick's worry that ChatGPT Work was a weaker, more locked-down cousin of Codex, Dominik said Work and Codex are the same agent with UI differences, and that sandboxing plus auto-review is how they keep that agent usable without dumbing it down.
why_it_matters: If operators treat Work as the safe product and Codex CLI as the powerful one, this says the control plane is shared and the gate is sandbox plus classifier, not a separate weaker model; check desktop versus CLI policy surfaces.
===END===

===POST===
handle: @_lopopolo
post_url: https://x.com/_lopopolo/status/2077149347528261712
event_date: 2026-07-14
date_precision: day
kind: voice
stance: criticism
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: The former OpenAI engineer whose Harness Engineering writeup Rohan had cited, now at Google Cloud, told someone they were over-indexing on skills. He said the job is to give the model tools and context and let it work, with skill descriptions written as real prose and most sessions carrying no more than a handful of skills.
why_it_matters: This is a credible outside reading of the same design family: skills are for the model, not a growing rulebook, which cuts against operators stuffing AGENTS.md and skill packs until the harness is the product.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2077630111499882637
event_date: 2026-07-16
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Tibo said a handful of unexpected file-deletion reports clustered on full-access runs with sandboxing and auto-review off, where the model reused HOME for temp work and then deleted HOME by mistake. He said even that mode should not behave this way and that the team would add developer-message guidance, steer people toward safer permission modes, and add more harness safeguards, with a later post-mortem.
why_it_matters: The team's own incident read treats sandbox plus auto-review as the real gate, not the model's good intentions; operators still on full-access yolo should treat this as a reason to re-audit that mode against the later recap.
===END===

===POST===
handle: @born2code
post_url: https://x.com/born2code/status/2077712273057944063
event_date: 2026-07-16
date_precision: day
kind: voice
stance: frustration
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: In that deletion thread, an operator said people run yolo because stopping to approve every step makes Codex unusable, and that they still want the sandbox to stop an rm of home without making them babysit every command.
why_it_matters: This is the operator counter to the team's layered-review design: the scarce resource is attention, so a classifier that adds prompts can push people back into full access.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2079433708986319143
event_date: 2026-07-21
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: When a user asked how to kill an approval popup, Tibo did not offer a disable switch. He told them the intended path is the Approve for me mode.
why_it_matters: Publicly, the classifier is a named permission mode, not an invisible extra; check the in-app sandbox modes and whether Approve for me is the auto-review path later described in the August recap.
===END===

===POST===
handle: @lucasmeijer
post_url: https://x.com/lucasmeijer/status/2082094287106216077
event_date: 2026-07-28
date_precision: day
kind: claim
stance: criticism
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Lucas said OpenAI keeps calling Codex an open-source harness while the UI code for that harness is not actually in the public tree.
why_it_matters: This is the identity fight the team then answered: if you plan to fork or embed, you need to know whether you are getting the agent loop, the TUI, or the desktop app; start from github.com/openai/codex rather than from the slogan.
===END===

===POST===
handle: @pvncher
post_url: https://x.com/pvncher/status/2082096823213191208
event_date: 2026-07-28
date_precision: day
kind: claim
stance: comparison
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Codex DX at OpenAI answered Lucas first and drew a different line than Tibo later would: the harness, in his telling, is the app server; the app layer on top is closed; he pointed people wanting an open UI at Theo's t3 code.
why_it_matters: Two teammates split the definition on the same day, which matters for anyone embedding: app-server protocol versus agent-loop crate versus desktop binary are not the same artifact.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2082241730972442912
event_date: 2026-07-28
date_precision: day
kind: claim
stance: comparison
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Hours later Tibo replied on the same thread with a narrower definition: the agent code is the harness, the Codex app is an app, and he linked the public repo as that agent code.
why_it_matters: Operators and embedders should not treat "open-source Codex" as the ChatGPT desktop UI; the receipt he offered is https://github.com/openai/codex, which still leaves the closed app layer as a separate product.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2084483765158719542
event_date: 2026-08-04
date_precision: day
kind: voice
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Tibo said recent results made Codex look like a good harness, then immediately said it would look primitive in a couple of months because the next models need more than a laptop.
why_it_matters: The person shipping the harness is telling operators not to treat today's CLI as the durable layer, which undercuts both Codex-as-moat marketing and long-lived wrappers built around the current loop.
===END===

===POST===
handle: @vihaanmotwani
post_url: https://x.com/vihaanmotwani/status/2085124301863408082
event_date: 2026-08-05
date_precision: day
kind: voice
stance: comparison
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Quoting that primitive-in-months post, Vihaan said that back in May at AI Engineer he had asked Tibo when the team patches the harness versus waiting for a better model, and that Tibo's answer was they often ask how soon the model itself will make a harness fix unnecessary.
why_it_matters: This is the only public X receipt of that May design rule, and it is the explicit version of fewer-heuristics: do not hardcode a fix the next model will eat. The original May remark was not found as its own post.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2086186284528374095
event_date: 2026-08-08
date_precision: day
kind: voice
stance: praise
frameworks: codex, claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: After the Claude Code account said a reported ban for running another model inside that harness was not policy, Tibo said freedom of harness matters and that users should pick the model that is best for them, while also saying he was not switching teams.
why_it_matters: The Codex lead is arguing the model and the loop should be separable, which is the opposite of first-party lock-in and is the same bet as running GPT-5.6 inside Claude Code or other CLIs.
===END===

===POST===
handle: @pvncher
post_url: https://x.com/pvncher/status/2086829227886694782
event_date: 2026-08-10
date_precision: day
kind: voice
stance: comparison
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Replying to Thorsten Ball's prediction that nobody would still be talking about harnesses by year end, Eric only half agreed. He said Codex computer-use and Chrome use are harness features that still add leverage, and that multi-agent work is mostly on the model but still needs harness primitives done right.
why_it_matters: This is the in-team limit on bitter-lesson maxing: they will not delete browser and computer-use scaffolding just because the model improved, which is the live tension with Tibo's less-infrastructure line.
===END===

===POST===
handle: @pvncher
post_url: https://x.com/pvncher/status/2088659020856828120
event_date: 2026-08-15
date_precision: day
kind: claim
stance: comparison
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Asked whether multi-agent is a model property or a harness property, and whether other harnesses can copy it, Eric said it is tools the models were trained to use well, then built into the Codex harness.
why_it_matters: If subagents are trained tools rather than a portable protocol, operators should not expect a thin third-party loop to match Codex multi-agent behavior without those tools; verify against the spawn/send-input shape in github.com/openai/codex.
===END===

===POST===
handle: @patrickc
post_url: https://x.com/patrickc/status/2088978205546017219
event_date: 2026-08-16
date_precision: day
kind: voice
stance: criticism
frameworks: codex, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Patrick Collison said he likes agentic coding harnesses but does not want them to default to the terminal, because the terminal is low-density and thin on UI, and he compared the situation to how long language REPLs took to leave the terminal for notebooks.
why_it_matters: This is the strongest outside argument that the open CLI is the wrong primary surface, which is the setup for OpenAI's closed app and for app-owned embeddings rather than a TUI-first future.
===END===

===POST===
handle: @romainhuet
post_url: https://x.com/romainhuet/status/2088983216724078797
event_date: 2026-08-16
date_precision: day
kind: voice
stance: praise
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: OpenAI's head of developer experience agreed and said a new kind of coding harness needs a new kind of interface, naming computer use and in-browser annotations as reasons they built the Codex app rather than stopping at the terminal.
why_it_matters: Combined with Tibo's agent-code-is-the-harness line, this is the split: the loop can be open and embeddable, the preferred operator surface is a richer closed app.
===END===

===POST===
handle: @acsmif
post_url: https://x.com/acsmif/status/2089862480755622109
event_date: 2026-08-18
date_precision: day
kind: claim
stance: criticism
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: An operator warned that unless approval_policy is set to never, auto-review will chew weekly usage, and that for a stretch in early August the product ignored that setting entirely, so people should update the app.
why_it_matters: This is the cost-and-control counter to Approve for me as the safe default; check config and the 0.148.0/0.149.0 line before treating auto-review as a free classifier.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2089891927659585918
event_date: 2026-08-19
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Tibo recapped the deletion work as layered, not a single switch: tighter instructions around temp dirs and HOME, stronger execution checks that escalate risky deletes into review, Full access made harder to turn on by accident, Auto-review updated to catch destructive actions, plus replay evals and training-data filtering. He told people to stay current and to use Ask for approval or Approve for me except in recoverable environments.
why_it_matters: This is the complete in-window statement of sandboxing plus classifier design, mixing prompts, OS policy, a review model, and training; verify against rust-v0.148.0 / rust-v0.149.0 and the auto-review feature flags rather than taking the recap as the default-on state of Guardian V2.
===END===

===POST===
handle: @CoreyGallon
post_url: https://x.com/CoreyGallon/status/2090096395826929791
event_date: 2026-08-19
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Summarizing Dominik Kundel's Codex, Behind the Harness talk, Corey said the loop is Apache-2 Rust, context is budgeted, tools can be deferred, subagents and background terminals share one spawn/send shape, browser use is a persistent Playwright REPL, sandboxing is Seatbelt / Bubblewrap / a custom Windows sandbox, and auto-review is a read-only sub-agent that cannot spawn children and judges escalations against what the user authorized.
why_it_matters: This is the most detailed public X account of the architecture, including auto-review as a nested agent rather than a regex pack, but it is secondhand; the primary to check is the AI Engineer talk itself plus github.com/openai/codex, not this summary.
===END===

===POST===
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
gist: The official developers account said teams are embedding the open-source Codex harness inside existing tools, with the application keeping interface, context, tools, and approvals while the harness runs the agent loop, and linked the Codex as a platform post.
why_it_matters: This is the app-owned-approvals design in official language; read https://developers.openai.com/blog/codex-as-a-platform against the SDK/app-server docs before assuming the CLI's auto-review is the gate you get when you embed.
===END===

===POST===
handle: @acsmif
post_url: https://x.com/acsmif/status/2090477764109533376
event_date: 2026-08-20
date_precision: day
kind: claim
stance: criticism
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The same operator said a charitable reading of vanished auto-review analytics is that those reviews were moved onto guardian-v2, which was never shown in the dashboard, and that charging for an invisible classifier is unacceptable.
why_it_matters: This is the only in-window public use of Guardian V2 by name from a user arguing with the team, and it cuts against Tibo's safety recap as a visible, operator-owned control; the primary record still has to say whether guardianv2 is on and billed.
===END===

===POST===
handle: @0genlab
post_url: https://x.com/0genlab/status/2090804982987857975
event_date: 2026-08-21
date_precision: day
kind: claim
stance: criticism
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Quoting the platform post, an operator said wiring the harness in is the easy part, then reported that running the MCP-add command from inside a Codex session failed because the sandbox refused writes to the Codex config directory, so the agent could not persist its own config.
why_it_matters: Least-privilege sandboxing can lock the harness out of its own state; if you embed Codex as a loop inside an app, the host has to own config writes that the jail will deny. Reproduce against `codex mcp add` and sandbox policy before promising self-configuration.
===END===

===POST===
handle: @onusoz
post_url: https://x.com/onusoz/status/2091434969151267162
event_date: 2026-08-23
date_precision: day
kind: voice
stance: criticism
frameworks: codex, pi-coding-agent, openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: An OpenClaw maintainer argued that models should be judged on a thin, stable, standardized harness rather than on each lab's private one, comparing vendor-harness scores to taking an exam with a custom pencil, and named mini-swe-agent, Terminus, or vanilla Pi as the kind of loop that should stay boring over time.
why_it_matters: This is the eval-side attack on Codex's body-like harness: if the interesting behavior is in the loop, public model rankings are not comparable, which is why Tibo answered it the same day.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2091563530189521277
event_date: 2026-08-23
date_precision: day
kind: voice
stance: criticism
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Tibo rejected the standardized-classroom analogy. He said a better picture is the brain being dropped into the pencil, and that a harness is much closer to a body than to the exam hall.
why_it_matters: End of window, this is the team's metaphysics: Codex is not interchangeable scaffolding around a model, it is the body the model is trained to inhabit, which is why they keep computer-use, auto-review, and app-server in the loop instead of thinning it to Pi-like vanilla.
===END===

===POST===
handle: @verysmallwoods
post_url: https://x.com/verysmallwoods/status/2091623075788050932
event_date: 2026-08-23
date_precision: day
kind: voice
stance: criticism
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Quoting the platform announcement, a reader said Chinese coverage had treated the post as OpenAI newly open-sourcing a harness, and that after reading the repo it was the same github.com/openai/codex tree that had already been public, with the blog explaining how to use those pieces rather than dumping new source.
why_it_matters: Cuts against the week's "Codex just open-sourced its harness" headline; anyone writing the thread should check the existing Apache-2 repo, not treat 20 August as a licensing event.
===END===

COVERAGE_NOTE: Window 2026-06-01 to 2026-08-23. Searched X Latest for from:thsottiaux, from:embirico, from:jeffintime, from:guinnesschen, from:TheRohanVarma, from:dkundel, from:romainhuet, from:ajambrosino, from:pvncher, from:joey_trasatti, from:OpenAIDevs, from:_lopopolo, from:bolinfest; keyword queries for Codex + harness/guardian/sandbox/heuristic/alpha/stable/auto-review/permission profiles/driver seat/app server; quote-posts of the design posts; semantic search for CLI design philosophy. Identity: this is OpenAI Codex the coding agent (github.com/openai/codex, npm @openai/codex), not the 2021 Codex model, not codex.storage, not Cursor. Ruled out Guardian-as-game/angel/web3 and @KaliCodex. Timeline: pre-window origin, not found as its own post, is Tibo at AI Engineer in May saying they often skip a harness patch if the next model will make it unnecessary (only survives as Vihaan's 2026-08-05 recollection). A second pre-window origin is dkundel 2026-05-23 on embedding via app server (https://x.com/dkundel/status/2058253362991419435 and https://x.com/dkundel/status/2058252356824019027), which the 2026-08-20 OpenAIDevs platform post completes. In-window the argument opens 2026-06-02 with Rohan Varma's factory/tools-at-the-right-moment post, then 2026-06-19 Guinness local/remote handoff plus Tibo's less-infrastructure line. Late June is sandbox and auto-review (permission profiles; auto-review as GPT-5.4 spend). July is the deletion incident, Approve for me as the named mode, then the OSS-definition fight (Lucas: UI missing; pvncher: harness equals app server; Tibo: harness equals agent code at github.com/openai/codex). August is Tibo calling today's harness temporary, the May bitter-lesson quote resurfacing, freedom-of-harness versus Claude Code, pvncher insisting computer-use and trained tools still belong in the loop, Patrick/Romain on leaving the terminal, Tibo's layered safety recap, acsmif on auto-review cost and an invisible guardian-v2, official app-owned approvals, then 2026-08-23 Onur's standardized-eval post and Tibo's harness-as-body reply. What I could not reach: full reply trees on Tibo's deletion post (~722 replies) and safety recap (~1056 replies); sampled heads were mostly usage-reset begging, not design. joey_trasatti returned no design posts. bolinfest, original CLI author, had no Codex posts in the window. embirico and jeffintime posted product and model notes, not harness architecture. Kundel's Behind the Harness talk lives on AI Engineer YouTube; he did not post the architecture walkthrough himself, only Corey Gallon's secondhand notes. No named Codex teammate used the word Guardian on X in this window; they say auto-review and Approve for me. No maintainer post explained rare stables versus frequent alphas. Thin on CLI-only Rust internals (exec-server, feature flags, Guardian V2 default-off) because that conversation is in the repo, not on X.
