---
schema_version: bitter.frontier_harvest.v0
provider: paperclip
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/paperclip.yml
channels_present: [tagged-release, preview-or-beta]
window_volume: 6 stable tags (3 feature, 3 patch), 10 material changes, 5 security-relevant, 0 GHSA published in window
lane: primary sources, researcher; paperclipai/paperclip releases, compare API, matching-refs, npm time, pinned raw reads
---

# Harvest -- paperclip (primary sources)

Punctuation is ASCII. Repo paperclipai/paperclip (identity confirmed: `gh api repos/paperclipai/paperclip` -> full_name paperclipai/paperclip, default_branch master, description "The open-source app everyone uses to manage agents at work"; matches contract `primary_surfaces.repo`). Namespaced canary/nightly/beta tags live under `refs/tags/<lane>/`; the flat tags listing does not show them. Release notes below are read from the GitHub release bodies; items marked "code" were read at the pinned tag.

## Release ledger

| Tag | SHA | Published (GitHub) | npm publish | Prerelease | vs previous stable |
|---|---|---|---|---|---|
| v2026.817.0 (baseline) | 213dabab | 2026-08-18T03:17:29Z | 2026-08-18T03:16:34Z | false | -- |
| v2026.824.0 | 664052f8 | 2026-08-25T04:23:27Z | 2026-08-25T04:22:06Z | false | vs 817.0: diverged ahead_by=173 behind_by=4 |
| v2026.824.1 | 8e6edcdf | 2026-08-25T21:04:15Z | 2026-08-25T21:02:55Z | false | vs 824.0: ahead ahead_by=4 behind_by=0 |
| v2026.831.0 | dbf05257 | 2026-09-02T01:05:52Z | 2026-09-02T00:43:44Z | false | vs 824.1: diverged ahead_by=234 behind_by=4 |
| v2026.831.1 | 65ec059b | 2026-09-02T04:56:26Z | 2026-09-02T04:55:23Z | false | vs 831.0: ahead ahead_by=1 behind_by=0 |
| v2026.916.0 | dffc2b3c | 2026-09-16T18:15:11Z | 2026-09-16T18:06:46Z | false | vs 831.1: diverged ahead_by=503 behind_by=1 |
| v2026.916.1 | d554c478 | 2026-09-21T21:22:44Z | 2026-09-21T21:15:04Z | false | vs 916.0: ahead ahead_by=1 behind_by=0 |

Beta tags in window (npm time): 2026.825.0-beta.1 (08-25), 2026.828.0-beta.0 (08-28, SHA dbf05257 = v2026.831.0), 2026.910.0-beta.0 (09-10), 2026.915.0-beta.0 (09-15), 2026.916.0-beta.0 (09-16, SHA dffc2b3c = v2026.916.0), 2026.921.0-beta.0 (09-21T20:08Z), 2026.921.0-beta.1 (09-21T23:20Z, SHA 8f8a0ab7). The baseline beta `beta/v2026.818.0-beta.1` SHA 664052f8 is the exact commit tagged v2026.824.0: the beta was promoted unchanged. Each feature stable is a byte-identical promotion of a beta tag.

Canary tags per version-day (from `git/matching-refs/tags/canary/`, day read from the version string, 821 through 921): 821:10 822:5 823:5 824:8 825:16 826:7 827:10 828:13 829:6 830:20 831:15 901:15 902:9 903:9 904:15 905:11 906:6 907:6 908:9 909:5 910:7 911:14 912:13 913:4 914:3 915:10 916:4 917:6 918:9 919:8 920:3 921:11. Total 292. Canary ran every day of the window.

Nightly tags per version-day: 822:1 825:4 828:1 829:1 830:1 901:1 902:1 910:1 911:1 912:1 915:3 916:2 917:1 918:1 919:1 920:1 921:2. Total 24. No nightly tag for 821, 823-824, 826-827, 831, or 903-909 (a seven-day nightly gap while canary kept publishing).

npm dist-tags at observation (2026-09-23): latest=2026.916.1, beta=2026.921.0-beta.1, nightly=2026.922.0-nightly.0 (OUT), canary=2026.923.0-canary.4 (OUT). master is ahead of v2026.916.1 by 117 (compare v2026.916.1...master diverged ahead_by=117 behind_by=1; the one behind is the 916.1 patch commit on the release branch).

## 1. Carry-forward: the review-policy lock and CWE-78 CLI guidance reached stable in v2026.824.0

