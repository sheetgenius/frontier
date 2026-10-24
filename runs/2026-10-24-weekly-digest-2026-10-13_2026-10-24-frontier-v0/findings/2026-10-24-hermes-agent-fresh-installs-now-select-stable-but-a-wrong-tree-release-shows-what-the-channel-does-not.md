---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-fresh-installs-now-select-stable-but-a-wrong-tree-release-shows-what-the-channel-does-not
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/3857c7b8eed575cba49d1e01b4bde925bd804b34
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/scripts/install.sh
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.2
    precision: github_release
  - url: https://github.com/NousResearch/hermes-agent/actions/runs/39889504159
    precision: official_docs
  - url: https://api.github.com/repos/NousResearch/hermes-agent/releases/tags/v0.22.5
    precision: official_docs
  - url: https://api.github.com/repos/NousResearch/hermes-agent/git/tags/56b6a31fededdf7364e1a0a79548d144e7fd81a3
    precision: official_docs
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/update_channel.py#L140-L200
    precision: tagged_commit_file
  - url: https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/stable
    precision: official_docs
  - url: https://pypi.org/pypi/hermes-agent/0.19.0/json
    precision: package_registry
  - url: https://registry.npmjs.org/hermes-agent
    precision: official_docs
  - url: https://hermes-assets.nousresearch.com/releases/tag/rc.3-v0.22.5/release-candidates.json
    precision: github_release
---
# 2026-10-24-hermes-agent-fresh-installs-now-select-stable-but-a-wrong-tree-release-shows-what-the-channel-does-not

Fresh installs now select stable, but a wrong-tree release shows what the channel does not guarantee. The parent's update command already defaulted to stable; the fresh installer now does too. A failed stable lookup stops a fresh installation instead of quietly choosing main. Meanwhile v0.22.1 was cut from the wrong commit, shipped unreleased gateway work, and left the Store app stuck connecting, according to the corrective v0.22.2 release. That correction also documented a session-deletion limitation for sessions created by v0.22.1. The early v0.22.0 attempt still set `skipTests: true`; v0.22.5 selected and passed substantive release lanes. Neither observation should be generalized across the whole series. [v0.22.0 attempt](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/dbd5ccbfe1797c9f5535c055f60645cfdbd65888), [v0.22.5 attempt](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/97b6b119832cd973992229dfe5984bb978f9b7ce).

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: At the confirmed 2026-10-24T10:18:35Z latest-release read, stable is v0.22.5, published 2026-10-23T05:28:45Z, source `bf0203a794a07aac3ff764972ab9087baa4e4f4e`. Its official installer accepts `--commit` with that full SHA; existing official source installations can select `hermes update --set-channel stable`. Docker stable/latest selected `sha256:9c5561579f3ffdf333401797094ac3a743738d6c25d40f4331c7bf77b694238d` at the crosscheck's 2026-10-24T10:09:23Z read. PyPI still selected 0.19.0 and npm 0.22.5 was an unofficial bridge at that read. v0.22.5 did not replace standalone Desktop installers; Store-client ingestion is unverified. Use v0.22.5 source or its Docker digest for a new bounded trial, and record the channel rather than treating `hermes update` as a fixed artifact. Recheck startup, existing sessions, plugins, and the actual packaged platform before rollout. Stable selection removes a routine main-tracking decision; it does not remove release-tree or migration review. The earlier profile's fresh-installer-main advice and blanket skipped-tests posture need updating.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/3857c7b8eed575cba49d1e01b4bde925bd804b34
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/scripts/install.sh
- https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.2
- https://github.com/NousResearch/hermes-agent/actions/runs/39889504159
- https://api.github.com/repos/NousResearch/hermes-agent/releases/tags/v0.22.5
- https://api.github.com/repos/NousResearch/hermes-agent/git/tags/56b6a31fededdf7364e1a0a79548d144e7fd81a3
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/update_channel.py#L140-L200
- https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/stable
- https://pypi.org/pypi/hermes-agent/0.19.0/json
- https://registry.npmjs.org/hermes-agent
- https://hermes-assets.nousresearch.com/releases/tag/rc.3-v0.22.5/release-candidates.json
