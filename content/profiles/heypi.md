---
schema_version: bitter.frontier_profile.v0
profile_id: heypi
label: heypi
owner: Ronan Berder (hunvreus)
source_contract: sources/heypi.yml
homepage: https://heypi.dev/
docs: https://heypi.dev/docs/
tagline: "The strongest fail-closed approval contract in the field, wrapped around an approver identity check that is only a startup warning."
compared_with:
  - pi-coding-agent
  - openclaw
  - eve
repo: https://github.com/hunvreus/heypi
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-07-27
last_full_review: 2026-07-27
claims:
  - id: governance-shell-built-on-pi
    finding_id: 2026-06-24-heypi-governance-shell-on-pi
    last_verified: 2026-06-24
    status: active
  - id: pi-coding-agent-dependency-pin
    finding_id: 2026-06-24-heypi-governance-shell-on-pi
    last_verified: 2026-06-24
    status: active
  - id: approvals-not-required-by-default
    finding_id: 2026-06-24-heypi-approvals-opt-in-not-default
    last_verified: 2026-06-24
    status: active
  - id: bash-approval-command-classifier
    finding_id: 2026-06-24-heypi-approvals-opt-in-not-default
    last_verified: 2026-06-24
    status: active
  - id: sandbox-just-bash-default-network-off
    finding_id: 2026-06-24-heypi-sandbox-runtimes
    last_verified: 2026-06-24
    status: active
  - id: gondolin-vm-runtime
    finding_id: 2026-06-24-heypi-sandbox-runtimes
    last_verified: 2026-06-24
    status: active
  - id: host-runtime-warning-not-block
    finding_id: 2026-06-24-heypi-sandbox-runtimes
    last_verified: 2026-06-24
    status: active
  - id: secret-webcrypto-handoff
    finding_id: 2026-06-24-heypi-secret-handoff
    last_verified: 2026-06-24
    status: active
  - id: secret-plaintext-at-rest
    finding_id: 2026-06-24-heypi-secret-handoff
    last_verified: 2026-06-24
    status: active
  - id: adapter-local-permissions-0-2-0
    finding_id: 2026-06-24-heypi-0.2.0-beta-governance-hardening
    last_verified: 2026-06-24
    status: active
  - id: https-by-default-webhooks-0-2-0
    finding_id: 2026-06-24-heypi-0.2.0-beta-governance-hardening
    last_verified: 2026-06-24
    status: active
  - id: instructions-rename-0-2-0
    finding_id: 2026-06-24-heypi-0.2.0-beta-governance-hardening
    last_verified: 2026-06-24
    status: active
  - id: admin-panel-disabled-by-default
    finding_id: 2026-06-24-heypi-admin-panel-and-audit-default-off
    last_verified: 2026-06-24
    status: active
  - id: audit-is-typed-trace-events
    finding_id: 2026-06-24-heypi-admin-panel-and-audit-default-off
    last_verified: 2026-06-24
    status: active
  - id: scaffolder-create-heypi
    finding_id: 2026-06-24-heypi-scaffolder-onboarding
    last_verified: 2026-06-24
    status: active
  - id: single-host-node-service-deploy
    finding_id: 2026-06-24-heypi-scaffolder-onboarding
    last_verified: 2026-06-24
    status: active
  - id: durability-no-crash-replay
    finding_id: 2026-06-24-heypi-durability-disclaimer
    last_verified: 2026-06-24
    status: active
  - id: memory-off-not-a-security-boundary
    finding_id: 2026-06-24-heypi-durability-disclaimer
    last_verified: 2026-06-24
    status: active
  - id: tags-only-no-github-releases
    finding_id: 2026-06-24-heypi-channel-discipline-tags-no-releases
    last_verified: 2026-06-24
    status: active
  - id: no-team-adoption-signal-yet
    finding_id: 2026-06-24-heypi-channel-discipline-tags-no-releases
    last_verified: 2026-06-24
    status: open_question
