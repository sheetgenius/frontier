---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-gitspawn-ultrareview-path-ran-repo-git-config-before-trust-no-fix-named-through-2-1-278
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: medium
evidence:
  - url: https://www.manifold.security/blog/ai-coding-agents-git-hijack
    precision: third_party_research
  - url: https://github.com/anthropics/claude-code/blob/8187baaaafb3/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-09-21-claude-code-gitspawn-ultrareview-path-ran-repo-git-config-before-trust-no-fix-named-through-2-1-278

Manifold Security published GitSpawn on 2026-09-01. Coding agents run git at startup to orient themselves, and a repository can ship a .git/config whose core.fsmonitor names a command that git runs on any index refresh, as the user, outside any sandbox, with no prompt. Manifold lists seven affected agents. For Claude Code it reports two paths: the core.fsmonitor path fixed in 2.1.196 (reported 2026-06-26), and an ultrareview path that fired before the workspace-trust prompt was shown, reported 2026-07-15 and still reproducing on 2.1.252 at its 2026-09-01 retest. No Claude Code changelog line through 2.1.278 names a fix for that path; given the vendor's silent Plugin4Shell fix, that is not proof it is unfixed.

Channel: tagged-release (first path fixed 2.1.196, before the window; second path unfixed at Manifold's 2.1.252 retest). Half: defect.

Operator consequence: Do not open an untrusted repository in any coding agent on a machine with credentials worth stealing, whatever the trust prompt says; the prompt appears after the harness's own git has already run. Clone untrusted code into a container or VM, or inspect .git/config for core.fsmonitor, core.hooksPath and similar command-valued keys before opening it.

## Receipt
- https://www.manifold.security/blog/ai-coding-agents-git-hijack
- https://github.com/anthropics/claude-code/blob/8187baaaafb3/CHANGELOG.md
