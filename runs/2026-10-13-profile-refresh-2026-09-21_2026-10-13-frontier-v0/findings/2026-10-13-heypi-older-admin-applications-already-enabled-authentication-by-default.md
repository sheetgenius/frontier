---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-older-admin-applications-already-enabled-authentication-by-default
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/hunvreus/heypi/blob/a4f69da2ed64d42fc25e75341956ce7c34f77e73/packages/heypi/src/admin/index.ts#L119-L129
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/a4f69da2ed64d42fc25e75341956ce7c34f77e73/packages/heypi/src/admin/index.ts#L234-L248
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/src/admin/index.ts#L133-L143
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/src/admin/index.ts#L250-L264
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/docs/configuration/admin.md#L37-L65
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/commit/2dd2456e003f08f0ae64466e142d011ec9caa1c7
    precision: commit
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/admin.ts#L287-L318
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L177-L192
    precision: tagged_commit_file
---
# 2026-10-13-heypi-older-admin-applications-already-enabled-authentication-by-default

Older admin applications already enabled authentication by default. The rewritten admin server gained required non-loopback bearer-token authentication on 2026-07-10, included in 0.3.0-beta.0. The older 0.1.3 and 0.2.0-beta.0 admin applications already had authentication enabled by default. Current admin construction is opt-in, defaults to 127.0.0.1 and refuses non-loopback startup without a token; wildcard bindings also require configured hosts. The secret-submission route is handled before the general bearer check and has its own request/host handling, so the token statement must not be generalized to every endpoint.

Channel: tagged-release legacy 0.1.3; preview-or-beta old beta.0 and current 0.3 beta; historical correction, no new advisory. Half: both. Date: 2026-06-04 (legacy 0.1.3); rewritten-server fix 2026-07-10; factual correction for the 2026-10-13 profile.

Operator consequence: Withdraw the earlier profile's categorical pre-0.3 unauthenticated-admin allegation and blanket disclosure/rotation advice. Only an independently verified exposed revision or deployment could justify that advice. For current beta administration, retain loopback or explicitly configure token/hosts and review the secret handoff separately. This corrects a factual error; it is not an October fix or a new security advisory.

## Receipt
- https://github.com/hunvreus/heypi/blob/a4f69da2ed64d42fc25e75341956ce7c34f77e73/packages/heypi/src/admin/index.ts#L119-L129
- https://github.com/hunvreus/heypi/blob/a4f69da2ed64d42fc25e75341956ce7c34f77e73/packages/heypi/src/admin/index.ts#L234-L248
- https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/src/admin/index.ts#L133-L143
- https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/src/admin/index.ts#L250-L264
- https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/docs/configuration/admin.md#L37-L65
- https://github.com/hunvreus/heypi/commit/2dd2456e003f08f0ae64466e142d011ec9caa1c7
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/admin.ts#L287-L318
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L177-L192
