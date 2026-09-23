I'll chase the Codex harness thread on X: what maintainers and operators said OpenAI deleted, kept, and grew. First I'll load the discovery rules and watchlist, then hunt the originating posts.There's already a Codex study run and a published feature. I'll read those plus the harvest workflow, then search X for the maintainer thread.The existing Codex study already harvested this thread. I'll read those posts, then re-search X so we don't miss maintainer follow-ups.The prior sweep started in June 2026; this window opens April 2025. I'll search maintainers and operators on sandbox, Guardian, approvals, rules, and deleted scaffolding across the full range.The June–August 2026 harvest is already on file. Next I’ll cover April 2025 through May 2026, plus Guardian, rules, deleted scaffolding, and the counter-reads.Early window hits: Bolin on approval modes at launch, Tibo on sandbox deletions in 2025, and the official Auto-review and Windows sandbox posts. I'll pull those threads and hunt Guardian, rules, and scaffolding talk.I have verified URLs across the full window. Compiling only substantive posts: maintainer doctrine, sandbox/approvals/Guardian/rules, and the counter-reads.

===POST===
handle: @bolinfest
post_url: https://x.com/bolinfest/status/1912570039171166414
event_date: 2025-04-16
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: On launch day the original Codex CLI author said approval modes already lived in the CLI and docs, and that an operator could pick a mode per action or per session.
why_it_matters: This is the in-window origin of the approvals layer; check the April 2025 Codex CLI docs and github.com/openai/codex rather than treating later Guardian work as the first gate.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/1964843869163684271
event_date: 2025-09-08
date_precision: day
kind: claim
stance: question
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: After an operator said every ls/sed/grep needed a click, Tibo asked whether they were on Windows and pointed them at the repo's sandbox-and-approvals doc.
why_it_matters: Early public admission that the default approval tax was a Windows/sandbox-policy problem, not just user error; the linked page at the time was https://github.com/openai/codex/blob/main/docs/sandbox.md (a moving main URL).
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/1974174154237882397
event_date: 2025-10-03
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Shipping CLI 0.44, he listed reduced repetitive approvals on Windows among the user-facing changes, plus streamable HTTP MCP.
why_it_matters: 2025 already shows the team deleting approval friction rather than adding more prompts; verify against the 0.44 CLI release notes before treating 2026 Auto-review as the first fix.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/1978827017387753567
event_date: 2025-10-16
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Nine months before the HOME-deletion recap, he said the team was building better guards against destructive file deletes when the model ran outside the sandbox.
why_it_matters: The July 2026 incident is a continuation, not a new category; operators should read later sandbox work against this 2025 promise rather than as a one-off apology.
===END===

===POST===
handle: @OpenAIDevs
post_url: https://x.com/OpenAIDevs/status/1991217494623740305
event_date: 2025-11-19
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: With GPT-5.1-Codex-Max they said Windows Agent mode could read, write, and run in the working folder with fewer approval clicks, behind a new experimental Windows sandbox that limits filesystem and network.
why_it_matters: First official naming of a Windows sandbox as the way to drop approval volume; the doc they pointed at is https://learn.chatgpt.com/docs/windows/windows-sandbox.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/1991764864973537610
event_date: 2025-11-21
date_precision: day
kind: voice
stance: comparison
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Answering someone who said the harness itself was the bottleneck as models turned over, he agreed it is both what lets capability through and what holds it back, and that this release had widened the gap between what the model can do and what the harness can express.
why_it_matters: This is the 2025 version of later delete-scaffolding talk: if the harness is the constraint, hand-written loop code is what you should expect them to rip out.
===END===

===POST===
handle: @OpenAIDevs
post_url: https://x.com/OpenAIDevs/status/2019221475849564657
event_date: 2026-02-05
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They said every Codex surface (app, CLI, web, IDE) shares one harness, and they were documenting the App Server JSON-RPC protocol so others can embed that loop.
why_it_matters: This is the grow side: protocol and embed API rather than a thinner CLI; check App Server docs and github.com/openai/codex before treating the desktop UI as the open harness.
===END===

