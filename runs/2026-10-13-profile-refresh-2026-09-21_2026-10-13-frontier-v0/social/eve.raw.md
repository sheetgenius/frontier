I'll start by identifying what `eve` actually is on the watchlist, then search X only for that Vercel project in the given window.I'll load the Eve source contract and prior social harvests so the identity check is tight before any X search.I'll pull known Eve handles and the existing window harvest so the X sweep can stay on the Vercel project.I'll identify Eve's official and maintainer accounts first, then run dated keyword searches inside the window.Official handle is `@eve`, and several Vercel people posted in-window. Next I’ll pull their timelines and hunt for operator criticism.I'll paginate the official account, pull the argument threads, and search specifically for operator friction.I’ll fetch the argument threads and hunt for more maintainer and operator posts, including the ones that push back.I’ll pull remaining maintainer timelines and look for bug reports and counter-takes.I have enough in-window, identity-checked leads. Next I’ll emit only the post records, with gaps called out in the coverage note.

===POST===
handle: @eve
post_url: https://x.com/eve/status/2102427873923707350
event_date: 2026-09-22
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: The official account said Eve workflow tools can deterministically orchestrate subagents, pause for a human, stream progress, and run multi-step work durably.
why_it_matters: If that contract holds, an operator can put approval and crash-resume on a typed workflow instead of hoping the model loop pauses itself.
===END===

===POST===
handle: @rauchg
post_url: https://x.com/rauchg/status/2102837235213345238
event_date: 2026-09-23
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: Vercel's CEO said the split of harness, tools/computer, and attachable storage is already Eve's architecture, and that v0 and libfx on Vercel are meant to follow the same shape.
why_it_matters: Operators deciding where Eve can actually recover a session need to check whether that split is in the tagged runtime or only in the surrounding Vercel pitch.
===END===

===POST===
handle: @manavvnotop
post_url: https://x.com/manavvnotop/status/2104875386048008476
event_date: 2026-09-29
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: He argued that handing Eve the agent loop is a mistake, and that a state-of-the-art agent still requires writing that loop yourself.
why_it_matters: This is the counter to the vendor line that Eve is the production harness you adopt rather than a library you assemble around.
===END===

===POST===
handle: @andrew_barba
post_url: https://x.com/andrew_barba/status/2104944521834357086
event_date: 2026-09-29
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: An Eve maintainer replied that you can turn the default tools off and build the loop from public APIs, including background work, parking, and human-in-the-loop, and that he does not know another framework that exposes those primitives as openly.
why_it_matters: If defaultTools false really yields a first-class loop, the "Eve owns your loop" objection is a configuration choice; if the public API is thinner than that, operators still cannot replace the stock turn.
===END===

===POST===
handle: @0xRapid
post_url: https://x.com/0xRapid/status/2105080143127658568
event_date: 2026-09-29
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: frustration            # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Replying to an official Eve post, he said the only reason he is not using it is that hosting Eve on Cloudflare is still too hard.
why_it_matters: Deploy-anywhere talk does not help an operator whose constraint is Durable Objects or another non-Vercel host until that path is documented and tested.
===END===

===POST===
handle: @Bata98
post_url: https://x.com/Bata98/status/2105355187452080160
event_date: 2026-09-30
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: He reported a 0.68.0 defect: a step that mixed a deferred tool such as ask_question with an approval-gated tool never ran the approval response policy, because the pending batch was appended without the response-auth request ids.
why_it_matters: Anyone mixing questions and approvals on 0.68.0 should treat that mix as ungated until a later tag is shown to carry the repair.
===END===

===POST===
handle: @coltonpadden
post_url: https://x.com/coltonpadden/status/2105357057939439996
event_date: 2026-09-30
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: A Vercel Eve engineer said a fix for that mixed deferred-tool and approval-policy bug had already landed and would ship in the next release.
why_it_matters: The operator question is which tag first contains the tool-loop repair, not whether someone acknowledged the report.
===END===

===POST===
handle: @coltonpadden
post_url: https://x.com/coltonpadden/status/2106096404196475237
event_date: 2026-10-02
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: He demoed getting started with Eve and said self-modification is on by default, along with easier app connections and TUI polish.
why_it_matters: A default-on local editor changes who may rewrite tools the moment they can reach the dev server, so operators need to know how to turn it off before sharing that host.
===END===

===POST===
handle: @coltonpadden
post_url: https://x.com/coltonpadden/status/2106185304063533132
event_date: 2026-10-03
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve, claude-code   # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Asked whether Eve's TUI is the right way to build versus prompting Claude, he said self-modification is improving but does not yet match existing coding harnesses, and that editing deployed agents still needs work.
why_it_matters: This is a maintainer warning not to treat Eve self-mod as a Claude Code replacement for authoring, especially on a deployed agent.
===END===

===POST===
handle: @donpark
post_url: https://x.com/donpark/status/2106479152245469315
event_date: 2026-10-03
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: question               # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: He asked whether self-modification is disabled on deployed agents or still on by default, and the public thread did not answer.
why_it_matters: Local-dev default-on editing and deployed editing are different authority surfaces; an unanswered question here is the live operator risk.
===END===

