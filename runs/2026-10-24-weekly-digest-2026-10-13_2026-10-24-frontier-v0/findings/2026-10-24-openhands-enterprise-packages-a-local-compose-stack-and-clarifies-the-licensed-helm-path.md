---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-enterprise-packages-a-local-compose-stack-and-clarifies-the-licensed-helm-path
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/enterprise/commit/aeca9943f56d6d6f75ae94336c060dacc9031c3e
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/4f332f6768d424e31ee5a9eca2e724a0be143815
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/385d5a572ea737f6a8c941987197b6206b996b6f
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/d20518bd0014d671d8cb583c84f1d253d4c10356
    precision: commit
  - url: https://github.com/OpenHands/docs/commit/a903c5fc29d616d1df39cfc8482e5175e9dca2ad
    precision: commit
  - url: https://github.com/OpenHands/enterprise/blob/1.79.0/LICENSE
    precision: tagged_commit_file
---
# 2026-10-24-openhands-enterprise-packages-a-local-compose-stack-and-clarifies-the-licensed-helm-path

Enterprise packages a local Compose stack and clarifies the licensed Helm path. The source distribution now includes a Compose route for running the Enterprise stack locally, with subsequent fixes for released images, worker connectivity, startup migration and persistence. New provider-specific deployment and model-gateway guides cover more infrastructure combinations. The 2026-10-23 Helm instructions require a license enabled for Helm and registry credentials, including confirmation for existing trial users. They distinguish a licensed chart version from the independently released backend source. Enterprise remains under PolyForm Free Trial 1.0.0.

Channel: tagged-release (Compose); docs-only (Helm instructions). Half: capability. Date: 2026-10-19 (first source release); 2026-10-23 (Helm documentation).

Operator consequence: Use the packaged stack for a version-pinned evaluation instead of assembling services from unrelated current tags. Plan persistence before putting valuable data into it. For Kubernetes, obtain the authorized chart and provider-specific values rather than assuming the latest public source tag is the chart you can install. This lowers deployment assembly work, but license access, storage, authentication and a real first-conversation test remain the operator's responsibility. No Compose or Helm installation was performed here.

## Receipt
- https://github.com/OpenHands/enterprise/commit/aeca9943f56d6d6f75ae94336c060dacc9031c3e
- https://github.com/OpenHands/enterprise/commit/4f332f6768d424e31ee5a9eca2e724a0be143815
- https://github.com/OpenHands/enterprise/commit/385d5a572ea737f6a8c941987197b6206b996b6f
- https://github.com/OpenHands/enterprise/commit/d20518bd0014d671d8cb583c84f1d253d4c10356
- https://github.com/OpenHands/docs/commit/a903c5fc29d616d1df39cfc8482e5175e9dca2ad
- https://github.com/OpenHands/enterprise/blob/1.79.0/LICENSE
