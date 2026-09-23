---
schema_version: bitter.frontier_harvest.v0
provider: openhands
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/openhands.yml
channels_present: [tagged-release, main-unreleased]
window_volume: 6 stable tags in window; 9 material changes, 5 capability-bearing, 6 defect-bearing, 6 security-relevant
lane: primary sources, Lane A researcher; identity OpenHands/OpenHands
---

# Harvest -- openhands (primary sources)

Punctuation is ASCII. Identity: `gh api repos/OpenHands/OpenHands` -> full_name OpenHands/OpenHands, default branch main, description "OpenHands: AI-Driven Development". This repo now ships Agent Canvas (the `@openhands/agent-canvas` npm package). Its runtime pins live in `config/defaults.json`: `versions.agentServer` (OpenHands/software-agent-sdk) and `versions.automation` (OpenHands/automation). Baseline is the parent harvest (v1.14.0, 2026-08-17). Not re-reported.

## Release ledger

| Tag | GitHub published (UTC) | npm publish (UTC) | Prerelease | ahead_by / behind_by vs previous stable | Pins (agentServer / automation) |
|---|---|---|---|---|---|
| v1.14.0 (baseline) | 2026-08-17T21:41:36Z | 2026-08-17T21:49Z | false | - | 1.42.1 / 1.7.1 |
| v1.15.0 | 2026-08-21T14:01:34Z | 2026-08-21T14:11:50Z | false | 38 / 0 | 1.42.1 / 1.8.0 |
| v1.16.0 | 2026-08-27T18:19:22Z | 2026-08-27T18:29:16Z | false | 40 / 0 | 1.44.0 / 1.9.0 |
| v1.17.0 | 2026-09-09T19:27:26Z | 2026-09-09T19:38:33Z | false | 45 / 0 | 1.46.0 / 1.11.1 |
| v1.18.0 | 2026-09-11T18:27:48Z | 2026-09-11T18:39:02Z | false | 13 / 0 | 1.46.0 / 1.11.1 |
| v1.19.0 | 2026-09-16T19:24:24Z | 2026-09-16T19:35:54Z | false | 87 / 0 | 1.48.0 / 1.12.1 |
| v1.20.0 | 2026-09-17T07:15:18Z | 2026-09-17T07:27:18Z | false | 6 / 0 | 1.49.1 / 1.13.1 |

Channel facts: at window close the newest in-window stable is v1.20.0. Main was 17 commits past it on 2026-09-21 and is 33 ahead as of 2026-09-23 (`compare/v1.20.0...main` ahead 33, behind 0). npm dist-tag `latest` is 1.22.0 as of 2026-09-23, which is out of window. npm and GitHub stayed within about 12 minutes of each other for every tag. There was no npm hole like the parent's. Every tag is a strict fast-forward of the previous one (behind_by 0).

Version-numbering line (carry-forward): two tags named 1.11.0 exist, as the parent found. The unprefixed `1.11.0` points to 11ca68ab2e (2026-07-09) on the old line. `v1.11.0` points to 3c562fa694 (2026-08-07). They are not the same line: `compare/1.11.0...v1.6.1` is ahead 859, behind 0, so the v-prefixed series restarted at v1.x after 1.11.0. This window went v1.15.0 to v1.20.0 with no reuse, gap or backward step. There are no v1.16 or later unprefixed tags. `1.10.0`/`v1.10.0` and `1.11.0`/`v1.11.0` are the only pairs that share a number. When citing, always use the `v` prefix.

GHSA: `repos/OpenHands/OpenHands/security-advisories` lists only GHSA-7h8w-hj9j-8rjw (2026-03-23, Command Injection in Git Diff Handler). There is no new GHSA in window. The security fixes below were published as ordinary PRs.

## 1. Carry-forward: v1.15.0 is the in-window tag with the wrong-profile fix, and it ships the opposite move too

