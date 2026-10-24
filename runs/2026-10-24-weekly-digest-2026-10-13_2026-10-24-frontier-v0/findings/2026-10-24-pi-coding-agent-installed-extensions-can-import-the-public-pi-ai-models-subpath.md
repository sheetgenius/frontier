---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-installed-extensions-can-import-the-public-pi-ai-models-subpath
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/22dc6c26f3c530e11b8cc40443ecdce2b3c84116
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/extensions/loader.ts
    precision: tagged_commit_file
---
# 2026-10-24-pi-coding-agent-installed-extensions-can-import-the-public-pi-ai-models-subpath

Installed extensions can import the public pi-ai models subpath. The extension loader aliases and bundled virtual modules now expose `@earendil-works/pi-ai/models` and the legacy spelling. An installed extension can import public model helpers such as `clampThinkingLevel` without failing because that subpath was absent from the loader map. The patch contains a regression test; it was inspected, not executed here.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Extension authors can remove a local import workaround after testing the installed host. Match the host version before treating a public package export as reachable through every loader; this fixes that compatibility boundary from 1.4.0.

## Receipt
- https://github.com/earendil-works/pi/commit/22dc6c26f3c530e11b8cc40443ecdce2b3c84116
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/extensions/loader.ts
