---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-a-september-advisory-concerns-cross-site-server-upgrades-on-npm-family-v1-installations
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/security/advisories/GHSA-632h-h47v-g4x4
    precision: official_docs
  - url: https://github.com/anomalyco/opencode/commit/2a36236132b0588eafbe3a16f2d271144f5a1104
    precision: commit
  - url: https://github.com/anomalyco/opencode/blob/v1.18.22/packages/opencode/src/server/routes/instance/httpapi/groups/global.ts
    precision: tagged_commit_file
---
# 2026-10-24-opencode-a-september-advisory-concerns-cross-site-server-upgrades-on-npm-family-v1-installations

A September advisory concerns cross-site server upgrades on npm-family V1 installations. The advisory describes a webpage submitting an upgrade request to a reachable V1 `opencode serve` instance installed through npm, pnpm or Bun. A general package specifier could select an attacker's package, including its installation scripts. Cached HTTP Basic credentials can accompany the relevant cross-site browser navigation, so a password alone did not necessarily block this path. The documented arbitrary-package path does not apply to the standalone CLI upgrade command or curl/Homebrew/Chocolatey/Scoop installations. The fix requires an explicit semantic version and the supported JSON request content type. The advisory names 1.18.22 as patched and has no CVE; its machine-readable vulnerable range is unbounded `>=1.14.30`, inconsistent with that patched-version field. Use the narrative, fix and patched tag rather than treating every later version as affected.

Channel: docs-only. Half: defect. Date: 2026-09-24.

Operator consequence: Identify the V1 server, install method and patch level before triaging this advisory. Existing operators on 1.19.4 contain the patch; moving to V2 is not required solely for this historical fix. Keep browser-facing administration within the intended network/authentication boundary, and test upgrade automation against the stricter request contract if maintaining a V1 integration. This is a specific browser-to-updater vulnerability, not evidence that every local CLI session or every npm package is exposed.

## Receipt
- https://github.com/anomalyco/opencode/security/advisories/GHSA-632h-h47v-g4x4
- https://github.com/anomalyco/opencode/commit/2a36236132b0588eafbe3a16f2d271144f5a1104
- https://github.com/anomalyco/opencode/blob/v1.18.22/packages/opencode/src/server/routes/instance/httpapi/groups/global.ts
