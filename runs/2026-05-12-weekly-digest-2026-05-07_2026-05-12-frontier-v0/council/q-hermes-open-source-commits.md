# Council Pressure-Test: Hermes Agent Profile

**Surface class under review**: `open_source_commits`
**Profile**: `content/profiles/hermes-agent.md`
**Evidence floor**: `release_note`

## Research Question

You are reviewing the Hermes Agent profile (reproduced below) as part of a
quality-assurance pass for Bitter Frontier's autonomous research loop. The
profile watches Hermes Agent (Nous Research), an open-source self-improving
personal agent platform.

Your job is to pressure-test the profile. Be specific, critical, and
constructive. The profile should be held to these standards:

1. Every concrete claim in prose must be supported by an inline source link.
2. Claims backed only by release notes (not commit diff reviews) are acceptable
   for `evidence_floor: release_note`, but should not overstate what a release
   note actually confirms.
3. Posture sections may interpret freely but must cite finding IDs when naming
   specific features or behavior changes.
4. The accessibility and governance lenses should distinguish what is
   currently observable from what is speculative.

## Specific Questions

1. **Hallucination gate claim**: The profile claims the Kanban board has "a
   hallucination gate that verifies worker-created card claims before accepting
   them as complete." Is this claim well-supported by release-note-level
   evidence? Does a release note confirm the gate's mechanism, or only that
   it exists? Is the framing ("hallucination gate") the author's
   interpretation of a more mundane feature?

2. **Governance posture**: The governance lens characterizes Hermes as building
   "active defaults rather than opt-in safety." Is this characterization
   accurate across the cited findings? Are there counter-examples where Hermes
   chose opt-in rather than active defaults?

3. **Evidence floor fit**: The profile uses `evidence_floor: release_note`
   despite having `surface_class: open_source_commits`. The RESEARCH_CONTRACT
   says "the floor should match the strictest precision the source can be
   reasonably harvested at." Is `release_note` an acceptable floor for a
   high-volume open-source project with 864 commits in a single release, or
   is there a case for requiring commit-level evidence for specific claims?

4. **Gap in accessibility lens**: The profile notes that "initial configuration
   complexity" is the accessibility gap. Is this gap adequately characterized?
   What would a less-expert operator actually struggle with that the profile
   doesn't capture?

5. **Open questions quality**: Review the five open questions at the end of the
   profile. Are these the right questions? Are any answerable from currently
   available public sources? Are any missing questions more important than
   those listed?

## Profile Text

---

```
schema_version: bitter.frontier_profile.v0
profile_id: hermes-agent
label: Hermes Agent
owner: Nous Research
source_contract: sources/hermes-agent.yml
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-05-12
claims:
  - id: curator-autonomous-skill-maintenance
    finding_id: 2026-05-06-hermes-curator-and-service-surfaces
    last_verified: 2026-05-06
    status: active
  - id: self-improvement-loop-background-review
    finding_id: 2026-05-06-hermes-curator-and-service-surfaces
    last_verified: 2026-05-06
    status: active
  - id: gateway-service-restart-readiness
    finding_id: 2026-05-07-hermes-gateways-skills-and-service-operation
    last_verified: 2026-05-07
    status: active
  - id: long-term-memory-session-key
    finding_id: 2026-05-07-hermes-gateways-skills-and-service-operation
    last_verified: 2026-05-07
    status: active
  - id: pluggable-model-provider-modules
    finding_id: 2026-05-07-hermes-gateways-skills-and-service-operation
    last_verified: 2026-05-07
    status: active
  - id: kanban-durable-multiagent
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-05-12
    status: active
  - id: goal-persistent-cross-turn
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-05-12
    status: active
  - id: security-redaction-on-by-default
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-05-12
    status: active
  - id: platform-channel-allowlists
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-05-12
    status: active
```

### Selected Prose (Governance Lens)

> Hermes' governance trajectory is becoming clearer: active defaults rather
> than opt-in safety. Secret redaction on by default, WhatsApp stranger
> rejection on by default, channel allowlists as a first-class operator
> configuration, cron prompt-injection scanning before execution. These are
> not feature additions; they are posture decisions about where safety should
> sit in the default configuration.
>
> The Kanban hallucination gate is the governance centerpiece: it makes
> evidence a precondition for state transitions in multi-agent work. Hermes is
> building its own receipt infrastructure, internally.

### Selected Prose (Capability Lens)

> The Kanban hallucination gate is the clearest example of the convergence: it
> enforces that a worker's claimed completion is verified before a state
> transition. This is "evidence required before state change" as a platform
> primitive. Hermes is building the receipt infrastructure that governs its
> own multi-agent work.

---

Please assess the profile and answer the five questions above. Focus on
evidence discipline, characterization accuracy, and gaps. Concrete
suggestions for improving specific claims are welcome.
