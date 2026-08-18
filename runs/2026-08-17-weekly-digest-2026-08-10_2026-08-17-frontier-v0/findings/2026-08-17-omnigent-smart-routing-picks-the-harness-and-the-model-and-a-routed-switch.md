---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-omnigent-smart-routing-picks-the-harness-and-the-model-and-a-routed-switch
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/4074
    precision: merged_pr
---
# 2026-08-17-omnigent-smart-routing-picks-the-harness-and-the-model-and-a-routed-switch

Smart Routing picks the harness and the model  --  and a routed switch writes Claude Code's default model outside Omnigent.

Smart Routing scores each task and selects both the model and, where allowed, the harness, across Claude Code and Codex; subagent spawns are routed per task, and a spawn that names a model is honored only when the router independently picks the same arm. The PR documents a boundary crossing in its own words: Omnigent still never writes the user's ~/.claude/settings.json itself, but Claude Code saves the model typed via the injected `/model <id>` command as the user's default, so a routed switch changes the default model for new Claude sessions started outside Omnigent. The PR calls this an accepted trade-off. v0.9.0 also adds Databricks AI Gateway smart routing alongside the OSS LLM-classifier router.

Channel: tagged-release. Ancestry: PR #4074 merge commit b2681303401ca3e5d90d57d2c0fb318040991474, merged 2026-08-05T22:34:55Z. gh api repos/omnigent-ai/omnigent/compare/v0.9.0...b2681303401ca3e5d90d57d2c0fb318040991474 -> status "behind", ahead_by 0. Headlined in the v0.9.0 release body (#4074, #4181, #4213).

Operator consequence: Try it deliberately, not by default. Two things follow for an operator. First, when the router selects the harness, the governance layer an action lands under changes without you choosing it  --  your Omnigent policy set is constant but the harness's own permission system underneath is not. Second, a routed session mutates state outside Omnigent: your bare `claude` sessions afterwards start on whatever model the router last picked. If that matters, pin the harness rather than using auto.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/4074
