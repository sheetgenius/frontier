---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-omp-v17-3-7-released-the-write-fallback-hook-v17-3-6-still-has-no-release
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v17.3.7
    precision: github_release
---
# 2026-08-20-omp-v17-3-7-released-the-write-fallback-hook-v17-3-6-still-has-no-release

v17.3.7 GitHub release published 2026-08-18T08:47:33Z, prerelease=false, body includes ExtensionAPI.registerFileWriteFallback. npm 17.3.7 published 2026-08-18T08:51:09Z. v17.3.6 GitHub release 404; npm 17.3.6 missing. v17.4.0 published 2026-08-20 with a breaking Tokenizer API. This is the fork can1357/oh-my-pi, not earendil-works/pi.

Channel: tagged-release for 17.3.7/17.4.0; v17.3.6 remains tag-without-release. Half: both.

Operator consequence: the write-fallback hook is now installable via npm 17.3.7. Name the path. 17.3.6 is not a registry version.

## Receipt
- https://github.com/can1357/oh-my-pi/releases/tag/v17.3.7
