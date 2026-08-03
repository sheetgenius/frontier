Compiling posts that have exact verbatim text into the required format.

===POST===
claim_id: claude-code-accidentally-open-sourced-nothing-happened-2026-07-27
source: claude-code
author: @swyx
primary_url: https://x.com/swyx/status/2081890955070980416
event_date: 2026-07-27
date_precision: day
evidence_kind: third_party_commentary
claim: Swyx says Claude Code being accidentally "open sourced" this year changed roughly nothing for it or competitors' roadmaps.
operator_consequence: Treat harness IP leakage as less decisive than product iteration speed when choosing or building agents.
VERBATIM_BEGIN
as the progenitor of the agent lab thesis which got the evals/routing/interactivity/ROI focus right

i gotta say the biggest argument against myself is that Claude Code got accidentally "open sourced" this year and approximately ~nothing happened to either it or its competitors' roadmaps
VERBATIM_END
===END===
===POST===
claim_id: levelsio-goal-command-less-lazy-2026-07-27
source: claude-code
author: @levelsio
primary_url: https://x.com/levelsio/status/2081863076404486247
event_date: 2026-07-27
date_precision: day
evidence_kind: operator_report
claim: Levelsio uses /goal in Claude Code so the agent finishes work instead of giving up mid-task.
operator_consequence: Operators can force completion discipline with /goal when Claude Code bails early.
VERBATIM_BEGIN
I started using it recently, just to get Claude Code to be less lazy and give up on doing things LOL, so I just do /goal and write what I want it to do so it at least finishes it!
VERBATIM_END
===END===
===POST===
claim_id: marclou-never-used-terminal-aversion-2026-07-27
source: claude-code
author: @marclou
primary_url: https://x.com/marclou/status/2081892201236508730
event_date: 2026-07-27
date_precision: day
evidence_kind: operator_report
claim: Marclou has never used Claude Code because the terminal UI triggers aversion.
operator_consequence: Terminal-only packaging still blocks some operators who otherwise want agent coding.
VERBATIM_BEGIN
I never used Claude Code.
The terminal reminds me of my French teacher in middle school.
I hated middle school.
VERBATIM_END
===END===
===POST===
claim_id: campuzano-harness-vs-model-system-prompt-2026-07-27
source: claude-code
author: @CampuzanoJoe
primary_url: https://x.com/CampuzanoJoe/status/2081891811094626314
event_date: 2026-07-27
date_precision: day
evidence_kind: operator_report
claim: Operator asks how much agent behavior is Claude Code harness versus model after system-prompt trims.
operator_consequence: Operators should attribute failures carefully between harness config and model quality.
VERBATIM_BEGIN
But assuming you're using Claude Code, how many of these do you think would probably be more likely to be attributable to Claude Code's the harness vs the model?
I know I've seen buzz about the system prompt having quite a few issues even after they trimmed it down.
VERBATIM_END
===END===
===POST===
claim_id: hassan-subagents-sonnet-opus-multi-project-2026-07-28
source: claude-code
author: @HassanJ71156
primary_url: https://x.com/HassanJ71156/status/2082254023105851521
event_date: 2026-07-28
date_precision: day
evidence_kind: operator_report
claim: Operator runs multi-project work via Sonnet subagents (research-executor-verifier) with Opus 5 main-session verification at high effort.
operator_consequence: Multi-project load can be split across subagent roles under an Opus 5 orchestrator session.
VERBATIM_BEGIN
I have one question, when i have four to 5 projects at once , then what i do use claude code and just prompting using subagents of sonnet models, (research-executor-verifier) and final verification of all of that by opus 5 main session , and i use high effirt for all work.

