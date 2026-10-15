I'll start by confirming OpenClaw's identity against the watchlist, then search X only for posts about that project in the window.I'll load the OpenClaw contract and recent harvest notes so I can tell this project from name-collisions before searching X.There's already an OpenClaw social log in this window; I'll check it against the contract, then run a fresh X search so I don't inherit stale IDs.I'll pull known maintainer handles and identity traps from prior harvests, then search X inside the window.Identity is the OpenClaw Foundation agent at github.com/openclaw/openclaw. I'll search maintainer accounts and user threads next, including the critical takes.Official posts are concentrated in October. I'll page earlier in the window and look for criticism, skip-upgrade, and security threads.I have a few high-signal threads. Next I’ll fetch those and search September plus security, skip-upgrade, and maintainer original posts.I'll fetch the Enterprise, Autopilot, skip-upgrade, and extended-stable threads, then hunt September 21–24 and the critical replies.I have enough high-signal maintainer and operator posts, including skip-upgrade and Autopilot counter-reads. Compiling discovery records only.

===POST===
handle: @Tails6198
post_url: https://x.com/Tails6198/status/2102380297325027479
event_date: 2026-09-22
date_precision: day
kind: claim
stance: criticism
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: After a few hours on OpenClaw, this user said onboarding was long and error-prone, the UI felt unfinished, the docs lagged, and a WhatsApp bot kept answering that access was broken before the whole thing died for no visible reason.
why_it_matters: If a first-run still fails that way after 2.0, the accessibility story the project sells is not the channel an operator actually gets.
===END===

===POST===
handle: @openclaw
post_url: https://x.com/openclaw/status/2102955928693989413
event_date: 2026-09-24
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said 2026.9.6 added supported routes for Opus 5.5, GPT-6 Sol/Luna and Grok 4.7, plus managed updates, restart recovery, a 30-day usage view, a public GitHub reader, remote files/memory/skills, live meeting notes, and Jev decision models, citing 2614 PRs.
why_it_matters: This is the window's first tagged-shape claim; later skip-upgrade posts should be checked against whether managed updates and restart recovery actually held.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2103147927313199260
event_date: 2026-09-24
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: The creator said OpenClaw deleted around 400k lines of its own tests with little coverage change, blamed models that emit a test for every tiny edit, and pointed at a test-audit skill in the repo. A follow-up said a vague cleanup prompt stops too early and that the agent needs a numeric cut target with a coverage band.
why_it_matters: If the project's own suite was coverage theater, operators inheriting agent-written tests should treat coverage as a weak gate and look for an audit loop with a hard delete quota.
===END===

===POST===
handle: @OmarShahine
post_url: https://x.com/OmarShahine/status/2103480227561079264
event_date: 2026-09-25
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Microsoft's Autopilot lead said the preview rolling to first customers is a persistent personal agent, that Scout was renamed Autopilot, and that the product is built on OpenClaw with the Foundation as the enterprise-grade runtime.
why_it_matters: That is a distribution claim: a Microsoft 365 always-on agent whose runtime is the same open-source harness operators self-host, which needs a channel and a capability delta versus stock OpenClaw.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2103491173927272531
event_date: 2026-09-25
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The creator said Microsoft shipped Autopilot on OpenClaw after working together since March to make the codebase ready for large-scale deployments, and called Microsoft a partner and open-source contributor.
why_it_matters: If the enterprise work landed in the public repo, operators should be able to name which security and reliability patches came from that collaboration rather than treating Autopilot as a closed fork.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2103491221515907087
event_date: 2026-09-25
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: In the next post he said Omar's team contributed local inference, file transfer, and code mode on any machine attached to the OpenClaw gateway, plus CLAW profiles to bootstrap new agents, alongside unspecified security and reliability work.
why_it_matters: Those four surfaces are the ones to pin against a tag; if they are Autopilot-only, a self-host operator does not get them by upgrading OpenClaw.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2104067579484803217
event_date: 2026-09-27
date_precision: day
kind: voice
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Asked about in-product group chat between agents, he said the team was in a cleanup, reliability, and performance round and that new features would wait.
why_it_matters: That is a maintainer priority claim against the feature-race read of 9.6, and it should be judged by whether later tags actually reduced upgrade breakage.
===END===

===POST===
handle: @openclaw
post_url: https://x.com/openclaw/status/2105023990607786313
event_date: 2026-09-29
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account announced OpenClaw Enterprise as an open-source control plane for persistent agents, named Red Hat, NVIDIA, and OpenAI as collaborators, and said it runs on the organization's own infrastructure and stays free for an organization to use. A follow-up pointed at github.com/openclaw/openclaw-enterprise.
why_it_matters: Operators asked for a fleet layer; this is the named artifact, and it still has to be checked for channel, tenancy, and whether it is a separate repo with a different evidence floor from core OpenClaw.
===END===

