# Grok Build -- source notes

Added 2026-08-21. Apache-2.0, Rust, `xai-org/grok-build`, binary `grok`.
xAI published the tree on 2026-07-15. The README's own words: SpaceXAI's
terminal coding agent, synced periodically from the SpaceXAI monorepo, with
`SOURCE_REV` recording the internal commit.

## Why it is on the watchlist

It is the inspectable first-party coding CLI from the lab that trains Grok.
That is the Codex / Claude Code / Gemini CLI bracket, and it was the miss.
You can read the agent loop, tools, TUI, skills, plugins, hooks, MCP, and
sandbox/permission code. That is not the Claude Code floor.

## Identity traps

- **Grok the model / grok.com chat is not this product.** Lane C of a research
  cycle uses the grok CLI as a harvest tool. That is research infra, not a
  finding about Grok Build.
- **Grok Bot** is a separate cloud-teammate product. Docs for it are not a
  Grok Build changelog.
- **Omnigent's ACP row** (`grok agent stdio`) is a fact about the pair. Do not
  attribute Omnigent wrapper behavior to Grok Build's own tool policy.

## What is checkable

- **Source, yes.** Pin a SHA on `xai-org/grok-build`. Read `SOURCE_REV` at that
  SHA for the monorepo commit the public tree claims to mirror.
- **Channel, no, not the way this publication needs.** At intake GitHub tags
  are 0 and GitHub releases are 0. Default install is
  `curl -fsSL https://x.ai/cli/install.sh | bash`. The dated operator channel
  is [x.ai/build/changelog](https://x.ai/build/changelog).
- **The three can disagree.** At intake the changelog topped at v1.0.5
  (2026-08-15) while the last public commit was 2026-08-19,
  `19d42e35c07a9c9244f03f6df0c4c353f970d4f9`, message "Synced from monorepo".
  Name which one you tested.

## Handling rules

- **Tier 1, daily.** It is a frontier-lab harness. Do not wait for a tag that
  may never come.
- **Closed-source channel discipline on an open tree.** For implementation
  claims, pin the public SHA and `SOURCE_REV`. For "what an operator ran",
  pin changelog version and/or `grok --version` from the install script.
  Unsynced `main` is not the product.
- **`unsynced_main_as_the_product` and `grok_com_chat_as_harness` are rejected
  evidence.** So is treating an Omnigent ACP wrap as Grok Build's gate.

## Comparison set

`codex` and `pi-coding-agent` for inspectable terminal agents.
`claude-code` and `antigravity` for the changelog-versus-binary problem.
`deepseek-harness` for "is the public repo the development home?"
`omnigent` for the ACP pair, never as a substitute harvest of this source.
