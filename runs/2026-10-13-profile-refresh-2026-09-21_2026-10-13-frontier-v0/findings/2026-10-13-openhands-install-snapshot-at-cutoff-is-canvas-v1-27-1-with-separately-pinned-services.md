---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-install-snapshot-at-cutoff-is-canvas-v1-27-1-with-separately-pinned-services
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/releases/tag/v1.27.1
    precision: github_release
  - url: https://registry.npmjs.org/@openhands%2fagent-canvas/1.27.1
    precision: official_docs
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L63-L144
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L14
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/package.json#L16-L27
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/config/defaults.json#L3-L10
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/enterprise/releases/tag/1.71.0
    precision: github_release
---
# 2026-10-13-openhands-install-snapshot-at-cutoff-is-canvas-v1-27-1-with-separately-pinned-services

Install snapshot at cutoff is Canvas v1.27.1 with separately pinned services. Install @openhands/agent-canvas@1.27.1 and run agent-canvas with Node >=24 and uv, or use its release desktop assets or ghcr.io/openhands/agent-canvas:1.27.1. The stable release flag is false for prerelease, while the README still calls Agent Canvas beta. This tag pins agent-server 1.54.0, automation 1.19.3 and TypeScript client 1.54.0; the compatibility minimum is agent-server 1.51.0. The corrected ledger and verifier identify v1.27.1 as newest stable at cutoff. Old npm alpha/beta versions predate the window; their age does not prove permanent abandonment. Per-conversation Docker remains opt-in, the stable DigitalOcean web bridge needs MARS_WEB=1, and secret-request/default-on bridge work is only on closing main. Enterprise 1.71.0 is separately available source under its unchanged PolyForm Free Trial license, not evidence of Cloud deployment.

Channel: tagged-release. Half: both. Date: 2026-10-12 (Canvas v1.27.1); posture 2026-10-13.

Operator consequence: Pin the package/image version and coordinate independently managed servers. The README Docker quickstart binds 127.0.0.1 and explicitly enables session-key HTML injection; remove that injection flag if publishing beyond loopback and apply the OH_SESSION_API_KEYS_0 workaround from section 2. Use the corrected whole-conversation setting from section 5. No package installation or upstream execution was performed for this memo.

## Receipt
- https://github.com/OpenHands/OpenHands/releases/tag/v1.27.1
- https://registry.npmjs.org/@openhands%2fagent-canvas/1.27.1
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L63-L144
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L14
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/package.json#L16-L27
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/config/defaults.json#L3-L10
- https://github.com/OpenHands/enterprise/releases/tag/1.71.0
