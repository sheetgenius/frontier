---
schema_version: bitter.frontier_harvest.v0
provider: deepseek-harness
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/deepseek-harness.yml
channels_present: [preview-or-beta, main-unreleased]
window_volume: 16 in-window tags (6 rc, 10 alpha), 0 non-prerelease; 9 material changes, 5 security-relevant, 4 capability-bearing
lane: primary sources, researcher; public repo confirmed a mirror of a private GitHub repo
---

# Harvest -- deepseek-harness (primary sources)

Punctuation is ASCII. Star count is not adoption. Identity: deepseek-ai/deepseek-harness, MIT, created 2026-08-13, default branch master, has_issues=false, has_discussions=true, not a fork. Every in-window cut is prerelease, so every item below is `preview-or-beta` unless marked. Pins used throughout: newest in-window rc `dsh-v0.1.5-rc.2` = fb2c4b9e698e30edb738bca4cf0618587db7d203 (2026-09-10); newest in-window tag `dsh-v0.1.6-alpha.2` = ddefc45fbc7f8e46dd73185e68295696d1297887 (2026-09-17); parent pin rc.8 = 141eb6fef83422698aef7a981029e843e8161534.

## 1. Still no non-prerelease tag; the project split into an rc line and an alpha line, and npm latest moved to 0.1.5-rc.2 by hand

- **Date:** 2026-08-21 to 2026-09-17
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** `gh api repos/deepseek-ai/deepseek-harness/releases` -> 20 release objects, all prerelease=true, none draft. Tags in window: 0.1.1-rc.1/rc.2, 0.1.2-alpha.1..5, 0.1.2-rc.1, 0.1.3-alpha.1/2, 0.1.5-alpha.1/2, 0.1.5-rc.1/rc.2, 0.1.6-alpha.1/2. No 0.1.4. Every consecutive compare is status=ahead, behind_by=0 through 0.1.5-rc.2 (e.g. rc.8...0.1.1-rc.1 ahead_by=172; 0.1.1-rc.2...0.1.2-alpha.1 ahead_by=1079); 0.1.5-rc.2...0.1.6-alpha.1 ahead_by=800, behind_by=0. dsh-v0.1.5-rc.3 (a4c74a91, committed 2026-09-22) is a tag with no release object and diverges from 0.1.6-alpha.1 (behind_by=3): a release branch, OUT. `scripts/release/families.ts` at ddefc45f lines 355-361: prerelease `alpha`/`canary` publish to those dist-tags, every other prerelease to `next`; a prerelease never takes `latest`, and no workflow in `.github/workflows/` runs `npm dist-tag`. npm (observed 2026-09-23): `@deepseek-ai/dsh` latest=0.1.5-rc.2 (published 2026-09-10T14:57:10Z), next=0.1.5-rc.3 (OUT), alpha=0.1.7-alpha.2 (OUT). 0.1.2-alpha.1 and 0.1.3-alpha.1 are tags with no npm version.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.5-rc.2
- **Half:** neither (channel) | **Confidence:** high on tags and policy; medium on when `latest` moved

**What changed.** There are now two preview streams: rc builds (0.1.5-rc.2 is the newest in window) and faster alpha builds (0.1.6-alpha.2), each with its own dist-tag. `latest` was promoted to 0.1.5-rc.2 outside the publish script, so the registry does not record when. At window close, applying the script's rules to publish times, next resolved to 0.1.5-rc.2 and alpha to 0.1.6-alpha.2 (inferred, not observed on 2026-09-21).

**Operator consequence.** `npx @deepseek-ai/dsh web` installs 0.1.5-rc.2, still a release candidate. Pin `@0.1.5-rc.2` explicitly; do not float on `@alpha`, which carries the telemetry default in section 4. Nothing here is a stable channel. Re-check next window for a non-prerelease tag and for who moves `latest`.

## 2. The Web UI now requires authentication on every /api request; the Host fence comment still says it is not an auth layer

