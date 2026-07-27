# Harvest -- hermes-agent (primary sources)

Window: 2026-07-02 to 2026-07-27. Source contract: `sources/hermes-agent.yml`.
Repo: https://github.com/NousResearch/hermes-agent

Method note. Every channel call below is resolved by git ancestry against the
tag, not by merge date. Hermes cuts tags from `main` (`target_commitish: main`
on every in-window release), so `compare/<tag>...<sha>` returning `behind`
means the commit is an ancestor of the tag and therefore shipped in it;
`ahead` means it is not in the tag. All dates are the GitHub API
`published_at` / `merged_at` ISO timestamps in UTC.

Baseline carried in: prior digest recorded `v2026.7.1` (2026-07-01) as the tag
that closed the MCP-persistence, credential-exfiltration, Slack-token
redaction, browser-metadata and session-scope wave. Nothing from that wave was
left main-unreleased, so there is no prior-window main-unreleased Hermes item
to resolve this window. The prior-window item that did move is the egress
firewall, covered in section 7.

---

## 1. Three tags shipped in the window; v0.19.0 is the one that matters

Hermes tagged three releases in the window:

- `v2026.7.7` (v0.18.1), published `2026-07-08T01:15:00Z`
- `v2026.7.7.2` (v0.18.2), published `2026-07-08T03:11:22Z`
- `v2026.7.20` (v0.19.0, "The Quicksilver Release"), published `2026-07-20T18:35:55Z`

Receipts:
- https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.7
- https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.7.2
- https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.20

Date discipline note. The `v2026.7.7` and `v2026.7.7.2` release bodies both
print `Release Date: July 7, 2026`, but the API `published_at` values are
`2026-07-08T01:15:00Z` and `2026-07-08T03:11:22Z`. Per house rule the ISO
timestamp governs: both tags are 2026-07-08 UTC, not 2026-07-07.

