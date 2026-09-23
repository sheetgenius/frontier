I'll fetch each listed X post and return the published text exactly as it appears.A few posts look like they may be missing trailing links. I’ll re-fetch those to confirm the published text.I’ll re-fetch a few long posts so spacing around links and `.git` is captured exactly.===CAPTURE===
url: https://x.com/wunderwuzzi23/status/2093039917714563098
handle: @wunderwuzzi23
display_name: Johann Rehberger
posted_at: 2026-08-27
VERBATIM_BEGIN
Breaking Claude Code Opus 5 Auto Mode 🔥

1/ Here is a somewhat hilarious  attack chain that hijacks Claude Code Opus 5 for a full system compromise via a website

Hint: Security invariants are not optional

🧵
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/wunderwuzzi23/status/2093042649447981523
handle: @wunderwuzzi23
display_name: Johann Rehberger
posted_at: 2026-08-27
VERBATIM_BEGIN
6/ In some runs Claude noticed the compromise and tried to kill the malware later on.

But Auto Mode blocked the cleanup command!  🤯

It allowed the malware to run, but denied stopping it.

Another example where a safety feature can end up working against you.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/air__security/status/2100683528383975636
handle: @air__security
display_name: AIR
posted_at: 2026-09-17
VERBATIM_BEGIN
🚨 Plugin4Shell: SHA-Pinning Bypass Across Major AI Coding Agents

We found the same supply-chain flaw in @claudeai  Code, @OpenAI , @GeminiApp  CLI and @github  Copilot.

The flaw allows an attacker to replace a reviewed and trusted plugin with malicious code in any marketplace.

The result: zero-click RCE on the machine running the agent.

Thanks to @theinformation  for covering the research. 
Full write-up:
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/Evoputa/status/2102108276384997436
handle: @Evoputa
display_name: Ev Oputa
posted_at: 2026-09-21
VERBATIM_BEGIN
A version pin on an AI coding plugin is only as strong as the installer's check. If the agent never verifies the hash it fetched, a repo owner can swap the code under the same lock.

Air Security disclosed Plugin4Shell (The Hacker News, Sep 18). Four agents install marketplace plugins pinned by commit hash, then fail to confirm the code matches. On hosts that allow a branch named like a hash (Bitbucket, self-hosted git), the owner can point that name at different code. The agent still reports the locked version. Plugin runs with the user's access: files, credentials, reachable systems. Anthropic fixed Claude Code in 2.1.179. OpenAI fixed Codex in 0.146.0. Air says GitHub Copilot has no fix yet. Google will not patch the deprecated consumer Gemini CLI path and points people to Antigravity; inventory any remaining Gemini CLI installs, including enterprise seats that still run it. Default GitHub marketplaces are largely outside the branch-name trick; outside hosts and auto-update paths are where risk concentrates. Air built a working test in May, told vendors in June. No CVE assigned as of Sep 18. No known in-the-wild use reported.

Monday: inventory every coding agent and every non-GitHub plugin source. Update Claude Code to 2.1.179+ and Codex to 0.146.0+. Pause Copilot plugins from non-GitHub hosts until a patch exists. Turn off auto-update for outside marketplaces. Treat a coding agent like a laptop with your keys on it.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/imanari_satoshi/status/2101453031036350572
handle: @imanari_satoshi
display_name: 今城 敏 Satoshi Imanari｜AI×食品安全の実践
posted_at: 2026-09-19
VERBATIM_BEGIN
コミットSHAのピン留めは、差し替えを防ぐ保証ではありません。

止めたはずの40桁の文字列そのものが、プラグイン差し替えの入口になります。修正の届き方も、4製品でばらばらです。

Air Security が 2026-09-17 に公開した Plugin4Shell です。対象は Claude Code・OpenAI Codex・GitHub Copilot・Gemini CLI の4つでした。

先に「その後」です。Claude Code は 2.1.179 で修正。Codex は 0.146.0 で修正。GitHub Copilot は writeup の時点で修正版なし。Gemini CLI は廃止扱いで恒久的に修正されません。

仕組みです。

エージェントは git clone の後に git checkout <40桁のSHA> を実行します。攻撃者は同じ40桁の名前のブランチを作り、既定ブランチにします。git は ref をコミットIDより優先するため、checkout は攻撃者のブランチを取ります。警告は refname is ambiguous の1行だけです。

