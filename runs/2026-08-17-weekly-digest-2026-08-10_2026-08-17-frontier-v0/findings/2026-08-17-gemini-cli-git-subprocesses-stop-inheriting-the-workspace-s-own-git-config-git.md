---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-gemini-cli-git-subprocesses-stop-inheriting-the-workspace-s-own-git-config-git
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/28792
    precision: merged_pr
---
# 2026-08-17-gemini-cli-git-subprocesses-stop-inheriting-the-workspace-s-own-git-config-git

Git subprocesses stop inheriting the workspace's own git config; git forced to ASK_USER in untrusted folders.

PR #28792 (commit c0d192452b4e2df7efb6d62a60385f475bfd6779, merged 2026-08-13T22:03Z) adds `getSafeGitEnv()` in `packages/core/src/utils/gitUtils.ts` and routes every internal git subprocess through it  --  GitService (checkpointing), WorktreeService, GrepTool's `git grep`, and the GitHub extension installer. It strips all inbound `GIT_CONFIG_*`/`GIT_CONFIG_PARAMETERS`, points `GIT_CONFIG_GLOBAL` and `GIT_CONFIG_SYSTEM` at /dev/null, and pins eight keys to inert values: `credential.helper`, `core.fsmonitor`, `core.hooksPath`, `core.sshCommand`, `core.editor`, `sequence.editor`, `diff.external` all emptied, `core.pager` set to `cat`. Separately, `PolicyEngine` gains an `isTrustedFolder` hook: in an untrusted workspace any parsed `git` invocation now returns ASK_USER, and  --  explicitly  --  that ASK_USER survives the `isKnownSafeCommand` override that previously promoted it to ALLOW. The same PR consolidates the a2a-server's second, divergent trust evaluator: `setIsTrusted()` used to return `getEnv('GEMINI_FOLDER_TRUST') === 'true'` (a feature-enable flag, not a verdict) falling back to a client-supplied `agentSettings.isTrusted`, and now calls `checkPathTrust` with `loadSettings(workspaceRoot, false)`; the executor stamps `GEMINI_CLI_TRUST_WORKSPACE` into the task env so downstream checks read one verdict instead of re-deriving it. Verified by reading the diff: `git show c0d192452 -- packages/a2a-server/src/config/config.ts`.

Channel: main-unreleased. Ancestry: `git tag --contains c0d192452` returns empty  --  the commit is in no tag, stable or prerelease. v0.55.1 (2026-08-11) predates it. Verified the code is absent from the tag: `git show v0.55.1:packages/core/src/utils/gitUtils.ts` has no `getSafeGitEnv`, while `git show e120d041e:packages/core/src/utils/gitUtils.ts` defines it.

Operator consequence: This is the guard that was still reading from inside the workspace, and the fix is not in any release yet. On stable v0.55.1, a repository you did not write can ship a `.git/config` setting `core.pager`, `core.hooksPath`, `core.sshCommand` or `diff.external`, and those run when the agent invokes git  --  while `git status`-class commands were auto-allowed as 'known safe' even in an untrusted folder. Until this ships: do not point v0.55.1 or earlier at an untrusted clone with checkpointing or worktrees enabled, or pre-neutralize the repo's local config yourself. Also test before adopting the fix  --  blanking `credential.helper` and voiding global/system config changes how `gemini extensions install <github-url>` authenticates against private repos.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/28792