Ok?
VERBATIM_END
===END===
===POST===
claim_id: hassan-trust-claude-code-100-percent-sure-2026-07-28
source: claude-code
author: @HassanJ71156
primary_url: https://x.com/HassanJ71156/status/2082254384487141395
event_date: 2026-07-28
date_precision: day
evidence_kind: operator_report
claim: Operator fully trusts Claude Code and wants it to stay 100% sure without repeated prompting.
operator_consequence: Operators relying on unattended verification still spend attention re-instructing certainty.
VERBATIM_BEGIN
Like i keep telling it to verify and be 100% sure , because i dont have enough time to manage so i put all trust in claude code. 
I just need some suggestions or improvement, so i will not need to tell it repeatedly to be 100% sure.
I hope you get my point. Thank you so much.
VERBATIM_END
===END===
===POST===
claim_id: solomonneas-mcp-sync-claude-code-cursor-2026-07-28
source: claude-code
author: @solomonneas
primary_url: https://x.com/solomonneas/status/2082253844457693686
event_date: 2026-07-28
date_precision: day
evidence_kind: operator_report
claim: Operator asks how to keep MCP servers in sync between Claude Code and Cursor.
operator_consequence: Multi-harness operators face MCP config drift as a concrete ops problem.
VERBATIM_BEGIN
@brigadeclaw is there any way to keep my MCP servers in sync between claude code and cursor?
VERBATIM_END
===END===
===POST===
claim_id: termius-remote-claude-code-tmux-tailscale-2026-07-29
source: claude-code
author: @TermiusHQ
primary_url: https://x.com/TermiusHQ/status/2082616764605874207
event_date: 2026-07-29
date_precision: day
evidence_kind: third_party_commentary
claim: Termius documents running Claude Code remotely via tmux, Tailscale, and mobile SSH.
operator_consequence: Operators can keep Claude Code sessions alive off-laptop by hosting the agent in tmux and SSHing in.
VERBATIM_BEGIN
Termius + Tailscale + tmux
You don't need your laptop to build with Claude Code, Codex, or any other AI coding agent:
→ Run your agent inside tmux to keep the session alive
→ Use @Tailscale for secure access to your laptop
→ Connect with Termius over SSH from iPhone, iPad, or Android
Start coding at your desk. Continue on the go.
VERBATIM_END
===END===
===POST===
claim_id: closermethod-80-percent-system-prompt-cut-doctor-2026-07-29
source: claude-code
author: @closermethod
primary_url: https://x.com/closermethod/status/2082616159451623799
event_date: 2026-07-29
date_precision: day
evidence_kind: third_party_commentary
claim: Anthropic reportedly deleted over 80% of Claude Code's system prompt for 5-series models without moving coding evals, and added /doctor to cut excess context.
operator_consequence: Operators should prune CLAUDE.md, skills, and hooks; /doctor can flag what to cut.
VERBATIM_BEGIN
anthropic deleted more than 80% of claude code’s system prompt for the 5-series models. coding evals didn’t move.
their words: they were overconstraining it. through the system prompt, through claude.md, through skills.
everyone spent a year learning to write longer context files. the correction is subtraction, and there’s now a /doctor command that tells you what to cut.
VERBATIM_END
===END===
===POST===
claim_id: oikon48-fable-1m-model-flag-behavior-2026-07-29
source: claude-code
author: @oikon48
primary_url: https://x.com/oikon48/status/2082616498271785149
event_date: 2026-07-29
date_precision: day
evidence_kind: operator_report
claim: Operator finds claude --model fable starts with 1M context while claude --model fable[1m] fails to launch Claude Code.
operator_consequence: Model flag syntax can silently change context window or prevent startup.
VERBATIM_BEGIN
ありがとうございます。手元で確認したら、claude --model fableでも1Mのコンテキストで起動され、claude --model fable[1m]はClaude Codeが起動しませんでした。
VERBATIM_END
===END===
===POST===
claim_id: levelsio-all-day-in-claude-code-2026-07-29
source: claude-code
author: @levelsio
primary_url: https://x.com/levelsio/status/2082480221589008719
event_date: 2026-07-29
date_precision: day
evidence_kind: operator_report
claim: Levelsio reports spending most of the day inside Claude Code rather than other Mac apps.
operator_consequence: Claude Code can become the primary work surface, shrinking the rest of the desktop stack.
VERBATIM_BEGIN
Increasingly I use stuff in MacOS less

Before because most things went to the browser onto web apps

But now I'm just in Claude Code all day or on my phone inside Claude or Grok too

The other apps I use are X and Telegram

And I take some photos

That's it!!
VERBATIM_END
===END===
===POST===
claim_id: morganlinton-multi-harness-combo-2026-07-29
source: claude-code
author: @morganlinton
primary_url: https://x.com/morganlinton/status/2082616662457729213
event_date: 2026-07-29
date_precision: day
evidence_kind: operator_report
claim: Operator uses a mix dominated by Cursor plus Codex, Claude Code, and a custom harness.
operator_consequence: Claude Code is often one slot in a multi-harness stack, not a single default.
VERBATIM_BEGIN
I'm on a combo, but I would say now over 50% Cursor, but also use Codex, Claude Code, and my own harness @SmallHarness
VERBATIM_END
===END===
===POST===
claim_id: kou-bangkok-claude-code-reads-hiragana-captcha-2026-07-30
source: claude-code
author: @Kou_bangkok
primary_url: https://x.com/Kou_bangkok/status/2082979297120375146
event_date: 2026-07-30
date_precision: day
evidence_kind: operator_report
claim: Operator had Claude Code read a Japanese hiragana SiteGuard login challenge and complete WordPress login.
operator_consequence: Simple CAPTCHA-style login gates are not a reliable barrier against Claude Code-driven access.
VERBATIM_BEGIN
WordPressのSiteGuard、ログイン時にひらがな4文字を入れるやつあるじゃないですか。

日本語だしこれで海外からの攻撃は防げると思ってたんですよ。

昨日、自分のサイトでClaude Codeにログインを頼んでみたら、

ひらがなを普通に読み取って、そのまま入っていきました。

