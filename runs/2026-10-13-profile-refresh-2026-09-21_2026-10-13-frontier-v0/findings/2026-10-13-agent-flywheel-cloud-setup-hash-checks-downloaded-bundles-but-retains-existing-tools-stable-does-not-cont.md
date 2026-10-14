---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-cloud-setup-hash-checks-downloaded-bundles-but-retains-existing-tools-stable-does-not-cont
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/claude-code-web-setup.sh
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/claude-code-web-setup.sh#L154-L165
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/e5eb614dff527ec280f9fdd711cc2c58de9958df/scripts/claude-code-web-setup.sh
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/cloud-mirror.json
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/README.md#L468-L520
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/cloud-binaries-v1
    precision: github_release
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/437
    precision: official_docs
---
# 2026-10-13-agent-flywheel-cloud-setup-hash-checks-downloaded-bundles-but-retains-existing-tools-stable-does-not-cont

Cloud setup hash-checks downloaded bundles but retains existing tools; stable does not contain it. A new cloud-specific path supplies ten selected coordination tools without VPS provisioning, upstream installers or source builds. It hash-checks newly downloaded mirror bundles and keeps existing callable tools by default without matching their bytes or versions to the manifest; ACFS_CLOUD_REINSTALL=1 requests replacement. Claude mode registers Agent Mail as user-scope stdio MCP; Codex and generic modes get CLI access and a guide without that registration. It writes no user, sudoers file, OS upgrade or agent permission setting. Tool failures are logged while setup exits 0. The original researcher observed the official site advertising the main-fetching path on October 13. #437 is a user report of 55/55 executable checks and upstream Git writes rejected with 403, not independently reproduced provider behavior.

Channel: mixed. Half: capability. Date: 2026-10-08.

Operator consequence: Trial this only in a disposable cloud environment with script and ACFS_REF fixed to the same reviewed SHA. Inspect setup and per-tool logs plus actual executable versions; exit 0 and a manifest are not full-setup receipts. The initial implementation has mirror-source ancestry, later hardening is untagged, and neither is stable. This makes selected coordination tooling portable; it does not establish migration of accumulated state or the first-ever non-provisioning/pinning path. The unchanged tagged license rider merits review for intended hosted use; no enforceability conclusion is offered.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/claude-code-web-setup.sh
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/claude-code-web-setup.sh#L154-L165
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/e5eb614dff527ec280f9fdd711cc2c58de9958df/scripts/claude-code-web-setup.sh
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/cloud-mirror.json
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/README.md#L468-L520
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/cloud-binaries-v1
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/437
