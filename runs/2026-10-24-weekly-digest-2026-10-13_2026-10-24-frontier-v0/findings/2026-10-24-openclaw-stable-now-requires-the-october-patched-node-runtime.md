---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-stable-now-requires-the-october-patched-node-runtime
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/a9088826651c6b9136f9b5e9105c341a34ce3bd2
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/package.json
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.10.6
    precision: github_release
  - url: https://nodejs.org/en/blog/vulnerability/october-2026-security-releases
    precision: official_docs
---
# 2026-10-24-openclaw-stable-now-requires-the-october-patched-node-runtime

Stable now requires the October-patched Node runtime. Stable raised its runtime floor to Node 24.22.1 on the 24 line or 26.12.1 and later. Installers and Docker moved to patched runtimes; the updater checks before staging an incompatible candidate. The release connects this to compromised certificate keys addressed by Node's October security updates. This is runtime exposure reduction, not a demonstrated OpenClaw-specific exploit. Source builds also changed to pnpm 12.15.0.

Channel: tagged-release. Half: defect. Date: 2026-10-22.

Operator consequence: Upgrade Node before moving a manually managed Gateway to 10.7. Check the service's runtime, not just the interactive shell's `node`. Do not select beta or extended-stable on the assumption that their lower engine minimum proves an equally patched bundled runtime. The admission check makes a bad update fail earlier; operators still own runtime inventory.

## Receipt
- https://github.com/openclaw/openclaw/commit/a9088826651c6b9136f9b5e9105c341a34ce3bd2
- https://github.com/openclaw/openclaw/blob/v2026.10.7/package.json
- https://github.com/openclaw/openclaw/releases/tag/v2026.10.6
- https://nodejs.org/en/blog/vulnerability/october-2026-security-releases