===POST===
handle: @thecatzeus3
post_url: https://x.com/thecatzeus3/status/2105442651784806830
event_date: 2026-09-30
date_precision: day
kind: claim
stance: criticism
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Replying to a post that treated Enterprise as OpenAI open-sourcing its own fleet manager, this user said the project calls itself vendor-neutral and that setup asks the operator for their own OpenAI API key, so it is an independent control plane rather than OpenAI's internal manager.
why_it_matters: The attribution changes what an operator should expect: bring-your-own key and self-host, not a donated OpenAI production control plane.
===END===

===POST===
handle: @openclaw
post_url: https://x.com/openclaw/status/2105356656846786748
event_date: 2026-09-30
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said 2026.9.7 was snappier under load, smoother on long chats, added update backups and rollback plus 9.5 upgrade fixes, OpenAI Agents API and ChatGPT sign-in as Beta, better Apple chat, and restart recovery, citing 2818 PRs.
why_it_matters: Backup and rollback are the operator-facing promise later posts say failed in the field, so this tag is the one to check against those reports.
===END===

===POST===
handle: @openclaw
post_url: https://x.com/openclaw/status/2106162952923656337
event_date: 2026-10-02
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said Tencent Hunyuan's AI-Infra-Guard was integrated into ClawScan, the CLI that reviews ClawHub uploads, and that every skill and plugin uploaded to ClawHub now runs through that scanner, linking a Foundation blog.
why_it_matters: Anyone installing third-party ClawHub skills is being told a new supply-chain gate exists; the scanner's false-negative behavior and whether it runs on already-published skills still need a primary check.
===END===

===POST===
handle: @gadeanilnbkr
post_url: https://x.com/gadeanilnbkr/status/2106281977171325205
event_date: 2026-10-03
date_precision: day
kind: voice
stance: criticism
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: In reply to the ClawScan announcement, this user said routing every upload through Tencent's AIG puts a lot of trust in a corporate model and that it is still unclear how ClawHub handles a compromised plugin that the scanner misses.
why_it_matters: The counter-read of the supply-chain story is residual risk, not detection rate, which is the question an operator installing community skills actually has.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2107716578137846085
event_date: 2026-10-07
date_precision: day
kind: voice
stance: comparison
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Asked why Dots and OpenClaw look like competing products from one company, he said Dots is OpenAI's, OpenClaw is the Foundation's, and that he sits on the Foundation board while working at OpenAI, with different teams on each.
why_it_matters: Operators mixing Dots, Autopilot, and self-hosted OpenClaw need that split before treating any of them as the same control plane or the same permission model.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2108225854555975888
event_date: 2026-10-08
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Two weeks after the 400k-line cut, he said the same test-audit loop was still running, had deleted about 1.3 million weak tests, and that CI times were about twice as fast.
why_it_matters: That is a stronger, later measurement of the same cleanup; it should be pinned to a tag before anyone treats faster CI as a released property of 9.x or 10.x.
===END===

===POST===
handle: @tieteense
post_url: https://x.com/tieteense/status/2108341465013207115
event_date: 2026-10-08
date_precision: day
kind: claim
stance: frustration
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: On the 2026.9.9 announcement thread, this user said the update failed, diagnose also failed, and a rollback to 2026.9.8 succeeded.
why_it_matters: It is a field report against the 9.7/9.9 failed-update recovery claim, and it names a working previous pin an operator can actually hold.
===END===

===POST===
handle: @openclaw
post_url: https://x.com/openclaw/status/2108408104295768372
event_date: 2026-10-09
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Asked how multiplayer permissions work when several people direct one agent, the official account said permissions are still pretty basic and that the team is starting to see demand for read-only roles and for people who can join a session without starting one, pointing people at Discord.
why_it_matters: That is a maintainer admission that the shared-session product is ahead of the access-control model, which is the gap later 300-developer onboarding posts hit.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2108374513931165759
event_date: 2026-10-09
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Quoting a post that named the OpenClaw Foundation as the winning applicant for the .claw gTLD, the creator celebrated as if the string were already theirs. In a nearby reply he said the use case is simple domains for reaching agents, with revenue to fund OpenClaw.
why_it_matters: A TLD is a distribution surface, but Reveal Day is an application list; operators should not treat .claw hostnames as live until ICANN evaluation is checked.
===END===

===POST===
handle: @dallinfinite
post_url: https://x.com/dallinfinite/status/2109183541410250829
event_date: 2026-10-11
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: An OpenClaw engineer told a 9.9-thread reporter that the reported update break is fixed in 2026.10.1, and that someone updating from 2026.9.9 might still hit it during that hop but should be clear after landing 10.1.
why_it_matters: That is a channel warning: the repair lives in 10.1, and the 9.9-to-10.1 path itself may still fail, which is the opposite of a silent patch on 9.9.
===END===

