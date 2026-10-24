---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-undici-advisories-overlap-exact-runtime-pins-including-the-local-web-fetch-implementation
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/nodejs/undici/security/advisories/GHSA-xjj6-f33q-929c
    precision: official_docs
  - url: https://github.com/nodejs/undici/security/advisories/GHSA-4qv8-2p9j-2685
    precision: official_docs
  - url: https://github.com/nodejs/undici/security/advisories/GHSA-f72v-6w45-q472
    precision: official_docs
  - url: https://github.com/advisories/GHSA-xjj6-f33q-929c
    precision: official_docs
  - url: https://github.com/advisories/GHSA-4qv8-2p9j-2685
    precision: official_docs
  - url: https://github.com/advisories/GHSA-f72v-6w45-q472
    precision: official_docs
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-fetch-http/package.json
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-fetch-http/src/network.ts#L192-L238
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/@deepseek-ai%2Fdsh-web-fetch-http/0.2.1-rc.3
    precision: official_docs
---
# 2026-10-24-deepseek-harness-undici-advisories-overlap-exact-runtime-pins-including-the-local-web-fetch-implementation

Undici advisories overlap exact runtime pins, including the local Web Fetch implementation. Upstream published the SRI advisory on 2026-10-15T15:59:40Z, EventSource on 2026-10-15T16:01:04Z, and fetch crash on 2026-10-15T16:01:26Z, before rc.1, rc.2 and rc.3. Their global Advisory Database entries followed on 2026-10-23 at 22:12:57Z, 22:13:29Z and 22:14:31Z respectively. The directly relevant fetch advisory describes a process-terminating unhandled stream error when a malicious server sends excessive content codings and closes early, even when the application catches the fetch rejection. Unbounded EventSource parser state can exhaust memory; skipped integrity checks for mixed-case SRI algorithm tokens can accept a response body that does not match its intended digest. All overlap the 8.11.2 pin; the latter two require call-site conditions not established here. The 8.x fixed version is 8.12.2.

Channel: preview-or-beta. Half: defect. Date: 2026-10-15.

Operator consequence: Treat remote response handling as a dependency review item, not just a URL-allowlist problem. The tagged local fetch path reaches the affected library; public-IP checks and manual redirect handling do not by themselves repair response decoding. Require a resolved dependency update and a bounded regression check before declaring this closed. No process-crash payload was run, and no claim is made that every advisory is exploitable through every DSH route.

## Receipt
- https://github.com/nodejs/undici/security/advisories/GHSA-xjj6-f33q-929c
- https://github.com/nodejs/undici/security/advisories/GHSA-4qv8-2p9j-2685
- https://github.com/nodejs/undici/security/advisories/GHSA-f72v-6w45-q472
- https://github.com/advisories/GHSA-xjj6-f33q-929c
- https://github.com/advisories/GHSA-4qv8-2p9j-2685
- https://github.com/advisories/GHSA-f72v-6w45-q472
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-fetch-http/package.json
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-fetch-http/src/network.ts#L192-L238
- https://registry.npmjs.org/@deepseek-ai%2Fdsh-web-fetch-http/0.2.1-rc.3
