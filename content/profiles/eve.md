---
schema_version: bitter.frontier_profile.v0
profile_id: eve
label: Eve
owner: Vercel
source_contract: sources/eve.yml
homepage: https://eve.dev
docs: https://eve.dev/docs
repo: https://github.com/vercel/eve
surface_class: open_source_releases
evidence_floor: release_note
status: active_watch
last_updated: 2026-06-19
last_full_review: 2026-06-19
claims:
  - id: filesystem-first-agent
    finding_id: 2026-06-17-eve-filesystem-first-agent-model
    last_verified: 2026-06-19
    status: active
  - id: initial-public-release
    finding_id: 2026-06-17-eve-initial-public-release
    last_verified: 2026-06-19
    status: active
  - id: durable-resumable-execution
    finding_id: 2026-06-17-eve-durable-execution-workflow-sdk
    last_verified: 2026-06-19
    status: active
  - id: hitl-approval-gates
    finding_id: 2026-06-17-eve-hitl-approval-gates
    last_verified: 2026-06-19
    status: active
  - id: multi-backend-sandbox
    finding_id: 2026-06-17-eve-multi-backend-sandbox
    last_verified: 2026-06-19
    status: active
  - id: subagents-and-mcp-connections
    finding_id: 2026-06-17-eve-subagents-and-mcp-connections
    last_verified: 2026-06-19
    status: active
  - id: ai-gateway-oidc
    finding_id: 2026-06-17-eve-ai-gateway-oidc
    last_verified: 2026-06-19
    status: active
  - id: fast-beta-velocity
    finding_id: 2026-06-17-eve-fast-beta-velocity
    last_verified: 2026-06-19
    status: active
posture_basis:
  capability:
    - 2026-06-17-eve-initial-public-release
    - 2026-06-17-eve-filesystem-first-agent-model
    - 2026-06-17-eve-durable-execution-workflow-sdk
    - 2026-06-17-eve-multi-backend-sandbox
  accessibility:
    - 2026-06-17-eve-initial-public-release
    - 2026-06-17-eve-filesystem-first-agent-model
  governance:
    - 2026-06-17-eve-hitl-approval-gates
    - 2026-06-17-eve-multi-backend-sandbox
    - 2026-06-17-eve-fast-beta-velocity
stance:
  use_for: "Operators building their own agent surface who want a file-backed, reviewable agent definition (instructions, tools, skills, sandbox, connections as files) with a human approval gate on tool calls and durable, resumable sessions. Useful as an authority-gate and durable-execution reference when studying how a harness records who approved a tool call and how a run survives a crash or a human pause."
  avoid_for: "Production deployments that need stability guarantees. Eve is a fast-moving public beta under Vercel beta terms: the initial public release (0.10.0) and several more landed within days, with breaking changes on minor versions. Do not treat individual primitives as settled architecture yet."
  watch_next: "Whether the public API stabilizes off the rapid 0.10..0.11 cadence; what the human-in-the-loop approval surface looks like end to end (who approves, where the pause is recorded, what an operator sees); and which of the three sandbox backends (Vercel, Microsandbox, Docker) are first-class versus best-effort in practice."
---

# Eve

