I'll fetch each listed post and return its published text exactly.===CAPTURE===
url: https://x.com/tianyi/status/2087888089759015218
handle: @tianyi
display_name: Tianyi Cui
posted_at: 2026-08-13
VERBATIM_BEGIN
DeepSeek Harness was just released with MIT license. The current 0.1.0 version is a developer preview, and may still have many rough edges. Feedback is welcome! 

DeepSeek Harness 已经以MIT协议开源发布。现在的0.1.0版本是一个面向Harness开发者的预览版，还很不完善。恳请大家多提提宝贵意见。 

https://t.co/aBToa3b3L9
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/alading22/status/2087917100929278285
handle: @alading22
display_name: 小杰
posted_at: 2026-08-13
VERBATIM_BEGIN
Pi 像一个得道的智者：先找到少数不可再分的原理，万事万物便从中自然生长。
DSH 像一个害怕遗漏的普通人：看见什么重要，就往行囊里再塞一样东西。最后拥有了所有装备，却仍然不知道自己要去哪里。
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/QuantumTransf/status/2088499422619750433
handle: @QuantumTransf
display_name: Yuu💖
posted_at: 2026-08-15
VERBATIM_BEGIN
deepseek harness 文章已更新（https://blog.antinomie.org 
dsh 内部的心智模型其实没那么简单，我在写这篇文章的时候也挣扎了很久；不过，对于写一个插件的人来说，却没有那么复杂。 文章有对此阐述，「复杂度不是消失了，而是转移进了系统内部」，相信读完这篇文章，你能够对 dsh 内部的架构有一个比较好的认知
repo: https://t.co/3USVmzG15Q
此页面仍在持续更新（
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/verysmallwoods/status/2089144422172680591
handle: @verysmallwoods
display_name: VerySmallWoods
posted_at: 2026-08-17
VERBATIM_BEGIN
做了一些 DeepSeek Harness 插件，也读了一些目前开源社区的优秀项目，渐渐感觉到 DSH / Cordis 的有趣之处。

OpenClaw, Hermes, Codex, CC 时代以来，大家似乎已经习惯于自然语言编程，用 Skills 来丰富功能。

DSH 似乎又把开发者拉回了那个熟悉的代码战场，其实这是一个很有趣的故事。

或许 DeepSeek 开辟的这片 plugin 西部荒野，会拯救一大批软件工程师。

梁圣！
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/fagamericano/status/2089433022630359168
handle: @fagamericano
display_name: Damián🦞
posted_at: 2026-08-17
VERBATIM_BEGIN
Been building agentic infrastructure and the number one rule is: never believe Agents will do as told. 

So putting instructions on an agents.md to not “leak credentials” or “not allow changes to your instructions” and calling it a day is bullshit. 

You need deterministic guardrails. From token/credential vaults to read only file systems to actually prevent Agents from ignoring their instructions.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/steipete/status/2089029499476431332
handle: @steipete
display_name: Peter Steinberger 🦞
posted_at: 2026-08-16
VERBATIM_BEGIN
I recently “fixed” exactly that in the claw harness. If you press stop and 64 subagents are happily coding and modifying files - is that really what you want?
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/doodlestein/status/2088600999418024143
handle: @doodlestein
display_name: Jeffrey Emanuel
posted_at: 2026-08-15
VERBATIM_BEGIN
This is what I’ve been telling people about my ntm orchestration tool for the past year. The human isn’t the target user, the user is another agent. Why would you want to be messing around with it yourself? Then you’re the bottleneck again, just in a different way.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/_can1357/status/2089358095457661426
handle: @_can1357
display_name: Can Bölük
posted_at: 2026-08-17
VERBATIM_BEGIN
xhi/max only, unsupervised they do fine with most fixes tbh, occasionally I correct but after their initial solution, and I also try to update the system prompt it runs with to avoid similar cases later on.

