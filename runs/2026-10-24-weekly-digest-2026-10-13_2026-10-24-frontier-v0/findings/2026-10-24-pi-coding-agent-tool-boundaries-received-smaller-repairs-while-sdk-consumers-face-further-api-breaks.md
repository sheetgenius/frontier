---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-tool-boundaries-received-smaller-repairs-while-sdk-consumers-face-further-api-breaks
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/87f9a36419e8164bba77397d15c54ff39fac5e8a
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/8c4e873899b97f6abd14bc45928ccb465f83010c
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/CHANGELOG.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.3.0/packages/ai/CHANGELOG.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/ai/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-10-24-pi-coding-agent-tool-boundaries-received-smaller-repairs-while-sdk-consumers-face-further-api-breaks

Tool boundaries received smaller repairs while SDK consumers face further API breaks. Malformed final tool JSON now fails validation with the raw arguments instead of executing a partially parsed object. Grep ignores ambient ripgrep configuration, MCP JSON accepts a leading BOM, and concurrent extension dialogs retain their own completion/stack behavior. Classifier calls can accept image input. The 1.3 SDK removes `AssistantMessageFrame`, `AssistantMessageFrameEncoder` and `reduceAssistantMessageFrames()`, remnants of the removed experimental harness; the surviving stream interface is still `AssistantMessageEventStream`. Version 1.4 replaces request `telemetryContext` with `telemetry` taking a span, removes `getPiUserAgent()` in favor of `formatUserAgent()`, and changes `resolveTranscriptTools()` from a boolean argument to a `TranscriptToolSupport` value, with `foldedSystemMessages` replacing `anchorsAdditions`. These are documented [1.4 SDK breaks](https://github.com/earendil-works/pi/blob/v1.4.0/packages/ai/CHANGELOG.md), not compatibility aliases. Prompt-template empty quoted arguments and credential-aware ambiguous model selection are also repaired in 1.3.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Upgrade integrations that depend on reliable argument validation and dialog completion, and adapt telemetry, identity and transcript-tool integrations as well as retired frame imports. Do not interpret stricter validation as an authority boundary: a valid malicious request still needs policy. Image classification expands what a scripted workflow can do, and makes credential review more consequential because those model operations still bypass individual CLI tool hooks.

## Receipt
- https://github.com/earendil-works/pi/commit/87f9a36419e8164bba77397d15c54ff39fac5e8a
- https://github.com/earendil-works/pi/commit/8c4e873899b97f6abd14bc45928ccb465f83010c
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/CHANGELOG.md
- https://github.com/earendil-works/pi/blob/v1.3.0/packages/ai/CHANGELOG.md
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/ai/CHANGELOG.md
