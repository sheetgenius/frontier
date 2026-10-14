---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-anyio-tls-certificate-spoofing-remediation-reaches-the-canvas-v1-25-0-backends
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/7fa122478a3d90710cc2525c51c02aec0867b252
    precision: commit
  - url: https://github.com/OpenHands/automation/commit/53f3209f4e4565c1d4cc6ca27b9f28a603ad905c
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.50.0
    precision: github_release
  - url: https://github.com/OpenHands/automation/releases/tag/1.15.2
    precision: github_release
  - url: https://github.com/advisories/GHSA-82r6-8w77-94w6
    precision: official_docs
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/uv.lock
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/automation/blob/1.19.3/uv.lock
    precision: tagged_commit_file
---
# 2026-10-13-openhands-anyio-tls-certificate-spoofing-remediation-reaches-the-canvas-v1-25-0-backends

AnyIO TLS certificate-spoofing remediation reaches the Canvas v1.25.0 backends. The SDK workspace constraint and lock, and automation lock, move AnyIO to 4.14.2. CVE-2026-63374 / GHSA-82r6-8w77-94w6 concerns certificate spoofing for certain redirected TLS connections to internationalized hostnames: IDNA 2003 encoding can make the wrong encoded name validate. The advisory predates this window; OpenHands remediation is in-window. This is not a generic unauthenticated code-execution bug. Both newest backend locks still select 4.14.2.

Channel: tagged-release. Half: defect. Date: 2026-09-29 (SDK v1.50.0 and automation 1.15.2); 2026-10-06 (Canvas v1.25.0 bundle).

Operator consequence: Use the corrected released/locked builds and inspect AnyIO in the actual installed environment. A repository lock or workspace constraint does not prove what every uvx/PyPI resolver installed. No reachable OpenHands exploit or live installed environment was established here.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/7fa122478a3d90710cc2525c51c02aec0867b252
- https://github.com/OpenHands/automation/commit/53f3209f4e4565c1d4cc6ca27b9f28a603ad905c
- https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.50.0
- https://github.com/OpenHands/automation/releases/tag/1.15.2
- https://github.com/advisories/GHSA-82r6-8w77-94w6
- https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/uv.lock
- https://github.com/OpenHands/automation/blob/1.19.3/uv.lock
