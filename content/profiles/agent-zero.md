---
schema_version: bitter.frontier_profile.v0
profile_id: agent-zero
label: Agent Zero
owner: agent0ai
source_contract: sources/agent-zero.yml
homepage: https://www.agent-zero.ai/
docs: https://www.agent-zero.ai/p/docs/
tagline: "Treat Agent Zero as one shared workcell: bot admission grants administration, and separate chats still share browser sign-ins."
compared_with:
  - codex
  - claude-code
x:
  project: Agent0ai
repo: https://github.com/agent0ai/agent-zero
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: telegram-webhook
    finding_id: 2026-09-21-agent-zero-v2-12-fixes-an-unauthenticated-telegram-webhook-that-let-anyone-forge-allowed-user-prompts
    last_verified: 2026-10-13
    status: retired
  - id: acp-defaults-unchanged
    finding_id: 2026-09-21-agent-zero-carry-forward-acp-defaults-unchanged-at-v2-11-and-v2-12-ssrf-tests-intact-blob-changed-for
    last_verified: 2026-10-13
    status: active
  - id: v2-10-acp-browser-ssrf-tests
    finding_id: 2026-08-20-agent-zero-v2-10-tags-acp-and-interactive-browser-and-adds-ssrf-regression-tests
    last_verified: 2026-10-13
    status: retired
  - id: native-browser-playwright
    finding_id: 2026-05-07-agent-zero-full-computer-workcell
    last_verified: 2026-10-13
    status: retired
  - id: linux-desktop-skill-controls
    finding_id: 2026-05-07-agent-zero-full-computer-workcell
    last_verified: 2026-10-13
    status: retired
  - id: oauth-quota-visibility
    finding_id: 2026-05-07-agent-zero-full-computer-workcell
    last_verified: 2026-10-13
    status: retired
  - id: browser-multi-tab-parallel-fanout
    finding_id: 2026-05-12-agent-zero-browser-multitab-and-document-formats
    last_verified: 2026-10-13
    status: retired
  - id: odf-first-document-defaults
    finding_id: 2026-05-12-agent-zero-browser-multitab-and-document-formats
    last_verified: 2026-10-13
    status: retired
  - id: persistent-desktop-lifecycle
    finding_id: 2026-05-12-agent-zero-browser-multitab-and-document-formats
    last_verified: 2026-10-13
    status: retired
  - id: structured-actions-over-coordinates
    finding_id: 2026-05-12-agent-zero-browser-multitab-and-document-formats
    last_verified: 2026-10-13
    status: retired
  - id: host-computer-use-remote
    finding_id: 2026-05-27-agent-zero-host-desktop-with-vision-verification
    last_verified: 2026-10-13
    status: active
  - id: vision-verification-required
    finding_id: 2026-05-27-agent-zero-host-desktop-with-vision-verification
    last_verified: 2026-05-27
    status: retired
  - id: platform-native-structural-targeting
    finding_id: 2026-05-27-agent-zero-host-desktop-with-vision-verification
    last_verified: 2026-10-13
    status: retired
  - id: ephemeral-capture-default
    finding_id: 2026-05-27-agent-zero-host-desktop-with-vision-verification
    last_verified: 2026-05-27
    status: retired
  - id: screenshot-durable-storage-reversal
    finding_id: 2026-06-02-agent-zero-screenshot-artifact-durability
    last_verified: 2026-10-13
    status: active
  - id: ssrf-fix-lost-and-restored
    finding_id: 2026-08-17-agent-zero-ssrf-fix-for-cve-2026-4308-was-silently-lost-in-a-plugin-refactor-and
    last_verified: 2026-10-13
    status: retired
  - id: scoped-tool-policy
    finding_id: 2026-08-17-agent-zero-agent-zero-v2-9-makes-tool-mcp-and-skill-access-a-scoped-policy
    last_verified: 2026-10-13
    status: retired
  - id: whatsapp-imap-fixes
    finding_id: 2026-09-21-agent-zero-v2-12-also-fixes-whatsapp-media-path-traversal-file-overwrite-in-the-container-and-an-imap
    last_verified: 2026-10-13
    status: retired
  - id: host-folders-in-webui
    finding_id: 2026-09-21-agent-zero-v2-12-exposes-connected-cli-and-launcher-host-folders-in-the-webui-files-panel
    last_verified: 2026-10-13
    status: active
  - id: chat-completions-default-context-doctor
    finding_id: 2026-09-21-agent-zero-v2-11-makes-chat-completions-the-default-model-transport-breaking-and-adds-context-doctor
    last_verified: 2026-10-13
    status: retired
  - id: plugin-hooks-policy-prompts
    finding_id: 2026-09-21-agent-zero-v2-12-makes-plugin-lifecycle-go-through-hooks-py-and-removes-disabled-capabilities-from
    last_verified: 2026-10-13
    status: retired
  - id: ready-branch-untagged-fixes
    finding_id: 2026-09-21-agent-zero-the-ready-branch-carries-secret-substitution-and-browser-cross-chat-fixes-that-are-in-no
    last_verified: 2026-09-23
    status: retired
  - id: stable-install-set
    finding_id: 2026-10-13-agent-zero-framework-v2-14-cli-v2-14-and-launcher-v1-9-are-the-stable-install-set
    last_verified: 2026-10-13
    status: active
  - id: messaging-administration-scope
    finding_id: 2026-10-13-agent-zero-messaging-users-can-toggle-plugins-and-edit-project-scoped-profile-permissions
    last_verified: 2026-10-13
    status: active
  - id: input-and-exec-permission-ids
    finding_id: 2026-10-13-agent-zero-remote-input-has-its-own-execution-capable-permission
    last_verified: 2026-10-13
    status: active
  - id: parallel-argument-dictionary-fix
    finding_id: 2026-10-13-agent-zero-the-retained-parallel-secret-fix-shares-the-worker-argument-dictionary
    last_verified: 2026-10-13
    status: active
  - id: shared-internal-browser-identity
    finding_id: 2026-10-13-agent-zero-internal-browser-sign-ins-remain-shared-after-the-panel-and-deadline-fixes
    last_verified: 2026-10-13
    status: active
  - id: file-metadata-and-backup-scope
    finding_id: 2026-10-13-agent-zero-file-patches-preserve-metadata-and-new-backups-exclude-orchestrator-state
    last_verified: 2026-10-13
    status: active
  - id: orchestrator-child-cli-bypass
    finding_id: 2026-10-13-agent-zero-file-patches-preserve-metadata-and-new-backups-exclude-orchestrator-state
    last_verified: 2026-10-13
    status: active
  - id: webui-root-scope-and-login
    finding_id: 2026-10-13-agent-zero-file-browser-advisories-require-authentication-and-mount-decisions
    last_verified: 2026-10-13
    status: active
  - id: claude-public-summaries-and-refusals
    finding_id: 2026-10-13-agent-zero-claude-thoughts-become-public-summaries-and-refusals-stop-generic-retries
    last_verified: 2026-10-13
    status: retired
  - id: conditional-dependency-migration
    finding_id: 2026-10-13-agent-zero-v2-14-ships-conditional-dependency-migration-and-user-plugin-precedence
    last_verified: 2026-10-13
    status: active
  - id: user-plugin-asset-precedence
    finding_id: 2026-10-13-agent-zero-v2-14-ships-conditional-dependency-migration-and-user-plugin-precedence
    last_verified: 2026-10-13
    status: active
  - id: host-screen-structural-exception
    finding_id: 2026-10-13-agent-zero-v2-14-ships-conditional-dependency-migration-and-user-plugin-precedence
    last_verified: 2026-10-13
    status: retired
  - id: remote-shell-context-separation
    finding_id: 2026-10-13-agent-zero-cli-v2-14-separates-remote-shell-sessions-by-chat-context
    last_verified: 2026-10-13
    status: active
  - id: direct-child-status-and-stop
    finding_id: 2026-10-13-agent-zero-direct-subagents-gain-visible-working-state-and-an-independent-stop
    last_verified: 2026-10-13
    status: active
  - id: nonblocking-terminal-io
    finding_id: 2026-10-13-agent-zero-nonblocking-terminal-i-o-and-complete-ssh-sends-reduce-concurrent-stalls
    last_verified: 2026-10-13
    status: retired
  - id: preset-and-chat-state-retention
    finding_id: 2026-10-13-agent-zero-preset-reload-and-chat-visibility-fixes-protect-saved-working-state
    last_verified: 2026-10-13
    status: retired
  - id: responses-cache-and-native-routes
    finding_id: 2026-10-13-agent-zero-responses-histories-retain-cache-boundaries-and-providers-use-native-routes
    last_verified: 2026-10-13
    status: retired
  - id: plugin-updater-local-rebase
    finding_id: 2026-10-13-agent-zero-plugin-updates-rebase-locally-committed-changes
    last_verified: 2026-10-13
    status: active
  - id: ready-truncation-and-profile-switch
    finding_id: 2026-10-13-agent-zero-the-remaining-ready-tail-changes-truncation-recovery-and-live-profile-switching
    last_verified: 2026-10-13
    status: active
  - id: local-provider-dummy-key-removal
    finding_id: 2026-10-13-agent-zero-v2-13-ships-the-earlier-branch-fixes-and-two-breaking-changes
    last_verified: 2026-10-13
    status: active
  - id: delegated-codex-headless-path
    finding_id: 2026-10-13-codex-interactive-codex-now-attaches-to-a-shared-background-app-server-by-default-from-0-157
    last_verified: 2026-10-13
    status: retired
