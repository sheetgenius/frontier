---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-gemini-cli-autoedit-path-check-never-loaded-and-seatbelt-reached-docker-socket
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/28961
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/pull/28935
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.58.0/packages/cli/src/utils/sandbox-macos-permissive-open.sb
    precision: tagged_commit_file
---
# 2026-09-21-gemini-cli-autoedit-path-check-never-loaded-and-seatbelt-reached-docker-socket

Two boundary fixes in v0.58.0. The allowed-path rule for write_file and replace in autoEdit mode was nested in write.toml where the loader silently discarded it, so auto-approved edits were not path-checked on 0.57.0 and earlier (PR 28961). The macOS Seatbelt profile let a sandboxed process reach a running Docker, OrbStack, Colima or Rancher daemon socket and so mount the host filesystem; the .sb profile had no docker rules at v0.57.0 and 22 at v0.58.0 (PR 28935). Neither was published as a security advisory.

Channel: tagged-release (v0.58.0, 2026-09-01). Half: defect.

Operator consequence: Upgrade to 0.58.0 or later if you used autoEdit or the macOS sandbox with a container runtime running. Treat any autoEdit session on 0.57.0 or earlier as having written wherever the model chose.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/28961
- https://github.com/google-gemini/gemini-cli/pull/28935
- https://github.com/google-gemini/gemini-cli/blob/v0.58.0/packages/cli/src/utils/sandbox-macos-permissive-open.sb
