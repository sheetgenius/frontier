---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-enterprise-1-71-0-repairs-llm-key-export-and-adds-an-opt-out-from-the-managed-proxy
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/enterprise/commit/e136d565f223e5261ca400912988e4e98fd64bb8
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/c413e3b25a661aa2b302605d9326565a90ac90b9
    precision: commit
  - url: https://github.com/OpenHands/enterprise/releases/tag/1.71.0
    precision: github_release
  - url: https://github.com/OpenHands/enterprise/pull/742
    precision: merged_pr
  - url: https://github.com/OpenHands/enterprise/blob/1.71.0/server/constants.py#L122-L126
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/enterprise/blob/1.71.0/server/routes/api_keys.py#L218-L235
    precision: tagged_commit_file
---
# 2026-10-13-openhands-enterprise-1-71-0-repairs-llm-key-export-and-adds-an-opt-out-from-the-managed-proxy

Enterprise 1.71.0 repairs LLM key export and adds an opt-out from the managed proxy. With billing off, an org flag or positive proxy credits previously enabled export of a working managed LLM key even when the deployment had not opted in. The repaired server gate requires ENABLE_BYOR_EXPORT in that case. Previously minted keys stay valid at the proxy until separately deleted, per #742. ENABLE_LEGACY_LITELLM is also added and defaults true; setting it false turns off managed proxy provisioning/budget/key paths and relevant endpoints return 403. Users then need direct provider configuration. The enterprise license remains PolyForm Free Trial 1.0.0, unchanged from the pre-window 1.61.0 release.

Channel: tagged-release. Half: both. Date: 2026-10-13 (enterprise 1.71.0).

Operator consequence: Upgrade non-billing enterprise deployments to 1.71.0 and remove previously exported BYOR keys from LiteLLM when export was unauthorized by deployment policy. Treat ENABLE_LEGACY_LITELLM=false as an explicit migration away from managed keys/budgets, not a default that the upgrade already applied. Hosted Cloud rollout remains unknown.

## Receipt
- https://github.com/OpenHands/enterprise/commit/e136d565f223e5261ca400912988e4e98fd64bb8
- https://github.com/OpenHands/enterprise/commit/c413e3b25a661aa2b302605d9326565a90ac90b9
- https://github.com/OpenHands/enterprise/releases/tag/1.71.0
- https://github.com/OpenHands/enterprise/pull/742
- https://github.com/OpenHands/enterprise/blob/1.71.0/server/constants.py#L122-L126
- https://github.com/OpenHands/enterprise/blob/1.71.0/server/routes/api_keys.py#L218-L235