posture_basis:
  capability:
    - 2026-05-27-agent-zero-host-desktop-with-vision-verification
    - 2026-10-13-agent-zero-cli-v2-14-separates-remote-shell-sessions-by-chat-context
    - 2026-10-13-agent-zero-direct-subagents-gain-visible-working-state-and-an-independent-stop
  accessibility:
    - 2026-05-27-agent-zero-host-desktop-with-vision-verification
    - 2026-10-13-agent-zero-messaging-users-can-toggle-plugins-and-edit-project-scoped-profile-permissions
    - 2026-10-13-agent-zero-framework-v2-14-cli-v2-14-and-launcher-v1-9-are-the-stable-install-set
  governance:
    - 2026-05-27-agent-zero-host-desktop-with-vision-verification
    - 2026-10-13-agent-zero-messaging-users-can-toggle-plugins-and-edit-project-scoped-profile-permissions
    - 2026-10-13-agent-zero-remote-input-has-its-own-execution-capable-permission
    - 2026-10-13-agent-zero-file-patches-preserve-metadata-and-new-backups-exclude-orchestrator-state
    - 2026-10-13-agent-zero-file-browser-advisories-require-authentication-and-mount-decisions
    - 2026-10-13-agent-zero-v2-14-ships-conditional-dependency-migration-and-user-plugin-precedence
    - 2026-10-13-agent-zero-plugin-updates-rebase-locally-committed-changes
    - 2026-10-13-agent-zero-the-remaining-ready-tail-changes-truncation-recovery-and-live-profile-switching
