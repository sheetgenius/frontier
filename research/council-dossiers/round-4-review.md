# Council Review: Bitter Frontier — Round 4

## Part 1: Signal page UX

The signal page is not yet a complete canonical claim reference because the **proof chain is broken**. The reader is presented with a claim (action bullets), but the literal evidence (receipts) is buried under a classification layer.

- **Structural problem**: The "Signal metadata" table interrupts the path from action to proof. Metadata is a classification abstraction; it should not sit between the "What this changes" bullets and the "Receipts" that ground them.
    - *Element quote*: `site/src/pages/signals/[id].astro` (lines 93-125) renders the `<dl class="signal-metadata">` immediately after operator consequences, pushing the `evidence.length > 0` block below the fold.
- **Prose problem**: Consequence bullets render literal backticks instead of inline code. The signal data contains Markdown-ish syntax that the template fails to parse, reducing the perceived authority of the "canonical" claim.
    - *Element quote*: `dist/signals/2026-05-12-claude-code-agent-view-goal-and-governance/index.html` renders `<li>\`claude agents\` is the new canonical surface...</li>` because the template at `:82` maps raw strings instead of applying a Markdown parser.

## Part 2: Profile body priorities

The two profiles that benefit most from a judgment-first rewrite are **Agent Zero** and **Paperclip**.

1. **Agent Zero**: Currently itemizes browser and desktop features instead of leading with the foundational operator choice between a "visible computer" environment and transient, isolated sandboxes.
2. **Paperclip**: Hides the high-level decision to move agent labor into a centralized, governed control plane behind a docs-style list of adapter specifications and vault providers.

**Missing Evidence & Contradictions**
- **Missing Evidence**: Peer research failed to check if the "generic advice" noted in bullets (`operators should <verb>`) is a template-level repetition or a data-entry pattern that could be structurally separated.
- **Contradiction**: `research_claude` labels metadata a "wall" based on row count, while `research_codex` notes it as a compact grid; the Astro source (`dl.signal-metadata`) confirms it is a data-density bottleneck regardless of CSS layout.
- **Weak Assumption**: `research_claude` prioritizes Codex over Agent Zero based on a specific hook feature, ignoring that Agent Zero's persistent workcell model represents a more foundational shift in "Operator Stance."

## Smallest Implementation Target

Move the `Receipts` block immediately after the `whyActionBearing` bullets and before `Signal metadata` in `site/src/pages/signals/[id].astro`.
