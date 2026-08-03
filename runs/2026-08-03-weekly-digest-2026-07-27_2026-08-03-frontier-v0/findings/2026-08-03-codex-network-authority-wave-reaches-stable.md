---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-03-codex-network-authority-wave-reaches-stable
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-07-27
  end: 2026-08-03
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.146.0
    precision: github_release
---
# 2026-08-03-codex-network-authority-wave-reaches-stable

Codex's network-authority hardening wave left alpha and reached stable in rust-v0.146.0 (2026-07-29), resolving a carry-forward check. The tag carries exec-server network policy callback types and their enablement (#34620, #34770), exec-server HTTP routed through the configured proxy policy (#35023), resolved proxy policy propagated through auth routing and auth refreshes (#34649, #34655), explicitly permitted loopback proxy targets (#34603), missing paths skipped in filesystem sandbox entries (#34598), shell approval keys as path URIs (#34806), network access rendering fixed in sandbox prompts (#34811) and plugin attribution preserved across command approvals (#35029). Four items are Windows-specific sandbox work: proxy traffic routed by restricting SID (#34613), elevated sandbox startup hardened (#34629), sandbox proxy settings preserved in guardian sessions (#35036), and sandboxed process trees reliably terminated (#34624). Channel: tagged-release. Separately the window carried seven 0.147.0-alpha builds through 2026-08-03; alpha is not a channel to run.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.146.0
