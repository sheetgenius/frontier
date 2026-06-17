# Research Report: Fresh-Visitor Experience (First 30 Seconds)

## Bottleneck Ranking
1. **Homepage Headline Genericism**: "This week in agentic harnesses" is a category label, not a value prop. It feels like a standard newsletter until you read the dek.
2. **Profile Voice Drift**: The "Capability/Accessibility/Governance" lenses are useful but read more like a vendor assessment or academic paper than "field notes from a practitioner."
3. **Actionability Variance**: The "Operator Brief" is excellent, but individual signal "What this changes" bullets sometimes drift into "what happened" rather than "what to do."

## Key Source Handles
- `site/src/pages/index.astro`: The entry point where the "event horizon" hero and category-first title live.
- `content/digests/2026-05-12-weekly.md`: The gold standard for the voice; specifically the `operator_brief` and "Governance Becomes Enforcement" sections.
- `content/profiles/claude-code.md`: Example of the "Stance" band providing high-signal operator guidance.
- `site/src/pages/signals/[id].astro`: The terminal node of research; receipts are strong, but metadata display is slightly bureaucratic.

## Missing Evidence or Contradictions
- **Contradiction**: The site claims to be "field notes from a practitioner" (informal, direct, evidence-led) but uses "Capability/Accessibility/Governance" (formal, structured, taxonomy-led) as its primary organizational lens in profiles.
- **Evidence Gap**: It's unclear if a "fresh visitor" understands what "Bitter" is (the parent product) vs "Bitter Frontier" without reading the full About page.

## Recommended Smallest Target
**Sharpen the Homepage Headline and Dek to move from "Newsletter" to "Intelligence Surface."**
- Rename the `h1` from "This week in agentic harnesses" to a more aggressive, operator-centric hook.
- Ensure the "Uncertain" section of the latest digest is teased on the homepage as a "Trust through honesty" signal.

## Bolder Next Target
**Refactor Profile Lenses into "Operator Constraints."**
- Instead of "Capability/Accessibility/Governance," use headings that mirror the operator's mental model: "Power & Limits" (Capability), "Friction & Adoption" (Accessibility), "Safety & Audit" (Governance).

## Verification Proof
- A 5-second glance at the homepage should immediately communicate: "This site tells me the things vendors aren't mentioning."
- A 30-second read of the profile should give a "Go/No-Go" feeling, not just a feature list.

---

## 1. The 10-second test (Homepage)

**Observations**:
- The "event horizon" gradient and "Agentic Harnesses" kicker set a professional, "frontier" tone.
- The title "This week in agentic harnesses." is clear but feels like "another AI newsletter."
- The dek is where the identity clicks: "Source-backed field notes... what serious operators should do next."

**Answers**:
- **Understanding**: They know they're getting research ("Source-backed field notes") and actionable advice ("what serious operators should do next").
- **Target Audience**: Yes, explicitly "serious operators."
- **Reason to click**: "Latest Issue" and "Recent Signals" are prominent, though "Recent Signals" titles could be more "action-bearing."
- **Event horizon**: It reinforces the brand; it's a subtle "you are at the edge" visual cue that works well with the "Frontier" name.

## 2. The 30-second test (Digest/Operator Brief)

**Observations**:
- The "Operator Brief" is the highest-leverage part of the site. It delivers on the 90-second actionable read promise.
- **Thesis**: "Governance moved from convention to enforcement" is a strong practitioner insight.
- **Upgrade/Try/Watch/Uncertain**: This structure is excellent. The "Uncertain" section is the most "practitioner" part—it names the gaps vendors leave in docs.

**Answers**:
- **Actionable?**: Yes. "Upgrade check" is immediate utility.
- **Feel**: Reads like field notes/briefing. It's professional but direct.
- **Bookmarkable?**: Definitely. It feels like "insider intelligence" rather than "aggregated news."

## 3. Voice Consistency

**Drifts**:
- **Newsletter voice** (Homepage): "This week in agentic harnesses."
- **Academic voice** (About): "The research loop runs autonomously... evidence chain is public and auditable."
- **Docs/Taxonomy voice** (Profiles): "Capability Lens", "Accessibility Lens", "Governance Lens."

**Proposed Rewrites**:

*Homepage Headline*:
- Current: `This week in agentic harnesses.`
- Proposed: `Agentic systems are noise. Here is the signal.` or `Field notes from the agentic frontier.`

*About Page Paragraph*:
- Current: "This is not a newsletter summarizing blog posts. Every claim in every digest traces back to a source commit..."
- Proposed: "We don't summarize blog posts. We audit commits, release tags, and changelogs. If we can't find the receipt, we don't call it a signal."

*Profile Lenses*:
- Current: "Capability Lens", "Accessibility Lens", "Governance Lens"
- Proposed: "What it can actually do" (Capability), "Where the friction is" (Accessibility), "How you control it" (Governance).

## 4. Three sharpest follow-ups

1. **Sharpen the Homepage Headline**: Move away from the "This week in..." format. It signals "low-effort aggregation" to a fresh visitor. Use a headline that emphasizes the "Audit/Source-backed" nature.
2. **Elevate "Uncertainties"**: The "Uncertain" section in digests is a major differentiator. Add a small "Current Open Questions" or "The Unknowns" block to the homepage to signal that Bitter Frontier is looking where others aren't.
3. **Pragmatic Profile Headings**: Rename the "Lenses" in profiles to more "Operator-centric" questions. "Governance" sounds like a checkbox; "Control & Safety" sounds like a requirement.

## Smallest Implementation Target
## Sharpen the Homepage Hook and Identity
Modify `site/src/pages/index.astro` to replace the generic "This week in agentic harnesses" title with an operator-centric value proposition (e.g., "Field notes for the agentic operator") and update the kicker to "Intelligence for serious operators."
