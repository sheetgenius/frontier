I'll start by confirming OpenClaw's identity against the watchlist, then sweep X for maintainer and user posts in the window.Next I’ll load the OpenClaw contract, known handles, and the X-sweep workflow so identity checks stay tight.I’ll pull known OpenClaw handles from prior harvests, then search X inside the window.I’ll confirm identity on GitHub and X, then search maintainer and user posts in the window.I’ll widen the date slices and hunt for criticism, security, and operator-friction posts, not just official announcements.I’ll fetch the high-value threads and keep searching earlier in the window plus the critical takes.I’ll pull a few remaining threads and fill the mid-window and security gaps.===POST===
handle: @_avichawla
post_url: https://x.com/_avichawla/status/2090368200693440841
event_date: 2026-08-20
date_precision: day
kind: voice
stance: comparison
frameworks: openclaw, hermes-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A comparison post laid out OpenClaw and Hermes as self-hosted personal agents with per-agent isolation and editable file memory, against Grok Bot as a vendor-run shared computer with a lower-friction skill recorder.
why_it_matters: It is the window's baseline map of the personal-agent category, so later Muse and Instinct takes should be checked against this split between self-hosted isolation and a provisioned machine.
===END===

===POST===
handle: @openclaw
post_url: https://x.com/openclaw/status/2090314770893467817
event_date: 2026-08-20
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said a ClawCast episode would demo a new web UI, multiplayer OpenClaw, and Mac onboarding, and that the next release was taking extra time because stability came first.
why_it_matters: Operators waiting on the overdue 2.0 drop were being told the delay was a stability choice, which should be checked against whether the later tagged release actually reduced upgrade breakage.
===END===

===POST===
handle: @hrudolph
post_url: https://x.com/hrudolph/status/2093863769059508365
event_date: 2026-08-30
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: OpenClaw's community lead said the project had 106 stable releases so far and that the pending v2026.8.1 drop alone was about half of all merged PRs and about a fifth of all commits, with release workflows still finishing.
why_it_matters: A single update that large is the operator risk; the claim needs the tag and the upgrade notes before anyone treats 2.0 as one coherent channel rather than a pile of unreleased work.
===END===

===POST===
handle: @openclaw
post_url: https://x.com/openclaw/status/2094266903204434431
event_date: 2026-08-31
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account announced OpenClaw 2.0 and pointed at a blog that described it as the largest update yet, with rebuilt install, a first-class browser app, and shared cloud sessions, tying the notes to the 2026.8.1 release docs.
why_it_matters: This is the product-shape claim for the whole window; install, upgrade, and multiplayer behavior all have to be checked against that tag rather than against the blog.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2094290652649636173
event_date: 2026-08-31
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The creator said the team had spent two months building OpenClaw with OpenClaw, moved people off local coding harnesses onto a shared multiplayer agent with cloud sessions, and now treated local harnesses as outdated.
why_it_matters: If the maintainers themselves left the local loop, the interesting surface is the shared-session and cloud-node path, not another laptop install, and that path needs a channel an outsider can actually run.
===END===

===POST===
handle: @Da7_Tech
post_url: https://x.com/Da7_Tech/status/2094453432023208101
event_date: 2026-08-31
date_precision: day
kind: claim
stance: criticism
frameworks: openclaw, hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A user said OpenClaw 2.0 was still a disaster despite OpenAI backing, that setup still needed a human at almost every step, that an old loop-and-wander bug from the Clawdbot era was still there, and that they were staying on Hermes.
why_it_matters: This is the counter to the 2.0 accessibility story; if onboarding and loop control did not actually move, operators should not treat the version bump as the install fix the blog described.
===END===

