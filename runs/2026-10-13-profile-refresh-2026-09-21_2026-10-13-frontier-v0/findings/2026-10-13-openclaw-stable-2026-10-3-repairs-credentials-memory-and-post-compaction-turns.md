---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-stable-2026-10-3-repairs-credentials-memory-and-post-compaction-turns
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.10.3
    precision: github_release
  - url: https://registry.npmjs.org/openclaw/2026.10.3
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/compare/v2026.10.2...v2026.10.3
    precision: git_compare
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/CHANGELOG/2026.10.3.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/commit/8b69a99d3ba0ad28f5d28faedc1b27e4d2765f9b
    precision: commit
  - url: https://github.com/openclaw/openclaw/commit/e5781479f46cedc7adfa39adf54dad1e1683fa24
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/package.json
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/start/getting-started.md#L25-L38
    precision: tagged_commit_file
---
# 2026-10-13-openclaw-stable-2026-10-3-repairs-credentials-memory-and-post-compaction-turns

Stable 2026.10.3 repairs credentials, memory and post-compaction turns. Stable 2026.10.3 was released on 13 October, superseding 10.2 within the window. It prevents unreadable legacy OAuth cleanup from deleting valid canonical profiles, refuses lossy rewrites of malformed UTF-8 root memory, preserves enabled plugins whose startup was blocked, and waits for transcript projection rebuilding before the next turn after provider-native compaction. The missing wait predates the native-default change; these receipts do not establish that 10.2 introduced it. It also repairs blocked updater recovery, platform cases that stopped or rolled back the Gateway, and fresh macOS setup authentication. The manifest requires Node >=24.16.0 <25 or >=26.1.0; the installer and documented floating commands select latest.

Channel: tagged-release, npm latest observed at verification. Half: both. Date: 2026-10-13, GitHub 13:49:25Z and npm 13:43:36.600Z.

Operator consequence: Use `npm i -g openclaw@2026.10.3` for the window's exact main stable target rather than stopping at 10.2. Confirm Node compatibility first. Repairs protect existing identity and memory state, but they do not remove the need for backups or prove recovery of already lost data.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.10.3
- https://registry.npmjs.org/openclaw/2026.10.3
- https://github.com/openclaw/openclaw/compare/v2026.10.2...v2026.10.3
- https://github.com/openclaw/openclaw/blob/v2026.10.3/CHANGELOG/2026.10.3.md
- https://github.com/openclaw/openclaw/commit/8b69a99d3ba0ad28f5d28faedc1b27e4d2765f9b
- https://github.com/openclaw/openclaw/commit/e5781479f46cedc7adfa39adf54dad1e1683fa24
- https://github.com/openclaw/openclaw/blob/v2026.10.3/package.json
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/start/getting-started.md#L25-L38
