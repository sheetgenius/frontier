---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-intel-macos-and-termux-stable-artifacts-become-opt-in-and-were-omitted-from-v0-21
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/5f9b77cce07870e5c0bce2dd42f4ae5d069f3d7e
    precision: commit
  - url: https://api.github.com/repos/NousResearch/hermes-agent/git/tags/ec0f68f50d19dd439ff0ed54b4acc764dadb4e50
    precision: official_docs
  - url: https://hermes-assets.nousresearch.com/releases/tag/rc.15-v0.21.7/release-candidates.json
    precision: github_release
---
# 2026-10-13-hermes-agent-intel-macos-and-termux-stable-artifacts-become-opt-in-and-were-omitted-from-v0-21

Intel macOS and Termux stable artifacts become opt-in and were omitted from v0.21.7. Stable release builds omit Intel macOS desktop and Termux APT unless explicitly requested. The actual rc.15 claim sets includeMacosIntel=false and includeTermux=false; its hashed manifest lists macOS arm64 and Windows artifacts only. The policy leaves APT indexes on the previous release when Termux is not built. Exact October 13 APT and Microsoft Store versions were not recovered.

Channel: tagged-release (first stable v0.21.7). Half: both. Date: 2026-10-11.

Operator consequence: Do not infer platform-version parity from the newest GitHub stable. Intel/Termux users need a checked channel/version; a source install needs its own platform acceptance. Listed Windows artifacts do not prove Store ingestion or successful installation.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/5f9b77cce07870e5c0bce2dd42f4ae5d069f3d7e
- https://api.github.com/repos/NousResearch/hermes-agent/git/tags/ec0f68f50d19dd439ff0ed54b4acc764dadb4e50
- https://hermes-assets.nousresearch.com/releases/tag/rc.15-v0.21.7/release-candidates.json
