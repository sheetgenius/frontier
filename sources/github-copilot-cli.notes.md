# GitHub Copilot CLI -- source notes

Added 2026-08-21. Closed GitHub product. Public repo `github/copilot-cli` is
license, README, changelog.md, and install.sh. npm package `@github/copilot`.
Binary `copilot`. License is a proprietary grant to install and run, not
open source.

## Why it is on the watchlist

It is the large closed terminal agent with a real release train. You can pin
a GitHub release tag and an npm time the way this publication pins Claude
Code. Operators already run it. Omnigent v0.10.0 authenticates it with
`gh auth login`, including GitHub Enterprise. Until this row existed, that
wrap had no Copilot surface of its own to check against.

## Identity traps

- **This is the Copilot CLI, not VS Code Copilot, not Copilot Chat, not the
  cloud coding agent.** README marketing that it is "powered by the same
  agentic harness" as the cloud agent is a vendor sentence, not a source
  diff.
- **This is not `gh copilot`.** The older GitHub CLI extension is a
  different binary.
- **github/copilot-cli is not agent source.** `source_diff_of_copilot_cli_repo`
  is rejected evidence. The useful files in that tree are changelog.md,
  LICENSE.md, and the release assets.
- **Omnigent's `gh auth login` is wrapper auth.** Do not promote it into a
  fact about Copilot's sandbox or allow-all policy.

## What is checkable

- [changelog.md](https://github.com/github/copilot-cli/blob/main/changelog.md)
  dated by version.
- [GitHub Releases](https://github.com/github/copilot-cli/releases), including
  the prerelease flag.
- npm `@github/copilot` dist-tags (`latest` vs `prerelease`) and publish
  times.
- Official docs, including approval flags, trusted directories, sandbox,
  and ACP.

At intake: `latest` and the newest non-prerelease tag were both `1.0.80`
(2026-08-14). `prerelease` was `1.0.81-7` (2026-08-21). Name the channel.

## Handling rules

- **Tier 1, daily.** Releases and prereleases cut often.
- **Released is not the prerelease dist-tag.** A finding about 1.0.81-n is
  preview unless `latest` moved.
- **Changelog is not the binary.** Enterprise sandbox and allow-auto-only
  notes are high-signal; confirm with a local probe before treating them as
  a bound control.
- Do not harvest github.blog/changelog as if every Copilot item were this
  CLI.

## Comparison set

`claude-code` for closed npm-plus-docs cadence.
`antigravity` for GitHub Releases of a closed binary.
`cursor` for the other large closed coding agent.
`grok-build` for the inspectable contrast.
`omnigent` for the wrap.
