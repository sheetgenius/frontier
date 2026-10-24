# Hermes Agent final-draft directives

Profile date: 2026-10-24. Merged inputs: lens `hermes-agent`; thread `hermes-agent`. Consistency found no cross-profile fact correction. The [owning harvest](../../harvest/hermes-agent.primary.md) controls facts and timestamped selectors.

## Must

No additional must correction was identified by the three lenses.

## Should

1. Replace the tagline claiming v0.22.5 "reduces orchestration work" with the mechanism: gateway-owned sessions and approved event subscriptions can replace duplicate dispatch plumbing. Keep trigger grants and continuing-job ownership explicit. Evidence: harvest sections 2 and 18; [gateway lifecycle](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/gateway-classic-cli.md), [experimental opt-in subscriptions](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/user-guide/features/mcp.md#L1027-L1081). No measured net work reduction follows.
2. Lead upgrade guidance with the concrete launcher migration: "Before upgrading an embedded Hermes MCP server to v0.22.5, install mcp-serve in its launch profile and replace the old hermes mcp serve command." Client args change from `["mcp", "serve"]` to `["mcp-serve"]`; installing the plugin alone does not repair the launcher. Evidence: harvest section 4; [migration implementation](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/left_core_migration.py#L239-L278), [pinned plugin contract](https://github.com/NousResearch/hermes-official-plugins/blob/6389dd08c1e485db708688c69e42c2b7a7360f4e/mcp-serve/README.md). Its conversation read/send/approval authority survives the smaller-core packaging.
3. Keep actual delivery, budgets and retention close to unattended-use advice. Terminal EOF/detach does not cancel a gateway job; track its session and completion, and set `agent.run_budget_seconds` in configuration. Fresh official installs select stable and selected release checks now pass, while standalone Desktop installers did not change and native smoke omissions remain. Treat saved session-pruning policy separately from dirty/ignored worktree retention. Evidence: harvest Install today and sections 2, 9 and 16; [release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5), [gateway contract](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/gateway-classic-cli.md), [tagged defaults](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/config_defaults.py).

## Could

None.

## Resolution

The smaller-core story earns space through the migration, while gateway continuity supplies the positive workflow mechanism. Extraction transfers maintenance to a plugin boundary; it does not show intelligence absorbed the feature or that all MCP functionality left core. Keep standalone Desktop, Store, source and Docker identities distinct. Import targets are not bundled versions or equivalent policies. Keep `compared_with: []`; if a shared-process comparison is added elsewhere, use current Codex 0.164.0 rather than the memo's explicitly historical 0.162.1 precedent.
