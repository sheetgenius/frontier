---
schema_version: bitter.frontier_profile.v0
profile_id: hermes-agent
label: Hermes Agent
owner: Nous Research
source_contract: sources/hermes-agent.yml
homepage: https://hermes-agent.nousresearch.com/docs
docs: https://hermes-agent.nousresearch.com/docs
tagline: "The approval decision moved from you to a classifier, and the controls written to bound it are still on main."
compared_with:
  - paperclip
x:
  project: NousResearch
  maintainers:
    - handle: Teknium
      name: Teknium
repo: https://github.com/NousResearch/hermes-agent
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-07-27
last_full_review: 2026-07-27
claims:
  - id: curator-autonomous-skill-maintenance
    finding_id: 2026-05-06-hermes-curator-and-service-surfaces
    last_verified: 2026-05-06
    status: active
  - id: self-improvement-loop-background-review
    finding_id: 2026-05-06-hermes-curator-and-service-surfaces
    last_verified: 2026-05-06
    status: active
  - id: gateway-service-restart-readiness
    finding_id: 2026-05-07-hermes-gateways-skills-and-service-operation
    last_verified: 2026-05-07
    status: active
  - id: long-term-memory-session-key
    finding_id: 2026-05-07-hermes-gateways-skills-and-service-operation
    last_verified: 2026-05-07
    status: active
  - id: pluggable-model-provider-modules
    finding_id: 2026-05-07-hermes-gateways-skills-and-service-operation
    last_verified: 2026-05-07
    status: active
  - id: kanban-durable-multiagent
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-05-12
    status: active
  - id: goal-persistent-cross-turn
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-05-12
    status: active
  - id: security-redaction-on-by-default
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-05-12
    status: active
  - id: platform-channel-allowlists
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-05-12
    status: active
  - id: mistralai-quarantine-graceful-disable
    finding_id: 2026-05-12-hermes-mistralai-quarantine-response
    last_verified: 2026-05-12
    status: active
  - id: pypi-distribution-and-lazy-install
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: active
  - id: native-windows-beta
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: active
  - id: hermes-proxy-credential-router
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: active
  - id: honcho-identity-mapping
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: active
  - id: credential-pool-isolation-fallback
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: active
  - id: supply-chain-advisory-checker
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: active
  - id: v0-15-multi-agent-and-docker-optin
    finding_id: 2026-05-29-hermes-agent-patch-release
    last_verified: 2026-06-03
    status: active
  - id: v0-17-fail-closed-wave-tagged
    finding_id: 2026-06-23-hermes-v0.17.0-reach-release
    last_verified: 2026-06-23
    status: active
  - id: mcp-persistence-0day-mitigation-main-unreleased
    finding_id: 2026-06-23-hermes-0day-mitigation-wave-main-unreleased
    last_verified: 2026-06-23
    status: active
  - id: managed-etc-hermes-scope
    finding_id: 2026-06-23-hermes-managed-scope-etc-hermes
    last_verified: 2026-06-23
    status: active
  - id: background-fanout-subagents-no-wallclock
    finding_id: 2026-06-23-hermes-background-async-subagents-tagged
    last_verified: 2026-06-23
    status: active
posture_basis:
  capability:
    - 2026-05-06-hermes-curator-and-service-surfaces
    - 2026-05-07-hermes-gateways-skills-and-service-operation
    - 2026-05-12-hermes-tenacity-kanban-and-security
    - 2026-05-27-hermes-v0.14.0-foundation-release
    - 2026-06-23-hermes-v0.17.0-reach-release
    - 2026-06-23-hermes-background-async-subagents-tagged
  accessibility:
    - 2026-05-06-hermes-curator-and-service-surfaces
    - 2026-05-07-hermes-gateways-skills-and-service-operation
    - 2026-05-12-hermes-tenacity-kanban-and-security
    - 2026-05-27-hermes-v0.14.0-foundation-release
    - 2026-06-23-hermes-v0.17.0-reach-release
  governance:
    - 2026-05-06-hermes-curator-and-service-surfaces
    - 2026-05-07-hermes-gateways-skills-and-service-operation
    - 2026-05-12-hermes-tenacity-kanban-and-security
    - 2026-05-12-hermes-mistralai-quarantine-response
    - 2026-05-27-hermes-v0.14.0-foundation-release
    - 2026-06-23-hermes-0day-mitigation-wave-main-unreleased
    - 2026-06-23-hermes-managed-scope-etc-hermes
    - 2026-06-23-hermes-background-async-subagents-tagged
