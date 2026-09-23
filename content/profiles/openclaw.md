---
schema_version: bitter.frontier_profile.v0
profile_id: openclaw
label: OpenClaw
owner: OpenClaw
source_contract: sources/openclaw.yml
homepage: https://openclaw.ai
docs: https://docs.openclaw.ai/
tagline: "The approval fixes shipped on the default channel. The long-term channel is the one without them, and the defaults widened agent reach on the way."
compared_with:
  - codex
x:
  project: openclaw
  maintainers:
    - handle: onusoz
      name: Onur Solmaz
repo: https://github.com/openclaw/openclaw
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: exec-fix-stable
    finding_id: 2026-09-21-openclaw-the-approved-exec-fix-is-now-in-stable-but-not-on-extended-stable
    last_verified: 2026-09-23
    status: active
  - id: extended-stable-unfixed
    finding_id: 2026-09-21-openclaw-extended-stable-moved-to-a-july-line-that-predates-every-fix-above
    last_verified: 2026-09-23
    status: active
  - id: advisory-batch
    finding_id: 2026-09-21-openclaw-75-advisories-published-in-one-batch-the-exec-approval-family-is-patched-in-2026-8
    last_verified: 2026-09-23
    status: active
  - id: approved-exec-still-unreleased
    finding_id: 2026-08-20-openclaw-approved-exec-fix-still-in-no-release
    last_verified: 2026-08-20
    status: retired
  - id: sandbox-stop-success-while-children-run
    finding_id: 2026-08-20-openclaw-codex-sandbox-stop-can-return-success-while-children-run
    last_verified: 2026-08-20
    status: retired
  - id: channel-recovery-self-healing
    finding_id: 2026-05-07-openclaw-everyday-agent-surfaces
    last_verified: 2026-05-07
    status: active
  - id: live-exec-output-bounded
    finding_id: 2026-05-07-openclaw-everyday-agent-surfaces
    last_verified: 2026-05-07
    status: active
  - id: subagent-security-boundary-docs
    finding_id: 2026-05-07-openclaw-everyday-agent-surfaces
    last_verified: 2026-05-07
    status: active
  - id: per-agent-message-restrictions
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-05-12
    status: active
  - id: skill-archive-upload-gated
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-05-12
    status: active
  - id: memory-dreaming-cap
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-05-13
    status: active
  - id: cli-onboarding-wayfinding
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-05-12
    status: retired
  - id: voice-channel-allowlist
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-05-12
    status: active
  - id: per-sender-tool-policies
    finding_id: 2026-05-13-openclaw-per-sender-tool-policies
    last_verified: 2026-05-13
    status: active
  - id: memory-wiki-scope-tightening
    finding_id: 2026-05-13-openclaw-per-sender-tool-policies
    last_verified: 2026-05-13
    status: active
  - id: openai-cli-auth-default-shift
    finding_id: 2026-05-13-openclaw-per-sender-tool-policies
    last_verified: 2026-05-13
    status: active
  - id: scoped-compaction-preservation
    finding_id: 2026-05-13-openclaw-per-sender-tool-policies
    last_verified: 2026-05-13
    status: active
  - id: pre-dispatch-sender-allowlists
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-05-27
    status: active
  - id: browser-snapshot-ssrf-policy
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-05-27
    status: active
  - id: system-event-text-sanitization
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-05-27
    status: active
  - id: external-content-wrapping
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-05-27
    status: active
  - id: gateway-auth-ratelimit-default-on
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-05-27
    status: active
  - id: skill-workshop-and-stable-reliability
    finding_id: 2026-06-03-openclaw-stable-reliability-features
    last_verified: 2026-06-03
    status: active
  - id: wcag-aa-control-ui-stable
    finding_id: 2026-06-23-openclaw-wcag-aa-reaches-stable
    last_verified: 2026-06-23
    status: active
  - id: codex-auto-plugin-approvals
    finding_id: 2026-06-23-openclaw-codex-auto-plugin-approvals-stable
    last_verified: 2026-06-23
    status: active
  - id: clawhub-skill-provenance-surfaced
    finding_id: 2026-06-23-openclaw-clawhub-skill-provenance-stable
    last_verified: 2026-06-23
    status: active
  - id: workspace-boundary-fix-stable
    finding_id: 2026-09-21-openclaw-the-workspace-symlink-then-boundary-fix-is-in-stable-not-in-extended-stable
    last_verified: 2026-09-23
    status: active
  - id: sandbox-stop-fix-stable
    finding_id: 2026-09-21-openclaw-the-codex-sandbox-stop-success-fix-and-the-rest-of-the-parent-s-main-only-pile-reached-the
    last_verified: 2026-09-23
    status: active
  - id: defaults-widened-reach
    finding_id: 2026-09-21-openclaw-defaults-widened-agent-reach-several-times-each-on-a-named-stable
    last_verified: 2026-09-23
    status: active
  - id: operation-bound-grants
    finding_id: 2026-09-21-openclaw-approval-ux-grant-once-bind-to-the-operation-revoke-later
    last_verified: 2026-09-23
    status: active
  - id: release-gates-waived
    finding_id: 2026-09-21-openclaw-seven-stables-in-20-days-with-release-gates-visibly-waived
    last_verified: 2026-09-23
    status: active
  - id: upgrade-breaking-changes
    finding_id: 2026-09-21-openclaw-breaking-changes-an-upgrader-will-hit
    last_verified: 2026-09-23
    status: active
  - id: one-prompt-install
    finding_id: 2026-09-21-openclaw-distribution-one-prompt-install-a-linux-desktop-app-a-linux-update-channel
    last_verified: 2026-09-23
    status: active
