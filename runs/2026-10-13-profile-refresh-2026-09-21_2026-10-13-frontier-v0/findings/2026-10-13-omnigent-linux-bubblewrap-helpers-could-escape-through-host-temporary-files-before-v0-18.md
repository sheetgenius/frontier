---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-linux-bubblewrap-helpers-could-escape-through-host-temporary-files-before-v0-18
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-v3vj-mch3-x6c2
    precision: official_docs
  - url: https://github.com/omnigent-ai/omnigent/commit/d2e077a1e3d502748ec0d792dfdede7319ccb968
    precision: commit
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/inner/sandbox.py#L1247-L1287
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-linux-bubblewrap-helpers-could-escape-through-host-temporary-files-before-v0-18

Linux bubblewrap helpers could escape through host temporary files before v0.18.0. On affected Linux bubblewrap deployments, code already executing inside a sandbox could access host temporary files, compromise the launcher and execute as the OS account running Omnigent. Administrator privileges were not required. The fix removes broad temporary-directory write grants from ACP, Goose, Kimi, Pi and Qwen helper paths, rejects write grants exposing the launcher directory and changes launcher files to owner-only permissions. This directly overturns the old unsandboxed-runner-only mitigation.

Channel: tagged-release. Half: defect. Date: 2026-10-13T08:57:51Z.

Operator consequence: Upgrade agent hosts to 0.18.0 and restart affected helper processes. Until then use the advisory's disposable VM or container without sensitive host credentials or host filesystem mounts. A patched package on the central server does not replace already running helpers on another host.

## Receipt
- https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-v3vj-mch3-x6c2
- https://github.com/omnigent-ai/omnigent/commit/d2e077a1e3d502748ec0d792dfdede7319ccb968
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/inner/sandbox.py#L1247-L1287
