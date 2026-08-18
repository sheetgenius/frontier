---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-paperclip-breaking-docker-latest-changed-meaning-from-every-master-merge-to
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/11006
    precision: merged_pr
---
# 2026-08-17-paperclip-breaking-docker-latest-changed-meaning-from-every-master-merge-to

Breaking: Docker `:latest` changed meaning from every master merge to stable only.

ghcr.io/paperclipai/paperclip:latest previously tracked every merge to master. It now moves only on stable releases. Master builds publish :canary, nightly tags publish :nightly, beta tags publish :beta, stable tags publish :latest plus :YYYY.MDD.P version tags, and every image gets :sha-<short-sha> for exact pinning. The PR also records why no stable-versioned image existed in ghcr before this: tags pushed with GITHUB_TOKEN never fired the v* trigger in docker.yml, so CI-published stables produced no images at all.

Channel: tagged-release. Ancestry: PR #11006 merge commit f9173782cd12bc5e47466150892c0724789d26af; compare f9173782...v2026.817.0 -> ahead, behind_by=0. Listed first under 'Breaking Changes' in the v2026.817.0 release body, and in doc/CHANNELS.md pinned at the tag.

Operator consequence: If you pull :latest and expected master, switch to :canary or :nightly now -- your image is about to stop moving daily and start jumping in 300-commit steps. If you wanted a stable image and had been stuck on :latest, you finally have one, and :sha-<short-sha> is the pin to use in production.

## Receipt
- https://github.com/paperclipai/paperclip/pull/11006
