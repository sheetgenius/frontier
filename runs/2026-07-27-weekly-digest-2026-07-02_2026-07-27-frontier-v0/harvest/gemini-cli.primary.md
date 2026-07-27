# Harvest -- gemini-cli (primary sources)

Window: 2026-07-02 to 2026-07-27. Source contract: `sources/gemini-cli.yml`.

Channel is resolved by git ancestry against the dereferenced tag commit, not by
version number or date. Every ancestry claim below was resolved with the GitHub
compare API against the merge commit of the originating pull request. Release
dates are the GitHub API `published_at` ISO timestamp, not rendered HTML.

Channel state at window close (2026-07-27), from the npm registry `dist-tags`
for `@google/gemini-cli`:

- `latest` = `0.52.0` (published 2026-07-22T20:50:35Z)
- `preview` = `0.53.0-preview.0`
- `nightly` = `0.54.0-nightly.20260727.g3818efbbf`
- receipt: https://registry.npmjs.org/@google/gemini-cli

Tags released in window (GitHub API `published_at`):

| tag | published_at | prerelease | tip commit |
| --- | --- | --- | --- |
| `v0.50.0` | 2026-07-08T18:31:54Z | false | `8d9733d531c70284d77b09e1ff5e61dde2d61ebc` |
| `v0.51.0-preview.0` | 2026-07-08T17:45:50Z | true | `d1e1b00b889b8afbccd8578b3e644a3712b337b5` |
| `v0.51.0` | 2026-07-16T17:15:26Z | false | `8d951de3855750d5f8219d65ae22524b606133b6` |
| `v0.52.0-preview.0` | 2026-07-16T17:04:45Z | true | `5de3b24af30d6991df787e1f477611d69f9d1f76` |
| `v0.52.0` | 2026-07-22T20:51:21Z | false | `d14583b926769bd98f807cdc6b1ca50e91ae26ec` |
| `v0.53.0-preview.0` | 2026-07-22T20:10:07Z | true | `02abfab45f539e14996abf146685885a284e71c1` |

Nightlies also shipped near-daily across the window (v0.51.0-nightly through
v0.54.0-nightly). They are not itemized except where they are the only channel
carrying a fix.

---

## 1. CARRY-FORWARD RESOLVED: the memory-import symlink escape reached preview on 2026-07-08 and stable on 2026-07-16

The open question from the 2026-07-02 digest is answered. The fix for the
symbolic-link directory escape in the memory import processor
(PR 28233, merge commit `ff00dacd9f33d9842cfc3b5d6c53a1b2cbc44636`, merged to
`main` 2026-07-01T19:39:15Z) is an ancestor of both the preview and the stable
tag. Resolved by ancestry, not by version number:

- `v0.50.0` -- status `diverged` (fix ABSENT from the 2026-07-08 stable)
- `v0.51.0-preview.0` -- status `ahead` (fix PRESENT, 2026-07-08)
- `v0.51.0` -- status `ahead` (fix PRESENT, 2026-07-16)
- `v0.52.0` -- status `ahead` (fix PRESENT, 2026-07-22)

Elapsed from merge to stable: 15 days.

- channel: `tagged-release` (stable, `v0.51.0`, 2026-07-16)
- receipt: https://github.com/google-gemini/gemini-cli/pull/28233
- receipt: https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0
- receipt: https://github.com/google-gemini/gemini-cli/commit/ff00dacd9f33d9842cfc3b5d6c53a1b2cbc44636
- receipt: https://github.com/google-gemini/gemini-cli/compare/ff00dacd9f33d9842cfc3b5d6c53a1b2cbc44636...v0.51.0

Operator consequence: stable operators can stop avoiding untrusted `GEMINI.md`
memory imports once they are on `v0.51.0` or later, but anyone still pinned to
`v0.49.0` or `v0.50.0` remains exposed.

---

## 2. The stable released on 2026-07-08 (`v0.50.0`) carried none of the security batch that the preview cut the same day did carry

