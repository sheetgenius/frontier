---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-cloudflare-0-12-10-rejects-credential-proxy-bucket-mutations
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/cloudflare/sandbox-sdk/commit/08ab8c9430a782683f0937aa13b2d07841f9a459
    precision: commit
  - url: https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%400.12.10
    precision: github_release
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/package.json#L41
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/src/index.ts#L76-L116
    precision: tagged_commit_file
---
# 2026-10-13-heypi-cloudflare-0-12-10-rejects-credential-proxy-bucket-mutations

Cloudflare 0.12.10 rejects credential-proxy bucket mutations. Cloudflare 0.12.10 adds a bucket-root mutation rejection to credentialProxy mounts while retaining object writes, probes and scoped listings. Earlier proxy behavior could forward bucket-level mutations subject to the real credential's permissions. heypi does not automatically configure such mounts: relevance depends on the caller-owned sandbox using them. The same release fixes intercepted-HTTPS multipart backups above 10 MiB and file recreation after restoreBackup(), for deployments exercising those features. These fixes are available on the compatible 0.12 line; existing consumer locks can retain older permitted versions.

Channel: tagged-release upstream 0.12.10, within heypi beta adapter ^0.12.3. Half: both. Date: 2026-09-23 (release and npm publication); fix 2026-09-22T11:44:54Z.

Operator consequence: If the Worker's sandbox uses credentialProxy mounts, resolve its SDK to 0.12.10 and review the actual mount credentials and permitted object operations. Inspect the Worker's lock as well as heypi's. Obtain these fixes without moving to the incompatible 1.0 session rewrite. Backup/restore fixes need feature-specific validation; no claim is made that every heypi deployment uses these surfaces.

## Receipt
- https://github.com/cloudflare/sandbox-sdk/commit/08ab8c9430a782683f0937aa13b2d07841f9a459
- https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%400.12.10
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/package.json#L41
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/src/index.ts#L76-L116