===POST===
handle: @obviyus
post_url: https://x.com/obviyus/status/2094455256726036526
event_date: 2026-08-31
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw, claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: An OpenClaw maintainer said you can point OpenClaw at an existing Claude subscription rather than a separate API key.
why_it_matters: That is the everyday-user install path the 2.0 blog advertised, and it needs a docs or settings receipt for which Claude login actually binds and what still requires a key.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2094531917286944890
event_date: 2026-08-31
date_precision: day
kind: claim
stance: criticism
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Asked whether OpenClaw should have been restarted from zero after becoming a jumble of agent-written PRs, the creator said they had rewritten about half of it over two months and did not need a greenfield rewrite.
why_it_matters: The competing public take is that the codebase is unsalvageable slop; this is the maintainer's alternative, and it only matters if the rewrite is what landed in the 2.0 tag.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2094575089794916546
event_date: 2026-08-31
date_precision: day
kind: claim
stance: frustration
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: After 2.0 shipped, the creator said most upgrades had gone well but they had at least one report that the migrator missed old exec rules, and asked for a report so they could fix it.
why_it_matters: Exec-rule migration is the approval boundary; if the migrator can skip old rules, a 2.0 upgrade can silently change what the agent is allowed to run.
===END===

===POST===
handle: @obviyus
post_url: https://x.com/obviyus/status/2095380453616463998
event_date: 2026-09-03
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The same maintainer said OpenClaw 2.0 now supports per-user OAuth for MCP servers, so people sharing a Slack bot can each connect their own Gmail or calendar through a sign-in link in chat.
why_it_matters: Shared claws without per-sender credentials are a data-leak surface; this is the claim that multiplayer no longer means one mailbox for the whole channel, and it needs a settings and docs check.
===END===

===POST===
handle: @openclaw
post_url: https://x.com/openclaw/status/2095574976518816159
event_date: 2026-09-03
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said v2026.9.1 was out with lighter setup, mermaid in chat, lighter long chats, and updates that know when to stop, crediting 1,186 PRs from 281 contributors.
why_it_matters: "Updates that know when to stop" is the first official answer to upgrade-breakage, and later user reports in this window are the test of whether that version actually halted a bad update.
===END===

===POST===
handle: @openclaw
post_url: https://x.com/openclaw/status/2097363436028191021
event_date: 2026-09-08
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said 2026.9.3 was out, listing clean update recovery, faster session reconnects, live browser-automation watching, revocable shared-chat links, meeting-transcript search, and repo-backed cloud runs.
why_it_matters: Clean recovery and revocable share links are the two operator-facing promises after 2.0; both need the 2026.9.3 notes before anyone changes how they upgrade or who they invite into a session.
===END===

===POST===
handle: @Shaughnessy119
post_url: https://x.com/Shaughnessy119/status/2097509226054602966
event_date: 2026-09-09
date_precision: day
kind: voice
stance: comparison
frameworks: openclaw, hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: An investor argued that Hermes is the only personal agent you can own for life, grouping OpenClaw with OpenAI the way Muse is grouped with Meta and Grok Bot with its vendor.
why_it_matters: The official line is an independent 501(c)(3); if operators read OpenClaw as OpenAI-owned, the independence claim is what has to be checked, not another feature list.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2097697382750454049
event_date: 2026-09-09
date_precision: day
kind: claim
stance: criticism
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Commenting on an overlapping sandbox PR, the creator said he would rather see OpenClaw use a Docker sandbox for agents, that both approaches can be valid, and that current docs are stale and will not work with what they ship.
why_it_matters: Stale sandbox docs are an operator footgun; anyone copying the published sandbox setup may be configuring a path the running channel has already left.
===END===

===POST===
handle: @levelsio
post_url: https://x.com/levelsio/status/2099196383538356635
event_date: 2026-09-13
date_precision: day
kind: claim
stance: frustration
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Pieter Levels said he had killed his OpenClaw VPS months earlier, then got a Claude bill on a dedicated OpenClaw account and inferred the stored key had been exposed and used later, and that isolating the account limited the damage.
why_it_matters: A key that survives after the machine is gone is a credential-hygiene failure, not a running-agent bug, and it is a reason to treat leftover provider keys as live until they are revoked.
===END===

===POST===
handle: @balakhonoff
post_url: https://x.com/balakhonoff/status/2099228120117121247
event_date: 2026-09-13
date_precision: day
kind: claim
stance: criticism
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: In that thread, a builder said their OpenClaw instance had leaked API keys months earlier, costing about $100, and that they stopped letting agents see keys and built a separate sudo-style tool around that.
why_it_matters: It is a second independent key-leak report in the same thread, which is a reason to look for a primary advisory rather than treat Levels as a one-off ops mistake.
===END===