posture_basis:
  capability:
    - 2026-05-07-openclaw-everyday-agent-surfaces
    - 2026-05-12-openclaw-agent-permissions-and-onboarding
    - 2026-05-13-openclaw-per-sender-tool-policies
    - 2026-05-27-openclaw-content-boundary-hardening-suite
    - 2026-06-23-openclaw-codex-auto-plugin-approvals-stable
  accessibility:
    - 2026-05-07-openclaw-everyday-agent-surfaces
    - 2026-05-12-openclaw-agent-permissions-and-onboarding
    - 2026-05-27-openclaw-content-boundary-hardening-suite
    - 2026-06-23-openclaw-wcag-aa-reaches-stable
    - 2026-06-23-openclaw-clawhub-skill-provenance-stable
  governance:
    - 2026-05-07-openclaw-everyday-agent-surfaces
    - 2026-05-12-openclaw-agent-permissions-and-onboarding
    - 2026-05-13-openclaw-per-sender-tool-policies
    - 2026-05-27-openclaw-content-boundary-hardening-suite
    - 2026-06-23-openclaw-codex-auto-plugin-approvals-stable
    - 2026-06-23-openclaw-clawhub-skill-provenance-stable
stance:
  use_for: "Teams bridging chat and voice platforms to agents on their own hardware, who want authority scoped by channel, by sender and by agent. Run it on the latest channel at 2026.8.1 or later. Recurring jobs can use standing grants bound to one exact operation instead of a blanket allowlist."
  avoid_for: "Extended-stable 2026.7.35 for anything that depends on the exec approval prompt, the workspace boundary or a clean sandbox stop: it has none of the 2026.8.1 fixes. Treating operator roles as tenant isolation. Treating the workspace root as race-safe containment. Upgrading a shared multi-agent Gateway past 2026.9.2 without resetting session visibility and skill-workshop approval."
  watch_next: "An extended-stable build that contains ab5611f0; race-safe filesystem adoption (#114382); whether more stables ship with qualification checks waived; whether the one-prompt dashboard shows a new user the widened defaults."
---

# OpenClaw

OpenClaw is a self-hosted Gateway that connects chat and voice platforms to
agents, and it is on this watchlist for its authority model. What an agent may
do depends on the channel, the sender and the agent, and allowlists run before
the agent sees the message. The project ships a great deal of real security
work. The hard part is knowing which build carries it.

## Where it stands, 2026-09-21

