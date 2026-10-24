---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-cloud-agents-can-deliver-a-shareable-canvas-instead-of-a-transcript-only-result
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/changelog/cloud-agent-canvases-and-environments
    precision: official_docs
  - url: https://cursor.com/docs/agent/tools/canvas
    precision: official_docs
---
# 2026-10-24-cursor-cloud-agents-can-deliver-a-shareable-canvas-instead-of-a-transcript-only-result

Cloud agents can deliver a shareable canvas instead of a transcript-only result. Cursor's dated launch makes interactive canvases an output of cloud agents. The documentation specifies a publish/refresh action and a browser link that team members can read without rerunning the agent. Sharing needs a qualifying paid plan, team membership and storage-compatible privacy settings; an administrator can disable it. The publisher's dashboard lists their own shares, not the team's complete canvas inventory.

Channel: docs-only. Half: capability. Date: 2026-10-16.

Operator consequence: Try a canvas for a bounded audit or comparison and ask for its supporting data. This can remove the work of converting a long agent conversation into a review artifact. Human attention moves to checking evidence, freshness and sharing scope. A polished canvas does not verify its contents, and the launch supplies no measured reduction in review time.

## Receipt
- https://cursor.com/changelog/cloud-agent-canvases-and-environments
- https://cursor.com/docs/agent/tools/canvas
