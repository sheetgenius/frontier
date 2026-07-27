# Harvest -- Agent Zero (primary sources)

Window: 2026-07-02 .. 2026-07-27. Repo: `agent0ai/agent-zero` (fork=false,
parent=null, default_branch=main). Harvested 2026-07-27.

Ancestry method: channel claims are resolved with the GitHub compare API as
`<commit>...<tag>`. `status=ahead` means the tag contains the commit. Dates are
ISO from the GitHub API. Agent Zero release notes do not reference PR numbers,
so receipts are tag URLs plus commit SHAs.

Baseline at window open: `v2.2`, commit
`6580ae8becdbf2811395b421bacf77a327612509`, published 2026-07-02T16:03:38Z,
commit-dated 2026-07-02T15:29:40Z.

Four tagged releases landed after the baseline:

| tag | published (ISO) | tag commit | commits since prior tag | files touched |
|-----|-----------------|------------|-------------------------|---------------|
| `v2.3` | 2026-07-09T16:52:23Z | `3bb40576affb41e0ce5180e38751e211f5f21036` | 44 | 214 |
| `v2.4` | 2026-07-10T18:09:44Z | `fddcc3deea3dea47e2d7a0bc21f10d7c7d4abd3d` | 16 | 79 |
| `v2.5` | 2026-07-17T16:36:06Z | `d1d48bc9c0e6e253e87c354ce757c518820c6e25` | 41 | 220 |
| `v2.6` | 2026-07-23T18:22:57Z | `391fab94691d68956269b509e342ae1e1b876864` | 15 | 65 |

**There is no main-unreleased work.** `compare/v2.6...main` returns
`status=identical, ahead_by=0, behind_by=0`. `main` HEAD is
`391fab94691d68956269b509e342ae1e1b876864`, 2026-07-23T17:29:19Z -- the same
commit as the `v2.6` tag. Every change in this harvest is `tagged-release`.

No repository security advisories are published for `agent0ai/agent-zero`.

---

## 1. The release channel model: main tags at HEAD, `ready` is the only preview

**What changed.** Nothing was announced, but the branch topology answers the
channel question directly and contrasts sharply with OpenHands in the same
window.

**Receipt.** Branch listing via `repos/agent0ai/agent-zero/branches`:

| branch | head | vs `main` |
|--------|------|-----------|
| `main` | `391fab946` | -- (identical to `v2.6`) |
| `ready` | `a76b0b5b7` | `status=ahead, ahead_by=7, behind_by=0` |
| `development` | `983fc50a7` | `status=behind, behind_by=220` |
| `testing` | `b6d152c87` | `status=behind, behind_by=676` |

**Date.** Observed 2026-07-27.

**Channel.** `main` is `tagged-release` at all times; `ready` is the only live
`preview-or-beta` surface, at 7 commits.

**Operator consequence.** An Agent Zero operator running `main` is running a
released version by construction -- there is no window in which `main` carries
unshipped fixes. `development` and `testing` are stale and should not be treated
as preview channels.

---

## 2. Bring Your Own Browser: the agent can now drive the operator's real
   host browser

**What changed.** A BYOB (Bring Your Own Browser) host-browser selection lets
Agent Zero drive a browser running on the host machine -- Chrome, Brave, Opera,
Vivaldi, and Chromium-family -- instead of only the containerized browser.
Selection is normalized in config, exposed in Browser Settings from a
CLI-advertised inventory, and forwarded through connector browser operations.
Endpoint selection was then refined to automatic, advertised debug endpoints, or
a validated custom endpoint. A related change adds configurable per-chat versus
shared tab scope with a maximum-tabs-per-chat cap.

**Receipt.** Commit `7298a88fd`, 2026-07-04T16:33:58Z, "Add BYOB host browser
selection" -- message states it exposes host browser ids, labels, and
`available_browsers` through A0 connector metadata and the `browser_runtime`
API. Refinement commit `afa5231a5`, 2026-07-05T17:59:30Z, "Refine BYOB host
browser endpoint selection". Discovery-address handling commit `2e32a2f8d`,
2026-07-14T14:10:13Z.
Ancestry: `7298a88fd...v2.3` = `ahead`.
Release note: https://github.com/agent0ai/agent-zero/releases/tag/v2.3

**Date.** 2026-07-04 (commit); 2026-07-09 (tag `v2.3`).

**Channel.** `tagged-release` (`v2.3`).

**Operator consequence.** The container boundary that previously separated the
agent's browsing from the operator's own browser profile is now optional -- an
agent pointed at a host browser inherits that browser's live sessions, cookies,
and logged-in accounts.

