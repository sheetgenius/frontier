---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-the-rc-line-inherits-alpha-s-listener-instruction-and-integration-contracts-including-enab
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.1
    precision: github_release
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/host/webserver/src/index.ts
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/docs/upgrade-guide/v0.2.1-alpha.1/web-listener-trust-config/guide.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/context/agent-instructions/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/web-app/presets/standard.patch.yml
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/experimental/agent-team/README.md#L64-L70
    precision: tagged_commit_file
---
# 2026-10-24-deepseek-harness-the-rc-line-inherits-alpha-s-listener-instruction-and-integration-contracts-including-enab

The rc line inherits alpha's listener, instruction and integration contracts, including enabled Schedule tools. These are channel promotions of previously recorded alpha behavior, not six new inventions. The default rc now rejects wildcard Web listener addresses, supports explicit IPv4/IPv6 addresses and native TLS, and requires the `webRuntime` to `webStartup` migration. Global instructions include `DSH_HOME/AGENTS.md` and `DSH_AGENTS_HOME/AGENTS.md` before project files. Tool presentation accepts `native` or `ptc`, not `both`; custom subagent integrations need `session/wait`, and Team removes retained outbox intent, automatic retries and resend deduplication. Schedule is now built into Web, retaining tasks while removing retired optional-bundle selections. Standard, Creator and PTC expose its tools; Minimal and subagents do not. The [reminder implementation](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/schedule/schedule/src/domain.ts) still presents reminders as scheduled user messages.

Channel: preview-or-beta. Half: both. Date: 2026-10-17.

Operator consequence: Apply the profile's former alpha checklist when moving from 0.2.0-rc.2 to npm's current default. Inspect both global instruction homes, replace old listener injections, migrate `both` and Team callers, and explicitly disable `tool-schedule` if external reminder text must retain its origin. The rc also inherits optional [Git Worktrees](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/experimental/worktree/README.md) and [standalone SSH helper packaging](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/ssh/ssh-helper-runtime/README.md): Worktrees creates a checkout from a local commit and changes the session directory without copying uncommitted work or widening permissions; the SSH helper embeds Node for its own operation, not project commands, and still needs explicit deployment. Both first appear in alpha.2 by ancestry (`c67a2d6fdf848c38cd912ba3a3537deb8c8acc96` and `d9342fcb5dcb5302e115cccb8246c6aeced53d37`). They remove checkout/setup work while leaving grant selection and result review with the operator. No SSH release asset was executed or qualified here.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.1
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/host/webserver/src/index.ts
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/docs/upgrade-guide/v0.2.1-alpha.1/web-listener-trust-config/guide.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/context/agent-instructions/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/web-app/presets/standard.patch.yml
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/experimental/agent-team/README.md#L64-L70
