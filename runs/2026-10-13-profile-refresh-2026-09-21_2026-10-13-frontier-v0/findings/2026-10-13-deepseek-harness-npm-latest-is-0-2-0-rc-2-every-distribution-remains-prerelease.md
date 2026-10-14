---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-npm-latest-is-0-2-0-rc-2-every-distribution-remains-prerelease
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.2
    precision: github_release
  - url: https://registry.npmjs.org/@deepseek-ai%2Fdsh
    precision: package_registry
  - url: https://api.github.com/repos/deepseek-ai/deepseek-harness/commits/master
    precision: official_docs
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/scripts/release/families.ts#L355-L361
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/apps/desktop/README.md#L399-L419
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-npm-latest-is-0-2-0-rc-2-every-distribution-remains-prerelease

npm latest is 0.2.0-rc.2; every distribution remains prerelease. The README's npx @deepseek-ai/dsh web now resolves to the 0.2 rc line rather than 0.1.5-rc.2. npm latest is observed at 0.2.0-rc.2. The checked release path publishes rc versions to next; the actor, mechanism and exact time of the latest promotion are unrecorded. Desktop feeds name the same rc, and the vendor documents signed packaging, update polling with manual decisions, and mandatory-policy support. No installer signature or active blocking policy was observed. All distributions remain prerelease.

Channel: preview-or-beta. Half: both. Date: 2026-09-29 (rc release); dist-tags observed 2026-10-13, promotion time unknown.

Operator consequence: Pin @deepseek-ai/dsh@0.2.0-rc.2 and a reviewed lockfile rather than relying on latest. Treat the migration as breaking. Desktop's update-policy design needs separate fleet review; polling does not mean automatic installation on every check. A first non-prerelease version would change the channel answer, not by itself certify safety.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.2
- https://registry.npmjs.org/@deepseek-ai%2Fdsh
- https://api.github.com/repos/deepseek-ai/deepseek-harness/commits/master
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/scripts/release/families.ts#L355-L361
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/apps/desktop/README.md#L399-L419
