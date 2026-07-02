---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-agent-flywheel-arxiv-solo-author-velocity
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://arxiv.org/abs/2606.07448
    precision: arxiv_record
---
# 2026-07-02-agent-flywheel-arxiv-solo-author-velocity

Robbes et al., submitted 2026-06-05, identify `Dicklesworthstone` as the leading
entity in the newer-project top-35 adoption figure. The arXiv source bundle sets
the top count to 110 and Microsoft's newer-project repository count to 52; the
paper text says this single developer created more repositories with coding-agent
traces than Microsoft during the study period. Channel: paper. Operator
consequence: the velocity claim is verified as a research-paper statement about
GitHub projects with coding-agent traces, not as a reason to harvest the author's
portfolio.

## Receipt
- https://arxiv.org/abs/2606.07448