`v0.50.0` and `v0.51.0-preview.0` were published within 46 minutes of each other
on 2026-07-08. The preview contained the whole pending security batch; the
stable contained none of it. `v0.50.0`'s release notes list four changes, three
of them CI and release-plumbing fixes plus one tool-registry discovery feature.
Against every security merge below, `v0.50.0` resolves as `diverged` -- the
release branch was cut before those commits landed on `main`.

- channel: `tagged-release` (stable, `v0.50.0`, 2026-07-08)
- receipt: https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0
- receipt: https://github.com/google-gemini/gemini-cli/compare/v0.49.0...v0.50.0
- receipt: https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-preview.0

Operator consequence: taking the newest stable tag on the day it appears is not
the same as taking the newest fixes -- on 2026-07-08 the stable was, on security
content, behind the preview published 46 minutes earlier.

---

## 3. `v0.51.0` stable (2026-07-16) is the security release of the window -- five boundary fixes at once

All five were merged to `main` before the release branch cut and all five
resolve as `ahead` against `v0.51.0` and `diverged` against `v0.50.0`.

| fix | PR | merge commit | merged (ISO) | merge-to-stable |
| --- | --- | --- | --- | --- |
| case-insensitive sensitive-path blocklist + VS Code HITL | 27966 | `ae0a3aa7b928cc73bb09604bb9c2c020e6b647db` | 2026-06-26T19:50:04Z | 20 days |
| defensive path resolution for at-reference (`@file`) files | 28053 | `b5fc06ee338a3f8ac1ff847ac53b001eeae4940d` | 2026-06-30T20:02:43Z | 16 days |
| symlink directory escape in memory import processor | 28233 | `ff00dacd9f33d9842cfc3b5d6c53a1b2cbc44636` | 2026-07-01T19:39:15Z | 15 days |
| `~/.gitconfig` made read-only in the macOS sandbox | 28221 | `892b35fcfb6ab8e192e51c603583279c99e8b0a4` | 2026-07-06T16:53:45Z | 10 days |
| strip thoughts from scrubbed history turns (thought leakage) | 27971 | `27a3da3e88edddb00a03dfb4de24aee14432dc34` | 2026-07-07T18:29:25Z | 9 days |

PR 28053 is the `@file` path hardening that the 2026-07-01 digest recorded as
main-only at commit `b5fc06e`. It is now stable. Both prior-window carry-forwards
are therefore closed by this tag.

- channel: `tagged-release` (stable, `v0.51.0`, 2026-07-16)
- receipt: https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0
- receipt: https://github.com/google-gemini/gemini-cli/compare/v0.50.0...v0.51.0
- receipt: https://github.com/google-gemini/gemini-cli/pull/27966
- receipt: https://github.com/google-gemini/gemini-cli/pull/28053
- receipt: https://github.com/google-gemini/gemini-cli/pull/28221
- receipt: https://github.com/google-gemini/gemini-cli/pull/27971

Operator consequence: `v0.51.0` is the upgrade floor for anyone running Gemini
CLI against repositories they do not control.

---

## 4. `v0.52.0` stable (2026-07-22) is a reliability and tier-messaging release, not a security one

Fifteen merges. The operator-relevant items: plan-mode write policy simplified to
support relative paths (PR 28398), a clear message when the account has no
consumer Code Assist tier (PR 28304), enriched shared-project quota-limit errors
(PR 28391), a2a-server task cancellation now aborts the execution loop
(PR 28316), `write_file`/`replace` no longer route JSON and IPYNB through LLM
correction (PR 28223), and `google-auth-library` bumped to 10.9.0 (PR 28385).

- channel: `tagged-release` (stable, `v0.52.0`, 2026-07-22)
- receipt: https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0
- receipt: https://github.com/google-gemini/gemini-cli/compare/v0.51.0...v0.52.0
- receipt: https://github.com/google-gemini/gemini-cli/pull/28398
- receipt: https://github.com/google-gemini/gemini-cli/pull/28304

Operator consequence: a routine upgrade -- but if you drive plan mode with
relative paths, PR 28398 changes the write policy your automation was written
against.

---

