---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-12-pi-earendil-migration-and-harness-sdk
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-05-07
  end: 2026-05-12
versions_covered: "v0.73.1..v0.74.0"
status: accepted_signal
confidence: high
accessibility_impact: low
operator_relevance: high
bitter_relevance: medium
factory_relevance: low
actionability: adapt
evidence:
  - label: "v0.74.0 release notes — package scope migration"
    url: https://github.com/badlogic/pi-mono/releases/tag/v0.74.0
    precision: release_note
  - label: "v0.73.1 release notes — self-update migration + OAuth login selection + JSONC"
    url: https://github.com/badlogic/pi-mono/releases/tag/v0.73.1
    precision: release_note
  - label: "feat(agent): add harness stream configuration"
    url: https://github.com/badlogic/pi-mono/commit/c0f416aa
    precision: commit
---

# Pi Coding Agent: Package Scope Migration to Earendil Works and Harness SDK Refinements

## What Changed

Two releases shipped in this window:

**v0.74.0 (May 7) — Package scope migration**: Pi is moving from
`badlogic/pi-mono` → `earendil-works/pi-mono` (repo) and from
`@mariozechner/pi-coding-agent` → `@earendil-works/pi-coding-agent` (npm).
This release updates all internal repository links and package references for
the new scope. Pi is transitioning from a personal project (Mario Zechner /
badlogic) to an organizational identity (Earendil Works).

**v0.73.1 (May 7) — Self-update migration path**: `pi update --self` now
handles the npm scope migration. When the `@earendil-works/pi-coding-agent`
package is published, existing global installs can migrate through the normal
self-update flow: Pi uninstalls the old package and installs the new package
name returned by the version check endpoint. Operators do not need to manually
reinstall.

**v0.73.1 — Interactive OAuth login selection**: OAuth providers can now
present multiple login choices in `/login`, enabling provider-specific
interactive authentication flows (e.g., choosing between accounts or auth
methods for a single provider).

**v0.73.1 — JSONC-style `models.json` parsing**: `models.json` now allows
comments and trailing commas. Operators maintaining custom provider and model
configurations can annotate their files without workarounds.

**Harness stream configuration** (commit `c0f416aa`, May 10): The agent harness
now exposes `SimpleStreamOptions` and `Transport` types from `@earendil-works/pi-ai`
as part of harness configuration. Harness config is documented to include
stream options alongside tools, resources, and system prompt. This is an SDK/
embedding surface addition: operators building custom integrations on the Pi
harness can now configure stream behavior explicitly.

## Operator Consequence

The package scope migration is the highest-priority item for operators with
global Pi installations. After `@earendil-works/pi-coding-agent` is published,
`pi update --self` will migrate the install. Operators who have pinned the old
package name in CI or Dockerfiles need to update their references.

The JSONC models.json change is a minor ergonomic improvement with no behavioral
change. The OAuth login selection addition makes multi-account provider setups
slightly less painful.

The harness stream configuration is relevant for operators using Pi as an
embedded SDK (via `createAgentSession` or the `@earendil-works/pi-ai` harness
API). It is not relevant for CLI-only deployments.

## Bitter Implication

The Earendil Works transition is the signal Bitter should note. Pi is professionalizing.
The package rename is administrative, but the `earendil-works` brand and the organizational
repo move signal that Pi's maintainer is building a company or organization around this
tool. Future versions of Pi will be produced by Earendil Works, not by a personal account.

The source contract for Pi should be updated to reflect the new repo and npm scope once
the migration completes. This is a pending source-contract update that Bitter should not
forget: `badlogic/pi-mono` will eventually redirect or become stale.

## Signal

The package scope migration is action-bearing: operators with global Pi installs should
plan for the `pi update --self` migration when the new package publishes. Operators with
Pi pinned in CI or infrastructure should update their package references to
`@earendil-works/pi-coding-agent` proactively.
