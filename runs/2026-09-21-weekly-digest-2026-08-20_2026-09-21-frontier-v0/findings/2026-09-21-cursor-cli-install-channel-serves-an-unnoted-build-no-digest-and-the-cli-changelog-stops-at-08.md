---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-cursor-cli-install-channel-serves-an-unnoted-build-no-digest-and-the-cli-changelog-stops-at-08
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/install
    precision: official_docs
  - url: https://cursor.com/docs/cli/changelog
    precision: official_docs
---
# 2026-09-21-cursor-cli-install-channel-serves-an-unnoted-build-no-digest-and-the-cli-changelog-stops-at-08

CLI: install channel serves an unnoted build; no digest, and the CLI changelog stops at 08-26. The CLI changelog records one in-window release (08-26: `agent persist` sessions that survive disconnect, `/detach`, `agent persist attach|list|stop`; self-hosted workers share the live desktop with `--computer-use --share-desktop`; `agent worker controller` wakes hibernated workers via a `--spawn` hook). The build the install script hands out at window close is dated 2026-09-18, 23 days newer than any CLI note. The script pipes `curl | tar` with no checksum, then symlinks `~/.local/bin/agent` and `~/.local/bin/cursor-agent` to the versioned directory.

Channel: tagged-release (install-script build) vs docs-only (CLI changelog). Half: defect. Date: build 2026-09-18 (tarball Last-Modified 2026-09-18T22:42:21Z); last CLI changelog entry 2026-08-26.

Operator consequence: Answers the contract's open question: there is a pinable version string (`2026.09.18-9a7762b`, also the directory name under `~/.local/share/cursor-agent/versions/`) and a stable download URL per version, but no vendor digest. To pin, download the versioned URL yourself and record your own sha256. Do not assume the CLI changelog describes what `curl | bash` installed today; `agent --version` plus the resolved URL is the only honest ship record.

## Receipt
- https://cursor.com/install
- https://cursor.com/docs/cli/changelog
