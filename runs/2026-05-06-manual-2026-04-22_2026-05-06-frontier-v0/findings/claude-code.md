---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-06-claude-code-review-recap-plugin-surfaces
source: claude-code
source_contract: sources/claude-code.yml
window: 2026-04-22..2026-05-06
status: accepted_signal
confidence: high
receipts:
  - https://code.claude.com/docs/en/whats-new/2026-w17
  - https://code.claude.com/docs/en/changelog
evidence:
  - label: Week 17 notes
    url: https://code.claude.com/docs/en/whats-new/2026-w17
    precision: page
  - label: Ultrareview guide
    url: https://code.claude.com/docs/en/ultrareview
    precision: page
  - label: Session recap docs
    url: https://code.claude.com/docs/en/interactive-mode#session-recap
    precision: section
  - label: Changelog 2.1.118
    url: https://code.claude.com/docs/en/changelog#2-1-118
    precision: section
---

# Claude Code: Review, Recap, Plugins, and Permission Surfaces Are Converging

## What Changed

Claude Code's Week 17 notes introduced `/ultrareview`, a public research
preview that runs a cloud fleet of bug-hunting agents against a branch or pull
request and returns findings to Claude Code and Desktop.

The same week added automatic one-line session recaps when returning to the
terminal, named themes, JSON theme files under `~/.claude/themes/`, plugin
theme support, and a redesigned `claude.ai/code` surface with sessions,
layout, and routines.

The broader changelog in the sprint window included plugin zip/session support,
MCP tool-count visibility, MCP retry and auth fixes, hook output replacement,
subagent fork behavior, `AI_AGENT` subprocess attribution, OTel metrics for
MCP-created PRs and MRs, and permission-prompt tooling.

## Operator Consequence

Claude Code is moving verification and review up into provider-native
capability while also improving session continuity, plugin distribution,
telemetry attribution, hooks, and MCP governance.

The important operator question is no longer "can Claude review this?" It is:
what did the provider-native review inspect, what evidence did it produce, and
how should that verdict be composed with local tests, BitterQA, and other
worker judgments?

## Bitter Implication

Bitter should treat `/ultrareview` as a worker-native verification engine that
can produce evidence, not as a feature to reimplement.

Adapter work should focus on:

- capturing review target, provider, model, and result format
- preserving session recaps as worker-native context receipts
- recording plugin, MCP, hook, and permission-prompt state
- distinguishing Claude's verdict from Bitter's final verification judgment
- feeding review findings into wake packets only after settlement

## Signal

Verification is becoming a provider-native service. Bitter's role is to make
those verdicts comparable, source-attributed, replayable, and subordinate to
operator-owned evidence standards.
