---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-pi-still-pins-undici-8-10-2-after-new-upstream-advisories
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/package.json
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/http-dispatcher.ts
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/commit/2685de7a1785f1835a9d3d684e16c29789e4eaa8
    precision: commit
  - url: https://github.com/advisories/GHSA-xjj6-f33q-929c
    precision: official_docs
  - url: https://github.com/advisories/GHSA-4qv8-2p9j-2685
    precision: official_docs
  - url: https://github.com/advisories/GHSA-f72v-6w45-q472
    precision: official_docs
---
# 2026-10-24-pi-coding-agent-pi-still-pins-undici-8-10-2-after-new-upstream-advisories

Pi still pins Undici 8.10.2 after new upstream advisories. Three advisories were published by nodejs/undici on 2026-10-15, then added to the GitHub Advisory Database on 2026-10-23. Their affected ranges include Undici 8.10.2; 8.12.2 fixes the 8.x line. For GHSA-xjj6-f33q-929c, a hostile server sends more than five content codings and closes before the body; an orphaned internal stream can emit an unhandled error and terminate Node even when fetch rejection is caught. For GHSA-4qv8-2p9j-2685, a malicious SSE peer can make EventSource retain unbounded parser state and exhaust memory. For GHSA-f72v-6w45-q472, attacker-controlled response bytes can bypass a pinned integrity digest when the application uses an uppercase or mixed-case algorithm token that Undici skips; the attacker need not change the digest metadata. Upstream publication times are 2026-10-15T16:01:26Z, 16:01:04Z and 15:59:40Z respectively; database publication times are 2026-10-23T22:14:31Z, 22:13:29Z and 22:12:57Z. Pi's dispatcher normally installs the npm Undici fetch implementation unless the caller deliberately replaced global fetch. No EventSource use or fetch-integrity option was found in the inspected CLI/MCP source. That distinguishes a present fetch path from unproven reachability of the other two issues. The recent security dependency commit updates development tooling and the Gondolin example, including its separate Undici 6.x dependency; it does not repair the CLI's 8.10.2 pin.

Channel: docs-only. Half: defect. Date: 2026-10-15.

Operator consequence: Audit the actual shipped dependency graph and watch for a tagged runtime bump to a fixed Undici line. Do not infer that a commit titled as a security update fixes every shipped dependency. No exploit, installed-artifact audit or compatibility test of a forced override was run, so this is an affected-dependency finding with bounded code-path evidence, not a demonstrated Pi compromise. Audit each downstream graph separately: Pi Pocket declares and locks a patched Undici 8.12.3 graph, as recorded in section 21. Sharing the Pi 1.4.0 package does not establish the same resolved Undici version.

## Receipt
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/package.json
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/http-dispatcher.ts
- https://github.com/earendil-works/pi/commit/2685de7a1785f1835a9d3d684e16c29789e4eaa8
- https://github.com/advisories/GHSA-xjj6-f33q-929c
- https://github.com/advisories/GHSA-4qv8-2p9j-2685
- https://github.com/advisories/GHSA-f72v-6w45-q472
