---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-agent-flywheel-arxiv-solo-author-velocity
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-07-01
  end: 2026-07-02
observation_kind: intake_context
event_date: 2026-06-05
corrected_on: 2026-07-12
status: accepted
confidence: high
evidence:
  - url: https://arxiv.org/src/2606.07448v1
    precision: arxiv_v1_source_bundle
---
# One study counted 110 traced repositories for an individual account and 97 for Microsoft

Robbes et al. v1, submitted 2026-06-05, identify the individual account
`Dicklesworthstone` as the leading entity in the newer-project top-35 adoption
figure. The same figure's source macros set `dicklesworthstone` to 110
repositories with detected coding-agent traces and Microsoft to 97; the paper
text describes the account as a single developer. Channel: paper intake context.
Operator consequence: this is an account-level count inside one detection method
and a sample restricted to non-fork GitHub projects with at least 10 stars,
5,000 lines of code, and 100 commits. It does not establish sole authorship,
code quality, useful outcomes, or that Agent Flywheel caused the repository
count. It predates the July 1-2 research window.

## Receipt
- https://arxiv.org/src/2606.07448v1
