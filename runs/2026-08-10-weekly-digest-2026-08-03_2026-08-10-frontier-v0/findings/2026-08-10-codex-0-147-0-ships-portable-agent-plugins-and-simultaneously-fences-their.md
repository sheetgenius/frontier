---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-codex-0-147-0-ships-portable-agent-plugins-and-simultaneously-fences-their
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.147.0
    precision: github_release
---
# 2026-08-10-codex-0-147-0-ships-portable-agent-plugins-and-simultaneously-fences-their

0.147.0 ships portable Agent Plugins and simultaneously fences their runtime.

Portable Agent Plugins can now be installed and searched across local, personal, workspace, and remote catalogs. In the same tag, #37027 bounds what a plugin can reach: Agent Plugin manifests are tracked through plugin, skill, and MCP loading; only direct-child skills are discovered; app and hook capabilities are excluded; MCP data is isolated; MCP configuration files that are non-regular or resolve outside the plugin root are rejected; model-visible skill instructions, plugin instructions, MCP descriptions, schemas, individual tools, and the aggregate plugin MCP tool set are all size-bounded; and MCP/OAuth redirects are stopped when an Agent Plugin sends configured or authorization headers. #36967 skips symlinks during plugin install and #36037 denies network access outright when an allow-amendment fails.

Channel: tagged-release. Ancestry: gh api repos/openai/codex/compare/rust-v0.146.0...rust-v0.147.0 --paginate returns 344 commits including 2b5bdcf67547860f2e5c5a605009a70026796b2b 'Support portable Agent Plugins throughout installation (#36544)' and 56b82e676cc56ccd550362fc5055c76ba3445849 'Enforce Agent Plugin runtime boundaries (#37027)'. rust-v0.147.0 is prerelease=false, published_at 2026-08-07T01:41:49Z; npm dist-tag latest=0.147.0.

Operator consequence: Try it, but audit before you distribute. A remote plugin catalog is a new supply-chain surface pointed at your agent's tool namespace; the boundary work in the same tag is a signal that OpenAI shipped the distribution mechanism and the containment together rather than after an incident. Operators running workspace or remote catalogs should confirm which scope a plugin came from and that legacy (non-Agent-Plugin) plugins in their fleet are not silently exempt from the new fencing, because the manifest tracking explicitly preserves legacy behaviour for legacy formats.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.147.0
