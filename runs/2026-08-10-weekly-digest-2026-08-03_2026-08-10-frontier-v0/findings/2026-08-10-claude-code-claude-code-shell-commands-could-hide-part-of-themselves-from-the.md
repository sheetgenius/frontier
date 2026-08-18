---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-claude-code-claude-code-shell-commands-could-hide-part-of-themselves-from-the
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/changelog#2-1-223
    precision: official_changelog
---
# 2026-08-10-claude-code-claude-code-shell-commands-could-hide-part-of-themselves-from-the

Claude Code shell commands could hide part of themselves from the approval prompt  --  fixed in v2.1.221 and v2.1.223.

https://code.claude.com/docs/en/changelog resolves 200 and the #2-1-223 anchor exists. Every bullet the claim quotes is verbatim-exact in the raw HTML (verified by grep against the 2.9MB source, not the summarizer):

2.1.221 (labeled "August 4, 2026"): "Fixed a Bash tool permission-check bypass where zsh could execute hidden commands in [[ ]] regex conditionals; affected commands now prompt for permission" and "Fixed PowerShell permission checks mishandling paths containing quote characters on Windows; such paths now prompt for approval".

2.1.222 (labeled "August 4, 2026"): "Fixed worktree-isolated sessions and their subagents being able to run destructive git commands against the main checkout; isolation now applies to file edits and Bash in every session type" and "Fixed PreToolUse auto-allow hooks bypassing tool restrictions in background agent tasks (summaries, compaction, renames)". NOTE: neither bullet is a display-vs-execution defect.

2.1.223 (labeled "August 6, 2026"): "Fixed a Bash permission bypass where a crafted command could hide parts of itself from permission checks"; "Fixed permission prompts so commands padded with tabs or invisible Unicode can no longer hide part of the command from the approval dialog"; "Fixed workflow scripts being able to use dynamic import() to run code outside the workflow sandbox"; "Fixed a permission gap where an agent definition's bypassPermissions mode ignored the org bypass-permissions disable policy". That is TWO authority gaps, not three.

2.1.224 (labeled "August 7, 2026"): "Fixed sandbox filesystem deny entries written with a trailing slash (e.g. denyRead: "~/.aws/") being silently bypassable on Linux and macOS." It says "silently bypassable", not "no protection at all", and it is platform-scoped.

The receipt nowhere states that retained transcripts or approval logs record a different string than what executed; it speaks only of permission checks and the approval dialog.

Channel: tagged-release. Ancestry: Closed source; npm publish record is the release proof. registry `time[]`: 2.1.221 = 2026-08-03T22:16:25Z, 2.1.222 = 2026-08-04T20:37:17Z, 2.1.223 = 2026-08-05T22:51:13Z  --  all plain non-prerelease semver under dist-tag `latest`, all reachable as per-version manifests. Note the date skew between surfaces: the changelog dates 2.1.221 and 2.1.222 to August 4 and 2.1.223 to August 6, while the registry timestamps are August 3, 4 and 5 UTC. I take the registry timestamp as the authority for window assignment since it is the artifact's own publish time; all three fall in w1 either way.

Operator consequence: Upgrade past 2.1.224; all four of these releases landed inside the window, between August 3 and August 7 UTC. The defect worth acting on first is the sandbox one: deny entries written with a trailing slash, such as denyRead: "~/.aws/", were silently bypassable on Linux and macOS until 2.1.224. That is configuration an operator wrote, believed in, and got no warning about, so go and re-read your own sandbox deny rules rather than assuming the upgrade settled it. Second, the 2.1.221 and 2.1.223 fixes mean that before this window a human could approve a shell command while seeing less than what would run  --  zsh could execute hidden commands inside [[ ]] conditionals, and tabs or invisible Unicode could push part of a command out of the approval dialog. Treat approvals granted before 2.1.223 as evidence that someone clicked yes, not as evidence that they saw the whole command; whether your retained transcripts recorded the full string or the truncated display is a question for your own logging setup, and the changelog does not answer it. Third, enumerate your custom agent definitions: until 2.1.223 an agent definition's bypassPermissions mode ignored the org bypass-permissions disable policy, so a definition could be running in a mode your organization believed it had switched off.

Correction note: an earlier draft of this finding overstated the evidence. It was refuted in the run's adversarial receipt pass before publication and the wording above is the corrected form. See qa.md in this run for what was wrong.

## Receipt
- https://code.claude.com/docs/en/changelog#2-1-223
