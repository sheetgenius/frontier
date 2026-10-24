---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-stable-replaces-per-person-automatic-review-switches-with-event-and-author-filters
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/GITHUB-REVIEW-BOT.md#L125-L148
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/ed2c22ea8c743b50acd5ae130f4258eaec4569d9
    precision: commit
---
# 2026-10-24-paperclip-stable-replaces-per-person-automatic-review-switches-with-event-and-author-filters

Stable replaces per-person automatic review switches with event and author filters. The stable promotion ignores saved people[].automaticReviews values and uses automatic-event and author include/exclude controls instead. Authorized mentions bypass automatic scheduling filters while ordinary repository and requester access checks still apply. The shared external-contributor switch governs sponsored guest automatic work. This implementation predates the window; stable delivery is the new event.

Channel: tagged-release. Half: both. Date: 2026-10-24.

Operator consequence: Before restarting v2026.1023.0, review author filters, automatic events and guest sponsorship. Do not assume old per-person switches still prevent a billable automatic review. The simplified setup removes repeated controls but changes which setting owns scheduling authority; hiding the management UI still does not stop existing bots.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/GITHUB-REVIEW-BOT.md#L125-L148
- https://github.com/paperclipai/paperclip/commit/ed2c22ea8c743b50acd5ae130f4258eaec4569d9
