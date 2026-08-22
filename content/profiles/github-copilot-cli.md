---
schema_version: bitter.frontier_profile.v0
profile_id: github-copilot-cli
label: GitHub Copilot CLI
owner: GitHub
source_contract: sources/github-copilot-cli.yml
homepage: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
docs: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
changelog: https://github.com/github/copilot-cli/blob/main/changelog.md
repo: https://github.com/github/copilot-cli
tagline: "A versioned terminal agent with GitHub Releases and npm, and no agent source behind them."
compared_with:
  - claude-code
  - antigravity
  - cursor
  - grok-build
surface_class: closed_source_releases
evidence_floor: official_changelog
status: active_watch
first_published: 2026-08-21
last_updated: 2026-08-21
last_full_review: 2026-08-21
claims:
  - id: repo-is-not-agent-source
    last_verified: 2026-08-21
    status: open_question
    note: "github/copilot-cli is license, docs, changelog, and installer. The agent is not in that tree."
  - id: latest-lags-prerelease
    last_verified: 2026-08-21
    status: open_question
    note: "At intake npm latest and the newest non-prerelease GitHub tag were both 1.0.80 (2026-08-14). dist-tag prerelease was 1.0.81-7 (2026-08-21)."
stance:
  use_for: "Operators who want a GitHub-native terminal agent with a dated release train. Pin npm `@github/copilot` or the GitHub Release. Enterprise sandbox and allow-auto-only notes are the kind of line this source exists to catch."
  avoid_for: "Anyone who needs to read the agent. The public repo is not it. Do not treat VS Code Copilot, Copilot Chat, the cloud coding agent, or `gh copilot` as this product, and do not treat Omnigent's `gh auth login` as Copilot's own gate."
  watch_next: "Whether `latest` and `prerelease` stay split; whether a sandbox or allow-all change in the notes can be confirmed by a local probe; whether ACP is a shippable surface or a docs claim."
---

# GitHub Copilot CLI

## Operator Read

Added 21 August 2026. This is the `copilot` binary, npm `@github/copilot`.
It is not VS Code Copilot, not Copilot Chat, not the cloud coding agent,
and not the older `gh copilot` extension.

The public repo is real and it is not source.
[github/copilot-cli](https://github.com/github/copilot-cli) holds a
proprietary license (install and run, not modify), a README,
[changelog.md](https://github.com/github/copilot-cli/blob/main/changelog.md),
and an installer. GitHub Releases and npm are the ship channel.

At intake, `latest` and the newest non-prerelease tag were both
[1.0.80](https://github.com/github/copilot-cli/releases/tag/v1.0.80)
(14 August 2026). The `prerelease` dist-tag was 1.0.81-7 (21 August 2026).
If you did not ask npm for `prerelease`, you are not on 1.0.81.

## Why it is here

Of the large closed coding agents, this one is the most pinable. You can
date a release the way you date Claude Code. You still cannot read whether
a sandbox rule binds, which is the Antigravity problem, and it is why a
changelog sentence about enterprise allow-auto-only or a sandbox proxy is
worth a probe rather than a paraphrase.

Omnigent already drives Copilot after `gh auth login`. That is the
wrapper's auth. It is not Copilot's allow-all policy, and it is not the
sandbox.

## What to do with it

Pin the GitHub tag or the npm time, and say `latest` or `prerelease`.
Treat `--allow-all-tools` and `/sandbox` as the high-signal lines. If the
docs and the changelog disagree, the versioned release notes are the
channel and a local run is the check. The public repo will not settle an
enforcement argument.
