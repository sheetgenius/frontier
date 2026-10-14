---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-github-latest-still-points-to-2-2-2-while-npm-latest-is-2-3
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/releases/tag/%40flue%2Fcli%402.2.2
    precision: github_release
  - url: https://api.github.com/repos/withastro/flue/releases/latest
    precision: official_docs
  - url: https://registry.npmjs.org/@flue%2Fruntime/2.3.0
    precision: official_docs
  - url: https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L3-L16
    precision: tagged_commit_file
---
# 2026-10-13-flue-github-latest-still-points-to-2-2-2-while-npm-latest-is-2-3

GitHub Latest still points to 2.2.2 while npm latest is 2.3.0. npm published 2.3.0 without a matching GitHub Release. GitHub therefore still advertises @flue/cli@2.2.2 as its Latest release even though npm latest is 2.3.0. A watcher using only GitHub Releases receives no 2.3.0 release notice.

Channel: tagged-release (different current markers on GitHub Releases and npm). Half: defect. Date: 2026-10-13 (dated channel observation; GitHub release published 2026-09-28, npm 2.3.0 published 2026-10-12).

Operator consequence: Resolve the install version from npm and the root CHANGELOG at the version tag. GitHub's Latest badge alone leaves a reader on 2.2.2, which lacks the finish-hook, local process-group and interceptor-identity fixes. A GitHub Release for the new stable or an explicit documented channel policy would settle the mismatch.

## Receipt
- https://github.com/withastro/flue/releases/tag/%40flue%2Fcli%402.2.2
- https://api.github.com/repos/withastro/flue/releases/latest
- https://registry.npmjs.org/@flue%2Fruntime/2.3.0
- https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L3-L16