- **Date:** first in dsh-v0.1.2-alpha.1 (2026-08-27); in rc since dsh-v0.1.2-rc.1 (2026-09-03)
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** `packages/client/connection/src/rpc-host.ts` at dsh-v0.1.2-alpha.1, dsh-v0.1.2-rc.1, dsh-v0.1.5-rc.2 and ddefc45f: `requestRejection` returns 403 unless `isTrustedApiRequest` passes, then 401 unless `browserAuth.isAuthenticated(request)` (lines 96-99 at ddefc45f). The file does not exist at dsh-v0.1.1-rc.2. `browser-auth.ts` at ddefc45f: a 32-byte per-process launch token in the printed URL is exchanged once for an HMAC-signed, authority-bound cookie (`dsh-auth-<sha256(authority)>`); `cookieMaxAgeDays` default 30 (`index.ts` Config); signing secret stored through the credential provider. There is no loopback exemption in `isAuthenticated`. `api-request-trust.ts` at ddefc45f keeps the header "this fence is not an auth layer" (line 13); that is now true by design, since auth sits in `browser-auth.ts`. Release notes word it narrower than the code: "Require the one-time token in the launch URL when accessing the Web interface over a network."
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/fb2c4b9e698e30edb738bca4cf0618587db7d203/packages/client/connection/src/rpc-host.ts
- **Half:** both | security-relevant | **Confidence:** high on code; not probed

**What changed.** Carry-forward answered yes: the Web UI has an authentication layer, a bearer launch token turned into a 30-day cookie, applied to loopback too. It is still a plugin package (`@deepseek-ai/dsh-client-connection`), and architecture.md still says any row can be replaced (section 3).

**Operator consequence.** Upgrade any exposed rc.8 or 0.1.1 install to >= 0.1.2-rc.1; before that, anything that could reach the port could drive the agent. Treat the launch URL printed by `dsh web` as a credential: it lands in terminal scrollback and logs, and any browser that opens it holds a 30-day session. `trustedHosts` still only widens which Host headers pass; it grants no login. Discussion #3006 (auth for 0.0.0.0), open at parent, is now answered in code; its thread was not re-read.

## 3. Architecture posture unchanged at both newest pins: no privileged core, any row replaceable; `never` still decided before waterfall

- **Date:** 2026-09-10 (rc), 2026-09-17 (alpha)
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** docs/architecture.md at fb2c4b9e line 13 and at ddefc45f line 13: "There is no privileged core to patch"; line 27 at both: "A patch targets a row by id and replaces its whole config, or inserts new rows"; "Any row it prints can be replaced by a patch of your own" (fb2c4b9e line 37, ddefc45f line 39). dsh-base still lists "sandbox and approval policy" as base-layer rows. New at ddefc45f: `dsh-sdk-minimal` "does not apply `dsh-base`", and Plugin Manager ships in base. docs/subsystems/approval.md at ddefc45f line 86 keeps: "The `never` policy is enforced inside the service before waterfall dispatch, so even an answerer registered later with `prepend` cannot bypass it." The generated catalog text for `approval/request` changed from "failure yields the fail-closed default" (rc.8) to "call `next()` to delegate" (ddefc45f); behavior was not checked.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/ddefc45fbc7f8e46dd73185e68295696d1297887/docs/architecture.md
- **Half:** neither (posture) | **Confidence:** high on text

**What changed.** Nothing on the carry-forward question. The approval row, the sandbox-policy row, and the new Web auth all remain replaceable by the thing they limit, if that thing can write a patch. What moved is who can write patches: 0.1.6-alpha.2 adds a Plugins page that installs and enables plugins live from the Web UI, and removes Creator mode's dynamic Cordis tools in favor of Plugin Manager installs.

**Operator consequence.** `--dump-config` is still the security document. On the alpha line, anyone holding a Web session (section 2) can install a plugin, and a plugin can replace the approval row. Review the Plugins page as an admin surface, not a settings page.