- **Date:** 2026-08-21
- **Channel:** `tagged-release`
- **Ancestry evidence:** Each PR's merge SHA was compared against every tag from v1.14.0 through v1.21.0, with the first containing tag recorded. #16523 e9ca71d138: first tag v1.15.0; `compare/e9ca71d1...v1.14.0` behind 1; `compare/e9ca71d1...v1.15.0` ahead 37, behind 0. #16701 28be38adac: first tag v1.15.0 (compare to v1.15.0 ahead 8, behind 0). #16671 be584ade93: first tag v1.15.0. v1.15.0 prerelease=false.
- **Receipt:** https://github.com/OpenHands/OpenHands/releases/tag/v1.15.0
- **Half:** defect | **Confidence:** high

**What changed.** The parent's main-only items reached a tag. #16523 stops a launch from silently falling back to a different profile. #16701 stops ACP model picks from being written into agent_settings when profile discovery fails. #16671 also shipped in the same tag: the home LLM dropdown now wins over a profile's pinned LLM, and the named profile's non-LLM config is cleared for that launch. v1.17.0 adds #16439, which rebuilds the active profile stamp from event history on reload.

**Operator consequence.** Upgrade past v1.14.0 to close the silent downgrade. Know the new rule on v1.15.0 and later. If you pick a model in the home pill that disagrees with the profile, the profile's non-LLM config does not apply to that launch. If you use profiles as tool, MCP or secret boundaries (items 2 and 3), launch from the profile and do not override the model.

## 2. Profiles become enforceable scopes: MCP servers (v1.19.0) and secrets (v1.20.0), with a skill allow-list since v1.16.0

- **Date:** 2026-08-27 (skills), 2026-09-16 (MCP), 2026-09-17 (secrets)
- **Channel:** `tagged-release`
- **Ancestry evidence:** #16860 c4c5bb7467: first tag v1.16.0. #17289 2c5ce2fa2d: first tag v1.19.0 (not in v1.18.0, behind 1). #17237 32cfcb2e05: first tag v1.20.0 (not in v1.19.0). v1.20.0 pins agentServer 1.49.1. At SDK tag v1.49.1, `openhands-agent-server/openhands/agent_server/server_details_router.py` line 66 advertises `profile_secret_scope_v1`; at SDK v1.46.0 the string is absent. Canvas shows the secret picker only when the server advertises that capability.
- **Receipt:** https://github.com/OpenHands/OpenHands/pull/17289 ; https://github.com/OpenHands/OpenHands/pull/17237 ; https://github.com/OpenHands/software-agent-sdk/blob/v1.49.1/openhands-agent-server/openhands/agent_server/server_details_router.py
- **Half:** capability | security-relevant | **Confidence:** high on channel and pin; medium on enforcement (read from PR text and the capability flag, not probed)

**What changed.** Before v1.19.0, every profile could reach every configured MCP server, including ones that make changes. The PR says the editor never wrote `mcp_server_refs`. Now a profile can list the MCP servers it may use. On v1.20.0, a profile can also be limited to all, none, or chosen saved secrets. The agent server enforces this; Canvas does no client-side filtering. Deleted references are kept, so an unrelated edit cannot silently widen or narrow access. Separately, v1.16.0 turned the built-in skill catalog from all-on with a deny list into an allow-list. Per the PR, 11 of 59 skills are on by default.

**Operator consequence.** On v1.20.0 you can build a read-only exploration profile with no write-capable MCP servers and no deploy secrets. Before 2026-09-16 that was not possible. Test it by launching the profile and checking which MCP tools and secrets the running agent actually has. The item 1 override still applies. After upgrading to v1.16.0, re-check your skill set; skills you relied on may be off now.

## 3. Automations get view/manage permissions, creator-only re-enable, a visible run-as identity, and a working Git Sync backend

