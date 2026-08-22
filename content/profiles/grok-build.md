---
schema_version: bitter.frontier_profile.v0
profile_id: grok-build
label: Grok Build
owner: xAI
source_contract: sources/grok-build.yml
homepage: https://x.ai/cli
docs: https://docs.x.ai/build/overview
changelog: https://x.ai/build/changelog
repo: https://github.com/xai-org/grok-build
tagline: "You can read the loop. The binary on PATH is a different channel."
compared_with:
  - codex
  - claude-code
  - pi-coding-agent
  - deepseek-harness
  - antigravity
surface_class: open_source_commits
evidence_floor: official_changelog
status: active_watch
first_published: 2026-08-21
last_updated: 2026-08-21
last_full_review: 2026-08-21
claims:
  - id: which-channel-is-the-product
    last_verified: 2026-08-21
    status: open_question
    note: "GitHub has no tags and no releases. Changelog version, install-script binary, and public SHA can disagree. A finding must name which one it tested."
  - id: public-tree-is-a-monorepo-mirror
    last_verified: 2026-08-21
    status: open_question
    note: "The README states the tree is synced periodically from the SpaceXAI monorepo. A gap in public git is not evidence about the shipped binary."
stance:
  use_for: "Teams that want a first-party xAI terminal agent they can actually open in an editor, and anyone comparing inspectable CLIs with a frontier-lab vendor loop. Headless `grok -p` and native ACP (`grok agent stdio`) are the surfaces worth a first look."
  avoid_for: "Anyone who needs to prove that yesterday's public SHA is today's binary. There are no GitHub tags. The default install is a moving script. A permission you read at a commit is not, by itself, the permission the install script shipped."
  watch_next: "Whether a tag or a digest ever joins SOURCE_REV to a changelog version; whether public main stays a lagging mirror; whether ACP from a wrapper and Grok Build's own tool policy disagree."
---

# Grok Build

## Operator Read

Added 21 August 2026. This is the `grok` binary, not grok.com chat and not
the model.

You can read it. [xai-org/grok-build](https://github.com/xai-org/grok-build)
is Apache-2.0 Rust, published 15 July 2026. GitHub still has no tags and no
releases. The README says the tree is synced from the SpaceXAI monorepo, and
a `SOURCE_REV` file records the internal commit. The last public commit at
intake is
[19d42e35c07a](https://github.com/xai-org/grok-build/commit/19d42e35c07a9c9244f03f6df0c4c353f970d4f9)
(19 August 2026), message "Synced from monorepo".

If you installed it the usual way, you ran
`curl -fsSL https://x.ai/cli/install.sh | bash`. That script is not a git
checkout. The dated operator channel is the
[changelog](https://x.ai/build/changelog), which at intake topped at v1.0.5
on 15 August 2026, four days before the last public sync.

Name which of those three you are talking about.

## Why it is here

xAI trains the model and ships the harness. That is the bracket Codex,
Claude Code, and Gemini CLI already occupy, and this row was the gap.

Unlike Claude Code, the loop is readable. Unlike Codex, the readable tree is
a mirror with no tag an operator can pin. DeepSeek Harness has the same
shape of question: is the public repo the home, or a window into a private
one?

Native ACP is `grok agent stdio`. Other tools can drive that socket.
Omnigent already does. A wrap is not Grok Build's own gate.

## What to do with it

Read a permission or a hook at a pinned SHA if you need to know how the
code is written. Then check `grok --version` against the changelog before
you treat that SHA as the thing on PATH. If those disagree, the changelog
and the binary win for "what shipped," and the SHA wins for "what the
mirror currently contains."
