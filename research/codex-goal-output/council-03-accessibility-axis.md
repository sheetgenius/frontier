# Council Dossier: macro_22b81466-b2b7-4ff2-94a8-b3aea28400cb

## Context
- question_source: file
- question_file: /Users/c3po/co/bitterfrontier/research/codex-goal-output/question-03-accessibility-axis.md
- cwd: /Users/c3po/co/bitterfrontier
- model_policy: {"codex_model":"gpt-5.5","codex_config":["reasoning_effort=high"],"synthesis_codex_model":"gpt-5.5","synthesis_codex_config":["reasoning_effort=high"],"claude_model":null,"gemini_model":null,"reviewers":["claude","codex","gemini"],"synthesizer":"codex","child_timeout_ms":900000}

## Question
# Council 03: keep accessibility from becoming a Platform-only afterthought

Context:

Bitter Frontier has a standing accessibility rule:

> No capability signal is complete until it names what got easier, who can use
> the tool now, and whether authority stayed visible.

The proposed three-section taxonomy says Accessibility is not a section; it is
a required axis on every signal. That is doctrinally attractive, but it creates
a risk: because many accessibility stories route to Platform, future digests
may treat accessibility as adoption polish instead of an operator consequence
that can also appear in Control Plane and Workcell.

Read:

- `/Users/c3po/co/bitterfrontier/CHARTER.md`
- `/Users/c3po/co/bitterfrontier/RESEARCH_CONTRACT.md`
- `/Users/c3po/co/bitterfrontier/AGENTS.md`
- `/Users/c3po/co/bitterfrontier/charter/proposed/amendment-004-establish-publication-sections.md`
- `/Users/c3po/co/bitterfrontier/content/digests/2026-05-12-weekly.md`
- `/Users/c3po/co/bitterfrontier/content/profiles/openclaw.md`
- `/Users/c3po/co/bitterfrontier/sources/openclaw.notes.md`

Answer:

1. Where is the current accessibility doctrine strongest?
2. Where is the proposed section taxonomy most likely to weaken it?
3. What is the smallest editorial or validation change that keeps
   accessibility cross-cutting without adding a fourth section?
4. What would an operator need to see in a digest or signal to know authority
   stayed visible?

Required output:

- strongest existing accessibility rule
- likely drift point
- recommended smallest implementation target
- one example of a Control Plane accessibility consequence
- one example of a Workcell accessibility consequence
- one example of a Platform accessibility consequence

End with:

## Smallest Implementation Target

One file-backed change, no app infrastructure.

## Research Outputs
- research_claude: ok -> child_runs/research_claude/output.jsonl
- research_codex: ok -> child_runs/research_codex/output.jsonl
- research_gemini: ok -> child_runs/research_gemini/output.jsonl

## Review Outputs
- review_claude: ok -> child_runs/review_claude/output.jsonl
- review_codex: ok -> child_runs/review_codex/output.jsonl
- review_gemini: ok -> child_runs/review_gemini/output.jsonl

## Synthesis
I’ll verify the doctrine and artifact claims against the local files, then synthesize a bounded target instead of choosing by consensus alone.The initial grep confirms the doctrine is explicit in the root files and that Amendment 004 already tries to route authority out of Platform Adoption. I’m reading the surrounding text now, plus the digest/profile evidence, to decide whether the smallest target should be schema, routing prose, or a validation check.The May 12 digest proves the current prose can cover authority well without making accessibility explicit: it has “Authority Made Visible” and “Default-Closed Governance,” but it does not force each promoted signal to say who can use the tool now. That weighs against a prose-only fix.The strongest existing accessibility rule is the triad itself: every capability signal must name “what got easier, who can use the tool now, and whether authority stayed visible” in [CHARTER.md](/Users/c3po/co/bitterfrontier/CHARTER.md:246), [RESEARCH_CONTRACT.md](/Users/c3po/co/bitterfrontier/RESEARCH_CONTRACT.md:21), and [AGENTS.md](/Users/c3po/co/bitterfrontier/AGENTS.md:35). It is strongest when paired with the scoring rule that accessibility is not polish and must not hide authority, credentials, evidence, or risk in [RESEARCH_CONTRACT.md](/Users/c3po/co/bitterfrontier/RESEARCH_CONTRACT.md:489).

The likely drift point is not the three-section taxonomy by itself. Amendment 004 correctly says accessibility, evidence, and authority stay required axes, not sections, and Rule 5 routes authority visibility out of Platform Adoption when needed. The weak point is artifact pressure: the new visible object is `section`, while current signal files usually carry only `accessibility_impact: medium|low|high`. That scalar does not force the triad. So future digests could satisfy the schema while treating accessibility as Platform Adoption polish.

I would reject two weak claims for target selection. First, “accessibility should become a fourth section” conflicts with the doctrine and would hide a cross-cutting requirement inside one lane. Second, “the current `accessibility_impact` field is enough” is contradicted by the current signal artifacts: they score impact but do not consistently name who can use the tool now or how authority stayed visible.

The smallest fix is a validation/editorial requirement on accepted signals: when `accessibility_impact` is not `none`, the signal must include an `accessibility_consequence` object with three short fields: `what_got_easier`, `who_can_use_now`, and `authority_visibility`. This keeps accessibility cross-cutting without adding a fourth section.

Examples:
- Control Plane: OpenClaw per-sender tool policies make public-facing chat deployments safer for mixed-trust users by scoping dangerous tools to channel-scoped sender identities; authority stays visible as `(channel x sender x agent)` policy rather than a vague global allowlist.
- Workcell: Agent Zero named desktop actions make real-computer work easier to audit because `cell_edit(B3, 42)` is inspectable and replayable in a way coordinate clicks are not.
- Platform Adoption: OpenClaw onboarding wayfinding makes first setup reachable for less terminal-native operators by telling them the next useful command, while the gateway and permission model remain explicit.

In a digest or signal, an operator needs to see the named authority surface, its default state, who controls it, what risky action is blocked or opt-in, and where the receipt lives. “Easier setup” is not enough; the prose has to show whether the user gained access without losing sight of permissions, credentials, approvals, sandbox scope, or evidence.

## Smallest Implementation Target

Update `charter/proposed/amendment-004-establish-publication-sections.md` to require `accessibility_consequence: { what_got_easier, who_can_use_now, authority_visibility }` on every accepted signal with `accessibility_impact` above `none`, and add a QA failure note for signals that only provide the scalar.

## Use
- Treat this dossier as research input, not authority by itself.
- Source-check accepted and rejected claims before launching a worker.

## CLI Ergonomics Observations From This Run

- The fixed implicit `bitter macro tail <id>` waited for actual output and
  attached directly to `research_codex`; the empty-header issue from Council 01
  did not recur.
- `bitter macro progress <id>` was still the fastest way to understand phase
  state: it showed research output volume, then review and synthesis without
  inspecting JSON.
- Delta counts and approximate output tokens were good enough for orientation,
  but they do not expose cost or input tokens. Budget awareness remains a
  deferred ergonomics gap from the seed journal.
