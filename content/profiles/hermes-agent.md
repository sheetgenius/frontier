---
schema_version: bitter.frontier_profile.v0
profile_id: hermes-agent
label: Hermes Agent
owner: Nous Research
source_contract: sources/hermes-agent.yml
homepage: https://hermes-agent.nousresearch.com/docs
docs: https://hermes-agent.nousresearch.com/docs
repo: https://github.com/NousResearch/hermes-agent
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-06-16
last_full_review: 2026-06-03
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
  - id: surface-release-desktop-and-admin
    finding_id: 2026-06-06-hermes-agent-v0.16.0-surface-release
    last_verified: 2026-06-16
    status: active
  - id: fail-closed-security-wave-unreleased
    finding_id: 2026-06-13-hermes-agent-sensitive-write-and-status-leak-hardening
    last_verified: 2026-06-16
    status: active
  - id: async-background-subagents
    finding_id: 2026-06-15-hermes-agent-async-background-subagents
    last_verified: 2026-06-16
    status: active
  - id: skill-memory-poisoning-and-recursive-delete-fixes
    finding_id: 2026-06-16-hermes-agent-skill-memory-poisoning-fixes
    last_verified: 2026-06-16
    status: active
posture_basis:
  capability:
    - 2026-05-06-hermes-curator-and-service-surfaces
    - 2026-05-07-hermes-gateways-skills-and-service-operation
    - 2026-05-12-hermes-tenacity-kanban-and-security
    - 2026-05-27-hermes-v0.14.0-foundation-release
    - 2026-06-06-hermes-agent-v0.16.0-surface-release
    - 2026-06-15-hermes-agent-async-background-subagents
  accessibility:
    - 2026-05-06-hermes-curator-and-service-surfaces
    - 2026-05-07-hermes-gateways-skills-and-service-operation
    - 2026-05-12-hermes-tenacity-kanban-and-security
    - 2026-05-27-hermes-v0.14.0-foundation-release
    - 2026-06-06-hermes-agent-v0.16.0-surface-release
  governance:
    - 2026-05-06-hermes-curator-and-service-surfaces
    - 2026-05-07-hermes-gateways-skills-and-service-operation
    - 2026-05-12-hermes-tenacity-kanban-and-security
    - 2026-05-12-hermes-mistralai-quarantine-response
    - 2026-05-27-hermes-v0.14.0-foundation-release
    - 2026-06-13-hermes-agent-sensitive-write-and-status-leak-hardening
    - 2026-06-16-hermes-agent-skill-memory-poisoning-fixes
stance:
  use_for: "Use Hermes when worker completion needs independent verification: the Kanban gate blocks phantom card claims before a worker can move state. Also when chat or voice bridging is a primary surface, not an afterthought."
  avoid_for: "Avoid it if your log pipelines depend on unredacted agent output: v0.13.0 makes redaction default-on. Skip if you need centralized identity tooling: Hermes governs through allowlists, not SSO or role services."
  watch_next: "How the Kanban hallucination gate behaves under real multi-agent load, and whether the Curator process handles long-running skill libraries past its default cycle."
---

# Hermes Agent

## Recent activity (2026-06-04 to 2026-06-16)

