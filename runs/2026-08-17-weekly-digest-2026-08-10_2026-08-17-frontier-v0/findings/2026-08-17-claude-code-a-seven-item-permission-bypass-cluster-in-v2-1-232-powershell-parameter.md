---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-claude-code-a-seven-item-permission-bypass-cluster-in-v2-1-232-powershell-parameter
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/changelog#2-1-232
    precision: official_changelog
---
# 2026-08-17-claude-code-a-seven-item-permission-bypass-cluster-in-v2-1-232-powershell-parameter

A seven-item permission-bypass cluster in v2.1.232: PowerShell parameter defaults, Cygwin symlinks, nested-repo trust, and a Linux sandbox escape.

One release closed seven distinct ways the pre-approval boundary could be walked around. Two are permission bypasses proper: "a PowerShell permission bypass where variable-writing parameters could silently overwrite `$PSDefaultParameterValues` and redirect later commands' file access"  --  one approved command rewrites where every subsequent command reads and writes  --  and "a Windows permission bypass where Git Bash followed Cygwin-style symlinks that path validation saw as regular files." Two are trust-boundary failures: "nested git repositories inheriting trust from a parent directory; each repository now requires its own trust confirmation", and "Remote Control sessions hosted by a bridge inside a cloud session inheriting that session's transcript or credentials." Two are sandbox escapes: "Hardened the Linux filesystem sandbox against a protected-path bypass" and a symlink-planting fix on the shared cross-session messaging socket directory in `/tmp`  --  "a pre-planted symlink or another user's directory is now refused instead of used." The seventh is a scope reduction: `sandbox.ripgrep` "is honored only from user, managed, and `--settings` settings; project settings can no longer override the sandbox's ripgrep binary"  --  a checked-in project file could previously name the binary the sandbox executes.

Channel: tagged-release. Ancestry: Closed source; npm publish record is the release proof. registry `time[]` gives 2.1.232 = 2026-08-13T21:30:53Z; the per-version manifest resolves HTTP 200 at registry.npmjs.org/@anthropic-ai/claude-code/2.1.232, plain semver, published under dist-tag `latest`. It is not in `stable` (2.1.226). Note the sibling: 2.1.231 published the same day at 08:27:21Z carrying a single MCP OAuth fix, and 2.1.230 never appeared in the registry `time[]` map at all  --  absent rather than unpublished, since unpublished versions retain their `time[]` entry.

Operator consequence: Upgrade to 2.1.232 or later, and re-audit two assumptions rather than just bumping the version. First, the nested-repository trust inheritance means any monorepo or vendored-submodule layout you trusted at the parent has been extending that trust downward  --  enumerate what was actually inside those directories. Second, the `sandbox.ripgrep` and Cygwin-symlink fixes both describe a repository being able to influence execution, so a Windows or Linux machine that ran Claude Code against third-party repositories before 2.1.232 was trusting the repository, not the sandbox. Teams on the `stable` channel do not have any of this yet.

## Receipt
- https://code.claude.com/docs/en/changelog#2-1-232