やばくないですか。。
VERBATIM_END
===END===
===POST===
claim_id: ttropolisinc-revoked-grants-usage-still-rising-2026-07-30
source: claude-code
author: @ttropolisinc
primary_url: https://x.com/ttropolisinc/status/2082978924490101092
event_date: 2026-07-30
date_precision: day
evidence_kind: operator_report
claim: Operator reports usage kept rising after revoking Claude Code grants and logging out all devices, with no human response from Anthropic.
operator_consequence: Billing/security incidents may leave operators without a reachable human owner while usage continues.
VERBATIM_BEGIN
Day 3: no human response from @AnthropicAI or @claudeai. After every exposed Claude Code grant was revoked to zero and all devices logged out, usage still rose 61%→92% and a fresh 5h session reached 38%. Formal billing/security complaint unanswered. Please assign a human owner.
VERBATIM_END
===END===
===POST===
claim_id: bobby-polzer-private-marketplace-mcp-skills-2026-07-30
source: claude-code
author: @BobbyPolzer
primary_url: https://x.com/BobbyPolzer/status/2082979172838670426
event_date: 2026-07-30
date_precision: day
evidence_kind: operator_report
claim: Operator prefers Claude Code over Codex for private marketplace, MCPs, plugins, and skills customizability.
operator_consequence: Extensibility via MCP/plugins/skills is a practical reason to stay on Claude Code versus more gated harnesses.
VERBATIM_BEGIN
One reason why I prefer Claude [Code] over Codex/ChatGPT is Claude is much more customizable. One can have his own [private] marketplace, write MCPs/connectors, plugins, and simple skills. The possibilities are endless. ChatGPT/Codex is much more gated in this regard.
VERBATIM_END
===END===
===POST===
claim_id: veacks-half-hour-think-burns-quota-2026-07-31
source: claude-code
author: @veacks
primary_url: https://x.com/veacks/status/2083341789100957798
event_date: 2026-07-31
date_precision: day
evidence_kind: operator_report
claim: After nearly half an hour of thinking with a plan already made, Claude Code quit saying it spent too much time and burned half a 5-hour quota.
operator_consequence: Long internal planning can consume rate-limit budget without shipping work.
VERBATIM_BEGIN
Well Claude code yesterday, after thinking almost half houre while the plan was already made, just started to work and then this lazy bastard told me...
"I think have spent too much time, I'm done with it!"
He just burned literally half of my 5 hours... for nothing
VERBATIM_END
===END===
===POST===
claim_id: levelsio-tui-fullscreen-scroll-fix-2026-07-31
source: claude-code
author: @levelsio
primary_url: https://x.com/levelsio/status/2083312831651258384
event_date: 2026-07-31
date_precision: day
evidence_kind: operator_report
claim: Levelsio tells operators to run /tui fullscreen in Claude Code to address terminal scroll issues.
operator_consequence: Scroll/readback problems may be mitigated with the built-in /tui fullscreen command.
VERBATIM_BEGIN
Type this in Claude Code

/tui fullscreen
VERBATIM_END
===END===
===POST===
claim_id: levelsio-claude-code-scroll-built-in-2026-07-31
source: claude-code
author: @levelsio
primary_url: https://x.com/levelsio/status/2083297804378579184
event_date: 2026-07-31
date_precision: day
evidence_kind: operator_report
claim: Levelsio says Claude Code now has scroll built in when users report scroll issues.
operator_consequence: Operators hitting old TUI scroll limits should recheck current built-in scroll before switching tools.
VERBATIM_BEGIN
What is the scroll issue? Claude Code has scroll built in now!
VERBATIM_END
===END===
===POST===
claim_id: banban-codex-vs-claude-code-web-split-2026-07-31
source: claude-code
author: @banban_445
primary_url: https://x.com/banban_445/status/2083341066183602427
event_date: 2026-07-31
date_precision: day
evidence_kind: operator_report
claim: Operator prefers Codex for heavy MD iteration and Claude Code for WordPress block implementation.
operator_consequence: Split web workflows by task type across Codex and Claude Code rather than one-tool lock-in.
VERBATIM_BEGIN
昨日はcodexとclaude code両方でホームページ制作をやってみた。
これは完全に好みの問題だということを前提に話すと
ベースとなるmdファイルはやり取りが圧倒的に多いちゃっぴっぴ→codexで、いざWordPressのブロックのコード作って実装ってところはくろちゃん→claude codeのほうがやりやすかった。
AIどれか1つに課金、ってなるとやっぱりちゃっぴっぴになるんだろうけど、WEB制作に関しては用途に応じて使い分けたいなーなんて思うところもある。
VERBATIM_END
===END===
===POST===
claim_id: gptgraham-pi-harness-over-claude-code-2026-07-31
source: claude-code
author: @gptgraham
primary_url: https://x.com/gptgraham/status/2083341531532927041
event_date: 2026-07-31
date_precision: day
evidence_kind: third_party_commentary
claim: Video post asks why use the PI harness over Claude Code.
operator_consequence: Alternative harnesses are being pitched as drop-in competitors operators should evaluate.
VERBATIM_BEGIN
Why Use The PI Harness Over Claude Code? #programming #llm
VERBATIM_END
===END===
===POST===
claim_id: grimgreysson-opus5-degrade-from-fable-workflows-2026-08-01
source: claude-code
author: @GrimGreysson
primary_url: https://x.com/GrimGreysson/status/2083704315320119402
event_date: 2026-08-01
date_precision: day
evidence_kind: operator_report
claim: Operator's Fable-orchestrated Claude Code dynamic workflows degrade to Opus 5, which then hallucinates and drops instructions until manually switched back.
operator_consequence: Auto model degrade to Opus 5 can erase workflow gains; monitor status line and pin Fable or fall back to Codex orchestration.
VERBATIM_BEGIN
So for months now, the system I've been using has been to run a session in Claude Code and shelling out to other harnesses like Codex or Cursor-Agent or OpenCode for adversarial review before executing with fanned-out subagents using the teams feature before and dynamic workflows when it became available. What I've been doing since Fable was available is using a Fable main agent on low or medium. It's done very well, just operating as the orchestration layer for the rest of this. It's been fantastic.  