Gemini CLI は git checkout FETCH_HEAD を使います。既定ブランチ名を FETCH_HEAD にすると、取得したコミットが黙って捨てられます。

0クリックになる理由は自動更新です。同じ checkout が、プラグインのバックグラウンド自動更新でも走ります。Claude Code と Codex は既定で有効です。

読者への影響です。

1. 版を上げれば終わる人と、製品を替えるしかない人に分かれます。Codex の修正は OpenAI の rust-v0.146.0 に載っています。公開は 2026-07-29、項目名は「34644 Verify Git plugin SHA checkouts」です。Claude Code は 2.1.179 以降、Codex は 0.146.0 以降へ上げてください。Gemini CLI は上げる先がないので、移行を決めてください。

2. changelog を読む慎重な運用ほど取りこぼします。Claude Code の公開 changelog の 2.1.179 の項目に、SHA検証の記載はありません。GitHub Security Advisory にも本件はありません（2026-09-20 実測）。修正は入っても、公開情報から気づく経路がありません。判断は changelog ではなく版番号で行ってください。最新は v2.1.278（2026-09-19 公開）です。

3. SHAを書くことは「要求」であって「確認」ではありません。正しい検証は checkout の後に1行足すことです。test "$(git rev-parse HEAD)" = "<pinned-sha>" || abort を走らせます。要求した ref ではなく、解決後の HEAD を見ます。自前で git clone と checkout を書いた CI やスクリプトにも同じ穴が空きます。

4. 置き場のホスト名で、危険かどうかが変わります。GitHub は40桁hexのブランチ名を拒否するため、GitHub だけで配っている人には関係ありません。Bitbucket と self-hosted の git サーバは40桁hexを許します。Anthropic の公式ドキュメントも、両者を置き場として認めています。source URL のホスト名を確認し、GitHub 以外なら版を先に上げてください。

ピン留めは今も有効です。ただし、ピンを書く側ではなく、ピンを解決した側が確認して初めて効きます。

出典
https://t.co/NqPekeAXdh
https://t.co/4fGUNll3Rq
https://t.co/eHSBHH0b6P
https://t.co/ICqvlbPQsk

#ClaudeCode #Codex #サプライチェーン攻撃 #AI
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/hazemomier/status/2101432515768508696
handle: @hazemomier
display_name: Hazem Omier
posted_at: 2026-09-19
VERBATIM_BEGIN
Pillar Security (Week of Sandbox Escapes): escapes across Cursor, Codex, Gemini CLI, and Antigravity. In almost every case the agent didn’t break the sandbox — it wrote something a trusted host component later ran: .claude hooks, git metadata via --separate-git-dir, allowlisted git show --output, Docker socket, .vscode tasks.

Cursor patched hooks in 3.0.0 (CVE-2026-48124). Codex GitPwned patched in v0.95.0. Antigravity findings were downgraded by Google as hard to exploit.

Blast radius isn’t the agent process. It’s everything the agent can write that the host later trusts.

If you buy coding agents for the team, which control do you demand first?

A) Prove which host components trust agent-written files (hooks / git / tasks / daemons) — and require approval when those paths change
B) A stronger process sandbox alone is enough if the vendor says “sandboxed”
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/_orcaman/status/2098795967143203086
handle: @_orcaman
display_name: Or Hiltch
posted_at: 2026-09-12
VERBATIM_BEGIN
🚨 SANDBOX ESCAPE ALERT 🚨  
SPACEXAI: PWNED 🫡 
CURSOR: LIBERATED 🦋

Following a fix shipped by the Cursor team (in about a week, kudos), we present a variant of the Beltdown vuln we shared a few days ago - 

Escaping Cursor CLI's sandbox to run arbitrary code on your Mac:
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/_orcaman/status/2098412861412233431
handle: @_orcaman
display_name: Or Hiltch
posted_at: 2026-09-11
VERBATIM_BEGIN
We reported an RCE sandbox escape in Claude Code. It was accepted actually, but it took about 50 days to ship a fix 😳

