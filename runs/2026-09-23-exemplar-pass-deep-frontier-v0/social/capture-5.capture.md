I'll fetch each of those X posts and return the published text exactly as it appears.===CAPTURE===
url: https://x.com/DarshanSays/status/2064616354481942780
handle: @DarshanSays
display_name: Darshan Yadav
posted_at: 2026-06-10
VERBATIM_BEGIN
Depth-5 nested agents is powerful, but the authorization question matters: does each child agent inherit parent permissions, or does scope narrow as you go deeper? The second option is far safer. Privilege reduction at each spawn level should be the default, not an option. Excited to see where this goes.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/EdwinRubioIam/status/2064482874984697882
handle: @EdwinRubioIam
display_name: Edwin Rubio
posted_at: 2026-06-09
VERBATIM_BEGIN
Depth=5 is generous. The real ceiling isn't recursion, it's signal loss. Every agent spawning another is a game of telephone — by layer 3 the sub-agent is solving a problem the parent already forgot. Nesting doesn't manage context. It launders it.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/dotta/status/2064465643575955474
handle: @dotta
display_name: dotta 📎
posted_at: 2026-06-09
VERBATIM_BEGIN
Low-trust agents means you can have an agent review untrusted inputs and if he’s prompt-injected it won’t pwn the rest of your Paperclip org 

(requires sandboxed instances)
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/openclaw/status/2064444553634144665
handle: @openclaw
display_name: OpenClaw🦞
posted_at: 2026-06-09
VERBATIM_BEGIN
security.installPolicy lets operators approve or block skill/plugin installs with a trusted local command. It runs after staging and fails closed when enabled but unavailable.
https://docs.openclaw.ai/tools/skills-config#operator-install-policy-securityinstallpolicy
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/wunderwuzzi23/status/2064612335629771149
handle: @wunderwuzzi23
display_name: Johann Rehberger
posted_at: 2026-06-10
VERBATIM_BEGIN
That's cool. Can you run /model? 

I nearly missed the downgrade when using CLI until I turned it off via /config, so it does a hard stop.

Claude still claimed it's using fable in my case, but it actually got downgraded to Opus
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/Teknium/status/2066872271877407212
handle: @Teknium
display_name: Teknium 🪽
posted_at: 2026-06-16
VERBATIM_BEGIN
They can actually. You can configure width (how many subagents an agent can spawn) and depth (how many layers of subagents spawning subagents) you want :)

It's configurable in the config.yaml or dashboard
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/bcherny/status/2064475977208721485
handle: @bcherny
display_name: Boris Cherny
posted_at: 2026-06-09
VERBATIM_BEGIN
Following up from DMs, the issue was a cyber classifier false positive. The classifier has a lot of false positives, and we are actively working to improve it. More details here: https://www.anthropic.com/news/claude-fable-5-mythos-5

Aside -- for security review, we recommend the built-in /security-review skill or Claude Security (we use both).
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/geeky_nasir/status/2067031722534060404
handle: @geeky_nasir
display_name: Nasir Iqbal
posted_at: 2026-06-16
VERBATIM_BEGIN
pro tip that will save you hours and tokens:

your Hermes agent should never work on itself

need to improve a feature? use another agent.
need to change config? use another agent.
need to fix something in Hermes? use another agent.

the Hermes agent will confidently attempt to modify itself, burn through your entire token budget, and accomplish absolutely nothing.

it's great at everything except self-improvement. relatable honestly 💀
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/usr_bin_roygbiv/status/2063420146174119991
handle: @usr_bin_roygbiv
display_name: Roy
posted_at: 2026-06-07
VERBATIM_BEGIN
Longpost about the biggest misconception I see people having by FAR on LLMs right now.

Know the difference between the harness, the model, and serving inference.

Vast majority of problems I see people having right now are due to the harness. Each provider has it's own unique thing that's wrong with it. Claude is unique like the state of California in that it taxes/is bad at everything.

Harness: This is the traditional software that calls the model api from the provider. This is what you install on your computer or the website you visit to access the LLM. 
Common harnesses:
- Claude Code
- Codex
- Droid
- Pi
- OpenCode
- OMP ❤️
- Antigravity
- Copilot
- https://t.co/CfYrRYJlyx, https://t.co/P87Pigjt4m, or https://t.co/opgE1H0qlh in a web browser could technically be considered a harness
Harnesses are most people's bottleneck because things like tool calls, system prompts, mcp servers, skills, subagents, change the way the api is called and its actually used for gathering information and your day to day work dramatically. Claude code or codex can use 8x the tokens in certain contexts when programming compared to pi or omp purely due to hashline editing and tool calls in the system prompt. Planning and subagent management also makes work significantly faster for larger tasks. Compaction in codex is so good the model needs 1/4 the context that claude or gemini does to achieve better results which allows them to serve more users simultaneously with available vram.

