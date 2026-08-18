I'll fetch each listed post and return only the requested capture blocks.===CAPTURE===
url: https://x.com/lydiahallie/status/2085799128857272783
handle: @lydiahallie
display_name: Lydia Hallie ✨
posted_at: 2026-08-07
VERBATIM_BEGIN
👀 auto mode is safer than --dangerously-skip-permissions *and* manually approving everything
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/lydiahallie/status/2086117097923625332
handle: @lydiahallie
display_name: Lydia Hallie ✨
posted_at: 2026-08-08
VERBATIM_BEGIN
dsp just doesn't check at all. auto mode blocks destructive actions you didn't ask Claude to take (eg rm -rf can be fine but depends on your task) and screens tool results for prompt injection. but for most tasks you still won't see permission prompts, same as dsp!
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/EliaAlberti/status/2086128186929066255
handle: @EliaAlberti
display_name: EliaAlberti
posted_at: 2026-08-08
VERBATIM_BEGIN
what that leaves out though is that the boundaries you state in chat aren’t stored as rules. the classifier re-reads them from the transcript on every check, so if compaction drops the message where you said “don’t push”, the boundary goes with it. silently.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/EliaAlberti/status/2086128269506510859
handle: @EliaAlberti
display_name: EliaAlberti
posted_at: 2026-08-08
VERBATIM_BEGIN
docs recommend a deny rule for a hard guarantee, which means the conversational layer is the soft one. most people will assume the opposite.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/lydiahallie/status/2084315112840810897
handle: @lydiahallie
display_name: Lydia Hallie ✨
posted_at: 2026-08-03
VERBATIM_BEGIN
icymi we recently changed how /fork works in Claude Code, it now copies your session into a new background session while you keep working in the current one

the old behavior (an in-session subagent that reports back) is now available as /subtask!
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/simonw/status/2086931955539742985
handle: @simonw
display_name: Simon Willison
posted_at: 2026-08-10
VERBATIM_BEGIN
Claude Haiku is my current least favorite model - it hallucinates wildly, and is out-performed now by other similarly priced models like GPT-5.6-Luna

Even worse: it seems to still be used by the Claude Code WebFetch tool, which means hallucination risk any time you fetch a URL!
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/trq212/status/2086944777363448210
handle: @trq212
display_name: Thariq
posted_at: 2026-08-10
VERBATIM_BEGIN
we're working on removing Haiku from WebFetch now that automode is default
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/mitsuhiko/status/2088189145952731317
handle: @mitsuhiko
display_name: Armin Ronacher ⇌
posted_at: 2026-08-14
VERBATIM_BEGIN
I don't think the DeepSeek Harness is perfect but this is for sure the first time I have been looking at something new in the space and felt quite inspired to revisit some of our choices. I love that part about Open Source a lot!
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/limbopeng/status/2087932451243041142
handle: @limbopeng
display_name: LimboAI
posted_at: 2026-08-13
VERBATIM_BEGIN
DSH（DeepSeek Harness）和 Pi Agent，架构哲学其实是两条相反的路，越看越觉得值得拆开聊聊。

Pi 的哲学是做减法。Mario Zechner 做 Pi 就是烦透了 Claude Code 这类工具越堆越重，于是把核心砍到只剩 read/write/edit/bash 四个工具，系统提示词不到一千 token，没有 plan mode、没有 subagent、没有 MCP，甚至默认不做权限校验。这是一种克制的极简主义——核心足够薄，剩下的全交给外部扩展去做，让你自己决定要不要加回这些复杂度。

DSH 的哲学是做加法后再拆碎。它不是精简出一个薄核心，而是把整个 agent 系统的每一层——模型、工具、文件系统、Shell、沙箱、会话存储、Subagent，甚至 Agent Loop 本身——全部做成可替换的插件。官方那套 Coding Agent 只是 “用这些插件拼出来的一个默认答案”，不是唯一答案。这个模块化的颗粒度比 Pi 深了一层：Pi 是核心不变、外围可插拔，DSH 是没有不可替换的核心。