## 4. More outbound data to DeepSeek by default; the session-log upload flipped on in the alpha line

- **Date:** 2026-08-27 (inventory), 2026-09-15 (session log, alpha)
- **Channel:** `preview-or-beta` (rc and alpha differ; see evidence)
- **Ancestry evidence:** `packages/bundle/base/cordis.patch.yml`: session telemetry `mode` default `'DISABLED'` at rc.8 (line 151) and `'FEEDBACK_ONLY'` at fb2c4b9e (line 187) and ddefc45f (line 194); comment at ddefc45f: capture happens only after explicit user feedback, exports carry an anonymous user id from `$DSH_HOME/.anonymous-user-id`, endpoint `https://harness-telemetry.deepseeksvc.com/v1/logs`, opt out with any non-empty `DSH_TELEMETRY_DISABLED`. `packages/llm/plugin-package-inventory-deepseek/src/index.ts`: `enabled` default true at fb2c4b9e and ddefc45f (sends `dsh_plugin_packages` to official DeepSeek requests). `packages/session/session-log-deepseek/src/index.ts` line 45: `enabled: z.boolean().default(false)` at fb2c4b9e, `.default(true)` at ddefc45f; the wire header carries session id, createdAt, and `cwd`. 0.1.6-alpha.1 notes: "session events can be reported with requests. This experimental feature is currently enabled and can be disabled in configuration."
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/ddefc45fbc7f8e46dd73185e68295696d1297887/packages/session/session-log-deepseek/src/index.ts
- **Half:** defect (exposure) | security-relevant | **Confidence:** high on defaults

**What changed.** On rc 0.1.5-rc.2, DeepSeek requests carry your enabled plugin names and versions, and feedback-triggered telemetry is on. On alpha 0.1.6-alpha.x, requests to the official API also carry incremental session-log records, including the working directory path, unless you turn it off.

**Operator consequence.** On any line, set `DSH_TELEMETRY_DISABLED=1` and disable `plugin-package-inventory-deepseek` if plugin names are sensitive. On the alpha line, also patch `session-log-deepseek` to `enabled: false` before first use against the official endpoint. A custom or third-party provider is unaffected: these contributions target official DeepSeek requests.

## 5. Defaults that removed human gates: public WebFetch without per-request approval; Web terminals run outside the sandbox; Auto review delegates approval to the model

- **Date:** 2026-08-27 (WebFetch), 2026-09-15 (Auto review, alpha), 2026-09-17 (terminals, alpha)
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** 0.1.2-rc.1 notes: "Enable public WebFetch by default with SSRF protection and no per-request approval for public network access" and "Enable `web_fetch` by default for the Python SDK, Headless, ACP, and custom Profiles." base cordis.patch.yml at ddefc45f: `web-fetch-http` row and `tool-web` with `fetch: true`; no web-fetch row at rc.8. 0.1.6-alpha.2 notes: "Web user terminals run with system-user permissions, independently of the Agent sandbox mode." 0.1.6-alpha.1: "Add experimental Auto review mode." `packages/experimental/auto-review/README.md` at ddefc45f (absent at dsh-v0.1.5-rc.2): opt-in layer, off by default; an allowed call "executes with Full access" (`danger-full-access + never`) after one model review, and unloading "migrates live Auto Sessions to Full access". Design note `.agents/notes/implemented/feature/2026-08-28-auto-review.md` says the outer `run_code` transport and direct Node effects in a PTC program are outside the review. npm `@deepseek-ai/dsh-experimental-auto-review` latest=0.1.6-alpha.1 (first publish took `latest`).
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/ddefc45fbc7f8e46dd73185e68295696d1297887/packages/experimental/auto-review/README.md
- **Half:** both | security-relevant | **Confidence:** high on text; not probed

