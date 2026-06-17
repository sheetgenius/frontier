---
schema_version: bitter.frontier_council_dossier.v0
dossier_id: 2026-05-27-amendment-005-edge-cases
reviewer: independent-council (claude-opus-4-7, edge-cases-and-practical-robustness angle)
amendment_under_review: charter/proposed/amendment-005-finding-signal-granularity.md
posture: skeptical, source-grounded
date: 2026-05-27
status: draft
---

# Council Review: Amendment 005 — Finding/Signal Granularity (Edge-Cases Angle)

## Posture

I am reviewing amendment 005 from the angle of practical robustness: under
real usage in the existing repo, what shapes of source events would break
the granularity rule, where will the "more than three items in
`why_action_bearing` → split" heuristic fire arbitrarily, and what edge
cases does the amendment fail to address.

I evaluate the rule mechanically against every finding/signal pair in
the current run
(`runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/`) and
both pairs from the prior partial cycles.

## Section 1 — Mechanical rule application to existing pairs

The rule has two operative tests:

- **A1**: signal must be operator-consequence-shaped (one operator
  decision → one signal).
- **A2**: `why_action_bearing > 3 items → consider splitting` (heuristic).

I record, for each of the 13 finding/signal pairs in the repo, (a) the
`why_action_bearing` count, (b) whether the rule says split or stay,
(c) my opinion on whether that recommendation is meaningful or arbitrary.

### Current run (2026-05-27 weekly digest, 11 pairs)

#### 1. `2026-05-27-claude-code-auto-mode-default-on`

- `why_action_bearing`: **4 items** (lines 13–24 of
  `signals/frontier-signals.yml`).
- A2 triggers: yes. Rule says split.
- Items: (1) managed-deployment re-audit, (2) admin loss of consent
  surface, (3) skill-author `disallowed-tools` evaluation, (4)
  hook-author `MessageDisplay` evaluation.
- Verdict: **arbitrary split**. (1) and (2) are the *same* operator
  consequence ("Auto mode default-on changes posture") seen from two
  sides — admin and operator. (3) and (4) are downstream
  builder/author follow-ons to a feature that shipped *in the same
  release as* the Auto-mode flip (`disallowed-tools`, `MessageDisplay`),
  not separate operator decisions. The finding actually contains three
  changes (Auto mode default, `disallowed-tools`, `MessageDisplay`); a
  decomposition by A1 would produce three signals, but only the
  Auto-mode signal carries operator-consequence weight. Splitting would
  fragment a coherent posture story.

#### 2. `2026-05-27-claude-code-powershell-and-worktree-sandbox-fixes`

- `why_action_bearing`: **3 items**.
- A2 triggers: no.
- A1 question: this finding bundles three distinct CVE-shaped fixes
  (PowerShell `cd` bypass, worktree allowlist over-scoping, enterprise
  login pinning). Each is a different attacker model. By A1, this
  *should* split into three signals.
- Verdict: **the rule is unstable here**. A2 says stay; A1 says split.
  The current author chose one signal because the operator action is
  identical ("upgrade past 2.1.149+"). A1's "operator decision" is
  ambiguous — is the decision "which fix do I care about?" or "do I
  upgrade?" The amendment does not define the decision granularity.

#### 3. `2026-05-27-codex-goal-mode-graduated-and-remote-computer-use`

- `why_action_bearing`: **3 items**.
- A2 triggers: no.
- A1 question: finding bundles goal-mode default-on, remote computer
  use after lock, and plugin-marketplace sharing. These are three
  distinct authority decisions. By A1, three signals. The amendment's
  worked example (Hermes) suggests this is exactly the shape it wants
  to split.
- Verdict: **A2 hides what A1 demands**. The current author already
  condensed three operator consequences into three bullets. Three
  bullets ≤ 3, so A2 lets it pass — but a strict A1 reader would split.

#### 4. `2026-05-27-codex-permission-profile-inheritance-and-managed-requirements`

- `why_action_bearing`: **4 items**.
- A2 triggers: yes.
- Items: (1) restructure policy with inheritance, (2) decide where
  `requirements.toml` lives, (3) migrate off legacy profile configs,
  (4) normalize on `--profile` canonical handle.
- Verdict: **arbitrary split**. (1) and (2) are sub-decisions inside
  "adopt the new managed-permission model." (3) and (4) are migration
  consequences of (1)/(2). Splitting into four signals — or even two —
  would fragment a single coherent migration story.

