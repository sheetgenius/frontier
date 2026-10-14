---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-messaging-users-can-toggle-plugins-and-edit-project-scoped-profile-permissions
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/17033d277e4a39a99865455d87e4b0719bc3bf0f
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/359ccb11c5fa3b10df095f80a4950dfb1637a19f
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_telegram_integration/helpers/settings_ui.py#L19-L113
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_whatsapp_integration/helpers/slash_commands.py#L204-L251
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_telegram_integration/helpers/handler.py#L99-L115
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_whatsapp_integration/helpers/handler.py#L88-L98
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_telegram_integration/helpers/slash_commands.py#L63-L68
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_agent_editor/helpers/editor.py#L742-L781
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_agent_editor/helpers/editor.py#L1056-L1090
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/plugins.py#L850-L863
    precision: tagged_commit_file
---
# 2026-10-13-agent-zero-messaging-users-can-toggle-plugins-and-edit-project-scoped-profile-permissions

Messaging users can toggle plugins and edit project-scoped profile permissions. Telegram and WhatsApp run incoming messages through the shared Commands catalog before the agent sees them. /plugins changes toggles instance-wide, protecting always-enabled plugins, Commands and the integration itself; it can disable the opt-in _infection_check. /permissions refuses the built-in Default profile and active runs, then writes through Agent Editor. The change persists in that profile's active project scope, or its global scope when no project is active; chats resolving that scope can inherit it. /copy exports the bound transcript. Telegram /chat accepts an arbitrary instance chat ID and its picker lists all contexts; WhatsApp checks conversation ownership. Empty Telegram allowed_users and WhatsApp allowed_numbers admit every sender once configured. Telegram numeric IDs match account IDs; @name entries match the current username. Both integrations ship unconfigured, not as active public bots. Computer Use grants stay at the host bridge.

Channel: tagged-release. Half: both. Date: 2026-09-23 (first stable; implementation 2026-09-14).

Operator consequence: Before upgrading a configured bot or pairing, set explicit numeric allowed_users or allowed_numbers. Treat admitted identities as plugin administrators and as policy editors for non-Default profiles/scopes they can reach. Check both the saved project scope and plugin toggles after messaging use. A non-allowed account should receive no /permissions response; an allowed account should reach the menu. That live acceptance test remains to be performed.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/17033d277e4a39a99865455d87e4b0719bc3bf0f
- https://github.com/agent0ai/agent-zero/commit/359ccb11c5fa3b10df095f80a4950dfb1637a19f
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_telegram_integration/helpers/settings_ui.py#L19-L113
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_whatsapp_integration/helpers/slash_commands.py#L204-L251
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_telegram_integration/helpers/handler.py#L99-L115
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_whatsapp_integration/helpers/handler.py#L88-L98
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_telegram_integration/helpers/slash_commands.py#L63-L68
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_agent_editor/helpers/editor.py#L742-L781
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_agent_editor/helpers/editor.py#L1056-L1090
- https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/plugins.py#L850-L863