stance:
  use_for: "A multi-platform gateway you run and inspect yourself. As of v2026.7.20 one bot token routes specific guilds, channels, and threads to separate profiles with isolated config, skills, memory, and secrets; a durable delivery ledger means a gateway crash no longer discards an answer you already paid for; and every delegated subagent writes a live transcript you can tail while it runs. Vault-backed secrets (Bitwarden, 1Password) replace the plaintext `.env` as the default credential path."
  avoid_for: "Unattended work where you must be the approver. From v2026.7.20 the shipped default is `approvals.mode: smart`, so a model reviews each flagged command unless you pin `manual` -- and the policy override, denial circuit breaker, and dangerous-command detectors written for that default are in no tag. Also avoid it where a compromised Docker sandbox must not yield usable credentials: the egress firewall that makes lifted tokens worthless outside the box is on main and shipped in no release. Still not IdP or role-mapping tooling; the centralized control is an admin-pinned `/etc/hermes` config layer, not SSO."
  watch_next: "Whether the smart-approval policy override, the consecutive-denial circuit breaker, `hermes approvals suggest`, and the docker-daemon-redirect and recursive-`rm` detectors reach a tagged binary; whether the egress firewall re-land is tagged and stays default-off; and whether the 1712-commit gap between the newest tag and main narrows or is simply the normal state of this project."
---

# Hermes Agent

## Operator Read

