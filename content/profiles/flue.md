---
schema_version: bitter.frontier_profile.v0
profile_id: flue
label: Flue
owner: withastro
source_contract: sources/flue.yml
homepage: https://www.flueframework.com
docs: https://github.com/withastro/flue/blob/main/README.md
surface_class: open_source_commits
evidence_floor: commit
status: active_watch
last_updated: 2026-06-03
last_full_review: 2026-06-03
claims:
  - id: virtual-sandbox-default
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: model-harness-separation
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: headless-deployable-target
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: skills-markdown-first
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: run-observability-history
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: connector-agent-install
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: v090-breaking-migration
    finding_id: 2026-06-01-flue-v090-major-refactor
    last_verified: 2026-06-03
    status: active
posture_basis:
  capability:
    - 2026-05-12-flue-initial-profile-and-observability-wave
  accessibility:
    - 2026-05-12-flue-initial-profile-and-observability-wave
  governance:
    - 2026-05-12-flue-initial-profile-and-observability-wave
stance:
  use_for: "Operators building their own agent surface who want a small, programmable harness, not a full platform. Deployments where 'no container' is the feature: Workers, Node bundles, CI runners where the explicit Model+Harness split makes ownership obvious."
  avoid_for: "Production deployments that need stability guarantees. Pre-1.0 with self-described experimental APIs; expect breaking changes on minor versions until that lifts."
  watch_next: "Whether Flue's observability run history becomes consumable by external monitoring tools, and how the connector ecosystem develops past the initial observability wave."
---

# Flue

