I'll start by reading the discovery protocol and OpenCode identity so I only collect posts about the right project.Next I’ll load OpenCode’s source contract so I can tell official handles from lookalikes before searching X.I’ll check existing OpenCode sweep artifacts and known maintainer handles before searching X.I’ll pull known OpenCode posts from the existing topic sweep, then run a fresh windowed X search so every URL is independently confirmed.I’ll search official accounts, practitioner threads, and the counter-reads in parallel so the sweep is not just announcements.I’ll fetch the high-signal threads and hunt practitioner criticism, v2 migration talk, and the desktop rewrite next.I’ll go after practitioner argument next: v2 breakage, permissions, MCP, quality complaints, and the counter-reads.I’ll open the remaining high-signal threads and look for v2 migration, desktop, and quality complaints with real URLs.===POST===
handle: @thdxr
post_url: https://x.com/thdxr/status/2110209369681850448
event_date: 2026-10-14
date_precision: day
kind: claim
stance: announcement
frameworks: opencode
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A maintainer told a user looking for an OpenCode Go API key that v2 can sign in with OAuth and skip pasting keys, while agreeing they still need a clearer way to mint a key.
why_it_matters: An operator wiring Go into a headless or CI client cannot assume a Console key is the v2 default path; check the current login docs before treating a missing key UI as a regression.
===END===

===POST===
handle: @thdxr
post_url: https://x.com/thdxr/status/2110544790764794231
event_date: 2026-10-15
date_precision: day
kind: claim
stance: announcement
frameworks: opencode
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A maintainer said usage jumped again after the 2.0 release and that they were about to reach two million daily active users.
why_it_matters: This is the in-window claim that 2.0 moved daily use, so a team delaying the major upgrade is being told the growth is on the new major; the figure still needs a published counting method.
===END===

===POST===
handle: @thdxr
post_url: https://x.com/thdxr/status/2110793318959632615
event_date: 2026-10-15
date_precision: day
kind: claim
stance: announcement
frameworks: opencode
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A maintainer described driving OpenCode from a phone against a server in his office while the same session posted progress into a Slack thread with the team's OpenCode bot.
why_it_matters: This is the maintainer's own remote daily-driver story; an operator copying it needs the phone client, the office server, and the Slack bot path, not a laptop left unlocked with SSH.
===END===

===POST===
handle: @thdxr
post_url: https://x.com/thdxr/status/2110793727891444205
event_date: 2026-10-15
date_precision: day
kind: claim
stance: announcement
frameworks: opencode
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Asked whether the phone setup was Tailscale SSH, he said OpenCode can talk over HTTP, that he does have Tailscale, and that he was instead using the built-in remote path through opentunnel.xyz.
why_it_matters: The remote story is a public HTTPS relay, not a private mesh hop, so an operator who assumed Tailscale-only exposure should inspect OpenTunnel and pairing before putting an office agent on the internet.
===END===

===POST===
handle: @thdxr
post_url: https://x.com/thdxr/status/2111401470667194440
event_date: 2026-10-17
date_precision: day
kind: voice
stance: criticism
frameworks: opencode
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: OpenCode's builder argued that too many people are still tinkering with personal agent stacks instead of using a working coding agent to ship actual products.
why_it_matters: The person shipping the open harness is telling operators the scarce work is product delivery, which cuts against spending the week on a custom harness.
===END===

===POST===
handle: @opencode
post_url: https://x.com/opencode/status/2111519637049319818
event_date: 2026-10-17
date_precision: day
kind: claim
stance: announcement
frameworks: opencode
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said a distillation-related breach the night before hit 1.4 percent of Console users who had external providers linked, that those people were emailed, and that they were working with Anthropic, OpenAI, and Google while the incident was still open.
why_it_matters: Anyone who stored provider keys in Console has a revoke-at-the-provider job even if the local CLI was never involved; wait for an incident writeup before treating Console as a safe key store.
===END===

===POST===
handle: @thdxr
post_url: https://x.com/thdxr/status/2111633979074031801
event_date: 2026-10-18
date_precision: day
kind: claim
stance: announcement
frameworks: opencode
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: After a user said a Console Default API Key looked expired but still worked, a maintainer said he could not reproduce it and that logging in through OpenCode defaults to OAuth tokens rather than long-lived API keys.
why_it_matters: Post-breach key hygiene is easy to get wrong if the Console row is an OAuth token; rotate at the provider and confirm which credential type that row actually is.
===END===

===POST===
handle: @forsakenjvg
post_url: https://x.com/forsakenjvg/status/2111990960670244973
event_date: 2026-10-19
date_precision: day
kind: voice
stance: comparison
frameworks: opencode, omp
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: A long-time user said Droid has been their harness since mid-2025, that they had tried OpenCode, Oh My Pi, Amp, and others, and that nothing else had been better in their hands.
why_it_matters: This is a lived ranking against the OpenCode-is-winning read; it is still one person's setup, so treat it as a reason to trial Droid rather than as a census.
===END===

