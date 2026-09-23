I'll start by reading the discovery protocol and watchlist identity for Gemini CLI, then search X only for posts about that project in the window.I'll load the Gemini CLI source contract and official handles so I can keep the identity check tight before searching.I'll look up known Gemini CLI handles and recent conversation so the sweep stays on that repo, not the model brand.I'll search official Gemini CLI accounts and operator conversation in the window, then filter out lookalike projects.Official `@geminicli` looks quiet in the window; next I’ll hunt maintainer posts, Plugin4Shell, and the still-alive OSS-repo conversation.I’ll pull the original Plugin4Shell writeup, the sandbox CVE thread, and earlier-window posts so we are not just repeating the late-September pile-on.A few IDs look messy, so I’ll re-fetch those posts before I emit anything.I have enough in-window, identity-checked leads. Next I’ll emit the records only, with a coverage note on the official-account silence and the lookalikes I dropped.===POST===
handle: @oswrav
post_url: https://x.com/oswrav/status/2092382124473205141
event_date: 2026-08-25
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They said v0.57.0 added an execution timeout for a TUI hang tracked as issue 21477, and also closed a bug where subagents still ran when agents mode was turned off (issue 22093).
why_it_matters: If those issues were real, operators on older builds were hanging the UI or getting subagents they thought they had disabled, and the post treats the OSS repo as still shipping fixes.
===END===
===POST===
handle: @blackbox_lab
post_url: https://x.com/blackbox_lab/status/2094139185313554885
event_date: 2026-08-30
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: They said Gemini CLI bit them on long unattended runs because live progress was too thin, so a loop could go sideways until the end, and they also found Gemini 2.5 Flash weak at actually fixing bugs.
why_it_matters: That is an attention-bottleneck complaint: the operator cannot tell a stuck run from a working one until it finishes.
===END===
===POST===
handle: @GergelyOrosz
post_url: https://x.com/GergelyOrosz/status/2095532421181558906
event_date: 2026-09-03
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli, antigravity
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: He told Antigravity's lead that ToS text, not an X reply, is the source of truth, and that the last time an Antigravity account was suspended, Gemini CLI access went with it.
why_it_matters: If that coupling is real, an Antigravity ToS hit is also a Gemini CLI outage for the same Google login, which is the opposite of a clean product split.
===END===
===POST===
handle: @_mohansolo
post_url: https://x.com/_mohansolo/status/2095592250839302432
event_date: 2026-09-03
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli, antigravity
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: Varun Mohan of Antigravity said the ToS wording had been updated so a penalty hits the Antigravity and Gemini CLI accounts, not the whole Google account, because those two share quota.
why_it_matters: That is the only in-window Google-staff statement found about Gemini CLI, and it treats the CLI as a live quota sibling of Antigravity rather than a retired binary.
===END===
===POST===
handle: @Marwan_3atef
post_url: https://x.com/Marwan_3atef/status/2098046699369304448
event_date: 2026-09-10
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They said v0.59.0 blocks SSRF in MCP OAuth metadata discovery (loopback, private ranges, link-local) and makes restricted mode fail-closed so workspace trust is tight and mcpServers get filtered instead of staying loaded.
why_it_matters: Anyone still pointing Gemini CLI at remote MCP with OAuth would need to check whether that SSRF path and the fail-closed trust change actually landed in the tag they run.
===END===
===POST===
handle: @CrossTechSol
post_url: https://x.com/CrossTechSol/status/2098095635974988042
event_date: 2026-09-10
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: frustration            # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They thought they had shipped a broken MCP server because Gemini CLI showed an empty tool list with no error and no warning.
why_it_matters: Silent empty-tool behavior turns a trust or config miss into a fake-dead integration, so operators debug the server instead of the CLI's load rules.
===END===
===POST===
handle: @CrossTechSol
post_url: https://x.com/CrossTechSol/status/2098096244149158109
event_date: 2026-09-10
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli, claude-code, codex
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They said the same MCP JSON is not portable: VS Code wants a servers key, most others want mcpServers, Codex wants TOML, and Gemini CLI loads none of it until the folder is trusted.
why_it_matters: Folder trust is doing double duty as an MCP enable switch, so a shared config file does not mean a shared runtime.
===END===
===POST===
handle: @IfeeDev
post_url: https://x.com/IfeeDev/status/2098306585571274961
event_date: 2026-09-11
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: comparison             # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli, antigravity
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: They said Antigravity CLI now compacting around a 40 percent threshold with no tuning, whereas Gemini CLI compaction was slow but at least exposed options.
why_it_matters: If the successor dropped a control the old CLI had, a migration is not a no-cost swap for long-context runs.
===END===
===POST===
handle: @OlocoDisabled
post_url: https://x.com/OlocoDisabled/status/2098252436875960533
event_date: 2026-09-11
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: praise                 # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: They told someone to try Gemini CLI with the teamwork-preview command for spawning subagents, and said it gets much better in that mode.
why_it_matters: That is an in-window user still recommending a preview subagent path on the OSS CLI, against the story that nobody runs it.
===END===
===POST===
handle: @gadi_neelesh
post_url: https://x.com/gadi_neelesh/status/2099104686645403847
event_date: 2026-09-13
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: frustration            # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They relayed a report that Gemini CLI's help subagent can sit for a full three minutes on questions about the CLI itself, because the subagent can get an unbounded thinking budget with no per-turn timeout.
why_it_matters: A help path that can stall for minutes is a reliability tax on the exact moment an operator is trying to learn the tool.
===END===
===POST===
handle: @icanvardar
post_url: https://x.com/icanvardar/status/2099182696232628672
event_date: 2026-09-13
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: joke                   # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: They asked to meet anyone who actually uses Gemini CLI, saying they had never met one.
why_it_matters: The replies became the window's adoption argument, splitting people who think the CLI is gone from people who still run it.
===END===
===POST===
handle: @PratikAtX
post_url: https://x.com/PratikAtX/status/2099145902716011003
event_date: 2026-09-13
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They said newer Gemini 3.7/3.8 models do not show up in Enterprise Gemini CLI unless you install a preview build, export GEMINI_MODEL to gemini-3.8-flash, and also pass --model on launch.
why_it_matters: If enterprise seats are still on this CLI, model routing is an operator override problem, not a finished admin default.
===END===
===POST===
handle: @robshocks
post_url: https://x.com/robshocks/status/2099213406062493955
event_date: 2026-09-13
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: Replying to the who-uses-it prompt, they said their first review found Gemini CLI janky, they never returned, and they blamed the models more than the harness, while still crediting Google for open-sourcing a CLI early.
why_it_matters: That splits the product complaint: some operators left because of the model, not because the repo stopped.
===END===
===POST===
handle: @thesightsmith
post_url: https://x.com/thesightsmith/status/2099518159065849883
event_date: 2026-09-14
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: praise                 # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: In the same thread they asked why you would not use Gemini CLI, and said it is useful for wiring Gemini into their startup.
why_it_matters: It is a named counter-example to the joke that the CLI has no users left.
===END===
===POST===
handle: @benteisheuer
post_url: https://x.com/benteisheuer/status/2099543683989180565
event_date: 2026-09-14
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli, antigravity
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They said the reply thread proved the original joke, because nobody mentioned that Gemini CLI had been discontinued and users were moved to Antigravity CLI, which they called awful.
why_it_matters: That is the prevailing window take in one sentence: consumer Gemini CLI is treated as gone, and the successor is not loved.
===END===
===POST===
handle: @_kekule15
post_url: https://x.com/_kekule15/status/2099337339638043025
event_date: 2026-09-14
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: joke                   # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: They posted a screenshot of Gemini CLI catching itself in a loop, then printing a scolding halt instead of a clean recovery.
why_it_matters: Loop handling is operator-visible reliability, and the screenshot is also evidence someone was still running the CLI mid-September.
===END===
===POST===
handle: @hackerlogs
post_url: https://x.com/hackerlogs/status/2099983257831977303
event_date: 2026-09-15
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli, claude-code, codex
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They summarized Novee's DefCon 2026 writeup as CVE-2026-12537, a CVSS 10 host RCE in Gemini CLI that fires from a .gemini/.env sandbox-proxy command with shell true, before the Docker sandbox starts, and they said the patch floor is CLI 0.39.1 and run-gemini-cli 0.1.22 plus a headless trust overhaul.
why_it_matters: If the CI auto-trust plus proxy-command chain is accurate, pinned old GitHub Action versions remain the exposure even after later stable tags.
===END===
===POST===
handle: @Evro_AI
post_url: https://x.com/Evro_AI/status/2100137910565531920
event_date: 2026-09-16
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They said stable 0.60.0 is almost entirely hardening: tighter web-fetch validation, MCP OAuth issuer checks, path and symlink and NTFS 8.3 handling, macOS Seatbelt temp and settings isolation, and provenance on untrusted tool output.
why_it_matters: A harden-only stable two weeks before Plugin4Shell talk is the counter-receipt to the claim that Google stopped touching the OSS CLI.
===END===
===POST===
handle: @taytaycodes
post_url: https://x.com/taytaycodes/status/2100315283798032805
event_date: 2026-09-16
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli, antigravity
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They said a CI job calling the gemini command started failing with no deprecation window after Google stopped serving individual Gemini CLI accounts on 2026-06-18, that Antigravity CLI was a closed-source Go rewrite without launch parity, and that they found three scripts still waiting on a dead command.
why_it_matters: Consumer cutoff plus silent CI failure is the operator bug even if the GitHub repo is still tagging releases for other auth paths.
===END===
===POST===
handle: @TheHackersNews
post_url: https://x.com/TheHackersNews/status/2100904242144059728
event_date: 2026-09-18
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli, claude-code, codex, github-copilot-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They reported Plugin4Shell as a flaw that can make four coding agents install plugin code different from the commit they report as pinned, and said the attack needs control of the plugin repository.
why_it_matters: This is the in-window disclosure that later posts used to claim Gemini CLI would not be patched.
===END===
===POST===
handle: @haxailab
post_url: https://x.com/haxailab/status/2101150794389286964
event_date: 2026-09-19
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They said Gemini CLI stacks GEMINI.md files, and that /memory show dumps the instruction context currently in force while /memory list shows which GEMINI.md paths were loaded, so you should inspect those before blaming the prompt.
why_it_matters: Hierarchical context files are an operator-debug surface; if those commands work, a surprising behavior may be the wrong file winning, not the model.
===END===
===POST===
handle: @Sagarvd01
post_url: https://x.com/Sagarvd01/status/2101314754182574191
event_date: 2026-09-19
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli, claude-code, cursor, github-copilot-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They described TrustFall as project-defined MCP servers launching as soon as you hit Trust on a folder, including zero-click on CI runners, and said a trust dialog is not a sandbox.
why_it_matters: If trusting a workspace auto-starts repo-shipped MCP, folder trust is code execution, not a UX confirm.
===END===
===POST===
handle: @ngyuki
post_url: https://x.com/ngyuki/status/2101328535470387365
event_date: 2026-09-19
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They called Gemini CLI gone-but-still-there, and said its tool sandbox is only read-only, so /var/run/docker.sock stays visible and docker commands still work.
why_it_matters: A read-only sandbox that still reaches the Docker socket is not isolation for anyone running agents on a Docker host.
===END===
===POST===
handle: @hazemomier
post_url: https://x.com/hazemomier/status/2101432515768508696
event_date: 2026-09-19
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli, cursor, codex, antigravity, claude-code
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They said Pillar Security's week of sandbox escapes hit Cursor, Codex, Gemini CLI, and Antigravity, and that in almost every case the agent did not break the box: it wrote something a trusted host component later ran, such as hooks, git metadata, allowlisted git show --output, the Docker socket, or editor tasks.
why_it_matters: If the blast radius is host trust of agent-written files, buying a stronger process sandbox does not close the hole.
===END===
===POST===
handle: @imanari_satoshi
post_url: https://x.com/imanari_satoshi/status/2101453031036350572
event_date: 2026-09-19
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli, claude-code, codex, github-copilot-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: false  # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: Relaying Air Security, they said Plugin4Shell is a git ref/SHA mixup on checkout, that Gemini CLI's variant uses FETCH_HEAD so a default branch named FETCH_HEAD can throw away the fetched commit, that Claude Code 2.1.179 and Codex 0.146.0 were patched, Copilot had no fix in the writeup, and Gemini CLI was treated as retired with no fix path.
why_it_matters: The FETCH_HEAD detail is Gemini-CLI-specific and is the claim to check against the actual git checkout code, separate from the hash-named-branch trick on the other agents.
===END===
===POST===
handle: @ethereaglehq
post_url: https://x.com/ethereaglehq/status/2101509086885839008
event_date: 2026-09-20
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: announcement           # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They said Gemini CLI 0.60.0 now prompts before an extension can change the environment and strips runtime-altering env vars, so you should read that consent prompt before accepting a new extension.
why_it_matters: Extension-driven env changes are a trust boundary; if 0.60 actually added consent, remaining installs have a new review step rather than a dead product.
===END===
===POST===
handle: @PratikAtX
post_url: https://x.com/PratikAtX/status/2102100948743262387
event_date: 2026-09-21
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli, antigravity
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: false # exactly one of: true, false; ALWAYS true when kind is claim
gist: They said they only tested Gemini CLI because enterprise access to Antigravity CLI had not been granted yet, called it one of the worst CLIs they had used, and said Antigravity CLI was good.
why_it_matters: Enterprise lag on the successor is forcing people onto the old CLI, which is a channel fact even if the quality take is just a take.
===END===
===POST===
handle: @Evoputa
post_url: https://x.com/Evoputa/status/2102108276384997436
event_date: 2026-09-21
date_precision: day            # exactly one of: day, month, unknown
kind: claim                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: gemini-cli, claude-code, codex, github-copilot-cli, antigravity
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: They said Air Security disclosed Plugin4Shell on 2026-09-18, that Claude Code 2.1.179 and Codex 0.146.0 were fixed, Copilot had no client fix yet, and Google would not patch the deprecated consumer Gemini CLI path and wants Antigravity instead, so remaining installs including enterprise seats still need inventory; they also said default GitHub marketplaces largely block the hash-named-branch trick and that Air reported no CVE and no known in-the-wild use.
why_it_matters: The useful split is consumer-won't-fix versus leftover enterprise/API-key installs, plus host-dependent exploitability, not a blanket Gemini CLI is dead.
===END===
COVERAGE_NOTE: Identity: only google-gemini/gemini-cli. Dropped Gemini-the-model, Jules, AI Studio/managed agents, Gemini Apps quota, Copilot-hosting-Gemini, Antigravity-only SDK/IDE posts, google/agents-cli, winget "gemini" chatbot, astrology Gemini, and skill-spam that only name-drops the CLI. Searched 2026-08-20 to 2026-09-22 (until exclusive) via from:geminicli, from:ntaylormullen, from:JackWoth98, from:_mohansolo, from:GoogleAIStudio/GoogleCloudTech/GoogleDeepMind/GoogleAI, keyword "gemini cli"/gemini-cli/@geminicli, Plugin4Shell, CVE-2026-12537, Novee, TrustFall, sandbox, GEMINI.md, MCP, v0.57-v0.62, enterprise/API key/still using, and replies to @icanvardar. Official @geminicli had zero in-window posts (last public post found is 2026-06-18 consumer cutoff). Listed maintainer @ntaylormullen posted Antigravity SDK only. @JackWoth98 posted AI Studio/managed agents, not this repo. Closest Google-staff Gemini CLI talk is Antigravity's @_mohansolo on shared quota and ToS targeting. Could not find an Air Security-authored X original for Plugin4Shell; coverage is @TheHackersNews plus secondary relays. Did not get the full 39-reply icanvardar thread. August is thinner than September; Sep 18-21 is dominated by Plugin4Shell pile-on (many copies, few FETCH_HEAD-specific takes). Changelog-bot accounts over-index Japanese/French release notes. English first-person reports of still-running enterprise or API-key installs are sparse. Nightly 0.62 conversation is almost only release-bot posts. This sweep did not verify any of these claims against github.com/google-gemini/gemini-cli.