#### 5. `2026-05-27-gemini-session-invocation-protocols-stable`

- `why_action_bearing`: **3 items**.
- A2 triggers: no.
- A1: arguably one consequence (a stable protocol to integrate
  against). 1-to-1 is fine.
- Verdict: **clean 1-to-1**.

#### 6. `2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp`

- `why_action_bearing`: **3 items**.
- A2 triggers: no.
- A1 question: three changes (Auto-mode merger, `AUTO_EDIT`
  shell-redirect, PolicyEngine-in-ACP). Each is a distinct operator
  decision with different attacker models. By A1, this should split
  into three signals.
- Verdict: **A2 lets a composite pass under the wire**. The author
  already condensed; the rule does not catch what it is meant to catch.

#### 7. `2026-05-27-openhands-acp-ui-and-org-llm-profiles`

- `why_action_bearing`: **4 items**.
- A2 triggers: yes.
- Items: (1) ACP back-end evaluation, (2) MCP env scoping fix audit,
  (3) org-level LLM profile as canonical, (4) main-branch-only
  caveat.
- Verdict: **A2 fires but the decomposition is questionable**. (1)
  is a forward-evaluation decision; (2) is a security advisory (rotate
  credentials); (3) is a policy posture decision; (4) is a release-
  cadence note, not an action. A1 would say (2) is its own signal
  (different attacker model: org-internal observer, distinct upgrade
  imperative). The repo's *existing* practice for that shape is the
  `security_advisory: true` flag, not signal multiplication. Splitting
  here means duplicating the same advisory pattern into the signal
  graph that `security_advisory:` already carries.

#### 8. `2026-05-27-agent-zero-host-desktop-with-vision-verification`

- `why_action_bearing`: **3 items**.
- A2 triggers: no.
- A1: one major capability change (`computer_use_remote` host
  desktop) plus two corollary operator implications (ephemeral
  capture default, host/container desktop routing). One operator
  decision is dominant; the others are conditions on it.
- Verdict: **clean 1-to-1**.

#### 9. `2026-05-27-openclaw-content-boundary-hardening-suite`

- `why_action_bearing`: **3 items**.
- A2 triggers: no.
- A1 question: the finding lists *eight* distinct PR/feature changes
  (SSRF, sanitization, `allowFrom`, RPC rejection, tool-call scrub,
  memory store filter, rate limiter, content wrapping). The signal
  condenses to three operator implications. Under a strict A1 read,
  this could split into 3+ signals (one per major attacker model:
  SSRF / prompt-marker spoofing / inbound sender authority / rate-
  limit observability change). But the operator-facing "treat this as
  a threat-model suite" framing argues for a single signal.
- Verdict: **the suite is the signal**. Strict A1 would over-split a
  legitimately suite-shaped consequence.

#### 10. `2026-05-27-hermes-v0.14.0-foundation-release` (the canonical example)

- `why_action_bearing`: **4 items**.
- A2 triggers: yes.
- Items: (1) PyPI/Windows re-evaluation, (2) `hermes proxy`
  bind/auth audit, (3) Honcho + credential-pool upgrade gate, (4)
  Kanban corruption hardening baseline.
- Verdict: **the rule does what the amendment claims here**. (1) is
  adoption/distribution; (2) is a new attack surface to audit; (3) is
  an upgrade-before-deploy gate; (4) is a reliability-floor
  declaration. Four genuinely distinct decisions. This is the cleanest
  case where decomposition produces meaningfully separable signal
  pages. The amendment's worked example holds for itself.

#### 11. `2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets`

- `why_action_bearing`: **4 items**.
- A2 triggers: yes.
- Items: (1) multi-agent authz re-evaluation, (2) routine env
  secret precedence reading, (3) approval-discipline migration to
  document locks, (4) ACPX-Claude `~/.claude/settings.json`
  confirmation.
- Verdict: **mixed**. (1)–(3) are three structurally distinct authz
  surfaces (assignment, secrets, document state); A1 splits cleanly.
  (4) is a cross-product composition concern — separate enough to be
  its own signal, but the amendment hasn't defined how
  composition-question signals (different shape than feature signals)
  should be carried. This is the second-cleanest case for the rule.

### Partial cycle (2026-05-12)

#### 12. `2026-05-12-claude-code-agent-view-goal-and-governance`

