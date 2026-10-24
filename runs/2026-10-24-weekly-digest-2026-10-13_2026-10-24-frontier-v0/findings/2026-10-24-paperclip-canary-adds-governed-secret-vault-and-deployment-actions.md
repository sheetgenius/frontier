---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-canary-adds-governed-secret-vault-and-deployment-actions
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/1PASSWORD.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/SUPABASE.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/vercel.md
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-canary-adds-governed-secret-vault-and-deployment-actions

Canary adds governed secret-vault and deployment actions. A 1Password service-account connector exposes eight bounded vault/item actions without distributing its durable token to agents. Setup initially allows discovered actions for the selected agents, and authorized item/secret reads intentionally return secret values to those agents and ordinary tool history. Supabase adds project-pinned management actions for Edge Functions, Auth and Data API configuration, distinct from its MCP connection. Vercel adds team-scoped deployment/configuration actions through a vaulted token. It rejects preview creation on an empty project because the provider can make the first deployment production; a mismatched response becomes a reconciliation receipt. Mutations are not blindly retried after ambiguity.

Channel: preview-or-beta. Half: both. Date: 2026-10-24.

Operator consequence: Trial `2026.1024.0-canary.7` on disposable resources with narrow provider scope and explicit action policies. Review 1Password secret-read/write authority before dispatch, and require explicit production intent when initializing a Vercel project. These connectors let an agent operate more of the real system through attributable actions, replacing credential-copying scripts. Human attention moves to permission choice, remote outcomes and cleanup. Upstream documents account-bound trials, but this researcher did not create resources or independently repeat them.

## Receipt
- https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/1PASSWORD.md
- https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/SUPABASE.md
- https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/vercel.md
