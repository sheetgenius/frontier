# Council Dossier: Hermes Agent Profile (open_source_commits)

**Question file**: q-hermes-open-source-commits.md
**Council type**: council.research.v1
**Providers**: claude, codex, gemini (synthesis: codex)
**Date**: 2026-05-12

## Synthesis

The profile is directionally useful but needs a precision pass, not a rewrite.
The strongest disagreement resolves this way: PR #20232 proves "hallucination
gate" is a Hermes term and gives the real mechanism, so the "author-coined"
objection is too strong. But the profile still overstates the gate as general
"evidence required before state change" unless it narrows the claim to
worker-created card references.

1. **Hallucination gate**: release notes confirm the feature exists in
   v2026.5.7, but the mechanism is only clear in
   [PR #20232](https://github.com/NousResearch/hermes-agent/pull/20232). That
   PR says the kernel checks `created_cards` IDs, blocks phantom/cross-worker
   claims, records an audit event, and does only a non-blocking prose scan.
   So: supported as a narrow Kanban integrity gate; not supported as broad
   verification that task work is complete. The current profile link to
   [PR #17805](https://github.com/NousResearch/hermes-agent/pull/17805) is too
   blunt for the claim.

2. **Governance posture**: "active defaults" is partly accurate: redaction
   defaults on, WhatsApp rejects strangers by default, Discord DM role auth is
   fail-closed unless configured, and cron scans assembled prompt plus skill
   content at runtime. But "rather than opt-in safety" is too absolute.
   Channel allowlists are empty/no restriction until configured, and `no_agent`
   defaults false. Rewrite as: Hermes is moving sensitive security checks into
   defaults while leaving scope narrowing and automation modes
   operator-configured.

3. **Evidence floor**: `release_note` is acceptable as the profile floor.
   But mechanism claims should still cite merged PRs. Keep
   `evidence_floor: release_note`; require PR-level links for claims about
   gate behavior, redaction behavior, allowlist semantics, and cron scanning.

4. **Accessibility gap**: "initial configuration complexity" is true but vague.
   The gap should name inspection and recovery (platform IDs, allowlist
   semantics, config.yaml vs env vars, redacted-log debugging, worker
   recovery), not just configuration.

5. **Open questions**: The Kanban question is now partly answerable from
   PR #20232; update it to ask what the gate does NOT verify (result quality,
   false positives/negatives). The `enable_sub_agents` question is speculative
   and should be removed or moved to "What to Watch." Missing: which Hermes
   controls are default-on, fail-closed, empty/no restriction, or explicit
   opt-in?

## Smallest Implementation Target

Update `content/profiles/hermes-agent.md` to:
- Narrow the Kanban hallucination-gate language, cite PR #20232 directly
- Soften governance posture from "active defaults rather than opt-in safety"
- Replace the speculative `enable_sub_agents` open question with a
  default/opt-in governance map question
