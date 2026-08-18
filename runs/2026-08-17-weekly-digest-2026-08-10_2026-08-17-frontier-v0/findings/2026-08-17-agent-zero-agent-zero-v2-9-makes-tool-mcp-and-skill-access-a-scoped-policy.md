---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-agent-zero-agent-zero-v2-9-makes-tool-mcp-and-skill-access-a-scoped-policy
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/eec18ad839eedb5e92d389ca164abc192e19968f
    precision: commit
---
# 2026-08-17-agent-zero-agent-zero-v2-9-makes-tool-mcp-and-skill-access-a-scoped-policy

Agent Zero v2.9 makes tool, MCP, and skill access a scoped policy enforced at execution and inherited by delegated subagents.

A single project/profile-aware resolver (helpers/tool_policy.py) now canonicalises local, plugin, and MCP tool identities and is applied at six enforcement points, not one: text system prompts (extensions/python/system_prompt/_11_tools_prompt.py, _12_mcp_prompt.py), native Responses tool schemas (helpers/responses_tools.py), connector tool stubs, local execution (plugins/_tool_access/extensions/python/tool_execute_before/_10_enforce_tool_policy.py), MCP invocation (helpers/mcp_handler.py), and delegated/parallel subordinate agents (helpers/parallel_tools.py). A blocked tool is removed from the rendered prompt rather than merely refused at call time. The hardening commit afff2e3c05 fixes the fail-open case the first pass left behind: an empty config at a higher layer used to shadow an inherited restriction, so a project-level profile with no policy set could silently erase a global block. A parallel commit (c2ee867665) adds sparse allow/block skill visibility with an explicit default for future skills. The official docs corroborate the released behaviour and name the tri-state model verbatim: 'On' (always allow), 'Default' (follow category default), 'Off' (block the item), with 'Changing a category default affects existing and future items left on Default. Explicit On and Off decisions remain pinned.' Profiles live at /a0/usr/agents/<profile-id>/ globally and /a0/usr/projects/<project>/.a0proj/agents/<profile-id>/ per project, and /permissions opens the editor from chat.

Channel: tagged-release. Ancestry: gh api repos/agent0ai/agent-zero/compare/eec18ad839...v2.9 -> status=ahead, ahead=48, behind=0; compare/afff2e3c05...v2.9 -> status=ahead, ahead=40, behind=0; compare/c2ee867665...v2.9 -> status=ahead, ahead=47, behind=0. All three are ancestors of the stable tag v2.9 (releases API: prerelease=false, published_at 2026-08-12T13:58:33Z). The annotated tag v2.9 (57d8e907e1) dereferences to commit baadd0dd0b09fa769a1027c183b964be85d5c8cc, which is also the current main HEAD.

Operator consequence: Test this before trusting it, and test it specifically through a subagent. For a framework whose entire premise is an agent with a real computer, terminal, browser, and filesystem, a per-project revocation that actually survives delegation and MCP is the first governable boundary Agent Zero has shipped; the enforcement points list is what makes it credible rather than cosmetic. Two caveats the docs state plainly and you should verify locally: skill policy 'controls discovery and new loading. It does not erase skill text already saved in a chat's history', so revoking a skill does not retroactively sanitise a long-running conversation, and the fail-open shadowing bug in the first implementation means you should assert an actual denial in a project-scoped profile rather than reading the UI state. If you previously modelled Agent Zero as all-or-nothing machine access, this is the change that justifies re-modelling it as a workcell with a revocable tool surface.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/eec18ad839eedb5e92d389ca164abc192e19968f
