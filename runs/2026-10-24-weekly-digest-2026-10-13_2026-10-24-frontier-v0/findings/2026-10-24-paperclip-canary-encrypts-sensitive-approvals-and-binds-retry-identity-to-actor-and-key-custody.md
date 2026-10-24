---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-canary-encrypts-sensitive-approvals-and-binds-retry-identity-to-actor-and-key-custody
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/vercel.md#L198-L212
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/SUPABASE.md#L239-L254
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/9c442cf48e633002fb9600ff0c137550889fdb08
    precision: commit
---
# 2026-10-24-paperclip-canary-encrypts-sensitive-approvals-and-binds-retry-identity-to-actor-and-key-custody

Canary encrypts sensitive approvals and binds retry identity to actor and key custody. New sensitive tool-approval payloads encrypt arguments such as secretValue using the instance tool-action signing secret. Existing signed approvals are not rewritten. Sensitive request identities use the same key rather than guessable secret hashes. Default retry keys are versioned and actor-scoped; unverifiable old requests require reconciliation instead of replay. The configured signing secret takes precedence over a derived key from the persisted secrets master key. The October 23 implementation is absent from stable and beta but present in the October 24 canary and matching nightly source.

Channel: preview-or-beta. Half: both. Date: 2026-10-24.

Operator consequence: For 2026.1024.0-canary.7, back up and share the configured signing key or master-key fallback with the database and all serving processes. Plan for rotation invalidating retry matching, and inspect an old request's prior effect before intentionally issuing a new explicit key. This improves custody for new records without retroactively rewriting history; no historical secret compromise is alleged.

## Receipt
- https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/vercel.md#L198-L212
- https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/SUPABASE.md#L239-L254
- https://github.com/paperclipai/paperclip/commit/9c442cf48e633002fb9600ff0c137550889fdb08
