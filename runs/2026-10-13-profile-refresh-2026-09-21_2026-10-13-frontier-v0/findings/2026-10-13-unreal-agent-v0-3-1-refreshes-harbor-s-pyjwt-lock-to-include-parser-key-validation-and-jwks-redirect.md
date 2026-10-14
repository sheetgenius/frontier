---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-v0-3-1-refreshes-harbor-s-pyjwt-lock-to-include-parser-key-validation-and-jwks-redirect
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/commit/b7203ca337a399635c29ce610f8cf1d1bda803ae
    precision: commit
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/benchmarks/harbor/uv.lock
    precision: tagged_commit_file
  - url: https://github.com/jpadilla/pyjwt/blob/2.15.0/CHANGELOG.rst
    precision: tagged_commit_file
  - url: https://github.com/advisories/GHSA-42vr-xj54-vc7v
    precision: official_docs
  - url: https://github.com/jpadilla/pyjwt/security/advisories/GHSA-pxh4-856f-4h89
    precision: official_docs
  - url: https://github.com/jpadilla/pyjwt/security/advisories/GHSA-9v7f-9g4p-ffgj
    precision: official_docs
  - url: https://github.com/advisories/GHSA-x33g-cr3x-6449
    precision: official_docs
---
# 2026-10-13-unreal-agent-v0-3-1-refreshes-harbor-s-pyjwt-lock-to-include-parser-key-validation-and-jwks-redirect

v0.3.1 refreshes Harbor's PyJWT lock to include parser, key-validation and JWKS redirect fixes. Harbor's Python lock now selects PyJWT 2.15.0, including security changes from 2.14.0 and 2.15.0. CVE-2026-101918 / GHSA-42vr-xj54-vc7v, published 2026-09-30, concerns deeply nested payload JSON raising an uncaught RecursionError in pre-verification parsing paths through 2.14.0; 2.15.0 wraps it in DecodeError. The confirmed impact is a failed call, potentially an HTTP 500, not demonstrated process termination or persistent exhaustion. GHSA-pxh4-856f-4h89 rejects empty symmetric JWKs in 2.14.0; through 2.13.0 an application trusting such a key can accept an attacker-forged token. CVE-2026-102267 / GHSA-9v7f-9g4p-ffgj is fixed in 2.14.0: an attacker-influenced redirect from the configured trusted JWKS endpoint can disclose caller headers or substitute trusted signing keys; a token key ID alone is insufficient. CVE-2026-102275 / GHSA-x33g-cr3x-6449, published 2026-10-05, is fixed in 2.15.0: inconsistent public x and private d fields in an OKP JWK create key-identity confusion. A stolen-token bypass additionally requires a DPoP application to accept private key parameters contrary to RFC 9449. No such integration was established in this agent. These are benchmark dependencies, not fixes to its Go Codex credential loader.

Channel: tagged-release. Half: defect. Date: 2026-10-06.

Operator consequence: Refresh the Harbor environment from the released lock, then inspect any authentication integration for the advisory conditions. Keep the benchmark dependency update separate from runner failure and credential-handling work. No harness exploitability was demonstrated.

## Receipt
- https://github.com/unreallabsai/unreal-agent/commit/b7203ca337a399635c29ce610f8cf1d1bda803ae
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/benchmarks/harbor/uv.lock
- https://github.com/jpadilla/pyjwt/blob/2.15.0/CHANGELOG.rst
- https://github.com/advisories/GHSA-42vr-xj54-vc7v
- https://github.com/jpadilla/pyjwt/security/advisories/GHSA-pxh4-856f-4h89
- https://github.com/jpadilla/pyjwt/security/advisories/GHSA-9v7f-9g4p-ffgj
- https://github.com/advisories/GHSA-x33g-cr3x-6449
