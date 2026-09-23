I'll fetch each listed X post by ID and return the published text exactly as requested.===CAPTURE===
url: https://x.com/mattpocockuk/status/2061120343922614519
handle: @mattpocockuk
display_name: Matt Pocock
posted_at: 2026-05-31
VERBATIM_BEGIN
So every time I say the word 'workflow' in Claude Code...

(let's say, when I'm creating a new GitHub workflow)

...it tries to enter 'workflow' mode, spinning up dozens of subagents to complete my task.

Stupid fucking thing
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/mattpocockuk/status/2061122263194239429
handle: @mattpocockuk
display_name: Matt Pocock
posted_at: 2026-05-31
VERBATIM_BEGIN
It's just the most bizarre design choice, who thought this was a good idea
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/ClaudeDevs/status/2062257177788858398
handle: @ClaudeDevs
display_name: ClaudeDevs
posted_at: 2026-06-03
VERBATIM_BEGIN
We've changed the trigger word from "workflow" to "ultracode".

You can still say "use a workflow for this", but when you're clearly referring to something else, Claude won't kick off a dynamic workflow. For an explicit trigger, use "ultracode". We appreciate the feedback!
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/dexhorthy/status/2060144982372340155
handle: @dexhorthy
display_name: dex
posted_at: 2026-05-28
VERBATIM_BEGIN
someone hit me up about the new "claude dynamic workflows" feature, claiming "see, multi-agent works"

But really, the launch of this feature proves the exact point that I made back in June of 2025, along with @walden_yan, @tobi, @karpathy, and many others:

Deterministic workflows orchestrating small agent loops beats non-deterministic multi-agent or "agent soup" systems every dang time

everything is context engineering
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/cursor_ai/status/2060406014478831842
handle: @cursor_ai
display_name: Cursor
posted_at: 2026-05-29
VERBATIM_BEGIN
Agent actions that aren't on your allowlist or can't be sandboxed go to a classifier subagent.

This separate agent decides whether to allow the tool call, try a different approach, or ask you for approval.

Learn more: https://cursor.com/changelog/auto-review
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/BrenBuilds/status/2061891928996610085
handle: @BrenBuilds
display_name: Bren
posted_at: 2026-06-02
VERBATIM_BEGIN
cursor 3.6 auto-review mode keeps going without approval interrupts

kick it on a branch, let it run, read the diff when its done

i use it for sweeping changes like renaming a core export across tests and source. one coherent pass instead of a dozen approval stops

tradeoff: you get the whole flow, you lose steering mid-run. bigger diff to read if it wanders

but with a tight scope it usually tracks straight
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/Teknium/status/2060936405732438428
handle: @Teknium
display_name: Teknium 🪽
posted_at: 2026-05-31
VERBATIM_BEGIN
They're nonsense for you maybe. We didn't make hermes just for you. If you want an empty soulless experience, not ready ootb for anyone, try openclaw
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/badlogicgames/status/2061102941298135309
handle: @badlogicgames
display_name: Mario Zechner
posted_at: 2026-05-31
VERBATIM_BEGIN
why is pi in this tweet? pi is not a claw.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/trq212/status/2061933039643685316
handle: @trq212
display_name: Thariq
posted_at: 2026-06-02
VERBATIM_BEGIN
yeah it's definitely not like we shipped temporal inside of your terminal, but we do things in the JS environment to make it more deterministic

I would model it as roughly as durable as "/resume"ing every subagent
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/openclaw/status/2062291555734696268
handle: @openclaw
display_name: OpenClaw🦞
posted_at: 2026-06-03
VERBATIM_BEGIN
Agents should learn repeated work, but not by silently rewriting future runs.

Skill Workshop turns reusable agent lessons into reviewable proposals you can tweak, apply, or reject before they become live skills. https://openclaw.ai/blog/openclaw-agent-skill-workshop
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/LufzzLiz/status/2062323273233555932
handle: @LufzzLiz
display_name: 岚叔
posted_at: 2026-06-03
VERBATIM_BEGIN
openclaw也有重复工作转skill的能力了，不过看起来有点繁琐，我更希望自动化一些，不要让我审查提案，而是直接让我看结果👀
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/ClaudeDevs/status/2061501790131265803
handle: @ClaudeDevs
display_name: ClaudeDevs
posted_at: 2026-06-01
VERBATIM_BEGIN
The issue affected how Opus 4.8 requests were handled, causing the model to trigger more parallel tool calls than intended. It was unrelated to dynamic workflows.
VERBATIM_END
===END===
