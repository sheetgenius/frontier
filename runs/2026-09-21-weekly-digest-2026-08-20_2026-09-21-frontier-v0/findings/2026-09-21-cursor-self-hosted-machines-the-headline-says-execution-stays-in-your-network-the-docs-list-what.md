---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-cursor-self-hosted-machines-the-headline-says-execution-stays-in-your-network-the-docs-list-what
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20260903052248/https://cursor.com/changelog/self-hosted-machines
    precision: official_docs
  - url: https://cursor.com/docs/cloud-agent/self-hosted.md
    precision: official_docs
---
# 2026-09-21-cursor-self-hosted-machines-the-headline-says-execution-stays-in-your-network-the-docs-list-what

Self-hosted machines: the headline says execution stays in your network; the docs list what leaves. Changelog: cloud agents can run on "My Machines" (one laptop or VM) or team pools (named, auto-scaling, hibernating queues of workers), including on Lambda, Coder, Cloudflare, Daytona, Modal, Namespace, Vercel, and E2B; self-hosted workers get computer use on Linux and Mac. The marketing sentence is that tool execution stays "entirely in your own network." The docs are narrower: the checkout, build cache, and machine-local credentials stay local, but during a run the worker sends Cursor file contents, terminal output, diffs, screenshots, local MCP results, and routing metadata, and uploads artifacts to Cursor-managed S3 (`cloud-agent-artifacts.s3.us-east-1.amazonaws.com`, blockable). Workers start with `agent worker start` from the CLI and hold an outbound HTTPS connection; no inbound ports.

Channel: docs-only. Half: both. Date: 2026-09-02.

Operator consequence: Test before adopting for a data-residency reason: the agent loop and model calls remain in Cursor's cloud, and anything the agent reads or prints leaves. Block the artifact bucket if screenshots or logs are sensitive. The CLI is the worker runtime here, so a CLI upgrade is also a worker upgrade.

## Receipt
- https://web.archive.org/web/20260903052248/https://cursor.com/changelog/self-hosted-machines
- https://cursor.com/docs/cloud-agent/self-hosted.md
