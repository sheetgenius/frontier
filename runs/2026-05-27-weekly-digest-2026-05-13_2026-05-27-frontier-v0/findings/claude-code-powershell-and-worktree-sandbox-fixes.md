---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-27-claude-code-powershell-and-worktree-sandbox-fixes
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-13
  end: 2026-05-27
versions_covered: "2.1.147..2.1.149"
status: accepted_signal
confidence: high
accessibility_impact: low
operator_relevance: high
bitter_relevance: high
factory_relevance: low
actionability: upgrade
evidence:
  - label: "v2.1.149 changelog (PowerShell cd bypass, worktree sandbox scope fix, 2026-05-22)"
    url: https://code.claude.com/docs/en/changelog#2-1-149
    precision: release_note
  - label: "v2.1.148 changelog (Vertex AI provider bypass closure, 2026-05-21)"
    url: https://code.claude.com/docs/en/changelog#2-1-148
    precision: release_note
  - label: "v2.1.147 changelog (forceLoginOrgUUID, forceLoginMethod enforcement, 2026-05-21)"
    url: https://code.claude.com/docs/en/changelog#2-1-147
    precision: release_note
---

# Claude Code: Three De-Facto Security Advisories Without an Advisory Surface

## What Changed

Three Claude Code releases between 2026-05-21 and 2026-05-22 closed
sandbox- and enforcement-layer regressions that read as security
advisories — but Anthropic did not publish them as a separate advisory
page. They appear in the changelog as ordinary fix entries.

[v2.1.149](https://code.claude.com/docs/en/changelog#2-1-149) (2026-05-22)
fixes a PowerShell **permission bypass**: built-in `cd` functions
(`cd..`, `cd\`, `cd~`, `X:`) changed the working directory undetected,
letting subsequent commands read outside the workspace. The same release
fixes the sandbox write allowlist in git worktrees — it had been
covering the entire main repository root instead of only the shared
`.git` directory (with `hooks/` and `config` denied). PowerShell prefix
and wildcard allow rules also gained the ability to actually pre-approve
native executables (they previously matched the wrong way).

[v2.1.147](https://code.claude.com/docs/en/changelog#2-1-147)
(2026-05-21) closed `forceLoginOrgUUID` and `forceLoginMethod`
enforcement gaps against third-party-provider and API-key sessions —
enterprise login pinning was not actually pinning under some auth
modes.

## Why It Matters

These are not minor bugs. PowerShell `cd..` defeating the workspace
boundary is the canonical sandbox-escape shape. A worktree write
allowlist that scopes to the whole repo root, not the intended
sub-path, is a contained-execution-environment regression. Enterprise
login pinning that does not pin against third-party providers is a
policy-enforcement regression.

In the editorial voice of `RESEARCH_CONTRACT.md`: this is the kind of
fix that an operator must upgrade before deploying. The fact that the
changelog does not flag it as such is the operator-relevant detail.

## Operator Implication

Operators running 2.1.148 or earlier — particularly Windows operators
with PowerShell allowlists, git worktree workflows, or enterprise login
pinning — should upgrade to 2.1.149+ before deploying new agents.
Anyone running Vertex AI provider sessions should consult the 2.1.148
entry for the auth flow regression closed there.

Source-contract follow-up: `sources/claude-code.yml` names
`official_changelog` as priority-1 but has no separate security
advisory surface. Treat the changelog as the de-facto advisory surface
or amend the contract to add one. This is recorded as a doctrine
question in the audit note for this run.

## Open

- The changelog is the only source for these advisories. Operators
  monitoring for security-advisory-shape events (RSS, security
  mailing lists, CVE feeds) will not catch them.
- The 2.1.148 Vertex AI fix is the third auth-layer enforcement bug
  closed in the same week. The pattern suggests broader auth-pinning
  audit work is in progress; the changelog does not name it.
