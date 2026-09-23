I'll fetch each listed X post and return the published text exactly as it appears.I have the posts. I'll pull the original text from each so punctuation, links, and line breaks match the published versions.OEmbed truncated several long posts. I'll pull the full original text so nothing is cut off.I'll inspect a few posts at the character level so punctuation, spaces, and t.co links match the published text.===CAPTURE===
url: https://x.com/bcherny/status/2069474685948186797
handle: @bcherny
display_name: Boris Cherny
posted_at: 2026-06-23
VERBATIM_BEGIN
We’ve worked hard to make it secure at every level. 1/ At the model training stage, 2/ the classifiers on top of our models and things like auto mode, 3/ we protect what Claude has access to (websites it can access and it can’t see the credential secrets it uses), and 4/ respecting channel/workspace boundaries
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/xingyaow_/status/2069448427923021989
handle: @xingyaow_
display_name: Xingyao Wang
posted_at: 2026-06-23
VERBATIM_BEGIN
Coding agents open PRs in minutes. But on consequential codebases, those PRs still wait days for human review. So we built a verification stack, and on our own repo, it cut time-to-merge by 58% without lowering code quality. Here’s how. 🧵
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/gneubig/status/2067651018217648595
handle: @gneubig
display_name: Graham Neubig
posted_at: 2026-06-18
VERBATIM_BEGIN
Many coding agent benchmarks evaluate LLM performance (with the same harness) or harness performance (with the same LLM).

But in reality, it is the harness + the LLM that determins the overall performance.

We introduced new, holistic results that measure both.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/FredKSchott/status/2067302366718947778
handle: @FredKSchott
display_name: fks
posted_at: 2026-06-17
VERBATIM_BEGIN
some thoughts on eve, especially re: @flueai and the larger agent builder space.

The biggest surprise: eve is vercel-only. You can't deploy it outside of vercel and it requires a full bet on their stack -- vercel runtime, vercel sandbox, vercel workflows, vercel cron jobs, etc. etc. 

short-term limitation, or the start of a larger "managed agents" play by vercel?

eve is filesystemmaxxing. this feels specifically optimized for agents, who love the codebase consistency and have no trouble keeping track of 10+ magic file and folder conventions as the project scales to 100s of files. 

(^^ this is probably the most interesting design decision here. I have a ton of respect for anyone taking a big swing like this if this is intentionally optimized for agents. makes total sense.)

eve has a custom-built harness. probably not interesting to most people. I'm curious if they will leverage the new ai sdk HarnessAgent concept to swap different harnesses.

otherwise there's a lot of great stuff here. lots of good features. The dev-server-as-TUI is great. you can tell how much attention and care went into this. 

excited to see our two projects continue to explore the same space from different directions!
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/jacobmparis/status/2067304736584290662
handle: @jacobmparis
display_name: jacob paris ▲
posted_at: 2026-06-17
VERBATIM_BEGIN
eve is NOT vercel only by design, it uses the same "worlds" adapter approach as Workflow SDK under the hood

we haven't exposed that yet until we have a non-vercel adapter to publish though, while we iron out the final api surface
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/dotta/status/2068019146323791977
handle: @dotta
display_name: dotta 📎
posted_at: 2026-06-19
VERBATIM_BEGIN
It's only a Loop if you're learning from your evals 
otherwise it's just a sparkling workflow
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/8bit64k_X/status/2069786178346229948
handle: @8bit64k_X
display_name: 8bit64k
posted_at: 2026-06-24
VERBATIM_BEGIN
Latest commits on Hermes break existing plugin contracts. 
I'm looking into solutions on how to deal with this for Cronalytics and Omatchy but at this time don't have a solid direction, sorry. This is disappointing. @Teknium 

The extending-the-dashboard.md page was updated in the same commit (8845f3316, Jun 22) to bake in the new contract. Three spots now say the same thing:

- Directory layout (line 434): plugin_api.py # bundled plugins only — backend API routes (FastAPI)
- Layer summary (line 441): dashboard/plugin_api.py — bundled plugins only; backend API routes.
- Security notes under "Backend API routes" (line 749): "User-installed and project dashboard plugins may still extend the UI with static JS/CSS, but their Python api files are not auto-imported by the dashboard server. Backend routes are reserved for bundled plugins."
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/Teknium/status/2069793198734766345
handle: @Teknium
display_name: Teknium 🪽
posted_at: 2026-06-24
VERBATIM_BEGIN
This was a mistaken change we are reverting. The security boundary is not saved by this its saved by people not being stupid and exposing their dashboard insecurely to the internet.

Being reverted now
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/hunvreus/status/2069831902593433985
handle: @hunvreus
display_name: Ronan Berder (SF + SG)
posted_at: 2026-06-24
VERBATIM_BEGIN
Folks mentioning OpenClaw/Hermes are missing the point: Slack is multiplayer. Lots of new concerns once your whole team talks to the agent; how do you scope memory and tools, how do you handle permissions and approvals, etc. Kinda why I built https://t.co/AbivfJXJDt.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/IanMitchel1/status/2069458961896796601
handle: @IanMitchel1
display_name: Ian
posted_at: 2026-06-23
VERBATIM_BEGIN
I think the biggest gap between Eve and Flue is that by using the file system Eve makes it significantly harder to share skills and subagents between different agent directories. Flue is dead simple to setup that way
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/ashwingop/status/2069814177624121469
handle: @ashwingop
display_name: Ashwin Gopinath
posted_at: 2026-06-24
VERBATIM_BEGIN
Claude Tag is a Trojan horse.  Not because Anthropic is doing anything evil. Because the incentives are obvious.

Day one, this looks like a great feature: tag Claude in Slack, let it follow the thread, remember context, connect to tools, break down tasks, chase work, and act like a teammate.

But that is exactly the problem. The moment your AI vendor becomes a shared coworker, it stops being just a model provider. It starts becoming the place where work is interpreted, remembered, routed, and eventually executed.

That is not model lock-in. That is context lock-in. You are now renting your company back from them.

Models can be swapped. Agents can be copied. But the memory of how your company actually works is much harder, maybe impossible, to move: the Slack scar tissue, the exception paths, the customer promises, the unfinished threads, the weird workflows, the implicit owners, the “we tried that in Q2 and it failed” knowledge.

Once that lives inside one vendor’s agent layer, you are not renting intelligence anymore. You are renting your company’s operating memory.

And the pricing model makes it even more dangerous. A human coworker has a salary. Claude has unbounded tokenized activity. The more work moves through it, the more the vendor captures not just IT spend, but labor spend.

This is the enterprise bargain people will regret: Convenience now, and rapid decent into dependency.

The right architecture is simple: rent the best intelligence from whoever is best this month. OpenAI, Anthropic, Gemini, open source, whatever. But own the context layer.

Your company memory should be inspectable, permissioned, portable, and model-neutral. It should not be buried inside the same vendor that sells you the intelligence and the workflow surface.

Claude Tag is useful. That is why it is dangerous. Rent the intelligence, but own the context. Or, regret later.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/simonw/status/2069856334305230902
handle: @simonw
display_name: Simon Willison
posted_at: 2026-06-24
VERBATIM_BEGIN
Claude Code for web just started saying  "GitHub is blocked by egress policy", which is a big problem for me because most of my prompts there start with things like "clone simonw/sqlite-utils to /tmp to see the docs in /tmp/sqlite-utils/docs"

@ClaudeDevs @claudeai known issue?
VERBATIM_END
===END===
