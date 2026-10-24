---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-preview-checks-whether-an-automatic-update-changed-the-active-installation
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/49797afb4d323b70a4fd30ee89aeb8faba399f90
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/cli/src/utils/handleAutoUpdate.ts
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-preview-checks-whether-an-automatic-update-changed-the-active-installation

Preview checks whether an automatic update changed the active installation. The updater resolves the running CLI's path before updating, then checks the package metadata beside that installation. If the matching package still has a lower version than the intended update, it emits update-failed with a PATH-shadowing explanation instead of success. Missing or unreadable metadata remains a best-effort boundary: the check is not fail-closed attestation.

Channel: preview-or-beta. Half: both. Date: 2026-10-16.

Operator consequence: On preview, a successful package-manager exit is less likely to conceal an unchanged active CLI. Keep recording the resolved executable and its version in deployment receipts, especially with several Node installations. The repair removes one misleading success signal but does not turn automatic updates into pinned, reproducible deployment.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/49797afb4d323b70a4fd30ee89aeb8faba399f90
- https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/cli/src/utils/handleAutoUpdate.ts
