---
provider: flue
lane: adversarial verifier, profile refresh
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
window: 2026-09-21..2026-10-13
harvest: runs/2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0/harvest/flue.primary.md
checked_at: 2026-10-13T10:00Z
section_verdicts: {verified: 9, corrected: 3, refuted: 0, unverifiable: 0}
install_today_correct: true
---

# Cross-check -- flue (adversarial verifier)

Verdict counts cover the 12 numbered sections. Default was REFUTED unless I
confirmed a claim myself. Nothing here relies on the researcher's clone or
conclusions.

## Method

- Fresh blobless clone of https://github.com/withastro/flue into my own scratch
  (`clones/flue-verify`). Read-only worktrees at `v2.3.0` (deee93b4) and
  `@flue/runtime@2.2.2` (65832594). Nothing installed, built or executed. The
  researcher's clone was not touched.
- Ancestry by local git (`merge-base --is-ancestor`, `rev-list --count`,
  `git cherry`, `ls-remote`). Release objects, issues, timelines, PRs,
  discussions and advisories via `gh api`.
- npm: `dist-tags`, `time`, full packuments (deprecation scan), per-version
  registry documents (`_npmUser`, `dist.attestations`), the attestations
  endpoint, and the downloads API.
- Tarballs fetched with curl into fresh directories, only listed and grepped:
  `@flue/runtime` 2.1.0, 2.2.2, 2.3.0; `@flue/cli` and `@flue/sdk` 2.2.2, 2.3.0;
  `@flue/opentelemetry` 2.1.0, 2.1.1; `@earendil-works/pi-ai` 0.87.1, 1.0.0,
  1.0.1, 1.0.2, 1.0.3, 1.0.4, 1.1.0, 1.2.0; `@cloudflare/sandbox` 0.11.0, 1.0.0.
- Advisory surfaces: repo security-advisories, global GHSA by package, OSV,
  NVD keyword search.

## Summary

- **Install today is correct.** Newest stable is 2.3.0, npm `latest=2.3.0`,
  `next=2.2.0-next.1`, main == `v2.3.0` (0 ahead), and nothing newer existed
  at 2026-10-13T10:00Z (`ls-remote`: `refs/tags/v2.3.0` and `refs/heads/main`
  both deee93b4; `@flue/runtime` `time.modified` 2026-10-12T18:49:54Z). Three
  channel details need fixing (below).
