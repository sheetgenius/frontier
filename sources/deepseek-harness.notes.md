# DeepSeek Harness Source Notes

Added 2026-08-17. MIT, TypeScript, `deepseek-ai/deepseek-harness`, repo created
2026-08-13. Its own description: "an open-source agent harness developed by
DeepSeek AI" using "an architecture where **everything is a plugin**," powered by
[Cordis](https://github.com/cordiverse/cordis). Landing page: "DeepSeek Harness
developer preview: Everything is a plugin."

## Why it is on the watchlist

A frontier model lab shipped its own harness. That is the whole rationale, and
it is enough on its own.

Codex, Claude Code and Gemini CLI are on this list because the organisation that
trains the model also decides what the agent may do with a machine, and that
pairing is where this publication's questions land hardest. DeepSeek Harness
enters the same bracket on day one. Whether it is any good is a separate
question and not yet answerable.

What it is not on the list for is attention. The repo took roughly 154k stars in
four days, which is the largest number this watchlist has ever recorded at
intake and tells an operator nothing. `star_count_as_adoption` is written into
the contract's rejected evidence for exactly that reason.

## What is checkable

- **There is no stable channel.** One tag exists, `dsh-v0.1.0-rc.7`, flagged
  prerelease, published 2026-08-17. The npm `latest` dist-tag on
  `@deepseek-ai/dsh` resolves to that same `0.1.0-rc.7`. So the README's own
  install command, `npx @deepseek-ai/dsh web`, installs a release candidate, and
  the README warns in capitals: "THERE WILL BE COMPATIBILITY-BREAKING CHANGES."
  Under the rule that a finding must name the channel an operator can actually
  run, the honest current statement is that nothing here has shipped to a
  channel worth depending on. Re-check this every window; the first stable tag is
  itself a finding.
- **Issues are disabled.** `has_issues: false`, discussions enabled, 0 open
  issues by construction. Defect reports and their resolutions live in
  Discussions, which is a weaker receipt surface than an issue tracker. Capture
  the permalink and the verbatim text, because a discussion can be edited or
  deleted with no public trace.
- **A `.gitlab-ci.yml` is committed** alongside a GitHub Actions directory. That
  suggests the public repo may be a mirror of an internal one. Establish which
  before treating a gap in the commit history as evidence of anything. If it is a
  mirror, absence of a commit is not absence of work.
- **The plugin claim is testable.** "Everything is a plugin" covers models,
  tools, skills, sessions, sandboxes, storage, loops, scheduling and the UI. The
  probe that matters is not whether a component can be swapped, but whether the
  component enforcing a limit can be swapped by the thing it limits. `docs/
  capability-seams.md` and `docs/architecture.md` are the places to start.
- **Docs ship bilingual** with `.i18n.yaml` pairs and `.zh.md` siblings. English
  and Chinese can drift, and which one is normative is unanswered.
- **The Web UI is the default front door**, served at `127.0.0.1:3080` by
  `dsh web`. That is a different exposure shape from the terminal-first agents on
  this list, and what authenticates a request to that port is worth reading
  before anything else.

## Handling rules

- **Tier 1, daily** on class, not on velocity. A lab-first-party harness gets the
  same cadence as the other lab-first-party harnesses.
- **Developer preview is a channel statement, not a disclaimer to skip.** Most
  findings this quarter should carry `observe`, and `default_actionability`
  reflects that. Reserve `test` for security changes and for the first stable
  release.
- **Attribute the plugin boundary correctly.** Cordis is a third-party framework
  and can change what a `dsh` plugin may do without a commit landing in
  `deepseek-harness`. A finding about the plugin contract must say which repo the
  behaviour comes from, the same way an Omnigent finding is a fact about a pair.
- Third-party coverage of the launch is plentiful and mostly recycled. It is not
  evidence. Go to the repo.

## Comparison set

`codex`, `claude-code`, `gemini-cli` for the lab-first-party bracket, and
`omnigent` for the composability argument. The contrast worth drawing is that
Omnigent orchestrates harnesses it does not own, whereas DeepSeek Harness
proposes that the harness itself dissolve into plugins. Both are bets that the
interesting layer is the seam; they disagree about where the seam goes.
