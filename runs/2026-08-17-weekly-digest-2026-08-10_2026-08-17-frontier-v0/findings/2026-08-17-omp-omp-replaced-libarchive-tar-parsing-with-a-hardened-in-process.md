---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-omp-omp-replaced-libarchive-tar-parsing-with-a-hardened-in-process
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: medium
evidence:
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v17.2.15
    precision: github_release
---
# 2026-08-17-omp-omp-replaced-libarchive-tar-parsing-with-a-hardened-in-process

OMP replaced libarchive tar parsing with a hardened in-process reader.

The changelog entry: "Replaced libarchive-based tar parsing with a hardened, in-process tar reader to prevent crashes and safely handle complex archive structures, symlinks, and sparse metadata." No CVE or GHSA accompanies it, and can1357/oh-my-pi has published no security advisories at all. Naming symlinks and sparse metadata specifically is the signature of archive-extraction path handling, the class that produces path traversal on unpack, but the changelog does not claim a vulnerability and no advisory resolves the question.

Channel: tagged-release. Ancestry: Published GitHub release https://github.com/can1357/oh-my-pi/releases/tag/v17.2.15, published_at 2026-08-12T02:01:24Z, prerelease=false; tag v17.2.15 -> 06aecdd51f07e689e970ceaa180abe2be0c14bbb; npm published 17.2.15 at 2026-08-12T02:04:11Z. Changelog entry pinned at https://github.com/can1357/oh-my-pi/blob/v17.2.15/packages/coding-agent/CHANGELOG.md.

Operator consequence: Upgrade to v17.2.15 or later if anything in your workflow makes OMP read a tar archive it did not produce  --  plugin or marketplace installs, downloaded toolchains, extension packaging. Do not read more into it than the changelog says: this is a hardening entry with no advisory behind it, and I could not establish whether a traversal was reachable. Recorded here because the class matters and the receipt is thin.

## Receipt
- https://github.com/can1357/oh-my-pi/releases/tag/v17.2.15