- **Corrections (3 sections):** section 1 misreads the 2026-10-12 issue sweep
  (14 of the 23 closures were conversions to Discussions); section 3 cites
  the wrong Pi release for the Azure rename (it shipped in Pi's 1.0.3 patch);
  section 7 says the prerelease path was removed, but it lives on, dormant, on
  the `next` branch, and `onOutput` also shipped in 2.1.0-next.x.
- **No refutations.** Every other numbered claim reproduced at the pinned refs.
- **Misses:** the 2.1.1 fix for trace truncation that reset Cloudflare Durable
  Objects (material, because the current profile pins 2.1.0); GitHub's
  "Latest release" still points at `@flue/cli@2.2.2`.

## Channel truth (Install today and Release ledger)

Observed independently:

| Fact | Harvest | Observed | Verdict |
|---|---|---|---|
| npm `latest` / `next` (runtime, cli, sdk, vite, react, opentelemetry, slack, postgres, discord, github) | 2.3.0 / 2.2.0-next.1 | same on all 10 | VERIFIED |
| `@flue/runtime@2.3.0` publish | 2026-10-12T18:49:54Z | 2026-10-12T18:49:54.160Z | VERIFIED |
| core packages window | 18:46:54Z to 18:50:24Z | opentelemetry 18:46:54Z ... vite 18:50:24Z (slack 18:51:18Z is outside "core") | VERIFIED |
| `v2.3.0` | lightweight tag on deee93b4, no Release | `cat-file -t` = commit; `releases/tags/v2.3.0` 404 | VERIFIED |
| main vs v2.3.0 | identical, 0 ahead | `rev-list` 0/0; `ls-remote` main = deee93b4 | VERIFIED |
| deprecations | none in 2.x | 0 deprecated versions in the full packuments of runtime (63 versions), cli (132), sdk (83), vite (34) | VERIFIED |
| GitHub "Latest" release | not stated | `gh api repos/withastro/flue/releases/latest` -> `@flue/cli@2.2.2` (2026-09-28T20:38:48Z) | MISS (see M2) |

Release ledger: VERIFIED row by row. Release objects (`published_at`,
`prerelease`): 2.1.0 2026-09-18T21:08:11Z false; 2.1.1 2026-09-23T19:33:30Z
false; 2.2.0-next.0 2026-09-25T17:41:53Z true; 2.2.0-next.1
2026-09-25T19:16:48Z true; 2.2.0 2026-09-28T17:42:31Z false; 2.2.1
2026-09-28T20:01:41Z false; 2.2.2 2026-09-28T20:37:27Z false. Local
`rev-list` ahead/behind: 2.0.8..2.1.0 8/0, 2.1.0..2.1.1 9/0, 2.1.1..next.0
15/0, 2.1.1..next.1 18/0, 2.1.1..2.2.0 8/0, 2.2.0..2.2.1 2/0, 2.2.1..2.2.2
2/0, 2.2.2..v2.3.0 2/0 (128 files in the diff), 2.1.0..v2.3.0 23/0. npm times
match every row. 28 per-package tags and 28 Release objects per cut from 2.0.7
through 2.2.2 (also 2.1.0-next.0/1 and 2.2.0-next.0/1); 0 `@flue/*@2.3.0`
tags. Frontmatter `window_volume`: 19 main commits after the parent's close
(4 bot "Version Packages"), 5 stables, 2 prereleases, 7 unmerged-branch
commits from 2026-09-22 (4 on `next`, 1 each on `feat/cloudflare-streaming`,
`fix/754-docs-404s`, `florian-lefebvre/Pi-v1`), 5 capability-bearing and 11
defect-bearing sections: all VERIFIED.

Install-today corrections:

1. **GitHub Latest marker.** Add: "GitHub's Latest release is still
   `@flue/cli@2.2.2` (2026-09-28); release watchers on GitHub see 2.2.2 as
   current." Receipt:
   https://github.com/withastro/flue/releases/tag/%40flue%2Fcli%402.2.2
   (observed via `gh api repos/withastro/flue/releases/latest` on 2026-10-13).
2. **`fix/754-docs-404s` is superseded, not "in no release".** Its one change
   (946256ef, drop the dangling smolvm entry from `apps/ecosystem-catalog.ts`)
   shipped by content in deee93b4 (`git log 2.2.2..v2.3.0 --
   apps/ecosystem-catalog.ts` -> deee93b4; same one-line deletion). Mark it
   "superseded by 2.3.0" like `florian-lefebvre/Pi-v1`. #754 and #768 were closed
   with "fixed and will go out with the next release".
3. **Preview line.** `onOutput` streaming also shipped in 2.1.0-next.0 and
   2.1.0-next.1 (see section 7).

## Section verdicts

### 1. Export-style 2.3.0 -- CORRECTED

Reproduced:

- 95a8c862 (2026-10-12T07:21:15Z, footer `Source: c07d4644...`) and deee93b4
  (2026-10-12T18:48:06Z, footer `Source: e2268410...`). `gh api
  repos/withastro/flue/commits/<sha>` -> 422 for both.
- The six earlier on-main export commits (v2.0.0-nightly.202607240825,
  v2.0.0, v2.0.1 twice, v2.0.2, v2.0.3) all point at SHAs that return 422. A
  seventh (4b29e770, v2.0.0-nightly.202607230552) is on the `snapshot` branch
  only. v2.0.4's footer 834fa880 is public and on main.
- 95a8c862: 112 files, 235 insertions, 7,851 deletions. Deleted: 27 test
  files (all 8 named ones among them), all 28 `packages/*/CHANGELOG.md`,
  `.github/workflows/release.yml`, `scripts/build-docs.mjs`,
  `scripts/smoke-test-package-docs.mjs` and `.changeset/{README.md,
  changelog.mjs, config.json}`. CONTRIBUTING loses the 56-line "Publishing"
  section. `.gitignore` now reads "Generated by scripts/prepare-publish.mjs at
  publish time.", a script absent from the tree. It also drops the Changesets
  exception from `pr-redirect.yml`.
- Test files (`*.test.*`, `*.test-d.*`): 147 at v1.0.0-beta.9; 0 at v2.0.0,
  v2.0.3, v2.0.4, v2.0.6; 10 at 2.0.7; 16 at 2.1.0; 29 at 2.2.2; 2 at v2.3.0,
  both in `packages/react`. No `*.spec.*`, `tests/` or `__tests__/` files
  remain anywhere.
- Root CHANGELOG at 2.2.2 starts at 2.0.6. At v2.3.0 it runs from 2.3.0 back
  through 2.0.7, and the 2.3.0 entry (L3-L16) says nothing about the process.
- PR #832 closed unmerged 2026-10-12T07:42:00Z. The maintainer comment at
  07:41:59Z matches the quote. CONTRIBUTING's only window change is the
  Publishing removal (`git log 2.1.0..v2.3.0 -- CONTRIBUTING.md` -> 95a8c862).
- Behavior changes inside 95a8c862: the session.ts finish-hook re-render
  (L1648-L1652) and `document-attachments.ts` export narrowing. Those symbols
  were never re-exported from `index.ts` at 2.2.2, so no public API breaks.
- The sweep: search `closed:2026-10-12` gives 23 issues, closed 06:59:18Z to
  07:53:46Z, all with `state_reason` "completed".

What is wrong: the reading of the sweep. Issue timelines show that 14 of the
23 are `converted_to_discussion` events by the lead maintainer: #560, #640,
#641, #668, #669, #744, #752, #764, #783, #787, #798, #799, #802 and #807.
For example, #764 was locked at 07:05:40Z and converted at 07:05:41Z. GitHub
reports a converted issue as closed with "completed". Every example the
harvest gives of "closed as completed with no matching change" is a
conversion. Each lives on as an open Feature Request discussion that keeps the
original author, body and creation timestamp (to the second): #764 -> #855,
#787 -> #844, #807 -> #840, #798 -> #843, #799 -> #842. #744 also became
discussion #847, besides the re-filed issue #851. Of the other 9 closures,
8 map to shipped changes: #667 (PDFs, 2.2.0); #739, #785, #805, #809 and #818
(2.3.0); and #754 and #768 (smolvm link removed in deee93b4). The ninth, #602,
was closed with "Closing as not reproducible" and still reads "completed".

Exact fix: replace "A sweep on 2026-10-12 between 06:59Z and 07:53Z closed 23
issues, every one as 'completed'. Several have no matching change ..." with:

> On 2026-10-12, between 06:59Z and 07:53Z, the lead maintainer closed 23
> issues: 14 were converted to Discussions (feature requests, including
> conversation data deletion #764 -> discussion #855, submission retry
> #787 -> #844, bounded history in `@flue/react` #807 -> #840, LINE
> #798 -> #843 and WeChat #799 -> #842), 8 were fixed in 2.2.0 or 2.3.0, and
> 1 (#602) was closed as not reproducible. GitHub labels all 23 "completed".

The operator consequence stays: an issue's "completed" state is not evidence
that anything shipped. Add that feature requests now live in Discussions,
where #855 (deletion for retention or erasure) is still open. The same fix
applies to "Leads not promoted -> Issue closures as fix signals".

Supporting evidence the section can add: 2.3.0 package.json files reference
test files that the public tree does not contain. Seventeen packages add
`"test:workerd": "vitest run --config vitest.workerd.config.ts"`, and there is
no `vitest.workerd.config.ts` anywhere in the tree
(https://github.com/withastro/flue/blob/v2.3.0/packages/slack/package.json#L30).
`packages/cli` adds `"node --test test/*.test.mjs"`, and those files are also
absent
(https://github.com/withastro/flue/blob/v2.3.0/packages/cli/package.json#L28).
That fits tests living in the private source tree.

### 2. No npm provenance on 2.3.0 -- VERIFIED

- Registry document for runtime 2.2.2: `_npmUser` "GitHub Actions" with
  `trustedPublisher` (id github), and `dist.attestations` with SLSA v1. For
  2.3.0: `_npmUser` `fredkschott`, no `trustedPublisher`, no
  `dist.attestations`. The attestations endpoint returns 200 for 2.2.2 and 404
  for 2.3.0.
- Decoded SLSA statement for 2.2.2: workflow `.github/workflows/release.yml`,
  ref `refs/heads/main`, `gitCommit` 658325942b0f4eecd888f9698ab0bebb3b749163.
- At 2.3.0 I checked 9 packages (cli, sdk, vite, react, opentelemetry, slack,
  postgres, github, zendesk): all from the personal account, none attested.
- History: 2.0.0 and 2.0.3 `fredkschott`; 2.0.4 and 2.0.6 `matthewp`; none
  attested. Runtime 2.0.7, 2.0.8, 2.1.0, 2.1.1, 2.2.0, 2.2.1 and 2.2.2 were
  all GitHub Actions with trusted publisher and attestations, as were cli and
  vite at 2.2.2.
- Tarballs: runtime, cli and sdk each carry 95 docs files at both 2.2.2 and
  2.3.0. `package.json` has 0 `workspace:` specifiers. The runtime 2.3.0 dist
  has the finish-hook early return, the `agentName` spread in
  `executionContext`, and no `killTimer` (the 2.2.2 dist has 4). That is
  consistent with the public source, not a reproducible build.
- Extra detail: npm shows `@flue/opentelemetry@2.3.0` at 18:46:54Z and
  `@flue/postgres@2.3.0` at 18:47:18Z, both before the v2.3.0 commit's own
  timestamp (18:48:06Z). That fits publishing from the private tree.
- Nuance for the wording "release.yml was deleted": it was deleted on main
  only. A copy that also fires on `next` still lives on the `next` branch
  (section 7).

### 3. Pi 1.x -- CORRECTED

Reproduced:

- `packages/runtime/package.json` at v2.3.0 L87-L88 has `^1.1.0` (2.2.2
  L88-L89 has `^0.87.1`). The registry dependencies agree, and 2.3.0 adds no
  other runtime dependency and no install scripts.
- `providers.ts` v2.3.0 L94 has `azure: 'azure.ai.openai'` (2.2.2 L144 had
  `'azure-openai-responses'`). The provider-api.md table changed to match.
- `session.ts` L2201 (turn) and L2606 (tool) take `durationMs` from Pi.
- npm times: pi-ai 1.0.0 2026-10-01T19:12:18Z, 1.1.0 2026-10-07T22:12:08Z,
  1.2.0 2026-10-12T23:01:40Z; pi-agent-core 1.2.0 22:59:50Z; `latest` 1.2.0.
  That is 4h12m after Flue 2.3.0.
- Pi Releases: v1.0.0 2026-10-01T19:20:55Z, v1.1.0 2026-10-07T22:26:31Z,
  v1.2.0 2026-10-12T23:03:53Z, all non-prerelease.

What is wrong, A: the rename's origin and receipt. Pi renamed the Azure
provider in pi-ai **1.0.3**, a patch release (npm 2026-10-05T08:30:59Z; GitHub
Release v1.0.3 2026-10-05T08:38:23Z, not a prerelease). Its notes list it under
Breaking Changes: "Renamed the Azure provider from `azure-openai-responses` to
`azure`". Tarballs 1.0.0, 1.0.1 and 1.0.2 ship
`dist/providers/azure-openai-responses.js`; 1.0.3, 1.0.4, 1.1.0 and 1.2.0 ship
`azure.js`. The cited Pi v1.1.0 notes never mention Azure (0 matches). Fix:
cite https://github.com/earendil-works/pi/releases/tag/v1.0.3 for the rename.
Say "Pi renamed it in its 1.0.3 patch; Flue users meet it in 2.3.0, the first
Flue release on Pi 1.x". Keep v1.1.0 only as the receipt for the `durationMs`
addition, which its notes do mention.

What is wrong, B: the consequence understates the float risk. Pi has already
shipped a breaking provider-id rename in a patch, so even a patch-only range
would not have protected Azure users. Only a lockfile or overrides fix the
pair. Also, "Pi 1.2.0's listed breaking changes concern its coding agent" is
true of its Breaking list, which covers schemas and themes, extension events,
session busy state and `pi mcp list`. But 1.2.0's Fixed list changes pi-ai
runtime behavior that a fresh Flue 2.3.0 install picks up: a non-strict retry
when Anthropic rejects the strict tool set, "The upstream provider returned an
error" now retried as transient, and the Mistral stream timeout scope. Reword
it so it does not read as "nothing changes for Flue".

Checked and holds: Pi 1.1.0 and 1.2.0 keep `api: "azure-openai-responses"` on
44 Azure catalog models (one is `openai-completions`). Flue's
`NATIVE_DOCUMENT_APIS` therefore still matches Azure after the provider
rename, so there is no PDF regression.

### 4. Local sandbox SIGKILL -- VERIFIED

- `local-env.ts` at v2.3.0: `onAbort` L95-L98 calls `setTimeout(...SIGKILL...).unref()`
  unconditionally. `settle()` runs L100-L107, with the "stays armed" comment at
  L103-L104 and no `clearTimeout`.
- At 2.2.2: `killTimer` set at L98, cleared in `settle()` at L105.
  `KILL_GRACE_MS = 2000` at L20 in both.
- #809: opened 2026-10-02T00:32:24Z (author_association NONE), closed
  2026-10-12T07:53:46Z, reproduced on `npm i @flue/runtime@2.2.2` with
  `exitCode: 124` and a file written afterwards.
- `sandboxes.md` L115 says "no isolation, by design", and L172 names Vercel and
  Mirage. The E2B blueprint version goes 1 -> 2 and returns
  `CommandExitError` as a result. CHANGELOG L13 and L16.
- Precision only: `settle()` spans L100-L107, not L100-L105. The receipt range
  still covers the change.

### 5. Interceptor `agentName` -- VERIFIED

- `client.ts` v2.3.0 L492-L495 adds `agentName`; 2.2.2 L492 has `{ instanceId: config.id }`.
- `session.ts` L4686-L4695 spreads `executionIdentity`, set at L2250 from
  `options.executionContext`.
- `shell.ts` L60-L61 intercepts `type: 'tool', toolName: 'bash'`.
- `events.md` L656 says not calling `next` skips the work. L657 lists the
  session-scope fields without `agentName`. The file is unchanged between
  2.2.2 and v2.3.0.
- #785 (2026-09-27, NONE): "every step took the default branch and the run
  was refused".
- The 2.3.0 dist carries the spread.

### 6. 2.2.x regressions -- VERIFIED (precision note)

- 89032c55 is in 2.2.0 and not in 2.1.1. Flue 2.1.1 used `^0.83.0`; 2.2.0
  moved to `^0.87.1`.
- AI Gateway catalogs in pi-ai: 0.87.1 has 8 dotted version ids and 0 dashed
  version ids (plus 3 unversioned, such as `claude-opus-5`). 1.1.0 has 10
  dashed and 1.2.0 has 11 dashed, with 0 dotted in either.
- 548937e7 is in 2.2.1 and 2cb57be1 in 2.2.2.
- v2.3.0 `setProvider` L31-L33 is a plain pass-through. At 2.2.2 it wrapped
  `cloudflare-ai-gateway` with `withAnthropicGatewayModelIds`. The alias call
  is at L232 and the alias block starts at L247.
- `MAX_AGENT_FINISH_CYCLES = 32` is at L256, the re-render at L1648-L1652, and
  the loop at L1633-L1675. #818 is an outside report, closed 2026-10-12. None
  of the 2.2.x versions is deprecated.
- Precision: Flue's own 2.2.2 entry (CHANGELOG L22) and the `providers.ts`
  comments say Pi renamed the gateway ids in pi-ai **0.84.3**. Flue users first
  met the rename because 2.2.0 jumped from `^0.83.0` to `^0.87.1`. Suggested
  wording: "The Pi 0.87.1 bump brought in Pi's 0.84.3 rename to dotted ids."
- Optional addition: #818's reporter gives a 2.2.2 workaround (read the value
  through the setter updater). It matters to operators held to 2.2.2 by
  provenance policy (section 2). Label it an issue claim.

### 7. `next` orphaned -- CORRECTED

Reproduced:

- `next=2.2.0-next.1` on every package checked.
- The 2.2.0-next.0 and next.1 tags are not ancestors of main or v2.3.0;
  `branch --contains` shows only origin/next.
- `git cherry v2.3.0 origin/next` lists 4827d6ee and 4dfd6254, plus CI and
  version commits.
- `onOutput` counts in sandbox.ts / sandbox-api.md: 9 / 8 at 2.2.0-next.0 and
  0 / 0 at 2.2.0, 2.2.2 and v2.3.0. The types.ts hits at 2.2.0 and later are
  the substring inside `AgentInvocationOutput`.
- next.0 published 2026-09-25T17:43:09Z, three days before 2.2.0
  (2026-09-28T17:46:51Z).

What is wrong, A: "The changesets prerelease configuration went with 95a8c862"
and the date line "(prerelease path removed)". The prerelease config never
lived on main. `.changeset/pre.json` (`{"mode": "pre", "tag": "next"}`) exists
only on the `next` branch, added by 68414567 "ci: configure next prereleases".
That branch also has a `release.yml` that runs on pushes to `[main, next]`.
95a8c862 changed main only. Branch `next` (head 4420fcd5, last commit
2026-09-25) still has both files, and 2.2.0-next.1 was published by that
workflow (GitHub Actions, trusted publisher, attested). The path is dormant,
not removed.

Fix: change the date line to "2026-09-25 (prerelease) to 2026-10-12 (main's
release tooling removed; the `next` branch's prerelease tooling untouched)".
Change the sentence to "Changesets left main, but the `next` branch keeps its
own prerelease config and workflow, and nothing has been pushed to it since
2026-09-25". Settling signal: a push to `next`, a new `-next.N` version, or
removal of the branch or dist-tag.

Receipts:
https://github.com/withastro/flue/blob/4420fcd540ac63f040b8b1d206c00054faa0df63/.changeset/pre.json
https://github.com/withastro/flue/blob/4420fcd540ac63f040b8b1d206c00054faa0df63/.github/workflows/release.yml#L3-L5
https://github.com/withastro/flue/commit/68414567bb03c2b5ae0ee785d791aeeee81f0d63

What is wrong, B: "the only published home of sandbox output streaming" is
not 2.2.0-next.1 alone. 4827d6ee is an ancestor of `@flue/runtime@2.1.0-next.0`
and `2.1.0-next.1` (npm 2026-09-18), and both carry 9 / 8 `onOutput` hits. Fix:
"exists only on the `next` prerelease line (2.1.0-next.0 through
2.2.0-next.1) and the unmerged `feat/cloudflare-streaming` branch". Receipt:
https://registry.npmjs.org/@flue%2Fruntime/2.1.0-next.0

### 8. Cloudflare Sandbox SDK 1.0 -- VERIFIED

- The blueprint at v2.3.0 has `npm install @cloudflare/sandbox@^0.11.0` at L80
  and `export { Sandbox } from '@cloudflare/sandbox';` at L91, blueprint version
  1. `cf-sandbox.ts` L1-L11 and L48-L53 wrap `getSandbox()` stubs.
- npm `latest` is 1.0.0 (2026-09-30T01:44:26Z). Its `dist/index.d.mts` exports
  DirectoryBackup, Files, S3Mount, S3Gateway, DirectoryBackupGateway and error
  types, with 0 `getSandbox` and no `Sandbox` class. The package description
  is "Structured workspace file operations for Cloudflare sandboxes".
- 0.11.0's `index.d.ts` exports both `Sandbox` and `getSandbox`. #829 is open
  (2026-10-07, NONE).
- The Cloudflare post (fetched, marketing) says "we're carrying this model into
  Sandbox SDK 1" and that the new features are "available only through
  ctx.container". The paraphrase is faithful and labeled as marketing.
- Nuance: 0.11.0 is the only 0.11.x on npm, so `^0.11.0` means exactly 0.11.0.
  A 0.12.x line (up to 0.12.10, 2026-09-23) sits outside the range.

### 9. Trace content default -- VERIFIED

- opentelemetry README L46 reads "Content capture is disabled by default" at
  v2.0.0, v2.0.3 and 2.1.0 (767e9a84), and "Content is enabled by default" at
  2.1.1 and v2.3.0. The published READMEs agree: 2.1.0 disabled, 2.1.1 enabled.
- d9e2ac00 is in 2.1.1 and not in 2.1.0.
- `content.ts` L151: `if (policy === false || content === undefined) return {};`.
- opentelemetry `index.ts` L63-L71 says "absent means content on", and the same
  text sits at v2.0.0 L65-L66, so the code was always on and the README was
  wrong. `cloudflare/tracing` L33-L41 says the same.
- CHANGELOG L50 records that the vendor keys are no longer emitted.

### 10. `allowed-tools` -- VERIFIED

- c5a2a725 is in 2.1.1 and not in 2.1.0. `types.ts` at 2.1.0 L192 read
  "Space-separated pre-approved tools". At 2.1.1 it reads "does not enforce
  it", and at v2.3.0 that text is at L214-L219.
- 0 "pre-approved" hits under `packages/` and `apps/docs`. `skills.md`
  L58-L60.
- Every reference is parsing, validation or the type: `skill-frontmatter.ts`
  L11, L15, L76, L142 and `skill-definition.ts` L25, L82, L112, L144,
  L203-L204.

### 11. Approval gates -- VERIFIED

- cc7b9ca4 is in 2.2.0 and not in 2.1.1. In `tools.md` the section starts at
  L228 and the next heading is at L435.
- L230: "Flue has no built-in approval API". L234: `pending_approval` with
  `terminate: true`. L339: "the first decision wins ... rejected with a
  `409`". L367: `approval:${approvalId}`. L427: at-least-once. L430: requests
  don't expire. L433: annotations "require approval, never ... skip it".
- The bundled `tools.md` has the heading in the runtime 2.2.2 and 2.3.0
  tarballs and lacks it in 2.1.0.

### 12. 2.2.0 history, PDFs, timestamps -- VERIFIED

- 54cabb7a, 2663e507 and 3b1adfde are in 2.2.0 and not in 2.1.1.
- sdk `client.ts` L102 and L187-L204.
- `reply.ts` L51-L54 makes `settlements` required at v2.3.0; it was
  `settlements?` at 2.1.1 L49.
- `document-attachments.ts` L42-L46. CHANGELOG L30-L42. Azure stays native
  under Pi 1.x (section 3).

## Prior claims re-checked (spot-checked at v2.3.0)

All bullets hold as written, with one receipt to fix:

- **recursion-and-abort-fixes-2-0-7:** holds, but the receipt points at the
  wrong code. `harness.ts` L139-L159 only wires the lineage field. The guard
  that throws "cannot be invoked recursively" is
  https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/harness-tool-lineage.ts#L13-L23.
  The session.ts L2698, L2826 and L2883 interrupted-batch lines check out.
- **tool-timeout-and-mcp-annotations-2-1-0:** holds. `tool.ts` L33 and L343;
  `abort.ts` L54-L59; `mcp.ts` L270-L276. Annotations are only validated
  (tool.ts L73-L76, L116-L136), and `mcp.ts` L340 reads `annotations.title`
  for display. Nothing gates on them.
- Verified as cited:
  - agent-behavior.md L160-L178 (2000 lines / 50 KB, 100 grep matches,
    20,000 reserve, 8,000 verbatim, depth 4)
  - tools.md L224 (Anthropic except Haiku)
  - index.ts L106-L115 (`sandboxFromDriver`, `SandboxDriver`, deprecated
    aliases) and L116 `defineSkill`
  - vite package.json L40 `"agents": "^0.20.1"` (`agents` latest 0.28.0,
    2026-10-09)
  - sandboxes.md L7-L27 vs v1.0.0-beta.9 L9-L13. v2.0.0 has no
    "virtual sandbox by default" wording, so retiring the claim is right
  - README L1-L20 and L7, L10-L11
  - agent-routes.ts L57 (202)
  - handle-agent.ts L95-L98 (`?wait` rejected)
  - CLI commands blueprints, docs, init and run (add and update live in
    blueprints.ts L14-L30)
  - migration.md L42
  - durability.md L7-L13
  - streaming-protocol.md L29
  - workflows.md L7
  - skill-definition.ts L95-L96 and skill-frontmatter.ts L82-L84
  - 28 packages, all at 2.3.0
  - 0 `defineAgent` or `defineWorkflow` under packages/
  - providers.ts L139-L150 (dynamic models cost $0)
- `cacheRetention` defaults to `'none'` (workers-ai-provider.ts L1425).

## Carry-forward answers -- VERIFIED

1. Trace content is still on by default (section 9).
2. The `allowed-tools` doc fix is in 2.1.1, and the type comment changed
   there.
3. No advisory exists. Repo security-advisories return 0, and global GHSA
   returns 0 for runtime, cli, vite, sdk, react and opentelemetry. OSV has 0
   for runtime, cli and vite, and NVD returns 0 for "withastro flue",
   "flueframework" and "@flue/runtime". Strengthening fact: no `SECURITY.md`
   has ever existed in the repo (`git log --all -- SECURITY.md
   .github/SECURITY.md` returns 0 commits).
4. `next` led 2.2.0 by three days.

"What is unresolved" item 3 also holds: 0 `demo/` commits from 2.1.0 to
v2.3.0, and `feat/invoke-console` and `wip/dev-console-followups` were last
touched 2026-06-22.

## Operator questions -- traction VERIFIED

- Weekly `@flue/runtime` downloads (Monday weeks): 216,846 (2026-09-07),
  382,519 (09-21), 379,927 (09-28), 384,454 (10-05).
- Stars 8,455; forks 508. Identity, license (Apache-2.0) and `pushed_at`
  2026-10-12T18:48:59Z match.

## Leads not promoted -- spot-checked

- The writing-lane scan holds: of 161 items, the only "flue" substring is
  "influence".
- Pi v1.0.0 notes have no "Durable".
- Clef and Clef-flash are in the Workers AI catalog of pi-ai 1.1.0 and 1.2.0,
  and Clef-omni is not. Clef-omni does appear in 1.2.0's OpenRouter catalog,
  which is not the Workers AI path.
- Open issues #858, #810, #822, #813, #820, #828 and #781 are all open as
  stated.
- The issue-closure lead needs the section 1 fix.

## Misses

**M1 (material). 2.1.1 fixed quadratic trace truncation that reset Cloudflare
Durable Objects.**

- What changed: CHANGELOG at v2.3.0 L51 says large traced conversations no
  longer re-serialize the remaining history, "avoiding request latency and
  Cloudflare Durable Object CPU-limit resets" (#743).
- Ancestry: 756db7668b57dfa97076bbad92d5c26b2d81dc0d is an ancestor of
  `@flue/runtime@2.1.1` and not of 2.1.0.
- What it allowed: the outside report #742 measured 27-30 s of CPU per model
  request before the provider fetch, with "Durable Object exceeded its CPU
  time limit and was reset". The harvest has no section and no mention.
- Why it matters: the current profile tells readers to pin 2.1.0 and says
  tracing ships content by default. A reader on that pin who traces long
  conversations on Cloudflare is exposed. Upgrading to 2.3.0 fixes it.
- Receipts: https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L51,
  https://github.com/withastro/flue/commit/756db7668b57dfa97076bbad92d5c26b2d81dc0d
- Channel: `tagged-release` (2.1.1, 2026-09-23). Half: defect.

**M2 (channel fact). GitHub "Latest release" still points at `@flue/cli@2.2.2`.**

- Observed: `gh api repos/withastro/flue/releases/latest` returns
  `@flue/cli@2.2.2` (2026-09-28T20:38:48Z) on 2026-10-13.
- Why it matters: the Releases page and GitHub release watchers present 2.2.2
  as current and give no notice of 2.3.0. The harvest notes that 2.3.0 has no
  Release object, but not that GitHub still advertises 2.2.2.
- Receipt: https://github.com/withastro/flue/releases/tag/%40flue%2Fcli%402.2.2
- Channel: `tagged-release` (GitHub Releases surface).
- Coordinator note: `sources/flue.yml` still says Flue "publishes no GitHub
  Releases", which is stale. From 2.0.7 through 2.2.2 every cut produced 28
  Release objects.

Low-materiality items the harvest did not record. The 2.3.0 pin covers all of
them, and none needs a section:

- #741 (2.1.1, 7841ff89): Hono ranges now `^4.12.32`, so fresh projects stop
  failing typecheck. CHANGELOG L52.
- #756 (2.1.1, 4685436f): the parent harvest's after-window lead. It reached
  2.1.1 (CHANGELOG L48), and the harvest does not confirm it.
- #777 (2.2.0, 43d15d1a): Cloudflare-routed Anthropic models with tools failed
  on Pi 0.85 and later. It shipped in the same release as the Pi bump, but
  2.2.0-next.0 carried `^0.87.1` without it, and next.1 added it. CHANGELOG
  L41.

## Rule checks

- **CVE and GHSA:** none exist for any `@flue/*` package (see carry-forward
  answer 3), so the harvest has nothing to explain. The `agents` SDK that
  `@flue/vite` pins has 3 GHSAs from 2026-02 (GHSA-cvhv-6xm6-c3v4,
  GHSA-r7x9-8ph7-w8cg, GHSA-w5cr-2qhr-jqc5), all fixed by 0.3.10, so they do
  not affect `^0.20.1`.
- **Marketing vs substance:** flueframework.com and the Cloudflare blog posts
  are labeled marketing or leads. Section 8 rests on the npm tarball typings,
  not on the post.
- **Social:** the harvest has no x.com or twitter.com links and quotes no
  social post. Its quotations come from the CHANGELOG, CONTRIBUTING, docs and
  a maintainer's PR comment.
- **House style:** the harvest is ASCII-only (0 non-ASCII lines). Receipts are
  pinned to tags or SHAs, apart from the labeled marketing URLs and the
  `compare/v2.3.0...main` receipt for the main-ahead fact. Sample receipts
  resolve (GitHub 200; npmjs.com pages return 403 to curl, and the registry
  JSON alternates work).

## Not reached

- Whether npm's trusted-publisher binding would still accept a publish from
  the `next` branch's workflow. Only the npm package settings can show that.
- A behavioral run of Flue 2.3.0 with Pi 1.2.0. Nothing was executed.
- The content of `feat/cloudflare-coordinator-on-state-machine` beyond its
  titles.
