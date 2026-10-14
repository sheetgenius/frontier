---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-temporal-agent-harness-main-after-0-6-0-8-commits-unreleased-code-mode-gets-a-virtual-filesystem-and-agent-memory
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/compare/0.6.0...091c8756126ca9684e0b8fe57d82d9122c29f517
    precision: git_compare
  - url: https://github.com/temporal-community/temporal-agent-harness/pull/169
    precision: merged_pr
  - url: https://github.com/temporal-community/temporal-agent-harness/pull/171
    precision: merged_pr
  - url: https://github.com/temporal-community/temporal-agent-harness/pull/179
    precision: merged_pr
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/temporal_agent_harness/web/app.py#L336-L353
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/temporal_agent_harness/web/file_view.py#L61-L74
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/temporal_agent_harness/web/file_view.py#L112-L133
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/temporal_agent_harness/harness/code_mode/activity_fs.py#L29-L30
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/README.md#L603-L626
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/examples/code_mode_memory/local_disk.py#L1-L16
    precision: tagged_commit_file
---
# 2026-10-13-temporal-agent-harness-main-after-0-6-0-8-commits-unreleased-code-mode-gets-a-virtual-filesystem-and-agent-memory

Main after 0.6.0 (8 commits, unreleased): Code Mode gets a virtual filesystem and agent memory, and the open server gains a file viewer that reads with whatever config the caller sends. #169 lets Code Mode scripts read and write mounted filesystems with `open()` and `pathlib`. Each file operation runs through `run_tool` as an `fs_*` tool, so it is approval-gated and evented, and nothing touches a worker's disk unless the backend does. #170 declares mounts on the agent class and adds `POST /api/files/view`, which runs a filesystem's `view` activity as a standalone activity on the task queue named in the request, built from the config sent in the request. #171 keeps agent memory as Open Knowledge Format bundles and adds `POST /api/files/okf-graph`. Neither request carries a session and the server has no identity, so the only check is each filesystem's own config validation. The code and README say as much (treat the config "as untrusted input"), and the README's example binds a team's bucket with `BucketConfig(prefix=data.team)`; a filesystem can validate a prefix's shape but cannot know whether the caller belongs to that team. The memory example accepts any directory under its `memories/` folder for the same reason. #179 adds a `typesafe` extra, distinct from the existing Jev evaluator, over Temporal's `temporalio-typesafe` (PyPI 0.0.1, 2026-10-09, from the official temporalio/ai-integrations repo, labeled Pre-release), and `pyyaml` joins the base dependencies.

Channel: main-unreleased. Half: both. Date: 2026-10-12 (window of changes 2026-10-04..2026-10-12).

Operator consequence: None of these changes is in a published harness wheel. If the viewer ships as it stands, the open server from section 1 can read a registered activity-backed store when the supplied configuration and worker permissions permit it. Watch the next tag for authentication, a session binding on viewer requests, or a viewer limited to mounts a session declared. Because `remember` allow-lists by tool name, an "always" on an `fs_*` tool would cover that operation on every mount while the tool name remains allowed.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/compare/0.6.0...091c8756126ca9684e0b8fe57d82d9122c29f517
- https://github.com/temporal-community/temporal-agent-harness/pull/169
- https://github.com/temporal-community/temporal-agent-harness/pull/171
- https://github.com/temporal-community/temporal-agent-harness/pull/179
- https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/temporal_agent_harness/web/app.py#L336-L353
- https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/temporal_agent_harness/web/file_view.py#L61-L74
- https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/temporal_agent_harness/web/file_view.py#L112-L133
- https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/temporal_agent_harness/harness/code_mode/activity_fs.py#L29-L30
- https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/README.md#L603-L626
- https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/examples/code_mode_memory/local_disk.py#L1-L16
