---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-extensions-gained-more-reach-in-the-1-0-line-and-before-agent-start-now-also-gates-extensi
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/releases/tag/v0.99.0
    precision: github_release
  - url: https://github.com/earendil-works/pi/releases/tag/v1.2.0
    precision: github_release
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/extensions/types.ts#L933-L951
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/commit/a447ba11f3e7760fcff91e924bda8c20033953ea
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/virtual-models.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/commit/6a51a39d4230c6a98948c14202ec76ae220232a6
    precision: commit
---
# 2026-10-13-pi-coding-agent-extensions-gained-more-reach-in-the-1-0-line-and-before-agent-start-now-also-gates-extensi

Extensions gained more reach in the 1.0 line, and `before_agent_start` now also gates extension-started runs. The September additions (authenticated model calls, `context_with_system`, context edits) are all still present at v1.2.0, and the 1.0 line widened the surface. An extension can now register MCP servers for the session, run any callable tool through `ctx.executeTool()` from a tool execution context (not every extension event context), decide which tools the model sees (`exposure`, `prepareLoadout()`), observe raw provider events, generate images with session credentials, and register a virtual model that picks the physical model and thinking level for every request. Pi records the physical model on each assistant message, and `/session` splits cost by physical model, so routing can be audited after the fact. One gate tightened in 1.2.0. Before it, runs started by `pi.sendMessage(..., { triggerTurn: true })` skipped `before_agent_start`, so prompt sections or policies injected there did not apply to extension-started runs. Now they do, and handlers that should act only on user prompts must check `event.messageType === "user"`. 1.2.0 also fixed a quiet control failure: `~` was not expanded in `!pattern` and `-path` entries of the `extensions`, `skills`, `prompts` and `themes` settings, so an exclusion like `!~/skills/pdf` matched nothing (#10765).

Channel: tagged-release (additions across v0.99.0 to v1.2.0). Half: both. Date: 2026-10-12.

Operator consequence: On upgrade, grep third-party extensions for `registerVirtualModel`, `registerMcpServer`, `executeTool`, `generateImages`, `provider_stream_event`, `modelRegistry`, `context_with_system` and `context_edit`. `appendContextEdit`, the grep target the profile gives, is the internal SessionManager method; extension code proposes `context_edit` entries instead. Extension authors with `before_agent_start` handlers must handle the new `"custom"` branch on 1.2.0. If you excluded resources with `~` paths, upgrade and confirm they are actually excluded.

## Receipt
- https://github.com/earendil-works/pi/releases/tag/v0.99.0
- https://github.com/earendil-works/pi/releases/tag/v1.2.0
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/extensions/types.ts#L933-L951
- https://github.com/earendil-works/pi/commit/a447ba11f3e7760fcff91e924bda8c20033953ea
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/virtual-models.md
- https://github.com/earendil-works/pi/commit/6a51a39d4230c6a98948c14202ec76ae220232a6
