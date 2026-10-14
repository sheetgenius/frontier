---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-omitted-runtime-uses-host-bash-with-access-bounded-by-the-service-account
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/runtime-tools.ts#L17-L27
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L1034-L1038
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/runtimes.md#L8-L24
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/storage.ts#L45-L70
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/secrets.ts#L67-L95
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/secrets.md#L17-L26
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/guides/deployment.md#L11
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/docs/configuration/runtime.md#L34
    precision: tagged_commit_file
---
# 2026-10-13-heypi-omitted-runtime-uses-host-bash-with-access-bounded-by-the-service-account

Omitted runtime uses host Bash with access bounded by the service account. This corrects an older default claim; it is not an in-window change. runtime?.kind falls back to host. Omitting runtime logs security_runtime_unisolated and proceeds; explicit host() does not trigger that warning. File tools apply path checks, but host Bash can leave the workspace within the service account's OS permissions. The workspace sits below the state root with encrypted secret records, memory and ledgers; secrets.key is at that root. The deployment checklist requires an explicit runtime choice, not a prohibition on trusted host execution.

Channel: preview-or-beta heypi 0.3.0-beta.2; not the legacy 0.1.3 defaults. Half: defect. Date: 2026-07-21 (historical beta.0 behavior); re-verified for the 2026-10-13 profile.

Operator consequence: Inspect missing runtime configurations and explicit host() use. Choose an isolation provider for model-directed commands that must not reach service-owned state. If using host execution, use a dedicated OS account and protect the state directory: encrypted values and their decryption key share the state root; anyone who can read both, including a complete backup, can decrypt them. Filesystem permissions and backup protection remain necessary. Selecting just-bash is explicit and still requires the dependency checks in sections 3, 11 and 13.

## Receipt
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/runtime-tools.ts#L17-L27
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L1034-L1038
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/runtimes.md#L8-L24
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/storage.ts#L45-L70
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/secrets.ts#L67-L95
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/secrets.md#L17-L26
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/guides/deployment.md#L11
- https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/docs/configuration/runtime.md#L34
