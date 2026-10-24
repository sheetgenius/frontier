---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-certificate-distrust-ships-in-python-dependencies-with-an-os-bundle-repair-still-on-main
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/e8a071f511222697caf2df0dd0498c54590c9707
    precision: commit
  - url: https://github.com/OpenHands/automation/commit/872e32295b0f7f33da275845626ff4000d189f2e
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/177fbeb699613a04e473c0f10fe17f36b30f7c60
    precision: commit
  - url: https://github.com/advisories/GHSA-6q48-6c7w-9gw2
    precision: official_docs
  - url: https://github.com/OpenHands/software-agent-sdk/commit/acd96e6fa424c02432304395b9208f99be24b54d
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/04a28974b73d99e333102336d7ccfdd449dca889
    precision: commit
---
# 2026-10-24-openhands-certificate-distrust-ships-in-python-dependencies-with-an-os-bundle-repair-still-on-main

Certificate distrust ships in Python dependencies, with an OS-bundle repair still on main. The certifi advisory concerns compromised intermediate CA keys: an on-path attacker with such a key can impersonate TLS endpoints trusted through the affected root. It names certifi 2026.10.19 as the patched version. The three current locks select that version, and SDK/automation published requirements establish a floor. SDK's repair also addresses vendored pip and uv. Enterprise 1.79.0 has the repaired lock, but its explicit project-metadata floor is a later main-only change. SDK's Debian snapshot update is likewise not in the newest tag, so the Python repair is not a receipt for every OS trust store.

Channel: tagged-release (Python dependencies); main-unreleased (SDK Debian snapshot). Half: defect. Date: 2026-10-23 (SDK v1.58.1, automation 1.25.1, Enterprise 1.78.0).

Operator consequence: Upgrade the full bundle, rebuild separately managed environments from the repaired artifacts, and inspect the Python, vendored and OS trust stores actually used. Do not label the entire deployment remediated solely because `certifi` is fixed. The remaining work is dependency and image acceptance, not another model prompt or permission dialog. This is a supplier trust-store issue with a concrete interception precondition, not evidence of an observed OpenHands interception.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/e8a071f511222697caf2df0dd0498c54590c9707
- https://github.com/OpenHands/automation/commit/872e32295b0f7f33da275845626ff4000d189f2e
- https://github.com/OpenHands/enterprise/commit/177fbeb699613a04e473c0f10fe17f36b30f7c60
- https://github.com/advisories/GHSA-6q48-6c7w-9gw2
- https://github.com/OpenHands/software-agent-sdk/commit/acd96e6fa424c02432304395b9208f99be24b54d
- https://github.com/OpenHands/enterprise/commit/04a28974b73d99e333102336d7ccfdd449dca889
