---
schema_version: bitter.frontier_profile.v0
profile_id: openclaw
label: OpenClaw
owner: OpenClaw
source_contract: sources/openclaw.yml
homepage: https://openclaw.ai
docs: https://docs.openclaw.ai/
tagline: "The fixes are real, and they are on a channel you are probably not running."
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
last_updated: 2026-07-27
last_full_review: 2026-07-27
claims:
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
    status: active
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
  use_for: "Teams running their own bridge between chat or voice platforms and an agent, where the data has to stay on-prem and the operator wants to scope what any individual agent can say back, in which thread, in which channel. The stable tag v2026.7.1 adds session-scoped grants for external harnesses, so an outside tool can be bound to one Gateway session instead of holding process-wide credentials."
  avoid_for: "Anything where the workspace root is your containment barrier. A path built from a symlink plus `..` reads outside the workspace while the sandbox assertion reports success, and that fix is in no release on any channel. Also avoid relying on channel allowlists as your authority model on stable or on the npm default: the fix separating channel access from global command ownership is thirteen days old and beta-only. And do not cite a GitHub release as your version -- state the npm version, because the two disagree."
  watch_next: "Whether the stable line rejoins main or keeps forking with its own unattributed commits; whether the beta tags that carry the privilege-escalation and ACP fixes ever become the npm default; and whether atomic fs-safe adoption closes the check-to-use window the sandbox fix leaves open."
---

# OpenClaw

## Operator Read

Two facts should govern how you read anything else about OpenClaw right now,
including this profile.