**Channel.** The install script and docs resolve npm `latest`, which is
2026.9.5. `beta` points at the same build. Seven stables shipped between 31
August (2026.8.1) and 19 September (2026.9.5). Each is a release branch off main
with its own fix commits, so a merge date does not tell you what is in your
build. A fourth channel, `extended-stable`, is
[documented](https://github.com/openclaw/openclaw/blob/v2026.9.5/docs/install/development-channels.md)
as one that "never applies automatically". It sits at 2026.7.35. Give your
version as the npm version.

**Run 2026.8.1 or later.**
[2026.8.1](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1) is the
first stable with the approved-exec fix. It
[binds an approved command](https://github.com/openclaw/openclaw/blob/v2026.8.1/src/infra/system-run-mutable-file-operand.ts)
to the SHA-256 of its script and executable operands and checks them again just
before spawn. The release highlights never mention it. It appears only as PR
#124858 in the contribution list. On older builds, approving a script the agent
can write approved a path, not the bytes that ran. Expect more prompts after
upgrading, because byte-bound durable grants became one-shot.

**Extended-stable is the unfixed line.** The
[2026.7.35 release](https://github.com/openclaw/openclaw/releases/tag/v2026.7.35)
calls itself "our current equivalent to LTS": the end of July "plus critical
security updates". It branches from 2026.7.1-2, not main, and
[lacks the exec fix](https://github.com/openclaw/openclaw/compare/v2026.7.35...ab5611f0be610380fe48803fe4311896ca85806e),
the workspace-boundary fix and the sandbox-stop fix. Two earlier builds, 7.33 and
7.34, reached npm as what the maintainers called "unstable extended-stable
builds" and never got release pages. An operator who picked the long-term line
to be careful ended up on the one without the fixes.

**The workspace root is a validation-time barrier on stable, and only hygiene on
extended-stable.** The symlink-then-`..` escape from
[#113405](https://github.com/openclaw/openclaw/pull/113405), where the sandbox
check reported success while reading outside the root, is
[fixed at 2026.8.1](https://github.com/openclaw/openclaw/blob/v2026.8.1/src/agents/sandbox-paths.ts)
and absent at 2026.7.35. The maintainers' own caveat still applies: the check
runs at validation time and is not race-safe, so a path can be swapped between
the check and its use. Separately, a Unicode-fallback escape that needs no
symlink (GHSA-5rx7-34fw-64qg) is patched in 2026.8.1.

**A clean sandbox stop now means the processes are gone.** From 2026.8.1 the
Codex sandbox
[reaps the process tree](https://github.com/openclaw/openclaw/commit/fd8326c5bf6fcf063fd1ac0d9e87bf032fbfa2dc)
before it reports termination. Earlier builds, including extended-stable, could
report success while child processes kept running.

**Seventy-five advisories, one upgrade target.** On 11 September the project
published 75 advisories in three minutes: 30 high, 40 medium and 5 low, none
with a CVE ID. Most of the exec-approval group is patched in 2026.8.1.
[GHSA-74gc-hg2m-79p9](https://github.com/openclaw/openclaw/security/advisories/GHSA-74gc-hg2m-79p9):
Allow Always on one exact command saved a grant for the path, so the same binary
could later run with any arguments.
[GHSA-ghpx-6xwq-2w4w](https://github.com/openclaw/openclaw/security/advisories/GHSA-ghpx-6xwq-2w4w):
an approved wrapper did not inspect the command inside it.
[GHSA-3mq7-q27j-mq7q](https://github.com/openclaw/openclaw/security/advisories/GHSA-3mq7-q27j-mq7q):
approvals were not tied to the working directory.
[GHSA-wwcw-jfpp-gpxw](https://github.com/openclaw/openclaw/security/advisories/GHSA-wwcw-jfpp-gpxw):
a per-chat `tools.allow` did not restrict Codex's native tools. After you
upgrade, delete the Allow Always entries made before it, because the stored
grant was broader than the one you clicked. Version 2026.7.35 sorts below
2026.8.1, so it falls inside the published vulnerable ranges. The fixes that
matter most here, byte-binding and sandbox stop, have no advisory at all.

**The defaults widened agent reach.** One stable at a time:
[2026.9.2](https://github.com/openclaw/openclaw/releases/tag/v2026.9.2) gives
session tools all-session visibility, allows agent-to-agent access and turns on
Swarm. [2026.9.3](https://github.com/openclaw/openclaw/releases/tag/v2026.9.3)
allows bounded recursive session spawning and turns on CLI agents.
[2026.9.5](https://github.com/openclaw/openclaw/blob/v2026.9.5/CHANGELOG/2026.9.5.md)
allows cross-provider messaging. Skill Workshop approvals default to auto, and
self-learning is automatic from 2026.8.1. The notes say sandbox and explicit
restrictions "remain enforced". On a shared Gateway, set
`tools.sessions.visibility` to `agent` or `self`, and set
`skills.workshop.approvalPolicy: "pending"`, before you trust the old gates.

**Approvals got narrower in the same weeks.** In 2026.8.1, cron jobs can hold a
standing grant for one exact operation. The grant can be inspected and revoked,
and it prompts again when the job changes. The same release's operator roles
are, in its own words, "collaboration controls, not hostile-tenant isolation."
In 2026.8.2, permission changes apply to runs already in flight. In 2026.9.3,
Claude's native Bash honors the exec allowlist.

**Read the release page before auto-updating.** The
[2026.9.4 page](https://github.com/openclaw/openclaw/releases/tag/v2026.9.4)
says its Telegram and Parallels checks were "explicitly waived by the release
owner, not passed". The
[2026.9.5 page](https://github.com/openclaw/openclaw/releases/tag/v2026.9.5)
says "Stable soak waived by operator". From 2026.9.3, upgrade Node to 24.16+ or
26.1+ first, and run `openclaw doctor --fix` after crossing 2026.8.1 to migrate
`codex/*` model refs.

**Why you would still choose it.**
[Per-sender tool policies](https://github.com/openclaw/openclaw/pull/66933),
per-agent
[`tools.message.crossContext`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.5)
limits, and
[allowlists that run before dispatch](https://github.com/openclaw/openclaw/pull/83741)
remain the right primitives. Getting started also got easier.
[2026.9.1](https://github.com/openclaw/openclaw/releases/tag/v2026.9.1) reuses
existing Claude Code or Codex logins and opens the web dashboard from one
prompt, and
[2026.8.2](https://github.com/openclaw/openclaw/releases/tag/v2026.8.2) adds a
Linux desktop app with signature-verified updates.

## What is unresolved

- Whether extended-stable will get the 2026.8.1 approval and boundary fixes. An
  extended-stable tag that contains `ab5611f0` would settle it. Only two
  backports on the 7.x line were checked in the code; the rest are inferred
  from the advisory ranges.
- Race-safe filesystem adoption, tracked in
  [#114382](https://github.com/openclaw/openclaw/issues/114382).
- Whether the one-prompt dashboard shows a first-run user the widened defaults.
  If it does not, the easier start hides authority.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
and this page says what was true on the date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