---

## 3. Host access moved out of the Core WebUI and into the A0 Launcher

**What changed.** The largest isolation-model change of the window. A Launcher
gateway protocol was added with host access controls, file permission scoping
(read / write / exec), sync-status integration, Computer Use approval routing,
and reconnect/disconnect lifecycle management. Then the Core WebUI gateway menu
was deleted. The `v2.5` release note states plainly that host access is now
fully owned by A0 Launcher and the Core WebUI gateway menu has been removed.

**Receipt.** Commit sequence, all `status=ahead` against `v2.5`:

| commit | date (ISO) | subject |
|--------|------------|---------|
| `dafe5a33b` | 2026-07-14T15:19:48Z | Add Launcher host gateway protocol support |
| `df6065d5b` | 2026-07-14T19:27:09Z | Polish Launcher host access controls |
| `3271ff43e` | 2026-07-14T20:43:52Z | Report Host access control failures |
| `b11a57424` | 2026-07-15T12:12:19Z | Split Launcher host file permissions |
| `38a594544` | 2026-07-16T11:26:13Z | Route Computer Use approval through Launcher |
| `4b0c575f0` | 2026-07-17T13:59:30Z | Remove Launcher Host access controls from Core |

Commit `b11a57424` message: advertises the file-write gateway capability while
preserving legacy Files scopes as read/write access; renders five Host access
switches in Core and enforces read/write/exec dependencies.

Commit `38a594544` message: makes `/computer-use on` and `off` act on the
current Launcher Host access lease while preserving A0 CLI guidance in ordinary
WebUI sessions.

Commit `4b0c575f0` message: deletes the Core WebUI gateway menu and its
client-side control store so Host access stays owned by A0 Launcher; keeps
`/computer-use` informational in the WebUI and directs users to Launcher or A0
CLI for host changes. Files removed include
`plugins/_a0_connector/webui/launcher-gateway-store.js` and
`plugins/_a0_connector/extensions/webui/sync-status-end/launcher-gateway.html`.

Release note: https://github.com/agent0ai/agent-zero/releases/tag/v2.5

**Date.** 2026-07-14 .. 2026-07-17 (commits); 2026-07-17 (tag `v2.5`).

**Channel.** `tagged-release` (`v2.5`).

**Operator consequence.** Host access is now leased through a separate
privileged component with read/write/exec scoping, and the WebUI can no longer
grant it -- a genuine privilege separation, but it also means an operator who
runs Agent Zero without the Launcher loses the in-product path to grant or
revoke host access.

---

## 4. Runtime secret masking was added in v2.5, then deliberately narrowed in v2.6

**What changed, in two steps.**

`v2.5` added masking of runtime `.env` values in tool results, history, logs,
and streamed output, via the agent-facing SecretsManager.

`v2.6` narrowed it. Masking of `usr/.env` values is now limited to API keys and
login/password credentials, because blanket masking was corrupting ordinary chat
text. Global and project secrets remain fully protected.

**Receipt.** Commit `55456df29`, 2026-07-17T14:23:46Z, "Mask runtime .env values
in agent output"; ancestry `55456df29...v2.5` = `ahead`.
Release note: https://github.com/agent0ai/agent-zero/releases/tag/v2.5

Commit `fd795bda8`, 2026-07-19T11:22:57Z, "Limit runtime secret redaction to
credentials"; message states it filters `usr/.env` masking to API keys and
login/password credentials so ordinary settings cannot corrupt chat text, keeps
global and project secrets protected, and covers full-response, prompt, and
streaming behavior with a regression test. Ancestry `fd795bda8...v2.6` =
`ahead`.
Release note: https://github.com/agent0ai/agent-zero/releases/tag/v2.6

**Date.** 2026-07-17 (add, `v2.5`); 2026-07-19 (narrow, `v2.6`).

**Channel.** `tagged-release` both times.

**Operator consequence.** On `v2.6`, a value in `usr/.env` that is not shaped
like an API key or a login/password pair is no longer redacted from agent output
-- operators storing non-credential-shaped secrets there (webhook URLs, internal
hostnames, licence strings) should move them to global or project secrets, which
remain fully masked.

---

## 5. Chat compaction made resumable and secret-safe

**What changed.** Compaction now preserves authorization, evidence, pending
work, loaded skills, and secret references in a fixed resumable-state summary,
and clears the stale context-window cache after compaction.

