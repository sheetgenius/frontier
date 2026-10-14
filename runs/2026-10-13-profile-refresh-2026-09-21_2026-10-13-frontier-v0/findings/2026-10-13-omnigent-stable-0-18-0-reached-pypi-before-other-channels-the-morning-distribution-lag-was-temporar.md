---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-stable-0-18-0-reached-pypi-before-other-channels-the-morning-distribution-lag-was-temporar
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://pypi.org/project/omnigent/0.18.0/
    precision: package_registry
  - url: https://pypi.org/project/omnigent/0.15.0rc1/
    precision: package_registry
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.18.0
    precision: github_release
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/pyproject.toml#L11
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/scripts/install_oss.sh#L487-L517
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/cli.py#L5760-L5770
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent-site/blob/20bcbd3abd9876a3d23686a036959a9679accad6/app/quickstart/install/page.mdx
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/deploy/docker/docker-compose.yaml#L41-L55
    precision: tagged_commit_file
  - url: https://ghcr.io/v2/omnigent-ai/omnigent-server/manifests/sha256:d8c6c1690560309f002b03684e88e8c4ff8213e38a35a06d7eccc821b3b57b11
    precision: official_docs
  - url: https://github.com/omnigent-ai/homebrew-tap/blob/c6b6ec571d2a660e5a5106319ef1e212d7650de2/Formula/omnigent.rb#L24-L29
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/homebrew-tap/commit/c6b6ec571d2a660e5a5106319ef1e212d7650de2
    precision: commit
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/web/electron/package.json#L2-L16
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/web/electron/src/server_manager.js
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/commit/6f3c365299ad82f73da64001b0bf9e0d3f12c1ca
    precision: commit
---
# 2026-10-13-omnigent-stable-0-18-0-reached-pypi-before-other-channels-the-morning-distribution-lag-was-temporar

Stable 0.18.0 reached PyPI before other channels; the morning distribution lag was temporary. Stable 0.18.0 is available from PyPI; pin it with `uv tool install omnigent==0.18.0` or `pip install omnigent==0.18.0` on Python >=3.12. Ordinary installs and the installer use PyPI, which also carries 0.15.0rc1; nightly CLI installs use git instead, while GHCR has nightly images. The initial researcher reported Docker latest and Homebrew at 0.17.0 at 09:23 to 09:42 UTC on October 13. Homebrew's 0.18.0 formula landed at 13:30:05Z. The October 14 crosscheck found GHCR latest and v0.18.0 at the same digest, with images created the previous evening, but cannot reconstruct when either tag was promoted. The October 13 nightly predates the security fixes. Desktop 0.17.2 launches the installed CLI and is a separate version train. A later main commit diagnoses the image-job failure (section 19).

Channel: tagged-release. Half: both. Date: 2026-10-13; original observation 09:23 to 09:42 UTC, registry crosscheck 2026-10-14.

Operator consequence: Install or upgrade the CLI to exact 0.18.0 and check what runs on every host. Docker compose defaults to latest, so verify the running image and fixed source rather than treating a channel name or desktop version as proof. A local build of the v0.18.0 tag is a supported source path, not a build tested here. Do not repeat the morning GHCR/Homebrew warning as a current condition, and do not date tag promotion from an image config's creation time. Prefer stable 0.18.0 over the October 13 nightly for this dated posture.

## Receipt
- https://pypi.org/project/omnigent/0.18.0/
- https://pypi.org/project/omnigent/0.15.0rc1/
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.18.0
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/pyproject.toml#L11
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/scripts/install_oss.sh#L487-L517
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/cli.py#L5760-L5770
- https://github.com/omnigent-ai/omnigent-site/blob/20bcbd3abd9876a3d23686a036959a9679accad6/app/quickstart/install/page.mdx
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/deploy/docker/docker-compose.yaml#L41-L55
- https://ghcr.io/v2/omnigent-ai/omnigent-server/manifests/sha256:d8c6c1690560309f002b03684e88e8c4ff8213e38a35a06d7eccc821b3b57b11
- https://github.com/omnigent-ai/homebrew-tap/blob/c6b6ec571d2a660e5a5106319ef1e212d7650de2/Formula/omnigent.rb#L24-L29
- https://github.com/omnigent-ai/homebrew-tap/commit/c6b6ec571d2a660e5a5106319ef1e212d7650de2
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/web/electron/package.json#L2-L16
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/web/electron/src/server_manager.js
- https://github.com/omnigent-ai/omnigent/commit/6f3c365299ad82f73da64001b0bf9e0d3f12c1ca
