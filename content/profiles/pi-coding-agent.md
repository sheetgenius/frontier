---
schema_version: bitter.frontier_profile.v0
profile_id: pi-coding-agent
label: Pi Coding Agent
owner: Earendil Works (formerly badlogic / Mario Zechner)
source_contract: sources/pi-coding-agent.yml
homepage: https://pi.dev/
docs: https://pi.dev/docs/latest
tagline: "The harness that refuses to govern, so the floor others build their rules on."
x:
  maintainers:
    - handle: badlogicgames
      name: Mario Zechner
repo: https://github.com/earendil-works/pi
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-06-23
last_full_review: 2026-06-03
claims:
  - id: typebox-extension-sdk-validation
    finding_id: 2026-05-06-pi-thin-harness-provider-churn
    last_verified: 2026-05-06
    status: active
  - id: terminating-tool-results
    finding_id: 2026-05-06-pi-thin-harness-provider-churn
    last_verified: 2026-05-06
    status: active
  - id: provider-retry-timeout-controls
    finding_id: 2026-05-07-pi-thin-harness-churn
    last_verified: 2026-05-07
    status: active
  - id: session-dir-env
    finding_id: 2026-05-07-pi-thin-harness-churn
    last_verified: 2026-05-07
    status: active
  - id: earendil-works-package-migration
    finding_id: 2026-05-12-pi-earendil-migration-and-harness-sdk
    last_verified: 2026-05-12
    status: active
  - id: jsonc-models-json
    finding_id: 2026-05-12-pi-earendil-migration-and-harness-sdk
    last_verified: 2026-05-12
    status: active
  - id: harness-stream-configuration
    finding_id: 2026-05-12-pi-earendil-migration-and-harness-sdk
    last_verified: 2026-05-12
    status: active
  - id: security-hardening-cluster
    finding_id: 2026-06-02-pi-coding-agent-oauth-hardening
    last_verified: 2026-06-03
    status: active
  - id: compaction-event-context
    finding_id: 2026-06-23-pi-extension-compaction-event-context
    last_verified: 2026-06-23
    status: active
  - id: selective-provider-base-entrypoints
    finding_id: 2026-06-23-pi-selective-provider-base-entrypoints
    last_verified: 2026-06-23
    status: active
  - id: mistral-prompt-cache-cost-accounting
    finding_id: 2026-06-23-pi-mistral-prompt-caching
    last_verified: 2026-06-23
    status: active
  - id: dependency-and-session-path-hardening
    finding_id: 2026-06-23-pi-vulnerable-dependency-update
    last_verified: 2026-06-23
    status: active
  - id: no-governance-in-core
    finding_id: 2026-06-23-pi-extension-compaction-event-context
    last_verified: 2026-06-23
    status: open_question
posture_basis:
  capability:
    - 2026-05-06-pi-thin-harness-provider-churn
    - 2026-05-07-pi-thin-harness-churn
    - 2026-05-12-pi-earendil-migration-and-harness-sdk
    - 2026-06-23-pi-extension-compaction-event-context
    - 2026-06-23-pi-selective-provider-base-entrypoints
  accessibility:
    - 2026-05-06-pi-thin-harness-provider-churn
    - 2026-05-07-pi-thin-harness-churn
    - 2026-05-12-pi-earendil-migration-and-harness-sdk
    - 2026-06-23-pi-selective-provider-base-entrypoints
  governance:
    - 2026-05-06-pi-thin-harness-provider-churn
    - 2026-05-07-pi-thin-harness-churn
    - 2026-05-12-pi-earendil-migration-and-harness-sdk
    - 2026-06-23-pi-extension-compaction-event-context
stance:
  use_for: "Embedding agent functionality in custom UIs (Cloudflare Workers, custom CLIs); minimal-by-default operator harnesses where you control governance externally."
  avoid_for: "Operators who want built-in subagents, plan mode, approval popups, or MCP -- Pi deliberately ships none of these."
  watch_next: "Earendil Works migration cadence; whether the selective `/base` entry points become a fully separate, leaner SDK distributable from the CLI."
---

# Pi Coding Agent

## Operator Read

