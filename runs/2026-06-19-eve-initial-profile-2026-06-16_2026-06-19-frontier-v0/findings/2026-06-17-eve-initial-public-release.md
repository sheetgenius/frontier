---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-17-eve-initial-public-release
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-06-16
  end: 2026-06-19
versions_covered: "eve@0.10.0..eve@0.11.5"
status: accepted
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: observe
evidence:
  - label: "Vercel changelog: introducing Eve, an open-source agent framework (2026-06-17)"
    url: https://vercel.com/changelog/introducing-eve-an-open-source-agent-framework
    precision: maintainer_authored_post
  - label: "eve@0.10.0 initial public release"
    url: https://github.com/vercel/eve/releases/tag/eve@0.10.0
    precision: tagged_release
  - label: "Eve homepage and docs"
    url: https://eve.dev
    precision: official_docs
  - label: "Apache-2.0 license (vercel/eve)"
    url: https://github.com/vercel/eve/blob/main/LICENSE
    precision: official_docs
---
# Eve initial public release (eve@0.10.0, Vercel)

## What this is

Eve is an open-source, filesystem-first TypeScript framework for building,
running, and scaling durable AI agents. It was
[announced by Vercel on 2026-06-17](https://vercel.com/changelog/introducing-eve-an-open-source-agent-framework),
with the
[initial public release tagged eve@0.10.0](https://github.com/vercel/eve/releases/tag/eve@0.10.0).
It is [Apache-2.0 licensed](https://github.com/vercel/eve/blob/main/LICENSE),
with its homepage and documentation at [eve.dev](https://eve.dev).

This is the initial finding for the Eve profile. Eve enters the watchlist as a
Tier 2 source and a peer to Flue: both are open-source TypeScript agent
frameworks, watched as harnesses on the coding and agent frontier rather than as
coding-only tools.

## Why it is on the frontier

Eve's framing is that an agent is a directory of files rather than an object
constructed in application code, and that the runtime around the model is
durable and gated. The launch puts a major vendor behind a file-backed agent
definition with explicit human-in-the-loop approval and crash-safe execution.
Those properties, not the launch itself, are what the rest of this run's
findings examine.

## Channel status

eve@0.10.0 is a tagged release on the project's GitHub Releases surface, which is
Eve's canonical receipt surface (see `sources/eve.yml`). As of the window close,
the project had advanced through the 0.11.x line to eve@0.11.5; that velocity is
treated as its own calibration finding rather than read as stability.

## Operator consequence

- A new general-purpose agent framework exists with a versioned, file-backed
  agent model and a vendor behind it.
- Treat it as category evidence and an authority-gate reference at this stage,
  not as stable infrastructure: it is a public beta under Vercel beta terms.
