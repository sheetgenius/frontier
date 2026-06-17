---
schema_version: bitter.frontier_charter_amendment.v0
amendment_id: 007
title: "security_advisory deployment-class scope — required sub-fields so advisory-shaped signals name affected operators precisely"
status: proposed
proposed: 2026-05-30
ratified: null
rejected: null
applied_in_commit: null
proposed_by: autonomous-loop (claude-opus-4-7, surfaced by Codex xhigh external-review council on hermes-agent profile 2026-05-29)
supersedes: []
superseded_by: null
---

# Amendment 007: `security_advisory` deployment-class scoping

## Summary

Amendment 005 introduced the `security_advisory: true` flag on signals
under the definition:

> Left unaddressed, this defect can be exploited; upgrade before the
> next deployment of this surface.

The 2026-05-29 external-review council on the `hermes-agent` profile
pressure-tested this definition against the
`2026-05-27-hermes-honcho-identity-and-credential-isolation` signal.
The verdict was *partial* — Honcho identity isolation does qualify as
upgrade-blocking, **but only for the scoped deployment class**:
multi-user gateways using shared threads and provider fallback. The
signal's existing prose already scopes the action to that operator
class, but the schema does not — `security_advisory: true` is a flat
boolean that could be read as "upgrade Hermes before any deployment,"
which over-claims.

The doctrine gap: `security_advisory: true` lacks required fields for
*who is affected* and *what condition must hold for exploitation to be
possible*. Without them, the flag stretches between "global upgrade
imperative" (over-claim) and "narrow operator-class warning" (intended
meaning).

This amendment adds two required sub-fields to
`security_advisory: true` signals:

- `affected_deployment_class:` — short prose naming the operator class
  for which the advisory applies. The convention is one or two
  sentences of operational shape, not a generic CVE-style impact
  metric.
- `exploit_precondition:` — short prose naming the conditions under
  which the defect can actually be exploited. If exploitation requires
  specific configuration, traffic shape, or operator role, this field
  names them.

`security_advisory: false` signals are unaffected; the new fields are
required only when the flag is `true`.

## Why

The Honcho case is not isolated. Looking back at prior
`security_advisory: true` candidates and the discipline question the
council surfaced, three patterns appear:

1. **Multi-tenant-only advisories.** Honcho identity isolation only
   matters if the deployment routes multiple users through shared
   threads. A single-user Hermes install is not exposed. Without
   `affected_deployment_class:`, the flag reads as universally
   upgrade-blocking and triggers unnecessary churn for operators who
   are not actually exposed.

