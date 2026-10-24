---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-stable-gives-agents-durable-lifecycle-state-and-signing-identities
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/AGENT-IDENTITY.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/2dd9811e8be1dab59cccd86cdb25e8953b02fe07
    precision: commit
  - url: https://github.com/paperclipai/paperclip/commit/5badea47987aed32b86f36da6bc6c40ceed2995a
    precision: commit
  - url: https://github.com/paperclipai/paperclip/commit/1cebdd4c4f9d8a4cb9e9eb1e71642e23605d04f9
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/resource-lifecycle-events.ts
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-stable-gives-agents-durable-lifecycle-state-and-signing-identities

Stable gives agents durable lifecycle state and signing identities. Hiring, approval, preparation, verification, pause and termination now share a durable lifecycle owner. Approved hires must finish required setup and harness verification before work; stop/cleanup evidence gates completion, with persisted retries and visible pending phases. Plugins can consume and acknowledge ordered resource journal events, including a seeded baseline. Separately, new agents receive Ed25519 identities; existing agents receive them on their next managed run rather than through blanket backfill. Private keys are encrypted using the instance secrets master key and delivered to supported managed processes as multiline PEM environment values. A wrong wrapping key fails rather than silently replacing the identity. HTTP/gateway/API-hosted adapters do not receive that injection. Keys do not replace request authentication or supply a rotation/import UI.

Channel: tagged-release. Half: capability. Date: 2026-10-24.

Operator consequence: On v2026.1023.0, inspect lifecycle phase and required plugin completion before treating an agent as ready or deleted; a legacy status label alone no longer explains the pending work. Durable retry state can remove manual reconstruction after restart. Preserve master-key custody and teach custom launchers not to log private keys. Persistent identity can replace bespoke per-run signing setup, but recipients must decide trust and revocation, and the host remains trusted with the key. A public key proves neither that an output was signed nor that its contents are correct.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/AGENT-IDENTITY.md
- https://github.com/paperclipai/paperclip/commit/2dd9811e8be1dab59cccd86cdb25e8953b02fe07
- https://github.com/paperclipai/paperclip/commit/5badea47987aed32b86f36da6bc6c40ceed2995a
- https://github.com/paperclipai/paperclip/commit/1cebdd4c4f9d8a4cb9e9eb1e71642e23605d04f9
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/resource-lifecycle-events.ts
