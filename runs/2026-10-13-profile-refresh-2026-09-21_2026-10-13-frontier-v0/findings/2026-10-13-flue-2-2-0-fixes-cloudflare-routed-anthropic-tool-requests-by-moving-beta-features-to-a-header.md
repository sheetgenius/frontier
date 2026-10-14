---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-2-2-0-fixes-cloudflare-routed-anthropic-tool-requests-by-moving-beta-features-to-a-header
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/commit/43d15d1a82851e8d891d938ca8d8df4a2b7d34ec
    precision: commit
  - url: https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L40-L41
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.2.0
    precision: github_release
---
# 2026-10-13-flue-2-2-0-fixes-cloudflare-routed-anthropic-tool-requests-by-moving-beta-features-to-a-header

2.2.0 fixes Cloudflare-routed Anthropic tool requests by moving beta features to a header. Pi 0.87's beta messages path puts feature names in params.betas. Flue's Cloudflare binding shim forwarded that field into the body, causing tooled cloudflare/anthropic requests to fail with betas: Extra inputs are not permitted. The helper now strips the field from the beta request body and sends anthropic-beta in the headers, matching the Anthropic SDK's wire behavior. Stable 2.2.0 includes the repair; preview 2.2.0-next.0 does not and next.1 does.

Channel: tagged-release (also present in preview 2.2.0-next.1, absent from next.0). Half: defect. Date: 2026-09-28 (stable publication; code and next.1 publication 2026-09-25).

Operator consequence: Keep the Cloudflare binding shim and the resolved Pi packages compatible when updating dependencies. Move affected next.0 installations to stable 2.3.0, or to next.1 only when prerelease-only streaming is deliberately required. Test an Anthropic request with tools rather than relying on a no-tool smoke test; distinguish this cloudflare/anthropic path from section 6's cloudflare-ai-gateway model-id defect.

## Receipt
- https://github.com/withastro/flue/commit/43d15d1a82851e8d891d938ca8d8df4a2b7d34ec
- https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L40-L41
- https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.2.0