Model: This is the actual LLM. The weight values which were trained and deployed somewhere which you access from the harness on your machine via an api. This is what people are benchmarking and typically talking about when they post evals.  
Common Models:
- Claude Opus 4.8
- GPT 5.5
- Gemini 3.5 Flash
- Deepseek V4 Pro
- Qwen 3.7 Max
- Kimi K2.6
- Composer 2.5
People run evals to determine model quality for different tasks. Most engineers are using them for agentic coding, where terminalbench is king, and swebench to a lesser extent currently. For academic research and "white collar work" (i've written about this gimmick previously) there are other evals people target.

Serving and Inference: This is the actual computer and infrastructure network the model is running and being served on remotely. This can vary wildly depending on the provider.
- Google and XAI are the only ones that own their full stack vertically right now. Google has vertically integrated all of their models to use in house TPUs rather than GPUs to run on their cloud network (GCP, which they also own) extremely reliably and quickly.
- OpenAI has secured deals with Microsoft and now AWS and others to have guaranteed compute capacity until 2030 or so and preplanned most of their capacity already. They have deals with nvidia and cerebras directly now for datacenter buildouts.
- Anthropic didn't buy nearly enough compute the last few years. Now they are desperately selling off equity and turning into corporate frankenstein to meet demand. They are currently splitting the inference they give you between: GPUs, TPUs, AWS, GCP, SpaceX, bunch of other random crap. This is completely unmanageable in any reasonable period of time given the current growth of the space.

Chinese models are open source. Most of the chinese infrastructure is completely jank and slow, but great news! There's places hosting it for you like firworks, GMI, and others on the latest blackwell gpus to run it at 5x the speed you get through the official chinese apis. Or you can host them yourself! The chinese models are also a fraction of the price because power and the older hardware they have is so cheap. DSV4 flash performs the same as sonnet for actual pennies, or you can pay the same prices as the western providers on fireworks or gmi to get something that absolutely flies like gemini does. Kimi charges PER TURN rather than per token so you get 14x the tokens weekly on their chinese sub that you would get on gpt pro for something at gpt 5.4 xhigh's intelligence level.

There are different techniques people use to serve the models more effectively as well to more customers:
- Quantization truncates the weight values in memory to use less vram at the expense of the model getting "dumber" which claude does during peak hours in some locations and local hosters often use to take advantage of weaker gpus for personal use
- Smaller models can perform better than larger ones on actual task evals in some cases or be trained or fine tuned to be more token efficient to use less compute while performing similarly from a user's perspective
- Things like MOE allow models like deepseek or qwen to get split across lots of smaller/cheaper gpus at once and split off smaller more specialized models for research and specialized use cases
- Specialized silicon like Google's TPUs, Trainium, Cerebras, Groq, allow the models to be hosted at much much higher speeds at higher cost due to the specialized silicon and software stack
- Newer generation gpus or gpus with higher memory bandwidth or blackwell hardware are the single largest determinant in how fast a model will run that you are hosting followed by custom kernels, serving configuration, parallelism etc. However everything revolves around the silicon. Nvidia is still king because of Cuda and blackwell gpus have minimum 2x the memory bandwidth of any other gpus on the market. TPUS are faster still but far more specialized and difficult to get/set up. AMD/Apple chips are significantly slower albeit cheaper in some cases.

Why all of this is important:
Many of the issues people experience with claude for example, or reasons you see wildly different experiences from two people using the same model are ACTUALLY because of issues with the harness or serving. Some examples
- Opus 4.8 works okay on bedrock in opencode at 2am BUT Opus 4.8 on a $20/mo sub during peak business hours served at fp8 quant god knows where on medium thinking in claude code Is completely useless.
- Gemini 3.5 Flash or 3.1 Pro feels completely useless in gemini cli and gets stuck in loops constantly BUT in OMP it's as good as 5.5 is at 10 times the speed
- Qwen 3.6 27b locally feels awful in opencode on a macbook or dgx but absolutely flies at 10x the speed with no tool calls or thinking in pi with nvfp4 and MTP on a 5090 using raw bash and web search.

Why gpt is so uniquely good at the above:
Even if it's slow during the day from the massive userbase, it's the only one that just fucking works 24/7. It's not the fastest or the prettiest, but it's the most reliable and consistent out of the box with the least setup by far.
Why claude is so uniquely bad at the above:
The default harness is bad, the user experience is flashy, but it's the most expensive by far, you get wildly different quantizations, speeds, and answer quality depending where it's being hosted, and they have one nine of uptime https://t.co/WaiXeAQreA. This is largely due to organizational issues at the company which will *never* be resolved due to the cap table being so split now and internal politics.

Be extremely wary when someone says "I'm using claude" "I'm using deepseek" "I'm using gemini" two different people could be having wildly different results depending on what harness they're using, what model, thinking, and where it's being served at what time of day.

To summarize:
GPT -  Slow Harness - Great model - Great Infra
Google - Shit Harness - Great model - UNMATCHED infra
Anthropic - Shit Harness - Okay model - Shit Infra - Great marketing and sales team
(hence California Income/Property/Sales tax analogy)
Chinese models - It's like linux, here's the parts, build it yourself! or use the hosts in china for dirt cheap or expensive western hosts for extremely fast infra

You can use ANY harness you want with ANY provider if you're willing to set it up
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/FredKSchott/status/2066991945113854241
handle: @FredKSchott
display_name: fks
posted_at: 2026-06-16
VERBATIM_BEGIN
I would love to hear how you built resumable workflows! Since the code drives the workflow I found it hard to make resumable the same way you can with agents, which just recover and resume from the log.

We might ship temporal API at some point but idk
VERBATIM_END
===END===
