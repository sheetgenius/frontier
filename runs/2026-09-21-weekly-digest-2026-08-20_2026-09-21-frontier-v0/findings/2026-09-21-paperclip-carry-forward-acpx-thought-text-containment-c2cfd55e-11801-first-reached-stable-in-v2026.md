---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-paperclip-carry-forward-acpx-thought-text-containment-c2cfd55e-11801-first-reached-stable-in-v2026
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
# 2026-09-21-paperclip-carry-forward-acpx-thought-text-containment-c2cfd55e-11801-first-reached-stable-in-v2026

Carry-forward: ACPX thought-text containment (c2cfd55e, #11801) first reached stable in v2026.831.0, not v2026.824.x. v2026.831.0 lists under Breaking Changes: ACPX run summaries are limited to the final output segment, "and the legacy full-summary setting is deliberately ignored so configuration cannot bypass the containment" (#11801). v2026.824.0's separate heartbeat-fallback raw-transcript fix is a different path and did not include #11801.

Channel: tagged-release. Half: defect (closed). Date: 2026-09-02.

Operator consequence: Stables v2026.817.0, v2026.824.0 and v2026.824.1 can still put ACPX thought text in automatic issue comments. Upgrade to v2026.831.0 or later. If issue comments from ACPX adapters on 824.x were exported or mirrored, re-audit them. The containment cannot be turned off by config, which removes one setting to audit.

## Receipt
- https://github.com/paperclipai/paperclip/releases/tag/v2026.831.0