- `why_action_bearing`: **5 items** (the highest count in the repo).
- A2 triggers: yes, strongly.
- Items: (1) `claude agents` supervisor surface, (2) `/goal` testing,
  (3) `continueOnBlock` hook redesign, (4) subagent attribution
  headers, (5) API key boundary audit.
- A1 read: these are five genuinely distinct operator consequences
  bundled into one signal because they all shipped in the same
  v2.1.139 release window. Of all 13 signals, this is the most
  textbook "composite finding → composite signal" failure mode the
  amendment is targeting.
- Verdict: **the rule fires correctly and the split would help**. If
  the digest reader wanted to follow up on `/goal` versus subagent
  attribution headers, they are very different operator actions for
  very different operator personas (a long-horizon orchestrator vs.
  an observability engineer wiring API logs). The current 1-to-1
  shape obscures that separation. **This pair, more than the Hermes
  example, is the strongest evidence for the rule.**

#### 13. `2026-05-12-openhands-subagent-delegation-and-critic-evaluation`

- `why_action_bearing`: **3 items**.
- A2 triggers: no.
- A1 question: two distinct features (sub-agent delegation, critic
  evaluation GUI). Different feature gates (`enable_sub_agents` vs.
  `OH_ENABLE_CRITIC_BY_DEFAULT`). Different operator personas.
- Verdict: **A2 misses a real composite**. By A1, two signals;
  bundling them is the same shape A1 says is wrong. A2's threshold
  hides it because the author condensed.

### Summary table

| # | pair | wab | A2 fires? | A1 says split? | meaningful? |
|---|---|---|---|---|---|
| 1 | claude-code-auto-mode | 4 | yes | maybe (2–3) | **no** (arbitrary) |
| 2 | claude-code-sandbox-fixes | 3 | no | yes (3) | rule unstable |
| 3 | codex-goal-and-rcu | 3 | no | yes (3) | A2 misses it |
| 4 | codex-permission-profile | 4 | yes | no | **no** (arbitrary) |
| 5 | gemini-session-invocation | 3 | no | no | clean 1-to-1 |
| 6 | gemini-auto-and-pe-acp | 3 | no | yes (3) | A2 misses it |
| 7 | openhands-acp-ui | 4 | yes | partial (2) | partial |
| 8 | agent-zero-host-desktop | 3 | no | no | clean 1-to-1 |
| 9 | openclaw-content-suite | 3 | no | yes (3+) | suite-shaped, A1 over-splits |
| 10 | hermes-v0.14.0 | 4 | yes | yes (3–4) | **yes** (canonical) |
| 11 | paperclip-scoped-perms | 4 | yes | yes (3) | **yes** |
| 12 | claude-code-agent-view (older) | 5 | yes | yes (4–5) | **yes** (strongest) |
| 13 | openhands-subagent-critic (older) | 3 | no | yes (2) | A2 misses it |

**Tally**:

- A2 fires on 5/13 pairs. Of those, 3 are arbitrary (1, 4, 7-partial)
  and 3 are meaningful (10, 11, 12). The heuristic has roughly 50%
  precision for genuine composites.
- A2 *misses* genuine composites on 4 pairs (3, 6, 9-suite, 13) where
  the author already condensed enough to slip under the threshold.
  False-negative rate ≈ 30%.
- 2 pairs are clean 1-to-1 (5, 8).
- 2 pairs are genuinely ambiguous (2, 7) because A1's "operator
  decision" is undefined.

## Section 2 — Is the `> 3 items` threshold real or arbitrary?

It is arbitrary. The data from Section 1 shows the threshold has both
false positives (rule fires on item-count, not consequence-distinctness)
and false negatives (rule misses real composites because the author
already condensed).

The threshold conflates two different writing patterns:

- **Decomposed by consequence**: each bullet is a distinct operator
  decision. Bullet count ≈ consequence count.
- **Decomposed by persona**: each bullet is the same consequence as
  read by a different operator role (admin vs. user vs. skill author).
  Bullet count > consequence count.

The Hermes signal (pair 10) is "decomposed by consequence"; the Claude
Code Auto-mode signal (pair 1) is "decomposed by persona." A2 cannot
distinguish them. The amendment treats bullet count as a proxy for
consequence count; the data does not support that proxy.

## Section 3 — Codex 0.133.0 worked example (closely-related operator actions)