## 5. UNRESOLVED: a zero-click a2a-server RCE fix is in preview only and did NOT reach stable in this window

PR 28470, "fix(a2a-server): enforce workspace trust and task isolation to prevent
RCE", merged to `main` 2026-07-21T16:54:15Z at
`c776c665b00a39d55c470beb788a2b9a77a2feb7`. The PR body states it "reworks the
a2a-server backend to prevent zero-click Remote Code Execution (RCE) and
environment poisoning in untrusted workspaces." The specific escalation it closes:
an attacker could place `GEMINI_CLI_TRUST_WORKSPACE=true` inside a malicious
`.gemini/.env` file, causing an untrusted workspace to self-validate its own trust
before the trust check ran. The fix defers `loadEnvironment()` until after
workspace trust is evaluated and ignores workspace-level `.env` and
`.gemini/.env` entirely when the workspace is untrusted. It also adds per-task
environment isolation via `AsyncLocalStorage` and a `process.env` Proxy to
prevent cross-task credential leakage.

Ancestry:

- `v0.52.0` (stable) -- `diverged` (ABSENT)
- `v0.53.0-preview.0` -- `ahead` (PRESENT)
- `v0.54.0-nightly.20260727.g3818efbbf` -- `ahead` (PRESENT)

- channel: `preview-or-beta` (`v0.53.0-preview.0`, 2026-07-22)
- receipt: https://github.com/google-gemini/gemini-cli/pull/28470
- receipt: https://github.com/google-gemini/gemini-cli/commit/c776c665b00a39d55c470beb788a2b9a77a2feb7
- receipt: https://github.com/google-gemini/gemini-cli/compare/c776c665b00a39d55c470beb788a2b9a77a2feb7...v0.52.0
- receipt: https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0-preview.0

Operator consequence: if you run the a2a-server backend against workspaces you do
not control, the stable channel did not carry this fix at window close -- treat
any untrusted-workspace a2a deployment on `v0.52.0` or earlier as exposed.

---

## 6. UNRESOLVED: `maxSessionTurns` default changes from unlimited to 15 -- a breaking behavior change sitting in preview

PR 28429, "fix(core): mitigate infinite ReAct loops and prompt injection loops",
merged to `main` 2026-07-17T21:20:14Z at
`acae7124bdd849e554eaa5e090199a0cf08cd782`. The PR body describes the threat as
an "infinite ReAct loop/Quota Drain Denial of Service vulnerability caused by
malicious workspace files containing indirect prompt injections." Two changes:
the default for `maxSessionTurns` in `settingsSchema.ts`, `config.ts`, and
`settings.schema.json` moves from `-1` (unlimited) to `15` turns per single user
request, and `LoopDetectionService.checkToolCallLoop` gains alternating-pattern
detection that halts an A-B-A-B cycle at the fifth alternation.

Ancestry: `diverged` against `v0.52.0`; `ahead` against `v0.53.0-preview.0` and
the 2026-07-27 nightly.

- channel: `preview-or-beta` (`v0.53.0-preview.0`, 2026-07-22)
- receipt: https://github.com/google-gemini/gemini-cli/pull/28429
- receipt: https://github.com/google-gemini/gemini-cli/commit/acae7124bdd849e554eaa5e090199a0cf08cd782
- receipt: https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0-preview.0

Operator consequence: this is a prompt-injection mitigation that will silently
truncate long legitimate agent runs when it reaches stable -- set
`maxSessionTurns` explicitly now rather than inherit the changed default.

---

## 7. UNRESOLVED: macOS permissive Seatbelt profiles moved to deny-default -- preview only

PR 28424 rewrites the `permissive-open` and `permissive-proxied` macOS Seatbelt
profiles to begin with `(deny default)` plus an explicit allow-list, matching the
existing `restrictive-*` and `strict-*` profiles. Merged to `main`
2026-07-17T18:20:39Z at `69e0c2659e55a868235ed9189b7b4a79f335a0a5`. The PR states
the default profile selector in `sandbox.ts` is unchanged (`permissive-open`), so
the change alters what the default profile permits without changing which profile
is selected. It adds `sandbox-macos-profiles.test.ts` to pin the deny-default
posture against regression, and updates `docs/cli/sandbox.md` and
`docs/reference/configuration.md`.

