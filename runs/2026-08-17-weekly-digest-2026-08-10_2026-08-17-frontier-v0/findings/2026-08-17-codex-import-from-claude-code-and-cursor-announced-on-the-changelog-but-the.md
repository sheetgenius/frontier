---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-codex-import-from-claude-code-and-cursor-announced-on-the-changelog-but-the
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.147.0
    precision: github_release
---
# 2026-08-17-codex-import-from-claude-code-and-cursor-announced-on-the-changelog-but-the

`/import` from Claude Code and Cursor announced on the changelog, but the code shipped a week earlier.

The official changelog announced on 2026-08-11 that Codex CLI can import setup and recent chats from Claude Code and Cursor via `/import`. The 0.147.0 release notes describe the same capability as importing Cursor-managed skills and synchronizing changes to imported Claude and Cursor conversations without creating duplicates.

Channel: docs-only. Ancestry: The 2026-08-11 changelog entry at learn.chatgpt.com/docs/changelog states 'Codex CLI can also import supported setup and recent chats from Claude Code and Cursor with /import' and names no version. The underlying code is in the rust-v0.147.0 compare list: (#35623) 'Parse Claude and Cursor session records separately', bbbf396839b3bab872291354878980ba82ad4aee 'Sync updates to imported external agent sessions (#36356)', (#36361) Cursor skill import, e9a692d53ba55d981c353ced88650dd1595c2b5f 'Preserve working directories when importing external sessions (#36964)'. So: docs surface moved in w2, code channel was tagged-release on 2026-08-07.

Operator consequence: Try it if you are moving a team between harnesses, and note the four-day gap between the tag and the announcement  --  the changelog is a lagging indicator of what your installed binary can do. Two cautions. First, an import carries another harness's configuration into Codex's trust model, and imported skills and MCP connectors land under Codex's permissions, not the source harness's; review what came across rather than assuming equivalence. Second, this is a fact about the pair: behaviour observed in Claude Code or Cursor does not carry through the import.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.147.0
