---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-external-memory-calls-can-recover-after-a-stall-and-plugins-get-a-post-compaction-hook
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/b6c8ed0ba5def44e48a42616f1cb1ac0a091494b
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/agent/memory_manager.py#L142-L193
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/commit/35948f22ada767e169d1f1438e8c23208fdf1d8a
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/memory-provider-plugin.md
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-external-memory-calls-can-recover-after-a-stall-and-plugins-get-a-post-compaction-hook

External memory calls can recover after a stall, and plugins get a post-compaction hook. Admission is shared per home/provider separately for external prefetch and background sync/prefetch. Each gate closes after four overdue calls, admits a half-open probe at 60-second intervals, and caps its own in-flight calls at 16. The two gates can retain up to 32 calls per home/provider together. Successful newer calls stop old orphaned calls from making a recovered provider look permanently dead. Python cannot cancel the underlying stuck thread, so the ceiling is a resource bound rather than cancellation. Turn synchronization runs on a bounded background worker path. The new `post_compaction` plugin hook gives memory/integration code a supported point after compression rather than requiring core monkey-patching.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Test provider timeout, recovery, and shutdown behavior with the specific memory plugin before long unattended runs. A successful chat answer does not prove its external memory sync finished. The change reduces manual restarts and gives integrations a durable extension point; it does not establish better recall, autonomous self-improvement, or that the reported Holographic update incident is fixed.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/b6c8ed0ba5def44e48a42616f1cb1ac0a091494b
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/agent/memory_manager.py#L142-L193
- https://github.com/NousResearch/hermes-agent/commit/35948f22ada767e169d1f1438e8c23208fdf1d8a
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/memory-provider-plugin.md
