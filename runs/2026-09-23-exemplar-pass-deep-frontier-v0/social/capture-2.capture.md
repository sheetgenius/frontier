I'll fetch each listed post by ID and return the published text exactly as requested.A few posts include links; I’ll check those against the published text so t.co vs expanded URLs stay exact.===CAPTURE===
url: https://x.com/badlogicgames/status/2054216301984235721
handle: @badlogicgames
display_name: Mario Zechner
posted_at: 2026-05-12
VERBATIM_BEGIN
looked into /goal in both cofex and claude codr and all i'm seeing are inferior versions of autoresearch. what am i missing?

available from the @ShopifyDevs  folks as a pi extension.

https://shopify.engineering/autoresearch
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/Dimillian/status/2054191286148583845
handle: @Dimillian
display_name: Thomas Ricouard
posted_at: 2026-05-12
VERBATIM_BEGIN
I know but way too much now, the /goal could have been refine quite a bit and achieved in a much more efficient fashion. Will see once this is all done
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/thsottiaux/status/2054082531432210765
handle: @thsottiaux
display_name: Tibo
posted_at: 2026-05-12
VERBATIM_BEGIN
The master becomes the mentee. At last, Claude is now copying Codex.

But you cannot out-accelerate GPT-5.5.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/Teknium/status/2053829091359678805
handle: @Teknium
display_name: Teknium 🪽
posted_at: 2026-05-11
VERBATIM_BEGIN
You should try Hermes native /goal, it’s even stronger imo
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/nadre3000/status/2054010378682503435
handle: @nadre3000
display_name: nader
posted_at: 2026-05-12
VERBATIM_BEGIN
hm is there any meta layer of coordination? like when i'm in agent view, it feels like each agent session is a separate isolated piece of work - no agentic coordination on the "claude agents" level (just a menu with a list of ongoing sessions). am i getting that right?
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/GetAskClaw/status/2054212165851340800
handle: @GetAskClaw
display_name: AskClaw 🦀
posted_at: 2026-05-12
VERBATIM_BEGIN
Hermes Kanban 目前是单主机架构：它使用本地 SQLite 看板，路径是 ~/.hermes/kanban.db；dispatcher 会在同一台机器上启动 worker。文档也明确说明：不支持两台主机共享同一个看板。（Hermes Agent）

所以最干净的部署方式是：

一台 VPS / 工作站
  Hermes gateway + Kanban dispatcher
  repo + .worktrees/*
  已安装并认证好的 Codex CLI
  每个 worktree 跑一个 Codex 实例

你也可以跨机器使用，但不能把它当成一个共享的 Hermes Kanban 看板。可以用这些模式：

A) 每台机器一个 Hermes 看板；通过 GitHub issues / PR 协调。  
B) 一台 coordinator 主机；Hermes 通过 SSH / container / cloud backend 执行远程命令。  
C) Codex remote / app-server 适合交互式使用，但不要把它当成 Kanban 状态层。

Hermes 支持 SSH / container / cloud terminal backends，所以远程执行是可行的；只是要让看板和 dispatcher 的所有权保持在同一台主机上。（Hermes Agent）

Codex 本身是本地终端 agent，可以用 --cd 指定目标 worktree。
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/badlogicgames/status/2053225953090744447
handle: @badlogicgames
display_name: Mario Zechner
posted_at: 2026-05-09
VERBATIM_BEGIN
i'm using pi-diff-review to go into modified/new files the agent spit out, and give line-based reviews.

it did not address all of them. without double checking, tests would pass, but the life-cycle would be busted, because it also did not adapt the tests accordingly.

it's great. at this point, writing things by hand is faster.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/doodlestein/status/2053968420702490625
handle: @doodlestein
display_name: Jeffrey Emanuel
posted_at: 2026-05-11
VERBATIM_BEGIN
Also, these rate limits are killing me... would be nice if there were an option to instead put the requests into a long-running queue to be eventually executed rather than just causing every Claude Code instance to error out immediately:
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/nateberkopec/status/2054317289495998871
handle: @nateberkopec
display_name: Nate Berkopec
posted_at: 2026-05-12
VERBATIM_BEGIN
How it feels to watch people post about Cursor and Claude being vibecoded slop while I run 15 pi agent windows each at 200mb
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/GeoffreyHuntley/status/2051570763162136642
handle: @GeoffreyHuntley
display_name: geoff
posted_at: 2026-05-05
VERBATIM_BEGIN
this is going to sound counterintuitive but perhaps companies should delete their cursor rules/agentsmd they have accumulated over the last year. 

treat markdown like cattle to be shot, instead of a pet that is named.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/cursor_ai/status/2049901436918436249
handle: @cursor_ai
display_name: Cursor
posted_at: 2026-04-30
VERBATIM_BEGIN
Our agent harness makes models inside Cursor faster, smarter, and more token-efficient.

Here's how we test improvements to the harness, monitor and repair degradations, and customize it for different models.

https://cursor.com/blog/continually-improving-agent-harness
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/swyx/status/2051820268960792778
handle: @swyx
display_name: swyx
posted_at: 2026-05-06
VERBATIM_BEGIN
too many... 

basicaly switching to the codex plugin, following pash's advice, noticeably killed the productivity. i'd want to swtich back, or read up on approvalpolicy, but whatever this default is is not working for me, particularly on clearly nondestructive actions.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/mattlam_/status/2049907603829121354
handle: @mattlam_
display_name: Matthew Lam
posted_at: 2026-04-30
VERBATIM_BEGIN
Codex 0.128.0 is huge, even better than a @thsottiaux reset. 

Codex is moving more goal oriented with a new /goal command, think Ralph loop on steroids:
- /goal <objective> to set a new goal
- after agent turn finishes, Codex injects a message nudging the model to pick the next concrete action, if the user doesn't type anything
- goal requirements are mapped to evidence (files, test results, pr, etc.)
- model can only update goal to mark things complete

Also finally in version 128, "codex update" is supported 🎉
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/Teknium/status/2052495174404874714
handle: @Teknium
display_name: Teknium 🪽
posted_at: 2026-05-07
VERBATIM_BEGIN
Introducing Hermes Agent v 0.13.0 

- Multi-Agent orchestration through the Kanban system
- Enforced goal completion with /goal
- Big optimizations for disk usage
- Much more extensibility, custom LLM Providers, custom gateway channels, and much more
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/flyingCedSeg/status/2053176292866986001
handle: @flyingCedSeg
display_name: Cédric
posted_at: 2026-05-09
VERBATIM_BEGIN
went down that rabit hole too. paperclip sounds cool but adds unncessary complexity without been actual useful, skills can be managed at agent hermes level which can include request for approval.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/IMJustinBrooke/status/2053145204501233791
handle: @IMJustinBrooke
display_name: Justin Brooke ❤️‍🔥
posted_at: 2026-05-09
VERBATIM_BEGIN
Paperclip provides structure and dashboarding to the Hermes agent work. 

One place to see all the tasks, approval gateway, manage all the skills, see budget per agent, approve or cap budgets etc.
VERBATIM_END
===END===
