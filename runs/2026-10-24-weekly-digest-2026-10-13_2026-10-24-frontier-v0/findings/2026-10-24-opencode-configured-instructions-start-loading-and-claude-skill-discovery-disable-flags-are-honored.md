---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-configured-instructions-start-loading-and-claude-skill-discovery-disable-flags-are-honored
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/commit/1e63a3bb73713ccaddd2c527e372ac79f2a72e4c
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/775d1d0d7138fd9b4de455186ff2c1b1e2505a3b
    precision: commit
---
# 2026-10-24-opencode-configured-instructions-start-loading-and-claude-skill-discovery-disable-flags-are-honored

Configured instructions start loading, and Claude skill-discovery disable flags are honored. [Configured instruction files, globs and URLs are loaded](https://github.com/anomalyco/opencode/commit/1e63a3bb73713ccaddd2c527e372ac79f2a72e4c). [OPENCODE_DISABLE_CLAUDE_CODE and OPENCODE_DISABLE_CLAUDE_CODE_SKILLS gate .claude skill roots](https://github.com/anomalyco/opencode/commit/775d1d0d7138fd9b4de455186ff2c1b1e2505a3b). Both first reach v2.0.30, absent from v2.0.29. The latter does not disable .agents roots and is separate from the absence of a CLAUDE.md instruction fallback.

Channel: tagged-release. Half: both. Date: 2026-10-15.

Operator consequence: Test one configured instruction and one disabled compatibility skill root after upgrading the server. For remote instruction URLs, the source keeps the last good copy or skips an unavailable URL; do not assume a failed fetch halts all work. This changes which instructions actually reach model context.

## Receipt
- https://github.com/anomalyco/opencode/commit/1e63a3bb73713ccaddd2c527e372ac79f2a72e4c
- https://github.com/anomalyco/opencode/commit/775d1d0d7138fd9b4de455186ff2c1b1e2505a3b
