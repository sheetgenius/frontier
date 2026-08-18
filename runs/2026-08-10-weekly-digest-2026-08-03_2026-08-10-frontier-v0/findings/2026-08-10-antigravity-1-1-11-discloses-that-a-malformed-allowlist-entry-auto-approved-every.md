---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-antigravity-1-1-11-discloses-that-a-malformed-allowlist-entry-auto-approved-every
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11
    precision: github_release
---
# 2026-08-10-antigravity-1-1-11-discloses-that-a-malformed-allowlist-entry-auto-approved-every

1.1.11 discloses that a malformed allowlist entry auto-approved every command.

The 1.1.11 changelog states: 'Fixed an allowlist entry that tokenizes to zero command words -- `command(time)`, a comment-only entry, or an empty compound such as `()` -- matching every command and silently auto-approving anything the agent ran; such an entry now matches nothing.' Class: permission/authorization bypass. Per the vendor's own permissions doc, `command` rules match by whitespace-separated token prefix; an entry that tokenizes to zero words therefore matched the empty prefix, i.e. everything. A second entry in the same release, 'Fixed commands being auto-approved while the session was in request-review or strict permission mode', says the two strictest modes were independently not binding.

Channel: tagged-release. Ancestry: gh api repos/google-antigravity/antigravity-cli/releases/tags/1.1.11 returns prerelease:false, draft:false, target_commitish:main, published_at 2026-08-07T02:35:23Z. gh api .../git/ref/tags/1.1.11 resolves to commit 1d853acd23f2b0fc55da42377aab1a05f5e34aa8, which is on main (listed by the commits API for the window). CHANGELOG.md fetched at that pinned SHA has '## 1.1.11' as its top section and the entry verbatim. CAVEAT ON ANCESTRY: the repo tree at fbf22703 contains only .github, CHANGELOG.md, README.md, agy-cli-demo.gif and examples; /languages returns {} and /license returns 404. Ancestry here proves when the changelog commit landed, not that any binary derives from it.

Operator consequence: Upgrade to 1.1.11 or later, then re-audit every `permission.allow` list you have ever written for entries that tokenize to zero command words -- a stray comment line, an empty `()`, or a bare `command(time)`-shaped entry. On any version before 2026-08-07, treat a session that carried such an entry as having run with no command gate at all, and treat request-review and strict mode on those versions as advisory rather than enforcing. Read agent transcripts from that period rather than assuming the prompt log is complete.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11