===POST===
handle: @renmu2017
post_url: https://x.com/renmu2017/status/2112053412695302570
event_date: 2026-10-19
date_precision: day
kind: claim
stance: announcement
frameworks: opencode
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A Chinese recap of the 2.0 launch said 1.x plugins and the old server API do not carry over, that 2.0 would not start LSP, that it only reads AGENTS.md, and that a simple config bump still leaves plugins to be rewritten.
why_it_matters: A team on 1.x plugins, LSP diagnostics, or CLAUDE.md instructions should not run a blind major upgrade; verify those limits against the tagged V2 docs before moving a fleet.
===END===

===POST===
handle: @jayair
post_url: https://x.com/jayair/status/2112338376833777908
event_date: 2026-10-20
date_precision: day
kind: claim
stance: announcement
frameworks: opencode
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: OpenCode's CEO stated the product now has two million daily active users.
why_it_matters: This is the headline adoption number people treated as proof the open harness is a serious daily driver; it remains a vendor metric until a method is published.
===END===

===POST===
handle: @thdxr
post_url: https://x.com/thdxr/status/2112342509388988434
event_date: 2026-10-20
date_precision: day
kind: claim
stance: announcement
frameworks: opencode
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Replying to the two million DAU post, a maintainer said the figure was up 25 percent from a month earlier as of that day.
why_it_matters: The extra number is a month-over-month claim, not just a snapshot, so any operator using DAU as a migration argument needs both the definition of a daily user and that 25 percent method.
===END===

===POST===
handle: @farseen
post_url: https://x.com/farseen/status/2112345014655447289
event_date: 2026-10-20
date_precision: day
kind: voice
stance: criticism
frameworks: opencode
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Replying to the two million DAU claim, he said they should try turning off all the free models and then recount.
why_it_matters: The counter-read is that headline users are subsidized-inference tourists, which would change whether a team treats two million as a reason to migrate.
===END===

===POST===
handle: @thdxr
post_url: https://x.com/thdxr/status/2112773823363747887
event_date: 2026-10-21
date_precision: day
kind: claim
stance: announcement
frameworks: opencode
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: In a thread about phishing aimed at their users, a maintainer said they had also seen a complex exploit chain come in through the enterprise contact form that tried to hit a locally running OpenCode server.
why_it_matters: A local OpenCode server is being treated as an attack target; an operator who binds one on a workstation should confirm pairing, password, and bind address before assuming it is only a convenience socket.
===END===

===POST===
handle: @ava_singularity
post_url: https://x.com/ava_singularity/status/2113176033851576774
event_date: 2026-10-22
date_precision: day
kind: claim
stance: criticism
frameworks: opencode
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Relaying an Axios writeup, they said OpenCode reported a Console key breach and that frontier models used in the investigation later refused when the defensive work looked like attack code.
why_it_matters: This is a separate IR claim from the key-exposure notice: if models refuse mid-investigation, a team cannot treat the coding agent as the incident-response runtime; start at the Axios piece they linked.
===END===

===POST===
handle: @TheHackersNews
post_url: https://x.com/TheHackersNews/status/2113219984365359340
event_date: 2026-10-22
date_precision: day
kind: claim
stance: criticism
frameworks: opencode
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They reported an OpenCode flaw where a malicious MCP server can run code on Windows and WSL at sign-in, said it was fixed in 1.18.33, and said there is no CVE or advisory so scanners will not flag old installs.
why_it_matters: Windows and WSL operators still on 1.x should check the running version by hand; a green scanner is not evidence they are past 1.18.32.
===END===

===POST===
handle: @KuritoL
post_url: https://x.com/KuritoL/status/2113221217922769165
event_date: 2026-10-22
date_precision: day
kind: claim
stance: criticism
frameworks: opencode
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A plugin author said OpenCode v2 can keep the same session identity across git worktrees while loading different plugins, and that session-level permissions are mutable through the Session API and are not a sandbox.
why_it_matters: An operator who thinks a plugin or a saved session permission is containing the agent should re-read v2 worktree and Session API behavior before treating those rules as isolation.
===END===

===POST===
handle: @rogesterone
post_url: https://x.com/rogesterone/status/2113252711487426898
event_date: 2026-10-22
date_precision: day
kind: claim
stance: criticism
frameworks: opencode
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They argued OpenCode's release path is weak: a maintainer can merge their own PR, anyone with write access can cut a release, the npm package has a single owner and no provenance, and they said a glassworm hit was force-pushed out of the copilot-auth plugin without comment.
why_it_matters: Supply-chain trust in the CLI binary is a different question from Console key theft; pin versions, check npm provenance, and do not treat GitHub stars as a review process.
===END===

