---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-2-3-0-returns-flue-to-export-style-releases-squashed-commits-from-a-source-tree-not-on-git
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/commit/95a8c86244557e4c257b0fbd7eef2481de2c2150
    precision: commit
  - url: https://github.com/withastro/flue/commit/deee93b40d275ecc9a50c50af2158f20089d54bc
    precision: commit
  - url: https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L3-L16
    precision: tagged_commit_file
  - url: https://api.github.com/repos/withastro/flue/issues/832/comments
    precision: official_docs
  - url: https://github.com/withastro/flue/issues/764
    precision: official_docs
  - url: https://github.com/withastro/flue/discussions/855
    precision: official_docs
  - url: https://github.com/withastro/flue/discussions/844
    precision: official_docs
  - url: https://github.com/withastro/flue/discussions/840
    precision: official_docs
  - url: https://github.com/withastro/flue/discussions/843
    precision: official_docs
  - url: https://github.com/withastro/flue/discussions/842
    precision: official_docs
  - url: https://github.com/withastro/flue/issues/602
    precision: official_docs
---
# 2026-10-13-flue-2-3-0-returns-flue-to-export-style-releases-squashed-commits-from-a-source-tree-not-on-git

2.3.0 returns Flue to export-style releases: squashed commits from a source tree not on GitHub, a plain v-tag, the root CHANGELOG, and no GitHub Release. Four weeks after adopting Changesets (2.0.7, 2026-09-15), Flue dropped it. 2.3.0 reached the public repo as two squashed commits generated elsewhere. It has no per-change history, no PR and no GitHub Release, and the root CHANGELOG.md is the only release note (it again carries 2.0.7 through 2.3.0). The CHANGELOG does not mention the process change. Two behavior fixes rode inside the commit titled "chore: remove Changesets release tooling": the finish-hook re-render in session.ts (section 6) and narrowed exports in document-attachments.ts. The public tree no longer holds the runtime, SDK, OpenTelemetry or Vite tests for the contracts the profile leans on: abort.test.ts, session-abort.test.ts, truncated-tool-call.test.ts, harness-tool-lineage.test.ts, tool-deadline.test.ts, mcp.test.ts, telemetry/content.test.ts and observe-bounded.test.ts are all gone. On 2026-10-12, between 06:59Z and 07:53Z, the lead maintainer closed 23 issues: 14 were converted to Discussions (feature requests, including conversation data deletion #764 -> discussion #855, submission retry #787 -> #844, bounded history in `@flue/react` #807 -> #840, LINE #798 -> #843 and WeChat #799 -> #842), 8 were fixed in 2.2.0 or 2.3.0, and 1 (#602) was closed as not reproducible. GitHub labels all 23 "completed". Two closed issues were re-filed the same day as new open issues (#744 as #851, #669 as #850); #744 also became discussion #847. Feature requests continue in Discussions, where #855 (deletion for retention or erasure) remains open. CONTRIBUTING.md at v2.3.0 (no-PR policy unchanged in the window) describes the project as an experiment in which agents implement and a small team decides.

Channel: tagged-release. Half: defect. Date: 2026-10-12.

Operator consequence: Track Flue by its `v` tags and the root CHANGELOG at each tag. GitHub Releases and per-package changelogs have stopped, and the per-package files no longer exist. An issue closed as "completed" is not evidence that anything shipped; feature requests now live in Discussions, including open deletion request #855. Per-change public commits and regression tests no longer cover the runtime contracts here, so inspect the release diff and run your own tests for the contracts you depend on: abort repair, tool timeouts, trace redaction, history windows. The verification work that public PRs and CI used to do now falls on you. Commit ancestry, which this watchlist uses to resolve channels, now resolves only to whole releases for Flue.

## Receipt
- https://github.com/withastro/flue/commit/95a8c86244557e4c257b0fbd7eef2481de2c2150
- https://github.com/withastro/flue/commit/deee93b40d275ecc9a50c50af2158f20089d54bc
- https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L3-L16
- https://api.github.com/repos/withastro/flue/issues/832/comments
- https://github.com/withastro/flue/issues/764
- https://github.com/withastro/flue/discussions/855
- https://github.com/withastro/flue/discussions/844
- https://github.com/withastro/flue/discussions/840
- https://github.com/withastro/flue/discussions/843
- https://github.com/withastro/flue/discussions/842
- https://github.com/withastro/flue/issues/602
