---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-pi-pocket-declares-and-locks-a-patched-undici-graph
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/TannerMidd/pi-pocket/releases/tag/v0.20.0
    precision: github_release
  - url: https://github.com/TannerMidd/pi-pocket/blob/v0.20.0/package.json
    precision: tagged_commit_file
  - url: https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/package.json
    precision: tagged_commit_file
  - url: https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/package-lock.json
    precision: tagged_commit_file
  - url: https://github.com/advisories/GHSA-xjj6-f33q-929c
    precision: official_docs
---
# 2026-10-24-pi-coding-agent-pi-pocket-declares-and-locks-a-patched-undici-graph

Pi Pocket declares and locks a patched Undici graph. Pi Pocket declares Undici 8.12.3 directly and as a root override from v0.20.0; the v0.21.0 lock resolves `node_modules/undici` to 8.12.3. This exceeds the 8.12.2 fixed floor for the three advisories in section 14, despite Pocket embedding Pi 1.4.0, whose own manifest still pins 8.10.2.

Channel: tagged-release. Half: both. Date: 2026-10-22.

Operator consequence: Inspect the host's resolved graph before assigning an upstream dependency exposure to it. Pocket's tagged graph is a concrete counterexample to blanket inheritance of Pi's Undici pin. No installed Pocket artifact was audited or executed, so verify the deployed artifact separately.

## Receipt
- https://github.com/TannerMidd/pi-pocket/releases/tag/v0.20.0
- https://github.com/TannerMidd/pi-pocket/blob/v0.20.0/package.json
- https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/package.json
- https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/package-lock.json
- https://github.com/advisories/GHSA-xjj6-f33q-929c
