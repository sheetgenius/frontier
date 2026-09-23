---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openhands-v1-15-0-removes-the-pdf-preview-sandbox-tagged
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/16702
    precision: merged_pr
---
# 2026-09-21-openhands-v1-15-0-removes-the-pdf-preview-sandbox-tagged

v1.15.0 removes the PDF preview sandbox (tagged). The iframe for PDF preview in Files/Preview lost `sandbox="allow-same-origin"`, because Chromium's built-in PDF viewer will not run in a sandboxed frame. PDFs render now. The frame that shows files from the agent workspace is no longer sandboxed.

Channel: tagged-release (was main-unreleased in the parent). Half: both. Date: 2026-08-21.

Operator consequence: On v1.15.0 and later, treat opening a file the agent produced in preview as opening it in your browser. For untrusted repos, download and inspect the file instead of previewing it in Canvas.

## Receipt
- https://github.com/OpenHands/OpenHands/pull/16702
