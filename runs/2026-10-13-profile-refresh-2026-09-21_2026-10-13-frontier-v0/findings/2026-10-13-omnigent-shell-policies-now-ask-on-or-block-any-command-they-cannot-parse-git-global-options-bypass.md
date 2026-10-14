---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-shell-policies-now-ask-on-or-block-any-command-they-cannot-parse-git-global-options-bypass
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.17.0/omnigent/policies/builtins/github.py#L729-L742
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/github.py#L556-L613
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/github.py#L943-L986
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/working_dir.py#L363-L369
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/docs/POLICIES.md#L347-L367
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/tests/policies/builtins/test_github.py#L557-L573
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/_shell.py#L29-L39
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-shell-policies-now-ask-on-or-block-any-command-they-cannot-parse-git-global-options-bypass

Shell policies now ask on, or block, any command they cannot parse; git global options bypassed the GitHub policy until v0.18.0. The parser that `github_policy` and `block_working_dir_changes` use to read shell strings has needed fail-open fixes in June (advisory GHSA-7mqg), in September (#7999 and #7872) and now in October (git global options). v0.18.0 stops trying to model everything. Comments, heredocs and here-strings, line continuations, `$(...)` and backtick substitutions, and `$'...'` or `$"..."` quoting are declared unclassifiable. Under `github_policy` such a command adds an ASK even when it has nothing to do with git; under `block_working_dir_changes` it gets the configured action, deny by default, which the docs say "also applies when the visible command does not change directories"; a DENY from a classified region retains precedence. Both policies inspect every harness's shell tool by default (Bash for Claude Code and Codex, bash, Shell, terminal, developer__shell, shell and sys_os_shell), although POLICIES.md still documents the default as `sys_os_shell` alone. The bypass itself granted no new GitHub rights; it let an agent use the credentials it already held past the repo, branch, force-push and tag-push rules.

Channel: tagged-release. Half: both. Date: 2026-10-13 (v0.18.0); earlier hardening 2026-09-22 (v0.15.0) and 2026-09-29 (v0.16.0).

Operator consequence: If you attach `github_policy`, expect approval prompts on ordinary commands that use a heredoc or `$(...)`, a common way agents write multi-line commit messages; if you attach `block_working_dir_changes` with its default deny, those commands now fail outright, and unattended runs will stall or error. Set `action: ask` or narrow `shell_tools`, then measure the ASK volume after upgrading, because this release moves cost from the parser to whoever answers approvals. Treat shell-string policies as a filter, not a boundary: the advisory's own workaround is least-privilege credentials, and independent filesystem and credential restrictions remain necessary. The bubblewrap advisory in section 13 means an unspecified or old sandbox cannot be assumed to provide complete containment.

## Receipt
- https://github.com/omnigent-ai/omnigent/blob/v0.17.0/omnigent/policies/builtins/github.py#L729-L742
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/github.py#L556-L613
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/github.py#L943-L986
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/working_dir.py#L363-L369
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/docs/POLICIES.md#L347-L367
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/tests/policies/builtins/test_github.py#L557-L573
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/_shell.py#L29-L39
