---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openhands-github-said-v1-13-0-was-latest-for-four-days-while-npm-still-served-1
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/actions/runs/31659305449
    precision: official_docs
---
# 2026-08-17-openhands-github-said-v1-13-0-was-latest-for-four-days-while-npm-still-served-1

GitHub said v1.13.0 was Latest for four days while npm still served 1.12.0.

The v1.13.0 tag push cut the GitHub release immediately on 2026-08-13, but its npm publish job failed at the 'Run tests' step and skipped every build and publish step after it. A second attempt was started manually on 2026-08-17 at 16:48 UTC and succeeded at 16:53. For four days and fifteen hours the GitHub releases page presented v1.13.0 as the Latest release of the project while `npm install -g @openhands/agent-canvas`  --  the install command the project's own homepage prints  --  resolved to 1.12.0. This is the second npm publish failure on this line: the v1.7.0 run (30497136947, 2026-07-29) also failed, and npm has no 1.7.0 at all; the registry jumps 1.6.1 to 1.7.1.

Channel: tagged-release. Ancestry: Workflow run 31659305449 on ref v1.13.0: created_at 2026-08-13T01:57:01Z, run_attempt 2, run_started_at 2026-08-17T16:48:11Z, conclusion success. Attempt 1 (gh api .../attempts/1) returns conclusion failure, updated_at 2026-08-13T02:05:29Z, with step 'Run tests' = failure and every publish step skipped. Registry cross-check: registry.npmjs.org/@openhands/agent-canvas time["1.12.0"]=2026-08-07T19:41:56.110Z, time["1.13.0"]=2026-08-17T16:53:44.291Z. Tag v1.13.0 is a non-prerelease GitHub release published 2026-08-13T01:57:00Z.

Operator consequence: Re-audit: stop treating a GitHub release as evidence that an artifact shipped. The release is created by the tag push; the artifact is created by a job that can fail after it. If you are pinning OpenHands Agent Canvas, read the version from the registry or the image digest, not from the releases page. The gap is not theoretical  --  it has now happened twice on this line in three weeks, once leaving a released version permanently absent from npm.

## Receipt
- https://github.com/OpenHands/OpenHands/actions/runs/31659305449
