---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-temporal-agent-harness-release-locks-match-19-dependency-advisories-the-root-lock-update-is-main-only
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/commit/f50412138cab078f19c54e683e7ba5e529323f17
    precision: commit
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/uv.lock
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/f50412138cab078f19c54e683e7ba5e529323f17/uv.lock
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/nexus/mcp/uv.lock
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/pyproject.toml
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/nexus/mcp/pyproject.toml
    precision: tagged_commit_file
  - url: https://github.com/advisories/GHSA-x33g-cr3x-6449
    precision: official_docs
  - url: https://github.com/advisories/GHSA-gvp8-978c-rx2q
    precision: official_docs
  - url: https://github.com/advisories/GHSA-42vr-xj54-vc7v
    precision: official_docs
  - url: https://github.com/advisories/GHSA-jwrc-g2q2-pq5p
    precision: official_docs
  - url: https://github.com/advisories/GHSA-9j54-fg26-wv3r
    precision: official_docs
  - url: https://github.com/advisories/GHSA-8wjv-2p76-3863
    precision: official_docs
  - url: https://github.com/advisories/GHSA-hxm8-2xgr-2p9m
    precision: official_docs
  - url: https://github.com/advisories/GHSA-ffc3-869f-jxw9
    precision: official_docs
  - url: https://github.com/advisories/GHSA-w2cx-738m-mc7w
    precision: official_docs
  - url: https://github.com/advisories/GHSA-9v7f-9g4p-ffgj
    precision: official_docs
  - url: https://github.com/advisories/GHSA-p4g4-x82p-q773
    precision: official_docs
  - url: https://github.com/advisories/GHSA-r6x4-923q-g947
    precision: official_docs
  - url: https://github.com/advisories/GHSA-2gx3-rcp4-g85q
    precision: official_docs
  - url: https://github.com/advisories/GHSA-w6j9-cwv2-h6wq
    precision: official_docs
  - url: https://github.com/advisories/GHSA-gh4c-6fx4-qh6g
    precision: official_docs
  - url: https://github.com/advisories/GHSA-vxq7-64xx-v4gw
    precision: official_docs
  - url: https://github.com/advisories/GHSA-8988-9cw3-xx77
    precision: official_docs
  - url: https://github.com/advisories/GHSA-g6x2-hccm-hh4m
    precision: official_docs
  - url: https://github.com/advisories/GHSA-54p9-h82j-f925
    precision: official_docs
  - url: https://github.com/jpadilla/pyjwt/compare/0c87c8c8b1a74cac99ad8115f3050efcb7fbed35...1d41a6478e1562e68ff667fcd703356acf085f68
    precision: git_compare
---
# 2026-10-13-temporal-agent-harness-release-locks-match-19-dependency-advisories-the-root-lock-update-is-main-only

Release locks match 19 dependency advisories; the root-lock update is main-only. No direct-package advisory was found in the checked surfaces, but 19 in-window advisories match four release-root-lock versions: PyJWT 2.13.0, urllib3 2.7.0, multidict 6.7.1 and Werkzeug 3.1.8. The main-only rollup moves those to 2.15.0, 2.8.0, 6.9.1 and 3.1.9 respectively. The separate Nexus lock still has PyJWT 2.13.0 and urllib3 2.7.0 at M. PyJWT issues conditionally permit token forgery/claim or raw-token revocation bypass, request-header/key substitution, or authentication denial of service; urllib3 issues allow CPU loops, memory exhaustion or HTTPS-proxy impersonation under affected streaming/proxy use. multidict leaks memory in specific C-extension items-view operations; Werkzeug can hang Windows file reads and is development moto/server tooling here, not the FastAPI server. PyJWT is transitive via optional mcp environments; other affected packages also depend on selected extras/dev dependencies. The wheel carries no uv.lock and fresh resolution can differ. These are dependency-version matches, not 19 demonstrated harness vulnerabilities; relevant transitive call paths and deployment configuration remain unproven.

Channel: mixed (affected lock versions at preview T5/T6; root-lock update main-unreleased). Half: defect. Date: 2026-10-08 (rollup; disclosures 2026-09-29..2026-10-05).

Operator consequence: Inventory installed versions and affected JWT/JWKS, streaming/proxy, items-view and Windows development-server call paths. Refresh root and Nexus locks separately where used; upgrading to an unpublished root lock does not fix Nexus. Prefer the checked fixed versions while preserving interpreter/replay pins. GHSA-gvp8-978c-rx2q has no first_patched_version field; its fix is separately contained in PyJWT 2.15.0 (pinned comparison ahead 41, behind 0). The following table records each disclosure, impact and fixed-version boundary without claiming harness exploitation.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/commit/f50412138cab078f19c54e683e7ba5e529323f17
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/uv.lock
- https://github.com/temporal-community/temporal-agent-harness/blob/f50412138cab078f19c54e683e7ba5e529323f17/uv.lock
- https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/nexus/mcp/uv.lock
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/pyproject.toml
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/nexus/mcp/pyproject.toml
- https://github.com/advisories/GHSA-x33g-cr3x-6449
- https://github.com/advisories/GHSA-gvp8-978c-rx2q
- https://github.com/advisories/GHSA-42vr-xj54-vc7v
- https://github.com/advisories/GHSA-jwrc-g2q2-pq5p
- https://github.com/advisories/GHSA-9j54-fg26-wv3r
- https://github.com/advisories/GHSA-8wjv-2p76-3863
- https://github.com/advisories/GHSA-hxm8-2xgr-2p9m
- https://github.com/advisories/GHSA-ffc3-869f-jxw9
- https://github.com/advisories/GHSA-w2cx-738m-mc7w
- https://github.com/advisories/GHSA-9v7f-9g4p-ffgj
- https://github.com/advisories/GHSA-p4g4-x82p-q773
- https://github.com/advisories/GHSA-r6x4-923q-g947
- https://github.com/advisories/GHSA-2gx3-rcp4-g85q
- https://github.com/advisories/GHSA-w6j9-cwv2-h6wq
- https://github.com/advisories/GHSA-gh4c-6fx4-qh6g
- https://github.com/advisories/GHSA-vxq7-64xx-v4gw
- https://github.com/advisories/GHSA-8988-9cw3-xx77
- https://github.com/advisories/GHSA-g6x2-hccm-hh4m
- https://github.com/advisories/GHSA-54p9-h82j-f925
- https://github.com/jpadilla/pyjwt/compare/0c87c8c8b1a74cac99ad8115f3050efcb7fbed35...1d41a6478e1562e68ff667fcd703356acf085f68