===POST===
handle: @RobinWanderr
post_url: https://x.com/RobinWanderr/status/2106856471942094886
event_date: 2026-10-04
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: He said Eve is a strong project whose public docs are written for agents, which makes it hard for a human to think through the features.
why_it_matters: If the human-readable layer is weak, operators will keep burning tokens on source-reading agents just to learn whether a primitive exists.
===END===

===POST===
handle: @coltonpadden
post_url: https://x.com/coltonpadden/status/2106862763255398675
event_date: 2026-10-04
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: He said Eve docs are already scored on agent usability in their evals, that a human-facing entry is under consideration, and that he has had luck letting an agent walk him through the concepts.
why_it_matters: A docs program optimized for agents can hide the very facts a human needs, such as whether code-mode-style tool calling exists, unless those evals also fail closed on missing human examples.
===END===

===POST===
handle: @RobinWanderr
post_url: https://x.com/RobinWanderr/status/2106876190866743787
event_date: 2026-10-04
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve, claude-code, codex, pi-coding-agent # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: He said his workaround is to have an agent read source across sandbox, workflows, AI SDK, and Eve, which is slow and bad at proving a feature is absent; his agent first treated a sandbox as code-mode tool calling, then flipped, while human docs for Codex, Claude, and Pi would have put that question up front.
why_it_matters: Compounding agent-written docs is a discovery failure: operators cannot cheaply tell whether Eve already has a primitive their other harnesses are moving toward.
===END===

===POST===
handle: @kushbhuwalka
post_url: https://x.com/kushbhuwalka/status/2106902660578472208
event_date: 2026-10-05
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: praise                 # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: He said a custom Mac-mini "god agent" harness was painful because the failure surface never closed, and that moving to Eve let the team work on agent behavior instead of rebuilding Slack and other scaffolding.
why_it_matters: This is the adoption case for buying a harness: unbounded integration failure, not a missing model trick.
===END===

===POST===
handle: @ShloimyAI
post_url: https://x.com/ShloimyAI/status/2107034630679413204
event_date: 2026-10-05
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: question               # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: He asked Vercel for a Python SDK, noting Eve is TypeScript-only today, and pointed at GitHub issue 174.
why_it_matters: Python-first agent teams cannot treat Eve as a default until that SDK exists or they accept a TS-only control plane.
===END===

===POST===
handle: @kyleroche
post_url: https://x.com/kyleroche/status/2107190493410910652
event_date: 2026-10-05
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: comparison             # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: He said he prefers Vercel tools in general, likes Eve better when the work is TypeScript, and still uses fx.sh for local CLI because it is faster, has better MCP options, and can spend a subscription before overflowing to AI Gateway.
why_it_matters: Eve is not winning the local coding-CLI slot even among people already in the Vercel stack; the comparison to check is MCP and subscription routing, not the landing-page demo.
===END===

===POST===
handle: @shardara
post_url: https://x.com/shardara/status/2107201948357382336
event_date: 2026-10-05
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: An Eve maintainer said you can put human-in-the-loop on a shopping agent, and that in the iMessage demo Stripe Link handled the approval instead.
why_it_matters: If the wallet can settle spend without Eve's approval gate, operators need to know which layer actually holds purchase authority.
===END===

===POST===
handle: @cnc_investor
post_url: https://x.com/cnc_investor/status/2107230098290298893
event_date: 2026-10-05
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: He argued that giving an agent a wallet is not the same as giving it purchase authority, and that repeat use still needs merchant and amount limits plus a receipt that separates paid from accepted.
why_it_matters: Link-on-Eve demos can be read as a complete control plane; this says the missing product is scoped spend policy, not the payment rail.
===END===

===POST===
handle: @OHMhdd
post_url: https://x.com/OHMhdd/status/2108443844945834148
event_date: 2026-10-09
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: frustration            # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: He said building on Eve has been messy for dynamic A2UI responses in Flutter and that he is considering moving to Google Genkit, asking whether Genkit has sandboxes, bash, grep, browser automation, and MCP.
why_it_matters: Mobile UI generation is a live leave-reason; the comparison an operator would run is Genkit's tool surface versus Eve's sandbox and MCP, not the Next.js chat template.
===END===

===POST===
handle: @renanbara
post_url: https://x.com/renanbara/status/2108965042439782827
event_date: 2026-10-10
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: question               # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve, claude-code, pi-coding-agent # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: He asked whether people coding through Eve wrap Claude Code or Pi as a tool via AI SDK HarnessAgent, or whether they use Eve's own harness to write code.
why_it_matters: If serious coding still shells out to another harness, Eve is a channel and workflow host, not the coding runtime, until eve-code is shown to close that gap.
===END===

===POST===
handle: @shardara
post_url: https://x.com/shardara/status/2108967816044958081
event_date: 2026-10-10
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: She said Eve's harness is already good for coding, is meant to be customized, and is what the team uses for Eve's own software factory.
why_it_matters: This is the vendor answer to wrapping Claude Code; it still needs a coded comparison, not a preference.
===END===

