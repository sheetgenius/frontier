---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openclaw-the-workspace-symlink-then-boundary-fix-is-in-stable-not-in-extended-stable
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/blob/v2026.8.1/src/agents/sandbox-paths.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/pull/113405
    precision: merged_pr
---
# 2026-09-21-openclaw-the-workspace-symlink-then-boundary-fix-is-in-stable-not-in-extended-stable

The workspace symlink-then-`..` boundary fix is in stable, not in extended-stable. The profile's standing "fixed in no release on any channel" is false as of 2026-08-31 for latest/beta. It stays true for extended-stable 2026.7.35. The maintainers' own caveat (validation-time check, not race-safe) is unchanged. A related advisory, GHSA-5rx7-34fw-64qg ("Unicode fallback could escape workspaceOnly roots", medium 5.3), is patched in 2026.8.1: on filesystems with canonically equivalent sibling directory names, a missing in-workspace path could be retried against a sibling outside the root. That escape needs no symlink.

Channel: tagged-release (not in extended-stable). Half: defect. Date: 2026-08-31 (first stable); merge 2026-07-27.

Operator consequence: On stable, the workspace root is a validation-time barrier, not a race-safe one. On extended-stable it is still hygiene only. Update the profile's `avoid_for` line to name the channel rather than "every channel".

## Receipt
- https://github.com/openclaw/openclaw/blob/v2026.8.1/src/agents/sandbox-paths.ts
- https://github.com/openclaw/openclaw/pull/113405
