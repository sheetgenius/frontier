---
schema_version: bitter.frontier_profile.v0
profile_id: flue
label: Flue
owner: withastro
source_contract: sources/flue.yml
homepage: https://www.flueframework.com
docs: https://github.com/withastro/flue/blob/main/CHANGELOG.md
tagline: "A clean Model-plus-Harness split, still migrating its own API on the way to 1.0."
x:
  project: flueai
repo: https://github.com/withastro/flue
surface_class: open_source_commits
evidence_floor: commit
status: active_watch
last_updated: 2026-06-23
last_full_review: 2026-06-23
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
    last_verified: 2026-06-23
    status: active
  - id: skills-typescript-native
    finding_id: 2026-06-23-flue-defineskill-typescript-skills
    last_verified: 2026-06-23
    status: active
  - id: skill-naming-ascii-spec
    finding_id: 2026-06-23-flue-skill-naming-ascii-spec
    last_verified: 2026-06-23
    status: active
  - id: connector-agent-install
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: first-party-connector-ecosystem
    finding_id: 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    last_verified: 2026-06-23
    status: active
  - id: one-zero-beta-line
    finding_id: 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    last_verified: 2026-06-23
    status: active
  - id: durable-recoverable-execution
    finding_id: 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    last_verified: 2026-06-23
    status: active
  - id: durable-streams-transport
    finding_id: 2026-06-23-flue-event-index-decoupled-from-stream-offset
    last_verified: 2026-06-23
    status: active
  - id: actions-orchestration-primitive
    finding_id: 2026-06-23-flue-workflows-rebuilt-on-actions
    last_verified: 2026-06-23
    status: active
  - id: define-naming-unification
    finding_id: 2026-06-23-flue-define-naming-unification
    last_verified: 2026-06-23
    status: active
  - id: run-unified-through-http-app
    finding_id: 2026-06-23-flue-run-unified-through-http-app
    last_verified: 2026-06-23
    status: active
  - id: run-observability-private-by-default-staged
    finding_id: 2026-06-23-flue-workflow-runs-private-by-default
    last_verified: 2026-06-23
    status: active
  - id: flue-logs-removed-staged
    finding_id: 2026-06-23-flue-logs-removed-typed-run-apis
    last_verified: 2026-06-23
    status: active
  - id: run-observability-history
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-06-23
    status: stale
  - id: v090-breaking-migration
    finding_id: 2026-06-01-flue-v090-major-refactor
    last_verified: 2026-06-03
    status: active
posture_basis:
  capability:
    - 2026-05-12-flue-initial-profile-and-observability-wave
    - 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    - 2026-06-23-flue-workflows-rebuilt-on-actions
    - 2026-06-23-flue-defineskill-typescript-skills
  accessibility:
    - 2026-05-12-flue-initial-profile-and-observability-wave
    - 2026-06-23-flue-define-naming-unification
    - 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
  governance:
    - 2026-05-12-flue-initial-profile-and-observability-wave
    - 2026-06-23-flue-workflow-runs-private-by-default
    - 2026-06-23-flue-logs-removed-typed-run-apis
    - 2026-06-23-flue-workflows-rebuilt-on-actions
stance:
  use_for: "Operators building their own agent surface who want a small, programmable harness -- not a full platform. Deployments where 'no container' is the feature: Workers, Node bundles, CI runners where the explicit Model+Harness split makes ownership obvious. As of the 1.0-beta line, also operators who want first-party verified ingress (Stripe, Slack, Linear, etc.) and durable, recoverable execution without standing up their own persistence."
  avoid_for: "Production deployments that need a frozen API. The 1.0-beta line is migration-heavy: it tagged beta.1/beta.2 in-window and is staging large breaking changes (Actions, define* renames, run-observability privacy) in an Unreleased CHANGELOG section that has not tagged. Expect to migrate again before GA."
  watch_next: "Whether the staged private-by-default run observability and `flue logs` removal ship in a beta.3/GA tag, and whether the first-party connector ecosystem and Actions primitive stabilize their surfaces before GA."
---

# Flue