**Receipt.** Commit `425cfc283`, 2026-07-18T21:15:21Z, "Make chat compaction
resumable and secret-safe" -- message states it covers the prompt and
persistence contracts with focused tests. Ancestry `425cfc283...v2.6` = `ahead`.
Release note: https://github.com/agent0ai/agent-zero/releases/tag/v2.6

**Date.** 2026-07-18 (commit); 2026-07-23 (tag `v2.6`).

**Channel.** `tagged-release` (`v2.6`).

**Operator consequence.** A long run that hits compaction no longer silently
loses the record of what it was authorized to do or which secrets it had
references to -- previously the summary could drop exactly the state a resumed
agent needed to behave correctly.

---

## 6. Two reliability guards for runaway and interrupted agents

### 6a. Circuit breaker for runaway response loops

**What changed.** A configurable limit on consecutive malformed or repeated
model outputs prevents infinite loops. The threshold is exposed in Agent
Settings and a clear stop notice is shown when triggered.

**Receipt.** Release note
https://github.com/agent0ai/agent-zero/releases/tag/v2.4 (tag commit
`fddcc3deea3dea47e2d7a0bc21f10d7c7d4abd3d`).

**Date.** 2026-07-10.

**Channel.** `tagged-release` (`v2.4`).

**Operator consequence.** A model stuck emitting malformed tool calls now stops
and says so instead of burning tokens in a loop until the operator notices.

### 6b. Crash-safe chat persistence

**What changed.** Serialized chats are written to a temporary file, fsynced, and
atomically swapped into place, so an interrupted save never corrupts existing
chat data.

**Receipt.** Release note
https://github.com/agent0ai/agent-zero/releases/tag/v2.4

**Date.** 2026-07-10.

**Channel.** `tagged-release` (`v2.4`).

**Operator consequence.** A crash or kill during a save can no longer leave a
half-written chat file that takes the conversation with it.

---

## 7. Breaking change: model presets became a single global collection

**What changed.** Model presets are now one global collection covering main,
utility, and embedding models. Project-scoped preset definitions were REMOVED;
scope configs now store only a preset name. The change includes rename and
retire propagation across plugin configs, saved chats, and live contexts, plus a
startup migration from a remote or bundled fallback.

**Receipt.** Release note
https://github.com/agent0ai/agent-zero/releases/tag/v2.5 (tag commit
`d1d48bc9c0e6e253e87c354ce757c518820c6e25`).

**Date.** 2026-07-17.

**Channel.** `tagged-release` (`v2.5`).

**Operator consequence.** Any per-project model preset definition is discarded
on upgrade to `v2.5` and replaced by a name reference into the global
collection -- verify each project resolves to the model you expect after the
startup migration runs.

Related default churn worth noting for cost tracking: the global default and
Balance preset moved to `google/gemini-3.1-flash-lite` on OpenRouter in `v2.4`
(2026-07-10), then to `openai/gpt-5.6-terra` on OpenRouter in `v2.5`
(2026-07-17) -- two default-model changes in eight days.

---

## 8. Skills stopped being prompt pins and became chat history

**What changed.** Skills are now loaded into chat history instead of being
injected as scope-wide prompt pins; legacy active-skill prompt injection is
disabled and the legacy skill prompt cleanup code was removed. Relevant-skill
recall was simplified to structural matching on the raw user message (name
terms, tag and trigger phrases, description phrases) instead of a stopword
catalog.

**Receipt.** Release note
https://github.com/agent0ai/agent-zero/releases/tag/v2.3 (tag commit
`3bb40576affb41e0ce5180e38751e211f5f21036`).

**Date.** 2026-07-09.

**Channel.** `tagged-release` (`v2.3`).

**Operator consequence.** Skill text now consumes and ages out of the context
window like any other message rather than persisting as a pinned system
instruction -- a skill that was reliably in force for a long run is no longer
guaranteed to be, since it can be compacted away.

Partial mitigation two tags later: the `v2.6` resumable-compaction change
(section 5, commit `425cfc283`) lists "loaded skills" among the state preserved
in the fixed resumable-state summary. That preserves a REFERENCE to which skills
were loaded across a compaction event; the release notes do not claim the full
skill text is restored.

---

## 9. Three built-in plugins shipped: Orchestrator, Slash Commands, Goal
   Management

**What changed.** `v2.3` added built-in `_orchestrator` (adapter status APIs,
settings UI, per-agent skill references), `_commands` (command storage, picker
UI, bundled canonical command pack, legacy migration), and `_goal` (per-chat
goal storage, WebUI goal strip, `/goal` slash command, agent-facing goal tools).
Plugins declaring the external settings section are exposed from the External
Services settings page.