- **Date:** 2026-08-25 (GitHub publish; release body says "Released: 2026-08-24")
- **Channel:** `tagged-release`
- **Ancestry evidence:** compare 57edb26db...v2026.824.0 status=ahead ahead_by=52 behind_by=0 (review-policy #11405 contained). compare fdb9a4880...v2026.824.0 status=ahead ahead_by=50 behind_by=0 (CWE-78 #11400 contained). Both also contained in v2026.916.1 (ahead_by=790 and 788, behind_by=0). v2026.824.0 SHA 664052f8 equals the baseline's `beta/v2026.818.0-beta.1`, so the exact beta the parent told operators to pin became stable.
- **Receipt:** https://github.com/paperclipai/paperclip/releases/tag/v2026.824.0
- **Half:** defect (closed) | security-relevant | **Confidence:** high

**What changed.** The release body lists "Review governance": verdicts are serialized and transactional, a verdict can no longer bypass a policy by downgrading, the requester is persisted atomically (#11405, #10938). "Security hardening" lists CLI guidance routed through the safe `npx` form (#11400), plus a cross-tenant ID oracle on tool-access routes, routine webhook HMAC replay, and "the heartbeat-fallback comment can never publish a raw transcript" (#11343 among the listed PRs). The release calls itself the first stable to walk canary, nightly, beta, stable end to end.

**Operator consequence.** Operators pinned to `@beta` for these fixes can return to `@latest`. Anyone still on v2026.817.0 lacks the review-policy lock; upgrade. The four-lane train is now demonstrated, not only documented: a beta SHA becoming stable unchanged is the evidence.

## 2. Carry-forward: ACPX thought-text containment (c2cfd55e, #11801) first reached stable in v2026.831.0, not v2026.824.x

- **Date:** 2026-09-02
- **Channel:** `tagged-release`
- **Ancestry evidence:** compare c2cfd55e...v2026.824.0 status=behind ahead_by=0 behind_by=70 (not contained). compare c2cfd55e...v2026.824.1 status=diverged ahead_by=4 behind_by=70 (not contained; 824.1 is a 4-commit patch branch off 824.0). compare c2cfd55e...v2026.831.0 status=ahead ahead_by=164 behind_by=0 (contained). compare c2cfd55e...v2026.916.1 ahead_by=668 behind_by=0.
- **Receipt:** https://github.com/paperclipai/paperclip/releases/tag/v2026.831.0
- **Half:** defect (closed) | security-relevant | **Confidence:** high

**What changed.** v2026.831.0 lists under Breaking Changes: ACPX run summaries are limited to the final output segment, "and the legacy full-summary setting is deliberately ignored so configuration cannot bypass the containment" (#11801). v2026.824.0's separate heartbeat-fallback raw-transcript fix is a different path and did not include #11801.

**Operator consequence.** Stables v2026.817.0, v2026.824.0 and v2026.824.1 can still put ACPX thought text in automatic issue comments. Upgrade to v2026.831.0 or later. If issue comments from ACPX adapters on 824.x were exported or mirrored, re-audit them. The containment cannot be turned off by config, which removes one setting to audit.

## 3. v2026.831.0: bad agent bearer tokens 401 instead of silently becoming the local user

- **Date:** 2026-09-02
- **Channel:** `tagged-release`
- **Ancestry evidence:** PR #11589 merge 1c366a90 (merged 2026-08-18T04:36:12Z). compare 1c366a90...v2026.824.0 status=behind behind_by=1 (not contained: merged after the 818 beta SHA that became 824.0). compare 1c366a90...v2026.831.1 status=ahead ahead_by=234 behind_by=0 (contained). Files: server/src/middleware/auth.ts, packages/adapter-utils/src/execution-target.ts.
- **Receipt:** https://github.com/paperclipai/paperclip/pull/11589
- **Half:** defect (closed) | security-relevant | **Confidence:** high on channel; release-note description of the old behavior

**What changed.** Per the release body, a bearer token that failed verification (expired, terminated agent, wrong company) used to fall through to the anonymous local-user actor; it now returns 401 naming the cause.

**Operator consequence.** On v2026.824.x and earlier, an expired or wrong-company agent token could act as the local user rather than fail. Upgrade, then watch for new 401s: any integration that starts failing was relying on the fall-through. Treat pre-831.0 audit attribution of "local user" actions as possibly agent-originated.

## 4. v2026.831.0: Paperclip stopped setting the wrapped Grok CLI's permission mode to dontAsk

- **Date:** 2026-09-02
- **Channel:** `tagged-release`
- **Ancestry evidence:** PR #11898 merge fbd20b28 (merged 2026-08-21T21:50:44Z). compare fbd20b28...v2026.831.1 status=ahead ahead_by=145 behind_by=0. Not in 824.x (merged after the 824.0 SHA's history point).
- **Receipt:** https://github.com/paperclipai/paperclip/releases/tag/v2026.831.0
- **Half:** defect (closed) | governance layering | **Confidence:** high on channel; medium on behavior (release-note read, adapter code not line-audited)

**What changed.** The Grok adapter passes no `--permission-mode` flag unless configured; before, the control plane injected `dontAsk` into the wrapped harness by default. `--always-approve` remains the documented unattended policy.

**Operator consequence.** This answers part of the layering question for this pair: before 831.0, Paperclip overrode the wrapped Grok CLI's own permission default toward permissive without the operator choosing it. Now the harness's own default governs unless the operator sets a mode. Unattended Grok agents that relied on the implicit dontAsk may now stall on prompts; set `--always-approve` deliberately if that is what you want.

## 5. v2026.824.0: new interactions default to resolver policy `anyone`

- **Date:** 2026-08-25
- **Channel:** `tagged-release`
- **Ancestry evidence:** PR #11376 merge 10d05551; compare 10d05551...v2026.824.0 status=ahead ahead_by=36 behind_by=0. Code at tag: `packages/db/src/migrations/0218_mushy_jack_murdock.sql` sets `requested_resolver_policy` and `effective_resolver_policy` column DEFAULT 'anyone', and rewrites existing rows `board_or_agents` -> `not_creator`, `board_only` -> `human_only`, with provenance `legacy_inherited_restriction`.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/v2026.824.0/packages/db/src/migrations/0218_mushy_jack_murdock.sql
- **Half:** both | approval surface | **Confidence:** high

**What changed.** One resolver-policy evaluator with recorded provenance replaced per-route rules. The capability half: agents that were wrongly blocked from resolving can now resolve, and every resolution records why it was allowed. The defect-watch half: a new interaction created without an explicit policy can be resolved by anyone, including the agent that created it, unless a company cap narrows it. The migration explicitly does not widen pending rows.

**Operator consequence.** Re-audit any workflow that relied on the old default excluding the creator. If you need an agent to be unable to answer its own confirmation, set `not_creator` or `human_only` explicitly or cap it at company level. Inspect `resolver_policy_provenance` to see which rule allowed a resolution.

## 6. v2026.916.0: agent APIs stopped returning plaintext credentials, including to the agent itself

- **Date:** 2026-09-16
- **Channel:** `tagged-release`
- **Ancestry evidence:** PR #9860 "fix(agents): redact plaintext env values in agent read and mutation responses", merge 31a63638 (merged 2026-09-03T19:13:27Z). compare 31a63638...v2026.831.1 status=diverged (not contained). compare 31a63638...v2026.916.0 status=ahead ahead_by=305 behind_by=0. Files: server/src/redaction.ts, server/src/routes/agents.ts. No GHSA published for it (repo advisories list: newest is GHSA-x8hx-rhr2-9rf7, 2026-07-22).
- **Receipt:** https://github.com/paperclipai/paperclip/pull/9860
- **Half:** defect (closed) | security-relevant | **Confidence:** high on channel; release-note description of scope

**What changed.** Per the release body, agent detail reads, the company agent list, and create/update/lifecycle routes echoed `adapterConfig.env` as stored, so `plain` bindings (API keys, tokens) came back verbatim to any caller that could read the agent, including the agent via `GET /api/agents/me`. All three response families now go through one redacting presenter.

**Operator consequence.** Every stable before v2026.916.0, including all four earlier in-window stables, exposes plain env credentials to any agent that can read agents in its company. Upgrade, and rotate any key stored as a `plain` binding on an instance where agents or less-trusted board users could call the agents API. Move credentials to secret bindings or the new Connections path (item 8). This was fixed as a breaking change with no advisory; do not wait for a GHSA to act.

## 7. v2026.916.0: X-Forwarded-Host is honored only from a trusted proxy

- **Date:** 2026-09-16
- **Channel:** `tagged-release`
- **Ancestry evidence:** PR #12832 merge 7dfc769f (merged 2026-09-04T15:02:29Z). compare 7dfc769f...v2026.831.1 diverged (not contained); compare 7dfc769f...v2026.916.0 status=ahead ahead_by=262 behind_by=0.
- **Receipt:** https://github.com/paperclipai/paperclip/pull/12832
- **Half:** defect (closed) | security-relevant | **Confidence:** high on channel; release-note description

**What changed.** The same-origin guard used to accept a forwarded host from any direct client, letting a caller add its own header value to the trusted-origin set. It now requires the immediate peer to pass `TRUST_PROXY`.

**Operator consequence.** Behind a reverse proxy, confirm `TRUST_PROXY` is set before upgrading or origin checks fall back to the raw Host header. Directly exposed pre-916.0 instances had a spoofable origin check.

## 8. v2026.916.0: authority moved to people and connections; some defaults widened

- **Date:** 2026-09-16
- **Channel:** `tagged-release`
- **Ancestry evidence:** #12814 merge 54dd0f48 compare ...v2026.916.0 ahead_by=268 behind_by=0 (not in 831.1). #13403 merge 728f7185 ahead_by=36 behind_by=0 (not in 831.1). #12683 merge 4b6de532 ahead_by=348 behind_by=0. #13263 merge 3bafac12 ahead_by=101 behind_by=0. Code at tag: `server/src/services/agent-permissions.ts` `defaultAgentPermissions` sets `canCreateAgents: options?.context === "create" && options?.lowTrust !== true`, with a comment that defaults must never grant agent-creation authority to a low-trust agent.
- **Receipt:** https://github.com/paperclipai/paperclip/blob/v2026.916.0/server/src/services/agent-permissions.ts
- **Half:** both | **Confidence:** high on channel and the hire default (code); release-note level for the rest

**What changed.** Capability: AI runtime credentials (Claude and Codex subscriptions, API keys) move into Connections with grants and ownership (#13247); GitHub access becomes App-backed per-person identities, and when several people steer one agent, git/gh resolve to the responsible person's credentials per accepted instruction "with no fallback to a teammate's access" (#12843, #13005). AgentMail inboxes and Slack/Discord/Telegram/Teams/iMessage connectors are experimental. Removals: cheap model profiles are gone (one model path for normal and recovery work, #12683; migration 0236 discards stored profiles); the automatic productivity-review detector is deleted because infrastructure failures could manufacture review work (#13263). Widened defaults: new standard-trust agents can hire other agents by default (#12814); in-app announcements are on by default and fetch `https://pages.paperclip.ing/announcements/v1/current.json` (#13403); the experimental native runner gate `enableNativeRunner` defaults on for self-hosted (explicitly configured agents only); the server loads a `.env` from its working directory unless `PAPERCLIP_DISABLE_CWD_ENV_FILE=true`.

**Operator consequence.** Try Connections if you manage shared subscriptions; it is the first time who-paid and who-authorized follows the responsible human rather than the agent config. Re-audit: after upgrading, new standard-trust agents can create agents unless you mark them low-trust or override `canCreateAgents`; set `PAPERCLIP_ANNOUNCEMENTS_ENABLED=false` on air-gapped or policy-restricted instances (outbound fetch to a vendor feed). Recovery rules that named a cheap model profile now run on the normal model: expect cost to rise on recovery-heavy fleets.

## 9. v2026.824.0: sandbox capability contract resolves fail-closed; managed previews default to Tailscale HTTPS

- **Date:** 2026-08-25
- **Channel:** `tagged-release`
- **Ancestry evidence:** PR #11463 merge e71ce9a9, compare ...v2026.831.1 ahead_by=255 behind_by=0 (release body lists it in 824.0). Release body Breaking Changes and Highlights.
- **Receipt:** https://github.com/paperclipai/paperclip/releases/tag/v2026.824.0
- **Half:** both | sandboxing | **Confidence:** medium (release-note level)

**What changed.** Providers declare capabilities, the live worker verifies them, and the server resolves the effective set as the intersection of declared, verified and configured, fail-closed. Three operator flags were deleted (`streamAgentSessionOutput`, Daytona `useSessions`, `useLogStream`); they load but are inert. Managed worktree runtimes now default to `tailscale_https` exposure when the host broker is present (`PAPERCLIP_MANAGED_RUNTIME_HTTPS=off` to opt out, `force` to fail closed). v2026.831.0 adds `PAPERCLIP_HIDDEN_SETTINGS` (hiding `company.import` also floors the API) and a managed-sandbox-only mode arrived in 824.0.

**Operator consequence.** Delete the three inert keys; they no longer control anything and give a false reading on audit. If you run the Tailscale broker, agent branch previews are now reachable from the tailnet by default; set `off` if previews should stay loopback.

## 10. Docs and site caught up to v2026.916.1; install guide still does not name the lanes

- **Date:** observed 2026-09-23
- **Channel:** `docs-only`
- **Ancestry evidence:** https://paperclip.ing/ reads "Latest release v2026.916.1 is live (September 21, 2026)". https://docs.paperclip.ing/reference/changelog/ leads v2026.916.0, v2026.831.1, v2026.824.1, v2026.824.0, v2026.817.0 (no 916.1 entry at observation). https://docs.paperclip.ing/guides/getting-started/installation/ teaches bare `npx paperclipai` and Node.js 24+, with no @beta/@nightly/@canary. The lane contract lives in `doc/CHANNELS.md` in the repo (present at v2026.916.1).
- **Receipt:** https://github.com/paperclipai/paperclip/blob/v2026.916.1/doc/CHANNELS.md
- **Half:** neither | **Confidence:** high on page content at observation; deploy times not receipted

**Operator consequence.** npm dist-tags remain the channel source of truth. The install guide's bare `npx paperclipai` is `@latest` = 2026.916.1. Node 24.11.0 is the floor from v2026.831.0 on; npm installs on Node 22/23 only warn.

## Carry-forward answers

1. Stable tags in window: v2026.824.0, v2026.824.1, v2026.831.0, v2026.831.1, v2026.916.0, v2026.916.1 (all prerelease=false, non-namespaced). Review-policy lock (57edb26db) and CWE-78 CLI guidance (fdb9a4880): ancestors of every in-window stable from v2026.824.0 on. c2cfd55e (#11801): NOT an ancestor of v2026.824.0 or v2026.824.1; ancestor of v2026.831.0 and later. npm latest=2026.916.1; install docs point at untagged `npx paperclipai` (= latest).
2. See ledger for canary/nightly per-day counts.
3. Governance/policy/sandbox/security changes: items 1-9. No GHSA published in window.

## Operator questions settled

- "Which governance and budget primitives are enforceable rather than descriptive?" Partly: resolver policy now carries enforced provenance (item 5); hire authority is a code default with a low-trust floor (item 8); cheap-model downgrade as a budget lever was removed rather than hardened (item 8).
- "Does this make coordination easier without hiding who approved what and why?" Item 5 (resolver provenance) and item 8 (credentials resolve to the responsible person, no teammate fallback) both move toward yes; item 3 closes a path where an agent's failed auth was attributed to the local user.

## Researcher lane notes

Every feature stable in the window is a byte-identical promotion of a beta tag (818.0-beta.1 -> 824.0, 828.0-beta.0 -> 831.0, 916.0-beta.0 -> 916.0). This means "in beta" now reliably predicts "in next stable", but the stable can lag master by weeks: #11589 merged 2026-08-18 and missed 824.0 because the beta was cut the same day. The most operator-urgent fix (item 6, plaintext credentials) shipped as a breaking-change line with no advisory.

## Observed after window close

- npm nightly=2026.922.0-nightly.0 (2026-09-22T09:31Z) and canary=2026.923.0-canary.4. Canary 922 (14 tags) and 923 (5 so far) are OUT.

## Surfaces checked

- `gh api repos/paperclipai/paperclip` (identity) and releases list (30)
- Release bodies v2026.824.0, v2026.824.1, v2026.831.0, v2026.831.1, v2026.916.0, v2026.916.1
- compare between consecutive stables; compare 57edb26db, fdb9a4880, c2cfd55e vs 824.0/824.1/831.0/916.1
- PR metadata and merge SHAs for #9860, #11376, #11463, #11589, #11898, #12683, #12814, #12832, #13263, #13403, each compared vs v2026.831.1 and v2026.916.0
- git/matching-refs tags/canary/, tags/nightly/, tags/beta/; commit SHAs of beta 916.0-beta.0, 828.0-beta.0, 921.0-beta.1
- npm dist-tags and `npm view paperclipai time`
- Security advisories list (repo)
- Raw at tag: 0218 migration (v2026.824.0), server/src/services/agent-permissions.ts (v2026.916.0); repo tree at v2026.916.1 (doc/CHANNELS.md present)
- paperclip.ing homepage, docs changelog, docs installation guide

## Not reached

- Adapter code for #11898 and the redaction presenter for #9860 not line-audited at tag (PR file lists only).
- Budget enforcement code (before-call vs after) not re-read this window; no release note in window changed budgets.