**What changed.** Fetching any public URL no longer asks, anywhere. Alpha adds a sidebar terminal the human types into as their own user, unrelated to the agent's sandbox, and an experimental mode where a model reviewer stands in for the approval gate over a full-access sandbox. If the reviewer plugin is removed, sessions stay in full access with no reviewer.

**Operator consequence.** Treat WebFetch as an exfiltration path in `workspace-write` (the sandbox default does not confine network; parent finding). Do not install `dsh-experimental-auto-review` on a machine you care about; if you test it, uninstall only after switching sessions back to Workspace Write. The terminal change is benign for a local user but matters on an exposed Web UI: a Web session gets a real user shell.

## 6. Security fixes: a Bubblewrap escape via /proc; SAFETY.md now says nothing is audited

- **Date:** 2026-08-21 (fix), 2026-08-27 (notice)
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** dsh-v0.1.1-rc.1 (published 2026-08-21T07:12:39Z, ahead_by=172 vs rc.8) notes: "Prevent confined processes from escaping Bubblewrap restrictions through `/proc/<pid>/root`." SAFETY.md absent at rc.8 (404), present at fb2c4b9e and ddefc45f: "has not undergone a security audit and must not be treated as secure or production-ready"; "Sandboxing, approval prompts, and permission controls can reduce risk, but they do not guarantee isolation." README at ddefc45f links it before install. 0.1.5-alpha.1: project-root discovery errors no longer fall back to loading instructions from an ancestor project. GHSA list empty (`security-advisories` length 0).
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.1-rc.1
- **Half:** defect | security-relevant | **Confidence:** high (vendor-stated; no advisory, no commit read)

**What changed.** On Linux, rc.8 and 0.1.0 builds let a sandboxed process reach the host filesystem through another process's `/proc/<pid>/root`. The fix shipped as a release-note line with no advisory.

**Operator consequence.** Anyone on rc.8 or rc.7 with the Linux Bubblewrap sandbox should upgrade to >= 0.1.1-rc.1 and treat earlier sandboxed runs as unconfined. Read SAFETY.md as the vendor's own posture: the sandbox is advisory. A disposable VM is the recommended boundary, in their words.

## 7. Default model moved to DeepSeek-V4.1-Flash; default wire protocol moved to Messages on alpha

- **Date:** 2026-09-10 (rc.1 model), 2026-09-15 (alpha protocol), 2026-09-17 (alpha catalog)
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** base cordis.patch.yml `agent-default-model`: `provider: deepseek-official`, `model: deepseek-v4-flash` at rc.8 (lines 66-67); `model: deepseek-flash` at fb2c4b9e (lines 78-79) and ddefc45f (lines 85-86). 0.1.5-rc.1 notes: adapter adds `DeepSeek-V41-Flash` (`deepseek-flash`); "New Sessions use it by default; when the configuration file explicitly specifies a model, that configured value takes precedence." `packages/llm/llm-deepseek/src/config.ts` at ddefc45f line 81: `protocol` default `'messages'`; line 40 comment: advisory models default to V41 Flash and V4 Pro. 0.1.6-alpha.1 notes: Messages is the default DeepSeek protocol; an explicit old official root URL must change to `https://api.deepseek.com/anthropic`. 0.1.6-alpha.2 notes: V4 Flash and V4 Flash Vision Exp removed from the default model list.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/fb2c4b9e698e30edb738bca4cf0618587db7d203/packages/bundle/base/cordis.patch.yml
- **Half:** capability | **Confidence:** high

**What changed.** For the Writing lane's model-launch item: the harness's default model did change, in 0.1.5-rc.1 (2026-09-10), from `deepseek-v4-flash` to the `deepseek-flash` alias for DeepSeek-V4.1-Flash. Provider stayed `deepseek-official`. On alpha, the adapter now speaks the Anthropic-style Messages protocol to DeepSeek by default.

**Operator consequence.** New sessions change model on upgrade unless your profile pins one. Pin `model` in your patch if you compare runs across versions. On alpha, remove any hard-coded official root `baseURL` override or requests fail.

