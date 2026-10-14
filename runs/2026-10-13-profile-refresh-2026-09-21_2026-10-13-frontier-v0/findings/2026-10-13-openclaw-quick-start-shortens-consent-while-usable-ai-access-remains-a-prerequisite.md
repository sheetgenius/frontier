---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-quick-start-shortens-consent-while-usable-ai-access-remains-a-prerequisite
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/src/commands/onboard-guided-consent.ts#L50-L75
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/src/wizard/i18n/locales/en.ts#L322-L328
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/start/getting-started.md#L25-L38
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/audit-checks.md#L140-L147
    precision: tagged_commit_file
---
# 2026-10-13-openclaw-quick-start-shortens-consent-while-usable-ai-access-remains-a-prerequisite

Quick start shortens consent while usable AI access remains a prerequisite. The specified Quick start path displays a short real-machine-access warning and automatically acknowledges its risk; Custom retains the full note and confirmation. The tagged getting-started page supports a one-prompt flow when usable AI access already exists. This does not establish every fresh-machine UI or the absence of later prompts. Cross-agent default audit severity is contextual, and the audit catalog has no dedicated allowBots entry. A short start is not evidence that each widened default has been shown individually.

Channel: tagged-release, inspected at 2026.10.3. Half: both. Date: 2026-10-13 posture recheck; observed path already present before this window.

Operator consequence: Owners wanting the full consent step can choose Custom. For shared Gateways, inspect bot admission, session visibility, messaging, delegation and Workshop maintenance explicitly rather than expecting the short Quick start warning to enumerate them. A recorded first-run session of each flow would settle what later UI actually shows.

## Receipt
- https://github.com/openclaw/openclaw/blob/v2026.10.3/src/commands/onboard-guided-consent.ts#L50-L75
- https://github.com/openclaw/openclaw/blob/v2026.10.3/src/wizard/i18n/locales/en.ts#L322-L328
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/start/getting-started.md#L25-L38
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/audit-checks.md#L140-L147