Q3 in the prompt: Codex 0.133.0 ships goal-mode-default-on,
remote-computer-use-after-lock, and plugin-marketplace-sharing in one
product launch. Under the rule, one signal or three?

The finding (`codex-goal-mode-graduated-and-remote-computer-use.md`)
already names "three concrete operator changes" in its body (lines
71–88). The signal (`codex-goal-mode-graduated-and-remote-computer-use`)
collapses them into three `why_action_bearing` bullets. A2 does not
fire (3 ≤ 3). A1, read strictly, says split.

This is the cleanest test case for the amendment: the finding itself
*spells out* three operator decisions. Yet the current signal author
decided one signal was the right unit. Why? Three reasons visible in
the artifact:

1. The three changes share an "upgrade decision" — they ship in the
   same release tag (CLI 0.133.0 + product 26.519).
2. The three operator implications interlock: the inheritance feature
   (in the sibling signal `codex-permission-profile-inheritance`) is
   the right tool *because of* goal-mode default-on.
3. Splitting into three would force three separate
   `accessibility_consequence` and `security_consequence` blocks
   covering overlapping ground (the same authority story applied to
   three feature manifestations).

This is the case the amendment's rejection criterion #1 names: "signal
pages fragment information operators would prefer to read in one
place." The amendment offers no test for when interlock dominates.

## Section 4 — Cluster-of-fixes (PowerShell + worktree + login pinning)

Q4 in the prompt:
`2026-05-27-claude-code-powershell-and-worktree-sandbox-fixes` bundles
three sandbox/auth fixes across 2.1.147–2.1.149 as one signal. Under the
rule, does it stay or split?

A2 does not fire (3 items). A1 is ambiguous:

- If the operator decision is "do I upgrade?" → one signal (the
  current shape).
- If the operator decision is "which fix matters to my deployment?"
  → three signals (PowerShell-allowlist users, worktree users,
  enterprise-login-pinning users have disjoint upgrade impact).

The signal already uses `security_advisory: true` and lists three
distinct closure categories in `threat_blocked_or_opened`. The advisory
flag is doing the "this is a composite" work that A1 would otherwise
demand splitting for.

**Edge case the amendment does not address**: when
`security_advisory: true` is set, the signal is already a composite-by-
design (the advisory is the unifying action, regardless of how many
fixes it bundles). Should `security_advisory: true` exempt a signal
from A1, or does A1 still apply? The amendment is silent.

My read: advisory-flagged signals should be exempt from A1
decomposition because the advisory frame *is* the operator
consequence. The amendment should say so.

## Section 5 — Findings that name no consequence (refresh / accumulation)

Q5 in the prompt: what about findings that don't promote to signal?

The current repo has *zero* such findings — all 11 findings in the
2026-05-27 run have `status: accepted_signal`. The integrity checker
does not actually enforce a finding ↔ signal relationship in either
direction (see Section 6); orphan findings are allowed.

The amendment is silent on findings that don't promote. Edge cases
where this matters:

- **Refresh findings**: a finding whose only job is to refresh a
  profile claim's `last_verified` without changing operator behavior.
  These should not promote to signal under existing doctrine (`signals
  should be rarer than findings`, RESEARCH_CONTRACT.md line 96). The
  amendment's "signals must be operator-consequence-shaped" is
  consistent with not promoting them.
