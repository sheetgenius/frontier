---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-profile-exports-exclude-credential-stores-and-imports-cannot-replace-nested-private-state
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/9c18f8c28ce271a1351a8d105e8e76080120818e
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/8c1adb7d6dfb7773d705fbac41ee173ffe1ec2f7
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/9dfb2b27b30ef823c963a7943ed9d6f8a73d2b02
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/profiles.py#L148-L182
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-profile-exports-exclude-credential-stores-and-imports-cannot-replace-nested-private-state

Profile exports exclude credential stores and imports cannot replace nested private state. Named exports excluded too few stores and could include .op.env service-account tokens, OAuth files, vault/browser/platform state and copied OS credentials. The expanded private-path inventory excludes those stores, including nested OS-store names. Distribution imports now refuse private owned paths and merge ancestors instead of replacing private pairing/session data.

Channel: tagged-release (first stable v0.21.6). Half: defect. Date: 2026-10-03.

Operator consequence: Inspect archives already shared and rotate credentials actually included. Upgrade to v0.21.6+ before exporting or importing another profile distribution; a shareable profile must not carry its account authority.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/9c18f8c28ce271a1351a8d105e8e76080120818e
- https://github.com/NousResearch/hermes-agent/commit/8c1adb7d6dfb7773d705fbac41ee173ffe1ec2f7
- https://github.com/NousResearch/hermes-agent/commit/9dfb2b27b30ef823c963a7943ed9d6f8a73d2b02
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/profiles.py#L148-L182
