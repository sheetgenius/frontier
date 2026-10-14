---
schema_version: bitter.frontier_harvest.v0
provider: pi-coding-agent
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/pi-coding-agent.yml
channels_present: [tagged-release, main-unreleased]
window_volume: 11 stable tags (v0.87.1 through v1.2.0, with v1.0.0 on 2026-10-01), 0 prereleases, 419 commits v0.87.0..v1.2.0, dated main +22 past v1.2.0, 32 material sections, 0 new Pi-repository advisories (3 dependency advisories)
lane: primary sources, profile-refresh researcher
---

# Harvest: pi-coding-agent (primary sources)

Punctuation is ASCII. This is earendil-works/pi only, not can1357/oh-my-pi (OMP); nothing here is a fact about OMP. Identity: blobless clone of https://github.com/earendil-works/pi (default branch main, read with local git, never executed). `gh release list --repo earendil-works/pi` shows a release object for every tag below. pi.dev's GitHub link points at the coding-agent package in earendil-works/pi and its npm link at `@earendil-works/pi-coding-agent`; https://pi.dev/news.xml lists the same releases (Pi 0.87.1 through Pi 1.2.0). The installer API https://pi.dev/api/installer/releases/latest returned version 1.2.0 with sourceCommit 06a466935536f8c9bcacb2d5efc0fc021be1bdff, the v1.2.0 tag commit (retrieved 2026-10-13). Early 13 October observation: main 7d75a0e3eb273dff753d49c066ea29fbe7b3b6f6 (2026-10-12T23:37:22Z), confirmed then with `git ls-remote`. The complete inclusive-window main history is reconstructed at 3daa20280f6a7c7cbe0935680c9a38fdc3863005 (2026-10-13T16:17:31Z), 22 ahead and 0 behind v1.2.0. This is a dated-history reconstruction, not an archived midnight ref observation; it excludes 14 October work. GitHub compare spot checks matched local `rev-list` counts exactly (v1.1.0...v1.2.0 ahead 81, v0.87.1...v0.99.0 ahead 87, v1.2.0...7d75a0e3 ahead 8).

## Install today

