---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-27-claude-code-auto-mode-default-on
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-13
  end: 2026-05-27
versions_covered: "2.1.141..2.1.152"
status: accepted_signal
confidence: high
accessibility_impact: high
operator_relevance: high
bitter_relevance: high
factory_relevance: medium
actionability: upgrade
evidence:
  - label: "v2.1.152 changelog: Auto mode no longer requires opt-in consent (2026-05-27)"
    url: https://code.claude.com/docs/en/changelog#2-1-152
    precision: release_note
  - label: "v2.1.136 changelog: settings.autoMode.hard_deny (prior context, pre-window)"
    url: https://code.claude.com/docs/en/changelog#2-1-136
    precision: release_note
---

# Claude Code: Auto Mode Becomes the Default Permission Posture

## What Changed

In [v2.1.152](https://code.claude.com/docs/en/changelog#2-1-152) (2026-05-27),
Claude Code flipped Auto mode from opt-in to default. Auto mode is the
permission-classifier feature that selectively runs safe actions without
prompting and blocks risky ones; previously, operators had to explicitly
consent to enabling it. Now it is the default permission posture across
the install base.

The same release adds two additional governance vectors: `disallowed-tools`
in skill and slash-command frontmatter (a skill can subtract tools from
the model while it is active), and a `MessageDisplay` hook event that can
transform or hide assistant message text as it is displayed. The
`continueOnBlock` PostToolUse hook (shipped earlier in the prior digest
window) makes blocks advisory; Auto mode now decides what gets blocked
by default.

## Why It Matters

The 2026-05-12 digest captured Auto mode's `hard_deny` (v2.1.136) as a
governance hardening. v2.1.152 reframes the whole feature: Auto mode is
no longer a thing operators choose to enable for productivity; it is
the new baseline, and the operator decision becomes whether to deviate
*from* it (via managed settings, allow/deny rules, hard_deny).

The accessibility win is real — installs that never enabled Auto mode now
get the productivity benefit without ceremony. The authority cost is also
real — the consent dialog was friction that some admins relied on as a
visible posture check. That friction is gone.

## Operator Implication

Anyone running pinned Claude Code with managed deployments must re-audit
what Auto mode now classifies as safe by default. Admins relying on the
consent dialog as a "did the operator confirm risky tool access?"
visibility point have lost that surface. Skill authors should evaluate
`disallowed-tools` for skills that should run with reduced surface.
Hook authors should consider whether `MessageDisplay` is a governance
gain (transform suspicious output) or a hazard (hide assistant
disclosures from the operator).

## Open

- The changelog entry does not enumerate what Auto mode currently
  classifies as "safe" by default. Anyone re-auditing managed settings
  needs to consult the runtime classification, not just the docs.
- `MessageDisplay` is a new hook event on the *output* path, not the
  tool path. Whether this is a redaction surface or a censorship surface
  depends on deployment intent and is not documented as a policy.
