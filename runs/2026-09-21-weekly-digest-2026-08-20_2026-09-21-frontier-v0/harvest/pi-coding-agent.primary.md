---
schema_version: bitter.frontier_harvest.v0
provider: pi-coding-agent
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/pi-coding-agent.yml
channels_present: [tagged-release]
window_volume: 7 stable tags (v0.84.3 through v0.87.0), 6 material changes, 0 new advisories
lane: primary sources, Lane A researcher; distinct from omp (can1357/oh-my-pi)
---

# Harvest -- pi-coding-agent (primary sources)

Punctuation is ASCII. Repo earendil-works/pi. Not can1357/oh-my-pi. Nothing here
is a fact about OMP. Identity check: `gh api repos/earendil-works/pi` ->
full_name earendil-works/pi, description "AI agent toolkit: unified LLM API,
agent loop, TUI, coding agent CLI", default_branch main. pi.dev links this repo
and https://pi.dev/news.xml lists the same release numbers.

Window-close pin: main 1a584a7a56eb5e7b4ff8ccbd46430f1533282eed
(2026-09-21T22:07:34Z, `commits?sha=main&until=2026-09-22T00:00:00Z`).
compare v0.87.0...1a584a7a -> ahead_by=3. Live main after that (898ab804,
2026-09-22T23:33Z) is OUT.

## 1. The `dev` harness reached main and a tag in v0.85.0; its plugin surface was published to npm once by accident, then pulled

- **Date:** 2026-09-04 (v0.85.0), 2026-09-05 (v0.85.1)
- **Channel:** `tagged-release` for the code; the experimental plugin/facet surface is source-only on npm from 0.85.1 on
- **Ancestry evidence:** Parent pin a17323e5 (dev tip 2026-08-20). compare a17323e5...v0.84.3 -> diverged, ahead_by=33, behind_by=264 (not in 0.84.3); a17323e5...v0.84.4 -> diverged, behind_by=264 (not in 0.84.4); a17323e5...v0.85.0 -> ahead, ahead_by=257, behind_by=0 (in 0.85.0); a17323e5...v0.87.0 -> ahead_by=464, behind_by=0. `dev` kept merging main through 2026-09-03 (merge commits 9f74575f, 8c08d064 on 2026-09-03T07:59Z) and the `dev` branch is now gone (`branches/dev` 404). No "merge dev into main" commit exists in v0.85.0's history, consistent with main being fast-forwarded to dev before the tag. packages/agent/docs/plugins.md: 404 at v0.84.4, present at v0.85.0 (blob cc1ab59f) and v0.87.0 (blob 9ff9e0b9). New workspace packages at v0.87.0 vs v0.84.2: `chord`, `durable`. npm exports: 0.84.4 has no `./experimental/plugin`; 0.85.0 exports `./experimental/plugin` -> dist/experimental/plugin.js (served, HTTP 200 on jsDelivr), unpackedSize 23.7MB / 1249 files vs 21.5MB / 1044 at 0.84.4; 0.85.1 and 0.87.0 map `./experimental/plugin` and `./client` to `./src/...ts` files that are not in the tarball (jsDelivr 404 for both src and dist plugin files). v0.85.1 release notes: "Fixed SDK import failures caused by unintentionally publishing internal experimental code and dependencies in 0.85.0 ... now source-only through pi-test.sh" (#9132: 0.85.0 dist/cli.js statically imported undeclared @earendil-works/pi-server, closed 2026-09-05T10:48:44Z).
- **Receipt:** https://github.com/earendil-works/pi/blob/v0.85.0/packages/agent/docs/plugins.md and https://github.com/earendil-works/pi/releases/tag/v0.85.1
- **Half:** both | **Confidence:** high on ancestry and npm file presence; medium on what fraction of the 264 dev commits is harness versus merge churn

**What changed.** Carry-forward 1 answered yes, with a caveat the release notes do not advertise. The new harness code is now in every tag from v0.85.0, but v0.85.0's notes do not mention it, and the plugin/facet architecture it carries is still labelled "Design specification for the experimental facet and service architecture" at v0.87.0. The one npm version that shipped it compiled (0.85.0) broke SDK imports; 0.85.1 withdrew it from the package. At v0.87.0 plugins.md says facets are "not a security sandbox: session facets are trusted code in the authoritative process," and names `telemetry(permission(sandbox(coreBash)))` wrapper composition as the intended place for a permission layer.

