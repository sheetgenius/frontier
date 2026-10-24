---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-aiohttp-multipart-resource-exhaustion-is-patched-in-messaging-dependency-pins
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/33836d505497a964bff989a916174b05e358362a
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/pyproject.toml
    precision: tagged_commit_file
  - url: https://github.com/advisories/GHSA-9xw5-w5jj-pvcg
    precision: official_docs
---
# 2026-10-24-hermes-agent-aiohttp-multipart-resource-exhaustion-is-patched-in-messaging-dependency-pins

Aiohttp multipart resource exhaustion is patched in messaging dependency pins. Messaging, Slack, Matrix, SMS and Teams exact pins move to aiohttp 3.14.5. CVE-2026-111066, published to the global advisory database on 2026-10-20, lets crafted multipart requests exhaust file descriptors when a server handler calls `Request.post()`. The affected range is >=2.0.0,<3.14.4; 3.14.4 is the first fix. No reachable Hermes handler exploit was established.

Channel: tagged-release. Half: defect. Date: 2026-10-23.

Operator consequence: Upgrade installed extras and inspect resolved versions. The dependency repair is actionable without claiming every Hermes messaging deployment is remotely exploitable.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/33836d505497a964bff989a916174b05e358362a
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/pyproject.toml
- https://github.com/advisories/GHSA-9xw5-w5jj-pvcg
