---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-heypi-0-3-0-beta-2-remains-the-install-channel-without-a-new-release
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://registry.npmjs.org/%40earendil-works%2Fpi-coding-agent/0.79.10
    precision: official_docs
  - url: https://registry.npmjs.org/%40hunvreus%2Fheypi
    precision: official_docs
  - url: https://registry.npmjs.org/create-heypi
    precision: official_docs
  - url: https://api.github.com/repos/hunvreus/heypi/git/tags/7e126ec748a66db9cd854c2474f630af60a64cbe
    precision: official_docs
  - url: https://github.com/hunvreus/heypi/compare/0.3.0-beta.2...main
    precision: git_compare
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/cli.md#L13-L20
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/index.ts#L7-L35
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/guides/deployment.md#L3-L24
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md#L3-L63
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/architecture.md#L3-L19
    precision: tagged_commit_file
---
# 2026-10-13-heypi-heypi-0-3-0-beta-2-remains-the-install-channel-without-a-new-release

heypi 0.3.0-beta.2 remains the install channel without a new release. No heypi source commit, tag or package publication was found in the window. All six packages still advertise beta.2 as latest. Core declares Node >=22, but a fresh resolution of Pi 0.79.10 declares >=22.19.0; the Gondolin adapter still declares >=23.6 and needs QEMU. npm create heypi@latest -- codex-tag my-agent copies the one Codex Tag template and installs its dependencies, with no adapter/runtime/model interview. The template selects Docker, a bash command policy and loopback admin, always starts a local adapter, adds Slack only when both credentials are supplied and forwards a GitHub token only if supplied. Pi owns model execution/transcripts/tools/session state; heypi owns transport/policy/staging/coordination. It is a supervised Node process with file-backed state and a one-process-per-state-directory deployment contract. The 0.3 rewrite is intentionally incompatible and removed its migration path.

Channel: preview-or-beta npm latest and tag; no main-only heypi changes; legacy non-prerelease 0.1.3 is separate. Half: both. Date: 2026-07-22 (beta.2 publication); channel rechecked for the 2026-10-13 cutoff on 2026-10-14.

Operator consequence: Pin @hunvreus/heypi@0.3.0-beta.2 or create-heypi@0.3.0-beta.2 explicitly for a new evaluation, inspect the selected runtime and generated policies, and keep the consumer lockfile. The old 0.1.3 remains installable but is not the recommended starting point for a new deployment; its older defaults are not beta.2 defaults. Rebuild 0.2.x configurations rather than assuming a migration. Package and dependency activity, not guesses about maintainer intent, should guide operational planning.

## Receipt
- https://registry.npmjs.org/%40earendil-works%2Fpi-coding-agent/0.79.10
- https://registry.npmjs.org/%40hunvreus%2Fheypi
- https://registry.npmjs.org/create-heypi
- https://api.github.com/repos/hunvreus/heypi/git/tags/7e126ec748a66db9cd854c2474f630af60a64cbe
- https://github.com/hunvreus/heypi/compare/0.3.0-beta.2...main
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/cli.md#L13-L20
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/index.ts#L7-L35
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/guides/deployment.md#L3-L24
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md#L3-L63
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/architecture.md#L3-L19