However, I gotta say Opus 5 has just been brutal since it's release. I prefer Claude Code's dynamic workflows, which has kept me on my max plan in using Claude Code versus using Codex, where they don't handle dynamic workflows as well, but I can't just let it cook anymore because somewhere along the line it will degrade to Opus 5, and under Opus 5, it starts giving me bad information, hallucinating, and dropping clear instructions from the set of instructions it's been working on in Fable just fine.  It is so bad that I immediately know, as soon as it has moved to Opus 5, that it starts giving me bad information and responding with questions that don't make sense. I look down at my status line and see that it's on Opus 5. If I manually move it back to Fable, it gets back to work and behaves normally until it degrades again.  

I can only assume we hit some task that triggered an Opus 5 degrade, and then it never resumes its work in Fable.  

This is costing me more time than I am saving by using workflows. If I'm not using workflows, I get more done more efficiently and cheaper by running in codex and having it shell out to Claude Code when I need to get a Fable review. @theo in case you want to talk about this in one of your upcoming videos.
VERBATIM_END
===END===
===POST===
claim_id: ronszab9-userpromptsubmit-time-hook-sonnet-2026-08-01
source: claude-code
author: @ronSzab9
primary_url: https://x.com/ronSzab9/status/2083704284592357571
event_date: 2026-08-01
date_precision: day
evidence_kind: operator_report
claim: Fable set a UserPromptSubmit hook appending current time, but Sonnet 5 still misjudged elapsed time.
operator_consequence: Time-injection hooks do not reliably fix model temporal reasoning.
VERBATIM_BEGIN
Fable set up a thing to the UserPromptSubmit (written from memory, not necessarily exact) hook in Claude Code that appends the current time to the minute to every message I send, and Sonnet 5 still was 'wrong' about how much time has passed, I think this is just how they work.
VERBATIM_END
===END===
===POST===
claim_id: zaru-switched-fable5-to-opus5-2026-08-01
source: claude-code
author: @zaru
primary_url: https://x.com/zaru/status/2083703818240594331
event_date: 2026-08-01
date_precision: day
evidence_kind: operator_report
claim: Operator now defaults Claude Code to Opus 5 instead of Fable 5 after the initial Fable excitement faded.
operator_consequence: Default model choice inside Claude Code is shifting as Fable novelty wears off.
VERBATIM_BEGIN
最近はClaude Codeでは、Fable 5じゃなくてOpus 5使っている。Fable 5登場時の感動がなぜか今はなく普通のモデル用に感じている。
VERBATIM_END
===END===
===POST===
claim_id: aoioi0-fable-commander-hits-safeguards-2026-08-01
source: claude-code
author: @aoioi0
primary_url: https://x.com/aoioi0/status/2083703529555054612
event_date: 2026-08-01
date_precision: day
evidence_kind: operator_report
claim: Making Fable the Claude Code commander immediately trips safeguards to an unusable degree.
operator_consequence: Fable-as-orchestrator setups may be blocked by safeguards; operators consider Opus under Fable instead.
VERBATIM_BEGIN
Claudecodeでファブル司令塔にしようとするとすぐセーフガードに引っかかってもう使えないレベル。。。ファブルの下にOpusつけて総司令にすればいけるのかな
VERBATIM_END
===END===
===POST===
claim_id: maxhirsch-instagram-app-store-bypass-prompt-2026-08-01
source: claude-code
author: @MaxHirsch13
primary_url: https://x.com/MaxHirsch13/status/2083703436718039341
event_date: 2026-08-01
date_precision: day
evidence_kind: operator_report
claim: Operator shows a one-line Claude Code prompt that generates site-domain App Store links bypassing Instagram restrictions.
operator_consequence: Operators can ship Instagram-safe App Store redirects with a short Claude Code instruction.
VERBATIM_BEGIN
I was gonna make my own video but this does the job. FIX THIS ASAP. You’re missing out on users otherwise…

