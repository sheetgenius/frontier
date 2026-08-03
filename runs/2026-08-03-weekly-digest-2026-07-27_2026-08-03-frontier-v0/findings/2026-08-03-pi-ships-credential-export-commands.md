---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-03-pi-ships-credential-export-commands
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-07-27
  end: 2026-08-03
status: accepted
confidence: medium
evidence:
  - url: https://github.com/earendil-works/pi/releases/tag/v0.83.0
    precision: github_release
---
# 2026-08-03-pi-ships-credential-export-commands

Pi v0.83.0 (2026-07-29, stable) adds 'pi auth print-api-key' and 'pi auth print-bearer-token', described as credential export for external clients with automatic OAuth refresh and minimum-validity enforcement. Recorded as an open question rather than a finding about risk: in a harness whose agent can run shell commands, a first-class command that prints a live credential to stdout is the confused-deputy shape, but whether the agent's own shell tool can reach it without an approval gate is what decides it, and the release note does not say. The permission surface and docs must be checked before any claim is made. Also in the tag: headless OpenRouter sign-in over SSH, and Claude Opus 5 via GitHub Copilot with a 1M context window. Breaking: bundled TypeBox upgraded to 1.3.7, removing Type.Base, Type.Awaited, Type.Promise, Type.AsyncIterator, Type.Iterator, Type.Options and Value.Mutate; extensions using them must migrate (#7243). Channel: tagged-release.

## Receipt
- https://github.com/earendil-works/pi/releases/tag/v0.83.0
