---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-the-default-cli-has-an-opt-in-mac-desktop-worker-and-a-separate-signed-computer-use-helper
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/computer-use-sidecar/releases/explicit/3.27.0-pre.0/7e5ccee75ca9a9d583fa7a4ee338f40dd7b07198.json
    precision: official_docs
  - url: https://cursor.com/docs/cloud-agent/self-hosted/computer-use
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/agents-window#oct-22-2026
    precision: official_docs
---
# 2026-10-24-cursor-the-default-cli-has-an-opt-in-mac-desktop-worker-and-a-separate-signed-computer-use-helper

The default CLI has an opt-in Mac desktop worker and a separate signed computer-use helper. `--computer-use` is explicitly off by default. On macOS it operates the worker user's signed-in GUI through `Cursor Computer Use`, bundle `co.anysphere.cursor-computer-use`, Apple Team ID `DCNK4UB866`. The inspected installer pins an explicit manifest, verifies downloaded SHA256, then checks Gatekeeper, bundle identity and signing team. That manifest selects helper 0.0.1003, with artifact digest `5faa9d3e3ac96c57104aeba5f8d6cbdacf43794cfde6c47dd598fd3000b14b8e`. Desktop sharing is a separate flag and helper: the artifact implements Darwin sharing, defaulting to view-only, with input control requiring `view_and_control`. Its platform resolver and Darwin provider contradict the current guide's Linux-only sharing statement. Neither helper nor a GUI session was run here. Separately, Agents Window 3.27 reports fixing late turn-end events that released another turn's Computer Use control.

Channel: tagged-release. Half: both. Date: 2026-10-22 artifact; current documentation read 2026-10-24.

Operator consequence: Qualify a dedicated GUI worker with a screenshot and a harmless click, granting permissions to the correct helper. The Mac path reaches the real login desktop; it is not evidence of an isolated per-app desktop. This can replace manual simulator testing, but shifts the scarce human step to granting access and checking the result. `agent worker debug` only confirms helper installation, not those permissions. Do not generalize this worker opt-in to the social claim that the editor automatically invokes Computer Use for every account.

## Receipt
- https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
- https://downloads.cursor.com/computer-use-sidecar/releases/explicit/3.27.0-pre.0/7e5ccee75ca9a9d583fa7a4ee338f40dd7b07198.json
- https://cursor.com/docs/cloud-agent/self-hosted/computer-use
- https://cursor.com/docs/release-notes/agents-window#oct-22-2026
