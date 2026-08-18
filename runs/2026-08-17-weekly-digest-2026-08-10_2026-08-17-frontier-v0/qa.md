# Adversarial receipt verification

Fourteen load-bearing claims, each sent to a verifier whose instruction was to
break it rather than confirm it, with an independent second opinion on anything
not confirmed first time. Nineteen verifier runs in total. Nine claims survived
untouched. Five did not, and not one failed because the underlying event was
invented: every failure was a count, a range, a scope, or a channel label. That
is the failure mode worth paying for, because a wrong number in a publication
whose whole proposition is that its numbers are right costs more than a story
left out.

A refuted claim here is not necessarily dead. Where the verifier supplied a
defensible corrected form, the corrected form is what may be published, and the
correction is recorded below so the edit is traceable.

## 1. [w1 / claude-code] Shell-command permission checks could be shown one command and run another  --  fixed across v2.1.221 to v2.1.223

- **Verdict:** REFUTED THEN REFUTED (second opinion taken)
- **Receipt:** https://code.claude.com/docs/en/changelog#2-1-223
- **Receipt resolves:** true | **supports the exact claim:** false | **channel correct:** true

**What was wrong.** Four distinct overstatements, one of them load-bearing in the title.  1. THE CONTIGUITY ERROR (load-bearing). Title: "fixed across v2.1.221 to v2.1.223". Body: "Three consecutive releases fixed the same class of defect." Refuted by the receipt  --  2.1.222 carries zero instances of the titled defect class. The range notation asserts a three-release run of one defect; the evidence shows two releases (221, 223) with that defect and a middle release with differently-shaped authority fixes. The claim's own body quietly concedes this by describing 2.1.222's contents as "two more" authority gaps rather than more of the same defect, which contradicts its own opening sentence.  2. A COUNT THAT DOES NOT SURVIVE RECOUNTING. "v2.1.223 also closed three authority gaps:"  --  then enumerates TWO (dynamic `import()` escaping the workflow sandbox; `bypassPermissions` ignoring org policy). A reader coun

**Publishable as.** Approval checks could be shown less than what ran  --  Claude Code closed four such holes in v2.1.221 and v2.1.223

## 2. [w1 / antigravity] 1.1.11 discloses that a malformed allowlist entry auto-approved every command

- **Verdict:** CONFIRMED
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11
- **Receipt resolves:** true | **supports the exact claim:** true | **channel correct:** true

**Survived.** Re-fetched independently via `gh api repos/google-antigravity/antigravity-cli/releases/tags/1.1.11` and `curl -sI` on the html_url (HTTP 200). The release body contains the entry verbatim:

## 3. [w1 / antigravity] 1.1.11: MCP admin controls were skipped for the first five minutes of every session

- **Verdict:** CONFIRMED
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11
- **Receipt resolves:** true | **supports the exact claim:** true | **channel correct:** true

**Survived.** Release 1.1.11 (published 2026-08-07T02:35:23Z, draft:false, prerelease:false, target main, tag -> 1d853acd23f2b0fc55da42377aab1a05f5e34aa8) contains, verbatim in both the release body and CHANGELOG.md pinned at that SHA (line 18): "Fixed admin controls being skipped for MCP servers at startup, where a fetch made before authentication cached \"admin controls not applicable\" and allowed every server for the next five

## 4. [w1 / codex] `--approve-for-me` puts a model, not a human, in the approval seat

- **Verdict:** CONFIRMED
- **Receipt:** https://github.com/openai/codex/pull/36373
- **Receipt resolves:** true | **supports the exact claim:** true | **channel correct:** true

**Survived.** PR openai/codex#36373 "Add an `--approve-for-me` CLI flag" resolves; merged 2026-07-31T18:28:24Z into main, merge_commit_sha b7a61066081644e0d8b2c0b4dbfd7408ac1514df, 7 files, +283/-21.

## 5. [w1 / pi-coding-agent] `AGENTS.override.md` lets any directory replace the operator's context file  --  and it loads before project trust is resolved

- **Verdict:** CONFIRMED
- **Receipt:** https://github.com/earendil-works/pi/pull/7681
- **Receipt resolves:** true | **supports the exact claim:** true | **channel correct:** true

**Survived.** PR earendil-works/pi#7681 ("Support AGENTS.override.md as a per-directory context override", author Marvae) resolves: state=closed, merged=true, merged_at=2026-08-05T19:24:32Z, base=main, merge_commit_sha=8ecf8a9883d1cb7c78d07c0fd64d32d6a1fd2c4c, 8 files, +41/-5. Commit 8ecf8a98 ("feat(coding-agent): support AGENTS.override.md (#7681)", 2026-08-05T19:24:31Z).

