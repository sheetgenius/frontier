---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-five-october-13-advisories-one-critical-and-four-high-move-the-patch-floor-to-v0-18
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-rqfc-q7j9-5v59
    precision: official_docs
  - url: https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-h6vq-3549-mppq
    precision: official_docs
  - url: https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-jw77-57v9-jmcm
    precision: official_docs
  - url: https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-m3m2-42jg-grrv
    precision: official_docs
  - url: https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-v3vj-mch3-x6c2
    precision: official_docs
  - url: https://github.com/omnigent-ai/omnigent/commit/d2e077a1e3d502748ec0d792dfdede7319ccb968
    precision: commit
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.18.0
    precision: github_release
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/routes/imports.py#L392-L397
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/bundles.py#L33-L62
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/docs/AGENT_YAML_SPEC.md#L570-L588
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-five-october-13-advisories-one-critical-and-four-high-move-the-patch-floor-to-v0-18

Five October 13 advisories, one critical and four high, move the patch floor to v0.18.0. Five advisories published on October 13 are patched in stable 0.18.0, one critical and four high. On multi-user servers GHSA-rqfc let a session importer name someone else's connected host and run an agent as that host's OS account if its harness was configured; 0.18.0 checks host ownership before saving and validates a replacement before deleting the original. GHSA-jw77 let an uploaded Python or TypeScript tool execute its module body with runner privileges during discovery, before tool-call isolation; the fix rejects source tools in untrusted uploads, nested agents included. GHSA-h6vq let Git global options hide a push from the opt-in GitHub policy, bypassing repo, branch, force-push and tag-push rules using existing credentials. GHSA-m3m2 covers further shell-policy parsing bypasses; GHSA-v3vj covers a Linux bubblewrap launcher escape (sections 12 and 13). The v0.18.0 GitHub release body omits #9844 and does not identify these as security fixes.

Channel: tagged-release. Half: defect. Date: 2026-10-13.

Operator consequence: Upgrade both multi-user servers and affected agent hosts to 0.18.0 and restart affected agents/helpers. Until patched, restrict agent uploads and server users, disconnect sensitive hosts, and follow the bubblewrap advisory's disposable VM/container workaround without sensitive credentials or host mounts. Review imported host associations. Replace uploaded source tools with MCP, upload the replacement and start new sessions; re-uploading creates a version and does not rewrite old sessions. The October 14 crosscheck found all eight September/October IDs absent from the global GitHub advisory API and empty OSV version queries; this is a dated scanner-coverage limitation, not proof that every scanner misses them. Read the canonical repository advisories directly.

## Receipt
- https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-rqfc-q7j9-5v59
- https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-h6vq-3549-mppq
- https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-jw77-57v9-jmcm
- https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-m3m2-42jg-grrv
- https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-v3vj-mch3-x6c2
- https://github.com/omnigent-ai/omnigent/commit/d2e077a1e3d502748ec0d792dfdede7319ccb968
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.18.0
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/routes/imports.py#L392-L397
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/bundles.py#L33-L62
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/docs/AGENT_YAML_SPEC.md#L570-L588