===POST===
handle: @liuyuxxd
post_url: https://x.com/liuyuxxd/status/2099537912299704681
event_date: 2026-09-14
date_precision: day
kind: voice
stance: comparison
frameworks: openclaw, hermes-agent
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A Meta designer said they dropped OpenClaw after two months and Hermes after one, and stayed on Muse because credentials stay out of the model, side chats do not pollute the main agent, the iOS app beat Telegram, and the agent gets an isolated VM.
why_it_matters: This is the most specific operator argument for leaving the self-hosted claw, and it names the exact gaps (secrets UI, session hygiene, native app, provisioned VM) that OpenClaw would have to close to keep that user.
===END===

===POST===
handle: @Pat_Erichsen
post_url: https://x.com/Pat_Erichsen/status/2099915900371787935
event_date: 2026-09-15
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: An OpenClaw staff engineer split personal-agent memory into conversation notes plus dreaming or hierarchical summaries, a maintained Memory Wiki, and skills as procedural memory, and pointed operators at Memory Wiki, a Lossless Claw plugin, and Skill Workshop.
why_it_matters: If those three are separate plugins and a beta wiki rather than one default, operators still have to wire memory themselves, which is the opposite of the 2.0 "talk to it to finish setup" pitch until the docs say otherwise.
===END===

===POST===
handle: @openclaw
post_url: https://x.com/openclaw/status/2101023336252027020
event_date: 2026-09-18
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The official account said a staff engineer had taken on updates breaking people's OpenClaw installs, walked through what caused it, and linked a blog on shipping updates that do not break, while saying the work was not done.
why_it_matters: This is the project admitting upgrade-breakage was real after weeks of release notes that claimed recovery; the blog and the 2026.9.x tags are what to check, not the video.
===END===

===POST===
handle: @openclaw
post_url: https://x.com/openclaw/status/2101151415301456082
event_date: 2026-09-19
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said 2026.9.5 was out with atomic updates, plugin hot reload, conversation sharing, expanded GPT Live, shared browser pages, conversation archiving, and specialist-agent setup, crediting 4,179 PRs from 502 contributors.
why_it_matters: Atomic updates are the claimed fix for the breakage thread; operators should not change upgrade policy until the 2026.9.5 notes show a validate-then-rollback path on the channel they actually run.
===END===

===POST===
handle: @FullerStackDev
post_url: https://x.com/FullerStackDev/status/2101323180459909508
event_date: 2026-09-19
date_precision: day
kind: claim
stance: frustration
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The staff engineer behind the update work said a Node version bump had been unavoidable because of SQLite work that older Node could not support, that this had caused some of the upgrade pain, and that he still needed to look at embeddings-API fallout.
why_it_matters: If a runtime bump is what broke updates, the operator move is to pin Node against the notes rather than retry the in-app updater, and the embeddings break needs its own receipt.
===END===

===POST===
handle: @onusoz
post_url: https://x.com/onusoz/status/2101335826580066635
event_date: 2026-09-19
date_precision: day
kind: voice
stance: criticism
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: An OpenClaw maintainer advised running a net-crawling OpenClaw under a separate Linux user, pointing the Hugging Face cache at a shared path the agent can only read, so local-model reuse does not put the main account in the prompt-injection blast radius.
why_it_matters: That is a maintainer saying the default single-user install is the wrong isolation story for a crawling claw, which is a different security posture than "your machine, your rules" on one login.
===END===

===POST===
handle: @steveDOTplus
post_url: https://x.com/steveDOTplus/status/2101466754052395331
event_date: 2026-09-20
date_precision: day
kind: voice
stance: criticism
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: After two days on the macOS app, a tester said OpenClaw was not ready, that the Mac app had copied the old web UI instead of sitting beside the terminal, and that hundreds of extra approvals, failing ecosystem installs, no update strategy, and slowness had pushed it to the sidelines.
why_it_matters: This is the accessibility source failing its own test; if the native app adds approval noise and drops the terminal, everyday users are worse off than on the old web-plus-CLI pair.
===END===

