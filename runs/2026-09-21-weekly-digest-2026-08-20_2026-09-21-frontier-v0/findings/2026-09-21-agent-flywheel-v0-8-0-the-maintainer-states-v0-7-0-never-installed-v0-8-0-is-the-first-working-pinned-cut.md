---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-agent-flywheel-v0-8-0-the-maintainer-states-v0-7-0-never-installed-v0-8-0-is-the-first-working-pinned-cut
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.8.0
    precision: github_release
---
# 2026-09-21-agent-flywheel-v0-8-0-the-maintainer-states-v0-7-0-never-installed-v0-8-0-is-the-first-working-pinned-cut

v0.8.0: the maintainer states v0.7.0 never installed; v0.8.0 is the first working pinned cut since v0.5.0. The watchlist's standing premise ("what you install is still
v0.7.0") was worse than recorded: by the maintainer's own account the pinned
v0.7.0 install path failed outright. Our profile and every July finding cited
v0.7.0 as the installable cut.

Channel: tagged-release. Half: both. Date: 2026-08-25.

Operator consequence: Stop pinning v0.7.0. Pin v0.9.0 (below). Re-audit
Frontier's own claims that describe v0.7.0 as the thing operators run: the
governance findings read its source correctly, but the "installable" framing
needs a correction note. The release notes also warn that main can break again
whenever a covered file lands without regenerating checksums: install from a
tag, never main.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.8.0
