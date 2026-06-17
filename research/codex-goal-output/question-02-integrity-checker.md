# Council 02: pressure-test the integrity checker target

Context:

`research/council-dossiers/round-8-review.md` proposes a structural integrity
audit for Bitter Frontier. Its smallest target is to fix dead signal references
in provider profiles; its bolder target is a validation script for signal,
finding, digest, and profile references.

The current operator question is narrower:

Should the next file-backed quality tool be an internal integrity checker, an
external link checker, or a small shared script that starts with one and leaves
room for the other?

Read:

- `/Users/c3po/co/bitterfrontier/research/council-dossiers/round-8-review.md`
- `/Users/c3po/co/bitterfrontier/RESEARCH_CONTRACT.md`
- `/Users/c3po/co/bitterfrontier/AGENTS.md`
- `/Users/c3po/co/bitterfrontier/site/src/lib/frontier.ts`
- `/Users/c3po/co/bitterfrontier/site/src/components/SourceTrail.astro`
- `/Users/c3po/co/bitterfrontier/content/profiles/gemini-cli.md`
- `/Users/c3po/co/bitterfrontier/content/profiles/openclaw.md`

Answer:

1. Which checker catches the most operator-relevant failure first: internal
   reference integrity, external link health, or both?
2. What is the smallest script target that fits Bitter Frontier's
   documentation-first doctrine without turning the repo into an app?
3. What must the checker report so an agent can fix issues without guessing?
4. What should be explicitly out of scope for the first script?

Required output:

- bottleneck ranking
- accepted target
- rejected target(s)
- exact files the first implementation should touch
- verification command

End with:

## Smallest Implementation Target

One concrete script or content-fix target, with no database and no site
architecture changes.