- **Accumulation-of-changes findings**: a finding that aggregates
  multiple small in-window changes that individually don't move
  operator behavior but collectively might. Under A1 ("one operator
  consequence, one signal"), if the aggregate has *no* concrete
  consequence, no signal is correct. If the aggregate has *one*
  consequence (e.g., "watch this provider's velocity"), one signal.
- **Composite finding where the operator consequence is "no
  action"**: A1 says no signal. But the current run has no examples.

Edge case the amendment does not address: **what is the canonical
shape for a finding whose only purpose is to refresh a stale claim?**
The 2026-05-12 partial cycles all promoted. The amendment should
acknowledge that release-shaped findings can have zero accepted
signals, and the finding still has work to do (profile refresh).

## Section 6 — Integrity-checker behavior

Q6 in the prompt: should the integrity check enforce "no orphan
findings"?

Inspecting `site/scripts/check-integrity.mjs`:

- Line 47–72: collects findings by `finding_id`.
- Line 104–127: collects signals' `finding_ids[]` arrays.
- Line 182–196: validates that every `finding_ids[]` reference in a
  signal resolves to a known finding. **Direction: signal → finding.**
- No reverse check. A finding with no signal referencing it is allowed.

The 1-to-N pattern (one finding → N signals) the amendment proposes
works under the existing checker because each of the N signals
independently points to the same `finding_id`. No code change needed.

But the amendment does not address the integrity question that does
become live under 1-to-N: **what prevents an orphan finding?** Under
the current contract, orphan findings are tolerated because findings
can be sub-signal (refresh, accumulation, observation-only). Under
amendment 005, an explicit category emerges:

- 1-finding → 0-signals: a finding that didn't earn a signal.
  Existing doctrine allows.
- 1-finding → 1-signal: the canonical pair.
- 1-finding → N-signals: the new canonical shape for composite source
  events.
- N-findings → 1-signal: already supported by `finding_ids: [...]`
  multiplicity but not exercised in the repo.

The integrity checker validates pointers, not graph shape. The
amendment should be explicit that 1-finding → 0-signals remains
permitted, and that N-findings → 1-signal is also permitted (cross-
finding synthesis at signal time). Neither needs new code, but the
charter language should not foreclose them.

**Specific gap**: nothing prevents two signals with conflicting
`section` or `security_change` from referencing the same finding.
Under A1, two signals from one finding should agree on the finding's
factual content but may disagree on `section` and `_change` (different
consequences live in different sections — exactly what the amendment
enables). The integrity checker has no opinion. That is the right
default, but the amendment should note it as an explicit allowance.

## Section 7 — Edge cases the amendment does not address

Beyond what's been pointed out in sections above:

1. **Signal naming under 1-to-N**: the amendment's worked example
   gives different signal IDs (`hermes-pypi-distribution-and-windows-
   beta`, `hermes-proxy-credential-router`, etc.) from the finding
   ID (`hermes-v0.14.0-foundation-release`). The site's URL routing
   (`/signals/<id>/`) becomes a navigation question: should signals
   share a common prefix when they share a finding? Should the
   digest's `top_signal_ids` ordering reveal sibling-ness? The
   amendment does not address.

2. **Decomposition by persona vs. by consequence**: as shown in
   Section 2, A2 cannot distinguish these patterns. The amendment
   needs a definition of "operator consequence" that excludes
   "same consequence, different persona."

3. **Cross-finding synthesis at signal time**: nothing in the
   amendment prevents one signal from `finding_ids: [a, b, c]`
   (synthesizing three findings into one operator consequence).
   This is the inverse of the proposed pattern. The amendment's
   "one operator consequence, one signal" allows it; the prose
   doesn't address it. Codex profile-inheritance + Gemini PolicyEngine
   is a real example of this shape pending in the next cycle.

4. **What happens when an N-signal decomposition is partially
   security-advisory?** If the Hermes Honcho fix is `security_advisory:
   true` but the PyPI distribution signal is not, the digest's
   conditional Security Advisories sub-section now needs to handle the
   case where only one of N sibling signals carries the flag. The
   digest assembly doctrine isn't part of this amendment but is
   affected by it.

5. **What about findings whose source event is itself a graph?** E.g.,
   "Codex CLI 0.133.0 + Codex product 26.519" — two source events that
   shipped on the same day and that interlock. The current finding
   handles this with a single `versions_covered` field. Under A1, the
   signal could split by source event *or* by consequence. The
   amendment picks consequence; the contract should be explicit that
   `versions_covered` may span source events.

6. **Retroactive decomposition cost**: section "Applied To" item 5
   says ratification will retroactively split the Hermes signal. That
   is one signal. If the rule applies retroactively across the repo,
   the work is larger: by Section 1, pairs 10, 11, 12 all need
   splitting; pairs 1, 4, 7 should be left alone (arbitrary split) but
   A2 fires on them. The amendment's "Applied To" is silent on the
   broader retroactive sweep.

## Section 8 — Counter-proposal sketches

If the council decides A2 is too noisy, a sharper test would be:

> **A2'**: A signal should split if its `why_action_bearing` items
> describe *more than one operator action verb* that targets *more
> than one operator persona*. Multiple bullets describing the same
> verb-for-the-same-persona stay as one signal; multiple verbs across
> multiple personas split.

Under A2', the false-positives in Section 1 (pairs 1, 4, 7) shrink:

- Pair 1: all four bullets share the verb "re-audit / evaluate" for
  one persona class (Claude Code operator/admin). Stay.
- Pair 4: all four bullets share "migrate / restructure" for the
  Codex enterprise admin. Stay.
- Pair 7: two verbs ("evaluate," "audit") across two personas
  (multi-agent shell evaluator, multi-tenant SaaS operator). Split
  along the security-advisory line.

And the false-negatives (pairs 3, 6, 13) get caught:

- Pair 3: three verbs across three personas (goal-mode operators,
  remote-after-lock evaluators, plugin-marketplace evaluators). Split.
- Pair 6: three verbs across three personas. Split.
- Pair 13: two distinct features for two operator personas. Split.

A2' is more accurate but less mechanical — it requires the author to
identify verbs and personas. A2 is more mechanical but less accurate.
The amendment chose mechanical; the data argues for accurate.

## Section 9 — What I would accept, change, reject

**Accept**:

- The fundamental distinction (findings = source-shaped, signals =
  operator-consequence-shaped) is correct and load-bearing.
- The 1-finding → N-signals reference pattern is sound and works in
  the existing schema.
- The Hermes worked example (pair 10) and the older Claude Code
  agent-view pair (pair 12) are real, source-grounded evidence of the
  problem the amendment solves.

**Change**:

- Replace the `> 3 items` heuristic with a more accurate test
  (sketch in Section 8) or move it from "rule" to "smell" in the
  prose: "if more than three items, look for verb/persona
  multiplicity."
- Define "operator consequence" precisely enough to distinguish
  by-persona condensation from by-consequence decomposition.
- Acknowledge the `security_advisory: true` exemption (Section 4):
  composite advisory signals are operator-consequence-shaped at the
  advisory level.
- Add an explicit note that 1-finding → 0-signals remains permitted
  (Section 5) and that N-findings → 1-signal is also valid (Section 7
  item 3).
- Address signal-naming convention under 1-to-N (Section 7 item 1).
- Apply the rule retroactively as the amendment proposes for Hermes
  *only*, not as a broader sweep. Mark Section 1's "yes" cases (10,
  11, 12) as candidates for the next editorial pass with explicit
  per-pair audit notes — not silent rewrites.