Eve is an open-source, filesystem-first
[TypeScript framework](https://github.com/vercel/eve) for building, running, and
scaling durable AI agents, made by Vercel. It is
[Apache-2.0 licensed](https://github.com/vercel/eve/blob/main/LICENSE), with its
homepage and documentation at [eve.dev](https://eve.dev). It was
[announced on 2026-06-17](https://vercel.com/changelog/introducing-eve-an-open-source-agent-framework);
the initial public release was
[eve@0.10.0](https://github.com/vercel/eve/releases/tag/eve@0.10.0), and the
project moved through the 0.11.x line to
[eve@0.11.5](https://github.com/vercel/eve/releases/tag/eve@0.11.5) within days.
See `sources/eve.yml` for watch posture, accepted evidence, and high-signal
patterns.

Eve is a general-purpose agent framework and a peer to Flue, watched as a harness
on the coding and agent frontier rather than as a coding-only tool. The research
question is what its two distinguishing properties enable and limit: a file-backed
agent definition, and a runtime that is both durable and gated by human approval.

> **Status**: Eve is a public beta under Vercel beta terms. As of 2026-06-19 the
> latest release is eve@0.11.5, reached within days of the initial public
> release, with breaking changes arriving on minor versions. Treat stability as
> unsettled and expect API churn.

## Recent activity (2026-06-16 to 2026-06-19)

Eve launched in this window and moved fast. The
[initial public release eve@0.10.0](https://github.com/vercel/eve/releases/tag/eve@0.10.0)
shipped alongside
[Vercel's announcement](https://vercel.com/changelog/introducing-eve-an-open-source-agent-framework),
and the 0.11.x line then hardened the parts that matter most for an operator.
Two changes are on the authority axis:
[eve@0.11.0](https://github.com/vercel/eve/releases/tag/eve@0.11.0) made a denied
tool call an observable event, emitting a `rejected` `action.result` stream event
when a call is denied at the human-in-the-loop approval gate, and
[eve@0.11.2](https://github.com/vercel/eve/releases/tag/eve@0.11.2) fixed dynamic
connection tools so approval gates are preserved when those tools are exposed to
the model. Two more rounded out the runtime:
[eve@0.11.1](https://github.com/vercel/eve/releases/tag/eve@0.11.1) added graceful
handling of missing sandbox template or session state across the Vercel,
Microsandbox, and Docker backends, and
[eve@0.11.4](https://github.com/vercel/eve/releases/tag/eve@0.11.4) added AI
Gateway OIDC readiness via a Vercel token resolver. The
[cadence itself](https://github.com/vercel/eve/releases) is the calibration
signal: this is an early beta still settling its API.

## Current capability state

### Filesystem-first agent model

- Eve's central design is that
  [an agent is a directory of files](https://eve.dev/docs/reference/project-layout).
  The [project layout](https://eve.dev/docs/reference/project-layout) defines the
  agent's parts as files: `instructions.md` (system prompt), `agent.ts` (model and
  runtime config), `tools/` (typed functions the model can call), `skills/`
  (procedures loaded contextually), `channels/` (Slack, Discord, HTTP), `schedules/`
  (cron), `subagents/` (specialist agents for delegation), `connections/` (tools
  from external MCP servers), `sandbox/` (a controlled workspace for files and
  commands), and `hooks/` (lifecycle and stream-event handlers).
- A file-backed definition is reviewable and version-controllable: the system
  prompt, tool surface, skills, and approval-relevant sandbox are repository
  artifacts, so an agent's operating context is inspectable from its directory and
  changes to it show up as diffs.

### Durable, resumable execution

- Eve sessions are
  [multi-turn, resumable, and crash-safe](https://eve.dev/docs), built on the
  open-source [Workflow SDK](https://workflow-sdk.dev). The durability spans tool
  calls, subagent delegation, and human pauses, so a long-running agent that
  delegates and waits for a human decision can be interrupted and continued
  without losing the run. Durability is a property of the runtime, not
  caller-implemented retry logic.

### Sandboxed compute across three backends

- Eve runs commands and files in a
  [controlled sandbox](https://eve.dev/docs/reference/project-layout), and that
  sandbox is pluggable.
  [eve@0.11.1](https://github.com/vercel/eve/releases/tag/eve@0.11.1) names the
  three backends, Vercel, Microsandbox, and Docker, while adding graceful handling
  of missing template or session state. The execution boundary is a choice of
  containment model rather than a single hosted assumption.

### Composition: subagents and MCP connections

- The [project layout](https://eve.dev/docs/reference/project-layout) makes
  delegation and external tools file-backed: `subagents/` declares specialist
  agents the primary agent can hand work to, and `connections/` brings in tools
  from external MCP servers alongside the agent's own `tools/`. The agent's full
  reach is therefore part of the reviewable directory.

### Credentials

- [eve@0.11.4](https://github.com/vercel/eve/releases/tag/eve@0.11.4) added AI
  Gateway OIDC readiness via a Vercel token resolver, so model traffic can be
  authenticated to the gateway with short-lived OIDC tokens rather than relying
  solely on a static API key in the agent's environment. The path is shaped around
  Vercel's resolver.

## Posture

### Capability lens

Eve's capability bet is the harness as a versioned, file-backed object with a
durable runtime under it. The
[project layout](https://eve.dev/docs/reference/project-layout) is the surface: an
agent is its directory, and the directory holds the system prompt, the tools, the
skills, the channels, the schedules, the subagents, the connections, the sandbox,
and the hooks. Underneath, execution is
[durable, resumable, and crash-safe](https://eve.dev/docs) on the
[Workflow SDK](https://workflow-sdk.dev), and the
[sandbox is pluggable across three backends](https://github.com/vercel/eve/releases/tag/eve@0.11.1).
That combination, a portable definition plus a recoverable runtime, is what makes
Eve worth watching as more than a launch.

*Findings: `2026-06-17-eve-initial-public-release`,
`2026-06-17-eve-filesystem-first-agent-model`,
`2026-06-17-eve-durable-execution-workflow-sdk`,
`2026-06-17-eve-multi-backend-sandbox`.*

### Accessibility lens

Eve's accessibility ceiling is TypeScript development fluency: `agent.ts`, typed
tools, and a project layout assume a developer. The floor is lowered by the
file-backed model: an agent is a directory you can read, so understanding what an
agent is does not require tracing application code, and the structure is legible
to anyone who can read a repository.
[Vercel-shaped hosting paths](https://github.com/vercel/eve/releases/tag/eve@0.11.4)
make some of the surface easiest on Vercel's own platform; how much of that
generalizes off it is not established here. Because the project is a public beta
moving fast, the practical accessibility cost today includes tracking breaking
changes per upgrade.

*Findings: `2026-06-17-eve-initial-public-release`,
`2026-06-17-eve-filesystem-first-agent-model`.*

### Governance lens

This is where Eve is most frontier-relevant. Unlike a harness that leaves
authority entirely to the caller, Eve ships an explicit
[human-in-the-loop approval gate for tool calls](https://eve.dev/docs/tools): an
operator can pause, approve, or deny a tool call before the agent proceeds. The
window hardened it on two fronts. A denial is now an observable event,
[eve@0.11.0](https://github.com/vercel/eve/releases/tag/eve@0.11.0) emits a
`rejected` `action.result` stream event when a call is denied at the gate, and
the gate cannot be routed around as easily,
[eve@0.11.2](https://github.com/vercel/eve/releases/tag/eve@0.11.2) preserves
approval gates when dynamic connection tools are exposed to the model. The other
governance-relevant surface is the
[runtime boundary](https://github.com/vercel/eve/releases/tag/eve@0.11.1): the
sandbox backend (Vercel, Microsandbox, or Docker) determines how an agent's
commands and writes are contained, and the backend choice is also a trust choice.

The honest caveat is maturity. The 0.11.2 fix shows the approval surface was still
being made airtight during the launch window, and the
[release cadence](https://github.com/vercel/eve/releases) means the governance
primitives, like everything else, are still moving. The approval gate is a real
authority surface; whether it is complete and how it is recorded end to end are
open questions.

*Findings: `2026-06-17-eve-hitl-approval-gates`,
`2026-06-17-eve-multi-backend-sandbox`,
`2026-06-17-eve-fast-beta-velocity`.*

## Open questions

- End to end, what does the approval surface look like: who approves a held tool
  call, where the pause is recorded, and what an operator sees while a call waits?
  The `rejected` stream event shows the denial path; the rest of the surface is
  not yet established here.
- Which of the three sandbox backends (Vercel, Microsandbox, Docker) are
  first-class versus best-effort in practice, and what is the isolation guarantee
  of each?
- What does the Workflow SDK persist across a crash or a human pause, where, and
  for how long, and does that dependency constrain where Eve agents can be hosted
  and recovered?
- How much agent behavior is fully captured by the file layout versus resolved at
  runtime (model defaults, connection state, sandbox provisioning)?
- How stable is the public API across the rapid 0.10..0.11 cadence, and when does
  a semver-stable series arrive?

## What to watch next

- API stability: whether the breaking-change-per-minor pattern settles into a
  stable release series, and whether a 1.0 lands.
- The approval surface: whether the human-in-the-loop gate grows into a complete,
  recorded authority trail (not just a denial event) and whether gate coverage
  holds as new tool sources are added.
- Sandbox backends: whether Vercel, Microsandbox, and Docker reach parity, or
  whether one stays the first-class path.
- Portability: how much of Eve runs cleanly off Vercel's own hosting, given the
  Vercel-resolver-shaped credential path.

## Profile hygiene

This profile follows the discipline in `METHOD.md`: every concrete claim in the
prose has an inline source link and an entry in the `claims:` block; posture
sections may interpret freely but must cite finding IDs when naming a specific
feature, behavior change, or cross-provider comparison.

Note: Eve publishes tagged GitHub Releases with per-release notes, so version-level
claims are cited at `release_note` precision against the release tag; architectural
claims (the project layout, durable execution) are cited at `official_docs`
precision against the docs, and the launch itself at the Vercel changelog. Eve is a
public beta; claims reflect the 2026-06-16..2026-06-19 window and should be
re-verified against the current release, which moves quickly.
