---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-resume-restores-tool-selections-and-1-4-also-admits-newly-installed-extension-tools
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/6f2f164ab7e7f1516c4530da396b151ab2f84779
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/bd3c9b823762b7383954aa49e13ee350471015fe
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/agent-session.ts#L1830-L1861
    precision: tagged_commit_file
---
# 2026-10-24-pi-coding-agent-resume-restores-tool-selections-and-1-4-also-admits-newly-installed-extension-tools

Resume restores tool selections, and 1.4 also admits newly installed extension tools. Resume reconstructs the active tool set recorded by system-message history, with additive/subtractive CLI tool choices applied on top. Explicit CLI selection still wins. Version 1.4 distinguishes a tool the session deliberately removed from a newly installed extension tool that never appeared in its history: the latter becomes active unless its definition has `defaultActive: false`. A resumed conversation therefore need not have exactly the capabilities it had before new extensions were installed.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Delete wrappers that merely reconstruct lost active-tool state, but keep explicit policy and exclusions where a fixed tool surface matters. Review new extensions before resuming an old session. This improves continuity while making the extension inventory, not the transcript alone, part of the authority audit.

## Receipt
- https://github.com/earendil-works/pi/commit/6f2f164ab7e7f1516c4530da396b151ab2f84779
- https://github.com/earendil-works/pi/commit/bd3c9b823762b7383954aa49e13ee350471015fe
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/agent-session.ts#L1830-L1861