stance:
  use_for: "One trusted group operating a persistent computer workcell. Follow <a href='#where-it-stands-2026-10-13'>the installation and host-grant guidance</a>."
  avoid_for: "People or browser accounts that require separate authority. See <a href='#where-it-stands-2026-10-13'>the shared-state boundaries</a>."
  watch_next: "Do not rely on host containment until <a href='#what-is-unresolved'>the outside-root and revocation checks</a> pass."
---

# Agent Zero

[On 13 October 2026, A0 CLI v2.14](https://github.com/agent0ai/a0-connector/releases/tag/v2.14) [separated concurrent chats' shell state while retaining the same host filesystem, OS user and grants](https://github.com/agent0ai/a0-connector/commit/dd5468f0a450973edc73f6fa48638505347012c9). Agent Zero's [internal browser still shares its sign-in profile across chats](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_browser/default_config.yaml#L14-L18). Use separate Agent Zero instances for groups whose browser sign-ins must stay separate.

## Where it stands, 2026-10-13

**Install the stable image; update host companions separately.** Install [framework v2.14](https://github.com/agent0ai/agent-zero/releases/tag/v2.14) from [Docker image `agent0ai/agent-zero:v2.14`](https://hub.docker.com/v2/repositories/agent0ai/agent-zero/tags/v2.14), with [volume `a0_usr` mounted at `/a0/usr`](https://github.com/agent0ai/agent-zero/blob/v2.14/docs/setup/installation.md#L71-L79). For host access, update [the CLI to v2.14](https://github.com/agent0ai/a0-connector/releases/tag/v2.14) with [`a0 update` (which resolves the latest published release)](https://github.com/agent0ai/a0-connector/blob/v2.14/README.md#L44-L64) and [download Launcher v1.9 for your operating system](https://github.com/agent0ai/a0-launcher/releases/tag/v1.9).

**Before upgrading an existing Agent Zero instance.** Preserve local plugin patches: [the updater rebases local commits](https://github.com/agent0ai/agent-zero/commit/40a4303637de45c846dc77728df3d78b5537cc9a), and [user plugin files take precedence over bundled assets and extensions](https://github.com/agent0ai/agent-zero/commit/14c38f4ea75092c8a90581694288a965b2f8755b). Set [local-provider keys or keyless mode](https://github.com/agent0ai/agent-zero/commit/a62aad4aceb3270009b0f1eb801996c46bc86a16) before restarting. Allow network access and a possible restart for [v2.14's conditional dependency migration](https://github.com/agent0ai/agent-zero/blob/v2.14/extensions/python/startup_migration/_05_framework_dependencies.py).

**Re-test authenticated parallel calls before resuming dependent jobs.** An issue report [described unresolved secret aliases and authentication failures in parallel calls](https://github.com/agent0ai/agent-zero/issues/1838). A worker could [retain unresolved secret aliases in its copied tool arguments](https://github.com/agent0ai/agent-zero/commit/4d94c3b173ee42ceb64f99eb8ef493254417bde9). The [retained fix](https://github.com/agent0ai/agent-zero/commit/4d94c3b173ee42ceb64f99eb8ef493254417bde9) lets secret substitution reach [the worker's arguments in v2.14](https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/parallel_tools.py#L639-L647). Test an authenticated parallel call without logging credentials.

**Only admit bot users you would trust as administrators.** [Messaging administration reached stable in v2.13 on 23 September 2026](https://github.com/agent0ai/agent-zero/releases/tag/v2.13). Telegram and WhatsApp users can [toggle instance-wide plugins](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_telegram_integration/helpers/settings_ui.py#L19-L113) and [edit non-Default profile permissions outside active runs](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_whatsapp_integration/helpers/slash_commands.py#L204-L251). Edits [persist](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_agent_editor/helpers/editor.py#L1210-L1252) in [the active project's profile scope, or globally without a project](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_agent_editor/helpers/editor.py#L742-L781).

Set explicit numeric Telegram `allowed_users` and WhatsApp `allowed_numbers` for configured bots: [Telegram's empty list allows every user](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_telegram_integration/helpers/handler.py#L99-L115), and [WhatsApp's empty list skips sender filtering](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_whatsapp_integration/helpers/handler.py#L88-L102). [Telegram can also select any instance chat](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_telegram_integration/helpers/slash_commands.py#L63-L68). After messaging use, inspect plugin toggles and saved permissions.

**Require login and narrow mounts before exposing the WebUI.** [Login checks are bypassed when no credentials hash exists](https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/api.py#L175-L185). Configure [both `AUTH_LOGIN` and `AUTH_PASSWORD`](https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/login.py#L5-L15). The [file browser is rooted at `/`, covering the container filesystem and mounts subject to process permissions](https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/file_browser.py#L83-L106). [Connected host folders appear under live connector grants](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/helpers/file_browser.py#L40-L99). Limit WebUI access to people you would let access those files.

**Choose host grants and a narrow launch directory before connecting an editor.** The [editor connection defaults to permission to read and write host files and execute commands](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_acp/default_config.yaml#L1-L11); those grants apply [on the editor/CLI connection](https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/acp.py#L330-L338). The [interactive CLI defaults exec and Computer Use off](https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/config.py#L33-L48). [The CLI checks host file paths against its launch root using realpath/commonpath](https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/remote_files.py#L178-L197). [Host Computer Use remains beta, enabled for a whole CLI session or Launcher lease](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/prompts/agent.system.tool.computer_use_remote.md#L4-L18).

**Deny both execution and input tools when commands are forbidden.** [Input sent to an idle host shell executes as a command](https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/remote_exec.py#L806-L834), under existing [host exec/write grants](https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/remote_exec.py#L588-L603). With default allow, [policy checks each canonical tool ID independently](https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/tool_policy.py#L161-L194). Block both `plugin:_a0_connector:code_execution_remote` and `plugin:_a0_connector:input_remote`, and check the [local execution/input pair](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_code_execution/tools/input.py). Or default Tools to block and allow deliberately. Verify denial through a subagent. Also [migrate remote `runtime=input` callers to `input_remote`; the old path was removed](https://github.com/agent0ai/agent-zero/commit/a2dc9dc8d74e5011b2bbf4c2cf3630481581215e).

**Restrict backup access as you would credential access.** [Defaults include hidden user state](https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/backup.py#L37-L68), and [host screenshots persist as chat media](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/tools/computer_use_remote.py#L934-L978). New patterns [exclude Orchestrator data and Time Travel history](https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/backup.py#L55-L68), but [saved custom patterns are not rewritten](https://github.com/agent0ai/agent-zero/commit/a5feaec431a8da615dc4f624a6ae55417b7c8ace). Inspect actual exclusions and who can read the archives.

**Choose where the child runs before delegating.** Orchestrator's [Codex example passes `--dangerously-bypass-approvals-and-sandbox`, and its non-root Claude Code example passes `--permission-mode bypassPermissions`](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_orchestrator/README.md#L82-L97). It supplies [adapters and guidance](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_orchestrator/README.md#L3-L18). Check which child CLIs are installed and read the actual invocation. Choose the host or container scope with those bypasses in mind.

**Stop one child without cancelling the parent.** In v2.14, [direct subagents show Working/Paused status; stopping a child returns a recoverable error to its parent, while parent cancellation kills the child](https://github.com/agent0ai/agent-zero/commit/f4700b4256a9bd88d2a29d817961f8abaa919554). Test both cancellation paths on a bounded task. The human still decides which jobs receive host and account access.

## What is unresolved

- Host shell and file boundaries: test the [chat-keyed shell manager](https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/remote_exec.py#L836-L856) in two chats for independent directory, variables, input/output and resets. Test the [host-file boundary](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/helpers/file_browser.py#L40-L99) with read and write attempts outside the launch root, including path changes. Follow with checks after grant revocation and on stale connections.

- Bot admission and saved policy: run `/permissions` with allowed and denied identities for an idle non-Default profile, then inspect the [saved project/profile policy](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_agent_editor/helpers/editor.py#L1056-L1090). Check menu access for the allowed identity, silence for the denied identity, and whether saved policy matches the allowed edits.

- Released recovery and profile switching: the [remaining `ready` changes](https://github.com/agent0ai/agent-zero/compare/v2.14...091c3677a54fb892b32750d8368896f4ed5dbc77), including the [incomplete-native-call guard](https://github.com/agent0ai/agent-zero/commit/675e7d051de8c95ea2fc561e76f56794fbe5d4bc) and [mid-run profile switching](https://github.com/agent0ai/agent-zero/commit/7216b8641b0169e82f0bc1498e0e8ec6ffdb0848), are branch-only. A later stable tag retaining the truncation detection/guard and profile-switching code would settle release status. Before assuming a `ready` Docker image contains that head, require a record tying its digest to source.

- Installed dependencies: compare an inventory tied to the installed image digest with the [tagged pins and floors](https://github.com/agent0ai/agent-zero/blob/v2.14/requirements.txt#L23-L75) to see which versions are installed.

## Profile hygiene

This source-based profile describes Agent Zero as of 2026-10-13.
Run the live checks above before relying on it. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/90bb1d1af32606608d2387bcb5d5796b88e00e5a/METHOD.md)
for the evidence contract.