Flue is a [TypeScript framework](https://github.com/withastro/flue) for
building autonomous agents, built around an explicit "Agent = Model + Harness"
architecture. It is
[Apache-2.0 licensed](https://github.com/withastro/flue/blob/main/LICENSE),
maintained by the Astro organization (withastro). Current tagged version:
[v1.0.0-beta.2](https://github.com/withastro/flue/commit/2352ef4480)
(2026-06-18), with a large `## Unreleased` CHANGELOG section staging further
breaking work on `main`. See `sources/flue.yml` for watch posture, accepted
evidence, and high-signal patterns.

Flue is the programmable harness / headless agent calibration source for
Bitter Frontier. The research question is what a clean "Model + Harness"
framing enables and limits: what does an operator control, what does the
framework own, and how does evidence of agent work get surfaced?

> **Status**: 1.0-beta. The framework reached its 1.0 stabilization baseline
> with [v1.0.0-beta.1](https://github.com/withastro/flue/commit/05f9d478f5)
> (2026-06-16) -- a migration-heavy tag -- followed by
> [v1.0.0-beta.2](https://github.com/withastro/flue/commit/2352ef4480)
> (2026-06-18, a single image-attachment fix). This is convergence/cleanup
> motion, not new surface area: classic pre-GA freeze behavior with breaking
> changes still landing on `main`.

> **Channel discipline.** Flue publishes **zero GitHub Releases**; its
> `/releases` page is empty. The canonical receipt is
> [`CHANGELOG.md`](https://github.com/withastro/flue/blob/main/CHANGELOG.md),
> cited at version-tagged precision (or a git tag), per `sources/flue.yml`.
> This profile separates **tagged** state (in `1.0.0-beta.1`/`beta.2`) from
> **staged** state (in the `## Unreleased` CHANGELOG section on `main`, with
> no tag). Staged items are real and verbatim-backed but are NOT shipped in
> any in-window release; they are marked as direction, not delivery.

## Current Capability State

### Sandbox Architecture

- Flue defaults to a
  [virtual sandbox](https://github.com/withastro/flue/blob/main/README.md)
  backed by just-bash with an in-memory filesystem. No container required.
  Virtual sandboxes are faster and cheaper for high-scale agents; container
  sandboxes (Daytona, e2b) are available via connectors for full Linux
  environments.
- [`sandbox: 'local'`](https://github.com/withastro/flue/commit/c7d278eb)
  (v0.4.0) gives the agent direct access to the host filesystem and shell
  on Node.js -- no just-bash wrapper. The CI runner or host is the isolation
  boundary. Use when `gh`, `git`, `npm` must be available to the agent.
- The 1.0-beta.1 tag replaced the prior workerd Cloudflare stub with a
  [`cloudflareSandbox()`](https://github.com/withastro/flue/commit/05f9d478f5)
  sandbox.

### Model + Harness Separation

- The [harness](https://github.com/withastro/flue/blob/main/README.md)
  (`init()` return value) is a first-class API object: configure sandbox,
  model, skills directory, role, and deployment target in one place. A run
  may hold multiple named harness scopes. Sessions, tasks, and skill calls
  all resolve model and sandbox settings through the harness.
- [`configureProvider()`](https://github.com/withastro/flue/commit/f0de1814)
  in `app.ts` sets runtime-global provider config: custom base URL, headers,
  gateway credentials. Relevant for operators routing agent traffic through
  enterprise API gateways.

### Workflows and Actions (1.0-beta staging)

- **Actions** are a unified orchestration primitive introduced in the
  `## Unreleased` section staging on `main`. Per the CHANGELOG, workflows are
  now definitions built around Actions: a workflow module must default-export
  [`defineWorkflow({ agent, action })`](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
  or `defineWorkflow({ agent, input?, output?, run })`. The runner owns root
  harness initialization, so the legacy named `run(ctx)` export, public
  `ctx.init()`, named workflow harness options, and workflow payload passed to
  agent initializers are removed.
- Actions serve as
  [reusable finite orchestration](https://github.com/withastro/flue/blob/main/CHANGELOG.md) for both workflows and model tools,
  with invocation-scoped harnesses, strict JSON output serialization, and one
  execution path for schema validation. Model-invoked Actions run as
  framework-owned tools in isolated child scopes while sharing the parent
  policy, sandbox, filesystem, and environment. The Action context
  deliberately does NOT expose `ctx.id`, `ctx.env`, or `ctx.req` -- callers
  must validate transport data and pass required values explicitly as input.
  *(Staged in `## Unreleased`; not in any in-window tag.)*
- Agent and workflow declaration APIs converged on a consistent
  [`define*` vocabulary](https://github.com/withastro/flue/blob/main/CHANGELOG.md):
  `createAgent()` → `defineAgent()` (deprecated alias kept) and
  `createWorkflow()` → `defineWorkflow()` (no alias). `CreatedAgent` /
  `CreatedWorkflow` types are removed. *(Staged in `## Unreleased`.)*

### Headless Deployment

- Flue builds to
  [Node.js](https://github.com/withastro/flue/blob/main/README.md) (single
  bundled `.mjs`) or
  [Cloudflare Workers](https://github.com/withastro/flue/blob/main/README.md)
  (with Durable Objects for session persistence). No TUI, no GUI.
- The [Cloudflare AI Gateway](https://github.com/withastro/flue/commit/9300e04e)
  is enabled by default on the Cloudflare target (v0.5.2), routing model
  calls through the gateway for logging, caching, and cost management.
- Local dev and production are converging on one execution topology:
  [`flue run` now executes through the normal HTTP application](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
  rather than a private child-process path, and `flue connect` is replaced by
  `flue console <agent>` (interactive transcript, one read-only workflow
  invocation). `--server <path|url>` selects a local mount or a remote attach.
  *(Staged in `## Unreleased`.)*

### Skills and Logic

- Agent logic can live in
  [Markdown skills](https://github.com/withastro/flue/blob/main/README.md)
  under `.agents/skills/`, referenced by name or path. Skills are called via
  `session.skill()` with typed schemas for structured output. Roles apply
  scoped system-prompt overlays at harness, session, or call level without
  being injected into message history. Markdown remains a fully supported
  skill path.
- The skill system now also supports a TypeScript-native definition path:
  [`defineSkill()`](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
  defines Agent Skills entirely in TypeScript -- instructions, frontmatter
  metadata, and supporting text/binary files -- with the same
  progressive-disclosure activation and lazy file access as imported
  `SKILL.md` directories, enabling single-file agents without build-time skill
  imports. Skills are now first-class programmable artifacts at parity with the
  Markdown path, not just on-disk files. *(Staged in `## Unreleased`.)*
- Skill names now follow
  [ASCII naming rules](https://github.com/withastro/flue/blob/main/CHANGELOG.md):
  1-64 lowercase ASCII letters/numbers/single-hyphens, no leading/trailing
  hyphen, aligning with an external Agent Skills specification. Previously
  accepted Unicode skill names must be renamed before upgrade. *(Staged in
  `## Unreleased`.)*

### Run Observability

- The 1.0-beta.1 tag moved run IDs to opaque
  [`run_<ulid>`](https://github.com/withastro/flue/commit/05f9d478f5)
  identifiers and made
  [`observe()`](https://github.com/withastro/flue/commit/05f9d478f5)
  receive every event directly: the `types` filter and per-subscriber JSON
  snapshots are removed; callbacks branch on `event.type` and treat events as
  read-only. This supersedes the v0.5.3 isolate-global `observe()` with a
  `types` filter.
- The framework gained
  [durable, recoverable execution](https://github.com/withastro/flue/commit/05f9d478f5)
  on a built-in SQLite store, with a swap from WebSocket/SSE to a proprietary
  **Durable Streams** transport that narrows naive external run-event
  consumption. In the staged work,
  `eventIndex` is formally
  [decoupled from Durable Streams resume offsets](https://github.com/withastro/flue/blob/main/CHANGELOG.md):
  it remains the identity/ordering coordinate within a runtime context, but
  consumers must checkpoint `FlueEventStream.offset` or the raw
  `Stream-Next-Offset` header instead. *(Decoupling staged in `## Unreleased`;
  the transport swap and SQLite store are tagged in beta.1.)*
- **Direction (STAGED, not shipped): private-by-default run observability.**
  In the `## Unreleased` CHANGELOG section on `main`, workflow runs become
  [private over HTTP by default](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
  unless a workflow separately exports `runs: WorkflowRunsHandler`; a
  workflow's `route` export then controls only `POST /workflows/:name`.
  Receipts shrink to an opaque `{ runId }` (waited results `{ runId, result }`),
  and `streamUrl` / `offset` are dropped from workflow receipts. In the same
  staged section, the
  [`flue logs` command is removed](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
  in favor of typed SDK run APIs (`client.runs.get()`, `.events()`,
  `.stream()`) or the raw `/runs/:runId` APIs, with HTTP access gated behind
  the workflow-exported `runs` middleware. **Channel note:** the in-window
  shipped tag `1.0.0-beta.1` still documents `flue logs` as functional and
  still uses a `{ streamUrl, offset, runId? }` envelope. These changes are
  staged on `main`, NOT delivered in beta.1/beta.2. Treat as direction.

### Connector System

- The bootstrap-via-coding-agent path still exists:
  [connectors](https://github.com/withastro/flue/blob/main/README.md) adapt
  third-party services into Flue, installed via `flue add <connector> |
  <agent-cli>`, which fetches Markdown installation instructions and pipes
  them to a coding agent that writes a TypeScript adapter.
- The 1.0-beta.1 tag added a
  [first-party connector ecosystem](https://github.com/withastro/flue/blob/main/CHANGELOG.md):
  15+ `@flue/*` channel and persistence packages -- including `@flue/stripe`,
  `@flue/notion`, `@flue/resend`, `@flue/shopify`, `@flue/salesforce`,
  `@flue/teams`, `@flue/linear`, `@flue/telegram`, `@flue/whatsapp`,
  `@flue/twilio`, and DB packages (mysql, redis, mongodb) -- for verified HTTP
  ingress, constructor-owned typed handlers, canonical provider identity, and
  discovered `channels/<name>.ts` routing. This moves Flue from
  "harness" toward "harness + verified-ingress + durable-persistence
  ecosystem."

### Security

- Shell environment variable values are
  [redacted from session history](https://github.com/withastro/flue/commit/850fdcee)
  (v0.4.1) before persistence. Operators with pre-v0.4.1 sessions should
  verify their session store does not contain unredacted env values.
- The 1.0-beta.1 tag tightened the session/event contract: durable events
  carry `v: 1`, and `turn_request` / `message_update` / raw assistant payloads
  are
  [no longer persisted](https://github.com/withastro/flue/commit/05f9d478f5).
  Provider channel handlers (GitHub/Slack/Discord/Google Chat) moved to
  provider-native deliveries, removing Flue's normalized wrappers and fixed
  allowlists.

## Posture

### Capability Lens

Flue's capabilities are narrow and sharp, and the 1.0-beta line is making
them sharper rather than wider. `init()` is still the surface; everything -- sandbox, model, sessions, skills, tools -- resolves through the harness. The
load-bearing capability change this cycle is the **Actions** primitive: a
single schema-validated unit of "reusable finite orchestration" that now backs
both workflows and model tools. Workflows are rebuilt as
`defineWorkflow({ agent, action })` definitions, and the framework converged on
a consistent `define*` vocabulary -- both staged on `main`, not yet tagged. The
beta.1 tag also gave the framework durable, recoverable execution on built-in
SQLite and a first-party connector ecosystem, moving Flue from a bare harness
toward a harness with verified ingress and persistence. The skill system gained
a TypeScript-native `defineSkill()` path at parity with Markdown, so skills are
now programmable objects rather than only on-disk files.

*Findings: `2026-05-12-flue-initial-profile-and-observability-wave`, `2026-06-23-flue-1.0-beta.1-and-beta.2-tags`, `2026-06-23-flue-workflows-rebuilt-on-actions`, `2026-06-23-flue-defineskill-typescript-skills`.*

### Accessibility Lens

Flue's accessibility ceiling is still TypeScript development fluency: no GUI,
no TUI, no managed cloud service. The 1.0-beta line cuts both ways. The
`defineSkill()` and `defineWorkflow()` paths lower the floor for single-file,
build-import-free agents, and the first-party connector packages remove the
coding-agent-installs-the-adapter step for 15+ common services. Against that,
the line is migration-heavy: opaque run IDs, valibot tool schemas, `define*`
renames (with `createWorkflow()` getting no alias), ASCII-only skill names, and
the staged `flue logs` removal all impose upgrade work. An operator adopting now
should expect at least one more migration before GA.

*Findings: `2026-05-12-flue-initial-profile-and-observability-wave`, `2026-06-23-flue-define-naming-unification`, `2026-06-23-flue-1.0-beta.1-and-beta.2-tags`.*

### Governance Lens

Flue's governance posture has shifted from "thin" toward "isolation-by-default
at the run boundary," though the strongest moves are staged, not tagged. The
clearest signal is the **staged** private-by-default run observability: workflow
runs become inaccessible over HTTP unless a workflow explicitly exports
`runs: WorkflowRunsHandler`, receipts shrink to an opaque `{ runId }`, and the
open `flue logs` CLI surface is removed in favor of typed, separately-authorized
SDK access. For a source Bitter watches precisely because of the model+harness
receipt boundary, this is a directional answer: the run record exists, but
consuming it externally is becoming a privileged, explicitly-granted capability
rather than an open stream. The Actions primitive reinforces this -- Action
contexts withhold `ctx.id` / `ctx.env` / `ctx.req`, forcing callers to validate
transport data and pass values explicitly. But the headline observability
changes sit in `## Unreleased` on `main`; the tagged beta.1 binary still exposes
`flue logs` and a `{ streamUrl, offset }` envelope. Governance is still
"operator owns the run" -- isolation, secrets, and retention remain the caller's
responsibility -- but the run-event surface is narrowing toward private-by-default.

*Findings: `2026-05-12-flue-initial-profile-and-observability-wave`, `2026-06-23-flue-workflow-runs-private-by-default`, `2026-06-23-flue-logs-removed-typed-run-apis`, `2026-06-23-flue-workflows-rebuilt-on-actions`.*

## Open Questions

- The private-by-default run observability and `flue logs` removal are staged
  in `## Unreleased`, not tagged. Will they ship in beta.3/GA as written, or
  soften before tagging?
- No formal security advisory channel exists. Security-relevant fixes land as
  regular commits in the CHANGELOG. How should operators monitor Flue for
  security patches given there are no GitHub Releases?
- `sandbox: 'local'` gives agents direct host access. What guardrail exists
  below the CI runner when a local-sandbox agent exceeds its intended scope?
- The connector system now mixes a first-party `@flue/*` ecosystem with the
  coding-agent-installs-the-adapter path. What is the trust/review model for
  third-party (non-first-party) connectors?
- Actions run model-invoked tools in isolated child scopes sharing parent
  policy/sandbox/filesystem/environment. Is the child-scope isolation
  sufficient to contain a compromised model tool, or does shared environment
  re-open the blast radius?

## What To Watch Next

- Whether the staged private-by-default observability, `flue logs` removal, and
  Actions/`define*` work ship in a beta.3/GA tag, and whether the surfaces
  change between staging and tag.
- Whether the first-party `@flue/*` connector ecosystem stabilizes its API
  before GA or keeps churning, and whether third-party connectors gain a review
  or signing mechanism.
- API stability: the 1.0-beta line is convergence motion, but breaking changes
  are still accumulating on `main`. Watch for a semver-stable GA series.
- Whether Flue ships a managed cloud path (hosted sessions, managed sandboxes)
  or stays infrastructure-first.

## Profile Hygiene

This profile follows the discipline in `RESEARCH_CONTRACT.md#profile`:
every concrete claim in the prose has an inline source link and an entry
in the `claims:` block; posture sections may interpret freely but must
cite finding IDs when naming a specific feature, behavior change, or
cross-provider comparison.

Note: Flue does not publish formal GitHub releases (the `/releases` page is
empty). The canonical receipt is
[`CHANGELOG.md`](https://github.com/withastro/flue/blob/main/CHANGELOG.md), and
version bumps are recorded as release commits / git tags (`v1.0.0-beta.N`).
Tagged claims cite the beta release commit; **staged** claims (those in the
`## Unreleased` CHANGELOG section on `main`) cite CHANGELOG.md and are flagged
in-prose as staged/direction, not shipped, because they are not present in any
in-window tag. Citations are at `commit` / CHANGELOG precision since individual
diffs have not all been reviewed; the README is cited at `official_docs`
precision for architectural claims.
