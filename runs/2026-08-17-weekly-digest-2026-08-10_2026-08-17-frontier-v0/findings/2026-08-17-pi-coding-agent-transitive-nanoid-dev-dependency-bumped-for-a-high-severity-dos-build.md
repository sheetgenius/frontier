---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-pi-coding-agent-transitive-nanoid-dev-dependency-bumped-for-a-high-severity-dos-build
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/6633618350a9d9ea91fdc11668442e771869a56f
    precision: commit
---
# 2026-08-17-pi-coding-agent-transitive-nanoid-dev-dependency-bumped-for-a-high-severity-dos-build

Transitive nanoid dev dependency bumped for a high-severity DoS  --  build-time only, not shipped.

v0.84.2 notes "Updated the transitive `nanoid` development dependency to address a denial-of-service vulnerability." The two matching advisories in the GitHub advisory database, both published 2026-07-29 and both rated high, are GHSA-28wg-ghj8-5hjv (nanoid non-secure generators can loop indefinitely with negative size) and GHSA-2v37-7h3g-55p8 (nanoid custom generators can loop indefinitely when size is zero). The vulnerability class is denial of service: an unbounded loop, reachable only if attacker-influenced values reach nanoid's size argument. Pi's lockfile entry for nanoid is marked `"dev": true`, so the package is not part of the published runtime tree. An earlier bump to 3.3.17 landed on 2026-08-08 (commit 5ac91336) and this commit takes it to 3.3.18. Pi's own repository security advisories  --  GHSA-7v5m-pr3q-6453, GHSA-r95r-rj6r-c39x, GHSA-jfgx-wxx8-mp94, GHSA-mqxh-6gq7-558m  --  were all published 2026-06-08 and none was updated in this window.

Channel: tagged-release. Ancestry: Commit 6633618350a9d9ea91fdc11668442e771869a56f ("fix(coding-agent): update vulnerable nanoid dependency", authored 2026-08-14T08:09:35Z). `gh api repos/earendil-works/pi/compare/v0.84.2...66336183` returned status=behind, behind_by=12  --  ancestor of the stable v0.84.2 tag. The commit's own diff touches only package-lock.json (nanoid 3.3.17 to 3.3.18, entry marked `"dev": true`) and CHANGELOG.md.

Operator consequence: Ignore for runtime purposes; note it for supply-chain hygiene. nanoid is a development dependency in Pi's lockfile, so an operator running `@earendil-works/pi-coding-agent` does not ship it and is not exposed. This matters only if you build Pi from source in CI and your scanner flags the lockfile. It is worth saying plainly rather than dressing up: the only security-labelled line in three releases is a dev-tree bump, and Pi published no new advisory of its own this window.

## Receipt
- https://github.com/earendil-works/pi/commit/6633618350a9d9ea91fdc11668442e771869a56f
