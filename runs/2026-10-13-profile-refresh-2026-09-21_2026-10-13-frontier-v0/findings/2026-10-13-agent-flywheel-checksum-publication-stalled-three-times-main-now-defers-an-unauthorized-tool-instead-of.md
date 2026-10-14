---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-checksum-publication-stalled-three-times-main-now-defers-an-unauthorized-tool-instead-of
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/2354efbaa6b355b93a53d6052fcc8f56950893b1
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/400601d2a7ae3894c89fc52cc03b2e20bda16cc9
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/433#issuecomment-6131196991
    precision: official_docs
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/433#issuecomment-6135303881
    precision: official_docs
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/2a595c42b107cdf4ae0a78387847b14221f37d38
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/README.md#L2873-L2886
    precision: tagged_commit_file
---
# 2026-10-13-agent-flywheel-checksum-publication-stalled-three-times-main-now-defers-an-unauthorized-tool-instead-of

Checksum publication stalled three times; main now defers an unauthorized tool instead of every repin. External installer bytes need human authorization before their digest changes; installers in the maintainer namespace can be repinned automatically. The maintainer attributes three fail-closed publication streaks to stale state, a Bun hard-link problem and a pending external review, and reports fleet-wide update failure during the last one. Its completed count was 175, not the intermediate 174 in the fix commit. The October 12 patch leaves an unauthorized tool on its old pin, opens one issue per digest, and publishes other eligible changes. A follow-up binds candidate construction to one observation. The October 13 status comment reports healthy runs on the fixed revisions; this is the maintainer timer's status, not an independent fleet observation.

Channel: main-unreleased. Half: both. Date: 2026-10-12.

Operator consequence: Alert on updater exit 2 and inspect the refused tools. Claude and Codex update paths honor holds; holds are not universal at stable (section 14). A stale tool can remain unavailable even when other repins publish. Human byte review remains deliberate authority, while coupling every repin to one pending review was avoidable serial work. Watch a stable tag containing the deferral and retained timer health, rather than inferring recovery from a merge.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/2354efbaa6b355b93a53d6052fcc8f56950893b1
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/400601d2a7ae3894c89fc52cc03b2e20bda16cc9
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/433#issuecomment-6131196991
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/433#issuecomment-6135303881
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/2a595c42b107cdf4ae0a78387847b14221f37d38
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/README.md#L2873-L2886
