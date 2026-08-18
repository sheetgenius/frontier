---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-agent-zero-spynel-announced-as-a-preview-an-orchestration-layer-over-codex-claude
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://www.agent-zero.ai/p/articles/meet-spynel-one-conversation-many-agents/
    precision: official_docs
---
# 2026-08-10-agent-zero-spynel-announced-as-a-preview-an-orchestration-layer-over-codex-claude

Spynel announced as a preview: an orchestration layer over Codex, Claude Code, Agent Zero and others, with no code shipped.

Jan Tomášek (Agent Zero's author) previews Spynel, described as an 'orchestration and control layer' rather than a model, which 'reuses established AI harnesses for reasoning, tools, MCP, skills, coding, and execution.' Named targets in priority order: Codex and Claude Code first, then Agent Zero, Pi, and OpenCode, 'and others through ACP compatibility.' 'Review-driven' is defined as an agentic developer-and-reviewer loop where a development agent implements a task and hands the result to a separate review pass: 'Agents can review the work, identify bugs, send it back for fixes, and repeat the cycle autonomously.' The article discloses that the interview itself was conducted by a Spynel AI communication agent. Availability is explicit: 'Release is planned in the coming weeks', with readers told to follow social channels.

Channel: docs-only. Ancestry: Marketing/announcement surface only. The article sits on the vendor's own site at https://www.agent-zero.ai/p/articles/meet-spynel-one-conversation-many-agents/ and self-reports a publication timestamp of 2026-08-09 15:27 UTC; the article index orders it between the v2.8 (2026-08-01) and v2.9 (2026-08-12) posts, consistent with that date. No corresponding repository, tag, release, or commit exists under agent0ai for Spynel, and no code channel changed. The site sitemap carries a uniform lastmod of 2026-08-12 across all pages, which is a site-rebuild stamp and not usable as an authoring date  --  the in-page timestamp is the only date evidence.

Operator consequence: Ignore for now as a tool; note it as context. Nothing is downloadable, nothing is versioned, and a stated 'coming weeks' from a solo-led project is not a date. Its value this window is as the thing that explains two shipped changes: the ACP bundle staged on `ready` and the five-harness Migrate Agents plugin in v2.9 both make sense as groundwork for a layer that drives Agent Zero as one harness among several. If you are tracking where harness orchestration is heading, that is the signal  --  the ACP commit is the receipt, the announcement is the intent. Do not cite the harness list as a compatibility matrix; it is a roadmap claim on a landing page, not a doc and not code.

## Receipt
- https://www.agent-zero.ai/p/articles/meet-spynel-one-conversation-many-agents/
