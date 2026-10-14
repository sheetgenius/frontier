---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-releases-became-receipts-calver-tags-end-at-v2026-9-24-both-new-stables-were-cut-with-the
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6
    precision: github_release
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7
    precision: github_release
  - url: https://api.github.com/repos/NousResearch/hermes-agent/git/tags/99f94588c7dd458fbcc1cbc6db5beb2c2b871bf6
    precision: official_docs
  - url: https://api.github.com/repos/NousResearch/hermes-agent/git/tags/ec0f68f50d19dd439ff0ed54b4acc764dadb4e50
    precision: official_docs
  - url: https://hermes-assets.nousresearch.com/releases/tag/rc.15-v0.21.7/release-candidates.json
    precision: github_release
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/developer-guide/stable-releases.md#L102-L133
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/actions/runs/38199200509/attempts/4
    precision: official_docs
  - url: https://github.com/NousResearch/hermes-agent/commit/818c13be1dc4fd28987e1e881a9408224afd4535
    precision: commit
  - url: https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/v0.21.6
    precision: official_docs
  - url: https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/rc.4-v0.21.6
    precision: official_docs
  - url: https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/rc.15-v0.21.7
    precision: official_docs
---
# 2026-10-13-hermes-agent-releases-became-receipts-calver-tags-end-at-v2026-9-24-both-new-stables-were-cut-with-the

Releases became receipts: CalVer tags end at v2026.9.24, both new stables were cut with the skip-tests flag, and Docker has no `:v0.21.7` tag. v0.21.6 began the SemVer receipt pipeline after the last CalVer tag, v2026.9.24 (named v0.21.5). Attempt refs rc.N-vX.Y.Z are locks, not public prereleases; final tags bind the source commit, attempt and Docker digest. The v0.21.6 receipt has candidateManifestSha256: null because native bundles were skipped. v0.21.7 binds a non-null candidate-manifest hash. Both successful attempts set skipTests: true. Source CI, install/update E2E, and native acceptance/smoke jobs were skipped. Docker build-and-test jobs concluded successfully; the skip-tests policy bypasses their test work. Job logs were not inspected, so this is not an independent census of every executed command. Docker's v0.21.6 tag names an earlier attempt, not the final receipt digest; no version-named v0.21.7 Docker tag was found. The final rc.15 manifest hashes to 7ea37048fa5dc2d5b83c37242a97ccbff6e1c4d5dd939f893def615f3c03dbac. There were 52 attempts, 52 abandoned markers and 19 canary tags by October 13 23:59:59 UTC, including the late v0.22.0 locks in section 31.

Channel: tagged-release (v0.21.6, v0.21.7); preview-or-beta (daily canary tags). Half: both. Date: 2026-10-08.

Operator consequence: For the dated v0.21.7 image, pin nousresearch/hermes-agent@sha256:444b42594e7f467425872fc35e077a227d377f0fe0726bc818706d62175fad8b. Do not treat a stable label or successful Docker job as proof that the full release acceptance graph passed. Smoke-test the pinned image and bundle transitions before moving a fleet. The gain is a checkable link between release source and distributed artifact; skipped gates remain an operator cost.

## Receipt
- https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6
- https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7
- https://api.github.com/repos/NousResearch/hermes-agent/git/tags/99f94588c7dd458fbcc1cbc6db5beb2c2b871bf6
- https://api.github.com/repos/NousResearch/hermes-agent/git/tags/ec0f68f50d19dd439ff0ed54b4acc764dadb4e50
- https://hermes-assets.nousresearch.com/releases/tag/rc.15-v0.21.7/release-candidates.json
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/developer-guide/stable-releases.md#L102-L133
- https://github.com/NousResearch/hermes-agent/actions/runs/38199200509/attempts/4
- https://github.com/NousResearch/hermes-agent/commit/818c13be1dc4fd28987e1e881a9408224afd4535
- https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/v0.21.6
- https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/rc.4-v0.21.6
- https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/rc.15-v0.21.7