posture_basis:
  capability:
    - 2026-06-24-heypi-governance-shell-on-pi
    - 2026-06-24-heypi-sandbox-runtimes
    - 2026-06-24-heypi-0.2.0-beta-governance-hardening
    - 2026-06-24-heypi-secret-handoff
    - 2026-06-24-heypi-scaffolder-onboarding
  accessibility:
    - 2026-06-24-heypi-scaffolder-onboarding
    - 2026-06-24-heypi-secret-handoff
    - 2026-06-24-heypi-admin-panel-and-audit-default-off
    - 2026-06-24-heypi-governance-shell-on-pi
  governance:
    - 2026-06-24-heypi-approvals-opt-in-not-default
    - 2026-06-24-heypi-0.2.0-beta-governance-hardening
    - 2026-06-24-heypi-admin-panel-and-audit-default-off
    - 2026-06-24-heypi-secret-handoff
    - 2026-06-24-heypi-sandbox-runtimes
    - 2026-06-24-heypi-durability-disclaimer
stance:
  use_for: "Teams that want one shared chat-ops agent in Slack, Discord, or Telegram on a host they own, and who will set `admins` and `approvers` explicitly and opt each consequential tool into an approval policy. The enforcement half of that contract is the strongest on this watchlist: approvals run at the Pi tool-call boundary, the audit write is a precondition for execution, and rejection, timeout, missing adapter UI, and process shutdown all fail closed."
  avoid_for: "Anyone on the 0.2.x line expecting an upgrade -- 0.3.0-beta.0 removed the previous runtime, config format, persistence, CLI, admin app, and the migration path itself, so every existing deployment is a rebuild. Anyone treating a `-beta.N` git tag as a supported stable line: there is no stable 0.3.0 and no GitHub Releases page at all. And anyone who bound the admin surface to a non-loopback interface before 2026-07-21, which was serving unauthenticated with no advisory."
  watch_next: "Whether approver identity becomes enforced rather than warned -- omitting both `admins` and `approvers` still degrades the gate to anyone who can reach the approval UI; whether the 0.3.0 line reaches stable with a support and upgrade contract; whether a security fix ever gets an advisory rather than one bullet inside a rewrite changelog; and whether the clean Pi-delegation split survives Pi's own SDK churn, which broke twice in nine days this window."
---

# heypi

## Operator Read

