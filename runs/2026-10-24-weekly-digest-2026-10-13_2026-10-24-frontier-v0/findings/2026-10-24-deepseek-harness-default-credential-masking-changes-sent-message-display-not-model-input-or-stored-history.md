---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-default-credential-masking-changes-sent-message-display-not-model-input-or-stored-history
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/ui-secret-mask/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/ui-secret-mask/src/client/credential-scanner.ts
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/web-app/cordis.patch.yml
    precision: tagged_commit_file
---
# 2026-10-24-deepseek-harness-default-credential-masking-changes-sent-message-display-not-model-input-or-stored-history

Default credential masking changes sent-message display, not model input or stored history. The Web bundle masks recognized credential formats in sent user-text surfaces and offers per-value reveal controls. Coverage depends on known formats; arbitrary password assignments, personal data, unsent composer text and several other surfaces remain plain. The original message and model input retain the characters. This is display protection, not redaction of the session or a prevention of outbound disclosure.

Channel: preview-or-beta. Half: both. Date: 2026-10-14.

Operator consequence: Use it to reduce accidental screen exposure, but keep secrets out of prompts and review uploads independently. A masked screenshot is not evidence that a key was removed from model requests or session logs. The feature saves visual cleanup while making the distinction between visible masking and actual data removal more important.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/ui-secret-mask/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/ui-secret-mask/src/client/credential-scanner.ts
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/web-app/cordis.patch.yml