The maintainers state plainly in the `v2026.7.7` body that it is an
infrastructure-driven patch tag rather than a curated release, cut so
downstream consumers (Docker images, hosted deployments, PyPI) have a stable
point, and that full notes for the window would ship with v0.19.0. The
`v2026.7.7.2` body is a same-day patch carrying one change: unpinning the
WhatsApp Baileys dependency from a git commit to published `7.0.0-rc13`
(PR #60643), so Docker image builds resolve.

Release channel: `tagged-release` (all three).

Operator consequence: if you upgraded on 2026-07-08 you took roughly 660
merged PRs with no curated notes, so the only readable account of what you
already run is the v0.19.0 body published twelve days later.

## 2. Smart approvals became the default (authority change)

`approvals.mode` now defaults to `smart` for new and default configurations.
An LLM reviewer assesses each flagged command independently instead of the
operator approving every one. The PR's own before/after table records the
default moving from `manual` to `smart`, and the smart-approval scope
narrowing from "detector pattern for the session" to "current command only" --
so a later command matching the same broad pattern gets its own review rather
than riding a session-wide pass. Explicit `manual` and `off` modes are
unchanged.

Receipt: https://github.com/NousResearch/hermes-agent/pull/62661
(merge commit `62a76bd3d5a658b84b3dafff6233f13e2522b95e`, merged
`2026-07-12T07:25:56Z`)

Channel resolution: `ahead` of `v2026.7.1`, `ahead` of `v2026.7.7`, `behind`
`v2026.7.20`. It reached a tag only on 2026-07-20.

Release channel: `tagged-release` (first in `v2026.7.20`).

Operator consequence: upgrading past `v2026.7.20` silently moves the approval
gate from a human to a model unless you pin `approvals.mode: manual`.

## 3. Deny rules that hold under yolo mode, and a denial reason the agent sees

Two paired approval changes landed early in the window. User-defined deny
rules block commands even under yolo mode, and `/deny <reason>` relays the
refusal reason back to the agent so it course-corrects instead of retrying
blind.

Receipts:
- https://github.com/NousResearch/hermes-agent/pull/59164 (`e2fe529efbe1d2f36d2b7c4740c59dd81715dc58`, merged `2026-07-05T21:48:40Z`)
- https://github.com/NousResearch/hermes-agent/pull/54518 (`cb6c47af08f2397424f027a01991a84dc99be3ee`, merged `2026-07-05T09:22:09Z`)

Channel resolution: both `behind` `v2026.7.7` and `behind` `v2026.7.20`.

Release channel: `tagged-release` (shipped in `v2026.7.7`, 2026-07-08).

Operator consequence: a deny rule is now the only approval control that yolo
mode cannot override, which makes it the correct place to encode
non-negotiable prohibitions.

## 4. Plugin `pre_tool_call` approve escalation re-landed

A plugin `pre_tool_call` approve action can escalate to a human gate. The
v0.19.0 notes record this as reverted mid-window and then re-landed with rule
keys and working gateway notification.

Receipt: https://github.com/NousResearch/hermes-agent/pull/60504
(`d5a5ea8640106b37705f4ce188553e9231a41409`, merged `2026-07-07T22:14:30Z`)

Channel resolution: `behind` `v2026.7.7` and `behind` `v2026.7.20`.

Release channel: `tagged-release`.

Operator consequence: plugins can now force a human decision on a tool call,
so a plugin is a governance surface and should be reviewed as one.

## 5. Pluggable `SecretSource` with Bitwarden and 1Password providers

API keys no longer need to live in a plaintext `.env`. A pluggable
`SecretSource` interface fetches secrets from Bitwarden and 1Password
(`op://` references) at load time, with multiple vaults simultaneously,
deterministic precedence, conflict warnings, and per-variable provenance. The
notes state this consolidated eleven competing community PRs into one
interface.

Receipt: https://github.com/NousResearch/hermes-agent/pull/59498
(`8235f484c947a9ce8a89b7bc2b8bf3453da90020`, merged `2026-07-06T11:58:07Z`)

Channel resolution: `behind` `v2026.7.7` and `behind` `v2026.7.20`.

Release channel: `tagged-release`.

Operator consequence: the plaintext `.env` is now an optional legacy path
rather than the only path, and per-variable provenance makes it auditable
which vault supplied which credential.

## 6. Credential-surface hardening cluster shipped in v2026.7.20

The v0.19.0 notes group a set of credential and boundary fixes. Verified
receipts and ancestry:

- Vertex credentials stripped from subprocess env
  (`VERTEX_CREDENTIALS_PATH` / `GOOGLE_APPLICATION_CREDENTIALS`):
  https://github.com/NousResearch/hermes-agent/pull/56582
  (`4d5d9fffd025e306ab3055a6b41dd268a456a211`, merged `2026-07-02T00:38:55Z`)
- Six P1 hardening PRs salvaged in one pass (browser guards, MEDIA anchoring,
  `.env` lockdown, delegate ACP transport, matrix sync isolation):
  https://github.com/NousResearch/hermes-agent/pull/57660
  (`7485fe0605a54eb148caf6eb7cf16fc23f18e6b5`, merged `2026-07-03T10:27:48Z`)
- Media-tool local-file reads routed through the shared credential-read guard:
  https://github.com/NousResearch/hermes-agent/pull/58709
  (`9ae17b8ac5020b32828af8d8125b66fdb86a76b3`, merged `2026-07-05T07:47:54Z`)
- Webhook body-cap sweep across aiohttp servers:
  https://github.com/NousResearch/hermes-agent/pull/59215
  (`613328559617062658fc847572d5bf1de64eb077`, merged `2026-07-06T00:38:36Z`)
- CI: untrusted refs passed through env rather than `run:` interpolation:
  https://github.com/NousResearch/hermes-agent/pull/57842
  (`26dca5e54dff02554285bb9d0cbb1a74a2333ad7`, merged `2026-07-03T18:40:05Z`)

Channel resolution: all five are `ahead` of `v2026.7.1` and `behind`
`v2026.7.7` and `v2026.7.20`.

Release channel: `tagged-release` (shipped in `v2026.7.7`, 2026-07-08).

Operator consequence: the credential-boundary work is in a tag you can pin,
and `v2026.7.7` is the earliest tag that carries all of it.

## 7. The egress credential-injection firewall: merged, reverted, then re-landed on main only

This is the clearest released-is-not-merged case in the window.

The iron-proxy credential-injection egress firewall gives Docker sandboxes
per-provider stand-in proxy tokens under the standard env names; a managed
iron-proxy daemon at the network boundary swaps them for real credentials
outbound, so tokens lifted from a compromised sandbox are useless elsewhere.
It is disabled by default and gated behind `hermes egress setup` and
`hermes egress start`. The re-land PR records fail-closed behaviour: with
`proxy.enabled: true`, the daemon down, and `enforce_on_docker`, the call
raises rather than falling through.

Timeline, all verified:

- Merged: https://github.com/NousResearch/hermes-agent/pull/30179 at
  `2026-07-04T20:29:24Z`
- Reverted twelve minutes later:
  https://github.com/NousResearch/hermes-agent/pull/58489
  (`e670d9cdd6697d24c4b170ac0ecdf6d344dc96a7`, merged `2026-07-04T20:41:25Z`).
  The v0.19.0 notes list it under "Reverted in this window (for the record)"
  and state it is not shipping in this release.
- Re-landed: https://github.com/NousResearch/hermes-agent/pull/70848
  (`077e41330d64bcdd8e460fce692a5b13d00b868e`, merged `2026-07-24T16:49:01Z`)

Channel resolution: the revert `58489` is `behind` `v2026.7.20` (the revert
shipped). The re-land `70848` is `ahead` of `v2026.7.20`.

Release channel: `main-unreleased`.

Operator consequence: the strongest sandbox credential-containment control
Hermes has is on `main` and in no tag; anyone running `v2026.7.20` has the
revert, not the feature.

## 8. Sandbox credential mounting and live-transcript redaction just made the tag

Two credential fixes merged roughly five hours before the `v2026.7.20` tag
was published, so their channel is not obvious from dates alone.

- Master credential stores are never mounted into skill sandboxes:
  https://github.com/NousResearch/hermes-agent/pull/67640
  (`c8882c141ce36ec8470ef29674fa01e1a9980e94`, merged `2026-07-20T13:50:27Z`)
- Credentials redacted in live subagent transcripts:
  https://github.com/NousResearch/hermes-agent/pull/67635
  (`183712ab821caf8325d088c343496ca8e12fe3a3`, merged `2026-07-20T13:50:32Z`)

Channel resolution: both `behind` `v2026.7.20`.

Release channel: `tagged-release`.

Operator consequence: the second fix is load-bearing for the feature in
section 9 -- live subagent transcripts are a new credential-leak surface, and
the redaction landed in the same tag that introduced them.

## 9. Live subagent transcripts and durable background delegation

`delegate_task` dispatches now return live transcript files that can be
tailed the moment subagents launch: every tool call, result, and streamed
reply, one human-readable log per child. Separately, background delegation
completions became durable -- if the process restarts mid-run, results are
restored and delivered through an ownership-checked ledger instead of
vanishing.

Receipts:
- https://github.com/NousResearch/hermes-agent/pull/67479
  (`299e409f15aa5615a8a64be488580be92cda351e`, merged `2026-07-19T17:29:15Z`)
- https://github.com/NousResearch/hermes-agent/pull/63494
  (`af250d84948179834820a62bfd870c0df6f264a1`, merged `2026-07-13T14:28:22Z`)

Channel resolution: both `behind` `v2026.7.20`; `67479` is `ahead` of
`v2026.7.7`.

Release channel: `tagged-release` (`v2026.7.20`).

Operator consequence: delegated work becomes inspectable in real time and
survives a restart, which turns fan-out from a trust exercise into an
auditable one -- and creates a new log surface to control.

## 10. Durable delivery-obligation ledger closes a silent-loss window

Final responses are recorded in a durable ledger in `state.db` around the
platform send and redelivered on next boot. The notes describe the prior
behaviour as a P1 silent-loss window: if the gateway died between generating
a response and confirming platform delivery, the answer was gone and the turn
was already paid for. Applies to Telegram, Discord, Slack and every other
channel.

Receipt: https://github.com/NousResearch/hermes-agent/pull/67181
(`5854aad8b55dab32924893897f38b42573360e77`, merged `2026-07-19T07:45:32Z`)

Channel resolution: `ahead` of `v2026.7.7`, `behind` `v2026.7.20`.

Release channel: `tagged-release`.

Operator consequence: gateway crash no longer silently drops a paid-for
answer, so unexplained missing replies before `v2026.7.20` have a named cause.

## 11. Profile-based inbound routing on a single multiplexed gateway

One multiplexed gateway sharing a single bot token can route specific guilds,
channels or threads to different profiles, each with isolated config, skills,
memory and secrets. A second multiplex hardening wave means one misconfigured
profile no longer takes down the whole gateway.

Receipts:
- https://github.com/NousResearch/hermes-agent/pull/64835
  (`f8630a1456b2113e74fb2e7340d47910c82bed09`, merged `2026-07-15T16:50:07Z`)
- https://github.com/NousResearch/hermes-agent/pull/65700
  (`c3b2af95e3f556ed28c4bf2a2a28cb1cd092278a`, merged `2026-07-16T14:17:56Z`)

Release channel: `tagged-release` (`v2026.7.20`).

Operator consequence: secret and memory isolation is now expressible per
channel on one bot, which removes the usual reason to run several gateways.

## 12. Browser eval denylist made opt-in; computer_use gains a verify-then-escalate ladder

Browser full snapshots are stored on truncation and the eval denylist becomes
opt-in. `computer_use` follows the cua-driver verify-then-escalate ladder.

Receipts:
- https://github.com/NousResearch/hermes-agent/pull/65923
  (`0f102fa4dc04b7dfdab048169aaaa640d09d7523`, merged `2026-07-17T06:41:27Z`)
- https://github.com/NousResearch/hermes-agent/pull/67123
  (`9d6d7728376d110c468d15e0fdc9964b31099a00`, merged `2026-07-18T20:59:36Z`)

Release channel: `tagged-release` (`v2026.7.20`).

Operator consequence: the browser eval denylist moving to opt-in is a
loosening; teams relying on it as a default guardrail must now set it
explicitly.

## 13. Post-tag approval-control wave, all main-unreleased

Within seven days of shipping smart approvals as the default, Hermes merged a
cluster of controls around that default. None is in a tag.

- Operator-customizable smart-approval policy via `approvals.smart_policy`:
  https://github.com/NousResearch/hermes-agent/pull/72186
  (`bd1db5460aa4a5e092d1cede6ec3b5cd1f14bf56`, merged `2026-07-27T00:46:43Z`)
- Consecutive-denial circuit breaker for smart approvals:
  https://github.com/NousResearch/hermes-agent/pull/72203
  (`a0112ef26eb5f0ac32591d8608499cfadc609cc8`, merged `2026-07-27T01:02:04Z`)
- `hermes approvals suggest`, mining approval history into allowlist
  proposals: https://github.com/NousResearch/hermes-agent/pull/72259
  (`1e652cca7aec9f925c3445ba7103fd69ced89061`, merged `2026-07-27T00:49:04Z`)
- Require approval for docker/podman daemon-redirect commands:
  https://github.com/NousResearch/hermes-agent/pull/71092
  (`6437701228a907c0c87642b3be00ba62a32f432c`, merged `2026-07-27T03:58:40Z`)
- Detect recursive `rm` when flags follow operands:
  https://github.com/NousResearch/hermes-agent/pull/68996
  (`da26ff986bf4a64b0aea92559ed763809488ef1f`, merged `2026-07-27T03:58:53Z`)
- Restore session approval tier for tirith-flagged prompts:
  https://github.com/NousResearch/hermes-agent/pull/68664, merged
  `2026-07-21T19:04:48Z`

Channel resolution: every one is `ahead` of `v2026.7.20`.

Release channel: `main-unreleased`.

Operator consequence: the release that flipped approvals to model-judged by
default does not include the policy override, the circuit breaker, or the
docker-daemon-redirect and recursive-`rm` detectors that followed it.

## 14. Post-tag security fixes, all main-unreleased

- DNS-pinned SSRF-safe fetches, Slack CDN allowlist, backfill injection and
  token permissions: https://github.com/NousResearch/hermes-agent/pull/70193
  (`8e4b5d8774319408c3b480fc8db77d69528103d1`, merged `2026-07-23T18:44:43Z`)
- Lock the public credential-pool query surface:
  https://github.com/NousResearch/hermes-agent/pull/70154
  (`d9165d7a678d4105f42921a7fc1886df3804531b`, merged `2026-07-23T16:31:59Z`)
- Stop printing secret names during env load:
  https://github.com/NousResearch/hermes-agent/pull/69054
  (`fe5d0be6db2d1b248cf7f07ba2f9ec1391dd5fbd`, merged `2026-07-22T10:19:59Z`)
- Stop masking prose words that merely embed a secret keyword:
  https://github.com/NousResearch/hermes-agent/pull/67776, merged
  `2026-07-27T03:59:12Z`

Channel resolution: all `ahead` of `v2026.7.20`.

Release channel: `main-unreleased`.

Operator consequence: an SSRF hardening pass is sitting untagged; if your
Hermes fetches attacker-influenced URLs, `main` and `v2026.7.20` differ on a
security boundary.

## 15. Main-unreleased volume since the tag

`compare/v2026.7.20...main` reports `status: ahead`, `ahead_by: 1712`,
`total_commits: 1712` as of 2026-07-27.

Receipt: https://github.com/NousResearch/hermes-agent/compare/v2026.7.20...main

Release channel: `main-unreleased`.

Operator consequence: 1712 commits in seven days means the tag you run is
already a historical artifact; treat `v2026.7.20` notes as a description of
the past, not of `main`.