heypi is the part of an agent that says *no*, packaged and sold separately. Our
baseline expected it to be holding at its 0.2.0 beta. It did not hold. Across the
2026-07-02 to 2026-07-27 window heypi shipped 105 commits on `main`, a wholesale
Pi-native rewrite, and a new
[0.3.0 beta line](https://github.com/hunvreus/heypi/tags) tagged
`0.3.0-beta.0`, `.1`, and `.2` on 2026-07-21 and 2026-07-22.

The rewrite draws an explicit authority line, and it is the clearest statement of
purpose the project has made. From the
[tagged CHANGELOG](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md):
Pi now owns model execution, transcripts, compaction, retries, tools, extensions,
and session state; heypi owns chat transport, policy, resource staging, and
coordination. heypi has stopped being a harness and become a pure policy shell
over a harness that
[deliberately refuses to govern](/profiles/pi-coding-agent/). That makes it the
cleanest available test of whether a policy layer can bind an agent it does not
run.

On the enforcement question the answer this window is: yes, and better than
anyone else on the watchlist. On the identity question the answer is: not yet,
and the gap is the finding.

> **Current release**: `0.3.0-beta.2` (git tagger date 2026-07-22), on npm as
> `@hunvreus/heypi@0.3.0-beta.2`. There are still **no GitHub Releases** -- the
> releases endpoint returns nothing -- so the annotated git tag is the ship
> signal, and npm agrees with it. There is no stable 0.3.0. Work after
> `0.3.0-beta.2` is unreleased; the CHANGELOG's `[Unreleased]` section was empty
> at the tag.

## The enforcement contract, and the hole in it

Take the good half first, because it is genuinely rare.

The
[tagged approvals doc](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/approvals.md)
states that heypi records `approval_requested` before posting the approval UI and
`approval_resolved` before continuing the tool, and that **if either canonical
write fails, the call is blocked**. Rejection, timeout, missing adapter UI, and
process shutdown all fail closed. Policies are first-class:
`approval.never()`, `approval.always(reason)`, `approval.once(reason)`,
`approval.when(predicate, reason)`, and `approval.command(config)`, which
classifies shell commands with `allow`, `approve`, and `block` patterns. All of
it runs at the Pi tool-call boundary.

Read what that buys. You cannot end up with an executed call that has no
corresponding approval record, because the record is the precondition, not a
side effect. Across a window in which this publication documented gate after
gate that read like a boundary and was not one, heypi wrote down the property
that makes an audit trail worth having and enforced it in the direction that
costs the vendor something: failure blocks work rather than letting it through.

Now the hole, from the same document. Approvals are **opt-in per tool** --
"configuring approvers alone does not make tools require approval." And if
`admins` and `approvers` are both omitted, **any actor who can reach the approval
UI may respond**, with a startup warning as the only guardrail. The CHANGELOG's
own Security section files that under "warned on," alongside unrestricted host
execution, rather than under anything enforced.

So the enforcement half is a property of the tool and the identity half is a
property of your config. In a multiplayer chat agent that distinction is not
academic: omit both lists and every member of the channel is an approver, which
means the fail-closed machinery faithfully records that somebody approved and
tells you nothing about whether that somebody was allowed to. Set `admins` and
`approvers` explicitly. Then enumerate the tools that must gate and opt each one
in. The framework makes both easy and neither automatic.

*Findings: `2026-06-24-heypi-approvals-opt-in-not-default`,
`2026-06-24-heypi-admin-panel-and-audit-default-off`.*

## The admin surface was unauthenticated, and nobody said so

[Commit `2dd2456e00`](https://github.com/hunvreus/heypi/commit/2dd2456e00)
("Require auth for exposed admin", 2026-07-10, touching
`packages/heypi/src/admin.ts` and its tests) sat unreleased for eleven days
before the 2026-07-21 tag. Before that fix shipped, anyone who bound the heypi
admin surface to a non-loopback interface was serving it with no authentication
at all. The same release
[prevented host-path disclosure and unsafe wildcard admin hosts](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md),
constrained runtime file access and mirrors to declared roots, bounded attachment
downloads, and added webhook signatures. A companion commit `5f3f324c9b`
hardened runtime tool path guards on the same day.

There is no advisory. The fix is one bullet inside the Security section of a
changelog that is otherwise announcing a rewrite, which means the upgrade urgency
is invisible unless you read that section line by line. If you exposed the admin
panel beyond loopback at any point before 2026-07-21, treat everything it could
reach as disclosed and rotate accordingly. This is a small project and the
honest framing is that it is not unusual here -- it is representative of the
disclosure gap this publication found across the whole field this window.

## There is no migration path

Say this plainly because a reader upgrading on the strength of the release
announcement will be surprised. The CHANGELOG opens by declaring
`0.3.0-beta.0` "intentionally incompatible with the previous beta architecture,
configuration, persistence, and package layout," and the Removed section lists
the previous database-backed runtime, the config format, **the migration path**,
the CLI and admin application, compatibility shims, the generic progress API, and
the obsolete examples.

Every existing heypi deployment is a rebuild, not an upgrade. The public
announcement described this as "cleaned-up config."

One more thing that release tells you in passing. The Fixed section hardens
"durable message intake, redelivery deduplication, queue dispatch, cancellation,
**approval recovery**, schedule claims, and truncated log recovery." A release
that hardens approval recovery is a release admitting the prior durability story
was weaker than the docs implied. That is a fair thing for a beta to do; it is
also a reason not to treat a `-beta.N` tag as a supported line.

## What the rewrite ships

**A six-package workspace.** The repo is now a pnpm monorepo:
[`packages/heypi`](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/package.json),
`heypi-runtime-cloudflare`, `heypi-runtime-gondolin`, `heypi-runtime-just-bash`,
`heypi-runtime-vercel`, and `create-heypi`. The standalone Docker runtime package
is gone; Docker execution is exported by `@hunvreus/heypi` itself. Runtime paths
are model-visible as `/workspace`, `/shared`, and `/agent`, and built-in command
execution uses Bash where the selected image or provider supports it. Commits
`2bb96276bc` ("feat(runtime): add sandbox providers", 2026-07-15) and
`015388d9be` ("fix(runtime): enforce sandbox path and shell contracts",
2026-07-16) are the substance.

This resolves a standing question. **Gondolin is no longer a name in the docs**;
it is a shipped, installable runtime package sitting alongside just-bash, Docker,
Vercel Sandbox, and Cloudflare Sandbox. An operator now picks an isolation
backend the same way they pick a chat adapter. Worth one clarification the
project's own public conversation never made: the Vercel and Cloudflare packages
are *Sandbox* primitives -- long-running containers -- not serverless functions,
which is why they do not contradict the maintainer's loudly stated position that
agents should not run on serverless infrastructure.

**Encrypted secret ingress.** Commits `280b7a4034` ("Add encrypted secret
exchange primitive") and `e30790608f` ("Add chat secret request flow"), both
2026-07-10, land in the tagged Added list. This closes the loop the source
contract asked about: how a credential reaches a tool without passing through
chat. The handoff is protected; treat storage separately and isolate the runtime
workspace.

**Webhooks return on durable intake.** Webhook requests now require stable
message ids and return after durable intake rather than waiting for model
completion. For anyone integrating heypi behind an external system with a
timeout, that is the difference between a working integration and a mysterious
one. Schedules arrived alongside it (commits `3cc887baf4` and `5f103765ec`,
2026-07-15).

*Findings: `2026-06-24-heypi-sandbox-runtimes`,
`2026-06-24-heypi-secret-handoff`,
`2026-06-24-heypi-governance-shell-on-pi`.*

## The one place the conversation ran ahead

This is worth recording precisely, because it is the only genuine early-warning
result in a fourteen-source social sweep.

Three maintainer posts predate their confirming tags: a 2026-07-08 post about the
rewrite, thirteen days ahead; a 2026-07-15 post about the sandbox runtimes, six
days ahead; and a 2026-07-16 post about the 0.3.0 delegation split, five days
ahead. An operator watching only tags saw nothing until 2026-07-21. An operator
watching the maintainer knew on 2026-07-08 that the 0.2.x line was finished, and
that is what corrected this publication's own baseline.

Two caveats, because only genuine matters count. In two of the three cases the
underlying commit landed the *same day* as the post, so the interval measures
distance ahead of the shippable receipt rather than ahead of the code. And all
three are the builder narrating his own unreleased work. This is a maintainer
telling you what he is about to ship, not a practitioner detecting something a
vendor concealed. It is early warning of a real kind. It is not the crowd
catching anything.

The same lane is reliably wrong about one thing: dates. Two "this week" ship
promises missed by nine days and two days respectively. And on the substance that
matters, the silence is total -- a search of every heypi social claim for
`approv`, `admin`, `audit`, and `migrat` returns nothing. The governance shell's
own conversation contains no governance.
*See the window digest,
[Rules Became Judgment](/digests/2026-07-02_2026-07-27-weekly/).*

## How heypi differs from its neighbors

Three contrasts still locate it, and the rewrite sharpened all three.

Against [**Pi**](/profiles/pi-coding-agent/), the substrate: the relationship is
now formal rather than implied. Pi owns the agent loop and everything stateful
about a conversation; heypi owns transport, policy, staging, and coordination.
They are not competitors; one is the floor the other stands on. The dependency
risk is correspondingly sharper -- Pi's SDK took two breaking changes in nine days
this window, and credential storage stopped being a public Pi surface, so heypi's
delegation bet is also a churn bet.

Against [**OpenClaw**](https://docs.openclaw.ai/), its own stated starting point:
OpenClaw is a single-user gateway putting a personal assistant in your chat apps.
heypi is multiplayer by construction, with approver and admin identities scoped
per adapter. Where OpenClaw's authority model is per-sender, heypi's unit is the
shared channel -- which is exactly why the unenforced approver list matters more
here than it would there.

Against [**eve**](/profiles/eve/), the durability-first foil: eve makes the
approval gate a durable platform primitive that parks a run and resumes it across
a crash. heypi makes it an enforced-but-opt-in policy on a host you own, and
explicitly declines crash replay. Both document human-in-the-loop; the divergence
is the default and the locus. And it is worth noting which one had the better
window on this axis. eve found four ways its gate did not bind. heypi wrote a
contract in which the gate cannot fail open, and left the identity check to
configuration. Neither is finished.

## Open questions

Answered this window, so they stop being asked:

- **Is the git tag or the npm publish the ship signal?** The git tag, and npm
  agrees with it. There are still no GitHub Releases at all.
- **What does Gondolin actually ship as?** A first-party runtime package in the
  workspace, installable alongside just-bash, Docker, Vercel Sandbox, and
  Cloudflare Sandbox.
- **Does heypi inherit Pi's no-governance-in-core posture?** It formally accepts
  the split and keeps zero harness responsibility, which makes it a policy shell
  by design rather than by omission.
- **Does encrypted secret handoff reach the tool without passing through chat?**
  Yes, as of the tagged encrypted secret ingress.

Still open:

- Will approver identity ever be enforced rather than warned? Today an empty
  `admins` and `approvers` pair produces a startup warning and a gate anyone in
  the channel can answer.
- Does the audit record become queryable and tamper-evident, or does it remain
  typed events you inspect through local administration? The write-before-execute
  guarantee is excellent; the read surface is where the operator's confidence
  actually comes from.
- Will a security fix ever get an advisory? An unauthenticated admin bind
  disclosed as one bullet in a rewrite changelog is a disclosure practice, not an
  accident.
- Does the 0.3.0 line reach stable, and with what support and upgrade contract?
  The 0.2.x demolition means the next incompatible rewrite would cost operators
  the same again.
- **Adoption remains unproven** (carried as `open_question`). heypi is small and
  early. Its editorial value here is category position, not demonstrated team
  uptake, and the "multiplayer chat agent for your team" claim still has no
  public deployment evidence.
- Which of the five runtimes are actually exercised in practice? Shipping five
  isolation backends in one beta is a lot of surface for a project this size to
  keep honest.

## What to watch next

- **Whether the identity half catches up to the enforcement half.** This is the
  single change that would make heypi's governance claim complete rather than
  conditional, and it is the reason this profile is not simply positive.
- **Whether the beta line stabilizes.** A `-beta.N` git tag with no release page
  is a thin surface to run a team's shared agent on.
- **Pi dependency churn.** The delegation split is elegant and it means Pi's
  breaking changes are heypi's breaking changes.
- **Whether the durability disclaimers hold** now that approval recovery, queue
  dispatch, and schedule claims have all been hardened. A project that keeps
  repairing recovery is a project discovering it needs one.
- **Any move toward a managed or multi-tenant surface**, which would change the
  "an app you own" positioning that is currently the clearest reason to pick it.

## Profile hygiene

This profile follows the discipline in
[METHOD.md](../../METHOD.md#the-object-grammar): every concrete claim in the
prose carries an inline source link, and posture sections cite finding IDs when
naming a specific feature, behavior change, or cross-project comparison.
Cross-project editorial belongs in the weekly digest; the contrasts here are
scoped to locating heypi.

Note on `evidence_floor: official_docs` despite `surface_class:
open_source_commits`: heypi's operator-visible behavior is canonically described
in maintainer-authored docs, which for the 0.3.0 line live in the repository at
`packages/heypi/docs/` and are cited above pinned to the `0.3.0-beta.2` commit
rather than to the live site. Version and channel claims are sourced at
`release_note` precision from annotated tags and the CHANGELOG; per-change claims
at `commit` precision.

Note on this revision, and it is a large one. The `claims:` block holds the
register from the 2026-06-23 introduction run, taken against the 0.2.x line. The
0.3.0-beta.0 rewrite is **intentionally incompatible** with that architecture,
configuration, persistence, and package layout, so several of those claims
describe a codebase that no longer exists -- the 0.2.0-era adapter permissions,
admin panel, and secret-storage specifics in particular should be read as
historical rather than current until a future cycle re-registers them. Three hold
and were re-verified against `0.3.0-beta.2`: heypi is still a governance shell
built on Pi, approvals are still not required by default, and the project still
ships tags with no GitHub Releases. All 2026-07-02 to 2026-07-27 material is
carried in prose with pinned receipts and is not registered as claims. One
receipt-hygiene note: the CHANGELOG dates all three betas 2026-07-21 while the
git tagger timestamps put `beta.1` and `beta.2` at 2026-07-22T01:35Z. The git
object timestamps are authoritative; nothing material turns on the difference.
