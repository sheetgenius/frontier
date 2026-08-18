---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openhands-launcher-services-no-longer-spawn-through-an-implicit
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/16093
    precision: merged_pr
---
# 2026-08-17-openhands-launcher-services-no-longer-spawn-through-an-implicit

Launcher services no longer spawn through an implicit shell.

getProcessTreeSpawnOptions() previously spread caller-supplied spawn options without neutralizing an explicit shell: true, so a service could be launched through cmd.exe with its arguments subject to shell metacharacter interpretation. The reported symptom was concrete: the default agent-server uvx argument 'agent-client-protocol<0.11' had its '<0.11' parsed by cmd.exe as input redirection, the agent-server exited before binding port 18000, and ingress returned Bad Gateway. The fix forces shell: false centrally and adds a cross-platform regression test proving the literal string reaches the child executable even when a caller passes shell: true. Shipped in v1.13.0.

Channel: tagged-release. Ancestry: PR #16093 merge commit 2e1502f39d8f7357fca35c6c18cc2c0dadcf0da3, merged 2026-08-11T14:50:54Z. gh api repos/OpenHands/OpenHands/compare/2e1502f39d8f7357fca35c6c18cc2c0dadcf0da3...v1.13.0 returns {"status":"ahead","ahead_by":5,"behind_by":0}. v1.13.0 is a non-prerelease GitHub release published 2026-08-13T01:57:00Z.

Operator consequence: Upgrade past v1.13.0 if you run the Windows launcher, and re-audit your own spawn paths for the same shape. No advisory was filed and the demonstrated impact is a launch failure, not a proven injection  --  but a process-spawn helper that lets a caller re-enable shell interpretation of arguments it did not author is a shell-injection surface waiting for the argument to come from somewhere less trusted than a hardcoded version constraint. The maintainers' own framing is that centralizing the guarantee, rather than fixing the one caller, is the point.

## Receipt
- https://github.com/OpenHands/OpenHands/pull/16093
