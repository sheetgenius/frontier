# Gemini CLI adversarial crosscheck

Source: `gemini-cli`.
Run: `2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0`.
Window assessed: 2026-09-21 through 2026-10-13, inclusive, UTC.
Independent retrieval: 2026-10-14.
Harvest assessed: `harvest/gemini-cli.primary.md`, including its 08:55Z cutoff.

**Do not publish the harvest unchanged.** Its morning snapshot is stale for the
dated profile: v0.64.0 stable and v0.65.0-preview.0 both shipped on 2026-10-13.
There are also substantive scope errors in the tool-output cap, Plan Mode,
build-file protection, sandbox isolation, and MCP settings-loss descriptions.

Numbered-section totals: **1 VERIFIED, 12 CORRECTED, 0 REFUTED,
0 UNVERIFIABLE**. These counts cover sections 1 through 13 only. A CORRECTED
verdict preserves an independently supported observation and specifies the
replacement; it does not approve the rejected wording. Channel checks,
prior-claim checks, and misses are reported separately below.

## Method and custody

Read THESIS.md, METHOD.md, EDITORIAL.md, CONTRIBUTING.md, the researcher brief,
the source contract and notes, the dated profile, and the parent harvest's
relevant channel/security record. Independently cloned
`https://github.com/google-gemini/gemini-cli.git` with blob filtering and no
checkout into
`/Users/c3po/co/frontier/tmp/refresh-2026-10-13/clones/gemini-cli-verify/`.
Read upstream source as data. No cloned code, package scripts, installation,
site build, or test suite was executed. No Git mutation was made to Frontier.

Opened every URL in the thirteen numbered sections' Receipt fields: tagged
blobs through `git show`, PRs and release objects through the GitHub API, and
the Google/AIR pages directly. Also read the surrounding implementation needed
to check the claims, rather than treating line anchors or PR summaries as proof.
Re-ran `git merge-base --is-ancestor` and left/right commit counts independently.
The plain-Git diff probe below reads two existing commit trees and writes no
files. The researcher's checkout exploit probe was not rerun.

## Channel truth: CORRECTED

