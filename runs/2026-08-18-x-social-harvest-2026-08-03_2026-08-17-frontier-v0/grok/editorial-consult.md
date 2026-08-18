I'll read the house authorities and the actual threads, then give judgment on structure, outsider-framing risk, and where I think the Pi story is real versus forced.There's already draft work for both windows. I'll read those issues and the actual threads so I can judge posts as conversation, not as cards.I'll pull the live threads and the two window journals so I can judge posts as conversation, not as cards.The drafts are still journals. I'll fetch the load-bearing threads next so I can judge them as conversation, not as cards.The Pi/DSH thread is a real conversation, not three isolated posts. I'll pull the rest of the load-bearing replies and the window-1 approval thread.Thariq's reply to Simon ties auto mode to WebFetch. I'll pull the remaining structural posts and the original auto-mode thread.The two live threads that actually structure these windows are not the ones in the working assignments. I am going to disagree with both ledes, and with the read of one post in particular.

## 1. The load-bearing posts

### Window 1: the seat changed, and the dialog was already lying

Do not open on EliaAlberti.

That is the working assignment in the catch-up plan, and it is the wrong structural choice. Elia's two replies are 63 and 54 views. They are a precise critique sitting under a maintainer reply that almost nobody in the thread continued. If this issue opens there, it will read as a publication that went looking for the person who already agreed with it. The house shape you want, the one "Rules Became Judgment" already proved, is the opposite: open on the high-visibility claim, then let a receipt turn it.

