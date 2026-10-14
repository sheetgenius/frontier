---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-just-bash-3-6-0-carries-the-earlier-hard-link-escape-fix
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel-labs/just-bash/security/advisories/GHSA-g5pf-mh4h-h655
    precision: official_docs
  - url: https://github.com/vercel-labs/just-bash/commit/3ee215c2ad56c96ce0d88e2813050df9f15afa38
    precision: commit
  - url: https://github.com/vercel-labs/just-bash/releases/tag/just-bash%403.6.0
    precision: github_release
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-just-bash/src/index.ts#L26-L85
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/pnpm-lock.yaml#L1520
    precision: tagged_commit_file
---
# 2026-10-13-heypi-just-bash-3-6-0-carries-the-earlier-hard-link-escape-fix

just-bash 3.6.0 carries the earlier hard-link escape fix. just-bash 3.6.0 is the window release; its hard-link isolation fix predates the window. In affected ReadWriteFs versions, a pre-existing hard link inside a mounted root could let a guest write change the same inode through its outside-root name. heypi mounts workspace and shared directories through this class. The repository lock still selects affected 3.1.0; fresh unlocked resolution selects fixed 3.6.0. The latter also fixes late worker-bridge settlements after cancellation. heypi wires cancellation and timeouts, but that proves neither that every command uses the affected bridge nor that this failure was reproduced in heypi. just-bash network access remains disabled by default when not configured.

Channel: tagged-release just-bash 3.3.0 and 3.6.0; heypi adapter preview-or-beta. Half: both. Date: 2026-10-01 (3.6.0 release); historical fix 2026-08-13 and advisory 2026-09-15.

Operator consequence: Inspect npm ls just-bash or pnpm why just-bash. Replace artifacts below 3.3.0, with 3.6.0 the current target, while also repairing the read-only proxy in section 11. Do not revert to the vulnerable 3.1.0 repository lock to avoid API drift. Check mounted roots for pre-existing host-created hard links. The 2026-10-14 audit-service observation is a reason to read the issuing advisory directly, not proof of historical 2026-10-13 service responses or a promise that npm audit/Dependabot will never detect it.

## Receipt
- https://github.com/vercel-labs/just-bash/security/advisories/GHSA-g5pf-mh4h-h655
- https://github.com/vercel-labs/just-bash/commit/3ee215c2ad56c96ce0d88e2813050df9f15afa38
- https://github.com/vercel-labs/just-bash/releases/tag/just-bash%403.6.0
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-just-bash/src/index.ts#L26-L85
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/pnpm-lock.yaml#L1520
