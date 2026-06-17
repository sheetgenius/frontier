---
schema_version: bitter.frontier_digest_fragment.v0
fragment_id: 2026-05-12-flue-fragment
window:
  start: 2026-05-07
  end: 2026-05-12
parent_run: 2026-05-12-partial-cycle-flue-2026-05-07_2026-05-12-frontier-v0
status: not_published
note: >
  Digest fragment for Flue's initial profile cycle.
  Covers v0.4.0..v0.5.3 (May 7-12). Not part of the published
  2026-05-12 weekly digest (which was written before Flue was added
  to the watchlist).
---

# Flue Fragment (Initial Profile Cycle, 2026-05-07 -- 2026-05-12)

Flue is worth understanding as a category signal, not just as another
agent tool. Its explicit thesis -- "Agent = Model + Harness" -- articulates
what the useful layer around a model call actually is: sandbox, filesystem,
sessions, skills, MCP tools, deployment. That framing is not new, but
it is useful to see it stated this explicitly by an
independently-developed open-source framework from the Astro organization.

The harness is a first-class API object in Flue. `init()` returns a
configurable handle; you choose the sandbox (virtual, container, local),
the model, the skills directory, the role. Sessions are structs with
histories. Runs have IDs. The framing is clean enough that you can read
a Flue agent file and understand its full operating context in a few dozen
lines of TypeScript.

Three things from this week's releases worth tracking.

**Shell env redaction (v0.4.1, commit 850fdcee)**: Shell environment
variable values are now stripped from session history before persistence.
Before this fix, secrets in `process.env` could have been stored in
session message history. Operators with pre-0.4.1 Flue sessions should
check their session store. This is a quiet security patch in a project
that doesn't yet have a formal security advisory channel.

**Observability wave (v0.5.0)**: Flue gained run IDs, a `flue logs` CLI
command, run history endpoints, and SSE streaming with Last-Event-ID
resume. Every agent invocation is now a structured event with a stable
ID and a retrievable log. For operators building automated pipelines on
Flue, this is the first real evidence trail for what agents did and when.

**True-local sandbox (v0.4.0)**: `sandbox: 'local'` on Node.js now gives
the agent direct access to the host filesystem and shell without a just-bash
wrapper. This is a capability expansion -- the agent can now run `gh`,
`git`, `npm` directly -- and an isolation boundary change. If your CI
design assumed just-bash sandboxing for local runs, re-test.

Flue is pre-1.0 and moves fast. Its v0.4.0 release included two breaking
API renames (`result` → `schema`/`data`; removal of `commands`) alongside
the sandbox and provider changes. Factor API churn into any adoption plan.

## What Remains Uncertain

- There is no formal security advisory channel. The v0.4.1 shell env
  redaction fix landed as an ordinary commit. Operators need to watch
  commit messages, not a CVE feed.
- `sandbox: 'local'` semantics (direct host access, no isolation) make
  the CI runner the isolation boundary. What happens when an agent escapes
  the intended scope is not documented.
- The connector system (`flue add <connector> | <agent>`) installs
  TypeScript adapters by piping markdown instructions to a coding agent.
  The trust model for third-party connectors is not documented.
