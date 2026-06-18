---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-17-eve-ai-gateway-oidc
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-06-16
  end: 2026-06-19
versions_covered: "eve@0.11.4"
status: accepted
confidence: high
accessibility_impact: low
operator_relevance: medium
actionability: observe
evidence:
  - label: "eve@0.11.4 -- AI Gateway OIDC readiness via Vercel token resolver"
    url: https://github.com/vercel/eve/releases/tag/eve@0.11.4
    precision: tagged_release
---
# Eve AI Gateway OIDC readiness

## What this is

[eve@0.11.4](https://github.com/vercel/eve/releases/tag/eve@0.11.4) adds AI
Gateway OIDC readiness via a Vercel token resolver. Model traffic can be
authenticated to the AI Gateway using OIDC tokens resolved through Vercel rather
than relying solely on a static API key in the agent's environment.

## Why it matters

How an agent's model calls are credentialed is an operator concern: a resolver
that mints short-lived OIDC tokens is a different trust posture from a long-lived
key sitting in the agent's environment. This is a small, hosting-aligned change
(it routes through Vercel's token resolver), but it is the kind of
credential-plumbing detail that determines how model traffic is authorized in an
enterprise gateway setup.

## Operator consequence

- Teams routing Eve's model calls through the AI Gateway can authenticate via
  OIDC, narrowing reliance on static API keys.
- The path is Vercel-resolver-shaped; how it applies off Vercel's hosting is not
  established here and is worth confirming.
