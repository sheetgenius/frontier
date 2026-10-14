---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-image-generation-became-a-built-in-image-generator-subagent-in-1-2
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.16/CHANGELOG.md?plain=1#L14
    precision: tagged_commit_file
---
# 2026-10-13-antigravity-image-generation-became-a-built-in-image-generator-subagent-in-1-2

Image generation became a built-in image-generator subagent in 1.2.16. Image requests now go to a built-in `image-generator` subagent. It writes the prompt, checks results with up to three attempts, saves images as conversation artifacts and appears as a subagent run in the conversation. The note documents packaging a generate-and-check loop, not a new image model or measured quality gain.

Channel: tagged-release. Half: capability. Date: 2026-10-03.

Operator consequence: A session can delegate image prompting and result checking to the built-in loop in the same conversation. Compare it with a separate prompting and retry wrapper before maintaining that wrapper; the note does not establish that an earlier manual loop was required or that total work became faster. Inspect the resulting artifact and the subagent run; the built-in checks do not establish visual acceptance. This is a concrete capability addition even though no measured time saving is reported.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.16/CHANGELOG.md?plain=1#L14
