---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-framework-v2-14-cli-v2-14-and-launcher-v1-9-are-the-stable-install-set
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/releases/tag/v2.14
    precision: github_release
  - url: https://github.com/agent0ai/a0-connector/releases/tag/v2.14
    precision: github_release
  - url: https://github.com/agent0ai/a0-launcher/releases/tag/v1.9
    precision: github_release
  - url: https://github.com/agent0ai/agent-zero/compare/v2.13...v2.14
    precision: git_compare
  - url: https://github.com/agent0ai/a0-connector/compare/v2.13...v2.14
    precision: git_compare
  - url: https://github.com/agent0ai/a0-launcher/compare/v1.8...v1.9
    precision: git_compare
  - url: https://hub.docker.com/v2/repositories/agent0ai/agent-zero/tags/v2.14
    precision: official_docs
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/docs/setup/installation.md#L71-L79
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_acp/default_config.yaml#L1-L11
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/acp.py#L330-L338
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/config.py#L33-L48
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/helpers/file_browser.py#L40-L99
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/remote_files.py#L178-L197
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_document_query/helpers/fetch.py#L124-L149
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/network.py#L75-L96
    precision: tagged_commit_file
---
# 2026-10-13-agent-zero-framework-v2-14-cli-v2-14-and-launcher-v1-9-are-the-stable-install-set

Framework v2.14, CLI v2.14 and Launcher v1.9 are the stable install set. The harvest missed the final day's stable releases. The dated framework image is agent0ai/agent-zero:v2.14, observed digest sha256:b0c9763df7b8c4c5ddbdac9c101e8f84de8b7cdf9185203e446e2d7d8ebf2f1c; latest matched that digest when checked. CLI uses the official repository installer/a0 update; Launcher provides AppImage, DMG and EXE assets. No new npm/PyPI distribution route was established. Current defaults still distinguish interactive CLI exec/Computer Use off from ACP connection host read-write and exec on. ACP requires an editor/CLI connection. WebUI host-file access spans connected CLIs, checks live grants per operation, and writes require write_enabled; the CLI confines paths to its launch root by realpath/commonpath. The document-query public-address validation still exists at the inspected fetch call site.

Channel: tagged-release. Half: both. Date: 2026-10-13.

Operator consequence: Use the pinned v2.14 image and upgrade both host companions. Choose a narrow CLI launch directory, inspect ACP host grants before connecting an editor, and limit who can use the WebUI credentials. Do not describe an enabled ACP plugin as proof of a public unauthenticated service. Treat source checks as posture, with live grant/containment and SSRF testing still outstanding.

## Receipt
- https://github.com/agent0ai/agent-zero/releases/tag/v2.14
- https://github.com/agent0ai/a0-connector/releases/tag/v2.14
- https://github.com/agent0ai/a0-launcher/releases/tag/v1.9
- https://github.com/agent0ai/agent-zero/compare/v2.13...v2.14
- https://github.com/agent0ai/a0-connector/compare/v2.13...v2.14
- https://github.com/agent0ai/a0-launcher/compare/v1.8...v1.9
- https://hub.docker.com/v2/repositories/agent0ai/agent-zero/tags/v2.14
- https://github.com/agent0ai/agent-zero/blob/v2.14/docs/setup/installation.md#L71-L79
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_acp/default_config.yaml#L1-L11
- https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/acp.py#L330-L338
- https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/config.py#L33-L48
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/helpers/file_browser.py#L40-L99
- https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/remote_files.py#L178-L197
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_document_query/helpers/fetch.py#L124-L149
- https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/network.py#L75-L96
