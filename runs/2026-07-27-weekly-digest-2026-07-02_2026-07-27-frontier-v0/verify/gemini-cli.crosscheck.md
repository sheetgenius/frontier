# Cross-check -- gemini-cli

Window: 2026-07-02 to 2026-07-27. 26 social claims adjudicated against
`harvest/gemini-cli.primary.md`. Verdicts: 3 confirmed, 11 partial, 2 refuted,
4 unconfirmed, 6 social_fact.

The conversation got the *direction* of the consumer transition right and the
*subject* of it wrong. Every post that says Google ended consumer access to
Gemini CLI on 2026-06-18 is corroborated by Google's own site banner; every post
that concludes from this that Gemini CLI is dead, killed, deprecated, or legacy
is refuted by the repository, which merged 35 pull requests, cut three stable
tags, shipped near-daily nightlies, and reports `archived: false` inside the same
25 days. The window's single largest security release, `v0.51.0` with five
boundary fixes at once, landed while X was writing the obituary. On the technical
side the conversation was better than its reputation: one community account named
a nightly by its git-describe hash (`v0.52.0-nightly.20260718.gacae7124b`) that
resolves exactly to PR 28429's merge commit `acae7124bdd849e554eaa5e090199a0cf08cd782`,
and correctly described two of the three changes it carried -- a practitioner
reading `main`, not a changelog. What the conversation missed entirely is the
channel question. It treated a nightly-only ADC cleartext fix as shipped in "the
newest release," and it produced not one post about PR 28470, the zero-click
a2a-server RCE fix that was the most severe item in the window and reached
preview only.

## The conversation knew first

**Consumer-tier access ended 2026-06-18, and X said so 13 days before the product
did.**

- Claim: `gemini-cli-june18-deprecation-course-2026-07-09` (@codewith_ahsan),
  posted 2026-07-09T08:11:29Z, naming the exact date 2026-06-18 and Antigravity
  CLI as the replacement path.
- First in-product receipt: PR 28304, shipped in `v0.52.0` stable, published
  2026-07-22T20:51:21Z. It adds a runtime notice when the account has no consumer
  Code Assist tier, steering the user to set `GOOGLE_CLOUD_PROJECT`.
- Interval: **13 days.**
- Receipts: https://github.com/google-gemini/gemini-cli/pull/28304 ;
  https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0

The looser version of the same claim runs 20 days:
`gemini-cli-killed-for-antigravity-chatter-2026-07-02` (@melvindvivas,
2026-07-02T21:14:51Z) asserted the transition three weeks before the CLI
acknowledged it at runtime. That post is graded `refuted` on its product-status
half, so the 13-day figure is the rigorous one -- it is the earliest post that
states the bounded thing a primary later confirms.

**And on the documentation surface the conversation is still ahead at window
close.** `docs/get-started/authentication.mdx`, pinned at the `v0.52.0` tag
commit `d14583b926769bd98f807cdc6b1ca50e91ae26ec`, still lists "free tier
accounts ... such as Gemini Code Assist for individuals" as eligible and still
instructs Google AI Pro and Ultra subscribers to sign in with their subscription
account. A search of that file at the tag for `antigravity`, `june 18`,
`discontinu`, `replaced`, `unpaid`, `google one`, and `deprecat` returns no
match. Counting from 2026-07-02, X has been more accurate than the shipped
versioned docs for 25 days and counting.

Nothing else in the set qualifies. The technically strong posts
(`gemini-cli-nightly-runtime-governance-2026-07-18`,
`gemini-cli-v0-52-0-autofix-avoidance-2026-07-23`,
`gemini-cli-https-session-hardening-chatter-2026-07-26`) all trail their merge
commits by one to two days. They are fast, not early.

## Divergences

1. **Nightly reported as released.**
   `gemini-cli-https-session-hardening-chatter-2026-07-26` says a "newest Gemini
   CLI release forces HTTPS for credential safety." The mechanism is real -- PR
   28517, "fix(core): enforce HTTPS for GoogleCredentialsAuthProvider to prevent
   cleartext leakage", merged 2026-07-24T18:00:56Z at
   `e2a5375d10d59f2378db6fb8b973eeaef4cf26eb`. The channel is not. Ancestry:
   `diverged` against `v0.52.0` stable AND `diverged` against
   `v0.53.0-preview.0`; `ahead` only against
   `v0.54.0-nightly.20260727.g3818efbbf`. Neither the `latest` nor the `preview`
   npm dist-tag carries it at window close. An operator who reads that post and
   runs `npm i -g @google/gemini-cli` gets nothing.
   Receipt: https://github.com/google-gemini/gemini-cli/pull/28517

2. **Preview-only governance work read as shipped behavior.**
   `gemini-cli-nightly-runtime-governance-2026-07-18` correctly labels its
   subject a nightly, but the cluster it describes -- macOS Seatbelt
   `permissive-*` profiles rewritten to `(deny default)` (PR 28424) and the
   `maxSessionTurns` default moved from unlimited to 15 with alternating-pattern
   loop detection (PR 28429) -- was still absent from stable nine days later at
   window close. Both resolve `diverged` against `v0.52.0` and `ahead` against
   `v0.53.0-preview.0`. Downstream readers repeating "Gemini CLI added X" without
   the nightly qualifier are wrong for every stable operator.

