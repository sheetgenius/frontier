---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-the-web-terminal-and-live-plugin-manager-reach-rc-optional-auto-review-runs-allowed-calls
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/api/terminal-controller/README.md#L30
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/README.md#L31
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/experimental/auto-review/README.md#L58-L62
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/architecture.md#L11-L39
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.1
    precision: github_release
---
# 2026-10-13-deepseek-harness-the-web-terminal-and-live-plugin-manager-reach-rc-optional-auto-review-runs-allowed-calls

The Web terminal and live plugin manager reach rc; optional Auto review runs allowed calls with Full access. The rc Web surface now includes an OS-user terminal and a live installer for unsandboxed in-process bundles, whose patches can replace the approval row. Auto review is distributed as an optional bundle. Under Auto's usual ask policy, a denial may request human approval if later listeners do not deny or cancel it; under never, the denial is final. Allowed calls use Full access. Unloading Auto moves live Auto Sessions to Full access with never. The base/Web composition enables configuration reload; headless, SDK and ACP explicitly disable it, and custom profiles may override it. Activation failures can leave partially applied plugin changes; parse failures preserve the previous configuration.

Channel: preview-or-beta. Half: both. Date: 2026-09-23 (Web terminal/manager), 2026-09-24 (CLI includes Auto review).

Operator consequence: Treat the Plugins page as an admin console and inspect each bundle's patches, including overrides of approval, permission and sandbox rows. Move live Auto Sessions back to Workspace Write before unloading the reviewer. Inspect --dump-config after changes and after an activation failure; a failed parse is a different case. An operator cookie gives access to a user-level terminal, but section 18 changes who can obtain that authority.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/api/terminal-controller/README.md#L30
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/README.md#L31
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/experimental/auto-review/README.md#L58-L62
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/architecture.md#L11-L39
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.1