`v2.4` added Gemini CLI as a registered orchestrator backend with auth
detection, headless workflow support, and exposed settings and status metadata,
and refreshes an existing Codex CLI installation after self-update. `v2.6`
consolidated the goal tool: the separate create, get, update, and storage
modules were replaced with a single multi-action goal tool.

**Receipt.** Release notes
https://github.com/agent0ai/agent-zero/releases/tag/v2.3 ,
https://github.com/agent0ai/agent-zero/releases/tag/v2.4 ,
https://github.com/agent0ai/agent-zero/releases/tag/v2.6

**Date.** 2026-07-09, 2026-07-10, 2026-07-23.

**Channel.** `tagged-release` (`v2.3`, `v2.4`, `v2.6`).

**Operator consequence.** Agent Zero now ships its own orchestration layer that
launches other coding CLIs (Codex, Gemini CLI) as backends -- the workcell is
becoming a harness-of-harnesses, and each registered backend brings its own
credential surface.

---

## 10. Process and session lifecycle hardening in v2.6

**What changed.** Terminated local, SSH, and TTY shells are now detected and
treated as definitive command completion, with new `is_terminated` and
`get_exit_code` helpers across session types; terminated sessions are recreated
lazily before the next command. Callables and arguments are released after task
completion or cancellation to prevent retained references, child tasks are
cleaned up, and best-effort destructors were added for local and SSH sessions. A
stale traceback retained by Paramiko's optional-import cache -- which was
keeping the code-execution tool-loading stack and the first agent in memory --
was cleared. Malformed response arguments now raise a repairable exception
instead of surfacing a `KeyError`, and fenced or structurally broken tool intent
is routed through the existing misformat repair path.

**Receipt.** Release note
https://github.com/agent0ai/agent-zero/releases/tag/v2.6 (tag commit
`391fab94691d68956269b509e342ae1e1b876864`).

Earlier companion in `v2.3`: PTY reset hangs fixed by starting local shells in a
new process session and escalating from SIGTERM to SIGKILL when a foreground
command refuses to exit.
https://github.com/agent0ai/agent-zero/releases/tag/v2.3

**Date.** 2026-07-23.

**Channel.** `tagged-release` (`v2.6`).

**Operator consequence.** Long-lived Agent Zero instances were leaking whole
agent objects and code-execution stacks through an import-cache traceback and
uncleaned task references -- operators who restart on a schedule to control
memory should retest that assumption on `v2.6`.

---

## 11. Local OpenAI-compatible providers defaulted away from the Responses API

**What changed.** Local and broad OpenAI-compatible chat providers -- LM Studio,
llama.cpp, Ollama, Ollama Cloud, oMLX, vLLM, and other compatible endpoints --
now default to the chat-completions transport, on the stated grounds that their
Responses API implementations are often missing or unstable. Venice was
defaulted to chat-completions as well and saved Venice model configs were
migrated. Responses provider state is now cleared after history compaction so
stale provider-side context does not survive a local-history rewrite.

**Receipt.** Release note
https://github.com/agent0ai/agent-zero/releases/tag/v2.3

**Date.** 2026-07-09.

**Channel.** `tagged-release` (`v2.3`).

**Operator consequence.** Operators running local models get a transport switch
without opting in; anything that depended on Responses-API-only behavior against
a local endpoint changes shape on upgrade to `v2.3`.

---

## Channel summary

| channel | count | note |
|---------|-------|------|
| `tagged-release` | 4 | `v2.3`, `v2.4`, `v2.5`, `v2.6` |
| `main-unreleased` | 0 | `main` is identical to `v2.6` |
| `preview-or-beta` | 1 branch | `ready`, 7 commits ahead of `main`; no preview tag exists |

Cadence: four tags in 14 days (2026-07-09 to 2026-07-23), roughly the same as
the prior window. Release size is uneven -- 44 and 41 commits for `v2.3` and
`v2.5`, 16 and 15 for `v2.4` and `v2.6`.

## Open questions carried forward

- Does running Agent Zero without the A0 Launcher leave any supported path to
  grant or revoke host access, or is Launcher now effectively required for
  Computer Use?
- With BYOB pointing the agent at a host browser, what -- if anything -- scopes
  which host-browser profiles and sessions the agent may use?
- Does the narrowed `usr/.env` redaction in `v2.6` have a documented shape
  definition an operator can check a secret against, or is it heuristic?
- Skills now live in chat history and `v2.6` preserves "loaded skills" in the
  resumable-state summary -- but does that restore the skill text, or only the
  fact that a skill was loaded? The release note does not say, and the
  difference decides whether a skill still constrains behavior after compaction.
