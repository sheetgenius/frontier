---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-default-verbosity-flipped-to-medium-in-1-3-0-and-overrode-users-who-had-picked-high-while
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.0/CHANGELOG.md?plain=1#L9
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.10/CHANGELOG.md?plain=1#L9
    precision: tagged_commit_file
  - url: https://web.archive.org/web/20261010160504/https://antigravity.google/docs/settings/
    precision: official_docs
---
# 2026-10-13-antigravity-default-verbosity-flipped-to-medium-in-1-3-0-and-overrode-users-who-had-picked-high-while

Default verbosity flipped to medium in 1.3.0 and overrode users who had picked high while it was the default. The conversation view now groups related tool calls and thoughts into summaries such as `Explored N files`, keeping commands and responses visible. The note says the flip "applies to everyone who never picked a verbosity, including anyone who selected `high` while it was still the default." That follows from the documented sparse persistence: a choice equal to the default at the time is never written to `settings.json`, so it moves with the next default.

Channel: tagged-release. Half: both. Date: 2026-10-06 (flip); 2026-09-24 (`medium` added in 1.2.10).

Operator consequence: If you review the agent by watching its stream, set `Verbosity` back to `high`; on 1.3.0 the default view folds individual tool calls into summaries. The wider lesson covers every setting: choosing a value that equals today's default does not record it, so `toolPermission: request-review` and `artifactReviewPolicy: asks-for-review` follow Google's next default, not your selection. The docs do not say whether a hand-written default-valued key survives the next save from `/config`, so check the file after any change made through the UI.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.0/CHANGELOG.md?plain=1#L9
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.10/CHANGELOG.md?plain=1#L9
- https://web.archive.org/web/20261010160504/https://antigravity.google/docs/settings/
