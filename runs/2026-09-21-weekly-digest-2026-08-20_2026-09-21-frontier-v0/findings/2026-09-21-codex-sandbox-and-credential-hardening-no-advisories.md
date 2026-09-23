---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-codex-sandbox-and-credential-hardening-no-advisories
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.155.0
    precision: github_release
  - url: https://github.com/openai/codex/security/advisories
    precision: official_docs
---
# 2026-09-21-codex-sandbox-and-credential-hardening-no-advisories

Sandbox and credential hardening (no advisories). 0.152.0: cloud task requests reject untrusted backend URLs and disable redirects "to protect saved credentials". 0.155.0: blocks Windows-process escapes from restricted WSL sandboxes, hardens brokered shell snapshots against credential exposure, and invalidates remote-control sessions and cached state on account switch. No GHSA or CVE was published for any of them.

Channel: tagged-release. Half: defect. Date: 2026-09-01..2026-09-17.

Operator consequence: Sandbox-escape and credential fixes are shipping as release-note bullets, not advisories. An advisory feed will not tell you to upgrade. On Windows/WSL, move to >=0.155.0. 0.156.0 (OUT) adds more isolation-gap fixes.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.155.0
- https://github.com/openai/codex/security/advisories