Ancestry: `diverged` against `v0.52.0`; `ahead` against `v0.53.0-preview.0`.

- channel: `preview-or-beta` (`v0.53.0-preview.0`, 2026-07-22)
- receipt: https://github.com/google-gemini/gemini-cli/pull/28424
- receipt: https://github.com/google-gemini/gemini-cli/commit/69e0c2659e55a868235ed9189b7b4a79f335a0a5

Operator consequence: macOS operators on the default sandbox profile should
expect previously-allowed operations to be denied when this reaches stable --
test before upgrading, because the profile name you configured did not change but
its meaning did.

---

## 8. UNRESOLVED: ADC credential cleartext-leak fix exists only in the nightly channel

PR 28517, "fix(core): enforce HTTPS for GoogleCredentialsAuthProvider to prevent
cleartext leakage", merged to `main` 2026-07-24T18:00:56Z at
`e2a5375d10d59f2378db6fb8b973eeaef4cf26eb`. It adds a protocol check during
`GoogleCredentialsAuthProvider` initialization so Application Default Credentials
access and identity tokens -- including "broad-scope `cloud-platform` tokens" per
the PR body -- cannot be transmitted over plain HTTP.

Ancestry:

- `v0.52.0` (stable) -- `diverged` (ABSENT)
- `v0.53.0-preview.0` -- `diverged` (ABSENT)
- `v0.54.0-nightly.20260727.g3818efbbf` -- `ahead` (PRESENT)

This is the narrowest channel of any change in the window: neither the `latest`
nor the `preview` npm dist-tag carries it.

- channel: `preview-or-beta` (nightly only -- not in the `preview` dist-tag)
- receipt: https://github.com/google-gemini/gemini-cli/pull/28517
- receipt: https://github.com/google-gemini/gemini-cli/commit/e2a5375d10d59f2378db6fb8b973eeaef4cf26eb
- receipt: https://github.com/google-gemini/gemini-cli/compare/e2a5375d10d59f2378db6fb8b973eeaef4cf26eb...v0.53.0-preview.0

Operator consequence: if you point Gemini CLI at a non-HTTPS endpoint with ADC in
scope, no released channel protects you at window close -- enforce HTTPS at the
network layer rather than waiting for the binary.

---

## 9. Google is still maintaining the OSS repo -- and is building an LLM triage service into it

