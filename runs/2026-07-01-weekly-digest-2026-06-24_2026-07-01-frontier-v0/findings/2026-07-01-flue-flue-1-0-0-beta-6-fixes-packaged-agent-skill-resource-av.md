---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-flue-flue-1-0-0-beta-6-fixes-packaged-agent-skill-resource-av
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: medium
evidence:
  - url: https://github.com/withastro/flue/blob/v1.0.0-beta.6/CHANGELOG.md
    precision: official_changelog
---
# 2026-07-01-flue-flue-1-0-0-beta-6-fixes-packaged-agent-skill-resource-av

flue 1.0.0-beta.6 fixes Packaged Agent Skill resource availability and improves interrupted-stream recovery; relaxes @flue/react compatibility requirements. (channel: preview-or-beta, 2026-06-25). Operator consequence: Touches the skill system (a high-signal Flue primitive): packaged Agent Skill resources are now correctly available, and interrupted streams recover via compact, linearly growing segments. The relaxed @flue/react compatibility requirement matters for anyone pinning the React package against a beta core. Worth watching for skill-system stabilization; low urgency. Tag commit b7b1449. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/withastro/flue/blob/v1.0.0-beta.6/CHANGELOG.md
