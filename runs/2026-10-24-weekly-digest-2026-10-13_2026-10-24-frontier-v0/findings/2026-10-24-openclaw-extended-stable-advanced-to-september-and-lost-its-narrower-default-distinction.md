---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-extended-stable-advanced-to-september-and-lost-its-narrower-default-distinction
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.9.33
    precision: github_release
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.33/docs/gateway/config-tools/sessions-and-subagents.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.33/src/gateway/operator-role-policy.ts#L276-L284
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.33/src/gateway/operator-session-run.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.33/src/agents/bash-tools.exec-runtime.ts#L813-L921
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.33/src/logging/redact.ts#L675-L687
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-extended-stable-advanced-to-september-and-lost-its-narrower-default-distinction

Extended-stable advanced to September and lost its narrower-default distinction. Extended-stable is no longer the August 8.35 posture. September's default cross-agent access and all-session visibility come with it. The three previously unresolved mechanisms are present: required sandbox provenance is carried into new HTTP sessions, registered background exec is cancelled on original-operator revocation, and chunk-unsafe redaction patterns use the whole-string path. Final-argument hook approval is also backported, as section 2 establishes. The published release includes repairs for upgrades from the previous extended line, service ownership, pnpm 12, and recovery.

Channel: tagged-release. Half: both. Date: 2026-10-15.

Operator consequence: Choose 9.33 for its maintained release lineage, not to obtain narrower collaboration defaults automatically. Configure `tools.agentToAgent.enabled: false` and narrower session visibility when that is the intended policy, and check bot admission. Use a patched Node runtime even though the manifest accepts an older one. Coverage of these named repairs is settled; this is not a claim that 9.33 contains every later October repair or feature.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.33
- https://github.com/openclaw/openclaw/blob/v2026.9.33/docs/gateway/config-tools/sessions-and-subagents.md
- https://github.com/openclaw/openclaw/blob/v2026.9.33/src/gateway/operator-role-policy.ts#L276-L284
- https://github.com/openclaw/openclaw/blob/v2026.9.33/src/gateway/operator-session-run.ts
- https://github.com/openclaw/openclaw/blob/v2026.9.33/src/agents/bash-tools.exec-runtime.ts#L813-L921
- https://github.com/openclaw/openclaw/blob/v2026.9.33/src/logging/redact.ts#L675-L687