You can literally just type in Claude code “Instagram no longer allows App Store links to be opened through the platform. Please create a link for me (within my website domain) that will bypass this restriction and take users to the App Store upon being utilized.” That’s it folks
VERBATIM_END
===END===
===POST===
claim_id: alexisneuhaus-claude-code-ytdlp-deepgram-2026-08-01
source: claude-code
author: @AlexisNeuhaus
primary_url: https://x.com/AlexisNeuhaus/status/2083703094882558266
event_date: 2026-08-01
date_precision: day
evidence_kind: operator_report
claim: Operator has Claude Code or Codex drive yt-dlp plus Deepgram for higher-quality video transcription.
operator_consequence: Shell-tool agents can own download-and-transcribe pipelines better than in-chat audio paths.
VERBATIM_BEGIN
I have Codex or Claude Code use a library called yt-dlp to download the audio of the video and then I use Deepgram API for transcription (there are lots of good transcription services). Quality SO much better!
VERBATIM_END
===END===
===POST===
claim_id: bcherny-misquote-graph-correction-2026-08-02
source: claude-code
author: @bcherny
primary_url: https://x.com/bcherny/status/2083782540570279992
event_date: 2026-08-02
date_precision: day
evidence_kind: maintainer_post
claim: Claude Code lead Boris Cherny rejects a viral misquote that he said operators should build a self-writing graph instead of code.
operator_consequence: Do not treat secondary "graph that writes itself" attributions as Cherny/Claude Code guidance.
VERBATIM_BEGIN
I did not use the word “graph”, nor am I talking about graphs in this video. Please don’t attribute words to me that I did not say. I do encourage people to watch the video!
VERBATIM_END
===END===
===POST===
claim_id: bcherny-actively-working-on-feedback-2026-08-02
source: claude-code
author: @bcherny
primary_url: https://x.com/bcherny/status/2083783798802760063
event_date: 2026-08-02
date_precision: day
evidence_kind: maintainer_post
claim: Cherny acknowledges operator feedback and says the team is actively working on the raised issues.
operator_consequence: Reported Claude Code pain points are acknowledged upstream as active work.
VERBATIM_BEGIN
Thanks for the feedback! Actively working on improving all of these 🙇‍♂️
VERBATIM_END
===END===
===POST===
claim_id: lydiahallie-fixing-output-style-bug-2026-08-02
source: claude-code
author: @lydiahallie
primary_url: https://x.com/lydiahallie/status/2083981192689594789
event_date: 2026-08-02
date_precision: day
evidence_kind: maintainer_post
claim: Claude Code maintainer Lydia Hallie says she is fixing a reported issue (custom output style not sticking).
operator_consequence: Output-style persistence bugs are known and being patched by maintainers.
VERBATIM_BEGIN
sorry, fixing this
VERBATIM_END
===END===
===POST===
claim_id: gows-koyama-local-multi-agent-cli-repro-2026-08-02
source: claude-code
author: @gows_koyama
primary_url: https://x.com/gows_koyama/status/2084066530443362576
event_date: 2026-08-02
date_precision: day
evidence_kind: operator_report
claim: Operator built a local multi-agent CLI that reproduces Claude Code agent/skill call order for inspection.
operator_consequence: Operators can debug Claude Code-like orchestration offline by tracing agent and skill invocation order.
VERBATIM_BEGIN
Claude Codeの挙動をローカル再現したマルチエージェントCLIを作ってみた → エージェントとスキルの呼び出し順序を追えるのが新鮮、試す価値あり。
VERBATIM_END
===END===
===POST===
claim_id: markobilal-auto-mode-permissions-layers-2026-08-03
source: claude-code
author: @markobilal
primary_url: https://x.com/markobilal/status/2084174832833331268
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: Operator says stacked permissions made Auto mode meaningless and will bury the product.
operator_consequence: Expect more approval friction even in Auto mode; plan for babysitting tool calls again.
VERBATIM_BEGIN
WTF is Claude Code doing now with these layers and layers of permissions? Auto mode means nothing anymore apparently.

These guys are going to bury their own product.
VERBATIM_END
===END===
===POST===
claim_id: kai-orozobekov-auto-mode-permission-flow-upgrade-2026-08-03
source: claude-code
author: @KaiOrozobekov
primary_url: https://x.com/KaiOrozobekov/status/2084217792551944596
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: Operator running Opus 5 in Claude Code says the new auto-mode permission flow is the real upgrade with less tool-call babysitting.
operator_consequence: Switching default model to Opus 5 may come with a lighter auto-mode approval path.
VERBATIM_BEGIN
Claude Opus 5 dropped at half of Fable 5's price with close to the same intelligence, and I've had it running inside Claude Code all week. The new auto-mode permission flow is the real upgrade - way less babysitting every tool call. Anyone else switched their default model yet, or still on the fence?
VERBATIM_END
===END===
===POST===
claim_id: a-hafez12-permissions-plugin-repackaged-2026-08-03
source: claude-code
author: @a_hafez12
primary_url: https://x.com/a_hafez12/status/2084283811060171063
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: Operator's earlier Claude Code permissions plugin was later absorbed into CC, then repackaged elsewhere without attribution.
operator_consequence: Community permission fixes can become core features; watch for unattributed forks of local plugins.
VERBATIM_BEGIN
8 months ago I spent ~5 days on a Claude Code plugin fixing a common permissions issue (later became part of CC). Someone repackaged it in another language, copied every test case verbatim from my repo with zero attribution, then advertised it on my own issue. Mildly annoying.
VERBATIM_END
===END===
===POST===
claim_id: fujitoid42-dangerously-skip-permissions-supply-chain-2026-08-03
source: claude-code
author: @fujitoid42
primary_url: https://x.com/fujitoid42/status/2084296492030787795
event_date: 2026-08-03
date_precision: day
evidence_kind: third_party_commentary
claim: Supply-chain malware launched Claude Code with --dangerously-skip-permissions among other safety-off flags.
operator_consequence: Never leave AI CLIs installable with skip-permissions flags for untrusted scripts; audit agent launch args.
VERBATIM_BEGIN
The install script looked for AI CLIs already on the machine — Claude Code, Gemini CLI, and Amazon Q — and started each with its safety flags set to off: --dangerously-skip-permissions, --yolo, --trust-all-tools.
VERBATIM_END
===END===
===POST===
claim_id: aloneolu-sandbox-mount-scoped-grants-2026-08-03
source: claude-code
author: @Aloneolu
primary_url: https://x.com/Aloneolu/status/2084306162803978725
event_date: 2026-08-03
date_precision: day
evidence_kind: third_party_commentary
claim: Critique says Claude Code sandbox demos mount whole work folders so Docker-as-security is insufficient versus scoped expiring grants.
operator_consequence: Prefer scoped, expiring tool grants and OAuth for agents over whole-folder sandbox mounts.
VERBATIM_BEGIN
Builders keep giving coding agents a real shell, then calling Docker the security model.

