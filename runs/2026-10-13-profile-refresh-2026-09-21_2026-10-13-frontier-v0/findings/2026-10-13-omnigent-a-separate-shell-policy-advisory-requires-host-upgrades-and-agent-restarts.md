---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-a-separate-shell-policy-advisory-requires-host-upgrades-and-agent-restarts
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-m3m2-42jg-grrv
    precision: official_docs
  - url: https://github.com/omnigent-ai/omnigent/commit/d2e077a1e3d502748ec0d792dfdede7319ccb968
    precision: commit
---
# 2026-10-13-omnigent-a-separate-shell-policy-advisory-requires-host-upgrades-and-agent-restarts

A separate shell-policy advisory requires host upgrades and agent restarts. GHSA-m3m2-42jg-grrv records shell-command forms that evaded configured GitHub or working-directory policies before 0.18.0. An attacker influencing an agent with shell access could cause operations outside configured repo, branch or cwd limits. This uses the OS permissions and credentials already available to the agent; it does not confer new credentials. Its remediation explicitly covers systems running agents, not only central multi-user servers.

Channel: tagged-release. Half: defect. Date: 2026-10-13T08:57:46Z.

Operator consequence: Upgrade affected agent hosts to 0.18.0 and restart agent processes. Until then restrict shell access for agents processing untrusted input and enforce filesystem and credential restrictions independently. Conservative parsing increases approval volume as described in section 3.

## Receipt
- https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-m3m2-42jg-grrv
- https://github.com/omnigent-ai/omnigent/commit/d2e077a1e3d502748ec0d792dfdede7319ccb968