The newest stable available by the end of 2026-10-13 is
[v0.64.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0),
published by GitHub at **2026-10-13T20:44:46Z**, `prerelease=false`, and by npm at
**2026-10-13T20:48:24.183Z**. The exact install target is
`@google/gemini-cli@0.64.0`. The independent
[npm registry response](https://registry.npmjs.org/@google%2fgemini-cli)
read on 2026-10-14 reports `latest=0.64.0` and `preview=0.65.0-preview.0`.
The [preview release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0)
was published at **2026-10-13T20:27:55Z**, `prerelease=true`, and npm published
it at **2026-10-13T20:31:28.212Z**.

The harvest correctly labels its earlier observation as 08:55Z. That observation
cannot stand in for an inclusive October 13 close. Replace its predictions about
the evening promotion with the actual releases. The window has **four stables
and six non-nightly previews**, not three and five.

The live registry also reports `nightly` and `staging-tmp` as
`0.65.0-nightly.20261014.g42c518220`, published 2026-10-14T01:33:01.285Z.
That artifact is outside the window. The last in-window nightly was
`0.65.0-nightly.20261013.g51617c1bc`. The stray `false` tag remains
`0.42.0-nightly.20260512.g11a9edc80`. npm does not provide dist-tag history in
this response: publication times are verified historical facts, whereas the
precise October 13 tag-assignment history is not independently archived here.
Do not date the October 14 dist-tag observation October 13.

Pinned tag identities:

| Tag | Dereferenced commit |
| --- | --- |
| v0.60.0 | `733edcb597ce690ac2e2fe3b3b3690b60a4c8f27` |
| v0.61.0 | `bb523741c7429a44d03e964bc124c7c92df59d5f` |
| v0.62.0 | `b460678f3db508407554afd604cc9d6635becb2a` |
| v0.63.0 | `573846625af9e93b3b968e0e0b86bb093a4c9b16` |
| v0.64.0-preview.1 | `90997f3982756989591ec2941301099d8e20756e` |
| v0.64.0 | `4a0749aceac5643e6f85a36d7420314d85e13b52` |
| v0.65.0-preview.0 | `ca417cd41f0dbf091c30d55b5b369f4c6b852fc8` |
| v0.65.0-nightly.20261013.g51617c1bc | `34c2d4f5dc85f02931bef4061305af549a32d367` |

### Independently rebuilt release ledger

GitHub times/flags come from `gh release list` and the release API. npm times
come from the registry's `time` object. All dates below are 2026. Counts are
`ahead / behind` for the row's head against the stated base, independently
computed with `git rev-list --left-right --count` and reordered for this table.

| Tag | GitHub published UTC | Prerelease | Ahead / behind and base | npm published UTC |
| --- | --- | --- | --- | --- |
| [v0.60.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0) | 2026-09-15T20:31:02Z | false | 16 / 2 vs v0.59.0 | 2026-09-15T20:36:40.030Z |
| [v0.61.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-preview.1) | 2026-09-23T22:53:10Z | true | 10 / 2 vs v0.60.0 | 2026-09-23T22:57:54.198Z |
| [v0.61.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0) | 2026-09-23T23:59:15Z | false | 11 / 2 vs v0.60.0 | 2026-09-24T00:04:53.021Z |
| [v0.62.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-preview.0) | 2026-09-23T23:47:50Z | true | 20 / 4 vs v0.61.0 | 2026-09-23T23:53:34.721Z |
| [v0.62.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0) | 2026-09-29T21:17:07Z | false | 21 / 4 vs v0.61.0 | 2026-09-29T21:25:44.188Z |
| [v0.63.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-preview.0) | 2026-09-29T20:58:07Z | true | 16 / 2 vs v0.62.0 | 2026-09-29T21:02:47.827Z |
| [v0.63.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0) | 2026-10-06T20:38:49Z | false | 17 / 2 vs v0.62.0 | 2026-10-06T20:58:43.642Z |
| [v0.64.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-preview.0) | 2026-10-06T20:26:18Z | true | 17 / 2 vs v0.63.0 | 2026-10-06T20:31:09.257Z |
| [v0.64.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-preview.1) | 2026-10-09T20:27:57Z | true | 19 / 2 vs v0.63.0 | 2026-10-09T20:31:47.807Z |
| [v0.64.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0) | 2026-10-13T20:44:46Z | false | 20 / 2 vs v0.63.0 | 2026-10-13T20:48:24.183Z |
| [v0.65.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0) | 2026-10-13T20:27:55Z | true | 28 / 4 vs v0.64.0 | 2026-10-13T20:31:28.212Z |
| [v0.65.0-nightly.20261013.g51617c1bc](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-nightly.20261013.g51617c1bc) | 2026-10-13T01:36:45Z | true | 40 / 2 vs v0.63.0 | 2026-10-13T01:40:24.316Z |

The harvest's existing stable/preview rows match. Its last row conflates main
commit `51617c1bc` with the nightly tag: main is 39 ahead of v0.63.0, but the
actual nightly has one additional version commit and is 40 ahead. Similarly,
v0.64.0 is exactly one release chore ahead of v0.64.0-preview.1, behind zero.
v0.61.0-preview.1 to stable was about 67 minutes on npm, not "within the hour."

The independently fetched end-of-window main head is
[`42c51822084ac25cd5d97ac0023822c5235f88c8`](https://github.com/google-gemini/gemini-cli/commit/42c51822084ac25cd5d97ac0023822c5235f88c8),
committed 2026-10-13T20:56:44Z. It is 29 ahead / 4 behind v0.64.0,
86 ahead / 2 behind v0.60.0, and 2 ahead / 1 behind v0.65.0-preview.0.
The two main-only commits at close are the roadmap update and preview changelog;
their nightly did not publish until October 14. Thus the assertion that every
current main commit is already in an in-window nightly also needs a new cutoff.

## Independent ancestry results

Each cell is the exit status from `git merge-base --is-ancestor <commit> <tag>`:
0 means ancestor, 1 means not ancestor. No ancestry command returned an error.
Abbreviations below resolve to the pinned full commit URLs in the section text
or to the explicit SHAs in the harvest; the important cherry-picks are expanded
in full below.

| Section | Commit | v0.61.0 | v0.62.0 | v0.63.0 | v0.64.0 | v0.65.0-preview.0 |
| --- | --- | --- | --- | --- | --- | --- |
| 2 | `62364cb20` | 1 | 0 | 0 | 0 | 0 |
| 2 | `0e6fa774e` cherry-pick | 0 | 1 | 1 | 1 | 1 |
| 3 | `bfb71fd2b` | 0 | 0 | 0 | 0 | 0 |
| 3 | `2fe7c2d3f` | 1 | 1 | 0 | 0 | 0 |
| 4 | `2ce1a6963` | 1 | 1 | 1 | 1 | 0 |
| 4, 10 | `581fdbbfa` composite cherry-pick | 1 | 1 | 1 | 0 | 1 |
| 5 | `f5dc904d2` | 1 | 1 | 0 | 0 | 0 |
| 6 | `562f0361f` | 1 | 1 | 0 | 0 | 0 |
| 7 | `bedef96ef` | 1 | 1 | 0 | 0 | 0 |
| 8 | `f41d0bc8f` | 1 | 1 | 1 | 1 | 0 |
| 9 | `9c1b0a610` | 0 | 0 | 0 | 0 | 0 |
| 10 | `23c77ca61` | 1 | 1 | 1 | 1 | 0 |
| 10 | `249d51c26` | 1 | 1 | 1 | 1 | 0 |
| 12 | `d5b3e3acc`, `49cc3b340` | 1 | 0 | 0 | 0 | 0 |
| 12 | `361b0bbc5` | 1 | 1 | 0 | 0 | 0 |
| 12 | `e6550609f`, `a5cdfab72` | 1 | 1 | 1 | 0 | 0 |
| 13 | `d1cc08a8a`, `c6bccb7ec`, `5e6915c94`, `478f771f9` | 1 | 1 | 1 | 0 | 0 |

All newly introduced commits above are absent from v0.60.0. Separately,
`1725ec346b5fe9ce889a1df8633d9cdc9d6bb587` (headless Plan Mode exit) and
`c0d192452b4e2df7efb6d62a60385f475bfd6779` (Git overrides) are ancestors of
v0.60.0 and every checked stable. This matters for sections 5 and 6.

For the composite cherry-pick, absence of the original main SHA is not absence
of the fix. In v0.64.0, `untrustedContextTracker.ts` and `policy-engine.ts` have
exactly the same blob IDs as at `2ce1a6963`; `oauth-flow.ts` matches
`23c77ca61`; and `geminiChat.ts` matches `249d51c26`. The cherry-pick
[`581fdbbface8dff93f24db861395f22581099a45`](https://github.com/google-gemini/gemini-cli/commit/581fdbbface8dff93f24db861395f22581099a45)
is an ancestor of both v0.64.0-preview.1 and v0.64.0.

## 1. Code Assist subscriptions: CORRECTED

**Evidence read:** the [2026-10-09 Google announcement](https://docs.cloud.google.com/gemini/docs/codeassist/release-notes),
[consumer deprecation page](https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals),
and the harvest's v0.63.0 authentication receipt, also re-read at
[v0.64.0](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/get-started/authentication.mdx#L17-L34).
The two Google pages are mutable, not tag/SHA-pinned. They support a dated
`docs-only` announcement, not a versioned CLI behavior change. The 2026-06-18
consumer cutoff and 2026-10-09 end of new subscriptions are stated by Google.

**Exact fix:** replace "cannot extend that path to new teams after 2026-10-09"
with "cannot purchase a new Standard or Enterprise subscription after
2026-10-09." Existing subscriptions can still add licenses. Google's linked
[subscription sunset page](https://docs.cloud.google.com/gemini/docs/codeassist/sunset),
last updated 2026-10-13, now gives January 31, 2027 for adding licenses and
annual renewals, and December 31, 2027 for monthly renewals. Existing service
continues to the contractual end. Those details are no longer supported only
by issue #29712. This additional page is also unversioned; its historical bytes
were not independently archived, so its displayed update date is not a SHA pin.

Do not infer a universal Gemini CLI shutdown or a date for terminating API-key,
Vertex, or Gateway access. No such statement was verified. The tagged auth docs
still recommend consumer Google login, so the documented discrepancy remains.

## 2. Flash model rewrites: CORRECTED

**Evidence read:** PR #29443, the v0.61.0-preview.0 to v0.61.0 comparison, and all
the cited v0.63.0 model/config/content-generator/changelog ranges. Re-read the
[mapping table](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/models.ts#L144-L164),
[auth gate](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/config.ts#L3585-L3618),
and [request mapper](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/core/modelMappingContentGenerator.ts#L44-L90).
The cited source blobs are pinned; the PR body is supporting, mutable prose.

`62364cb2000795537a6895261b37ec668e4cf527` merged on 2026-09-22;
[`0e6fa774e01fdeb1c0945536c9d257a7fceac730`](https://github.com/google-gemini/gemini-cli/commit/0e6fa774e01fdeb1c0945536c9d257a7fceac730)
puts it into v0.61.0. The ancestry and 67-minute preview interval are confirmed.
GitHub stable publication is September 23; npm availability begins September 24
UTC. The behavior remains in v0.64.0, `tagged-release`.

**Exact fix:** say "rewrites the outgoing model ID to `gemini-3.8-flash`" rather
than asserting a measured served model. The same qualification applies to the
Flash Lite rewrite. API-key, Vertex and Gateway access gates return true in the
client; Google login uses experiment flags. No live backend response or actual
`modelVersion` was observed. Do not recommend retaining v0.60.0 as an unqualified
solution: it also retains the independently verified security and reliability
defects in this report. The code establishes no exposed opt-out for these exact
mapped IDs, not a guarantee about all possible deployment configurations.

## 3. Build-file and taint gates: CORRECTED

**Evidence read:** PR #29250, the v0.61.0 release, every cited v0.63.0 policy,
scheduler, shell and test range, and the corresponding latest stable code.
The v0.61.0 gate and v0.63.0 final non-interactive ASK-to-DENY conversion are
confirmed by ancestry and direct source reads. Channel remains `tagged-release`.

**Exact fix:** restrict the file-edit claim to recognized edit-tool calls with
an extractable target path. The
[v0.64.0 policy gate](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policy-engine.ts#L903-L956)
classifies tool names and then reads `file_path`, `path`, `filePath`, or `file`.
It is not an operating-system prohibition on every way of modifying those
files. In particular, the
[YOLO shell rule permits redirection](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policies/yolo.toml#L50-L56).
The source does not support the blanket statement that a headless agent
"cannot edit package.json" through any tool, nor that every injection-to-build
path is closed. No shell-write bypass was executed here.

Also name [the actual recognized filenames](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/buildFileUtils.ts#L14-L71):
the Bun entry is `bun.lockb`, not all Bun lockfiles. The untrusted-output matcher
was narrowed in stable v0.64.0, so do not apply the v0.61.0 through v0.63.0
false-positive description to the newest stable. These are scope corrections,
not a claim that the verified edit-tool and post-edit build gates disappeared.

## 4. Taint false-positive fix: CORRECTED

**Evidence read:** PRs #29672 and #29696, issue #29579, the cited v0.63.0 tracker
ranges, and v0.64.0-preview.1's release. Also checked issue #29650's reported
0.61.0 version. The reports remain reports; the old tokenizer and new safe-flag
logic were independently inspected.

**Exact fix:** this is now `tagged-release`, first stable **v0.64.0 on
2026-10-13**, after preview.1 on October 9. The source at
[v0.64.0](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/untrustedContextTracker.ts)
is byte-identical to the fix commit for this file. Its
[policy engine](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policy-engine.ts#L633-L669)
also contains the compound-command allowance. Replace "test preview now; if
v0.64.0 promotes" with a stable upgrade/test recommendation. Neither these
receipts nor the two reports establish how frequently all workloads encounter
the old warning; retain that uncertainty.

## 5. Headless Plan Mode: CORRECTED

**Evidence read:** PR #29539, issue #28913, and the harvest's v0.63.0 prompt,
exit-tool and policy receipts. `f5dc904d21da337a038f215c433b74382ca82bdb`
first reaches stable v0.63.0 on 2026-10-06 and remains in v0.64.0.

**Exact fix:** v0.63.0 changed the prompt to encourage autonomous plan completion;
it did not introduce the headless authority transition. Already in
[v0.62.0, the policy allows headless exit_plan_mode](https://github.com/google-gemini/gemini-cli/blob/v0.62.0/packages/core/src/policy/policies/plan.toml#L60-L65)
and [the tool changes approval mode to YOLO](https://github.com/google-gemini/gemini-cli/blob/v0.62.0/packages/core/src/tools/exit-plan-mode.ts#L210-L268).
The issue says the old prompt *could* terminate a run with a text response;
it does not prove every earlier plan run was read-only. Reject that implied
security guarantee.

The [new prompt](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/prompts/snippets.ts#L602-L615)
and existing exit path support "headless Plan Mode is not a read-only boundary;
v0.63.0 makes plan-then-implementation more likely by removing the wait
instruction." Denying the exit tool or enforcing a read-only filesystem is
operator guidance, not a locally validated run in this review.

## 6. Git diff regression: VERIFIED

**Evidence read:** PR #29467, issue #28928, the v0.62.0 override and v0.63.0
replacement receipts, plus
[v0.64.0 shell environment construction](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/shellExecutionService.ts#L597-L618).
`562f0361fe63952fcf2db793e3e9fc0ae69ec506` is absent from v0.62.0 and present in
v0.63.0 and v0.64.0. The introducing `c0d192452` is already in v0.60.0.
First fixed stable is 2026-10-06, v0.63.0, `tagged-release`.

Independently reproduced the mechanism with installed Git 2.51.1, reading only
the clone's existing `v0.62.0` and `v0.63.0` package.json trees. With
`GIT_CONFIG_COUNT=1`, `GIT_CONFIG_KEY_0=diff.external`, and empty
`GIT_CONFIG_VALUE_0`, ordinary `git diff` exits 128 with `cannot run` and
`external diff died`; `git diff --no-ext-diff` and `git diff --stat` exit 0.
This confirms the body's distinction between changing content diffs and its
listed exceptions. It does not mean every Git command failed. The global/system
config suppression remains in the newest stable.

## 7. Tool-output cap: CORRECTED

**Evidence read:** PR #29451 and all six cited old/new source receipts. Inspected
the complete latest stable truncation branch and the recursive response helper,
not just the constant. `bedef96ef42905bd84a86dbec021c706168e7e2f` first reaches
stable v0.63.0 on 2026-10-06; it remains `tagged-release` in v0.64.0.

**Exact fix:** there is a **65,536-byte limit on individual handled text
strings/parts/response fields**, not a universal 64 KB ceiling on an entire
tool result. The [scheduler maps array parts independently](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/scheduler/tool-executor.ts#L340-L405);
two text parts of 40 KB can both survive that check. The
[recursive helper](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/tool-utils.ts#L185-L278)
also limits individual string values and leaves binary/non-plain objects
outside that treatment. The
[context-management branch returns through a separate distiller](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/scheduler/tool-executor.ts#L202-L213).

The suffix is included inside the byte budget, so the model does not receive
65,536 bytes of source text *plus* the note. Saving the original is best-effort:
[disk-save errors are swallowed](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/scheduler/tool-executor.ts#L320-L337),
and some truncation calls supply no saved path. Do not promise every omitted
payload is recoverable from a file. The constant is not raised by the older
user threshold setting.

The harvest correctly rejects the PR's claimed 512 KB / 50,000-token watermark.
The [actual compression trigger](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/context/chatCompressionService.ts#L495-L509)
uses the configured fraction, default 0.5, of the model token limit. The three
protected tool turns, 2 KB older-response previews, and retrieval exceptions
are also present in that file. This is code verification, not an RSS benchmark.

## 8. MCP project-settings loss: CORRECTED

**Evidence read:** PR #29583, issue #29465, all original settings/add receipts,
and both add/remove implementations in v0.64.0 and v0.65.0-preview.0.
`f41d0bc8f7fe79563d353f97c7580ed4d8fd24d7` is absent from v0.64.0 and present in
v0.65.0-preview.0. The merge was October 6; its first runnable nightly was
October 7; regular preview availability begins October 13.

**Exact fix:** `gemini mcp add` can still overwrite existing project settings
in an untrusted workspace on newest stable **0.64.0**. The fix is now in
**0.65.0-preview.0**, not nightly-only. The
[preview workspace is read-only](https://github.com/google-gemini/gemini-cli/blob/v0.65.0-preview.0/packages/cli/src/config/settings.ts#L377-L383)
and its project-scoped commands reject writes.

Remove the assertion that `mcp remove` also erases settings through the described
empty-workspace path. In
[stable remove.ts](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/commands/mcp/remove.ts#L24-L34),
the server lookup sees an empty map and returns before `setValue`. The
[preview adds an explicit trust error](https://github.com/google-gemini/gemini-cli/blob/v0.65.0-preview.0/packages/cli/src/commands/mcp/remove.ts#L28-L43)
for that command too, but this is not proof of an earlier destructive remove.
Keep the user-scope/trust-first precaution for add, and back up existing project
settings before changing them on stable.

## 9. Sandbox boundaries and state: CORRECTED

**Evidence read:** PR #29214 and all cited sandbox, sensitivity-check,
sanitization and storage ranges. `9c1b0a610534d6f8120964cf2672c07807d8fc90`
is absent from v0.60.0 and present from v0.61.0 onward. The sensitive-workdir
guards and Seatbelt runtime move are confirmed at v0.64.0, `tagged-release`.

**Exact fix:** distinguish the runtimes. The sanitized settings file,
`HOME=/home/node`, and `SANDBOX_MOUNTS` loop belong to the
[Docker/Podman/runsc path](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L398-L403)
and its [settings/mount setup](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L535-L623).
LXC returns through a separate launcher before those lines. Its
[workdir and allowed-path checks](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L1033-L1175)
do not justify promising the same sanitized settings copy or forced HOME for
LXC. Likewise, do not describe SANDBOX_MOUNTS parsing as a Seatbelt feature.

[Seatbelt runtime storage](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/storage.ts#L70-L135)
does move to `~/.cache/.gemini` when `SANDBOX=sandbox-exec`. MCP/A2A token stores,
temporary sessions and policy-integrity state use that root. The trusted-folder
path has an explicit `GEMINI_CLI_TRUSTED_FOLDERS_PATH` override, so separate
trusted-folder stores are a default-path consequence, not unconditional.

## 10. OAuth issuer compatibility and synthetic turns: CORRECTED

**Evidence read:** PRs #29616/#29696 and every cited old/new OAuth code and docs
range. The main SHAs `23c77ca61` and `249d51c26` are not ancestors of v0.64.0;
the composite cherry-pick and exact blob comparisons establish their content
in that stable tag.

**Exact fix:** change `preview-or-beta` to **`tagged-release`, v0.64.0,
2026-10-13**. The
[stable OAuth docs](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/tools/mcp-server.md#L325-L347)
and [provider condition](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/mcp/oauth-provider.ts#L411-L421)
support the stated metadata/config override behavior. Explicit issuer without
discovered metadata still defaults to requiring `iss`; a supplied issuer is
still checked against the expected value. Do not reduce this to "all issuer
validation was removed."

The [terminal-turn normalization](https://github.com/google-gemini/gemini-cli/commit/249d51c2631ba1a36b71b0f2c50195abbe4100ce)
is also in v0.64.0 through that cherry-pick. The synthesized continuation and
missing-response records are harness-authored, not evidence of a user turn or
successful tool execution. The harvest's operator warning about transcript
interpretation survives, with the stable channel corrected.

## 11. Plugin4Shell installer: CORRECTED

**Evidence read:** both original pinned github.ts receipts and AIR's disclosure;
also [latest stable github.ts](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/extensions/github.ts#L32-L80).
There are no changes to that file between v0.60.0 and the October 13 main SHA.
The source still clones, fetches the requested ref, checks out `FETCH_HEAD`, and
does not compare the resulting HEAD with the requested commit.

The local-branch precedence mechanism is independently supported by
[Git v2.51.1 checkout implementation](https://github.com/git/git/blob/v2.51.1/builtin/checkout.c#L1266-L1280),
which replaces the initially resolved object with an existing branch's object.
The verifier did not run a checkout or the CLI. Hosted-service acceptance of
the branch name remains untested. AIR's statement about Google's future patch
policy is not a Google primary receipt.

**Exact fix:** retain "the vulnerable checkout remains in v0.64.0" in the prior
claims/security posture. Do not count this as a new material change on
2026-10-13: the parent already recorded the same exposure, and the channel did
not change. The brief explicitly excludes such repetition from new findings.
Do not promote "Google will not patch it" from attributed reporting to a
verified product fact. The plain consequence is that a repository controller
can make the Git-install path select unreviewed extension content despite a
requested pin; subsequent execution of that content is the exposure.

## 12. ACP tool-call correlation and usage: CORRECTED

**Evidence read:** PRs #29439/#29549, the v0.62.0 release and cited ACP session
range; re-read the latest stable usage builder and notifications. The pending
tool-call update and denied-call completion are present from v0.62.0, published
2026-09-29. The v0.63.0 session-initialization fix is correctly dated.

**Exact fix:** usage reporting and exact-ID session recovery are now stable in
**v0.64.0 on 2026-10-13**, not preview-only. Both `e6550609f` and `a5cdfab72`
are ancestors of the stable tag. The
[v0.64.0 response builder](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/acp/acpSession.ts#L379-L390)
includes input, output, cached-read and thought token fields; the
[usage_update notification](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/acp/acpSession.ts#L483-L489)
reports turn usage and context size. Do not adopt the PR's approximate billing
savings as independently measured performance. Channel: `tagged-release`.

## 13. Session records, writes and checkpoints: CORRECTED

**Evidence read:** PRs #29568/#29499/#29528, the original preview type and
GitService receipts, and v0.64.0's recording service, edit/write locks,
filesystem service, persistent-state implementation and folder-trust hook.
All four stated SHAs are ancestors of v0.64.0 and absent from v0.63.0.

**Exact fix:** these changes reached **stable v0.64.0 on 2026-10-13** after the
October 6 preview. Update readers of session logs before adopting that stable.
The [record type](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/chatRecordingTypes.ts#L132-L152)
and [append operation](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/chatRecordingService.ts#L1494-L1506)
confirm `$patch`. Specify that the 50-message limit applies to the recording
service's **cachedConversation.messages**, not every in-memory copy of session
history. Full history can be reconstructed from disk.

[File writes](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/fileSystemService.ts#L45-L101)
use a sibling temporary file and rename; edit/write operations and
[checkpoint snapshots](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/gitService.ts#L198-L218)
use in-process path locks. This is not cross-process locking. The
[folder-trust hook](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/ui/hooks/useFolderTrust.ts#L82-L85)
propagates the resolved trust state. The quoted memory/disk measurements are
PR-author measurements, not tests run by this verifier.

## Prior claims re-checked at newest stable v0.64.0

These are targeted source checks of the highest-impact claims, not an assertion
that every historical runtime or host combination was tested.

| Prior claim | Verdict and latest-stable evidence |
| --- | --- |
| autoedit-and-seatbelt | VERIFIED: top-level allowed-path safety checkers remain in [write.toml](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policies/write.toml); the [Seatbelt profile](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox-macos-permissive-open.sb#L136-L148) denies Docker and related daemon sockets. |
| plugin4shell-unpatched | VERIFIED for unchanged installer code; REFUTED if "will not be patched" is treated as a Google-confirmed future fact. See section 11. |
| v0-57-0-carries-august-preview-fixes | VERIFIED for the checked enableAgents gate and Git environment pieces. [Agent loading](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/agents/registry.ts#L160-L179) checks enablement before built-ins. The diff regression is fixed from v0.63.0. |
| v0-59-v0-60-hardening | VERIFIED for the checked paths: [safe DNS lookup](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/fetch.ts#L52-L133), [execution-env denylist](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/environmentSanitization.ts#L240-L275), [workspace path checks](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/sandbox/utils/commandSafety.ts#L91-L120), and [system-settings security check](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settings.ts#L849-L869). CORRECTED for OAuth: the compatibility relaxation is stable now. |
| build-file-gate-preview-only | SUPERSEDED: stable since v0.61.0; retain the scope limits in section 3. |
| a2a-self-trust-rce-fixed-v0-53-0 | VERIFIED for the re-read load path: [loadConfig](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/a2a-server/src/config/config.ts#L251-L264) passes the resolved trust argument to loadEnvironment before merging workspace env. |
| adc-https-enforced-v0-54-0 | VERIFIED: [credential provider](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/agents/auth-provider/google-credentials-provider.ts#L37-L63) rejects non-HTTPS and checks the host. |
| memory-reviewable-patch / memory-private-allowlist | VERIFIED: [Auto Memory docs](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/cli/auto-memory.md#L15-L58) keep review and default-off; [canonical target checks](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/memoryPatchUtils.ts#L75-L90) restrict skill-patch targets. |
| workspace-trust-visible-mcp | VERIFIED: [mcp list](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/commands/mcp/list.ts#L72-L82) refuses stdio connection tests in an untrusted workspace. |
| workspace-trust-headless-enforcement | CORRECTED for scope: [startup check](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/userStartupWarnings.ts#L84-L102) throws when trust is not true **if folder trust is enabled**. It returns early when the feature is disabled. The headless UI trust propagation fix is stable v0.64.0. |
| shell-tools-allowlist | VERIFIED: [core-tools policy](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/config.ts#L543-L560) installs a deny fallback below explicit allows. This is not a proof that every shell parser case is safe. |
| skill-path-traversal-fix-stable-v0-49 | VERIFIED for the retained [relative/absolute traversal rejection](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/skillUtils.ts#L78-L87). |
| enableAgents / dynamic model config defaults | VERIFIED: [enableAgents defaults true](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settingsSchema.ts#L2225-L2232); [dynamicModelConfiguration defaults false](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settingsSchema.ts#L2340-L2348). These defaults did not flip in the inspected window. |
| "The floor is 0.60.0" / "Preview-only at close" | SUPERSEDED for the new profile: v0.63.0 is the first fixed stable for diff and [malformed MCP enablement](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/mcp/mcpServerEnablement.ts#L222-L237); v0.64.0 additionally carries the taint/OAuth/session changes. The separate MCP-add loss fix still requires preview. |
| consumer retirement / enterprise serving | CORRECTED as section 1. The consumer retirement is directly stated by Google; the end of new enterprise subscriptions is not the same as immediate termination of existing subscriptions. |
| "None of it came with an advisory" | VERIFIED only for the newly shipped fixes: no newly published project GHSA was found. CORRECTED for advisory-database activity: the September 24 duplicate withdrawal was missed. |

The assertion that the nonInteractiveCli/output formatter source did not change
survives the path-scoped log check. That does not establish unchanged model
behavior or unchanged session-log format. Other historical claims, such as the
identity of later PR authors or live remote-agent execution, are not independently
certified by these spot checks.

## Material misses with pinned receipts

### M1. The full v0.63.0 boundary-hardening change

The harvest mentions #29506's final ASK-to-DENY conversion but misses its other
operator-visible restrictions. The pinned
[`2fe7c2d3f065dc40ad573d50b2091116f8a4aa18` diff](https://github.com/google-gemini/gemini-cli/commit/2fe7c2d3f065dc40ad573d50b2091116f8a4aa18)
is dated **2026-09-25** and reaches **v0.63.0 on 2026-10-06**,
`tagged-release`, also present in v0.64.0.

Command-prefix allow rules now require explicit redirection permission even in
autoEdit/YOLO; the allowed-path checker asks before editing `.gemini` config and
recognizes more Windows short-name aliases; `.env.*` files are blocked except
named template variants. File reads re-resolve their target at execution and
check device/inode identity around reads. MCP resource listings/reads and web
search output gain untrusted-context wrappers. These changes reduce ways for
untrusted text or filesystem changes to influence commands/configuration;
they do not prove every race or injection is eliminated. Recheck narrowly
allowlisted commands that redirect output and automation editing local config.

The same commit removes shell tools from the repository's own issue-triage and
deduplication workflows and parses model output outside the agent. That is a
workflow authority reduction, not an npm install default. Its source is pinned
in the same diff; production workflow execution was not verified.

### M2. A2A settings migration and nested controls

[`c88b0a6ee58da76e63bab65d268cedf952abb88c`](https://github.com/google-gemini/gemini-cli/commit/c88b0a6ee58da76e63bab65d268cedf952abb88c),
dated **2026-09-29**, reaches **v0.64.0-preview.0 on 2026-10-06** and
**v0.64.0 stable on 2026-10-13**, `tagged-release`. It is absent from v0.63.0.
The server migrates legacy flat settings to nested settings in memory,
validates them, and consumes nested trust, checkpoint, file-filtering and
logging fields. Inspect A2A deployments' effective `security.folderTrust`,
`general.checkpointing`, `tools`, and `context.fileFiltering` settings after
upgrading. This is a configuration compatibility change the harvest omitted;
do not describe it as an on-disk migration without further evidence.

### M3. Emergency cancellation and rapid-exit history repair

[`5b71659d58eab63f5f249524f157c195be420427`](https://github.com/google-gemini/gemini-cli/commit/5b71659d58eab63f5f249524f157c195be420427),
dated **2026-10-01**, prevents active-operation Ctrl+C from being swallowed by
input clearing or an incomplete mouse escape sequence. It is **stable v0.64.0
on 2026-10-13**, absent from v0.63.0. Channel: `tagged-release`. Operators need
an effective stop action, not merely a cleared input buffer.

A separate late-window fix,
[`204db94ae2a33f70afec7400ebf6b78f1b5e2575`](https://github.com/google-gemini/gemini-cli/commit/204db94ae2a33f70afec7400ebf6b78f1b5e2575),
dated **2026-10-13**, serializes cancellation, records cancelled tool responses,
and waits briefly for pending cancellation before exiting. It is in
**v0.65.0-preview.0**, absent from v0.64.0 and the October 13 nightly.
Channel: `preview-or-beta`. Users who interrupt and resume sessions should test
this preview for history integrity; it is not evidence that stable has that fix.

### M4. File references with line suffixes resolve again

[`7336b08d2925233490a68e495e0c0d3ba58b6706`](https://github.com/google-gemini/gemini-cli/commit/7336b08d2925233490a68e495e0c0d3ba58b6706),
dated **2026-10-01**, reaches **v0.64.0 stable on 2026-10-13**,
`tagged-release`. It strips recognized line/column/range suffixes when resolving
an `@file` reference and checks ignore rules against the base path. It also
prevents a zero-progress ghost-text wrapping loop. This lets operators paste
common diagnostic file references without manually cleaning them first. The
change resolves the file; it does not establish that only the named line range
is sent as context. It is absent from v0.63.0.

### M5. IDE companion shutdown closes open MCP sessions

[`11db29e66045f56ae6ed4ac263a691610fce4c69`](https://github.com/google-gemini/gemini-cli/commit/11db29e66045f56ae6ed4ac263a691610fce4c69),
dated **2026-10-08**, closes transports before the HTTP server and drops
remaining connections, avoiding shutdown waiting on open MCP/SSE sessions.
The source is in **v0.65.0-preview.0 on 2026-10-13**, absent from v0.64.0.
Channel: `preview-or-beta` for the repository source. A VS Code Marketplace
release containing this companion change was not verified; do not tell readers
that upgrading the npm CLI alone upgrades their editor extension.

### M6. September 24 advisory consolidation, with the actual exposure

[GHSA-jj69-4grx-fqj5 was withdrawn at 2026-09-24T20:05:24Z](https://github.com/github/advisory-database/blob/4d9c664d5781d67b4be4238094de5f05fe74a628/advisories/github-reviewed/2026/06/GHSA-jj69-4grx-fqj5/GHSA-jj69-4grx-fqj5.json)
as a duplicate of GHSA-wpqr-6v78-jr5g. The pinned database commit is dated
2026-09-24T20:08:28Z. This was not merely an update to a second active advisory.
Channel: `docs-only` advisory metadata; it announces no new October CLI patch.

[The canonical advisory](https://github.com/advisories/GHSA-wpqr-6v78-jr5g)
describes two ways untrusted input could run commands in older headless
workflows: automatic workspace trust loaded attacker-controlled environment
configuration, and YOLO ignored fine-grained shell allowlists. The
[CVE-2026-12537 NVD record](https://nvd.nist.gov/vuln/detail/CVE-2026-12537)
specifically describes host-level command execution before sandbox isolation
through a malicious `.gemini/.env`. Patched channels are CLI 0.39.1 stable,
0.40.0-preview.3, and run-gemini-cli Action 0.1.22. Do not count the withdrawn
record as a second vulnerability or claim the window's stable versions are
inside those affected ranges. Audit pinned Action and CLI versions separately.

### Additional docs-only omission, without an immutable receipt

The [official subscription sunset schedule](https://docs.cloud.google.com/gemini/docs/codeassist/sunset)
now states the exact license/renewal dates discussed in section 1 and displays
2026-10-13 as its update date. This closes the harvest's "third-party dates
only" lead at the current-document level. It cannot meet a tag/SHA-pinned
historical-receipt requirement. Record this limitation explicitly rather than
manufacturing an archived October 13 snapshot. It is not counted among M1-M6's
pinned misses.

The two missed October 13 releases and the resulting stable/preview promotions
are recorded in Channel truth rather than duplicated as additional feature
misses. OTLP headers, two resume fixes, login-loop fixes, A2A rejection isolation,
and extension-allowlist failure isolation were already mentioned in the
harvest; their corrected close-of-window channel is v0.65.0-preview.0, not
nightly-only.

## Security, defaults, license and rule checks

- Independently queried `google-gemini/gemini-cli/security-advisories`: empty.
  The npm-package advisory query returns the canonical GHSA above; core and
  A2A package queries return none. The Action repository exposes the canonical
  advisory. The withdrawn duplicate is an Actions record, not a second current
  npm advisory. No newly published in-window Gemini CLI GHSA was found.
- Queried NVD directly by CVE and by `gemini cli`. Also found
  [CVE-2026-13745](https://nvd.nist.gov/vuln/detail/CVE-2026-13745), published
  2026-09-10 and modified 2026-09-23: an untrusted `.env` could override
  `GEMINI_CLI_HOME`, load malicious configuration and bypass folder trust,
  allowing arbitrary code execution before 0.39.1. Its publication is outside
  this window; a metadata modification is not a newly released vulnerability
  or fix. The in-window GPT-Load CVE returned by the keyword search concerns a
  different product and was excluded.
- The harvest's advisory paragraph fails the plain-language requirement: it
  lists identifiers without explaining the bugs. M6 provides the needed
  mechanism, affected versions and patched channels.
- Compared the settings schema from v0.60.0 through v0.64.0 and inspected the
  later preview delta. OAuth issuer-support metadata and model-resolution
  settings change; the inspected Auto Memory, dynamic-model-config and
  enableAgents defaults do not flip. Default stability is not evidence that
  runtime model routing or permission behavior stayed unchanged.
- No change to [LICENSE](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/LICENSE)
  was found from v0.60.0 through the pinned October 13 main head; it remains
  Apache-2.0. The package name and Node requirement remain `@google/gemini-cli`
  and `>=20.0.0` in the inspected package manifests. The install-channel changes
  found here are the new releases/dist-tags and the separate Code Assist
  subscription notice. Homebrew and Marketplace publication were not checked.
- All GitHub source-blob receipts in the numbered harvest sections use a tag
  or SHA, not main/HEAD. PR/issue bodies, advisory pages, Google docs and AIR's
  article are mutable. Pair implementation claims with the pinned blobs or
  commits in this report. The Google service notice is a docs-only exception,
  not a version-pinned release receipt.
- Marketing is separated adequately: Google's
  [2026-10-02 recap](https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-september-2026/)
  mentions the model launch but does not prove CLI routing, compatibility,
  availability or performance. Those conclusions must come from the code and
  released channel. AIR's commercial claims do not establish remediation policy.
- No social-post quotations were found in the harvest. Issue reports and PR
  measurements are attributed observations, not independently reproduced user
  outcomes. Do not strengthen them during profile synthesis.

## Remaining verification limits

No Gemini API calls, CLI execution, sandbox launches, model benchmarks, real
MCP authentication, editor Marketplace upgrade, or exploit checkout was run.
No claim that a server actually served a specific model, that a warning occurs
at a measured frequency, or that an exploit works on a particular hosted Git
service is approved by this report. Exact retrospective npm dist-tag assignment
times and immutable historical copies of Google's subscription pages remain
unavailable. These limits do not prevent the source and release corrections
above; they prevent stronger runtime or historical claims.
