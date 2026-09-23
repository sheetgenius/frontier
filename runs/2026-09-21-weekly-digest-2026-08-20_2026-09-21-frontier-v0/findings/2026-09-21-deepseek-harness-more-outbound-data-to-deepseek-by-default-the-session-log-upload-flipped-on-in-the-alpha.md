---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-deepseek-harness-more-outbound-data-to-deepseek-by-default-the-session-log-upload-flipped-on-in-the-alpha
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/ddefc45fbc7f8e46dd73185e68295696d1297887/packages/session/session-log-deepseek/src/index.ts
    precision: tagged_commit_file
---
# 2026-09-21-deepseek-harness-more-outbound-data-to-deepseek-by-default-the-session-log-upload-flipped-on-in-the-alpha

More outbound data to DeepSeek by default; the session-log upload flipped on in the alpha line. On rc 0.1.5-rc.2, DeepSeek requests carry your enabled plugin names and versions, and feedback-triggered telemetry is on. On alpha 0.1.6-alpha.x, requests to the official API also carry incremental session-log records, including the working directory path, unless you turn it off.

Channel: preview-or-beta (rc and alpha differ; see evidence). Half: defect (exposure). Date: 2026-08-27 (inventory), 2026-09-15 (session log, alpha).

Operator consequence: On any line, set `DSH_TELEMETRY_DISABLED=1` and disable `plugin-package-inventory-deepseek` if plugin names are sensitive. On the alpha line, also patch `session-log-deepseek` to `enabled: false` before first use against the official endpoint. A custom or third-party provider is unaffected: these contributions target official DeepSeek requests.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/ddefc45fbc7f8e46dd73185e68295696d1297887/packages/session/session-log-deepseek/src/index.ts