## 6. [w1 / paperclip] Standard-trust agents got default-open write access to any company-visible issue they can read

- **Verdict:** CONFIRMED
- **Receipt:** https://github.com/paperclipai/paperclip/pull/10804
- **Receipt resolves:** true | **supports the exact claim:** true | **channel correct:** true

**Survived.** PR #10804 "feat(auth): default-open visible issue writes" (paperclipai/paperclip, merged 2026-08-04T14:18:44Z into master, merge commit dfcda67650d4fc60b1cca537efca7fc9d52c718c, 7 files, +434/-49) says in its own words:

## 7. [w1 / openclaw] Stable moved twice in the window and still does not carry the workspace-boundary fix

- **Verdict:** REFUTED THEN REFUTED (second opinion taken)
- **Receipt:** https://github.com/openclaw/openclaw/compare/v2026.7.1-2...cc027149e553ff4be1afe2ca9cc3de9ccdea6f68
- **Receipt resolves:** true | **supports the exact claim:** false | **channel correct:** false

**What was wrong.** Three problems, one of them disqualifying.  1. CHANNEL (disqualifying). The claim is stamped `tagged-release`. The publication's own taxonomy in CONTRIBUTING.md defines that as "in a released tag an operator can install." The change this signal reports is the workspace-boundary fix, and that fix is in no non-prerelease tag by ancestry or by content  --  it exists only in v2026.7.2-beta.5/6/7 and v2026.8.1-beta.1/2. Stamping it `tagged-release` asserts the operator is protected when they are not, which CONTRIBUTING.md calls the single most common and highest-value correction the publication receives. The house has already labeled this exact story correctly: runs/2026-08-03-weekly-digest-2026-07-27_2026-08-03-frontier-v0/signals/frontier-signals.yml, signal 2026-08-03-openclaw-sandbox-fix-reaches-beta-only, carries `channel: preview-or-beta`. Correct value is `preview-or-beta`, or `mixed` 

**Publishable as.** OpenClaw published four stable releases in the window and the workspace-boundary fix is on none of them

## 8. [w2 / deepseek-harness] Everything is a plugin, including the components that enforce the limits  --  the approval gate is a waterfall a plugin can prepend to

- **Verdict:** CONFIRMED
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/docs/architecture.md
- **Receipt resolves:** true | **supports the exact claim:** true | **channel correct:** true

**Survived.** docs/architecture.md at 99f6f02 resolves (HTTP 200) and carries both quoted sentences verbatim: "Every part of the product is a plugin, including the model adapter, the tool registry, the session log, and the agent loop itself, so every part is replaceable from configuration." / "There is no privileged core to patch" / "A patch targets a row by id and replaces its whole config, or inserts new rows." / "Any row it pri

## 9. [w2 / deepseek-harness] Nothing authenticates the Web UI on 127.0.0.1:3080, and the /api fence says so in its own header comment

- **Verdict:** CONFIRMED
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/packages/client/connection/src/api-request-trust.ts
- **Receipt resolves:** true | **supports the exact claim:** true | **channel correct:** true

**Survived.** packages/client/connection/src/api-request-trust.ts at 99f6f02 (123 lines, fetched via `gh api .../contents/...?ref=99f6f02`) opens exactly as quoted. The header comment's closing sentence is verbatim: "Network reachability and authentication stay out of scope: binding policy belongs to the webserver config, and this fence is not an auth layer." The comment also names what the fence IS for: "Defends the two confused-

## 10. [w2 / claude-code] The `stable` release channel sits eight versions behind `latest`, so this window's permission-bypass and credential-leak fixes are not on it

- **Verdict:** REFUTED THEN REFUTED (second opinion taken)
- **Receipt:** https://code.claude.com/docs/en/setup#configure-release-channel
- **Receipt resolves:** true | **supports the exact claim:** false | **channel correct:** true

**What was wrong.** Two overstatements, one in the headline number and one in the remedy.  1. "Eight versions behind" / "everything shipped in v2.1.227 through v2.1.234"  --  this is version-number arithmetic (234 − 226 = 8) presented as a release count. 2.1.230 does not exist and never did: not on npm, not in the changelog, no unpublish record, and the only skipped integer in the whole 2.1.200 -- 234 range. A reader who recounts gets seven releases. For a publication whose hook is a countable gap, an inflated headline count is the exact failure mode.  2. The remedy inverts what `minimumVersion` does. The claim advises "If you cannot move the whole fleet to `latest`, pin a floor with `minimumVersion` in managed settings ... rather than leaving the channel to decide"  --  implying the floor pulls a stable-channel fleet forward onto the fixed build. The receipt says the opposite: `minimumVersion` is a no-DOWN

