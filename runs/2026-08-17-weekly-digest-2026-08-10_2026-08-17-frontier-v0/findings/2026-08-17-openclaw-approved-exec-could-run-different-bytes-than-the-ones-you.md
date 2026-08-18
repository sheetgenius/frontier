---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openclaw-approved-exec-could-run-different-bytes-than-the-ones-you
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/pull/124858
    precision: merged_pr
---
# 2026-08-17-openclaw-approved-exec-could-run-different-bytes-than-the-ones-you

Approved exec could run different bytes than the ones you approved.

A time-of-check/time-of-use hole in exec approval: an operator could approve a command referencing a script, and the runtime would execute whatever that file contained at spawn time, not the bytes that were summarised in the approval prompt. The PR carries a verified live reproduction on commit 66dc9d1  --  write a script printing BENIGN-ORIGINAL, request execution, rewrite the file to print MUTATED-PAYLOAD-EXECUTED while approval is pending, resolve with allow-once, observe the mutated payload run. Because Codex is the default harness, default installations routed exec approvals through the unbound path. The fix snapshots every mutable executable or script operand before the first policy, lifecycle or operator wait, fails closed on missing/unreadable/unsafe operand topologies, and revalidates canonical real paths and SHA-256 byte identities at the last OpenClaw-owned boundary before spawn. Issue #124738. No GHSA has been published for it.

Channel: main-unreleased. Ancestry: Merge commit ab5611f0be610380fe48803fe4311896ca85806e (PR #124858, merged 2026-08-17T01:26:43Z, base main). compare/v2026.8.1-beta.2...ab5611f0b -> status=diverged, ahead_by=619 (merged after the beta tag was cut, not contained). compare/v2026.7.1-2...ab5611f0b -> diverged, ahead_by=14760. compare/v2026.6.34...ab5611f0b -> diverged, ahead_by=17913. In no tag of any kind.

Operator consequence: Re-audit your approval model now; there is nothing to upgrade to. This is a defect in the meaning of an approval  --  the prompt you read is not a commitment about what executes  --  and it is not in stable, not in extended-stable, and not in the current beta. Until a tag carries it, treat allow-once on any command that references a file on disk as approving the path, not the contents; that matters most where the agent itself can write to the directory the script lives in.

## Receipt
- https://github.com/openclaw/openclaw/pull/124858
