---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-13-openclaw-per-sender-tool-policies
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-05-13
  end: 2026-05-13
versions_covered: "v2026.5.12-beta.3 (published 2026-05-12T23:38:26Z)"
status: accepted_signal
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: adapt
evidence:
  - label: "v2026.5.12-beta.3 release notes (full)"
    url: https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.3
    precision: release_note
  - label: "PR #66933 — per-sender tool policies with channel-scoped sender keys"
    url: https://github.com/openclaw/openclaw/pull/66933
    precision: release_note
  - label: "PR #80897 — memory-wiki: require admin scope for ingest"
    url: https://github.com/openclaw/openclaw/pull/80897
    precision: release_note
  - label: "PR #80904 — memory-wiki: require write scope for Obsidian search"
    url: https://github.com/openclaw/openclaw/pull/80904
    precision: release_note
  - label: "PR #79307 — compaction preserves scoped background exec/process references"
    url: https://github.com/openclaw/openclaw/pull/79307
    precision: release_note
---

# OpenClaw: Per-Sender Tool Policies (v2026.5.12-beta.3)

## What Changed

The `v2026.5.12-beta.3` release, published 2026-05-12T23:38:26Z, lands one
new authority pattern and three claim-level updates for OpenClaw operators.
All four are anchored in the official release notes (precision floor for
this source is `release_note`).

### Per-Sender Tool Policies (PR #66933)

Operators can now restrict dangerous tools by requester identity using
canonical channel-scoped sender keys. The restriction extends across
**global**, **agent**, **group**, **core**, **bundled**, and **plugin**
tool surfaces. This is a meaningful evolution of OpenClaw's authority model:
the prior baseline (`v2026.5.10-beta.5`) introduced per-agent message
restrictions (`tools.message.crossContext`, `tools.message.actions.allow`).
This release extends control from "agent-level" to "requester-level" —
authority is now scoped per (channel × sender) pair rather than per-agent.

The operator-facing consequence: a public-facing OpenClaw deployment can
now allow or deny specific tools to specific senders in specific channels
without modifying the global tool surface. Previously the authority knob
was the agent; now it is the requester identity that originated the
message. This is a different and broader trust model.

### Memory Scope Tightening (PRs #80897 and #80904)

Two parallel changes harden memory-wiki access:

- Memory-wiki ingest now requires **admin scope**.
- Obsidian search on the memory-wiki now requires **write scope**.

The release notes mark these as `[AI]` items, indicating they came from
automated change handling. Operators integrating memory-wiki ingest from
external tools or skills must now run those operations under admin scope;
search operations against Obsidian now require write scope. Setup scripts
and skill manifests that assumed read-only sufficient access need to be
updated.

### OpenAI CLI Auth Default Shift

`openclaw models auth login --provider openai` now starts the
ChatGPT/Codex account login by default. API-key-based setup remains
available behind the explicit `--method api-key` flag. The reversal
matters for any onboarding script or playbook that assumes API-key-first
OpenAI auth: those scripts need to either pin `--method api-key` or
prepare for the OAuth login flow.

### Compaction Preserves Scoped Background Sessions (PR #79307)

Compaction now preserves scoped background `exec` and `process` session
references across embedded compaction and after-turn runtime contexts —
without exposing sessions from unrelated scopes. Long-running background
work survives compaction with cleaner scope boundaries. Operators running
multi-step background processes through OpenClaw should see fewer
"session lost after compaction" failures.

## Why This Matters

The per-sender tool policies signal is the directional change: OpenClaw's
authority model is moving past "per-agent" into "per-requester," with
canonical channel-scoped sender keys giving operators a stable identity
to gate against. For a self-hosted gateway bridging chat platforms to AI
agents, this is the natural next governance step — and it converges with
the broader watchlist pattern of explicit, enforced authority over
distributed work.

The three claim updates (memory scopes, OpenAI auth, compaction scoping)
are not directional but are operator-visible: scripts, skills, and
deployment playbooks need targeted updates. They become claim revisions
on the OpenClaw profile, not standalone signals.

## What Was Explicitly NOT Promoted

Items present in the v2026.5.10-beta.5 baseline that appear again in
v2026.5.12-beta.3 release notes (e.g., `skills.install.allowUploadedArchives`,
`voice.allowedChannels`, CLI onboarding wayfinding, memory dreaming
compaction, per-agent `tools.message.crossContext` / `tools.message.actions.allow`)
are **not** treated as new findings. They are baseline-window claims
already carried on the OpenClaw profile.

The broad framing of "unified Local-first Gateway architecture" that
appeared in early review notes is also rejected: the release notes
support narrower operator-facing changes, not a wholesale architecture
re-statement.

## Open Questions

- The release notes mark some items `[AI]` (memory-wiki PRs). What is
  OpenClaw's policy for AI-authored change handling, and are these
  changes subject to the same review gate as human PRs?
- "Canonical channel-scoped sender keys" are referenced but not formally
  documented in the release notes themselves. What is the key shape, and
  how do operators discover sender identities for a given channel?
- Memory-wiki "admin scope" and "write scope" are now referenced as
  distinct access tiers. Where is the scope hierarchy documented?