再往底层看，两者对 “谁该拥有系统控制权” 的答案也完全不同。Pi 的答案是开发者：极简是为了让你把每一步都看得清楚、改得动，它信任的是写代码的人，而不是运行时的 agent 本身——所以宁可不做的事就不做，也不让核心替你做决定。
DSH 的答案更像是把控制权逐步下放给运行时本身：连 Agent Loop 这种最核心的调度逻辑都能被换掉，意味着系统本身没有预设 “应该怎么跑” 的立场，一切规则都可以在运行时被重新定义。这其实是两种对复杂度截然不同的态度：Pi 认为复杂度是负担，要主动砍掉；DSH 认为复杂度应该被结构化、装进插件里，而不是消灭，因为消灭了就没法长出新东西。

真正拉开差距的是自进化这件事。DSH 已经能让 agent 在运行时检查自己的能力边界，现场写一个插件挂载上去，然后在后续任务里直接调用这个刚获得的能力——虽然现在还很实验性，动态插件只存在内存里，重启就没了，也不能自动沉淀成永久插件，但这个方向已经打开了。Pi 的扩展机制目前还是人写 TypeScript 扩展、显式安装，是静态的，agent 自己不会在任务执行中主动发现能力缺口然后现场造工具再用上。这也呼应了架构哲学上的分野：Pi 把 “谁来扩展系统” 这件事留给人，DSH 在尝试把这件事也交还给 agent 自己。

前景上我会更看多 DSH 一些。Pi 已经证明了极简可扩展这条路能跑通，也确实催出了 OpenClaw 这种一周冲到十几万 star 的衍生项目，说明这套思路有市场。但它的天花板相对清晰——核心哲学就是少管事，扩展权彻底交给社区和用户，DeepSeek 官方不会去碰那层。DSH 现在虽然早期、接口还在剧烈变化，插件生态刚起步，函数式编程风格也确实有上手门槛，但它把"agent 能自己长出新能力"这件事做成了架构里的一等公民，而不是靠外部工具拼出来的效果。如果这条线真的跑通，DSH 想象空间会比精简的可扩展 harness 大一个数量级——它赌的不是 “给你更好的积木” ，而是 “积木自己进化！”
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/badlogicgames/status/2088219926494421230
handle: @badlogicgames
display_name: Mario Zechner
posted_at: 2026-08-14
VERBATIM_BEGIN
pi can extend itself.just fine when it finds a gap. i know of no single extension that was written by a human.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/badlogicgames/status/2088234017808089556
handle: @badlogicgames
display_name: Mario Zechner
posted_at: 2026-08-14
VERBATIM_BEGIN
people (or rather their pi agents) have done all this with pi today.

dsh's architecture is neat, no question. but both solve the same problem, just differently, with different trade-offs: self-modifying agents.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/tianyi/status/2088306143772946499
handle: @tianyi
display_name: Tianyi Cui
posted_at: 2026-08-14
VERBATIM_BEGIN
Thank you! Pi is many DeepSeek researchers and developers favorite daily drive.

DSH reused Pi's LLM adaptor package for connecting to non-DeepSeek models and it was a great experience that just work.

Excited to join the global Open Source agent harness community!
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/Teknium/status/2089451688365302185
handle: @Teknium
display_name: Teknium 🪽
posted_at: 2026-08-17
VERBATIM_BEGIN
Be sure to run update through the gui app.. 

That's showing your hermes is v0.20.3 (today's release) but your gui is still on v0.17.0 version
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/pidotdev/status/2089313792014381321
handle: @pidotdev
display_name: Pi
posted_at: 2026-08-17
VERBATIM_BEGIN
One way you can you extend Pi is by building extensions for event interception. 

An example of this is adding guardrail permission gates that block or modify dangerous tool calls. 

Here’s the code you can use to ensure your agent confirms with you before running ‘rm -rf’
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/mitsuhiko/status/2088900774466105797
handle: @mitsuhiko
display_name: Armin Ronacher ⇌
posted_at: 2026-08-16
VERBATIM_BEGIN
I don't use Claude Code much any more and as such I basically killed all CLAUDE.md files in my repos. Had to debug something with Claude Code now to see if it's a pi regression and I noticed that telling it to read AGENTS.md files is works good enough.
VERBATIM_END
===END===