Answering the standing question from the 2026-06-24_2026-07-01 digest ("whether
Google keeps the open-source gemini-cli repo maintained now that its consumer
service is gone"). Evidence from the window:

- The repository is not archived: `archived: false`, `disabled: false`, license
  `Apache-2.0`, `pushed_at` 2026-07-27T01:32:29Z.
- 35 pull requests merged between 2026-07-02 and 2026-07-27, and 35 commits on
  `main` in the same range.
- Three stable tags, three preview tags, and near-daily nightlies shipped.
- Eight of the 35 merges build `tools/caretaker-agent/` -- a Cloud Run service
  for automated issue triage. In-window caretaker merges include the egress
  Cloud Run skeleton (PR 28167), the Octokit GitHub Action handler (PR 28303),
  triage worker foundational modules (PR 28163), the main worker execution loop
  and egress action publisher (PR 28306), the LLM triage orchestrator and
  container build (PR 28345), posting a comment before auto-closing issues
  (PR 28411), and sanitizing and wrapping issue titles in `untrusted_context`
  (PR 28352, merged 2026-07-23T18:08:48Z) -- a prompt-injection defense for the
  triage bot's own input.

Velocity comparison via the GitHub search API, merged-PR counts:

- 2026-05-19 to 2026-06-13 (pre-shutdown): 80
- 2026-06-18 to 2026-07-01 (post-shutdown): 21
- 2026-07-02 to 2026-07-27 (this window): 35

All 35 in-window merges came from eight accounts: `chadd28`, `amelidev`,
`luisfelipe-alt`, `ompatel-aiml`, `DavidAPierce`, `ved015`, `jerrylin3321`, and
the `gemini-cli-robot` release bot. No merge in the window came from an account
outside that set.

- channel: `tagged-release` and `main-unreleased` (mixed; the caretaker service
  is repo tooling, not shipped in the CLI package)
- receipt: https://api.github.com/repos/google-gemini/gemini-cli
- receipt: https://github.com/google-gemini/gemini-cli/pull/28345
- receipt: https://github.com/google-gemini/gemini-cli/pull/28411
- receipt: https://github.com/google-gemini/gemini-cli/blob/d14583b926769bd98f807cdc6b1ca50e91ae26ec/docs/issue-and-pr-automation.md

Operator consequence: the OSS repo is alive and shipping security work on a
regular cadence, but its maintenance is narrowing to a small in-house group plus
an LLM bot that can auto-close issues -- file bugs expecting machine triage
first.

---

## 10. The shipped documentation still describes consumer authentication as available; the discontinuation notice lives only in a stale website banner

`docs/get-started/authentication.mdx`, pinned at the `v0.52.0` tag commit
`d14583b926769bd98f807cdc6b1ca50e91ae26ec`, describes eligible accounts as
including "free tier accounts ... such as Gemini Code Assist for individuals, as
well as paid subscriptions for Google AI Pro and Ultra," and instructs "If you
are a **Google AI Pro** or **Google AI Ultra** subscriber, use the Google account
associated with your subscription." A search of that file at the tag for
`antigravity`, `june 18`, `discontinu`, `replaced`, `unpaid`, `google one`, and
`deprecat` returns no match. The versioned docs shipped with `v0.52.0` contain no
notice that consumer service ended.

The rendered site at `geminicli.com` does carry a banner, but in the future
tense more than a month after the event: "Gemini CLI will be replaced by
Antigravity CLI on June 18th" for "Unpaid tier and Google One users." That text
is not present in the repository docs at the tag, so it is site-injected rather
than versioned.

Separately, PR 28304 (in `v0.52.0` stable) handles the consequence at runtime
instead: `/privacy` on an account with no consumer Code Assist tier now shows a
notice steering the user to set `GOOGLE_CLOUD_PROJECT` for the Vertex AI /
Google Cloud path.

- channel: `tagged-release` (docs as shipped at `v0.52.0`, 2026-07-22)
- receipt: https://github.com/google-gemini/gemini-cli/blob/d14583b926769bd98f807cdc6b1ca50e91ae26ec/docs/get-started/authentication.mdx
- receipt: https://geminicli.com/docs/get-started/authentication/
- receipt: https://github.com/google-gemini/gemini-cli/pull/28304

Operator consequence: do not use the shipped Gemini CLI docs to determine whether
your tier still has access -- they describe a consumer path that ended on
2026-06-18, and the product only tells you at runtime.

---

## 11. Minor: the npm package carries a stray dist-tag named `false`

The `@google/gemini-cli` registry document lists a dist-tag literally named
`false` pointing at `0.42.0-nightly.20260512.g11a9edc80`, alongside the
legitimate `latest`, `preview`, and `nightly` tags. Installing
`@google/gemini-cli@false` therefore resolves to a May 2026 nightly.

- channel: `tagged-release` (package registry state at 2026-07-27)
- receipt: https://registry.npmjs.org/@google/gemini-cli

Operator consequence: pin an explicit version in lockfiles; a release-automation
artifact is publishing a resolvable tag that no operator intends to install.

---

## Open items carried out of this window

- `v0.53.0-preview.0` carries the a2a-server RCE fix, the Seatbelt deny-default
  rewrite, and the `maxSessionTurns` breaking default. None had reached stable at
  window close on 2026-07-27.
- PR 28517 (ADC cleartext) had reached neither stable nor preview -- nightly only.
- No GitHub security advisory was published on the repository for any of the
  above; `repos/google-gemini/gemini-cli/security-advisories` returned an empty
  list on 2026-07-27. Severity language comes from PR titles and bodies only, and
  no CVE was assigned in-window.
