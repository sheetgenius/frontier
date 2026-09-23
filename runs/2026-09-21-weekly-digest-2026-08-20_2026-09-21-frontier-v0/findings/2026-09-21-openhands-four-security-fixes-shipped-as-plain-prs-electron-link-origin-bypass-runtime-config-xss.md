---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openhands-four-security-fixes-shipped-as-plain-prs-electron-link-origin-bypass-runtime-config-xss
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/16961
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17175
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17060
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17134
    precision: merged_pr
---
# 2026-09-21-openhands-four-security-fixes-shipped-as-plain-prs-electron-link-origin-bypass-runtime-config-xss

Four security fixes shipped as plain PRs: Electron link-origin bypass, runtime-config XSS, DOMPurify, and hidden confirmation prompts. Four security fixes shipped as plain PRs: Electron link-origin bypass, runtime-config XSS, DOMPurify, and hidden confirmation prompts

Channel: tagged-release. Half: defect. Date: 2026-09-09 (v1.17.0), 2026-09-16 (v1.19.0).

Operator consequence: Upgrade desktop installs to v1.17.0 or later. Self-hosters who serve Canvas through `scripts/static-server.mjs` should upgrade to v1.19.0 or later. If a proxy or shared browser may have cached a session key from an earlier page, rotate it. On versions before v1.17.0, do not assume "no prompt visible" means the agent is not waiting.

## Receipt
- https://github.com/OpenHands/OpenHands/pull/16961
- https://github.com/OpenHands/OpenHands/pull/17175
- https://github.com/OpenHands/OpenHands/pull/17060
- https://github.com/OpenHands/OpenHands/pull/17134