===POST===
handle: @trvsco
post_url: https://x.com/trvsco/status/2109211536535289919
event_date: 2026-10-11
date_precision: day
kind: claim
stance: criticism
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: This operator said extended-stable 2026.8.35 still failed with a plugin-generation-superseded error even when providers returned HTTP 200, that restarts and an SQLite reset did nothing, and that the product told them to rerun onboarding, and asked the project to stop calling that channel stable. They linked GitHub issue 165226.
why_it_matters: Extended-stable is the production pin for people who refuse latest; if it forces a re-onboard, that channel is not doing the job the name claims.
===END===

===POST===
handle: @sav_gpt
post_url: https://x.com/sav_gpt/status/2109293261613416551
event_date: 2026-10-11
date_precision: day
kind: voice
stance: criticism
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Replying to the extended-stable onboarding failure, this user said a channel named extended-stable that then asks for a fresh onboard is what pushed them off OpenClaw, and that they now run Claude Code agents on their own server with overnight updates that roll back themselves.
why_it_matters: It is an exit with a reason, not a vibe: the conservative channel still demanded a destructive repair, which is the operator move that kills trust in a stateful agent.
===END===

===POST===
handle: @MrJ0hnSmith
post_url: https://x.com/MrJ0hnSmith/status/2109298305041592479
event_date: 2026-10-11
date_precision: day
kind: claim
stance: frustration
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A day-two user told the creator that every release has been broken, that Discord replies have needed a local upstream patch for months, and in a follow-up that a September change they called an SSD destroyer still has to be patched locally with RAM-mount tricks.
why_it_matters: That is a production-liveness report spanning the whole window, including a storage-safety defect that no official 9.x/10.x recap on X named.
===END===

===POST===
handle: @openclaw
post_url: https://x.com/openclaw/status/2109347136328417718
event_date: 2026-10-11
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said 2026.10.1 added installed-skill discovery, MCP Apps beside chat, full backups to external storage or Cloudflare R2, simpler Mac setup, and many bug fixes, citing 2425 PRs from 402 contributors.
why_it_matters: This is the October capability drop; skip-upgrade posts name missing fixes and a state-schema bump on this tag, so it is the one to check before anyone moves production off 9.9.
===END===

===POST===
handle: @rene05x
post_url: https://x.com/rene05x/status/2109493009352192083
event_date: 2026-10-12
date_precision: day
kind: claim
stance: criticism
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A production operator said they are staying on 2026.9.9 and skipping 2026.10.1 because two needed fixes are absent, a new strict-chat-template HTTP 400 showed up, and a state schema bump means rollback is a backup restore, and they are waiting for a 10.x stable that has all three.
why_it_matters: This is the reasoned skip, with issue numbers, and it treats 10.1 as a one-way state change rather than a patch.
===END===

===POST===
handle: @pswider
post_url: https://x.com/pswider/status/2109498823982645464
event_date: 2026-10-12
date_precision: day
kind: claim
stance: criticism
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: After trying Microsoft Autopilot, this user said it is basically a Teams agent with no remote, and called it a lobotomized OpenClaw.
why_it_matters: If the Microsoft build strips remote and general agency, Autopilot is not a drop-in OpenClaw for operators who already run the open gateway.
===END===

===POST===
handle: @kylianCros
post_url: https://x.com/kylianCros/status/2109566198291771531
event_date: 2026-10-12
date_precision: day
kind: voice
stance: criticism
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Pushing back on the idea that agents already maintain their own software, this hoster said the pattern works until a bug takes the agent down, and that in their OpenClaw fleet what fails is the box: RAM, disk, expired logins, with nobody left to read the error if nothing outside brings it back.
why_it_matters: Self-healing is not a closed loop; an operator still needs an outer watchdog, which is the serial human or extra harness the self-maintain story erases.
===END===

===POST===
handle: @tomismeta
post_url: https://x.com/tomismeta/status/2109701882939895846
event_date: 2026-10-12
date_precision: day
kind: voice
stance: comparison
frameworks: openclaw, hermes-agent
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: This user said they have been using Muse rather than OpenClaw and Hermes with Astra, found Muse better, and that they still feel they have full run of a small sandbox rather than a castrated agent.
why_it_matters: The window's consumer-agent consensus still treats OpenClaw as the unconstrained original; a reasoned switch to Muse is the counter-read that needs a capability check, not a dismissal.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2109707715052482660
event_date: 2026-10-12
date_precision: day
kind: voice
stance: praise
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Replying to a wish-list for shared-conversation teammates, self-hosted fleet scheduling, bring-your-own Codex and Claude subs, native harnesses, and a comprehensible UI, the creator said the person should try OpenClaw again and that it checks every box.
why_it_matters: That is the maintainer completeness claim; the next posts in the thread are people saying role and per-project access still do not match a 300-developer gateway.
===END===

