---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-1-0-93-adds-permissions-limitto-a-managed-domain-boundary-that-allow-all-cannot-widen
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L33
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L708-L726
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-1-0-93-adds-permissions-limitto-a-managed-domain-boundary-that-allow-all-cannot-widen

1.0.93 adds `permissions.limitTo`, a managed domain boundary that allow-all cannot widen. "Add enterprise permissions.limitTo to enforce managed domain boundaries for network requests" (L33). The docs define it this way. It takes `Domain(...)` entries only, and a request to a domain outside the list "is denied without prompting, and user rules, saved approvals, and allow-all modes can't widen it". "URLs detected in shell requests" count as Domain requests. An empty list denies every domain, and an invalid list is enforced as empty instead of discarding the rest of the policy. `deny` still wins over `limitTo`, while `ask` and `allow` only refine requests already inside the boundary. Every managed source that sets `limitTo` must admit a request (intersection). It "doesn't restrict `shell`, `read`, or `write` operations by themselves" (L722-L726). As of `602021b0ba16` the key appears in the CLI reference's MDM table (L669), not in the cross-client enterprise reference table.

Channel: tagged-release. Half: capability. Date: 2026-10-07.

Operator consequence: Use permissions.limitTo as a documented permission-layer domain restriction that user approvals and allow-all modes cannot widen. The docs say detected URLs are checked, but do not establish whether runtime-constructed destinations are detected. That requires a probe. It is not an independently tested network boundary and does not restrict shell, read or write operations by themselves. Pair it with sandbox host rules where appropriate, preserving the documented Windows direct-connection limitation in item 3. Check that your managed policy channel accepts the key before relying on it.

## Receipt
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L33
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L708-L726
