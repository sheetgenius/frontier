---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-desktop-s-changing-ports-and-long-lived-authority-specific-cookies-support-an-accumulation
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: medium
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/apps/desktop-host/src/index.ts
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/browser-auth.ts
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/index.ts#L104-L115
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/apps/desktop/src/main.ts#L450-L465
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/apps/desktop/src/welcome-backend.ts#L43-L51
    precision: tagged_commit_file
  - url: https://www.rfc-editor.org/rfc/rfc6265#section-8.5
    precision: official_docs
---
# 2026-10-24-deepseek-harness-desktop-s-changing-ports-and-long-lived-authority-specific-cookies-support-an-accumulation

Desktop's changing ports and long-lived authority-specific cookies support an accumulation failure hypothesis. The tagged mechanism supports accumulating differently named authentication cookies when Desktop receives different ports: names include authority, while browser cookies are sent by host rather than isolated by port. The default lifetime is 30 days. The inspected startup path does not remove stale authority cookies, and its authentication error discards the response status. Reports [10830](https://github.com/deepseek-ai/deepseek-harness/discussions/10830), [10831](https://github.com/deepseek-ai/deepseek-harness/discussions/10831) and [10868](https://github.com/deepseek-ai/deepseek-harness/discussions/10868) describe header-limit failures on Windows rc.2/rc.3. Their launch counts, measurements and recovery results are reporter observations, not results reproduced here.

Channel: preview-or-beta. Half: defect. Date: 2026-10-24.

Operator consequence: When a repeatedly restarted Desktop fails during Web authentication, preserve the HTTP status and inspect cookie count and size before resetting agent configuration or reinstalling plugins. Require a bounded cookie-lifecycle regression test and a released repair to settle the report. This does not establish a universal launch threshold, permanent failure, or a flaw in all Web authentication. The code-supported accumulation risk is promoted; the precise reported runtime outcomes remain unverified.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/apps/desktop-host/src/index.ts
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/browser-auth.ts
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/index.ts#L104-L115
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/apps/desktop/src/main.ts#L450-L465
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/apps/desktop/src/welcome-backend.ts#L43-L51
- https://www.rfc-editor.org/rfc/rfc6265#section-8.5