**Reject**:

- The `> 3 items` threshold as a primary rule. It fires arbitrarily
  on 3/5 of the cases where it fires in the current repo and misses
  4/13 of the genuine composites. The data does not support its
  precision.

## Recommendation

`ratify-with-revisions`

Revisions required before ratification:

1. **Replace `why_action_bearing > 3 items → split` with a verb/persona
   multiplicity test** (Section 8 sketch). Keep `> 3 items` as a
   smell-test, not the rule.
2. **Define "operator consequence"** precisely enough to distinguish
   by-persona condensation (one consequence, multiple personas) from
   by-consequence decomposition (multiple consequences). The
   amendment's "one operator action" needs to be one action *verb*
   targeting one operator *persona class*.
3. **Add an explicit exemption for `security_advisory: true` signals**:
   advisory frame *is* the consequence; advisory signals do not
   decompose by sub-fix.
4. **Acknowledge in prose** that 1-finding → 0-signals remains valid
   (refresh / accumulation findings) and that N-findings → 1-signal
   is also valid (cross-finding synthesis).
5. **Add a signal-naming convention** for 1-to-N siblings: shared
   prefix from the finding ID, distinct suffix per consequence
   (consistent with the worked example but currently inferred, not
   stated).
6. **Narrow the retroactive scope**: ratification rewrites the Hermes
   signal only. Other current-run signals (pairs 11, 12) get audit-
   note flags as candidates for the next editorial pass, not
   in-ratification rewrites. Pairs 1, 4, 7 (A2 fires but A1 says
   stay) get explicit "exempt from decomposition" notes so the rule
   is not retroactively misapplied.
7. **Address the integrity checker explicitly**: document that the
   existing pointer check supports the new pattern without code
   change, and decide whether orphan findings (1 → 0) need a soft
   warning. My recommendation: no — keep the checker silent on graph
   shape; let editorial judgment handle it.

With these revisions, the amendment becomes a sharper tool than its
current form and does not produce arbitrary splits on roughly half of
the current repo's signals. Without them, ratifying as-is will create
a doctrine that fires noisily on the next 5+ weekly digests and erode
faith in the heuristic.
