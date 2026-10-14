---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-language-servers-ran-a-cloned-repository-s-own-code-on-file-writes-with-no-approval-until
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/f5c754d4365e17ff7c6e7c1c51808ec36f4d7cc9
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/59ec2811409479ade61ce451d77521b63a262529
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/lsp/servers.py#L372-L389
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/lsp/workspace.py#L157-L193
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2387-L2413
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-language-servers-ran-a-cloned-repository-s-own-code-on-file-writes-with-no-approval-until

Language servers ran a cloned repository's own code on file writes, with no approval, until v0.21.6. Language servers are on by default and, in the fix commit's words, "start with no approval on every write_file/patch inside any git worktree". Before v0.21.6 Hermes pointed pyright at the checkout's own .venv interpreter (which pyright executes), let the TypeScript and Vue servers load the checkout's node_modules TypeScript, left rust-analyzer running cargo check (build.rs, proc-macros) and other servers evaluating project build files, and its npx tsc and rustfmt lint fallbacks resolved repository-controlled binaries. None of that passed through command approval. v0.21.6 trusts a workspace only when it is the worktree Hermes was launched in, the session's workspace, or a path under `lsp.trusted_workspaces`; elsewhere only eight servers start, pinned to Hermes-side tools, the toolchain fallbacks are skipped. Kanban gets no automatic operator workspace roots. Cron omits the job's session workspace from those roots but still considers the process launch directory. A nested clone is not automatically trusted merely because it sits inside an operator worktree; an explicit `lsp.trusted_workspaces` directory grants trust to paths beneath it, including nested clones.

Channel: tagged-release. Half: defect. Date: 2026-10-08.

Operator consequence: On v2026.9.24 and earlier, "clone this repository and fix it" could run the repository's code on the agent's first edit, outside every approval pattern. Upgrade to v0.21.6+. The launch directory is still trusted, so never launch Hermes inside a checkout you do not trust; keep `lsp.trusted_workspaces` narrow, since that explicit setting also trusts nested clones, or set `lsp.enabled: false` for work on untrusted code. Read with section 1, the lesson is that tooling which only reads or lints a repository often executes it.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/f5c754d4365e17ff7c6e7c1c51808ec36f4d7cc9
- https://github.com/NousResearch/hermes-agent/commit/59ec2811409479ade61ce451d77521b63a262529
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/lsp/servers.py#L372-L389
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/lsp/workspace.py#L157-L193
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2387-L2413