===POST===
handle: @OpenAIDevs
post_url: https://x.com/OpenAIDevs/status/2029252477179314350
event_date: 2026-03-04
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They said bringing Codex to Windows required building a Windows-native agent sandbox using restricted tokens, filesystem ACLs, and dedicated sandbox users so PowerShell stays usable, and they pointed at the open-source implementation.
why_it_matters: OS-enforced sandbox is what they kept and grew; verify the Windows sandbox code in github.com/openai/codex rather than assuming Seatbelt/Bubblewrap were simply ported.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2047387017974337611
event_date: 2026-04-23
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Launching GPT-5.5 features, he told people to update the app for a new auto-review mode and framed it as much safer than full-access yolo, alongside browser use and non-dev mode.
why_it_matters: The team's public replacement for yolo is a reviewer agent, not a bigger allowlist; that is the design to check in the 23 April 2026 app/CLI channel, not a disable-approvals switch.
===END===

===POST===
handle: @OpenAIDevs
post_url: https://x.com/OpenAIDevs/status/2047436655863464011
event_date: 2026-04-23
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official developers account introduced Auto-review as a mode that lets Codex run longer with fewer human approvals because a separate agent checks higher-risk steps in context before they execute.
why_it_matters: This is the public product name for what operators later call Guardian; treat it as a claim about a second agent in the approval seat and verify against Codex docs, not against the CLI flag table alone.
===END===

===POST===
handle: @LLMJunky
post_url: https://x.com/LLMJunky/status/2047438719917957190
event_date: 2026-04-23
date_precision: day
kind: claim
stance: praise
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Replying to the launch, an operator said they had already been using auto-review under the name guardian in the CLI for weeks and that it restored flow because the agent stopped interrupting.
why_it_matters: First in-window public alias of Auto-review as Guardian, and a reminder the CLI had the reviewer before the branded announcement; still needs a primary check of when the mode actually shipped.
===END===

===POST===
handle: @majatrebacz
post_url: https://x.com/majatrebacz/status/2050039712883363894
event_date: 2026-05-01
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: An OpenAI alignment researcher said clicking approve is the hard part, that agents can take that click, and pointed at the Auto-review writeup.
why_it_matters: Alignment, not just the product team, is claiming a model can sit in the approval seat; the receipt they offered is https://alignment.openai.com/auto-review.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2050989326570532919
event_date: 2026-05-03
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Quoting that writeup, Tibo said Auto-review had shipped the prior week, was already the default inside OpenAI, and cut the volume of human approvals by about two hundred times.
why_it_matters: Internally default-on is not the same as default-on in the product an operator installs; the 200x figure is theirs and has to be read against the alignment blog, not as a CLI default.
===END===

===POST===
handle: @OpenAIDevs
post_url: https://x.com/OpenAIDevs/status/2054735161166819377
event_date: 2026-05-14
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They framed the Windows sandbox as the answer to a forced choice between constant approval prompts and full machine access, and linked a long writeup of how they built it.
why_it_matters: Official doctrine: keep the OS jail, delete the prompt storm, do not hand the user yolo as the only alternative; primary is https://openai.com/index/building-codex-windows-sandbox/.
===END===

===POST===
handle: @dkundel
post_url: https://x.com/dkundel/status/2058253362991419435
event_date: 2026-05-23
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: On embedding, he said App Server is for wrapping your own local UI around the Codex harness, that you must use the auth flow it exposes, and that there is no general-purpose OAuth for rolling your own stack.
why_it_matters: Approvals and auth stay with the host app when you embed; this is the May origin of the August platform post. Docs he had already cited: https://learn.chatgpt.com/docs/app-server.
===END===

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
gist: A Codex PM said models already look close to end-to-end software creation and that the remaining limiter is giving agents the right tools at the right moments, pointing at the internal Harness Engineering writeup by Ryan Lopopolo.
why_it_matters: Team bet that capability lives in tool access and timing, which licenses deleting loop heuristics; the cited writeup later posted at https://openai.com/index/harness-engineering/.
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
gist: Quoting a teammate's local-to-remote thread handoff, he said they are removing boundaries one at a time and that once the model is allowed to drive the work you actually need less supporting machinery.
why_it_matters: This is the bitter-lesson phrasing against the thickening-harness story; the shipping claim underneath is Guinness Chen's handoff post at https://x.com/guinnesschen/status/2068062280345162047.
===END===

