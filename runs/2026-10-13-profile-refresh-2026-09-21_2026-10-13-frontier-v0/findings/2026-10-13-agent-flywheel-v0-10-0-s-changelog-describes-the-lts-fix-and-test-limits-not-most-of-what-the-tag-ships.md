---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-v0-10-0-s-changelog-describes-the-lts-fix-and-test-limits-not-most-of-what-the-tag-ships
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/CHANGELOG.md#L13-L49
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/compare/v0.9.0...v0.10.0
    precision: git_compare
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/apps/web/app/page.tsx#L1063
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/LICENSE
    precision: tagged_commit_file
---
# 2026-10-13-agent-flywheel-v0-10-0-s-changelog-describes-the-lts-fix-and-test-limits-not-most-of-what-the-tag-ships

v0.10.0's changelog describes the LTS fix and test limits, not most of what the tag ships; cost, license and lineup unchanged. The profile credited v0.9.0 with legible receipts. v0.10.0 keeps a dated heading, but its entry is a qualification memo. A reader of the changelog would not learn that `cod` changed model, that `acfs swarm launch` and plugin installs arrived, or that a token-logging bug and a nightly settings rewrite were fixed. The README at the tag still offers v0.9.0 as its pinned example and says "Tagged releases are tested and stable," while the release body declines to claim a full install. Budget, license and the default agent lineup did not move.

Channel: tagged-release. Half: defect. Date: 2026-10-03.

Operator consequence: Before upgrading, read the compare (173 commits), not the changelog. Cost: nothing to report; the $440-$656/month figure is still the project's own example stack, not market pricing. The license rider and the three-agent default stand unchanged.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/CHANGELOG.md#L13-L49
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/compare/v0.9.0...v0.10.0
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/apps/web/app/page.tsx#L1063
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/LICENSE
