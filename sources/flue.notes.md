# Flue: Source Notes

**Homepage:** https://flueframework.com/
**Repo:** https://github.com/withastro/flue
**Owner:** withastro
**Added:** 2026-05-12
**Tier:** 2 (weekly cadence)

## Why it's on the watchlist

Flue is a TypeScript "programmable harness" for building autonomous AI agents.
Its explicit framing, "Agent = Model + Harness," separates the model from the
harness, filesystem, sandbox, skills, memory, sessions, and deployment surface.
That framing states in public, in a project by a credible open-source
organization (Astro), the thesis that the harness around the model is itself a
first-class layer.

Self-described as "like Claude Code, but 100% headless and programmable," with
logic living in Markdown skills, context, and AGENTS.md. Targets headless/CI/
deployable agents rather than chat UI.

Apache-2.0 licensed. Early traction as of registration.

## Editorial angle for Bitter Frontier

**Signal:** The agent ecosystem is moving from "AI SDKs" toward programmable harnesses.

**Why it matters:** It is evidence for the thesis that the valuable layer is not
just the model call, but the shaped environment around the model: tools,
filesystem, sandbox, memory, sessions, credentials, receipts, and deployment.

**Distinction:** Flue is an agent framework. It sits below a different layer:
the operating loop / receipt layer that observes, constrains, compares, and
compounds work across many such harnesses. The two are adjacent, not the same,
and a harness framework should not be mistaken for that cross-harness loop.

## Caution

APIs are self-described as experimental. Monitor direction before treating any
primitive as architectural precedent. Do not let coverage of Flue drift into
treating one experimental framework as the settled shape of the category.

## Open questions at registration

- Confirm GitHub repo ownership (withastro org is unusual for an agent harness).
- Verify Apache-2.0 license in repo.
- Establish baseline star count and commit velocity.
- Identify changelog or release surface for structured harvest.