For comparison, Cursor and Codex closed a very similar escape we reported in about a week.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/llm_redteam/status/2097409250264043777
handle: @llm_redteam
display_name: Slade 🛡️ LLM Hacker
posted_at: 2026-09-08
VERBATIM_BEGIN
Claude Code, Cursor, and Codex CVE-2026-19592 all got caught running attacker code before you ever see a trust prompt.
Manifold Security found 8 of these flaws across 7 command-line coding agents: Claude Code, Cursor, Codex, Goose, Hermes Agent, Qwen Code, Grok Build. Same root cause every time.

The bug lives in core.fsmonitor, a Git perf setting that names a command Git runs to check which files changed. Git reads that value straight from the repo's own.git/config.
Any index refresh triggers it: git status, git diff, the branch check your agent runs silently on startup.

On Claude Code and Hermes Agent, the payload fires before the workspace-trust prompt even shows up.
On Qwen Code, before you've authenticated.
On Grok Build, on the first keystroke.
No prompt to the model. No tool approval. Just opening the folder is enough.

Exploitation needs the.git folder intact: a shared drive, a synced folder, a USB stick, a zip a contractor sent you. A normal git clone strips this. But how many repos do you actually clone vs just copy from a client's shared drive?

goose got CVSS 7.0 (CVE-2026-72718), fixed in 1.44.0.
Claude Code patched the core.fsmonitor path in 2.1.196, but a second path through claude ultrareview was still live on 2.1.252 as of Sep 1.
Codex CLI fixed in 0.131.0, covered by CVE-2026-19592.
Hermes Agent, Qwen Code, Grok Build: still unpatched at publication.

BEFORE (dangerous): agent runs git status/diff at session start to figure out branch and changes, before any trust decision, blindly trusting whatever the repo's.git/config says to run.
AFTER (safe): sandbox every git subprocess call, strip or validate repo-supplied config keys (core.fsmonitor, hooks) before the first invocation, gate ANY git command behind the workspace-trust decision, not just tool calls.

Building agents that touch untrusted repos? Go check which git commands yours fires before the user approves anything.
Would you even notice if your CLI agent ran a command before you saw a trust prompt?

#AISecurity #PromptInjection #SupplyChainSecurity
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/hackerlogs/status/2099983257831977303
handle: @hackerlogs
display_name: hackerlogs
posted_at: 2026-09-15
VERBATIM_BEGIN
Your AI agent sandbox doesn't matter if RCE fires before it starts.

Novee just dropped DefCon 2026 research on Google Gemini CLI: CVE-2026-12537, a perfect CVSS 10.0 host-level RCE. Three lines in .gemini/.env. Zero privileges. Zero prompt injection.

The blind spot is Pre-Task Authority. Agents load trust, config, and spawn processes before the first token. Prompt defenses never get a turn.

The chain on Gemini CLI in CI:
1. GitHub Actions auto-trusts every workspace when CI=true
2. Attacker PR drops .gemini/.env with GEMINI_SANDBOX_PROXY_COMMAND
3. That "egress security" proxy launches via shell:true string concat
4. Host shell splits on ; and exfils GITHUB_TOKEN, GEMINI_API_KEY, OIDC creds before the Docker sandbox even starts

Four defenses bypassed by running earlier than all of them. A security feature became the RCE vector.

Same pre-task class across vendors: Gemini before sandbox, Claude Code before trust dialog (Check Point Research), Codex MCP auto-launch on directory trust before the model.

Patch: Gemini CLI before v0.39.1 / run-gemini-cli before v0.1.22. Google overhauled headless trust so workspace config no longer auto-loads in CI.

Primary: https://t.co/iNG0Z9KyIZ

Audit the code that decides trust and builds the sandbox. The exploit may fire while the boundary is still being built.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/Sagarvd01/status/2101314754182574191
handle: @Sagarvd01
display_name: Sagar Tanur 🇮🇳
posted_at: 2026-09-19
VERBATIM_BEGIN
TrustFall is the quiet one this week: Claude / Cursor / Copilot / Gemini CLI all fire project-defined MCP servers the moment you hit Trust on the folder. one Enter key. CI runners get it with zero clicks. trust dialog ≠ sandbox. if the repo shipped the MCP config, you just ran their code.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/analogalok/status/2102006741193957839
handle: @analogalok
display_name: Alok
posted_at: 2026-09-21
VERBATIM_BEGIN
Pi beats claude code and codex 

You can cut your agent API costs by 50% right now with literally 0% drop in benchmark performance.

