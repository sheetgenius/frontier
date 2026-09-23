---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-gateway-key-sent-to-telemetry-and-credential-files-uploaded-to-cloud-sessions
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.246
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.248
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.275
    precision: github_release
---
# 2026-09-21-claude-code-gateway-key-sent-to-telemetry-and-credential-files-uploaded-to-cloud-sessions

Before 2.1.246 (2026-08-25), telemetry and metrics requests to Anthropic carried the API key configured for a third-party gateway via ANTHROPIC_BASE_URL. Before 2.1.248 (2026-08-27), /ultrareview and locally seeded cloud sessions uploaded uncommitted prod.env-style files, *.tfvars and editor swap or backup copies of key files. 2.1.268 stopped /mcp and plugin screens printing secrets resolved from ${VAR} placeholders. 2.1.275 (2026-09-17) fetches npm-sourced plugins with npm pack --ignore-scripts and integrity verification, so a package's install scripts no longer run. The repository's security-advisory feed published nothing dated in the window.

Channel: tagged-release (2.1.246, 2.1.248 on stable; 2.1.268, 2.1.275 latest only). Half: defect.

Operator consequence: Rotate any gateway key that ran with telemetry on before 2.1.246. If /ultrareview or a seeded cloud session ran before 2.1.248 with an uncommitted .tfvars or key backup in the tree, treat those values as disclosed to the cloud container. Scrub CI logs that printed /mcp output before 2.1.268. The advisory feed is not a signal for this product; read the changelog.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.246
- https://github.com/anthropics/claude-code/releases/tag/v2.1.248
- https://github.com/anthropics/claude-code/releases/tag/v2.1.275