- **Date:** 2026-08-21 (Git Sync backend), 2026-09-09, 2026-09-11
- **Channel:** `tagged-release`
- **Ancestry evidence:** Git Sync: v1.15.0 `config/defaults.json` pins `automation: 1.8.0`. Automation PR #327 ("feat: sync automations to a git repository", merge e98fcf8389, merged 2026-08-17): `compare/e98fcf83...1.8.0` ahead 4, behind 0; `compare/e98fcf83...1.7.1` behind 3. The automation 1.8.0 tree has `openhands/automation/git_sync/router.py`. Canvas `src/hooks/query/use-git-sync.ts` blob is 3238a7d6 at both v1.15.0 and v1.20.0. Permissions: #17105 5e3bd0147f first tag v1.17.0; #17190 8057bf6cd5 and #17138 69b849f12c first tag v1.18.0.
- **Receipt:** https://github.com/OpenHands/OpenHands/blob/v1.15.0/config/defaults.json ; https://github.com/OpenHands/OpenHands/pull/17105 ; https://github.com/OpenHands/OpenHands/pull/17138
- **Half:** both | **Confidence:** high

**What changed.** Carry-forward answer: yes, the Git Sync backend shipped. v1.15.0 is the first tag where the Git Sync page talks to an automation service that serves its endpoints. On cloud backends, org-admin Git Sync (#17216) is on main after the window and in v1.22.0 (out). The team model changed too. v1.17.0 splits `view_automations` from `manage_automations` and makes automations visible org-wide. v1.18.0 lets only the creator turn an automation back on. It also shows "Automation Runs As", the creator's email: an automation runs under its creator's identity.

**Operator consequence.** Retest Git Sync on v1.15.0 or later if you wrote it off on v1.14.0. On team deployments, audit who created each automation. It runs as that person, and after v1.17.0 every org member can see it.

## 4. Four security fixes shipped as plain PRs: Electron link-origin bypass, runtime-config XSS, DOMPurify, and hidden confirmation prompts

- **Date:** 2026-09-09 (v1.17.0), 2026-09-16 (v1.19.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** #16961 7ec4ed03af (merged 2026-08-31): first tag v1.17.0. #17060 a16becd00d (merged 2026-09-01): first tag v1.17.0. #17134 c8c7c8ef83 (merged 2026-09-09): first tag v1.17.0. #17175 28464621d8 (merged 2026-09-12): first tag v1.19.0, not in v1.18.0. No GHSA was filed for any of them.
- **Receipt:** https://github.com/OpenHands/OpenHands/pull/16961 ; https://github.com/OpenHands/OpenHands/pull/17175 ; https://github.com/OpenHands/OpenHands/pull/17060 ; https://github.com/OpenHands/OpenHands/pull/17134
- **Half:** defect | security-relevant | **Confidence:** high on channel; medium on exploitability (from the PR text; not reproduced)

**What changed.**
- **#16961, desktop app.** The Electron main process treated any URL starting with `http://localhost` or `http://127.0.0.1` as an app URL. The renderer shows chat and agent markdown links with `target="_blank"`. So a link written by the agent, or injected into its output, like `http://localhost.evil.com` or `http://localhost@evil.com`, would open an attacker-controlled page inside an app window instead of the external browser. The fix parses the URL and pins the host.
- **#17175, static server.** The server injected runtime config into the HTML without escaping. A config value containing HTML could break out of the script tag (XSS). Pages carrying `sessionApiKey` were also browser-cacheable. The fix escapes the injected values and sends `Cache-Control: no-store`.
- **#17060, dependency.** DOMPurify moves from 3.4.12 to 3.4.14 for GHSA-55q2-fjhq-7xh7, a sanitization bypass in the IN_PLACE plus element-detaching-hook case.
- **#17134, approvals.** A pending confirmation prompt, with its Cancel and Continue buttons, could render inside a collapsed event group. The operator then could not see that the agent was waiting on them. The prompt now renders once, after the message list.

**Operator consequence.** Upgrade desktop installs to v1.17.0 or later. Self-hosters who serve Canvas through `scripts/static-server.mjs` should upgrade to v1.19.0 or later. If a proxy or shared browser may have cached a session key from an earlier page, rotate it. On versions before v1.17.0, do not assume "no prompt visible" means the agent is not waiting.

## 5. v1.15.0 removes the PDF preview sandbox (tagged)

- **Date:** 2026-08-21
- **Channel:** `tagged-release` (was `main-unreleased` in the parent)
- **Ancestry evidence:** #16702 4c3bb82400 (merged 2026-08-20T13:10:35Z): first tag v1.15.0; `compare/4c3bb824...v1.14.0` behind 29.
- **Receipt:** https://github.com/OpenHands/OpenHands/pull/16702
- **Half:** both | security-relevant | **Confidence:** high on channel; medium on risk (the PR contains no threat analysis)

**What changed.** The iframe for PDF preview in Files/Preview lost `sandbox="allow-same-origin"`, because Chromium's built-in PDF viewer will not run in a sandboxed frame. PDFs render now. The frame that shows files from the agent workspace is no longer sandboxed.

**Operator consequence.** On v1.15.0 and later, treat opening a file the agent produced in preview as opening it in your browser. For untrusted repos, download and inspect the file instead of previewing it in Canvas.

## 6. ACP harness surfacing becomes an explicit per-harness decision; the ACP registry pin now follows the agent server

- **Date:** 2026-09-11 (v1.18.0), 2026-09-16 (v1.19.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** #17228 f920c74f6d: first tag v1.18.0. #17423 0bb101e1e4: first tag v1.19.0 (not in v1.18.0, behind 58).
- **Receipt:** https://github.com/OpenHands/OpenHands/pull/17228 ; https://github.com/OpenHands/OpenHands/pull/17423
- **Half:** both | security-relevant (credential fields) | **Confidence:** high

**What changed.** #17228: SDK 1.45.0 registered new ACP harnesses (kimi-code, pi, opencode). Canvas's credential form read the SDK registry directly, so it offered credential fields for harnesses Canvas never listed. Canvas now has one surfaced list, and a test fails if a surfaced harness disappears upstream. #17423: the UI's ACP registry (npm `@openhands/typescript-client` 1.39.0) had drifted seven minors behind the agent server that launches the adapters. The pins are now tied together and CI checks them. The Codex shim for GPT-6 Astra (#17164) is gone.

**Operator consequence.** On v1.19.0 and later, the harness picker matches what the pinned agent server can launch. On earlier tags, do not enter credentials for a harness that shows up only in the credential form.

## 7. Docker conversation runtime settings reach the bundled agent server (v1.20.0); Docker execution workspaces are main-only

- **Date:** 2026-09-17 (tag); 2026-09-21 (main)
- **Channel:** #17462 `tagged-release`; #17177 and #17518 `main-unreleased` at window close
- **Ancestry evidence:** #17462 3b29fd61d4: first tag v1.20.0. a5eb10d584 "request Docker execution workspaces from Docker servers (#17177)" (2026-09-21T02:34Z) and 15e6860788 "advertise host services to Docker conversations (#17518)" (2026-09-21T10:28Z) are in `compare/v1.20.0...main`. The first tag containing them is v1.21.0 (published 2026-09-22T01:50:44Z, out of window).
- **Receipt:** https://github.com/OpenHands/OpenHands/pull/17462
- **Half:** capability | **Confidence:** high

**What changed.** Before v1.20.0, Canvas dropped `OH_CONVERSATION_RUNTIME=docker` and started the bundled agent server in local mode, running on the host. Six settings are now forwarded when set: runtime, image, memory, CPU, PID limits and startup timeout. Unset values leave Agent Server defaults in charge.

**Operator consequence.** If you set `OH_CONVERSATION_RUNTIME=docker` on a Canvas older than v1.20.0, your conversations ran locally, not in Docker. Check `ps` or the container list from a v1.19.0 session. Upgrade, then confirm the conversation's process is inside a container. Treat Docker execution workspaces as not shipped for this window.

## 8. Provider-connections UI shipped in v1.15.0 ahead of the server API; it works from v1.16.0 locally and v1.17.0 on cloud

- **Date:** 2026-08-21 / 2026-08-27 / 2026-09-09
- **Channel:** `tagged-release`
- **Ancestry evidence:** #16616 f2dd330905: first tag v1.15.0. v1.15.0 pins agentServer 1.42.1. The parent established that the `/api/llm/provider-connections` API first shipped in SDK v1.43.0. v1.16.0 pins agentServer 1.44.0. #16757 "enable LLM provider connections on cloud" is listed in the v1.17.0 notes.
- **Receipt:** https://github.com/OpenHands/OpenHands/blob/v1.15.0/config/defaults.json
- **Half:** capability | **Confidence:** medium (1.43.0 as the API's first tag comes from the parent and was not re-verified)

**What changed.** v1.14.0 had the same shape with Git Sync: UI in the tag, backend not in the pinned server. It shipped that way for six days.

**Operator consequence.** Test provider connections on v1.16.0 or later only.

## Operator questions settled this window

- *How does OpenHands package permissions and collaboration for teams?* Through agent profiles as server-enforced scopes over MCP servers and secrets (item 2), automation permissions with view/manage split and visible run-as identity (item 3), and an explicit list of surfaced ACP harnesses (item 6). All ship in open-source tags and do not require enterprise.
- *What to refuse wholesale:* the home model pill quietly overrides a profile (item 1). The PDF preview frame is unsandboxed (item 5). Security fixes arrive without advisories (item 4). An operator who relies on GHSAs will miss all four fixes in item 4.

## Researcher lane notes

Six stables in 27 days, all fast-forwards, npm in lockstep. Pattern to watch: twice now (Git Sync in v1.14.0, provider connections in v1.15.0) a Canvas tag shipped a UI before the pinned server could serve it. Check `config/defaults.json` pins before testing a new Canvas page. PR bodies are split into HUMAN and AGENT sections. Several say an AI agent prepared them (for example #17423, "prepared by an AI agent (Claude Code)"). Marketing surfaces (openhands.dev) were not used for any claim. docs.openhands.dev root returns 308; the agent-profiles docs page returns 200 but was not diffed.

## Observed after window close

- v1.21.0 published 2026-09-22T01:50:44Z (19 ahead of v1.20.0). Pins SDK 1.49.3 and automation 1.13.3. Contains the Docker execution workspace commits.
- v1.22.0 published 2026-09-22T16:28:11Z (12 ahead of v1.21.0). Adds Git Sync for org admins on cloud backends (#17216) and remote MCP testing via the app server (#17276). npm latest is 1.22.0.

## Surfaces checked

- `gh api repos/OpenHands/OpenHands` (identity), releases list, full tag list (187 tags, paginated)
- release bodies v1.15.0 through v1.20.0
- compare between each pair of adjacent tags v1.14.0 through v1.22.0; v1.20.0...main; 1.11.0...v1.6.1; git refs for 1.11.0 and v1.11.0
- `config/defaults.json` at v1.14.0, v1.15.0, v1.16.0, v1.17.0, v1.18.0, v1.19.0, v1.20.0
- first-containing-tag compare for PRs #16523, #16701, #16671, #16702, #16616, #16860, #16961, #17060, #17105, #17134, #17228, #17190, #17138, #17289, #17175, #17423, #17237, #17462
- PR bodies for the above
- OpenHands/automation PR #327, releases 1.7.1 and 1.8.0, compare, tree at 1.8.0 (git_sync)
- Canvas `src/hooks/query/use-git-sync.ts` and `src/routes/automation-git-sync.tsx` at v1.15.0 and v1.20.0
- OpenHands/software-agent-sdk tags; server_details_router.py at v1.46.0 and v1.49.1
- security-advisories (1, dated 2026-03-23)
- npm `@openhands/agent-canvas` time and dist-tags
- docs.openhands.dev root and agent-profiles page (HTTP status only)

## Not reached

- No live probe of profile MCP or secret scoping, the Docker runtime forwarding, or the Electron URL policy.
- The GHSA-55q2-fjhq-7xh7 advisory text itself was not opened; its scope is from PR #17060.
- Docs pages were not diffed for changes in the window.
- SDK v1.43.0 as the first tag with `/api/llm/provider-connections` was taken from the parent and not re-verified.
