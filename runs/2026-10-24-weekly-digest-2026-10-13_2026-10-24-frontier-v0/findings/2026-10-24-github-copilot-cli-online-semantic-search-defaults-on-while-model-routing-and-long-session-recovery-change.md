---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-online-semantic-search-defaults-on-while-model-routing-and-long-session-recovery-change
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.98
    precision: github_release
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.100
    precision: github_release
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.101
    precision: github_release
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.102
    precision: github_release
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.103
    precision: github_release
---
# 2026-10-24-github-copilot-cli-online-semantic-search-defaults-on-while-model-routing-and-long-session-recovery-change

Online semantic search defaults on while model routing and long-session recovery change. Semantic code search becomes the online default. Gemini 4 Argon support is versioned in 1.0.98; subsequent releases repair Gemini tool schemas, model switching after custom tool calls, image limits, and redundant request rewriting. Reasoning-only exhausted responses stop looping without progress; deferred tools no longer produce false context exhaustion. Changing effort alone stops forcing compaction, and HydraFusion compacts only when its routed model needs it. Managed Auto selection now works for `-p` and piped stdin in 1.0.102; 1.0.103 resumes sessions under mandatory managed model defaults. 1.0.100 also repairs incomplete or unattributed usage displays after resume.

Channel: tagged-release. Half: both. Date: 2026-10-19.

Operator consequence: Try built-in semantic retrieval before maintaining a parallel discovery layer, measuring useful results and exceptions rather than assuming the default improves every repository. Pin the model and inspect managed overrides when comparing runs. The notes establish recovery and compatibility fixes, not cheaper billing rates or a measured task-quality gain. The live CLI reference still omits Argon from its model table, so its list is not a reliable exhaustive release inventory.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.98
- https://github.com/github/copilot-cli/releases/tag/v1.0.100
- https://github.com/github/copilot-cli/releases/tag/v1.0.101
- https://github.com/github/copilot-cli/releases/tag/v1.0.102
- https://github.com/github/copilot-cli/releases/tag/v1.0.103
