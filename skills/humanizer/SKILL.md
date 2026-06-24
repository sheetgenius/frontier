---
name: humanizer
description: Revise AI-sounding drafts into clear, human editorial prose. Use when Codex is writing or editing blog posts, essays, digests, newsletters, landing copy, social-callout copy, or reader-facing explanations and the user asks for more natural, conversational, Stratechery/Krebs-like, less mechanical, less internal, less corporate, or less AI-generated language.
---

# Humanizer

Use this skill to make reader-facing prose sound like a sharp person explaining
the idea to another person. Preserve rigor, but move process details and
traceability into footnotes, links, collapsed notes, or repo artifacts.

## Workflow

1. Identify the real reader-facing job of the copy: explain, persuade, orient,
   critique, or narrate.
2. Remove internal process language from the main flow. Push audit mechanics,
   validation caveats, and source-status terms into background affordances.
3. Rewrite around concrete questions, stakes, and examples. Prefer "what this
   means" over "how this was verified" unless the reader needs that in the
   moment.
4. Read each paragraph aloud mentally. If it sounds like a policy memo, a PR
   note, or a model explaining its method, rewrite it.
5. Keep the strongest sentence and delete the scaffolding around it.

## Voice Targets

- Clear enough to say to a friend without embarrassment.
- Specific enough that it still carries an argument.
- Skeptical without sounding defensive.
- Conversational without becoming sloppy.
- Direct, not branded, breathless, or self-congratulatory.

## Replace These Patterns

- "This claim should not be promoted" -> "That is a lead, not the whole story."
- "Verification is needed before..." -> "The interesting question is..."
- "Social evidence indicates..." -> "The post points at..."
- "Operators should..." -> "If you are running this, the practical read is..."
- "This validates the bounded claim" -> "The code backs up the smaller version."
- "The editorial workflow..." -> remove it from the public copy.

## Keep These Boundaries

- Do not invent warmth by adding jokes, hype, or fake intimacy.
- Do not hide uncertainty. Translate it into plain language.
- Do not let a paragraph begin with a disclaimer unless the disclaimer is the
  point.
- Do not use em dashes in repos that prefer ASCII punctuation.
- Do not collapse important source distinctions. Move them into a quieter layer
  when they interrupt the reading experience.

## Quick Checks

Ask these before finishing:

- Would a smart reader understand the point without knowing our research
  process?
- Is the first sentence carrying an idea, or just clearing its throat?
- Did we say "evidence", "verification", "claim", "finding", "status", or
  "workflow" in the public prose when a normal word would do?
- Could this sentence be said out loud naturally?
