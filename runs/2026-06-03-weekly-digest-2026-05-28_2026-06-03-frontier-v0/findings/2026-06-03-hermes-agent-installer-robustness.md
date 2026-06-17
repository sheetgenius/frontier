---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-hermes-agent-installer-robustness
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "post-v0.15.2"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "Commits June 3: d3b1e43 'fix(installer): never brick the install when a self-update swap fails'; 39fee4f 'test(installer): cover the post-update relaunch/install target derivation'; 1971b10 'fix(insta"
    url: https://github.com/NousResearch/hermes-agent/commits/main
    precision: commit
---
# Installer self-update robustness and logging improvements

## What Changed

Installer never bricks on self-update swap failure; post-update relaunch/install target derivation now covered; LogStream properly passed to emit_log calls; stdout-style progress no longer mislabeled as stderr; Windows update handles dirty worktree; macOS self-update rebuilds and relaunches cleanly.

## Operator Implication

Critical for automated deployment pipelines: self-updates are now safer and more robust. Windows and macOS users should experience cleaner update cycles. Logging improvements aid troubleshooting.

## Receipt

- [Commits June 3: d3b1e43 'fix(installer): never brick the install when a self-update swap fails'; 39fee4f 'test(installer): cover the post-update relaunch/instal](https://github.com/NousResearch/hermes-agent/commits/main)
