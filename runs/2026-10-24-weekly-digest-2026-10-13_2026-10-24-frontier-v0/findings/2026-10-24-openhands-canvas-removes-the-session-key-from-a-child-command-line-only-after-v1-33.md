---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-canvas-removes-the-session-key-from-a-child-command-line-only-after-v1-33
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/commit/8fdd6859aee5779ebbc12e44dc32823d7cb08527
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/compare/v1.33.0...fee10e3d2909ebbf9950578575b1ee011492171e
    precision: git_compare
---
# 2026-10-24-openhands-canvas-removes-the-session-key-from-a-child-command-line-only-after-v1-33

Canvas removes the session key from a child command line only after v1.33.0. The launcher stops passing the static server's session key as a command-line argument and uses a child environment value instead. The key therefore leaves that process-argument surface. This patch is after the latest stable release. It does not remove the automation-key alias from agent terminals or correct the Docker custom-key export branch.

Channel: main-unreleased. Half: defect. Date: 2026-10-23.

Operator consequence: Track the first containing release and inspect the launched process arguments before closing this exposure path. Do not promise the repair from an ordinary v1.33.0 upgrade. Moving a credential between process surfaces reduces one disclosure path; acceptance still requires checking which subprocesses inherit it.

## Receipt
- https://github.com/OpenHands/OpenHands/commit/8fdd6859aee5779ebbc12e44dc32823d7cb08527
- https://github.com/OpenHands/OpenHands/compare/v1.33.0...fee10e3d2909ebbf9950578575b1ee011492171e