**Operator consequence.** Do not pin 0.85.0; it is the broken publish. `import "@earendil-works/pi-coding-agent/experimental/plugin"` does not resolve from npm on 0.85.1 through 0.87.0; to try the new harness you build from source at a tag. Extensions still run through the existing extension API. Watch for a release note that names the facet host as supported and ships `dist/experimental/plugin.js`; that, not the ancestry, is when the harness becomes installable.

## 2. Compaction docs now match the package: `session_compact_failed` shipped in 0.84.3

- **Date:** 2026-08-24
- **Channel:** `tagged-release`
- **Ancestry evidence:** Parent event SHA a6b1dbce was main-unreleased. compaction.md mentions `session_compact_failed` 0 times at v0.84.2, 2 at v0.84.3, 2 at v0.87.0. Emitted in source at v0.84.3 packages/coding-agent/src/core/agent-session.ts lines 583-584. Present in the npm artifact: jsDelivr @0.84.3/dist/core/agent-session.js contains the string twice. v0.84.3 notes list it under Added (#8175) along with "Fixed threshold auto-compaction being skipped when providers omit streaming usage data" (#8328, the parent's 4495469a follow-on). compare v0.84.2...v0.84.3 ahead_by=105. npm 0.84.3 2026-08-24T11:09:37Z. Live https://pi.dev/docs/latest/compaction (HTTP 200) contains the event.
- **Receipt:** https://github.com/earendil-works/pi/blob/v0.84.3/packages/coding-agent/src/core/agent-session.ts#L583-L584
- **Half:** both | **Confidence:** high

**What changed.** The parent's docs-ahead-of-package gap is closed. Same release: `/model` and `/thinking` no longer persist globally unless you press Ctrl+S (#5263); compaction and branch-summary requests no longer expose tools to the provider; `auth.json` and `models-store.json` writes stop clobbering admin-set permissions and ACLs (#7779); session shares now include the current system prompt and active tool definitions.

**Operator consequence.** Upgrade from 0.84.2 if you wrote handlers against the live compaction page; on 0.84.3+ they fire. If you share sessions, note shares now carry your system prompt and tool definitions; check what your prompt contains before sharing.

## 3. `user_bash` fails closed: an extension that routes `!` commands into a VM no longer falls back to the host on error

- **Date:** 2026-09-16 merged; 2026-09-19 tagged (v0.86.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Issue #9068 "user_bash silently falls back to host execution when an execution-routing extension fails," reported on 0.84.3, closed 2026-09-16T16:21:19Z. PR #9662 by christianklotz merged 2026-09-16T16:21:18Z, merge SHA 509ee2bd. compare v0.85.1...509ee2bd ahead_by=84 (not in 0.85.1); 509ee2bd...v0.86.0 ahead_by=80, behind_by=0 (in 0.86.0). Listed under Breaking Changes in v0.86.0 notes. npm 0.86.0 2026-09-19T23:14:16Z. No GHSA published for it: repo advisories list still shows only the four published 2026-06-08.
- **Receipt:** https://github.com/earendil-works/pi/pull/9662
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Through 0.85.1, if a `user_bash` handler that routes user shell commands into an isolated domain (the reporter used a Gondolin VM) threw, Pi ran the command locally on the host. From 0.86.0 an error or invalid result aborts the command and stops later handlers. This is user-initiated `!`/`!!` bash, not the agent's bash tool. It is a breaking change for handlers that relied on fall-through: return `undefined` to continue propagation.

**Operator consequence.** If you sandbox user bash through an extension, upgrade to 0.86.0+ and treat 0.84.x/0.85.x as able to escape your VM on a handler exception. Re-audit handlers that return anything other than `undefined`, `{ operations }`, or `{ result }`; they now abort the command.

## 4. RPC `steer` and `follow_up` no longer bypass extension `input` handlers

- **Date:** 2026-09-08 fixed; 2026-09-19 tagged (v0.86.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Issue #8718 closed 2026-09-08T15:18:43Z by commit faa9863c. compare faa9863c...v0.85.1 -> behind (not in 0.85.1); faa9863c...v0.86.0 -> ahead_by=135, behind_by=0 (in 0.86.0). v0.86.0 Fixed: "direct RPC steer and follow_up commands bypassing extension input handlers."
- **Receipt:** https://github.com/earendil-works/pi/commit/faa9863cb8b54689f1d0c2df9dbab1ee1fa9de19
- **Half:** defect | **Confidence:** high

**What changed.** Pi has no built-in approval layer; operators who filter or rewrite input do it in an extension `input` handler. Before 0.86.0, anything driving Pi over RPC could inject steering or follow-up messages that never reached that handler.

**Operator consequence.** If you embed Pi over RPC and rely on an `input` extension as a gate or a redactor, upgrade to 0.86.0 and assume earlier embedded sessions were ungated on those two commands.

## 5. Extensions gained authenticated model calls and full-transcript control; `context` handlers lost sight of system messages

- **Date:** 2026-09-19 (v0.86.0), 2026-09-21 (v0.87.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** v0.86.0 notes: `ctx.modelRegistry.stream()` and `streamSimple()` for "extension model calls through configured providers with resolved authentication" (#8964); `pi.on()` returns an unsubscribe; strict-prefer JSON-schema sampling on by default for built-in read/bash/powershell/edit/write without `PI_EXPERIMENTAL`. v0.87.0 (GitHub release 2026-09-21T18:29:47Z, npm 2026-09-21T16:51:53Z, compare v0.86.1...v0.87.0 ahead_by=18): append-only `ContextEditEntry` (omit or replace a message in future provider context without rewriting raw history); actionable `turn_end` and `agent_before_settle` boundaries; `context_with_system` event that "sends its result verbatim"; `context` handlers "no longer see system messages" (#9789, #9822); SessionManager becomes canonical, so assigning `session.agent.state.messages` no longer changes future requests. Breaking: `shouldStopAfterTurn` removed.
- **Receipt:** https://github.com/earendil-works/pi/releases/tag/v0.87.0
- **Half:** capability | **Confidence:** high on the notes; the extension-reach reading is ours

**What changed.** What an operator can now do that they could not on 2026-08-20: an extension can call any configured provider with the user's resolved credentials, and can rewrite the entire request including the system prompt and send it verbatim, and can hide messages from the model while keeping the raw log intact. The scaffolding removed: mutating `agent.state.messages` as a context hack no longer works. The authority an extension holds grew, in a harness whose security posture is still "extensions are trusted code."

**Operator consequence.** Re-audit third-party extensions for `modelRegistry.stream`, `context_with_system`, and `appendContextEdit` on upgrade to 0.86/0.87; each is a place spend, prompt, or visible history can change without the user seeing it in the transcript. SDK embedders who mutate `agent.state.messages` must port to SessionManager calls on 0.87.0.

## 6. `/bug` uploads diagnostics and optionally the transcript to Radius without login

- **Date:** 2026-09-19 (v0.86.0); offline-mode guard fixed in v0.87.0
- **Channel:** `tagged-release`
- **Ancestry evidence:** v0.86.0 Added: `/bug` bundles environment, model, provider, extension, settings metadata "secrets redacted," optionally the transcript or a model-written summary, uploaded to Radius "no login required; attributed when logged in," or exported as zip; crashes recorded in `~/.pi/agent/crashes.json`; unexplained errors point at `/bug` once per session. Upload target at v0.87.0 packages/coding-agent/src/core/bug-report-upload.ts: POST to `/v1/bug-reports` on `getRadiusGatewayUrl()`. v0.87.0 Fixed: "/bug allowing uploads in offline mode" (#9841). v0.86.1 stops `/bug` hints on user cancellations.
- **Receipt:** https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/src/core/bug-report-upload.ts
- **Half:** both | **Confidence:** high

**What changed.** A new user-invoked egress path to the vendor's gateway, off by default (it requires `/bug`), with transcript inclusion optional. On 0.86.x `PI_OFFLINE` did not stop the upload.

**Operator consequence.** In regulated repos, prefer the zip export and read it before sending. If you rely on offline mode as a no-egress guarantee, skip 0.86.0 and 0.86.1.

## Carry-forward answers

1. **dev harness to main, tag, npm.** Yes to main and tag (v0.85.0, ancestry above). npm: shipped compiled only in 0.85.0 by the maintainers' own account unintentionally, withdrawn to source-only in 0.85.1 and still source-only at 0.87.0. Tags cut in window: v0.84.3, v0.84.4, v0.85.0, v0.85.1, v0.86.0, v0.86.1, v0.87.0. npm versions in window: same seven, no gaps, dist-tag latest moved with each (0.87.1 on 2026-09-22 is OUT). **Compaction docs:** match the package from 0.84.3.
2. **Credential print (parent lane note).** `pi auth print-api-key` is still ungated: packages/coding-agent/src/cli/auth-command.ts has identical blob 9ee80460 at v0.84.2 and v0.87.0.
3. **Approvals.** Pi still ships no built-in approval layer. Branches `approvals` (last commit 2026-06-03, behind main by 2096) and `better-approvals` (2026-06-08, behind by 2051) are stale and in no tag. The permission-relevant changes this window are extension-boundary fixes (items 3, 4) and plugins.md's wrapper-composition design (item 1).

## Release ledger

| Tag | GitHub release (UTC) | npm publish (UTC) | prerelease | ahead_by from previous stable |
|---|---|---|---|---|
| v0.84.3 | 2026-08-24T11:09:57Z | 2026-08-24T11:09:37Z | false | 105 (vs v0.84.2) |
| v0.84.4 | 2026-08-28T22:08:23Z | 2026-08-28T22:07:57Z | false | 41 |
| v0.85.0 | 2026-09-04T10:18:28Z | 2026-09-04T10:18:05Z | false | 447 |
| v0.85.1 | 2026-09-05T12:29:01Z | 2026-09-05T12:17:19Z | false | 13 |
| v0.86.0 | 2026-09-19T23:15:37Z | 2026-09-19T23:14:16Z | false | 164 |
| v0.86.1 | 2026-09-20T11:19:20Z | 2026-09-20T11:16:39Z | false | 12 |
| v0.87.0 | 2026-09-21T18:29:47Z | 2026-09-21T16:51:53Z | false | 18 |

All compares status=ahead, behind_by=0. No prereleases, no tag without a release, no npm version without a tag. npm dist-tags: latest=0.87.1 (OUT), legacy-node20=0.74.2.

## Researcher lane notes

Marketing vs substance: pi.dev/news is a release-note mirror only in this window; no Pi 2 design post appeared there through 2026-09-21 (feed checked). lucumr.pocoo.org posts in window (08-22, 08-24, 09-05, 09-07, 09-12, 09-14) were listed but not read for Pi content beyond 08-22, which does not discuss Pi. The v0.85.0 release notes are silent on the harness; the substance is in ancestry and the npm export map, not the notes. Also in window, not promoted: optional Windows `powershell` tool (0.84.3), staged atomic `pi update` for installer-managed installs (0.84.3), prompt-cache warming (0.86.0, cost-aware, idle mode optional), Meta Muse provider (0.86.1), GPT-6 Astra (0.85.1), built-in tools honoring `ctx.cwd` (0.85.0, #8627).

## Surfaces checked

- gh api repos/earendil-works/pi (identity), releases (30), tags (30), branches (dev 404; approvals, better-approvals, harness-v2/j4, content-hardening compared to main)
- gh compare between every consecutive in-window tag; a17323e5 against v0.84.3, v0.84.4, v0.85.0, v0.86.0, v0.87.0; v0.87.0...window-close main 1a584a7a
- merge commits on v0.85.0 history since 2026-08-20
- packages/agent/docs/plugins.md at v0.84.4, v0.85.0, v0.85.1, v0.87.0
- packages/coding-agent/docs/compaction.md at v0.84.2, v0.84.3, v0.87.0; agent-session.ts at v0.84.3
- auth-command.ts blob at v0.84.2 and v0.87.0; bug-report-upload.ts at v0.87.0
- PR #9662, issues #9068, #8718 (timeline), #9132
- repos/earendil-works/pi/security-advisories (4, all 2026-06-08)
- npm view time, dist-tags, exports, dist.unpackedSize/fileCount for 0.84.4, 0.85.0, 0.85.1, 0.87.0
- jsDelivr file presence for experimental/plugin (src and dist) and dist/core/agent-session.js at 0.84.3
- https://pi.dev/docs/latest/compaction, https://pi.dev/news.xml, https://lucumr.pocoo.org/

## Not reached

- A full read of the 264 dev commits; the harness claim rests on ancestry and plugins.md, not a diff review.
- mariozechner.at posts in window (index returned only 2025 posts in the scrape).
- Social surfaces for a Pi 2 design post; not checked by rule.

## Observed after window close

- v0.87.1 GitHub release 2026-09-22T19:43:43Z, npm 2026-09-22T19:42:48Z; npm latest=0.87.1.
- main moved to 898ab804 on 2026-09-22T23:33Z.
