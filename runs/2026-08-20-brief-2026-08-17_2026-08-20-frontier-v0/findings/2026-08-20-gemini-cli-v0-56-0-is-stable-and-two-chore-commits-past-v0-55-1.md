---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-gemini-cli-v0-56-0-is-stable-and-two-chore-commits-past-v0-55-1
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0
    precision: github_release
---
# 2026-08-20-gemini-cli-v0-56-0-is-stable-and-two-chore-commits-past-v0-55-1

v0.56.0 published 2026-08-19T19:29:38Z, prerelease=false. Release body is only a compare URL. compare v0.55.1...v0.56.0 is two chore(release) commits, diverged, merge_base 659c7aac. fa2f27aee (retry/TTL) is not an ancestor (compare diverged, behind_by=7). v0.56.0 is also behind v0.55.1 by the Cloud Workstations OAuth redirect 58ba19945 (#28688). v0.57.0-preview.0 (same day, prerelease=true) is 24 commits ahead of that merge-base and contains both. npm latest=0.56.0.

Channel: tagged-release for 0.56.0; preview-or-beta for 0.57.0-preview.0. Half: neither on the stable tag; both on preview.

Operator consequence: default install is 0.56.0. Do not read it as a capability drop. Hold v0.55.1 if you needed Cloud Workstations OAuth. Canary preview if you needed retry/TTL.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0
