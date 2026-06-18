# Eve: Source Notes

**Homepage:** https://eve.dev
**Docs:** https://eve.dev/docs
**Repo:** https://github.com/vercel/eve
**Owner:** Vercel
**Added:** 2026-06-19
**Tier:** 2 (weekly cadence)

## Why it's on the watchlist

Eve is an open-source, filesystem-first TypeScript framework for building,
running, and scaling durable AI agents, announced by Vercel on 2026-06-17. Its
core framing is concrete: "an agent is a directory of files." An agent's system
prompt, model config, typed tools, contextually-loaded skills, channels,
schedules, subagents, external MCP connections, sandbox, and lifecycle hooks all
live as files in a project layout, not buried in application code.

Two properties put it on the frontier. First, durable execution: sessions are
multi-turn, resumable, and crash-safe across tool calls, subagent delegation,
and human pauses, built on the open-source Workflow SDK. Second, the authority
axis: human-in-the-loop approval gates let an operator pause, approve, or deny a
tool call before the agent proceeds, with a `rejected` stream event when a call
is denied at the gate. It also ships sandboxed compute across three backends
(Vercel, Microsandbox, Docker).

Apache-2.0 licensed. Public beta under Vercel beta terms at registration.

## Editorial angle for Bitter Frontier

**Signal:** A major vendor is shipping the agent harness as a versioned,
file-backed definition with durable execution and explicit approval gates,
rather than as a code-first SDK or a chat product.

**Why it matters:** It is evidence for the thesis that the contested layer is the
shaped environment around the model: tools, skills, sandbox, sessions,
connections, and the approval surface where an operator decides what an agent may
actually do. Eve makes that environment a reviewable directory and makes the
tool-call approval an explicit, observable event.

**Distinction:** Eve is an agent framework, a peer to Flue. It sits below a
different layer: the cross-harness operating loop that observes, constrains,
compares, and compounds work across many such frameworks. The two are adjacent,
not the same, and a single harness should not be read as the settled shape of
the category.

## Caution

Eve is a fast-moving public beta: the initial public release (0.10.0) and six
more releases landed within days, with breaking changes arriving on minor
versions. Treat stability as unsettled and monitor direction before treating any
primitive as architectural precedent. Do not let coverage of one early-beta
framework stand in for the whole category.

## Open questions at registration

- How stable is the public API across the rapid 0.10..0.11 cadence?
- Which of the three sandbox backends (Vercel, Microsandbox, Docker) are
  first-class versus best-effort in practice?
- What does the human-in-the-loop approval surface look like end to end: who
  approves, where the pause is recorded, what an operator sees?
- Does the Workflow SDK dependency constrain where Eve agents can be hosted and
  recovered?