===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2071360845309714620
event_date: 2026-06-28
date_precision: day
kind: claim
stance: criticism
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: After usage-dashboard confusion, he said auto-review runs on GPT-5.4 and that the product does not secretly reroute the main coding model, and told people to stop spreading the opposite story.
why_it_matters: Operators reading 5.4 spend need to know a second model may be the approval classifier; check Codex usage UI and docs rather than treating all 5.4 traffic as the coding model.
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
gist: He told advanced users they had replaced coarse sandbox modes with reusable, inheritable permission profiles that bind OS-enforced file read/write/deny rules, including env-file globs, to per-domain network and Unix sockets, plus fail-closed admin allowlists, aiming at least privilege per task.
why_it_matters: This is the keep-and-grow sandbox move: delete global jail presets, keep OS policy, grow composable profiles; verify in github.com/openai/codex config docs before rewriting workflows around the old sandbox_mode knobs.
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
gist: Answering Ethan Mollick's worry that ChatGPT Work was a weaker locked-down cousin of Codex, Dominik said Work and Codex are the same agent with UI differences, and that sandboxing plus auto-review is how they keep that agent usable without dumbing it down.
why_it_matters: If operators treat Work as the safe product and Codex CLI as the powerful one, this says the gate is sandbox plus classifier, not a separate weaker model.
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
gist: The former OpenAI engineer whose Harness Engineering writeup the team cites, now at Google Cloud, told someone they were over-indexing on skills: give the model tools and context and let it work, write skill descriptions as real prose, and keep most sessions to a handful of skills.
why_it_matters: Credible outside reading of the same family: skills are for the model, not a growing rulebook, which cuts against stuffing AGENTS.md until the harness is the product.
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
gist: He said a handful of unexpected file-deletion reports clustered on full-access runs with sandboxing and auto-review off, where the model reused HOME for temp work and then deleted HOME by mistake, and that the team would add developer-message guidance, steer people toward safer permission modes, add harness safeguards, and publish a later post-mortem.
why_it_matters: The team's own incident read treats sandbox plus auto-review as the real gate, not the model's good intentions; operators still on full-access yolo should treat this as a reason to re-audit that mode against the August recap.
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
why_it_matters: Operator counter to layered review: scarce resource is attention, so a classifier that adds prompts or cost can push people back into full access.
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
gist: When a user asked how to kill an approval popup, he did not offer a disable switch and instead told them the intended path is the Approve for me mode.
why_it_matters: Publicly, the classifier is a named permission mode, not an invisible extra; check in-app sandbox modes and whether Approve for me is the auto-review path later described in the August recap.
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
gist: After a reader said the open-source-harness slogan hid a closed UI, Tibo drew a narrower line: the agent code is the harness, the Codex app is an app, and he linked the public repo as that agent code.
why_it_matters: Operators and embedders should not treat open-source Codex as the ChatGPT desktop UI; the receipt he offered is https://github.com/openai/codex.
===END===

===POST===
handle: @pashmerepat
post_url: https://x.com/pashmerepat/status/2082583847011799056
event_date: 2026-07-29
date_precision: day
kind: voice
stance: criticism
frameworks: codex, openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A Codex teammate arguing about persistent agents said harnesses keep trying to solve discretion with permissions, workspace isolation, and ever-thicker application scaffolding, and that this is necessary for now but likely futile as the final answer because discretion has to live in the model.
why_it_matters: In-team limit on growing the permission layer: if judgment belongs in the model, more rules files are a workaround, not the destination.
===END===

===POST===
handle: @OpenAI
post_url: https://x.com/OpenAI/status/2082878180478910571
event_date: 2026-07-30
date_precision: day
kind: claim
stance: announcement
frameworks: codex
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The company account said Auto-review in the ChatGPT app and Codex CLI was moving from GPT-5.4 to GPT-5.6 Luna, and that with Luna's new price they expected Auto-review to cost about ten times less.
why_it_matters: The reviewer is a billed second model whose price they are changing; operators watching weekly limits should check the 30 July 2026 pricing notes rather than assuming the classifier is free.
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
gist: He said recent results made Codex look like a good harness, then immediately said it would look primitive in a couple of months because the next models need more than a laptop.
why_it_matters: The person shipping the harness is telling operators not to treat today's CLI as the durable layer, which undercuts both Codex-as-moat marketing and long-lived wrappers around the current loop.
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
gist: Quoting that primitive-in-months post, an AI Engineer attendee said that back in May he had asked Tibo when the team patches the harness versus waiting for a better model, and that Tibo's answer was they often ask how soon the model itself will make a harness fix unnecessary. He linked a timestamp in the talk.
why_it_matters: Only public X receipt of that May design rule, which is the explicit version of fewer-heuristics. Original May remark was not found as its own post; the talk link he gave is https://www.youtube.com/watch?v=_xQnSNlBP_w&t=6390s.
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
why_it_matters: Codex lead arguing the model and the loop should be separable, which is the opposite of first-party lock-in and sits in tension with the later harness-as-body line.
===END===

