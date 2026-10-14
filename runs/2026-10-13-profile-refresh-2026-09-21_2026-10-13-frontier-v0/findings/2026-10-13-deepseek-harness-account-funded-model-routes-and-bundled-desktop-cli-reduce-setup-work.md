---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-account-funded-model-routes-and-bundled-desktop-cli-reduce-setup-work
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.2
    precision: github_release
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.2
    precision: github_release
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/credentials/deepseek-account-platform/README.md#L41
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/architecture.md#L51-L55
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/apps/desktop/README.md#L27-L31
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-account-funded-model-routes-and-bundled-desktop-cli-reduce-setup-work

Account-funded model routes and bundled Desktop CLI reduce setup work. The current rc supports browser sign-in and account credit through separate account-funded model entries, plus account-route web search without an extra key. Desktop's documented package includes the harness runtime and a managed dsh command. This is supported setup behavior, not evidence that an account had credit or that a paid task succeeded.

Channel: preview-or-beta. Half: capability. Date: 2026-09-24 (account route); 2026-09-29 (Desktop CLI bundling).

Operator consequence: Choose the billing/model entry deliberately and treat the local credential store as secret material. The OAuth callback bypasses RPC cookies but validates state and PKCE; do not describe it as unprotected. Remove the managed dsh command before uninstalling Desktop. Account-route requests still use the session-log extension in section 2.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.2
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.2
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/credentials/deepseek-account-platform/README.md#L41
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/architecture.md#L51-L55
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/apps/desktop/README.md#L27-L31
