---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-the-mirror-source-removes-meta-skill-arm64-refusal-gates
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/57a3ba443d90e8b482b87c1377c094ca62ef6c24
    precision: commit
---
# 2026-10-13-agent-flywheel-the-mirror-source-removes-meta-skill-arm64-refusal-gates

The mirror source removes Meta Skill ARM64 refusal gates. The same patch that repairs Ubuntu recovery stops refusing Meta Skill on ARM64 Linux. The maintainer cites a checksummed upstream archive; the verified ACFS capability is removal of its local gate. Archive presence can vary by upstream release, and no ARM64 executable was run here.

Channel: preview-or-beta. Half: capability. Date: 2026-10-09.

Operator consequence: ARM64 operators can evaluate the reviewed post-stable source path while retaining checksum checks, or wait for a real ACFS tag. This does not qualify the binary mirror as a stable upgrade or prove every upstream release has an ARM64 artifact.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/57a3ba443d90e8b482b87c1377c094ca62ef6c24
