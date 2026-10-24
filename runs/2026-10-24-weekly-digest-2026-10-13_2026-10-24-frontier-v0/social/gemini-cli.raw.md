I'll start by reading the Gemini CLI watchlist identity and the discovery-lane rules, then search X only for posts about that canonical repo.I'll load the Gemini CLI contract, maintainer handles, and any existing sweep notes for this window so the identity check stays tight.I'll pull official handles and last-window Gemini CLI talk, then search X inside 2026-10-13 to 2026-10-24.Previous sweeps found `@geminicli` silent and lots of name collisions. I'll search official handles, version talk, and counter-takes inside this window.Official `@geminicli` is still silent, and Taylor Mullen is posting Antigravity SDK. Next I’ll hunt operator criticism, version claims, and the merge/deprecation thread.The live thread is naming collision: Gemini API CLI versus the coding-agent CLI. I’ll fetch those threads and hunt still-shipping and operator-friction posts.I’ll page the first half of the window and chase Code Assist sunset, still-shipping, and maintainer-adjacent naming posts.I have enough receipted leads. Compiling maintainer-adjacent identity posts and operator still-shipping/friction posts, then the coverage note.===POST===
handle: @aiedge_
post_url: https://x.com/aiedge_/status/2113688660369617154
event_date: 2026-10-23
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: A recap account billed Google's new media/API wrapper launch as Gemini CLI going live and pointed people at the gemini-api-cli repo.
why_it_matters: Operators who follow recap accounts can install the wrapper, think the coding agent is back, and never notice they are on a different binary.
===END===
===POST===
handle: @LyalinDotCom
post_url: https://x.com/LyalinDotCom/status/2113689427306271171
event_date: 2026-10-23
date_precision: day
kind: claim
stance: criticism
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A former Gemini CLI product lead replied that the recap had used the wrong name and that the launch was a different product.
why_it_matters: If even recap accounts collapse the two CLIs, an operator cannot treat a Gemini CLI headline as a coding-agent event until the repo is checked.
===END===
===POST===
handle: @JackWoth98
post_url: https://x.com/JackWoth98/status/2113597146758856716
event_date: 2026-10-23
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A Google DeepMind engineer said the new Gemini API CLI is a wrapper you hand to some other agent for media and API calls, not a coding agent of its own.
why_it_matters: Teams that heard Google shipped another Gemini CLI still have to decide whether google-gemini/gemini-cli is the binary they run, or whether they were looking at a sidecar.
===END===
===POST===
handle: @JackWoth98
post_url: https://x.com/JackWoth98/status/2113634434104606965
event_date: 2026-10-23
date_precision: day
kind: voice
stance: comparison
frameworks: gemini-cli, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He analogized the new CLI to Anthropic's API wrapper versus Claude Code, arguing it did not deserve a separate product name because it is just an API wrapper.
why_it_matters: The Claude Code versus API-CLI split is the map operators already have, so this is the comparison that stops a mistaken gemini-cli upgrade.
===END===
===POST===
handle: @JackWoth98
post_url: https://x.com/JackWoth98/status/2113637850600104009
event_date: 2026-10-23
date_precision: day
kind: voice
stance: criticism
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: He accepted that putting CLI in the name caused the mix-up, called that on his team, and asked for clearer name ideas while the wrapper is still in preview.
why_it_matters: A Google engineer treating the collision as their fault is evidence the coding-agent CLI's public identity is still load-bearing, not a settled rename.
===END===
===POST===
handle: @oviniciuslana
post_url: https://x.com/oviniciuslana/status/2113316872817197433
event_date: 2026-10-22
date_precision: day
kind: voice
stance: criticism
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: A user told the Gemini API CLI launch thread that naming it that way is confusing because Gemini CLI was already deprecated.
why_it_matters: The deprecation story is now the default public read, so a similarly named preview will be treated as a revival or a replacement until someone checks the repo.
===END===
===POST===
handle: @DeyuWu00
post_url: https://x.com/DeyuWu00/status/2113406540606804081
event_date: 2026-10-22
date_precision: day
kind: voice
stance: question
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They asked why Google killed Gemini CLI for Antigravity's CLI and then shipped another Gemini-branded CLI, and whether the media features should just live inside agy.
why_it_matters: If the remaining gemini-cli users are supposed to be on Antigravity, a third CLI is a routing problem, not a feature, until someone says which binary owns which job.
===END===
===POST===
handle: @KuritoL
post_url: https://x.com/KuritoL/status/2113757668733317481
event_date: 2026-10-23
date_precision: day
kind: voice
stance: comparison
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They said they nearly panicked at another Gemini CLI headline after just moving to Antigravity, then concluded the new binary is a toolbox for other agents rather than a replacement coding harness.
why_it_matters: The panic-then-correction is the operator path this week: a headline looks like a forced migrate, and only the layer check tells you to leave gemini-cli or agy alone.
===END===
===POST===
handle: @mohabbuilds
post_url: https://x.com/mohabbuilds/status/2110136328012664979
event_date: 2026-10-13
date_precision: day
kind: claim
stance: criticism
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said the June cutoff hit free, AI Pro, and AI Ultra individual logins, and that API-key and Gemini Code Assist users were still served, so the first MCP debugging step is checking how you authenticate.
why_it_matters: The public line that Gemini CLI is dead is the wrong diagnosis if the binary still runs for API-key and Code Assist seats, and the wrong auth is what looks like a dead install.
===END===
===POST===
handle: @mohabbuilds
post_url: https://x.com/mohabbuilds/status/2110136444652052943
event_date: 2026-10-13
date_precision: day
kind: claim
stance: criticism
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They said Gemini CLI recognizes a remote MCP server by a url key and errors if you also paste a transport field that other clients accept, so a working config from another harness does not port.
why_it_matters: A multi-agent laptop that copies MCP JSON between Claude Code, Codex, and Gemini CLI will fail on this client first, and the failure looks like auth or deprecation.
===END===
===POST===
handle: @OU82iOchLaxBC0h
post_url: https://x.com/OU82iOchLaxBC0h/status/2110320440732442878
event_date: 2026-10-14
date_precision: day
kind: claim
stance: frustration
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They reported a Gemini CLI sign-in failure on the individual Code Assist path that told them to migrate to Antigravity, and said the CLI would not run for them.
why_it_matters: This is a live client-side refusal, not a rumor, so an operator still on consumer Code Assist should expect the binary to bounce before any MCP or model work starts.
===END===
===POST===
handle: @ngyuki
post_url: https://x.com/ngyuki/status/2109873938629357838
event_date: 2026-10-13
date_precision: day
kind: voice
stance: question
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They pointed at Google's Code Assist Standard/Enterprise sunset-by-2027 docs and asked whether Gemini CLI would stop working as a result.
why_it_matters: If Code Assist is the remaining paid on-ramp, that sunset is the date an enterprise gemini-cli seat has to re-auth or move, and the question is still open on X.
===END===
===POST===
handle: @foukation
post_url: https://x.com/foukation/status/2109952659902067157
event_date: 2026-10-13
date_precision: day
kind: claim
stance: criticism
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They said Code Assist Standard and Enterprise stopped taking new subscriptions from 9 October, with renewals only through 2026, and tied that to the earlier personal Gemini CLI cutoff, arguing Google is folding coding tools into Gemini Enterprise without a migration path.
why_it_matters: A team that kept gemini-cli because Code Assist still authenticated now has a calendar date on that path, and no claimed converter for MCP or settings.
===END===
===POST===
handle: @7shi
post_url: https://x.com/7shi/status/2111003546976235859
event_date: 2026-10-16
date_precision: day
kind: voice
stance: comparison
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They said they used Gemini CLI for summarization until the product ended, found early Antigravity CLI too rough, moved to OpenCode with free DeepSeek, and only later came back to Antigravity once it settled.
why_it_matters: The June cutoff did not produce a one-step migrate; operators who needed the old CLI for non-coding jobs had to park on another harness until agy stopped feeling unfinished.
===END===
===POST===
handle: @ogochan
post_url: https://x.com/ogochan/status/2110219358421360898
event_date: 2026-10-14
date_precision: day
kind: voice
stance: criticism
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Against a week of Gemini 4 coding hype, they said their actual Gemini CLI experience was bad enough that closed-model strength claims no longer move them, and that DeepSeek on OpenCode was enough.
why_it_matters: For people who lived on this harness, the model launch is not a reason to come back; the CLI itself is the remembered defect.
===END===
===POST===
handle: @Prayag12B
post_url: https://x.com/Prayag12B/status/2112505156088775104
event_date: 2026-10-20
date_precision: day
kind: claim
stance: criticism
frameworks: gemini-cli, claude-code, cursor
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said a repo that works in Cursor and Claude Code often fails in Gemini CLI because the default context file is GEMINI.md and AGENTS.md is ignored unless you list extra filenames in workspace settings.
why_it_matters: A shared AGENTS.md is not a shared contract on this client until that setting exists, so a multi-harness repo can look empty to Gemini CLI with no error.
===END===
===POST===
handle: @setupbay
post_url: https://x.com/setupbay/status/2112527436726583369
event_date: 2026-10-20
date_precision: day
kind: claim
stance: comparison
frameworks: gemini-cli, antigravity, claude-code
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They added that Claude Code also skips AGENTS.md unless you mention it from CLAUDE.md, and that Antigravity CLI reads AGENTS.md natively if you are leaving Gemini CLI.
why_it_matters: The migrate-to-agy pitch is not just a new binary; it changes which instruction file is honored without extra config, which is easy to miss if you copy a Gemini CLI setup.
===END===
===POST===
handle: @devtoollab
post_url: https://x.com/devtoollab/status/2111879332893434289
event_date: 2026-10-18
date_precision: day
kind: claim
stance: criticism
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They said copying Gemini CLI MCP config into Antigravity's CLI breaks every remote server because url and httpUrl become serverUrl, and they put a 40-seat Code Assist versus Gemini Enterprise price next to that tax.
why_it_matters: The migration is not a rename of the same JSON; a pasted MCP block will fail closed, and the seat math is a separate decision from whether the agent still runs.
===END===
===POST===
handle: @owerasoftware
post_url: https://x.com/owerasoftware/status/2113624744104808548
event_date: 2026-10-23
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said Gemini CLI already skipped project settings in an untrusted folder, but a command could still write that empty view back over the file, and the new behavior is to keep those settings read-only until the folder is trusted.
why_it_matters: Untrusted is not the same as untouched; CI and first-run clones can still lose a committed settings file on older builds even when the CLI claimed it was ignoring the folder.
===END===
===POST===
handle: @ayyazdev
post_url: https://x.com/ayyazdev/status/2113764073472987366
event_date: 2026-10-23
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said 0.65.0 stopped gemini mcp add in an untrusted folder from wiping every existing key in that repo's settings file, and told people who lost an MCP entry to check git history.
why_it_matters: If you added a remote server in a folder you had not trusted, the missing keys may be a local overwrite rather than a server outage, and the bump is what stops it happening again.
===END===
===POST===
handle: @i17s_inc
post_url: https://x.com/i17s_inc/status/2112943776889233706
event_date: 2026-10-21
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They described stable 0.65.0 as blocking workspace-settings writes in untrusted folders and as fixing a resumed session that deleted its history if you quit immediately, and they warned the change is not a read-only tree, that trusted-folder protection is documented off by default, and that the README still sends unpaid users to Antigravity.
why_it_matters: Remaining operators can take the patch without treating the whole workdir as locked, and they should not read 0.65 as a consumer revival while the unpaid banner is still there.
===END===
===POST===
handle: @gzonelee
post_url: https://x.com/gzonelee/status/2112733107980026054
event_date: 2026-10-21
date_precision: day
kind: claim
stance: comparison
frameworks: gemini-cli, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They treated interrupt and resume as the way they pick a coding CLI, then listed 0.65.0 items they care about: untrusted settings locked, duplicate tool-response turns on resume, history surviving a fast quit, Ctrl-C no longer wrecking the session, OAuth retry loops, custom OTLP headers, and extensions that keep loading after one allow-list failure.
why_it_matters: The people still on this binary are judging it as a live harness on stop/start behavior, not as a sunset page, which is the opposite of the week's naming-collision story.
===END===
===POST===
handle: @GamingEpit1503
post_url: https://x.com/GamingEpit1503/status/2111804707773518261
event_date: 2026-10-18
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said 0.64.0, dated 13 October, fixes headless folder-trust reporting and serializes same-file tool edits so parallel writes do not drop updates, and they pointed at the GitHub tag.
why_it_matters: Headless CI that trusts a folder, or agents that edit one file from two tools, are the 0.64 checks; that is a still-shipping stable, not an archive.
===END===
===POST===
handle: @CLIhub
post_url: https://x.com/CLIhub/status/2113163876900450307
event_date: 2026-10-22
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said a 0.67.0-nightly build can bridge IDE companions into container sandboxes over exec stdio, plus agent-loading and flag fixes.
why_it_matters: If that nightly is real, an operator running the IDE companion inside a sandbox is on a different channel than 0.65 stable, and the feature will not be there until it is tagged.
===END===
===POST===
handle: @Ringo92_AI
post_url: https://x.com/Ringo92_AI/status/2111184482841534902
event_date: 2026-10-16
date_precision: day
kind: claim
stance: comparison
frameworks: gemini-cli, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They timed four coding agents opening on a clean Linux box and said Gemini CLI 0.64.0 took about 1.3 seconds against under a tenth of a second for Claude Code and Codex, including on --version.
why_it_matters: Cold start is paid on every scripted invoke; a 14x open cost is a reason to keep this CLI off a tight loop even if the account still works.
===END===
===POST===
handle: @Ringo92_AI
post_url: https://x.com/Ringo92_AI/status/2111230621586747529
event_date: 2026-10-16
date_precision: day
kind: claim
stance: comparison
frameworks: gemini-cli, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: On the same clean-box method they said Gemini CLI 0.64.0 peaked around 207-225 MB just to open, versus about 51 MB for Codex and 138 MB for Claude Code.
why_it_matters: Memory at idle is the tax for running several agents side by side; this is a reason to keep Gemini CLI off a shared CI runner that already hosts Codex.
===END===
===POST===
handle: @wtnabe
post_url: https://x.com/wtnabe/status/2113780267752292557
event_date: 2026-10-23
date_precision: day
kind: voice
stance: comparison
frameworks: gemini-cli, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: On Anthropic open-sourcing Claude Code's sandbox runtime, they recalled that Gemini CLI had a sandbox relatively early and treated a generic sandbox as the useful part.
why_it_matters: The week's sandbox conversation is being told as a Claude Code event; an operator who already locked Gemini CLI down may already have the older, narrower version of that control.
===END===
===POST===
handle: @tomoking_ai
post_url: https://x.com/tomoking_ai/status/2113102962494951434
event_date: 2026-10-22
date_precision: day
kind: claim
stance: praise
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They told people still pasting the same rules every session to put them in a home GEMINI.md and a project GEMINI.md and to inspect what is loaded with a memory command.
why_it_matters: Operator tips are still being written for this client in late October, which is a different picture from the deprecation headlines, and the load order is what those tips assume.
===END===
COVERAGE_NOTE: Identity: only google-gemini/gemini-cli (npm @google/gemini-cli). Dropped google-gemini/gemini-api-cli (Gemini API CLI / gemini-api), Gemini 4 Argon model reviews (@theo, @signulll, @itsnoahd), Antigravity-only posts (@_mohansolo quotas, @shengzheyao seasonal themes, @IfeeDev compaction), Gemini App/desktop MCP, Jules, AI Studio agentic-video, astrology Gemini, skill/MCP marketplace name-drops, Grok-bot install lists, and @heyedzon/codingagentwatch quota posts that still advertised a free 1000 req/day Google login after the June cutoff. Searched 2026-10-13 to 2026-10-25 (until exclusive) via from:geminicli, from:ntaylormullen, from:JackWoth98, from:LyalinDotCom, from:_mohansolo, from:shengzheyao, from:ethereaglehq, from:mohabbuilds, from:oswrav/CrossTechSol/icanvardar/IfeeDev/air__security, from:GoogleAIStudio/GoogleCloudTech/GoogleDeepMind/GoogleAI, keyword "gemini cli"/gemini-cli/@geminicli, google-gemini/gemini-cli, Plugin4Shell/CVE/YOLO/sandbox/GEMINI.md/AGENTS.md/MCP/trusted folder/headless/deprecated/"still using"/Code Assist/0.64/0.65/0.66/nightly, Japanese 使ってる/廃止/移行/サンドボックス, and semantic still-shipping versus dead. Official @geminicli had zero in-window posts. Listed creator @ntaylormullen posted only Antigravity SDK (v0.1.22, Gemini 4 Argon). Closest Google-staff talk is former Gemini CLI product lead @LyalinDotCom and AI Studio MTS @JackWoth98, both on the API-CLI naming collision, not on this repo. @ethereaglehq posted in-window but not about this CLI. Plugin4Shell/CVE-2026-12537/YOLO/seatbelt/extension-install had no gemini-cli hits (TrustFall hits were games). Could not paginate the full Latest stream; skill-spam and recap accounts drown English operator bugs in the second half of the window. Thin: current gemini-cli maintainers are silent; live defect reports are thin versus the naming-collision thread; 0.65 trusted-folder writeup is mostly changelog restatement; Japanese/Chinese still-using and Code Assist sunset talk is stronger than English; enterprise/Vertex remaining-on-ramp is a question (@ngyuki) not a maintainer answer.
