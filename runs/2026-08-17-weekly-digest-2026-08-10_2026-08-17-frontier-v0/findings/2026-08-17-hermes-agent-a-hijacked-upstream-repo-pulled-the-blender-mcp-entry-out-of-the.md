---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-a-hijacked-upstream-repo-pulled-the-blender-mcp-entry-out-of-the
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/83404
    precision: merged_pr
---
# 2026-08-17-hermes-agent-a-hijacked-upstream-repo-pulled-the-blender-mcp-entry-out-of-the

A hijacked upstream repo pulled the blender MCP entry out of the catalog.

The `blender` MCP catalog entry and the `blender-mcp` optional skill were removed after the upstream maintainer (@sidahuj) publicly reported his GitHub account compromised and his repos' ownership stripped on 2026-08-08. Hermes verified independently rather than taking the report on faith: ahujasid/blender-mcp and ahujasid/ableton-mcp both 301-redirect to a fresh org (MCPBlender, created 2026-08-08T11:33Z) pushing new commits, and the raw addon.py URL the docs pointed at now 404s. The reasoning for removal over a warning is the shape of the bridge: the stdio server half is safe (the pin `blender-mcp==1.6.4` is a pre-compromise PyPI release, sdist sha256 re-verified byte-identical), but the Blender addon half is arbitrary Python running inside Blender that ships in no PyPI artifact and was only ever distributed from the now-attacker-controlled repo. Cross-references in unreal-mcp and kanban-video-orchestrator were cleaned so no dangling links point at attacker-controlled code.

Channel: tagged-release. Ancestry: merge_commit_sha 5b8cbd5ef2891eca3cf414306ca8e6ec8a3bf118; compare/5b8cbd5e...v2026.8.13 -> status=ahead, ahead_by=546, behind_by=0 (ancestor of stable tag v2026.8.13).

Operator consequence: If you installed the blender MCP bridge before 2026-08-10, re-fetch nothing and re-audit the addon.py currently loaded in your Blender  --  that is the half with no trustworthy source. The transferable lesson: a catalog entry is only as safe as its least-packaged half, and a PyPI pin proves nothing about a component distributed by git URL.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/83404
