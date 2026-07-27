# Cross-check -- openhands

Window: 2026-07-02 to 2026-07-27. 24 social claims adjudicated against
`harvest/openhands.primary.md`. Verdicts: 0 confirmed, 2 partial, 0 refuted,
14 unconfirmed, 8 social_fact.

**Not one OpenHands social claim in this window was confirmed in full by a
primary source, and not one was refutable either.** That is the finding. The
conversation talked about benchmark scores, funding, energy consumption,
formal-verification demos, O'Reilly rankings, roadmap tickets, and product
surfaces that live in other repositories -- categories the `OpenHands/OpenHands`
primary record cannot touch in either direction. Meanwhile the two facts that
determine what a self-hoster can actually install produced **zero posts**: the
open-source tag line broke a 26-day freeze on 2026-07-06, shipped six tags in
four days, and then refroze on 2026-07-09 with nothing since, while the cloud
line tagged six more times; and the official install page still tells
self-hosters to pull `openhands:1.8`, which carries all 21 advisories that
`1.9.0` closed. Nobody complained. Nobody noticed. The one release-tracker
account that reported a real fix attached it to a version number that does not
exist on the open-source line. The strongest thing this lane produces for
OpenHands is a negative result: on release-channel asymmetry, which is the
single most operator-consequential property of this project right now, the
conversation layer is not merely late -- it is blind.

## The conversation knew first

**None.** No qualifying case.

Every dated social claim that a primary source supports trails that primary:

- `openhands-2026-07-25-community-v1-37-1-webhook-db-pool-fix` (2026-07-25)
  trails PR #15379 / commit `652503005`, merged 2026-07-24, by one day.
- `openhands-2026-07-24-staff-canvas-1-6-1-sdk-1-37-memory-desktop`
  (2026-07-24T19:50:02Z) trails the SDK bump to `v1.37.1` (PR #15378, commit
  `5f43190d2`, 2026-07-24T19:13:43Z) by 37 minutes.

One near-miss, recorded but not counted: `openhands-2026-07-19-community-no-cross-task-memory-pain`
(@Vectorizeio, 2026-07-19) names the absence of cross-task memory, and five days
later `openhands-2026-07-24-staff-canvas-1-6-1-sdk-1-37-memory-desktop` claims
opt-in persistent memory via `MEMORY.md` in SDK 1.37. The harvested primary
confirms only that `main` bumped the SDK to `v1.37.1` on 2026-07-24; the memory
feature itself lives in `OpenHands/software-agent-sdk` and was not harvested. A
version bump is not a receipt for a feature, so this does not count. It is a
clean lead: pull the SDK 1.37 release notes and, if `MEMORY.md` is there, this
becomes a five-day case.

The charter asked directly whether self-hosters complained publicly about the
OSS freeze. They did not. Searched across all 24 claims: no mention of the tag
freeze, no mention of PR #15217 ("chore(main): release 1.12.0", draft since
2026-07-09T20:08:08Z, `mergeable_state=clean`, 18 days open at window close), no
mention of `openhands:1.8` in the install docs, no mention of CVE-2026-53571
being cloud-only. The three adoption-friction posts in the set
(`-past-config-unusable-pain`, `-benchmark-gain-api-only-claim`,
`-switch-from-opencode-web-pain`) are about setup difficulty, API-key economics,
and a competitor's web UI. None is about what version you get.

## Divergences

1. **A fix reported as released that no open-source tag carries.**
   `openhands-2026-07-25-community-v1-37-1-webhook-db-pool-fix` says "OpenHands
   v1.37.1 fixes a webhook callback issue that starved the database pool under
   load." The mechanism is exactly right: PR #15379, commit `652503005`,
   "prevent webhook callbacks from starving the database pool", merged
   2026-07-24. The version is wrong twice over. The complete OSS tag list for
   `OpenHands/OpenHands` is `1.11.0`, `1.10.0`, `1.9.3`, `1.9.2`, `1.9.1`,
   `1.9.0`, `1.8.0`, `1.7.0` -- there is no `1.37.1`, and `v1.37.1` is the
   `software-agent-SDK` version bumped the same day by PR #15378. The fix itself
   is `main-unreleased` on the open-source line: `main` is 50 commits ahead of
   `1.11.0`, and `1.11.0` was cut 2026-07-09. An operator who acts on that post
   by upgrading gets nothing, because there is nothing to upgrade to.
   Receipts: https://github.com/OpenHands/OpenHands/pull/15379 ;
   https://github.com/OpenHands/OpenHands/pull/15378

