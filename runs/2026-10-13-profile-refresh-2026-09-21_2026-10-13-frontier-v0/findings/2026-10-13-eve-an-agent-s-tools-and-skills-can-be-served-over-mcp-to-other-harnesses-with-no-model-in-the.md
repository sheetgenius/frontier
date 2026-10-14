---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-an-agent-s-tools-and-skills-can-be-served-over-mcp-to-other-harnesses-with-no-model-in-the
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/blob/eve%400.79.0/docs/channels/mcp.mdx?plain=1#L216-L346
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/commit/a2c2687a45513eeda8c5f4d236aca7de08b338ca
    precision: commit
  - url: https://github.com/vercel/eve/blob/eve%400.78.0/docs/channels/mcp.mdx?plain=1#L216-L242
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/pull/4124
    precision: merged_pr
  - url: https://github.com/vercel/eve/pull/4234
    precision: merged_pr
  - url: https://github.com/vercel/eve/releases/tag/eve%400.73.0
    precision: github_release
---
# 2026-10-13-eve-an-agent-s-tools-and-skills-can-be-served-over-mcp-to-other-harnesses-with-no-model-in-the

An agent's tools and skills can be served over MCP to other harnesses, with no model in the loop. `mcpChannel({ tools: true })` publishes every tool the agent can run outside a conversation, with input and output JSON schemas, and runs each `tools/call` "as the route-authenticated caller ... with no model, turn, or workflow run" (L230). Approval policies still apply: a call whose policy needs a person returns `approval_required` and does not run (L242). `skills: true` serves the agent's skills as SEP-2640 resources under `skill://` with sizes and SHA-256 digests, byte for byte except that a `SKILL.md` without conforming frontmatter gets generated frontmatter. Framework, workflow, provider, dynamic-resolver and subagent tools are excluded from publication. Tool sessions let several calls share one sandbox per caller and key on Vercel Sandbox or just-bash, not Docker or microsandbox, and a keyed call from an anonymous caller is denied (L306). A router can forward an end user's identity only to a channel with `trustedForwarders`; otherwise the header earns a 403 (L275-L277). Channel routes also get `invokeTool(name, input, { auth })`. Both flags default off. MCP calls may run in parallel, and retrying after a lost response runs the tool again; retained sandbox state is not durable authored state or ordered exactly-once execution.

Channel: tagged-release. Half: capability. Date: 2026-10-06 (eve@0.71.3) to 2026-10-07 (eve@0.73.0).

Operator consequence: The filesystem-first agent is now consumable at runtime by other agents (another eve, or any MCP client such as Codex or Claude Code) as a typed tool and skill server. Try it where you would otherwise hand another harness raw shell or API access. Before you set `tools: true`, re-audit every published tool as if it were a public API: the docs say every admitted caller can call them "outside the agent's instructions" (L230), so authorization belongs in the tool or its approval policy, never in the system prompt. Scope `trustedForwarders` to exact forwarders; `() => true` trusts every caller that passes route auth, preview deployments included (auth guide L242).

## Receipt
- https://github.com/vercel/eve/blob/eve%400.79.0/docs/channels/mcp.mdx?plain=1#L216-L346
- https://github.com/vercel/eve/commit/a2c2687a45513eeda8c5f4d236aca7de08b338ca
- https://github.com/vercel/eve/blob/eve%400.78.0/docs/channels/mcp.mdx?plain=1#L216-L242
- https://github.com/vercel/eve/pull/4124
- https://github.com/vercel/eve/pull/4234
- https://github.com/vercel/eve/releases/tag/eve%400.73.0
