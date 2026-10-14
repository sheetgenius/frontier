---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-provider-exclusions-and-saved-model-restoration-stopped-silently-crossing-boundaries-with
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/de256ead9f8286bed702833e330e3debdcbae25d
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/pull/13194
    precision: merged_pr
  - url: https://github.com/can1357/oh-my-pi/commit/8aaf115b8e5f54e6bddeffa969e43e290a1efa01
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/pull/13689
    precision: merged_pr
  - url: https://github.com/can1357/oh-my-pi/commit/dae484818f88254cc72a73c7bde082adcdf7eee5
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/commit/8deae638069c88a8af2ed3b0dce06f12ae0387cb
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/sdk.ts#L854-L864
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/agent-session.ts#L11541-L11550
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L166-L168
    precision: tagged_commit_file
---
# 2026-10-13-omp-provider-exclusions-and-saved-model-restoration-stopped-silently-crossing-boundaries-with

Provider exclusions and saved-model restoration stopped silently crossing boundaries, with an interactive fallback exception. Before v18.4.1, retry chains, advisors and restored models could use disabled providers with reachable credentials. Before v18.6.3, an unrestorable saved model could silently send a resumed transcript to the current model in headless operation. Gateway routing and disabled-provider usage reporting were fixed in v18.6.3 and v18.8.4 respectively. Headless startup and session switching now fail when no saved model can be restored and no explicit override is supplied. Interactive TUI sessions still warn and switch when fallback is permitted and retry.modelFallback is on. A project disabledProviders array can still replace the global array.

Channel: tagged-release. Half: defect. Date: 2026-09-25 (v18.3.1); 2026-09-28 (v18.4.1); 2026-10-06 (v18.6.3); 2026-10-08 (v18.8.4).

Operator consequence: Use 18.10.4 rather than treating the old 18.2.1 floor as sufficient. Inspect retained JSON logs for retry_fallback_applied naming excluded providers and remove unwanted ambient credentials. Set your exclusion and fallback policy in a nested YAML --config overlay above project config. RPC clients should handle restore failure or specify provider/modelId; do not assume the TUI can never change model.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/de256ead9f8286bed702833e330e3debdcbae25d
- https://github.com/can1357/oh-my-pi/pull/13194
- https://github.com/can1357/oh-my-pi/commit/8aaf115b8e5f54e6bddeffa969e43e290a1efa01
- https://github.com/can1357/oh-my-pi/pull/13689
- https://github.com/can1357/oh-my-pi/commit/dae484818f88254cc72a73c7bde082adcdf7eee5
- https://github.com/can1357/oh-my-pi/commit/8deae638069c88a8af2ed3b0dce06f12ae0387cb
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/sdk.ts#L854-L864
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/agent-session.ts#L11541-L11550
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L166-L168
