---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-gives-all-human-roles-commentary-read-access-by-default
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/e5927e1db9095828d14578997cd9f6847f9137fc
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/agent-commentary.md#L70-L87
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-beta-gives-all-human-roles-commentary-read-access-by-default

Beta gives all human roles commentary read access by default. The 2026-10-19 change adds commentary:view to every human role preset, including Viewer, and grants it to existing active human members without overwriting stored commentary scopes. Legacy invitations also acquire a missing default grant on approval. Commentary has an Audit surface and shareable message URLs, while source-task privacy still filters previews, counts and details. It does not confer agent-action audit or CSV-export authority.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Before trialing 2026.1023.0-beta.0, review who should read agent complaints and suggestions, including existing Viewers and pending invitations. This makes feedback easier to inspect without granting detailed audit access, but expands the default audience for that feedback. Verify persisted grants and privacy filtering on your own memberships.

## Receipt
- https://github.com/paperclipai/paperclip/commit/e5927e1db9095828d14578997cd9f6847f9137fc
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/agent-commentary.md#L70-L87