===POST===
handle: @steveDOTplus
post_url: https://x.com/steveDOTplus/status/2101482608634831184
event_date: 2026-09-20
date_precision: day
kind: claim
stance: frustration
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: In a follow-up, the same tester said the Mac app crashed while they were writing and then looped a spinner with a doctor-failed message, and that they now read the project as tinkerers rather than product people.
why_it_matters: A doctor-failed restart loop is a concrete recovery defect to check against the 2026.9.x "updates recover" notes; if doctor cannot come up, the recovery story did not hold for this install.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2101687632019460207
event_date: 2026-09-20
date_precision: day
kind: claim
stance: comparison
frameworks: openclaw, codex
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Asked how OpenClaw's coding harness now compared with Codex after a 1.x user found the coding weak, the creator said it uses Codex under the hood so you get the OpenAI-managed harness plus OpenClaw features, and that OpenClaw had not been built for long-horizon work until they fixed that.
why_it_matters: If coding quality now depends on the Codex harness, operators comparing OpenClaw to Codex are looking at a wrapper, and the long-horizon fix needs a version and a mode, not a vibe.
===END===

===POST===
handle: @rosejn
post_url: https://x.com/rosejn/status/2101877271934239132
event_date: 2026-09-21
date_precision: day
kind: claim
stance: frustration
frameworks: openclaw, hermes-agent, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A researcher said a fresh OpenClaw 2 install made Codex and Claude account setup flaky, including a claude-cli backend error about binding to a durable owner even though Claude worked everywhere else, and that they were considering leaving for Hermes.
why_it_matters: The 2.0 pitch was reuse of existing Claude and ChatGPT logins; a bind error on a working CLI is the opposite, and it needs a repro against the current tag before anyone recommends that path.
===END===

===POST===
handle: @anshnanda
post_url: https://x.com/anshnanda/status/2101905052172734884
event_date: 2026-09-21
date_precision: day
kind: claim
stance: comparison
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A founder said Muse is literally OpenClaw for ordinary people, and then that it is actually just OpenClaw.
why_it_matters: That claim became the day's consensus and is the thing later contradicted by Meta and by OpenClaw's creator; it should not be repeated as a product fact without a primary architecture receipt.
===END===

===POST===
handle: @CVEnew
post_url: https://x.com/CVEnew/status/2101986412081946946
event_date: 2026-09-21
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The CVE program posted CVE-2026-94094 against OpenClaw through 2026.9.5, pointing at a canvas host-handler function in the canvas extension server.
why_it_matters: 2026.9.5 is the same release that advertised atomic updates; a canvas-host CVE on that version is a reason to hold the upgrade until the advisory and the patched tag are checked.
===END===

===POST===
handle: @joshavant
post_url: https://x.com/joshavant/status/2102036150739169745
event_date: 2026-09-21
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: An OpenClaw staff engineer said they had completed a Trail of Bits security audit through OpenAI's Patch the Planet program and linked an OpenClaw recap post.
why_it_matters: An audit recap is not a patch list; operators need the findings and the versions that contain the fixes before treating the claw as hardened.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2102041970638192992
event_date: 2026-09-21
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The creator said NemoClaw is an OpenClaw plugin for fine-grained security sandboxing so enterprises can apply their own egress rules.
why_it_matters: If egress policy lives in a plugin rather than in the default gateway, the sandbox story for most operators is still the default, and the plugin needs a repo and a version before anyone deploys it.
===END===

===POST===
handle: @natfriedman
post_url: https://x.com/natfriedman/status/2102103707936768130
event_date: 2026-09-21
date_precision: day
kind: claim
stance: comparison
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Meta's Nat Friedman said Muse was built from scratch but heavily inspired by OpenClaw, that after using OpenClaw in January he bought hundreds of Mac minis for the lab, and that the goal was something like OpenClaw that could be made safe and scaled.
why_it_matters: This is the primary-participant denial of the "Muse is OpenClaw" rumor, and it also says the Mac-mini claw was real inside Meta, which is a different claim than a product fork.
===END===