===POST===
handle: @EricHallahan
post_url: https://x.com/EricHallahan/status/2113258746646315039
event_date: 2026-10-22
date_precision: day
kind: claim
stance: criticism
frameworks: opencode
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Replying to the supply-chain thread, they said OpenCode has repeatedly labeled stealth models as zero-data-retention while OpenRouter lists the same models as retaining data, and that they would not trust the project for serious work.
why_it_matters: A ZDR label on a hosted stealth model is not a contract; check the inference provider's retention terms before putting private code on Go or Free.
===END===

===POST===
handle: @thdxr
post_url: https://x.com/thdxr/status/2113268192802144759
event_date: 2026-10-22
date_precision: day
kind: claim
stance: announcement
frameworks: opencode
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A maintainer said they had ported the desktop app to a fully native UI and that it was no longer Electron.
why_it_matters: Desktop operators still on an Electron build, and 2.0 recaps that still describe Electron, need the actual download channel and version before treating native-desktop as shipped on their machine.
===END===

===POST===
handle: @thdxr
post_url: https://x.com/thdxr/status/2113274143806206109
event_date: 2026-10-22
date_precision: day
kind: claim
stance: announcement
frameworks: opencode
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He said OpenCode's client/server split makes it easy to run two clients side by side against the same agent and have them compare.
why_it_matters: The architectural bet is a shared local server with multiple fronts, so an operator choosing between OpenCode and a single-process CLI is choosing whether that daemon is a feature or a new attack and upgrade surface.
===END===

===POST===
handle: @NoemiTitarenco
post_url: https://x.com/NoemiTitarenco/status/2113734358800699575
event_date: 2026-10-23
date_precision: day
kind: claim
stance: criticism
frameworks: opencode
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A paying user said they canceled OpenCode Go, calling undisclosed quantization a rug pull, and that if a model is degraded they would rather run a quantized copy on their own hardware.
why_it_matters: This is the strongest hosted-quality walk-away in the window; a team buying Go for API-level DeepSeek behavior should verify the actual endpoint and quant, or buy inference from the model maker.
===END===

===POST===
handle: @thdxr
post_url: https://x.com/thdxr/status/2113781657341755423
event_date: 2026-10-23
date_precision: day
kind: voice
stance: frustration
frameworks: opencode
author_is_maintainer: true
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Asked to squash rumors that OpenCode degrades hosted models, he said public statements have not helped and that they will not know why people complain until they control 100 percent of their own inference.
why_it_matters: The maintainer is saying the Go/Free quality argument cannot be closed from their side yet, so an operator who needs consistent model behavior still has a reason to hit the model maker directly.
===END===

===POST===
handle: @fateshelled
post_url: https://x.com/fateshelled/status/2113795155056865749
event_date: 2026-10-24
date_precision: day
kind: claim
stance: frustration
frameworks: opencode
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A Japanese operator said they are finally getting used to OpenCode v2 and like being able to pick a model variant, then reported TUI freezes, missing subagent timeouts, and agent permission controls that feel too loose.
why_it_matters: This is a v2 daily-driver report with a reason attached: the major is usable, and the remaining operator costs are TUI stability and permission tightness, not missing models.
===END===

===POST===
handle: @nitsan2dots
post_url: https://x.com/nitsan2dots/status/2113915574673649673
event_date: 2026-10-24
date_precision: day
kind: claim
stance: criticism
frameworks: opencode
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A week after the breach notice, they said a legacy Console system was involved, that keys for that 1.4 percent may have been exposed, that one user reported about 1700 dollars of spend, and that deleting a key inside Console does not revoke it at the provider.
why_it_matters: If Console delete is not revoke, a team that only rotated in OpenCode's UI still has live keys; confirm against the provider dashboards and put a spend cap on each key.
===END===

COVERAGE_NOTE: Window 2026-10-13 to 2026-10-24. Searched official and maintainer accounts @opencode, @thdxr, @jayair, @anomalyco, @brendonovich, @savram8, @kitlangton; keyword and semantic queries for OpenCode 2.0/v2, plugins, LSP, AGENTS.md, permissions, sandbox, MCP, Console breach, distillation, quantization, Go plan, desktop/Electron, OpenTunnel, pair --remote, DAU, vs Claude Code/Codex/Cursor/Pi, and identity traps (Crush, opencode-ai Go, OpenCode Jr). Could not find an X handle for GitHub maintainer Hona. @anomalyco was silent in-window. Did not reach Discord, the full 731-reply breach thread, or most non-English operator chats beyond a Japanese v2 report and a Chinese 2.0 recap. Dropped free-model marketing drops (GLM, Nemotron, Cat Jam, Kimi, Beam), Wikipedia-page chatter, a 36T-token vendor metric, a Go-will-not-connect-to-Desktop rage reply, and Warp's broken v2 plugin. Identity exclusions: @OpenCodeJr, Brazilian @opencodecom, Japanese OpenCode Lambda, and Collabora CODE Server. Sweep is thin on independent desktop-native verification, on V1-package vs @opencode/cli confusion in the wild, and on whether 1.18.33 MCP users actually moved to 2.x.