**Publishable as.** The `stable` release channel sits seven releases behind `latest`, so this window's permission-bypass and credential-leak fixes are not on it

## 11. [w2 / codex] Nothing reached stable in the second week: 0.148.0 sat in alpha for ten days and 422 commits

- **Verdict:** REFUTED THEN REFUTED (second opinion taken)
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21
- **Receipt resolves:** true | **supports the exact claim:** false | **channel correct:** true

**What was wrong.** Three checkable overstatements, one of them load-bearing.  1. "OpenAI published twenty-one 0.148.0 alpha builds"  --  FALSE. Nineteen were published. alpha.3 and alpha.10 are git tags with no GitHub release (404 from releases/tags/) and no npm publish (absent from the registry version map). Both independent channels agree on 19. The researcher read the highest suffix as a count.  2. "Anyone benchmarking or writing about Codex from the default-branch commit log this fortnight is describing software no operator can install."  --  FALSE, and this is the operator-facing punchline. `npm install -g @openai/codex@alpha` installs 0.148.0-alpha.21 right now. The registry carries the full platform matrix for it: alpha-darwin-arm64, alpha-darwin-x64, alpha-linux-arm64, alpha-linux-x64, alpha-win32-arm64, alpha-win32-x64, all at 0.148.0-alpha.21, published 2026-08-17T19:33-19:54Z. The 0.148.0 line i

**Publishable as.** Codex shipped no stable release for ten days: nineteen 0.148.0 alphas and 422 commits with the npm `latest` tag frozen at 0.147.0

## 12. [w2 / agent-zero] SSRF fix for CVE-2026-4308 was silently lost in a plugin refactor and shipped broken through 13 stable releases before v2.9 restored it

- **Verdict:** REFUTED THEN REFUTED (second opinion taken)
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/b40874e7c03775c53989e206769e33ff23a4384e
- **Receipt resolves:** true | **supports the exact claim:** false | **channel correct:** true

**What was wrong.** The title's count fails a recount. I enumerated every tag and every release: the tags between the regression and the fix are v1.19, v1.20, v2.0, v2.1, v2.2, v2.3, v2.4, v2.5, v2.6, v2.7, v2.8  --  eleven, all prerelease=false, draft=false. There is no v1.21, no v2.x.y point release, and no unreleased tag hiding in the range (the tags API and the releases API agree). I then fetched plugins/_document_query/helpers/fetch.py at each of those thirteen tags to check content rather than trusting ancestry: v1.18 = file does not exist; v1.19 through v2.8 = `import aiohttp` present, `allow_redirects=True` present, `fetch_public_http_resource` absent (11 tags); v2.9 = aiohttp gone, fetch_public_http_resource present twice. So the vulnerable code is verifiably in 11 stable releases. Thirteen is only reachable by counting the range v1.18 -- v2.9 inclusive, i.e. by counting one release that predates t

**Publishable as.** SSRF fix for CVE-2026-4308 was silently lost in a plugin refactor and shipped broken through 11 stable releases before v2.9 restored it

## 13. [w2 / hermes-agent] Fifteen out of fifteen destructive Windows commands passed approval silently

- **Verdict:** CONFIRMED
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/84428
- **Receipt resolves:** true | **supports the exact claim:** true | **channel correct:** true

**Survived.** NousResearch/hermes-agent#84428, "fix(security): approval system covers Windows destructive commands and paths", by teknium1, base main, head fix/windows-approval-patterns, created 2026-08-12T08:59:34Z, merged 2026-08-12T09:43:23Z, merge_commit_sha e1caf88c6ca62e364d4599a53c097b10c70ffb03. Diff is +175/-0 across exactly two files: tools/approval.py (+65 -0) and tests/tools/test_approval_windows.py (+110 -0, new).

## 14. [w2 / openclaw] Approved exec could run different bytes than the ones you approved

- **Verdict:** CONFIRMED
- **Receipt:** https://github.com/openclaw/openclaw/pull/124858
- **Receipt resolves:** true | **supports the exact claim:** true | **channel correct:** true

**Survived.** PR openclaw/openclaw#124858, "fix(security): prevent approved scripts from changing before execution", by steipete. Merged 2026-08-17T01:26:43Z into base main, merge_commit_sha ab5611f0be610380fe48803fe4311896ca85806e, +3212/-1135 across 32 files. Body verbatim: "Fixes an issue where an operator could approve an exec command that referenced one script payload, but the runtime could execute different bytes if that scr
