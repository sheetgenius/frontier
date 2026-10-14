---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-session-log-upload-is-enabled-in-the-default-rc-install-the-telemetry-environment-switch
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/src/index.ts#L51-L77
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/README.md#L33-L47
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/app-boot/src/profile-context.ts#L39-L55
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/llm-deepseek/src/adapter.ts#L106-L112
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/product-analytics/README.md#L12
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-session-log-upload-is-enabled-in-the-default-rc-install-the-telemetry-environment-switch

Session-log upload is enabled in the default rc install; the telemetry environment switch does not disable it. The earlier alpha-only upload default reached the rc line and the default npm install. Eligible requests through the DeepSeek adapter can include a bounded contiguous prefix of unaccepted session events, with an 8 MiB default cap; successful HTTP responses advance the local acceptance watermark. Re-enabling resumes the backlog, including events recorded while disabled. Event headers include cwd, and the prepared data can include tool results and log-only events. An ineligible Session or oversized/unserializable first event can omit the extension. DSH_TELEMETRY_DISABLED affects a different plugin.

Channel: preview-or-beta. Half: defect. Date: 2026-09-23 (first rc, 0.1.7-rc.1); retained in 0.2.0-rc.2.

Operator consequence: Before the first request, set session-log-deepseek enabled: false, disable plugin-package-inventory-deepseek, and set DSH_TELEMETRY_DISABLED=1; confirm the composed configuration with --dump-config. Do not later re-enable upload on a Session whose backlog must stay local. DeepSeek-adapter baseURL relays receive the extension too; pi-ai/custom-provider routes do not use this extension. Review Desktop product-analytics separately, because it has no user-facing switch. Do not infer unrestricted account-token forwarding from the log-extension destination behavior.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/src/index.ts#L51-L77
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/README.md#L33-L47
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/app-boot/src/profile-context.ts#L39-L55
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/llm-deepseek/src/adapter.ts#L106-L112
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/product-analytics/README.md#L12