## 8. Breaking changes an operator hits on upgrade

- **Date:** 2026-08-27 to 2026-09-17
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** 0.1.2-rc.1: "Remove the optional SQLite Session persistence backend; existing content is not deleted, so use an older version to export it." 0.1.3-alpha.1: Session format v2, SessionHandle ownership, one-process Session lock. 0.1.5-rc.1: "Session format V3 ... upgraded Sessions do not support downgrade reads"; plugin API breaks (`ctx.agent` removed, `Inbox` type-only, Web panel slots moved); SDK/Headless/ACP default file tools changed. 0.1.6-alpha.1: `agent/session-start` replaced by `agent/created`; E2B backends removed; Node PTC runs in separate processes with an empty `process.env`; "Remove transactional rollback from hot reload: parse failures preserve the original configuration, while activation failures may leave partial changes that require correction."
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.5-rc.1
- **Half:** defect | **Confidence:** high (vendor-stated)

**What changed.** The parent's rc.8 SQLite schema problem is moot: the SQLite backend is gone. Session logs migrate forward twice with no way back. On alpha, a failed hot reload can leave a half-applied config.

**Operator consequence.** Export SQLite-backed sessions on <= 0.1.1 before upgrading. Back up `$DSH_HOME` before moving to 0.1.5 (no downgrade). Third-party plugins written for rc.8 need porting; the unaffiliated oh-my-dsh upgrade skill is linked from 0.1.2-rc.1 notes but is not a DeepSeek product. On alpha, after any live config edit, check `--dump-config` for the new state; a failed activation is not rolled back.

## 9. Capability half: what an operator can do now that they could not on 2026-08-20

- **Date:** 2026-08-27 to 2026-09-17
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** 0.1.2-rc.1: full ACP support (session controls, model settings, MCP, permissions, cancellation); per-subagent provider/model/effort selection; `send_message` two-way parent/child messaging replaces `report`; `web_fetch` in SDK, Headless, ACP. 0.1.5-rc.1: proxy env vars honored for all outbound requests; any file type upload; experimental Agent Teams packages (opt-in); subagent bundles updated to Codex 0.153.4 and Claude Code 2.1.263. 0.1.6-alpha.1: SSH remote workspace for file, command and PTC tools; experimental Browser Use and Computer Use through MCP drivers; headless reads stdin, resumes with `--session-id`, emits NDJSON with `--json`; MCP resources. 0.1.6-alpha.2: Plugins page; continuable subagent chains default to at most 8 live children, depth 1. Subagent wrapper defaults unchanged: `DEFAULT_CLAUDE_CODE_PERMISSION_MODE = 'dontAsk'` (subagent-claude-code run.ts line 56 at ddefc45f), `DEFAULT_CODEX_PERMISSION_MODE = 'never'` (subagent-codex run.ts line 69).
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-rc.1
- **Half:** capability | **Confidence:** high (vendor-stated)

**What changed.** The harness became drivable from editors (ACP) and scripts (headless NDJSON), gained a remote-workspace mode, and gained a subagent depth limit by default.

**Operator consequence.** Try ACP and headless NDJSON on the rc pin. Treat SSH remote workspace and Computer Use as alpha-only experiments. The product subagents still default to wrapper-owned non-interactive modes; check them in `--dump-config` after each upgrade, since the wrapped CLIs moved versions.

## Release ledger

