---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-27-gemini-session-invocation-protocols-stable
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-05-13
  end: 2026-05-27
versions_covered: "v0.43.0-preview.1..v0.44.0"
status: accepted_signal
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: test
evidence:
  - label: "Gemini CLI v0.44.0 stable release (2026-05-27)"
    url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0
    precision: github_release
  - label: "v0.44.0-preview.0 release (LocalSessionInvocation #26665, RemoteSessionInvocation #26937, 2026-05-22)"
    url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-preview.0
    precision: github_release
---

# Gemini CLI: Local and Remote Session Invocation Protocols Land Stable

## What Changed

Gemini CLI v0.44.0 (stable, 2026-05-27) ships `LocalSessionInvocation`
(#26665) and `RemoteSessionInvocation` (#26937) as part of the agent
session protocol, wired into the agent tool (#26948) and the
`adk.agentSessionSubagentEnabled` flag (#26947). Agent registration
moves to **first-wins prioritize project** (#26953), changing the
resolution order when an agent name is defined at multiple scopes.

The prior `AgentProtocol` (shipped in v0.41.0) was the pluggable
boundary for delegated work. The current profile's
`subagent-protocol-pluggable` claim names that abstraction; it also
records `RemoteSubagentProtocol` from v0.41.0 as having tests but
"no observed remote target." v0.44.0 crosses that line: a remote
session invocation now exists as a stable surface, not just a
preview.

## Why It Matters

The 2026-05-12 digest watch-list included Gemini's
`RemoteSubagentProtocol` precisely because the protocol existed
without a target. That state ended in this window. A stable remote
session invocation means delegated work can run somewhere other than
the operator's machine, with a documented call shape; what remains
open is *where* the remote target actually runs (Google-hosted,
operator-hosted, both?).

For Bitter and Factory: this is the first stable cross-vendor
delegation primitive that has both a local and a remote target on
the same protocol. It is also the resolution that the profile's
`subagent-protocol-pluggable` claim anticipated.

## Operator Implication

- Operators building delegated workflows on Gemini CLI should
  re-test against v0.44.0. The protocol is stable, not preview.
- The `first-wins prioritize project` agent registration change
  affects multi-scope deployments — if the same agent name is
  defined at user, workspace, and project scope, project wins.
  Audit any naming overlaps before upgrading.
- Until Google documents where remote invocations actually run,
  treat the remote path as "infrastructure-to-be-defined" — do
  not depend on it for production until the runtime is named.

## Open

- The release notes name `LocalSessionInvocation` and
  `RemoteSessionInvocation` as protocol primitives but do not
  document the remote target. Google-hosted? User-controlled?
  Both?
- The `adk.agentSessionSubagentEnabled` flag suggests a feature gate.
  Whether the protocols are opt-in by default or are now the canonical
  subagent transport is not explicit in the changelog.
