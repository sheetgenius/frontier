---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-shared-session-editors-lost-the-raw-shell-and-agent-reconfiguration-but-still-approve-and
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/routes/sessions/routes_elicitations.py#L54-L60
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/routes/sessions/routes_resources.py#L2876-L2915
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/pull/9541
    precision: merged_pr
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/sharing_settings.py#L68-L92
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/stores/permission_store/sqlalchemy_store.py#L508-L526
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/codex_approval_modes.py#L46-L77
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.16.0
    precision: github_release
  - url: https://github.com/omnigent-ai/omnigent-site/blob/20bcbd3abd9876a3d23686a036959a9679accad6/app/docs/collaborate/page.mdx#L82-L130
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-shared-session-editors-lost-the-raw-shell-and-agent-reconfiguration-but-still-approve-and

Shared-session editors lost the raw shell and agent reconfiguration but still approve, and v0.18.0 can extend Edit to every signed-in user with the link. Three routes that let a shared-session editor act outside the agent closed. From v0.15.0 the environment shell proxy requires the owner (before, any editor could run commands on the owner's machine with no policy or approval in the way), bundle replacement requires the agent owner, with documented admin exceptions, and multi-user servers reject stdio MCP servers and MCP URLs that resolve to private or cloud-metadata addresses. From v0.16.0 session owners manage MCP servers, with documented admin exceptions, a breaking change for collaborators. Approval did not move: answering pending prompts, which the docs define as policy approval gates, harness permission prompts, questions and plan review, still needs only Edit, and v0.15.0 made that a named constant whose comment says raising it to owner needs a "waiting for the owner" UI first. Editors can still write files inside the workspace, move a Claude session between default, acceptEdits, plan and auto (not bypass), and switch a Codex session to Full Access, whose confirmation Omnigent answers. v0.18.0 adds an admin opt-in that lets a session's General access be Edit for every signed-in user who has the link (`public_sharing_max_level`, default read; lowering it re-caps stored grants at once); the v0.18.0 release notes do not mention it, only the CHANGELOG recorded on main afterwards (353a387b L196). v0.16.0 added an admin default that starts new sessions public-read (off, sandbox or all; default off). The website now says it plainly: "Only share Edit with people you trust to run arbitrary code on your machine."

Channel: tagged-release. Half: both. Date: 2026-09-22 (v0.15.0), 2026-09-29 (v0.16.0), 2026-10-13 (v0.18.0).

Operator consequence: On v0.15.0 or later an Edit share is no longer a direct host shell, but it is still code execution through the agent plus the power to approve that agent's gated actions. Keep `public_sharing_max_level` at read: raised, any session whose owner sets General access to Edit lets every signed-in user with the link answer that session's approvals and put a Codex session into Full Access on the owner's machine. Host shared sessions on cloud sandbox hosts, not workstations. The attention trade: approvals can now come from many more people, which spreads the load and blurs who answered for a yes.

## Receipt
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/routes/sessions/routes_elicitations.py#L54-L60
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/routes/sessions/routes_resources.py#L2876-L2915
- https://github.com/omnigent-ai/omnigent/pull/9541
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/sharing_settings.py#L68-L92
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/stores/permission_store/sqlalchemy_store.py#L508-L526
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/codex_approval_modes.py#L46-L77
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.16.0
- https://github.com/omnigent-ai/omnigent-site/blob/20bcbd3abd9876a3d23686a036959a9679accad6/app/docs/collaborate/page.mdx#L82-L130
