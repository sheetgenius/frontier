I'll start by reading the research protocol and Gemini CLI watchlist identity so the sweep stays on the right product.I'll load the Gemini CLI source contract and a prior social harvest so I can match the identity check and record format.I'll check the previous Gemini CLI sweep and profile for official handles, then search the new window.I'll check recent harvests and GitHub activity so I know which threads to search on X.I'll search official accounts, maintainers, and operator keywords across the window, then chase counter-takes.Official `@geminicli` is silent; I'll paginate operator search and hunt Plugin4Shell, version, and counter-take threads.I'll page earlier in the window and pull the deprecation, still-shipping, and comparison threads.I'll fill late September and chase the YOLO, sandbox, v0.61, and original-benchmark threads.A few last threads need a date and identity check before I emit records.===POST===
handle: @ethereaglehq
post_url: https://x.com/ethereaglehq/status/2102595951194206538
event_date: 2026-09-23
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said a 23 September nightly already listed Gemini 3.8 Flash in the model picker while stable was still 0.60.0, with default Flash still 3.5 and 3.5 Flash Lite as the new lite, and they would stay on 3.5 Flash until a stable build actually carried 3.8.
why_it_matters: If the picker and the served model diverge by channel, an operator who bumps nightly for a name can change evals without meaning to, and a weekly bump is the wrong test of whether 3.8 is actually on the path they run.
===END===
===POST===
handle: @thenewstack
post_url: https://x.com/thenewstack/status/2103152550417449319
event_date: 2026-09-24
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They reported that Gemini CLI 0.61.0 now stops to ask before the coding agent edits build files or runs commands shaped by untrusted content, and they framed that stop as a prompt-injection check.
why_it_matters: If that gate is real, a poisoned package.json written inside a sandbox can still run later in CI, so the prompt is doing work the sandbox does not, and operators on older stables would not have it.
===END===
===POST===
handle: @ethereaglehq
post_url: https://x.com/ethereaglehq/status/2103170614634688977
event_date: 2026-09-24
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said 0.61.0 now asks before editing build files such as package.json, Makefile, pyproject.toml, or Bazel BUILD, and before later npm, make, or cargo runs that follow those edits, with no always-allow on those prompts, and they tied the documented mode to a restricted workspace.
why_it_matters: If always-allow is actually gone on that path, YOLO and saved approvals would not cover the build-file hop, so the bump matters before the next untrusted folder, not after.
===END===
===POST===
handle: @azuki2anko
post_url: https://x.com/azuki2anko/status/2103269710561464557
event_date: 2026-09-24
date_precision: day
kind: voice
stance: frustration
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They thought a Google AI Pro subscription would cover Gemini CLI as a cheap background worker and were disappointed that the plan quota did not.
why_it_matters: That is the consumer-cutoff showing up as a billing surprise rather than a changelog line, so anyone still recommending Pro as a CLI seat needs to check how the binary actually authenticates.
===END===
===POST===
handle: @dor__ron
post_url: https://x.com/dor__ron/status/2103267508140511428
event_date: 2026-09-24
date_precision: day
kind: voice
stance: comparison
frameworks: gemini-cli, antigravity, cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They treated Gemini CLI as deprecated, said some people had moved to Antigravity, and from their own use did not think Antigravity matched Cursor.
why_it_matters: The migration pitch is being judged on the successor's quality, so a forced move off the OSS CLI is not a no-cost swap even for people who accept the deprecation story.
===END===
===POST===
handle: @ethereaglehq
post_url: https://x.com/ethereaglehq/status/2105087543314358588
event_date: 2026-09-30
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said 0.63.0-preview will run multi-step plans in non-interactive mode without a confirmation prompt, that this is the preview channel rather than weekly 0.62.0, and that they would watch one local unattended plan finish before pointing CI at it.
why_it_matters: If headless plan mode used to wait for a human and now proceeds on its own, a CI job on preview is no longer a dry run, and the human checkpoint moves to whatever permissions were set before launch.
===END===
===POST===
handle: @GoToTokyoUniv0
post_url: https://x.com/GoToTokyoUniv0/status/2105468465356349906
event_date: 2026-10-01
date_precision: day
kind: claim
stance: criticism
frameworks: gemini-cli, claude-code, codex, github-copilot-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They walked through Plugin4Shell as a pin-without-verify checkout bug across four coding agents, said Anthropic and OpenAI had patched, Copilot had not at disclosure, and Google chose to deprecate Gemini CLI instead of shipping a fix, and they argued that choice is at least honest compared with a silent fake patch.
why_it_matters: If the non-patch is real, remaining Gemini CLI plugin installs are a migrate-or-inventory problem rather than a version bump, and operators cannot treat a later stable as the security fix.
===END===
===POST===
handle: @Daniel_Farinax
post_url: https://x.com/Daniel_Farinax/status/2105732075886108817
event_date: 2026-10-01
date_precision: day
kind: claim
stance: frustration
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They installed Gemini CLI, signed in with Google, and hit an error that this client is no longer supported for Gemini Code Assist for individuals, with a migrate-to-Antigravity link, then treated that as the real product name they should have searched for.
why_it_matters: Search-install-login is still how new users find the OSS binary, so a live reject on consumer Google login is the operator-facing form of the June cutoff, independent of whether the repo is still tagging releases.
===END===
===POST===
handle: @HaStrive
post_url: https://x.com/HaStrive/status/2106206698046423534
event_date: 2026-10-03
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said v0.62.0 is a terminal and tool-call maintenance release (PTY and Windows ConPTY process teardown, terminal buffer memory, keeping the OAuth refresh token, quieter AbortError on cancel), and that changelog lines mentioning Gemini 3.8 Flash and 3.5 Flash Lite do not by themselves prove those models are open to every user.
why_it_matters: Recap bots treated 0.62.0 as a model-access drop; if the merge notes are not an access guarantee, operators still have to check /model and the served id after the bump.
===END===
===POST===
handle: @tmeire_
post_url: https://x.com/tmeire_/status/2106396202208297100
event_date: 2026-10-03
date_precision: day
kind: voice
stance: comparison
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Replying to someone surprised Antigravity still exists, they said Gemini CLI is also still around and still getting updates, and that Google moved half the users onto the new suite while Code Assist subscribers remain on the old codebases.
why_it_matters: That is the split-population read: consumer Google login is gone, the OSS repo is not, so an operator's next step depends on which auth path they are actually on.
===END===
===POST===
handle: @chipsnelson
post_url: https://x.com/chipsnelson/status/2106421570973434107
event_date: 2026-10-03
date_precision: day
kind: voice
stance: praise
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They asked whether Antigravity CLI can enter auto/YOLO without the long dangerously flag, and added that they miss Gemini CLI, which they said used to be much better than agy.
why_it_matters: The successor's permission UX is being compared unfavorably with the deprecated binary, so a migrate-for-models move can cost a toggle operators already had.
===END===
===POST===
handle: @colemickens
post_url: https://x.com/colemickens/status/2107028969346441380
event_date: 2026-10-05
date_precision: day
kind: voice
stance: criticism
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They treated a new project that still names Gemini CLI as a tell that it was vibe-coded, because in their view the tool has been deprecated and dead for almost four months.
why_it_matters: That is the prevailing death narrative colliding with a still-tagging repo, so anyone publishing Gemini CLI adapters this window will be read as out of date unless they name the auth path that still works.
===END===
===POST===
handle: @dylan_9416
post_url: https://x.com/dylan_9416/status/2107167680482709802
event_date: 2026-10-05
date_precision: day
kind: claim
stance: criticism
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said the 5 October 0.64.0 nightly had no headline feature and instead shipped reliability work (atomic state with backup restore, serialized atomic writes, reliable Ctrl+C mid-task, a hang on @ characters, and non-interactive autonomous plans since 30 September), and argued an agent that will not stop is more dangerous than one that writes prettier code.
why_it_matters: If those land, the scarce attention moves from prompting to whether an unattended loop can be interrupted and recovered, which is the opposite of treating this window as a dead-repo story.
===END===
===POST===
handle: @tuffbrownboy
post_url: https://x.com/tuffbrownboy/status/2107377427249054079
event_date: 2026-10-06
date_precision: day
kind: claim
stance: criticism
frameworks: gemini-cli, claude-code, codex, github-copilot-cli
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They restated Plugin4Shell as a hash-named-branch checkout trick, said Claude Code and Codex had fixed it, Copilot CLI had not, and Gemini CLI will not, and told operators to verify HEAD after checkout.
why_it_matters: A pin in config is not a disk check; anyone still installing Gemini CLI extensions this window has to assume the installer will not do that verification for them.
===END===
===POST===
handle: @kazuhiro_jinma
post_url: https://x.com/kazuhiro_jinma/status/2107765415766102203
event_date: 2026-10-07
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said stable v0.63.0 published on 6 October US time, and that non-interactive plan mode used to instruct the model to wait for user agreement, so a gemini -p / -y run could print a plan and exit without calling tools; this tag instead has it summarize, call exit_plan_mode, and move into implementation, plus tool-output size limits and memory work for long agent loops.
why_it_matters: A headless plan step that used to be a no-op can now write the tree, so CI and -y jobs need a permission and review posture before the bump, not after the first overnight run.
===END===
===POST===
handle: @arb5z
post_url: https://x.com/arb5z/status/2107835016642547812
event_date: 2026-10-07
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: They said 0.63 fixed an infinite auth loop on headless machines, so a server install could sit in a login loop forever and never start coding, and they pointed at the v0.63.0 release tag.
why_it_matters: If that loop is real, unattended Gemini CLI on a box is not a model problem, and operators who saw hung headless jobs should check the tag before they swap models or rewrite auth.
===END===
===POST===
handle: @_architected
post_url: https://x.com/_architected/status/2108357424952578108
event_date: 2026-10-09
date_precision: day
kind: voice
stance: question
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They tried to map Google's coding-agent lineup after a Gemini-the-harness announcement: Gemini CLI and Antigravity as a VS Code replacement, then a rename of Gemini CLI to Antigravity CLI, Antigravity as a GUI harness, a VS Code fork as Antigravity IDE, plus an extension, and now another harness called Gemini.
why_it_matters: If operators cannot tell which binary they are being told to run, a still-tagging OSS repo and a successor CLI will keep being collapsed into one product, and inventory will miss the one that still has plugin and auth risk.
===END===
===POST===
handle: @LamplighterPaul
post_url: https://x.com/LamplighterPaul/status/2108454455481970793
event_date: 2026-10-09
date_precision: day
kind: voice
stance: comparison
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: In a thread about Google announcing yet another product named Gemini, they said Gemini CLI is deprecated in favor of Antigravity but is still being updated, and they could not reconcile those two facts.
why_it_matters: Deprecated-and-shipping is the operator puzzle this window: a consumer login reject plus a live tag stream, so upgrade versus migrate is not the same decision for every seat.
===END===
===POST===
handle: @agentgid
post_url: https://x.com/agentgid/status/2108546504621187528
event_date: 2026-10-09
date_precision: day
kind: claim
stance: criticism
frameworks: gemini-cli, claude-code, cursor
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They said a shared AGENTS.md is ignored by at least one tool in a mixed setup: Claude Code skips it when CLAUDE.md exists, Gemini CLI needs a setting turned on, and Cursor ignores plain markdown rules.
why_it_matters: If Gemini CLI does not load AGENTS.md unless configured, a repo that looks governed on Codex or Cursor is ungoverned on Gemini CLI, and the missing file will not announce itself.
===END===
===POST===
handle: @lcarv20
post_url: https://x.com/lcarv20/status/2109396239775387818
event_date: 2026-10-11
date_precision: day
kind: voice
stance: praise
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: Replying to someone who has to restart Antigravity CLI with a dangerously flag to change permissions, they said they liked Gemini CLI's ctrl+Y YOLO toggle, because a shortcut still works after you have started typing and a launch flag does not.
why_it_matters: Permission UX is one of the few in-window arguments that the deprecated CLI still has a control the successor has not matched, so a migration can add serial flag fiddling at the start of every session.
===END===
===POST===
handle: @al3rez
post_url: https://x.com/al3rez/status/2109570007613259850
event_date: 2026-10-12
date_precision: day
kind: claim
stance: criticism
frameworks: gemini-cli, claude-code, codex, github-copilot-cli
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They reported HarnessSecurity-Bench ran 2,500 trials across six coding-agent harnesses including Gemini CLI, said turning on auto-approve moved attack success from 29.2 percent to 95.6 percent in that setup, that about half the confirmed controls were opt-in, and that an agent could sometimes reach a blocked operation through another allowed tool, so they would not trust prompt instructions as the production boundary.
why_it_matters: If those numbers hold, YOLO and auto-approve are the control operators disable first and the one doing most of the work, including on Gemini CLI, and a denylist of dangerous commands is not the same as blocking the action.
===END===
===POST===
handle: @CodexInsider
post_url: https://x.com/CodexInsider/status/2109630076597780711
event_date: 2026-10-12
date_precision: day
kind: claim
stance: comparison
frameworks: gemini-cli, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: Relaying a write-up checked against Codex 0.161.0, they said Claude Code and Gemini CLI YOLO modes skip approval prompts but leave sandboxing on, while Codex's yolo alias turns off both approvals and the OS-level sandbox.
why_it_matters: If that split is real, borrowing Codex's yolo mental model onto Gemini CLI overstates what YOLO disables, and a Gemini CLI YOLO session may still have a fence Codex would have dropped.
===END===
===POST===
handle: @tomoya_cs
post_url: https://x.com/tomoya_cs/status/2109787517616869850
event_date: 2026-10-12
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli, claude-code
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: A Looker customer engineer at Google Cloud, posting as personal views, said Looker Data Apps is in public preview and that Gemini CLI or Claude Code can author LookML-bound dashboards while Looker still owns metric logic and access control.
why_it_matters: A live Google Cloud integration that still names Gemini CLI cuts against the story that the OSS binary is only a leftover, so enterprise seats on Code Assist or API key may be getting new surfaces rather than a sunset.
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
gist: They said Gemini Code Assist Standard and Enterprise stopped taking new subscriptions from 9 October, with renewals only through the end of 2026 and a push toward Antigravity, and they treated that as the same pattern as the June consumer Gemini CLI cutoff, noting no migration tool or transition discount.
why_it_matters: If Code Assist was the remaining paid path that still served the OSS CLI, a subscription sunset is the next auth-population cut, and operators on those seats need the docs page rather than the GitHub tag to know whether the binary will keep answering.
===END===
===POST===
handle: @prioninae
post_url: https://x.com/prioninae/status/2110049116441149836
event_date: 2026-10-13
date_precision: day
kind: voice
stance: frustration
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: false
gist: They said Gemini CLI had been folded into Antigravity and they could no longer drive it from Goose, which they found painful, and they were looking at other model hops for Japanese writing quality.
why_it_matters: Third-party harnesses that wrapped Gemini CLI OAuth lose that path when Google points consumers at Antigravity, so the cutoff shows up as a Goose outage rather than a gemini binary error.
===END===
===POST===
handle: @DronRane65403
post_url: https://x.com/DronRane65403/status/2110095667620422037
event_date: 2026-10-13
date_precision: day
kind: voice
stance: frustration
frameworks: gemini-cli, antigravity
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: false
gist: They said the enterprise Gemini CLI still does not have the latest model, called Antigravity CLI the worst of the Google coding surfaces, and said the Antigravity IDE was only somewhat better.
why_it_matters: That is an enterprise-seat complaint that the still-supported CLI is lagging Argon while the successor CLI is not a quality upgrade, so staying on Gemini CLI for Code Assist is not obviously the worse of two live options.
===END===
===POST===
handle: @mohabbuilds
post_url: https://x.com/mohabbuilds/status/2110136328012664979
event_date: 2026-10-13
date_precision: day
kind: claim
stance: announcement
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: true
needs_primary_crosscheck: true
gist: In a Gemini CLI MCP setup thread they said that since 18 June the CLI stopped serving free, AI Pro, and AI Ultra individual accounts, while API key and Gemini Code Assist users were unaffected, so you should check how you sign in before editing a single config file.
why_it_matters: MCP debugging on a consumer Google login will look like a dead integration; the first check is still which auth population the binary will serve.
===END===
===POST===
handle: @mohabbuilds
post_url: https://x.com/mohabbuilds/status/2110136444652052943
event_date: 2026-10-13
date_precision: day
kind: claim
stance: frustration
frameworks: gemini-cli
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They said Gemini CLI recognizes a remote MCP server by a url key and throws an unrecognized-key error if you also paste a transport sse field that other clients accept, so a working config from one agent does not load in this one; they want a single url key plus /mcp auth.
why_it_matters: Shared MCP JSON is not a portable runtime here, and the failure mode is a schema reject rather than a clear auth or trust message, so operators debug the server instead of the client's key allowlist.
===END===
===POST===
handle: @zelin1107
post_url: https://x.com/zelin1107/status/2110138869530427835
event_date: 2026-10-13
date_precision: day
kind: claim
stance: criticism
frameworks: gemini-cli, claude-code, codex
author_is_maintainer: false
cuts_against_consensus: false
needs_primary_crosscheck: true
gist: They relayed a benchmark of 270 adversarial cases and 30 cross-session skill-combo scenarios, with seven models on Codex CLI, Gemini CLI, and Claude Code, attack success 46.7 to 77.4 percent, and in 53 percent of evaluations the agent finished the user's task and the attacker's goal in the same run, because skill files, settings, and caches persist across sessions and get read by the next skill.
why_it_matters: If that mechanism holds, a green task result is not a safety result on Gemini CLI either, and operators who chain skills across sessions need to treat leftover artifacts as untrusted input rather than as session memory.
===END===
COVERAGE_NOTE: Identity: only google-gemini/gemini-cli (npm @google/gemini-cli). Dropped Gemini-the-model and Gemini 4 Argon-in-Antigravity, Antigravity CLI/agy, AI Studio/Jules/Gemini App, Google's new Gemini-the-work-agent, google/agents-cli, astrology Gemini, Inspired Entertainment copy that called Antigravity CLI "formerly Gemini CLI", and skill/MCP/marketplace spam that only name-drops the CLI. Searched 2026-09-21 to 2026-10-14 (until exclusive) via from:geminicli, from:ntaylormullen, from:JackWoth98, from:_mohansolo, from:shengzheyao, from:GoogleCloudTech/GoogleAIStudio/GoogleDeepMind/GoogleAI/sundarpichai, from:air__security, from:oswrav/CrossTechSol/icanvardar/IfeeDev, keyword "gemini cli"/gemini-cli/@geminicli, google-gemini/gemini-cli, Plugin4Shell, v0.61-v0.64, YOLO/sandbox/MCP/GEMINI.md/AGENTS.md/headless/deprecated/"still using"/Code Assist/auth loop, HarnessSecurity-Bench, and semantic still-shipping vs dead. Official @geminicli had zero in-window posts (last public post found is 2026-06-18 consumer cutoff). Listed maintainer @ntaylormullen posted only Antigravity SDK. @JackWoth98 posted AI Studio/Argon. @_mohansolo and @shengzheyao posted Antigravity. from:air__security returned nothing this window. Could not reach Discord, GitHub Discussions, X lists, deleted or protected posts, or most quote-tweet bodies. Sweep is thin on English operator bug threads (Japanese changelog recap bots dominate version talk), thin on 2026-09-21 to 2026-09-22 (Plugin4Shell hangover from the prior window), and empty on Gemini CLI maintainers answering Plugin4Shell, the 0.63 headless plan-mode change, or the Code Assist sunset.
