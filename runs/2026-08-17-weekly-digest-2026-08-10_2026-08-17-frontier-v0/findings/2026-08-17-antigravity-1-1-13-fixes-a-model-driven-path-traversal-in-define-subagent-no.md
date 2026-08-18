---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-antigravity-1-1-13-fixes-a-model-driven-path-traversal-in-define-subagent-no
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.13
    precision: github_release
---
# 2026-08-17-antigravity-1-1-13-fixes-a-model-driven-path-traversal-in-define-subagent-no

1.1.13 fixes a model-driven path traversal in define_subagent -- no advisory, no CVE.

'Fixed `define_subagent` using a model-supplied agent name directly as a directory name, so a name containing `..` could write its `agent.md` outside the conversation's artifact directory; names are now validated at both the tool and the handler.' Class: path traversal yielding an arbitrary file write, with the traversal string supplied by the model rather than by the user -- i.e. reachable from anything that can influence model output, including tool results and fetched content. It was shipped as one bullet among twenty in a routine release, with no advisory, no CVE or GHSA, and no security surface on the repository to publish one on.

Channel: tagged-release. Ancestry: gh api .../releases/tags/1.1.13 -> prerelease:false, draft:false, published_at 2026-08-14T02:26:19Z. The 1.1.13 section is present in CHANGELOG.md at commit fbf22703a9c4bda0758b5bace0ab3142746780a9 ('docs: add changelog for 1.1.13 (#791)', on main, 2026-08-14) -- NOT at the commit the 1.1.13 tag points to; see the tag-drift entry. gh api .../security-advisories returns []; .github/SECURITY.md returns 404.

Operator consequence: Upgrade to 1.1.13 or later. If you ran subagent definition on earlier versions in a session that ingested untrusted content, check for stray `agent.md` files outside the conversation artifact directory. The broader consequence is the one to carry: this product has no security-advisory channel -- the advisories endpoint is empty and there is no SECURITY.md -- so a path-traversal fix and a spelling fix arrive in the same undifferentiated bullet list. If you need to know when Antigravity patches a vulnerability, you must diff the changelog yourself; nothing will page you.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.13
