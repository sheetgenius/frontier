---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-main-preserves-auto-on-shutdown-and-adds-opt-in-sdk-approval-handling-while-live-unload
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/4923f3cb4c0713ba825827c9f054575f2bf16b93
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/experimental/auto-review/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/4fbe6e3f42960dc44456acf10dfea5dd4b16c369
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/sdk/client/README.md
    precision: tagged_commit_file
---
# 2026-10-24-deepseek-harness-main-preserves-auto-on-shutdown-and-adds-opt-in-sdk-approval-handling-while-live-unload

Main preserves Auto on shutdown and adds opt-in SDK approval handling, while live unload still grants Full access. Main distinguishes application shutdown from removing Auto review while the application remains active. Shutdown preserves the selected permission preset and policy; live unload or reload still moves Auto sessions to Full access with approval policy `never`. Headless gains an explicit Auto integration, and SDK callers can opt into handling `approval/request` over stdio. Missing or failing approval handlers fail closed; there is no automatic approval from an elapsed timeout. Ordinary headless stdin does not become an interactive approval channel.

Channel: main-unreleased. Half: both. Date: 2026-10-21.

Operator consequence: The SDK path could remove custom approval-relay glue while preserving an accountable caller decision. Wait for versioned publication before relying on it. Even then, keep a transition plan for live plugin removal and reload: the shutdown repair does not erase that authority change. The current rc.2/rc.3 profile warning still applies.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/4923f3cb4c0713ba825827c9f054575f2bf16b93
- https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/experimental/auto-review/README.md
- https://github.com/deepseek-ai/deepseek-harness/commit/4fbe6e3f42960dc44456acf10dfea5dd4b16c369
- https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/sdk/client/README.md
