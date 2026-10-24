I'll chase the Cursor Origin thread on X in the 2026-10-13 to 2026-10-24 window: originating posts first, then replies, quote-posts, and the counter-read. Starting with searches and identity checks.The Oct 13 marketplace announcement looks like the in-window origin. Next I’ll pull that thread, its quotes, and follow-ups on CLI, pricing, outages, and the GitHub counter-read.The official thread is the hub. Next I’ll pull remaining quotes, maintainer follow-ups, and posts on CLI, merge gates, stacks, GitHub, and the counter-read.Quote search is stuck on latest. I’ll split the window, pull partner and GitHub reactions, and fetch the high-signal threads.Partner posts are landing. Next I’ll pull CodeRabbit, Socket, Semgrep, the lock-in/free-tier replies, and the GitHub-outage coincidence thread.I’ll pull maintainer posts, remaining partner threads, earlier official-thread replies, and Origin CLI / stacks / GitHub-outage coverage.Greg Foster’s “better than GitHub” reply is a maintainer claim. I’ll pull the first-hour replies, Vercel/Linear, CLI/stacks, and the remaining counter-reads.Diane Liu is an Origin maintainer and already replied on the account-transfer gap. I’ll pull her other posts, first-hour replies, access issues, and the Anthropic/GitHub counter-threads.I have the originating marketplace thread, maintainer replies, partner claims, operator migrations, and the counter-reads. Compiling only posts with a public x.com status URL.===POST===
handle: @derccl
post_url: https://x.com/derccl/status/2109912606097944872
event_date: 2026-10-13
date_precision: day
kind: claim
stance: frustration
frameworks: cursor, grok-build
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Hours before the marketplace post, this user said a Grok Super Heavy account merge had also cut off Cursor Origin, which they had been using.
why_it_matters: If plan or identity merges drop Origin access, operators treating Origin as the repo of record can lose the host independently of GitHub.
===END===
===POST===
handle: @cursor_ai
post_url: https://x.com/cursor_ai/status/2110075611633074295
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Cursor said Origin, its code host, now wires repos to more than twenty apps covering CI, deploys, review, security, monitoring, and project management.
why_it_matters: This is the in-window originating product claim; operators should check it against https://cursor.com/changelog/origin-app-marketplace and https://cursor.com/origin rather than treat the post as a shipped inventory.
===END===
===POST===
handle: @cursor_ai
post_url: https://x.com/cursor_ai/status/2110075624253751796
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: In a follow-up, Cursor said the Origin marketplace is open for any developer-tool team to submit an app.
why_it_matters: Public submission is a different operator path than a closed partner list; verify the review and listing rules at https://cursor.com/docs/origin/apps/publish.
===END===
===POST===
handle: @cursor_ai
post_url: https://x.com/cursor_ai/status/2110075636094242941
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Cursor pointed people at the Origin app publishing guide and at the Origin product page.
why_it_matters: Those two URLs are the primary sources later harvest should fetch: https://cursor.com/docs/origin/apps/publish and https://cursor.com/origin.
===END===
===POST===
handle: @coderabbitai
post_url: https://x.com/coderabbitai/status/2110079539963461755
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: CodeRabbit said it is a launch partner putting AI review comments onto pull requests hosted on Origin.
why_it_matters: If true, Origin PRs can carry a GitHub-style review bot without staying on GitHub; check https://www.coderabbit.ai/blog/coderabbit-independent-validation-cursor-origin.
===END===
===POST===
handle: @render
post_url: https://x.com/render/status/2110083798537048569
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Render said Origin repos can be installed from the marketplace and then get automatic builds, PR previews, and zero-downtime deploys as Render services.
why_it_matters: Deploy preview on Origin PRs is one of the missing GitHub-Actions substitutes operators ask about before moving a working repo.
===END===
===POST===
handle: @fluff_etc
post_url: https://x.com/fluff_etc/status/2110083707105096135
event_date: 2026-10-13
date_precision: day
kind: voice
stance: question
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: One reply asked whether a failing CI check is routed back to the agent that wrote the change, or whether a human still has to paste logs into chat.
why_it_matters: Integration count is the launch story; a closed agent-CI loop is the actual reason to leave GitHub.
===END===
===POST===
handle: @dadtheebuilder
post_url: https://x.com/dadtheebuilder/status/2110089412495528263
event_date: 2026-10-13
date_precision: day
kind: voice
stance: question
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Another reply asked whether existing CI configs, secrets, and branch protections come across, or whether those have to be rebuilt on Origin.
why_it_matters: That is the migration-cost question; a logo grid does not tell an operator whether a production repo can move without a second setup pass.
===END===
===POST===
handle: @aye_pete
post_url: https://x.com/aye_pete/status/2110084675163099487
event_date: 2026-10-13
date_precision: day
kind: voice
stance: question
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A reply asked where Origin had gone, then asked whether it is actually safe to leave GitHub yet and what switchers had seen.
why_it_matters: The quiet-product worry is the counter-read to the marketplace splash, and it is the question later operator reports in this window try to answer.
===END===
===POST===
handle: @iamalanlui
post_url: https://x.com/iamalanlui/status/2110109522714894679
event_date: 2026-10-13
date_precision: day
kind: voice
stance: criticism
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: This reply said twenty integrations is the wrong scoreboard, because each one is another place an agent can act under a human seat, and the missing product is scoping an agent to one repo and one window.
why_it_matters: Operators who connect CI, deploys, and review in one host increase blast radius unless Origin can attribute and bound agent credentials.
===END===
===POST===
handle: @charlielamb
post_url: https://x.com/charlielamb/status/2110107629066604760
event_date: 2026-10-13
date_precision: day
kind: voice
stance: joke
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Quoting the launch, this person joked that GitHub had perfect uptime from the moment Cursor posted Origin integrations.
why_it_matters: The reliability-escape story for leaving GitHub is already being mocked on day one; later GitHub incidents in this window reopen it.
===END===
===POST===
handle: @OmLahorey
post_url: https://x.com/OmLahorey/status/2110100245791359355
event_date: 2026-10-13
date_precision: day
kind: voice
stance: question
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A reply said they had not expected Cursor to chase code hosting and asked how moving existing GitHub repos actually works.
why_it_matters: Mirror versus cutover is the first operator fork, and several later posts in this window claim GitHub can stay source of truth.
===END===
===POST===
handle: @dianeliu21
post_url: https://x.com/dianeliu21/status/2110097389776232687
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: cursor, grok-build
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Diane Liu, who says she builds Origin, told the Super Heavy merge victim they had just shipped a fix and asked them to retry access.
why_it_matters: A maintainer treating lost Origin access as a same-day defect is a product fact to check against support and changelog, not against the marketplace post.
===END===
===POST===
handle: @artooro
post_url: https://x.com/artooro/status/2110102862458147272
event_date: 2026-10-13
date_precision: day
kind: claim
stance: comparison
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Answering the is-it-safe-to-switch question, this user said Origin had been fine for them provided the repo does not need to be public or shared outside the org, and provided project management lives somewhere else.
why_it_matters: That is a concrete limitation set against the GitHub-alternative framing; public OSS and external collaborators would still need another forge.
===END===
===POST===
handle: @realjamesmtz
post_url: https://x.com/realjamesmtz/status/2110091187566895513
event_date: 2026-10-13
date_precision: day
kind: claim
stance: frustration
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Quoting the launch, this user said Cloudflare was the last missing piece for a full switch, but they still could not get Origin after moving onto the unified plan.
why_it_matters: Paid-plan entitlement and Origin entitlement are being reported as separate, so a billing change can still block the host.
===END===
===POST===
handle: @dianeliu21
post_url: https://x.com/dianeliu21/status/2110102325989712108
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Liu told that user access should now work, after which they confirmed Origin opened but said a namespace still had to be migrated onto the new Cursor account by support.
why_it_matters: Access restore and namespace move are different tickets; operators who change plan or identity should expect Origin repos to stay glued to the old account.
===END===
===POST===
handle: @johnroodepic
post_url: https://x.com/johnroodepic/status/2110134489859199237
event_date: 2026-10-13
date_precision: day
kind: claim
stance: comparison
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: This quote-post said the marketplace is open and Origin itself is still early beta, that public apps can be installed by link while listed apps need Cursor approval, and that Cursor is going after GitHub's tooling moat around the repo.
why_it_matters: Install-by-link versus listed-after-review is the operator distinction for untrusted apps, and the beta caveat is the counter to a launch-day switch.
===END===
===POST===
handle: @buildkite
post_url: https://x.com/buildkite/status/2110137489608560681
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Buildkite said the Origin marketplace shipped under SpaceXAI, that Cursor's own CI for building Origin is the setup now offered to users, and that Linear and Vercel sit alongside it.
why_it_matters: If Cursor dogfoods Origin on Buildkite, native Origin repos may get a first-class CI path that GitHub-mirrored repos do not; that split shows up again later in this window.
===END===
===POST===
handle: @davyli
post_url: https://x.com/davyli/status/2110136396203876562
event_date: 2026-10-13
date_precision: day
kind: voice
stance: announcement
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Davy Li, whose bio says he builds Origin via Cursor and Graphite, quoted the launch and asked toolmakers to submit their own apps.
why_it_matters: This is a named Origin maintainer, not the brand account, treating the marketplace as the Graphite team's current surface.
===END===
===POST===
handle: @LuzBone7
post_url: https://x.com/LuzBone7/status/2110141704934244794
event_date: 2026-10-13
date_precision: day
kind: voice
stance: criticism
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A reply said Origin cannot compete with GitHub without a free tier, because people will not park code on a host they can lose by cancelling a subscription.
why_it_matters: Paid-only hosting is a lock-in and continuity risk that GitHub's free public repos do not have.
===END===
===POST===
handle: @Wisdom_HQ
post_url: https://x.com/Wisdom_HQ/status/2110156518385422639
event_date: 2026-10-13
date_precision: day
kind: voice
stance: joke
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A quote-post joked that Origin now has twenty integrations and zero customers.
why_it_matters: The empty-ecosystem jab is the sharpest day-one counter-read to the partner logo grid.
===END===
===POST===
handle: @SocketSecurity
post_url: https://x.com/SocketSecurity/status/2110370850579099751
event_date: 2026-10-14
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Socket said its Origin app is live in Cursor's marketplace and will scan dependency diffs for malware and compromised updates, posting findings on the pull request before merge.
why_it_matters: Supply-chain checks on Origin PRs are a claimed merge-gate substitute; verify at https://socket.dev/blog/socket-for-origin.
===END===
===POST===
handle: @drewdennison
post_url: https://x.com/drewdennison/status/2110377302106546433
event_date: 2026-10-14
date_precision: day
kind: voice
stance: praise
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: Semgrep's CTO said the Semgrep team had worked with Cursor to land Semgrep on Origin, framing it as scanning code at the source.
why_it_matters: A security-vendor maintainer confirming the integration is stronger than a logo on Cursor's graphic, and it pairs with Semgrep's own later post.
===END===
===POST===
handle: @xiao20896430178
post_url: https://x.com/xiao20896430178/status/2110357111276441712
event_date: 2026-10-14
date_precision: day
kind: claim
stance: neutral
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: This user said public Origin apps can be installed by direct link, listed only after review, and that the publish docs require a demo of uninstall stopping webhooks on both sides.
why_it_matters: Uninstall and webhook-off is part of the claimed app contract; check https://cursor.com/docs/origin/apps/publish and https://cursor.com/changelog/origin-app-marketplace.
===END===
===POST===
handle: @yannisbuilds
post_url: https://x.com/yannisbuilds/status/2110457439543787860
event_date: 2026-10-14
date_precision: day
kind: voice
stance: question
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A reply asked whether each cloud agent can have its own Origin permissions, able to push and open PRs but not merge just because the human account can, with every action tied to that agent run.
why_it_matters: Without per-agent identity, Origin inherits GitHub's shared-token problem at agent volume.
===END===
===POST===
handle: @runes_leo
post_url: https://x.com/runes_leo/status/2110636794811130000
event_date: 2026-10-15
date_precision: day
kind: voice
stance: criticism
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: This quote-post said the interesting part is closing the PR-CI-review-deploy-monitor loop, and that they will not migrate off GitHub for a new platform until a real project shows completion rate, failure rate, and human-intervention cost.
why_it_matters: That is the operator test the launch does not answer, and it cuts against both hype and immediate cutover.
===END===
===POST===
handle: @KowalPrato4o
post_url: https://x.com/KowalPrato4o/status/2110633420023795889
event_date: 2026-10-15
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: In a follow-up to their marketplace recap, this user said Depot and Buildkite currently work only on native Origin repos, while GitHub mirrors still run GitHub CI, and that Origin remains early beta.
why_it_matters: If marketplace CI does not fire on mirrored repos, mirroring is not a substitute for moving the source of truth.
===END===
===POST===
handle: @liangzhu_AI
post_url: https://x.com/liangzhu_AI/status/2110976533263433977
event_date: 2026-10-16
date_precision: day
kind: voice
stance: criticism
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: This quote-post read the marketplace as Cursor trying to own the repo and the delivery pipeline, and told teams to inventory how coupled their CI is before a price or policy change makes leaving hard.
why_it_matters: Lock-in of the forge plus the agent is a different bet than using Cursor as an editor on GitHub.
===END===
===POST===
handle: @semgrep
post_url: https://x.com/semgrep/status/2110687748885479589
event_date: 2026-10-15
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Semgrep said Origin-hosted repos can now connect for automated scans, PR checks, and in-workflow findings.
why_it_matters: Cross-check the product claim at https://semgrep.dev/blog/2026/cursor-origin-security-scanning/.
===END===
===POST===
handle: @Netlify
post_url: https://x.com/Netlify/status/2110714001369842141
event_date: 2026-10-15
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Netlify said Origin repos build, preview, and deploy the same way GitHub, GitLab, and Bitbucket repos do, and that this path is in beta through Cursor's invite-only Origin program.
why_it_matters: Invite-only is a harder access channel than Cursor's public marketplace post; operators should not assume they can attach Netlify today.
===END===
===POST===
handle: @gregfoster996
post_url: https://x.com/gregfoster996/status/2110712004751303057
event_date: 2026-10-15
date_precision: day
kind: voice
stance: praise
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Graphite cofounder Greg Foster, now at Cursor via the Graphite acquisition, replied yup when asked whether Origin is already better than GitHub.
why_it_matters: That is a named Origin-lineage maintainer rejecting the wait-and-mirror consensus; it is a take, not a benchmark.
===END===
===POST===
handle: @VanillaCache
post_url: https://x.com/VanillaCache/status/2111015547798212768
event_date: 2026-10-16
date_precision: day
kind: claim
stance: comparison
frameworks: cursor, grok-build
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: This operator said they had moved projects off GitHub onto Origin, with CI on Buildkite, previews on Cloudflare Workers, and two separate AI reviewers on every PR.
why_it_matters: It is a reported cutover, not a logo-grid reaction, and it cuts against the Origin-vanished and do-not-switch takes.
===END===
===POST===
handle: @VanillaCache
post_url: https://x.com/VanillaCache/status/2111020861666832651
event_date: 2026-10-16
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Asked how migration compared with GitHub, they said they created the repo, pointed the local remote at Cursor Origin, pushed, attached Buildkite because Origin has no native CI, iterated a PR until green, then set protections and Bugbot.
why_it_matters: That procedure is the closest operator receipt in the window for moving a repo, including the claim that CI is an addon rather than built in.
===END===
===POST===
handle: @0xEduardoB
post_url: https://x.com/0xEduardoB/status/2111202576205271405
event_date: 2026-10-16
date_precision: day
kind: voice
stance: question
frameworks: cursor, claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A reply on the launch thread asked whether anyone was building a Claude Code mod for Origin pull-request status indicators.
why_it_matters: If Origin PRs are invisible in Claude Code, mixed-harness teams still have a GitHub-shaped status plane.
===END===
===POST===
handle: @ItsCynnamoroll
post_url: https://x.com/ItsCynnamoroll/status/2111854527943176240
event_date: 2026-10-18
date_precision: day
kind: voice
stance: criticism
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: The Kvarm author said people asked why build another forge when Origin exists, and answered that the agent era needs an open-source git platform without vendor lock-in.
why_it_matters: The counter-product is not GitHub; it is a portable forge, which is the argument Origin's closed beta cannot answer.
===END===
===POST===
handle: @theaicatchup
post_url: https://x.com/theaicatchup/status/2111878396108034121
event_date: 2026-10-18
date_precision: day
kind: claim
stance: neutral
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: This recap said public submissions are open, listed the partner categories, described private-then-public app publish plus a required demo video, and added that Origin is still early beta on paid plans excluding Free and Plus, with codebase names frozen after claim.
why_it_matters: Paid-only plus an unchangeable codebase name are the practical blockers; they should be checked against Cursor's Origin docs, not treated as social fact.
===END===
===POST===
handle: @aladicf
post_url: https://x.com/aladicf/status/2112290997652615576
event_date: 2026-10-19
date_precision: day
kind: voice
stance: praise
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: After a GitHub-related complaint nearby, this user said they do not expect to go back to GitHub and will put future projects on Cursor Origin or Cloudflare Artifacts.
why_it_matters: It is an operator declaring a cutover during the GitHub-outage week, which is the opposite of the vanished-product read.
===END===
===POST===
handle: @_jsolly
post_url: https://x.com/_jsolly/status/2112984365890244799
event_date: 2026-10-21
date_precision: day
kind: voice
stance: frustration
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: This user said GitHub suspended a paid Pro account with no notice after they used an AI agent on their own repos, then asked how they planned to use GitHub.
why_it_matters: GitHub policy risk is now an Origin adoption argument; the same author later said they already mirror to Origin and asked whether Actions would move.
===END===
===POST===
handle: @_jsolly
post_url: https://x.com/_jsolly/status/2112991073878396940
event_date: 2026-10-21
date_precision: day
kind: voice
stance: question
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: In that thread they said they already use Origin as a mirror and asked whether they can run on Origin alone and whether GitHub Actions would come along.
why_it_matters: Mirror-to-primary is the live migration question, and Actions portability is the blocker several other posts also flag.
===END===
===POST===
handle: @sublimef4n
post_url: https://x.com/sublimef4n/status/2112925598452682918
event_date: 2026-10-21
date_precision: day
kind: voice
stance: comparison
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: With screenshots, this user said Origin's uptime so far looked about the same as GitHub's, while noting GitHub was degraded at that moment.
why_it_matters: If Origin fails on the same days GitHub does, reliability is not a reason to move.
===END===
===POST===
handle: @DevItaliya22
post_url: https://x.com/DevItaliya22/status/2113141399625629916
event_date: 2026-10-22
date_precision: day
kind: voice
stance: frustration
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: After a GitLab critical-vuln headline, this user told Cursor to build Origin faster so they could move, then later told Liu they had never used it and would try moving a few projects that weekend.
why_it_matters: GitLab risk is being used as an Origin deadline even by people who have not run Origin yet; Liu then asked what was missing and said it was ready to move to.
===END===
===POST===
handle: @miyayu_jp
post_url: https://x.com/miyayu_jp/status/2113168191639924988
event_date: 2026-10-22
date_precision: day
kind: claim
stance: praise
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: This user said Cloudflare Workers Builds now accepts Cursor Origin and Artifacts as sources, with a large free build-minute bucket on the paid Workers plan.
why_it_matters: A Cloudflare build path is a GitHub-Actions substitute that official Cloudflare did not announce in the Origin-marketplace posts this sweep could find.
===END===
===POST===
handle: @Atinux
post_url: https://x.com/Atinux/status/2113197235676578037
event_date: 2026-10-22
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Sebastien Chopin said Daniel Roe shipped a TypeScript client covering GitHub, GitLab, Bitbucket, Gitea, Cursor Origin, and more, and followed up that it is open source.
why_it_matters: A multi-forge client is how teams keep Origin from becoming a one-way door; the repo to check is https://github.com/danielroe/forges and https://forges.link.
===END===
===POST===
handle: @carabarrera_
post_url: https://x.com/carabarrera_/status/2113307625962238169
event_date: 2026-10-22
date_precision: day
kind: claim
stance: frustration
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: This user said their team had switched to Cursor Teams twelve days earlier and was still waiting for Origin access, with billing and the X account also wrong.
why_it_matters: Paid Teams is being reported as insufficient for Origin, which undercuts the paid-plans-get-the-host claim from the August beta.
===END===
===POST===
handle: @JackEllis
post_url: https://x.com/JackEllis/status/2113310445884879123
event_date: 2026-10-22
date_precision: day
kind: voice
stance: frustration
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: The Fathom founder said he was done with GitHub Actions outages and would move CI off GitHub, while most replies suggested GitLab, Depot, self-hosted runners, or staying put because webhooks still depend on GitHub.
why_it_matters: This is the GitHub-reaction thread Origin maintainers entered; the surrounding advice is that leaving Actions is not the same as leaving GitHub.
===END===
===POST===
handle: @jshai0
post_url: https://x.com/jshai0/status/2113395797752754652
event_date: 2026-10-22
date_precision: day
kind: voice
stance: criticism
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Nine days after the marketplace post, this user asked what happened to the GitHub-alternative hype and said Origin had simply vanished.
why_it_matters: Vanished is the late-window counter-read, and it is the claim Origin maintainers then answered in public.
===END===
===POST===
handle: @dianeliu21
post_url: https://x.com/dianeliu21/status/2113722811261075721
event_date: 2026-10-23
date_precision: day
kind: voice
stance: praise
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: On the GitHub-Actions-outage thread, Liu replied that Origin is still here and asked people to try it.
why_it_matters: A maintainer treating GitHub fatigue as an Origin sales moment directly contradicts the vanished take.
===END===
===POST===
handle: @thesunofdog
post_url: https://x.com/thesunofdog/status/2113696242236866585
event_date: 2026-10-23
date_precision: day
kind: claim
stance: criticism
frameworks: cursor, grok-build
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: This operator said converting a personal Grok Bot Cursor account into a team account created a new namespace, left Origin repos on the old personal account, blocked team bots from that codebase, and required a multi-day manual support transfer with no in-product warning.
why_it_matters: Account-upgrade is a reported data-loss path for Origin; anyone using Origin as source of truth should treat personal-to-team as a support-gated migration.
===END===
===POST===
handle: @dianeliu21
post_url: https://x.com/dianeliu21/status/2113718347716309331
event_date: 2026-10-23
date_precision: day
kind: claim
stance: frustration
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Liu replied that missing self-serve repo transfer on personal-to-team is a gap in Origin's repo lifecycle they will fix, and offered to move the account from a DM or ticket number now.
why_it_matters: The defect is admitted by an Origin maintainer; the workaround is still a human in the loop, which is the Amdahl bottleneck for agent-hosted repos.
===END===
===POST===
handle: @starkov100
post_url: https://x.com/starkov100/status/2113881780151324807
event_date: 2026-10-24
date_precision: day
kind: claim
stance: criticism
frameworks: cursor, grok-build
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: This user said a Grok Bot private-research task invoked Cursor, which already had GitHub access via cloud agents, and opened a PR on a public repo, and that a rule to ask before using Cursor is fragile and drops Cursor Origin, so Grok Bot needs separate permissions.
why_it_matters: Shared Cursor credentials plus Origin as a second forge means a bot permission bug can publish to the wrong host; operators cannot treat ask-first rules as an Origin ACL.
===END===
COVERAGE_NOTE: Window 2026-10-13 to 2026-10-24. Origin the product was announced at Compile (2026-06-16) and shipped early beta on paid plans (2026-08-17), both outside this window; the in-window originating posts are Cursor's 2026-10-13 18:30 UTC Origin App Marketplace thread (https://x.com/cursor_ai/status/2110075611633074295 and two follow-ups) plus a same-morning access-loss thread that began before that post. Searched X keyword and semantic for Cursor Origin, origin CLI, origin auth, merge gates, PR stacks, Graphite, marketplace, GitHub outage/uptime, lock-in, vanished, migrate, namespace, and from:cursor_ai / from:davyli / from:dianeliu21 / from:gregfoster996 / from:leerob / from:tomasreimers / from:truell20; quoted_tweet_id and conversation_id slices of the official thread; partner accounts (CodeRabbit, Socket, Semgrep, Netlify, Render, Buildkite, Greptile, Tenki, RWX, Vercel, Linear, Sentry, Cloudflare, GitHub). Could not exhaust the official thread's 155 replies and 89 quotes (search returns latest-first windows); could not read DMs Liu asked people to send; found no GitHub or Microsoft official reply; found no Vercel, Linear, Sentry, or Cloudflare brand posts about the Origin marketplace (Cloudflare hits were CDN origin-range caching); Origin CLI appeared almost only in Grok-authored replies (install.sh / origin auth login), not in human operator writeups; Graphite-style PR stacks and Origin-native merge gates were effectively absent this window (merge gate talk was Delimit marketing or generic agent ops). Identity ruled out: Cloudflare cache origin, Blue Origin/NASA, EA Origin Access, git remote named origin / Claude Code /security-review against origin, unofficial @CursorHQ, OpenCode same-origin auth. How it spread: marketplace post -> partner quote-posts same day -> permission/free-tier/beta counters -> Diane Liu access fixes for unified-plan and Super Heavy merges -> operator cutover reports mid-window (VanillaCache) -> GitHub outage/suspension week pulled Origin in as an alternative, including a false "surprise launch on Oct 19" line in secondary writeups -> late-window vanished vs still-here, plus the personal-to-team namespace trap Liu admitted. Thin on: Origin outages of Origin itself, pricing of Origin as a host, public-repo support beyond one operator report, and any primary for CLI/stacks/gates.