Flue is a [TypeScript framework](https://github.com/withastro/flue) for
building autonomous agents, built around an explicit "Agent = Model + Harness"
architecture. It is
[Apache-2.0 licensed](https://github.com/withastro/flue/blob/main/LICENSE),
maintained by the Astro organization (withastro). Current version:
[v0.5.3-era](https://github.com/withastro/flue/commit/36033ea1). See
`sources/flue.yml` for watch posture, accepted evidence, and high-signal
patterns.

Flue is the programmable harness / headless agent calibration source for
Bitter Frontier. The research question is what a clean "Model + Harness"
framing enables and limits: what does an operator control, what does the
framework own, and how does evidence of agent work get surfaced?

> **Status**: APIs are self-described as experimental. Pre-1.0; expect
> breaking changes on minor versions.

## Current capability state

### Sandbox architecture

- Flue defaults to a
  [virtual sandbox](https://github.com/withastro/flue/blob/main/README.md)
  backed by just-bash with an in-memory filesystem. No container required.
  Virtual sandboxes are faster and cheaper for high-scale agents; container
  sandboxes (Daytona, e2b) are available via connectors for full Linux
  environments.
- [`sandbox: 'local'`](https://github.com/withastro/flue/commit/c7d278eb)
  (v0.4.0) gives the agent direct access to the host filesystem and shell
  on Node.js, with no just-bash wrapper. The CI runner or host is the isolation
  boundary. Use when `gh`, `git`, `npm` must be available to the agent.

### Model + Harness separation

- The [harness](https://github.com/withastro/flue/blob/main/README.md)
  (`init()` return value) is a first-class API object: configure sandbox,
  model, skills directory, role, and deployment target in one place. A run
  may hold multiple named harness scopes. Sessions, tasks, and skill calls
  all resolve model and sandbox settings through the harness.
- [`configureProvider()`](https://github.com/withastro/flue/commit/f0de1814)
  in `app.ts` sets runtime-global provider config: custom base URL, headers,
  gateway credentials. Relevant for operators routing agent traffic through
  enterprise API gateways.

### Headless deployment

- Flue builds to
  [Node.js](https://github.com/withastro/flue/blob/main/README.md) (single
  bundled `.mjs`) or
  [Cloudflare Workers](https://github.com/withastro/flue/blob/main/README.md)
  (with Durable Objects for session persistence). No TUI, no GUI.
- `flue run` triggers any agent from the CLI; `flue dev` runs a local watch
  server. GitHub Actions and GitLab CI are documented deployment targets.
- The [Cloudflare AI Gateway](https://github.com/withastro/flue/commit/9300e04e)
  is enabled by default on the Cloudflare target (v0.5.2), routing model
  calls through the gateway for logging, caching, and cost management.

### Skills and logic in Markdown

- Agent logic lives in
  [Markdown skills](https://github.com/withastro/flue/blob/main/README.md)
  under `.agents/skills/`, referenced by name or path. Skills are called via
  `session.skill()` with typed schemas for structured output. Roles apply
  scoped system-prompt overlays at harness, session, or call level without
  being injected into message history.
- [`AGENTS.md` discovery](https://github.com/withastro/flue/blob/main/README.md)
  is built in: the harness loads `AGENTS.md` from the working directory.

### Run observability

- [Run IDs, `flue logs`, run history endpoints, and SSE streaming with
  Last-Event-ID resume](https://github.com/withastro/flue/commit/cc432b4f)
  shipped in v0.5.0. Every agent invocation has a stable ID and a
  retrievable log stream. Operators can tail live runs or replay history.
- [`observe()`](https://github.com/withastro/flue/commit/36033ea1)
  (v0.5.3) exposes isolate-global event subscriptions for programmatic
  monitoring of run events.

### Connector system

- [Connectors](https://github.com/withastro/flue/blob/main/README.md)
  adapt third-party services (sandboxes, providers) into Flue. Install via
  `flue add <connector> | <agent-cli>`: the CLI fetches Markdown installation
  instructions and pipes them to the user's coding agent, which writes a
  TypeScript adapter into the project. The agent (Claude, Codex, Cursor)
  does the installation.

### Security

- [Shell environment variable values are now redacted from session history](https://github.com/withastro/flue/commit/850fdcee)
  (v0.4.1) before persistence. Operators with pre-v0.4.1 sessions should
  verify their session store does not contain unredacted env values.

## Posture

### Capability lens

Flue's capabilities are narrow and sharp. It is not trying to be a
full-stack agent platform or a GUI tool. Its investment is in one thing:
the harness API. `init()` is the surface. Everything (sandbox, model,
sessions, skills, tools) resolves through the harness. This means the
operator who wants to customize deeply can, and the operator who wants a
thin default (virtual sandbox + Markdown skills) can run with three lines.

The run observability wave (v0.5.0) added the first real evidence trail:
run IDs, log streams, and history. This moves Flue from "agent that ran"
to "agent that ran, and here is the structured record."

*Findings: `2026-05-12-flue-initial-profile-and-observability-wave`.*

### Accessibility lens

Flue's accessibility ceiling is TypeScript development fluency. There is
no GUI, no TUI, no managed cloud service. "Write once, deploy anywhere"
requires understanding build targets, sandbox types, and deployment
infrastructure. The Cloudflare path has Durable Object session persistence
but requires Cloudflare account setup and wrangler.

The floor, however, is genuinely low for TypeScript developers: the virtual
sandbox default means no Docker, no container setup. An agent that just
needs to run prompts and return structured data requires fewer than 20
lines of TypeScript.

The connector system offloads installation complexity to a coding agent:
`flue add daytona | claude` writes the adapter for you. This is an
interesting accessibility pattern: using AI to install AI infrastructure.
It works if you have a coding agent available; it is opaque if you don't.

*Findings: `2026-05-12-flue-initial-profile-and-observability-wave`.*

### Governance lens

Flue's governance surface is thin. The only explicit safety signal in the
window is the v0.4.1 shell env redaction: a security fix, not a designed
governance primitive. There are no permission surfaces, no audit approvals,
no operator-configurable restrictions on agent scope.

The governance posture is "operator owns the run." Isolation is the
caller's responsibility: choose virtual (in-memory), local (host), or
container. Secrets management is the caller's responsibility: `env` on
the harness, not a platform-managed vault. Log retention is the caller's
responsibility: `flue logs` streams; what you keep is up to you.

This is coherent for a headless CI/deployment-first framework, but it is
the opposite of the governance-first posture visible in Hermes, Paperclip,
and OpenClaw. It is worth watching whether governance primitives emerge as
Flue approaches 1.0.

*Findings: `2026-05-12-flue-initial-profile-and-observability-wave`.*

## Open questions

- No formal security advisory channel exists. The v0.4.1 redaction fix
  landed as a regular commit. How should operators monitor Flue for
  security patches?
- `sandbox: 'local'` gives agents direct host access. What happens when
  a local-sandbox agent exceeds its intended scope? Is there any
  guardrail below the CI runner?
- The connector system pipes Markdown instructions to a coding agent for
  installation. What is the trust model for third-party connectors? Are
  connectors reviewed, signed, or sandboxed before the agent executes them?
- `observe()` (v0.5.3) exposes isolate-global events. What events are
  observable, and are they sufficient for building an external audit trail
  without reading raw logs?
- Cloudflare AI Gateway is now the default for Cloudflare deployments.
  What data does the gateway retain, and how does that interact with
  session history stored in Durable Objects?

## What to watch next

- Whether Flue adds governance primitives (permission surfaces, audit
  approvals, secret vaults) as the framework approaches 1.0.
- The connector trust model: whether third-party connectors gain any
  review or signing mechanism.
- The `observe()` surface: whether it grows into a full run-event audit
  API, or stays an internal debugging hook.
- API stability: v0.4.0 had two breaking changes on a minor bump. Watch
  for a semver-stable release series.
- Whether Flue ships a managed cloud path (hosted sessions, managed
  sandboxes) or stays infrastructure-first.

## Profile hygiene

This profile follows the discipline in `METHOD.md`:
every concrete claim in the prose has an inline source link and an entry
in the `claims:` block; posture sections may interpret freely but must
cite finding IDs when naming a specific feature, behavior change, or
cross-provider comparison.

Note: Flue does not publish formal GitHub releases. Version bumps are
recorded as commits with message format "Release @flue/sdk and @flue/cli
X.Y.Z." These are cited at `commit` precision since individual diffs
have not all been reviewed. The README is cited at `official_docs`
precision for architectural claims.
