---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-agent-zero-carry-forward-acp-defaults-unchanged-at-v2-11-and-v2-12-ssrf-tests-intact-blob-changed-for
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/blob/v2.12/plugins/_a0_acp/default_config.yaml
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.12/tests/test_document_query_plugin.py
    precision: tagged_commit_file
---
# 2026-09-21-agent-zero-carry-forward-acp-defaults-unchanged-at-v2-11-and-v2-12-ssrf-tests-intact-blob-changed-for

Carry-forward: ACP defaults unchanged at v2.11 and v2.12; SSRF tests intact (blob changed for prompt text only). Nothing on either axis. ACP still ships always on, with host write and host exec on by default. The SSRF guard code has not changed since v2.10. The test file changed, but not the SSRF tests.

Channel: tagged-release. Half: defect. Date: 2026-09-09 (newest tag read).

Operator consequence: The parent advice stands for v2.12. Turn ACP off unless you want an editor-hosted endpoint with host write and exec. A tool that pins by blob hash will flag the test file. Those are prompt-assertion edits, not lost coverage.

## Receipt
- https://github.com/agent0ai/agent-zero/blob/v2.12/plugins/_a0_acp/default_config.yaml
- https://github.com/agent0ai/agent-zero/blob/v2.12/tests/test_document_query_plugin.py
