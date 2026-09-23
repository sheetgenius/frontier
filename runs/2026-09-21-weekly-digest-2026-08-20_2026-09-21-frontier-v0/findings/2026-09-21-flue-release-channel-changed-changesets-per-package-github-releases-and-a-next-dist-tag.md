---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-flue-release-channel-changed-changesets-per-package-github-releases-and-a-next-dist-tag
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.1.0
    precision: github_release
---
# 2026-09-21-flue-release-channel-changed-changesets-per-package-github-releases-and-a-next-dist-tag

Release channel changed: changesets, per-package GitHub Releases, and a `next` dist-tag. The contract's receipt rule ("Flue publishes no GitHub
Releases; cite the version-tagged root CHANGELOG.md") is now stale. Releases
exist, per package, and the root changelog froze at 2.0.6. Prereleases ship to
an npm `next` dist-tag.

Channel: tagged-release (process change carried by the 2.0.7 cut). Half: both. Date: 2026-09-15.

Operator consequence: Pin by `@flue/runtime@X` tags and read
packages/<pkg>/CHANGELOG.md or the per-package release body; the root CHANGELOG
no longer tells you what shipped. Anyone installing `@flue/*@next` gets
prerelease code. Coordinator: the flue contract's changelog surface note needs
updating (not done here; read-only lane).

## Receipt
- https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.1.0
