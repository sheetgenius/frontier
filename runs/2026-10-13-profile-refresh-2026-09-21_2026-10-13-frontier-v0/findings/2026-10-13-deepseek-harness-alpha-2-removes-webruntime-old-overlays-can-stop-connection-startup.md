---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-alpha-2-removes-webruntime-old-overlays-can-stop-connection-startup
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/cb9a590c86d90948989247863bd921261bc0350b
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/docs/upgrade-guide/v0.2.1-alpha.1/web-listener-trust-config/guide.md
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-alpha-2-removes-webruntime-old-overlays-can-stop-connection-startup

Alpha.2 removes webRuntime; old overlays can stop Connection startup. The old webRuntime service no longer mounts. Overlays that inject it can wait indefinitely for that service and prevent required Connection startup. The supported replacement is webStartup; trusted-host reads change and lanAddresses disappears.

Channel: preview-or-beta; alpha-only, not npm latest. Half: defect. Date: 2026-10-09 (first containing tag, alpha.2).

Operator consequence: Replace inject: [webRuntime] with inject: [webStartup], read ctx.webStartup.trustedHosts, remove lanAddresses, and fully restate patched configuration as the guide instructs. Do not infer release inclusion from the guide-directory name. This is the migration cost attached to section 7's listener improvement.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/cb9a590c86d90948989247863bd921261bc0350b
- https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/docs/upgrade-guide/v0.2.1-alpha.1/web-listener-trust-config/guide.md
