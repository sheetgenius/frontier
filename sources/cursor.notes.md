# Cursor -- source notes

Added 2026-08-21. Closed Anysphere product: editor, terminal CLI, and cloud
agents. Harvested as a changelog-and-docs source. Not open source.

## Why it is on the watchlist

Operators already run it. Omnigent already routes work onto it. Until this
row existed, a meta-harness finding could say "do not attribute Cursor
behavior to the wrapper" and could not say what Cursor's own permission
system did that week. The changelog is still worth reading even when the
code is not.

## Identity traps

- **github.com/cursor/cursor is not the product.** Tree at intake: README,
  SECURITY.md, `.github`. It is a bug tracker. `github_com_cursor_cursor_as_source`
  is rejected evidence.
- **Editor, CLI, cloud agents, and Origin hosting are different surfaces.**
  The changelog mixes them. A finding that does not name which one moved is
  unfinished.
- **The CLI command in the docs is `agent`**, installed from
  `curl https://cursor.com/install -fsS | bash`. Do not assume `cursor` on
  PATH is the agent, and do not assume a cloud-agent screenshot is the CLI.
- **Omnigent's Cursor path is a wrap.** Wrapper auth and Cursor's own gate
  are two systems. Do not launder them.

## What is checkable

- Dated entries on [cursor.com/changelog](https://cursor.com/changelog).
- CLI docs at [cursor.com/docs/cli/overview](https://cursor.com/docs/cli/overview),
  including install, modes, print/headless, sandbox, sudo prompting.
- A local `agent --version` (or whatever the installed binary reports) if
  you actually ran the install script.

What is not: git ancestry, a permission implementation, a sandbox
enforcement read. That is the Antigravity floor: release notes plus a
binary.

## Handling rules

- **Tier 1, daily.** The changelog moves on a near-daily cadence.
- **Name the surface.** Cloud-agent `/goal` is not a CLI claim until the
  CLI docs or a CLI-scoped changelog line says so.
- **Changelog is not the binary.** Promote a governance sentence only
  when a local probe can confirm it, or say plainly that the vendor said
  it and the code cannot be read.
- Do not over-weight marketing pages, star counts, or "Cursor is the
  default" social claims.

## Comparison set

`claude-code` and `antigravity` for closed changelog discipline.
`github-copilot-cli` for the other large closed terminal agent.
`grok-build` for the inspectable contrast.
`omnigent` for the wrap, never as a substitute harvest.
