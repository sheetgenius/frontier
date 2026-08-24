# Adjudication of the outside editorial review -- 2026-08-24

The editor commissioned an outside review of the published feature and asked
for a revision under our own judgment. Every factual claim in the review was
re-verified against the tree and primary docs before acceptance. This file is
the record.

## Claims verified TRUE (feature was wrong or overstated; revise + correct)

1. "Codex did not delete its entire rules system." CONFIRMED. At rust-v0.149.0
   codex-rs/execpolicy/src/decision.rs defines Decision::{Allow, Prompt,
   Forbidden} with doc comments; rule.rs carries full pattern-token matching;
   lib.rs exports PolicyParser, Policy, RequirementsExecPolicy, Rule. The
   feature's "the functions its API leads with are amend functions" was an
   alphabetical accident presented as architecture. What #32093 deleted was the
   LEGACY built-in engine and its default policy.
2. "Enabled is not routed." CONFIRMED and decisive:
   app-server-protocol/schema/json/ClientRequest.json at the tag says approval
   routing "Defaults to `user`"; `auto_review` is an opt-in value ("a
   carefully prompted subagent ... risk-based decision framework"); legacy
   alias `guardian_subagent` accepted. The published sentence "A model is
   already in your approval path" is FALSE as stated -> corrections ledger.
3. "App Server does include the automatic-review path." CONFIRMED (same
   schema). Published sentence "The CLI's classifier does not come with the
   crate" is FALSE -> corrections ledger.
4. PR #39630 body: "Projects marked untrusted now request approval for every
   command unless an explicit exec policy rule allows it." Deterministic
   DEFAULTS deleted; hand-authored constraints retained and load-bearing.
5. PR #38011: lockfile = "effective-config lockfile export, replay, and
   validation" -- config replay, not approval policy. The "one policy" lede
   flattened four different concerns; restructure as defaults-vs-constraints
   plus provider-owned lifecycle.
6. Auto-review positive case: alignment.openai.com/auto-review (2026-04-30)
   carries the ~200x fewer stops, ~99% approvals of escalations, majority of
   internal Codex Desktop tokens, and >half safer-path recovery after denial.
   OpenAI's own internal numbers; usable with that label. Platform post
   carries the ARC-AGI-3 13.3%->38.3% harness claim.
7. Claude Code hooks: code.claude.com/docs/en/hooks distinguishes command/
   HTTP/MCP hooks (exit codes, no model in the decision path) from prompt and
   agent hooks (model judgment). Convergence claim usable.
8. SWE-Marathon (arXiv 2606.07682): no agent-model configuration exceeds 30%
   pass@1 across 1,300 trajectories; failures include poor self-verification,
   premature termination; reward hacking in 13.8% of rollouts. Usable as the
   limit on "the model absorbs everything".
9. AutoReviewDecisionSource exists in the protocol, marked [UNSTABLE], enum
   ["agent"] -- the audit surface is a seed, not a product. Usable in the
   forecast section.

## Review suggestions ACCEPTED on taste

Three-way spine (judgment into models; hard boundaries in rules + OS; control
plane thicker); "adjudication" promoted to organizing principle; the approval
journey scene; the hooks comparison; both halves via the Auto-review numbers;
scoped-migration wording; revised close; several language edits; watchlist
additions (decision events, version identifiers, replayability, cost
attribution).

## Review suggestions REJECTED or TRIMMED on taste

- The three-list builder playbook and 14-field receipt code block: compressed
  to one short section and one prose sentence naming the fields. This is a
  reported feature, not a consulting deck.
- "Implications for Frontier Labs" as a section: violates the trust firewall
  (Bitter stays outside the analysis). Reframed as one paragraph addressed to
  independent harness builders generally, inside the lens close.
- The reviewer's copy-ready prose: reference only. Register is not house.
  Rewritten in house voice.
- Ten-section structure: too long; the revision holds ~8.

## Corrections to publish

- "A model is already in your approval path" -> capability stable and enabled;
  routing defaults to the user; a model reviews only where auto_review /
  Approve for me is selected or managed policy requires it.
- "The CLI's classifier does not come with the crate" -> App Server exposes
  approvalsReviewer: auto_review; the host owns routing, consent, and audit.

## Critic panel outcome (2026-08-24)

Three Fable critic subagents ran against the revision with distinct lenses.
House voice: 12 items, all applied (in-copy revision note removed; forecast
paragraphing; dedup of the rent image; heading register; date and precision
fixes). Forecast: 6 items applied (closing line no longer re-asserts the
corrected routing claim; every forecast now carries a binding falsifier;
what_would_settle_it item 5 names settling evidence) plus two new receipted
forecasts adopted (agent identity; code call vs tool call). Precision: 13
items, 12 applied as reported; item 1 ("most restrictive wins" unverified)
was OVERRULED on evidence obtained after the critics were briefed --
policy.rs from_matches takes .max() over the Ord Decision enum -- and the
sentence was instead grounded clause-by-clause with the receipt moved to
policy.rs. The Windows-sandbox internal contradiction, the main-vs-tag commit
count, the 113-vs-116 flag arithmetic, and the pronoun rule were all real and
are fixed. Both features swept for inferred gendered pronouns per house rule.
