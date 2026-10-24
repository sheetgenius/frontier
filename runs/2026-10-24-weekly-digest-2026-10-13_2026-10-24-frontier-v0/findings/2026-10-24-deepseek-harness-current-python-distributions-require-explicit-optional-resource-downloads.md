---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-current-python-distributions-require-explicit-optional-resource-downloads
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/687f282e8625c6b8d11ff58211a90524be2e4317/docs/upgrade-guide/v0.2.1-alpha.1/python-optional-resources/guide.md
    precision: tagged_commit_file
  - url: https://pypi.org/pypi/deepseek-harness-runtime-bin/0.2.1rc2/json
    precision: package_registry
  - url: https://pypi.org/pypi/deepseek-harness-sdk/0.2.1rc2/json
    precision: package_registry
---
# 2026-10-24-deepseek-harness-current-python-distributions-require-explicit-optional-resource-downloads

Current Python distributions require explicit optional resource downloads. The current Python contract says runtime wheels omit Office sidecars and authoring interpreters/libraries and SDK startup does not download them. Office and authoring resources can be selected independently with explicit `download_office()` and `download_primary_runtime()` calls. The CLI remains bundled and needs no system Node. Versioned metadata establishes five runtime wheel uploads beginning 2026-10-17T14:47:52.108883Z and the SDK wheel at 14:48:59.447319Z; wheel contents were not inspected here.

Channel: preview-or-beta. Half: both. Date: 2026-10-17.

Operator consequence: Prepare needed resources and platform-matched caches explicitly, setting `DSH_RESOURCE_CACHE` before offline deployment. A Python package installation no longer establishes that Office operations or the optional authoring environment are ready. Explicit resource selection reduces unwanted setup while moving preparation to the deployment owner.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/687f282e8625c6b8d11ff58211a90524be2e4317/docs/upgrade-guide/v0.2.1-alpha.1/python-optional-resources/guide.md
- https://pypi.org/pypi/deepseek-harness-runtime-bin/0.2.1rc2/json
- https://pypi.org/pypi/deepseek-harness-sdk/0.2.1rc2/json