| Tag | Published (UTC) | Prerelease | ahead_by vs previous tag | npm version published |
|---|---|---|---|---|
| dsh-v0.1.1-rc.1 | 2026-08-21T07:12:39Z | true | 172 (vs 0.1.0-rc.8) | 2026-08-21T06:49Z |
| dsh-v0.1.1-rc.2 | 2026-08-21T12:35:08Z | true | 35 | 2026-08-21T12:42Z |
| dsh-v0.1.2-alpha.1 | 2026-08-27T17:06:37Z | true | 1079 | none |
| dsh-v0.1.2-alpha.2 | 2026-08-30T13:52:14Z | true | 234 | 2026-08-30 |
| dsh-v0.1.2-alpha.3 | 2026-08-31T16:03:39Z | true | 117 | 2026-08-31 |
| dsh-v0.1.2-alpha.4 | 2026-09-01T15:45:07Z | true | 297 | 2026-09-01 |
| dsh-v0.1.2-alpha.5 | 2026-09-02T10:02:56Z | true | 6 | 2026-09-02 |
| dsh-v0.1.2-rc.1 | 2026-09-03T06:06:07Z | true | 2 | 2026-09-03 |
| dsh-v0.1.3-alpha.1 | 2026-09-04T11:34:32Z | true | 328 | none |
| dsh-v0.1.3-alpha.2 | 2026-09-07T13:59:29Z | true | 316 | 2026-09-07 |
| dsh-v0.1.5-alpha.1 | 2026-09-08T16:16:04Z | true | 563 | 2026-09-08 |
| dsh-v0.1.5-alpha.2 | 2026-09-09T14:23:10Z | true | 262 | 2026-09-09 |
| dsh-v0.1.5-rc.1 | 2026-09-10T03:09:00Z | true | 17 | 2026-09-10 |
| dsh-v0.1.5-rc.2 | 2026-09-10T15:09:34Z | true | 4 | 2026-09-10 (current `latest`) |
| dsh-v0.1.6-alpha.1 | 2026-09-15T04:57:57Z | true | 800 (vs 0.1.5-rc.2) | 2026-09-15 |
| dsh-v0.1.6-alpha.2 | 2026-09-17T13:30:16Z | true | 887 | 2026-09-17 |

No stable exists, so ahead_by is against the previous tag. All compares behind_by=0. Master at window close (08b73684, 2026-09-21T19:46:10Z) is ahead of 0.1.6-alpha.2 by 1280 and of 0.1.5-rc.2 by 2967, behind_by=0 (`main-unreleased` mass, not itemized). PyPI deepseek-harness-sdk in window: 0.1.1rc1, 0.1.2a3, 0.1.2rc1, 0.1.5rc1; no 0.1.5rc2 or 0.1.6.

## Carry-forward answers

- **Non-prerelease tag:** none. All 20 release objects are prerelease=true (section 1).
- **architecture.md at newest in-window pins:** still says no privileged core and any row can be replaced (fb2c4b9e lines 13/27/37; ddefc45f lines 13/27/39) (section 3).
- **Auth on the Web UI:** yes since 0.1.2-alpha.1 / 0.1.2-rc.1: launch token to signed 30-day cookie on every /api request; api-request-trust.ts itself unchanged in stance (section 2). No privileged core.
- **npm dist-tags on or before 2026-09-21:** `@deepseek-ai/dsh` latest observed 0.1.5-rc.2 (promotion date not recoverable; the publish script never sets latest); next and alpha by rule were 0.1.5-rc.2 and 0.1.6-alpha.2 at close. Bundle packages `dsh-subagent-claude-code`, `dsh-subagent-codex`, `dsh-base`: latest still 0.0.1-rc.1 (frozen at first publish, as parent); next/alpha track the CLI.
- **Mirror:** yes. Public repo has has_pull_requests=false, yet its merge commits read "Merge pull request #3978 from deepseek-harness/worktree/release-dsh-0.1.5-rc.2" (fb2c4b9e) and "#2783 from deepseek-harness/release/dsh-0.1.0-rc.8" (141eb6fe); `gh api repos/deepseek-ai/deepseek-harness/pulls/4978` -> 404; org `deepseek-harness` shows 0 public repos; README at ddefc45f points docs to deepseek-harness.github.io. Development happens in a private GitHub repo in the `deepseek-harness` org. `.gitlab-ci.yml` is still committed at ddefc45f and builds Python SDK runtime wheels on `python-v*` tags; it is a build pipeline, not the dev home. A missing public commit is not evidence of no work; PR numbers and review threads are not public.
- **Default model/provider after the V4.1-Flash launch:** changed in 0.1.5-rc.1 (2026-09-10): `deepseek-v4-flash` to `deepseek-flash`, provider unchanged `deepseek-official`; protocol default to Messages on alpha (section 7).

