---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-paperclip-v2026-831-0-paperclip-stopped-setting-the-wrapped-grok-cli-s-permission-mode-to-dontask
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.831.0
    precision: github_release
---
# 2026-09-21-paperclip-v2026-831-0-paperclip-stopped-setting-the-wrapped-grok-cli-s-permission-mode-to-dontask

v2026.831.0: Paperclip stopped setting the wrapped Grok CLI's permission mode to dontAsk. The Grok adapter passes no `--permission-mode` flag unless configured; before, the control plane injected `dontAsk` into the wrapped harness by default. `--always-approve` remains the documented unattended policy.

Channel: tagged-release. Half: defect (closed). Date: 2026-09-02.

Operator consequence: This answers part of the layering question for this pair: before 831.0, Paperclip overrode the wrapped Grok CLI's own permission default toward permissive without the operator choosing it. Now the harness's own default governs unless the operator sets a mode. Unattended Grok agents that relied on the implicit dontAsk may now stall on prompts; set `--always-approve` deliberately if that is what you want.

## Receipt
- https://github.com/paperclipai/paperclip/releases/tag/v2026.831.0
