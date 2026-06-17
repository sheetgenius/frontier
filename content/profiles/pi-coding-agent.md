---
schema_version: bitter.frontier_profile.v0
profile_id: pi-coding-agent
label: Pi Coding Agent
owner: Earendil Works (formerly badlogic / Mario Zechner)
source_contract: sources/pi-coding-agent.yml
homepage: https://pi.dev/
docs: https://pi.dev/docs/latest
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-06-03
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
posture_basis:
  capability:
    - 2026-05-06-pi-thin-harness-provider-churn
    - 2026-05-07-pi-thin-harness-churn
    - 2026-05-12-pi-earendil-migration-and-harness-sdk
  accessibility:
    - 2026-05-06-pi-thin-harness-provider-churn
    - 2026-05-07-pi-thin-harness-churn
    - 2026-05-12-pi-earendil-migration-and-harness-sdk
  governance:
    - 2026-05-06-pi-thin-harness-provider-churn
    - 2026-05-07-pi-thin-harness-churn
    - 2026-05-12-pi-earendil-migration-and-harness-sdk
stance:
  use_for: "Embedding agent functionality in custom UIs (Cloudflare Workers, custom CLIs); minimal-by-default operator harnesses where you control governance externally."
  avoid_for: "Operators who want built-in subagents, plan mode, approval popups, or MCP — Pi deliberately ships none of these."
  watch_next: "Earendil Works migration cadence; whether the harness SDK becomes a separate distributable from the CLI."
---

# Pi Coding Agent

## Operator Read

Pi is a deliberately minimal terminal coding harness maintained by
[Earendil Works](https://github.com/earendil-works/pi) (formerly Mario Zechner
/ badlogic). What's notable is what it
[refuses to ship](https://pi.dev/docs/latest): subagents, plan mode, approval
popups, MCP, built-in governance. The core stays small; the platform grows via
extensions. The provider list is deliberately volatile — treat it as "what Pi
tests against today," not a forever-API.

## Where Pi Is Useful

Use Pi when your own wrapper owns the product surface.
[TypeBox 1.x](https://github.com/badlogic/pi-mono/releases/tag/v0.69.0)
validation makes custom tools and SDK integrations portable to eval-restricted
runtimes such as Cloudflare Workers — the previous validator couldn't run
there. Custom tools can declare
[`terminate: true`](https://github.com/badlogic/pi-mono/releases/tag/v0.69.0)
to end the agent turn on a final tool call and skip the automatic follow-up
LLM request — useful for tools with predictable terminal behavior. If you
embed Pi inside your own UI or CI runner, capture stream transport as part
of the run contract:
[stream configuration](https://github.com/badlogic/pi-mono/commit/c0f416aa)
(`SimpleStreamOptions`, `Transport`) is exposed through the harness, but Pi
will not record governance receipts for you.

Tune provider behavior in Pi when local inference or provider SDK behavior is
part of the run contract; do not treat defaults as production policy.
[Timeout and retry controls](https://pi.dev/docs/latest/settings#retry)
(`retry.provider.timeoutMs`, `retry.provider.maxRetries`,
`retry.provider.maxRetryDelayMs`) are available in `/settings`.

## What Pi Refuses To Own

Pi's governance posture is explicit refusal: no approval dialogs, no plan
mode, no permission popups, no MCP in the default surface. The refusal is the
design statement: those concerns belong to the operator or a layer above the
harness. No governance additions shipped in this window; the posture is
stable.

## Harness Receipts To Capture

Pi exposes the right inputs for an operator-owned governance layer to record:
session identity through
[`$PI_SESSION_DIR`](https://github.com/badlogic/pi-mono/commit/8191d59c170c9bb336a82771e1826d25bb7ec1e0),
provider retry/timeout metadata, provider selection, transport type, and
extension TypeBox schema version. Pi exposes them cleanly and leaves their
recording to the operator.

## Migration Watch

Pin and audit Pi installs during the
[Earendil Works migration](https://github.com/badlogic/pi-mono/releases/tag/v0.74.0):
the npm package is moving from `@mariozechner/pi-coding-agent` to
`@earendil-works/pi-coding-agent` and the repo from `badlogic/pi-mono` to
`earendil-works/pi-mono`. The `pi update --self` command handles global
installs; CI references and infrastructure pins need manual updates.

*Posture basis: `2026-05-06-pi-thin-harness-provider-churn`,
`2026-05-07-pi-thin-harness-churn`,
`2026-05-12-pi-earendil-migration-and-harness-sdk`.*

## Open Questions

- When will `@earendil-works/pi-coding-agent` publish to npm? v0.74.0 updated
  internal references but the new package was not yet available as of 2026-05-12.
- Does the Earendil Works transition include any governance, pricing, cloud, or
  enterprise changes that would affect Pi's current "no governance in core" posture?
- The `earendil-works/pi-mono` repo already shows a `bigrefactor` branch with
  significant architectural changes to the harness. What does the refactored
  harness look like, and how does it change the extension and SDK contract?
- The `$PI_SESSION_DIR` env var is exposed to tools and extensions. Is it also
  exposed to the system prompt or context files, making it available for
  self-referential session logs?

## What To Watch Next

- Source contract update: once `earendil-works/pi-mono` (or `earendil-works/pi`)
  is the canonical repo, update `sources/pi-coding-agent.yml` to point to the
  new URL.
- Earendil Works organizational posture: cloud offering, enterprise tier,
  or governance additions that would change Pi's minimalism claim.
- The `bigrefactor` branch: explicit harness resource invocation is a significant
  architectural change that may change the extension and SDK contract.
- Any plan mode or approval surface addition, which would signal a departure
  from Pi's core design stance.

## Profile Hygiene

This profile follows the discipline in `METHOD.md`: every
concrete claim in the prose has an inline source link and an entry in the
`claims:` block; posture sections may interpret freely but must cite finding IDs
when naming a specific feature, behavior change, or cross-provider comparison.

Four claims are seeded from prior findings
(`2026-05-06-pi-thin-harness-provider-churn` and
`2026-05-07-pi-thin-harness-churn`). Three claims are from the current window
(`2026-05-12-pi-earendil-migration-and-harness-sdk`). All evidence is at or
above the `release_note` floor.

Note: The prior manual finding was written before the `finding_id` field
convention existed. Its ID (`2026-05-06-pi-thin-harness-provider-churn`) was
added retroactively in this cycle — same Gap 10 pattern.
