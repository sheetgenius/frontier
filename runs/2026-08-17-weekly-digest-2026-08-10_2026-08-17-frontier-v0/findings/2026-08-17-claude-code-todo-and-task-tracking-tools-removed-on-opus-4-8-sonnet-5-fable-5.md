---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-claude-code-todo-and-task-tracking-tools-removed-on-opus-4-8-sonnet-5-fable-5
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/changelog#2-1-233
    precision: official_changelog
---
# 2026-08-17-claude-code-todo-and-task-tracking-tools-removed-on-opus-4-8-sonnet-5-fable-5

Todo and task-tracking tools removed on Opus 4.8, Sonnet 5, Fable 5, Mythos 5 and newer models.

"Todo/task-tracking tools (TaskCreate/Get/Update/List, TodoWrite) are no longer available on Opus 4.8, Sonnet 5, Fable 5, Mythos 5, and newer models; set `CLAUDE_CODE_ENABLE_TODO_TOOLS=1` to bring them back." This is a removal on the newest models specifically  --  older models keep the tools. The same release also removed the "Default teammate model" setting from `/config`, with agent-team teammates now inheriting the leader's model unless the spawn names one, and v2.1.232 removed the startup tip suggesting custom subagents. Read together these are a deliberate retreat from scaffolding the newer models no longer need.

Channel: tagged-release. Ancestry: Closed source; npm publish record is the release proof. registry `time[]` gives 2.1.233 = 2026-08-14T18:50:44Z, plain non-prerelease semver, per-version manifest resolves HTTP 200, dist-tag `latest`. Not present in `stable` (2.1.226), so fleets on the stable channel still have the tools and will lose them on their next channel promotion rather than on a date they chose.

Operator consequence: Adapt if anything you own reads todo state. This is the quietest breaking change in the window and the one most likely to break something built on top of Claude Code: hooks that fire on `TodoWrite`, evals that score todo-list behaviour, dashboards that parse task events, and any wrapper that treats a todo list as its progress signal all go silent on newer models  --  not with an error, but with the tool simply never being called. `CLAUDE_CODE_ENABLE_TODO_TOOLS=1` restores them, so the migration is cheap once you know you need it. The trap is finding out from a dashboard that stopped updating rather than from a failure.

## Receipt
- https://code.claude.com/docs/en/changelog#2-1-233
