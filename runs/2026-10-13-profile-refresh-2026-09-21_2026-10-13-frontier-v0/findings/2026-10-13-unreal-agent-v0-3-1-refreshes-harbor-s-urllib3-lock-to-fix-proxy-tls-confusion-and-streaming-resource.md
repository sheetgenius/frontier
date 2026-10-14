---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-v0-3-1-refreshes-harbor-s-urllib3-lock-to-fix-proxy-tls-confusion-and-streaming-resource
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/commit/4572c919e6a9802f065b3b6d6e9476aa1ce1f287
    precision: commit
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.2.0/benchmarks/harbor/uv.lock
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/benchmarks/harbor/uv.lock
    precision: tagged_commit_file
  - url: https://github.com/urllib3/urllib3/security/advisories/GHSA-8988-9cw3-xx77
    precision: official_docs
  - url: https://github.com/urllib3/urllib3/security/advisories/GHSA-vxq7-64xx-v4gw
    precision: official_docs
  - url: https://github.com/urllib3/urllib3/security/advisories/GHSA-gh4c-6fx4-qh6g
    precision: official_docs
---
# 2026-10-13-unreal-agent-v0-3-1-refreshes-harbor-s-urllib3-lock-to-fix-proxy-tls-confusion-and-streaming-resource

v0.3.1 refreshes Harbor's urllib3 lock to fix proxy TLS confusion and streaming resource exhaustion. The released Harbor Python lock upgrades urllib3 2.7.0 to 2.8.0. The old version is affected by three advisories published on 2026-09-30. CVE-2026-97687 / GHSA-8988-9cw3-xx77 allows target TLS settings to weaken HTTPS-proxy verification under the documented configurations; an interceptor can impersonate the proxy, and forwarding mode can expose requests or credentials. CONNECT tunneling still has separate target TLS. CVE-2026-97689 / GHSA-vxq7-64xx-v4gw lets an untrusted chunked-response server make the streaming API buffer an unbounded chunk-size line. CVE-2026-97688 / GHSA-gh4c-6fx4-qh6g lets trailing deflate data stall streamed chunked decoding in a CPU loop when the decoded body exceeds a positive finite read size. All three identify 2.8.0 as patched. This dependency is in the benchmark environment, not evidence that the Go runner or its Docker image contains these Python flaws.

Channel: tagged-release. Half: defect. Date: 2026-10-06.

Operator consequence: Refresh the Harbor environment from the v0.3.1 lock. Check HTTPS-proxy configuration and whether benchmark integrations stream untrusted chunked or deflate responses. No vulnerable path was reproduced in Unreal Agent; do not describe the dependency adoption as a demonstrated harness exploit or a Go runtime fix.

## Receipt
- https://github.com/unreallabsai/unreal-agent/commit/4572c919e6a9802f065b3b6d6e9476aa1ce1f287
- https://github.com/unreallabsai/unreal-agent/blob/v0.2.0/benchmarks/harbor/uv.lock
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/benchmarks/harbor/uv.lock
- https://github.com/urllib3/urllib3/security/advisories/GHSA-8988-9cw3-xx77
- https://github.com/urllib3/urllib3/security/advisories/GHSA-vxq7-64xx-v4gw
- https://github.com/urllib3/urllib3/security/advisories/GHSA-gh4c-6fx4-qh6g
