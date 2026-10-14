---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-dependency-repairs-leave-pyjwt-and-fsspec-version-alerts-in-the-newest-sdk-lock
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/automation/commit/d971b153bc15f4be918ab1e116a7ee4accf8dc51
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/commit/230115adcf4b06ccab20a932bf632cd79dd13bef
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/2c7a6d88e5c56fb63d2c3d8fc94258822227ed6e
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/uv.lock
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/automation/blob/1.19.3/uv.lock
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/enterprise/blob/1.71.0/uv.lock
    precision: tagged_commit_file
  - url: https://github.com/advisories/GHSA-9j54-fg26-wv3r
    precision: official_docs
  - url: https://github.com/advisories/GHSA-42vr-xj54-vc7v
    precision: official_docs
  - url: https://github.com/advisories/GHSA-27vj-qcqg-25rc
    precision: official_docs
---
# 2026-10-13-openhands-dependency-repairs-leave-pyjwt-and-fsspec-version-alerts-in-the-newest-sdk-lock

Dependency repairs leave PyJWT and fsspec version alerts in the newest SDK lock. Automation refreshes locked packages and raises published aiohttp, PyJWT and Starlette minimums; the SDK raises its PyJWT constraint/lock to 2.14.0. GHSA-9j54-fg26-wv3r / CVE-2026-102266 allows forged HMAC JWTs when verification accepts an empty symmetric JWK, fixed in 2.14.0. A separate PyJWT issue, GHSA-42vr-xj54-vc7v / CVE-2026-101918, affects the SDK lock's 2.14.0 and is fixed in 2.15.0: deeply nested unverified payloads can raise an uncaught recursion exception in particular pre-verification paths, potentially yielding HTTP 500. Maintainer triage does not establish worker death or authentication bypass. Automation 1.19.3 locks 2.15.1 and enterprise 1.71.0 locks 2.15.0. Enterprise upgrades fsspec from 2026.3.0 to 2026.9.0; GHSA-27vj-qcqg-25rc / CVE-2026-104851 concerns Python execution through attacker-controlled ReferenceFileSystem templates, fixed from 2026.6.0. SDK v1.54.0 still locks 2025.9.0 and automation 1.19.3 locks 2026.3.0, within the advisory range. The fsspec GHSA database publication is October 5; its original maintainer publication is September 1.

Channel: tagged-release. Half: defect. Date: 2026-09-29 to 2026-10-13 (separately released backend locks).

Operator consequence: Inspect resolved dependencies for each installed backend separately. These lock matches are residual alerts, not demonstrated reachable OpenHands exploits or proof that every surface is fixed. Trace JWT pre-verification consumers and ReferenceFileSystem input reachability before assigning endpoint impact; hosted deployment and local resolution remain unverified.

## Receipt
- https://github.com/OpenHands/automation/commit/d971b153bc15f4be918ab1e116a7ee4accf8dc51
- https://github.com/OpenHands/software-agent-sdk/commit/230115adcf4b06ccab20a932bf632cd79dd13bef
- https://github.com/OpenHands/enterprise/commit/2c7a6d88e5c56fb63d2c3d8fc94258822227ed6e
- https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/uv.lock
- https://github.com/OpenHands/automation/blob/1.19.3/uv.lock
- https://github.com/OpenHands/enterprise/blob/1.71.0/uv.lock
- https://github.com/advisories/GHSA-9j54-fg26-wv3r
- https://github.com/advisories/GHSA-42vr-xj54-vc7v
- https://github.com/advisories/GHSA-27vj-qcqg-25rc
