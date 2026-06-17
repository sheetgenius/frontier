# Audit: 2026-06-16 weekly digest

Process and doctrine observations. Per the operating cadence, unresolved
questions are recorded here and not self-committed into doctrine.

## 1. Channel status is a first-class evidence property (recommend standing check)

This window's defining hazard was not date accuracy but **release-channel**
accuracy. A large share of the sharpest security work was merged to a default
branch and NOT in any tagged release by the window's close: Hermes's entire
fail-closed wave (post-v0.16.0 main), Paperclip's multi-tenant authority cluster
(post-v2026.609.0 master), OpenHands's enterprise/security cluster (post-1.8.0
main), and Gemini's skill path-traversal fix (ahead of every tag). Two Gemini
items also lived only in preview/beta. Stating "X shipped" when X is on main
tells an operator the binary they run is protected when it is not - a house-rule
violation as serious as a missing receipt.

**Recommendation (process, not doctrine):** harvest and verify prompts should
require channel resolution by **git ancestry** (`compare <tag>...<commit>`), not
date inference, and findings/signals should carry an explicit channel field
(tagged-release | main-unreleased | preview-or-beta). This run did so by hand in
the verify stage; it should be standing.

## 2. Consolidated harvest files instead of one-file-per-finding (divergence noted)

The prior run wrote ~99 individual `findings/<id>.md` files. This run recorded
findings as ten consolidated `harvest/<provider>.md` files, each carrying every
finding's id, date, version, change type, operator implication, and a verbatim
receipt. Rationale: equally reproducible, far cheaper, and easier to read as the
per-provider evidence record. The `signals/frontier-signals.yml` curated set is
the higher-value artifact and is kept in the canonical schema. Flagged as a
divergence from the prior run's literal structure, not a doctrine change.

## 3. Subagent final-message discipline (operational lesson)

The Pi harvester internally forked and delivered its full 10-finding report in an
intermediate message; only its final *addendum* was returned to the orchestrator,
and `SendMessage` was not available to resume it. The full harvest was recovered
by re-fetching Pi's primary sources directly. **Lesson:** instruct harvesters to
place the COMPLETE structured output in their FINAL message, never an earlier
one, since only the last message is returned.

## 4. Flue source-contract follow-up still open (carried from prior run)

Confirmed again: Flue publishes no GitHub Releases (the `/releases` page is
empty); CHANGELOG.md is the canonical receipt, and some versions (e.g. 0.10.2)
are changelog-only with no git tag. The prior run's audit recommended updating
`sources/flue.yml` primary_surfaces to point at CHANGELOG.md (and/or tags) rather
than the empty releases page. Still unapplied; recommend a follow-up commit.

## 5. The "theater" pattern is a second-order version of the prior cycle's thesis

Last cycle's thesis was "the policy you wrote was not the policy the runtime
enforced," driven by bug-fixes restoring enforcement of existing rules. This
cycle the providers built NEW authority machinery (argument-aware permissions, a
classifier that gates subagent spawns, deny-by-default review containment,
per-tenant identity isolation, project trust) because the per-action-prompt model
does not scale to recursion, multi-tenancy, and untrusted-input review. A Hermes
commit naming an unpaired write-deny rule "theater" is the same insight in a
maintainer's own words. Worth tracking whether this hardens into a durable
"authority layer" category across the watchlist.

## 6. Multi-agent harness performed well (process win)

Ten parallel harvesters + four parallel adversarial verifiers + a Codex-xhigh and
editorial review pass. The verify stage caught two real overstatements before
publication. Recommend the harvest -> verify -> review pipeline as standing.
