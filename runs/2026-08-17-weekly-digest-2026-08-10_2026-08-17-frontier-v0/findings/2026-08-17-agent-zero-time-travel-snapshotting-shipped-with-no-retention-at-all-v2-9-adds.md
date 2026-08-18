---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-agent-zero-time-travel-snapshotting-shipped-with-no-retention-at-all-v2-9-adds
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/c42dffa54e046bbbfa339632c1274678395afdf9
    precision: commit
---
# 2026-08-17-agent-zero-time-travel-snapshotting-shipped-with-no-retention-at-all-v2-9-adds

Time Travel snapshotting shipped with no retention at all; v2.9 adds sweeps after a live instance accumulated 518 shadow repos and 12 GB.

The commit message is an unusually candid defect report from the maintainers. Time Travel keeps a hidden git repository per workspace under /a0/usr/.time_travel/workspaces/<id>/repo.git and snapshots on every file change, but shipped no retention whatsoever: chat_remove never touched .time_travel, there was no delete or prune endpoint in the API or web UI, and any workspace whose 'git add' exceeded GIT_TIMEOUT_SECONDS stranded repo.git/index.lock, failing every subsequent snapshot with 'index.lock: File exists'. Quoting the commit directly: 'Observed on a live instance: 518 shadow repositories / 12 GB, most belonging to long-deleted chats, plus a permanently wedged workspace.' v2.9 adds a throttled retention sweep driven from job_loop, running in a worker thread off the event loop, at most one in flight, default every 6 hours: orphan removal after a grace window (live workspace paths are forward-enumerated and hashed with the existing workspace_id_for derivation), optional age-out via retention_max_age_days (default 0 = keep forever), stale index.lock removal past retention_stale_lock_minutes, and set-aside of corrupt repos. Deletion is refused for any path outside the shadow root. Evidence is durable: retention.json with running totals and last-sweep stamp, retention.log with one JSON line per sweep naming everything removed, tail-capped at 1000.

Channel: tagged-release. Ancestry: gh api repos/agent0ai/agent-zero/compare/c42dffa54e...v2.9 -> status=ahead, ahead=7, behind=0, so the commit is an ancestor of the stable tag v2.9 (prerelease=false). Merged as PR #1775 on 2026-08-12T03:16:25Z, before the tag was created at 2026-08-12T13:03:44Z.

Operator consequence: If you run Agent Zero with Time Travel enabled, go look at the disk now rather than waiting for the upgrade to fix it, and check for a wedged workspace: a stranded index.lock means that workspace has been silently failing to snapshot for however long, so your time-travel history for it is a lie of omission, not a gap you would have noticed. After upgrading to v2.9, note the default is conservative on purpose (retention_max_age_days=0 keeps live history forever) so only orphans and stale locks are swept unless you opt in. The general lesson for anyone giving an agent a persistent workcell: the snapshot mechanism arrived long before the cleanup mechanism, and the maintainers found out from a production instance, not a test. Audit your own agent-side persistence for the same asymmetry.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/c42dffa54e046bbbfa339632c1274678395afdf9
