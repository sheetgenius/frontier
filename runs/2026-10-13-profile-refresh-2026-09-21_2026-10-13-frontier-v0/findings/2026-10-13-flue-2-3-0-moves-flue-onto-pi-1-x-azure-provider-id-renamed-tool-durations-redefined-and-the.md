---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-2-3-0-moves-flue-onto-pi-1-x-azure-provider-id-renamed-tool-durations-redefined-and-the
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L5-L7
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/package.json#L87-L88
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/runtime/providers.ts#L90-L100
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/releases/tag/v1.0.3
    precision: github_release
  - url: https://github.com/earendil-works/pi/releases/tag/v1.1.0
    precision: github_release
  - url: https://github.com/earendil-works/pi/releases/tag/v1.2.0
    precision: github_release
---
# 2026-10-13-flue-2-3-0-moves-flue-onto-pi-1-x-azure-provider-id-renamed-tool-durations-redefined-and-the

2.3.0 moves Flue onto Pi 1.x: Azure provider id renamed, tool durations redefined, and the Pi dependency now floats across minors. Flue gets model resolution and its agent loop from Pi, which this watchlist profiles separately as `pi-coding-agent`. 2.3.0 sets the minimum Pi version to 1.1.0. Claude Sonnet 5.5, Claude Haiku 5.5 and GPT-6.1 Sol now resolve with no configuration. Pi renamed the Azure provider from `azure-openai-responses` to `azure` in its 1.0.3 patch (2026-10-05); Flue users meet it in 2.3.0, the first Flue release on Pi 1.x. It breaks old model specifiers and `providers` config entries; the `AZURE_OPENAI_*` variables are unchanged. Tool and turn `durationMs` now come from Pi's monotonic timing, so a tool's duration no longer includes Flue's hooks or result storage. The dependency range widened: `^0.87.1` admitted only 0.87.x patches, while `^1.1.0` admits any 1.x, so a fresh install at the window close can pair Flue 2.3.0 with Pi 1.2.0. That pair was not behaviorally tested in this research. Pi 1.2.0's Fixed list changes pi-ai behavior too: retry once with preferred tools non-strict when Anthropic rejects the strict tool set, retry an upstream-provider error as transient, and apply the Mistral timeout only while waiting for response headers. 2.3.0 also deletes Flue's own workaround for AI Gateway Claude ids because Pi fixed its catalog upstream (section 6). That is scaffolding removed once the layer underneath caught up.

Channel: tagged-release. Half: both. Date: 2026-10-12.

Operator consequence: Azure users: rename specifiers and config entries to `azure` before upgrading, or the model will not resolve. Dashboards that track tool latency will show a step down at 2.3.0 that is a change of definition, not a speedup. Lock pi-ai and pi-agent-core at 1.1.0 through a lockfile or overrides if you want the declared minimum pair. A patch-only range would not guarantee compatibility either: Pi's Azure rename already broke provider ids in a patch. Fresh installs may pick up Pi's provider fixes without any new Flue release, so record and test the resolved pair. For this reason, 2.0.3 moved the Cloudflare `agents` range inside `@flue/vite`; Flue's core dependency now floats across a broader line.

## Receipt
- https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L5-L7
- https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/package.json#L87-L88
- https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/runtime/providers.ts#L90-L100
- https://github.com/earendil-works/pi/releases/tag/v1.0.3
- https://github.com/earendil-works/pi/releases/tag/v1.1.0
- https://github.com/earendil-works/pi/releases/tag/v1.2.0
