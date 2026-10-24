---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-bundled-bun-and-long-running-request-fixes-require-updating-the-running-application
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/.github/workflows/publish.yml
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/commit/baec69bae8e2c90551dbb8e3c462456870c735cf
    precision: commit
  - url: https://bun.com/blog/bun-v1.4.4#security
    precision: official_docs
  - url: https://github.com/anomalyco/opencode/commit/52a10f573f1da5103c85990da9341e3645a39365
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/c93aaae37157d785f76a8e9a9243a6560e286468
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/89d996c2c5b902c9467494d8abe01205830e1d4a
    precision: commit
---
# 2026-10-24-opencode-bundled-bun-and-long-running-request-fixes-require-updating-the-running-application

Bundled Bun and long-running request fixes require updating the running application. V2.1.3 and V1.19.4 move their bundled Bun build to 1.4.4. Bun's versioned notes describe security fixes across networking, decompression and other runtime surfaces; they do not establish which issue was exploitable through each OpenCode entry point. V2.1.0 fixes long-pending TUI requests; run and mini retain their existing no-timeout behavior through a shared helper. The same release adds persistent PTYs on Windows. V2.1.2 keeps locations loaded while sessions or background jobs are active; 2.1.3 degrades gracefully when file watching fails. V2.0.29 also continues responses after output-token limits. These are specific reliability repairs, not proof that every reported freeze or hung child process is fixed.

Channel: tagged-release. Half: both. Date: 2026-10-22.

Operator consequence: Update the application and restart the serving process; installing a newer system Bun does not replace the runtime already compiled into an OpenCode binary. Retest a representative long tool call, background job and watcher-limit condition on the actual client/server pair, with an external timeout and completion receipt. The changes can reduce babysitting and reconnect work, but this read measured neither the failure rate nor human time saved. Preserve unresolved freeze reports until a versioned reproduction ties them to a fix.

## Receipt
- https://github.com/anomalyco/opencode/blob/v2.1.4/.github/workflows/publish.yml
- https://github.com/anomalyco/opencode/commit/baec69bae8e2c90551dbb8e3c462456870c735cf
- https://bun.com/blog/bun-v1.4.4#security
- https://github.com/anomalyco/opencode/commit/52a10f573f1da5103c85990da9341e3645a39365
- https://github.com/anomalyco/opencode/commit/c93aaae37157d785f76a8e9a9243a6560e286468
- https://github.com/anomalyco/opencode/commit/89d996c2c5b902c9467494d8abe01205830e1d4a
