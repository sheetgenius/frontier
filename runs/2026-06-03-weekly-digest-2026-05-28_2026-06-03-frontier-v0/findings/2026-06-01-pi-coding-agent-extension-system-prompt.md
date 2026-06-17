---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-01-pi-coding-agent-extension-system-prompt
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "Commit 8216cca 'Add system prompt options to extension commands' adds ctx.getSystemPromptOptions() returning base prompt inputs for extensions"
    url: https://github.com/earendil-works/pi/commit/8216cca
    precision: commit
---
# Extension system prompt options API

## What Changed

Added ctx.getSystemPromptOptions() method for extensions to inspect base system prompt inputs including: custom prompt, active tools, tool snippets, prompt guidelines, appended system prompt, working directory, loaded context files, and loaded skills. Returns BuildSystemPromptOptions object.

## Operator Implication

Extension developers can now introspect system prompt configuration at runtime. Enables extensions to adapt behavior based on active tools, context, and prompt settings.

## Receipt

- [Commit 8216cca 'Add system prompt options to extension commands' adds ctx.getSystemPromptOptions() returning base prompt inputs for extensions](https://github.com/earendil-works/pi/commit/8216cca)
