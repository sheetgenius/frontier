---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-reused-worker-checkouts-gain-an-untracked-agent-configuration-check-in-the-inspected-lab
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
  - url: https://cursor.com/docs/cli/changelog#sep-22-2026
    precision: official_docs
  - url: https://cursor.com/docs/cli/changelog#oct-8-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/cloud-agents#sep-28-2026
    precision: official_docs
  - url: https://cursor.com/docs/cloud-agent/self-hosted#what-leaves-your-network
    precision: official_docs
---
# 2026-10-13-cursor-reused-worker-checkouts-gain-an-untracked-agent-configuration-check-in-the-inspected-lab

Reused worker checkouts gain an untracked agent-configuration check in the inspected lab build. The inspected lab artifact refuses reuse of a checkout with untracked agent configuration that the recorded default's tracked-file check misses. This can prevent one agent's leftover instructions steering the next. Separately, hosted notes allow any team member to set or unset a Slack channel's Self-Hosted pool and announce changes. They do not establish that all Slack participants have that authority or that announcement is the only authorization check. Self-hosted docs still list code, terminal output, diffs, screenshots, local MCP results and routing metadata leaving the worker.

Channel: tagged-release (e373342 comparison baseline); preview-or-beta (researcher's d47ca18 lab snapshot); docs-only (hosted Slack and pool notes). Half: both. Date: 2026-10-12 artifact; notes dated 2026-09-22, 2026-09-28 and 2026-10-08.

Operator consequence: For any-repo pools on e373342, clear directories between claims or keep one trust level per pool until you verify the cleanup path in your chosen worker version. Treat a worker upgrade as a CLI upgrade. Review pool placement authority. Do not buy self-hosting as data residency: blocking the artifact bucket does not stop model-bound tool-result transmission.

## Receipt
- https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
- https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz
- https://cursor.com/docs/cli/changelog#sep-22-2026
- https://cursor.com/docs/cli/changelog#oct-8-2026
- https://cursor.com/docs/release-notes/cloud-agents#sep-28-2026
- https://cursor.com/docs/cloud-agent/self-hosted#what-leaves-your-network
