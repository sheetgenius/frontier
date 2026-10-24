---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-pi-has-independently-versioned-front-ends-forks-and-durable-hosts-not-one-synchronized-eco
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/agegr/pi-web/blob/v0.12.2/package.json
    precision: tagged_commit_file
  - url: https://github.com/minghinmatthewlam/pi-gui/blob/v1.0.1/packages/pi-sdk-driver/package.json
    precision: tagged_commit_file
  - url: https://github.com/rcarmo/piclaw/blob/v3.3.4/package.json
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.12.6
    precision: github_release
  - url: https://github.com/TannerMidd/pi-pocket/releases/tag/v0.21.0
    precision: github_release
---
# 2026-10-24-pi-coding-agent-pi-has-independently-versioned-front-ends-forks-and-durable-hosts-not-one-synchronized-eco

Pi has independently versioned front ends, forks and durable hosts, not one synchronized ecosystem release. The in-window releases and pinned dependency manifests establish several real ways to build above Pi: a browser UI around its SDK, an Electron desktop driver, mobile Durable sessions, a more opinionated fork, and hosted storage adapters. Pi-web v0.12.2 pins Pi 1.2.0, while Pi Pocket v0.21.0 pins Pi/Durable 1.4.0; pi-gui v1.0.1 remains older outside-window inventory. They do not establish one common runtime version. This is concrete downstream adoption, with the following operating differences. Tagged downstream releases, source snapshots without established release membership, and mutable discovery/adoption observations are separate evidence groups below.

Channel: mixed. Half: both. Date: 2026-10-24.

Operator consequence: Reuse Pi's session/model/tool contracts where that removes custom harness plumbing, then audit the host's exact dependency, authentication, exposure and recovery policy. The ecosystem makes interfaces cheaper to build; it also creates more independently versioned authority surfaces. For a team selecting a front end, version lag, durable-state migration and ownership of failure recovery are more useful criteria than a shared Pi name or a star count.

## Receipt
- https://github.com/agegr/pi-web/blob/v0.12.2/package.json
- https://github.com/minghinmatthewlam/pi-gui/blob/v1.0.1/packages/pi-sdk-driver/package.json
- https://github.com/rcarmo/piclaw/blob/v3.3.4/package.json
- https://github.com/can1357/oh-my-pi/releases/tag/v18.12.6
- https://github.com/TannerMidd/pi-pocket/releases/tag/v0.21.0