Anthropic wants you to use Claude Code. OpenAI wants you to use Codex CLI.

But a new UC Berkeley study just exposed the "In House Myth": Frontier models actually perform better on minimal, open source frameworks 75% of the time. 

Stop paying the Big Tech "Harness Tax." Here is the data 

# UC Berkeley and Arena just dropped the "Harness Tax" paper. 

They benchmarked 21 model agent pairs on SWE-bench Lite and Terminal-Bench 2.0. They tested SOTA models (Claude Fable 5, GPT-5.6 Sol, Claude Opus 4.8, Sonnet 4.6, Kimi K3) across 3 agent frameworks: 

Claude Code, Codex CLI, and a barebones open source harness, Pi.

The results prove we are all bleeding API credits for literally zero reason.

# Look at the chart:

- GPT-5.6 Sol scored 83.3% using the OS Pi harness. On OpenAI's own Codex CLI? It dropped to 78.9%. and cost nearly 2x as much ($0.42 vs $0.76).

- Claude Fable 5 hits 97.8% on Claude Code for $1.33/rollout. On Pi? It hits 96.7% for just $0.67. You are paying a 100% markup for a 1% gain.

# Why is this happening? First Call Bloat.

Proprietary coding agents load up massive system instructions, heavy guardrails, and verbose JSON tool schemas. Claude Code sends 10x the initial context of Pi. You are paying for their dead weight context on every single turn. (check out the replies for more data on this)

Pi gives the model exactly 4 tools: read, write, edit, bash. That's it.

The takeaway: 
As frontier LLMs get smarter, heavy agent scaffolding actually holds them back. If your agent API bill is too high, do NOT downgrade your model. Just ditch the bloated harness.

I've dropped more data and link to the study in the replies.

What agent framework are you guys running in your dev loop right now? Let me know
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/zainhas/status/2097941157905142210
handle: @zainhas
display_name: Zain
posted_at: 2026-09-10
VERBATIM_BEGIN
deepseek eval'd their new v4.1 flash model in 8 different harness configs 

> model performs best in minimal harnesses  -- mini-SWE & minimal deepseek harness

> underperforms in both claude code and codex
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/composio/status/2100308380980068538
handle: @composio
display_name: Composio
posted_at: 2026-09-16
VERBATIM_BEGIN
We ran GPT-6 Astra across 6 agent harnesses (Codex, Claude Code, OpenCode, Hermes Agent, Pi Agent, Command Code) on 29 challenging agentic tasks.

Most harnesses succeeded at similar rates. But when they failed, they used 3–5x as many tokens, depending on the harness. 🧵🧵🧵
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/WhiteNightNiki/status/2102111428261925050
handle: @WhiteNightNiki
display_name: Nikita Belokopytov
posted_at: 2026-09-21
VERBATIM_BEGIN
This is unfortunately an open secret at this point. The only benefit of using Claude Code or Codex is making use of their subscription. API-based usage is best done either via a tailor made harness or a PI instance.
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/12wecior/status/2102103851738288549
handle: @12wecior
display_name: wecior
posted_at: 2026-09-21
VERBATIM_BEGIN
i switched to codex from claude a couple of days ago and I feel like people hating on claude and praising codex use these tools like an ai chatbot instead of an actual harness, codex genuinely feels like a mediocre university project compared to claude code
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/Teknium/status/2100645382552428963
handle: @Teknium
display_name: Teknium 🪽
posted_at: 2026-09-17
VERBATIM_BEGIN
We are going to lean into making Hermes more like Pi, and less like OpenClaw
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/Teknium/status/2100645510856298543
handle: @Teknium
display_name: Teknium 🪽
posted_at: 2026-09-17
VERBATIM_BEGIN
The first step of this is removing all the bundled Memory providers.

They will be maintained by their creators, in their own org's repos, and land in the plugins market
VERBATIM_END
===END===
===CAPTURE===
url: https://x.com/cholf5/status/2101684731305947630
handle: @cholf5
display_name: 周尔复
posted_at: 2026-09-20
VERBATIM_BEGIN
DSH 的任务规划能力很强，每次聊完方案，它做完调查后，就会生成一个长长的 todo list，这让以前 superpowers 那套仪式变得像小丑一样。随着 Agent 和 LLM 的进步，过去的奇技淫巧正在变得一文不值。
VERBATIM_END
===END===
