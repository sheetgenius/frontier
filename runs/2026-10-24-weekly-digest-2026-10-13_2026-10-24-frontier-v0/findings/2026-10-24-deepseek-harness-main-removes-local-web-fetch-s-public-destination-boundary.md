---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-main-removes-local-web-fetch-s-public-destination-boundary
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/2f01ad549c9dc7ecf480439f8e6801cc45ca14a0
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/c3e9b2884560f2461418126327e7acc8b0ecb5f0
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/web/web-fetch-http/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-fetch-http/src/network.ts
    precision: tagged_commit_file
---
# 2026-10-24-deepseek-harness-main-removes-local-web-fetch-s-public-destination-boundary

Main removes local Web Fetch's public-destination boundary. Main deletes public-address resolution, destination validation, connection pinning and the custom resolver interface. Requests use the installed proxy dispatcher and system resolver and can reach loopback, private networks and cloud metadata addresses. Same-origin redirect restrictions and response size limits remain. The commit explains that the old checks broke fake-IP proxy setups and did not constrain a model with shell network access. Rc.2 and rc.3 retain their public-destination checks; this is not a released rc change.

Channel: main-unreleased. Half: both. Date: 2026-10-20.

Operator consequence: Internal retrieval and fake-IP proxy compatibility become available to source compositions, at the cost of the fetch tool's destination filter. Put required destination restrictions in network confinement, a pre-execution policy, or remove the tool. Migrate custom resolvers before testing main. This is a compatibility and authority trade, not a reproduced internal-network exploit or a general improvement in model reasoning.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/2f01ad549c9dc7ecf480439f8e6801cc45ca14a0
- https://github.com/deepseek-ai/deepseek-harness/commit/c3e9b2884560f2461418126327e7acc8b0ecb5f0
- https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/web/web-fetch-http/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-fetch-http/src/network.ts
