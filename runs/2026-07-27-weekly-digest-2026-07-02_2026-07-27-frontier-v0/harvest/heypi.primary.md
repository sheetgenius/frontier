---
schema_version: bitter.frontier_harvest.v0
provider: heypi
label: heypi
owner: Ronan Berder (hunvreus)
repo: https://github.com/hunvreus/heypi
tier: 2
window: 2026-07-02..2026-07-27
run: 2026-07-27-weekly-digest-2026-07-02_2026-07-27-frontier-v0
primary_receipt_surface: git tags + CHANGELOG.md (no GitHub Releases; verified length 0)
channels_present: [preview-or-beta, main-unreleased]
window_volume: 105 commits on main, 3 in-window annotated tags (0.3.0-beta.0/1/2)
---

# Harvest -- heypi (primary sources)

Quoted CHANGELOG and docs text below is reproduced faithfully in wording, with
punctuation normalized to ASCII per house style.

## Window and channel resolution

The baseline had heypi "holding at its 0.2.0 beta." **It did not hold.** heypi
shipped a wholesale Pi-native rewrite and a new 0.3.0 beta line inside the
window, across 105 commits on main.

| tag | tagged commit | tagger date (ISO) | committer date (ISO) | CHANGELOG date |
| --- | --- | --- | --- | --- |
| 0.2.0-beta.0 | `19f1062bc0993a620ac5de4f263c0d78086cbeee` | (lightweight) | 2026-06-23 | pre-window |
| 0.3.0-beta.0 | `d2e8b354a4bf18cfcd3c0c450d365ccfed26f4d5` | 2026-07-21 | 2026-07-21 | 2026-07-21 |
| 0.3.0-beta.1 | `49caae9fae3acef1ee28101ee8d66dcfad39ae8d` | 2026-07-22 | 2026-07-22 | 2026-07-21 |
| 0.3.0-beta.2 | `436da22ceab0bc4e2db133e8626649b4bf76286d` | 2026-07-22 | 2026-07-22 | 2026-07-21 |

**Date discrepancy, flagged.** CHANGELOG.md dates all three 0.3.0 betas
`2026-07-21`. The git tagger and committer timestamps put beta.1 and beta.2 at
`2026-07-22T01:35Z`. Per rule 3 the git object timestamps are authoritative for
ancestry; the CHANGELOG entry date is the author's rounding. Both are in-window,
so nothing material turns on it.

**Channel.** All three are `preview-or-beta`: annotated git tags on a `-beta.N`
line, with **no GitHub Releases** (verified: `GET /repos/hunvreus/heypi/releases`
returns length 0). This partially resolves the source-contract open question --
the **git tag is the ship signal**, and the npm package version at
`0.3.0-beta.2` is `@hunvreus/heypi@0.3.0-beta.2`, so tag and package agree.
Ancestry verified: `0.3.0-beta.0...0.3.0-beta.2` is `ahead_by: 3, behind_by: 0`.

Work after `0.3.0-beta.2` is `main-unreleased`; the CHANGELOG's `## [Unreleased]`
section is empty as of the tag.

---

## 1. heypi stops being a harness and becomes a policy shell over Pi

**What changed.** The 0.3.0-beta.0 rewrite draws an explicit authority line:

> Pi now owns model execution, transcripts, compaction, retries, tools,
> extensions, and session state; **heypi owns chat transport, policy, resource
> staging, and coordination.**

The CHANGELOG opens by declaring the break: "This changelog starts with the
Pi-native rewrite. Version 0.3.0-beta.0 is intentionally incompatible with the
previous beta architecture, configuration, persistence, and package layout."

**Receipt (pinned).** https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md
Rewrite commits: `7da4c65494` ("feat: rebuild Pi-native agent runtime",
2026-07-14), `9b82dcc669` ("feat: checkpoint pi-native rewrite", 2026-07-08).
Both confirmed ancestors of `0.3.0-beta.0`.