3. **"Legacy," "killed," "deprecated," "discontinued" versus a live repository.**
   Four claims (`-killed-for-antigravity-chatter-2026-07-02`,
   `-june18-deprecation-course-2026-07-09`,
   `-synara-replaces-legacy-provider-2026-07-17`, and the "discontinued Gemini
   CLI" aside inside the antigravity-side ACP post) assert product death. The
   repository API returns `archived: false`, `disabled: false`, license
   `Apache-2.0`, `pushed_at` 2026-07-27T01:32:29Z. 35 merged PRs and 35 commits
   on `main` in the window; stable tags `v0.50.0` (07-08), `v0.51.0` (07-16),
   `v0.52.0` (07-22). What ended is consumer Google-account auth for unpaid and
   Google One tiers. What did not end is the tool.
   Receipt: https://api.github.com/repos/google-gemini/gemini-cli

4. **Repo tooling reported as CLI runtime governance.** The same 07-18 post
   folds "an LLM triage orchestrator" (PR 28345) into a list of runtime-security
   changes. PR 28345 builds `tools/caretaker-agent/`, a Cloud Run service for
   automated GitHub issue triage. It is repo tooling and is not shipped in the
   CLI package. Eight of the 35 in-window merges build that service, including
   PR 28411 (post a comment before auto-closing an issue) and PR 28352 (sanitize
   and wrap issue titles in `untrusted_context`). Real, and not a control that
   binds anything on an operator's machine.

5. **Inverse divergence -- what the conversation did not see.** The window's most
   severe gemini-cli item produced zero social claims: PR 28470,
   "fix(a2a-server): enforce workspace trust and task isolation to prevent RCE",
   merged 2026-07-21T16:54:15Z, closing a path where an attacker could place
   `GEMINI_CLI_TRUST_WORKSPACE=true` in a malicious `.gemini/.env` so an untrusted
   workspace self-validated its own trust before the trust check ran. It is
   `diverged` against `v0.52.0` and reached `v0.53.0-preview.0` only. Meanwhile
   the security conversation in this window was entirely third-party sandbox-escape
   coverage (five claims) plus one unverifiable CVE identifier. The crowd tracks
   press cycles; it does not track ancestry.

6. **A CVE the repository has no record of.**
   `gemini-cli-cve-2026-12537-cicd-rce-2026-07-23` asserts a critical
   unauthenticated RCE in Gemini CLI CI/CD workflows. The repository's
   `security-advisories` endpoint returned an **empty list** on 2026-07-27, and
   no CVE was assigned to any in-window change. That does not disprove an
   NVD-side identifier assigned earlier in the year, so the claim stays
   `unconfirmed` -- but no gemini-cli primary surface acknowledges it, and
   severity language in the window comes from PR titles and bodies only.

## Claim-by-claim

| claim_id | verdict | primary receipt | note |
| --- | --- | --- | --- |
| `gemini-cli-antigravity-transition-post-2026-07-26` | partial | geminicli.com banner (harvest 10) | Transition is real for "Unpaid tier and Google One users" only. Narrow to consumer auth; the repo is not transitioning. Blog URL is outside the source contract. |
| `gemini-cli-ex-google-worker-context-2026-07-26` | social_fact | none | Biographical. Employment claims stay notes per charter. |
| `gemini-cli-june18-deprecation-course-2026-07-09` | partial | geminicli.com banner; PR 28304 in `v0.52.0` | Date 2026-06-18 and successor confirmed for the consumer tier. "Deprecated" as product status is refuted by 35 merges and three stable tags in-window. |
| `gemini-cli-killed-for-antigravity-chatter-2026-07-02` | **refuted** | https://api.github.com/repos/google-gemini/gemini-cli ; releases `v0.50.0`/`v0.51.0`/`v0.52.0` | `archived: false`, `pushed_at` 2026-07-27. Not killed. Consumer auth ended for two tiers. |
| `gemini-cli-sunset-usage-narrowing-2026-07-26` | social_fact | none | Post-transition residual-use anecdote. Publishable as conversation. |
| `gemini-cli-to-antigravity-switch-regret-2026-07-25` | social_fact | none | Migration-friction sentiment. The premise (3.6 updates land on Antigravity, not Gemini CLI) is corroborated by the antigravity `1.1.5` model-slug surface. |
| `gemini-cli-forced-antigravity-launch-friction-2026-07-26` | partial | PR 28304 in `v0.52.0` | The consumer login path was removed; the CLI is not blocked. The runtime notice steers to `GOOGLE_CLOUD_PROJECT` (Vertex / Google Cloud), which remains a working path. |
| `gemini-cli-enterprise-packaging-complaint-2026-07-07` | **refuted** | https://api.github.com/repos/google-gemini/gemini-cli | oEmbed text attributes the change to Microsoft. Gemini CLI is `google-gemini/gemini-cli`, Apache-2.0, Google-maintained. Vendor attribution is wrong. The Workspace Enterprise packaging half is unconfirmed. |
| `gemini-cli-synara-replaces-legacy-provider-2026-07-17` | partial | https://api.github.com/repos/google-gemini/gemini-cli | A third party's provider change is a fact about that third party. The "legacy" characterization of gemini-cli is refuted by in-window repo activity. |
| `gemini-cli-bleepingcomputer-sandbox-escape-2026-07-20` | unconfirmed | none | No gemini-cli advisory exists; `security-advisories` empty at 2026-07-27. Neither confirmed nor refuted from primary surfaces. |
| `gemini-cli-sandbox-escape-mechanism-chatter-2026-07-21` | partial | PR 28221 in `v0.51.0` | The mechanism class is independently corroborated: making `~/.gitconfig` read-only in the macOS sandbox is precisely a fix for a file the agent can write that a trusted host component later executes outside the sandbox. The named escapes are not receipted. |
| `gemini-cli-host-trust-boundary-summary-2026-07-26` | partial | PR 28221 in `v0.51.0` ; PR 28424 (preview) | Same corroboration of the class. Note gemini-cli patched an instance of it on 2026-07-06 (merged) / 2026-07-16 (stable), before the research circulated. |
| `gemini-cli-seven-sandbox-escapes-roundup-2026-07-25` | unconfirmed | none | Count-specific. Not verifiable from gemini-cli primaries. |
| `gemini-cli-cve-2026-12537-cicd-rce-2026-07-23` | unconfirmed | none | Repo `security-advisories` returned an empty list on 2026-07-27; no in-window CVE assigned. Does not disprove an earlier NVD identifier. |
| `gemini-cli-v0-52-0-nightly-streaming-2026-07-21` | partial | harvest nightly cadence (`v0.51.0-nightly` .. `v0.54.0-nightly`) | Version line is consistent with the near-daily nightly train. "Snappier streaming" has no primary. |
| `gemini-cli-nightly-runtime-governance-2026-07-18` | partial | PR 28424 (`69e0c2659e`, merged 2026-07-17T18:20:39Z); PR 28429 (`acae7124bdd`, merged 2026-07-17T21:20:14Z); PR 28345 | Two of three exact, including the git-describe hash in the tag. The "LLM triage orchestrator" is `tools/caretaker-agent/` repo tooling, not CLI runtime governance. Both CLI items are preview-only at window close. |
| `gemini-cli-nightly-consecutive-role-400-fix-2026-07-16` | partial | harvest 9 (merger list) | `luisfelipe-alt` is confirmed as one of the eight accounts merging in-window. The specific 400 / role-coalescing fix is not itemized in the primary. |
| `gemini-cli-v0-52-0-autofix-avoidance-2026-07-23` | **confirmed** | PR 28223 in `v0.52.0` (2026-07-22) | `write_file` / `replace` no longer route JSON and IPYNB through LLM correction. Exactly the claim. |
| `gemini-cli-https-session-hardening-chatter-2026-07-26` | partial | PR 28517 (`e2a5375d10`, merged 2026-07-24) ; PR 28429 | HTTPS enforcement for `GoogleCredentialsAuthProvider` confirmed. "Newest release" is refuted: nightly-only, absent from both `latest` and `preview` dist-tags. |
| `gemini-cli-successor-agy-modes-2026-07-08` | **confirmed** | antigravity `1.1.0` release body, published 2026-07-08T03:25:54Z | `request-review` default plus `default` -> `accept-edits` -> `plan` cycling. Post trails the release by six minutes. |
| `gemini-cli-antigravity-official-1-1-0-2026-07-09` | **confirmed** | antigravity `1.1.0` release body | Official account trailed its own release by about 22.5 hours and trailed the maintainer's post by about 22.4 hours. |
| `gemini-cli-successor-3-6-flash-quota-2026-07-21` | partial | antigravity `1.1.5` changelog (2026-07-21) | "Stable, user-facing model slugs" accepted by `--model` confirms the invocation form. Model availability, weekly quota reset, the 17 percent figure, and pricing have no primary. |
| `gemini-cli-terminal-bench-failure-modes-paper-2026-07-14` | unconfirmed | none | Outside gemini-cli primary surfaces. Needs the paper. |
| `gemini-cli-wmux-multiagent-pane-2026-07-26` | social_fact | none | Adoption color: third parties still package Gemini CLI into multi-agent terminals, which cuts against the succession framing. Integration depth unverified. |
| `gemini-cli-free-tier-quota-10min-2026-07-26` | social_fact | harvest 10 (docs at `d14583b926`) | The user is not mistaken, they were misled: the docs shipped with `v0.52.0` still describe consumer free-tier eligibility. This is the reader-facing face of the stale-docs finding. |
| `gemini-cli-low-mindshare-comparison-jab-2026-07-10` | social_fact | none | Rhetoric, not an adoption metric. Color only. |