## Operator questions settled this window

- *Can a plugin replace the component that would have refused it?* Still yes by the docs; and the new Web Plugins page (alpha) lets a Web session install one (section 3).
- *What authenticates a Web UI request?* A launch token and signed cookie, since 0.1.2 (section 2).
- *Is the public repo the development home?* No; it is a mirror (carry-forward above).
- *Does the harness run other models?* Yes, as a supported path: custom providers, native Anthropic model lists in discovery, pi-ai provider, per-subagent provider selection (0.1.2-rc.1, 0.1.5-rc.1).

## Researcher lane notes

Nothing was probed locally. Priority probes: open `dsh web` on 0.1.5-rc.2 and confirm a loopback request without the cookie gets 401; confirm `session-log-deepseek` on 0.1.6-alpha.2 sends `cwd` to the official endpoint. The Bubblewrap fix has no advisory or commit pin here; finding the commit needs a search of the 172 commits in rc.8...0.1.1-rc.1. `@deepseek-ai/dsh-experimental-auto-review` npm `latest` is an alpha because first publish took it.

## Observed after window close

- dsh-v0.1.5-rc.3 tag (2026-09-22T05:26Z, no release object; npm next=0.1.5-rc.3 at 05:55Z).
- dsh-v0.1.7-alpha.1 (2026-09-22T06:16Z) and alpha.2 (2026-09-22T15:49Z), prerelease. alpha.1 notes include "Fix Windows sandbox deletions escaping the authorized directory, and prevent deletions across workspaces" and "Allow ordinary Bash calls with an empty, unused permission explanation." Both OUT.

## Surfaces checked

- `gh api repos/deepseek-ai/deepseek-harness` (metadata, has_pull_requests=false), releases (20), tags (21), commits at tags, compare for every consecutive pair and to master-at-close
- Release bodies (English sections) for every in-window tag
- Raw at fb2c4b9e and ddefc45f (and rc.8 for diff): docs/architecture.md, docs/subsystems/approval.md, packages/client/connection/src/{api-request-trust,browser-auth,rpc-host,index}.ts, SAFETY.md, README.md, .gitlab-ci.yml, scripts/release/{publish,families}.ts, packages/bundle/base/cordis.patch.yml, packages/llm/llm-deepseek/src/config.ts, packages/session/session-log-deepseek/src/index.ts, packages/llm/plugin-package-inventory-deepseek/src/index.ts, subagent-claude-code and subagent-codex run.ts, packages/experimental/auto-review/README.md, auto-review design note; rpc-host.ts at 0.1.1-rc.2, 0.1.2-alpha.1, 0.1.2-rc.1
- `.github/workflows` listing and release-publish.yml / release.yml (no dist-tag step)
- npm dist-tags for dsh, dsh-subagent-claude-code, dsh-subagent-codex, dsh-base, dsh-experimental-auto-review; `npm view @deepseek-ai/dsh time`
- PyPI deepseek-harness-sdk release list; security-advisories (0); orgs/deepseek-harness

## Not reached

- Dist-tag state as of 2026-09-21 exactly (registry keeps no dist-tag history; values above are observed 2026-09-23 plus script rules).
- GitHub Discussions (#3006 and new threads) not re-read.
- Cordis upstream (cordiverse/cordis) changes not checked; vendor family 4.0.4 bump is 2026-09-22, OUT.
- Landing page deepseek.com/harness and docs site deepseek-harness.github.io not read.
- No local install or probe.