2. **The structural rule the conversation never applies.** Because the OSS line
   has no tag after `1.11.0` (2026-07-09T19:37:16Z), **every** "OpenHands just
   shipped X" claim dated after 2026-07-09 is, on the open-source line, false by
   construction unless X is on the cloud line. That silently reclassifies five
   claims in this set: `-canvas-helm-export-operability` (07-16),
   `-enterprise-control-plane-sandbox-incident-thread` (07-22),
   `-canvas-1-6-1-sdk-1-37-memory-desktop` (07-24), `-v1-37-1-webhook-db-pool-fix`
   (07-25), and `-automation-event-type-filter` (07-26). Not one of them carries
   a channel qualifier.

3. **A self-hosting announcement and a cloud gate, 24 hours apart.**
   `openhands-2026-07-16-staff-canvas-helm-export-operability` (2026-07-16)
   promotes an official Helm chart for self-hosted Agent Canvas deployment with
   StatefulSet, storage, ingress, and RBAC. The next day, PR #15286 (merged
   2026-07-17T17:28:20Z, commit `11d4ecf21f`) adds a `/canvas` proxy that
   requires existing SaaS authentication before serving Agent Canvas, gated on
   `AGENT_CANVAS_INTERNAL_URL`. That change is `main-unreleased` on the OSS line
   and shipped in `cloud-1.47.x`. The social story points at self-hosting; the
   repository points at cloud-gating, in the same 24 hours.
   Receipt: https://github.com/OpenHands/OpenHands/pull/15286

