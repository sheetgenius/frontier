---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-17-eve-multi-backend-sandbox
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-06-16
  end: 2026-06-19
versions_covered: "eve@0.11.1"
status: accepted
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: study
evidence:
  - label: "eve@0.11.1 -- graceful handling of missing sandbox template/session state across Vercel, Microsandbox, and Docker"
    url: https://github.com/vercel/eve/releases/tag/eve@0.11.1
    precision: tagged_release
  - label: "Eve docs: project layout (sandbox)"
    url: https://eve.dev/docs/reference/project-layout
    precision: official_docs
---
# Eve sandboxed compute across three backends (Vercel, Microsandbox, Docker)

## What this is

Eve runs commands and files in a [controlled sandbox
workspace](https://eve.dev/docs/reference/project-layout), and that sandbox is
pluggable across three backends. [eve@0.11.1](https://github.com/vercel/eve/releases/tag/eve@0.11.1)
adds graceful handling of missing sandbox template or session state across
Vercel, Microsandbox, and Docker, which names the three backends and shows the
sandbox layer being made robust to missing state.

## Why it matters

The sandbox is the runtime boundary: where an agent's commands and file writes
are contained. Supporting Vercel, Microsandbox, and Docker means the isolation
backend is a choice rather than a single hosted assumption, and the 0.11.1 fix
is the kind of edge-case hardening (missing template or session state) that
distinguishes a usable sandbox from a demo. For an operator, the backend choice
is also a trust and portability choice.

## Operator consequence

- The execution boundary can be backed by Vercel, Microsandbox, or Docker,
  letting teams pick a containment model that fits their environment.
- Backend maturity is not uniform by default; treat which backend is first-class
  versus best-effort as something to verify in practice (an open registration
  question in `sources/eve.yml`).