===POST===
handle: @thorstenball
post_url: https://x.com/thorstenball/status/2086767485852717256
event_date: 2026-08-10
date_precision: day
kind: voice
stance: criticism
frameworks: codex, pi-coding-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: The Amp author argued the thing people still call a harness (system prompt, tools, UI around a single conversation) is no longer where the leverage is, and that slash commands and manual context management will not be what teams talk about by year end.
why_it_matters: Strongest outside case that single-session scaffolding should be deleted; this is the post Eric Provencher then half-disagreed with on computer-use and multi-agent primitives.
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
gist: Replying to Thorsten, Eric only half agreed. He said Codex computer-use and Chrome use are harness features that still add leverage, and that multi-agent work is mostly on the model but still needs harness primitives done right.
why_it_matters: In-team limit on bitter-lesson maxing: they will not delete browser and computer-use scaffolding just because the model improved, which is the live tension with Tibo's less-infrastructure line.
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
gist: Asked whether multi-agent is a model property or a harness property, he said it is tools the models were trained to use well, then built into the Codex harness.
why_it_matters: If subagents are trained tools rather than a portable protocol, operators should not expect a thin third-party loop to match Codex multi-agent behavior; verify against the spawn/send-input shape in github.com/openai/codex.
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
why_it_matters: Cost-and-control counter to Approve for me as the safe default; check config and the 0.148.0/0.149.0 line before treating auto-review as a free classifier.
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
gist: Recapping the deletion work as layered, not a single switch: tighter instructions around temp dirs and HOME, stronger execution checks that escalate risky deletes into review, Full access made harder to turn on by accident, Auto-review updated to catch destructive actions, plus replay evals and training-data filtering. He told people to stay current and to use Ask for approval or Approve for me except in recoverable environments.
why_it_matters: Complete in-window statement of sandboxing plus classifier design, mixing prompts, OS policy, a review model, and training; verify against rust-v0.148.0 / rust-v0.149.0 and auto-review feature flags rather than taking the recap as the default-on state of Guardian V2.
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
gist: Summarizing Dominik Kundel's Behind the Harness talk, he said the loop is Apache-2 Rust, context is budgeted, tools can be deferred, subagents and background terminals share one spawn/send shape, browser use is a persistent Playwright REPL, sandboxing is Seatbelt / Bubblewrap / a custom Windows sandbox, and auto-review is a read-only sub-agent that cannot spawn children and judges escalations against what the user authorized.
why_it_matters: Most detailed public X account of the architecture, including auto-review as a nested agent rather than a regex pack, but secondhand; primary to check is the AI Engineer talk plus github.com/openai/codex, and slides at https://behind-the-harness.openai.chatgpt.site/.
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
why_it_matters: App-owned-approvals design in official language; read https://developers.openai.com/blog/codex-as-a-platform against the SDK/app-server docs before assuming the CLI's auto-review is the gate you get when you embed.
===END===

===POST===
handle: @the_niresh
post_url: https://x.com/the_niresh/status/2090453823127212519
event_date: 2026-08-20
date_precision: day
kind: claim
stance: praise
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: An operator said Codex still ships a package whose only job is deciding whether a command may run, described it as a readable, testable rulebook rather than a banned-word list, and said they were rewriting their own hook-and-allowlist setup to match it.
why_it_matters: Direct counter to a deleted-scaffolding reading: they may have removed default allowlists, but a hand-written exec-policy crate is still there to inspect in github.com/openai/codex.
===END===

