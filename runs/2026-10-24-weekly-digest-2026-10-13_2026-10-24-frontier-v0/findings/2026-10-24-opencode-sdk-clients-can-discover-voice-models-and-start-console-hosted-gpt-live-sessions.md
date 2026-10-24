---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-sdk-clients-can-discover-voice-models-and-start-console-hosted-gpt-live-sessions
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/commit/79fd806343db0de150f23b09e4b9199434d6779c
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/f7577a1f65b465b35b0dcb30b23f22c14e3b5460
    precision: commit
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#sdk
    precision: tagged_commit_file
---
# 2026-10-24-opencode-sdk-clients-can-discover-voice-models-and-start-console-hosted-gpt-live-sessions

SDK clients can discover voice models and start Console-hosted GPT-Live sessions. [Experimental voice-model discovery](https://github.com/anomalyco/opencode/commit/79fd806343db0de150f23b09e4b9199434d6779c) and [connected-Console hosted GPT-Live sessions](https://github.com/anomalyco/opencode/commit/f7577a1f65b465b35b0dcb30b23f22c14e3b5460) both first reach v2.1.3, absent from v2.1.2. The [tagged SDK release notes](https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#sdk) specify voice.models, voice.session and instruction updates.

Channel: tagged-release. Half: capability. Date: 2026-10-22.

Operator consequence: A bounded voice integration can use the supported discovery/session API rather than bespoke provider setup. Preserve experimental status and connected-workspace requirements. Hosted voice inference does not prove hosted coding-agent execution or a separately released iOS client.

## Receipt
- https://github.com/anomalyco/opencode/commit/79fd806343db0de150f23b09e4b9199434d6779c
- https://github.com/anomalyco/opencode/commit/f7577a1f65b465b35b0dcb30b23f22c14e3b5460
- https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#sdk
