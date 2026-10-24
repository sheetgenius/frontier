---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-stable-installation-advances-while-preview-source-and-container-pointers-remain-distinct
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0
    precision: github_release
  - url: https://registry.npmjs.org/paperclipai
    precision: official_docs
  - url: https://registry.npmjs.org/paperclipai/2026.1023.0
    precision: official_docs
  - url: https://api.github.com/repos/paperclipai/paperclip/git/ref/tags/nightly/v2026.1024.0-nightly.0
    precision: official_docs
  - url: https://ghcr.io/v2/paperclipai/paperclip/manifests/sha256:0bbbd73df3326e85fd22b9704e5f23586a07fbcf043c5e57d22735b903a7c719
    precision: official_docs
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/README.md#L346-L364
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L42-L56
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/guides/getting-started/installation.md#L197-L217
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-stable-installation-advances-while-preview-source-and-container-pointers-remain-distinct

Stable installation advances while preview source and container pointers remain distinct. Stable is v2026.1023.0, GitHub-published 2026-10-24T00:03:59Z and npm-published 2026-10-23T23:54:25.678Z (`time[2026.1023.0]`). Its source equals the previous beta commit, not necessarily its package bytes. At the author's registry read ending 2026-10-24T10:24:53.168116Z, latest/beta/nightly/canary remain 2026.1023.0, 2026.1023.0-beta.0, 2026.1024.0-nightly.0 and 2026.1024.0-canary.7, all requiring Node >=24.11.0. The matching nightly Git tag now resolves to the canary SHA, and GHCR nightly separately advanced to sha256:0bbbd73df3326e85fd22b9704e5f23586a07fbcf043c5e57d22735b903a7c719, revision 5e26b733b9668d24b005418704d43f66109a7dd8, at the author read begun 2026-10-24T10:25:06.841258Z. The GitHub Latest result remains the crosscheck observation ending 10:14:47.713941Z; the author's 10:24:51.911892Z API attempt hit rate limiting, so no later successful GitHub-selector read is claimed.

Channel: tagged-release. Half: both. Date: 2026-10-24.

Operator consequence: For a fresh instance, pin the documented command as `npx paperclipai@2026.1023.0 onboard --yes` on Node 24.11.0 or newer. Skip the docs' Node 20 VPS recipe. Before upgrading or rolling back an existing instance, drain and stop every old writer, preserve SQLite lock files and unfinished-run evidence, then restart all writers on the chosen compatible version and verify provider interaction/file restoration. Preview names, source tags, npm tarballs and container digests are separate identities; record the one actually used.

## Receipt
- https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0
- https://registry.npmjs.org/paperclipai
- https://registry.npmjs.org/paperclipai/2026.1023.0
- https://api.github.com/repos/paperclipai/paperclip/git/ref/tags/nightly/v2026.1024.0-nightly.0
- https://ghcr.io/v2/paperclipai/paperclip/manifests/sha256:0bbbd73df3326e85fd22b9704e5f23586a07fbcf043c5e57d22735b903a7c719
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/README.md#L346-L364
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L42-L56
- https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/guides/getting-started/installation.md#L197-L217
