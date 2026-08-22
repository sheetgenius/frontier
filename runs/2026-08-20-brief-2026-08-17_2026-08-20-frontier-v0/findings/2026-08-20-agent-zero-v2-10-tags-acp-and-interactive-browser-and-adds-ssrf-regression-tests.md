---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-agent-zero-v2-10-tags-acp-and-interactive-browser-and-adds-ssrf-regression-tests
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/releases/tag/v2.10
    precision: github_release
  - url: https://github.com/agent0ai/agent-zero/blob/v2.10/tests/test_document_query_plugin.py
    precision: tagged_commit_file
---
# 2026-08-20-agent-zero-v2-10-tags-acp-and-interactive-browser-and-adds-ssrf-regression-tests

Agent Zero v2.10 published 2026-08-19T12:30:34Z, prerelease=false. compare v2.9...v2.10 is 20 commits including "Bundle Agent Zero ACP" and "Add interactive internal Browser viewport". plugins/_a0_acp exists at the tag; plugin.yaml says always_enabled: true and default_config.yaml defaults host_file_access: read_write and host_code_execution: true. Browser runtime shares one Chromium sign-in profile across chats. tests/test_document_query_plugin.py at v2.10 is blob-identical to v2.9 (26bf2a696f785757bed061665543c006bea8aefb) and defines test_fetch_http_blocks_non_public_destinations (http://127.0.0.1/internal.txt) and test_fetch_http_blocks_redirects_to_non_public_destinations. The tests were acquired with the v2.9 restore, not written in v2.10. v2.10 did not drop them. CVE-2026-4308 class remains SSRF.

Channel: tagged-release. Half: both.

Operator consequence: upgrade to v2.10 for ACP and the interactive viewport. Then decide whether ACP should stay on, and do not treat chats as isolated browsers. The SSRF tests survive; they are not a v2.10 addition.

## Receipt
- https://github.com/agent0ai/agent-zero/releases/tag/v2.10
- https://github.com/agent0ai/agent-zero/blob/v2.10/tests/test_document_query_plugin.py
