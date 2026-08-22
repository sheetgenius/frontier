---
schema_version: bitter.frontier_profile.v0
profile_id: cursor
label: Cursor
owner: Anysphere
source_contract: sources/cursor.yml
homepage: https://cursor.com
docs: https://cursor.com/docs/cli/overview
changelog: https://cursor.com/changelog
tagline: "Closed editor, CLI, and cloud agent, harvested from the changelog, never from github.com/cursor/cursor."
compared_with:
  - claude-code
  - antigravity
  - github-copilot-cli
  - grok-build
surface_class: closed_source_release_notes
evidence_floor: official_changelog
status: active_watch
first_published: 2026-08-21
last_updated: 2026-08-21
last_full_review: 2026-08-21
claims:
  - id: github-tracker-is-not-source
    last_verified: 2026-08-21
    status: open_question
    note: "github.com/cursor/cursor is a README and a bug tracker. It is not the editor and not the agent."
  - id: changelog-mixes-surfaces
    last_verified: 2026-08-21
    status: open_question
    note: "The changelog mixes editor, CLI, cloud agents, and Origin hosting. A finding that does not name the surface is unfinished."
stance:
  use_for: "Teams already in the Cursor editor or cloud-agent product who need a dated, changelog-backed read of what the vendor says shipped. The terminal surface is the `agent` CLI from `curl https://cursor.com/install`."
  avoid_for: "Anyone who must audit enforcement in source. github.com/cursor/cursor will not help. Do not treat a cloud-agent changelog entry as a CLI change, or Origin hosting as a permission model."
  watch_next: "Whether the CLI, the editor, and cloud agents keep one permission story or three; whether `/goal` and isolated-VM subagents are described for the CLI or only for cloud agents; whether any versioned binary digest becomes pinable the way Antigravity's tarball is."
---

# Cursor

## Operator Read

Added 21 August 2026. Closed Anysphere product. The evidence is the
[changelog](https://cursor.com/changelog) and the
[CLI docs](https://cursor.com/docs/cli/overview).

[github.com/cursor/cursor](https://github.com/cursor/cursor) looks like a
repository. It is a README, a security policy, and a `.github` directory.
Download the editor from cursor.com. Install the terminal agent with
`curl https://cursor.com/install -fsS | bash` and run `agent`. Do not open
that GitHub tree looking for a sandbox.

At intake the changelog led with a 19 August 2026 entry about cloud-agent
subscriptions, custom modes, subagents on their own machines, and `/goal`.
Those sentences are what the vendor published that day. They are not yet a
statement that the `agent` CLI gained those behaviors. The next harvest has
to say which surface moved.

## Why it is here

People already run it. Omnigent already routes work onto it. A publication
that watches the wrap and not the wrapped tool is guessing at the gate.

This is Claude Code's floor, not Codex's. You can date a changelog entry.
You cannot `git merge-base` a permission claim. That is still worth doing.
The changelog is how an operator learns that a control was announced, and
a local probe is how they learn whether it binds.

## What to do with it

When you read an entry, write down editor, CLI, cloud agent, or Origin
before you write down the feature. If the page does not say, the finding
does not either. Pin a CLI version string if the installed binary reports
one. If it does not, the dated changelog URL is the whole channel.