2. **Configuration-conditional advisories.** A defect that only
   triggers under a non-default configuration (e.g., a CORS policy
   that's only exploitable when an admin enables wildcard origins)
   should name that configuration. `exploit_precondition:` carries
   that distinction.

3. **Role-conditional advisories.** Some defects are exploitable only
   by an operator class that already has elevated privileges. The
   advisory still matters — privilege escalation paths are real — but
   the precondition is load-bearing for operator triage.

The reader who lands on a `security_advisory: true` signal needs to
know in three sentences: *am I exposed, when, and what changes if I'm
not?* The current flat boolean cannot answer those questions; the new
fields do.

## The schema change

Amendment 005's signal grammar grows two required sub-fields when
`security_advisory: true`. The existing `security_consequence` block
already carries `threat_blocked_or_opened`, `attacker_model`,
`enforcement`, `cost_to_operator`, and `residual`. The new fields
extend that block:

```yaml
security_change: closes | opens | tightens | loosens | no_change
security_advisory: true                          # existing field
security_consequence:
  threat_blocked_or_opened: <prose>              # existing
  attacker_model: <prose>                        # existing
  enforcement: <runtime | static | both>         # existing
  cost_to_operator: <prose>                      # existing
  residual: <prose>                              # existing
  affected_deployment_class: <prose>             # NEW, required when security_advisory: true
  exploit_precondition: <prose>                  # NEW, required when security_advisory: true
```

The new fields are *prose, not enums*. Enumerations would force a
premature taxonomy on a small population (current corpus has one
`security_advisory: true` signal). The prose constraint is one or two
sentences; the discipline is the same as the existing
`why_action_bearing` constraint: name the operator-side reality, not a
generic category.

### Integrity check semantics

The integrity checker grows one validation:

- **`security_advisory: true` requires both new fields.** A signal
  with `security_advisory: true` but missing
  `affected_deployment_class:` or `exploit_precondition:` (or with
  either field empty) fails QA. The check is symmetric to the existing
  required-fields discipline elsewhere in the signal schema.

The check code change is small (~10 lines): one new conditional in
the existing signal-schema validation block in
`site/scripts/check-integrity.mjs`.

### Rendering semantics (post-ratification)

The signal page's existing "Signal metadata" or "Security
consequence" rendering grows to display the two new fields when
present. The exact placement is a small Astro change; the data flow
is identical to the existing `security_consequence` rendering.

Signal cards do not render either field by default — the operator-class
nuance belongs on the signal page, not on the index. A `security_advisory: true`
chip on the card may still be useful as a visual marker; this
amendment does not require it.

## Applied To (ratification work)

When this amendment is ratified:

1. Move this file from `charter/proposed/` to `charter/ratified/`.
2. Update `RESEARCH_CONTRACT.md` Signal section to name the two new
   required fields under `security_consequence` when `security_advisory: true`.
3. Update `site/scripts/check-integrity.mjs` to enforce the
   conditional required-fields validation.
4. Retroactively populate the two new fields on the one existing
   `security_advisory: true` signal —
   `2026-05-27-hermes-honcho-identity-and-credential-isolation` — using
   the language the external-review council already surfaced:
   - `affected_deployment_class:` "Multi-user Hermes gateways routing
     multiple operators through shared agent threads, with provider
     fallback enabled."
   - `exploit_precondition:` "Pre-Honcho identity-mapping commits
     allow agent cache signatures to be shared across users routed
     through the same thread, enabling peer contamination. Provider
     fallback events can additionally leak credentials between
     pooled providers prior to commit `2e181602`."
5. Run integrity checker after the retroactive edit to confirm the
   signal validates under the new shape.
6. Site rendering changes follow in a subsequent implementation pass.

## Ordering with amendment-005

Amendment 005 is already ratified. This amendment refines
amendment-005's `security_advisory` definition without changing the
flag's semantics. No re-ratification of amendment 005 is required;
this amendment cites amendment-005 as the parent and extends it.

## Rejection criteria

This amendment should be rejected if any of the following are true at
ratification time:

- The two new fields prove too prose-heavy and most advisories end up
  with `affected_deployment_class: "all operators"` and
  `exploit_precondition: "default configuration"`. If most signals
  populate the fields with no-op content, the rule is wrong — either
  the discipline should drop and the boolean flag stays as-is, or
  the fields should be enums after the corpus is larger.
- A future amendment proposes a CVSS-style structured impact metric
  that subsumes both fields. The structured metric, if it lands,
  should supersede this amendment cleanly.
- The corpus of `security_advisory: true` signals stays at one for
  another two cycles. If only the Honcho signal carries the flag,
  the cost of the doctrine change is not amortized; revisit then.

## Out of scope

- This amendment does not change the `security_advisory` flag's
  meaning. It refines what a `true` value commits the editor to
  specifying.
- This amendment does not introduce a `severity` field, a CVSS
  vector, or a numerical impact metric. Those are bigger structural
  decisions that warrant their own amendment.
- This amendment does not change rendering of
  `security_advisory: false` signals.
- This amendment does not address the discoverability question
  ("how does an operator find which advisories apply to their
  deployment class?"). That is a site UX question; this amendment
  authorizes the data the UX would render.

## Source

- External-review council pressure-test on the `hermes-agent`
  profile, 2026-05-29:
  `research/council-dossiers/2026-05-29-hermes-agent-profile-pressure-test.md`,
  Claim 3.
- The signal that exposed the gap:
  `2026-05-27-hermes-honcho-identity-and-credential-isolation` in
  `runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/signals/frontier-signals.yml`.
- Parent amendment:
  `charter/ratified/amendment-005-finding-signal-granularity.md`,
  which introduced the `security_advisory` flag without sub-fields.

## Revisions

- 2026-05-30: initial proposal.