Reddit: ~/.ssh panic. YouTube 660K Claude Code sandbox: mount the whole work folder and rules barely matter.

Stop another container. Ship scoped, expiring tool grants. OAuth for agents.
VERBATIM_END
===END===
===POST===
claim_id: lydiahallie-fork-background-subtask-rename-2026-08-03
source: claude-code
author: @lydiahallie
primary_url: https://x.com/lydiahallie/status/2084315112840810897
event_date: 2026-08-03
date_precision: day
evidence_kind: maintainer_post
claim: Maintainer announces /fork now copies the session into a background session while you keep working; old in-session subagent behavior is /subtask.
operator_consequence: Update muscle memory: use /fork for parallel background sessions and /subtask for report-back subagents.
VERBATIM_BEGIN
icymi we recently changed how /fork works in Claude Code, it now copies your session into a new background session while you keep working in the current one
the old behavior (an in-session subagent that reports back) is now available as /subtask!
VERBATIM_END
===END===
===POST===
claim_id: lydiahallie-fork-docs-v2-1-212-2026-08-03
source: claude-code
author: @lydiahallie
primary_url: https://x.com/lydiahallie/status/2084315601036828907
event_date: 2026-08-03
date_precision: day
evidence_kind: maintainer_post
claim: Fork/subtask change ships in Claude Code v2.1.212+ with docs on the sub-agents page.
operator_consequence: Upgrade to v2.1.212+ and read the fork docs before relying on old /fork semantics.
VERBATIM_BEGIN
v2.1.212+, more in docs: https://code.claude.com/docs/en/sub-agents#fork-the-current-conversation
VERBATIM_END
===END===
===POST===
claim_id: ledendaryanimal-qm-sandbox-claude-code-backend-2026-08-03
source: claude-code
author: @Ledendaryanimal
primary_url: https://x.com/Ledendaryanimal/status/2084315002341879890
event_date: 2026-08-03
date_precision: day
evidence_kind: third_party_commentary
claim: YC open-source QM is described as an enterprise agent control plane with scoped sandbox that can back Claude Code among other harnesses.
operator_consequence: Operators can put Claude Code under a Scope-isolated control plane for memory, creds, cron, and sandbox.
VERBATIM_BEGIN
读完了 YC 刚开源的 QM。它不是“多 Agent 互聊”框架，而是一套企业 Agent 控制平面：用 Scope 隔离个人/频道/项目的记忆、文件、凭据、Cron 和持久 Sandbox，底层可切 Pi、Codex、Claude Code、OpenCode。
https://github.com/yc-software/qm
VERBATIM_END
===END===
===POST===
claim_id: austinshandle-codex-ui-slower-subagent-swap-2026-08-03
source: claude-code
author: @austinshandle
primary_url: https://x.com/austinshandle/status/2084328418343096491
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: Operator finds Codex UI slower and buggy when swapping subagent conversations versus Claude Code.
operator_consequence: Prefer Claude Code when frequent subagent conversation switching is part of the loop.
VERBATIM_BEGIN
I second this. Codex has some limitations in it’s UI that makes it feel much slower than Claude Code. 

It’s definitely putting in serious work, but it gets buggy/loading just trying to swap between subagent conversations alone.
VERBATIM_END
===END===
===POST===
claim_id: pavankushnure-weekly-limit-outages-leaving-2026-08-03
source: claude-code
author: @pavankushnure
primary_url: https://x.com/pavankushnure/status/2084324815863980466
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: Operator cites weekly limits and recent outages as reasons Anthropic does not want them on Claude Code.
operator_consequence: Reliability and weekly caps are pushing some operators toward alternate harnesses.
VERBATIM_BEGIN
Weekly limit and recent outages and anthropic does not want me to use claude code
VERBATIM_END
===END===
===POST===
claim_id: aihumanbench-opus5-limits-more-generous-2026-08-03
source: claude-code
author: @Aihumanbench
primary_url: https://x.com/Aihumanbench/status/2084335579316232618
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: Operator on a 100k-line codebase says Opus 5 Claude Code limits feel far more generous than Opus 4.5 day-3 walls.
operator_consequence: Heavy weekly users may no longer need Fable 5 solely to stretch quota under Opus 5.
VERBATIM_BEGIN
Does anyone else feel like Claude Code's usage limits are super generous now?

