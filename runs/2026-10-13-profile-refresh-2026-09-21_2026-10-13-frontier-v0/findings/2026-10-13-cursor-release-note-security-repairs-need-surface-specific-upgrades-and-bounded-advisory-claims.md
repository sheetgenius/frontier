---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-release-note-security-repairs-need-surface-specific-upgrades-and-bounded-advisory-claims
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/release-notes/ide#oct-9-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/ide#sep-24-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/agents-window#oct-1-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/cloud-agents#sep-28-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/sdk#sep-22-2026
    precision: official_docs
  - url: https://github.com/cursor/cursor/security/advisories
    precision: official_docs
---
# 2026-10-13-cursor-release-note-security-repairs-need-surface-specific-upgrades-and-bounded-advisory-claims

Release-note security repairs need surface-specific upgrades and bounded advisory claims. Vendor release notes report seven repairs to execution, agent context or controls. These include a branch name reaching a shell, browser pages forging agent input, repository hooks being skipped, and MCP server confirmation requirements being bypassed. Privacy crash uploads, Bitbucket outside-repository reads and SDK bridge startup configuration also changed. No matching public advisory or CVE was found in the checked sources, not proof that none exists anywhere.

Channel: tagged-release (IDE 3.22 through 3.24 and SDK 1.0.32); docs-only (Cloud Agents service fix). Half: defect. Date: 2026-09-22..2026-10-09.

Operator consequence: Install IDE 3.24.18 for the dated close and SDK 1.0.32 or later; 1.0.37 is current. Audit earlier Source Control commits that depended on secret-scanning hooks and confirmation-required MCP actions before 3.23. The Bitbucket change is hosted-service behavior. Follow per-surface notes alongside advisories; neither a new binary nor advisory silence proves every sandbox path safe.

## Receipt
- https://cursor.com/docs/release-notes/ide#oct-9-2026
- https://cursor.com/docs/release-notes/ide#sep-24-2026
- https://cursor.com/docs/release-notes/agents-window#oct-1-2026
- https://cursor.com/docs/release-notes/cloud-agents#sep-28-2026
- https://cursor.com/docs/release-notes/sdk#sep-22-2026
- https://github.com/cursor/cursor/security/advisories
