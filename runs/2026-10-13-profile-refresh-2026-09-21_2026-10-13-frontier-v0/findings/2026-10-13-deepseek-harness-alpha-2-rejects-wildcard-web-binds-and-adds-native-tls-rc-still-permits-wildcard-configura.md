---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-alpha-2-rejects-wildcard-web-binds-and-adds-native-tls-rc-still-permits-wildcard-configura
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/host/webserver/src/index.ts#L127
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/host/webserver/src/index.ts#L262-L268
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/bundle/web-app/src/startup.ts#L64-L70
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/docs/user/guide/public-deployments.md#L27-L35
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/rpc-host.ts#L103-L112
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-alpha-2-rejects-wildcard-web-binds-and-adds-native-tls-rc-still-permits-wildcard-configura

Alpha.2 rejects wildcard Web binds and adds native TLS; rc still permits wildcard configuration. The default rc retains a configuration path to an all-interface listener and automatic LAN host trust; alpha.2 replaces it with concrete-interface binds and native TLS. Public URL support arrived in alpha.1. Both heads still use signed-cookie authentication, but that fact does not isolate the signing material from a same-user command (section 18).

Channel: preview-or-beta; new listener protections alpha-only. Half: both. Date: 2026-10-03 (public URL support); 2026-10-09 (concrete binds and native TLS).

Operator consequence: On the rc, remove webserver host: 0.0.0.0 from all composition layers and forward loopback through SSH for remote access. Treat the printed token-bearing URL as a credential. Alpha's supported remote-listener path adds configuration and migration work (section 21); TLS protects transport, not the inner agent/operator boundary.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/host/webserver/src/index.ts#L127
- https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/host/webserver/src/index.ts#L262-L268
- https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/bundle/web-app/src/startup.ts#L64-L70
- https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/docs/user/guide/public-deployments.md#L27-L35
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/rpc-host.ts#L103-L112
