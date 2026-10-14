---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-cloudflare-1-0-removes-the-session-api-used-by-heypi-s-remote-adapter
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%401.0.0
    precision: github_release
  - url: https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%401.0.1
    precision: github_release
  - url: https://github.com/cloudflare/sandbox-sdk/blob/e4877c7368f8b1620bd4400ff831e28fba152eff/packages/sandbox/src/index.ts#L37-L44
    precision: tagged_commit_file
  - url: https://github.com/cloudflare/sandbox-sdk/tree/f9e972a14123bef3b93e9bb337bab6e83419fe7e/packages/sandbox/src
    precision: official_docs
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/src/index.ts#L76-L116
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/package.json#L41
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-vercel/package.json#L42
    precision: tagged_commit_file
  - url: https://github.com/vercel/sandbox/releases/tag/%40vercel/sandbox%403.0.0
    precision: github_release
  - url: https://github.com/vercel/sandbox/releases/tag/%40vercel/sandbox%403.8.0
    precision: github_release
---
# 2026-10-13-heypi-cloudflare-1-0-removes-the-session-api-used-by-heypi-s-remote-adapter

Cloudflare 1.0 removes the session API used by heypi's remote adapter. Cloudflare's 1.0.0 rewrite removes the session interface heypi's adapter imports and calls on a caller-owned sandbox. heypi's ^0.12.3 dependency ordinarily resolves 0.12.10, but does not control the SDK used by the operator's Worker to construct that object. Cloudflare 1.0.1 was published by window close. Separately, heypi pins Vercel SDK 2.6.0 exactly while 3.8.0 was published by cutoff. Vercel 3.0.0 explicitly preserves runtime-based creation through the legacy v2 API, so age alone does not prove that adapter broken or unsupported.

Channel: tagged-release upstream; heypi Cloudflare and Vercel adapters preview-or-beta. Half: defect. Date: 2026-09-30 (npm 1.0.0 publication); 1.0.1 and Vercel 3.8.0 published 2026-10-13.

Operator consequence: Keep the caller-owned Cloudflare Worker sandbox on the 0.12 line, preferably 0.12.10 for section 12's fixes, until the adapter is ported. Changing only heypi's transitive SDK does not change the object supplied by the Worker. Treat 1.0.0 API incompatibility as source analysis, not an executed deployment failure. Verify Vercel's exact 2.6.0 integration separately rather than transferring Cloudflare's incompatibility to it.

## Receipt
- https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%401.0.0
- https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%401.0.1
- https://github.com/cloudflare/sandbox-sdk/blob/e4877c7368f8b1620bd4400ff831e28fba152eff/packages/sandbox/src/index.ts#L37-L44
- https://github.com/cloudflare/sandbox-sdk/tree/f9e972a14123bef3b93e9bb337bab6e83419fe7e/packages/sandbox/src
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/src/index.ts#L76-L116
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/package.json#L41
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-vercel/package.json#L42
- https://github.com/vercel/sandbox/releases/tag/%40vercel/sandbox%403.0.0
- https://github.com/vercel/sandbox/releases/tag/%40vercel/sandbox%403.8.0