===POST===
handle: @acsmif
post_url: https://x.com/acsmif/status/2090472354313064556
event_date: 2026-08-20
date_precision: day
kind: claim
stance: criticism
frameworks: codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said a mid-August auto-review change started firing a review on every sandboxed shell/exec command, which made reviews more frequent and expensive and ignored some approval settings, and that a later update narrowed reviews back to a smaller command set.
why_it_matters: If true, Guardian grew in scope then got trimmed inside two weeks; operators should not freeze a workflow on the 7-13 August behavior. Check the 0.148/0.149 line and approval_policy handling.
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
why_it_matters: Only in-window public use of Guardian V2 by name from a user arguing with the team; the primary record still has to say whether guardianv2 is on and billed.
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
why_it_matters: Least-privilege sandboxing can lock the harness out of its own state; if you embed Codex as a loop, the host has to own config writes the jail will deny. Reproduce against `codex mcp add` and sandbox policy.
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
why_it_matters: Eval-side attack on Codex's body-like harness: if the interesting behavior is in the loop, public model rankings are not comparable, which is why Tibo answered it the same day.
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
why_it_matters: Cuts against the week's Codex-just-open-sourced-its-harness headline; anyone writing the thread should check the existing Apache-2 repo, not treat 20 August as a licensing event.
===END===

COVERAGE_NOTE: Window 2025-04-16 to 2026-08-23. Searched X Latest with since/until on from:thsottiaux, from:dkundel, from:pvncher, from:OpenAIDevs, from:OpenAI, from:bolinfest, from:guinnesschen, from:TheRohanVarma, from:embirico, from:jeffintime, from:romainhuet, from:ajambrosino, from:pashmerepat, from:majatrebacz, from:_lopopolo, from:acsmif, from:onusoz, from:lucasmeijer, from:0genlab, from:verysmallwoods, from:thorstenball, from:CoreyGallon; keyword queries for Codex + sandbox/Seatbelt/Bubblewrap/guardian/guardianv2/auto-review/Approve for me/permission profiles/untrusted/allowlist/execpolicy/harness/heuristic/scaffolding/AGENTS.md; quote-posts and thread fetches on the design posts; semantic search for maintainers deleting harness scaffolding. Identity: OpenAI Codex the coding agent (github.com/openai/codex, npm @openai/codex), not the 2021 Codex model, not WordPress Codex, not Agents SDK sandbox posts from Cloudflare/Vercel (dropped), not Guardian-as-game/web3, not @KaliCodex, not unofficial @CodexReleases changelog mirroring. Ruled out @joey_trasatti and @ajambrosino for this thread (product and jokes, not sandbox/Guardian architecture aside from compaction asides). Timeline: 2025-04-16 launch, Bolin documents per-session approval modes. Sep-Oct 2025 Tibo is already pointing at sandbox.md, cutting repetitive Windows approvals, and promising guards for deletes outside the sandbox. 2025-11-19 official Windows Agent mode plus experimental Windows sandbox as the way to need fewer clicks. 2025-11-21 Tibo names the harness as both enabler and constraint. 2026-02/03 grow App Server and a Windows-native OS sandbox. 2026-04-23 Auto-review ships; operators already calling it guardian in the CLI; alignment blog and Tibo's 200x-internal-default post follow in early May, then the Windows sandbox essay. June is permission profiles replacing coarse sandbox modes, plus Tibo's less-infrastructure line on the local/remote handoff. July is the HOME-deletion incident, Approve for me as the named mode, and the OSS-definition fight (kept here only as Tibo's agent-code-is-the-harness line). August is primitive-in-months, the May bitter-lesson quote resurfacing, freedom-of-harness versus Claude Code, pvncher insisting computer-use and trained tools still belong in the loop, Thorsten arguing the single-conversation harness is losing leverage, Tibo's layered safety recap, acsmif on auto-review cost and an invisible guardian-v2, official app-owned approvals, an operator noting the exec-policy rulebook is still there, then 2026-08-23 Onur's standardized-eval post and Tibo's harness-as-body reply. What I could not reach: full reply trees on Tibo's deletion post (~713 replies) and safety recap (~1025 replies); sampled heads were mostly usage-reset begging, not design. bolinfest's launch reply is truncated in the fetch (the docs link is cut). No named Codex teammate used the word Guardian on X in this window; they say auto-review and Approve for me. Guardian V2 by name appears only from @acsmif. No maintainer post explained rare stables versus frequent alphas, nor the exec-policy / untrusted-preset / config-lockfile deletions as such; those live in the repo. Thin on 2025-12 to 2026-01 besides a Tibo aside that command-approval improvements were coming. Thin on non-English operator threads except @verysmallwoods. Pre-window origin of the May 2026 AI Engineer rule was not found as its own post; it survives as Vihaan's 2026-08-05 recollection plus a YouTube timestamp. Dropped as wrong product or no argument: Agents SDK sandbox marketing, usage-reset threads, Voice-mode demos, music-app posts, NFT allowlists, game-guardian posts.
