---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-27-openhands-acp-ui-and-org-llm-profiles
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-05-13
  end: 2026-05-27
versions_covered: "main branch (1.7.0 released 2026-05-01 pre-window; no in-window tag)"
status: accepted_signal
confidence: high
accessibility_impact: high
operator_relevance: high
bitter_relevance: high
factory_relevance: high
actionability: study
composes:
  - claude-code
  - codex
  - gemini-cli
evidence:
  - label: "PR #14401: Settings → Agent ACP page (merged 2026-05-15)"
    url: https://github.com/OpenHands/OpenHands/pull/14401
    precision: commit_diff_reviewed
  - label: "PR #14406: organization-level LLM profile storage (merged 2026-05-27)"
    url: https://github.com/OpenHands/OpenHands/pull/14406
    precision: commit_diff_reviewed
  - label: "PR #14528: MCP/ACP env scoped to acting org member (merged 2026-05-22; pre-fix cross-org leak)"
    url: https://github.com/OpenHands/OpenHands/pull/14528
    precision: commit_diff_reviewed
---

# OpenHands: A GUI Front-End for Other Harnesses, Plus Org-Level LLM Profiles

## What Changed

Two large pieces of work merged in window — both reframe what OpenHands
is for.

**ACP agent settings UI ([PR #14401](https://github.com/OpenHands/OpenHands/pull/14401),
2026-05-15)** ships a `/settings/agent` page that lets an operator
point OpenHands at an external Agent Client Protocol agent — Claude
Code, Codex, Gemini CLI, or a custom command — as the *actual* agent
doing the work. While ACP is active, the LLM, Condenser, and MCP
settings pages are greyed out with a tooltip; the route loader
redirects direct access to `/settings/agent`. Conversation chips
resolve brand labels from a backend `acp_providers` registry. The
SDK bumps to v1.22.1 and unifies the conversation endpoint to
`/api/conversations` for both built-in and ACP agents. Feature
flag `ENABLE_ACP` defaults `false`.

**Org-level LLM profiles ([PR #14406](https://github.com/OpenHands/OpenHands/pull/14406),
2026-05-27)** adds organization-level LLM profile storage in SaaS
mode. Migration 116 adds an encrypted `llm_profiles` JSON column on
the `org` table. Six new CRUD endpoints sit under
`/api/organizations/{org_id}/profiles`. Permissions are two-tier:
`VIEW_ORG_SETTINGS` to list/get, `EDIT_ORG_SETTINGS` to create,
update, delete, rename, and **activate**. Activation is the bigger
surface — the same transaction updates the org's `profiles.active`
and the acting member's `agent_settings_diff`, with
`SELECT … FOR UPDATE` serializing concurrent writes.

**MCP/ACP env scoping ([PR #14528](https://github.com/OpenHands/OpenHands/pull/14528),
2026-05-22)** fixes a bug with security consequences. Before the fix,
when an org member added an MCP server on `/settings/mcp`, the
config was written to `org.agent_settings` *and broadcast* to every
other org member's row. Every other member of the same org saw and
could use it. `acp_env` had the same leak. The fix splits the
agent-settings diff into a shared half and a private half;
private keys go only to the acting member's row. `load()` also
strips the keys from any pre-fix data so legacy values stop
leaking on read.

## Why It Matters

The ACP UI is the strategic move. OpenHands is no longer just "an
agent harness." It is positioning itself as a *front-end for other
harnesses* — the SaaS-enterprise GUI shell around Claude Code, Codex,
or Gemini CLI, with sandboxing, RBAC, integrations, and now an
org-level policy surface.

This is exactly the meta-harness shape Bitter has been thinking
about. The current OpenHands profile names "productized platform
calibration source" as its watchlist purpose. The 2026-05-13 → 2026-05-27
window is the moment that thesis materialized in the product.

The org-level LLM profile work is the policy substrate the ACP
positioning needs. An org admin can now define which LLMs (and which
ACP back-ends) every member's chat surfaces inherit, with concurrency
safety on activation. That is the right shape for enterprise
self-hosted deployments.

The MCP/ACP env leak fix is the kind of pre-existing-bug-with-security-
consequence that an operator on multi-tenant SaaS must know about.
Anyone on a pre-fix deployment may already have cross-contaminated
MCP credentials between org members.

## Operator Implication

- **Evaluators of OpenHands as a multi-agent shell**: enable
  `ENABLE_ACP` against your preferred ACP back-end (Claude Code,
  Codex, Gemini CLI) and test the policy surface. The greyed-out
  LLM/Condenser/MCP settings while ACP is active are intentional —
  the back-end agent owns those.
- **Multi-tenant SaaS operators**: confirm you are on 2026-05-22+
  to get the MCP/ACP env scoping fix. Audit MCP credentials that
  may have been shared across org members pre-fix.
- **Enterprise admins**: the org-level LLM profile model with
  two-tier permissions is now the right tool for "this org uses
  these models, members inherit." Personal-org gating on the UI
  means team-org adoption needs the follow-up PR.

## Open

- No tagged release in window. Operators on the release channel
  see none of this until the next 1.x release. The OpenHands
  profile's `evidence_floor: release_note` would stage these as
  `commit_diff_reviewed` until consolidated.
- Team-org UI for the LLM profile feature is a follow-up PR not in
  window.
- The composition pattern (OpenHands ACP fronting Claude Code or
  Codex) raises a doctrine question about how findings should
  represent multi-product composition — recorded in this run's
  audit note.