**Date.** 2026-07-21 (tag); rewrite landed 2026-07-08 through 2026-07-21.
**Channel.** preview-or-beta.

**Operator consequence.** This directly answers the standing question of whether
heypi inherits Pi's "no governance in core" posture: it now formally accepts the
split, keeping zero harness responsibility and owning only the governance and
transport layer -- which makes heypi a cleaner test of whether a pure policy
shell can bind an agent it does not run.

## 2. Approvals genuinely enforce -- the audit write is a precondition for execution

**What changed.** The tagged approvals doc states an enforcement contract that is
stronger than anything else in this window's harvest:

> heypi records `approval_requested` before posting UI and `approval_resolved`
> before continuing the tool. **If either canonical write fails, the call is
> blocked.** Rejection, timeout, missing adapter UI, and process shutdown also
> **fail closed**.

Policies available: `approval.never()`, `approval.always(reason)`,
`approval.once(reason)`, `approval.when(predicate, reason)`, and
`approval.command(config)` which "classifies shell commands with `allow`,
`approve`, and `block` patterns." Approvals run "at the Pi tool-call boundary. A
policy decides whether a call may run, must be approved, or must be blocked."

**Receipt (pinned).** https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/approvals.md

**Date.** 2026-07-22 (tag `0.3.0-beta.2`).
**Channel.** preview-or-beta.

**Operator consequence.** This is a real boundary, not a notification: the tool
cannot proceed unless the audit record commits first, so an operator gets the one
property that makes an audit trail worth having -- you cannot have an executed
call with no corresponding approval record.

## 3. But the approval gate is opt-in, and a misconfigured one degrades to "anyone can approve" with a log line

**What changed.** Two limits sit in the same tagged doc as the enforcement
guarantee above.

> Approvals are **opt-in per tool**; configuring approvers alone does not make
> tools require approval.

and

> If `admins` and `approvers` are both omitted, **any actor who can reach the
> approval UI may respond; heypi logs a startup warning.**

The CHANGELOG's Security section confirms the mitigation is advisory: it lists
"warned on unrestricted host execution or **approval policies without
approvers**" alongside genuinely enforcing changes.

**Receipts (pinned).**
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/approvals.md
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md

**Date.** 2026-07-22.
**Channel.** preview-or-beta.

**Operator consequence.** In the product whose entire pitch is the governance
shell, the *identity* half of the gate is unenforced -- omit both lists and every
member of a Slack channel becomes an approver, with a startup warning as the only
guardrail -- so the enforcement strength of a heypi deployment is a property of
its config, not of the tool.

## 4. Named sandbox runtimes ship as real packages, including Gondolin

**What changed.** heypi restructured into a 6-package pnpm workspace:
`packages/heypi`, `heypi-runtime-cloudflare`, `heypi-runtime-gondolin`,
`heypi-runtime-just-bash`, `heypi-runtime-vercel`, and `create-heypi`. The
CHANGELOG records:

> Host and Docker execution in the core package, plus **Gondolin, just-bash,
> Vercel Sandbox, and Cloudflare Sandbox runtime packages.**

and

> Runtime paths are model-visible as `/workspace`, `/shared`, and `/agent`;
> built-in command execution uses Bash where the selected image or provider
> supports it.

Removed in the same release: "the standalone Docker runtime package; Docker
execution is now exported by `@hunvreus/heypi`."

**Receipts (pinned).**
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md
- Workspace layout: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/package.json
- Runtime commits `2bb96276bc` ("feat(runtime): add sandbox providers", 2026-07-15) and `015388d9be` ("fix(runtime): enforce sandbox path and shell contracts", 2026-07-16), both confirmed ancestors of `0.3.0-beta.0`.

**Date.** 2026-07-15 to 2026-07-22.
**Channel.** preview-or-beta.

**Operator consequence.** Gondolin is no longer an open question -- it is a
shipped, installable runtime package alongside just-bash, Docker, Vercel Sandbox,
and Cloudflare Sandbox -- so an operator now picks an isolation backend the same
way they pick a chat adapter.