===POST===
handle: @guzmanpintos
post_url: https://x.com/guzmanpintos/status/2102111368899907632
event_date: 2026-09-21
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A sandbox-provider operator said OpenClaw's Crabbox runs agent test suites in a remote box, syncs the dirty working tree rather than a commit, and that four lines in AGENTS.md were enough for their agents to stop hammering the laptop.
why_it_matters: Parallel agents saturating a laptop is a new bottleneck; if Crabbox is the official remote-sandbox path, that is a different answer than buying a bigger Mac mini, and it needs the Crabbox repo and a tagged interface.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2102116206371315854
event_date: 2026-09-21
date_precision: day
kind: claim
stance: comparison
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The creator said the "Meta uses OpenClaw" story was wrong: they built their own agent while being inspired, and he credited Nat's team.
why_it_matters: Lineage rumors change what operators think they are running inside Muse; this is the OpenClaw-side denial, to be kept next to Friedman's, not collapsed into a fork claim.
===END===

===POST===
handle: @trailofbits
post_url: https://x.com/trailofbits/status/2102135648224481765
event_date: 2026-09-21
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Trail of Bits said its OpenClaw assessment produced 27 advisories, three hardening PRs, and one architectural submission, and linked the PDF report.
why_it_matters: Twenty-seven advisories on a personal agent that holds keys and shell is the security receipt for the window; the PDF and the patched versions are what to read before anyone treats the audit recap as a clean bill.
===END===

===POST===
handle: @AidanPak
post_url: https://x.com/AidanPak/status/2102143921547890780
event_date: 2026-09-21
date_precision: day
kind: voice
stance: comparison
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A commenter said OpenClaw's real step was decoupling the chat surface (iMessage, Slack, and the rest) from the machine that runs the agent, leaving security and credentials to the user, and that Muse and Instinct's advance is provisioning the VM so that work is no longer the user's job.
why_it_matters: That is a cleaner split than "Muse is OpenClaw"; it says the remaining bottleneck is who operates the box, which is the question an operator actually has to answer.
===END===

===POST===
handle: @ddemaree
post_url: https://x.com/ddemaree/status/2102181804513825205
event_date: 2026-09-21
date_precision: day
kind: voice
stance: criticism
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Replying to the Muse-is-OpenClaw claim, an engineer said Muse is a bad source on its own architecture, and that making OpenClaw do work still means editing config files while Muse can reconfigure itself, so the "just OpenClaw" story is unlikely.
why_it_matters: Config-file agency versus a self-rewriting hosted agent is the actual product difference; if that holds, operators who need a bounded harness still have a reason to stay on the open claw.
===END===

COVERAGE_NOTE: Searched X in 2026-08-20..2026-09-21 for github.com/openclaw/openclaw via from:openclaw, from:steipete, from:hrudolph, from:onusoz, from:colinsolvely, from:joshavant, from:Pat_Erichsen, from:obviyus, from:jlehman_, from:FullerStackDev; keyword mixes for OpenClaw plus broken/CVE/sandbox/update/Hermes/Muse; and semantic queries for security and "stopped using." Identity: kept only the lobster personal-agent at github.com/openclaw/openclaw (formerly Clawdbot in user talk). Dropped @KURAOpenclaw (unrelated JP news account), @OpenClawTo (Toronto meetup), @ohmyopenclaw, @openclaw_a, and Instinct-only posts that only named OpenClaw as a bench. Could not reach Discord, where staff said update-breakage triage actually happens; the 2.0 thread's 500+ replies; Japanese and other non-English operator threads; ClawHub skill supply-chain beyond drive-by skill spam; and GitHub issue volume. Sweep is thin for 2026-08-21..08-29 (official account mostly quiet besides a GitHub fireside), mid-September 05-12 (release-note and podcast cadence), and @colinsolvely (maintainer bio, almost no product posts). Latest-mode search overweight the 2026-09-21 Muse discourse. NemoClaw CVE talk in Japanese pointed at NVIDIA OpenShell, not fully mapped here. Unofficial @OpenClawLog recaps were not used as leads.
