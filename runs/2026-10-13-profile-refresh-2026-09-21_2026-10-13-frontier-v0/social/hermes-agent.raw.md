I'll start by reading the discovery protocol and the Hermes Agent watchlist identity so the sweep stays on the NousResearch project.I'll load the Hermes Agent contract and known maintainer handles so identity checks and searches stay on the NousResearch project.There's a prior harvest for context; I'll search X in-window next, with identity filters so lookalikes stay out.I'll split the window and hunt official posts, release talk, and the critical operator arguments in parallel.I'll fetch the high-signal threads and search for release, security, and contrary posts next.I'll go after the contrary posts and the mid-window release/security talk next.I'll fetch the fundraise, ChatGPT-signin, Store, and "not for normies" threads, then keep hunting criticism.===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2101932350821257289
event_date: 2026-09-21
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The lead engineer said the plugin catalog now gives each plugin its own page, with the README from the reviewed commit, sort-by-recent, and author shelves, and pointed operators at the catalog docs.
why_it_matters: Installers who treat a catalog listing as a moving latest will miss that the page is supposed to be a pin, so the first check is which commit the install command actually checks out.
===END===
===POST===
handle: @witcheer
post_url: https://x.com/witcheer/status/2101937414465864080
event_date: 2026-09-21
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A Nous community account said each catalog page now shows the exact commit maintainers reviewed, the tools, hooks, and env vars the plugin declares, Desktop and CLI install side by side, and that authors move the pin with a reviewed PR.
why_it_matters: If that pin is real, an operator can treat the catalog page as a receipt; if the live checkout can drift, the page is advertising, not a lock.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2102093483788107792
event_date: 2026-09-21
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent, claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He announced an official plugin that talks to the Claude SDK so a Claude Code subscription can drive Hermes again, billed as avoiding earlier tradeoffs, and linked the DirectSDK plugin docs.
why_it_matters: This is the claimed legal path back to using a Claude sub as Hermes's model while keeping Hermes tools, memory, and loop; it needs a primary check and a Desktop versus CLI check before anyone migrates billing.
===END===
===POST===
handle: @Faisal942x
post_url: https://x.com/Faisal942x/status/2102123810866495773
event_date: 2026-09-21
date_precision: day
kind: claim
stance: frustration
frameworks: hermes-agent, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Same day as the plugin launch, he said it worked in the terminal and failed in Hermes Desktop, and posted a diagnostics sign-in link.
why_it_matters: A subscription plugin that only works in the CLI is not the desktop-app story the launch post implies, so Desktop-first operators should not migrate on the announcement alone.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2102155766417490147
event_date: 2026-09-21
date_precision: day
kind: voice
stance: comparison
frameworks: hermes-agent, claude-code
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Asked why they do not just run Claude Code as the agent, he said Anthropic would block Hermes tools, memory, the self-improvement loop, and plugins.
why_it_matters: That is the design argument for DirectSDK (Claude as model, Hermes as harness) versus wrapping Claude Code, and it is the opposite of treating the plugin as a Claude agent inside Hermes.
===END===
===POST===
handle: @NousResearch
post_url: https://x.com/NousResearch/status/2102873234819698877
event_date: 2026-09-23
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said Hermes Desktop can now stream a bot's screen or session live, so an operator can watch the agent drive a browser or terminal, type credentials, take over, and hand control back.
why_it_matters: Live takeover changes where human attention sits during unattended runs, but only on the gateways that actually stream, and it is also a new path for secrets typed into that overlay.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2102875926317142488
event_date: 2026-09-23
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He said operators can now reach the same machine the agent uses, visually and interactively, with live desktop passthrough on every remote gateway that supports it.
why_it_matters: The qualifier on supported gateways is the whole operator question: a local or SSH box is not the same as Hermes Cloud, and the launch post does not settle which hosts stream.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2102935259046363494
event_date: 2026-09-24
date_precision: day
kind: claim
stance: criticism
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Asked for help on a Bot Screen issue, he said Hermes Cloud does not support the live desktop passthrough yet.
why_it_matters: Anyone who installed a hosted Hermes because the launch looked like Grok Bot's always-on desktop still has to confirm they are on a gateway that actually streams, not Portal cloud.
===END===
===POST===
handle: @diggz976
post_url: https://x.com/diggz976/status/2103011869502140679
event_date: 2026-09-24
date_precision: day
kind: claim
stance: frustration
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: After the lead engineer said the passthrough should work on a remote Linux box and probably macOS, this user reported no luck on Mac.
why_it_matters: If Desktop-on-Mac is a non-working path, the feature is a Linux-gateway demo until a tagged host matrix says otherwise.
===END===
===POST===
handle: @NousResearch
post_url: https://x.com/NousResearch/status/2104996715501904173
event_date: 2026-09-29
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said they partnered with OpenAI so operators can sign into Nous Portal with ChatGPT and spend that plan inside Hermes, with the link visible and revocable in ChatGPT settings.
why_it_matters: This is a second subscription-bridge next to DirectSDK; an operator needs to know which quota is burning, what Nous still bills separately, and whether the OAuth grant is Portal-only or process-wide.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2106970980606488807
event_date: 2026-10-05
date_precision: day
kind: claim
stance: criticism
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Asked whether catalog plugins are security-reviewed, he said they check that a plugin is not malware aimed at Hermes users, they do not verify it is hardened, and community plus submission guidelines are the rest of the process.
why_it_matters: A catalog badge is not a sandbox or an audit; anyone installing Home Assistant, Spotify, or a random author plugin still has to read declared tools, hooks, and env vars as if they were code.
===END===
===POST===
handle: @NousResearch
post_url: https://x.com/NousResearch/status/2107592255124951360
event_date: 2026-10-06
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account launched Hermes Index as a mean of four benches run inside Hermes, including a new Hermes Bench plus Terminal-Bench, Terminal-Bench Science, and SkillsBench, and posted scores and dollars-per-task for named models.
why_it_matters: The index is being used to tell operators which models to pick in this harness; the method, the science/coding tilt, and whether cheap models OpenRouter users actually run even appear are the things to check before treating the table as a buying guide.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2107712074038288806
event_date: 2026-10-07
date_precision: day
kind: voice
stance: comparison
frameworks: hermes-agent, openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said Hermes was never meant to be only a personal assistant that reads email, that the goal is the most powerful agent for scientists, security people, developers, and other specialists, and that a forthcoming mobile app is the consumer-facing track.
why_it_matters: Operators who installed Hermes as the OpenClaw successor for always-on life admin are being told that track is a side app, while the core is being aimed at coding and specialist work.
===END===
===POST===
handle: @iAmHenryMascot
post_url: https://x.com/iAmHenryMascot/status/2107753255304335618
event_date: 2026-10-07
date_precision: day
kind: voice
stance: criticism
frameworks: hermes-agent, openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He argued Hermes Index evals a personal-agent harness on terminal and science benches, that the cofounder language about casual users reads as a breakup with the consumer positioning Hermes took from OpenClaw, and that easier hosted bots are taking those users while both open harnesses retreat toward enterprise or coding.
why_it_matters: If that read is right, the scarce attention this window is not a missing feature, it is whether an MIT personal harness still exists or whether operators should plan on Grok Bot, Muse, or a specialist coding CLI.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2107755286761202033
event_date: 2026-10-07
date_precision: day
kind: voice
stance: criticism
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Replying to that consumer-abandonment read, he said he is not giving up on consumers, that he built Hermes as a coding harness for himself, that he does not lead desktop or mobile, and that mixture-of-agents, huge subagent counts, and the terminal work were never aimed at casual users.
why_it_matters: This is the maintainer splitting the product: CLI and core for power users, desktop and a promised mobile app for everyone else, so an operator has to pick which surface they are actually buying.
===END===
===POST===
handle: @AugmentedPath
post_url: https://x.com/AugmentedPath/status/2107771613156389267
event_date: 2026-10-07
date_precision: day
kind: voice
stance: criticism
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A carpenter running local models said he uses Hermes without being a developer, that he is a supporter, and that hearing consumers called dumb was disappointing.
why_it_matters: The people who already did the hard install are the ones the coding-harness pivot talks past; if they leave, the open personal-agent story has no remaining constituency.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2107838694493433898
event_date: 2026-10-07
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He told someone asking for a native integration that new third-party work will not go into Hermes core, that the plugin catalog is the discoverability path, and that everything they need should already be supported there.
why_it_matters: Anyone still on bundled memory, Spotify, Home Assistant, or another core integration should expect a catalog migration, not a default that survives the next stable.
===END===
===POST===
handle: @NousResearch
post_url: https://x.com/NousResearch/status/2107874963382538469
event_date: 2026-10-07
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said, pointing at a WSJ report, that they raised a Series B to take Hermes Agent further, including a mobile app, and named NVIDIA, M12, Samsung Next, Robot Ventures, USV, Y Combinator, and Menlo among investors.
why_it_matters: The dollar figure and enterprise framing live in the linked article, not in a tagged release; operators should treat mobile as promised, not shipped, and should not infer MIT-core terms from a fundraise headline.
===END===
===POST===
handle: @trevin
post_url: https://x.com/trevin/status/2108072673440141498
event_date: 2026-10-08
date_precision: day
kind: voice
stance: frustration
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said Hermes fell behind for him because mobile never kept up with the new personalized agents such as Grok Bot.
why_it_matters: This is the operator action behind the consumer argument: people are not waiting for NousCon, they are already moving the always-on assistant to a hosted bot with a phone app.
===END===
===POST===
handle: @adolandev
post_url: https://x.com/adolandev/status/2108171039247155640
event_date: 2026-10-08
date_precision: day
kind: voice
stance: comparison
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He argued the giving-up-on-consumers take is wrong because booking a flight already is coding (tools, browser, subagents), that Hermes staying open-source with community frontends is the consumer path, and that a stronger core is what those apps will run.
why_it_matters: This is the counter to the OpenClaw-style retreat story: keep the engine, let someone else own the UX, which is only a plan if the official mobile app actually ships and the core stays installable.
===END===
===POST===
handle: @NousResearch
post_url: https://x.com/NousResearch/status/2108231536772596193
event_date: 2026-10-08
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said Hermes Agent is live and featured in the Microsoft Store as a one-click Windows install, with more Windows work coming.
why_it_matters: Store install is a different update channel than source or sideload, so an operator who clicks Get is not on `hermes update`, and the Store floor (reported elsewhere as Windows 11) may not match the desktop docs.
===END===
===POST===
handle: @not_walid_mos
post_url: https://x.com/not_walid_mos/status/2108296728554389604
event_date: 2026-10-08
date_precision: day
kind: voice
stance: frustration
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said he tried to configure Hermes, found it too opinionated to be useful, and that small UX quirks made the experience bad enough that he is looking for another open-source harness.
why_it_matters: This is the install-path report the Store and Simple-mode posts do not absorb: a one-click binary still leaves an operator inside a defaults-and-quirks maze.
===END===
===POST===
handle: @aa_zs26152
post_url: https://x.com/aa_zs26152/status/2109160241426514260
event_date: 2026-10-11
date_precision: day
kind: claim
stance: criticism
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said Tenable TRA-2026-65 found a Hermes sign-in parser mismatch where Python treated a crafted redirect as loopback while the browser sent the login code elsewhere, so attacker-chosen PKCE could take the session, and that v0.21.6 is the fix.
why_it_matters: Anyone who exposed a dashboard or completed a sign-in before 0.21.6 should treat sessions as untrusted until the actual binary they run is checked, because desktop bundles are not the GitHub tag by default.
===END===
===POST===
handle: @Teknium
post_url: https://x.com/Teknium/status/2109177877543682419
event_date: 2026-10-11
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He said official Hermes plugins are being consolidated into the NousResearch/hermes-official-plugins mono-repo so issues and source live in one place.
why_it_matters: Plugin updates can now move on a different cadence than the agent tag, so an operator pinning only hermes-agent is no longer pinning DirectSDK, Spotify, or Home Assistant.
===END===
===POST===
handle: @duplys
post_url: https://x.com/duplys/status/2109282950584193288
event_date: 2026-10-11
date_precision: day
kind: claim
stance: criticism
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said v0.21.6 patches a dashboard rate-limit bypass via spoofed X-Forwarded-For, a login-code redirect that enables session takeover, and an email-gateway allowlist bypass, and told operators with a networked dashboard or gateway to update.
why_it_matters: The official X account did not post this release; if you expose those surfaces, the social layer will not tell you to upgrade, the Tenable and community notes will.
===END===
===POST===
handle: @graykevinb
post_url: https://x.com/graykevinb/status/2109494414611480895
event_date: 2026-10-12
date_precision: day
kind: claim
stance: frustration
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said Hermes would not let him delete a session without sending that request through a model, and treated that as a reason the product is badly designed.
why_it_matters: If ordinary session hygiene requires a live model, a local or offline operator cannot clean state, and a reply in-thread claimed the CLI can delete from state.db without a model, so Desktop and CLI are not the same product for this job.
===END===
===POST===
handle: @BkashJosi
post_url: https://x.com/BkashJosi/status/2109720533415899306
event_date: 2026-10-12
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: An independent tester said v0.21.7 makes official-repo source installs follow tagged releases by default, that an install already ahead of the latest tag stays put, that Store and bundled desktop are unchanged, and that v0.21.6 also carried dashboard-auth, untrusted-repo Git-filter, and email-sender fixes.
why_it_matters: Operators who have been following main by habit may stop receiving commits without choosing that, and operators who needed the security floor may already be on a Store or Cloud channel that is not this tag.
===END===
===POST===
handle: @steven_levey
post_url: https://x.com/steven_levey/status/2109975984573210922
event_date: 2026-10-13
date_precision: day
kind: claim
stance: criticism
frameworks: hermes-agent, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said starting a new session by calling the official Claude CLI is fine, but putting a Claude subscription directly inside Hermes is against Anthropic terms and that people have already had accounts banned for it.
why_it_matters: This cuts against the DirectSDK welcome-back post; an operator still has to confirm the plugin's actual path (Claude CLI versus a raw sub token) before treating a Claude Max plan as Hermes fuel.
===END===
===POST===
handle: @bradvin
post_url: https://x.com/bradvin/status/2110098251634675818
event_date: 2026-10-13
date_precision: day
kind: voice
stance: criticism
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said every installed skill occupies context even when unused, so for the next machine he wants a catalog-picked skill and profile set and a fresh installer, not the default loadout.
why_it_matters: The unbundling story is incomplete if the default install still stuffs the prompt; operators paying for long sessions need a thin seed, not another plugin they can add later.
===END===
===POST===
handle: @HermesWatcher
post_url: https://x.com/HermesWatcher/status/2110143648939885008
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: An unofficial release account said a Phone Harness plugin lets Hermes see a phone screen and tap, swipe, and type through iOS (Mac mirroring), Android (ADB), and cloud phones, and pointed at ShawnPana/phone-harness plus a hermes plugins install line.
why_it_matters: This is a community plugin, not a tagged Hermes core feature; anyone who enables it is giving the agent the same surface a human uses on a phone, which is a new approval and isolation problem.
===END===
===POST===
handle: @tonbistudio
post_url: https://x.com/tonbistudio/status/2110155915513221301
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A Nous contributor said Hermes now has two update modes, Stable (default, tagged releases only) and Main (every commit, the old behavior), and posted a video on how to switch.
why_it_matters: Source installs that used to track main can go quiet after v0.21.7 unless the operator sets the channel; Store, Docker, and Cloud still have their own updaters.
===END===
===POST===
handle: @mokshaowei
post_url: https://x.com/mokshaowei/status/2110158477482156055
event_date: 2026-10-13
date_precision: day
kind: voice
stance: comparison
frameworks: hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said he left Hermes Agent for Grok Bot because setup is easier for a non-specialist, and that typing login details into a cloud computer still feels wrong.
why_it_matters: That is the consumer trade the window keeps arguing: hosted UX versus local control, and the people making it are not waiting for the official mobile app.
===END===
COVERAGE_NOTE: Searched X in 2026-09-21..2026-10-13 (until:2026-10-14) for from:NousResearch, from:Teknium, from:dillonrolnick, from:witcheer, from:HermesAgentTips, from:iAjittiwari, the phrase "Hermes Agent", v0.21.6/v0.21.7/v2026.9.24, DirectSDK/claude-subscription, Microsoft Store, Sign in with ChatGPT, plugin catalog/memory unbundling, Hermes Index, Series B/WSJ, Bot Screen, and argument queries (OpenClaw, Grok Bot, bloat, switched, CVE, Tenable, sandbox/approval, Windows/Desktop). Identity: kept only NousResearch/hermes-agent; dropped Nous Hermes LLM posts, crypto/NASA Hermes, oh-my-hermes spam, OpenClaw-only threads, Grok Bot as its own product except where it is the comparison, ASUS "Hermes AI" PC marketing, and sales/airdrop cadence. The 9router CVE-2026-108593 thread describes a third-party dashboard injecting Hermes config (hooks_auto_accept); it was not filed here as a Hermes product claim. Could not reach Discord (Teknium and witcheer still send operators there; memory-provider migration and catalog review likely live there), full DirectSDK reply trees after Sept 22, complete @theemozilla / @imbabybrooklyn / @HermesAgentLog sweeps, or Japanese/Chinese operator threads beyond scattered hits. Official @NousResearch did not post v0.21.6 or v0.21.7 release notes on X; security talk is Tenable plus community accounts. Thin: git-config/LSP/unattended-deny/tirith (the primary harvest's core) barely appear on X; Store vs source vs Cloud update-channel confirmation from maintainers; Bot Screen Mac/Cloud matrix; whether DirectSDK Desktop was fixed in-window; Intel macOS and Termux becoming opt-in. Phone Harness is a ShawnPana plugin, not a tagged core feature.