Pi is a deliberately minimal terminal coding harness maintained by
[Earendil Works](https://github.com/earendil-works/pi) (formerly Mario Zechner
/ badlogic). What's notable is what it
[refuses to ship](https://pi.dev/docs/latest): subagents, plan mode, approval
popups, MCP, built-in governance. The core stays small; the platform grows via
extensions. The provider list is deliberately volatile -- treat it as "what Pi
tests against today," not a forever-API. The canonical repo is now
`earendil-works/pi`.

## Where Pi Is Useful

Use Pi when your own wrapper owns the product surface.
[TypeBox 1.x](https://github.com/badlogic/pi-mono/releases/tag/v0.69.0)
validation makes custom tools and SDK integrations portable to eval-restricted
runtimes such as Cloudflare Workers -- the previous validator couldn't run
there. Custom tools can declare
[`terminate: true`](https://github.com/badlogic/pi-mono/releases/tag/v0.69.0)
to end the agent turn on a final tool call and skip the automatic follow-up
LLM request -- useful for tools with predictable terminal behavior. If you
embed Pi inside your own UI or CI runner, capture stream transport as part
of the run contract:
[stream configuration](https://github.com/badlogic/pi-mono/commit/c0f416aa)
(`SimpleStreamOptions`, `Transport`) is exposed through the harness, but Pi
will not record governance receipts for you.

For leaner embeds, register only the providers you ship: the
[selective provider base entry points](https://github.com/earendil-works/pi/releases/tag/v0.79.8)
(`@earendil-works/pi-ai/base`, `@earendil-works/pi-agent-core/base`) let a
bundled application register providers explicitly and exclude unused provider
transports, shrinking bundle size and removing dead network code paths -- a
real win for Cloudflare-Workers-style runtimes.

Tune provider behavior in Pi when local inference or provider SDK behavior is
part of the run contract; do not treat defaults as production policy.
[Timeout and retry controls](https://pi.dev/docs/latest/settings#retry)
(`retry.provider.timeoutMs`, `retry.provider.maxRetries`,
`retry.provider.maxRetryDelayMs`) are available in `/settings`. Provider-side
prompt caching is tracked accurately where supported: Mistral sessions now use
[session-affinity prompt caching](https://github.com/earendil-works/pi/releases/tag/v0.79.8)
with cached-token cost accounting,
continuing Pi's billing-accuracy cadence.

*Findings: 2026-06-23-pi-selective-provider-base-entrypoints,
2026-06-23-pi-mistral-prompt-caching.*

## What Pi Refuses To Own

Pi's governance posture is explicit refusal: no approval dialogs, no plan
mode, no permission popups, no MCP in the default surface. The refusal is the
design statement: those concerns belong to the operator or a layer above the
harness. No governance additions shipped in this window; the posture is
stable. The plan-mode references that surfaced this window are to an
*extension example*, not a core feature -- consistent with Pi's delegation
posture.

*Findings: 2026-06-23-pi-extension-compaction-event-context.*

## Harness Receipts To Capture

Pi exposes the right inputs for an operator-owned governance layer to record:
session identity through
[`$PI_SESSION_DIR`](https://github.com/badlogic/pi-mono/commit/8191d59c170c9bb336a82771e1826d25bb7ec1e0),
provider retry/timeout metadata, provider selection, transport type, and
extension TypeBox schema version. Pi exposes them cleanly and leaves their
recording to the operator.

This window strengthens that thesis at the context-shaping layer: extension
[compaction events now carry `reason` and `willRetry`](https://github.com/earendil-works/pi/releases/tag/v0.79.10),
so `session_before_compact` and `session_compact` can distinguish a manual
`/compact` from threshold auto-compaction from an overflow retry -- compaction
is now self-describing and inspectable from the extension surface. An
operator-owned governance layer gets a clean hook to record *why* context was
reshaped. Compaction is itself a context-shaping event worth a receipt, and
Pi now hands you the inputs to write one.

*Findings: 2026-06-23-pi-extension-compaction-event-context.*

## Maintenance And Hardening

Routine but real CVE-class maintenance landed this window:
[vulnerable runtime dependencies were updated](https://github.com/earendil-works/pi/releases/tag/v0.79.8)
(including `undici` and the packaged `protobufjs` transitive dependency), and
deep session branches no longer take quadratic time to build context or branch
paths -- the
[session path construction was linearized](https://github.com/earendil-works/pi/releases/tag/v0.79.9)
(on a 600k-entry pathological session, ~20.3s with `Array.unshift()` dropped to
~35ms with `push()` plus `reverse()`), a low-positive hardening against a
pathological-input slowdown. Operators pinning Pi should move past v0.79.8 for
the dependency fixes and past v0.79.9 for the session-tree fix.

*Findings: 2026-06-23-pi-vulnerable-dependency-update.*

## Migration Watch

Pin and audit Pi installs during the
[Earendil Works migration](https://github.com/badlogic/pi-mono/releases/tag/v0.74.0):
the npm package is moving from `@mariozechner/pi-coding-agent` to
`@earendil-works/pi-coding-agent` and the repo from `badlogic/pi-mono` to
`earendil-works/pi-mono` (now `earendil-works/pi`). The `pi update --self`
command handles global installs; CI references and infrastructure pins need
manual updates. Note a behavior change worth carrying into pinning guidance:
bare `pi update` now updates only Pi -- use `pi update --all` to bump packages
too -- and update installs the exact checked version with no unversioned
reinstall fallback.

*Posture basis: `2026-05-06-pi-thin-harness-provider-churn`,
`2026-05-07-pi-thin-harness-churn`,
`2026-05-12-pi-earendil-migration-and-harness-sdk`,
`2026-06-23-pi-extension-compaction-event-context`,
`2026-06-23-pi-selective-provider-base-entrypoints`.*

## Open Questions

- Does the leaner standalone SDK arrive as a fully separate distributable, or
  stay as composable entry points within the CLI packages? **Partially
  answered (2026-06-23):** the
  [`/base` entry points](https://github.com/earendil-works/pi/releases/tag/v0.79.8)
  (`@earendil-works/pi-ai/base`, `@earendil-works/pi-agent-core/base`) are a
  concrete step toward leaner, explicitly-composed SDK consumption -- but they
  still live inside the same packages rather than a standalone leaner SDK.
  Watch whether Earendil splits these into a distinct distributable.
- Does the Earendil Works transition include any governance, pricing, cloud, or
  enterprise changes that would affect Pi's current "no governance in core"
  posture? **Still no (verified 2026-06-23):** no plan mode, approval surface,
  or MCP in core shipped this window; the project-trust system is static and
  the only `/trust` touchpoints were documentation/label fixes.
- The `$PI_SESSION_DIR` env var is exposed to tools and extensions. Is it also
  exposed to the system prompt or context files, making it available for
  self-referential session logs?

## What To Watch Next

- Source contract update: `earendil-works/pi` is now confirmed canonical;
  ensure `sources/pi-coding-agent.yml` points to the new URL.
- Earendil Works organizational posture: cloud offering, enterprise tier,
  or governance additions that would change Pi's minimalism claim.
- Whether the `/base` selective-provider entry points evolve into a fully
  separate, leaner SDK distributable from the CLI.
- Any plan mode or approval surface addition, which would signal a departure
  from Pi's core design stance.

## Profile Hygiene

This profile follows the discipline in `RESEARCH_CONTRACT.md#profile`: every
concrete claim in the prose has an inline source link and an entry in the
`claims:` block; posture sections may interpret freely but must cite finding IDs
when naming a specific feature, behavior change, or cross-project comparison.

Four claims are seeded from prior findings
(`2026-05-06-pi-thin-harness-provider-churn` and
`2026-05-07-pi-thin-harness-churn`). Three claims are from the Earendil
migration window (`2026-05-12-pi-earendil-migration-and-harness-sdk`). Four
claims are net-new from the 2026-06-16..2026-06-23 window
(compaction event context, selective provider base entry points, Mistral
prompt-cache cost accounting, and dependency/session-path hardening), all on
tagged releases v0.79.6-v0.79.10. The `no-governance-in-core` claim is carried
as an `open_question` (absence asserted from absence of supporting findings)
and its `last_verified` advances to 2026-06-23: we looked this cycle and the
answer is still "no governance in core." All evidence is at or above the
`release_note` floor; canonical repo is `earendil-works/pi`.

Note: The prior manual finding was written before the `finding_id` field
convention existed. Its ID (`2026-05-06-pi-thin-harness-provider-churn`) was
added retroactively in this cycle -- same Gap 10 pattern.
