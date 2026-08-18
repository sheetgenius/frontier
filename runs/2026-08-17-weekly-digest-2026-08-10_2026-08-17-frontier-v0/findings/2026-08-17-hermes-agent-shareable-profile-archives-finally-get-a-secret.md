---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-shareable-profile-archives-finally-get-a-secret
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/83458
    precision: merged_pr
---
# 2026-08-17-hermes-agent-shareable-profile-archives-finally-get-a-secret

Shareable profile archives finally get a secret scrub.

Profile export now force-runs `agent.redact.redact_sensitive_text(..., force=True)` over the staged copy before writing the .tar.gz  --  the same pass as `hermes sessions export --redact`. `force=True` deliberately ignores `security.redact_secrets` and HERMES_REDACT_SECRETS so share archives stay scrubbed even when live redaction is off. The live profile on disk is never rewritten, and symlinks to text files are materialised only when redaction actually changes content, so the scrub cannot follow a link back into the source tree. The PR is explicit about the remaining gap: this is secret-pattern scrubbing, not general PII  --  names, emails and paths in prose still ship.

Channel: tagged-release. Ancestry: merge_commit_sha fafbdd25ad0e81758df8d30ef34aceb1a8add647; compare/fafbdd25...v2026.8.13 -> status=ahead, ahead_by=515, behind_by=0 (ancestor of stable tag v2026.8.13).

Operator consequence: Upgrade before you share another profile. Then still open the archive: the scrub is pattern-based on secret shapes only, so a credential in an unusual format, and every name, email and internal path in your SOUL.md prose, is still in the tarball you hand someone.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/83458