===POST===
handle: @simonbs
post_url: https://x.com/simonbs/status/2109716896182607974
event_date: 2026-10-12
date_precision: day
kind: voice
stance: question
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: After the try-it-again pitch, this user said OpenClaw role handling does not make sense for onboarding 300 developers across hundreds of projects with granular access, everyone able to add projects, and access ideally following GitHub login. A next-day follow-up said that once a repo is on the shared gateway it looks like a free-for-all.
why_it_matters: Multiplayer without per-project ACL is the enterprise gap the Foundation's own permissions reply already flagged as basic.
===END===

===POST===
handle: @davidsenra
post_url: https://x.com/davidsenra/status/2109771476291428354
event_date: 2026-10-12
date_precision: day
kind: voice
stance: comparison
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: In a founder interview clip he said Meta's first Muse prototype was built in two weeks after Nat Friedman went all-in on OpenClaw, including an agent that watched security footage to nag him about drinking water, and that Alexander Wang called that shape likely to become the final consumer product.
why_it_matters: It is a category-origin claim: Muse as a hosted, constrained OpenClaw, which is the fork operators should keep in view when comparing self-host versus vendor bot.
===END===

===POST===
handle: @patrickerichsen
post_url: https://x.com/patrickerichsen/status/2110089649867964814
event_date: 2026-10-13
date_precision: day
kind: claim
stance: praise
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: An OpenClaw staff engineer said the UI now has a right sidebar for task progress, automations and dashboards, first-class multiplayer presence, and a smarter model picker, and that he does all of his coding work in OpenClaw.
why_it_matters: If maintainers themselves left the local coding harness for the OpenClaw UI, the interesting surface is that UI plus multiplayer, and it still has to be checked against the access-control gap users reported the same week.
===END===

===POST===
handle: @WG_Mojo
post_url: https://x.com/WG_Mojo/status/2110117933774934508
event_date: 2026-10-13
date_precision: day
kind: claim
stance: frustration
frameworks: openclaw
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: On the 2026.10.3 thread, this user said typing /update from Discord still fails, pointed at already-merged PR 165420, and asked for that fix in 10.4.
why_it_matters: A merged repair that missed the current stable tag is the exact released-is-not-merged trap; the Discord update path is still not the channel the patch notes imply.
===END===

===POST===
handle: @steipete
post_url: https://x.com/steipete/status/2110121908746490248
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: openclaw
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The creator replied that the Discord /update fix should be in 10.5 at the latest.
why_it_matters: That pins the repair to a future 10.5 line, so 10.3 is not the channel for Discord-driven updates even after the PR merged.
===END===

COVERAGE_NOTE: Identity locked to github.com/openclaw/openclaw (OpenClaw Foundation personal-agent/gateway; former names Clawdbot/Moltbot/CLAWDIS/Warelay). Dropped: OpenCode (different project; its Datadog RCE post is not OpenClaw), @KURAOpenclaw (Japanese news bot, not the project), RoboClaw bot chatter, ClawHub skill-spam and crypto-city skills with no argument, ClawSecure marketing, Microsoft Intune Autopilot posts that did not name OpenClaw, and @onusoz local-model posts (Bonsai/llama.cpp/pi) that never named an OpenClaw surface. Searched X Latest with since:2026-09-21 until:2026-10-14 on from:openclaw, from:steipete, from:hrudolph, from:onusoz, from:heyneighbor, from:dallinfinite, from:patrickerichsen, from:OmarShahine, plus keyword/semantic passes for OpenClaw + broken/regression/skip/extended-stable/ClawScan/ClawHub/Enterprise/Autopilot/.claw/CVE/sandbox, and thread fetches on 9.6, Enterprise, Autopilot, 9.9, 10.1, 10.3, the 400k-test post, and the Simon Stovring wish-list. Could not reach Discord (where upgrade-stuck reports were said to live), ClawCast audio, GitHub issue threads beyond the URLs people pasted, or NVD/GHSA discussion on X (maintainers did not tweet the late-September imported CVEs). Sweep is thin on: official extended-stable 2026.8.35 (no from:openclaw post found), @onusoz OpenClaw-specific product talk, non-English operator threads beyond a sample, quote-tweet critics of Enterprise (mostly amplifiers), and security-researcher writeups. 10.2/10.3 official recaps were read and treated as changelog noise except where a reply named a still-open defect.
