---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-28-openhands-saas-llm-profile-migration
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: capability
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "Commit 1e32eee (2026-05-28T13:20:49Z): 'feat(saas): seed Default LLM profile from legacy config on profiles upgrade' - Profile migration with API key integrity preservation through upgrade and compreh"
    url: https://github.com/OpenHands/OpenHands/commit/1e32eee
    precision: commit
---
# Feature: Seed Default LLM profile from legacy config on profiles upgrade

## What Changed

Implemented migration logic that automatically converts legacy LLM configuration settings into new profiles system during upgrade. Seeded 'Default' profile from existing legacy LLM settings with in-memory seeding during load() and persistence via _persist_seeded_default_profile() using row-level locking to prevent concurrent duplication.

## Operator Implication

SaaS operators deploying this change will see automatic migration of organizations' legacy LLM settings to new profiles system. No user re-entry of API keys required. Existing configurations transparently converted to Default profile with row-level locking preventing duplicate seeding.

## Receipt

- [Commit 1e32eee (2026-05-28T13:20:49Z): 'feat(saas): seed Default LLM profile from legacy config on profiles upgrade' - Profile migration with API key integrity ](https://github.com/OpenHands/OpenHands/commit/1e32eee)
