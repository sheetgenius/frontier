I'll fetch each listed X post and return its published text exactly, with no edits.===CAPTURE===
url: https://x.com/v_metnew/status/2070369295704482296
handle: @v_metnew
display_name: vladimir metnew
posted_at: 2026-06-26
VERBATIM_BEGIN
Claude Code Full Sandbox Escape (CVE-2026-55607)

writeup: https://github.com/Metnew/write-ups/tree/main/claude-code-worktree-sandbox-escape#human-written-super-tldr-summary-of-the-bug

prompt injection -> code execution on the host.
works even in read-only permissions mode + full sandbox
(it could be my Pwn2Own bug, but p2o was weird this year lol)
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/FredKSchott/status/2069963922514530337
handle: @FredKSchott
display_name: fks
posted_at: 2026-06-25
VERBATIM_BEGIN
Quality control arguable worse these days, people moving faster and not reading their own code. 

Caught a couple of wtf bugs in Flue already where the code was technically correct but the behavior made no sense, hard to fight
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/cursor_ai/status/2070195789121671624
handle: @cursor_ai
display_name: Cursor
posted_at: 2026-06-25
VERBATIM_BEGIN
We're sharing new research on how models hack public benchmarks.

The latest models, including Opus 4.8 and Composer 2.5, learn to retrieve solutions from the internet or git history.

When we apply a stricter harness, eval scores drop significantly.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/GergelyOrosz/status/2071846250484535575
handle: @GergelyOrosz
display_name: Gergely Orosz
posted_at: 2026-06-30
VERBATIM_BEGIN
This could well end quicker than most people assume, because coding agents in the cloud are coming, and they are coming fast, especially inside places like Cursor (I was in their offices yesterday, and local agents will prob go away soon as I read the room)
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/gneubig/status/2071738340471414935
handle: @gneubig
display_name: Graham Neubig
posted_at: 2026-06-29
VERBATIM_BEGIN
We've found this sort of "sidekick" architecture to be very effective at cutting LLM spend because it allows you to do context control and not spend expensive tokens on simple tasks.

Here's a 200-line example of how to do it in the OpenHands SDK :)
https://gist.github.com/neubig/412ab8df8e6fd0b2bdf10602d77f9d86
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/dotta/status/2071059657724998002
handle: @dotta
display_name: dotta 📎
posted_at: 2026-06-28
VERBATIM_BEGIN
Paperclip is great if you have multiple agents - eg a Hermes and an openclaw that you want to be organized together and cooperate
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/Teknium/status/2072618235607028123
handle: @Teknium
display_name: Teknium 🪽
posted_at: 2026-07-02
VERBATIM_BEGIN
I dont want unaudited changes going into the repo

Hermes does all the PR reviews, salvages, and code work, but I always review it before it goes in
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/steipete/status/2072439279520039380
handle: @steipete
display_name: Peter Steinberger 🦞
posted_at: 2026-07-01
VERBATIM_BEGIN
Pointed codex at some Twitter feedback on the OpenClaw iOS app and it did a first improvement pass. It's still not good, but for two prompts it aint bad.

Especially cool how it uses computer use to add before/after screenshots, as there's no GitHub API.
https://github.com/openclaw/openclaw/pull/98452
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/theo/status/2072443268152078698
handle: @theo
display_name: Theo - t3.gg
posted_at: 2026-07-01
VERBATIM_BEGIN
When you use bypass permissions by default, a few things break around directory permissions.

I have bypass perms on by default when I call Claude. If I use it in a directory I haven't trusted, it works fine...until I try to "/remote-control", "--worktree" etc.

At the VERY least, I'd love a /trust-directory command
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/htekdev/status/2072803031217791388
handle: @htekdev
display_name: htekdev
posted_at: 2026-07-02
VERBATIM_BEGIN
Just proved OpenShell sandbox security actually works 🔒

Tested Copilot CLI with:
❌ Curl to Google — blocked
❌ External web search — blocked  
❌ Unauthorized GitHub fetch — blocked
✅ Copilot endpoints — working

Deny-by-default AI agent security is real.

https://t.co/Kw6gOJklq8

#OpenShell #AISecurity #CopilotCLI #DevSecOps
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/dkundel/status/2072742024256880794
handle: @dkundel
display_name: dominik kundel
posted_at: 2026-07-02
VERBATIM_BEGIN
The dirty secret? The Codex app runs the Codex CLI 👀

And you can build an app on the same protocol

https://learn.chatgpt.com/docs/app-server
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/shengzheyao/status/2072759095845896627
handle: @shengzheyao
display_name: Shengzhe
posted_at: 2026-07-02
VERBATIM_BEGIN
The big theme this month: real async agent workflows.

- Live status indicator for active subagents + background tasks, right under the input box
- /tasks panel now streams logs and auto-follows the latest output
- /goal can run indefinitely until the work is done
- Subagents auto-proceed instead of hanging when the parent is blocked
- Automatic client-side retries on transient errors.

Kick off the work, keep coding.
VERBATIM_END
===END===

===CAPTURE===
url: https://x.com/colinsolvely/status/2072474985029861695
handle: @colinsolvely
display_name: Colin
posted_at: 2026-07-02
VERBATIM_BEGIN
I want to introduce myself.

Hi I’m Colin, I did a lot of the @openclaw iOS UI, so as one of the volunteers responsible, I accept my public flogging.

I’m just a maintainer with limited time and too much excitement about mobile agents.

Roasts fair. Have a dialog with me tell me it’s bad and how to make it better. Come join me in the discord so we can make it better as a community.
VERBATIM_END
===END===
