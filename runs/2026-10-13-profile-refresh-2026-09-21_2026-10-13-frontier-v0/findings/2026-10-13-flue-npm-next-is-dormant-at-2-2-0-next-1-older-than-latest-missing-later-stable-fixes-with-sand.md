---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-npm-next-is-dormant-at-2-2-0-next-1-older-than-latest-missing-later-stable-fixes-with-sand
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://registry.npmjs.org/@flue%2Fruntime/2.2.0-next.1
    precision: official_docs
  - url: https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.2.0-next.1
    precision: github_release
  - url: https://github.com/withastro/flue/commit/4827d6ee8dd3c3de714059301887a3872c6ac7a6
    precision: commit
  - url: https://github.com/withastro/flue/blob/4420fcd540ac63f040b8b1d206c00054faa0df63/.changeset/pre.json
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/blob/4420fcd540ac63f040b8b1d206c00054faa0df63/.github/workflows/release.yml#L3-L5
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/commit/68414567bb03c2b5ae0ee785d791aeeee81f0d63
    precision: commit
  - url: https://registry.npmjs.org/@flue%2Fruntime/2.1.0-next.0
    precision: official_docs
---
# 2026-10-13-flue-npm-next-is-dormant-at-2-2-0-next-1-older-than-latest-missing-later-stable-fixes-with-sand

npm next is dormant at 2.2.0-next.1: older than latest, missing later stable fixes, with sandbox output streaming confined to prereleases. The next line led 2.2.0 by three days. Sandbox `exec(..., { onOutput })` streams stdout and stderr chunks and still returns the buffered result, but this capability exists only on the next prerelease line (2.1.0-next.0 through 2.2.0-next.1) and the unmerged feat/cloudflare-streaming branch, not any stable. Changesets left main, but the next branch keeps its own prerelease config and workflow, and nothing has been pushed to it since 2026-09-25. Its published head is built on Pi 0.87.1 and predates 2.2.1, 2.2.2 and 2.3.0.

Channel: preview-or-beta. Half: both. Date: 2026-09-25 (prerelease) to 2026-10-12 (main's release tooling removed; the next branch's prerelease tooling untouched).

Operator consequence: Move anything that installs @flue/*@next to 2.3.0 unless the prerelease-only streaming feature is a deliberate requirement; next lacks the later stable sandbox kill, interceptor identity, gateway-id and finish-hook fixes. Moving to stable also gives up onOutput, so verify that trade in the command UI. Evidence that would settle the preview's future: a push to next, a new -next.N publication, removal of the branch or dist-tag, or onOutput in a stable's sandbox-api reference.

## Receipt
- https://registry.npmjs.org/@flue%2Fruntime/2.2.0-next.1
- https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.2.0-next.1
- https://github.com/withastro/flue/commit/4827d6ee8dd3c3de714059301887a3872c6ac7a6
- https://github.com/withastro/flue/blob/4420fcd540ac63f040b8b1d206c00054faa0df63/.changeset/pre.json
- https://github.com/withastro/flue/blob/4420fcd540ac63f040b8b1d206c00054faa0df63/.github/workflows/release.yml#L3-L5
- https://github.com/withastro/flue/commit/68414567bb03c2b5ae0ee785d791aeeee81f0d63
- https://registry.npmjs.org/@flue%2Fruntime/2.1.0-next.0
