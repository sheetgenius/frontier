---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-a2a-and-conversation-adapters-gain-narrower-cancellation-and-more-complete-protocol-record
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/fa2531d457208ef92029a11dd454bf56a3cd21ee
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/commit/06d329873703ddabe8a842d962342ac4ad779e83
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/commit/04366efb052573a8b4cf074e5973b027ae071eda
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/commit/dbc73408840332c7faa0f40a4286641d7cdfc7a8
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/commit/c690b9df153f74202c0c5b13cc197790f3c7f92f
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/a2a-server/src/agent/executor.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/a2a-server/src/agent/executor.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/a2a-server/src/config/config.ts#L444-L487
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-a2a-and-conversation-adapters-gain-narrower-cancellation-and-more-complete-protocol-record

A2A and conversation adapters gain narrower cancellation and more complete protocol records. Stable A2A denial now targets the current tool instead of cancelling all queued calls. The executor now sets client/persisted isTrusted to undefined, allowing server-side trust evaluation; it previously forced that field false. The resolver also honors the IDE's GEMINI_FOLDER_TRUST environment signal after GEMINI_CLI_TRUST_WORKSPACE. The regular preview emits tool-group identity from the scheduler instead of reconstructing it through UI lookahead. Nightly mounts JSON parsing before A2A routes, preserves cached/thought/tool-use token metadata through A2A, core conversion and hooks, and resets per-turn usage appropriately. It also supplies the synthetic thought-signature marker to the first function call in every model turn that lacks one, including historical turns beyond the active loop.

Channel: preview-or-beta. Half: both. Date: 2026-10-22.

Operator consequence: Test adapters at the channel they deploy: denial of one call is different from cancelling the whole task, and usage totals depend on turn boundaries. Nightly can remove request-body and history-validation repair code and retain more accounting detail. Synthetic signatures remain compatibility bookkeeping, not evidence of model reasoning or successful execution; no backend acceptance or billing equivalence was measured.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/fa2531d457208ef92029a11dd454bf56a3cd21ee
- https://github.com/google-gemini/gemini-cli/commit/06d329873703ddabe8a842d962342ac4ad779e83
- https://github.com/google-gemini/gemini-cli/commit/04366efb052573a8b4cf074e5973b027ae071eda
- https://github.com/google-gemini/gemini-cli/commit/dbc73408840332c7faa0f40a4286641d7cdfc7a8
- https://github.com/google-gemini/gemini-cli/commit/c690b9df153f74202c0c5b13cc197790f3c7f92f
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/a2a-server/src/agent/executor.ts
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/a2a-server/src/agent/executor.ts
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/a2a-server/src/config/config.ts#L444-L487
