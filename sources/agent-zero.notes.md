# Agent Zero Source Notes

Agent Zero should be watched as a workcell-autonomy source.

The important question is:

```text
What changes when the agent gets a real computer environment?
```

High-signal areas:

- terminal, filesystem, browser, and code execution access
- Docker/container boundaries and reset behavior
- persistent projects, memory, and task state
- agent-created tools, plugins, or skills
- subagents and delegation
- visible logs, UI state, and human intervention points
- security warnings and practical guardrails
- remote access or hosted deployment paths

Do not over-weight:

- raw autonomy demos without isolation details
- "the agent can do anything" positioning
- generated tools that cannot be inspected or reproduced
- power that makes cleanup, credentials, or rollback unclear

Editorial stance:

Agent Zero teaches the BitterGrid question. Bitter does not need to copy its
surface. Bitter needs to understand the product pressure: agents want real
computers, not toy tool loops. The hard part is making that computer leased,
bounded, logged, inspectable, resumable, and disposable.
