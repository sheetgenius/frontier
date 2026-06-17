---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-07-agent-zero-full-computer-workcell
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-04-23
  end: 2026-05-07
commit_count: 116
status: accepted_signal
confidence: high
accessibility_impact: high
operator_relevance: high
bitter_relevance: high
factory_relevance: medium
actionability: test
evidence:
  - label: "Replace browser-use agent with native browser"
    url: https://github.com/agent0ai/agent-zero/commit/983d431a5eb785eb9deba9fdfd471fa93f349603
    precision: commit_diff_reviewed
  - label: "Persistent full Chromium runtime for Browser"
    url: https://github.com/agent0ai/agent-zero/commit/fa7eef1919901093b117a98ad6e402d809687cf6
    precision: commit
  - label: "Browser multi-tab awareness and modifier-key click"
    url: https://github.com/agent0ai/agent-zero/commit/5012dd3128aa6218cc55f6cbce8be42b2db2fee4
    precision: commit
  - label: "Browser screenshot previews in tool messages"
    url: https://github.com/agent0ai/agent-zero/commit/c2fb2c3c94e1e1c85b783252332b3fc003f39f2b
    precision: commit
  - label: "Linux Desktop skill controls"
    url: https://github.com/agent0ai/agent-zero/commit/62ac20e7b248179825e05664c1df97ebc6214c54
    precision: commit
  - label: "Desktop document canvas"
    url: https://github.com/agent0ai/agent-zero/commit/24dd548ebf221e397323b5aa3a509f037fb1b9ae
    precision: commit
  - label: "OAuth disconnect and remaining quota visibility"
    url: https://github.com/agent0ai/agent-zero/commit/0da8f3dc2b640efbce22499053507837101fdf6f
    precision: commit
---

# Agent Zero: The Workcell Is Becoming A Visible Computer

## What Changed

Agent Zero's commit stream is intensely concrete: native browser, persistent Chromium runtime, browser viewer, tabs, screenshots, annotation, desktop canvas, Office/LibreOffice runtime, file browser, ZIP downloads, Linux desktop controls, OAuth disconnect, quota visibility, and Time Travel workspace history.

The diff-reviewed native browser commit replaces a browser-use agent with a direct Playwright-powered browser tool, live WebUI viewer, session controls, status APIs, configuration, and extension management. It also moves the legacy browser-use approach out of core.

## Operator Consequence

The frontier is leaving the chat box. For many workflows, the useful surface is a visible computer: browser, file system, desktop, documents, screenshots, canvas, and recoverable state.

This makes agent work easier to trust because the user can see more of what the agent is doing. It also creates new authority questions around browser sessions, document runtimes, OAuth, file access, and desktop controls.

## Bitter Consequence

Agent Zero is the clearest source for BitterGrid's workcell doctrine in this window. A workcell should not be an invisible shell. It should be a bounded, inspectable environment where browser, files, runtime, screenshots, credentials, and artifacts can be attached to receipts.

Bitter should test Agent Zero as an agent engine and as a product lesson.
