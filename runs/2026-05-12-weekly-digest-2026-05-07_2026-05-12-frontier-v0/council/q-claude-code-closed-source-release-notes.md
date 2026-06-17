# Council Pressure-Test: Claude Code Profile

**Surface class under review**: `closed_source_release_notes`
**Profile**: `content/profiles/claude-code.md`
**Evidence floor**: `release_note`

## Research Question

You are reviewing the Claude Code profile as part of a quality-assurance pass
for Bitter Frontier's autonomous research loop. Claude Code is the only
`closed_source_release_notes` provider in the watchlist. The research loop
relies exclusively on official changelogs and documentation -- no commit
history is available.

Your job is to pressure-test the profile. Be specific, critical, and
constructive. Key question: does the profile handle the constraints of
closed-source-release-note evidence well, or does it over-claim based on
feature descriptions that are ambiguous at this evidence level?

## Specific Questions

1. **Evidence ceiling**: For `closed_source_release_notes`, there is no
   commit diff to confirm implementation details. The profile claims
   `/ultrareview` is described as "preliminary (Research Preview, output
   schema not documented)." Is this characterization consistent with treating
   absence of documentation as evidence of incompleteness, or is it the
   profile correctly flagging an open question? What would change if the
   schema were documented but the reviewer hadn't found it?

2. **`claude agents` supervisor claim**: The profile describes `claude agents`
   as a full-screen session supervisor with "persistent background execution,
   automatic worktree isolation, and lightweight peek/reply." This is a
   strong claim about session persistence across terminal close. Is this
   claim defensible from a release note alone, or does it require observed
   behavior (testing the actual feature)?

3. **Governance framing**: The profile describes `settings.autoMode.hard_deny`
   as completing the "auto-mode policy model: hard blocks that no allow rule
   can override." This is an interpretive framing. Is the profile allowed to
   make this kind of "completes the model" inference from release notes, or
   should it be presented as the reviewer's interpretation rather than
   stated fact?

4. **API key auth scope reduction claim**: The profile notes that API key
   auth disables Remote Control, `/schedule`, and claude.ai MCP connectors.
   Is this a security improvement, a capability reduction, or both? Does the
   profile correctly characterize the operator consequence, or does it
   understate the impact on operators using API keys?

5. **Cross-provider comparison discipline**: Does the profile make any
   cross-provider comparisons that should instead be in the weekly digest?
   The RESEARCH_CONTRACT specifies "cross-provider editorial belongs in the
   weekly digest, not the profile."

## Context

Claude Code's current profile covers the v2.1.x release series
(2026-05-07..2026-05-12). Major features: `claude agents` supervisor (Research
Preview), `/goal` command, `/ultrareview` (Research Preview), worktree.baseRef
regression fix, `continueOnBlock` for PostToolUse hooks, OTel agent
attribution headers, `settings.autoMode.hard_deny`, API key auth scope
changes.

Evidence is all from official Claude Code changelogs. No commits available.
The evidence_floor is `release_note`. No lower-precision evidence is
acceptable as the primary citation for any claim.

Please assess whether the profile handles the closed-source constraint
correctly, and whether it over- or under-claims given what release notes
can and cannot confirm.
