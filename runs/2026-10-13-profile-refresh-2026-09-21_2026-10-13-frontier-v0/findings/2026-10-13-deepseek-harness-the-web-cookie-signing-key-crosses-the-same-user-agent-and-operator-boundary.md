---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-the-web-cookie-signing-key-crosses-the-same-user-agent-and-operator-boundary
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/discussions/8678
    precision: public_disclosure_report
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/browser-auth.ts#L125-L177
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/credentials/credentials-local/src/index.ts#L675-L691
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/sandbox/sandbox-local/src/profiles.ts#L16-L35
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/rpc-host.ts#L103-L112
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/interaction/permission-presets/src/index.ts#L252-L273
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-the-web-cookie-signing-key-crosses-the-same-user-agent-and-operator-boundary

The Web cookie signing key crosses the same-user agent and operator boundary. The in-window disclosure prompts a narrower assessment of the existing login. A same-user confined command that can read the credential file and reach the local API has cookie signing material capable of impersonating an operator. Owner-only file permissions distinguish users, not that command from the harness. The authenticated operator can change permission presets and use the OS-user terminal. This is a static trust-path conclusion, not a new CVE, proof of remote pre-auth access, or proof every prompt injection succeeds.

Channel: preview-or-beta; static trust path at both current heads, not a newly introduced implementation. Half: defect. Date: 2026-10-02 (disclosure lead); source checked at rc.2 and alpha.2.

Operator consequence: Do not present loopback plus Workspace Write as independent control-plane protection. Evaluate in an outer disposable environment without valuable host credentials. To close the inner boundary, require source/release evidence that signing material is inaccessible to confined commands, followed by a controlled regression probe; TLS alone does not remove this path.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/discussions/8678
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/browser-auth.ts#L125-L177
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/credentials/credentials-local/src/index.ts#L675-L691
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/sandbox/sandbox-local/src/profiles.ts#L16-L35
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/rpc-host.ts#L103-L112
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/interaction/permission-presets/src/index.ts#L252-L273
