---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-05-07
  end: 2026-05-12
versions_covered: "v0.4.0..v0.5.3"
status: accepted_signal
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: study
evidence:
  - label: "Flue README (withastro/flue, main branch)"
    url: https://github.com/withastro/flue/blob/main/README.md
    precision: official_docs
  - label: "v0.4.0 — sandbox:local true-local, app.ts provider registration, schema/data rename"
    url: https://github.com/withastro/flue/commit/de846c01
    precision: commit
  - label: "v0.4.1 — redact shell env values in history (security)"
    url: https://github.com/withastro/flue/commit/850fdcee
    precision: commit
  - label: "v0.5.0 — run history, flue logs CLI, SSE streaming with resume, harness rename"
    url: https://github.com/withastro/flue/commit/cc432b4f
    precision: commit
  - label: "v0.5.2 — Cloudflare AI Gateway integration"
    url: https://github.com/withastro/flue/commit/9300e04e
    precision: commit
---

# Flue v0.4.0--v0.5.3: Initial Profile, Observability Wave, and Sandbox Architecture

## What This Is

Flue (withastro/flue) is a TypeScript framework for building autonomous
agents, built around an explicit "Agent = Model + Harness" architecture.
It is Apache-2.0 licensed, maintained by the Astro organization, and has
shipped 19 versions since early 2026. Current version: v0.5.3 (2026-05-12).

This is the initial finding for the Flue profile. The window (2026-05-07
to 2026-05-12) covers v0.4.0 through v0.5.3 -- a significant series of
releases that includes breaking API changes, a security fix, and a full
observability wave.

Note: The source contract has `evidence_floor: release_note`. Flue does not
publish formal GitHub releases. Release commits ("Release @flue/sdk and
@flue/cli X.Y.Z") serve as the equivalent; they are cited at `commit`
precision since their diffs have not all been individually reviewed.

## Core Architecture (From README, official_docs precision)

Flue's primary architectural claim is the separation of model from harness:

```
Agent = Model + Harness (sandbox, filesystem, sessions, skills, MCP tools, deployment)
```

An agent is a TypeScript file in `.flue/agents/<name>.ts`. The harness is
initialized via `init()` and provides:

- **Sandbox**: virtual (just-bash, in-memory filesystem, no container) or
  container (Daytona, e2b) or local (direct host access). Virtual is the
  default.
- **Sessions**: message history and conversation state. Persistent on
  Cloudflare via Durable Objects; in-memory on Node.js by default.
- **Skills**: Markdown files in `.agents/skills/`, called via
  `session.skill()`. Agent logic lives in Markdown, not TypeScript.
- **Roles**: scope instructions without injecting into message history.
  Apply at harness, session, or call level.
- **Tasks**: child agents in detached sessions, for parallel delegation.
- **MCP**: `connectMcpServer()` for remote MCP servers (streamable HTTP
  or legacy SSE).

Deployment targets: Node.js (single bundled `.mjs`) and Cloudflare Workers
(with Durable Objects for session persistence). No TUI, no GUI. Build once,
deploy anywhere.

## Key Changes in the Window (v0.4.0--v0.5.3)

### Observability Wave (v0.5.0, 2026-05-11)

The largest change in the window is a full run-observability system:

- **Run IDs**: every invocation is assigned a stable ID
- **`flue logs` CLI**: tail live run output from any terminal
- **Run history endpoints**: GET `/runs` and per-run endpoints
- **SSE streaming with Last-Event-ID resume**: reconnect to a stream
  mid-run without losing events
- **Renamed "agent runtime" → "harness"**: the README and SDK now
  consistently use "harness" (matched this profile's terminology)

These are not cosmetic additions. Operators running Flue in CI or as
production agents now have structured evidence of what each run did.

### Security Fix: Shell Env Redaction (v0.4.1, commit 850fdcee)

Shell environment variable values are now redacted from session history
before persistence. Prior to this fix, secrets passed via `process.env`
or shell env could have been stored in session message history. Operators
relying on shell env for credentials should verify their session store
does not contain unredacted values from before v0.4.1.

### True-Local Sandbox (v0.4.0, commit c7d278eb)

`sandbox: 'local'` on Node.js now gives the agent direct access to the
host filesystem and shell without a just-bash wrapper. This is a
capability expansion: local sandbox agents can run `gh`, `git`, `npm`
and other host tools directly. The isolation boundary is now the CI
runner or the host, not just-bash.

### App.ts Provider Registration (v0.4.0, commit f0de1814)

`app.ts` now supports `configureProvider()` for runtime-global provider
settings: custom base URLs, request headers, gateway credentials, API
key overrides. This is relevant for operators routing agent traffic
through enterprise API gateways or OpenAI-compatible proxies.

### AI Gateway on Cloudflare (v0.5.2, commit ddf3d430)

The Cloudflare deployment target now enables Cloudflare's AI Gateway by
default, routing all model calls through the gateway for logging, caching,
and cost management.

### Breaking API Changes (v0.4.0)

- `result` option renamed to `schema`; return field renamed from `result`
  to `data` in `prompt()`, `skill()`, and `task()`
- `commands` / `defineCommand()` removed

## Operator Consequence

Operators evaluating Flue in CI pipelines should note:
- v0.4.1 shell env redaction is a security fix; upgrade if you relied on
  shell env for secrets in any pre-0.4.1 Flue session
- `sandbox: 'local'` semantics changed in v0.4.0: it is now truly local
  (no just-bash), which means no isolation from host environment
- `flue logs` and run history (v0.5.0) provide the evidence trail for
  what autonomous agents did

## Frontier Implication

Flue is the purest "Model + Harness" framing in the watchlist. Where other
tools hide harness complexity behind GUI or assume an interactive human,
Flue makes the harness a first-class API object: `init()` returns a
configurable handle. Skills live in Markdown. Sessions are structs. Runs
have IDs and streamable logs.

The run observability wave (v0.5.0) is the most direct convergence with
a receipt-based loop: every agent invocation has an ID, a log stream,
and a history. The gap is the "what was the operator consequence" layer --
Flue records what happened, but judgment about whether it was correct is
left to the caller.

## Signal

Three operator actions warranted:
- Upgrade past v0.4.1 if using shell env for credentials
- Re-test `sandbox: 'local'` behavior if you relied on just-bash isolation
- Evaluate `flue logs` and run history as the evidence trail for automated runs
