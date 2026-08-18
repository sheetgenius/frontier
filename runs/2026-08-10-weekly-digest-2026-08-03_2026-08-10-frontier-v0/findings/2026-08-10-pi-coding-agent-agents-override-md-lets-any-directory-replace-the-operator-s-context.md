---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-pi-coding-agent-agents-override-md-lets-any-directory-replace-the-operator-s-context
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/pull/7681
    precision: merged_pr
---
# 2026-08-10-pi-coding-agent-agents-override-md-lets-any-directory-replace-the-operator-s-context

`AGENTS.override.md` lets any directory replace the operator's context file  --  and it loads before project trust is resolved.

Pi now treats `AGENTS.override.md` as the highest-priority context file for each directory. Per docs/usage.md at v0.84.2: "If a directory contains `AGENTS.override.md`, Pi loads it instead of `AGENTS.md` or `CLAUDE.md` from that directory. Context files from other directories still layer normally." The security doc was updated in the same release to name it explicitly among the files exempt from the trust gate: at v0.84.0 and later, docs/security.md reads "Context files such as `AGENTS.override.md`, `AGENTS.md`, and `CLAUDE.md` are loaded regardless of project trust unless context loading is disabled"  --  the v0.83.0 text named only `AGENTS.md` and `CLAUDE.md`. The same doc notes that non-interactive modes (`-p`, `--mode json`, `--mode rpc`) show no trust prompt at all.

Channel: tagged-release. Ancestry: Commit 8ecf8a9883d1cb7c78d07c0fd64d32d6a1fd2c4c ("feat(coding-agent): support AGENTS.override.md (#7681)", authored 2026-08-05T19:24:31Z; PR #7681 merged 2026-08-05T19:24:32Z with that merge_commit_sha). `gh api repos/earendil-works/pi/compare/v0.84.0...8ecf8a98` returned status=behind, behind_by=40  --  the commit is an ancestor of the stable v0.84.0 tag. v0.84.0: prerelease=false, draft=false.

Operator consequence: Try it, but audit for it first. The capability is real  --  per-directory context override is the clean answer to monorepos where one root AGENTS.md cannot serve every package. The exposure is that a checked-in `AGENTS.override.md` in a cloned repository displaces whatever guidance you wrote for that directory, and it loads whether or not you trust the project. If you run Pi over repositories you did not author, grep for `AGENTS.override.md` before the first run, or disable context loading with `--no-context-files`/`-nc`. Under headless automation there is no prompt to catch it.

## Receipt
- https://github.com/earendil-works/pi/pull/7681