- **Newest stable: v1.2.0.** Tag commit 06a46693 (2026-10-12T22:46:55Z); GitHub release 2026-10-12T23:03:53Z, prerelease=false, marked Latest; npm `@earendil-works/pi-coding-agent@1.2.0` published 2026-10-12T23:03:25Z. Receipts: https://github.com/earendil-works/pi/releases/tag/v1.2.0 and https://www.npmjs.com/package/@earendil-works/pi-coding-agent/v/1.2.0
- **Registry state (observed 2026-10-13).** `npm view @earendil-works/pi-coding-agent dist-tags`: latest=1.2.0, legacy-node20=0.74.2. No prerelease dist-tag. `engines.node` >=22.19.0. The sibling packages (pi-ai, pi-agent-core, pi-tui, pi-codemode, pi-mcp, pi-durable, pi-env, chord, pi-telemetry) are all latest=1.2.0. The old scope `@mariozechner/pi-coding-agent` is still latest=0.73.1 and now carries the npm deprecation message "please use @earendil-works/pi-coding-agent instead going forward".
- **How it installs** (https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/quickstart.md#L7-L30):
  1. pi.dev installer, now listed first: `curl -fsSL https://pi.dev/install.sh | sh`, or on Windows `powershell -c "irm https://pi.dev/install.ps1 | iex"`. Both scripts are npm-based managed installs that need Node 22.19+. install.sh downloads `/api/installer/releases/<version>/package-lock.json` from pi.dev and runs `npm ci --ignore-scripts --omit=dev` against it (install.sh lines 1049-1062 and 1293, retrieved 2026-10-13, unpinnable). Today it installs 1.2.0.
  2. npm: `npm install -g --ignore-scripts @earendil-works/pi-coding-agent`. Since 1.0.1 this does not pin transitive dependencies (section 6).
  3. Nix flake, new in 1.0.1: `nix profile add github:earendil-works/pi/stable`. **`stable` is at abe508e1 = v1.1.0, not 1.2.0.** All three platform builds failed in the Nix workflow run for tag v1.2.0, so `update-stable` was skipped (section 6).
  4. Standalone binaries attached to each release (`pi-{darwin,linux}-{arm64,x64}.tar.gz`, `pi-windows-{x64,arm64}.zip`, `SHA256SUMS`). Only binaries from 1.1.0 on are built without `.env` autoload (section 4).
- **Main past the stable.** The dated close is 22 ahead and 0 behind v1.2.0 (https://github.com/earendil-works/pi/compare/v1.2.0...3daa20280f6a7c7cbe0935680c9a38fdc3863005), including the Nix repair and four material 13 October changes: exact internal versions, share destination selection, restored tools on resume, and bounded codemode cancellation/workers (sections 12 to 15). None is in v1.2.0. The early +8 snapshot omitted 14 in-window commits.
- **No preview channel.** There are no GitHub prerelease objects in the window and no npm prerelease dist-tag. Every tag has a release object and an npm version.
- **Default-off or experimental items the profile discusses.** `codemode` and `tool_search` are off by default, but the MCP extension turns codemode on when an enabled server has the default `codemode` exposure; `"autoEnableCodemode": false` stops that (https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/mcp.md#L204-L230). MCP support itself is built in and on, but it connects nothing until a server is configured. `PI_EXPERIMENTAL` now gates only the first-run setup and one footer element (startup-ui.ts L141, footer.ts L213 at v1.2.0). Pi Durable (`@earendil-works/pi-durable@1.2.0`) is documented as "Experimental. The API changes without notice between releases." (https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L3). The fullscreen TUI is now the default (https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/settings-defaults.ts#L61).
- **Live docs.** https://pi.dev/docs/latest serves the v1.2.0 text. Spot checks on 2026-10-13 found the security page's `sessionDir` paragraph, the mcp page's `autoEnableCodemode`, the cli page's `mcp__` rules, and the quickstart install lines. The live quickstart still says the flake installs "the latest release", which is false today.

## Release ledger

ahead_by/behind_by from local `git rev-list --count` between consecutive stable tags (spot-checked against the GitHub compare API). Every tag is linear on main (behind_by=0).

| Tag | Published (UTC) | Prerelease | ahead_by / behind_by vs previous stable | npm publish (UTC) |
|---|---|---|---|---|
| v0.87.0 (baseline, parent run) | 2026-09-21T18:29:47Z | false | 18 / 0 vs v0.86.1 | 2026-09-21T16:51:53Z |
| v0.87.1 | 2026-09-22T19:43:43Z | false | 19 / 0 | 2026-09-22T19:42:48Z |
| v0.99.0 | 2026-09-29T17:21:54Z | false | 87 / 0 | 2026-09-29T17:21:27Z |
| v0.99.1 | 2026-09-29T18:27:00Z | false | 5 / 0 | 2026-09-29T18:23:26Z |
| v0.99.2 | 2026-09-30T19:30:47Z | false | 42 / 0 | 2026-09-30T19:30:20Z |
| v1.0.0 | 2026-10-01T19:20:55Z | false | 46 / 0 | 2026-10-01T19:15:22Z |
| v1.0.1 | 2026-10-03T16:14:00Z | false | 29 / 0 | 2026-10-03T12:35:33Z |
| v1.0.2 | 2026-10-04T00:56:36Z | false | 6 / 0 | 2026-10-04T00:56:19Z |
| v1.0.3 | 2026-10-05T08:38:23Z | false | 23 / 0 | 2026-10-05T08:37:00Z |
| v1.0.4 | 2026-10-05T22:03:50Z | false | 28 / 0 | 2026-10-05T21:51:59Z |
| v1.1.0 | 2026-10-07T22:26:31Z | false | 53 / 0 | 2026-10-07T22:16:26Z |
| v1.2.0 | 2026-10-12T23:03:53Z | false | 81 / 0 | 2026-10-12T23:03:25Z |

Version numbers jumped from 0.87.1 to 0.99.0. 0.88 through 0.98 do not exist as tags or npm versions. A caret range such as `^0.87.0` stays on 0.87.x and never reaches 0.99 or 1.x, so moving to 1.x is an explicit change. For v1.0.1, npm published about 3.5 hours before the GitHub release object.

## 1. MCP is built into the CLI from 0.99.0: project servers wait for trust, stdio servers inherit Pi's full environment and run beside the harness

- **Date:** 2026-09-29
- **Channel:** `tagged-release`
- **Ancestry evidence:** 8562bcf6 "feat(coding-agent): codemode and MCP" (Armin Ronacher, 2026-09-29T07:12:50Z, closes #10040) is an ancestor of v0.99.0 and not of v0.87.1. It adds packages/mcp and packages/codemode, and adds `mcp.json` to the trust-requiring list (trust-manager.ts L30-L39 at v1.2.0). Built-ins are added to every CLI session at main.ts L577 from the list in extensions/index.ts L7-L14 (llama.cpp, codemode, tool-search, mcp, all replaceable). npm `@earendil-works/pi-mcp` was first published 2026-09-29T16:56:08Z. Hardening tags: d850edee (RFC 9207 `iss`, in v1.0.0, not in v0.99.2) and c5f5b328 (reject `iss` without discovered metadata, in v1.2.0, not in v1.1.0).
- **Receipt:** https://github.com/earendil-works/pi/releases/tag/v0.99.0, https://github.com/earendil-works/pi/commit/8562bcf66a8eeefdf75ddd231ca9d7aa7d64f86e, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/config.ts#L134-L148, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/runtime.ts#L98-L121, https://github.com/earendil-works/pi/blob/v1.2.0/packages/mcp/src/transports/stdio.ts#L94, https://github.com/earendil-works/pi/releases/tag/v0.99.2, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/config.ts#L4-L12, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/mcp.md, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/security.md#L13-L17
- **Half:** both | **Confidence:** high

**What changed.** The profile's "Pi ships ... no MCP" stopped being true on 29 September. MCP is now a built-in extension that speaks stdio and streamable HTTP with OAuth. Servers come from `~/.pi/agent/mcp.json`, a project `.pi/mcp.json`, or `pi.registerMcpServer()`, and are managed with `/mcp` and `pi mcp add|remove|list|login|logout`. The project file is read only when the project is trusted (config.ts L145-L148), and a `.pi/mcp.json` on its own now triggers the trust decision. `"auth": {"provider": ...}` sends a `/login` token as a bearer; project mcp.json cannot specify provider auth; global mcp.json and extension registrations can (config.ts L134; v0.99.2 release) and needs https except on loopback (v0.99.2). Every enabled server connects in the background when a session starts (mcp.md L100), and the CLI loads the built-ins in every mode, headless ones included (main.ts L577). The Pi process spawns stdio servers itself with `{...process.env, ...entry.env}`, because the coding agent never passes `inheritEnv: false` (runtime.ts L111-L121, stdio.ts L94). Each server therefore gets every variable Pi has, including provider keys exported in your shell. `env` and `headers` values can run a command with `!command` (mcp.md L81). The vendor's explanation is Earendil's post "You Said No MCP!" (2026-09-29): the changes MCP needed were "generally useful". Ronacher's "What is Codemode" (2026-10-06) says that with a tool sandbox such as Gondolin "your bash stuff will be sandboxed just fine, but the harness itself will not be." pi.dev's "What we didn't build" list now reads "No MCP / Now with MCP+Codemode" (retrieved 2026-10-13). The 1.0 line hardened it further: issuer checks and per-server credentials in 1.0.0, project overrides that can change a global server's `enabled`, `exposure`, and `toolExposure` in 1.0.1, `--no-mcp` in 1.0.4, and issuer rejection without metadata in 1.2.0.

**Operator consequence.** On 0.99.0+, saying yes to the trust prompt also lets the repo's `.pi/mcp.json` stdio commands and `!command` values run at session start, so read that file before trusting a checkout. If you keep Pi on the host and route only the built-in tools into a VM (the third option on the v1.2.0 security page), MCP stdio servers and codemode stay on the host with your full environment. Put the whole `pi` process inside the container, or start Pi with a scrubbed environment. Three switches turn MCP off: `--no-mcp` for one run, `"extensions": ["-builtin:mcp"]` in settings, or `--no-extensions`, which now drops the built-ins too. SDK sessions load no built-ins (mcp.md L272), so embedders are untouched unless they opt in. The review question moves from "which MCP adapter extension did I install" to "which servers does my global mcp.json start in every session, including CI".

## 2. Codemode lets the model script tool calls: the tool calls stay gated, its model calls do not, and "only" mode hides tools without blocking them

- **Date:** 2026-09-29
- **Channel:** `tagged-release`. The "only"-mode gap is an open issue at v1.2.0 and on main.
- **Ancestry evidence:** Same commit 8562bcf6 (in v0.99.0, not in v0.87.1); 6f1072cc "shrink codemode prompt" is in v1.0.0, not in v0.99.2. Code read at v1.2.0: nested calls go through `runToolCall` with `beforeToolCall: (context) => this._beforeToolCall(context, parentId)` (agent-session.ts L730-L760, hook at L752); the callable set is the active `direct` tools plus every registered `codemode` or `deferred` tool (agent-session.ts L1562-L1571); script model calls go straight to `ctx.modelRegistry` (codemode/execute.ts L502-L504 and L740-L751), with `models` on by default (codemode/index.ts L19-L37); "only" mode filters declarations out of each request in `transformContext` (agent-session.ts L1771-L1789), while execution looks the name up among active tools (agent-loop.ts L708-L716). Issue #10426 was opened 2026-10-03, auto-closed, reopened by maintainers, and is OPEN on 2026-10-13; fix PR #10553 was auto-closed unmerged by the contributor gate.
- **Receipt:** https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L730-L760, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1562-L1571, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/execute.ts#L740-L751, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/index.ts#L501-L525, https://github.com/earendil-works/pi/issues/10426, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L652-L674, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/tool.ts#L371-L390, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/index.ts#L14-L45, https://github.com/earendil-works/pi/releases/tag/v1.0.0
- **Half:** both | **Confidence:** high on the code paths; medium on the "only"-mode bypass (read in code and reported in #10426, not reproduced)

**What changed.** `codemode` runs model-written JavaScript in a QuickJS WASM sandbox with "no Node APIs, file system, network, or timers" (codemode.md L7). Scripts reach the outside only through `tools.<name>()` and `models`. Codemode is off by default, but the MCP extension activates it whenever an enabled server has the default `codemode` exposure (mcp/index.ts L501-L525). `autoEnableCodemode: false` prevents that, and a project value overrides the user's (mcp.md L230). The code settles four authority facts. First, every nested tool call passes validation and the extension `tool_call`/`tool_result` hooks, tagged with `parentToolCallId`, so a permission extension still sees `bash` when a script calls it. Second, scripts can call registered codemode/deferred tools plus active direct tools. Hidden tools and inactive direct tools are excluded, including MCP tools with those exposures; removing an active direct bash tool keeps it out of scripts. Third, `models.classify()` and `models.generateImages()` spend the session's credentials outside the tool pipeline, so a hook cannot separately intercept these model operations after admitting the script, although it can reject the enclosing codemode call; the spend lands on the codemode result and the session cost (codemode.md L93). Fourth, `codemode.mode: "only"` hides direct tool declarations but does not gate execution: a model that names a hidden active tool still runs it (#10426, open). The v1.0.0 release notes report a GPT-5.6 request with default tools and codemode active falling from about 5,300 to 3,300 prompt tokens; that measurement was not reproduced here.

**Operator consequence.** Enabling codemode, including through enabled MCP with default exposure, permits scripts and classifier/image spend with available credentials. Keep tool policy in tool_call handlers. To enforce a codemode-only policy, explicitly allow the top-level codemode entry, deny other disallowed root calls, and inspect nested calls too; rejecting every event without parentToolCallId also blocks codemode itself. This is source-derived policy guidance, not a tested extension. A hook can reject the enclosing script but cannot separately intercept its model operations. Withhold credentials for unwanted classifier/image providers or replace the built-in with an extension constructed with models: false. autoEnableCodemode: false only prevents MCP automatic activation: it neither disables separately activated codemode nor turns off its models API. Watch #10426 and a tagged user-facing models control; only the factory option is established today.

## 3. `--tools` stopped being a strict allowlist once `codemode` or `tool_search` is in the list (1.0.4)

- **Date:** 2026-10-05
- **Channel:** `tagged-release`
- **Ancestry evidence:** 04b97ef0 "fix(coding-agent): keep MCP tools with --tools, add tool patterns and --no-mcp" (2026-10-05T15:21:55Z) is an ancestor of v1.0.4 and not of v1.0.3. At v1.2.0, `_allowlistFiltersMcp` is true only when the list is empty or an entry starts with `mcp__` (agent-session.ts L500-L506), and MCP tools the list does not match stay registered (L1541-L1556). v0.87.0 settings.md L303 called `--tools` "a strict allowlist for all tools"; v1.2.0 cli.md L132 says it "selects the tools declared to the model. It does not remove MCP tools". The `+name`/`-name` syntax arrived in `defaultTools` in 0.99.0 and in `--tools` in 1.1.0; `*` patterns arrived in 1.0.4.
- **Receipt:** https://github.com/earendil-works/pi/releases/tag/v1.0.4, https://github.com/earendil-works/pi/commit/04b97ef0007ad2d55615d0a545163387a701fc67, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/cli.md#L111-L138, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1541-L1556, https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/settings.md#L303, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/mcp-servers.ts#L12-L40, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/index.ts#L466-L488
- **Half:** both | **Confidence:** high

**What changed.** Through 0.87.0 the docs described --tools as a strict allowlist; the profile treated defaultTools as the nearest permission boundary. From 1.0.4, pi --tools read,codemode retains registered MCP tools with codemode/deferred exposure for scripts; active direct tools are also callable, hidden and inactive direct tools are not. An entry starting with mcp__ or an empty allowlist applies MCP filtering. --exclude-tools 'mcp__*' matches namespaced server tools but misses list_mcp_resources, list_mcp_resource_templates, and read_mcp_resource, which can reach resource-enabled non-hidden servers. The release calls retained MCP tools a fix because 0.99.0 through 1.0.3 left pi --tools codemode with no MCP servers. Plain lists without a route to codemode/deferred tools retain the narrower behavior. +codemode,-write edits defaults, project modifiers apply on top of user settings, and * patterns work in selection/exclusion.

**Operator consequence.** Inspect CI/wrapper selections containing codemode or tool_search against the exposure-qualified callable set, not just declarations. Use `--no-mcp` for complete built-in MCP shutdown. For tool exclusions, include all three resource-tool names alongside mcp__*; a namespaced allowlist can narrow access to selected servers. Neither tool visibility nor a name filter proves that stdio processes or command-valued configuration never run. Plain lists such as read,grep,find,ls retain their previous narrower behavior.

## 4. Standalone binaries loaded the launch directory's `.env` into Pi's own environment until 1.1.0, with no advisory

- **Date:** 2026-10-07
- **Channel:** `tagged-release`
- **Ancestry evidence:** Issue #10473 was opened 2026-10-05T07:36:16Z against 1.0.2 and closed 2026-10-06T07:57:31Z with label `bug`. Fix 1ffb6bd6 "fix(coding-agent): disable .env autoload in standalone binary" (2026-10-06) adds `--no-compile-autoload-dotenv` to scripts/build-binaries.sh. It is an ancestor of v1.1.0 and not of v1.0.4. The flag is absent from build-binaries.sh at v0.74.0, v0.79.0, v0.84.0, v0.87.0 and v1.0.4 and present at v1.1.0 (two `bun build --compile` lines at each tag). `gh api repos/earendil-works/pi/security-advisories` still returns only the four advisories published 2026-06-08.
- **Receipt:** https://github.com/earendil-works/pi/issues/10473, https://github.com/earendil-works/pi/commit/1ffb6bd621c29d7c8e38bb3b3c1cdcbda6b6ea90, https://github.com/earendil-works/pi/releases/tag/v1.1.0, https://github.com/earendil-works/pi/blob/v1.0.4/packages/coding-agent/src/config.ts#L605-L611, https://github.com/earendil-works/pi/blob/v1.0.4/packages/coding-agent/src/core/extensions/loader.ts#L853-L854, https://github.com/earendil-works/pi/blob/v1.0.4/packages/coding-agent/src/core/resource-loader.ts#L501-L520
- **Half:** defect | **Confidence:** high on the defect and the affected channel; medium on the trust-bypass chain (read in code, not executed)

**What changed.** The fix commit says "Bun compiled executables load cwd .env files into process.env by default." The reporter demonstrated the defect in 1.0.2. The sampled earlier build recipes also leave Bun dotenv autoload enabled; 1.1.0 disables it. Those historical binary assets were not executed; recipe samples do not prove every asset or environment-specific dotenv selection. The reporter showed two effects: a repo `.env` redirecting `PI_CODING_AGENT_DIR`, and a `SOME_SECRET` from `.env` reaching the provider through `printenv` in the bash tool. Our reading of the code goes one step further. User-level extensions load from `<agentDir>/extensions` (loader.ts L853-L854), and the agent directory is taken from `PI_CODING_AGENT_DIR` (config.ts L605-L611). User-level extensions load before project trust and can answer the `project_trust` event. Source-derived, not reproduced: a checkout with `PI_CODING_AGENT_DIR=./x` in its `.env` could supply code that runs as your own extension before any prompt (resource-loader.ts L501-L520 at v1.0.4). June's GHSA-mqxh-6gq7-558m ("Pi loads project-local extensions without approval", medium) covered this class of problem. This instance got a bug label and no advisory. This Bun-compiled behavior does not apply to ordinary Node-based npm/managed installs or the Node-based Nix package.

**Operator consequence.** If you run the downloaded `pi` binaries, replace anything older than 1.1.0. Then audit sessions started inside checkouts you did not write that contain a `.env`: the checkout's variables could have become Pi's variables before trust. On fleets, check `pi --version` on the binary rather than trusting the install method. An advisory feed would not have flagged this.

## 5. The experimental plugin and server stack left the coding agent; the durable harness now ships separately as experimental Pi Durable

- **Date:** 2026-10-01
- **Channel:** `tagged-release` (removals in v1.0.0 and v1.2.0). `@earendil-works/pi-durable` is a separate npm package documented as experimental.
- **Ancestry evidence:** 7fd478a2 "feat(agent): remove the experimental harness from pi-agent-core" (2026-10-01T12:45:01Z) is in v1.0.0, not in v0.99.2, and deletes packages/agent/docs/plugins.md (blob 9ff9e0b9 present through v0.99.2, absent from v1.0.0 on). 7472cda0 "remove the experimental server stack and the client, protocol, and server packages" and 0104fef1 "replace the facet and service runtime with the chord2 host runtime" (both 2026-10-12T10:41:59Z) are in v1.2.0, not in v1.1.0. coding-agent package.json exports are `.`, `./client`, `./experimental/plugin`, `./rpc-entry` at v1.1.0 and `.`, `./rpc-entry` at v1.2.0, with `@earendil-works/chord` dropped from its dependencies. `git grep -E "coreBash|permission\(sandbox|telemetry\(permission"` at v1.2.0 finds no match (control: one match in plugins.md at v0.87.0). npm: `pi-client`, `pi-protocol` and `pi-server` stop at 1.1.0 (2026-10-07) with no deprecation notice; `pi-durable` latest=1.2.0, first published as 0.0.1 on 2026-09-19; `pi-env` first published 2026-10-05.
- **Receipt:** https://github.com/earendil-works/pi/blob/v1.0.0/packages/agent/CHANGELOG.md#L7, https://github.com/earendil-works/pi/commit/7fd478a2e888ebc28869566f33a186303d372838, https://github.com/earendil-works/pi/commit/7472cda0d6e51dfbf53c03f46b47aa42ac64bf64, https://github.com/earendil-works/pi/releases/tag/v1.2.0, https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L3, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/package.json, https://github.com/earendil-works/pi/blob/v1.2.0/packages/env/README.md
- **Half:** both | **Confidence:** high

**What changed.** Both plugin items on the profile's watch list are closed, though not as it expected. In 1.0.0, `pi-agent-core` shrank to `Agent`, the agent loop, the proxy stream and their types. The harness, sessions, compaction, skills, and the `./node` and `./harness/*` subpaths are gone, and the changelog says "Use `@earendil-works/pi-durable` for durable sessions". That breaking note is in packages/agent/CHANGELOG.md L7 at v1.0.0, not in the GitHub release body. 1.2.0 then deleted the experimental server, client and plugin stack along with its source-only exports. The facet design and its `telemetry(permission(sandbox(coreBash)))` composition no longer exist anywhere in the tree. Their successor is Pi Durable, a crash-resumable conversation, task and document runtime built on pi-ai and chord. It offers subagents and child tasks as library patterns, a per-call execution environment, and `beforeTool` hooks that can block a call ("Needs approval", README L139). The README calls it experimental (L3), and Earendil's "Pi Durable" post (2026-10-01, https://earendil.com/posts/pi-durable/) says it "does not replace the Pi coding agent." A new `pi-env` package deploys a remote execution daemon over SSH for it.

**Operator consequence.** SDK embedders who import harness APIs from `@earendil-works/pi-agent-core` break on 1.0.0. They should move to `pi-durable`, which is experimental, or to the coding agent's own SDK. Migrate consumers of `pi-client`, `pi-protocol` and `pi-server`: their source packages were removed in 1.2.0; their npm latest versions remain 1.1.0, and no successor release was found. No npm deprecation notice was found for these names. This establishes no promise about future patches. Stop watching for a facet host in the CLI. The extension API is the only supported extension surface. The nearest thing to a permission wrapper in the project is now Pi Durable's hooks plus its execution environments, in a package that promises no stability.

## 6. npm installs stopped pinning transitive dependencies in 1.0.1; the installer is the pinned path, and the Nix channel is stuck on 1.1.0

- **Date:** 2026-10-03
- **Channel:** `tagged-release`. The Nix packaging fix is `main-unreleased`.
- **Ancestry evidence:** 581e7ba7 "remove npm shrinkwrap and recommend the managed installer" and c71a496f "add Nix flake (#9137)" (both 2026-10-02) are in v1.0.1 and not in v1.0.0. Registry `_hasShrinkwrap` is true at 0.87.0, 0.99.2 and 1.0.0, and false at 1.0.1 and 1.2.0. `git ls-remote origin refs/heads/stable` returns abe508e1, the v1.1.0 tag commit. Nix workflow run 38318646655 (push of tag v1.2.0, 2026-10-12T22:47:27Z) failed on all three platform builds (aarch64-darwin, x86_64-linux, aarch64-linux) with `update-stable` skipped; the workflow moves `stable` only once all systems build (nix.yml L11-L13). 0a8cfff4 "drop chord and esbuild from the Nix package" (2026-10-12T23:16:21Z) is on main and in no tag.
- **Receipt:** https://github.com/earendil-works/pi/releases/tag/v1.0.1, https://github.com/earendil-works/pi/commit/581e7ba78141a4d8b61cc9d11b8b22ae7e59195e, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/quickstart.md#L7-L30, https://github.com/earendil-works/pi/blob/v1.2.0/.github/workflows/nix.yml#L11-L13, https://github.com/earendil-works/pi/commit/0a8cfff4cbcbbdb0071ebe056f1fcb5710e7fcf0, https://github.com/earendil-works/pi/releases/tag/v1.2.0, https://registry.npmjs.org/@earendil-works/pi-coding-agent, https://registry.npmjs.org/@mariozechner/pi-coding-agent, https://pi.dev/api/installer/releases/latest, https://github.com/earendil-works/pi/actions/runs/38318646655, https://api.github.com/repos/earendil-works/pi/git/ref/heads/stable
- **Half:** both | **Confidence:** high

**What changed.** At the 13 October observation, newest stable is v1.2.0 (GitHub 2026-10-12T23:03:53Z; npm 2026-10-12T23:03:25Z), Node >=22.19.0, npm latest=1.2.0 and legacy-node20=0.74.2, with no prerelease dist-tag or release in the window. The old @mariozechner/pi-coding-agent remains at 0.73.1 and is deprecated in favor of @earendil-works/pi-coding-agent. Registry/API checks on 14 October corroborate this, without establishing an archived 13 October dist-tag history. Through 1.0.0 the npm tarball carried `npm-shrinkwrap.json`, so `npm install -g` got the transitive tree the maintainers tested. 1.0.1 removed it so that library consumers can override dependencies (#5653). `pi update` on a global npm install now recommends moving to the managed installer. The quickstart now leads with `curl -fsSL https://pi.dev/install.sh | sh`, which runs `npm ci --ignore-scripts` against a lockfile served by pi.dev. npm comes second, with `--ignore-scripts` and the note that it "does not pin transitive dependencies". Nix arrived as a third channel the same day. Its `stable` ref did not advance to 1.2.0 because the tag build failed everywhere. So on 13 October, `nix profile add github:earendil-works/pi/stable` installs 1.1.0, while the live docs say it installs "the latest release". The same release pins `brace-expansion` 5.0.12 as a direct dependency (section 10), so that fix survives the shrinkwrap removal.

**Operator consequence.** For reproducible fleets, use the pi.dev installer or maintain your own lockfile; a bare `npm install -g` now floats its dependency tree. Keep `--ignore-scripts`. Nix catches up only after a successful tagged build and advancement of stable; the main repair is not a released fix. Check `pi --version`. Main also pins internal Pi versions (section 12), without pinning every external transitive dependency. Pinning `github:earendil-works/pi/v1.2.0` targets the same build that failed in the vendor's own CI.

## 7. Project trust re-read at 1.2.0: headless runs already refuse protected resources, and the docs now admit a pre-trust `sessionDir` read

- **Date:** 2026-09-22
- **Channel:** `tagged-release` (a docs change, first shipped in v0.87.1). The code has the same effect at v0.87.0 and v1.2.0.
- **Ancestry evidence:** 25cc5c7b "docs(coding-agent): refresh documentation (#9898)" (2026-09-22T14:48:19Z) is in v0.87.1 and v0.99.0 and adds "Project trust is not a complete startup boundary. Pi reads the project `sessionDir` setting ... before it resolves project trust" (security.md L31 at v1.2.0). Pre-trust read: main.ts at v1.2.0 L671-L694 creates the startup settings manager with `SettingsManager.create(cwd, agentDir)`, whose `projectTrusted` defaults to true (settings-manager.ts L333), and takes `sessionDir` from it; v0.87.0 main.ts L675-L680 does the same. Headless default: `resolveProjectTrusted` returns false when no override, extension or saved decision applies and there is no UI (project-trust.ts L78-L88 at v1.2.0; the same `if (!...hasUI) return false` at L86-L88 at v0.87.0), with `defaultProjectTrust: "ask"` as the default (settings-defaults.ts L29); the v0.79.0 security.md already said non-interactive modes "ignore project-local inputs unless `--approve`/`-a` is passed". Context files are gated only by `noContextFiles` (resource-loader.ts L646-L652).
- **Receipt:** https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/security.md#L31, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/project-trust.ts#L78-L88, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/main.ts#L671-L694, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/settings-manager.ts#L333, https://github.com/earendil-works/pi/commit/25cc5c7bf4cbc76b2e134c729eb8d57d521ed749
- **Half:** defect | **Confidence:** high

**What changed.** This corrects two things the profile tells readers. First, "headless modes show no trust prompt" is true, but the risk it implies is not. `-p`, `--mode json` and `--mode rpc` decide trust without a prompt, and under the default `"ask"` they decline. A checkout's `.pi` extensions, settings, skills and MCP servers stay unloaded unless you pass `--approve`, an extension decides, a saved decision exists, or you set `defaultProjectTrust: "always"`. That has been true since trust shipped in v0.79.0. What does load unasked, in every mode including interactive, is the context files: `AGENTS.override.md`, `AGENTS.md` and `CLAUDE.md` (security.md L57). Second, the docs now admit a pre-trust read. The checkout's `.pi/settings.json` `sessionDir` decides where the session is created before trust is resolved, and declining "cannot undo that initial session-directory lookup".

**Operator consequence.** In CI, keep the default and pass `--no-approve` explicitly; reserve `--approve` for repositories you control. The open gap is context files, not headless trust. On checkouts you did not write, run with `--no-context-files` (`-nc`) or grep for `AGENTS.override.md`, in any mode. Before opening Pi in an untrusted checkout, check `.pi/settings.json` for `sessionDir`, or pass `--session-dir` or `PI_CODING_AGENT_SESSION_DIR`, which take precedence (main.ts L690-L694). That keeps your transcript out of a path the repo chose.

## 8. Extensions gained more reach in the 1.0 line, and `before_agent_start` now also gates extension-started runs

- **Date:** 2026-10-12
- **Channel:** `tagged-release` (additions across v0.99.0 to v1.2.0)
- **Ancestry evidence:** Release bodies: v0.99.0 (tool `exposure`, `ctx.executeTool()`, `prepareLoadout()`, `pi.registerVirtualModel()`, `pi.registerMcpServer()`, `provider_stream_event`); v1.0.0 (`ctx.modelRegistry.generateImages()`); v1.0.1 (`pi.registerToolRenderer()`); v1.2.0 (`before_agent_start` union, `reachesTools`). a447ba11 "emit before_agent_start for runs started by custom messages (#10739)" is in v1.2.0, not in v1.1.0. types.ts at v1.2.0 has `modelRegistry` at L337, `executeTool` at L394, `context_with_system` at L896, `before_agent_start` with `messageType: "user"`/`"custom"` at L933-L951, `ContextEditEntryDraft` at L986, `registerMcpServer` at L1894 and `registerVirtualModel` at L1911. extensions.md L118: `turn_end` and `agent_before_settle` handlers propose `context_edit` entries.
- **Receipt:** https://github.com/earendil-works/pi/releases/tag/v0.99.0, https://github.com/earendil-works/pi/releases/tag/v1.2.0, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/extensions/types.ts#L933-L951, https://github.com/earendil-works/pi/commit/a447ba11f3e7760fcff91e924bda8c20033953ea, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/virtual-models.md, https://github.com/earendil-works/pi/commit/6a51a39d4230c6a98948c14202ec76ae220232a6
- **Half:** both | **Confidence:** high

**What changed.** The September additions (authenticated model calls, `context_with_system`, context edits) are all still present at v1.2.0, and the 1.0 line widened the surface. An extension can now register MCP servers for the session, run any callable tool through `ctx.executeTool()` from a tool execution context (not every extension event context), decide which tools the model sees (`exposure`, `prepareLoadout()`), observe raw provider events, generate images with session credentials, and register a virtual model that picks the physical model and thinking level for every request. Pi records the physical model on each assistant message, and `/session` splits cost by physical model, so routing can be audited after the fact. One gate tightened in 1.2.0. Before it, runs started by `pi.sendMessage(..., { triggerTurn: true })` skipped `before_agent_start`, so prompt sections or policies injected there did not apply to extension-started runs. Now they do, and handlers that should act only on user prompts must check `event.messageType === "user"`. 1.2.0 also fixed a quiet control failure: `~` was not expanded in `!pattern` and `-path` entries of the `extensions`, `skills`, `prompts` and `themes` settings, so an exclusion like `!~/skills/pdf` matched nothing (#10765).

**Operator consequence.** On upgrade, grep third-party extensions for `registerVirtualModel`, `registerMcpServer`, `executeTool`, `generateImages`, `provider_stream_event`, `modelRegistry`, `context_with_system` and `context_edit`. `appendContextEdit`, the grep target the profile gives, is the internal SessionManager method; extension code proposes `context_edit` entries instead. Extension authors with `before_agent_start` handlers must handle the new `"custom"` branch on 1.2.0. If you excluded resources with `~` paths, upgrade and confirm they are actually excluded.

## 9. Headless runs fail loudly where they used to pass, and the TUI went fullscreen by default

- **Date:** 2026-10-12
- **Channel:** `tagged-release` (v0.87.1, v1.0.0, v1.2.0)
- **Ancestry evidence:** 441f5767 "warn and exit non-zero in print mode on truncated response" (2026-10-12T14:06:42Z) is in v1.2.0 and not in v1.1.0. The `stopReason === "length"` branch is at print-mode.ts L154-L157 at v1.2.0 and absent at v1.1.0. v0.87.1 Fixed: missing or invalid `--mode` values now exit nonzero (#9045). v1.0.0 Fixed: `--provider` without `--model` now fails (#10236). 88ff80b9 "make fullscreen the default TUI mode" is in v1.0.0, not in v0.99.2, and `tuiMode: "fullscreen"` is at settings-defaults.ts L61 at v1.2.0.
- **Receipt:** https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/modes/print-mode.ts#L154-L157, https://github.com/earendil-works/pi/releases/tag/v0.87.1, https://github.com/earendil-works/pi/releases/tag/v1.0.0, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/settings-defaults.ts#L61
- **Half:** both | **Confidence:** high

**What changed.** Three silent passes became failures. In text print mode (`-p`), a final answer cut off at the model's output limit used to exit 0. From 1.2.0 it prints the partial text, warns on stderr and exits 1; this branch covers text mode only. A bad `--mode` was silently ignored until 0.87.1. `--provider` without `--model` quietly ran another provider's default model until 1.0.0. Interactively, 1.0.0 made the fullscreen TUI the default. `tuiMode: "regular"` or `--tui-mode regular` restores normal scrollback, and 1.0.3 moved transcript top and bottom to `Ctrl+Home`/`Ctrl+End`.

**Operator consequence.** CI jobs that call `pi -p` can start failing on 1.2.0 where answers were being truncated. Those failures are real truncated answers, so raise the output limit or split the task rather than masking the exit code. Scripts that passed `--provider` alone now error instead of running the wrong model, which may explain an earlier cost surprise. If you drive Pi inside tmux or rely on scrollback capture, set `tuiMode: "regular"`.

## 10. Hygiene fixes shipped as release notes, again with no advisory

- **Date:** 2026-10-05
- **Channel:** `tagged-release` (v1.0.0 to v1.2.0)
- **Ancestry evidence:** d677d0ee "save codemode image() output to temp files" (2026-10-04T21:32:43Z) is in v1.0.3, not in v1.0.2; it adds utils/output-files.ts with `OUTPUT_FILE_MODE = 0o600` and exclusive `wx` creation (L15, L26, L33 at v1.2.0) and replaces `createWriteStream(join(tmpdir(), ...))` with default mode in bash-executor.ts and output-accumulator.ts (prefixes at v1.0.2: `pi-bash-`, `pi-output-`, `pi-powershell-`, `pi-mcp-`). v1.0.1 Fixed pins `brace-expansion` 5.0.12 for GHSA-q2hr-2g5m-vwhr (medium), GHSA-qhr7-859c-m2p7 (high) and GHSA-6j4f-fj2g-mc7p (high), all published 2026-09-29 and all CPU or stack-exhaustion denial of service. MCP OAuth issuer checks: d850edee (v1.0.0) and c5f5b328 (v1.2.0); v1.0.4 freezes JS built-ins before codemode scripts run (#10444). `gh api repos/earendil-works/pi/security-advisories` returns 4 advisories, all published 2026-06-08.
- **Receipt:** https://github.com/earendil-works/pi/commit/d677d0ee7134f834dfc163bf6bdb395df9e57c6b, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/utils/output-files.ts#L14-L34, https://github.com/earendil-works/pi/releases/tag/v1.0.1, https://github.com/advisories/GHSA-qhr7-859c-m2p7, https://github.com/earendil-works/pi/security/advisories, https://github.com/advisories/GHSA-q2hr-2g5m-vwhr, https://github.com/advisories/GHSA-6j4f-fj2g-mc7p, https://github.com/advisories/GHSA-jfgx-wxx8-mp94
- **Half:** defect | **Confidence:** high

**What changed.** Before 1.0.3, some bash/PowerShell overflow and binary MCP resource output files used default process permissions. Under umask 022 on a shared temp filesystem, another local user could read them. From 1.0.3 new files use 0600 and exclusive wx creation. The old output names already used randomness. June's GHSA-jfgx-wxx8-mp94 / CVE-2026-54328 was a different mechanism: a local attacker could preplant extension code in a predictable directory and execute it as the Pi user. The October change establishes output confidentiality and exclusive creation, not that same code-execution exploit. No new Pi-repository advisory was found for the output-file or dotenv fixes; the brace-expansion dependency fixes explicitly address three GHSAs. These allow CPU/event-loop exhaustion (GHSA-q2hr-2g5m-vwhr / CVE-2026-102277, fixed in 5.0.12), nested-expansion stack exhaustion (GHSA-qhr7-859c-m2p7 / CVE-2026-102278, fixed in 5.0.11), and recursive-comma/argument stack exhaustion (GHSA-6j4f-fj2g-mc7p / CVE-2026-102276, fixed in 5.0.10). Pi 1.0.1 pins 5.0.12 and covers all three availability defects; none establishes credential theft or arbitrary code execution.

**Operator consequence.** On shared Linux hosts, move to 1.0.3 or later and clear old `pi-bash-*`, `pi-output-*`, `pi-powershell-*` and `pi-mcp-*` files from `/tmp`. Track release notes, not the advisory feed: the repository has published no advisory since 8 June while shipping these fixes.

## 11. Provider changes: ChatGPT sign-in on the OpenAI provider, short-lived Anthropic credentials, Radius in `/login`, and a breaking Azure rename

- **Date:** 2026-09-29
- **Channel:** `tagged-release` (v0.87.1 to v1.0.3)
- **Ancestry evidence:** Release bodies: v0.99.0 (Sign in with ChatGPT on `openai`; the old provider renamed "OpenAI Codex (legacy)"; a stable `deviceId` stored in global settings), v0.99.1 (default OpenAI Codex model `gpt-6.1-sol`), v0.99.2 (Anthropic workload identity federation from `ANTHROPIC_FEDERATION_RULE_ID`, `ANTHROPIC_ORGANIZATION_ID` and `ANTHROPIC_IDENTITY_TOKEN_FILE`, #10242), v1.0.0 (Radius as a top-level `/login` entry placed last, with an offer to add the Radius MCP server to the global `mcp.json`), v1.0.3 (Breaking: `azure-openai-responses` renamed to `azure`, #9714), v0.87.1 (default xAI model Grok 4.7). Radius is described at providers.md L104-L114 at v1.2.0.
- **Receipt:** https://github.com/earendil-works/pi/releases/tag/v0.99.0, https://github.com/earendil-works/pi/releases/tag/v0.99.2, https://github.com/earendil-works/pi/releases/tag/v1.0.3, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/providers.md#L104-L114, https://github.com/earendil-works/pi/releases/tag/v0.99.1, https://github.com/earendil-works/pi/blob/v1.0.3/packages/ai/CHANGELOG.md#L5-L11, https://github.com/earendil-works/pi/blob/v1.0.0/packages/coding-agent/CHANGELOG.md
- **Half:** capability | **Confidence:** high

**What changed.** ChatGPT sign-in arrived on the regular openai provider in 0.99.0; standalone binaries needed the missing-module fix in 0.99.1. The old Codex-subscription provider is labelled legacy. Anthropic workload identity federation is used when its environment is configured and no existing API key/OAuth token takes precedence, allowing CI short-lived access. Radius is documented first on the providers page, and the vendor describes it as an early-alpha gateway with organization controls/analytics. Its verified client integration is a top-level /login entry placed last, plus an offer to configure its MCP server; server-side governance effectiveness was not audited. OpenAI Codex defaults to GPT-6.1 Sol from 0.99.1 and xAI to Grok 4.7 from 0.87.1. The Azure provider ID changed in 1.0.3; old-provider sessions fall back and lose prompt-cache reuse.

**Operator consequence.** Change Azure provider keys/references to azure in auth/configuration before going past 1.0.2; keep API ID azure-openai-responses and AZURE_OPENAI_* variables unchanged. SDK imports become providers/azure, azureProvider, and AZURE_MODELS. Pin models explicitly for comparable costs; section 25 adds the missed default changes. Federation requires clearing higher-precedence credentials where appropriate. Treat Radius controls/analytics as vendor-described until service enforcement is checked; section 26 verifies a narrower client-catalog correction.

## 12. Internal Pi dependency versions are pinned on main, not in 1.2.0

- **Date:** 2026-10-13
- **Channel:** `main-unreleased`
- **Ancestry evidence:** M1a: f13c00fb3a4d77ad3faa815057e31d614d42b3f1, committed 2026-10-13T12:28:15Z, is an ancestor of dated close 3daa2028, absent from v1.2.0, and contained in no tag found. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/f13c00fb3a4d77ad3faa815057e31d614d42b3f1, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/package.json
- **Half:** both | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** Main changes internal @earendil-works Pi dependency ranges from caret versions to exact release versions, including the coding-agent dependencies and Durable dependencies. The changelog identifies incompatible package combinations on fresh installs as the reason. The v1.2.0 manifest still has caret ranges. This does not pin every external transitive dependency.

**Operator consequence.** Keep a lockfile or use the managed installer for reproducibility today. Wait for a containing release before relying on exact internal Pi versions in a bare npm install.

## 13. Session share destination becomes explicit on main, not in 1.2.0

- **Date:** 2026-10-13
- **Channel:** `main-unreleased`
- **Ancestry evidence:** M1b: cea257439d5666ad6a987c065eb3ab0e230a135d, committed 2026-10-13T13:41:13Z, is in 3daa2028, absent from v1.2.0, with no containing tag found. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/cea257439d5666ad6a987c065eb3ab0e230a135d, https://github.com/earendil-works/pi/blob/cea257439d5666ad6a987c065eb3ab0e230a135d/packages/coding-agent/src/modes/interactive/session-share.ts
- **Half:** capability | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** Main adds sessionShareDestination with auto, gist, and radius. Auto keeps the existing choice of authenticated Radius, otherwise GitHub gist. Explicit gist skips Radius; explicit radius requires authentication and does not silently fall back. The added changelog line sits beneath the 1.2.0 heading after the tag; ancestry proves the setting is unreleased.

**Operator consequence.** Do not configure this as an available 1.2.0 destination control. Inspect where existing /share uploads go before using it, and wait for a containing release to pin the destination through this setting.

## 14. Resumed sessions recover active tools on main with explicit CLI selection taking precedence

- **Date:** 2026-10-13
- **Channel:** `main-unreleased`
- **Ancestry evidence:** M1c: 6f2f164ab7e7f1516c4530da396b151ab2f84779, committed 2026-10-13T13:55:12Z, is in 3daa2028, absent from v1.2.0, with no containing tag found. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/6f2f164ab7e7f1516c4530da396b151ab2f84779
- **Half:** both | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** Main restores tools activated during a session when resuming it. Explicit named --tools, --no-tools, or --no-builtin-tools selection takes precedence; additive/subtractive CLI entries apply to the restored set. This changes resumed tool authority and reproducibility but is absent from v1.2.0.

**Operator consequence.** Record explicit tool selections in wrappers until a containing release ships. On that upgrade, check that resumed sessions restore the intended set, including modifiers; do not assume either old or new authority from the session filename alone.

## 15. Bun codemode cancellation and a two-worker limit are repaired only on main

- **Date:** 2026-10-13
- **Channel:** `main-unreleased`
- **Ancestry evidence:** M1d: 3daa20280f6a7c7cbe0935680c9a38fdc3863005, committed 2026-10-13T16:17:31Z, is the dated close, absent from v1.2.0, with no containing tag found. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/3daa20280f6a7c7cbe0935680c9a38fdc3863005
- **Half:** defect | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** On Bun, stopping codemode or reaching a deadline could wait for a non-interruptible built-in to return. Main makes the caller return promptly and limits live workers to two across sessions, counting canceled workers until they actually exit. It does not make every built-in interruptible.

**Operator consequence.** Treat repeated codemode aborts/timeouts as a responsiveness and resource concern on 1.2.0, especially standalone Bun builds. Watch for a containing release; distinguish a returned cancellation from the worker actually stopping.

## 16. The system theme became default and custom themes now validate at startup

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** M2: bf8e4b953183009507e68697750179951095a60c is in v0.99.0 and not v0.87.1. 96abe9a5ad45005cae34ed1c52d42f71fc88bedc is in v1.2.0 and not v1.1.0. First-release dates are 2026-09-29 and 2026-10-12. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/bf8e4b953183009507e68697750179951095a60c, https://github.com/earendil-works/pi/commit/96abe9a5ad45005cae34ed1c52d42f71fc88bedc, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/themes.md
- **Half:** both | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** The default system theme derives colors from the terminal palette from 0.99.0. In 1.2.0, startup theme loading applies the same validation as reload. Custom themes need the new pi.dev theme schema reference, reusable colors under vars, and removal of unsupported metadata; previously accepted files can fail.

**Operator consequence.** Check custom themes before upgrading to 1.2.0. Update their schema reference and move reusable colors into vars; selecting the regular TUI alone does not restore the previous theme default.

## 17. Image and classifier models share the Models surface from 0.99.0

- **Date:** 2026-09-29
- **Channel:** `tagged-release`
- **Ancestry evidence:** M3a: a328aa89ad6e6dc5c5628ff896769532ed3d29df is in v0.99.0, not v0.87.1. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/a328aa89ad6e6dc5c5628ff896769532ed3d29df, https://github.com/earendil-works/pi/blob/v0.99.0/packages/ai/CHANGELOG.md#L5-L9
- **Half:** both | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** pi-ai unifies image models with Provider/Models, adds provider-neutral classifier operations, removes the separate ImagesModels collection and factories and old plural image types, requires type: image on image models, and moves generated model data to version 6. Existing unqualified reads remain chat-only.

**Operator consequence.** SDK consumers must migrate to unified Models/Provider operations and regenerate compatible model data. Do not treat the coding-agent release body as a complete SDK migration guide.

## 18. Custom stream functions must return AssistantMessageEventStream from 1.1.0

- **Date:** 2026-10-07
- **Channel:** `tagged-release`
- **Ancestry evidence:** M3b: 36a686ee8dd73afe8242011db387040890e24093 is in v1.1.0, not v1.0.4. The released ai changelog explicitly records the return-type break. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/36a686ee8dd73afe8242011db387040890e24093, https://github.com/earendil-works/pi/blob/v1.1.0/packages/ai/CHANGELOG.md#L5-L12
- **Half:** both | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** Custom stream functions must return AssistantMessageEventStream; a handwritten generic EventStream subclass no longer type-checks in its place. The change also records response durationMs and optional tool-result durationMs. Deferred results fetched later remain untimed.

**Operator consequence.** Use createAssistantMessageEventStream or the concrete AssistantMessageEventStream contract in custom adapters. Keep measured response/tool durations distinct from deferred work with no recorded duration.

## 19. MCP 1.2.0 stops dispatching calls abandoned during OAuth refresh

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** M4: da0eadf0433d29516287c7e3d7b3db325a446281 is in v1.2.0 and not v1.1.0. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/da0eadf0433d29516287c7e3d7b3db325a446281, https://github.com/earendil-works/pi/blob/v1.2.0/packages/mcp/CHANGELOG.md
- **Half:** defect | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** An HTTP tool call canceled or timed out while waiting for a shared OAuth refresh could still be dispatched after refresh completed, letting the server perform an operation the caller abandoned. A per-request signal now checks cancellation before dispatch. Shared credential refresh continues for other callers. No Pi-repository advisory was found for this repair.

**Operator consequence.** Upgrade HTTP MCP clients to 1.2.0 before relying on cancellation while authorization recovers. The fix does not undo an operation already dispatched to a server.

## 20. Codemode output gets host-memory limits and linear joining

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** M5: 319fecb89b17b7bf8a4b62734de9a6cc6ceabe49 is in v1.0.1, not v1.0.0; f11e50f72ef8cdbdc828ad4196956cdc4cbf891e is in v1.2.0, not v1.1.0. First-release dates are 2026-10-03 and 2026-10-12. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/319fecb89b17b7bf8a4b62734de9a6cc6ceabe49, https://github.com/earendil-works/pi/commit/f11e50f72ef8cdbdc828ad4196956cdc4cbf891e
- **Half:** defect | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** A printing loop could exhaust host memory despite QuickJS isolation. From 1.0.1 script output fails past 16 Mi characters or 100000 output items. In 1.2.0 adjacent text output is joined linearly instead of quadratically, repairing process stalls lasting seconds to minutes. The joining fix also reaches Durable. No Pi-repository advisory was found for either repair.

**Operator consequence.** Move codemode users to 1.2.0 and design scripts to summarize output or write large data through tools. A JavaScript sandbox does not by itself bound host output accumulation or worker lifetimes; the latter still awaits section 15's unreleased repair.

## 21. Hidden custom messages can be revealed in HTML exports from 0.99.0

- **Date:** 2026-09-29
- **Channel:** `tagged-release`
- **Ancestry evidence:** M6a: b2bd111f2d46eed1a4689c32f30fde6306498827 is in v0.99.0, not v0.87.1. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/b2bd111f2d46eed1a4689c32f30fde6306498827
- **Half:** both | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** HTML exports add an H toggle and sidebar control that reveal custom messages marked display: false. Messages remain hidden by default in the viewer. This does not establish when the underlying data first became present in export files.

**Operator consequence.** Treat display flags as presentation, not export redaction. Inspect exported content before sharing, including messages hidden in the terminal or initial viewer state.

## 22. Compaction and branch summaries omit thinking blocks in 1.2.0

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** M6b: 15e7bdc14cae38786c4cde24870ffce888e062cd is in v1.2.0, not v1.1.0. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/15e7bdc14cae38786c4cde24870ffce888e062cd, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/compaction/utils.ts
- **Half:** both | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** serializeConversation omits thinking blocks for compaction, branch summaries, and bug reports. Replayed thinking could make a summary request larger than the live context and cause repeated failures. The code changes summary inputs; it does not erase original session records or establish a measured general cost reduction.

**Operator consequence.** Upgrade sessions that fail compaction with oversized summaries to 1.2.0 and inspect the new summary input. Do not rely on the omission as transcript redaction.

## 23. A starting session is busy during before_agent_start in 1.2.0

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** M7a: a447ba11f3e7760fcff91e924bda8c20033953ea is in v1.2.0, not v1.1.0; this is the additional concurrency part of section 8's event change. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/a447ba11f3e7760fcff91e924bda8c20033953ea, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/CHANGELOG.md
- **Half:** both | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** During before_agent_start, isIdle is now false, sendMessage queues into the starting run, sendUserMessage requires deliverAs, and an abort during startup is honored when the run starts. Custom-message runs also retain handler-added prompt sections rather than removing them after their first tool call and breaking the prompt cache.

**Operator consequence.** Migrate extensions that send messages during startup, not only their user/custom event typing. Test explicit delivery choices rather than attempting a second run while startup handlers are active.

## 24. MCP JSON lists resource capability instead of enumerating counts in 1.2.0

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** M7b: f4cca2dc22ee4ce05ad75e185a025f6c664829c8 is in v1.2.0, not v1.1.0. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/f4cca2dc22ee4ce05ad75e185a025f6c664829c8
- **Half:** both | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** pi mcp list --json replaces resources/resourceTemplates counts with resources: true for capable servers. Connection no longer enumerates resources before registering tools; resource tools list/read on demand. Slow resource listing previously kept a server's tools out of the first prompt.

**Operator consequence.** Update JSON consumers to accept a capability flag instead of counts. For actual resource inventories call the listing tools explicitly; do not read true as a count.

## 25. Kimi K3 and Nemotron 3 Ultra replace retired provider defaults

- **Date:** 2026-10-03
- **Channel:** `tagged-release`
- **Ancestry evidence:** M8: 6f7551516b84278eb9da1c340c8e7bc66be1a6ba, 28fd59086880aa6622c0ca2dfdfca31e879dab99, and e1787702d32e0a7fd7387840c918faa4d1286187 are in v0.99.0, not v0.87.1. 49b9df48952b155937e62fed11f03ad2e15ff3c1 is in v1.0.1, not v1.0.0. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/6f7551516b84278eb9da1c340c8e7bc66be1a6ba, https://github.com/earendil-works/pi/commit/28fd59086880aa6622c0ca2dfdfca31e879dab99, https://github.com/earendil-works/pi/commit/e1787702d32e0a7fd7387840c918faa4d1286187, https://github.com/earendil-works/pi/commit/49b9df48952b155937e62fed11f03ad2e15ff3c1
- **Half:** both | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** Fireworks, Together, and OpenCode Go defaults move to Kimi K3 in 0.99.0 on 29 September as older models disappear. NVIDIA moves to nvidia/nemotron-3-ultra-550b-a55b in 1.0.1 on 3 October after its prior model retires. These are additional to the recorded Codex/xAI changes.

**Operator consequence.** Pin the provider and model in repeatable work, and rebaseline costs/evaluations when intentionally changing them. A harness patch or minor update can change an unpinned model choice.

## 26. Radius and OpenRouter catalogs honor account-specific lists more closely

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** M9a/b: 43d37639912fe15c0926ca5bc7965822ced5615c is in v1.1.0, not v1.0.4. ee409a85f6ad92bf8c6ab8ed735c6cd24f2e749e is in v1.2.0, not v1.1.0. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/43d37639912fe15c0926ca5bc7965822ced5615c, https://github.com/earendil-works/pi/commit/ee409a85f6ad92bf8c6ab8ed735c6cd24f2e749e
- **Half:** both | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** In 1.1.0 a fetched/cached Radius catalog replaces bundled defaults rather than merging organization-disabled models back into the list. In 1.2.0 OpenRouter chat models are narrowed to the key's permitted catalog, with its context/output limits and prices; cached lists and configured regional base URLs are handled. Image and classifier entries are retained. These changes improve client selection, not proof of server-side authorization enforcement.

**Operator consequence.** Refresh catalogs and inspect the available list under each real account/key before delegating model choice. Keep authorization tests separate from menu visibility and cost estimates.

## 27. Prompt-length pricing tiers stop disappearing from model cost estimates

- **Date:** 2026-10-07
- **Channel:** `tagged-release`
- **Ancestry evidence:** M9c: 943a10e744b87d9a593f3dca7406d4671910f490 is in v1.1.0, not v1.0.4. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/943a10e744b87d9a593f3dca7406d4671910f490, https://github.com/earendil-works/pi/blob/v1.1.0/packages/ai/CHANGELOG.md
- **Half:** defect | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** Model-catalog loaders preserve prompt-length pricing tiers for OpenCode, OpenCode Go, OpenRouter, Vercel AI Gateway, Google, MiniMax, and other models.dev providers. Dropping those tiers undercounted some long-prompt costs. OpenRouter time-of-day overrides are still not modeled.

**Operator consequence.** Rebaseline long-context cost comparisons with 1.1.0 or newer accounting. Distinguish a corrected estimate from a provider price change or proof of the final bill.

## 28. Sampling overrides can vary by thinking level from 1.0.2

- **Date:** 2026-10-04
- **Channel:** `tagged-release`
- **Ancestry evidence:** M9d: 76dfb88f63ce51ff2e3fe2ead4fcf1f65f71f121 is in v1.0.2, not v1.0.1. An older changelog heading touched by the commit does not override ancestry. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/76dfb88f63ce51ff2e3fe2ead4fcf1f65f71f121, https://github.com/earendil-works/pi/blob/v1.0.2/packages/coding-agent/CHANGELOG.md
- **Half:** capability | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** models.json gains samplingParamsByThinkingLevel for per-thinking-level sampling overrides on OpenAI-compatible requests. A cost or behavior comparison can change through sampling configuration even if the provider/model stays fixed.

**Operator consequence.** Record thinking level and its sampling overrides with model/version when comparing outcomes. Use the released 1.0.2 contract rather than inferring first availability from where a changelog edit landed.

## 29. Canceled requests no longer discard rotated OAuth tokens in 1.0.3

- **Date:** 2026-10-05
- **Channel:** `tagged-release`
- **Ancestry evidence:** M10: bde882c7471c47dc31af3c622496df66c4fae010 is in v1.0.3, not v1.0.2. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/bde882c7471c47dc31af3c622496df66c4fae010
- **Half:** defect | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** Canceling or superseding a request/catalog refresh could discard a newly rotated token after the provider had invalidated the old one, breaking login. Once credential refresh starts it now finishes and persists its result, bounded by a refresh timeout. Cancellation still controls waiting for the credential lock.

**Operator consequence.** Use 1.0.3 or newer for subscription credentials that rotate on refresh. This deliberate completion of credential refresh differs from section 19's prohibition on dispatching an abandoned MCP operation.

## 30. Unfinished Responses tool calls fail instead of executing mixed commands from 0.99.0

- **Date:** 2026-09-29
- **Channel:** `tagged-release`
- **Ancestry evidence:** M11: 1b2aa0ca0e3b5bf918c31f4cdc28b3d09b4b5c7a is in v0.99.0, not v0.87.1. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/1b2aa0ca0e3b5bf918c31f4cdc28b3d09b4b5c7a, https://github.com/earendil-works/pi/blob/v0.99.0/packages/ai/CHANGELOG.md
- **Half:** defect | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** Responses streams could leave unfinished tool calls in the final assistant message, which the agent treated as runnable. A server omitting output_index could mix arguments or duplicate call IDs and execute the wrong assembled command. The stream now fails if a completed response still has an unfinished tool call. No advisory identifier was found for this fix.

**Operator consequence.** Upgrade compatible Responses-stream integrations to 0.99.0 or newer; treat the new stream error as a rejected malformed call, not a reason to execute a partial command yourself.

## 31. Symlinked AGENTS.md files load in nested worktrees after 1.2.0 repairs deduplication

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** M12a: f1b2e77f5b13b2a199b1052cb79c235451afe7d7 is in v1.2.0, not v1.1.0. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/f1b2e77f5b13b2a199b1052cb79c235451afe7d7
- **Half:** defect | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** A nested worktree whose AGENTS.md symlinked to the main repository's copy could load no project context file. Deduplication now compares the walked directory's real path plus filename rather than the symlink target alone.

**Operator consequence.** Upgrade such worktrees to 1.2.0 and verify the intended instructions are loaded. This is an instruction-loading repair, not a change to context files loading outside project trust.

## 32. Anthropic inline tool definitions preserve cache prefixes from 1.0.1

- **Date:** 2026-10-03
- **Channel:** `tagged-release`
- **Ancestry evidence:** M12b: b271b0a524b29e13c0c9e748aea0d34e1597f2db is in v1.0.1, not v1.0.0. The author independently checked first-tag/predecessor ancestry and read the commit receipt on 14 October; no cloned code was executed.
- **Receipt:** https://github.com/earendil-works/pi/commit/b271b0a524b29e13c0c9e748aea0d34e1597f2db, https://github.com/earendil-works/pi/blob/v1.0.1/packages/ai/CHANGELOG.md
- **Half:** both | **Confidence:** high (primary source and static implementation/release evidence; no runtime reproduction)

**What changed.** Supported native Anthropic mid-conversation tool changes use the inline-tools-2026-09-15 beta. Later tools are defined in tool_addition blocks, keeping the top-level list fixed; same-name redefinitions no longer resend the entire list and invalidate its cached prefix. hasToolRedefinitions is deprecated and the Anthropic SDK moves to 0.129.0.

**Operator consequence.** Use the supported native path rather than recreating a full tool-list resend for every same-name update. Recheck adapters that use hasToolRedefinitions; cache preservation here is a concrete implementation change, not a measured end-to-end savings claim.

## Prior claims re-checked

Read at v1.2.0 unless stated.

- **harness-tagged:** superseded (see section 5). The harness was in every tag from v0.85.0 through v0.99.2. Then 7fd478a2 (in v1.0.0) removed it from pi-agent-core and deleted plugins.md, and 7472cda0 (in v1.2.0) removed the experimental exports. coding-agent exports at v1.2.0 are `.` and `./rpc-entry` only.
- **harnesstax:** historical study recovered in crosscheck and the author's 14 October read at https://arena.ai/blog/coding-agents-harness-tax (dated 2026-09-16, updated 2026-09-18). It sampled 30 tasks each from SWE-bench Lite and Terminal-Bench 2, three attempts per task, capped at 100 turns with fixed 1 September API pricing. Its Fable 5 comparison reports Claude Code 97.8%/$1.33 versus Pi 96.7%/$0.67. This confirms only the historical result. A small system-prompt diff does not establish unchanged harness performance; current v1.2.0 and long-horizon costs remain unmeasured.
- **user-bash-fails-closed:** holds at v1.2.0. `emitUserBash` rethrows handler errors and throws on invalid results (https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/extensions/runner.ts#L1268-L1294).
- **rpc-steer-input-handlers:** holds at v1.2.0. `steer` and `followUp` go through `_queueUserInput`, which runs `_runInputHandlers` (https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L2198-L2224), and rpc-mode.ts L416-L423 passes `source: "rpc"`. Since 0.99.0 the RPC response also returns a "handled" or "queued" disposition.
- **extension-reach-grew:** holds and widened (see section 8). `modelRegistry` is at types.ts L337, `context_with_system` at L896 and `ContextEditEntryDraft` at L986. Grep correction: extension code proposes `context_edit` entries (extensions.md L118); `appendContextEdit` is internal.
- **bug-upload-radius:** holds. bug-report-upload.ts is the identical blob 2548ad7a at v0.87.0, v1.0.0 and v1.2.0, POSTing to `/v1/bug-reports` on the Radius gateway (L20). The offline guard is at https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/modes/interactive/bug-report.ts#L56. 1.2.0 drops thinking blocks from serialized bug reports.
- **compaction-docs-match-package:** holds. `session_compact_failed` is emitted at https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1054-L1055 and typed at types.ts L810-L818.
- **project-trust-system:** holds and widened. `.pi/mcp.json` joined the trust-requiring set (https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/trust-manager.ts#L30-L39), and the default is still `"ask"` (settings-defaults.ts L29). For the headless correction and the pre-trust `sessionDir` read, see section 7.
- **agents-override-before-trust:** holds. `AGENTS.override.md` is still the first candidate (https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/resource-loader.ts#L185), and context loading is gated only by `noContextFiles` (L646-L652). security.md L57 says the same.
- **credential-print-commands:** holds. auth-command.ts is the identical blob 9ee80460 at v0.84.2, v0.87.0, v1.0.0 and v1.2.0, with no gate and no opt-out (https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/cli/auth-command.ts).
- **default-tools-per-project:** changed (see section 3). `defaultTools` still works per project and gained `+name`/`-name`. `--tools` no longer universally filters MCP tools; registered codemode/deferred tools remain callable, while hidden tools and inactive direct tools are excluded (sections 2 and 3).
- **typebox-extension-sdk-validation:** holds. coding-agent depends on `typebox` 1.3.27, and codemode/tool.ts imports `Type` from it.
- **terminating-tool-results:** holds. See `shouldTerminateToolBatch` at https://github.com/earendil-works/pi/blob/v1.2.0/packages/agent/src/agent-loop.ts#L690-L692 and `terminate?: boolean` at types.ts L1462.
- **provider-retry-timeout-controls:** holds. `retry.*`, `retry.provider.timeoutMs` and `httpIdleTimeoutMs` are at https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/settings.md#L125-L132.
- **session-dir-env:** holds. `PI_CODING_AGENT_SESSION_DIR` is at environment-variables.md L82, and the precedence `--session-dir` > env > settings is at main.ts L690-L694. Section 7 covers the project-settings case.
- **earendil-works-package-migration:** holds. `@earendil-works/pi-coding-agent` latest is 1.2.0; `@mariozechner/pi-coding-agent` is latest 0.73.1 and now carries an npm deprecation message pointing to the new scope.
- **jsonc-models-json:** holds. model-config.ts L140 parses `stripJsonComments(...)`, which strips `//` comments and trailing commas (utils/json.ts L1-L2).
- **harness-stream-configuration:** superseded (see section 5). `AgentHarness` and its configuration were removed from pi-agent-core in 1.0.0 (https://github.com/earendil-works/pi/blob/v1.0.0/packages/agent/CHANGELOG.md#L7).
- **security-hardening-cluster:** holds. Browser launch still spawns without a shell (https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/utils/open-browser.ts#L10-L24). MCP OAuth issuer checks extend it (section 10).
- **compaction-event-context:** holds. `reason` and `willRetry` are on `session_before_compact`, `session_compact` and `session_compact_failed` at https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/extensions/types.ts#L791-L818.
- **selective-provider-base-entrypoints:** superseded since v0.80.0 (2026-06-23), more than three months before this window. 717a8f95 "fix(ai): revert selective pi-ai base entrypoints" (2026-06-22) is in v0.80.0 and not in v0.79.10, and https://github.com/earendil-works/pi/blob/v0.80.0/packages/ai/CHANGELOG.md#L10 says "Removed the `@earendil-works/pi-ai/base` selective-provider entrypoint". Neither pi-ai nor pi-agent-core exports `./base` at any tag from v0.80.0 through v1.2.0. The capability survives as `createModels()` plus `./providers/*`.
- **mistral-prompt-cache-cost-accounting:** holds. `payload.promptCacheKey = options.sessionId` is at https://github.com/earendil-works/pi/blob/v1.2.0/packages/ai/src/api/mistral-conversations.ts#L546.
- **dependency-and-session-path-hardening:** holds as a v0.79.8 release fact, with a channel caveat. Since 1.0.1, npm installs no longer carry the shrinkwrap that fixed transitive versions, so those versions are resolved at install time; only the managed installer's lockfile and Nix pin them (section 6). We did not check which undici and protobufjs versions an npm install resolves today.
- **no-governance-in-core (open_question):** changed in part (sections 1 and 2). MCP is now core. Approvals, subagents and plan mode are still absent: a grep of packages/coding-agent/src at v1.2.0 finds only the `--approve` trust flags and a llama.cpp Hugging Face message. pi.dev still lists "No sub-agents", "No permission popups" and "No plan mode".
- **stance.avoid_for, "built-in approval prompts, subagents, plan mode or MCP; Pi ships none":** changed for MCP (section 1). It holds for the other three.
- **Where it stands, "Channel.":** changed. Latest is 1.2.0, the window has eleven tags, all with releases and npm versions and none prerelease, and the installer is now the first documented install path. "Skip 0.85.0" is still accurate but no longer relevant.
- **Where it stands, "The rewrite is tagged, not installable.":** superseded (section 5). The rewrite was removed from the coding agent. Its durable successor is installable from npm as an experimental package.
- **Where it stands, "What Pi does govern.":** holds for the trust prompt and the context-file edge. The headless sentence needs the correction in section 7, and `defaultTools` needs the caveat in section 3.
- **Where it stands, "Extensions now hold more of your authority.":** holds and grew (section 8).
- **Where it stands, "Two extension gates stopped leaking in 0.86.0.":** holds at v1.2.0 (code above). There are still no advisories.
- **Where it stands, "New egress, off by default.":** holds for `/bug`. The window adds user-configured MCP servers (section 1) and Radius sign-in (section 11). `enableInstallTelemetry: true` and `enableAnalytics: false` predate v0.84.2, so they are not new.
- **Where it stands, "Still true.":** holds. `pi auth print-api-key` is unchanged; `PI_SESSION_FILE` is still injected into the bash tool environment (https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/tools/bash.ts#L195-L203); compaction handlers fire.

## Carry-forward answers

1. **Watch: a release note that names the facet host as supported and ships `dist/experimental/plugin.js` on npm.** No, and the item is now moot. plugins.md was deleted in v1.0.0 (7fd478a2), the `./experimental/plugin` and `./client` exports were removed in v1.2.0 (7472cda0), and chord's facet runtime was replaced (0104fef1). The durable line ships as `@earendil-works/pi-durable`, which is experimental (section 5).
2. **Watch: any permission wrapper in the `telemetry(permission(sandbox(coreBash)))` composition reaching a tag.** No. The design doc is gone, and `git grep` finds no such composition at v1.2.0 (control match at v0.87.0). The nearest successors are the CLI's `tool_call` hooks, which now also cover MCP and codemode-nested calls (sections 1 and 2), and Pi Durable's `beforeTool` hooks plus per-call execution environments (experimental).
3. **Watch: a gate or opt-out on `pi auth print-api-key`.** No. auth-command.ts is the same blob 9ee80460 from v0.84.2 through v1.2.0.
4. **Watch: whether non-interactive modes ever get a trust decision.** Yes, and they have since v0.79.0. They decide without a prompt, in this order: `--approve`/`--no-approve`, then an extension, then a saved decision, then `defaultProjectTrust`. The default `"ask"` declines (project-trust.ts L78-L88; section 7). Context files still load in every mode.
5. **Unresolved: when the facet host becomes a supported, installable surface, and whether a permission wrapper ships with it.** Resolved as neither (items 1 and 2).
6. **Unresolved: whether headless runs will ever make a trust decision, or keep loading a checkout's context files unasked.** The first half is yes (item 4). The second is still open by design: context files load regardless of trust in all modes (security.md L57). New this window is the disclosed pre-trust `sessionDir` read.
7. **Unresolved: whether extensions that can spend credentials and rewrite requests get any review or capability boundary.** No. Their reach grew (section 8), and codemode's `models.*` calls bypass `tool_call` (section 2). The only new aid for a permission extension is MCP tool annotations (`readOnlyHint`, `destructiveHint`) exposed via `pi.getAllTools()` (mcp.md, Permissions). Still open.
8. **Unresolved: whether HarnessTax's cost gap holds on long-horizon work.** Still open. No primary source in the window measured it, and the historical study was recovered on 14 October but does not settle current performance.
9. **Parent "Observed after window close" leads.** v0.87.1 (GitHub 2026-09-22T19:43:43Z, npm 2026-09-22T19:42:48Z) is confirmed and is in the ledger. Main 898ab804 ("add durable JSONL storage backend", 2026-09-22T23:33:31Z) first shipped in v0.99.0, not in v0.87.1. The parent's close pin 1a584a7a (Grok 4.7) shipped in v0.87.1.

## Operator questions settled

- **Does this change how an operator can adapt the harness to their workflow?** Yes. MCP and codemode are built in (section 1), the tool-selection grammar grew (`+`/`-`, patterns, `--no-mcp`; section 3), virtual models, tool exposure and `executeTool` arrived (section 8), and the config schemas are now published at `https://pi.dev/schemas/*.schema.json` (v1.2.0).
- **Does this affect session portability, context shaping, extension design, package distribution, RPC, or SDK embedding?** Yes, on every axis:
  - SDK embedding: pi-agent-core lost its harness in 1.0.0 (section 5), and SDK sessions do not load the built-in MCP and codemode.
  - Package distribution: npm installs float transitive dependencies from 1.0.1, and Nix is new but lagging (section 6).
  - Extension design: the `before_agent_start` union is a 1.2.0 breaking change (section 8).
  - RPC: responses carry a disposition (0.99.0), and `agent_settled` reports `aborted` (1.1.0). RPC mode is now the only official remote control surface for the coding agent, because the experimental client and server were removed.
  - Context shaping: mid-conversation system messages carry MCP and tool changes, so earlier messages stay cached.
- **Does Pi intentionally refusing a built-in feature force operators to supply it themselves?** Less than before. MCP moved into core, reversing a stated refusal. Approvals, subagents and plan mode are still extension or example territory in the CLI. Subagents exist as library patterns in Pi Durable.
- **Does this change whether teams should wrap Pi as an agent adapter or borrow an extension-contract idea?** Yes. The experimental client/server path is gone, so wrap the CLI over RPC or embed the coding-agent SDK. Pi Durable is a separate, unstable substrate for long-running applications, not a drop-in for the CLI.
- **Does this make serious agent work easier to start, inspect, or control without hiding authority?** Mixed.
  - Easier to start: the installer, Nix, and MCP in one command.
  - Easier to inspect: the physical model on each message, per-model cost in `/session`, OSC 7501 program status (1.1.0), and nonzero exits on truncation.
  - Mixed on control. Hooks cover nested and MCP calls. But codemode's model calls, "only" mode, MCP's environment inheritance and the `--tools` change all hand more authority to configuration that is easy to miss (sections 1 to 3).

## Leads not promoted

- **Latent Space AINews, 2026-10-02, "Pi 1.0, Pi Durable, and AIE NYC"** (writing feed; gist: the minimalist harness went stable, plus a TypeScript note). The primary record confirms v1.0.0 (2026-10-01) and Earendil's posts "Pi 1.0" and "Pi Durable" (both dated 2026-10-01 at https://earendil.com/posts/pi-1-0/ and https://earendil.com/posts/pi-durable/). The TypeScript remark probably refers to v0.99.0's switch to a TypeScript 7.0 build (#9965); not traced further. Used only through sections 5 and 6.
- **Earendil "Pi 1.0" launch post claim, "Hundreds of thousands of people around the world use Pi every week."** A vendor statement with no primary usage data behind it. Registry context only: npm reports 4,156,854 downloads of `@earendil-works/pi-coding-agent` for 2026-10-05..2026-10-11, against 2,172,934 for 2026-09-14..2026-09-20 (api.npmjs.org). Downloads include CI and installer runs and are not users. Not promoted.
- **pi.dev homepage.** It now shows "Pi 1.0 with Pi Durable" banners, and "What we didn't build" now reads "No MCP / Now with MCP+Codemode" (retrieved 2026-10-13). This is marketing; it is cited in section 1 only as what operators are told.
- **Earendil "You Said No MCP!" (2026-09-29) and lucumr.pocoo.org "What is Codemode" (2026-10-06).** Maintainer-authored posts, quoted in sections 1 and 2 for rationale. Their product claims (codemode loads automatically with MCP; QuickJS with no network, file system or timers) match the v1.2.0 docs and code.
- **PR #10553 "enforce codemode-only tool execution".** Auto-closed by the contributor gate within 11 seconds and never reviewed. The underlying issue #10426 is open (section 2).
- **PRs #10782 and #10784 (deb/rpm builds), #10009 (pi-otel OTLP exporter), #10233 (`--base-url`/`--api-type`).** All closed unmerged. No new install channel or telemetry exporter shipped.
- **mariozechner.at.** No posts in the window; the latest is dated 2026-05-30.
- **Install telemetry.** `enableInstallTelemetry` defaults to true and covers "anonymous install/update reporting and selected provider attribution headers". It predates v0.84.2, so it is not new. Not promoted.
- **v0.99.0 package fixes.** Pinned git extensions loaded with `-e` kept using the first downloaded commit after the ref changed (#9982), and managed git packages auto-installed Pi peer dependencies (#9863). Both are fixed in v0.99.0. These are real integrity fixes but small; recorded here.
- **Social.** The X lane is down this run; no social leads were checked.

## Surfaces checked

- Blobless clones of earendil-works/pi: tags v0.74.0 through v1.2.0, early main 7d75a0e3 and reconstructed dated close 3daa2028, remote branches (`approvals` and `better-approvals` unchanged since June, 2500 and 2455 behind main; `stable` at v1.1.0)
- `gh release list` / `gh release view` (bodies of v0.87.1 through v1.2.0; assets of v0.74.0, v0.87.0 and v1.2.0)
- GitHub compare API spot checks (v1.1.0...v1.2.0, v0.87.1...v0.99.0, v1.2.0...7d75a0e3)
- `git merge-base --is-ancestor` for 8562bcf6, 7fd478a2, 7472cda0, 0104fef1, 1ffb6bd6, 04b97ef0, 581e7ba7, c71a496f, 0a8cfff4, d677d0ee, 441f5767, a447ba11, 88ff80b9, d850edee, c5f5b328, 6f1072cc, 25cc5c7b, 717a8f95, 898ab804 and 1a584a7a
- Code at v1.2.0:
  - coding-agent: agent-session.ts, extensions/types.ts, extensions/runner.ts, extensions/mcp/{index,config,runtime}.ts, extensions/codemode/{tool,execute,index}.ts, extensions/index.ts, main.ts, project-trust.ts, trust-manager.ts, settings-manager.ts, settings-defaults.ts, resource-loader.ts, print-mode.ts, tools/bash.ts, utils/output-files.ts, utils/open-browser.ts, model-config.ts, cli/auth-command.ts, bug-report-upload.ts, interactive/bug-report.ts, rpc-mode.ts, startup-ui.ts
  - other packages: packages/agent/src/agent-loop.ts, packages/mcp/src/transports/stdio.ts, packages/ai mistral-conversations.ts
- Code at earlier tags: config.ts and extensions/loader.ts at v1.0.4; print-mode.ts at v1.1.0; project-trust.ts, main.ts and settings.md at v0.87.0; build-binaries.sh at six tags; package.json exports at eleven tags
- Docs at v1.2.0: security, mcp, codemode, cli, quickstart, settings, providers, environment-variables, virtual-models, extensions, session-format, and the durable README. security.md at v0.79.0, v0.82.0 and v0.84.0. packages/agent/CHANGELOG.md at v1.0.0; packages/ai/CHANGELOG.md at v0.80.0
- Issues #10473 and #10426; PRs #10553 and #10040; `gh search prs` for permission, sandbox, approval and trust (created on or after 2026-09-21)
- `gh api repos/earendil-works/pi/security-advisories`; `gh api advisories?affects=@earendil-works/pi-coding-agent`; GHSA-q2hr-2g5m-vwhr, GHSA-qhr7-859c-m2p7 and GHSA-6j4f-fj2g-mc7p
- Nix workflow runs (`gh run list --workflow nix.yml`, `gh run view 38318646655`)
- npm: dist-tags and publish times for pi-coding-agent, pi-agent-core, pi-ai, chord, pi-codemode, pi-durable, pi-env, pi-mcp, pi-telemetry, pi-tui, pi-client, pi-protocol and pi-server; `_hasShrinkwrap`, fileCount, unpackedSize and bin at five versions; the `@mariozechner/pi-coding-agent` deprecation; download counts
- pi.dev: the homepage, news.xml, install.sh and install.ps1 (read as data, not run), `/api/installer/releases/latest`, and the live docs pages security, mcp, codemode, cli and quickstart
- earendil.com posts pi-1-0, pi-durable and you-said-no-mcp; lucumr.pocoo.org feed and the "What is Codemode" post; the mariozechner.at index
- runs/2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0/feeds/writing.json (161 items; one Pi item)

## Not reached

- No behavior was reproduced by running Pi. The `.env` trust-bypass chain (section 4), the codemode "only"-mode bypass (section 2) and the pre-trust `sessionDir` effect (section 7) are read from code, docs and the reporters' issues. Cloned code is not executed in this lane.
- A full read of the 419 commits from v0.87.0 to v1.2.0; the material changes rest on release bodies plus targeted code reads.
- Which transitive dependency versions a bare `npm install -g @earendil-works/pi-coding-agent@1.2.0` resolves today.
- Radius's terms, pricing and data handling at radius.earendil.com, and Pi Durable's and pi-env's own security model beyond the README.
- npm dist-tag history (the registry does not keep it).
- Current or long-horizon HarnessTax replication. The original historical study body was recovered during verification on 14 October.
- The pi.dev/packages ecosystem listing, which is still the source contract's open question.

## Crosscheck applied

Applied the 14 October adversarial crosscheck: seven corrected sections and four verified sections retained; none was wholly refuted or unverifiable. Removed the incorrect blanket root-hook rule and incomplete MCP exclusion advice, narrowed historical binary claims and advisory comparisons, corrected provider/auth migrations, and retired the small-prompt-diff performance inference. Reconstructed inclusive 13 October main at 3daa2028 (+22, not +8). Independently checked all 27 miss commits against first tags/predecessors and the dated close, and read their primary diffs/changelogs; sections 12 to 32 cover M1 to M12, grouping related fixes. The four M1 changes remain main-unreleased. HarnessTax was recovered as historical evidence only. Current registry checks on 14 October corroborate, rather than archive, the 13 October observations. No cloned code, installer, npm install, or site build was executed. No repository-writing git command was run.
