---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-wider-advisory-databases-published-older-openclaw-issues-during-the-window
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/advisories/GHSA-g7fw-3gjp-g5hf
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/commit/fbd330b7aa4a26726fa8468f0db2a23ada3843bd
    precision: commit
  - url: https://github.com/advisories/GHSA-m2g4-5ff5-4cf5
    precision: official_docs
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-100538
    precision: official_docs
  - url: https://github.com/advisories/GHSA-px74-p6x8-q327
    precision: official_docs
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-100567
    precision: official_docs
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-95815
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/security/advisories/GHSA-5j57-84cx-r295
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/commit/8361f3704dd5e151ff1325e62ff5de658b6c62e6
    precision: commit
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-102806
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/commit/fca04893b5b337d2eb70a6ba41f03fc8e33eff83
    precision: commit
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-102807
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/commit/3bd8ec2b39b5f9e80aef0973f7d17eadc745b8f8
    precision: commit
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.8.1
    precision: github_release
---
# 2026-10-13-openclaw-wider-advisory-databases-published-older-openclaw-issues-during-the-window

Wider advisory databases published older OpenClaw issues during the window. No new repository advisories appeared, but wider databases published records for already disclosed issues. Reviewed GHSA-g7fw-3gjp-g5hf on 5 October covers channel target-allowlist bypasses for @openclaw/msteams, feishu, matrix and googlechat, fixed at 8.1. Imported records on 26 September cover outbound attachments reading outside sender file policy (CVE-2026-100538) and remote browser-control DNS rebinding toward forbidden private addresses (CVE-2026-100567), both fixed at 8.1 and assigned different global GHSAs from the repository originals. CVE-2026-95815 on 22 September concerns iOS before 8.11 logging bearer deep-link keys that could authorize forged requests. CVE-2026-102806 and 102807 on 29 September cover sibling-sandbox media reads before 9.5 and read-scoped standalone MCP-app tickets invoking write tools before 9.4. These are new database events, not newly introduced defects or newly shipped fixes. Some imported CVE records lack package mappings; absence of mapping is not absence of a record.

Channel: tagged-release for named fixed baselines; database publication is not a new software release. Half: defect. Date: 2026-09-22, 2026-09-26, 2026-09-29, 2026-10-05 disclosure/database publications; source fixes predate the window.

Operator consequence: When scanners disagree, check the original GHSA, any CVE-linked global GHSA, the affected artifact/package and its installed mechanism. Do not waive all extended-stable alerts because three backports were named. An npm Gateway upgrade is not an iOS app upgrade; verify phone version separately and rotate potentially exposed deep-link keys. The global record and npm package matching are different checks.

## Receipt
- https://github.com/advisories/GHSA-g7fw-3gjp-g5hf
- https://github.com/openclaw/openclaw/commit/fbd330b7aa4a26726fa8468f0db2a23ada3843bd
- https://github.com/advisories/GHSA-m2g4-5ff5-4cf5
- https://nvd.nist.gov/vuln/detail/CVE-2026-100538
- https://github.com/advisories/GHSA-px74-p6x8-q327
- https://nvd.nist.gov/vuln/detail/CVE-2026-100567
- https://nvd.nist.gov/vuln/detail/CVE-2026-95815
- https://github.com/openclaw/openclaw/security/advisories/GHSA-5j57-84cx-r295
- https://github.com/openclaw/openclaw/commit/8361f3704dd5e151ff1325e62ff5de658b6c62e6
- https://nvd.nist.gov/vuln/detail/CVE-2026-102806
- https://github.com/openclaw/openclaw/commit/fca04893b5b337d2eb70a6ba41f03fc8e33eff83
- https://nvd.nist.gov/vuln/detail/CVE-2026-102807
- https://github.com/openclaw/openclaw/commit/3bd8ec2b39b5f9e80aef0973f7d17eadc745b8f8
- https://github.com/openclaw/openclaw/releases/tag/v2026.8.1
