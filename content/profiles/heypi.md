---
schema_version: bitter.frontier_profile.v0
profile_id: heypi
label: heypi
owner: Ronan Berder (hunvreus)
source_contract: sources/heypi.yml
homepage: https://heypi.dev/
docs: https://heypi.dev/docs/
tagline: "The best-specified fail-closed approval gate on the watchlist, around an approver identity check that is only a startup warning, on a beta with no commit since 22 July."
compared_with:
  - pi-coding-agent
  - openclaw
  - eve
repo: https://github.com/hunvreus/heypi
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: governance-shell-built-on-pi
    finding_id: 2026-06-24-heypi-governance-shell-on-pi
    last_verified: 2026-06-24
    status: active
  - id: pi-coding-agent-dependency-pin
    finding_id: 2026-06-24-heypi-governance-shell-on-pi
    last_verified: 2026-06-24
    status: retired
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
    status: retired
  - id: adapter-local-permissions-0-2-0
    finding_id: 2026-06-24-heypi-0.2.0-beta-governance-hardening
    last_verified: 2026-06-24
    status: retired
  - id: https-by-default-webhooks-0-2-0
    finding_id: 2026-06-24-heypi-0.2.0-beta-governance-hardening
    last_verified: 2026-06-24
    status: retired
  - id: instructions-rename-0-2-0
    finding_id: 2026-06-24-heypi-0.2.0-beta-governance-hardening
    last_verified: 2026-06-24
    status: retired
  - id: admin-panel-disabled-by-default
    finding_id: 2026-06-24-heypi-admin-panel-and-audit-default-off
    last_verified: 2026-06-24
    status: retired
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
  use_for: "Teams that want one shared chat-ops agent in Slack, Discord or Telegram on a host they own, who will set `admins` and `approvers` explicitly and opt each consequential tool into an approval policy. The approval gate's failure behavior is the best-specified on this watchlist."
  avoid_for: "Anyone who needs fixes to arrive: 0.3.0-beta.2 has been the tip on every channel since 22 July, with no commit since. Anyone on 0.2.x expecting an upgrade path; 0.3.0 removed it. Anyone treating a -beta.N tag as a supported line."
  watch_next: "Any commit at all; whether approver identity becomes enforced rather than warned; whether 0.3.0 reaches stable with an upgrade contract; whether a security fix ever gets an advisory."
---

# heypi

heypi is the part of an agent that says no, packaged separately. Since its
0.3.0 rewrite it runs nothing itself. Per the
[tagged CHANGELOG](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md),
Pi owns model execution, transcripts, tools, extensions and session state;
heypi owns chat transport, policy, resource staging and coordination. It is
a policy shell over a harness, [Pi](/profiles/pi-coding-agent/), that
deliberately declines to govern, which makes it the cleanest test on this
watchlist of whether a policy layer can bind an agent it does not run.

The short read for 2026-09-21: nothing moved. `0.3.0-beta.2` (22 July) is
still the tip of the repository, the tags and npm, and there has been no
commit, release, issue or pull request since. The contract below is sound;
nobody is shipping fixes to it.

## Where it stands, 2026-09-21

**Channel.** [`0.3.0-beta.2`](https://github.com/hunvreus/heypi/commit/436da22ceab0bc4e2db133e8626649b4bf76286d),
on npm as `@hunvreus/heypi@0.3.0-beta.2`, where `latest` points at that
beta. There are no GitHub Releases; the annotated git tag is the ship
signal. There is no stable 0.3.0. Two months without a commit on a beta
that holds approval authority in a team chat means treat it as
unmaintained for now.

**The enforcement half is the best on the watchlist.** The
[approvals doc at the tag](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/approvals.md)
says heypi records `approval_requested` before posting the approval UI and
`approval_resolved` before continuing the tool, and that if either write
fails, the call is blocked. Rejection, timeout, missing adapter UI and
process shutdown all fail closed. You cannot get an executed call with no
approval record, because the record is the precondition, not a side
effect. Policies run at the Pi tool-call boundary: `never`, `always`,
`once`, `when(predicate)`, and `command`, which sorts shell commands into
allow, approve and block patterns.

**The identity half is your config.** Approvals are opt-in per tool: in
the doc's words, "configuring approvers alone does not make tools require
approval." Omit both `admins` and `approvers` and any actor who can reach
the approval UI may respond, with a startup warning as the only guard. In
a shared channel that means the fail-closed machinery faithfully records
that somebody approved and tells you nothing about whether they were
allowed to. Set both lists, then opt in each tool that must gate.

**The admin surface was unauthenticated until 0.3.0.**
[Commit `2dd2456e00`](https://github.com/hunvreus/heypi/commit/2dd2456e00)
("Require auth for exposed admin", 10 July) first shipped in the 21 July
beta. Before it, an admin surface bound beyond loopback served with no
authentication. There is no advisory; the fix is one bullet in the Security
section of a changelog announcing a rewrite. If you exposed it before 21
July, treat what it could reach as disclosed and rotate.

**There is no upgrade from 0.2.x.** The CHANGELOG calls 0.3.0-beta.0
"intentionally incompatible with the previous beta architecture,
configuration, persistence, and package layout," and its Removed section
lists the previous runtime, config format, CLI and admin application, and
the migration path itself. Every 0.2.x deployment is a rebuild.

**What 0.3.0 ships.** A six-package workspace with five isolation
backends: just-bash, Docker (built in), Gondolin, Vercel Sandbox and
Cloudflare Sandbox. The Vercel and Cloudflare packages are long-running
sandbox containers, not serverless functions. Encrypted secret exchange
lets a credential reach a tool without passing through chat; storage at
rest is a separate question, so isolate the runtime workspace. Webhooks
now return once the message is durably stored, keyed on stable message ids,
rather than waiting for the model. heypi still declines crash replay, and unrestricted
host execution is warned about, not blocked.

**The Pi dependency cuts both ways.** Pi's breaking changes are heypi's
breaking changes. Pi's SDK broke twice in nine days in July, and with heypi
silent since, nothing here has been checked against Pi's later releases.

## What is unresolved

- Whether approver identity will ever be enforced rather than warned.
- Whether the audit record becomes queryable and tamper-evident, or stays
  typed events read through local administration.
- Whether 0.3.0 reaches stable, and whether the project is paused or done.
- Adoption. The "multiplayer chat agent for your team" claim still has no
  public deployment behind it.

## Profile hygiene

Dated, not evergreen. This page says what was true on the date at the top;
the latest check, which found no change, is in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/).
The 0.2.x-era claims that the rewrite made obsolete are retired rather than
restated. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
