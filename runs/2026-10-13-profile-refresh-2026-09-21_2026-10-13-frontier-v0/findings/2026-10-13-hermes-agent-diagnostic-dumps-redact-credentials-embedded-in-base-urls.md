---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-diagnostic-dumps-redact-credentials-embedded-in-base-urls
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/205d5d78f1ff8a20701555bff26e107df48d5b92
    precision: commit
---
# 2026-10-13-hermes-agent-diagnostic-dumps-redact-credentials-embedded-in-base-urls

Diagnostic dumps redact credentials embedded in base URLs. Fallback-provider base URLs could preserve userinfo, query or fragment tokens in hermes dump and uploaded debug bundles despite force redaction. The fix requests strict URL-credential redaction in dump/upload paths and preserves canonical hyphenated sensitive parameter names. security.redact_secrets=True was a default, not complete path coverage.

Channel: tagged-release (first stable v0.21.6). Half: defect. Date: 2026-09-29.

Operator consequence: Inspect bundles already shared for URL credentials and revoke exposed tokens. Upgrade to v0.21.6+ before producing another diagnostic bundle; avoid assuming the ordinary log redaction policy strips every URL token.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/205d5d78f1ff8a20701555bff26e107df48d5b92
