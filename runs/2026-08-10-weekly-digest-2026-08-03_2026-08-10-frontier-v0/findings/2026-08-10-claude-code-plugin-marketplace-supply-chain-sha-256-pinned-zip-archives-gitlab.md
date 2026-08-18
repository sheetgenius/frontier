---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-claude-code-plugin-marketplace-supply-chain-sha-256-pinned-zip-archives-gitlab
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/changelog#2-1-224
    precision: official_changelog
---
# 2026-08-10-claude-code-plugin-marketplace-supply-chain-sha-256-pinned-zip-archives-gitlab

Plugin marketplace supply chain: SHA-256-pinned zip archives, GitLab sources, owner wildcards  --  and an allowlist that could be pointed at the wrong host.

The capability half: v2.1.224 added an `archive` plugin source  --  "install plugins from a zip over HTTPS without git or npm, with optional SHA-256 pinning." v2.1.223 added owner wildcard entries (`"owner/*"`) to the `strictKnownMarketplaces` and `blockedMarketplaces` managed settings, for allowing or blocking every marketplace repo under a GitHub org. v2.1.232 brought GitLab into the marketplace system (bare `gitlab.com` URLs including nested subgroups now clone like `github.com` URLs) and added `additionalMarketplaces`/`allowedMarketplaces` as friendlier aliases for the existing keys. The defect half is the one to read carefully: v2.1.234 fixed "`strictKnownMarketplaces` allowlists accepting SCP-style git marketplace sources whose host differs from the one git would actually connect to"  --  the allowlist validated one host while git connected to another. v2.1.232 also fixed "a startup race that could silently unregister a plugin marketplace due to concurrent writes to `known_marketplaces.json`", and v2.1.223 fixed a url-typed `blockedMarketplaces` entry ceasing to block once the CLI reclassified the URL as a git clone.

Channel: tagged-release. Ancestry: Closed source; npm publish record is the release proof. registry `time[]`: 2.1.223 = 2026-08-05T22:51:13Z, 2.1.224 = 2026-08-07T01:36:32Z (both w1); 2.1.232 = 2026-08-13T21:30:53Z, 2.1.234 = 2026-08-17T18:19:13Z (both w2). All four are plain non-prerelease semver under dist-tag `latest` with resolvable per-version manifests. The archive source is corroborated on a second surface by the Week 32 digest, which links /docs/en/plugin-marketplaces#zip-archives. Dated to w1 on the first material entry; the v2.1.234 allowlist fix is w2.

Operator consequence: Upgrade to 2.1.234 if you enforce `strictKnownMarketplaces`, and treat the pre-2.1.234 allowlist as advisory rather than enforced. The SCP-style host-mismatch bug is the sharpest item here: an allowlist is a security control whose entire value is that it is exact, and this one could be shown `git@github.com:org/repo` while git dialled somewhere else. The `blockedMarketplaces` reclassification bug is the same failure in the other direction  --  a block that stopped blocking. Re-verify both lists against what your machines actually cloned. On the capability side, the SHA-256 pin on `archive` sources is worth adopting: it is the only plugin install path in this window that gives you content addressing rather than trust in a host.

## Receipt
- https://code.claude.com/docs/en/changelog#2-1-224
