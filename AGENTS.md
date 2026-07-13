# Bitter Frontier

Bitter Frontier is a receipted editorial publication on coding agents and their
harnesses. It reads provider changes through two named ideas:

- **[Bitter Lesson Maxing](https://frontier.bitter.sh/bitter-lesson/):** build
  where improving general agents compound the advantage, not where their next
  release erases it.
- **[Amdahl Maxing](https://frontier.bitter.sh/amdahls-law/):** treat human
  attention as the scarce serial resource and spend it where judgment changes
  the outcome.

The governing editorial question is: what did agents just make cheaper, which
part of the end-to-end system can they now operate, and where did the human
attention bottleneck move?

## Read the authorities in order

1. [THESIS.md](./THESIS.md) defines why the publication exists, the company
   layer decision, the audience, the funnel, and the safeguard against a
   predetermined corporate verdict.
2. [METHOD.md](./METHOD.md) defines the three rules, evidence contract, object
   grammar, signal packet, and synthesis standard.
3. [EDITORIAL.md](./EDITORIAL.md) defines the public writing bar: synthesis,
   decision utility, reader vocabulary, and the cold-read test.
4. [CONTRIBUTING.md](./CONTRIBUTING.md) defines what an outside contributor may
   change and what remains editorially owned.

## The non-negotiables

- No claim without a primary-source receipt on the claim-bearing words.
- No signal without a concrete consequence for an operator, the larger system,
  or scarce human attention.
- Released is not merged. State the channel an operator can actually run.
- The thesis chooses the questions, not the answers. Publish evidence that cuts
  against Bitter's assumptions.
- Bitter is the disclosed publisher and stays outside the analysis.
- Public prose leads with what happened, who it affects, what to do, and what it
  means. Pipeline terms such as `finding_id`, harvest, promotion, and
  carry-forward stay in research artifacts.
- Public prose should have a pulse. Color, wit, analogy, and colloquial language
  are welcome when they sharpen a receipted mechanism or consequence. They must
  never inflate certainty or replace analysis.

House style: ASCII punctuation only, no em dashes; operator-first, skeptical,
plain, and free of hype or sneer. The publication absorbs complexity for the
reader. A first-time visitor should not have to learn the repository taxonomy.

## Validate before you push

    npm --prefix site run build
    node site/scripts/check-integrity.mjs

The build regenerates pages and checks internal links. The integrity check
resolves cross-reference IDs.

To run a full research cycle, invoke the `frontier-cycle` skill
([.claude/skills/frontier-cycle/SKILL.md](./.claude/skills/frontier-cycle/SKILL.md)).
It encodes the coordinator-led research and publication protocol. To raise an
existing public artifact to the house bar without changing its window truth, use
the `exemplar-pass` skill
([.claude/skills/exemplar-pass/SKILL.md](./.claude/skills/exemplar-pass/SKILL.md)).
