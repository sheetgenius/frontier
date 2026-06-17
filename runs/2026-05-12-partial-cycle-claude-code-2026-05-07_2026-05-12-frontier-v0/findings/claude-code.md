---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-12-claude-code-agent-view-goal-and-governance
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-07
  end: 2026-05-12
versions_covered: "2.1.133..2.1.139"
status: accepted_signal
confidence: high
accessibility_impact: high
operator_relevance: high
actionability: test
evidence:
  - label: "v2.1.139 changelog (agent view, /goal, continueOnBlock, subagent headers, API key boundary)"
    url: https://code.claude.com/docs/en/changelog#2-1-139
    precision: release_note
  - label: "Agent view documentation"
    url: https://code.claude.com/docs/en/agent-view
    precision: official_docs
  - label: "v2.1.136 changelog (settings.autoMode.hard_deny)"
    url: https://code.claude.com/docs/en/changelog#2-1-136
    precision: release_note
  - label: "v2.1.133 changelog (worktree.baseRef, effort level in hooks)"
    url: https://code.claude.com/docs/en/changelog#2-1-133
    precision: release_note
  - label: "Hooks documentation"
    url: https://code.claude.com/docs/en/hooks
    precision: official_docs
  - label: "Week 19 What's New (plugin zip/URL distribution)"
    url: https://code.claude.com/docs/en/whats-new/2026-w19
    precision: official_docs
---

# Claude Code: Agent View, Goal Completion, and a Hardening Governance Surface

## What Changed

Claude Code shipped three interrelated surface expansions in v2.1.133--v2.1.139
(May 7--11, 2026).

**Agent view** ([`claude agents`](https://code.claude.com/docs/en/agent-view),
Research Preview, v2.1.139) is a full-screen supervisor panel for all Claude
Code sessions. Sessions are organized by state -- working, needs input,
completed, failed, stopped -- under a persistent supervisor process that keeps
sessions alive when no terminal is attached. File edits in background sessions
are automatically isolated to per-session git worktrees under
`.claude/worktrees/`. A peek panel lets operators reply without full attach; the
peek panel shows what the session needs and accepts multiple-choice responses by
key. Session rows display Haiku-generated one-line summaries, refreshed at most
every 15 seconds while the session is active. The `disableAgentView` managed
setting gives enterprises the option to disable the surface. Background sessions
survive terminal closure; `claude respawn --all` restarts stopped sessions after
machine sleep.

**`/goal` command**
([v2.1.139](https://code.claude.com/docs/en/changelog#2-1-139)): sets a
completion condition; Claude continues working across turns until it is met.
Works in interactive, `-p`, and Remote Control modes. A live overlay shows
elapsed time, turns, and token consumption. This is the first explicit
goal-completion primitive in Claude Code.

**Hook `continueOnBlock` for `PostToolUse`**
([v2.1.139](https://code.claude.com/docs/en/changelog#2-1-139)): when set to
`true`, feeds the hook's rejection reason back to Claude and continues the turn
rather than ending it. Governance hooks can be advisory -- a block is a
constraint Claude can respond to -- rather than terminal.

**Subagent attribution headers**
([v2.1.139](https://code.claude.com/docs/en/changelog#2-1-139)): all API
requests from subagents carry `x-claude-code-agent-id` and
`x-claude-code-parent-agent-id` HTTP headers. OTel `claude_code.llm_request`
spans include `agent_id` and `parent_agent_id` attributes. Multi-agent call
trees are now attributable at the API layer.

**API key disables cloud surfaces**
([v2.1.139](https://code.claude.com/docs/en/changelog#2-1-139)): when
`ANTHROPIC_API_KEY`, `apiKeyHelper`, or `ANTHROPIC_AUTH_TOKEN` is set, Remote
Control, `/schedule`, claude.ai MCP connectors, and notification preferences are
disabled even if a Claude.ai login also exists. Cloud control surfaces require
cloud auth.

**`settings.autoMode.hard_deny`**
([v2.1.136](https://code.claude.com/docs/en/changelog#2-1-136)): auto mode
classifier rules that block unconditionally regardless of allow exceptions. Hard
blocks that no allow rule can override.

**`worktree.baseRef`**
([v2.1.133](https://code.claude.com/docs/en/changelog#2-1-133)): controls
whether `--worktree`, `EnterWorktree`, and agent-isolation worktrees branch from
`origin/<default>` (`fresh`, the new default) or local `HEAD` (`head`). This
reverses the default that was in place since v2.1.128.

**Hooks receive effort level**
([v2.1.133](https://code.claude.com/docs/en/changelog#2-1-133)): all hook
handlers receive the active effort level via the `effort.level` JSON input field
and the `$CLAUDE_EFFORT` environment variable.

## Operator Consequence

Claude Code now has the scaffolding for a supervised multi-agent operating style.
Agent view makes session state an observable surface rather than ambient
assumption. `/goal` lets operators hand off a completion condition without
babysitting each turn. Together they address the two main barriers to multi-agent
adoption: not knowing what all sessions are doing, and not knowing when to stop.

The governance additions complete a policy model for auto mode: `hard_deny` +
soft deny + allow rules. `continueOnBlock` closes the gap between "governance
stops the agent" and "governance teaches the agent." The API key boundary makes
an implicit behavior explicit, reducing the chance of discovering missing
features at runtime.

Subagent attribution headers are a small change with compounding value: any
logging pipeline that receives Anthropic API calls can now distinguish
parent-session requests from subagent requests and reconstruct call trees.

The `worktree.baseRef: "fresh"` default change is a breaking behavior change for
operators who relied on unpushed commits being present in new worktrees. Set
`worktree.baseRef: "head"` to restore the prior behavior.

## Bitter Implication

Bitter adapters for Claude Code should capture:

- Session state from the supervisor roster (`~/.claude/daemon/roster.json`) when
  wrapping multi-session runs
- `x-claude-code-agent-id` and `x-claude-code-parent-agent-id` headers to
  reconstruct agent call trees in BitterLog
- Goal text and termination reason when `/goal` is in use, as these constitute
  operator intent evidence
- Hook rejection reasons when `continueOnBlock` is active -- these form a
  governance event stream that belongs in the run receipt

The capability-profile assumption for Claude Code worktree behavior should be
updated: the default base is now the remote default branch, not local HEAD.

## Signal

Agent view, `/goal`, and `continueOnBlock` together represent a structural
expansion: Claude Code is building the surfaces an operator needs to run it
unsupervised at scale. This changes what Bitter should test (supervisor-based
session wrapping), what capability profiles should assert (goal completion is
native), and how governance hooks should be designed (advisory rejection with
reason is now possible). Accessible enough to change operator behavior now;
material enough to change Bitter adapter assumptions.
