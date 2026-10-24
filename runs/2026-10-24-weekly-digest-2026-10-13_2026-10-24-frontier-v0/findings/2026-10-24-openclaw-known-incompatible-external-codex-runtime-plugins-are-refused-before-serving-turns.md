---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-known-incompatible-external-codex-runtime-plugins-are-refused-before-serving-turns
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/cada1bc0d9ac1c0120f5fbc63829db310648b3e7
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/official-runtime-plugins.ts#L19-L28
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/loader-runtime-candidate.ts#L245-L267
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-known-incompatible-external-codex-runtime-plugins-are-refused-before-serving-turns

Known-incompatible external Codex runtime plugins are refused before serving turns. The official external `@openclaw/codex` runtime has a known compatibility floor of 2026.9.7. A broad plugin API range no longer admits a known older runtime that uses a removed SDK import path: loading marks it unavailable and gives repair/update guidance. Compatible older versions remain permitted; this is not a requirement that every external runtime version equal the core version.

Channel: tagged-release. Half: both. Date: 2026-10-18.

Operator consequence: Inspect the installed Codex runtime plugin as well as the core. Use `openclaw update repair` or `openclaw plugins update codex`, then restart the Gateway; linked installs need their linked source or load override corrected. Core-update success is not runtime-plugin compatibility proof.

## Receipt
- https://github.com/openclaw/openclaw/commit/cada1bc0d9ac1c0120f5fbc63829db310648b3e7
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/official-runtime-plugins.ts#L19-L28
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/loader-runtime-candidate.ts#L245-L267
