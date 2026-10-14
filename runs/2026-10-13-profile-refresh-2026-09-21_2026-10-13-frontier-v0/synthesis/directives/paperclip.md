# Paperclip: final-drafter directives

Profile date: 2026-10-13. Window: 2026-09-21..2026-10-13, inclusive, UTC.

Use the corrected [owning harvest](../../harvest/paperclip.primary.md) with its
[crosscheck](../../verify/paperclip.crosscheck.md). Preserve the dated profile shape
and primary receipts. Historical correction prose belongs in this research
record; the public body states the current operating rule.

## Must

1. **Put writer drain before starting an upgrade.** Before installation/start or rollback advice, require draining every old server and worker writing to the instance root, including other hosts and containers. Preserve the new SQLite lock files. Old and new writer protocols must not coexist there.

   Evidence: [owning record, sections 6](../../harvest/paperclip.primary.md), [writer-drain contract](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/workspace-restore-locks.md#L42-L52).

   Merged inputs: [utility U13](../utility.md).


## Should

1. **Lead with the actual new-agent authority.** Use the tagline "New standard Paperclip agents gain setup and tool permissions that operators need to scope." Explain the fourteen activation grants and unscoped tools:use being evaluated after applicable policy and connection checks but before tool-profile exclusions. Pending agents wait for activation, low-trust/built-in agents are excluded, and existing agents are not backfilled. Keep the corrected Grok advice: alwaysApprove already defaulted true; removing dontAsk did not make all unattended runs wait.

   Evidence: [owning record, sections 3, 7](../../harvest/paperclip.primary.md), [Grant-before-profile decision](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L1466-L1480), [default grants](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L3-L28).

   Merged inputs: [thread T08](../thread.md), [skeptic S05](../skeptic.md).

2. **Name the worker versions before borrowing standalone advice.** Beside adapter defaults, state stable's declared Codex 0.160.0 and Claude Code 2.1.286 pins and remote Codex's >=0.149.0,<0.161.0 range. Require actual worker/image identity and supported adapter compatibility before applying Codex 0.162.1 or Claude 2.1.296 advice. Keep native Codex restrictions distinct from legacy bypass. Pins do not prove the actual runtime or a bundled exploit.

   Evidence: [owning record, sections 1, 6](../../harvest/paperclip.primary.md), [Paperclip stable release](https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0), [Codex 0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1), [Claude 2.1.296](https://github.com/anthropics/claude-code/releases/tag/v2.1.296), [Native Codex restrictions](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/paperclip-runner/src/drivers/codex/codex-security-config.ts#L187-L220).

   Merged inputs: [comparison P09](../comparison.md).

3. **Describe instruction redistribution, then test it.** Beside the shorter default role/planning files, state that the shared coordination skill grew from 7,626 to 8,584 words. The comparison recorded zero provider runs and no behavioral grade. Retain unchanged saved manuals and a matched-task experiment; neither reduced total procedure nor equal quality, lower spend or less human work is established.

   Evidence: [owning record, sections 8](../../harvest/paperclip.primary.md), [current coordination skill](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/skills/paperclip/SKILL.md), [baseline](https://github.com/paperclipai/paperclip/blob/v2026.916.1/skills/paperclip/SKILL.md), [comparison with zero provider runs](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/plans/2026-10-05-plan-task-guidance.md#L44-L85).

   Merged inputs: [lens L01](../lens.md).

4. **Give Browser Use a complete bounded trial.** Authorize the browser profile, set an explicit per-run cap, use a harmless website task and check provider-confirmed cancellation. Closing the viewer does not stop paid work. Keep the vendor's basic journey attributed and leave revocation/restart/approval acceptance open.

   Evidence: [owning record, sections 15](../../harvest/paperclip.primary.md), [Browser Use contract](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/BROWSER-USE.md).

   Merged inputs: [utility U14](../utility.md).

5. **Pair the grant decision with an enabled capability.** Offer a flag-off Assistant MCP trial on an authenticated test company with real users and a suitable public origin. Explain explicit enablement, company-bound consent and that read-only consent cannot delegate work. Keep beta human Operator backfill separate; revocation does not cancel work already delegated.

   Evidence: [owning record, sections 10, 11](../../harvest/paperclip.primary.md), [Assistant MCP](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/public-mcp.md).

   Merged inputs: [utility U15](../utility.md).


## Could

No additional could-level edit from these six lenses.

## Resolutions

The permissions-versus-manuals tagline was an unmeasured editorial ranking, not a disproved fact; the concrete grant change is the stronger lead. Shorter selected files coexist with a larger shared protocol. Older child pins are real composition constraints, not errors to overwrite with upstream latest. The empty comparison list can stay.