4. **A security-posture thread published the day after a HIGH fix went cloud-only.**
   `openhands-2026-07-22-enterprise-control-plane-sandbox-incident-thread`
   (2026-07-22) analyzes an agent-isolation incident, warns that many enterprises
   run agents with weaker isolation, and positions OpenHands Enterprise and an
   agent control plane as making safeguards easier to deploy. The thread is a
   `social_fact` -- it is a receipt that the argument was made. What the primary
   record says about the same date: CVE-2026-53571 (GHSA-fx2h-pf6j-xcff, CVSS 7.5,
   unauthenticated arbitrary file read via a `server.fs.deny` bypass on Windows)
   was fixed on `main` on 2026-07-16 (PR #14982, commit `d6d34956d3`), reached
   `cloud-1.47.0` on 2026-07-21 -- one day before the thread -- and reached **no
   open-source tag**. Manifest proof at the tag SHAs: OSS `1.11.0` pins
   `vite: 7.3.2`, inside the advisory's vulnerable range of `>= 7.0.0, <= 7.3.4`;
   `cloud-1.47.1` and `main` pin `7.3.5`, the first patched 7.x. On the day the
   vendor argued for stronger agent isolation, its documented self-host install
   target was `openhands:1.8` and its newest security fix was available only to
   cloud customers.
   Receipts: https://github.com/OpenHands/OpenHands/pull/14982 ;
   https://github.com/advisories/GHSA-fx2h-pf6j-xcff

5. **Inverse divergence -- the docs defect nobody mentioned.** `OpenHands/docs`,
   file `openhands/usage/run-openhands/local-setup.mdx` at docs `main` HEAD
   `b0dafd13ed8c5fffb8a944c801ad89db5db070af` (2026-07-25), line 136 still reads
   `docker.openhands.dev/openhands/openhands:1.8` and line 225 still calls it
   "the most recent stable release of OpenHands." The file's last version bump
   was `6087832ee`, 2026-06-10, for `1.8.0`; the entire `1.9.x` through `1.11.0`
   burst was skipped. The documented happy path is the unpatched path, and it
   generated no conversation at all.
   Receipt: https://docs.openhands.dev/openhands/usage/local-setup

## Claim-by-claim

| claim_id | verdict | primary receipt | note |
| --- | --- | --- | --- |
| `openhands-2026-07-08-quint-formal-verification-pairing` | social_fact | none | Vendor described a workflow and blogged it. Publishable as "OpenHands published a Quint pairing writeup," not as evidence of a shipped capability. |
| `openhands-2026-07-09-muse-spark-full-support-claim` | unconfirmed | none | Model-integration claim with no release note, docs page, or tag behind it. Note the timing: posted 2026-07-09T15:49:43Z, about four hours before `1.11.0`, the last OSS tag of the window. If support landed after that tag, no self-hoster has it. |
| `openhands-2026-07-10-grayswan-agent-attack-surface-event` | social_fact | none | Event promotion. Intent signal around security discourse, not a control change. |
| `openhands-2026-07-22-oreilly-production-grade-stack-naming` | social_fact | none | Third-party ranking relayed by the official account. Receipt that the relay happened. Needs the O'Reilly primary before any reputation claim. |
| `openhands-2026-07-22-enterprise-control-plane-sandbox-incident-thread` | social_fact | none (see Divergence 4) | Stated intent, fully receipted as a statement. The self-host availability it implies is contradicted by the tag list and the install docs on the same date. |
| `openhands-2026-07-26-extensions-epic-ticket-orchestration-tracker` | social_fact | none | Backlog intent. A tracking ticket is not a shipped feature. |
| `openhands-2026-07-07-staff-azure-devops-enterprise-claim` | unconfirmed | none | Azure DevOps is not named in the `1.9.0` release body, which is where the enterprise backlog drained. Not the official account. Needs docs and eligibility check. |
| `openhands-2026-07-04-staff-openhands-index-cost-traces` | unconfirmed | none | Evaluation surface outside the harvested repo. Methodology unchecked. |
| `openhands-2026-07-04-staff-automation-server-autodocs` | unconfirmed | none | Personal example repo, not official packaging. Automation-server trigger claims need a primary. |
| `openhands-2026-07-10-staff-agent-canvas-plugins-profiles-branching` | unconfirmed | none | Agent Canvas lives in `OpenHands/agent-canvas`, outside the harvested primary. Version labels unverified. |
| `openhands-2026-07-16-staff-canvas-helm-export-operability` | unconfirmed | none (see Divergence 3) | Helm chart and Canvas versions not in the harvested primary. Contrast with PR #15286 the next day, which places Canvas behind SaaS auth and reaches only the cloud line. |
| `openhands-2026-07-24-staff-canvas-1-6-1-sdk-1-37-memory-desktop` | partial | https://github.com/OpenHands/OpenHands/pull/15378 (commit `5f43190d2`, 2026-07-24T19:13:43Z) | The SDK bump to `v1.37.1` on `main` is confirmed and dated. Canvas 1.6.1, `MEMORY.md` persistent memory, progressive MCP servers, desktop installers, and the Helm/EKS docs are not. Channel: `main-unreleased` on the OSS line -- a self-hoster on `1.11.0` has none of it. |
| `openhands-2026-07-24-staff-swenergy-least-energy-harness` | unconfirmed | none | Third-party energy study. Method, hardware, and comparator set unchecked. |
| `openhands-2026-07-17-community-token-efficiency-vs-codex` | unconfirmed | none | Single-run token-count anecdote. Not a primary surface. |
| `openhands-2026-07-19-community-no-cross-task-memory-pain` | social_fact | none | User pain, also promotional for a third-party MCP. See the near-miss under "The conversation knew first." |
| `openhands-2026-07-19-community-harness-beats-native-claim` | unconfirmed | none | Opinionated comparison with no attached method. Ecosystem tension only. |
| `openhands-2026-07-18-community-benchmark-gain-api-only-claim` | unconfirmed | none | Benchmark delta and subscription-compatibility both unchecked. |
| `openhands-2026-07-15-community-neubig-internal-benchmark-summary` | unconfirmed | none | Second-hand summary of maintainer evaluation discourse; no direct primary post retrieved in-window. Do not promote the model ranking. |
| `openhands-2026-07-08-community-swebench-72-series-a-promo` | unconfirmed | none | High-circulation promo. Scores, comparators, star count, and funding figure all need primaries and may be stale. |
| `openhands-2026-07-25-community-v1-37-1-webhook-db-pool-fix` | partial | https://github.com/OpenHands/OpenHands/pull/15379 (commit `652503005`, 2026-07-24) | Mechanism confirmed exactly. Version label refuted: no OpenHands OSS tag `1.37.1` exists, the newest OSS tag is `1.11.0` (2026-07-09), and the fix is `main-unreleased` on that line. Sharpest divergence in the set. |
| `openhands-2026-07-26-community-automation-event-type-filter` | unconfirmed | none | Not itemized in the primary. Whatever it is, it landed after 2026-07-09 and is therefore `main-unreleased` on the OSS line or cloud-only. |
| `openhands-2026-07-25-community-officeqa-trajectory-study-mention` | unconfirmed | none | Evaluation discourse. Locate the primary study before any comparative claim. |
| `openhands-2026-07-24-community-past-config-unusable-pain` | social_fact | none | Historical setup-friction anecdote, not a current defect report. |
| `openhands-2026-07-25-community-switch-from-opencode-web-pain` | social_fact | none | Single-user migration anecdote and ecosystem-tension lead. |