## 5. Security hardening: exposed admin required no auth, and host paths leaked

**What changed.** The 0.3.0-beta.0 Security section:

> Constrained runtime file access and mirrors to declared roots, bounded
> attachment downloads, added webhook signatures, **required authentication for
> non-loopback admin binds**, and warned on unrestricted host execution or
> approval policies without approvers.

The Fixed section adds that the release "Prevented [...] **host-path
disclosure**, **unsafe wildcard admin hosts**, and premature in-memory state
changes before persistence."

**Receipts (pinned).**
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md
- Commit `2dd2456e00` ("Require auth for exposed admin", 2026-07-10, touching
  `packages/heypi/src/admin.ts`, `admin.test.ts`) -- confirmed ancestor of
  `0.3.0-beta.0`: https://github.com/hunvreus/heypi/commit/2dd2456e00
- Commit `5f3f324c9b` ("Harden runtime tool path guards", 2026-07-10).

**Date.** 2026-07-10 (fix commit), 2026-07-21 (tagged).
**Channel.** preview-or-beta; the fix sat `main-unreleased` from 2026-07-10 to
2026-07-21.

**Operator consequence.** Anyone who bound the heypi admin surface to a non-
loopback interface before 2026-07-21 was serving it unauthenticated, and there is
no advisory -- the fix is one bullet inside a rewrite changelog, so the upgrade
urgency is invisible unless you read the Security section.

## 6. Encrypted secret ingress lands so credentials skip the chat transcript

**What changed.** The Added section lists "Runtime file and shell tools, staged
skills, attachments, **encrypted secret ingress**, todos, curated memory,
explicit chat history, approvals, cancellation, schedules, audit logs, and local
administration."

**Receipts (pinned).**
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md
- Commits `280b7a4034` ("Add encrypted secret exchange primitive", 2026-07-10)
  and `e30790608f` ("Add chat secret request flow", 2026-07-10) -- `280b7a4034`
  confirmed ancestor of `0.3.0-beta.0`.

**Date.** 2026-07-10 (commits), 2026-07-21 (tagged).
**Channel.** preview-or-beta.

**Operator consequence.** This closes the loop the source contract asked about --
how a secret reaches a tool without passing through chat -- and gives operators a
path for handing an agent a credential in a multiplayer channel without pasting
it where every member and the transcript can read it.

## 7. Schedules, durable intake, and the removal of the entire prior runtime

**What changed.** Two operationally significant items.

*Durable intake becomes the webhook contract:*

> Webhook requests require stable message ids and **return after durable intake
> instead of waiting for model completion.**

The Fixed section adds hardened "durable message intake, redelivery
deduplication, queue dispatch, cancellation, approval recovery, schedule claims,
and truncated log recovery."

*Everything before is deleted:*

> Removed the previous database-backed runtime, config format, **migration
> path**, CLI and admin application, compatibility shims, generic progress API,
> and obsolete examples.

**Receipts (pinned).**
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md
- Schedule commits `3cc887baf4` ("feat(heypi): add schedule runtime primitives")
  and `5f103765ec` ("feat(heypi): integrate schedules and native adapter
  activity"), both 2026-07-15.

**Date.** 2026-07-15 (commits), 2026-07-21 (tagged).
**Channel.** preview-or-beta.

**Operator consequence.** There is **no migration path from 0.2.x** -- the config
format, persistence, and admin app are all gone -- so every existing heypi
deployment is a rebuild, and the "approval recovery" and "schedule claims"
hardening tells you the prior durability story was weaker than the docs implied.

---

## Cadence note for the digest

heypi went from a single-package 0.2.0 beta to a 6-package Pi-native monorepo on
a 0.3.0 beta line in 25 days, and its approvals contract is now the most
explicitly enforcing of any source in this harvest (fail-closed, audit-write-
before-execute). The gap between that contract and its default posture --
approvals opt-in per tool, approver identity unenforced with a warning -- is the
finding worth carrying into the digest.
