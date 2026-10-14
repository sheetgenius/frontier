---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-stable-repaired-sandbox-revocation-and-credential-output-gaps-without-new-advisories
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/fa92bd54c449b71a2104c292af5c2fe1ce112567
    precision: commit
  - url: https://github.com/openclaw/openclaw/commit/08f5fb80f301d8236cadb8acc853d95566fd7f10
    precision: commit
  - url: https://github.com/openclaw/openclaw/pull/155964
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/issues/156098
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/pull/156106
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/pull/161480
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/compare/6e84f49a...v2026.10.3
    precision: git_compare
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.1/CHANGELOG/2026.10.1.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.2/CHANGELOG/2026.10.2.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/security/advisories
    precision: official_docs
---
# 2026-10-13-openclaw-stable-repaired-sandbox-revocation-and-credential-output-gaps-without-new-advisories

Stable repaired sandbox, revocation and credential-output gaps without new advisories. 9.7 repairs two P0-labeled issues: trusted-proxy HTTP callers could have their mandatory sandbox skipped on new sessions, and registered background execution could continue after its operator lost access. 10.1 rejects NUL execution arguments, fails closed on unresolved peer credentials and prevents stale Codex sessions mutating successor workspaces. 10.2 repairs masking for credentials split across long-output chunks. All named fixes are in 10.3. No new repository advisory accompanies these in-window release repairs; the separate wider-database events in section 17 concern older disclosures.

Channel: tagged-release, all retained at 2026.10.3; extended-stable coverage not fully resolved. Half: defect. Date: 2026-09-30 first stable sandbox/revocation fixes, 2026-10-10 other hardening, 2026-10-12 redaction fix.

Operator consequence: Use the current 10.3 pin rather than interpreting 9.7's two fixes as a complete current floor. Read versioned security/reliability release bullets even when the repository advisory list is quiet. Extended-stable's later-fix coverage and whether the corresponding bugs exist on its base require code-specific checks; absence from notes is not proof of absence.

## Receipt
- https://github.com/openclaw/openclaw/commit/fa92bd54c449b71a2104c292af5c2fe1ce112567
- https://github.com/openclaw/openclaw/commit/08f5fb80f301d8236cadb8acc853d95566fd7f10
- https://github.com/openclaw/openclaw/pull/155964
- https://github.com/openclaw/openclaw/issues/156098
- https://github.com/openclaw/openclaw/pull/156106
- https://github.com/openclaw/openclaw/pull/161480
- https://github.com/openclaw/openclaw/compare/6e84f49a...v2026.10.3
- https://github.com/openclaw/openclaw/blob/v2026.10.1/CHANGELOG/2026.10.1.md
- https://github.com/openclaw/openclaw/blob/v2026.10.2/CHANGELOG/2026.10.2.md
- https://github.com/openclaw/openclaw/security/advisories
