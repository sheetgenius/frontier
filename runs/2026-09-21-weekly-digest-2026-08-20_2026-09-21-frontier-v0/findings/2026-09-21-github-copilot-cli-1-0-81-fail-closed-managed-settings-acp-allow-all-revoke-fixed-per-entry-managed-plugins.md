---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-github-copilot-cli-1-0-81-fail-closed-managed-settings-acp-allow-all-revoke-fixed-per-entry-managed-plugins
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L200-L257
    precision: tagged_commit_file
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.81
    precision: github_release
---
# 2026-09-21-github-copilot-cli-1-0-81-fail-closed-managed-settings-acp-allow-all-revoke-fixed-per-entry-managed-plugins

1.0.81: fail-closed managed settings, ACP allow-all revoke fixed, per-entry managed plugins. `forceRemoteSettingsRefresh` now fails closed: no cached policy on fetch failure; the session applies the restrictive undetermined-policy posture (non-default MCP servers blocked, bypass-permissions mode unavailable, plugin mutations blocked) (L249). Turning allow-all off from an ACP client now actually reaches the permission engine; before, it could report success while permissions stayed on (a launch-flag `--allow-all-*` baseline is still left intact) (L228). Managed settings win per entry for `enabledPlugins` and `extraKnownMarketplaces` (L252). New `defaultMode` and `defaultPermissionMode` settings choose startup approval behavior (L210). MCP spec 2026-07-28 support (L203). Hooks receive OpenTelemetry `traceparent` (L204). Removed `/plugins`; hook and LSP enable/disable toggles are "temporarily unavailable" (L256-L257).

Channel: tagged-release. Half: both. Date: 2026-08-27.

Operator consequence: If you drive Copilot over ACP (Omnigent or any other ACP client), a revoke of allow-all before 1.0.81 may have been cosmetic; upgrade and do not rely on revoke when the session was launched with `--allow-all-*`. That also answers the contract's ACP question: ACP is a shipping, versioned surface, and the launch flags, not the ACP client, set the floor. Admins using `forceRemoteSettingsRefresh` should expect sessions to start restricted when GitHub is unreachable. Anyone who toggled hooks from `/plugins` lost that UI in 1.0.81; edit settings instead.

## Receipt
- https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L200-L257
- https://github.com/github/copilot-cli/releases/tag/v1.0.81
