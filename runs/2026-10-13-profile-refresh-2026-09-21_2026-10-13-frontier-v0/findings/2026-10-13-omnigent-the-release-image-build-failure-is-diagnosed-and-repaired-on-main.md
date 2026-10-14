---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-the-release-image-build-failure-is-diagnosed-and-repaired-on-main
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/commit/6f3c365299ad82f73da64001b0bf9e0d3f12c1ca
    precision: commit
  - url: https://github.com/omnigent-ai/omnigent/blob/6f3c365299ad82f73da64001b0bf9e0d3f12c1ca/deploy/docker/Dockerfile#L70-L85
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-the-release-image-build-failure-is-diagnosed-and-repaired-on-main

The release-image build failure is diagnosed and repaired on main. The main-only repair pins the architecture-independent web-builder stage to the build platform. The maintainer explanation identifies an arm64-emulated web build stalling at chunk rendering until the two-hour image-job timeout, including the v0.18.0 release job. The source diff removes that emulated stage from future image builds and changes both Dockerfiles. This supplies a concrete explanation for the distribution lag; it is not evidence of when a mutable release tag was republished.

Channel: main-unreleased. Half: both. Date: 2026-10-13T18:23:48Z merged.

Operator consequence: Separate build repair from registry promotion. Verify the running image digest and its fixed source rather than inferring deployment from a merged Dockerfile change. Keep the October 14 registry observation dated and do not substitute image creation time for tag publication time.

## Receipt
- https://github.com/omnigent-ai/omnigent/commit/6f3c365299ad82f73da64001b0bf9e0d3f12c1ca
- https://github.com/omnigent-ai/omnigent/blob/6f3c365299ad82f73da64001b0bf9e0d3f12c1ca/deploy/docker/Dockerfile#L70-L85