===POST===
handle: @ruiconti
post_url: https://x.com/ruiconti/status/2108987515805868411
event_date: 2026-10-10
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: An Eve engineer said the team has been using the eve-code extension internally, that it has been working well, and that more cuts to baseline input tokens are coming, pointing at the public code-extension benchmark page.
why_it_matters: Token cost and the published bench are the receipts to check before replacing a Claude Code or Pi tool wrapper with eve-code.
===END===

===POST===
handle: @ding444
post_url: https://x.com/ding444/status/2109144557099336092
event_date: 2026-10-11
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: praise                 # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: He described a sandboxed customer-service agent farm for an ISP, running offline on Qwen and Gemma, and said building and maintaining that stack on personal bots would be daunting while Eve made it tractable.
why_it_matters: This is the production-vs-personal-bot argument with an actual workflow attached, including policy QA and prompt-injection filtering as operator work Eve does not remove.
===END===

===POST===
handle: @deeponailabs
post_url: https://x.com/deeponailabs/status/2109304783932891419
event_date: 2026-10-11
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: On a four-step Slack coding-agent demo, he said the bot misses the thread unless it is invited to the channel first.
why_it_matters: Channel membership is an authority and context gate; a template that skips it will look broken in any Slack where the bot is app-installed but not in-channel.
===END===

===POST===
handle: @shardara
post_url: https://x.com/shardara/status/2109321803386540241
event_date: 2026-10-11
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: Asked who wins when two people in a Slack thread give opposite orders, she said the default is that only the person being answered can steer, other messages wait, the model later sees the full thread, and operators can switch to queue or write their own steering rules.
why_it_matters: Multiplayer coding agents fail on turnPolicy; this is the public description of the default to test against queue and custom rules.
===END===

===POST===
handle: @andrew_barba
post_url: https://x.com/andrew_barba/status/2110027750685933831
event_date: 2026-10-13
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: comparison             # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: He agreed with putting a coding agent inside each service rather than a god-agent that watches everything, and said Eve is already aimed that way because it embeds in existing Next.js or Vite apps.
why_it_matters: That framing makes Eve a library you drop into a product, not a sidecar fleet, which changes how you bound sandbox, secrets, and who may self-modify the host app.
===END===

===POST===
handle: @eve
post_url: https://x.com/eve/status/2110084758235734178
event_date: 2026-10-13
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: true     # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: The official account announced an Agent Runs trace viewer as full observability for Eve agents.
why_it_matters: Operators who currently stitch Braintrust or similar need to check whether the viewer records approvals, identity, and payload hashes, not only that a run UI shipped.
===END===

===POST===
handle: @Madeactual
post_url: https://x.com/Madeactual/status/2110130052683694117
event_date: 2026-10-13
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: eve                # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Replying to the new trace viewer, he said his team requires the human approval event on the same timeline as the tool calls, with the approver's handle and a payload hash, because otherwise the viewer shows what ran and not who signed off.
why_it_matters: Full-observability language that omits consent identity leaves the approval gate un-auditable, which is the live authority question for Eve this window.
===END===

COVERAGE_NOTE: Identity: kept only vercel/eve (eve.dev, npm eve, @eve bio "The Agent Framework – created and maintained by @vercel"). Official handle is @eve, not the older @evedev_ (zero hits). Dropped Eve Stack (@SammyTourani, a different self-host platform that Shar quoted as a foil), OpenClaw agents merely named Eve, Command EVE / DeepSeek Harness asides, person-name and French-politics @FranoisEVE0sdx, generic harness/Jev/OpenClaw/Codex posts that never named this repo, and Hamel's eval-plugin review. Searched X Latest 2026-09-21..2026-10-14 (until exclusive) with from:eve, from:andrew_barba, from:shardara, from:ruiconti, from:coltonpadden, from:chadhietala, from:hugorcd, from:rauchg, from:cramforce, from:vercel, from:vercel_dev, from:stevekaliski, from:kushbhuwalka, from:donpark; url:github.com/vercel/eve and url:eve.dev; keywords npx eve, eve-code, defaultTools, self-modification, approval, bug, MCP, python, sandbox; semantic sweeps for criticism, self-mod, and harness comparisons; thread-fetched the loop-control, self-mod, docs-slop, eve-code, Slack multiplayer, traces, and Link-HITL conversations. Could not reach GitHub Discussions (the README says that is the community), Discord, YouTube comments on the Bytegrad demo, full reply graphs on the iMessage/OpenInstinct and Rillet threads, or non-English operator forums. Pagination caps at 10 hits, so from:eve looks quiet 2026-09-23..09-28 and 2026-10-08/10-12; that may be real silence or missed replies. Thin or absent on X: the 0.78.0 approver-identity/privilege-escalation repair, queued pre-prompt consent, MCP tools:true publication, Python/self-host/Docker beyond one SDK ask and one Cloudflare complaint, and @chadhietala (credited for traces, no in-window Eve post). Template and wallet marketing was mostly dropped unless it carried an authority or hosting argument.