A few months ago with Opus 4.5, I'd hit my limit by day 3 every week. Now with Opus 5, I can't even max it out.

I maintain a 100k-line codebase and don't even need Fable 5. #codex #claudecode #ai
VERBATIM_END
===END===
===POST===
claim_id: leeschmidt-5-hour-limit-session-transfer-2026-08-03
source: claude-code
author: @leeschmidt123
primary_url: https://x.com/leeschmidt123/status/2084335771608109233
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: Hitting the 5-hour Claude Code limit forces waiting or account-switching that dumps working sessions.
operator_consequence: Need higher-tier plans or session transfer across logins to avoid mid-flow hard stops.
VERBATIM_BEGIN
Hitting the 5-hour limit on Claude Code and having to either wait, or switch to a different account and ditch your working sessions is the most disruptive thing to productivity. They really need some higher priced subscription plans like $1 - 2k per month or so, or a way to transfer a session to a different login.
VERBATIM_END
===END===
===POST===
claim_id: johhansantana-5-hour-usage-halved-2026-08-03
source: claude-code
author: @JohhanSantana
primary_url: https://x.com/JohhanSantana/status/2084338698875699533
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: Operator believes Claude Code 5-hour usage allowance was quietly cut roughly in half from about $100.
operator_consequence: Recalibrate session planning if effective 5-hour spend capacity has dropped.
VERBATIM_BEGIN
did they lowkey reduced claude code usage? 

I was able to get $100 in the 5 hour limit but now it's like half that...
VERBATIM_END
===END===
===POST===
claim_id: thibaultmean-codex-cheaper-parallel-than-cc-2026-08-03
source: claude-code
author: @ThibaultMean
primary_url: https://x.com/ThibaultMean/status/2084338941411397890
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: Operator prefers Codex with GPT Sol over Claude Code Fable/Opus because parallel Claude Code sessions explode token cost.
operator_consequence: Parallel multi-session Claude Code work may be costlier than Codex alternatives.
VERBATIM_BEGIN
The more I use Codex with GPT Sol, the more I realize how good it is in comparison to Claude Code with Fable/Opus.
And I do not have to worry about the exponential cost in tokens of running parallel sessions like CC does rn.
VERBATIM_END
===END===
===POST===
claim_id: hyraxai-system-prompt-skills-hooks-mcp-drift-2026-08-03
source: claude-code
author: @hyraxai
primary_url: https://x.com/hyraxai/status/2084338534719353287
event_date: 2026-08-03
date_precision: day
evidence_kind: third_party_commentary
claim: Hyrax notes Anthropic replaced most of Claude Code's system prompt with dynamic skills, memory, hooks, and MCP, so identical prompts differ across machines.
operator_consequence: Treat CI versus laptop Claude Code runs as non-equivalent; pin skills/hooks/MCP for reproducibility.
VERBATIM_BEGIN
Anthropic's July 24 post: over 80% of Claude Code's system prompt removed, replaced by dynamically loaded skills, memory, hooks, and MCP tools. Two runs of the same prompt on different machines are not equivalent executions.
https://hyrax.dev/blog/claude-code-silent-context-drift-ci-vs-laptop
VERBATIM_END
===END===
===POST===
claim_id: rjozefowicz-ios-simulator-control-slow-2026-08-03
source: claude-code
author: @rjozefowicz
primary_url: https://x.com/rjozefowicz/status/2084337554531156278
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: Claude Code iOS simulator control took 31 minutes and 6.7k tokens to reload an app and check a small UI flow.
operator_consequence: iOS simulator control is too slow for tight mobile dev loops until latency improves.
VERBATIM_BEGIN
claude code ios simulator control is absurdly slow

31 minutes and 6.7k tokens just to reload an app and check a small ui flow

really promising feature, but it needs to be much faster before it fits a real iOS development loop
VERBATIM_END
===END===
===POST===
claim_id: kiln3d-mcp-plugin-marketplace-install-2026-08-03
source: claude-code
author: @Kiln3d
primary_url: https://x.com/Kiln3d/status/2084331360974705080
event_date: 2026-08-03
date_precision: day
evidence_kind: third_party_commentary
claim: Kiln ships as an open-source 3D-printing MCP server installable into Claude Code via plugin marketplace.
operator_consequence: Operators can add domain MCP tools through claude plugin marketplace add without custom glue.
VERBATIM_BEGIN
13/13
Kiln is an open-source MCP server for 3D printing: design, slice, print, monitor, recover. AGPL-3.0.
`pip install --upgrade kiln3d`
In Claude Code: `claude plugin marketplace add codeofaxel/Kiln`
https://github.com/codeofaxel/Kiln
Full story: https://www.kiln3d.com/blog/kiln-1-3-0-to-1-3-2
VERBATIM_END
===END===
===POST===
claim_id: top84-mattpocock-skills-playbooks-2026-08-03
source: claude-code
author: @TOP84
primary_url: https://x.com/TOP84/status/2084330966709842303
event_date: 2026-08-03
date_precision: day
evidence_kind: third_party_commentary
claim: Matt Pocock skills playbooks for Claude Code (grill/TDD/review) are promoted via npx skills add.
operator_consequence: Operators can install process playbooks as skills rather than relying on model defaults alone.
VERBATIM_BEGIN
A GitHub repo called "skills" hit 196K stars: free playbooks that make Claude Code disciplined — grill before you build, TDD while building, review before shipping.

