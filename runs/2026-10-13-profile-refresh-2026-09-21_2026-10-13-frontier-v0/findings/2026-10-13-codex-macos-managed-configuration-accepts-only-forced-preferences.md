---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-macos-managed-configuration-accepts-only-forced-preferences
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/73bf1812722f9b6fdbfac4997b2d96d7b64ff7c3
    precision: commit
---
# 2026-10-13-codex-macos-managed-configuration-accepts-only-forced-preferences

macOS managed configuration accepts only forced preferences. CFPreferencesCopyAppValue could return ordinary user-writable defaults as administrator configuration or override lower requirements layers. Codex now checks CFPreferencesAppValueIsForced before and after reading config_toml_base64 and requirements_toml_base64 and requires a string without exposing preference contents in diagnostics.

Channel: tagged-release. Half: defect. Date: 2026-09-22 (0.156.0).

Operator consequence: Run 0.156.0 or later and inspect MDM delivery of forced preferences. A value returned by CFPreferences alone is insufficient evidence of administrator ownership.

## Receipt
- https://github.com/openai/codex/commit/73bf1812722f9b6fdbfac4997b2d96d7b64ff7c3
