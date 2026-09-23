---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-flue-docs-on-main-skill-allowed-tools-is-guidance-not-a-security-boundary
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/commit/c5a2a725fe
    precision: commit
---
# 2026-09-21-flue-docs-on-main-skill-allowed-tools-is-guidance-not-a-security-boundary

Docs on main: skill `allowed-tools` is guidance, not a security boundary. Behavior did not change; Flue never enforced `allowed-tools`.
What changed is that the shipped type comment called them "pre-approved",
which reads as a permission grant, and main now says plainly it is unenforced.

Channel: main-unreleased. Half: defect (docs). Date: 2026-09-21.

Operator consequence: Re-audit: if any skill in your Flue agent relies on
`allowed-tools` to limit what it can call, it limits nothing on any released
version. Put the restriction in tool code or an approval gate. This matches the
Agent Skills spec's own experimental status for the field and is worth
comparing across harnesses that do enforce it.

## Receipt
- https://github.com/withastro/flue/commit/c5a2a725fe
