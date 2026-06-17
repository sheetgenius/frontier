# Council Pressure-Test: OpenHands Profile

**Surface class under review**: `mixed_official_docs`
**Profile**: `content/profiles/openhands.md`
**Evidence floor**: `release_note`

## Research Question

You are reviewing the OpenHands profile as part of a quality-assurance pass
for Bitter Frontier's autonomous research loop. OpenHands is a productized
agent platform (All Hands AI) with SDK, GUI, cloud, and enterprise surfaces.
It is the "productized platform calibration source" for the watchlist.

Your job is to pressure-test the profile. Be specific, critical, and
constructive. Hold the profile to:

1. Every concrete claim must have an inline source link.
2. For `mixed_official_docs`, evidence includes release notes, official docs,
   and merged PRs -- but not speculation or stale model memory.
3. The accessibility lens should distinguish "platform makes it easier" from
   "platform makes it less governable."
4. The governance lens should be precise about what is enforced vs. what is
   advisory.

## Specific Questions

1. **Sub-agent delegation claim**: The profile claims sub-agent delegation is
   "opt-in via `enable_sub_agents` user setting (default off)" with four
   built-in sub-agents having "structurally constrained tool surfaces." Is
   "structurally constrained" accurate if it comes from a Markdown spec file
   rather than runtime enforcement? What level of evidence would be needed to
   confirm structural (not just instructional) constraint?

2. **Critic evaluation default**: The profile claims the critic display is
   "on by default for new users." What does "new users" mean operationally --
   is this a per-user flag that new accounts get by default, or a
   platform-wide default? How much does this distinction matter for operators
   deploying OpenHands in multi-user environments?

3. **Productized platform calibration role**: OpenHands is described as the
   "productized agent platform calibration source" for the watchlist. Does
   the profile adequately capture the *platformization* dimension -- i.e.,
   what parts of OpenHands make it a platform vs. a harness? What is missing
   from this angle?

4. **Accessibility lens gap**: The profile says OpenHands "has the most
   complete productized surface in the watchlist." Is this claim defensible
   at `release_note` evidence floor, or is it a comparative assertion that
   requires systematic cross-provider comparison? If the latter, should it
   be moved to the digest (cross-provider editorial)?

5. **What to watch next quality**: Review the profile's "What To Watch Next"
   section. Are these the most important open questions, or are there
   higher-value questions about the direction of the platform that are missing?

## Context

OpenHands v1.7.0 shipped KVM sandbox support. Prior findings cover API key
redaction, secret injection into subprocess (not shell-expanded), sandbox
security group UI, and self-hosted GitLab integration. The current-window
findings add sub-agent delegation and critic evaluation GUI.

Please assess the profile with fresh eyes. You do not have access to the
profile file directly; work from the questions and context above.
Focus on evidence discipline, characterization accuracy, and framing gaps.
