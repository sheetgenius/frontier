---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-chat-names-refresh-by-default-and-unconfigured-local-speech-uses-paradee
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/ef42aec9439d0130fa13e5bb3f4d102e2f510161
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/3e871721786a13ce3699c1fd93ded29d7369f427
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/ce48667e98ec8e269a241792ae77f8a5834e41bf
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_kokoro_tts/default_config.yaml
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_kokoro_tts/hooks.py
    precision: tagged_commit_file
---
# 2026-10-13-agent-zero-chat-names-refresh-by-default-and-unconfigured-local-speech-uses-paradee

Chat names refresh by default and unconfigured local speech uses Paradee. Unconfigured chat naming changes from once to always in v2.13; explicitly saved choices remain. v2.14 preserves names deliberately entered by users under always mode. Local TTS now defaults unconfigured voice settings to Paradee Heart while retaining saved Kokoro settings. Assets load lazily, and install/update, enabled startup and re-enable hooks prepare missing speech dependencies; the framework requirements file is not the whole speech dependency surface.

Channel: tagged-release. Half: both. Date: 2026-09-23 (naming default); 2026-10-13 (manual-name fix and TTS stable).

Operator consequence: Check effective naming and voice settings after upgrading if stable titles or a particular local voice matter. Allow for first-use assets and missing-dependency setup when testing local speech. Do not infer a saved preference changed merely because the new default differs.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/ef42aec9439d0130fa13e5bb3f4d102e2f510161
- https://github.com/agent0ai/agent-zero/commit/3e871721786a13ce3699c1fd93ded29d7369f427
- https://github.com/agent0ai/agent-zero/commit/ce48667e98ec8e269a241792ae77f8a5834e41bf
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_kokoro_tts/default_config.yaml
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_kokoro_tts/hooks.py
