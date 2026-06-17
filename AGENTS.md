# Bitter Frontier

A weekly, receipted brief on the agentic-coding frontier: the coding agents and
the harnesses around them, read through one question. What changed, and what does
it cost the people who run these tools. The publication is the repository,
file-backed Markdown and YAML, with no hidden database.

This file orients AI assistants and human contributors working in the repo.

- Read [METHOD.md](./METHOD.md) for how the publication works: the three rules
  (no claim without a receipt; no signal without a consequence; released is not
  merged) and the object grammar (finding, signal, digest, profile, run artifact).
- Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

House style: ASCII punctuation only, no em dashes; operator-first, skeptical, no
hype. Cite the primary source on the claim-bearing words. Every claim carries a
receipt or it does not ship.

Validate before you push:

    npm --prefix site run build            # regenerates pages + internal link check
    node site/scripts/check-integrity.mjs  # cross-reference ids resolve