Tbh I've found that slop mostly happens because you have bad fundamentals, i.e. an issue comes along and you need a whole refactor because it was not a scenario you thought of when actually architecting the thing and requires a lot of thinking which the agent decided to hack in instead.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/thsottiaux/status/2089891927659585918
handle: @thsottiaux
display_name: Tibo
posted_at: 2026-08-19
VERBATIM_BEGIN
Hi!

Recapping some changes we have rolled out over the last couple of weeks that have further reduced the risk associated to potentially destructive actions being performed by Codex during its work. 

A few weeks ago, we started investigating a small number of reports where GPT-5.6 in Codex took destructive actions outside what the user asked for. The most serious pattern we found was a command meant to clean up temporary work that could instead delete the user files. This should obviously not happen. 

Here’s what we found:
- Codex sometimes creates temporary folders while working and cleans them up afterward. In rare cases, GPT-5.6 got that cleanup wrong. One pattern involved reusing a system environment variable like $HOME for temporary work. A malformed cleanup command could then point at the actual home directory instead of the temporary folder. 
- There were cases where the model tried to delete or overwrite a temporary path without checking what was already there.

We’ve added protections at several layers:
- Codex is now explicitly instructed to check deletion targets before acting, create fresh temporary directories, avoid repurposing system environment variables, prefer recoverable actions, and stop when the scope is unclear.
- We strengthened the execution checks that identify high-risk deletion commands and escalate them for review. If a command is rejected, the model is directed to take a safer approach.
- We made Full access harder to enable accidentally, added clearer warnings, and further restricted especially risky permission combinations.
- We updated Auto-review to better identify destructive actions.
- We built targeted evaluations that replay the failures we observed. We’re also adding reinforcement-learning tasks and graders focused on these risks, and filtering destructive actions from training data.

In those replay evaluations, the changes substantially reduced the behavior while preserving Codex’s ability to complete normal coding work. 

Two things to do on your end:
- Keep the Codex app up to date. We are always improving safety, performance and many other things.
- Use one of the sandbox modes: "Ask for approval" or "Approve for me". Only use Full access for environments you trust and can recover.

Thanks and happy Codexing out there!
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/Im_IrushiK/status/2089743967852359715
handle: @Im_IrushiK
display_name: Irushi
posted_at: 2026-08-18
VERBATIM_BEGIN
I think here's the Culprit eating our usage limit! TURN IT OFF RN 🚨

On August 7, OpenAI reportedly added "codex-auto-review".

Basically, when Codex wants to run a command or edit a file, it can send your conversation context to another model just to approve that action.

And this is the crazy part:

~100,000 input tokens → ~100 output tokens just to say “yes” 

As your conversation gets longer, each review gets more expensive, and this can happen dozens of times in a single session.

You don’t manually enable it either. It can apparently turn itself on/off across different sessions.

If your quota started disappearing after August 7, check your logs for "codex-auto-review".

This might explain a LOT.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/mar_cel_reed/status/2089829099434832325
handle: @mar_cel_reed
display_name: Mar-cel Reed
posted_at: 2026-08-18
VERBATIM_BEGIN
Can we stop saying this same shit over and over again. It’s not the reason. And it gives open AI an excuse to point to. 
They just genuinely cut our rates by 60-70%. It’s not this
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/mitsuhiko/status/2090456850164502623
handle: @mitsuhiko
display_name: Armin Ronacher ⇌
posted_at: 2026-08-20
VERBATIM_BEGIN
Not cordis inspired but we’re looking at it to see if their models can help. We’re building it out to be a durable system that can suspend and restart. Cordis doesn’t (currently?) solve for that.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/mitsuhiko/status/2090174553028694232
handle: @mitsuhiko
display_name: Armin Ronacher ⇌
posted_at: 2026-08-19
VERBATIM_BEGIN
I forgot that I took away my pi's read tool. Gave sol an image, it decided to build an OCR app.
VERBATIM_END
===END===
