---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-paperclip-v2026-831-0-bad-agent-bearer-tokens-401-instead-of-silently-becoming-the-local-user
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/11589
    precision: merged_pr
---
# 2026-09-21-paperclip-v2026-831-0-bad-agent-bearer-tokens-401-instead-of-silently-becoming-the-local-user

v2026.831.0: bad agent bearer tokens 401 instead of silently becoming the local user. Per the release body, a bearer token that failed verification (expired, terminated agent, wrong company) used to fall through to the anonymous local-user actor; it now returns 401 naming the cause.

Channel: tagged-release. Half: defect (closed). Date: 2026-09-02.

Operator consequence: On v2026.824.x and earlier, an expired or wrong-company agent token could act as the local user rather than fail. Upgrade, then watch for new 401s: any integration that starts failing was relying on the fall-through. Treat pre-831.0 audit attribution of "local user" actions as possibly agent-originated.

## Receipt
- https://github.com/paperclipai/paperclip/pull/11589
