I'll start by reading the discovery method and Cursor watchlist entry, then search X only for posts about that product in the window.I'll load Cursor's source contract, known handles, and the sweep workflow so the X search stays on the editor, not lookalikes.I'll check prior Cursor harvests, maintainer handles, and what shipped in this window so the X search can target the right product.I'll identify official Cursor accounts and search X for maintainer and user posts in the window.I'll pull official Cursor posts from the rest of the window, then search maintainer and operator threads.SpaceX/Cursor rebrand talk and quota complaints showed up in-window; I'll chase those threads plus Projects, Origin, and CLI posts.===POST===
handle: @mntruell
post_url: https://x.com/mntruell/status/2092672784774394350
event_date: 2026-08-26
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Cursor's CEO said a normal Cursor (or Grok) subscription now included Grok Bot, and that weekly usage caps were being reset. He framed Bot as the fastest-growing product they had seen, used for work well outside the editor.
why_it_matters: Operators paying for Cursor Pro need to check whether the SKU now bundles a second agent product, and whether that changes quota, review load, or lock-in.
===END===
===POST===
handle: @cursor_ai
post_url: https://x.com/cursor_ai/status/2093077548649570777
event_date: 2026-08-27
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said you can now spin up a new web app in Cursor, park the code on Origin, and publish it to Vercel. A follow-up pointed at a changelog for starting cloud agents without an existing repo.
why_it_matters: Greenfield work may no longer need GitHub first, but Origin hosting is a different surface from the editor and the `agent` CLI, so operators should not treat this as a permission-model change.
===END===
===POST===
handle: @OpenAI
post_url: https://x.com/OpenAI/status/2093515564786540695
event_date: 2026-08-29
date_precision: day
kind: claim
stance: announcement
frameworks: cursor, codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: OpenAI said it was ending its Cursor partnership after the SpaceX acquisition, with a proposed 12 November cutoff for Cursor's direct access to OpenAI models. It said the people hurt were developers who had been using those models inside Cursor.
why_it_matters: Anyone whose Cursor workflow depends on OpenAI models has a dated cutoff to plan around, including whether to move that work into Codex or another harness before the proposed date.
===END===
===POST===
handle: @mntruell
post_url: https://x.com/mntruell/status/2093532254006063557
event_date: 2026-08-29
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: Cursor's CEO said OpenAI planned to block Cursor users from OpenAI models in three months, that those models were about five percent of Cursor traffic, and that talks were ongoing. He said Cursor had treated OpenAI as a vendor-neutral platform for years.
why_it_matters: The five-percent figure is the vendor's own traffic split, not a proof that GPT-class models are optional; operators still need to know which of their tasks sit in that slice before November.
===END===
===POST===
handle: @thsottiaux
post_url: https://x.com/thsottiaux/status/2093784314714657110
event_date: 2026-08-29
date_precision: day
kind: voice
stance: criticism
frameworks: cursor, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: OpenAI's Codex lead asked Cursor's CEO to show the math behind the five-percent traffic number. He argued that counting tokens would overstate weaker models, because OpenAI's models finish the same job with far fewer tokens.
why_it_matters: If traffic share is a token count, dropping OpenAI models can hurt high-value tasks more than the headline implies, so a migration plan should be by task type, not by the five-percent claim.
===END===
===POST===
handle: @Youssofal_
post_url: https://x.com/Youssofal_/status/2093807004968223134
event_date: 2026-08-29
date_precision: day
kind: voice
stance: criticism
frameworks: cursor, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said most of his OpenAI-model use lived in Cursor, not Codex, because Cursor's fast-mode toggle actually sped those models up and the IDE still felt better. He called the cutoff petty: paying users lose the model in the harness they already chose.
why_it_matters: The operator pain is harness-plus-model, not model alone; a Codex migration does not automatically preserve Cursor's fast path or editor loop.
===END===
===POST===
handle: @cursor_ai
post_url: https://x.com/cursor_ai/status/2094852929282879596
event_date: 2026-09-01
date_precision: day
kind: claim
stance: announcement
frameworks: cursor, claude-code
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said Claude Fable 5.1 was live in Cursor and was the strongest model they had run on CursorBench 3.2, at 73.4 percent at max effort. They said it was especially good at checking its own work end to end.
why_it_matters: After the OpenAI cutoff news, this is the vendor's bid that a Claude-family model can own the verify-your-own-work loop inside Cursor; the score and the self-check claim both need a primary check, not a social repost.
===END===
===POST===
handle: @cursor_ai
post_url: https://x.com/cursor_ai/status/2095257412781396114
event_date: 2026-09-02
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account said cloud agents can now run on machines you operate, including auto-scaling pools, while the agent loop stays in Cursor. A follow-up named sandbox providers such as AWS Lambda, Coder, Cloudflare, Daytona, E2B, Modal, Namespace, and Vercel.
why_it_matters: This is the vendor's answer to "the agent cannot see our internal services," but it is a cloud-agent surface, not a CLI sandbox claim, and later users said the worker-pool wiring was broken.
===END===
===POST===
handle: @GergelyOrosz
post_url: https://x.com/GergelyOrosz/status/2097401837192167596
event_date: 2026-09-08
date_precision: day
kind: voice
stance: criticism
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: He said he was glad the Cursor team got paid, but his read was that the product as people knew it was done, or would become a different team and a different tool. This sat under his thread about SpaceX comms blocking a Cursor engineer from his podcast unless the topic was Grok Bot.
why_it_matters: If that read is right, operators should treat Cursor as a SpaceXAI surface with a tighter comms and product agenda, not as the old independent editor vendor.
===END===
===POST===
handle: @GergelyOrosz
post_url: https://x.com/GergelyOrosz/status/2097644546909782029
event_date: 2026-09-09
date_precision: day
kind: claim
stance: criticism
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He said that after the SpaceX acquisition, Cursor Community had been renamed SpaceX AI Community, Cursor Ambassadors had become Grok Bot Ambassadors, and Cafe Cursor had been cancelled. He read that as SpaceX retiring the Cursor brand in favor of Grok Bot.
why_it_matters: Brand and community channels are how a lot of operators learn the product; if those channels now point at Grok Bot, the Cursor changelog is the surface that still names the editor, CLI, and cloud agent.
===END===
===POST===
handle: @sohamstwt
post_url: https://x.com/sohamstwt/status/2097804609842811180
event_date: 2026-09-09
date_precision: day
kind: voice
stance: praise
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Quoting the brand-death thread, he said Cursor was the first agent editor that felt like coding with agents, that the harness still worked on weak Gemini models, and that its semantic search was excellent. He also credited them with landing cloud agents first.
why_it_matters: The counter-read is that the harness, not the brand program, is what operators were buying, so a rename does not by itself tell you to leave the editor.
===END===
===POST===
handle: @0xkydo
post_url: https://x.com/0xkydo/status/2097542548390547928
event_date: 2026-09-09
date_precision: day
kind: claim
stance: praise
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said Origin as Cursor's own git host clicked after he read their agent-swarm writeup. He claimed they went from about a thousand commits an hour to a thousand a second in a few months.
why_it_matters: If that rate is real, Origin is an agent-scale forge, not a GitHub clone for humans; the number is a vendor-adjacent claim and needs the blog math, not a social repost.
===END===
===POST===
handle: @cursor_ai
post_url: https://x.com/cursor_ai/status/2098162488013455784
event_date: 2026-09-10
date_precision: day
kind: claim
stance: announcement
frameworks: cursor
author_is_maintainer: true
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: The official account introduced Projects: one persistent coordinator thread instead of a new chat per task, always on, dispatching subagents, and improving over time. Follow-ups said it could watch Slack and PRs, share plans and demos across machines, and that it was rolling out in beta that day.
why_it_matters: This is the vendor's bid that the unit of work is now a long-lived project on a cloud machine, not a local chat, which moves review from diffs in one session to whatever the coordinator brings back.
===END===
===POST===
handle: @gr1m0
post_url: https://x.com/gr1m0/status/2098162449157640460
event_date: 2026-09-10
date_precision: day
kind: claim
stance: criticism
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Quoting the self-hosted-machines launch, he said the feature was broken: automations could not pick a cloud agent without also picking a repo, after which "any repo" workers never took the jobs. He asked whether anyone had actually tried the Slack path, because users would have to name a repo or pool on every invocation.
why_it_matters: If that wiring is real, self-hosted pools do not yet replace vendor VMs for unattended Slack or automation work; operators should probe the worker-to-automation path before moving internal jobs onto it.
===END===
===POST===
handle: @PrajwalTomar_
post_url: https://x.com/PrajwalTomar_/status/2098750725249802619
event_date: 2026-09-12
date_precision: day
kind: voice
stance: praise
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: He argued Projects was the year's big UX change because starting a fresh chat each time forced you to re-explain the same repo. One long-lived thread with subagents underneath, he said, would make per-task chats look old within months.
why_it_matters: That is the enthusiastic read operators will hear; it should be paired with the cloud-only and execution-quality complaints before anyone rebuilds their workflow around a coordinator.
===END===
===POST===
handle: @_orcaman
post_url: https://x.com/_orcaman/status/2098795967143203086
event_date: 2026-09-12
date_precision: day
kind: claim
stance: criticism
frameworks: cursor, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: An Accomplish researcher said that after Cursor shipped a fix, they still escaped the Cursor CLI macOS sandbox via a Beltdown variant: harness git ran outside Seatbelt and honored a repo `core.fsmonitor` hook on a read-only prompt. He said Anysphere confirmed it and fixed it in Cursor CLI 2026.08.04-aaa8809.
why_it_matters: A shell sandbox is not a harness sandbox; operators on older CLI builds, or on `--force`/`--yolo`, should not open untrusted zips that ship a `.git` until they can pin that version.
===END===
===POST===
handle: @matviy
post_url: https://x.com/matviy/status/2099872739758874805
event_date: 2026-09-15
date_precision: day
kind: claim
stance: criticism
frameworks: cursor, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He said Codex, Claude Code, and Cursor were keeping sticker prices while shrinking what a prompt buys, with one prompt eating a few percent of a paid allowance. He called it the restaurant playbook: same menu price, smaller portions.
why_it_matters: If that burn rate holds, plan-level comparison has to be work-per-dollar, not monthly price, and a Cursor Ultra or Pro line item can disappear in a handful of long agent turns.
===END===
===POST===
handle: @krshgl
post_url: https://x.com/krshgl/status/2100826154559234359
event_date: 2026-09-18
date_precision: day
kind: voice
stance: criticism
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: After three days on a multi-PR job, he called Projects a good idea with poor execution: hard to see the code, unclear plans and diffs, no worktree management, no subagent status. He said it was easy to keep prompting while the coordinator sounded smarter than the slop it shipped, which he then cleaned up by hand.
why_it_matters: The coordinator hides the serial review step; if artifacts and worktrees are opaque, the human bottleneck moves to a worse place, after the merge, not before.
===END===
===POST===
handle: @joeladejola
post_url: https://x.com/joeladejola/status/2101067405191696543
event_date: 2026-09-18
date_precision: day
kind: voice
stance: comparison
frameworks: cursor, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: After several days he said Projects beat Grok Bot for building complex software, because agents can run locally or in the cloud and the coordinator compresses dispatch. He also said the coordinator is only useful when the spec is clear, and that Cursor's built-in browser is still weaker than Codex/ChatGPT's annotate-and-embed loop, so he still leaves the app to verify UI work.
why_it_matters: A reasoned keep-Cursor case that still sends UI verification out of band; operators should not assume Projects replaces a browser-native review harness.
===END===
===POST===
handle: @dui_toledo
post_url: https://x.com/dui_toledo/status/2100889302129336511
event_date: 2026-09-18
date_precision: day
kind: voice
stance: frustration
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He tried Projects on a short three-step job, got stuck on step one, and was asked a string of keep-going questions. He also said there was no API, so telling it to stop did not stop it, and other agents later found it still running.
why_it_matters: Always-on coordinators without a hard stop or an API become a new attention tax: you have to hunt down work you already cancelled.
===END===
===POST===
handle: @benvargas
post_url: https://x.com/benvargas/status/2100976183429177590
event_date: 2026-09-18
date_precision: day
kind: claim
stance: frustration
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: He said SuperGrok Heavy had been sold as including Cursor Ultra, then the bundled account did not match that promo. Follow-ups in the same thread said the "other models" pool was quietly cut from a $400-class allowance to about $100, with support pointing people at refunds.
why_it_matters: Operators who bought Heavy for Cursor Ultra should verify the live allowance in-product, not the promo copy, before planning a month of non-Grok model use.
===END===
===POST===
handle: @HandsomeHank_
post_url: https://x.com/HandsomeHank_/status/2101089084923888013
event_date: 2026-09-18
date_precision: day
kind: voice
stance: comparison
frameworks: cursor, grok-build
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He said he keeps Cursor because it is still an IDE in the repo: multi-file edits, visible diffs, no paste-back from a terminal agent. The reason to stay, versus Grok Build, was being able to swap models on a stuck mechanic without leaving the file.
why_it_matters: After OpenAI's cutoff, model switching inside one editor is the remaining Cursor bet; if that picker shrinks to Grok-only, this keep-reason dies with it.
===END===
===POST===
handle: @Ved_CJ
post_url: https://x.com/Ved_CJ/status/2101202589933301978
event_date: 2026-09-19
date_precision: day
kind: claim
stance: criticism
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Quoting the Projects launch, he said it was a shame the coordinator path only existed for cloud builds, with no way to point the same workflow at local dev.
why_it_matters: If Projects is cloud-only, it does not replace local agent chats for code that cannot leave the laptop, so the "one thread forever" pitch does not apply to air-gapped or local-only repos.
===END===
===POST===
handle: @GergelyOrosz
post_url: https://x.com/GergelyOrosz/status/2101296362503414130
event_date: 2026-09-19
date_precision: day
kind: claim
stance: comparison
frameworks: cursor, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: On Claude Code adding AGENTS.md, he said having the best model and harness did not make Anthropic faster: they were sixteen months behind OpenCode and Codex, and twelve months behind Cursor, on that file.
why_it_matters: In a window whose loud story is that Cursor is finished, this is a dated claim that Cursor shipped a portability primitive a year earlier; it still needs a primary check of when Cursor actually honored AGENTS.md.
===END===
===POST===
handle: @waynenilsen
post_url: https://x.com/waynenilsen/status/2101633333381705966
event_date: 2026-09-20
date_precision: day
kind: claim
stance: criticism
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: He said the painful Origin path is start-from-scratch: the model refuses work it probably cannot do yet, and agents cannot squash-and-merge their own Origin PRs, so he had to bootstrap by hand. Once the environment existed, later runs were fine except for that merge gap.
why_it_matters: Origin does not yet close the loop from empty repo to merged PR without a human git step; treat start-from-scratch as a bootstrap, not an unattended forge.
===END===
===POST===
handle: @davis7
post_url: https://x.com/davis7/status/2102039555310333956
event_date: 2026-09-21
date_precision: day
kind: voice
stance: comparison
frameworks: cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: After using Projects, he said the single coordinator thread plus cloud subagents lost less work than he expected, and the project view (PRs, running agents) made the queue visible. His cut was that SpaceXAI still has strong products, including Cursor and Origin, stuck on a mid model, and that the shape will spread even if Grok Bot felt more like the future.
why_it_matters: This is the in-window counter to "Cursor is finished": the coordinator UX can hold even when the default model does not, which is a model-routing problem, not a reason to abandon the editor on brand grounds.
===END===
COVERAGE_NOTE: Searched X for Anysphere/SpaceXAI Cursor (cursor.com editor, `agent` CLI, cloud agents, Origin hosting), not github.com/cursor/cursor as product source (that tree is the public bug tracker). Handles: from:cursor_ai, from:mntruell, from:amanrsanger (no in-window hits), from:ArVID220u (no in-window hits), from:benln (Cursor-team bio, almost no Cursor-product posts), from:OpenAI, from:thsottiaux, from:GergelyOrosz, from:cursorreleases, from:orenyomtov (no hits; Accomplish thread was from:_orcaman), plus keyword/semantic/quote sweeps for Projects, Origin, self-hosted machines, CLI persist/sandbox, Ultra quota, OpenAI cutoff, and switch-off/stay-on arguments. Window 2026-08-20 to 2026-09-21. Dropped lookalikes: mouse/CSS/database "cursor"; @orgn_official (a different confidential-dev Origin, not Cursor Origin); Grok-Bot-only marketing with no Cursor argument; unofficial changelog mirrors of posts already taken from @cursor_ai. Could not reach: deleted/protected posts; the full 777 replies / 565 quotes on the Projects launch; a systematic non-English sweep (only incidental JA/ZH/ES hits); Aman Sanger and Arvid Lunnemark in-window; an official @cursor_ai post on Beltdown2, the Ultra/Heavy allowance change, or the OpenAI cutoff (those came from researchers, users, OpenAI, and the CEO's personal account). Thin: 20-26 Aug besides the Grok Bot bundle (Origin launched 17 Aug, just outside); CLI persist (changelog 26 Aug) had no official X post in this sweep; @cursor_ai itself goes quiet after 10 Sep Projects while user argument (quota, Projects execution, Origin merge gaps) continues; mid-window CLI talk is thinner than the OpenAI and Projects clusters.
