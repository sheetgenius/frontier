---
schema_version: bitter.frontier_digest_fragment.v0
fragment_id: 2026-05-12-pi-coding-agent-fragment
window:
  start: 2026-05-07
  end: 2026-05-12
parent_run: 2026-05-12-partial-cycle-pi-coding-agent-2026-05-07_2026-05-12-frontier-v0
status: not_published
note: >
  Digest fragment from a partial cycle. Not itself a weekly digest.
  Exists to test the digest-then-profile sequencing on Pi Coding Agent.
---

# Pi Coding Agent Fragment (Partial Cycle, 2026-05-07 -- 2026-05-12)

The big news from Pi this window is administrative. v0.74.0 migrates the
project from `badlogic/pi-mono` (Mario Zechner's personal GitHub account) to
`earendil-works/pi-mono` and the npm package from `@mariozechner/pi-coding-agent`
to `@earendil-works/pi-coding-agent`. Pi is becoming an organization, Earendil
Works, rather than a personal project.

That matters for operators in two ways. First, if you installed Pi globally,
`pi update --self` will handle the migration to the new package name when
`@earendil-works/pi-coding-agent` publishes. You don't need to reinstall
manually. Second, if you have Pi pinned in CI, Dockerfiles, or a `package.json`,
you will need to update the package reference yourself.

This is not a feature release. But it is a signal worth noting: the organizational
transition suggests sustained investment and a more durable product identity. Pi
has been shipping a release roughly every few days for the past several months.
Earendil Works formalizes that commitment.

On the technical side: v0.73.1 adds JSONC parsing for `models.json` (comments
and trailing commas are now valid), which is a small ergonomic win for operators
maintaining custom provider configurations. Interactive OAuth login selection is
also new: providers can now present multiple login choices in `/login` instead
of a single flow.

The harness SDK is getting more explicit about stream configuration. Commits
in the window add `SimpleStreamOptions` and `Transport` types to the harness
config surface. This is relevant if you're embedding Pi via `createAgentSession`
or the `@earendil-works/pi-ai` SDK, not if you're using the CLI.

Pi's pattern -- minimal core, high provider churn, no governance features --
remains stable across this window. Nothing in v0.73.1 or v0.74.0 changes the
core architecture or adds permission/approval surfaces.

## What To Try

- If you have Pi installed globally: run `pi update --self` after
  `@earendil-works/pi-coding-agent` publishes. Verify the migration completes
  and your config, sessions, and extensions carry over.
- If you maintain a `models.json` for custom providers: add comments to document
  your configuration choices. JSONC parsing is now supported.

## What Remains Uncertain

- When exactly will `@earendil-works/pi-coding-agent` be published to npm? v0.74.0
  updates the internal references but the new package is not yet on npm as of
  2026-05-12.
- Does the repo migration to `earendil-works/pi-mono` (and then further to
  `earendil-works/pi`) affect any existing issue, PR, or CI integrations that
  reference the old `badlogic/pi-mono` URL?
- Does Earendil Works plan to change Pi's pricing model, cloud offering, or
  distribution once the organizational transition completes?
