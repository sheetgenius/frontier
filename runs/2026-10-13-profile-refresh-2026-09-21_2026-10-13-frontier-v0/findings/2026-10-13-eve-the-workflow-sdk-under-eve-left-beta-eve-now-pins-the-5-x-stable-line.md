---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-the-workflow-sdk-under-eve-left-beta-eve-now-pins-the-5-x-stable-line
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/package.json
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/commit/1f81fcd5ac1f255ce31cc2d8ead012ac38b6a4d0
    precision: commit
  - url: https://github.com/vercel/eve/commit/a4d38b365df91b8e6ed3dc018e17ab55f9af924b
    precision: commit
  - url: https://github.com/vercel/eve/releases/tag/eve%400.70.2
    precision: github_release
  - url: https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/package.json#L623-L628
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/package.json#L520-L526
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/blob/eve%400.78.0/docs/guides/deployment/self-hosting.md?plain=1#L45
    precision: tagged_commit_file
---
# 2026-10-13-eve-the-workflow-sdk-under-eve-left-beta-eve-now-pins-the-5-x-stable-line

The Workflow SDK under eve left beta: eve now pins the 5.x stable line. Eve's Workflow build/vendor inputs moved from prerelease builds to stable version pins; these are devDependencies, not the consumer dependency list. Alongside it, long sessions move to a fresh workflow run on the same deployment after compaction, so the event log stops growing without bound (0.70.2), and session steps store only the state they changed rather than a full copy (0.69.0). eve itself is still beta under the Vercel beta terms (README L146-L148), and the self-hosting guide still names the beta Workflow line.

Channel: tagged-release. Half: capability. Date: 2026-10-02 (eve@0.70.2), 2026-10-08 (eve@0.75.1).

Operator consequence: Stable Workflow version strings are architectural evidence, not a measured recovery guarantee, and local restarts now require explicit recovery (section 17). Eve remains beta: the checkpoint format above it changed three times in this window (section 8). If you self-host with your own Workflow world, build it against the 5.x stable line eve pins, not the `5.0.0-beta` line the self-hosting guide still names.

## Receipt
- https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/package.json
- https://github.com/vercel/eve/commit/1f81fcd5ac1f255ce31cc2d8ead012ac38b6a4d0
- https://github.com/vercel/eve/commit/a4d38b365df91b8e6ed3dc018e17ab55f9af924b
- https://github.com/vercel/eve/releases/tag/eve%400.70.2
- https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/package.json#L623-L628
- https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/package.json#L520-L526
- https://github.com/vercel/eve/blob/eve%400.78.0/docs/guides/deployment/self-hosting.md?plain=1#L45
