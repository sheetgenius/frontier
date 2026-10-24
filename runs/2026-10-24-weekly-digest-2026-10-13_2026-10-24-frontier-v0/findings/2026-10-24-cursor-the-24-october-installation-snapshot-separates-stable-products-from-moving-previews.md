---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-the-24-october-installation-snapshot-separates-stable-products-from-moving-previews
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://www.cursor.com/api/download?platform=darwin-arm64&releaseTrack=stable
    precision: official_docs
  - url: https://cursor.com/install
    precision: official_docs
  - url: https://cursor.com/install?channel=lab
    precision: official_docs
  - url: https://registry.npmjs.org/@cursor%2fsdk/1.0.40
    precision: official_docs
  - url: https://pypi.org/pypi/cursor-sdk/1.0.40/json
    precision: package_registry
  - url: https://registry.npmjs.org/@cursor%2fsdk/1.1.0-beta.0
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/manifest.json
    precision: official_docs
  - url: https://downloads.cursor.com/co/2026.10.24-09-27-15-1b4d3b5/manifest.json
    precision: official_docs
  - url: https://downloads.cursor.com/origin/install.sh
    precision: official_docs
  - url: https://itunes.apple.com/lookup?id=6767085653&country=us
    precision: official_docs
  - url: https://cursor.com/docs/cli/installation
    precision: official_docs
  - url: https://cursor.com/docs/origin/cli
    precision: official_docs
  - url: https://cursor.com/docs/origin
    precision: official_docs
---
# 2026-10-24-cursor-the-24-october-installation-snapshot-separates-stable-products-from-moving-previews

The 24 October installation snapshot separates stable products from moving previews. The read selects IDE 3.27.12 (darwin-arm64 commit df132ffba90dfc15a12e6b8f020ba4e5d026c4be), Agent CLI default 2026.10.22-27dcf5f, npm/PyPI SDK 1.0.40, iOS 1.15.0 and Origin CLI stable 2026.10.23-18-47-36-f52be1e. CLI lab is 2026.10.24-334b38e and npm next is 1.1.0-beta.0, both previews; Origin latest is 2026.10.24-09-27-15-1b4d3b5, not its stable default. Origin hosting/API remain early beta. The CLI installer exposes agent; SDK installs use @cursor/sdk or cursor-sdk. The Agent CLI updater still requires static channel to preserve a pin and streams archives without a digest check. Origin's installer and explicit updater verify unsigned manifest SHA256 and do not automatically install updates.

Channel: tagged-release. Half: both. Date: 2026-10-24 read; release dates in Install today.

Operator consequence: Choose and verify each installation for its task rather than treating a Cursor version as a whole-product pin. Use the IDE download, default agent installer, exact stable SDK package or separate Origin installer; retain versioned archives and hashes. Set Agent CLI channel to static when freezing a worker, and do not run Origin update when freezing Origin. Beta Environments API, opt-in worker access and server-gated Origin commands require separate qualification.

## Receipt
- https://www.cursor.com/api/download?platform=darwin-arm64&releaseTrack=stable
- https://cursor.com/install
- https://cursor.com/install?channel=lab
- https://registry.npmjs.org/@cursor%2fsdk/1.0.40
- https://pypi.org/pypi/cursor-sdk/1.0.40/json
- https://registry.npmjs.org/@cursor%2fsdk/1.1.0-beta.0
- https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
- https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/manifest.json
- https://downloads.cursor.com/co/2026.10.24-09-27-15-1b4d3b5/manifest.json
- https://downloads.cursor.com/origin/install.sh
- https://itunes.apple.com/lookup?id=6767085653&country=us
- https://cursor.com/docs/cli/installation
- https://cursor.com/docs/origin/cli
- https://cursor.com/docs/origin
