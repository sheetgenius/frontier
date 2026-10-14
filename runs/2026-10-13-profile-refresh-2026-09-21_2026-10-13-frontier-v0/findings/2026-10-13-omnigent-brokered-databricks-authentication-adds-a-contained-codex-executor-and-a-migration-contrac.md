---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-brokered-databricks-authentication-adds-a-contained-codex-executor-and-a-migration-contrac
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/commit/5fa3bebe38aae7a6c929638f93eaa29fc26c7705
    precision: commit
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/inner/codex_worker.py#L111-L180
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/inner/model_egress.py#L53-L80
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/inner/codex_executor.py#L635-L658
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-brokered-databricks-authentication-adds-a-contained-codex-executor-and-a-migration-contrac

Brokered Databricks authentication adds a contained Codex executor and a migration contract. v0.16.0 introduces trusted-signer authentication and a model_egress grant for the affected Databricks Codex executor. The worker receives a placeholder while the trusted signer owns credential minting and request authorization. Signer-backed execution refuses an inactive or unsupported sandbox and constrains the registered endpoint. This is a specific executor path, not every codex-native launch. The newest tag accepts stable Codex 0.146.0 or newer, so the introducing PR's exact-version claim is stale.

Channel: tagged-release. Half: both. Date: 2026-09-26 merged; 2026-09-29 stable package.

Operator consequence: Configure the active supported sandbox, explicit provider/profile, route grant and credential helper before migrating this path. Keep the signer outside the worker's authority. Validate the actual Codex version rather than copying an old exact-version pin; no end-to-end credential-containment test was run here.

## Receipt
- https://github.com/omnigent-ai/omnigent/commit/5fa3bebe38aae7a6c929638f93eaa29fc26c7705
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/inner/codex_worker.py#L111-L180
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/inner/model_egress.py#L53-L80
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/inner/codex_executor.py#L635-L658