The default approver in Hermes is no longer you. As of
[v0.19.0, "The Quicksilver Release", tag v2026.7.20](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.20)
(published 2026-07-20),
[`approvals.mode` defaults to `smart`](https://github.com/NousResearch/hermes-agent/pull/62661)
for new and default configurations: a language model assesses each flagged
command instead of a person approving it. That is a defensible design and
Hermes documents it plainly. The problem is the sequencing. The operator policy
override, the consecutive-denial circuit breaker, the `approvals suggest`
command, and the detectors for docker daemon redirection and recursive `rm`
were all written for that default and all merged after the tag. None of them is
in a release. **The binary that moved the decision off the human is the binary
without the guardrails.**

The same window has the cleanest merged-is-not-released case we have recorded.
Hermes's strongest credential-containment control, an egress firewall that makes
tokens lifted from a compromised sandbox useless anywhere else, was
[merged on 2026-07-04](https://github.com/NousResearch/hermes-agent/pull/30179),
[reverted twelve minutes later](https://github.com/NousResearch/hermes-agent/pull/58489),
and the revert is what shipped in v2026.7.20. It
[re-landed on main on 2026-07-24](https://github.com/NousResearch/hermes-agent/pull/70848)
and is still untagged.

Read every claim below by its channel, because the distance between the two is
large:
[1712 commits](https://github.com/NousResearch/hermes-agent/compare/v2026.7.20...main)
separate the newest tag from main, accumulated in seven days. Hermes remains a
broad-surface personal agent across twenty-plus messaging platforms, voice,
browser, and mobile, and the coordination work underneath it is serious. But
the tag you install is a historical artifact of a fast branch, and this window
that gap sat on top of the approval gate itself.

## The Default That Moved

[PR #62661](https://github.com/NousResearch/hermes-agent/pull/62661) (merged
2026-07-12) carries its own before/after table: the default moves from `manual`
to `smart`, and the smart path narrows from "approve this detector pattern for
the session" to "approve this command only," so a later command matching the
same broad pattern gets its own review rather than riding a session-wide pass.
Explicit `manual` and `off` are unchanged. The change is absent from
`v2026.7.1` and `v2026.7.7` and present in `v2026.7.20`, resolved by ancestry
rather than by merge date.

The action is one line of config and it is worth taking deliberately: set
`approvals.mode` yourself instead of inheriting it. If you want a person on the
gate, `v2026.7.7.2` (v0.18.2) is the newest tag whose default is still
`manual`.

What is not in any tag is everything built to bound the new default:
[`approvals.smart_policy`](https://github.com/NousResearch/hermes-agent/pull/72186)
for operator-customizable review policy, a
[consecutive-denial circuit breaker](https://github.com/NousResearch/hermes-agent/pull/72203),
[`hermes approvals suggest`](https://github.com/NousResearch/hermes-agent/pull/72259)
mining approval history into allowlist proposals, an
[approval requirement for docker and podman daemon-redirect commands](https://github.com/NousResearch/hermes-agent/pull/71092),
a [detector for recursive `rm` when the flags follow the operands](https://github.com/NousResearch/hermes-agent/pull/68996),
and a [restored session approval tier for flagged prompts](https://github.com/NousResearch/hermes-agent/pull/68664).
Every one is ahead of `v2026.7.20`.

There is one approval control that does hold in the shipped binary, and it is
the right place to encode a prohibition you never want negotiated:
[user-defined deny rules block commands even under yolo mode](https://github.com/NousResearch/hermes-agent/pull/59164),
and [`/deny <reason>`](https://github.com/NousResearch/hermes-agent/pull/54518)
relays the refusal back to the agent so it course-corrects instead of retrying
blind. Both shipped in `v2026.7.7`.

One more fact about this change, stated with its bound. Across the 35 public
claims about Hermes we adjudicated for this window, not one mentions the
approvals default, smart approvals, auto-approval, or a changed gate. The same
sweep captured a stale installer, a Telegram gateway crash, a WSL2 database
corruption, and a Discord routing complaint. That is a statement about the set
we harvested, not proof that nobody anywhere noticed. It is still the shape an
operator should plan around: nobody is going to tell you when a default like
this moves. See the
[signal](/signals/2026-07-27-hermes-approvals-default-flipped-without-guardrails/)
for the upgrade decision on its own.

## The Egress Firewall That Shipped As A Revert

The mechanism is good and worth understanding even though you cannot yet run
it in a release. Docker sandboxes receive per-provider stand-in proxy tokens
under the standard environment names; a managed iron-proxy daemon at the
network boundary swaps them for real credentials on the way out. A token lifted
from a compromised sandbox is then worthless anywhere else. It is disabled by
default behind `hermes egress setup` and `hermes egress start`, and the re-land
records fail-closed behavior: with `proxy.enabled: true`, the daemon down, and
`enforce_on_docker`, the call raises rather than falling through.

The timeline is the finding.
[Merged 2026-07-04T20:29:24Z](https://github.com/NousResearch/hermes-agent/pull/30179).
[Reverted 2026-07-04T20:41:25Z](https://github.com/NousResearch/hermes-agent/pull/58489),
twelve minutes later, and the v0.19.0 notes list the revert under "Reverted in
this window (for the record)."
[Re-landed 2026-07-24T16:49:01Z](https://github.com/NousResearch/hermes-agent/pull/70848)
and ahead of the tag. If you are running `v2026.7.20`, you have the revert.
Public announcements of the feature describe main, not a release.

## What The Tags Did Give You

`v2026.7.7` (2026-07-08) is the credential-boundary tag. It carries Vertex
credentials
[stripped from the subprocess environment](https://github.com/NousResearch/hermes-agent/pull/56582),
[six P1 hardening fixes salvaged in one pass](https://github.com/NousResearch/hermes-agent/pull/57660)
(browser guards, MEDIA anchoring, `.env` lockdown, delegate ACP transport,
matrix sync isolation), media-tool local reads
[routed through the shared credential-read guard](https://github.com/NousResearch/hermes-agent/pull/58709),
a [webhook body-cap sweep](https://github.com/NousResearch/hermes-agent/pull/59215),
and [CI untrusted refs passed through the environment](https://github.com/NousResearch/hermes-agent/pull/57842)
rather than shell interpolation. It also carries the credential change that
matters most day to day: a
[pluggable `SecretSource`](https://github.com/NousResearch/hermes-agent/pull/59498)
that reads keys from Bitwarden and 1Password (`op://` references) at load time
across multiple vaults, with deterministic precedence, conflict warnings, and
per-variable provenance. The plaintext `.env` is now the legacy path, and you
can audit which vault supplied which credential. Separately, a plugin
[`pre_tool_call` approve action can escalate to a human gate](https://github.com/NousResearch/hermes-agent/pull/60504),
which makes a plugin a governance surface and worth reviewing as one.

`v2026.7.20` is the delegation and durability tag. `delegate_task` dispatches
now return
[live transcript files](https://github.com/NousResearch/hermes-agent/pull/67479)
you can tail the moment subagents launch, one human-readable log per child
carrying every tool call, result, and streamed reply; background delegation
completions became
[durable across process restart](https://github.com/NousResearch/hermes-agent/pull/63494)
through an ownership-checked ledger. That turns fan-out from a trust exercise
into an auditable one, and it creates a new log surface holding whatever the
child saw, which is why the same tag also
[redacts credentials in live subagent transcripts](https://github.com/NousResearch/hermes-agent/pull/67635)
and stops
[mounting master credential stores into skill sandboxes](https://github.com/NousResearch/hermes-agent/pull/67640).
A [durable delivery-obligation ledger](https://github.com/NousResearch/hermes-agent/pull/67181)
records final responses in `state.db` around the platform send and redelivers
on next boot, closing a P1 window in which a gateway death between generating a
response and confirming delivery lost an answer you had already paid for.
Unexplained missing replies before `v2026.7.20` now have a named cause.

The same tag ends the standing reason to run several gateways.
[Profile-based inbound routing](https://github.com/NousResearch/hermes-agent/pull/64835)
lets one multiplexed gateway on a single bot token send specific guilds,
channels, or threads to different profiles, each with isolated config, skills,
memory, and secrets, and a
[multiplex hardening pass](https://github.com/NousResearch/hermes-agent/pull/65700)
means one misconfigured profile no longer takes down the whole gateway. Secret
and memory isolation is now expressible per channel.

One loosening in the same tag, flagged rather than buried: the
[browser eval denylist became opt-in](https://github.com/NousResearch/hermes-agent/pull/65923).
Teams that treated it as a default guardrail now have to set it explicitly.
`computer_use` gained a
[verify-then-escalate ladder](https://github.com/NousResearch/hermes-agent/pull/67123)
in the same release.

## The Tag With No Notes

Two of the window's three tags are worth knowing about mainly as a reading
problem. [`v2026.7.7`](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.7)
is described by its own maintainers as an infrastructure-driven patch tag cut so
downstream consumers have a stable point, not a curated release. It carries
roughly 660 merged pull requests with no notes, and the maintainers say the
readable account will arrive with v0.19.0 -- which it did, twelve days later.
[`v2026.7.7.2`](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.7.2)
is a same-day patch that unpins the WhatsApp Baileys dependency from a git
commit to a published release so Docker builds resolve. Anyone who upgraded on
2026-07-08 ran 660 merges whose only description arrived on 2026-07-20.

A date-discipline note that matters if you are reconstructing this yourself:
both release bodies print "Release Date: July 7, 2026" while the API publish
timestamps are 2026-07-08 UTC. The timestamp governs.

## Still Untagged Besides The Approvals Wave

Four more security fixes sit ahead of `v2026.7.20`:
[DNS-pinned SSRF-safe fetches with a Slack CDN allowlist](https://github.com/NousResearch/hermes-agent/pull/70193),
a [lock on the public credential-pool query surface](https://github.com/NousResearch/hermes-agent/pull/70154),
a fix to
[stop printing secret names during environment load](https://github.com/NousResearch/hermes-agent/pull/69054),
and a correction that
[stops masking prose words that merely embed a secret keyword](https://github.com/NousResearch/hermes-agent/pull/67776).
If your Hermes fetches URLs an outsider can influence, main and `v2026.7.20`
differ on a security boundary.

## Coordination And Delegation

The durable-coordination bet is unchanged and still the reason to take Hermes
seriously for multi-worker work. The
[Kanban board](https://github.com/NousResearch/hermes-agent/pull/17805) reclaims
stale workers by heartbeat, blocks failed exits, detects zombie processes on
both platforms, and bounds retries per task. The
[hallucination gate](https://github.com/NousResearch/hermes-agent/pull/20232)
checks `created_cards` IDs and rejects phantom and cross-worker claims before a
worker can move state, with an audit event recorded. It is an integrity check on
card references, not a verifier of work quality.
[`/goal`](https://github.com/NousResearch/hermes-agent/pull/18262) locks the
agent onto a target that survives context compression and turn-budget
management; pair it with the gate when individual workers should not be able to
abandon their assignment.

Background fan-out remains the sharpest autonomy edge.
[`delegate_task(background=true)`](https://github.com/NousResearch/hermes-agent/pull/40946)
returns a handle immediately and re-enters the conversation when it finishes;
[fan-out](https://github.com/NousResearch/hermes-agent/pull/49734) extends that
to N parallel subagents with one consolidated return and makes backgrounding
automatic for top-level delegations. The default wall-clock timeout was
[removed](https://github.com/NousResearch/hermes-agent/pull/45149) and has not
been replaced. A heartbeat and inactivity backstop still fires on a wedged
worker, so this is not "no runaway detection." What is missing is a wall-clock
or cost ceiling on a *productively busy* runaway. This window improved what you
can see (live transcripts) and what survives a crash (durable completions), not
what stops a long one.

## Governance Boundaries

Four controls define the current authority model, and they do not live in one
document.

- **Approvals.** `smart` by default from `v2026.7.20`; `manual` and `off`
  explicit. Deny rules hold under yolo mode. The policy override and circuit
  breaker are on main.
- **Admin-pinned config.** The
  [managed `/etc/hermes` scope](https://github.com/NousResearch/hermes-agent/pull/49098)
  (tagged since `v2026.6.19`) reads an administrator-pushed, user-immutable
  layer of config and secrets from a root-owned system directory that wins
  per-leaf-key over the user's `~/.hermes/config.yaml` and `~/.hermes/.env`. IT
  can fix a baseline (provider, shared base URL, `security.redact_secrets`) a
  non-root user cannot override. This is a policy pin, not identity: there is
  still no SSO or IdP role mapping.
- **Redaction.**
  [On by default since v0.13.0](https://github.com/NousResearch/hermes-agent/pull/21193).
  Pipelines that depend on raw agent output need a migration plan.
- **Scope narrowing.**
  [`allowed_channels` / `allowed_chats` / `allowed_rooms`](https://github.com/NousResearch/hermes-agent/pull/21251)
  limit which Slack, Telegram, Mattermost, Matrix, or DingTalk channels the
  agent answers in. Per-profile routing now sits above this for operators who
  want isolation rather than only restriction.

## Known Limits

The Kanban gate is structural, not semantic: it does not verify result quality,
work completeness, or its own false-positive rate under concurrent multi-worker
load, and the mechanism is still not fully described in official docs. `/goal`
survival semantics under compression are unspecified. The governance map --
which controls fail closed, which are empty until configured, which require
opt-in -- is not documented in one place, and the Curator skill protection tiers
are described as defense-in-depth without published rules. Curator itself
remains an opt-in bet: it grades, consolidates, and prunes the agent's own skill
layer on a
[default seven-day cycle](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.30),
with `logs/curator/run.json` and `REPORT.md` as your review surface. That trade
moves your attention from hand-cleaning skills to reviewing Curator output; it
does not remove it.

*Posture basis: `2026-05-06-hermes-curator-and-service-surfaces`,
`2026-05-07-hermes-gateways-skills-and-service-operation`,
`2026-05-12-hermes-tenacity-kanban-and-security`,
`2026-05-12-hermes-mistralai-quarantine-response`,
`2026-05-27-hermes-v0.14.0-foundation-release`,
`2026-06-23-hermes-v0.17.0-reach-release`,
`2026-06-23-hermes-0day-mitigation-wave-main-unreleased`,
`2026-06-23-hermes-managed-scope-etc-hermes`,
`2026-06-23-hermes-background-async-subagents-tagged`. The 2026-07-02 to
2026-07-27 material above is carried in prose with inline receipts.*

## Open Questions

- **Answered this window.** The June 21-22 MCP-persistence mitigation wave that
  sat main-unreleased for a full cycle reached a tag: `v2026.7.1` (2026-07-01)
  closed it along with the credential-exfiltration, Slack-token redaction,
  browser-metadata, and session-scope work, and left nothing from that wave
  behind. The carry-forward pattern we flagged did resolve. It then repeated
  one binary later with the approvals wave.
- What does the smart approval reviewer do when it cannot reach a model --
  refuse, prompt, or allow? Nothing in the release record states the fail
  direction, and it is the single most consequential undocumented behavior in
  the shipped default. A local probe with the provider unreachable would settle
  it.
- Can an operator audit what the smart reviewer decided and why? The mechanism
  that would answer this (`approvals suggest`, mining approval history) is on
  main and in no tag.
- [`hermes proxy`](https://github.com/NousResearch/hermes-agent/pull/25969),
  the local OpenAI-compatible endpoint that lets wire-compatible clients route
  through whichever provider the operator is signed into, binds to
  `--host 127.0.0.1` by default and strips client `Authorization` headers before
  attaching Hermes credentials upstream. The PR specifies no protection model
  for a non-loopback bind. Until one exists, treat it as a credential router
  exposed to anyone who can reach the address the moment it leaves loopback.
- `hermes proxy` provider scope: Nous Portal shipped as the initial routing
  provider with "more providers later" framed. Which arrive, and whether any
  need auth shapes that complicate the header-strip pattern, is open.
- Whether background fan-out regains a wall-clock or cost ceiling, or the
  heartbeat backstop remains the only bound.
- Whether the managed `/etc/hermes` scope becomes a real organizational control
  surface rather than a single-host config pin.
- Whether lazy adapter install can leave a security-relevant path degraded at
  runtime before the backend is installed.
- What the Kanban gate does *not* verify, and how `/goal` survives compression.
  Both are still undocumented.

## What To Watch Next

- Whether the smart-approval containment wave (`smart_policy`, circuit breaker,
  `approvals suggest`, docker-daemon-redirect and recursive-`rm` detectors)
  reaches a tag, and whether that tag keeps `smart` as the default.
- Whether the egress firewall re-land is tagged, and whether it stays
  disabled-by-default when it gets there.
- Whether the 1712-commit gap between tag and main narrows, or whether Hermes
  is simply a project whose released artifact is permanently a week behind its
  own security work.
- Whether the untagged SSRF and credential-surface fixes ship before anyone
  running the tag is caught by the boundary they close.
- Whether background fan-out gets a time or cost bound to match its new
  observability.
- Whether the fast-moving approval surface gets a single documented governance
  map, which is the cheapest fix available for the whole class of confusion
  above.

## Profile Hygiene

This profile follows the profile discipline defined in
[METHOD.md](../../METHOD.md#the-object-grammar): every concrete claim in the
prose carries an inline source link, and posture sections may interpret freely
but must stay inside what the receipts support.

The `claims:` block records claims promoted from individual findings in earlier
cycles. The 2026-07-02 to 2026-07-27 research produced consolidated harvest and
cross-check artifacts rather than individual finding files, so this window's
material is carried in prose with inline receipts and is not represented in that
block. Channel calls in this window were resolved by git ancestry against each
tag, not by merge date. All evidence is at or above the `release_note` floor.