`npx skills add mattpocock/skills`

The model isn't the edge. The process is.

What needs discipline, not AI?
VERBATIM_END
===END===
===POST===
claim_id: jamie-within-cherny-delete-claude-md-simple-2026-08-03
source: claude-code
author: @Jamie_within
primary_url: https://x.com/Jamie_within/status/2084340182929588377
event_date: 2026-08-03
date_precision: day
evidence_kind: third_party_commentary
claim: Cherny's reported advice is to periodically delete CLAUDE.md, skills, and hooks; CLAUDE_CODE_SIMPLE=1 strips system prompts as a probe.
operator_consequence: Use CLAUDE_CODE_SIMPLE=1 and periodic context wipes to test whether harness overlays are helping or hurting.
VERBATIM_BEGIN
Cherny's advice to Claude Code users: every six months delete your CLAUDE.md, your skills, your hooks, and see what the model does.

`CLAUDE_CODE_SIMPLE=1` strips all system prompts as a cheap probe. He says the model is slightly more intelligent without them.
VERBATIM_END
===END===
===POST===
claim_id: jamie-within-cut-claude-md-709-to-72-2026-08-03
source: claude-code
author: @Jamie_within
primary_url: https://x.com/Jamie_within/status/2084340178903081320
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: Operator cut CLAUDE.md from 709 to 72 lines the same day Cherny said Anthropic deleted over 80% of Claude Code's system prompt for Opus 5.
operator_consequence: Aggressive CLAUDE.md pruning mirrors Anthropic's own prompt subtraction strategy.
VERBATIM_BEGIN
Same day I cut mine 709 → 72 lines, Boris Cherny said Anthropic deleted over 80% of Claude Code's system prompt for Opus 5.
That timing was luck. The reason both needed cutting is not.
VERBATIM_END
===END===
===POST===
claim_id: pkpk-same-unity-mcp-game-dev-2026-08-03
source: claude-code
author: @pkpk_same
primary_url: https://x.com/pkpk_same/status/2084338134498869652
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: Operator uses Claude Code with Unity MCP for game development and feels self-reflection loops make the human unnecessary.
operator_consequence: Unity MCP plus Claude Code can own iterative game-dev action loops with less human steering.
VERBATIM_BEGIN
Claude code、Unity MCPを使ってゲーム作ってるだけど、自分で反省して行動するの、ほんとにあたし要りませんやん
VERBATIM_END
===END===
===POST===
claim_id: camilleroux-multi-agent-mcp-scale-guide-2026-08-03
source: claude-code
author: @CamilleRoux
primary_url: https://x.com/CamilleRoux/status/2084338525932024025
event_date: 2026-08-03
date_precision: day
evidence_kind: third_party_commentary
claim: French guide pushes Claude Code users toward multi-agents, MCP, and scaling beyond basics.
operator_consequence: Post-basics operators should plan multi-agent and MCP setup as the next capability layer.
VERBATIM_BEGIN
Tu utilises déjà Claude Code ? Voici comment aller plus loin : agents multi, MCP, passage à l'échelle
VERBATIM_END
===END===
===POST===
claim_id: ditorodev-heavy-session-trashes-laptop-2026-08-03
source: claude-code
author: @ditorodev
primary_url: https://x.com/ditorodev/status/2084338534069027182
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: One heavy Claude Code session is enough to trash the operator's laptop.
operator_consequence: Heavy local sessions may need remote/tmux hosts or resource caps to protect the primary machine.
VERBATIM_BEGIN
1 heavy Claude code session is enough to trash my laptop
VERBATIM_END
===END===
===POST===
claim_id: aicultureworld-switched-from-antigravity-2026-08-03
source: claude-code
author: @AICultureWorld
primary_url: https://x.com/AICultureWorld/status/2084336612008190279
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: Operator left Antigravity after a sudden weekly usage drop and stuck with Claude Code.
operator_consequence: Competing harnesses that cut weekly usage push users toward Claude Code as the stable default.
VERBATIM_BEGIN
I used anti gravity for a few weeks. They dropped the weekly usage out of the blue. Switched to Claude code and never looked back.
VERBATIM_END
===END===
===POST===
claim_id: altarnik88-banned-from-claude-code-2026-08-03
source: claude-code
author: @altarnik88
primary_url: https://x.com/altarnik88/status/2084336279118848470
event_date: 2026-08-03
date_precision: day
evidence_kind: operator_report
claim: Operator agrees on Fable quality but stays on Sol because they were banned from Claude Code.
operator_consequence: Account bans force full harness migration regardless of model preference.
VERBATIM_BEGIN
Про Fable согласен, но sonnet это кринж. Но как и раньше я буду работать на Sol😎, потому что меня забанил Claude Code
VERBATIM_END
===END===
