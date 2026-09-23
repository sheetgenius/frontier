---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omnigent-three-bundle-upload-advisories-published-2026-09-16-all-fixed-in-v0-14-0-by-one
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-q5jc-8hqr-9hm4
    precision: official_docs
---
# 2026-09-21-omnigent-three-bundle-upload-advisories-published-2026-09-16-all-fixed-in-v0-14-0-by-one

Three bundle-upload advisories published 2026-09-16, all fixed in v0.14.0 by one PR. What each actually allows, all requiring an authenticated user who can upload an agent bundle to a multi-user server:
- GHSA-q5jc: the policy-handler allowlist, the defense the June advisory family relied on, was skipped for the single-file omnigent YAML shape and never read the `function:` key. A policy with `function: {path: <module.attr>}` was imported and called at session start before the `callable()` check: arbitrary Python import-and-call on the runner/server. The policy system itself was the RCE vector.
- GHSA-598r: a terminal's `os_env.cwd` was not validated on upload and wins over the runner workspace at runtime, so with `sandbox.type: none` it yields an unconfined host shell outside the workspace. `OMNIGENT_RUNNER_WORKSPACE` does not mitigate it.
- GHSA-p5x3: the same cwd check did not recurse into sub-agents; mitigated by `OMNIGENT_RUNNER_WORKSPACE`.
The advisories state the fix enforces the upload boundary only; it does not change terminal runtime cwd precedence, and trusted local configurations are out of scope.

Channel: tagged-release. Half: defect (closed). Date: advisories published 2026-09-16; fix released 2026-09-15.

Operator consequence: Upgrade any server that accepts bundles from more than one user to v0.14.0. Before upgrading, re-audit uploaded bundles for `function:` policies with no `handler`/`callable`, absolute or `..` cwd on terminals and sub-agents. Do not treat a registered-handler allowlist as containment on <=0.13.0. Single-user local installs are outside the stated threat model.

## Receipt
- https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-q5jc-8hqr-9hm4
