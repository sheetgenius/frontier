---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-deepseek-harness-still-no-non-prerelease-tag-the-project-split-into-an-rc-line-and-an-alpha-line-and-npm
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.5-rc.2
    precision: github_release
---
# 2026-09-21-deepseek-harness-still-no-non-prerelease-tag-the-project-split-into-an-rc-line-and-an-alpha-line-and-npm

Still no non-prerelease tag; the project split into an rc line and an alpha line, and npm latest moved to 0.1.5-rc.2 by hand. There are now two preview streams: rc builds (0.1.5-rc.2 is the newest in window) and faster alpha builds (0.1.6-alpha.2), each with its own dist-tag. `latest` was promoted to 0.1.5-rc.2 outside the publish script, so the registry does not record when. At window close, applying the script's rules to publish times, next resolved to 0.1.5-rc.2 and alpha to 0.1.6-alpha.2 (inferred, not observed on 2026-09-21).

Channel: preview-or-beta. Half: neither (channel). Date: 2026-08-21 to 2026-09-17.

Operator consequence: `npx @deepseek-ai/dsh web` installs 0.1.5-rc.2, still a release candidate. Pin `@0.1.5-rc.2` explicitly; do not float on `@alpha`, which carries the telemetry default in section 4. Nothing here is a stable channel. Re-check next window for a non-prerelease tag and for who moves `latest`.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.5-rc.2