Hermes shipped its
[v0.16.0 "Surface Release"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.5)
(June 6): a native Electron desktop app, a browser web-admin dashboard, and
remote-gateway connect over OAuth or username/password, collapsing
install-to-first-message to seconds but adding a new authority boundary in
the dashboard auth gate. The sharper story is what the release binary does
NOT contain: a week later, a fail-closed security wave merged to main that
fixed Hermes's own guardrail gaps, including an auto-approved `cp` into
[`~/.ssh/authorized_keys`](https://github.com/NousResearch/hermes-agent/commit/da28d5d11)
(the maintainer called an unpaired write-deny "theater"), an unauthenticated
`/api/status` endpoint
[leaking host paths and the gateway PID](https://github.com/NousResearch/hermes-agent/commit/3380563d9),
and own-policy chat adapters that
[failed open when enabled without an allowlist](https://github.com/NousResearch/hermes-agent/commit/fc4635458);
if you run an exposed gateway, run main or wait for the next tag. Hermes also
shipped fire-and-forget
[background subagents](https://github.com/NousResearch/hermes-agent/commit/c66ecf0bc)
whose results re-enter the conversation as a new turn, but removed the
default 600-second subagent timeout the same week, so runaway detection now
rests on heartbeat staleness alone. Two skill fixes closed a self-improving
risk class: skills were
[poisoning every connected memory store](https://github.com/NousResearch/hermes-agent/commit/c2c55c444)
with their raw body, and an agent-triggered skill delete could
[escape its directory and wipe the working tree](https://github.com/NousResearch/hermes-agent/commit/2dbc3bd93).

## Operator read

Hermes is a broad-surface personal agent (twenty-plus messaging
platforms, voice, browser, mobile), and as of v0.14.0
("Foundation Release", 2026-05-16) it has also become an *installable
provider router with identity / isolation primitives*. The release
ships PyPI distribution (`pip install hermes-agent`), lazy adapter
install with a supply-chain advisory checker, a native Windows beta,
Zed ACP Registry listing, and `hermes proxy`: a local
OpenAI-compatible endpoint that lets a bounded set of wire-compatible
clients (Codex CLI, Aider, Cline, Continue, custom scripts) route
through whichever OAuth provider the operator is signed into. The
"broad-surface personal agent" framing is still load-bearing (Hermes
did not stop being that), but the installable surface and adjacency
to other tools changed substantially in this window. The serious bet
is still durable coordination with receipts.

## Coordination claims

The [Kanban board](https://github.com/NousResearch/hermes-agent/pull/17805)
is the production claim to watch. Hermes is trying to make worker handoffs
durable enough that stale workers get reclaimed (heartbeat), failed exits
block automatically, zombie processes are detected on both platforms, and
per-task `max_retries` prevent silent cascades.

The
[**hallucination gate**](https://github.com/NousResearch/hermes-agent/pull/20232)
(v2026.5.7) tightens this further: the kernel checks `created_cards` IDs,
blocks phantom and cross-worker claims, and records an audit event before a
worker can move state. Phantom card references are rejected before state
moves. The gate is an integrity check on card references, not a verifier
of work quality or completeness, but a structural answer to "did this worker
actually produce what it claims?"

[`/goal`](https://github.com/NousResearch/hermes-agent/pull/18262) locks the
agent onto a target that persists across turns (Ralph loop). Goals survive
context compression and turn budget management. Pair it with the Kanban gate
when running multi-worker sessions where individual workers should not be
able to abandon their assigned target.

## Distribution and provider routing (v0.14.0)

The 2026-05-16 v0.14.0 "Foundation Release" shipped 808 commits and
633 merged PRs since v0.13.0. Several distinct vectors:

**Distribution.** Hermes ships as a PyPI package
([PR #26593](https://github.com/NousResearch/hermes-agent/pull/26593))
for the first time. The `[all]` extras are removed in favor of lazy
install of heavy adapters on first use
([PR #24220](https://github.com/NousResearch/hermes-agent/pull/24220),
[PR #24515](https://github.com/NousResearch/hermes-agent/pull/24515));
cold-start drops ~19s. Native Windows beta ships
([PR #21561](https://github.com/NousResearch/hermes-agent/pull/21561)).
Hermes is listed in the Zed ACP Registry via `uvx`
([PR #26079](https://github.com/NousResearch/hermes-agent/pull/26079)).
A supply-chain advisory checker accompanies the lazy-install pattern.

**Provider routing.** `hermes proxy`
([PR #25969](https://github.com/NousResearch/hermes-agent/pull/25969))
exposes a local OpenAI-compatible endpoint backed by whichever OAuth
provider the operator is signed into (Nous Portal in the initial
shipped form, with the PR explicitly framing "more providers later").
A bounded set of wire-compatible clients (Codex CLI, Aider, Cline,
Continue, custom scripts) can route through a Hermes subscription
rather than maintain separate API keys. The PR explicitly documents
the default bind as `--host 127.0.0.1` (loopback only) and the auth
model: client-side `Authorization` headers are accepted and *stripped
before the upstream call*, then the Hermes OAuth credentials are
attached on the way out. Loopback-only is the documented default;
operators changing the bind to a non-loopback address are responsible
for placing their own auth in front, and should treat the proxy as a
credential router exposed to anyone who can reach the bind address
once it leaves loopback.

**Identity mapping.** A new Honcho identity-mapping layer
(commits `0bac8809`, `58987cb8`, `c03960de`, `6feb2afd`, week of
2026-05-21) adds `pinUserPeer` / `pinPeerName` aliases and includes
user-id in agent cache signatures to prevent shared-thread peer
contamination. A separate commit (`2e181602`, 2026-05-27) isolates
the credential pool on provider fallback, closing a quiet credential
bleed when the agent fails over between providers.

**Reliability.** A sustained wave of `fix(kanban)` commits between
2026-05-23 and 2026-05-27 hardened SQLite against torn-write
corruption (`secure_delete + cell_size_check + synchronous=FULL`),
preserved exceptions on write-txn rollback failures, refused to
silently downgrade WAL to DELETE on transient EIO, and added
post-commit invariant checks. The Kanban primitive the prior digest
named as load-bearing is still settling; the post-v0.14.0 line is
the integrity-floor baseline.

## Access surfaces and setup burden

Use [Curator](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.30)
only if you are willing to let Hermes maintain its own tool layer: it grades,
consolidates, and prunes skills on a default seven-day cycle, with
`logs/curator/run.json` and `REPORT.md` as the operator's review surface.
Bundled and hub skills are protected behind defense-in-depth gates. The
operator's job shifts from hand-cleaning skills to reviewing Curator outputs.

Manual Curator operations are now synchronous (`hermes curator run`) with
`archive`, `prune`, and `list-archived`
[subcommands](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.7):
useful when you want to inspect rather than wait on the scheduled run. A
[background review loop](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.30)
applies the same grading to agent-created skills outside the scheduled cycle.

Gateway durability is the other accessibility lever: the gateway registers with
[systemd restart readiness](https://github.com/NousResearch/hermes-agent/commit/d797755a1c17566b0aef4d77548a4b460142d26a),
and sessions interrupted by
[restart, `/update`, or source-file reload](https://github.com/NousResearch/hermes-agent/pull/21192)
are automatically resumed when the gateway comes back. The API server accepts
an [`X-Hermes-Session-Key` header](https://github.com/NousResearch/hermes-agent/commit/fe8560fc1249b4a7e448b5c3b80a7d213df9d78f)
to give memory providers a stable session identifier. Third-party inference
providers can drop into
[pluggable model provider modules](https://github.com/NousResearch/hermes-agent/commit/9022804d78e88253d138d448e9107a3884b2b96c)
without touching core.

[`allowed_channels`/`allowed_chats`/`allowed_rooms`](https://github.com/NousResearch/hermes-agent/pull/21251)
limit which Slack, Telegram, Mattermost, Matrix, or DingTalk channels the
agent responds in: scope narrowing without disabling platforms. Cron
[`no_agent` mode](https://github.com/NousResearch/hermes-agent/pull/19709) lets
operators run a script directly with non-empty stdout delivered verbatim to
the home channel, skipping LLM cost or non-determinism for pure-automation
watchdog patterns.

## Security defaults

After v0.13.0, assume logs are redacted unless you have explicitly designed
around that default;
[redaction is on by default](https://github.com/NousResearch/hermes-agent/pull/21193)
where it was previously opt-in. Pipelines that depended on raw agent output
need a migration plan. Discord `DISCORD_ALLOWED_ROLES` is now
[scoped to the originating guild](https://github.com/NousResearch/hermes-agent/pull/21241):
the CVSS 8.1 cross-guild DM bypass (issue #12136) is closed. MCP OAuth and
`auth.json` credential writers
[close TOCTOU windows](https://github.com/NousResearch/hermes-agent/pull/21176),
and cron
[scans assembled prompt + skill content for prompt injection](https://github.com/NousResearch/hermes-agent/pull/21350)
before execution. The pattern: fail-closed on credentials and message
security; explicit opt-in for scope reduction.

When PyPI quarantined `mistralai` 2.4.6 as a malicious release,
[Hermes removed the package from `[all]` extras](https://github.com/NousResearch/hermes-agent/pull/24205)
(commit `99ad2d1`, 2026-05-12). Mistral Voxtral TTS returns a "temporarily
disabled" status rather than importing the cached package. The `[mistral]`
extra is preserved for explicit opt-in once PyPI restores the package. Not yet
in a tagged release.

## Known limits

The Kanban gate is structural, not semantic: it does not verify result
quality, work completeness, or its own false-positive rate under concurrent
multi-worker workloads. The PR #20232 mechanism (what is checked, what
audit events are recorded, how operators read them) is not yet fully
documented in official docs. `/goal` survival semantics under compression are
not specified. The governance map (which controls fail-closed vs.
empty-until-configured vs. explicit opt-in) is not documented in one place,
and the Curator skill protection tiers (bundled vs. hub vs. user) are
described as defense-in-depth without published rules.

*Posture basis: `2026-05-06-hermes-curator-and-service-surfaces`,
`2026-05-07-hermes-gateways-skills-and-service-operation`,
`2026-05-12-hermes-tenacity-kanban-and-security`,
`2026-05-12-hermes-mistralai-quarantine-response`,
`2026-05-27-hermes-v0.14.0-foundation-release`.*

## Open questions

- `hermes proxy` provider scope: the PR ships Nous Portal as the
  initial routing provider with "more providers later" framed. Which
  providers actually land, on what cadence, and whether any require
  per-provider auth shapes that complicate the `Authorization`-strip
  pattern is open.
- `hermes proxy` non-loopback exposure: the documented default is
  `--host 127.0.0.1` and client `Authorization` headers are stripped
  before upstream credential attach. The operator-side question is
  what protection model exists when the bind is changed (a recommended
  reverse-proxy / mTLS pattern, an option to require a shared bearer
  before strip, etc.). The PR does not specify a non-loopback
  posture.
- Lazy adapter install under fail-closed credential doctrine: could
  a missing-backend state at runtime silently degrade a
  security-relevant code path before the backend is installed?
- Are the Honcho identity-mapping primitives now the canonical
  Hermes identity layer, or a Honcho-integration-specific feature?
  Source contract should be updated to name "identity mapping" as a
  high-signal pattern if so.
- The Kanban hallucination gate (PR #20232) verifies `created_cards` IDs and
  blocks phantom and cross-worker claims. What does the gate NOT verify: result
  quality, work completeness, or false-positive behavior under concurrent
  multi-worker workloads?
- How does `/goal` survive context compression? What mechanism preserves the
  goal target when the conversation is compressed, and what happens when the
  goal budget is exhausted?
- Which Hermes controls are default-on (fail-closed), which are
  empty-until-configured (no restriction by default), and which require
  explicit opt-in? The governance map is not documented in one place.
- The `no_agent` cron mode delivers non-empty stdout verbatim. Are there size
  limits on delivery, and what happens on a large output burst?
- The Curator skill protection gates (bundled/hub skills) are documented as
  defense-in-depth. What are the tiers, and can a malicious skill attempt to
  bypass protection by claiming hub status in its frontmatter?

## What to watch next

- Kanban hallucination gate documentation: the mechanism is not yet fully
  described in official docs.
- Whether `/goal` is extended to multi-agent Kanban contexts (a board-level
  goal that persists across worker handoffs).
- Trajectory generation and RL: the source contract lists these as high-signal
  patterns; no public feature has shipped yet.
- Checkpoint v2 behavior in practice: real pruning + disk guardrails are the
  claim; the behavior under varied session lengths needs operator verification.
- Whether the pluggable provider surface generates a third-party provider
  ecosystem, and whether those providers follow the same security patterns as
  core.

## Profile hygiene

This profile follows the discipline in `METHOD.md`: every
concrete claim in the prose has an inline source link and an entry in the
`claims:` block; posture sections may interpret freely but must cite finding IDs
when naming a specific feature, behavior change, or cross-provider comparison.

Five claims are seeded from prior findings
(`2026-05-06-hermes-curator-and-service-surfaces` and
`2026-05-07-hermes-gateways-skills-and-service-operation`). Four claims are
from the current window (`2026-05-12-hermes-tenacity-kanban-and-security`,
evidence: release notes + merged PRs). All evidence is at or above the
`release_note` floor.

Note: The prior manual finding was written before the `finding_id` field
convention existed. Its ID (`2026-05-06-hermes-curator-and-service-surfaces`)
was added retroactively in this cycle. This is the same Gap 10 pattern
applied previously to the Claude Code manual finding.
