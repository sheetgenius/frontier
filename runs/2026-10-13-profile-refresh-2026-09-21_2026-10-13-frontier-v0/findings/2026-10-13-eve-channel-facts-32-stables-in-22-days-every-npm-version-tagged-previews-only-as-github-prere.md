---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-channel-facts-32-stables-in-22-days-every-npm-version-tagged-previews-only-as-github-prere
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.79.0
    precision: github_release
  - url: https://registry.npmjs.org/eve/0.79.0
    precision: official_docs
  - url: https://github.com/vercel/eve/commit/0cd423996906ae61008e5ab53f131512c9565cd8
    precision: commit
  - url: https://github.com/vercel/eve/commit/64301d168cea6cd6ef2637f762113dd6874fdfae
    precision: commit
  - url: https://www.npmjs.com/package/eve?activeTab=versions
    precision: package_registry
  - url: https://github.com/vercel/eve/releases/tag/eve-preview-pr-4524-724846842
    precision: github_release
  - url: https://github.com/vercel/eve/releases/tag/eve%400.75.0
    precision: github_release
  - url: https://github.com/vercel/eve/blob/eve%400.78.0/docs/evals/tool-stubs.mdx?plain=1#L159-L184
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/pull/4427
    precision: merged_pr
---
# 2026-10-13-eve-channel-facts-32-stables-in-22-days-every-npm-version-tagged-previews-only-as-github-prere

Channel facts: 32 stables in 22 days, every npm version tagged, previews only as GitHub prerelease tarballs, and no Eve-specific advisory found in checked GitHub records. Provenance improved on the parent window, which found three npm versions with no tag: all 32 versions published in this window have a tag and release notes. Main was eight commits ahead of stable at the UTC close. Previews now ship as GitHub prerelease tarballs installed by URL, with checksums, and never touch npm `latest`. What they previewed, tool stubs, shipped in 0.75.0: evals can replace a tool's output per session with matched JSON responses or thrown errors, but replacement "is denied by default, including in development," is granted only through verified subjects or a custom authenticator, and "Anyone your channel admits to an existing session can use its stubs." Security fixes still arrive as ordinary patch bullets without an Eve-specific GHSA found in the checked records, including one the vendor's own PR calls a privilege escalation.

Channel: tagged-release (32 stable tags); preview-or-beta (4 GitHub prerelease objects). Half: both. Date: 2026-09-22 to 2026-10-13.

Operator consequence: Pin current stable 0.79.0, whose registry artifact has a matching source tag. Skip stale beta and superseded preview tarballs. Monitor release notes as well as dependency advisory feeds: the latter caught Undici, while the Eve approval and credential repairs were documented as release bullets. Grant allowToolStubs only to an eval runner subject, preferably on an isolated eval deployment; anyone a channel admits to an existing session can use that session's stubs.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.79.0
- https://registry.npmjs.org/eve/0.79.0
- https://github.com/vercel/eve/commit/0cd423996906ae61008e5ab53f131512c9565cd8
- https://github.com/vercel/eve/commit/64301d168cea6cd6ef2637f762113dd6874fdfae
- https://www.npmjs.com/package/eve?activeTab=versions
- https://github.com/vercel/eve/releases/tag/eve-preview-pr-4524-724846842
- https://github.com/vercel/eve/releases/tag/eve%400.75.0
- https://github.com/vercel/eve/blob/eve%400.78.0/docs/evals/tool-stubs.mdx?plain=1#L159-L184
- https://github.com/vercel/eve/pull/4427