**The version you install is not the version on the releases page.** As of
2026-07-27, `npm install openclaw` gives
[`2026.7.1-2`](https://www.npmjs.com/package/openclaw/v/2026.7.1-2), an untagged
respin published 2026-07-18 with no git tag, no GitHub release, no release
notes, and no `gitHead` -- there is no published commit pointer for the artifact
most users actually run. Two respins went out twenty-eight minutes apart that
morning. Meanwhile `v2026.7.2-beta.4` and `v2026.7.2-beta.5` are real git tags
with no GitHub release at all, and an undocumented `extended-stable` line sits
at [`2026.6.33`](https://www.npmjs.com/package/openclaw/v/2026.6.33). State your
OpenClaw version as an npm version. A release page will describe software nobody
is running.

**The stable tag is not cut from main.**
[`v2026.7.1`](https://github.com/openclaw/openclaw/releases/tag/v2026.7.1) points
at commit `2d2ddc43d`, and the
[comparison against main](https://github.com/openclaw/openclaw/compare/b81666ca6af25c86cc099983a4358cdc5ea9ced8...v2026.7.1)
shows the stable line forked on 2026-07-08 and then took 215 commits of its own,
none carrying a pull-request number. So a change merged to main on 2026-07-10 is
genuinely absent from a tag published on 2026-07-13, and reasoning from merge
dates gives you the wrong answer about your own build. Every channel call below
was resolved against the maintainers' PR manifest and the fork point, not the
calendar.

Those two facts are why this window reads the way it does. A confirmed workspace
sandbox escape is fixed in no release on any channel. A privilege escalation
from channel-allowlist membership to global command authority merged on
2026-07-14 and is still not in stable. Two approval defaults were deliberately
loosened, on beta only. And
[2110 commits](https://github.com/openclaw/openclaw/compare/v2026.7.2-beta.3...main)
separate the newest GitHub-published preview from main.

The read to take away is narrow, and it is not that OpenClaw is careless. The
project ships a large, sustained volume of real security work, and its thesis --
familiar access with the authority left visible -- is still the right one. The
problem is that the fixes and the installable artifact are on different channels,
and nothing on the surfaces a normal operator reads will tell you which one you
have.

## The Sandbox Check That Returned Success

[PR #113405](https://github.com/openclaw/openclaw/pull/113405) (merged
2026-07-27) documents a reproduced probe on a fresh `origin/main`: a POSIX
workspace path of the form `sub/up/../outside/secret.txt`, where `sub/up` is a
symlink to `..`, reads a planted sibling file *while* `assertSandboxPath` returns
success and reports the normalized in-root path `sub/outside/secret.txt`. The
shipped read, write, and edit tools all route filesystem operations through the
same `@openclaw/fs-safe` `Root`.

The maintainers are candid about the fix in a way worth quoting back: it is
defense-in-depth and it is not race-safe. It blocks the demonstrated escape at
validation time, it does not close the check-to-use window, and a symlink
validated as in-root can still be swapped before a later operation on the raw
path. Atomic adoption is tracked in
[#114382](https://github.com/openclaw/openclaw/issues/114382) and the broader
work in [#113705](https://github.com/openclaw/openclaw/issues/113705).

The operator consequence is one sentence: on every current OpenClaw release, on
every channel, the workspace boundary is a hygiene measure and not a containment
barrier. Treat what the agent can reach as what the process can reach. The
[signal](/signals/2026-07-27-openclaw-sandbox-check-returns-success-while-escaping/)
carries the upgrade decision on its own.

## Channel Membership Was Global Command Authority

The window's highest-severity authority fix, and the clearest illustration of
the channel problem. A sender allowed to use one channel could be treated as a
global command owner; with config commands enabled that permitted owner-gated
mutations such as `/allowlist` and `/config`.
[PR #107403](https://github.com/openclaw/openclaw/pull/107403) separates
transport-level command access from global owner authority: only an explicit
`commands.ownerAllowFrom` identity or an internal `operator.admin` session
grants owner status, owner wildcards are ignored consistently with the
documented contract, and doctor treats wildcard-only owner configuration as
missing. The PR carries a before/after Telegram proof in which an
`allowFrom`-listed non-owner runs `/activation always`: accepted on main,
refused on the branch.

It merged 2026-07-14. Thirteen days later it is diverged from `v2026.7.1`,
absent from that release's PR manifest, and present only in the beta line. If
your OpenClaw is on stable or on the npm default, a channel allowlist is not an
authority boundary.

There is a tell that this is being hit in the field rather than found in review:
the maintainers also
[wrote the trap down in prose](https://github.com/openclaw/openclaw/pull/113692),
documenting Discord channel-allowlist and ambient room-event pitfalls. That
documentation is itself main-unreleased.

## What Reached Stable

`v2026.7.1` (published 2026-07-13) is the one clean promotion of the window, and
it is a good one. The scoped-capability work the previous cycle flagged as
beta-only is now in a stable tag:
[scoped attach grants](https://github.com/openclaw/openclaw/pull/96351) give
external MCP loopback clients session-scoped Gateway access without process-wide
credentials or permission to impersonate another session;
[`openclaw attach`](https://github.com/openclaw/openclaw/pull/96454) launches an
external harness bound to a Gateway session, keeps credentials out of arguments,
and revokes the grant when the session ends; the
[Control UI shows execution approvals](https://github.com/openclaw/openclaw/pull/100505)
for supported desktop nodes and rejects pending, unsupported, or policy-blocked
requests before they reach the node; and
[mobile pairing is admin-gated](https://github.com/openclaw/openclaw/pull/100157),
with non-admin operators shown a disabled action and an access explanation.
The [docs release page](https://docs.openclaw.ai/releases/2026.7.1) and the
release-body PR manifest agree on all of it.

That is the version to cite for session-scoped external harness access. It is
also the version that does not contain anything in the two sections above.

## What Is Only In Beta

Everything here is `preview-or-beta`, which in practice means the npm `beta`
tag, currently
[`2026.7.2-beta.4`](https://www.npmjs.com/package/openclaw/v/2026.7.2-beta.4),
not the default install. Note that `v2026.7.2-beta.5` exists as a git tag only:
it was never published to npm, so anything that landed there is not installable
on any channel.

- [Requester-scoped MCP server connections](https://github.com/openclaw/openclaw/pull/106359),
  so one session can no longer reach another session's MCP connections
  ([docs follow-up](https://github.com/openclaw/openclaw/pull/113400)).
- [`operator.admin` required to approve `fs.listDir` nodes](https://github.com/openclaw/openclaw/pull/106004)
  and a
  [prototype-pollution guard on migration config merge](https://github.com/openclaw/openclaw/pull/106116).
  Both merged 2026-07-13, after the stable fork and before the stable publish --
  exactly the case where date reasoning misleads.
- [Plugin install provenance warnings](https://github.com/openclaw/openclaw/pull/102197):
  arbitrary executable plugin sources require explicit `--force` acknowledgement
  while trusted ClawHub, bundled, official-catalog, and tracked-update flows stay
  frictionless. On stable, arbitrary executable plugin sources still install
  without the acknowledgement step, which means the trusted-lane distinction
  ClawHub advocates rely on is not enforced there.
- [`/acp sessions` no longer lists every gateway session to non-owner senders](https://github.com/openclaw/openclaw/pull/110745).
  Anyone who enabled ACP on stable or on beta.3 to try the advertised interop is
  running the disclosure.
- [`OPENCLAW_SUPERVISOR_MODE=external`](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.3),
  the first supported way to hand lifecycle ownership to an outside supervisor
  while blocking native service mutation and self-update. This is what a platform
  team needs before putting the Gateway under existing orchestration.
- An exec-approval hardening wave, split across three channels. Beta.4 carries
  [rejection of unsafe explicit approval IDs](https://github.com/openclaw/openclaw/pull/111055),
  [admin required for keyed session model changes](https://github.com/openclaw/openclaw/pull/111651),
  and [scoped exec approval carriers](https://github.com/openclaw/openclaw/pull/111652).
  The tag-only beta.5 adds
  [approval for opaque exec wrappers](https://github.com/openclaw/openclaw/pull/112953)
  plus AWS and GitLab secret redaction. Still on main only:
  [approval for escaped newline shell words](https://github.com/openclaw/openclaw/pull/114134).
  The exec approval gate was bypassable through wrapper binaries and shell-word
  forms, the fixes are spread across three channels, and no single installable
  OpenClaw artifact carries all of them.

Two approval defaults moved the other way in the same line, both documented as
deliberate. Agent-initiated Skill Workshop apply, reject, and quarantine
[now run without an approval prompt by default](https://github.com/openclaw/openclaw/pull/107690),
with `skills.workshop.approvalPolicy: "pending"` available as an opt-in gate --
so on beta the agent can edit its own skill library without asking. And
[curated read-only boolean flags on default stdin-only safe bins are auto-approved](https://github.com/openclaw/openclaw/pull/88953),
with unknown flags, tail follow and retry modes, file operands, and custom
profiles left fail-closed. Check `skills.workshop.approvalPolicy` before moving
to 2026.7.2.

## The Authority Model, Compressed

The standing design is unchanged and remains the reason to choose OpenClaw.
Authority composes across channel, sender, and agent:
[per-sender tool policies](https://github.com/openclaw/openclaw/pull/66933)
restrict dangerous tools by requester identity using canonical channel-scoped
sender keys; per-agent
[`tools.message.crossContext` and `tools.message.actions.allow`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.5)
overrides keep a public-facing agent replying only in the conversation it was
addressed in; [`voice.allowedChannels`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.5)
locks voice joins and bot voice-state moves; and
[ClickClack `allowFrom` allowlists run before agent dispatch](https://github.com/openclaw/openclaw/pull/83741)
rather than blocking actions after the agent has already been influenced.
Pre-dispatch is the correct primitive and OpenClaw picked it.

The accessibility baseline is in the default build, not behind a flag: the
[WCAG 2.1 AA pass](https://github.com/openclaw/openclaw/pull/89822) reached
[stable v2026.6.8](https://github.com/openclaw/openclaw/releases/tag/v2026.6.8)
with a 4.5:1 dark-mode contrast floor, visible keyboard focus rings, and a 12px
minimum font size, and no control or approval surface was hidden to get there.
ClawHub installs
[retain verified source provenance](https://github.com/openclaw/openclaw/releases/tag/v2026.6.9)
surfaced in `skill verify`. Running the other way, and still unresolved:
[automatic Codex plugin approvals](https://github.com/openclaw/openclaw/pull/92625)
shipped in stable v2026.6.9 and remain the one gate in recent memory that
loosened without a documented scope.

Uploaded skill archives are still gated closed behind
[`skills.install.allowUploadedArchives`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.5).
The gate is correct; the trust model behind it is still not public.

## Where It Still Leaks Complexity

The authority model is correct and not yet simple. Per-agent overrides, the
per-sender layer, and the memory-wiki access scopes live in release notes rather
than the main docs. Multi-channel setup cost grows with each platform; the
onboarding wizard handles the first connection cleanly and the second and third
require real operator knowledge. And the release-note evidence floor this profile
uses -- appropriate for OpenClaw's commit volume -- now has a second failure
mode beyond missed intermediate betas: release notes describe a channel that is
not the one npm serves.

One setup-script change still worth checking: `openclaw models auth login
--provider openai` defaults to the ChatGPT and Codex account login flow. API-key
setup remains behind `--method api-key`, but any playbook assuming API-key-first
OpenAI auth needs updating.

*Posture basis: `2026-05-07-openclaw-everyday-agent-surfaces`,
`2026-05-12-openclaw-agent-permissions-and-onboarding`,
`2026-05-13-openclaw-per-sender-tool-policies`,
`2026-05-27-openclaw-content-boundary-hardening-suite`,
`2026-06-23-openclaw-wcag-aa-reaches-stable`,
`2026-06-23-openclaw-clawhub-skill-provenance-stable`,
`2026-06-23-openclaw-codex-auto-plugin-approvals-stable`. The 2026-07-02 to
2026-07-27 material above is carried in prose with inline receipts.*

## Open Questions

- **Answered this window.** The prior cycle asked whether the beta-only scoped
  capability line would promote before we treated it as shipped. It did:
  `v2026.7.1` on 2026-07-13 carries scoped attach grants, `openclaw attach`,
  Control UI execution approvals, and admin-gated mobile pairing. The newer beta
  line did not repeat the trick inside this window.
- **Partially answered.** The plugin and skill trust model advanced: arbitrary
  executable plugin sources now require `--force` while trusted catalog flows
  stay frictionless ([#102197](https://github.com/openclaw/openclaw/pull/102197)).
  It is beta-only, and it does not touch the separate uploaded-archive question --
  signing and sandbox isolation for `allowUploadedArchives` are still
  undocumented.
- Which commit is `2026.7.1-2`? The npm records publish no `gitHead`, so the
  artifact most operators run cannot be mapped to source from public data. This
  is answerable only by the project.
- Is `extended-stable` a supported line with a stated policy, or an internal
  convenience? Its release-tooling commit describes it as a frozen pre-AI
  publish, and there is no documentation.
- Does the forked stable line receive security backports systematically, or only
  whatever the fork happened to include? PR #107403 suggests the latter, but one
  case is not a policy.
- Will atomic `fs-safe` adoption actually close the check-to-use window, and what
  is the interim guidance for operators who treated the workspace root as a
  boundary?
- Codex automatic plugin approvals: what exactly is auto-approved, and can it be
  scoped or disabled? Unanswered since the prior cycle.
- Browser snapshot SSRF policy: default behavior and interaction with
  operator-configured allow-domains are still not in the release notes.

## What To Watch Next

- Whether the stable line rejoins main, or keeps forking and carrying its own
  unattributed commits. This single decision determines whether merge dates ever
  become readable for OpenClaw again.
- Whether the beta tags carrying the privilege-escalation, ACP, and MCP-scoping
  fixes reach the npm default, and how long that takes from merge.
- Whether the untagged respins get release notes, git tags, or a `gitHead`. Any
  of the three would restore the version-to-source mapping.
- Whether the sandbox fix is followed by the atomic work that closes the race,
  and whether the maintainers publish interim guidance in the meantime.
- Whether `skills.workshop.approvalPolicy` and the safe-bin auto-approval
  defaults survive into stable unchanged, and whether the loosening trend
  continues.
- Whether external supervisor mode reaches stable, which is the gate on running
  the Gateway under existing platform orchestration.

## Profile Hygiene

This profile follows the profile discipline defined in
[METHOD.md](../../METHOD.md#the-object-grammar): every concrete claim in the
prose carries an inline source link, and posture sections may interpret freely
but must stay inside what the receipts support. Cross-project editorial belongs
in the weekly digest, not here. Git history is the audit trail; removed claims
live in the diff log.

The `claims:` block records claims promoted from individual findings in earlier
cycles. The 2026-07-02 to 2026-07-27 research produced consolidated harvest and
cross-check artifacts rather than individual finding files, so this window's
material is carried in prose with inline receipts and is not represented in that
block.

Note on evidence_floor: this profile uses `evidence_floor: release_note` despite
`surface_class: open_source_commits`. OpenClaw's commit volume makes individual
commit diff review impractical as the primary harvest method, and release notes
are the highest-precision evidence consistently available at scale. This window
exposed the limit of that choice: OpenClaw's release notes describe a channel
that is not the one its package registry serves, so stable-channel membership is
now resolved against the release-body PR manifest and the stable fork point
rather than against notes or dates.