**Lede: Lydia, 2026-08-08, "dsp just doesn't check at all."**
[https://x.com/lydiahallie/status/2086117097923625332](https://x.com/lydiahallie/status/2086117097923625332)

This is the week people inside Claude Code actually had. She is answering a user who asked the only question that matters: how is auto safer than `--dangerously-skip-permissions`? Her answer is the official posture of the window: skip does no checking; auto still blocks unsolicited destructive work and scans tool results; for most tasks you still will not see prompts.

Capture the parent with it, even though it is not in the 41. On August 7 she had already said auto is safer than skip *and* safer than clicking yes, quoting the ClaudeDevs study: 1,053 testers caught a clearly dangerous prompt 13.6 percent of the time, closer to 5 percent after 50 prompts; auto blocked the same commands 89 percent, flat across session length. That study is what 90k people saw her stand on. Quoting only the August 8 reply makes you look like you arrived in the middle of the thread.

**Frame it against:** the v2.1.221 and v2.1.223 holes (the dialog could be shown less than what ran), Antigravity 1.1.11 (a malformed allowlist entry auto-approved every command; MCP admin controls skipped the first five minutes of every session), and Codex `--approve-for-me` (a model in the approval seat, named honestly).

Why this post and not a louder complaint: the week was not "users discovered the prompt was lying." The week was a vendor telling operators that taking the click away is the safety improvement. That is the claim a receipt can turn. A complaint cannot.

**Turn of the approval section: Elia, both posts, 2026-08-08.**
[https://x.com/EliaAlberti/status/2086128186929066255](https://x.com/EliaAlberti/status/2086128186929066255)
[https://x.com/EliaAlberti/status/2086128269506510859](https://x.com/EliaAlberti/status/2086128269506510859)

This is the correct spot for him. He is answering Lydia, in the same thread, with the mechanism the official post leaves out: chat-stated limits are not stored; the classifier rereads the transcript; compaction can drop "don't push" with no signal; the docs themselves tell you to write a deny rule if you want a hard guarantee.

Do not write that he "described the mechanism before the changelog admitted it." He did not. He described a memory problem in the classifier. The changelog admitted a display problem in the dialog, a fail-open allowlist, and a five-minute MCP skip. Those rhyme. They are not the same bug. The honest sentence is: he named the layer the vendor is asking you to trust, and said it is the soft one.

**Turn of the other half: Lydia, 2026-08-03, `/fork` now copies the session.**
[https://x.com/lydiahallie/status/2084315112840810897](https://x.com/lydiahallie/status/2084315112840810897)

If W1 is only approval holes, you will publish another defect log and fail the both-halves bar you already wrote down. This post is the capability that week actually shipped and explained: `/fork` keeps you working; the old in-session reporter is now `/subtask`. A reply in the thread said the quiet part: `/fork` always felt like it should let you keep moving, and it did not.

**Frame it against:** `AGENTS.override.md` loading before project trust, and standard-trust agents getting default-open write to any company-visible issue they can read. More surface for the agent to operate, on purpose, in the same week the approval seat is being handed to a classifier. That is one story, not two.

I would not give `/fork` the lede. It is a feature announcement. It does not set up the argument. It earns the middle because it is the week's actual redesign of human attention, and because 49k people saw it.

**Do not use as structure:** OpenHands "don't fork" (vendor copy, 900 views), Can's "we have not followed Pi since March" (81 views, a one-line reply, a profile fact, not an issue spine), Fred's Flue/Computer split (good sentence, wrong week to hang this argument on), hunvreus almost-moving to Flue (261 views, a shrug).

**Last line: Simon, 2026-08-10, Haiku is his least favorite model and WebFetch still appears to use it.**
[https://x.com/simonw/status/2086931955539742985](https://x.com/simonw/status/2086931955539742985)

Capture Thariq's reply with it: they are removing Haiku from WebFetch *now that automode is default*.

August 10 sits on your window boundary. Put this in W1 anyway. It is the argument landing in someone else's mouth. Once the human is out of the click, the model in the seat can also be a worse, cheaper model, and the team will say so in public as a consequence of the default. That is the sentence a reader repeats. It also hands W2 its opening condition: auto is no longer a mode you pick.

If you refuse the boundary-date, close on Elia's couplet instead: the conversational layer is the soft one, and most people will assume the opposite. That is a real closer. It is smaller.

### Window 2: do not open on Steinberger leaving Codex

The catch-up plan wants W2 to open on Peter moving his work off Codex "because talking to the agent spun up cloud sessions he did not ask for," framed against npm `latest` frozen at 0.147.0.

That is a misread of the post, and people in the thread will see it immediately.

What he actually wrote: he moved from Codex to OpenClaw. The killer feature is that he can talk to the agent and it spins up cloud sessions he can iterate on from anywhere. He is advertising a feature of his own product. A reply asks him to explain, because that person uses Codex and Claude Code for production and OpenClaw for hobby. Nobody in that thread is being ambushed by cloud sessions. The plan's phrase "he did not ask for" is not in the post. You cannot hang an issue on a sentence you invented.

It is also the wrong scale. 639 views, a casual reply. And "the OpenClaw maintainer uses OpenClaw" is not against consensus. Drop the against-consensus tag.

**Lede: Armin, 2026-08-14, the first new harness in a while that made him want to reopen Pi's choices.**
[https://x.com/mitsuhiko/status/2088189145952731317](https://x.com/mitsuhiko/status/2088189145952731317)

This is what the fortnight was. 538k views. A Pi maintainer, not a DeepSeek person, saying a new runtime is unfinished and still the first thing that pulled him back to the design. Tianyi's 0.1.0 drop is the louder vendor post (388k). Armin's is the one that starts an argument instead of a launch thread.

**Frame it against:** everything in DSH is a plugin, including the components that enforce the limits; the approval gate is a waterfall a plugin can prepend to; nothing authenticates the Web UI on 127.0.0.1:3080, and the `/api` fence says so in its own header comment. He is inspired by a kernel that does not privilege its own gate.

Why this and not Tianyi's announcement: a launch post plus a changelog is a press release. A builder saying it made him want to reopen his own stack is the human stake. The receipt then does the unkind work.

**Turn of the architecture section: Mario, 2026-08-14, "i know of no single extension that was written by a human."**
[https://x.com/badlogicgames/status/2088219926494421230](https://x.com/badlogicgames/status/2088219926494421230)

He is not dunking on DeepSeek. He is correcting a specific, widely bookmarked essay (Limbo / `@limbopeng`, 53k views, 508 bookmarks) that said Pi extensions are static and human-written while DSH uniquely lets the agent grow capabilities at runtime. A reply in Chinese is just "the author came to prove it." That is how the thread reads: a factual correction from the person who would know.

Capture the Limbo essay even though it is not in the 41. Quoting Mario's correction without the claim he is correcting is how you sound like you walked into the room for the last sentence.

**Frame it against:** the DSH plugin kernel, and against Pi's own August 17 post (below). Mario's claim is voice until you check it. If you print it as a product fact, you need a primary source. If you cannot get one, print it as what he said.

Use his follow-up in the same hour, not as a second card, as the completion: DSH's architecture is neat; both solve self-modifying agents, with different trade-offs, not a new category.
[https://x.com/badlogicgames/status/2088234017808089556](https://x.com/badlogicgames/status/2088234017808089556)

Tianyi's reply to Armin belongs in this section as voice, not as a third thesis: DeepSeek researchers already daily-drive Pi; DSH reused Pi's non-DeepSeek adapter. The thread read that as open source working. Do not frame it as a concession. It is a thank-you quote-tweet.

**Turn of the channel section: Teknium, 2026-08-17, the binary is on that day's v0.20.3 and the desktop GUI is still on v0.17.0.**
[https://x.com/Teknium/status/2089451688365302185](https://x.com/Teknium/status/2089451688365302185)

This is the frozen-default thesis in a maintainer's own debugging session. He is not making a point about the industry. He is telling one user to update through the GUI rather than only the remote gateway, because the two surfaces have drifted.

**Frame it against:** Claude Code `stable` seven releases behind `latest`, so this window's permission-bypass and credential fixes are not on it; Codex with no stable for ten days, nineteen 0.148.0 alphas, 422 commits, npm `latest` frozen at 0.147.0; Agent Zero's SSRF fix lost in a plugin refactor and shipped broken through 11 stable releases.

Why this and not reefwing's classifier dump: reefwing is 70 views of a forensic blog-tweet. The 17 / 65 / 1 split is a claim and must be adjudicated before it appears as a number. It is useful in the operator brief if it survives. It is not what the week sounded like. Teknium is a person colliding with two version numbers on the same product, which is the lived form of your thesis.

**Last line: Pi's official account, 2026-08-17, event-intercept extensions, with sample code that forces a confirm before `rm -rf`.**
[https://x.com/pidotdev/status/2089313792014381321](https://x.com/pidotdev/status/2089313792014381321)

End of the window. 34k views. After four days of arguing whether DSH invented self-modifying plugins, Pi posts a human-facing TypeScript snippet that intercepts a dangerous tool call.

**Frame it against:** DSH's approval gate being a plugin a later plugin can prepend to, and against fifteen destructive Windows commands that passed approval silently, and approved exec running different bytes than the ones you approved.

The close is not "Pi already had this." The close is: the interesting question was never who has plugins. It is whether the gate is privileged over them. A reply in that thread already said the quiet part: agents write bash where the dangerous command is conditional, and a string check will not see it.

If you want the Bitter Lesson close instead, use Armin's August 16 post: he barely uses Claude Code, deleted the Claude-specific files, and pointing it at shared `AGENTS.md` was good enough to debug a possible Pi regression.
[https://x.com/mitsuhiko/status/2088900774466105797](https://x.com/mitsuhiko/status/2088900774466105797)
Frame that against W1's `AGENTS.override.md` loading before trust, and against Hermes now making writes to `AGENTS.md` / `CLAUDE.md` / `SOUL.md` always stop for a human. The portable file is how the harness becomes replaceable, and it is also the new write surface. I would still close on the `rm -rf` intercept. It is the week's argument in code.

**Use once, not as spine:** verysmallwoods on DSH pulling engineers back from natural-language skills into writing plugins. That is a real observation and a good sentence inside the architecture section. It is 2k views and it is not the turn.

**Do not use as structure:** Steinberger leaving Codex; Steinberger on markdown memory (that one is a real 20k-view reply, and it is a product pitch for Claw's web UI); reefwing; Querisity's token complaint (355 views under a 118k-view "Codex is draining 2x" post; if you want the spend story, the parent is the conversation); doodlestein's Flywheel aside (he is talking to himself about a physics synth).

## 2. Where this would read as an outsider

The working theses are changelog theses. Both are true. Neither is what those weeks felt like to the people in them.

**Window 1.** A practitioner scrolling Claude Code that week was not thinking "the approval prompt stopped describing the action." They were thinking: Anthropic is about to make auto the default, they have a study that says you are worse at the prompt than the classifier, and some of us have been on `--dangerously-skip-permissions` since last October and will not be moved. Lydia's August 8 reply is a sales conversation with a skeptical user. Elia's reply is a good engineer in the same thread. Your findings are a third conversation, conducted in changelogs, that almost nobody in that thread was having.

If the lede is "the prompt came apart from the action," a Claude Code user will think you spent the week in `git log`. The native sentence is: they took the click away because they measured you missing the dangerous one, and in the same fortnight the dialog you would have been clicking on could hide part of the command.

One more outsider tell, specific to this conversation: if you explain that most people bypass the prompts, you will sound like a visitor. That is settled in this crowd. What is not settled is whether a classifier that rereads the transcript is a wall.

**Window 2.** This one is worse. From August 13 to 17 the English and Chinese harness timeline was one event: DeepSeek shipped a 0.1.0 developer preview, Armin took it seriously, Mario showed up to correct the architecture essays, Tianyi said their own researchers already live in Pi, and a lot of Chinese builders started writing Cordis plugins. That is the week.

"The default channel stopped moving" is what you learned by resolving git ancestry. It is the correct Operator Brief. It is not the editorial. If you title and lede the issue as a story about npm `latest` and Claude Code `stable`, a person who lived that week will think you missed DeepSeek shipping a harness.

The catch-up plan already has the shape of the miss. It took a 538k-view argument among named maintainers and filed it as "a candidate for a section," then assigned the lede to a 639-view founder pitch that it also misquoted. That is the outsider move in one paragraph: the publication describes a community from the changelog, and uses the conversation as color.

A smaller tell: treating the Chinese posts as spice around the English maintainers. alading22's sage-versus-packer metaphor got 38k views and 78 replies, and the first serious reply said the diagram is unfair, the left side drawn more complex on purpose. Limbo's essay is the careful version of the same contrast and is what Mario is actually answering. If those appear as pull-quotes under Armin, you are touring the week. If Mario is answering Limbo, you are in it.

**Both windows.** "We" as a publication that discovered auto mode, plugins, or `AGENTS.md` will read as costume. These people already have those words. Your job is the part they do not do: which release actually contains the thing, and whether the gate is privileged.

## 3. What you are missing

Yes. There is a real argument your verified findings barely touch, and the Pi thread is the middle of it, not the whole of it.

The findings are about whether authority binds: dialogs that hide work, allowlists that fail open, gates that are plugins, channels that do not move, an unauthenticated loopback UI, exec that runs different bytes. That is one spine, and it is a good one.

The conversation is about something adjacent: **who is allowed to rewrite the harness, in what language, at what time.**

Read as a single week, not as three posts:

- Limbo and alading22 say Pi subtracts to a few primitives and leaves extension to humans; DSH adds everything, then shatters it into plugins, including the loop, so the agent can grow a capability at runtime.
- Mario says that contrast is factually wrong about Pi. Pi agents already extend themselves. He does not know of a single extension a human wrote. Same problem, different trade-offs, not a new category.
- Tianyi says many DeepSeek researchers already live in Pi, and DSH reused Pi's adapter for every model that is not DeepSeek.
- Armin says DSH is unfinished and still the first new harness that made him want to reopen Pi.
- verysmallwoods, after writing DSH plugins, says the OpenClaw / Hermes / Codex / Claude Code era trained people to extend agents in natural language, and DeepSeek's plugin kernel pulls engineers back into writing code.
- Pi's official account then posts a human-written event intercept that gates `rm -rf`.
- Two days later Armin deletes `CLAUDE.md` and finds `AGENTS.md` is enough.

That is one argument. It is about whether the next harness is a thin core, a plugin kernel, or a markdown file you point any of them at. Your DSH receipts (gate is a plugin, UI is unauthenticated) touch the kernel half. They do not touch self-extension as a design bet, skills-versus-plugins as a language bet, or portable instruction files as the thing that survives the swap. The last one is this publication's actual thesis happening in public, and you have the receipt that turns it sitting in W1: `AGENTS.override.md` loads before trust is resolved.

**Is the Pi thread a real story, or three posts pushed together?**

The DSH/Pi cluster is a real story. Do not inflate it.

What is real: from August 13 to 16, a DeepSeek engineer, both Pi authors, and two Chinese architecture essays are reading each other. Tianyi quote-tweets Armin. Mario replies to Limbo. The adapter reuse is a checkable claim. The "researchers daily-drive Pi" line is voice. The "no human-written extension" line is voice until you verify it. That is enough. Write it as a section.

What is inflation: adding Can. "OMP has not followed Pi since March" is August 5, 81 views, a direct answer to "will you stay in sync?" It belongs in the OMP profile. It answers the open question you wrote into `sources/omp.yml` at intake. It is not a third vertex of the August 14 argument. Putting it in the same paragraph is the move you are already suspicious of, and you are right to be.

Worse inflation: Can's "it is not an innovation, OMP has shipped the same thing for months." That thread is about Prime Agent, RLMs, and an ipykernel. Omar Khattab is in it. If you place that sentence near DSH, you make Can look like he is dunking on DeepSeek when he is dunking on a different project. That is adjacency-as-prosecution. The house rule against pile-on exists for this. You have five Can posts in the sweep. Use at most one, and use the March-divergence line, in the OMP note, not in the DSH section.

OpenHands "try plugins before you inherit a fork" is the same missing argument from the other side, a week earlier, as vendor advice. It can nod at OMP. It cannot carry W1.

## 4. What cuts against you

A card set that only shows the timeline agreeing with the changelog is a worse artifact than one that shows the fight.

**Window 1, strongest counter: Lydia's auto-mode claim, including the study she is standing on.**

Your thesis wants the prompt coming apart from the action to be the wound. The week's official argument is that the prompt was already a bad control, that humans fail it, and that replacing the human with a classifier is the fix. If you do not give that claim its full strength, the receipts look like you are prosecuting a default people in the thread are asking for. Steelman it first: they measured testers missing a clearly dangerous command, and they are defaulting to the thing that caught it. Then say what the receipts say: the classifier is also the layer Elia just called soft, and the dialog it is replacing could already hide work.

A weaker counter, and I would not print it unless you need a user voice: in the same August 7 thread, someone says they have run skip-permissions on every session since last October and it has never let them down. That is the actual majority posture in this crowd. You do not need it if Lydia is already in the lede.

**Window 2, strongest counter: Mario, both posts.**

If the issue is "the default stopped being the thing everyone is writing about," he says the thing everyone is writing about is not a new category. If the issue is "the gate became a plugin," he says Pi agents already self-extend and the difference is trade-offs. Either thesis has to survive contact with that.

Second counter, and the one that cuts against the publication rather than against a vendor: Armin on `AGENTS.md`. The interesting move in the week is not that Claude Code `stable` is seven behind, or that Codex `latest` is frozen. It is that a Pi author deleted the Claude-specific files and the shared markdown was enough. That argues your channel thesis is real and also not what an operator should spend the week on. The portable file is the layer that survives the swap. Spend the attention there.

Do not use Steinberger-leaving-Codex as a counter to anything. It does not say what you need it to say.

## 5. The titles

Title the finding. Not the vendor.

**Window 1**

1. **Shown Less Than Ran**
   The finding, in the order an operator hits it. The dialog first, the process second.

2. **The Classifier Rereads**
   Elia's mechanism, and the thing the official safety story depends on. Narrower. Use it if you decide the issue is about auto mode rather than about the dialog.

3. **Safer Than You**
   The official claim, unadorned. A reader can dispute it. Risk: it can sound like a sneer at the study. Only if the first paragraph steelmans the 13.6 percent.

I would ship **Shown Less Than Ran**. It is the receipt, not the argument about the receipt.

**Window 2**

If you keep the channel thesis as the issue:

1. **Latest Stopped Moving**
2. **The Default Is Last Week**
3. **Named to Get Current**

If you put the issue where the week actually was, and leave the channel finding in the brief:

1. **The Gate Is a Plugin**
2. **Everything Loads First**
3. **The Kernel Has No Privilege**

I would ship **The Gate Is a Plugin**, and I would move the channel thesis to the Operator Brief. You already had to correct "you cannot install it" down to "the default is no longer the thing being written about." That correction is the brief. The issue is the kernel. A plugin can prepend to the thing that was supposed to stop it. That is the finding a reader can take to Monday, and it is also what DeepSeek just put on the table in public.

If you insist on one title that holds both halves: **The Thing You Get By Default**. It covers the install channel and the default plugin composition. It is the weaker of the honest options, because it is a container, not a finding.

---

Two corrections I would make in the plan before anyone writes a sentence.

First: Elia did not scoop the changelog. Stop writing that. It will not survive a cold read by anyone who opens both links.

Second: Steinberger did not flee unsolicited cloud sessions. He left Codex for a feature he likes in the product he maintains. Using that post as a lede framed against a frozen npm tag is two unrelated facts held together by the word "default." People in that thread will not recognize themselves, and they will be right.
