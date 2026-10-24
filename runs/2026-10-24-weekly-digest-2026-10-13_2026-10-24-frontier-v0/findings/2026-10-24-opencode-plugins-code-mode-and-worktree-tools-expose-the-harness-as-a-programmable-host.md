---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-plugins-code-mode-and-worktree-tools-expose-the-harness-as-a-programmable-host
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/plugins/index.mdx
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/plugins.mdx
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/tools.mdx
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/tool/plugin/opencode.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/sdk/index.mdx
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/sdk/cloudflare.mdx
    precision: tagged_commit_file
---
# 2026-10-24-opencode-plugins-code-mode-and-worktree-tools-expose-the-harness-as-a-programmable-host

Plugins, Code Mode and worktree tools expose the harness as a programmable host. Worktree creation/list/removal and session movement became core tools in 2.0.27; moving a session can preserve its identity while changing its working location. Plugins expose tools, agents, sessions, provider transforms and hooks, and gained permission assertions in 2.0.29. Server plugins execute on the server host; CLI plugins remain on the local CLI even when it connects remotely. Skills are instruction files, with `.opencode`, `.agents` and `.claude` discovery paths. At this tag, `disable-model-invocation: true` hides a skill from model advertising but does not unregister it or prevent explicit loading; [skill semantics](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/skills.mdx). The network client is `@opencode/client`; `@opencode/sdk` embeds the server with an in-memory HTTP router and opens no listener. Its Workerd profile uses Durable Object SQLite/events and replaces unavailable local filesystem/process services. MCP Code Mode is enabled by default and lets the model compose tool calls in JavaScript. Nested read/edit/shell and MCP calls retain their own checks; plugin tools enforce the permissions they assert. Session rename/move and worktree create/list request no built-in permission action. Worktree removal explicitly checks edit on the target directory. The 2.0.27 fix rejects Code Mode `fetch` with a file URL; 2.1.2 fixes async jobs interleaving mid-statement and losing writes.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Try one tool workflow through the supported client/SDK instead of maintaining a parallel agent loop, and verify tool results at the system boundary. Port plugins rather than loading V1 implementations. Review plugin trust on both client and server, and require explicit review of destructive worktree removal; a worktree separates checkout state, not host permissions. Durable Object recovery is a documented host capability, not a measured end-to-end guarantee in this research. Integration scaffolding can shrink while responsibility for tool effects, retries and final verification stays with the application owner.

## Receipt
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/plugins/index.mdx
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/plugins.mdx
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/tools.mdx
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/tool/plugin/opencode.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/sdk/index.mdx
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/sdk/cloudflare.mdx
