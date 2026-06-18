---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-17-eve-filesystem-first-agent-model
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-06-16
  end: 2026-06-19
status: accepted
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: study
evidence:
  - label: "Eve docs: project layout (instructions, agent, tools, skills, channels, schedules, subagents, connections, sandbox, hooks)"
    url: https://eve.dev/docs/reference/project-layout
    precision: official_docs
  - label: "Eve docs (overview)"
    url: https://eve.dev/docs
    precision: official_docs
---
# Eve's filesystem-first agent model: an agent is a directory of files

## What this is

Eve's central design claim is that
[an agent is a directory of files](https://eve.dev/docs/reference/project-layout).
The [project layout](https://eve.dev/docs/reference/project-layout) defines the
parts of an agent as files and directories rather than as configuration buried
in application code:

- `instructions.md` -- the system prompt.
- `agent.ts` -- model and runtime configuration.
- `tools/` -- typed functions the model can call.
- `skills/` -- procedures loaded contextually.
- `channels/` -- Slack, Discord, and HTTP integrations.
- `schedules/` -- cron schedules.
- `subagents/` -- specialist agents for delegation.
- `connections/` -- tools from external MCP servers.
- `sandbox/` -- a controlled workspace for files and commands.
- `hooks/` -- lifecycle and stream-event handlers.

## Why it matters

A file-backed definition is reviewable and version-controllable: the system
prompt, the tool surface, the skills, the channels, and the approval-relevant
sandbox are all artifacts in a repository, not state assembled at runtime. That
makes an agent's full operating context inspectable from its directory, and it
makes changes to that context show up as diffs.

## Operator consequence

- An operator can read what an agent is, what it may call, and how it is wired by
  reading its directory, and can gate changes through normal code review.
- The model is a research lens for the thesis that the shaped environment around
  the model is itself a first-class, ownable layer.

## Open question

- How much agent behavior is fully captured by the file layout versus resolved at
  runtime (model defaults, connection state, sandbox provisioning)? Worth
  confirming against a working project as the API settles.
