---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-01-flue-v090-auth-headers-websocket-runid
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.9.0"
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "From CHANGELOG.md v0.9.0 (2026-06-02): 'Forward authentication headers with `flue logs`. Repeat `--header 'Name: value'` to send application-owned headers...'; 'Inspect admitted workflow runs from Web"
    url: https://github.com/withastro/flue/blob/main/CHANGELOG.md
    precision: release_note
---
# Authentication headers in `flue logs`, WebSocket runId inspection, and FlueApiError export

## What Changed

Three new capabilities: (1) `flue logs` now accepts `--header 'Name: value'` flags (repeatable) to send application-owned headers; redirects rejected for credential safety. (2) WebSocket clients can inspect `WorkflowSocket.runId` after admission but before workflow result. (3) `@flue/sdk` now exports `FlueApiError` with HTTP status and parsed response body.

## Operator Implication

Operators can now send authenticated log inspection requests and handle SDK HTTP errors more explicitly.

## Receipt

- [From CHANGELOG.md v0.9.0 (2026-06-02): 'Forward authentication headers with `flue logs`. Repeat `--header 'Name: value'` to send application-owned headers...'; ](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
